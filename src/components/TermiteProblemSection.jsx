import React from 'react';
import { 
  AlertTriangle, 
  Phone, 
  MessageCircle, 
  ShieldAlert, 
  HelpCircle,
  CheckCircle,
  Eye,
  Zap
} from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function TermiteProblemSection({ onOpenInspectionModal }) {
  const signs = [
    {
      title: "Mud Tubes",
      desc: "Brown earthy tunnels along walls, skirting boards, or brickwork used by subterranean termites for moisture.",
      severity: "High Danger",
      icon: "🏗️"
    },
    {
      title: "Hollow-Sounding Wood",
      desc: "When tapped, door frames, skirting, or panels sound hollow or paper-thin because termites eat wood from inside out.",
      severity: "Critical",
      icon: "🚪"
    },
    {
      title: "Damaged Doors & Jambs",
      desc: "Doors becoming tight, difficult to close, or developing sudden sagging and bubbling paint along wooden jambs.",
      severity: "High Danger",
      icon: "🪟"
    },
    {
      title: "Damaged Wooden Frames",
      desc: "Softening or structural weakening around window frames, wall paneling, and roof rafters.",
      severity: "Structural Risk",
      icon: "🪵"
    },
    {
      title: "Small Holes in Wood",
      desc: "Tiny pinhead sized holes appearing on wooden surfaces, veneers, and laminated cabinetry.",
      severity: "Active Infestation",
      icon: "🕳️"
    },
    {
      title: "Discarded Termite Wings",
      desc: "Piles of silvery insect wings found near window sills, door thresholds, or beneath night lights after rain.",
      severity: "Swarming Colony",
      icon: "🪽"
    },
    {
      title: "Damaged Furniture",
      desc: "Blistering veneer on dining tables, wardrobes, sofas, beds, and modular kitchen plywood boxes.",
      severity: "Asset Damage",
      icon: "🛋️"
    },
    {
      title: "Wood Powder / Frass",
      desc: "Fine sawdust-like yellowish powder accumulating beneath wooden furniture, indicative of timber borers or drywood termites.",
      severity: "Wood Borer / Termite",
      icon: "⏳"
    }
  ];

  return (
    <section id="signs" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Warning Badge & Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 animate-pulse">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Early Detection Saves Thousands of Rupees</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Don't Wait Until Termites Cause Major Damage
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Termites can remain hidden inside wooden structures, floors and other areas while continuing to cause severe structural damage unseen for months.
          </p>
        </div>

        {/* 8 Common Signs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {signs.map((sign, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/80 hover:border-amber-400/60 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{sign.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {sign.severity}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-amber-300 transition">
                  {sign.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {sign.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center text-[11px] text-emerald-400 font-semibold">
                <CheckCircle className="w-3.5 h-3.5 mr-1" />
                <span>Treatable with our Drill-Inject method</span>
              </div>
            </div>
          ))}
        </div>

        {/* Real Field Inspection Photos */}
        <div className="mb-14 p-6 sm:p-8 bg-slate-800/60 rounded-3xl border border-slate-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <p className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">Real Case Evidence</p>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Actual Termite Infestations Identified & Treated in Kerala Properties
              </h3>
            </div>
            <span className="text-xs text-slate-400">On-Site Field Photos</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-2xl overflow-hidden border border-slate-600 group relative shadow-md">
              <img 
                src="/images/termite-damage.jpg" 
                alt="Active Termite Mud Tubes in Kerala House"
                className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-3">
                <div>
                  <p className="text-xs font-bold text-white">Active Mud Tubes</p>
                  <p className="text-[10px] text-amber-400">Subterranean Termites</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-600 group relative shadow-md">
              <img 
                src="/images/pest6.jpg" 
                alt="Wood Borer holes and frass on timber"
                className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-3">
                <div>
                  <p className="text-xs font-bold text-white">Wood Borer Flight Holes</p>
                  <p className="text-[10px] text-amber-400">Powder Post Beetle</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-600 group relative shadow-md">
              <img 
                src="/images/pest7.jpg" 
                alt="Technician executing drill-inject subterranean chemical barrier"
                className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-3">
                <div>
                  <p className="text-xs font-bold text-white">Drill-Inject Treatment</p>
                  <p className="text-[10px] text-emerald-400">IS:6313 Standard</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-600 group relative shadow-md">
              <img 
                src="/images/pest3.jpg" 
                alt="Precision internal kitchen and wardrobe treatment"
                className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-3">
                <div>
                  <p className="text-xs font-bold text-white">Interior Plywood Defense</p>
                  <p className="text-[10px] text-emerald-400">Odorless & Safe</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High-Contrast Action Banner */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-3xl p-8 sm:p-10 shadow-2xl text-slate-950 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-950 text-amber-400 text-xs font-extrabold uppercase mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Immediate Response Active</span>
          </div>
          
          <h3 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-950 mb-3">
            Think You Have Termites?
          </h3>
          <p className="text-sm sm:text-base font-semibold text-slate-900 max-w-xl mx-auto mb-6">
            Get our certified technician to inspect your premises and evaluate the exact damage before it spreads to expensive interior woodwork.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handlePhoneClick('signs_section')}
              className="px-7 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-base shadow-xl flex items-center space-x-2 transition transform active:scale-95"
            >
              <Phone className="w-5 h-5 text-amber-400 animate-bounce" />
              <span>Call {PRIMARY_PHONE_DISPLAY}</span>
            </button>

            <button
              onClick={() => handleWhatsAppClick('signs_section', { message: 'Hi, I noticed termite signs at my property. Please arrange an inspection.' })}
              className="px-6 py-4 rounded-xl bg-white hover:bg-slate-100 text-emerald-800 font-extrabold text-base shadow-xl flex items-center space-x-2 transition transform active:scale-95"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
              <span>WhatsApp Us Now</span>
            </button>

            <button
              onClick={onOpenInspectionModal}
              className="px-6 py-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-base shadow-xl flex items-center space-x-2 transition transform active:scale-95"
            >
              <span>Schedule Inspection</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
