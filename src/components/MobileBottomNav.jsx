import React from 'react';
import { Home, Search, PlusCircle, Heart, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function MobileBottomNav() {
  const { currentPage, navigateTo, savedIds, activeAccountTab } = useApp();

  const isSavedActive = currentPage === 'account' && activeAccountTab === 'saved';
  const isProfileActive = currentPage === 'account' && activeAccountTab !== 'saved';

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2EBE5] px-3 py-1.5 shadow-[0_-4px_20px_rgba(20,92,61,0.08)] max-w-md mx-auto"
    >
      <div className="flex items-center justify-between">
        {/* Home */}
        <button
          onClick={() => navigateTo('home')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            currentPage === 'home'
              ? 'text-[#145C3D] font-bold'
              : 'text-slate-500 hover:text-[#145C3D]'
          }`}
        >
          <div className="relative">
            <Home size={22} strokeWidth={currentPage === 'home' ? 2.5 : 1.8} />
            {currentPage === 'home' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D6AD55] rounded-full" />
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight">Home</span>
        </button>

        {/* Search */}
        <button
          onClick={() => navigateTo('search')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            currentPage === 'search'
              ? 'text-[#145C3D] font-bold'
              : 'text-slate-500 hover:text-[#145C3D]'
          }`}
        >
          <div className="relative">
            <Search size={22} strokeWidth={currentPage === 'search' ? 2.5 : 1.8} />
            {currentPage === 'search' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D6AD55] rounded-full" />
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight">Search</span>
        </button>

        {/* Post Property - Center Highlighted Button */}
        <div className="relative -top-3.5 flex flex-col items-center">
          <button
            onClick={() => navigateTo('post')}
            className="flex items-center justify-center w-13 h-13 rounded-full bg-gradient-to-tr from-[#145C3D] via-[#27865B] to-[#D6AD55] text-white shadow-[0_6px_20px_rgba(20,92,61,0.4)] hover:scale-105 active:scale-95 transition-transform border-3 border-white ring-2 ring-[#D6AD55]/40"
            aria-label="Post Property Free"
          >
            <PlusCircle size={28} className="text-white drop-shadow-sm" />
          </button>
          <span className="text-[10px] font-bold text-[#145C3D] mt-0.5 tracking-tight">
            Post
          </span>
        </div>

        {/* Saved */}
        <button
          onClick={() => navigateTo('account', null, 'saved')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            isSavedActive
              ? 'text-[#145C3D] font-bold'
              : 'text-slate-500 hover:text-[#145C3D]'
          }`}
        >
          <div className="relative">
            <Heart size={22} strokeWidth={isSavedActive ? 2.5 : 1.8} />
            {savedIds.length > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#D6AD55] text-[#0C3423] text-[9px] font-black rounded-full h-4 min-w-[16px] px-1 flex items-center justify-center shadow-xs">
                {savedIds.length}
              </span>
            )}
            {isSavedActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D6AD55] rounded-full" />
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight">Saved</span>
        </button>

        {/* Profile */}
        <button
          onClick={() => navigateTo('account', null, 'profile')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            isProfileActive
              ? 'text-[#145C3D] font-bold'
              : 'text-slate-500 hover:text-[#145C3D]'
          }`}
        >
          <div className="relative">
            <User size={22} strokeWidth={isProfileActive ? 2.5 : 1.8} />
            {isProfileActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D6AD55] rounded-full" />
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight">Profile</span>
        </button>
      </div>
    </nav>
  );
}
