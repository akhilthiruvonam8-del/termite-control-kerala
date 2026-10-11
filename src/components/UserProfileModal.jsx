import React, { useState } from 'react';
import {
  X,
  User,
  Heart,
  Home,
  MessageSquare,
  Shield,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  PlusCircle,
  CheckCircle2,
} from 'lucide-react';
import VeeduXLogo from './VeeduXLogo';

export default function UserProfileModal({
  isOpen,
  onClose,
  user,
  onLogout,
  onOpenPostProperty,
  onOpenSaved,
  onOpenAdmin,
  savedCount = 0,
}) {
  const [activeTab, setActiveTab] = useState('profile');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-[#FAF8F2] w-full max-w-md min-h-screen sm:min-h-0 sm:rounded-3xl shadow-2xl overflow-hidden border border-[#E2EBE5] relative flex flex-col my-auto">
        {/* Header */}
        <div className="bg-[#145C3D] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <VeeduXLogo variant="light" size="sm" showTagline={false} />
            <span className="font-semibold text-xs text-[#D6AD55]">Account</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Profile Info Banner */}
        <div className="bg-white p-5 border-b border-[#E2EBE5] flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#145C3D] to-[#D6AD55] text-white flex items-center justify-center font-bold text-xl shadow-md border-2 border-white">
            {user?.name ? user.name[0].toUpperCase() : 'U'}
          </div>

          <div className="flex-grow">
            <h2 className="font-bold text-slate-900 text-base">{user?.name || 'Kerala Resident'}</h2>
            <p className="text-xs text-slate-500">{user?.phone || '+91 98470 12345'}</p>
            <div className="flex items-center gap-1 mt-1 text-[10px] text-emerald-800 bg-emerald-100/70 w-fit px-2 py-0.5 rounded-full font-semibold">
              <CheckCircle2 size={11} className="text-[#145C3D]" />
              <span>Verified VeeduX Member</span>
            </div>
          </div>
        </div>

        {/* Action Menu List */}
        <div className="p-4 space-y-2 flex-grow overflow-y-auto">
          {/* Post Property Quick CTA */}
          <button
            onClick={() => {
              onClose();
              onOpenPostProperty?.();
            }}
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-[#145C3D] to-[#27865B] text-white shadow-sm hover:opacity-95 transition-all text-left"
          >
            <div className="flex items-center gap-3">
              <PlusCircle size={20} className="text-[#D6AD55]" />
              <div>
                <p className="font-bold text-xs">Post Free Property Ad</p>
                <p className="text-[10px] text-emerald-100/80">
                  Reach 2.5L+ Kerala & NRI buyers
                </p>
              </div>
            </div>
            <ChevronRight size={18} />
          </button>

          {/* Saved Properties */}
          <button
            onClick={() => {
              onClose();
              onOpenSaved?.();
            }}
            className="w-full flex items-center justify-between p-3 rounded-2xl bg-white border border-[#E2EBE5] text-slate-800 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Heart size={18} className="text-rose-500" />
              <span className="text-xs font-semibold">Saved Properties ({savedCount})</span>
            </div>
            <ChevronRight size={16} className="text-slate-400" />
          </button>

          {/* My Listings */}
          <div className="p-3 rounded-2xl bg-white border border-[#E2EBE5] space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <Home size={18} className="text-[#145C3D]" />
                <span>My Property Listings (1 Active)</span>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md">
                Live
              </span>
            </div>
            <div className="bg-[#FAF8F2] p-2.5 rounded-xl border border-slate-200 text-xs flex items-center justify-between">
              <div className="truncate pr-2">
                <p className="font-bold text-slate-800 truncate">
                  3 BHK Villa in Kakkanad, Kochi
                </p>
                <p className="text-[10px] text-slate-500">₹ 1.25 Cr • 7.8 Cents</p>
              </div>
              <span className="text-[10px] text-[#145C3D] font-bold">14 Views</span>
            </div>
          </div>

          {/* Admin Moderation Shortcut */}
          <button
            onClick={() => {
              onClose();
              onOpenAdmin?.();
            }}
            className="w-full flex items-center justify-between p-3 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950 hover:bg-amber-100/70 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-amber-700" />
              <div>
                <p className="text-xs font-bold">Admin Moderation Dashboard</p>
                <p className="text-[10px] text-amber-800/80">
                  Review listings & user reports
                </p>
              </div>
            </div>
            <ChevronRight size={16} className="text-amber-700" />
          </button>
        </div>

        {/* Footer Logout */}
        <div className="p-4 bg-white border-t border-[#E2EBE5]">
          <button
            onClick={() => {
              onLogout?.();
              onClose();
            }}
            className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-rose-600 hover:bg-rose-50 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <LogOut size={15} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
