import React, { useState } from 'react';
import { Send, CheckCircle, Shield, Phone, MessageCircle, AlertCircle, Clock, MapPin } from 'lucide-react';
import { saveLead } from '../utils/storage';
import { trackConversion, getWhatsAppLink } from '../utils/analytics';
import { DISTRICTS } from '../data/districts';

export default function LeadForm({ 
  defaultLocation = '', 
  defaultProblem = '', 
  defaultProperty = '',
  title = "GET A TERMITE INSPECTION",
  subtitle = "Free site inspection & transparent treatment quotation across Kerala",
  source = "hero_form",
  onSuccess
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: defaultLocation || '',
    propertyType: defaultProperty || 'House',
    problem: defaultProblem || 'Termite',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    leadId: null
  });

  const propertyTypes = ['House', 'Villa', 'Apartment', 'Office', 'Shop', 'Commercial', 'Other'];
  const problemTypes = ['Termite', 'Wood Borer', 'Both', 'Not Sure'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null, leadId: null });

    // Validate phone number
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setStatus({ submitting: false, submitted: false, error: 'Please enter a valid 10-digit mobile number.', leadId: null });
      return;
    }

    if (!formData.name.trim()) {
      setStatus({ submitting: false, submitted: false, error: 'Please enter your name.', leadId: null });
      return;
    }

    // Save lead to local CRM & optional webhook
    const result = saveLead({
      ...formData,
      phone: cleanPhone,
      sourceForm: source
    });

    // Track conversion event for Google Ads / GA4
    trackConversion('lead_form_submit', {
      source,
      propertyType: formData.propertyType,
      problem: formData.problem,
      location: formData.location,
      phone: cleanPhone
    });

    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        error: null,
        leadId: result.lead ? result.lead.id : null
      });

      if (onSuccess) {
        onSuccess(formData);
      }
    }, 400);
  };

  const handleWhatsAppForward = () => {
    const text = `Hi TermiteControl.me, I submitted an inspection request.\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location || defaultLocation}\nProperty: ${formData.propertyType}\nProblem: ${formData.problem}\nNotes: ${formData.message || 'None'}`;
    const url = getWhatsAppLink({ message: text });
    window.open(url, '_blank');
  };

  if (status.submitted) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-emerald-200 text-center animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
          Thank you!
        </h3>
        <p className="text-base font-semibold text-emerald-800 mb-2">
          Our team will contact you shortly.
        </p>
        <p className="text-sm text-slate-600 mb-4">
          Your inspection request has been registered under reference <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">{status.leadId}</span>.
        </p>
        
        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 mb-5 text-left text-xs text-slate-700 space-y-1.5">
          <div className="flex items-center text-emerald-900 font-bold mb-1">
            <Clock className="w-4 h-4 mr-1 text-emerald-700" />
            <span>Response Guarantee:</span>
          </div>
          <p>• Our senior pest technician will call you within 15–30 minutes.</p>
          <p>• Inspection schedule and preliminary cost assessment will be shared.</p>
        </div>

        <div className="space-y-2.5">
          <button
            onClick={handleWhatsAppForward}
            className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm rounded-xl shadow transition flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Connect on WhatsApp Instantly</span>
          </button>
          
          <button
            onClick={() => setStatus({ submitting: false, submitted: false, error: null, leadId: null })}
            className="text-xs text-slate-500 hover:text-slate-800 underline block mx-auto pt-2"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-7 shadow-2xl border border-slate-200/80 text-left">
      <div className="mb-4">
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-[11px] font-bold uppercase tracking-wider mb-2">
          <Shield className="w-3.5 h-3.5 text-emerald-700" />
          <span>Same-Day Inspection Booking</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display tracking-tight leading-snug">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          {subtitle}
        </p>
      </div>

      {status.error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{status.error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Rahul Menon"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-xs font-semibold text-slate-500">
                +91
              </span>
              <input
                type="tel"
                name="phone"
                required
                maxLength="12"
                placeholder="9876543210"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-12 pr-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition font-medium"
              />
            </div>
          </div>
        </div>

        {/* Location / City */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
            <span>Location / City in Kerala <span className="text-red-500">*</span></span>
            <span className="text-[11px] text-emerald-700 font-medium">All 14 Districts</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="location"
              required
              placeholder="e.g. Kozhikode (Pavamani Rd / Nadakkavu), Kochi, etc."
              value={formData.location}
              onChange={handleChange}
              list="kerala-districts-list"
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition"
            />
            <datalist id="kerala-districts-list">
              {DISTRICTS.map(d => (
                <option key={d.id} value={d.name} />
              ))}
              <option value="Kozhikode - Pavamani Road" />
              <option value="Kozhikode - Nadakkavu" />
              <option value="Kozhikode - Palayam" />
              <option value="Kozhikode - Mavoor Road" />
              <option value="Kozhikode - Westhill" />
              <option value="Kochi - Kakkanad" />
              <option value="Kochi - Edappally" />
              <option value="Thiruvananthapuram - Kazhakkoottam" />
            </datalist>
          </div>
        </div>

        {/* Property Type & Problem in 2 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Property Type */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Property Type
            </label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition font-medium"
            >
              {propertyTypes.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* Problem Type */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Pest Problem
            </label>
            <select
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition font-medium text-emerald-950 font-semibold"
            >
              {problemTypes.map(pr => (
                <option key={pr} value={pr}>{pr}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Message / Area Details (Optional)
          </label>
          <textarea
            name="message"
            rows="2"
            placeholder="e.g. Mud tubes on door frame, wood powder from cupboard, etc."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.submitting}
          className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition transform active:scale-[0.99] flex items-center justify-center space-x-2"
        >
          {status.submitting ? (
            <span className="inline-flex items-center space-x-2">
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              <span>Scheduling...</span>
            </span>
          ) : (
            <>
              <span>GET FREE CONSULTATION</span>
              <Send className="w-4 h-4 ml-1" />
            </>
          )}
        </button>

        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
          <span className="flex items-center text-slate-600">
            <Shield className="w-3.5 h-3.5 mr-1 text-emerald-700" />
            100% Privacy Protected
          </span>
          <span className="text-amber-800 font-semibold">Zero Call Spam</span>
        </div>
      </form>
    </div>
  );
}
