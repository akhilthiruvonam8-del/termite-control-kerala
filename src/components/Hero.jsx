import React from 'react';
import { Phone, MessageCircle, ShieldCheck, MapPin, Award, CheckCircle2, FileCheck } from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';
import LeadForm from './LeadForm';

export default function Hero({ onOpenInspectionModal }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 text-white pt-8 pb-16 lg:py-20">
      {/* Subtle background texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headings, Badges, CTAs, Trust Proof */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Serving Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide">
              <MapPin className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Serving All 14 Kerala Districts • Rapid Dispatch</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
              Professional Termite Control & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Anti-Termite Treatment</span> in Kerala
            </h1>

            {/* Sub-tagline */}
            <div className="space-y-2">
              <p className="text-lg sm:text-xl font-bold text-amber-300">
                Protect Your Home. Protect Your Property.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Professional termite control, anti-termite treatment and wood borer treatment for homes, villas, apartments, offices and commercial properties across Kerala.
              </p>
            </div>

            {/* CTA Buttons Row */}
            <div className="pt-2 flex flex-wrap gap-3 sm:gap-4 items-center">
              {/* Primary Call */}
              <button
                onClick={() => handlePhoneClick('hero_call')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-base shadow-xl hover:shadow-emerald-600/30 transition transform active:scale-95 group"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                <span>Call {PRIMARY_PHONE_DISPLAY}</span>
              </button>

              {/* WhatsApp Button */}
              <button
                onClick={() => handleWhatsAppClick('hero_whatsapp')}
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base shadow-xl transition transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 mr-2 fill-white" />
                <span>WhatsApp Now</span>
              </button>

              {/* Request Inspection */}
              <button
                onClick={onOpenInspectionModal}
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl transition transform active:scale-95"
              >
                <FileCheck className="w-5 h-5 mr-2" />
                <span>Request Inspection</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-800">
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>100% Odorless</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Up to 10 Yr Warranty</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <Award className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Govt. Approved</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Kozhikode & Kochi Hubs</span>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="pt-3">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 group">
                <img
                  src="/images/hero-technician.jpg"
                  alt="Professional pest control technician inspecting property for termites in Kerala"
                  className="w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  fetchPriority="high"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-end p-4">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="text-white text-xs sm:text-sm font-bold">Certified Termite Inspection Team</p>
                      <p className="text-emerald-300 text-[11px]">Precision Drill-Inject-Seal Technology (IS:6313 Standard)</p>
                    </div>
                    <span className="text-[10px] bg-emerald-600/90 text-white font-bold px-2 py-1 rounded">Kerala Wide</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Lead Form */}
          <div className="lg:col-span-5">
            <LeadForm 
              title="GET A TERMITE INSPECTION"
              subtitle="Get free expert assessment & quotation in 15 mins"
              source="hero_quick_form"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
