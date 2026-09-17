import React from 'react';
import { MapPin, Mail, ShieldCheck, Phone } from 'lucide-react';

/**
 * Sleek Executive Micro-Footer for Business Owner's Circle
 * Minimalist, elegant, and perfectly grounds the hero section.
 */
export default function BOCMicroFooter({ isLight = false }) {
  return (
    <footer className={`w-full border-t py-3.5 px-4 sm:px-6 lg:px-8 transition-colors duration-500 text-[11px] ${
      isLight 
        ? 'bg-white/90 border-[#C9A227]/30 text-slate-600' 
        : 'bg-[#020A17]/95 border-[#C9A227]/20 text-slate-400'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-4">
        
        {/* Left: Copyright & Official Chapter Status */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <ShieldCheck className={`w-3.5 h-3.5 ${isLight ? 'text-[#B08C1E]' : 'text-[#E5C45A]'}`} />
          <span>
            © {new Date().getFullYear()} <strong className={isLight ? 'text-slate-900' : 'text-slate-200'}>Business Owner’s Circle (BOC)</strong> – Kochi, Kerala. All Rights Reserved.
          </span>
        </div>

        {/* Center: Kochi Regional Meeting Hubs */}
        <div className="flex items-center gap-1.5 text-slate-400 hidden lg:flex">
          <MapPin className={`w-3.5 h-3.5 ${isLight ? 'text-[#B08C1E]' : 'text-[#C9A227]'}`} />
          <span>Chapter Meeting Hubs: Kakkanad • Panampilly Nagar • Marine Drive</span>
        </div>

        {/* Right: Chapter Admissions Desk */}
        <div className="flex items-center gap-3">
          <span className={`font-semibold tracking-wider ${isLight ? 'text-[#B08C1E]' : 'text-[#E5C45A]'}`}>
            REFER • COLLABORATE • SUPPORT • GROW
          </span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className={`font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'} hidden sm:inline`}>
            EMPOWER TOGETHER
          </span>
        </div>

      </div>
    </footer>
  );
}
