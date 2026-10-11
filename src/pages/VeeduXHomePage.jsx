import React, { useState, useMemo } from 'react';
import {
  Search,
  MapPin,
  SlidersHorizontal,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  Building2,
  Home as HomeIcon,
  PlusCircle,
  Phone,
  MessageSquare,
  HelpCircle,
  FileCheck2,
  LandPlot,
  X,
  Compass,
  ArrowUpRight,
} from 'lucide-react';
import VeeduXLogo from '../components/VeeduXLogo';
import PropertyCard from '../components/PropertyCard';
import {
  CATEGORIES,
  KERALA_DISTRICTS,
  PROPERTIES,
  POPULAR_LOCATIONS,
  TRUST_FEATURES,
} from '../data/veeduxData';

export default function VeeduXHomePage({
  onSelectProperty,
  onOpenSearch,
  onOpenPostProperty,
  onOpenAuth,
  onOpenProfile,
  onOpenSaved,
  savedIds = [],
  onToggleSave,
  user,
}) {
  // Purpose Tab: 'buy' | 'rent' | 'sell'
  const [activePurpose, setActivePurpose] = useState('buy');
  const [selectedDistrict, setSelectedDistrict] = useState('All Kerala');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered properties
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      // Purpose check
      if (activePurpose !== 'sell' && p.purpose !== activePurpose) {
        return false;
      }
      // District check
      if (selectedDistrict !== 'All Kerala' && !p.district.includes(selectedDistrict)) {
        return false;
      }
      // Category check
      if (selectedCategory !== 'all' && p.type !== selectedCategory) {
        return false;
      }
      // Query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesLoc = p.locality.toLowerCase().includes(q);
        const matchesDist = p.district.toLowerCase().includes(q);
        if (!matchesTitle && !matchesLoc && !matchesDist) return false;
      }
      return true;
    });
  }, [activePurpose, selectedDistrict, selectedCategory, searchQuery]);

  const featuredList = useMemo(() => {
    return filteredProperties.filter((p) => p.featured);
  }, [filteredProperties]);

  const recentList = useMemo(() => {
    return filteredProperties;
  }, [filteredProperties]);

  return (
    <div className="w-full bg-[#FAF8F2] text-[#11291D] pb-24 md:pb-12">
      {/* 1. TOP APP BAR (Responsive: Mobile + Desktop) */}
      <header className="sticky top-0 z-30 bg-[#FAF8F2]/90 backdrop-blur-md border-b border-[#E2EBE5] px-4 py-2.5 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          {/* Logo */}
          <VeeduXLogo size="md" />

          {/* Center: District Quick Selector (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#E2EBE5] text-xs shadow-xs">
            <MapPin size={14} className="text-[#27865B]" />
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="bg-transparent font-semibold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="All Kerala">Kerala (All Districts)</option>
              {KERALA_DISTRICTS.map((d) => (
                <option key={d.code} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop Post Property Button */}
            <button
              onClick={onOpenPostProperty}
              className="hidden sm:flex items-center gap-1.5 bg-[#145C3D] hover:bg-[#0C3423] text-white px-4 py-2 rounded-full text-xs font-bold transition-all shadow-xs"
            >
              <PlusCircle size={15} className="text-[#D6AD55]" />
              <span>Post Property Free</span>
            </button>

            {/* User Login / Profile Pill */}
            {user ? (
              <button
                onClick={onOpenProfile}
                className="flex items-center gap-1.5 bg-white border border-[#E2EBE5] px-3 py-1.5 rounded-full text-xs font-semibold text-slate-800 hover:border-[#145C3D] transition-colors shadow-xs"
              >
                <div className="w-5 h-5 rounded-full bg-[#145C3D] text-white flex items-center justify-center text-[10px] font-bold">
                  {user.name[0]}
                </div>
                <span className="max-w-[80px] truncate">{user.name}</span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="bg-white border border-[#E2EBE5] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#145C3D] hover:bg-emerald-50 transition-colors shadow-xs"
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 2. AUTHENTIC KERALA HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0C3423] to-[#145C3D] text-white px-4 pt-6 pb-12 sm:pb-16 sm:pt-10">
        {/* Authentic Background with Coconut Trees & Modern Kerala Waterfront House */}
        <div className="absolute inset-0 opacity-25 mix-blend-luminosity pointer-events-none">
          <img
            src="/images/alappuzha-waterfront-villa.jpg"
            alt="Kerala Landscape"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C3423] via-transparent to-[#0C3423]/70 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Authentic Kerala Badge */}
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF8F2] px-3 py-1 rounded-full text-[11px] font-semibold mb-3 shadow-xs">
            <span className="text-[#D6AD55]">🌴</span>
            <span>Kerala's Dedicated Property Marketplace</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Find Your Perfect Property in Kerala
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-emerald-100/90 max-w-xl mx-auto mt-2 leading-relaxed font-normal">
            Buy, sell or rent land, homes and commercial properties with confidence.
          </p>

          {/* 3. MAIN ACTION TABS: Buy Property | Rent Property | Sell Property */}
          <div className="flex items-center justify-center gap-1.5 mt-6 max-w-md mx-auto bg-black/30 p-1 rounded-2xl backdrop-blur-md border border-white/15">
            <button
              onClick={() => setActivePurpose('buy')}
              className={`flex-1 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activePurpose === 'buy'
                  ? 'bg-gradient-to-r from-[#D6AD55] to-[#ECC876] text-[#0C3423] shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Buy Property
            </button>

            <button
              onClick={() => setActivePurpose('rent')}
              className={`flex-1 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activePurpose === 'rent'
                  ? 'bg-gradient-to-r from-[#D6AD55] to-[#ECC876] text-[#0C3423] shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Rent Property
            </button>

            <button
              onClick={() => {
                setActivePurpose('sell');
                onOpenPostProperty?.();
              }}
              className={`flex-1 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activePurpose === 'sell'
                  ? 'bg-gradient-to-r from-[#D6AD55] to-[#ECC876] text-[#0C3423] shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Sell Property
            </button>
          </div>

          {/* 4. PROMINENT SEARCH BAR (Mobile-First Interactive Box) */}
          <div className="mt-4 bg-white rounded-2xl p-2 sm:p-2.5 shadow-2xl border border-white/20 text-slate-800 max-w-3xl mx-auto text-left">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              {/* Search Location / Keyword Input */}
              <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-[#FAF8F2] rounded-xl border border-[#E2EBE5]">
                <Search size={16} className="text-[#27865B] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Location (e.g. Kakkanad, Marine Drive, Thrissur...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-transparent focus:outline-none placeholder:text-slate-400 font-medium"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="text-slate-400 p-0.5">
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* District Dropdown (Mobile visible) */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#FAF8F2] rounded-xl border border-[#E2EBE5] sm:max-w-[180px]">
                <MapPin size={15} className="text-[#27865B] flex-shrink-0" />
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="w-full text-xs bg-transparent focus:outline-none font-semibold text-slate-700 cursor-pointer"
                >
                  <option value="All Kerala">All Kerala</option>
                  {KERALA_DISTRICTS.map((d) => (
                    <option key={d.code} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Advanced Filter Modal Trigger & Search Button */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={onOpenSearch}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-[#E2EBE5] bg-[#FAF8F2] hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors"
                >
                  <SlidersHorizontal size={14} className="text-[#145C3D]" />
                  <span>Filters</span>
                </button>

                <button
                  onClick={onOpenSearch}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#145C3D] hover:bg-[#0C3423] text-white text-xs sm:text-sm font-bold transition-all shadow-md"
                >
                  <span>Search</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Quick Popular Keywords Row */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 px-1 text-[11px] text-slate-500">
              <span className="font-semibold text-slate-400 flex-shrink-0">Popular:</span>
              {['Kochi Waterfront', 'Kakkanad Villas', 'Plots in Cents', 'Marine Drive Flats', 'Wayanad Estates'].map(
                (tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag.split(' ')[0])}
                    className="flex-shrink-0 bg-slate-100 hover:bg-emerald-50 hover:text-[#145C3D] px-2 py-0.5 rounded-md transition-colors"
                  >
                    {tag}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROPERTY CATEGORIES (Image Cards) */}
      <section className="max-w-6xl mx-auto px-4 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-[#E2EBE5]">
          <div className="flex items-center justify-between mb-3.5">
            <div>
              <h2 className="text-base sm:text-xl font-black text-[#11291D] tracking-tight">
                Explore Property Categories
              </h2>
              <p className="text-xs text-slate-500">
                Browse residential plots, luxury villas, apartments and commercial hubs
              </p>
            </div>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => setSelectedCategory('all')}
                className="text-xs font-bold text-[#145C3D] hover:underline"
              >
                View All Categories
              </button>
            )}
          </div>

          {/* Grid / Horizontal Swipe for Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() =>
                    setSelectedCategory(isSelected ? 'all' : cat.id)
                  }
                  className={`group rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 relative flex flex-col ${
                    isSelected
                      ? 'border-[#145C3D] ring-2 ring-[#D6AD55] shadow-md -translate-y-1'
                      : 'border-[#E2EBE5] bg-white hover:border-[#145C3D]/50 hover:shadow-md'
                  }`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-100">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <span className="absolute bottom-2 left-2 right-2 text-white text-[10px] font-bold bg-[#145C3D]/80 backdrop-blur-xs px-1.5 py-0.5 rounded-md text-center">
                      {cat.count}
                    </span>
                  </div>

                  <div className="p-2.5 flex-grow flex flex-col justify-between">
                    <h3 className="font-bold text-xs text-slate-900 group-hover:text-[#145C3D] leading-tight">
                      {cat.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 mt-0.5 truncate">
                      {cat.malayalam}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROPERTIES SECTION */}
      <section className="max-w-6xl mx-auto px-4 mt-8 sm:mt-12">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#D6AD55] uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Handpicked & Verified</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#11291D] tracking-tight mt-0.5">
              Featured Kerala Properties
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Premium waterfront villas, plantation estates and luxury city homes
            </p>
          </div>

          <button
            onClick={onOpenSearch}
            className="text-xs font-bold text-[#145C3D] hover:text-[#0C3423] flex items-center gap-1 group"
          >
            <span>See all ({filteredProperties.length})</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Property Cards Grid */}
        {featuredList.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 text-center border border-[#E2EBE5]">
            <p className="text-sm font-bold text-slate-700">No properties matching filters</p>
            <button
              onClick={() => {
                setSelectedDistrict('All Kerala');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-2 text-xs text-[#145C3D] font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredList.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelectProperty={onSelectProperty}
                isSaved={savedIds.includes(property.id)}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        )}
      </section>

      {/* 7. KERALA NRI & SELLER CALL-TO-ACTION BANNER */}
      <section className="max-w-6xl mx-auto px-4 mt-8 sm:mt-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0C3423] via-[#145C3D] to-[#27865B] text-white p-6 sm:p-8 shadow-xl border border-[#D6AD55]/30">
          <div className="relative z-10 max-w-xl space-y-3">
            <span className="bg-[#D6AD55] text-[#0C3423] text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider">
              100% Free Owner Listings
            </span>
            <h2 className="text-xl sm:text-3xl font-black leading-tight">
              Selling or Renting Your Property in Kerala?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              List your house, plot or commercial building on VeeduX and connect directly with over 2.5 Lakh active Kerala & NRI buyers across the UAE, UK, and US.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenPostProperty}
                className="bg-[#D6AD55] hover:bg-[#ECC876] text-[#0C3423] px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <PlusCircle size={17} />
                <span>Post Your Property Free</span>
              </button>
              <div className="flex items-center gap-2 text-xs text-white/80">
                <CheckCircle2 size={15} className="text-[#D6AD55]" />
                <span>Zero Commission for Owners</span>
              </div>
            </div>
          </div>

          {/* Decorative Corner Palm Graphic */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-20 pointer-events-none hidden sm:block">
            <img
              src="/images/kochi-nri-villa.jpg"
              alt="NRI House"
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>
      </section>

      {/* 8. RECENTLY ADDED PROPERTIES */}
      <section className="max-w-6xl mx-auto px-4 mt-8 sm:mt-12">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#11291D] tracking-tight">
              Recently Added in Kerala
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Fresh listings updated in real time from owners and certified builders
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {recentList.slice(0, 6).map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSelectProperty={onSelectProperty}
              isSaved={savedIds.includes(property.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      </section>

      {/* 9. POPULAR LOCATIONS ACROSS KERALA */}
      <section className="max-w-6xl mx-auto px-4 mt-10 sm:mt-14">
        <div className="text-center max-w-xl mx-auto mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-[#11291D] tracking-tight">
            Popular Locations Across Kerala
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Explore property hotspots with real market prices and high appreciation potential
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {POPULAR_LOCATIONS.map((loc) => (
            <div
              key={loc.name}
              onClick={() => {
                setSelectedDistrict(loc.name.split(' ')[0]);
                window.scrollTo({ top: 380, behavior: 'smooth' });
              }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E2EBE5] shadow-xs hover:shadow-md cursor-pointer transition-all flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-white font-bold text-xs truncate">
                  {loc.name}
                </span>
              </div>
              <div className="p-2 text-[10px] space-y-0.5">
                <p className="text-slate-500 truncate">{loc.propertiesCount}</p>
                <p className="text-[#145C3D] font-bold truncate">{loc.startingPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. TRUST & SECURITY SECTION */}
      <section className="max-w-6xl mx-auto px-4 mt-10 sm:mt-14">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2EBE5] shadow-sm">
          <div className="text-center max-w-lg mx-auto mb-6">
            <span className="text-xs font-bold uppercase text-[#D6AD55] tracking-widest">
              Trust & Transparency
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#11291D] mt-1">
              Why Kerala Trusts VeeduX
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              We eliminate fake brokers, misleading land survey records, and hidden commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRUST_FEATURES.map((feature, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#E2EBE5] space-y-2 text-center sm:text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-[#145C3D] flex items-center justify-center shadow-xs mx-auto sm:mx-0 border border-[#27865B]/20">
                  <ShieldCheck size={20} className="text-[#27865B]" />
                </div>
                <h3 className="font-bold text-xs text-slate-900">{feature.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FOOTER (Kerala Context & Disclaimer) */}
      <footer className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-[#E2EBE5] text-xs text-slate-500 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <VeeduXLogo size="sm" />
          <p className="text-center sm:text-right text-[11px]">
            VeeduX Real Estate Marketplace — Operating across all 14 Kerala Districts.
          </p>
        </div>

        <div className="text-[10px] text-slate-400 text-center sm:text-left leading-relaxed">
          Disclaimer: Sample listing data created for VeeduX Kerala user interactive prototype. All property details, land measurements in Cents/Acres, and owner contacts are for demonstration purposes.
        </div>
      </footer>
    </div>
  );
}
