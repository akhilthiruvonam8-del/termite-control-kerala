import React, { useState } from 'react';
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
  LandPlot,
  Building,
  KeyRound,
  Store,
  Briefcase,
  Layers,
} from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { useApp } from '../context/AppContext';
import { CATEGORIES, POPULAR_LOCATIONS, TRUST_FEATURES } from '../data/veeduxData';
import { KERALA_DISTRICTS } from '../data/locations';

export default function HomePage() {
  const { properties, navigateTo, searchFilters, setSearchFilters } = useApp();

  // Local Hero search state
  const [heroPurpose, setHeroPurpose] = useState('buy'); // 'buy' | 'rent'
  const [heroType, setHeroType] = useState('all');
  const [heroLocation, setHeroLocation] = useState('All Kerala');
  const [heroBudget, setHeroBudget] = useState('any');

  const handleHeroSearch = (e) => {
    e.preventDefault();
    setSearchFilters((prev) => ({
      ...prev,
      purpose: heroPurpose,
      propertyType: heroType,
      district: heroLocation,
      maxPrice: heroBudget !== 'any' ? heroBudget : '',
    }));
    navigateTo('search');
  };

  const handleCategoryClick = (catId) => {
    setSearchFilters((prev) => ({
      ...prev,
      propertyType: catId === 'houses-villas' ? 'villas' : catId === 'apartments-flats' ? 'apartments' : catId,
    }));
    navigateTo('search');
  };

  const handleActionClick = (action) => {
    if (action === 'sell') {
      navigateTo('post');
    } else {
      setSearchFilters((prev) => ({
        ...prev,
        purpose: action === 'buy' ? 'sell' : 'rent', // in listing purpose 'sell' matches buy listings
      }));
      navigateTo('search');
    }
  };

  // Featured Properties (Approved only)
  const featuredProperties = properties
    .filter((p) => p.featured && p.approvalStatus !== 'pending' && p.approvalStatus !== 'rejected')
    .slice(0, 6);

  // Recently Added Properties
  const recentProperties = properties
    .filter((p) => p.approvalStatus !== 'pending' && p.approvalStatus !== 'rejected')
    .slice(0, 6);

  return (
    <div className="w-full bg-[#FAF8F2] text-[#11291D]">
      {/* 1. HERO SECTION: Authentic Kerala Atmosphere */}
      <section className="relative overflow-hidden bg-[#0C3423] text-white pt-8 pb-16 sm:pb-20 sm:pt-14 px-4 sm:px-6">
        {/* Realistic Kerala Landscape Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/alappuzha-waterfront-villa.jpg"
            alt="Authentic Kerala Waterfront Home"
            className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-105"
          />
          {/* Subtle gradient overlay to make text pop while keeping photography authentic */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C3423] via-[#0C3423]/60 to-black/40" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-6">
          {/* Authentic Kerala Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF8F2] px-4 py-1.5 rounded-full text-xs font-semibold shadow-xs">
            <span className="text-[#D6AD55]">🌴</span>
            <span>Kerala's Modern Property Marketplace</span>
            <span className="text-[#D6AD55]">•</span>
            <span className="text-[#D6AD55] font-bold">Every Property. One Place.</span>
          </div>

          {/* Main Hero Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-md">
              Find Your Perfect Property
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-sm">
              Buy, sell or rent properties across Kerala.
            </p>
          </div>

          {/* Three Prominent Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-2">
            <button
              onClick={() => handleActionClick('buy')}
              className="flex-1 sm:flex-initial px-6 py-3 rounded-2xl bg-gradient-to-r from-[#D6AD55] to-[#ECC876] text-[#0C3423] font-bold text-xs sm:text-sm shadow-lg hover:brightness-105 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <HomeIcon size={16} />
              <span>Buy Property</span>
            </button>

            <button
              onClick={() => handleActionClick('rent')}
              className="flex-1 sm:flex-initial px-6 py-3 rounded-2xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/25 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <KeyRound size={16} className="text-[#D6AD55]" />
              <span>Rent Property</span>
            </button>

            <button
              onClick={() => handleActionClick('sell')}
              className="flex-1 sm:flex-initial px-6 py-3 rounded-2xl bg-[#145C3D] hover:bg-[#0E432A] text-white border border-[#27865B] font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <PlusCircle size={16} className="text-[#D6AD55]" />
              <span>Sell Property</span>
            </button>
          </div>

          {/* Search Interface: [Buy / Rent] [Property Type] [Location] [Budget] [Search] */}
          <form
            onSubmit={handleHeroSearch}
            className="mt-6 bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border border-white/20 text-slate-800 text-left max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 items-center">
              {/* 1. Purpose: Buy / Rent */}
              <div className="bg-[#FAF8F2] p-2.5 rounded-2xl border border-[#E2EBE5]">
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-0.5">
                  Looking To
                </label>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setHeroPurpose('buy')}
                    className={`flex-1 py-1 rounded-xl text-xs font-bold transition-all ${
                      heroPurpose === 'buy'
                        ? 'bg-[#145C3D] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Buy
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroPurpose('rent')}
                    className={`flex-1 py-1 rounded-xl text-xs font-bold transition-all ${
                      heroPurpose === 'rent'
                        ? 'bg-[#145C3D] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Rent
                  </button>
                </div>
              </div>

              {/* 2. Property Type */}
              <div className="bg-[#FAF8F2] p-2.5 rounded-2xl border border-[#E2EBE5]">
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-0.5">
                  Property Type
                </label>
                <select
                  value={heroType}
                  onChange={(e) => setHeroType(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value="all">All Property Types</option>
                  <option value="land-plots">Land & Plots (Cents)</option>
                  <option value="villas">Villas</option>
                  <option value="houses">Houses</option>
                  <option value="apartments">Apartments</option>
                  <option value="flats">Flats</option>
                  <option value="commercial">Commercial Buildings</option>
                  <option value="shops">Shops</option>
                  <option value="offices">Offices</option>
                  <option value="rentals">Rental Properties</option>
                </select>
              </div>

              {/* 3. Location */}
              <div className="bg-[#FAF8F2] p-2.5 rounded-2xl border border-[#E2EBE5]">
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-0.5">
                  Kerala District
                </label>
                <select
                  value={heroLocation}
                  onChange={(e) => setHeroLocation(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value="All Kerala">All Kerala (All Districts)</option>
                  {KERALA_DISTRICTS.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name} ({d.malayalam})
                    </option>
                  ))}
                </select>
              </div>

              {/* 4. Budget */}
              <div className="bg-[#FAF8F2] p-2.5 rounded-2xl border border-[#E2EBE5]">
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-0.5">
                  Budget
                </label>
                <select
                  value={heroBudget}
                  onChange={(e) => setHeroBudget(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value="any">Any Budget</option>
                  <option value="5000000">Up to ₹50 Lakhs</option>
                  <option value="10000000">Up to ₹1 Crore</option>
                  <option value="20000000">Up to ₹2 Crores</option>
                  <option value="50000000">Up to ₹5 Crores</option>
                  <option value="50000">Up to ₹50,000 / mo</option>
                </select>
              </div>

              {/* 5. Search Button */}
              <div className="h-full flex items-end">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#145C3D] hover:bg-[#0C3423] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Search size={16} className="text-[#D6AD55]" />
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* Quick Popular Keywords Row */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-3 px-1 text-[11px] text-slate-500 border-t border-slate-100 mt-2">
              <span className="font-bold text-slate-400 flex-shrink-0">Popular:</span>
              {[
                'Kochi Waterfront',
                'Kakkanad Villas',
                'Plots in Cents',
                'Marine Drive Flats',
                'Technopark Rentals',
                'Thrissur Land',
              ].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setSearchFilters((prev) => ({ ...prev, query: tag.split(' ')[0] }));
                    navigateTo('search');
                  }}
                  className="flex-shrink-0 bg-[#FAF8F2] hover:bg-emerald-50 hover:text-[#145C3D] px-2.5 py-1 rounded-lg border border-[#E2EBE5] transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </form>
        </div>
      </section>

      {/* 2. PROPERTY CATEGORIES (Image Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xl border border-[#E2EBE5]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-5">
            <div>
              <h2 className="text-lg sm:text-2xl font-black text-[#11291D] tracking-tight">
                Explore Property Categories
              </h2>
              <p className="text-xs text-slate-500">
                Browse verified residential, commercial and rental properties across Kerala
              </p>
            </div>

            <button
              onClick={() => navigateTo('search')}
              className="text-xs font-bold text-[#145C3D] hover:underline flex items-center gap-1"
            >
              <span>View All Listings</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Attractive Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E2EBE5] hover:border-[#145C3D] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute bottom-2 left-2 right-2 text-white text-[10px] font-bold bg-[#145C3D]/85 backdrop-blur-xs px-2 py-0.5 rounded-md text-center truncate">
                    {cat.count}
                  </span>
                </div>

                <div className="p-3 flex flex-col justify-between flex-grow">
                  <h3 className="font-bold text-xs text-slate-900 group-hover:text-[#145C3D] leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] text-slate-400 mt-1 truncate">
                    {cat.malayalam}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROPERTIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#D6AD55] uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Handpicked & Verified</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-[#11291D] tracking-tight mt-0.5">
              Featured Kerala Properties
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Premium villas, high-rises and commercial spaces inspected by VeeduX ground teams
            </p>
          </div>

          <button
            onClick={() => navigateTo('search')}
            className="text-xs font-bold text-[#145C3D] hover:text-[#0C3423] flex items-center gap-1 group"
          >
            <span>Explore all featured</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* 4. SELLER / NRI CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0C3423] via-[#145C3D] to-[#27865B] text-white p-6 sm:p-10 shadow-2xl border border-[#D6AD55]/30">
          <div className="relative z-10 max-w-xl space-y-3.5">
            <span className="bg-[#D6AD55] text-[#0C3423] text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-xs">
              100% Free Owner Listings
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
              Selling or Renting Property in Kerala?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              List your house, plot or commercial building on VeeduX and connect directly with over 2.5 Lakh active Kerala & NRI buyers worldwide with zero broker commissions.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => navigateTo('post')}
                className="bg-[#D6AD55] hover:bg-[#ECC876] text-[#0C3423] px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 active:scale-95"
              >
                <PlusCircle size={17} />
                <span>Post Your Property Free</span>
              </button>
              <div className="flex items-center gap-2 text-xs text-white/90">
                <CheckCircle2 size={16} className="text-[#D6AD55]" />
                <span>Instant Buyer WhatsApp & Calls</span>
              </div>
            </div>
          </div>

          {/* Authentic Kerala House Accent image */}
          <div className="absolute right-0 bottom-0 top-0 w-2/5 opacity-20 pointer-events-none hidden md:block">
            <img
              src="/images/kochi-nri-villa.jpg"
              alt="Kerala House"
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>
      </section>

      {/* 5. RECENTLY ADDED PROPERTIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-3xl font-black text-[#11291D] tracking-tight">
              Recently Added Across Kerala
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Fresh listings updated in real time from owners and certified builders
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {recentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* 6. POPULAR KERALA LOCATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-xl sm:text-3xl font-black text-[#11291D] tracking-tight">
            Popular Locations Across Kerala
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Explore property hotspots with real market prices and high appreciation potential
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
          {POPULAR_LOCATIONS.map((loc) => (
            <div
              key={loc.name}
              onClick={() => {
                setSearchFilters((prev) => ({ ...prev, district: loc.district }));
                navigateTo('search');
              }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E2EBE5] shadow-xs hover:shadow-lg cursor-pointer transition-all flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-slate-900">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-white font-bold text-xs sm:text-sm truncate">
                  {loc.name}
                </span>
              </div>
              <div className="p-3 text-xs space-y-0.5">
                <p className="text-slate-500 text-[11px] truncate">{loc.propertiesCount}</p>
                <p className="text-[#145C3D] font-bold truncate">{loc.startingPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TRUST & WHY VEEDUX SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2EBE5] shadow-sm">
          <div className="text-center max-w-lg mx-auto mb-8">
            <span className="text-xs font-bold uppercase text-[#D6AD55] tracking-widest">
              Trust & Transparency
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-[#11291D] mt-1">
              Why Kerala Trusts VeeduX
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              We eliminate fake brokers, misleading land survey records, and hidden commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TRUST_FEATURES.map((feature, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#FAF8F2] border border-[#E2EBE5] space-y-2 text-center sm:text-left"
              >
                <div className="w-11 h-11 rounded-xl bg-white text-[#145C3D] flex items-center justify-center shadow-xs mx-auto sm:mx-0 border border-[#27865B]/20">
                  <ShieldCheck size={22} className="text-[#27865B]" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900">{feature.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
