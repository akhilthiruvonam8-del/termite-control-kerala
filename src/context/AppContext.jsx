import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { INITIAL_PROPERTIES } from '../data/veeduxData';
import { updateMetaTags } from '../utils/seo';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Navigation & Active View: 'home' | 'search' | 'details' | 'post' | 'account' | 'admin'
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [activeAccountTab, setActiveAccountTab] = useState('profile'); // 'profile' | 'my-properties' | 'saved' | 'enquiries' | 'messages' | 'notifications' | 'settings'

  // Properties state (dynamic, supports posting & admin review)
  const [properties, setProperties] = useState(INITIAL_PROPERTIES);

  // Saved / Bookmarked property IDs
  const [savedIds, setSavedIds] = useState(['vx-101', 'vx-103', 'vx-108']);

  // Logged-in User (Demo user logged in by default for seamless UX)
  const [user, setUser] = useState({
    id: 'usr-kerala-01',
    name: 'Govind Menon',
    phone: '+91 98471 99220',
    email: 'govind.menon@veedux.com',
    role: 'buyer', // 'buyer' | 'owner' | 'admin'
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    memberSince: 'Member since 2024',
    isVerified: true,
  });

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
  const [reportedListings, setReportedListings] = useState([
    {
      id: 'rep-01',
      propertyId: 'vx-102',
      propertyTitle: 'Marine Drive Luxury 3 BHK Waterfront High-Rise Apartment',
      reason: 'Seller contacted via phone claims price increased by 10 Lakhs',
      reportedBy: 'Naveen P. (+91 94471 88220)',
      date: '2 hours ago',
      status: 'investigating',
    },
  ]);

  // Enquiries list
  const [enquiries, setEnquiries] = useState([
    {
      id: 'enq-01',
      propertyId: 'vx-101',
      propertyTitle: 'Modern Luxury Villa for Sale in Kakkanad',
      buyerName: 'Anand Varma',
      buyerPhone: '+91 94470 11223',
      message: 'Interested in a physical site visit this Saturday 11 AM.',
      date: 'Today, 10:15 AM',
      status: 'new',
    },
  ]);

  // Notifications
  const [notifications, setNotifications] = useState([
    {
      id: 'notif-01',
      title: 'New Price Drop!',
      message: 'A 4 BHK Villa in Kakkanad price dropped to ₹85 Lakhs.',
      time: '1 hour ago',
      read: false,
    },
    {
      id: 'notif-02',
      title: 'Welcome to VeeduX',
      message: 'Explore over 8,000+ verified properties across Kerala.',
      time: 'Yesterday',
      read: true,
    },
  ]);

  // Auth Modal State
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'

  // Currently inspected property object
  const activeProperty = properties.find((p) => p.id === selectedPropertyId) || properties[0];

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
      const id = propertyId || (activeProperty ? activeProperty.id : 'vx-101');
      setSelectedPropertyId(id);
      targetUrl = `/property/${id}`;
      const found = properties.find((p) => p.id === id);
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
    }

    if (typeof window !== 'undefined') {
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ page, propertyId, accountTab }, '', targetUrl);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Toggle Save Property
  const toggleSave = (propertyId) => {
    setSavedIds((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  // Submit New Property Listing (defaults to pending for admin moderation)
  const submitNewListing = (newPropData) => {
    const newProperty = {
      ...newPropData,
      id: `vx-${Date.now()}`,
      postedAgo: 'Just now',
      approvalStatus: 'pending', // Pending Admin review!
      featured: false,
      verified: false,
      seller: {
        name: user?.name || 'Property Owner',
        type: 'Direct Owner',
        phone: user?.phone || '+91 98470 00000',
        whatsapp: (user?.phone || '9847000000').replace(/[^0-9]/g, ''),
        memberSince: 'VeeduX Member',
        avatar: user?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      },
    };
    setProperties((prev) => [newProperty, ...prev]);
    return newProperty;
  };

  // Admin Actions
  const approveProperty = (id) => {
    setProperties((prev) =>
      prev.map((p) => (p.id === id ? { ...p, approvalStatus: 'approved', verified: true } : p))
    );
  };

  const rejectProperty = (id) => {
    setProperties((prev) =>
      prev.map((p) => (p.id === id ? { ...p, approvalStatus: 'rejected' } : p))
    );
  };

  const reportListing = (propertyId, reason, contact) => {
    const prop = properties.find((p) => p.id === propertyId);
    setReportedListings((prev) => [
      {
        id: `rep-${Date.now()}`,
        propertyId,
        propertyTitle: prop?.title || 'Unknown Property',
        reason,
        reportedBy: contact || user?.name || 'Anonymous User',
        date: 'Just now',
        status: 'investigating',
      },
      ...prev,
    ]);
  };

  const addEnquiry = (enquiryData) => {
    setEnquiries((prev) => [
      {
        id: `enq-${Date.now()}`,
        date: 'Just now',
        status: 'new',
        ...enquiryData,
      },
      ...prev,
    ]);
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
        submitNewListing,
        approveProperty,
        rejectProperty,
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
