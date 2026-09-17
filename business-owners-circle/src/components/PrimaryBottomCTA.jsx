import React from 'react';
import { Phone, MessageCircle, FileCheck, Shield, Sparkles } from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function PrimaryBottomCTA({ onOpenInspectionModal }) {
  return (
    <section className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900 text-white py-16 sm:py-20 relative overflow-hidden border-t border-emerald-800/60">
      {/* Decorative glow elements */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Same-Day Inspection Available Across All 14 Districts</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
          Termites? Wood Borers? <span className="text-amber-400">Don't Wait.</span>
        </h2>

        <p className="text-lg sm:text-xl font-medium text-emerald-100/90 max-w-2xl mx-auto mb-8">
          Get Professional Treatment Across Kerala.
        </p>

        {/* Primary Contact Number Spotlight */}
        <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 mb-8">
          <p className="text-xs text-emerald-300 font-bold uppercase tracking-widest">Call / WhatsApp Direct</p>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-wider font-display mt-0.5">
            {PRIMARY_PHONE_DISPLAY}
          </p>
        </div>

        {/* Three Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
          {/* Call Now */}
          <button
            onClick={() => handlePhoneClick('bottom_primary_cta')}
            className="flex-1 min-w-[160px] py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-xl transition transform active:scale-95 flex items-center justify-center space-x-2"
          >
            <Phone className="w-5 h-5 animate-pulse" />
            <span>Call Now</span>
          </button>

          {/* WhatsApp Now */}
          <button
            onClick={() => handleWhatsAppClick('bottom_primary_cta')}
            className="flex-1 min-w-[160px] py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm sm:text-base shadow-xl transition transform active:scale-95 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp Now</span>
          </button>

          {/* Request Inspection */}
          <button
            onClick={onOpenInspectionModal}
            className="flex-1 min-w-[160px] py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl transition transform active:scale-95 flex items-center justify-center space-x-2"
          >
            <FileCheck className="w-5 h-5" />
            <span>Request Inspection</span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/80 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
          <span className="font-bold text-slate-200">TermiteControl.me</span>
          <span>•</span>
          <span>A Unit of Eco Pest India</span>
          <span>•</span>
          <span>IS:6313 Standard Certified</span>
        </div>

      </div>
    </section>
  );
}
