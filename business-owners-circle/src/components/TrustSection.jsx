import React from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Building, 
  Bug, 
  Search, 
  Zap, 
  PhoneCall,
  Award,
  Users
} from 'lucide-react';

export default function TrustSection() {
  const trustPoints = [
    {
      title: "Kerala-Wide Service",
      desc: "Prompt on-site inspection across all 14 Kerala districts with local technician teams stationed in Kozhikode, Kochi, Trivandrum, and Thrissur.",
      icon: MapPin,
      color: "emerald"
    },
    {
      title: "Professional Termite Treatment",
      desc: "Scientific drill-inject-seal methodology compliant with Indian Standard IS 6313, using non-repellent transfer chemistry.",
      icon: ShieldCheck,
      color: "emerald"
    },
    {
      title: "Residential & Commercial Solutions",
      desc: "Tailored protection programs for independent villas, flats, luxury apartments, corporate offices, shops, and warehouses.",
      icon: Building,
      color: "emerald"
    },
    {
      title: "Termite & Wood Borer Treatment",
      desc: "Complete dual eradication targeting subterranean termites as well as destructive wood powder-producing beetle larvae.",
      icon: Bug,
      color: "amber"
    },
    {
      title: "Inspection-Based Treatment",
      desc: "Comprehensive initial assessment to identify entry paths, nesting hotspots, and structural vulnerability before executing treatment.",
      icon: Search,
      color: "emerald"
    },
    {
      title: "Fast Enquiry Response",
      desc: "Rapid call-back within 15–30 minutes of enquiry with prompt technician scheduling and clear upfront pricing.",
      icon: Zap,
      color: "amber"
    },
    {
      title: "Call & WhatsApp Booking",
      desc: "Instant booking convenience via direct phone call or WhatsApp message with our customer support desk on 9020040009.",
      icon: PhoneCall,
      color: "emerald"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Trusted Pest Control Partner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Why Choose TermiteControl.me?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A Unit of Eco Pest India — Delivering scientifically proven termite and timber protection across Kerala for over a decade.
          </p>
        </div>

        {/* 7 Trust Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            const isWide = index === 6; // Last one spanning on xl
            return (
              <div 
                key={index} 
                className={`bg-slate-50 hover:bg-emerald-50/40 p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all duration-200 group flex flex-col justify-between ${isWide ? 'md:col-span-2 lg:col-span-3 xl:col-span-2' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Verified
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display mb-2 group-hover:text-emerald-900">
                    ✓ {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-900 text-white rounded-3xl shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display">12,500+</p>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Properties Protected</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-display">14 Districts</p>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Kerala-Wide Coverage</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display">100%</p>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Odorless Formulations</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-display">4.9 / 5.0</p>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Customer Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  );
}
