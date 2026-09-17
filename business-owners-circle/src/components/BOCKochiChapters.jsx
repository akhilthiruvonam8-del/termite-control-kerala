import React from 'react';
import { MapPin, Calendar, Users, Building, ShieldCheck, ArrowRight, Clock, Award } from 'lucide-react';

export default function BOCKochiChapters({ onOpenJoinModal }) {
  const kochiZones = [
    { name: 'Kakkanad & Infopark Corridor', desc: 'IT, SaaS, Cloud & Tech Innovations Hub' },
    { name: 'Ernakulam CBD & Panampilly Nagar', desc: 'Finance, CA, Corporate Legal & Investment' },
    { name: 'Edappally, Palarivattom & NH ByPass', desc: 'Retail, Architecture, Healthcare & Construction' },
    { name: 'Tripunithura, Maradu & Kundannoor', desc: 'Luxury Real Estate, Logistics & Manufacturing' },
    { name: 'Aluva, Angamaly & Airport Corridor', desc: 'Export-Import, Food Processing & Engineering' },
    { name: 'Marine Drive & Waterfront Commercial', desc: 'Tourism, Maritime Trade & Consulting' },
  ];

  return (
    <section id="chapters" className="relative py-20 lg:py-28 bg-[#020712] text-white border-t border-[#C9A227]/20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B3A]/80 border border-[#C9A227]/40 text-xs font-extrabold tracking-[0.22em] text-[#FFE27A] uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#FFE27A]" />
            <span>KOCHI BUSINESS COMMUNITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFF3C4] to-[#C9A227]">
            Connecting the Commercial Heart of Kerala
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From Kakkanad’s technology campuses to the executive boardrooms of MG Road and Marine Drive, Business Owner’s Circle unites the diverse business leadership of Greater Kochi.
          </p>
        </div>

        {/* Featured Chapter Card: KOCHI FOUNDING CHAPTER */}
        <div className="mt-14 rounded-3xl p-8 lg:p-12 bg-gradient-to-br from-[#061838] via-[#041126] to-[#020A17] border-2 border-[#FFE27A]/50 shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFE27A]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-[#071B3A] border border-[#FFE27A]/40 text-[11px] font-bold text-[#FFE27A] uppercase tracking-wider">
                  FOUNDING CHAPTER
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                  MEMBERSHIP CURRENTLY OPEN
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-cinzel font-black text-white">
                BOC Kochi Chapter • 2026 Cohort
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                The flagship chapter provides a structured, high-energy environment for business presentations, vetted referral exchanges, and collaborative deal-making every week over breakfast.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-center gap-2.5 text-slate-200">
                  <Calendar className="w-4 h-4 text-[#FFE27A]" />
                  <span>Weekly Wednesday Morning Sessions</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-200">
                  <Clock className="w-4 h-4 text-[#FFE27A]" />
                  <span>7:30 AM – 9:30 AM (Breakfast Meeting)</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-200">
                  <Building className="w-4 h-4 text-[#FFE27A]" />
                  <span>Kakkanad / Infopark Business Hotel Venue</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#FFE27A]" />
                  <span>1 Verified Leader Per Category Only</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenJoinModal}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F7E7A9] via-[#E5C45A] to-[#C9A227] text-[#041126] font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_25px_rgba(229,196,90,0.55)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>APPLY FOR KOCHI CHAPTER SEAT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Regional Map / Zones Badge */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-bold text-[#FFE27A] uppercase tracking-wider mb-2">
                Regional Commercial Sectors Covered:
              </div>
              <div className="space-y-2.5">
                {kochiZones.map((zone) => (
                  <div
                    key={zone.name}
                    className="p-3 rounded-xl bg-[#040D1E]/90 border border-white/10 hover:border-[#FFE27A]/50 transition-colors"
                  >
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFE27A]"></span>
                      {zone.name}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5 ml-3">
                      {zone.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
