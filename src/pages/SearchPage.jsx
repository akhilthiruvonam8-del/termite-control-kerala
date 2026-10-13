import React, { useState, useMemo } from 'react';
import {
  Search,
  MapPin,
  SlidersHorizontal,
  RotateCcw,
  Check,
  X,
  Map as MapIcon,
  List,
  Sparkles,
  BedDouble,
  Bath,
  Maximize2,
  Car,
  ShieldCheck,
  Compass,
  ChevronRight,
  Layers,
} from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { useApp } from '../context/AppContext';
import { PROPERTY_TYPES } from '../data/veeduxData';
import {
  KERALA_DISTRICTS,
  getCitiesByDistrict,
  POPULAR_KERALA_CITIES,
  STATE_INFO,
} from '../data/locations';

export default function SearchPage() {
  const { properties, searchFilters, setSearchFilters, navigateTo } = useApp();
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'map'
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Available cities based on selected district
  const availableCities = useMemo(() => {
    if (!searchFilters.district || searchFilters.district === 'All Kerala') {
      return POPULAR_KERALA_CITIES.map((c) => ({
        id: c.id,
        name: c.name,
        type: 'Popular Hub',
        district: c.district,
      }));
    }
    return getCitiesByDistrict(searchFilters.district);
  }, [searchFilters.district]);

  // Filter handlers
  const handleResetFilters = () => {
    setSearchFilters({
      query: '',
      purpose: 'all',
      district: 'All Kerala',
      city: 'All Cities',
      locality: '',
      propertyType: 'all',
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
      sortBy: 'newest',
    });
  };

  // Filtered & Sorted Properties List
  const filteredList = useMemo(() => {
    let result = properties.filter((p) => p.approvalStatus !== 'rejected' && p.approvalStatus !== 'pending');

    // 1. Text Query
    if (searchFilters.query?.trim()) {
      const q = searchFilters.query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.district.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q)
      );
    }

    // 2. Purpose: Buy vs Rent
    if (searchFilters.purpose && searchFilters.purpose !== 'all') {
      result = result.filter((p) => p.purpose === searchFilters.purpose);
    }

    // 3. District
    if (searchFilters.district && searchFilters.district !== 'All Kerala') {
      result = result.filter((p) => p.district.toLowerCase().includes(searchFilters.district.toLowerCase()));
    }

    // 3b. City
    if (searchFilters.city && searchFilters.city !== 'All Cities') {
      const c = searchFilters.city.toLowerCase();
      result = result.filter(
        (p) =>
          p.location.toLowerCase().includes(c) ||
          (p.city && p.city.toLowerCase().includes(c)) ||
          (p.locality && p.locality.toLowerCase().includes(c))
      );
    }

    // 4. Locality
    if (searchFilters.locality?.trim()) {
      const loc = searchFilters.locality.toLowerCase();
      result = result.filter((p) => p.location.toLowerCase().includes(loc) || p.locality?.toLowerCase().includes(loc));
    }

    // 5. Property Type
    if (searchFilters.propertyType && searchFilters.propertyType !== 'all') {
      result = result.filter((p) => p.propertyType === searchFilters.propertyType);
    }

    // 6. Min & Max Price
    if (searchFilters.minPrice) {
      const min = Number(searchFilters.minPrice);
      result = result.filter((p) => p.priceNumber >= min);
    }
    if (searchFilters.maxPrice) {
      const max = Number(searchFilters.maxPrice);
      result = result.filter((p) => p.priceNumber <= max);
    }

    // 6b. Land Area in Cents (min / max)
    if (searchFilters.landAreaMin) {
      const minCents = Number(searchFilters.landAreaMin);
      result = result.filter((p) => (p.landAreaCents !== undefined ? p.landAreaCents >= minCents : true));
    }
    if (searchFilters.landAreaMax) {
      const maxCents = Number(searchFilters.landAreaMax);
      result = result.filter((p) => (p.landAreaCents !== undefined ? p.landAreaCents <= maxCents : true));
    }

    // 6c. Built-Up Area in Sq.Ft (min / max)
    if (searchFilters.builtUpMin) {
      const minSq = Number(searchFilters.builtUpMin);
      result = result.filter((p) => (p.builtUpSqFt !== undefined ? p.builtUpSqFt >= minSq : true));
    }
    if (searchFilters.builtUpMax) {
      const maxSq = Number(searchFilters.builtUpMax);
      result = result.filter((p) => (p.builtUpSqFt !== undefined ? p.builtUpSqFt <= maxSq : true));
    }

    // 7. Bedrooms
    if (searchFilters.bedrooms && searchFilters.bedrooms !== 'all') {
      const b = Number(searchFilters.bedrooms);
      result = result.filter((p) => p.bedrooms >= b);
    }

    // 8. Bathrooms
    if (searchFilters.bathrooms && searchFilters.bathrooms !== 'all') {
      const ba = Number(searchFilters.bathrooms);
      result = result.filter((p) => p.bathrooms >= ba);
    }

    // 9. Furnished Status
    if (searchFilters.furnishedStatus && searchFilters.furnishedStatus !== 'all') {
      result = result.filter((p) => p.furnishing === searchFilters.furnishedStatus);
    }

    // 10. Verified Only
    if (searchFilters.verifiedOnly) {
      result = result.filter((p) => p.verified);
    }

    // 11. Direct Owner Only
    if (searchFilters.directOwnerOnly) {
      result = result.filter((p) => p.directOwner);
    }

    // Sorting
    if (searchFilters.sortBy === 'price-low') {
      result.sort((a, b) => a.priceNumber - b.priceNumber);
    } else if (searchFilters.sortBy === 'price-high') {
      result.sort((a, b) => b.priceNumber - a.priceNumber);
    } else {
      // Newest (default)
      result.sort((a, b) => b.id.localeCompare(a.id));
    }

    return result;
  }, [properties, searchFilters]);

  // Sidebar Filter Component
  const FilterContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-[#E2EBE5]">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-[#145C3D]" />
          <h3 className="font-bold text-sm text-slate-900">Search Filters</h3>
        </div>
        <button
          onClick={handleResetFilters}
          className="text-xs text-slate-500 hover:text-[#145C3D] font-medium flex items-center gap-1"
        >
          <RotateCcw size={12} />
          <span>Reset All</span>
        </button>
      </div>

      {/* One-click "Search Across Kerala" Reset Button */}
      <button
        type="button"
        onClick={() =>
          setSearchFilters((prev) => ({
            ...prev,
            district: 'All Kerala',
            city: 'All Cities',
            locality: '',
          }))
        }
        className={`w-full py-2.5 px-3 rounded-2xl text-xs font-bold flex items-center justify-between border transition-all ${
          searchFilters.district === 'All Kerala'
            ? 'bg-[#145C3D] text-white border-[#145C3D] shadow-xs'
            : 'bg-emerald-50 text-[#145C3D] border-emerald-200 hover:bg-emerald-100'
        }`}
      >
        <span className="flex items-center gap-1.5">
          <Compass size={14} className={searchFilters.district === 'All Kerala' ? 'text-[#D6AD55]' : 'text-[#27865B]'} />
          Search Across All Kerala
        </span>
        <span className="text-[10px] opacity-80 font-bold">14 ജില്ലകൾ</span>
      </button>

      {/* Purpose: Buy / Rent */}
      <div>
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
          Listing Type
        </label>
        <div className="grid grid-cols-3 gap-1.5 bg-[#FAF8F2] p-1 rounded-2xl border border-[#E2EBE5]">
          {[
            { id: 'all', label: 'All' },
            { id: 'sell', label: 'Buy' },
            { id: 'rent', label: 'Rent' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSearchFilters((prev) => ({ ...prev, purpose: item.id }))}
              className={`py-2 rounded-xl text-xs font-bold transition-all ${
                searchFilters.purpose === item.id
                  ? 'bg-[#145C3D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Kerala District Selector (14 Districts) */}
      <div>
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 flex items-center justify-between">
          <span>Kerala District (ജില്ല)</span>
          <span className="text-[10px] text-emerald-700 font-bold">14 Districts</span>
        </label>
        <select
          value={searchFilters.district}
          onChange={(e) => {
            const newDist = e.target.value;
            setSearchFilters((prev) => ({
              ...prev,
              district: newDist,
              city: 'All Cities',
            }));
          }}
          className="w-full bg-[#FAF8F2] p-3 rounded-2xl text-xs font-semibold text-slate-800 border border-[#E2EBE5] focus:outline-none focus:border-[#145C3D]"
        >
          <option value="All Kerala">All Kerala (All 14 Districts)</option>
          {KERALA_DISTRICTS.map((d) => (
            <option key={d.id} value={d.name}>
              {d.name} ({d.malayalam}) — {d.region}
            </option>
          ))}
        </select>
      </div>

      {/* Cascading City / Town Selector */}
      <div>
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 flex items-center justify-between">
          <span>City / Town / Municipality</span>
          {searchFilters.district !== 'All Kerala' && (
            <span className="text-[10px] text-slate-500 font-semibold">{searchFilters.district}</span>
          )}
        </label>
        <select
          value={searchFilters.city || 'All Cities'}
          onChange={(e) => setSearchFilters((prev) => ({ ...prev, city: e.target.value }))}
          className="w-full bg-[#FAF8F2] p-3 rounded-2xl text-xs font-semibold text-slate-800 border border-[#E2EBE5] focus:outline-none focus:border-[#145C3D]"
        >
          <option value="All Cities">
            {searchFilters.district === 'All Kerala'
              ? 'All Kerala Cities & Towns'
              : `All Cities in ${searchFilters.district}`}
          </option>
          {availableCities.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name} {c.type ? `(${c.type})` : ''}
            </option>
          ))}
        </select>
      </div>

      {/* Locality & Landmark Search */}
      <div>
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
          Locality / Landmark
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="E.g. Kakkanad, Pattom, Marine Drive, Infopark..."
            value={searchFilters.locality || ''}
            onChange={(e) => setSearchFilters((prev) => ({ ...prev, locality: e.target.value }))}
            className="w-full bg-[#FAF8F2] p-3 pl-9 rounded-2xl text-xs font-medium text-slate-800 border border-[#E2EBE5] focus:outline-none focus:border-[#145C3D]"
          />
          <MapPin size={15} className="absolute left-3 top-3.5 text-slate-400" />
        </div>
      </div>

      {/* Property Type (All 9 types) */}
      <div>
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
          Property Type
        </label>
        <div className="space-y-1 max-h-48 overflow-y-auto no-scrollbar">
          <button
            onClick={() => setSearchFilters((prev) => ({ ...prev, propertyType: 'all' }))}
            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
              searchFilters.propertyType === 'all'
                ? 'bg-emerald-50 text-[#145C3D]'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span>All Property Types</span>
            {searchFilters.propertyType === 'all' && <Check size={14} />}
          </button>
          {PROPERTY_TYPES.map((t) => (
            <button
              key={t.id}
              onClick={() => setSearchFilters((prev) => ({ ...prev, propertyType: t.id }))}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                searchFilters.propertyType === t.id
                  ? 'bg-emerald-50 text-[#145C3D]'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>{t.name}</span>
              {searchFilters.propertyType === t.id && <Check size={14} />}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
          Price Range (₹)
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Min Price (₹)"
            value={searchFilters.minPrice}
            onChange={(e) => setSearchFilters((prev) => ({ ...prev, minPrice: e.target.value }))}
            className="w-full bg-[#FAF8F2] p-2.5 rounded-xl text-xs border border-[#E2EBE5] focus:outline-none"
          />
          <input
            type="number"
            placeholder="Max Price (₹)"
            value={searchFilters.maxPrice}
            onChange={(e) => setSearchFilters((prev) => ({ ...prev, maxPrice: e.target.value }))}
            className="w-full bg-[#FAF8F2] p-2.5 rounded-xl text-xs border border-[#E2EBE5] focus:outline-none"
          />
        </div>
      </div>

      {/* Land Area in Cents (Kerala standard measurement) */}
      <div>
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 flex items-center justify-between">
          <span>Land Area (Cents - സെന്റ്)</span>
          <span className="text-[10px] text-slate-400">1 Cent ≈ 435.6 sq.ft</span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Min Cents"
            value={searchFilters.landAreaMin || ''}
            onChange={(e) => setSearchFilters((prev) => ({ ...prev, landAreaMin: e.target.value }))}
            className="w-full bg-[#FAF8F2] p-2.5 rounded-xl text-xs border border-[#E2EBE5] focus:outline-none"
          />
          <input
            type="number"
            placeholder="Max Cents"
            value={searchFilters.landAreaMax || ''}
            onChange={(e) => setSearchFilters((prev) => ({ ...prev, landAreaMax: e.target.value }))}
            className="w-full bg-[#FAF8F2] p-2.5 rounded-xl text-xs border border-[#E2EBE5] focus:outline-none"
          />
        </div>
      </div>

      {/* Built-Up Area in Sq.Ft */}
      <div>
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
          Built-Up Area (Sq.Ft)
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Min Sq.Ft"
            value={searchFilters.builtUpMin || ''}
            onChange={(e) => setSearchFilters((prev) => ({ ...prev, builtUpMin: e.target.value }))}
            className="w-full bg-[#FAF8F2] p-2.5 rounded-xl text-xs border border-[#E2EBE5] focus:outline-none"
          />
          <input
            type="number"
            placeholder="Max Sq.Ft"
            value={searchFilters.builtUpMax || ''}
            onChange={(e) => setSearchFilters((prev) => ({ ...prev, builtUpMax: e.target.value }))}
            className="w-full bg-[#FAF8F2] p-2.5 rounded-xl text-xs border border-[#E2EBE5] focus:outline-none"
          />
        </div>
      </div>

      {/* Bedrooms (BHK) */}
      <div>
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
          Bedrooms (BHK)
        </label>
        <div className="flex gap-1.5">
          {['all', '1', '2', '3', '4', '5'].map((b) => (
            <button
              key={b}
              onClick={() => setSearchFilters((prev) => ({ ...prev, bedrooms: b }))}
              className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                searchFilters.bedrooms === b
                  ? 'bg-[#145C3D] text-white border-[#145C3D]'
                  : 'bg-[#FAF8F2] text-slate-700 border-[#E2EBE5]'
              }`}
            >
              {b === 'all' ? 'Any' : `${b}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Bathrooms */}
      <div>
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
          Bathrooms
        </label>
        <div className="flex gap-1.5">
          {['all', '1', '2', '3', '4'].map((ba) => (
            <button
              key={ba}
              onClick={() => setSearchFilters((prev) => ({ ...prev, bathrooms: ba }))}
              className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                searchFilters.bathrooms === ba
                  ? 'bg-[#145C3D] text-white border-[#145C3D]'
                  : 'bg-[#FAF8F2] text-slate-700 border-[#E2EBE5]'
              }`}
            >
              {ba === 'all' ? 'Any' : `${ba}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Verified & Direct Owner Toggles */}
      <div className="pt-2 border-t border-slate-100 space-y-2.5">
        <label className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F2] border border-[#E2EBE5] cursor-pointer">
          <span className="text-xs font-semibold text-slate-800">
            Verified Properties Only
          </span>
          <input
            type="checkbox"
            checked={searchFilters.verifiedOnly}
            onChange={(e) =>
              setSearchFilters((prev) => ({ ...prev, verifiedOnly: e.target.checked }))
            }
            className="w-4 h-4 accent-[#145C3D] rounded-sm"
          />
        </label>

        <label className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F2] border border-[#E2EBE5] cursor-pointer">
          <span className="text-xs font-semibold text-slate-800">
            Direct Owner Only (Zero Broker)
          </span>
          <input
            type="checkbox"
            checked={searchFilters.directOwnerOnly}
            onChange={(e) =>
              setSearchFilters((prev) => ({ ...prev, directOwnerOnly: e.target.checked }))
            }
            className="w-4 h-4 accent-[#145C3D] rounded-sm"
          />
        </label>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-[#FAF8F2] min-h-screen pb-20">
      {/* Top Search Controls Bar */}
      <div className="bg-white border-b border-[#E2EBE5] sticky top-16 sm:top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
          {/* Search Query Input */}
          <div className="flex-1 min-w-[240px] relative">
            <input
              type="text"
              placeholder="Search Kerala properties by location, villa name, landmark..."
              value={searchFilters.query || ''}
              onChange={(e) => setSearchFilters((prev) => ({ ...prev, query: e.target.value }))}
              className="w-full bg-[#FAF8F2] p-2.5 pl-9 pr-8 rounded-full text-xs sm:text-sm font-medium border border-[#E2EBE5] focus:outline-none focus:border-[#145C3D]"
            />
            <Search size={16} className="absolute left-3 top-3 text-slate-400" />
            {searchFilters.query && (
              <button
                onClick={() => setSearchFilters((prev) => ({ ...prev, query: '' }))}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-700"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Right Action Bar: Filter Drawer Button, Sort, Map/List Toggle */}
          <div className="flex items-center gap-2">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#FAF8F2] border border-[#E2EBE5] text-xs font-bold text-slate-800"
            >
              <SlidersHorizontal size={14} className="text-[#145C3D]" />
              <span>Filters</span>
            </button>

            {/* Sorting Dropdown */}
            <select
              value={searchFilters.sortBy}
              onChange={(e) =>
                setSearchFilters((prev) => ({ ...prev, sortBy: e.target.value }))
              }
              className="bg-[#FAF8F2] px-3 py-2 rounded-full border border-[#E2EBE5] text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="newest">Sort: Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            {/* Map / List Toggle */}
            <div className="flex items-center bg-[#FAF8F2] p-0.5 rounded-full border border-[#E2EBE5]">
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-full transition-all ${
                  viewMode === 'list'
                    ? 'bg-[#145C3D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="List View"
              >
                <List size={16} />
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`p-1.5 rounded-full transition-all ${
                  viewMode === 'map'
                    ? 'bg-[#145C3D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Map View"
              >
                <MapIcon size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Location Hierarchy Breadcrumbs & Filter Pills Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-2.5 space-y-2">
          {/* Breadcrumb row: Kerala → District → City → Locality */}
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 overflow-x-auto no-scrollbar pt-1">
            <button
              onClick={() =>
                setSearchFilters((prev) => ({
                  ...prev,
                  district: 'All Kerala',
                  city: 'All Cities',
                  locality: '',
                }))
              }
              className="text-[#145C3D] hover:underline font-bold flex items-center gap-1 flex-shrink-0"
            >
              <Compass size={13} className="text-[#D6AD55]" />
              <span>Kerala</span>
            </button>
            <ChevronRight size={11} className="text-slate-400 flex-shrink-0" />

            <button
              onClick={() =>
                setSearchFilters((prev) => ({
                  ...prev,
                  city: 'All Cities',
                  locality: '',
                }))
              }
              className={`hover:underline flex-shrink-0 ${
                searchFilters.district !== 'All Kerala'
                  ? 'text-[#145C3D] font-bold'
                  : 'text-slate-600'
              }`}
            >
              {searchFilters.district || 'All Districts (14)'}
            </button>

            {searchFilters.city && searchFilters.city !== 'All Cities' && (
              <>
                <ChevronRight size={11} className="text-slate-400 flex-shrink-0" />
                <button
                  onClick={() => setSearchFilters((prev) => ({ ...prev, locality: '' }))}
                  className="text-[#145C3D] font-bold hover:underline flex-shrink-0"
                >
                  {searchFilters.city}
                </button>
              </>
            )}

            {searchFilters.locality && (
              <>
                <ChevronRight size={11} className="text-slate-400 flex-shrink-0" />
                <span className="text-slate-900 font-bold bg-[#FAF8F2] px-2 py-0.5 rounded-md border border-[#E2EBE5] flex-shrink-0">
                  {searchFilters.locality}
                </span>
              </>
            )}
          </div>

          {/* Active Filter Badges */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[11px]">
            <span className="font-bold text-[#145C3D] flex-shrink-0 mr-1">
              {filteredList.length} Properties
            </span>

            {searchFilters.district !== 'All Kerala' && (
              <span className="bg-emerald-50 text-[#145C3D] px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold flex items-center gap-1 flex-shrink-0">
                <span>District: {searchFilters.district}</span>
                <button
                  onClick={() =>
                    setSearchFilters((prev) => ({
                      ...prev,
                      district: 'All Kerala',
                      city: 'All Cities',
                    }))
                  }
                >
                  <X size={11} />
                </button>
              </span>
            )}

            {searchFilters.city && searchFilters.city !== 'All Cities' && (
              <span className="bg-emerald-50 text-[#145C3D] px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold flex items-center gap-1 flex-shrink-0">
                <span>City: {searchFilters.city}</span>
                <button
                  onClick={() => setSearchFilters((prev) => ({ ...prev, city: 'All Cities' }))}
                >
                  <X size={11} />
                </button>
              </span>
            )}

            {searchFilters.locality && (
              <span className="bg-emerald-50 text-[#145C3D] px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold flex items-center gap-1 flex-shrink-0">
                <span>Locality: {searchFilters.locality}</span>
                <button
                  onClick={() => setSearchFilters((prev) => ({ ...prev, locality: '' }))}
                >
                  <X size={11} />
                </button>
              </span>
            )}

            {searchFilters.purpose !== 'all' && (
              <span className="bg-emerald-50 text-[#145C3D] px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold flex items-center gap-1 flex-shrink-0">
                <span>For {searchFilters.purpose === 'sell' ? 'Buy' : 'Rent'}</span>
                <button onClick={() => setSearchFilters((prev) => ({ ...prev, purpose: 'all' }))}>
                  <X size={11} />
                </button>
              </span>
            )}

            {searchFilters.propertyType !== 'all' && (
              <span className="bg-emerald-50 text-[#145C3D] px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold flex items-center gap-1 flex-shrink-0">
                <span>Type: {searchFilters.propertyType}</span>
                <button
                  onClick={() => setSearchFilters((prev) => ({ ...prev, propertyType: 'all' }))}
                >
                  <X size={11} />
                </button>
              </span>
            )}

            {searchFilters.landAreaMin && (
              <span className="bg-emerald-50 text-[#145C3D] px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold flex items-center gap-1 flex-shrink-0">
                <span>≥ {searchFilters.landAreaMin} Cents</span>
                <button
                  onClick={() => setSearchFilters((prev) => ({ ...prev, landAreaMin: '' }))}
                >
                  <X size={11} />
                </button>
              </span>
            )}

            {(searchFilters.district !== 'All Kerala' ||
              searchFilters.city !== 'All Cities' ||
              searchFilters.locality ||
              searchFilters.purpose !== 'all' ||
              searchFilters.propertyType !== 'all' ||
              searchFilters.query) && (
              <button
                onClick={handleResetFilters}
                className="text-[11px] text-slate-500 hover:text-rose-600 font-bold underline ml-2 flex-shrink-0"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Desktop Left Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 bg-white rounded-3xl p-6 border border-[#E2EBE5] shadow-xs sticky top-44">
            <FilterContent />
          </aside>

          {/* Right Listings View / Map View */}
          <main className="lg:col-span-3 space-y-6">
            {viewMode === 'map' ? (
              /* Simulated Kerala Interactive Map Discovery */
              <div className="bg-white rounded-3xl p-5 border border-[#E2EBE5] shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-[#145C3D]" />
                    <h3 className="font-bold text-sm text-slate-900">
                      Kerala Map Discovery ({searchFilters.district})
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    Tap pin to preview property
                  </span>
                </div>

                {/* Simulated Geographic Map Canvas with Interactive Kerala Hotspots */}
                <div className="relative rounded-2xl overflow-hidden bg-[#E7EFEA] border border-[#27865B]/30 h-96 sm:h-[480px] flex items-center justify-center p-4">
                  {/* Water / Coastal Background Outline */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-emerald-50/70 to-emerald-100/60 pointer-events-none" />

                  {/* Property Location Pins */}
                  <div className="relative w-full h-full">
                    {filteredList.slice(0, 8).map((prop, idx) => {
                      // Simulated coordinates based on index
                      const positions = [
                        { top: '35%', left: '42%' }, // Kochi
                        { top: '40%', left: '48%' }, // Kakkanad
                        { top: '55%', left: '50%' }, // Alappuzha
                        { top: '25%', left: '46%' }, // Thrissur
                        { top: '15%', left: '38%' }, // Calicut
                        { top: '75%', left: '58%' }, // Trivandrum
                        { top: '60%', left: '52%' }, // Kottayam
                        { top: '10%', left: '45%' }, // Wayanad
                      ];
                      const pos = positions[idx % positions.length];
                      return (
                        <div
                          key={prop.id}
                          style={{ top: pos.top, left: pos.left }}
                          onClick={() => navigateTo('details', prop.id)}
                          className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                        >
                          <div className="flex items-center gap-1 bg-[#145C3D] hover:bg-[#0C3423] text-white px-2.5 py-1 rounded-full shadow-lg border border-white transition-transform hover:scale-110">
                            <span className="text-[10px] font-bold">{prop.price}</span>
                          </div>
                          {/* Mini Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-44 bg-white rounded-xl p-2 shadow-xl border border-slate-200 hidden group-hover:block z-20 pointer-events-none">
                            <p className="font-bold text-[11px] text-slate-900 truncate">
                              {prop.title}
                            </p>
                            <p className="text-[10px] text-[#145C3D] font-bold">{prop.location}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="text-center text-xs text-slate-400">
                  Showing map pins across Kerala districts. Click any price pin to view full property details.
                </div>
              </div>
            ) : null}

            {/* Property Cards Grid */}
            {filteredList.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-[#E2EBE5] space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#145C3D] flex items-center justify-center mx-auto">
                  <Search size={32} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base text-slate-800">
                    No Properties Match Your Search
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Try broadening your filters or reset to browse all verified Kerala properties.
                  </p>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 bg-[#145C3D] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#0C3423] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredList.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filters Slide-Over Drawer */}
      {mobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in">
          <div className="bg-white w-full max-w-sm h-full p-5 overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <h3 className="font-bold text-base text-slate-900">Filters</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700"
                >
                  <X size={20} />
                </button>
              </div>
              <FilterContent />
            </div>

            <div className="pt-4 border-t border-slate-100 mt-6">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-[#145C3D] hover:bg-[#0C3423] text-white font-bold text-xs rounded-2xl shadow-md"
              >
                Show {filteredList.length} Properties
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
