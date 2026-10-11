import React, { useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Upload,
  CheckCircle2,
  MapPin,
  Home,
  Building2,
  Building,
  Store,
  KeyRound,
  Sparkles,
  Phone,
  MessageSquare,
  ShieldAlert,
} from 'lucide-react';
import { KERALA_DISTRICTS, CATEGORIES } from '../data/veeduxData';

export default function PostPropertyModal({ isOpen, onClose, onListingSubmitted }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    purpose: 'sell', // sell | rent
    category: 'houses-villas',
    title: '',
    description: '',
    district: 'Ernakulam / Kochi',
    locality: '',
    price: '',
    priceUnit: 'Total Amount', // Total Amount | Per Cent | Per Month
    landArea: '',
    landUnit: 'Cents', // Cents | Acres | Sq.Ft
    builtUpArea: '',
    bedrooms: '3',
    bathrooms: '3',
    facing: 'East Facing',
    waterSource: 'Kerala Open Well + KWA',
    photos: [
      '/images/kochi-nri-villa.jpg',
      '/images/alappuzha-traditional-house.jpg',
    ],
    sellerName: '',
    sellerPhone: '',
    sellerWhatsapp: '',
    sellerType: 'Direct Owner',
  });

  if (!isOpen) return null;

  const nextStep = () => setStep((s) => Math.min(s + 1, 8));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setTimeout(() => {
        onListingSubmitted?.(formData);
        setSubmittedSuccess(false);
        onClose();
        setStep(1);
      }, 2500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in">
      <div className="bg-[#FAF8F2] w-full max-w-xl min-h-screen sm:min-h-0 sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative my-auto border border-[#E2EBE5]">
        {/* Header */}
        <div className="bg-white/95 backdrop-blur-md px-4 py-3 border-b border-[#E2EBE5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            {step > 1 && !submittedSuccess && (
              <button
                onClick={prevStep}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-700"
              >
                <ChevronLeft size={20} />
              </button>
            )}
            <div>
              <span className="font-bold text-sm text-[#145C3D]">
                Post Property Free on VeeduX
              </span>
              <p className="text-[10px] text-slate-400">Step {step} of 8</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 h-1">
          <div
            className="bg-gradient-to-r from-[#145C3D] to-[#D6AD55] h-1 transition-all duration-300"
            style={{ width: `${(step / 8) * 100}%` }}
          />
        </div>

        {/* Form Body */}
        <div className="p-4 sm:p-6 flex-grow overflow-y-auto max-h-[75vh]">
          {submittedSuccess ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-[#145C3D] rounded-full flex items-center justify-center mx-auto shadow-md animate-bounce">
                <CheckCircle2 size={36} />
              </div>
              <h2 className="text-xl font-black text-slate-900">
                Listing Submitted for Approval!
              </h2>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Our VeeduX Kerala ground moderation team will review and publish your listing within 1–2 hours. You will receive WhatsApp updates!
              </p>
            </div>
          ) : (
            <div>
              {/* Step 1: Choose Sell or Rent */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Step 1: What is your primary purpose?
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Choose whether you want to sell your property or find tenants in Kerala.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, purpose: 'sell' })}
                      className={`p-4 rounded-2xl border-2 text-center transition-all ${
                        formData.purpose === 'sell'
                          ? 'border-[#145C3D] bg-emerald-50/70 text-[#145C3D] shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700'
                      }`}
                    >
                      <Home size={32} className="mx-auto mb-2 text-[#145C3D]" />
                      <div className="font-bold text-sm">Sell Property</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        Land, Villa, Flat, Commercial
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, purpose: 'rent' })}
                      className={`p-4 rounded-2xl border-2 text-center transition-all ${
                        formData.purpose === 'rent'
                          ? 'border-[#145C3D] bg-emerald-50/70 text-[#145C3D] shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700'
                      }`}
                    >
                      <KeyRound size={32} className="mx-auto mb-2 text-[#D6AD55]" />
                      <div className="font-bold text-sm">Rent / Lease</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        Rental homes, flats, shops
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Select Property Category */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Step 2: Select Property Category
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Specify the category that best matches your Kerala property.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, category: cat.id })}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          formData.category === cat.id
                            ? 'border-[#145C3D] bg-emerald-50 text-[#145C3D] font-bold shadow-xs'
                            : 'border-slate-200 bg-white text-slate-700'
                        }`}
                      >
                        <div className="text-xs font-bold">{cat.name}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{cat.malayalam}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Title and Description */}
              {step === 3 && (
                <div className="space-y-3.5">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Step 3: Enter Title & Description
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Write an attractive title and clear details about your property.
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Property Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="E.g. 4 BHK Contemporary Luxury Villa near Infopark Kakkanad"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Full Description *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe room layout, water source (well/KWA), road width, elevation, distance to junction, etc."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Location and Map Pin */}
              {step === 4 && (
                <div className="space-y-3.5">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Step 4: Location & Map Pin
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Select Kerala district and specific locality or junction.
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      District (ജില്ല) *
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none"
                    >
                      {KERALA_DISTRICTS.map((dist) => (
                        <option key={dist.code} value={dist.name}>
                          {dist.name} ({dist.malayalam})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Locality & Landmark *
                    </label>
                    <input
                      type="text"
                      placeholder="E.g. Near Seaport-Airport Road, Kakkanad"
                      value={formData.locality}
                      onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
                    />
                  </div>

                  {/* Simulated Map Pin Card */}
                  <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-200 text-center space-y-1.5">
                    <div className="w-8 h-8 rounded-full bg-[#145C3D] text-white flex items-center justify-center mx-auto">
                      <MapPin size={18} className="text-[#D6AD55]" />
                    </div>
                    <p className="text-xs font-bold text-[#145C3D]">
                      GPS Coordinates Selected
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Pin drops automatically at {formData.locality || formData.district}
                    </p>
                  </div>
                </div>
              )}

              {/* Step 5: Price & Measurements */}
              {step === 5 && (
                <div className="space-y-3.5">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Step 5: Price & Measurements
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Enter price and measurements using Kerala Cents / Acres.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Expected Price (₹) *
                      </label>
                      <input
                        type="text"
                        placeholder="E.g. ₹ 1.25 Cr or ₹ 95 Lakhs"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Price Type
                      </label>
                      <select
                        value={formData.priceUnit}
                        onChange={(e) =>
                          setFormData({ ...formData, priceUnit: e.target.value })
                        }
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none"
                      >
                        <option>Total Amount</option>
                        <option>Per Cent (സെന്റിന്)</option>
                        <option>Per Month (വാടക)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Land Area (Cents/Acres)
                      </label>
                      <input
                        type="text"
                        placeholder="E.g. 7.5 Cents"
                        value={formData.landArea}
                        onChange={(e) => setFormData({ ...formData, landArea: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Built-up (Sq.Ft)
                      </label>
                      <input
                        type="text"
                        placeholder="E.g. 2,800 sq.ft"
                        value={formData.builtUpArea}
                        onChange={(e) =>
                          setFormData({ ...formData, builtUpArea: e.target.value })
                        }
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Bedrooms (BHK)
                      </label>
                      <select
                        value={formData.bedrooms}
                        onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none"
                      >
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                        <option value="4">4 BHK</option>
                        <option value="5">5+ BHK</option>
                        <option value="0">Not Applicable (Plot/Land)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Bathrooms
                      </label>
                      <select
                        value={formData.bathrooms}
                        onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none"
                      >
                        <option value="1">1 Bathroom</option>
                        <option value="2">2 Bathrooms</option>
                        <option value="3">3 Bathrooms</option>
                        <option value="4">4 Bathrooms</option>
                        <option value="5">5+ Bathrooms</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Photos & Virtual Tour */}
              {step === 6 && (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Step 6: Upload Photos & Media
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      High quality Kerala property photos get 5x more buyer calls!
                    </p>
                  </div>

                  <div className="border-2 border-dashed border-[#145C3D]/30 bg-emerald-50/40 rounded-2xl p-6 text-center space-y-2 cursor-pointer hover:bg-emerald-50/70 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white text-[#145C3D] flex items-center justify-center mx-auto shadow-xs">
                      <Upload size={22} />
                    </div>
                    <div className="text-xs font-bold text-slate-800">
                      Click to upload photos or drag and drop
                    </div>
                    <div className="text-[10px] text-slate-400">
                      PNG, JPG up to 10MB each (Front elevation, interiors, road access)
                    </div>
                  </div>

                  {/* Preloaded Photo Previews */}
                  <div className="grid grid-cols-2 gap-2">
                    {formData.photos.map((src, i) => (
                      <div
                        key={i}
                        className="relative rounded-xl overflow-hidden aspect-[4/3] border border-slate-200"
                      >
                        <img src={src} alt="Uploaded" className="w-full h-full object-cover" />
                        <span className="absolute top-1.5 left-1.5 bg-black/60 text-white text-[9px] px-1.5 py-0.5 rounded-sm">
                          {i === 0 ? 'Cover Photo' : `Photo ${i + 1}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 7: Seller Contact Details */}
              {step === 7 && (
                <div className="space-y-3.5">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Step 7: Seller Contact Details
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Buyers and tenants will contact you directly on these numbers.
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="E.g. Sreekumar Nair"
                      value={formData.sellerName}
                      onChange={(e) => setFormData({ ...formData, sellerName: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Calling Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9847X XXXXX"
                      value={formData.sellerPhone}
                      onChange={(e) => setFormData({ ...formData, sellerPhone: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9847X XXXXX (for instant buyer chats)"
                      value={formData.sellerWhatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, sellerWhatsapp: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      You Are
                    </label>
                    <select
                      value={formData.sellerType}
                      onChange={(e) => setFormData({ ...formData, sellerType: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none"
                    >
                      <option>Direct Owner</option>
                      <option>NRI Owner / Family Member</option>
                      <option>Builder / Developer</option>
                      <option>Authorized Local Real Estate Consultant</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 8: Preview & Submit */}
              {step === 8 && (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Step 8: Preview & Submit for Verification
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Review all listing details before submitting to VeeduX moderation.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-[#E2EBE5] space-y-3 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase text-[#145C3D] tracking-wide">
                        {formData.purpose === 'sell' ? 'For Sale' : 'For Rent'} •{' '}
                        {formData.category}
                      </span>
                      <span className="text-base font-black text-[#145C3D]">
                        {formData.price || '₹ Price on Request'}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-slate-900">
                      {formData.title || 'Untitled Kerala Property'}
                    </h3>

                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin size={13} className="text-[#27865B]" />
                      <span>
                        {formData.locality || 'Locality'}, {formData.district}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-2 px-3 bg-[#FAF8F2] rounded-xl text-[11px] text-slate-700 font-semibold text-center">
                      <div>{formData.landArea || 'Land N/A'}</div>
                      <div>{formData.builtUpArea || 'Built-up N/A'}</div>
                      <div>{formData.bedrooms} BHK</div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                      <span>Owner: {formData.sellerName || 'Owner'}</span>
                      <span className="font-semibold text-emerald-800">
                        {formData.sellerType}
                      </span>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                    <ShieldAlert size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">100% Free Listing Guarantee:</span> VeeduX does not charge any upfront fees or commission for direct owners.
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        {!submittedSuccess && (
          <div className="bg-white px-4 py-3 border-t border-[#E2EBE5] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 8 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2.5 rounded-xl bg-[#145C3D] hover:bg-[#0C3423] text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
              >
                <span>Continue</span>
                <ChevronRight size={15} />
              </button>
            ) : (
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#145C3D] to-[#27865B] hover:opacity-95 text-white text-xs font-bold flex items-center gap-1.5 shadow-md disabled:opacity-50"
              >
                <CheckCircle2 size={16} />
                <span>{isSubmitting ? 'Submitting...' : 'Submit Listing Now'}</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
