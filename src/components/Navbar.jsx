import React, { useState } from 'react';
import {
  MapPin,
  Search,
  Heart,
  User,
  PlusCircle,
  Menu,
  X,
  Shield,
  Bell,
  ChevronDown,
  Building2,
  Home,
  SlidersHorizontal,
  Compass,
  LogOut,
} from 'lucide-react';
import VeeduXLogo from './VeeduXLogo';
import { useApp } from '../context/AppContext';
import { KERALA_DISTRICTS, POPULAR_KERALA_CITIES } from '../data/locations';

export default function Navbar() {
  const {
    currentPage,
    navigateTo,
    savedIds,
    user,
    setAuthModalOpen,
    setAuthMode,
    logout,
    searchFilters,
    setSearchFilters,
    notifications,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [districtDropdownOpen, setDistrictDropdownOpen] = useState(false);
  const [locationSearch, setLocationSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const unreadNotifications = notifications.filter((n) => !n.read).length;

  const handleDistrictChange = (districtName, cityName = 'All Cities') => {
    setSearchFilters((prev) => ({
      ...prev,
      district: districtName,
      city: cityName,
    }));
    setDistrictDropdownOpen(false);
    setLocationSearch('');
    if (currentPage !== 'search') {
      navigateTo('search');
    }
  };

  const filteredDistricts = KERALA_DISTRICTS.filter((d) => {
    const matchesRegion = selectedRegion === 'all' || d.region.toLowerCase().includes(selectedRegion.toLowerCase());
    const q = locationSearch.toLowerCase().trim();
    const matchesSearch =
      !q ||
      d.name.toLowerCase().includes(q) ||
      d.malayalam.includes(q) ||
      (d.cities && d.cities.some((c) => c.name.toLowerCase().includes(q)));
    return matchesRegion && matchesSearch;
  });

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2EBE5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center text-left focus:outline-none"
          >
            <VeeduXLogo size="md" />
          </button>

          {/* Quick Kerala District & City Selector (Desktop) */}
          <div className="hidden lg:relative lg:block">
            <button
              onClick={() => setDistrictDropdownOpen(!districtDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF8F2] hover:bg-[#F0EDE4] border border-[#E2EBE5] text-xs font-semibold text-slate-800 transition-colors shadow-2xs"
            >
              <MapPin size={14} className="text-[#27865B]" />
              <span className="font-bold text-[#145C3D]">
                {searchFilters.district === 'All Kerala'
                  ? 'Kerala (All Districts)'
                  : searchFilters.city && searchFilters.city !== 'All Cities'
                  ? `${searchFilters.city}, ${searchFilters.district}`
                  : searchFilters.district}
              </span>
              <ChevronDown size={12} className="text-slate-400" />
            </button>

            {districtDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-[#E2EBE5] p-3 z-50 animate-in fade-in">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
                  <div className="flex items-center gap-1 text-[11px] font-black text-[#145C3D] uppercase tracking-wider">
                    <Compass size={13} className="text-[#D6AD55]" />
                    <span>Select Kerala Location</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold">14 Districts</span>
                </div>

                {/* Search input inside dropdown */}
                <div className="relative mb-2">
                  <input
                    type="text"
                    placeholder="Search district or city..."
                    value={locationSearch}
                    onChange={(e) => setLocationSearch(e.target.value)}
                    className="w-full bg-[#FAF8F2] pl-7 pr-3 py-1.5 rounded-xl text-xs border border-slate-200 focus:outline-none focus:border-[#145C3D]"
                  />
                  <Search size={12} className="absolute left-2.5 top-2.5 text-slate-400" />
                </div>

                {/* Region pills */}
                <div className="flex items-center gap-1 pb-2 mb-2 border-b border-slate-100 text-[10px] font-bold">
                  {['all', 'South', 'Central', 'North'].map((reg) => (
                    <button
                      key={reg}
                      type="button"
                      onClick={() => setSelectedRegion(reg)}
                      className={`px-2 py-0.5 rounded-md transition-colors ${
                        selectedRegion === reg
                          ? 'bg-[#145C3D] text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {reg === 'all' ? 'All Kerala' : `${reg} Kerala`}
                    </button>
                  ))}
                </div>

                {/* Reset / All Kerala primary button */}
                <button
                  onClick={() => handleDistrictChange('All Kerala', 'All Cities')}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold bg-emerald-50 text-[#145C3D] hover:bg-emerald-100 flex items-center justify-between mb-2 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    Search Across Kerala (All 14 Districts)
                  </span>
                  <span className="text-[10px] text-[#27865B] font-bold">എല്ലാ ജില്ലകളും</span>
                </button>

                {/* List of Districts */}
                <div className="max-h-56 overflow-y-auto no-scrollbar space-y-0.5 pr-1">
                  {filteredDistricts.length === 0 ? (
                    <p className="text-center py-4 text-xs text-slate-400">No districts match "{locationSearch}"</p>
                  ) : (
                    filteredDistricts.map((d) => (
                      <div key={d.id} className="group">
                        <button
                          onClick={() => handleDistrictChange(d.name, 'All Cities')}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold hover:bg-slate-100 text-slate-800 flex items-center justify-between transition-colors"
                        >
                          <div>
                            <span className="text-slate-900 group-hover:text-[#145C3D] font-bold">{d.name}</span>
                            <span className="text-[10px] text-slate-400 ml-1.5">({d.region})</span>
                          </div>
                          <span className="text-[10px] text-slate-500 font-medium">{d.malayalam}</span>
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => {
              setSearchFilters((prev) => ({ ...prev, purpose: 'all' }));
              navigateTo('search');
            }}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              currentPage === 'search' && searchFilters.purpose === 'all'
                ? 'text-[#145C3D] bg-emerald-50'
                : 'text-slate-600 hover:text-[#145C3D] hover:bg-slate-50'
            }`}
          >
            All Properties
          </button>

          <button
            onClick={() => {
              setSearchFilters((prev) => ({ ...prev, purpose: 'sell' }));
              navigateTo('search');
            }}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              currentPage === 'search' && searchFilters.purpose === 'sell'
                ? 'text-[#145C3D] bg-emerald-50'
                : 'text-slate-600 hover:text-[#145C3D] hover:bg-slate-50'
            }`}
          >
            Buy Property
          </button>

          <button
            onClick={() => {
              setSearchFilters((prev) => ({ ...prev, purpose: 'rent' }));
              navigateTo('search');
            }}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              currentPage === 'search' && searchFilters.purpose === 'rent'
                ? 'text-[#145C3D] bg-emerald-50'
                : 'text-slate-600 hover:text-[#145C3D] hover:bg-slate-50'
            }`}
          >
            Rent Property
          </button>

          <button
            onClick={() => {
              setSearchFilters((prev) => ({ ...prev, propertyType: 'commercial' }));
              navigateTo('search');
            }}
            className="px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#145C3D] hover:bg-slate-50 transition-colors"
          >
            Commercial
          </button>
        </nav>

        {/* Right Header Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Button Icon */}
          <button
            onClick={() => navigateTo('search')}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-600 hover:text-[#145C3D] transition-colors"
            title="Search Kerala Properties"
          >
            <Search size={19} />
          </button>

          {/* Saved Properties */}
          <button
            onClick={() => navigateTo('account', null, 'saved')}
            className="relative p-2 rounded-full hover:bg-slate-100 text-slate-600 hover:text-[#145C3D] transition-colors hidden sm:block"
            title="Saved Properties"
          >
            <Heart size={19} />
            {savedIds.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#D6AD55] text-[#0C3423] font-bold text-[9px] flex items-center justify-center shadow-xs">
                {savedIds.length}
              </span>
            )}
          </button>

          {/* Admin Dashboard Quick Link */}
          <button
            onClick={() => navigateTo('admin')}
            className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100 text-xs font-bold transition-colors"
            title="Admin Moderation Portal"
          >
            <Shield size={14} className="text-amber-700" />
            <span>Admin</span>
          </button>

          {/* Post Property Prominent CTA (Desktop) */}
          <button
            onClick={() => navigateTo('post')}
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#145C3D] to-[#27865B] hover:opacity-95 text-white px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
          >
            <PlusCircle size={16} className="text-[#D6AD55]" />
            <span>Post Property Free</span>
          </button>

          {/* User Account / Login / Sign Up */}
          {user ? (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => navigateTo('account', null, 'profile')}
                className="flex items-center gap-2 p-1 sm:px-3 sm:py-1.5 rounded-full bg-[#FAF8F2] hover:bg-[#F0EDE4] border border-[#E2EBE5] text-xs font-bold text-slate-800 transition-colors shadow-2xs"
              >
                <div className="w-7 h-7 rounded-full bg-[#145C3D] text-[#D6AD55] flex items-center justify-center text-xs font-black shadow-xs">
                  {user.name ? user.name.charAt(0).toUpperCase() : <User size={14} />}
                </div>
                <span className="hidden md:inline max-w-[80px] truncate">{user.name}</span>
                {user.isDemo && (
                  <span className="hidden lg:inline text-[9px] bg-amber-100 text-amber-900 border border-amber-300 px-1.5 py-0.2 rounded-sm font-bold">
                    Demo
                  </span>
                )}
              </button>
              <button
                onClick={logout}
                title="Log Out"
                className="hidden sm:flex items-center justify-center p-2 rounded-full text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                aria-label="Log Out"
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setAuthMode('login');
                setAuthModalOpen(true);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#145C3D] text-white hover:bg-[#0C3423] text-xs sm:text-sm font-bold shadow-sm transition-all active:scale-95 whitespace-nowrap"
              title="Login or Sign Up to VeeduX"
            >
              <User size={14} className="text-[#D6AD55]" />
              <span>Login / Sign Up</span>
            </button>
          )}

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E2EBE5] px-4 py-4 space-y-3 shadow-xl animate-in slide-in-from-top-2">
          {/* User Account / Login Banner in Mobile Menu */}
          {!user ? (
            <div className="bg-gradient-to-r from-emerald-50 to-[#FAF8F2] p-3.5 rounded-2xl border border-emerald-100 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-slate-800">Welcome to VeeduX</p>
                <p className="text-[11px] text-slate-500">Sign in to save properties & contact sellers</p>
              </div>
              <button
                onClick={() => {
                  setAuthMode('login');
                  setAuthModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="px-3.5 py-2 rounded-xl bg-[#145C3D] text-white text-xs font-bold shadow-sm hover:bg-[#0C3423] transition-all whitespace-nowrap"
              >
                Login / Sign Up
              </button>
            </div>
          ) : (
            <div className="bg-[#FAF8F2] p-3 rounded-2xl border border-[#E2EBE5] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-[#145C3D] text-[#D6AD55] flex items-center justify-center text-sm font-black shadow-xs">
                  {user.name ? user.name.charAt(0).toUpperCase() : <User size={18} />}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{user.name}</p>
                  <p className="text-[10px] text-slate-500">{user.phone || user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    navigateTo('account', null, 'profile');
                    setMobileMenuOpen(false);
                  }}
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700"
                >
                  Profile
                </button>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50"
                  title="Log Out"
                >
                  <LogOut size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Location picker */}
          <div className="bg-[#FAF8F2] p-3 rounded-2xl border border-[#E2EBE5]">
            <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
              Select District (ജില്ല)
            </span>
            <select
              value={searchFilters.district}
              onChange={(e) => {
                handleDistrictChange(e.target.value);
                setMobileMenuOpen(false);
              }}
              className="w-full bg-white p-2 rounded-xl text-xs font-bold text-slate-800 border border-slate-200 focus:outline-none"
            >
              <option value="All Kerala">All Kerala (All 14 Districts)</option>
              {KERALA_DISTRICTS.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name} ({d.malayalam})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <button
              onClick={() => {
                setSearchFilters((prev) => ({ ...prev, purpose: 'sell' }));
                navigateTo('search');
                setMobileMenuOpen(false);
              }}
              className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 text-left"
            >
              🏡 Buy Property
            </button>
            <button
              onClick={() => {
                setSearchFilters((prev) => ({ ...prev, purpose: 'rent' }));
                navigateTo('search');
                setMobileMenuOpen(false);
              }}
              className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 text-left"
            >
              🔑 Rent Property
            </button>
            <button
              onClick={() => {
                setSearchFilters((prev) => ({ ...prev, propertyType: 'land-plots' }));
                navigateTo('search');
                setMobileMenuOpen(false);
              }}
              className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 text-left"
            >
              🌴 Land & Plots (Cents)
            </button>
            <button
              onClick={() => {
                setSearchFilters((prev) => ({ ...prev, propertyType: 'commercial' }));
                navigateTo('search');
                setMobileMenuOpen(false);
              }}
              className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 text-left"
            >
              🏢 Commercial & Shops
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                navigateTo('admin');
                setMobileMenuOpen(false);
              }}
              className="text-xs font-bold text-amber-800 flex items-center gap-1.5"
            >
              <Shield size={14} />
              <span>Admin Moderation</span>
            </button>

            {user ? (
              <button
                onClick={() => {
                  navigateTo('account', null, 'saved');
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-bold text-[#145C3D]"
              >
                Saved Properties ({savedIds.length})
              </button>
            ) : (
              <button
                onClick={() => {
                  setAuthMode('login');
                  setAuthModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-bold text-[#145C3D] flex items-center gap-1"
              >
                <User size={13} />
                <span>Login / Sign Up</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
