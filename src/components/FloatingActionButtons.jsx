import React, { useState } from 'react';
import { ArrowUp, MessageCircle, PhoneCall } from 'lucide-react';

/**
 * FloatingActionButtons — Global Executive Floating Bar
 * Always visible across all modules and pages (Brief & User Request)
 * 1. Up Arrow (Smooth Scroll to Top)
 * 2. WhatsApp Direct Chat to BOC Director (+91 90200 40009)
 * 3. Call Secretariat (+91 90200 40009)
 */
export default function FloatingActionButtons() {
  const [floatingTooltip, setFloatingTooltip] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside 
      aria-label="Quick contact and navigation actions"
      className="fixed bottom-5 right-3.5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2.5 sm:gap-3 pointer-events-auto select-none"
    >
      {/* 1. Scroll to Top Button */}
      <div className="relative group">
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setFloatingTooltip('top')}
          onMouseLeave={() => setFloatingTooltip(null)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#030C1C]/95 hover:bg-gradient-to-tr hover:from-[#DFC688] hover:to-[#FFF3C4] border-2 border-[#DFC688]/80 text-[#DFC688] hover:text-[#041126] shadow-[0_6px_22px_rgba(0,0,0,0.9)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
          title="Scroll to Top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
        
        {floatingTooltip === 'top' && (
          <div className="absolute right-[115%] top-1/2 -translate-y-1/2 mr-2 px-2.5 py-1 rounded-lg bg-[#041126] border border-[#DFC688]/50 text-[10px] text-[#FAF6ED] font-bold whitespace-nowrap shadow-lg pointer-events-none animate-in fade-in duration-150">
            Scroll to Top
          </div>
        )}
      </div>

      {/* 2. WhatsApp Direct Chat Button */}
      <div className="relative group">
        <a
          href="https://wa.me/919020040009?text=Hi%20Business%20Owners%20Circle%2C%20I%20am%20interested%20in%20joining%20the%20executive%20network."
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setFloatingTooltip('wa')}
          onMouseLeave={() => setFloatingTooltip(null)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_6px_25px_rgba(37,211,102,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          title="Chat with BOC on WhatsApp (+91 90200 40009)"
          aria-label="WhatsApp BOC (+91 90200 40009)"
        >
          <MessageCircle className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-current" />
        </a>

        {floatingTooltip === 'wa' && (
          <div className="absolute right-[115%] top-1/2 -translate-y-1/2 mr-2 px-2.5 py-1 rounded-lg bg-[#041126] border border-[#25D366]/50 text-[10px] text-[#25D366] font-bold whitespace-nowrap shadow-lg pointer-events-none animate-in fade-in duration-150">
            WhatsApp (+91 90200 40009)
          </div>
        )}
      </div>

      {/* 3. Phone Call Secretariat Button */}
      <div className="relative group">
        <a
          href="tel:+919020040009"
          onMouseEnter={() => setFloatingTooltip('call')}
          onMouseLeave={() => setFloatingTooltip(null)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#C5A059] via-[#E5C45A] to-[#FFF3C4] text-[#041126] shadow-[0_6px_25px_rgba(223,198,136,0.7)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border border-[#FFF3C4]/60"
          title="Call BOC Secretariat (+91 90200 40009)"
          aria-label="Call BOC Secretariat (+91 90200 40009)"
        >
          <PhoneCall className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.5]" />
        </a>

        {floatingTooltip === 'call' && (
          <div className="absolute right-[115%] top-1/2 -translate-y-1/2 mr-2 px-2.5 py-1 rounded-lg bg-[#041126] border border-[#DFC688]/50 text-[10px] text-[#DFC688] font-bold whitespace-nowrap shadow-lg pointer-events-none animate-in fade-in duration-150">
            Call BOC (+91 90200 40009)
          </div>
        )}
      </div>
    </aside>
  );
}
