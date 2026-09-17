import React from 'react';
import { Phone, MessageCircle, FileText, Shield } from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function StickyMobileBar({ onOpenLeadModal, locationContext = 'Kerala' }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] px-2 py-2 safe-area-pb">
      <div className="grid grid-cols-3 gap-1.5 max-w-lg mx-auto">
        
        {/* CALL NOW BUTTON */}
        <button
          onClick={() => handlePhoneClick('mobile_sticky_bar')}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-700 active:bg-emerald-800 text-white shadow-sm transition"
          aria-label="Call Now"
        >
          <div className="flex items-center space-x-1">
            <Phone className="w-4 h-4 animate-bounce" />
            <span className="text-xs font-extrabold uppercase tracking-wide">Call</span>
          </div>
          <span className="text-[10px] font-medium text-emerald-100">{PRIMARY_PHONE_DISPLAY}</span>
        </button>

        {/* WHATSAPP BUTTON */}
        <button
          onClick={() => handleWhatsAppClick('mobile_sticky_bar', { location: locationContext })}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] active:bg-[#20ba5a] text-white shadow-sm transition"
          aria-label="Chat on WhatsApp"
        >
          <div className="flex items-center space-x-1">
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="text-xs font-extrabold uppercase tracking-wide">WhatsApp</span>
          </div>
          <span className="text-[10px] font-medium text-emerald-950">Chat Instant</span>
        </button>

        {/* GET QUOTE / INSPECTION BUTTON */}
        <button
          onClick={onOpenLeadModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-500 active:bg-amber-600 text-slate-900 shadow-sm transition"
          aria-label="Get Quote"
        >
          <div className="flex items-center space-x-1">
            <FileText className="w-4 h-4" />
            <span className="text-xs font-extrabold uppercase tracking-wide">Get Quote</span>
          </div>
          <span className="text-[10px] font-bold text-amber-950">Free Inspect</span>
        </button>

      </div>
    </div>
  );
}
