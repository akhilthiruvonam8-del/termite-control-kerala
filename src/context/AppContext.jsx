import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_PROPERTIES } from '../data/veeduxData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Navigation & Active View: 'home' | 'search' | 'details' | 'post' | 'account' | 'admin'
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

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

  // Scroll to top on page navigation
  const navigateTo = (page, propertyId = null) => {
    setCurrentPage(page);
    if (propertyId) {
      setSelectedPropertyId(propertyId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // Currently inspected property object
  const activeProperty = properties.find((p) => p.id === selectedPropertyId) || properties[0];

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
