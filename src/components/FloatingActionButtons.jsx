import React, { useState } from 'react';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

/**
 * FloatingActionButtons — Global Luxury Floating Actions Stack
 * 1. Up Arrow (Smooth Scroll to Top)
 * 2. Phone Call Direct Button (+91 90200 40009)
 * 3. WhatsApp Direct Chat Button (+91 90200 40009)
 */
export default function FloatingActionButtons() {
  const [floatingTooltip, setFloatingTooltip] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside 
      aria-label="Quick contact and navigation actions"
      className="fixed bottom-20 sm:bottom-6 right-3.5 sm:right-6 z-40 flex flex-col items-center gap-2 sm:gap-2.5 pointer-events-auto select-none"
    >
      {/* 1. Scroll to Top Button */}
      <div className="relative group">
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setFloatingTooltip('top')}
          onMouseLeave={() => setFloatingTooltip(null)}
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/85 hover:bg-gradient-to-tr hover:from-amber-400 hover:to-amber-200 border-2 border-amber-400/80 text-amber-300 hover:text-black shadow-[0_4px_18px_rgba(0,0,0,0.9)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
          title="Scroll to Top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
        </button>
        
        {floatingTooltip === 'top' && (
          <div className="absolute right-[115%] top-1/2 -translate-y-1/2 mr-2 px-2.5 py-1 rounded-lg bg-[#020e09] border border-amber-400/50 text-[10px] text-amber-200 font-bold whitespace-nowrap shadow-lg pointer-events-none animate-in fade-in duration-150">
            Scroll to Top
          </div>
        )}
      </div>

      {/* 2. Phone Call Hotline Button */}
      <div className="relative group">
        <button
          onClick={() => handlePhoneClick('floating_call')}
          onMouseEnter={() => setFloatingTooltip('call')}
          onMouseLeave={() => setFloatingTooltip(null)}
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-emerald-800 via-emerald-600 to-emerald-500 border-2 border-emerald-300/80 text-white shadow-[0_4px_20px_rgba(16,185,129,0.55)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          title={`Call Eco Pest India Hotline (${PRIMARY_PHONE_DISPLAY})`}
          aria-label={`Call Eco Pest India (${PRIMARY_PHONE_DISPLAY})`}
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-white stroke-[1.5]" />
        </button>

        {floatingTooltip === 'call' && (
          <div className="absolute right-[115%] top-1/2 -translate-y-1/2 mr-2 px-2.5 py-1 rounded-lg bg-[#020e09] border border-emerald-500/50 text-[10px] text-emerald-300 font-bold whitespace-nowrap shadow-lg pointer-events-none animate-in fade-in duration-150">
            Call ({PRIMARY_PHONE_DISPLAY})
          </div>
        )}
      </div>

      {/* 3. WhatsApp Direct Chat Button */}
      <div className="relative group">
        <button
          onClick={() => handleWhatsAppClick('floating_whatsapp', { location: 'Kochi', message: 'Hi Eco Pest India, I would like to schedule a free inspection for my property in Kochi.' })}
          onMouseEnter={() => setFloatingTooltip('wa')}
          onMouseLeave={() => setFloatingTooltip(null)}
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_20px_rgba(37,211,102,0.65)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ring-2 ring-white/30"
          title="Chat with Eco Pest India on WhatsApp"
          aria-label="WhatsApp Eco Pest India"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white stroke-none" />
        </button>

        {floatingTooltip === 'wa' && (
          <div className="absolute right-[115%] top-1/2 -translate-y-1/2 mr-2 px-2.5 py-1 rounded-lg bg-[#020e09] border border-[#25D366]/50 text-[10px] text-[#25D366] font-bold whitespace-nowrap shadow-lg pointer-events-none animate-in fade-in duration-150">
            WhatsApp
          </div>
        )}
      </div>
    </aside>
  );
}
