import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  User, 
  Phone, 
  MapPin, 
  Briefcase, 
  ArrowRight,
  Mail,
  Globe,
  FileCheck2,
  ExternalLink
} from 'lucide-react';
import bocLogoPng from '../assets/boc-logo.png';

export default function BOCJoinModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    businessCategory: 'IT & Software Solutions',
    customCategory: '',
    designation: '',
    businessAddress: '',
    cityDistrict: 'Kochi (Ernakulam)',
    mobileNumber: '',
    whatsappNumber: '',
    email: '',
    website: '',
    gstNumber: '',
    agreeTerms: false,
    agreePrivacy: false,
  });

  const [validationError, setValidationError] = useState('');

  if (!isOpen) return null;

  const categories = [
    'IT & Software Solutions',
    'Real Estate & Construction',
    'Architecture & Interior Design',
    'Finance, CA & Wealth Advisory',
    'Healthcare, Clinics & Diagnostics',
    'Manufacturing & Industrial Engineering',
    'Gold, Jewelry & Luxury Retail',
    'Logistics, Maritime & Export-Import',
    'Marketing, Advertising & Digital Media',
    'Hospitality, Travel & Resorts',
    'Agro-Processing & Plantations',
    'Education, Academies & EdTech',
    'Legal & Corporate Advisory',
    'Others'
  ];

  const districts = [
    'Kochi (Ernakulam)',
    'Thrissur',
    'Kozhikode',
    'Thiruvananthapuram',
    'Kottayam',
    'Kollam',
    'Madras (Chennai)',
    'Other District / City'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.businessCategory === 'Others' && !formData.customCategory.trim()) {
      setValidationError('Please specify your Primary Industry / Business Category in the field provided.');
      return;
    }

    if (!formData.agreeTerms || !formData.agreePrivacy) {
      setValidationError('Please agree to both the BOC Membership Terms & Conditions and Privacy Policy to submit your application.');
      return;
    }

    setValidationError('');

    const recordedCategory = formData.businessCategory === 'Others'
      ? (formData.customCategory.trim() ? `${formData.customCategory.trim()} (Other)` : 'Other Category')
      : formData.businessCategory;

    const now = new Date();
    const receipt = {
      referenceId: `BOC-${now.getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`,
      ...formData,
      businessCategory: recordedCategory,
      customCategory: formData.customCategory.trim(),
      termsAccepted: true,
      privacyAccepted: true,
      policyVersion: 'BOC-Charter-2026-v1.0',
      privacyVersion: 'BOC-Privacy-2026-v1.0',
      consentTimestamp: now.toISOString(),
      formattedDate: now.toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'short'
      })
    };

    // Save application to localStorage for proper audit record keeping
    try {
      const existing = JSON.parse(localStorage.getItem('boc_applications') || '[]');
      existing.unshift(receipt);
      localStorage.setItem('boc_applications', JSON.stringify(existing));
    } catch (err) {
      console.warn('Could not save to localStorage', err);
    }

    setSubmissionReceipt(receipt);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmissionReceipt(null);
    setValidationError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#020A17]/85 backdrop-blur-md transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#071B3A] via-[#041126] to-[#020A17] border border-[#C9A227]/40 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden z-10 animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        
        {/* Top Gold Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#C9A227] via-[#FFF3C4] to-[#E5C45A] shrink-0" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-[#071B3A] border border-slate-700/60 transition-colors z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-5 sm:p-7 overflow-y-auto custom-scrollbar flex-grow">
          {!submitted ? (
            <>
              {/* Modal Header */}
              <div className="flex items-start gap-3.5 mb-6 pb-4 border-b border-[#C9A227]/20">
                <img 
                  src={bocLogoPng} 
                  alt="BOC Emblem" 
                  className="w-11 h-11 sm:w-12 sm:h-12 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] shrink-0" 
                />
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#071B3A] border border-[#C9A227]/40 text-[10px] font-cinzel font-bold text-[#E5C45A] uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>EXECUTIVE MEMBERSHIP JOIN FORM</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                    Join The <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#F5C75D] bg-clip-text text-transparent">Circle</span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Lock your business category exclusivity. Connect directly with peer founders and enterprise leaders.
                  </p>
                </div>
              </div>

              {/* Application Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Full Name & Designation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-cinzel font-bold tracking-wider text-slate-300 uppercase mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jijeesh Minerva"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5C45A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-cinzel font-bold tracking-wider text-slate-300 uppercase mb-1">
                      Designation / Role *
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Founder & CEO / Managing Partner"
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5C45A]"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Business Name & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-cinzel font-bold tracking-wider text-slate-300 uppercase mb-1">
                      Business / Company Name *
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eco Pest India / Urban Owls"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5C45A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-cinzel font-bold tracking-wider text-slate-300 uppercase mb-1">
                      Primary Industry Category *
                    </label>
                    <select
                      value={formData.businessCategory}
                      onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                      className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5C45A] cursor-pointer"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat} className="bg-[#041126] text-white">
                          {cat}
                        </option>
                      ))}
                    </select>

                    {formData.businessCategory === 'Others' && (
                      <div className="mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
                        <label className="block text-[10px] font-cinzel font-bold tracking-wider text-[#F9D678] uppercase mb-1 flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-[#F9D678]" />
                          Specify Your Industry Category *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Type your category here (e.g. Solar Energy, Organic Food, Event Management...)"
                          value={formData.customCategory}
                          onChange={(e) => setFormData({ ...formData, customCategory: e.target.value })}
                          className="w-full bg-[#020814] border border-[#F9D678] rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#F9D678]"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 3: Business Address & City / District */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-cinzel font-bold tracking-wider text-slate-300 uppercase mb-1">
                      Business Address *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Infopark Road, Kakkanad"
                        value={formData.businessAddress}
                        onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
                        className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5C45A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-cinzel font-bold tracking-wider text-slate-300 uppercase mb-1">
                      City / District *
                    </label>
                    <select
                      value={formData.cityDistrict}
                      onChange={(e) => setFormData({ ...formData, cityDistrict: e.target.value })}
                      className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5C45A] cursor-pointer"
                    >
                      {districts.map((d) => (
                        <option key={d} value={d} className="bg-[#041126] text-white">
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Mobile Number & WhatsApp Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-cinzel font-bold tracking-wider text-slate-300 uppercase mb-1">
                      Direct Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 90200 40009"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5C45A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-cinzel font-bold tracking-wider text-slate-300 uppercase mb-1">
                      WhatsApp Number (For Updates) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 90200 40009"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5C45A]"
                    />
                  </div>
                </div>

                {/* Row 5: Email & Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-cinzel font-bold tracking-wider text-slate-300 uppercase mb-1">
                      Official Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="founder@yourcompany.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5C45A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-cinzel font-bold tracking-wider text-slate-300 uppercase mb-1">
                      Website URL (Optional)
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        placeholder="https://yourcompany.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5C45A]"
                      />
                    </div>
                  </div>
                </div>

                {/* GST / Registration (Optional) */}
                <div>
                  <label className="block text-[11px] font-cinzel font-bold tracking-wider text-slate-300 uppercase mb-1">
                    GSTIN / Business Registration Details (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 32AAAAA0000A1Z5 or MSME / LLP / CIN"
                    value={formData.gstNumber}
                    onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
                    className="w-full bg-[#041126]/90 border border-[#C9A227]/30 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5C45A]"
                  />
                </div>

                {/* Category Exclusivity Notice */}
                <div className="p-3 rounded-xl bg-[#071B3A]/60 border border-[#C9A227]/25 flex items-start gap-2 text-[11px] text-slate-300 leading-relaxed">
                  <Sparkles className="w-4 h-4 text-[#E5C45A] shrink-0 mt-0.5" />
                  <span>
                    <strong>Strict Exclusivity:</strong> BOC admits only <strong>one verified leader per specialty per chapter</strong>. Your application locks your category upon Committee approval.
                  </span>
                </div>

                {/* ============================================================= */}
                {/* MANDATORY CONSENT CHECKBOXES & CLICKABLE POLICY LINKS         */}
                {/* ============================================================= */}
                <div className="pt-2 border-t border-[#D4AF37]/25 space-y-3">
                  
                  {/* Mandatory Checkbox 1: Terms & Conditions */}
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-200 select-none group">
                    <input
                      type="checkbox"
                      required
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="mt-0.5 rounded border-[#D4AF37] text-[#D4AF37] focus:ring-0 accent-[#D4AF37] cursor-pointer w-4 h-4"
                    />
                    <span className="leading-snug">
                      I agree to the{' '}
                      <Link 
                        to="/terms" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#F9D678] font-bold underline hover:text-white inline-flex items-center gap-0.5"
                      >
                        BOC Membership Terms & Conditions
                        <ExternalLink className="w-3 h-3 inline" />
                      </Link>. <span className="text-red-400">*</span>
                    </span>
                  </label>

                  {/* Mandatory Checkbox 2: Privacy Policy */}
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-200 select-none group">
                    <input
                      type="checkbox"
                      required
                      checked={formData.agreePrivacy}
                      onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                      className="mt-0.5 rounded border-[#D4AF37] text-[#D4AF37] focus:ring-0 accent-[#D4AF37] cursor-pointer w-4 h-4"
                    />
                    <span className="leading-snug">
                      I agree to the{' '}
                      <Link 
                        to="/privacy" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#F9D678] font-bold underline hover:text-white inline-flex items-center gap-0.5"
                      >
                        BOC Privacy Policy
                        <ExternalLink className="w-3 h-3 inline" />
                      </Link>. <span className="text-red-400">*</span>
                    </span>
                  </label>

                  {/* Additional Clickable Policy Links Bar */}
                  <div className="pt-1 text-[11px] text-slate-400 flex items-center justify-start gap-2 sm:gap-3 flex-wrap">
                    <span className="text-slate-500 font-medium">BOC Policies:</span>
                    <Link 
                      to="/terms" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#FCE38A] hover:underline hover:text-white"
                    >
                      Terms & Conditions
                    </Link>
                    <span>•</span>
                    <Link 
                      to="/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#FCE38A] hover:underline hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                    <span>•</span>
                    <Link 
                      to="/refund-policy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#FCE38A] hover:underline hover:text-white"
                    >
                      Refund Policy
                    </Link>
                    <span>•</span>
                    <Link 
                      to="/referral-policy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#FCE38A] hover:underline hover:text-white"
                    >
                      Referral / Commission Policy
                    </Link>
                  </div>

                  {validationError && (
                    <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                </div>

                {/* Submit Application Button */}
                <button
                  type="submit"
                  disabled={!formData.agreeTerms || !formData.agreePrivacy}
                  className={`w-full mt-3 py-3.5 rounded-xl font-cinzel font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    formData.agreeTerms && formData.agreePrivacy
                      ? 'bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] shadow-lg hover:brightness-110 active:scale-[0.99] cursor-pointer'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                  }`}
                >
                  <span>Submit Membership Application</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                {/* Direct Secretariat Contact */}
                <div className="pt-1 text-center text-[11px] text-slate-400">
                  <span>Admissions Helpline: </span>
                  <a href="tel:+919020040009" className="text-[#FCE38A] font-bold hover:underline">+91 90200 40009</a>
                  <span className="mx-1.5">•</span>
                  <a href="mailto:bocconnect.in@gmail.com" className="text-[#FCE38A] font-bold hover:underline">bocconnect.in@gmail.com</a>
                </div>

              </form>
            </>
          ) : (
            /* Success Confirmation State */
            <div className="py-6 text-center space-y-4 animate-in fade-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#C9A227] to-[#E5C45A] text-[#041126] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-[#071B3A] border border-[#C9A227]/40 text-xs font-cinzel font-bold text-[#E5C45A]">
                APPLICATION LOGGED & VERIFIED
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Application Received Successfully
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{submissionReceipt?.fullName}</span>. Your application for <span className="text-[#E5C45A] font-semibold">{submissionReceipt?.businessName}</span> has been securely recorded by the BOC Secretariat.
              </p>

              {/* Receipt Box with Recorded Consent & Timestamp */}
              <div className="p-4 rounded-2xl bg-[#071B3A]/90 border border-[#C9A227]/40 max-w-md mx-auto text-left text-xs space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Application Ref:</span>
                  <strong className="text-[#F9D678] font-mono">{submissionReceipt?.referenceId}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Designation / Role:</span>
                  <span className="font-medium text-white">{submissionReceipt?.designation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Category & Region:</span>
                  <span className="font-medium text-white">{submissionReceipt?.businessCategory} • {submissionReceipt?.cityDistrict}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Terms & Conditions:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Accepted (v1.0)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Privacy Policy:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Accepted (v1.0)
                  </span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2 text-[11px]">
                  <span className="text-slate-400">Timestamp Logged:</span>
                  <span className="font-mono text-slate-200">{submissionReceipt?.formattedDate}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#020814] border border-slate-800 text-[11px] text-slate-400 max-w-md mx-auto">
                The Admissions Committee will reach out via WhatsApp (<span className="text-white">{submissionReceipt?.whatsappNumber}</span>) or Phone (<span className="text-white">{submissionReceipt?.mobileNumber}</span>) within 24 hours.
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#E5C45A] to-[#C9A227] text-[#041126] font-cinzel font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 transition-all cursor-pointer"
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
