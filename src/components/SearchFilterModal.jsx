import React, { useState } from 'react';
import { X, Search, SlidersHorizontal, MapPin, Check, RotateCcw } from 'lucide-react';
import { KERALA_DISTRICTS, CATEGORIES } from '../data/veeduxData';

export default function SearchFilterModal({
  isOpen,
  onClose,
  filters,
  setFilters,
  onApplyFilters,
}) {
  if (!isOpen) return null;

  const handleReset = () => {
    setFilters({
      purpose: 'all', // all | buy | rent
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
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in">
      <div className="bg-[#FAF8F2] w-full max-w-lg min-h-screen sm:min-h-0 sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative my-auto border border-[#E2EBE5]">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-4 py-3.5 border-b border-[#E2EBE5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={18} className="text-[#145C3D]" />
            <span className="font-bold text-base text-[#145C3D]">Filters & Search</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="text-xs text-slate-500 hover:text-[#145C3D] flex items-center gap-1 font-medium transition-colors"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-slate-100 text-slate-700"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Filter Options */}
        <div className="p-4 sm:p-5 space-y-5 overflow-y-auto max-h-[75vh]">
          {/* 1. Purpose: Buy vs Rent */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              Looking To
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'all', label: 'All Listings' },
                { id: 'buy', label: 'Buy Property' },
                { id: 'rent', label: 'Rent / Lease' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilters({ ...filters, purpose: tab.id })}
                  className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                    filters.purpose === tab.id
                      ? 'bg-[#145C3D] text-white border-[#145C3D] shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-[#145C3D]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Kerala District Picker */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              Kerala District
            </label>
            <div className="relative">
              <select
                value={filters.district}
                onChange={(e) => setFilters({ ...filters, district: e.target.value })}
                className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:outline-none focus:border-[#145C3D]"
              >
                <option value="All Kerala">All Kerala (All 14 Districts)</option>
                {KERALA_DISTRICTS.map((dist) => (
                  <option key={dist.code} value={dist.name}>
                    {dist.name} ({dist.malayalam}) - {dist.activeListings} listings
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. Locality / City Search */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              Locality / Landmark
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="E.g. Kakkanad, Marine Drive, Kowdiar, Beach Road..."
                value={filters.locality}
                onChange={(e) => setFilters({ ...filters, locality: e.target.value })}
                className="w-full text-xs p-3 pl-9 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#145C3D]"
              />
              <MapPin size={16} className="absolute left-3 top-3 text-slate-400" />
            </div>
          </div>

          {/* 4. Property Category */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              Property Category
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFilters({ ...filters, category: 'all' })}
                className={`p-2.5 rounded-xl text-xs font-semibold border text-left flex items-center justify-between ${
                  filters.category === 'all'
                    ? 'bg-[#145C3D] text-white border-[#145C3D]'
                    : 'bg-white text-slate-700 border-slate-200'
                }`}
              >
                <span>All Categories</span>
                {filters.category === 'all' && <Check size={14} />}
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFilters({ ...filters, category: cat.id })}
                  className={`p-2.5 rounded-xl text-xs font-semibold border text-left flex items-center justify-between ${
                    filters.category === cat.id
                      ? 'bg-[#145C3D] text-white border-[#145C3D]'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  <span className="truncate">{cat.name}</span>
                  {filters.category === cat.id && <Check size={14} />}
                </button>
              ))}
            </div>
          </div>

          {/* 5. Bedrooms (BHK) */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              Bedrooms (BHK)
            </label>
            <div className="flex gap-2">
              {['all', '1', '2', '3', '4', '5+'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilters({ ...filters, bhk: item })}
                  className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    filters.bhk === item
                      ? 'bg-[#D6AD55] text-[#0C3423] font-bold border-[#D6AD55]'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  {item === 'all' ? 'Any' : `${item} BHK`}
                </button>
              ))}
            </div>
          </div>

          {/* 6. Land Area in Cents (Kerala Special) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Land Area (Cents)
              </label>
              <span className="text-[10px] text-[#145C3D] font-semibold bg-emerald-100/70 px-2 py-0.5 rounded-md">
                1 Cent = 435.6 sq.ft
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Min Cents (e.g. 5)"
                value={filters.landAreaCentsMin}
                onChange={(e) => setFilters({ ...filters, landAreaCentsMin: e.target.value })}
                className="text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
              />
              <input
                type="number"
                placeholder="Max Cents (e.g. 50)"
                value={filters.landAreaCentsMax}
                onChange={(e) => setFilters({ ...filters, landAreaCentsMax: e.target.value })}
                className="text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
              />
            </div>
          </div>

          {/* 7. Sort Options */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              Sort Listings
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white font-medium focus:outline-none"
            >
              <option value="newest">Newest First (Freshly Added)</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="verified">Verified Listings First</option>
            </select>
          </div>

          {/* 8. Verified & Direct Owner Toggles */}
          <div className="pt-2 border-t border-slate-200 space-y-2">
            <label className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 cursor-pointer">
              <span className="text-xs font-semibold text-slate-800">
                Direct Owner Listings Only (Zero Broker)
              </span>
              <input
                type="checkbox"
                checked={filters.directOwnerOnly}
                onChange={(e) =>
                  setFilters({ ...filters, directOwnerOnly: e.target.checked })
                }
                className="w-4 h-4 accent-[#145C3D] rounded-sm"
              />
            </label>

            <label className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 cursor-pointer">
              <span className="text-xs font-semibold text-slate-800">
                VeeduX Verified Properties Only
              </span>
              <input
                type="checkbox"
                checked={filters.verifiedOnly}
                onChange={(e) => setFilters({ ...filters, verifiedOnly: e.target.checked })}
                className="w-4 h-4 accent-[#145C3D] rounded-sm"
              />
            </label>
          </div>
        </div>

        {/* Footer Apply Button */}
        <div className="sticky bottom-0 bg-white px-4 py-3 border-t border-[#E2EBE5] flex items-center gap-3 shadow-lg">
          <button
            onClick={() => {
              onApplyFilters?.();
              onClose();
            }}
            className="w-full py-3 bg-[#145C3D] hover:bg-[#0C3423] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Search size={15} />
            <span>Show Matching Kerala Properties</span>
          </button>
        </div>
      </div>
    </div>
  );
}
