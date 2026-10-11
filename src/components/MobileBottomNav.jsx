import React from 'react';
import { Home, Search, PlusCircle, Heart, User } from 'lucide-react';

export default function MobileBottomNav({
  activeTab,
  setActiveTab,
  savedCount = 0,
  onOpenPostProperty,
}) {
  return (
    <nav aria-label="Mobile Navigation" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2EBE5] px-3 py-1.5 shadow-[0_-4px_20px_rgba(20,92,61,0.08)] max-w-md mx-auto">
      <div className="flex items-center justify-between">
        {/* Home Button */}
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
            activeTab === 'home'
              ? 'text-[#145C3D] font-bold'
              : 'text-slate-500 hover:text-[#145C3D]'
          }`}
        >
          <div className="relative">
            <Home size={22} strokeWidth={activeTab === 'home' ? 2.5 : 1.8} />
            {activeTab === 'home' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D6AD55] rounded-full"></span>
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight">Home</span>
        </button>

        {/* Search / Filter Button */}
        <button
          onClick={() => setActiveTab('search')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
            activeTab === 'search'
              ? 'text-[#145C3D] font-bold'
              : 'text-slate-500 hover:text-[#145C3D]'
          }`}
        >
          <div className="relative">
            <Search size={22} strokeWidth={activeTab === 'search' ? 2.5 : 1.8} />
            {activeTab === 'search' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D6AD55] rounded-full"></span>
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight">Search</span>
        </button>

        {/* Post Property - Prominent Center Floating Button */}
        <div className="relative -top-3 flex flex-col items-center">
          <button
            onClick={onOpenPostProperty}
            className="flex items-center justify-center w-13 h-13 rounded-full bg-gradient-to-tr from-[#145C3D] via-[#27865B] to-[#D6AD55] text-white shadow-[0_6px_20px_rgba(20,92,61,0.35)] hover:scale-105 active:scale-95 transition-transform border-3 border-white ring-2 ring-[#D6AD55]/40"
            aria-label="Post Property"
          >
            <PlusCircle size={28} className="text-white drop-shadow-sm" />
          </button>
          <span className="text-[10px] font-bold text-[#145C3D] mt-0.5 tracking-tight">
            Post Ad
          </span>
        </div>

        {/* Saved Properties Button */}
        <button
          onClick={() => setActiveTab('saved')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
            activeTab === 'saved'
              ? 'text-[#145C3D] font-bold'
              : 'text-slate-500 hover:text-[#145C3D]'
          }`}
        >
          <div className="relative">
            <Heart size={22} strokeWidth={activeTab === 'saved' ? 2.5 : 1.8} />
            {savedCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#D6AD55] text-[#0C3423] text-[9px] font-black rounded-full h-4 min-w-[16px] px-1 flex items-center justify-center shadow-xs">
                {savedCount}
              </span>
            )}
            {activeTab === 'saved' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D6AD55] rounded-full"></span>
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight">Saved</span>
        </button>

        {/* Profile / Account Button */}
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
            activeTab === 'profile'
              ? 'text-[#145C3D] font-bold'
              : 'text-slate-500 hover:text-[#145C3D]'
          }`}
        >
          <div className="relative">
            <User size={22} strokeWidth={activeTab === 'profile' ? 2.5 : 1.8} />
            {activeTab === 'profile' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D6AD55] rounded-full"></span>
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight">Profile</span>
        </button>
      </div>
    </nav>
  );
}
