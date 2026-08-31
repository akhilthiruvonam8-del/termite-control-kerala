import React from 'react';
import { Home, Building2, HardHat, Hotel, Factory, ArrowRight, CheckCircle } from 'lucide-react';

export default function PropertyTypes({ onOpenLeadModal }) {
  const propertyTypes = [
    {
      title: "Residential",
      icon: Home,
      symbol: "🏠",
      subtitle: "Houses, villas, apartments and flats.",
      desc: "Protect teak door frames, modular kitchens, wooden flooring, wardrobes, and roof structures with zero-smell drill-inject treatment.",
      benefits: ["100% Odorless & Family Safe", "No evacuation needed", "Warranty up to 5 Years"]
    },
    {
      title: "Commercial",
      icon: Building2,
      symbol: "🏢",
      subtitle: "Offices, shops, restaurants and commercial buildings.",
      desc: "Keep records, documents, false ceilings, partitions, and display counters safe with flexible off-hours pest treatment.",
      benefits: ["After-hours scheduling", "Audit compliance reports", "Minimal business disruption"]
    },
    {
      title: "Construction",
      icon: HardHat,
      symbol: "🏗️",
      subtitle: "New houses, villas and construction projects.",
      desc: "Stage-wise chemical barrier applied in soil, foundation pits, plinth masonry, and under-floor slabs as per IS:6313.",
      benefits: ["Stage-wise certification", "Architect & builder tie-ups", "Up to 10 Years Certificate"]
    },
    {
      title: "Hospitality",
      icon: Hotel,
      symbol: "🏨",
      subtitle: "Hotels, resorts and other hospitality properties.",
      desc: "Discreet and continuous protection for eco-resorts, heritage homestays, wooden cottages, and luxury beach properties.",
      benefits: ["Discreet execution", "Natural wood preservation", "Emergency response desk"]
    },
    {
      title: "Industrial",
      icon: Factory,
      symbol: "🏭",
      subtitle: "Industrial buildings, warehouses and facilities.",
      desc: "Heavy-duty perimeter trenching, raw material protection, pallet preservation, and industrial building pest defense.",
      benefits: ["Large area coverage", "High-capacity pressure rigs", "Industrial AMC packages"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-3">
            <span>Versatile Protection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Termite Control For Every Property
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From modern luxury apartments to sprawling industrial warehouses, our team provides customized treatment protocols.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyTypes.map((prop, idx) => {
            const Icon = prop.icon;
            const isWide = idx === 4; // Industrial card
            return (
              <div 
                key={idx}
                className={`bg-white rounded-3xl p-7 border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${isWide ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{prop.symbol}</span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display mb-1 group-hover:text-emerald-800 transition">
                    {prop.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mb-3">
                    {prop.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                    {prop.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-5">
                    {prop.benefits.map((b, i) => (
                      <div key={i} className="flex items-center text-xs text-slate-700 space-x-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenLeadModal({ propertyType: prop.title })}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-800 text-xs font-bold transition flex items-center justify-center space-x-1.5"
                >
                  <span>Book for {prop.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
