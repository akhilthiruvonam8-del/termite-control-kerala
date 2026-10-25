import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { INITIAL_PROPERTIES } from '../data/veeduxData';
import { updateMetaTags } from '../utils/seo';
import { saveEnquiry } from '../utils/storage';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import {
  fetchPropertiesFromSupabase,
  createPropertyInSupabase,
  updatePropertyApprovalInSupabase,
  isUuid,
  fetchUserBookmarksFromSupabase,
  toggleBookmarkInSupabase,
  submitEnquiryToSupabase,
  fetchUserEnquiriesFromSupabase,
  submitReportToSupabase,
  fetchReportsFromSupabase,
  fetchNotificationsFromSupabase,
  getUserProfile,
  syncUserProfile,
  signOutFromSupabase,
} from '../lib/supabaseService';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Navigation & Active View: 'home' | 'search' | 'details' | 'post' | 'account' | 'admin'
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [activeAccountTab, setActiveAccountTab] = useState('profile'); // 'profile' | 'my-properties' | 'saved' | 'enquiries' | 'messages' | 'notifications' | 'settings'

  // Properties state (dynamic, supports Supabase backend + local fallback)
  const [properties, setProperties] = useState(INITIAL_PROPERTIES);

  // Saved / Bookmarked property IDs
  const [savedIds, setSavedIds] = useState([]);

  // Logged-in User (null initially; populated from active Supabase session or upon Login)
  const [user, setUser] = useState(null);

  // Global Search & Filters
  const [searchFilters, setSearchFilters] = useState({
    query: '',
    purpose: 'all', // 'all' | 'sell' | 'rent'
    district: 'All Kerala',
    city: 'All Cities',
    locality: '',
    propertyType: 'all', // all | land-plots | houses | villas | apartments | flats | commercial | shops | offices | rentals
    minPrice: '',
    maxPrice: '',
    landAreaMin: '',
    landAreaMax: '',
    builtUpMin: '',
    builtUpMax: '',
    bedrooms: 'all',
    bathrooms: 'all',
    furnishedStatus: 'all',
    parking: false,
    verifiedOnly: false,
    directOwnerOnly: false,
    sortBy: 'newest', // 'newest' | 'price-low' | 'price-high'
  });

  // Reported listings for Admin
  const [reportedListings, setReportedListings] = useState([]);

  // Enquiries list
  const [enquiries, setEnquiries] = useState([]);

  // Notifications
  const [notifications, setNotifications] = useState([]);

  // Auth Modal State
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'

  // Auth feedback notification banner ({ type: 'success' | 'error', message: string })
  const [authNotice, setAuthNotice] = useState(null);

  useEffect(() => {
    if (authNotice) {
      const timer = setTimeout(() => {
        setAuthNotice(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [authNotice]);


  // Currently inspected property object
  const activeProperty = properties.find((p) => p.id === selectedPropertyId) || properties[0] || null;

  // ============================================================================
  // Supabase Initial Sync (Properties, Active Session, Bookmarks, Enquiries)
  // ============================================================================
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;

    // 1. Fetch live properties from Supabase
    const loadSupabaseProperties = async () => {
      try {
        const { data, error } = await fetchPropertiesFromSupabase({ includeAll: true });
        if (!error && Array.isArray(data)) {
          setProperties(data);
        }
      } catch (err) {
        console.warn('[VeeduX] Supabase property fetch error, using local fallback:', err);
      }
    };

    loadSupabaseProperties();

    // 2. Sync Supabase Auth Session
    const checkAuthSession = async () => {
      try {
        // Handle PKCE auth code exchange if redirected from Supabase email verification
        if (typeof window !== 'undefined') {
          const urlParams = new URLSearchParams(window.location.search);
          const code = urlParams.get('code');
          if (code) {
            console.info('[VeeduX Auth] Detected PKCE auth code in URL, exchanging for session...');
            const { data: exchangeData, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
            if (exchangeError) {
              console.warn('[VeeduX Auth] exchangeCodeForSession error:', exchangeError.message);
            } else if (exchangeData?.session) {
              console.info('[VeeduX Auth] Code exchanged for session successfully!');
              setAuthNotice({
                type: 'success',
                message: 'Email confirmed successfully! Welcome to VeeduX.',
              });
              window.history.replaceState({}, document.title, window.location.pathname);
            }
          }

          // Handle auth error redirected in URL hash
          if (window.location.hash.includes('error_description=')) {
            const hashParams = new URLSearchParams(window.location.hash.substring(1));
            const errorDesc = hashParams.get('error_description');
            if (errorDesc) {
              setAuthNotice({
                type: 'error',
                message: decodeURIComponent(errorDesc.replace(/\+/g, ' ')),
              });
              window.history.replaceState({}, document.title, window.location.pathname);
            }
          }
        }

        const { data: { session }, error } = await supabase.auth.getSession();
        if (!error && session?.user) {
          const authUser = session.user;
          const { profile } = await getUserProfile(authUser.id);
          const syncedProfile = profile || (await syncUserProfile(authUser));

          setUser({
            id: authUser.id,
            name: syncedProfile?.full_name || authUser.user_metadata?.full_name || 'VeeduX Member',
            phone: syncedProfile?.phone || authUser.phone || authUser.user_metadata?.phone || '',
            email: authUser.email || '',
            role: syncedProfile?.role || 'buyer',
            avatar: syncedProfile?.avatar_url || null,
            memberSince: syncedProfile?.member_since || 'Member since 2024',
            isVerified: Boolean(syncedProfile?.is_verified),
            isDemo: false,
          });

          // Fetch user bookmarks & enquiries
          const { data: userBookmarks } = await fetchUserBookmarksFromSupabase(authUser.id);
          if (userBookmarks && userBookmarks.length > 0) {
            setSavedIds(userBookmarks);
          }

          const { data: userEnquiries } = await fetchUserEnquiriesFromSupabase(authUser.id);
          if (userEnquiries && userEnquiries.length > 0) {
            setEnquiries(userEnquiries);
          }

          const { data: userNotifs } = await fetchNotificationsFromSupabase(authUser.id);
          if (userNotifs && userNotifs.length > 0) {
            setNotifications(userNotifs);
          }
        }
      } catch (err) {
        console.warn('[VeeduX] Supabase session check error:', err);
      }
    };

    checkAuthSession();

    // 3. Listen to Supabase Auth State Changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.info(`[VeeduX Auth] onAuthStateChange event: ${event}`);
      if (session?.user) {
        const authUser = session.user;
        const { profile } = await getUserProfile(authUser.id);
        const syncedProfile = profile || (await syncUserProfile(authUser));

        setUser({
          id: authUser.id,
          name: syncedProfile?.full_name || authUser.user_metadata?.full_name || 'VeeduX Member',
          phone: syncedProfile?.phone || authUser.phone || authUser.user_metadata?.phone || '',
          email: authUser.email || '',
          role: syncedProfile?.role || 'buyer',
          avatar: syncedProfile?.avatar_url || null,
          memberSince: syncedProfile?.member_since || 'Member since 2024',
          isVerified: Boolean(syncedProfile?.is_verified),
          isDemo: false,
        });

        const { data: userBookmarks } = await fetchUserBookmarksFromSupabase(authUser.id);
        if (userBookmarks && userBookmarks.length > 0) setSavedIds(userBookmarks);
      } else if (event === 'SIGNED_OUT' || !session) {
        console.info('[VeeduX Auth] User signed out or session cleared.');
        setUser(null);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  // Helper to sync state from current browser location
  const parseRouteFromLocation = useCallback(() => {
    if (typeof window === 'undefined') return;

    const pathname = window.location.pathname.toLowerCase();
    const searchParams = new URLSearchParams(window.location.search);
    const propIdParam = searchParams.get('property') || searchParams.get('id');

    // 1. Home
    if (pathname === '/' || pathname === '/home' || pathname === '') {
      setCurrentPage('home');
      updateMetaTags({
        title: 'VeeduX — Every Property. One Place. | Kerala Real Estate Marketplace',
        description: 'Find your dream property in Kerala. Buy, sell, or rent land, plots, villas, houses, apartments, and commercial properties across all 14 districts in Kerala.',
      });
      return;
    }

    // 2. Search
    if (pathname.startsWith('/search') || pathname.startsWith('/properties')) {
      setCurrentPage('search');
      updateMetaTags({
        title: 'Search Kerala Properties | Buy & Rent Land, Villas, Flats | VeeduX',
        description: 'Search verified land, houses, flats, and commercial properties in Kochi, Kozhikode, Thrissur, Trivandrum, and all 14 Kerala districts.',
      });
      return;
    }

    // 3. Property Details (/property/:id or /details/:id)
    if (pathname.startsWith('/property/') || pathname.startsWith('/details/')) {
      const parts = pathname.split('/');
      const id = parts[2] || propIdParam;
      if (id) {
        setSelectedPropertyId(id);
      }
      setCurrentPage('details');
      return;
    }

    // 4. Post Property (/post or /sell or /post-property)
    if (pathname.startsWith('/post') || pathname.startsWith('/sell')) {
      setCurrentPage('post');
      updateMetaTags({
        title: 'Post Property Free in Kerala | Sell & Rent Houses, Land | VeeduX',
        description: 'List your Kerala property for free on VeeduX. Connect directly with genuine verified buyers and NRI investors.',
      });
      return;
    }

    // 5. Saved Properties
    if (pathname.startsWith('/saved') || pathname.startsWith('/favorites')) {
      setCurrentPage('account');
      setActiveAccountTab('saved');
      updateMetaTags({
        title: 'Saved Properties | VeeduX Kerala',
        description: 'View your shortlisted Kerala properties, villas, and plots.',
      });
      return;
    }

    // 6. User Account, Profile, My Listings, Enquiries, Messages
    if (pathname.startsWith('/my-listings') || pathname.startsWith('/my-properties')) {
      setCurrentPage('account');
      setActiveAccountTab('my-properties');
      return;
    }

    if (pathname.startsWith('/enquiries')) {
      setCurrentPage('account');
      setActiveAccountTab('enquiries');
      return;
    }

    if (pathname.startsWith('/messages')) {
      setCurrentPage('account');
      setActiveAccountTab('messages');
      return;
    }

    if (pathname.startsWith('/profile') || pathname.startsWith('/account')) {
      setCurrentPage('account');
      setActiveAccountTab('profile');
      return;
    }

    // 7. Admin Moderation
    if (pathname.startsWith('/admin')) {
      setCurrentPage('admin');
      updateMetaTags({
        title: 'Admin Moderation Dashboard | VeeduX Kerala',
        description: 'Moderate, review, and approve incoming Kerala property listings.',
      });
      return;
    }

    // 8. Auth routes
    if (pathname.startsWith('/login')) {
      setAuthMode('login');
      setAuthModalOpen(true);
      return;
    }
    if (pathname.startsWith('/signup')) {
      setAuthMode('signup');
      setAuthModalOpen(true);
      return;
    }

    // Fallback to home
    setCurrentPage('home');
  }, []);

  // Sync route on mount and browser popstate (Back/Forward)
  useEffect(() => {
    parseRouteFromLocation();

    const handlePopState = () => {
      parseRouteFromLocation();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [parseRouteFromLocation]);

  // Navigate function with URL history pushState
  const navigateTo = (page, propertyId = null, accountTab = null) => {
    setCurrentPage(page);

    let targetUrl = '/';

    if (page === 'home') {
      targetUrl = '/';
      updateMetaTags({
        title: 'VeeduX — Every Property. One Place. | Kerala Real Estate Marketplace',
        description: 'Find your dream property in Kerala. Buy, sell, or rent land, plots, villas, houses, apartments, and commercial properties.',
      });
    } else if (page === 'search') {
      targetUrl = '/search';
      updateMetaTags({
        title: 'Search Kerala Properties | Buy & Rent Land, Villas, Flats | VeeduX',
        description: 'Search verified land, houses, flats, and commercial properties across all 14 Kerala districts on VeeduX.',
      });
    } else if (page === 'details') {
      const id = propertyId || (activeProperty ? activeProperty.id : null);
      setSelectedPropertyId(id);
      targetUrl = id ? `/property/${id}` : '/search';
      const found = id ? properties.find((p) => p.id === id) : null;
      if (found) {
        updateMetaTags({
          title: `${found.title} (${found.price}) | VeeduX Kerala`,
          description: found.description || `View full details, amenities, and seller contact for ${found.title} on VeeduX.`,
          image: found.images?.[0],
        });
      }
    } else if (page === 'post') {
      targetUrl = '/post';
      updateMetaTags({
        title: 'Post Property Free in Kerala | Sell & Rent Houses, Land | VeeduX',
        description: 'List your Kerala property for free on VeeduX. Connect directly with genuine verified buyers.',
      });
    } else if (page === 'account') {
      if (accountTab) {
        setActiveAccountTab(accountTab);
        if (accountTab === 'saved') targetUrl = '/saved';
        else if (accountTab === 'my-properties') targetUrl = '/my-listings';
        else if (accountTab === 'enquiries') targetUrl = '/enquiries';
        else if (accountTab === 'messages') targetUrl = '/messages';
        else targetUrl = '/account';
      } else {
        targetUrl = '/account';
      }
      updateMetaTags({
        title: 'My Account & Saved Properties | VeeduX Kerala',
        description: 'Manage your Kerala listings, saved bookmarks, and buyer enquiries.',
      });
    } else if (page === 'admin') {
      targetUrl = '/admin';
      updateMetaTags({
        title: 'Admin Moderation Dashboard | VeeduX Kerala',
        description: 'Moderate, review, and approve incoming Kerala property listings.',
      });
    } else if (page === 'login') {
      setAuthMode('login');
      setAuthModalOpen(true);
      return;
    } else if (page === 'signup') {
      setAuthMode('signup');
      setAuthModalOpen(true);
      return;
    }

    if (typeof window !== 'undefined') {
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ page, propertyId, accountTab }, '', targetUrl);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Toggle Save Property (Optimistic + Supabase Sync)
  const toggleSave = (propertyId) => {
    const isCurrentlySaved = savedIds.includes(propertyId);
    setSavedIds((prev) =>
      isCurrentlySaved ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]
    );

    if (isSupabaseConfigured && user?.id) {
      toggleBookmarkInSupabase(user.id, propertyId, isCurrentlySaved).catch((err) =>
        console.warn('[VeeduX] Error syncing bookmark:', err)
      );
    }
  };

  // Submit New Property Listing (defaults to pending for admin moderation)
  const submitNewListing = async (newPropData, imageFiles = []) => {
    // 1. Try Supabase backend if configured & user logged in
    if (isSupabaseConfigured && user?.id) {
      const { data: createdProp, error } = await createPropertyInSupabase(
        newPropData,
        imageFiles,
        user
      );

      if (!error && createdProp) {
        setProperties((prev) => [createdProp, ...prev]);
        return createdProp;
      }
      console.warn('[VeeduX] Supabase insert failed, falling back to local memory:', error?.message);
    }

    // 2. Safe local fallback
    const newProperty = {
      ...newPropData,
      id: `vx-${Date.now()}`,
      postedAgo: 'Just now',
      approvalStatus: user?.role === 'admin' ? 'approved' : 'pending',
      featured: false,
      verified: false,
      images:
        newPropData.photos && newPropData.photos.length > 0
          ? newPropData.photos
          : [],
      seller: {
        id: user?.id || 'usr-local',
        name: user?.name || newPropData.sellerName || 'Property Owner',
        type: newPropData.sellerType || 'Direct Owner',
        phone: user?.phone || newPropData.sellerPhone || '+91 98470 00000',
        whatsapp: (newPropData.sellerWhatsapp || user?.phone || '9847000000').replace(/[^0-9]/g, ''),
        memberSince: 'VeeduX Member',
        avatar: user?.avatar || null,
      },
    };
    setProperties((prev) => [newProperty, ...prev]);
    return newProperty;
  };

  // Re-fetch properties from Supabase and synchronize with local state
  const refreshProperties = async () => {
    if (!isSupabaseConfigured || !supabase) return { data: properties, error: null };
    try {
      const { data, error } = await fetchPropertiesFromSupabase({ includeAll: true });
      if (!error && data) {
        setProperties((prev) => {
          if (data.length === 0) return prev;
          const liveIds = new Set(data.map((d) => d.id));
          const localOnly = prev.filter((p) => !liveIds.has(p.id) && !isUuid(p.id));
          return [...data, ...localOnly];
        });
        return { data, error: null };
      }
      return { data: null, error };
    } catch (err) {
      console.warn('[VeeduX] refreshProperties warning:', err);
      return { data: null, error: err };
    }
  };

  // Admin Actions (Optimistic + Supabase Sync)
  const approveProperty = async (id) => {
    let supabaseResult = { success: true, error: null };
    if (isSupabaseConfigured) {
      const res = await updatePropertyApprovalInSupabase(id, 'approved');
      if (!res.success) {
        console.error('[VeeduX AppContext] Failed to approve property in Supabase:', res.error);
        return res;
      }
      supabaseResult = res;
    }

    // Update local state immediately so UI updates
    setProperties((prev) =>
      prev.map((p) => (p.id === id ? { ...p, approvalStatus: 'approved', verified: true } : p))
    );

    // Refresh live properties from Supabase if configured
    if (isSupabaseConfigured) {
      await refreshProperties();
    }

    return supabaseResult;
  };

  const rejectProperty = async (id) => {
    let supabaseResult = { success: true, error: null };
    if (isSupabaseConfigured) {
      const res = await updatePropertyApprovalInSupabase(id, 'rejected');
      if (!res.success) {
        console.error('[VeeduX AppContext] Failed to reject property in Supabase:', res.error);
        return res;
      }
      supabaseResult = res;
    }

    setProperties((prev) =>
      prev.map((p) => (p.id === id ? { ...p, approvalStatus: 'rejected' } : p))
    );

    if (isSupabaseConfigured) {
      await refreshProperties();
    }

    return supabaseResult;
  };

  const reportListing = (propertyId, reason, contact) => {
    const prop = properties.find((p) => p.id === propertyId);
    const newReport = {
      id: `rep-${Date.now()}`,
      propertyId,
      propertyTitle: prop?.title || 'Unknown Property',
      reason,
      reportedBy: contact || user?.name || 'Anonymous User',
      date: 'Just now',
      status: 'investigating',
    };
    setReportedListings((prev) => [newReport, ...prev]);

    if (isSupabaseConfigured) {
      submitReportToSupabase({
        propertyId,
        reporterId: user?.id,
        reportedBy: newReport.reportedBy,
        reason,
      }).catch((err) => console.warn('[VeeduX] Report sync error:', err));
    }
  };

  const addEnquiry = (enquiryData) => {
    const newEnquiry = {
      id: `enq-${Date.now()}`,
      date: 'Just now',
      status: 'new',
      ...enquiryData,
    };
    setEnquiries((prev) => [newEnquiry, ...prev]);

    // Store in localStorage
    saveEnquiry(enquiryData);

    // Sync to Supabase
    if (isSupabaseConfigured) {
      submitEnquiryToSupabase({
        propertyId: enquiryData.propertyId,
        buyerId: user?.id,
        buyerName: enquiryData.buyerName,
        buyerPhone: enquiryData.buyerPhone,
        message: enquiryData.message,
        enquiryType: enquiryData.enquiryType || 'general',
      }).catch((err) => console.warn('[VeeduX] Enquiry sync error:', err));
    }
  };

  const logout = async () => {
    console.info('[VeeduX Auth] Initiating sign out...');
    const wasDemo = Boolean(user?.isDemo);
    let res = { success: true, error: null };

    try {
      if (!wasDemo && isSupabaseConfigured && supabase) {
        res = await signOutFromSupabase();
      }
    } catch (err) {
      console.error('[VeeduX Auth] Sign out exception:', err);
      res = { success: false, error: err };
    } finally {
      // Clear authenticated user state immediately from AppContext
      setUser(null);
    }

    if (res?.success) {
      setAuthNotice({
        type: 'success',
        message: wasDemo
          ? 'Demo session ended.'
          : 'Signed out successfully from VeeduX.',
      });
      console.info('[VeeduX Auth] Sign out succeeded.');
    } else {
      setAuthNotice({
        type: 'error',
        message: res?.error?.message || 'Signed out with a network warning.',
      });
      console.warn('[VeeduX Auth] Sign out completed with warning:', res?.error);
    }

    return res;
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        navigateTo,
        selectedPropertyId,
        setSelectedPropertyId,
        activeProperty,
        properties,
        savedIds,
        toggleSave,
        user,
        setUser,
        logout,
        activeAccountTab,
        setActiveAccountTab,
        searchFilters,
        setSearchFilters,
        reportedListings,
        setReportedListings,
        enquiries,
        addEnquiry,
        notifications,
        setNotifications,
        authModalOpen,
        setAuthModalOpen,
        authMode,
        setAuthMode,
        authNotice,
        setAuthNotice,
        submitNewListing,
        approveProperty,
        rejectProperty,
        refreshProperties,
        reportListing,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
