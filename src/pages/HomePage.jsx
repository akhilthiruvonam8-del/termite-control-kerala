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
  Compass,
  TreePalm,
  Trees,
} from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { useApp } from '../context/AppContext';
import { CATEGORIES, TRUST_FEATURES } from '../data/veeduxData';
import {
  KERALA_DISTRICTS,
  POPULAR_KERALA_CITIES,
  STATE_INFO,
} from '../data/locations';

export default function HomePage() {
  const { properties, navigateTo, searchFilters, setSearchFilters } = useApp();

  // Local Hero search state
  const [heroPurpose, setHeroPurpose] = useState('buy'); // 'buy' | 'rent'
  const [heroType, setHeroType] = useState('all');
  const [heroLocation, setHeroLocation] = useState('All Kerala');
  const [heroBudget, setHeroBudget] = useState('any');

  // District filter tab
  const [districtRegionTab, setDistrictRegionTab] = useState('all'); // 'all' | 'South Kerala' | 'Central Kerala' | 'North Kerala'

  // Popular cities filter tab
  const [cityFilterTab, setCityFilterTab] = useState('all'); // 'all' | 'kochi' | 'trivandrum' | 'malabar' | 'central' | 'highland'

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

  const handleDistrictClick = (districtName) => {
    setSearchFilters((prev) => ({
      ...prev,
      district: districtName,
      city: 'All Cities',
      locality: '',
    }));
    navigateTo('search');
  };

  const handleCityClick = (cityName, districtName) => {
    setSearchFilters((prev) => ({
      ...prev,
      district: districtName || 'All Kerala',
      city: cityName,
      locality: '',
    }));
    navigateTo('search');
  };

  // Approved properties
  const validProperties = properties.filter(
    (p) => p.approvalStatus !== 'pending' && p.approvalStatus !== 'rejected'
  );

  // Featured Properties (Approved only)
  const featuredProperties = validProperties.filter((p) => p.featured).slice(0, 6);

  // Recently Added Properties
  const recentProperties = validProperties.slice(0, 6);

  // Filtered districts by region
  const displayedDistricts =
    districtRegionTab === 'all'
      ? KERALA_DISTRICTS
      : KERALA_DISTRICTS.filter((d) => d.region === districtRegionTab);

  // Filtered popular cities by cluster
  const displayedCities = POPULAR_KERALA_CITIES.filter((c) => {
    if (cityFilterTab === 'all') return true;
    if (cityFilterTab === 'kochi') return c.districtId === 'ernakulam';
    if (cityFilterTab === 'trivandrum') return c.districtId === 'thiruvananthapuram';
    if (cityFilterTab === 'malabar')
      return ['kozhikode', 'kannur', 'kasaragod', 'malappuram'].includes(c.districtId);
    if (cityFilterTab === 'central')
      return ['thrissur', 'kottayam', 'alappuzha', 'kollam', 'palakkad'].includes(c.districtId);
    if (cityFilterTab === 'highland')
      return ['wayanad', 'idukki', 'pathanamthitta'].includes(c.districtId);
    return true;
  });

  // Category specific slices
  const landListings = validProperties.filter((p) => p.propertyType === 'land-plots').slice(0, 3);
  const homesListings = validProperties
    .filter((p) => ['villas', 'houses', 'apartments', 'flats'].includes(p.propertyType))
    .slice(0, 3);
  const rentalListings = validProperties.filter((p) => p.purpose === 'rent').slice(0, 3);
  const commercialListings = validProperties
    .filter((p) => ['commercial', 'shops', 'offices'].includes(p.propertyType))
    .slice(0, 3);

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
              Buy, sell or rent properties across all 14 districts in Kerala.
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
                  <option value="All Kerala">All Kerala (All 14 Districts)</option>
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
                'Wayanad Estates',
                'Thrissur Land',
                'Munnar Retreats',
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

      {/* 3. EXPLORE PROPERTIES BY DISTRICT (ALL 14 DISTRICTS OF KERALA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#145C3D] uppercase tracking-wider">
              <Compass size={15} className="text-[#D6AD55]" />
              <span>Across God's Own Country</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-[#11291D] tracking-tight mt-0.5">
              Explore Properties by District (14 ജില്ലകൾ)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select any of Kerala's 14 districts to find land, villas, apartments and commercial hubs
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-2xl border border-[#E2EBE5] shadow-2xs overflow-x-auto no-scrollbar">
            {[
              { id: 'all', label: 'All 14 Districts' },
              { id: 'South Kerala', label: 'South Kerala' },
              { id: 'Central Kerala', label: 'Central Kerala' },
              { id: 'North Kerala', label: 'North Kerala' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setDistrictRegionTab(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  districtRegionTab === tab.id
                    ? 'bg-[#145C3D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 14 Districts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4">
          {displayedDistricts.map((district) => (
            <div
              key={district.id}
              onClick={() => handleDistrictClick(district.name)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E2EBE5] hover:border-[#145C3D] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-slate-900">
                <img
                  src={district.image}
                  alt={district.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-2 left-2 bg-black/40 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/20">
                  {district.region}
                </div>
                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <h3 className="font-bold text-xs sm:text-sm leading-tight flex items-center justify-between">
                    <span>{district.name}</span>
                  </h3>
                  <p className="text-[10px] text-emerald-200 font-medium">
                    {district.malayalam}
                  </p>
                </div>
              </div>

              <div className="p-3 text-xs flex flex-col justify-between flex-grow space-y-1.5">
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {district.description}
                </p>
                <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-[#145C3D]">
                  <span>Explore {district.name}</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. POPULAR CITIES & GROWTH CENTERS IN KERALA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#D6AD55] uppercase tracking-wider">
              <Sparkles size={14} />
              <span>High Demand Growth Corridors</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-[#11291D] tracking-tight mt-0.5">
              Popular Cities & Towns Across Kerala
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Explore key real estate hotspots from Kochi IT corridor to Wayanad countryside retreats
            </p>
          </div>

          {/* City Cluster Filters */}
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-2xl border border-[#E2EBE5] shadow-2xs overflow-x-auto no-scrollbar">
            {[
              { id: 'all', label: 'All Cities (30+)' },
              { id: 'kochi', label: 'Kochi Metro' },
              { id: 'trivandrum', label: 'Trivandrum' },
              { id: 'malabar', label: 'Malabar' },
              { id: 'central', label: 'Central' },
              { id: 'highland', label: 'Highlands & Hills' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCityFilterTab(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  cityFilterTab === tab.id
                    ? 'bg-[#145C3D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Popular Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
          {displayedCities.map((city) => (
            <div
              key={city.id}
              onClick={() => handleCityClick(city.name, city.district)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E2EBE5] hover:border-[#145C3D] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-slate-900">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute bottom-2 left-2 text-white font-bold text-xs sm:text-sm truncate">
                  {city.name}
                </span>
                <span className="absolute top-2 right-2 bg-black/40 backdrop-blur-xs text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                  {city.district}
                </span>
              </div>

              <div className="p-2.5 text-xs flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-[10px] text-slate-400 font-medium truncate">{city.tag}</p>
                  <p className="text-[#145C3D] font-bold text-[11px] mt-0.5">{city.propertiesCount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED PROPERTIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
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

      {/* 6. LAND & PLOTS ACROSS KERALA (SPECIAL SECTION FOR LAND IN CENTS & ACRES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
        <div className="bg-gradient-to-br from-[#FAF8F2] via-emerald-50/50 to-white rounded-3xl p-6 sm:p-10 border border-[#E2EBE5] shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#145C3D]/10 text-[#145C3D] px-3 py-1 rounded-full text-xs font-bold mb-2">
                <LandPlot size={14} className="text-[#D6AD55]" />
                <span>സെന്റ് & ഏക്കർ പ്ലോട്ടുകൾ</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-[#11291D] tracking-tight">
                Land & Plots Across Kerala
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Find clear-deed residential plots in Cents, road-frontage commercial land, rubber estates, coconut groves, and hill-station land with verified survey boundary documentation.
              </p>
            </div>

            <button
              onClick={() => {
                setSearchFilters((prev) => ({ ...prev, propertyType: 'land-plots' }));
                navigateTo('search');
              }}
              className="px-5 py-2.5 rounded-2xl bg-[#145C3D] hover:bg-[#0C3423] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
            >
              <span>Explore All Plots</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {landListings.length > 0 ? (
              landListings.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            ) : (
              <div className="col-span-3 text-center py-8 bg-white rounded-2xl border border-slate-200">
                <p className="text-xs font-bold text-slate-700">Explore residential plots and plantations across Kerala</p>
                <button
                  onClick={() => {
                    setSearchFilters((prev) => ({ ...prev, propertyType: 'land-plots' }));
                    navigateTo('search');
                  }}
                  className="mt-3 px-4 py-2 bg-[#145C3D] text-white rounded-xl text-xs font-bold"
                >
                  View Land Listings
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. HOMES & APARTMENTS (HOUSES, VILLAS, FLATS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#145C3D] uppercase tracking-wider">
              <HomeIcon size={14} className="text-[#D6AD55]" />
              <span>Modern & Heritage Living</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-[#11291D] tracking-tight mt-0.5">
              Homes & Apartments (വീടുകളും ഫ്ലാറ്റുകളും)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Gated villas, Nalukettu traditional architecture, and waterfront sky residences
            </p>
          </div>

          <button
            onClick={() => {
              setSearchFilters((prev) => ({ ...prev, propertyType: 'villas' }));
              navigateTo('search');
            }}
            className="text-xs font-bold text-[#145C3D] hover:underline flex items-center gap-1"
          >
            <span>View all homes & flats</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {homesListings.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* 8. RENTAL PROPERTIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#145C3D] uppercase tracking-wider">
              <KeyRound size={14} className="text-[#D6AD55]" />
              <span>Flexible Leases & Furnished Stays</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-[#11291D] tracking-tight mt-0.5">
              Rental Properties Across Kerala
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Family homes, bachelor apartments near Technopark/Infopark, and commercial lease spaces
            </p>
          </div>

          <button
            onClick={() => {
              setSearchFilters((prev) => ({ ...prev, purpose: 'rent' }));
              navigateTo('search');
            }}
            className="text-xs font-bold text-[#145C3D] hover:underline flex items-center gap-1"
          >
            <span>View all rentals</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {rentalListings.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* 9. COMMERCIAL PROPERTIES & SHOPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#145C3D] uppercase tracking-wider">
              <Building size={14} className="text-[#D6AD55]" />
              <span>Business & Retail Expansion</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-[#11291D] tracking-tight mt-0.5">
              Commercial Properties, Shops & Offices
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              High-ROI commercial towers, national highway frontage showrooms, and corporate tech offices
            </p>
          </div>

          <button
            onClick={() => {
              setSearchFilters((prev) => ({ ...prev, propertyType: 'commercial' }));
              navigateTo('search');
            }}
            className="text-xs font-bold text-[#145C3D] hover:underline flex items-center gap-1"
          >
            <span>View commercial spaces</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {commercialListings.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* 10. SELLER / NRI CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
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

      {/* 11. RECENTLY ADDED NEAR YOU */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#145C3D] uppercase tracking-wider">
              <MapPin size={14} className="text-[#27865B]" />
              <span>Real-Time Updates</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-[#11291D] tracking-tight mt-0.5">
              Recently Added Near You
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Fresh listings updated in real time from owners and certified builders across Kerala
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {recentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* 12. TRUST & WHY VEEDUX SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20 mb-12 sm:mb-16">
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
