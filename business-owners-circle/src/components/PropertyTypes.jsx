import React from 'react';
import { Home, Building2, HardHat, Hotel, Factory, ArrowRight, CheckCircle } from 'lucide-react';

export default function PropertyTypes({ onOpenLeadModal }) {
  const propertyTypes = [
    {
      title: "Residential",
      subtitle: "HOMES & APARTMENTS",
      image: "/images/pest4.jpg",
      color: "text-[#0C3B2E]",
      desc: "Protect teak door frames, modular kitchens, wooden flooring, wardrobes, and roof structures with zero-smell drill-inject treatment."
    },
    {
      title: "Villas",
      subtitle: "INDEPENDENT HOUSES",
      image: "/images/pest13.jpg",
      color: "text-[#C69C3D]",
      desc: "Dedicated perimeter barrier and continuous soil defense for luxury NRI vacation villas, tharavads, and independent houses."
    },
    {
      title: "Commercial",
      subtitle: "OFFICES & BUILDINGS",
      image: "/images/pest5.jpg",
      color: "text-[#0C3B2E]",
      desc: "Keep records, documents, false ceilings, partitions, and display counters safe with flexible off-hours pest treatment."
    },
    {
      title: "Hotels",
      subtitle: "RESORTS & GUEST HOUSES",
      image: "/images/pest6.jpg",
      color: "text-[#0C3B2E]",
      desc: "Discreet and continuous protection for eco-resorts, heritage homestays, wooden cottages, and luxury hospitality properties."
    },
    {
      title: "Warehouses",
      subtitle: "FACTORIES & GODOWNS",
      image: "/images/pest7.jpg",
      color: "text-[#0C3B2E]",
      desc: "Heavy-duty perimeter trenching, raw material protection, pallet preservation, and industrial godown pest defense."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F9F9F7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matching termitecontrol.me) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C3B2E] tracking-tight">
            Properties We Serve
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
            Homes, Businesses & Everything In Between
          </p>
        </div>

        {/* 5-Card Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {propertyTypes.map((prop, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col justify-between"
            >
              <div className="overflow-hidden h-40">
                <img 
                  src={prop.image} 
                  alt={`${prop.title} Termite Control in Kerala`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className={`font-serif font-bold text-base ${prop.color}`}>{prop.title}</h3>
                <p className="text-[11px] font-bold tracking-wider text-slate-500 uppercase mt-0.5">{prop.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onOpenLeadModal({ problem: "Property Inspection Booking" })}
            className="px-6 py-3 rounded-xl bg-[#0C3B2E] hover:bg-[#08281f] text-white font-bold text-xs sm:text-sm shadow-md transition"
          >
            Book Free Property Inspection
          </button>
        </div>

      </div>
    </section>
  );
}
