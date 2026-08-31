import React from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Bug, 
  Building2, 
  Home, 
  CheckCircle, 
  Briefcase, 
  ArrowRight,
  Shield,
  Check
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { handleWhatsAppClick } from '../utils/analytics';

const iconMap = {
  ShieldAlert,
  ShieldCheck,
  Bug,
  Building2,
  Home,
  CheckCircle,
  Briefcase
};

export default function ServicesGrid({ onSelectService, onOpenLeadModal }) {
  const handleServiceCTA = (service) => {
    if (onSelectService) {
      onSelectService(service);
    } else {
      onOpenLeadModal({ service: service.title });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5 text-emerald-700" />
            <span>Specialized Timber & Soil Treatments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Our Termite Control Services
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Scientifically engineered anti-termite and wood borer treatment solutions conforming to Indian Standards IS:6313.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || ShieldCheck;
            const isFeatured = index === 0 || index === 2; // Termite Control & Wood Borer

            return (
              <div 
                key={service.id} 
                className={`bg-white rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl ${
                  isFeatured 
                    ? 'border-emerald-300 ring-1 ring-emerald-200 shadow-md relative' 
                    : 'border-slate-200 shadow-sm hover:border-emerald-300'
                }`}
              >
                {service.badge && (
                  <span className="absolute -top-3 right-6 bg-emerald-700 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow">
                    {service.badge}
                  </span>
                )}

                <div>
                  {/* Service Header: ID + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-extrabold text-slate-300 font-display group-hover:text-emerald-600 transition">
                      {service.id}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 font-display mb-2 group-hover:text-emerald-800 transition">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start text-xs text-slate-700 space-x-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For Note */}
                  <div className="p-3 bg-slate-50 rounded-xl mb-6 text-xs text-slate-600">
                    <span className="font-bold text-slate-800">Ideal For: </span>
                    {service.idealFor}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">
                    {service.warranty}
                  </span>
                  <button
                    onClick={() => handleServiceCTA(service)}
                    className="inline-flex items-center px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-extrabold shadow transition group-hover:shadow-md"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Commercial & Construction Consultation Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-emerald-950 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Have a Large Construction Project or Commercial Facility?
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              We provide Indian Standard IS 6313 certified pre-construction soil treatment and corporate Annual Maintenance Contracts (AMC) across Kerala.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onOpenLeadModal({ service: "Pre-Construction / Commercial AMC" })}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow transition"
            >
              Get Project Quote
            </button>
            <button
              onClick={() => handleWhatsAppClick('services_banner', { service: 'Commercial / Pre-construction' })}
              className="px-5 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm rounded-xl shadow transition"
            >
              WhatsApp Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
