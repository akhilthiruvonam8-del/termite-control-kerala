import React, { useState } from 'react';
import { X, Calculator, ShieldCheck, Sparkles, Phone, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick, trackConversion } from '../utils/analytics';
import { saveLead } from '../utils/storage';

export default function CostCalculatorModal({ isOpen, onClose, initialData = {} }) {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState(initialData.propertyType || 'Independent Villa / House');
  const [approxSqft, setApproxSqft] = useState('1500 - 2500 sq ft');
  const [problemType, setProblemType] = useState(initialData.problem || 'Active Subterranean Termites');
  const [location, setLocation] = useState(initialData.location || 'Kozhikode');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [estimatedRange, setEstimatedRange] = useState('');

  if (!isOpen) return null;

  const calculateEstimate = () => {
    let base = "₹8,500 – ₹14,500";
    if (approxSqft === 'Under 1000 sq ft') base = "₹4,500 – ₹7,500";
    if (approxSqft === '1000 - 1500 sq ft') base = "₹6,500 – ₹10,500";
    if (approxSqft === '1500 - 2500 sq ft') base = "₹9,500 – ₹16,500";
    if (approxSqft === '2500 - 4000 sq ft') base = "₹14,000 – ₹24,000";
    if (approxSqft === '4000+ sq ft / Commercial') base = "Custom Corporate Plan";
    setEstimatedRange(base);
    setStep(2);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    saveLead({
      name: name || 'Website Visitor',
      phone,
      location,
      propertyType,
      problem: problemType,
      message: `Estimated Area: ${approxSqft} | Estimate Shown: ${estimatedRange}`,
      sourceForm: 'cost_calculator_modal'
    });

    trackConversion('calculator_lead_submit', {
      propertyType,
      problemType,
      approxSqft,
      location
    });

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Inspection Request Confirmed!
            </h3>
            <p className="text-sm text-slate-600">
              Our technical consultant will call <span className="font-bold text-slate-900">+91 {phone}</span> in 15 minutes to confirm the inspection slot and finalize your tailored quotation for <span className="font-semibold text-emerald-800">{location}</span>.
            </p>
            <div className="pt-3">
              <button
                onClick={() => {
                  handleWhatsAppClick('calculator_success', { location, service: problemType });
                  onClose();
                }}
                className="w-full py-3 bg-[#25D366] text-white font-bold text-sm rounded-xl shadow flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Connect with Tech Team on WhatsApp</span>
              </button>
            </div>
          </div>
        ) : step === 1 ? (
          <div className="space-y-5">
            <div className="flex items-center space-x-2 text-emerald-700 text-xs font-extrabold uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>Instant Treatment Estimator</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 font-display">
              Calculate Termite Treatment Scope
            </h3>

            <div className="space-y-3.5 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Property Type</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full p-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option>Independent Villa / House</option>
                  <option>Apartment / Flat</option>
                  <option>New Construction (Pre-Foundation)</option>
                  <option>Commercial Office / Shop</option>
                  <option>Warehouse / Industrial</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Built-Up Area (Approx.)</label>
                <select
                  value={approxSqft}
                  onChange={(e) => setApproxSqft(e.target.value)}
                  className="w-full p-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option>Under 1000 sq ft</option>
                  <option>1000 - 1500 sq ft</option>
                  <option>1500 - 2500 sq ft</option>
                  <option>2500 - 4000 sq ft</option>
                  <option>4000+ sq ft / Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Observed Issue</label>
                <select
                  value={problemType}
                  onChange={(e) => setProblemType(e.target.value)}
                  className="w-full p-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-600 font-semibold text-emerald-900"
                >
                  <option>Active Subterranean Termites (Mud Tubes / Hollow Wood)</option>
                  <option>Wood Borer Powder (Falling Dust From Furniture)</option>
                  <option>Both Termites & Wood Borers</option>
                  <option>Preventative Anti-Termite Treatment</option>
                  <option>Pre-Construction Soil Piping / Soil Treatment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">District / City</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Kozhikode, Kochi, etc."
                  className="w-full p-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>

            <button
              onClick={calculateEstimate}
              className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm rounded-xl shadow-lg transition flex items-center justify-center space-x-2"
            >
              <span>Calculate Scope & Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <form onSubmit={handleFinalSubmit} className="space-y-4">
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-emerald-800">Estimated Treatment Budget</span>
                <span className="text-[10px] bg-emerald-700 text-white px-2 py-0.5 rounded font-bold">Includes Warranty</span>
              </div>
              <p className="text-2xl font-black text-emerald-950 font-display mt-1">
                {estimatedRange}
              </p>
              <p className="text-[11px] text-emerald-700 mt-0.5">
                Exact quotation finalized after on-site inspection of wall perimeters and woodwork.
              </p>
            </div>

            <div className="space-y-3 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number for Inspection Call *</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-600 font-semibold"
                />
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg transition"
              >
                Confirm Free Inspection & Lock Quote
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-slate-500 hover:text-slate-800 underline block mx-auto pt-1"
              >
                Back to recalculate
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
