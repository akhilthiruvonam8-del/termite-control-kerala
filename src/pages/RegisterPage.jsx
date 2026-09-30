import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Building2, 
  User, 
  MapPin, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import bocLogoPng from '../assets/boc-logo.png';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    phone: '',
    whatsapp: '',
    email: '',
    companyName: '',
    category: 'Real Estate & Construction',
    industry: '',
    yearsInBusiness: '',
    services: '',
    website: '',
    country: 'India',
    state: 'Kerala',
    city: 'Kochi',
    chapter: 'BOC Kochi Central Chapter',
    gstNumber: '',
    agreeTerms: false,
    agreePrivacy: false,
  });
  const [consentReceipt, setConsentReceipt] = useState(null);
  const [step3Error, setStep3Error] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      if (!formData.agreeTerms || !formData.agreePrivacy) {
        setStep3Error('Please agree to both the BOC Membership Terms & Conditions and Privacy Policy to submit your application.');
        return;
      }
      setStep3Error('');
      const now = new Date();
      const receipt = {
        referenceId: `BOC-${now.getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`,
        ...formData,
        termsAccepted: true,
        privacyAccepted: true,
        policyVersion: 'BOC-Charter-2026-v1.0',
        privacyVersion: 'BOC-Privacy-2026-v1.0',
        consentTimestamp: now.toISOString(),
        formattedDate: now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })
      };
      try {
        const existing = JSON.parse(localStorage.getItem('boc_applications') || '[]');
        existing.unshift(receipt);
        localStorage.setItem('boc_applications', JSON.stringify(existing));
      } catch (err) {
        console.warn('Could not save to localStorage', err);
      }
      setConsentReceipt(receipt);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#020713] text-white pt-24 sm:pt-28 pb-20 px-4 selection:bg-[#D4AF37] selection:text-[#07172C]">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-3">
            <img src={bocLogoPng} alt="BOC" className="w-12 h-12 mx-auto object-contain" />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
            Executive Membership Application
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Apply to represent your business category exclusively in your regional chapter
          </p>
        </div>

        {/* Step Indicator */}
        {!submitted && (
          <div className="flex items-center justify-between max-w-md mx-auto mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                  step === s 
                    ? 'bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] shadow-md' 
                    : step > s 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-[#092244] text-slate-400 border border-slate-700'
                }`}>
                  {step > s ? '✓' : s}
                </div>
                <span className="text-xs font-cinzel text-slate-300 hidden sm:inline">
                  {s === 1 ? 'Personal' : s === 2 ? 'Enterprise' : 'Chapter'}
                </span>
                {s < 3 && <div className="w-8 sm:w-12 h-[1px] bg-slate-700 mx-1" />}
              </div>
            ))}
          </div>
        )}

        {/* Wizard Container */}
        <div className="bg-gradient-to-b from-[#06172E] to-[#040E1E] border border-[#D4AF37]/45 rounded-3xl p-7 sm:p-10 shadow-2xl backdrop-blur-md">
          
          {submitted ? (
            /* Success Confirmation State */
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-serif font-bold text-2xl text-white mb-2">
                Application Received!
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Your profile for <strong className="text-[#F9D678]">{formData.companyName}</strong> has been submitted to the <strong className="text-white">{formData.chapter}</strong> Admissions Committee.
              </p>
              <div className="bg-[#020814] p-4 rounded-xl border border-slate-800 text-xs text-slate-300 text-left mb-6 max-w-md mx-auto space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Application Ref:</span>
                  <strong className="text-[#F9D678] font-mono">{consentReceipt?.referenceId}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Category:</span>
                  <strong className="text-[#F9D678]">{formData.category}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Chapter Roster:</span>
                  <span>{formData.chapter}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Terms & Conditions:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Accepted (v1.0)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Privacy Policy:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Accepted (v1.0)
                  </span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2 text-[11px]">
                  <span className="text-slate-400">Consent Logged:</span>
                  <span className="font-mono text-slate-200">{consentReceipt?.formattedDate}</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/login')}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
              >
                Proceed to Member Portal →
              </button>
            </div>
          ) : (
            /* Form Steps */
            <form onSubmit={handleNext} className="space-y-5">
              
              {/* STEP 1: Personal Contact */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="font-serif font-bold text-lg text-[#F9D678] mb-1">
                    Step 1: Executive & Leadership Details
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-cinzel font-bold text-slate-300 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Thomas"
                        className="w-full py-2.5 px-3.5 rounded-xl bg-[#020814] border border-[#D4AF37]/40 text-white text-xs sm:text-sm focus:border-[#F9D678] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-cinzel font-bold text-slate-300 uppercase mb-1">
                        Designation *
                      </label>
                      <input
                        type="text"
                        required
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="e.g. Founder & CEO / Managing Director"
                        className="w-full py-2.5 px-3.5 rounded-xl bg-[#020814] border border-[#D4AF37]/40 text-white text-xs sm:text-sm focus:border-[#F9D678] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-cinzel font-bold text-slate-300 uppercase mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 90200 40009"
                        className="w-full py-2.5 px-3.5 rounded-xl bg-[#020814] border border-[#D4AF37]/40 text-white text-xs sm:text-sm focus:border-[#F9D678] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-cinzel font-bold text-slate-300 uppercase mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="+91 90200 40009"
                        className="w-full py-2.5 px-3.5 rounded-xl bg-[#020814] border border-[#D4AF37]/40 text-white text-xs sm:text-sm focus:border-[#F9D678] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel font-bold text-slate-300 uppercase mb-1">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="mailboc@yahoo.com"
                      className="w-full py-2.5 px-3.5 rounded-xl bg-[#020814] border border-[#D4AF37]/40 text-white text-xs sm:text-sm focus:border-[#F9D678] outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Enterprise Profile */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="font-serif font-bold text-lg text-[#F9D678] mb-1">
                    Step 2: Enterprise Profile & Category
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-cinzel font-bold text-slate-300 uppercase mb-1">
                        Registered Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Acme Technologies Pvt Ltd"
                        className="w-full py-2.5 px-3.5 rounded-xl bg-[#020814] border border-[#D4AF37]/40 text-white text-xs sm:text-sm focus:border-[#F9D678] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-cinzel font-bold text-slate-300 uppercase mb-1">
                        Years in Business *
                      </label>
                      <input
                        type="text"
                        required
                        name="yearsInBusiness"
                        value={formData.yearsInBusiness}
                        onChange={handleChange}
                        placeholder="e.g. 8 Years"
                        className="w-full py-2.5 px-3.5 rounded-xl bg-[#020814] border border-[#D4AF37]/40 text-white text-xs sm:text-sm focus:border-[#F9D678] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel font-bold text-slate-300 uppercase mb-1">
                      Business Category (For Exclusivity Lock) *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3.5 rounded-xl bg-[#020814] border border-[#D4AF37]/40 text-white text-xs sm:text-sm focus:border-[#F9D678] outline-none cursor-pointer"
                    >
                      <option value="Real Estate & Construction">Real Estate & Construction</option>
                      <option value="Information Technology & Software">Information Technology & Software</option>
                      <option value="Management & Strategic Consulting">Management & Strategic Consulting</option>
                      <option value="Financial & Wealth Services">Financial & Wealth Services</option>
                      <option value="Manufacturing & Agriculture">Manufacturing & Agriculture</option>
                      <option value="Architecture & Interior Design">Architecture & Interior Design</option>
                      <option value="Healthcare & Diagnostics">Healthcare & Diagnostics</option>
                      <option value="Renewable Energy & Solar">Renewable Energy & Solar</option>
                      <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                      <option value="Media & Advertising">Media & Advertising</option>
                      <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel font-bold text-slate-300 uppercase mb-1">
                      Key Services & Products Offered *
                    </label>
                    <textarea
                      rows="3"
                      required
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      placeholder="List your core services (e.g. Custom Software Development, Cloud Architecture, Mobile Apps)"
                      className="w-full py-2.5 px-3.5 rounded-xl bg-[#020814] border border-[#D4AF37]/40 text-white text-xs sm:text-sm focus:border-[#F9D678] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel font-bold text-slate-300 uppercase mb-1">
                      Website URL
                    </label>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourcompany.com"
                      className="w-full py-2.5 px-3.5 rounded-xl bg-[#020814] border border-[#D4AF37]/40 text-white text-xs sm:text-sm focus:border-[#F9D678] outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Chapter Preference & Pledge */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="font-serif font-bold text-lg text-[#F9D678] mb-1">
                    Step 3: Chapter Selection & Exclusivity Pledge
                  </h3>

                  <div>
                    <label className="block text-xs font-cinzel font-bold text-slate-300 uppercase mb-1">
                      Preferred Regional Chapter *
                    </label>
                    <select
                      name="chapter"
                      value={formData.chapter}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3.5 rounded-xl bg-[#020814] border border-[#D4AF37]/40 text-white text-xs sm:text-sm focus:border-[#F9D678] outline-none cursor-pointer"
                    >
                      <option value="BOC Kochi Central Chapter">BOC Kochi Central Chapter (Wednesdays 7:00 AM)</option>
                      <option value="BOC Thrissur Heritage Chapter">BOC Thrissur Heritage Chapter (Thursdays 7:00 AM)</option>
                      <option value="BOC Kozhikode Malabar Chapter">BOC Kozhikode Malabar Chapter (Tuesdays 7:00 AM)</option>
                      <option value="BOC Capital Chapter (Trivandrum)">BOC Capital Chapter (Fridays 7:00 AM)</option>
                      <option value="BOC Kottayam Royal Chapter">BOC Kottayam Royal Chapter (Tuesdays 7:00 AM)</option>
                      <option value="BOC Kollam Port City Chapter">BOC Kollam Port City Chapter (Thursdays 7:00 AM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel font-bold text-slate-300 uppercase mb-1">
                      GSTIN / Business Registration No. (Optional for fast-track)
                    </label>
                    <input
                      type="text"
                      name="gstNumber"
                      value={formData.gstNumber}
                      onChange={handleChange}
                      placeholder="e.g. 32AAAAA0000A1Z5"
                      className="w-full py-2.5 px-3.5 rounded-xl bg-[#020814] border border-[#D4AF37]/40 text-white text-xs sm:text-sm focus:border-[#F9D678] outline-none"
                    />
                  </div>

                  {/* Mandatory Consent Checkboxes & Clickable Policy Links */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#020814] border border-[#D4AF37]/35 space-y-3">
                    
                    {/* Mandatory Checkbox 1: Terms & Conditions */}
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-200 select-none group">
                      <input
                        type="checkbox"
                        required
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="mt-0.5 rounded border-[#D4AF37] text-[#D4AF37] focus:ring-0 accent-[#D4AF37] cursor-pointer w-4 h-4"
                      />
                      <span className="leading-relaxed">
                        I agree to the{' '}
                        <Link 
                          to="/terms" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#F9D678] font-bold underline hover:text-white inline-flex items-center gap-0.5"
                        >
                          BOC Membership Terms & Conditions
                        </Link>. <span className="text-red-400">*</span>
                      </span>
                    </label>

                    {/* Mandatory Checkbox 2: Privacy Policy */}
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-200 select-none group">
                      <input
                        type="checkbox"
                        required
                        name="agreePrivacy"
                        checked={formData.agreePrivacy}
                        onChange={handleChange}
                        className="mt-0.5 rounded border-[#D4AF37] text-[#D4AF37] focus:ring-0 accent-[#D4AF37] cursor-pointer w-4 h-4"
                      />
                      <span className="leading-relaxed">
                        I agree to the{' '}
                        <Link 
                          to="/privacy" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#F9D678] font-bold underline hover:text-white inline-flex items-center gap-0.5"
                        >
                          BOC Privacy Policy
                        </Link>. <span className="text-red-400">*</span>
                      </span>
                    </label>

                    {/* Clickable Policy Links */}
                    <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400 flex items-center justify-start gap-2 flex-wrap">
                      <span className="text-slate-500 font-medium">BOC Policies:</span>
                      <Link 
                        to="/terms" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#FCE38A] hover:underline"
                      >
                        Terms & Conditions
                      </Link>
                      <span>•</span>
                      <Link 
                        to="/privacy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#FCE38A] hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      <span>•</span>
                      <Link 
                        to="/refund-policy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#FCE38A] hover:underline"
                      >
                        Refund Policy
                      </Link>
                      <span>•</span>
                      <Link 
                        to="/referral-policy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#FCE38A] hover:underline"
                      >
                        Referral / Commission Policy
                      </Link>
                    </div>

                    {step3Error && (
                      <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs">
                        {step3Error}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Wizard Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-5 py-2.5 rounded-full border border-slate-700 text-slate-300 text-xs font-cinzel font-bold uppercase flex items-center gap-1.5 hover:bg-white/5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] hover:from-white hover:to-[#F9D678] text-[#07172C] font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 cursor-pointer hover:scale-105 transition-all"
                >
                  <span>{step === 3 ? 'Submit Application' : 'Continue to Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
