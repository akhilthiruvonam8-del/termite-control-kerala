import React from 'react';
import { MapPin, Phone, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { DISTRICTS } from '../data/districts';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function KeralaLocationsHub({ onNavigate, onOpenLeadModal }) {
  const kochiAreas = [
    "Kochi", "Kakkanad", "Edappally", "Vyttila", "Aluva", "Kalamassery",
    "Thrippunithura", "Angamaly", "Perumbavoor", "Muvattupuzha", "Kothamangalam", "Fort Kochi", "Palarivattom"
  ];

  return (
    <section id="locations" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>Statewide Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Termite Control Across Kerala
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Serving All 14 Districts with prompt on-site inspection teams, CIB&RC certified formulations, and long-term warranty protection.
          </p>
        </div>

        {/* 3 Top Service Hub Spotlights: Wayanad, Kozhikode & Ernakulam */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          {/* WAYANAD PRIORITY HUB */}
          <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl border-2 border-emerald-500/50 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow">
              Highland & Resort Hub
            </div>

            <div>
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Wayanad Central Base</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white mb-2">
                Termite & Pest Control in Wayanad
              </h3>
              
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 text-xs text-emerald-200 mb-3 space-y-1">
                <p className="font-bold text-white flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400" />
                  Office: Near St. Mary's College, Kuppadi, Sultan Bathery
                </p>
                <p className="text-slate-300 text-[11px]">Serving Sultan Bathery, Kalpetta, Mananthavady, Vythiri & 1,500+ Resorts.</p>
              </div>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Specialized timber borer eradication, odorless IS:6313 soil barriers, and pest AMC for luxury rainforest resorts, homestays, and plantation villas.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
              <button
                onClick={() => onNavigate('/termite-control-wayanad')}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition flex items-center space-x-1.5 shadow"
              >
                <span>View Wayanad Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handlePhoneClick('wayanad_hub_card')}
                className="px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition flex items-center space-x-1"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call 9020040009</span>
              </button>
            </div>
          </div>

          {/* KOZHIKODE PRIORITY HUB */}
          <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-700 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow">
              Malabar Hub
            </div>

            <div>
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Malabar Central Branch</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white mb-2">
                Termite Control in Kozhikode (Calicut)
              </h3>
              
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 text-xs text-emerald-200 mb-3 space-y-1">
                <p className="font-bold text-white flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400" />
                  Office: Pavamani Road, Near Malabar Gold, Kozhikode
                </p>
                <p className="text-slate-300 text-[11px]">Fast 2-hour dispatch across Calicut City & surrounding municipalities.</p>
              </div>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Covering: Pavamani Rd, Mavoor Rd, Palayam, Nadakkavu, Westhill, Medical College, Feroke, Ramanattukara, Vadakara, Koyilandy.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
              <button
                onClick={() => onNavigate('/termite-control-kozhikode')}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition flex items-center space-x-1.5"
              >
                <span>View Kozhikode Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handlePhoneClick('kozhikode_hub_card')}
                className="px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition flex items-center space-x-1"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call 9020040009</span>
              </button>
            </div>
          </div>

          {/* KOCHI / ERNAKULAM FEATURE */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-700 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-emerald-700 text-white text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Central Kerala Hub
            </div>

            <div>
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Metropolitan Coverage</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white mb-2">
                Termite Control in Kochi & Ernakulam
              </h3>

              <div className="flex flex-wrap gap-1 mb-3 pt-1">
                {kochiAreas.slice(0, 8).map((area, i) => (
                  <span key={i} className="text-[11px] bg-slate-800/80 border border-slate-700 text-slate-200 px-1.5 py-0.5 rounded-md">
                    {area}
                  </span>
                ))}
                <span className="text-[11px] text-emerald-400 font-semibold px-1 py-0.5">
                  & more...
                </span>
              </div>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Comprehensive pre/post-construction termite soil piping and drill-fill-seal barriers for Kakkanad Infopark, Aluva, Edappally, and Kochi.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
              <button
                onClick={() => onNavigate('/termite-control-ernakulam')}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-white text-slate-950 font-extrabold text-xs transition flex items-center space-x-1.5"
              >
                <span>View Kochi Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handlePhoneClick('kochi_hub_card')}
                className="px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition flex items-center space-x-1"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call {PRIMARY_PHONE_DISPLAY}</span>
              </button>
            </div>
          </div>

        </div>

        {/* 14 Kerala Districts Grid */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 font-display">
              All 14 Kerala District Service Portals
            </h3>
            <span className="text-xs text-slate-500 font-medium">Click any district for localized rates & booking</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {DISTRICTS.map((d) => (
              <button
                key={d.id}
                onClick={() => onNavigate(`/${d.slug}`)}
                className="p-3.5 rounded-2xl border text-left transition-all duration-200 group flex flex-col justify-between bg-slate-50 border-slate-200 hover:bg-white hover:border-emerald-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <MapPin className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800">
                    {d.name}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                    {d.altName || d.name} District
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-200/50 flex items-center justify-between text-[10px] font-bold text-emerald-700">
                  <span>Inspect</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Location CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenLeadModal()}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl transition transform active:scale-95"
          >
            <span>FIND TERMITE CONTROL NEAR YOU</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
