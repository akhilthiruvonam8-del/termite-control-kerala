import React, { useState } from 'react';
import ViewportBar from './components/ViewportBar';
import VeeduXHomePage from './pages/VeeduXHomePage';
import MobileBottomNav from './components/MobileBottomNav';
import PropertyDetailModal from './components/PropertyDetailModal';
import SearchFilterModal from './components/SearchFilterModal';
import PostPropertyModal from './components/PostPropertyModal';
import SavedPropertiesDrawer from './components/SavedPropertiesDrawer';
import AuthModal from './components/AuthModal';
import UserProfileModal from './components/UserProfileModal';
import AdminModerationModal from './components/AdminModerationModal';

export default function App() {
  // Viewport mode: 'mobile' (default per user prompt), 'tablet', 'desktop'
  const [viewMode, setViewMode] = useState('mobile');

  // Active bottom nav tab: 'home' | 'search' | 'saved' | 'profile'
  const [activeNavTab, setActiveNavTab] = useState('home');

  // Modals & Drawers state
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [postPropertyModalOpen, setPostPropertyModalOpen] = useState(false);
  const [savedDrawerOpen, setSavedDrawerOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // User state (sample authenticated user)
  const [user, setUser] = useState({
    name: 'Govind Menon',
    phone: '+91 98471 99220',
    email: 'govind.menon@gmail.com',
  });

  // Saved properties (initial sample bookmarks)
  const [savedIds, setSavedIds] = useState(['vx-101', 'vx-103']);

  // Filters state
  const [filters, setFilters] = useState({
    purpose: 'all',
    district: 'All Kerala',
    locality: '',
    category: 'all',
    minPrice: '',
    maxPrice: '',
    landAreaCentsMin: '',
    landAreaCentsMax: '',
    bhk: 'all',
    sortBy: 'newest',
    directOwnerOnly: false,
    verifiedOnly: false,
  });

  const toggleSave = (propertyId) => {
    setSavedIds((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const handleBottomNavChange = (tab) => {
    setActiveNavTab(tab);
    if (tab === 'search') {
      setSearchModalOpen(true);
    } else if (tab === 'saved') {
      setSavedDrawerOpen(true);
    } else if (tab === 'profile') {
      if (user) {
        setProfileModalOpen(true);
      } else {
        setAuthModalOpen(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F0EDE4] flex flex-col font-sans selection:bg-[#D6AD55] selection:text-[#0C3423]">
      {/* Top Device Viewport Switcher Toolbar */}
      <ViewportBar viewMode={viewMode} setViewMode={setViewMode} />

      {/* Main Container according to View Mode */}
      <main className="flex-grow flex items-start justify-center p-0 md:py-6 overflow-x-hidden">
        {viewMode === 'mobile' ? (
          /* Mobile Frame Simulation (390px iPhone standard) */
          <div className="w-full max-w-[420px] min-h-[844px] bg-[#FAF8F2] md:rounded-[40px] md:shadow-[0_25px_60px_-15px_rgba(20,92,61,0.3)] md:border-[8px] md:border-[#0C3423] overflow-hidden relative flex flex-col transition-all">
            {/* Simulated Phone Status Bar on desktop preview */}
            <div className="hidden md:flex items-center justify-between px-6 pt-3 pb-1 text-slate-800 text-[11px] font-bold bg-[#FAF8F2] select-none">
              <span>9:41</span>
              <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto" />
              <div className="flex items-center gap-1.5">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>

            {/* Mobile Home Screen Content */}
            <div className="flex-grow overflow-y-auto">
              <VeeduXHomePage
                onSelectProperty={(prop) => setSelectedProperty(prop)}
                onOpenSearch={() => setSearchModalOpen(true)}
                onOpenPostProperty={() => setPostPropertyModalOpen(true)}
                onOpenAuth={() => setAuthModalOpen(true)}
                onOpenProfile={() => setProfileModalOpen(true)}
                onOpenSaved={() => setSavedDrawerOpen(true)}
                savedIds={savedIds}
                onToggleSave={toggleSave}
                user={user}
              />
            </div>

            {/* Fixed Bottom Mobile Navigation Bar */}
            <MobileBottomNav
              activeTab={activeNavTab}
              setActiveTab={handleBottomNavChange}
              savedCount={savedIds.length}
              onOpenPostProperty={() => setPostPropertyModalOpen(true)}
            />
          </div>
        ) : viewMode === 'tablet' ? (
          /* Tablet Frame Simulation (768px iPad) */
          <div className="w-full max-w-[768px] min-h-[900px] bg-[#FAF8F2] md:rounded-[32px] md:shadow-2xl md:border-[6px] md:border-[#0C3423] overflow-hidden relative flex flex-col transition-all">
            <div className="flex-grow overflow-y-auto">
              <VeeduXHomePage
                onSelectProperty={(prop) => setSelectedProperty(prop)}
                onOpenSearch={() => setSearchModalOpen(true)}
                onOpenPostProperty={() => setPostPropertyModalOpen(true)}
                onOpenAuth={() => setAuthModalOpen(true)}
                onOpenProfile={() => setProfileModalOpen(true)}
                onOpenSaved={() => setSavedDrawerOpen(true)}
                savedIds={savedIds}
                onToggleSave={toggleSave}
                user={user}
              />
            </div>

            <MobileBottomNav
              activeTab={activeNavTab}
              setActiveTab={handleBottomNavChange}
              savedCount={savedIds.length}
              onOpenPostProperty={() => setPostPropertyModalOpen(true)}
            />
          </div>
        ) : (
          /* Full Responsive Desktop View */
          <div className="w-full min-h-screen bg-[#FAF8F2] relative flex flex-col">
            <VeeduXHomePage
              onSelectProperty={(prop) => setSelectedProperty(prop)}
              onOpenSearch={() => setSearchModalOpen(true)}
              onOpenPostProperty={() => setPostPropertyModalOpen(true)}
              onOpenAuth={() => setAuthModalOpen(true)}
              onOpenProfile={() => setProfileModalOpen(true)}
              onOpenSaved={() => setSavedDrawerOpen(true)}
              savedIds={savedIds}
              onToggleSave={toggleSave}
              user={user}
            />

            {/* Bottom Nav on small screen sizes */}
            <div className="md:hidden">
              <MobileBottomNav
                activeTab={activeNavTab}
                setActiveTab={handleBottomNavChange}
                savedCount={savedIds.length}
                onOpenPostProperty={() => setPostPropertyModalOpen(true)}
              />
            </div>
          </div>
        )}
      </main>

      {/* Global Interactive Modals & Drawers */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        isSaved={selectedProperty ? savedIds.includes(selectedProperty.id) : false}
        onToggleSave={toggleSave}
      />

      <SearchFilterModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        filters={filters}
        setFilters={setFilters}
        onApplyFilters={() => {}}
      />

      <PostPropertyModal
        isOpen={postPropertyModalOpen}
        onClose={() => setPostPropertyModalOpen(false)}
        onListingSubmitted={(listing) => {
          console.log('Submitted listing:', listing);
        }}
      />

      <SavedPropertiesDrawer
        isOpen={savedDrawerOpen}
        onClose={() => setSavedDrawerOpen(false)}
        savedIds={savedIds}
        onToggleSave={toggleSave}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={(loggedInUser) => setUser(loggedInUser)}
      />

      <UserProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        user={user}
        onLogout={() => setUser(null)}
        onOpenPostProperty={() => setPostPropertyModalOpen(true)}
        onOpenSaved={() => setSavedDrawerOpen(true)}
        onOpenAdmin={() => setAdminModalOpen(true)}
        savedCount={savedIds.length}
      />

      <AdminModerationModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />
    </div>
  );
}
