import React from 'react';
import { Smartphone, Tablet, Monitor, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ViewportBar({ viewMode, setViewMode }) {
  return (
    <aside aria-label="Dev Viewport Switcher" className="bg-[#0C3423] text-white border-b border-[#27865B]/30 px-3 py-2 text-xs flex flex-wrap items-center justify-between gap-2 sticky top-0 z-50 shadow-md">
      {/* Brand & Mode Indicator */}
      <div className="flex items-center gap-2">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6AD55] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D6AD55]"></span>
        </span>
        <span className="font-semibold tracking-wide text-[#FAF8F2]">VeeduX Local Dev</span>
        <span className="hidden sm:inline text-white/50">•</span>
        <span className="hidden sm:inline text-[#D6AD55] font-medium">
          Mobile View Priority (Kerala Real Estate)
        </span>
      </div>

      {/* Viewport Mode Switcher Buttons */}
      <div className="flex items-center bg-[#145C3D]/60 p-0.5 rounded-lg border border-[#27865B]/40">
        <button
          onClick={() => setViewMode('mobile')}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all ${
            viewMode === 'mobile'
              ? 'bg-[#D6AD55] text-[#0C3423] font-bold shadow-sm'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
          title="Mobile View (390px iPhone Preview)"
        >
          <Smartphone size={14} />
          <span>Mobile (Primary)</span>
        </button>

        <button
          onClick={() => setViewMode('tablet')}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all ${
            viewMode === 'tablet'
              ? 'bg-[#D6AD55] text-[#0C3423] font-bold shadow-sm'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
          title="Tablet View (768px iPad Preview)"
        >
          <Tablet size={14} />
          <span className="hidden xs:inline">Tablet</span>
        </button>

        <button
          onClick={() => setViewMode('desktop')}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all ${
            viewMode === 'desktop'
              ? 'bg-[#D6AD55] text-[#0C3423] font-bold shadow-sm'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
          title="Full Responsive Desktop View"
        >
          <Monitor size={14} />
          <span>Desktop</span>
        </button>
      </div>
    </aside>
  );
}
