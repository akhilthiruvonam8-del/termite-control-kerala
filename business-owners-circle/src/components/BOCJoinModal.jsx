import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, Building2, User, Phone, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import BOCLogo from './BOCLogo';

export default function BOCJoinModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    industry: 'Technology & IT',
    location: 'Kakkanad / Infopark Zone',
    phone: '',
    whatsapp: '',
    experience: '3 - 5 Years'
  });

  if (!isOpen) return null;

  const industries = [
    'Technology & IT Solutions',
    'Construction, Architecture & Interior',
    'Finance, CA & Wealth Management',
    'Marketing, Branding & Media',
    'Legal, Advisory & Corporate Compliance',
    'Real Estate & Commercial Properties',
    'Healthcare, Wellness & Clinics',
    'Manufacturing & Industrial Supplies',
    'Retail, Luxury Goods & Trading',
    'Logistics, Export & Supply Chain',
    'Education, Coaching & Consulting'
  ];

  const locations = [
    'Kakkanad / Infopark Corridor',
    'Ernakulam CBD / MG Road / Panampilly Nagar',
    'Edappally / Palarivattom / Kalamassery',
    'Tripunithura / Maradu / Kundannoor',
    'Aluva / Angamaly / Airport Zone',
    'Mattancherry / Fort Kochi / West Kochi',
    'Other Greater Kochi Regions'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop with blur */}
      <div 
        className="fixed inset-0 bg-[#020A17]/85 backdrop-blur-md transition-opacity"
        onClick={handleReset}
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#071B3A] via-[#041126] to-[#020A17] border border-[#C9A227]/40 rounded-3xl shadow-navy-deep overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        {/* Top Gold Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#C9A227] via-[#FFF3C4] to-[#E5C45A]"></div>

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-[#071B3A] border border-slate-700/60 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <>
              {/* Modal Header */}
              <div className="flex items-start gap-4 mb-6 pb-5 border-b border-[#C9A227]/20">
                <BOCLogo size="md" showWordmark={false} />
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#071B3A] border border-[#C9A227]/30 text-[10px] font-semibold text-[#E5C45A] uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-3 h-3" />
                    Kochi Chapter Membership Application
                  </div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white leading-tight">
                    Join The <span className="text-gold-gradient">Circle</span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Connect with verified business leaders. Lock your industry seat in Kochi.
                  </p>
                </div>
              </div>

              {/* Application Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-slate-300 uppercase mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Menon"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5C45A] focus:ring-1 focus:ring-[#E5C45A]"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-slate-300 uppercase mb-1.5">
                      Company / Business Name *
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Tech Ventures"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5C45A] focus:ring-1 focus:ring-[#E5C45A]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Industry Category */}
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-slate-300 uppercase mb-1.5">
                      Primary Industry Category *
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5C45A]"
                      >
                        {industries.map((ind) => (
                          <option key={ind} value={ind} className="bg-[#041126] text-white">
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Kochi Location */}
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-slate-300 uppercase mb-1.5">
                      Business Base in Kochi *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5C45A]"
                      >
                        {locations.map((loc) => (
                          <option key={loc} value={loc} className="bg-[#041126] text-white">
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-slate-300 uppercase mb-1.5">
                      Direct Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98950 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5C45A]"
                      />
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-slate-300 uppercase mb-1.5">
                      WhatsApp Number (For Circle Updates)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98950 00000"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5C45A]"
                    />
                  </div>
                </div>

                {/* Exclusive Seat Notice */}
                <div className="p-3 rounded-xl bg-[#071B3A]/60 border border-[#C9A227]/25 flex items-start gap-2.5 text-[11px] text-slate-300 leading-relaxed">
                  <Sparkles className="w-4 h-4 text-[#E5C45A] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Category Exclusivity Policy:</strong> To ensure zero competition and maximize direct referral flow, each BOC Chapter admits only <span className="text-[#E5C45A] font-semibold">one verified leader per business category</span>.
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-[#E5C45A] via-[#C9A227] to-[#B08C1E] text-[#041126] font-bold text-sm tracking-wider uppercase shadow-gold-md hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  Submit Membership Application
                  <ArrowRight className="w-4 h-4 text-[#041126]" />
                </button>
              </form>
            </>
          ) : (
            /* Success Confirmation State */
            <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#C9A227] to-[#E5C45A] text-[#041126] flex items-center justify-center mx-auto shadow-gold-lg">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-[#071B3A] border border-[#C9A227]/40 text-xs font-semibold text-[#E5C45A]">
                Application Received • Kochi Chapter
              </div>

              <h4 className="font-serif-luxury text-3xl font-bold text-white">
                Welcome to the Pre-Screening Phase
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.fullName || 'Business Leader'}</span> from <span className="text-[#E5C45A] font-semibold">{formData.companyName || 'your enterprise'}</span>. Our Membership Committee for the Kochi Chapter is reviewing category availability for <span className="text-white underline">{formData.industry}</span>.
              </p>

              <div className="p-4 rounded-2xl bg-[#071B3A]/80 border border-[#C9A227]/30 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Chapter:</span>
                  <span className="font-medium text-white">Kochi, Kerala (Founding)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Region:</span>
                  <span className="font-medium text-white">{formData.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="font-medium text-[#E5C45A]">Priority Review In Progress</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#E5C45A] to-[#C9A227] text-[#041126] font-bold text-xs uppercase tracking-wider shadow-gold-sm hover:brightness-110 transition-all"
              >
                Return to Circle Showcase
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
