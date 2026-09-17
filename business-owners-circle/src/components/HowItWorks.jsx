import React from 'react';
import { PhoneCall, Search, FileText, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick } from '../utils/analytics';

export default function HowItWorks({ onOpenInspectionModal }) {
  const steps = [
    {
      num: "01",
      title: "Contact Us",
      desc: `Call or WhatsApp ${PRIMARY_PHONE_DISPLAY}. Share your property location, building type, and observed signs.`,
      icon: PhoneCall,
      badge: "Instant Connect"
    },
    {
      num: "02",
      title: "Inspection",
      desc: "Our team assesses the property and identifies signs of termite or wood-borer activity across walls, flooring, and woodwork.",
      icon: Search,
      badge: "On-Site Check"
    },
    {
      num: "03",
      title: "Treatment Plan",
      desc: "The appropriate treatment approach is recommended based on the property and infestation with a transparent quotation.",
      icon: FileText,
      badge: "Custom Plan"
    },
    {
      num: "04",
      title: "Treatment",
      desc: "Professional treatment is carried out in the identified areas using CIB&RC approved odorless formulations with service warranty.",
      icon: Sparkles,
      badge: "Guaranteed Shield"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Hassle-Free Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Simple 4-Step Process
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From initial phone call to complete eradication — here is how our termite control process works.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-emerald-800/30 font-display group-hover:text-emerald-700 transition">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="inline-block text-[10px] uppercase tracking-wider font-extrabold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full mb-3">
                    {step.badge}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-emerald-700">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Step Trigger Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenInspectionModal}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-base rounded-2xl shadow-xl transition transform active:scale-95"
          >
            <span>Book Your Step 1 Inspection Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
