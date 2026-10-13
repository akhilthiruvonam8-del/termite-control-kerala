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
} from 'lucide-react';
import VeeduXLogo from './VeeduXLogo';
import { useApp } from '../context/AppContext';
import { KERALA_DISTRICTS } from '../data/locations';

export default function Navbar() {
  const {
    currentPage,
    navigateTo,
    savedIds,
    user,
    setAuthModalOpen,
    searchFilters,
    setSearchFilters,
    notifications,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [districtDropdownOpen, setDistrictDropdownOpen] = useState(false);

  const unreadNotifications = notifications.filter((n) => !n.read).length;

  const handleDistrictChange = (districtName) => {
    setSearchFilters((prev) => ({ ...prev, district: districtName }));
    setDistrictDropdownOpen(false);
    if (currentPage !== 'search') {
      navigateTo('search');
    }
  };

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

          {/* Quick Kerala District Selector (Desktop) */}
          <div className="hidden lg:relative lg:block">
            <button
              onClick={() => setDistrictDropdownOpen(!districtDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF8F2] hover:bg-[#F0EDE4] border border-[#E2EBE5] text-xs font-semibold text-slate-800 transition-colors"
            >
              <MapPin size={14} className="text-[#27865B]" />
              <span>{searchFilters.district || 'All Kerala'}</span>
              <ChevronDown size={12} className="text-slate-400" />
            </button>

            {districtDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#E2EBE5] py-2 z-50 animate-in fade-in max-h-80 overflow-y-auto">
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Select Kerala District
                </div>
                <button
                  onClick={() => handleDistrictChange('All Kerala')}
                  className="w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-emerald-50 hover:text-[#145C3D] flex items-center justify-between"
                >
                  <span>All Kerala (All 14 Districts)</span>
                </button>
                {KERALA_DISTRICTS.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => handleDistrictChange(d.name)}
                    className="w-full text-left px-3.5 py-2 text-xs font-medium hover:bg-emerald-50 hover:text-[#145C3D] flex items-center justify-between"
                  >
                    <span>{d.name}</span>
                    <span className="text-[10px] text-slate-400">{d.malayalam}</span>
                  </button>
                ))}
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
            onClick={() => navigateTo('account')}
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

          {/* User Account / Profile */}
          {user ? (
            <button
              onClick={() => navigateTo('account')}
              className="flex items-center gap-2 p-1 sm:px-3 sm:py-1.5 rounded-full bg-[#FAF8F2] hover:bg-[#F0EDE4] border border-[#E2EBE5] text-xs font-bold text-slate-800 transition-colors"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-7 h-7 rounded-full object-cover border border-[#27865B]"
              />
              <span className="hidden md:inline max-w-[80px] truncate">{user.name}</span>
            </button>
          ) : (
            <button
              onClick={() => setAuthModalOpen(true)}
              className="px-3.5 py-1.5 rounded-full border border-[#145C3D] text-[#145C3D] hover:bg-[#145C3D] hover:text-white text-xs font-bold transition-all"
            >
              Log In
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

            <button
              onClick={() => {
                navigateTo('account');
                setMobileMenuOpen(false);
              }}
              className="text-xs font-bold text-[#145C3D]"
            >
              My Account & Saved ({savedIds.length})
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
