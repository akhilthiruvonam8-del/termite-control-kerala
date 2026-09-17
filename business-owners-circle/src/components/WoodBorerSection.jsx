import React from 'react';
import { 
  Bug, 
  Phone, 
  MessageCircle, 
  CheckCircle, 
  ShieldAlert, 
  Droplet,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function WoodBorerSection({ onOpenLeadModal }) {
  const affectedItems = [
    { name: "Doors & Frames", desc: "Main entrance teak doors, interior flush doors & solid wood jambs." },
    { name: "Windows & Sills", desc: "Wooden window shutters, louvers, and wooden ventilator frames." },
    { name: "Furniture & Modular Units", desc: "Dining tables, sofa frames, beds, study desks & center tables." },
    { name: "Wooden Beams & Trusses", desc: "Traditional ceiling wooden beams, purlins, and rafters in Kerala homes." },
    { name: "Cupboards & Wardrobes", desc: "Modular kitchen plywood boxes, wardrobe backings, and drawer bases." },
    { name: "Wooden Flooring & Decks", desc: "Hardwood flooring, laminated parquet, and outdoor wooden decks." },
    { name: "Roof Structures", desc: "Attic timber, ceiling battens, and support woodwork under clay tiles." },
    { name: "Other Wooden Components", desc: "Wall paneling, wooden staircases, balusters, and timber handicrafts." }
  ];

  return (
    <section id="wood-borer" className="py-16 sm:py-20 bg-amber-50/50 border-b border-amber-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Information, Affected Items */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-extrabold uppercase tracking-wider">
              <Bug className="w-4 h-4 text-amber-800" />
              <span>Powder Post Beetle & Borer Control</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Wood Borer Damage?
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Wood-boring insects (Powder Post Beetles) bore deep inside timber and lay eggs. The hatched larvae feed on starch inside wood for years, converting your valuable teak, rosewood, and plywood into fine yellow powder (frass).
            </p>

            <div className="pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center">
                <ShieldAlert className="w-4 h-4 text-amber-700 mr-1.5" />
                Wood-boring insects can damage:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {affectedItems.map((item, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-amber-200/80 shadow-sm flex items-start space-x-2.5">
                    <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">{item.name}</p>
                      <p className="text-[11px] text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Approach Points */}
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2 text-xs sm:text-sm text-slate-700">
              <p className="font-bold text-emerald-900 flex items-center">
                <Sparkles className="w-4 h-4 mr-1.5 text-emerald-700" />
                Our Specialized 2-Tier Wood Borer Treatment:
              </p>
              <p>• <span className="font-semibold">Syringe Micro-Injection:</span> Pure systemic insecticide injected directly into active larval flight pinholes.</p>
              <p>• <span className="font-semibold">Protective Surface Coating:</span> Chemical barrier sprayed over timber surfaces to eliminate emerging adult beetles and stop re-infestation.</p>
            </div>

          </div>

          {/* Right Column: CTA Box & Immediate Booking */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-2xl border-2 border-amber-300 text-center space-y-6">
              
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto shadow-inner">
                <Bug className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  Get Professional Wood Borer Treatment
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  Stop timber powder immediately before your expensive furniture and wooden doors lose structural strength.
                </p>
              </div>

              {/* Real Wood Borer Damage Image Preview */}
              <div className="rounded-2xl overflow-hidden border border-amber-200 shadow-sm relative group">
                <img
                  src="/images/wood-borer.jpg"
                  alt="Real Wood Borer powder frass falling from Kerala wooden furniture"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "/images/pest6.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-3">
                  <span className="text-[11px] font-bold text-white">Active Wood Borer Frass (Yellow Powder)</span>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                {/* Call Button */}
                <button
                  onClick={() => handlePhoneClick('wood_borer_section')}
                  className="w-full py-4 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-extrabold text-base shadow-lg transition flex items-center justify-center space-x-2 group"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Call {PRIMARY_PHONE_DISPLAY}</span>
                </button>

                {/* WhatsApp Button */}
                <button
                  onClick={() => handleWhatsAppClick('wood_borer_section', { service: 'Wood Borer Treatment' })}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm sm:text-base shadow-md transition flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>WhatsApp Now</span>
                </button>

                {/* Lead Form Trigger */}
                <button
                  onClick={() => onOpenLeadModal({ service: "Wood Borer Treatment", problem: "Wood Borer" })}
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow transition flex items-center justify-center space-x-1.5"
                >
                  <span>Book Wood Borer Inspection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-center space-x-4 text-xs font-semibold text-slate-500">
                <span>✓ Same Day Inspection</span>
                <span>•</span>
                <span>✓ Warranty Certificate</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
