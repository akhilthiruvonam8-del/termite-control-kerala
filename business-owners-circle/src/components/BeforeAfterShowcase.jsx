import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { handleWhatsAppClick } from '../utils/analytics';

export default function BeforeAfterShowcase({ onOpenInspectionModal }) {
  const comparisons = [
    {
      title: "Door Frame & Wall Junction Restoration",
      desc: "Severe subterranean mud tubes cleared, high-pressure termiticide barrier injected, and holes seamlessly sealed.",
      image: "/images/before-after.jpg",
      fallback: "/images/before-after1.jpg",
      badge: "Termite Eradication"
    },
    {
      title: "Woodwork & Furniture Timber Preservation",
      desc: "Plywood and teak furniture treated with systemic syringe injection, stopping borer beetle larva damage permanently.",
      image: "/images/before-after1.jpg",
      fallback: "/images/before-after.jpg",
      badge: "Timber Preserved"
    },
    {
      title: "Pre-Construction Soil Anti-Termite Barrier (IS:6313)",
      desc: "Stage-wise chemical saturation of foundation pits and sub-floor gravel before casting RCC concrete slabs.",
      image: "/images/pre-construction.jpg",
      fallback: "/images/hero-technician.jpg",
      badge: "10-Year Warranty"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Treatment Results & Field Performance
          </h2>
          <p className="mt-3 text-base text-slate-600">
            See how our scientific drill-inject-seal methodology eliminates infestations without destroying your home aesthetics.
          </p>
        </div>

        {/* Comparisons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comparisons.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = item.fallback;
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-emerald-700/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                    {item.badge}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 font-display mb-2 group-hover:text-emerald-800 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center space-x-2 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Certified Quality Formulation</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenInspectionModal}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-emerald-700 hover:text-white border border-slate-200 hover:border-emerald-700 text-slate-800 text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <span>Request Similar Treatment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
