import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function ContactSection({ onOpenLeadModal }) {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Phone & Office Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider">
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>Direct Customer Desk</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Need Termite Control? <br />
              <span className="text-emerald-700">Call or WhatsApp Us Today</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Contact our dedicated termite inspection hotline for immediate booking, emergency site inspection, or pre-construction structural consultancy across Kerala.
            </p>

            {/* Big Contact Card */}
            <div className="p-6 bg-slate-900 text-white rounded-3xl shadow-xl space-y-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Direct Hotline (Call / WhatsApp)</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display mt-0.5">
                    {PRIMARY_PHONE_DISPLAY}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePhoneClick('contact_card')}
                    className="p-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-white transition shadow"
                    title="Call Now"
                  >
                    <Phone className="w-5 h-5 animate-pulse" />
                  </button>
                  <button
                    onClick={() => handleWhatsAppClick('contact_card')}
                    className="p-3 bg-[#25D366] hover:bg-[#20ba5a] rounded-xl text-white transition shadow"
                    title="WhatsApp Us"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </button>
                </div>
              </div>

              {/* Kozhikode Location Spotlight */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Kozhikode Service Office: </span>
                    <span>Pavamani Road, Near Malabar Gold & Diamonds, Kozhikode, Kerala - 673004</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Service Area: </span>
                    <span>All 14 Districts Across Kerala (Same-Day Inspection Teams)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Operating Hours: </span>
                    <span>Monday to Sunday: 7:00 AM – 9:00 PM (Emergency response available 24/7)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Credentials */}
            <div className="flex items-center space-x-3 text-xs text-slate-500 pt-2">
              <span className="font-bold text-slate-900">TermiteControl.me</span>
              <span>•</span>
              <span>A Unit of Eco Pest India</span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">CIB&RC Licensed</span>
            </div>

          </div>

          {/* Right Column: Quick Action Box & Services Summary */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Services Provided Across Kerala
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Termite Control</span>
                </div>
                <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Anti-Termite Treatment</span>
                </div>
                <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Wood Borer Treatment</span>
                </div>
                <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Pre-Construction Treatment</span>
                </div>
                <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Post-Construction Treatment</span>
                </div>
                <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Residential & Commercial</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenLeadModal()}
                  className="flex-1 py-3.5 px-5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow transition text-center"
                >
                  Request Inspection Online
                </button>
                <button
                  onClick={() => handleWhatsAppClick('contact_online_whatsapp')}
                  className="py-3.5 px-5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow transition flex items-center justify-center space-x-1.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>
            </div>

            {/* Quick Guarantees Strip */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100">
                <p className="text-base sm:text-lg font-black text-emerald-800">100%</p>
                <p className="text-[10px] text-slate-600 font-medium">Odorless Chemicals</p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100">
                <p className="text-base sm:text-lg font-black text-emerald-800">5-10 Yrs</p>
                <p className="text-[10px] text-slate-600 font-medium">Service Warranty</p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100">
                <p className="text-base sm:text-lg font-black text-emerald-800">15 Mins</p>
                <p className="text-[10px] text-slate-600 font-medium">Response Time</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
