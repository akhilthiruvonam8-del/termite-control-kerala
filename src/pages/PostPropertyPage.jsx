import React, { useState } from 'react';
import {
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
  ShieldCheck,
  Video,
  Layers,
  ArrowRight,
  Check,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PROPERTY_TYPES } from '../data/veeduxData';
import { KERALA_DISTRICTS } from '../data/locations';

export default function PostPropertyPage() {
  const { submitNewListing, navigateTo } = useApp();

  const [currentStep, setCurrentStep] = useState(1); // 1 to 9
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    purpose: 'sell', // 'sell' | 'rent'
    propertyType: 'villas',
    categoryName: 'Houses & Villas',
    title: '',
    description: '',
    bedrooms: '4',
    bathrooms: '4',
    builtUpArea: '2,500 sq.ft',
    builtUpSqFt: 2500,
    landArea: '8 Cents',
    landAreaCents: 8,
    facing: 'East Facing',
    waterSource: 'Kerala Open Well + KWA',
    furnishing: 'Semi-Furnished',
    parking: '2 Covered Cars',
    district: 'Ernakulam',
    location: 'Kakkanad, Kochi',
    locality: 'Near Infopark Expressway',
    price: '₹ 95 Lakhs',
    priceNumber: 9500000,
    priceUnit: 'Total Amount',
    photos: [
      '/images/kochi-nri-villa.jpg',
      '/images/alappuzha-traditional-house.jpg',
    ],
    videoUrl: '',
    sellerName: 'Pradeep Kurup',
    sellerPhone: '+91 98471 44556',
    sellerWhatsapp: '919847144556',
    sellerType: 'Direct Owner',
  });

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, 9));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const handleSubmitForApproval = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      submitNewListing(formData);
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 1500);
  };

  const stepsList = [
    'Sell / Rent',
    'Property Type',
    'Details',
    'Location',
    'Price',
    'Media',
    'Seller Info',
    'Preview',
    'Submit',
  ];

  return (
    <div className="w-full bg-[#FAF8F2] min-h-screen py-8 px-4 sm:px-6 pb-24 sm:pb-16 text-[#11291D]">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Step Indicator Top Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#E2EBE5] shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#145C3D] uppercase tracking-wider">
              Post Kerala Property Free
            </span>
            <span className="text-xs font-bold bg-[#FAF8F2] px-3 py-1 rounded-full border border-[#E2EBE5] text-slate-700">
              Step {currentStep} of 9: {stepsList[currentStep - 1]}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#145C3D] via-[#27865B] to-[#D6AD55] h-full transition-all duration-300"
              style={{ width: `${(currentStep / 9) * 100}%` }}
            />
          </div>
        </div>

        {/* Multi-Step Wizard Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2EBE5] shadow-sm">
          {submittedSuccess ? (
            /* Final Success State */
            <div className="py-12 text-center space-y-4 animate-in zoom-in-95">
              <div className="w-16 h-16 bg-emerald-100 text-[#145C3D] rounded-full flex items-center justify-center mx-auto shadow-md animate-bounce">
                <CheckCircle2 size={36} />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Listing Submitted for Moderation!
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                  Your listing for <span className="font-bold text-slate-800">{formData.title}</span> has been received. Our Kerala ground verification team will review and approve it within 1–2 hours.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => navigateTo('home')}
                  className="px-6 py-3 rounded-2xl bg-[#145C3D] hover:bg-[#0C3423] text-white text-xs font-bold shadow-md"
                >
                  Return to Home
                </button>
                <button
                  onClick={() => navigateTo('admin')}
                  className="px-6 py-3 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200"
                >
                  View in Admin Dashboard
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Step 1: Choose Sell or Rent */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <h2 className="text-lg font-black text-slate-900">
                      Step 1: Choose Listing Purpose
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Do you want to sell your Kerala property or find verified tenants?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, purpose: 'sell' })}
                      className={`p-6 rounded-3xl border-2 text-center transition-all ${
                        formData.purpose === 'sell'
                          ? 'border-[#145C3D] bg-emerald-50 text-[#145C3D] shadow-md'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <Home size={36} className="mx-auto mb-2 text-[#145C3D]" />
                      <div className="font-black text-base">Sell Property (വില്പനയ്ക്ക്)</div>
                      <div className="text-xs text-slate-500 mt-1">
                        Land, Villa, House, Commercial
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, purpose: 'rent' })}
                      className={`p-6 rounded-3xl border-2 text-center transition-all ${
                        formData.purpose === 'rent'
                          ? 'border-[#145C3D] bg-emerald-50 text-[#145C3D] shadow-md'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <KeyRound size={36} className="mx-auto mb-2 text-[#D6AD55]" />
                      <div className="font-black text-base">Rent / Lease (വാടകയ്ക്ക്)</div>
                      <div className="text-xs text-slate-500 mt-1">
                        Flats, Houses, Shops, Offices
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Choose Property Type */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <h2 className="text-lg font-black text-slate-900">
                      Step 2: Choose Property Type
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Select the exact category that describes your Kerala listing.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                    {PROPERTY_TYPES.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            propertyType: t.id,
                            categoryName: t.name,
                          })
                        }
                        className={`p-3.5 rounded-2xl border text-left transition-all ${
                          formData.propertyType === t.id
                            ? 'border-[#145C3D] bg-emerald-50 text-[#145C3D] font-bold shadow-xs'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-[#145C3D]/50'
                        }`}
                      >
                        <div className="text-xs font-bold">{t.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Property Details */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <h2 className="text-lg font-black text-slate-900">
                      Step 3: Property Details
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Provide a clear title, description, and measurements.
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Property Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="E.g. 4 BHK Modern Architectural Villa with Open Courtyard"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full text-xs p-3 rounded-2xl border border-slate-300 bg-[#FAF8F2] focus:outline-none focus:border-[#145C3D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Full Description *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Mention road width, flood safety elevation, distance to bus stop, well water availability..."
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-2xl border border-slate-300 bg-[#FAF8F2] focus:outline-none focus:border-[#145C3D]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Land Area (Cents)
                      </label>
                      <input
                        type="text"
                        placeholder="E.g. 8 Cents"
                        value={formData.landArea}
                        onChange={(e) =>
                          setFormData({ ...formData, landArea: e.target.value })
                        }
                        className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-[#FAF8F2] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Built-up Area (Sq.Ft)
                      </label>
                      <input
                        type="text"
                        placeholder="E.g. 2,400 sq.ft"
                        value={formData.builtUpArea}
                        onChange={(e) =>
                          setFormData({ ...formData, builtUpArea: e.target.value })
                        }
                        className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-[#FAF8F2] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Bedrooms
                      </label>
                      <select
                        value={formData.bedrooms}
                        onChange={(e) =>
                          setFormData({ ...formData, bedrooms: e.target.value })
                        }
                        className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-[#FAF8F2]"
                      >
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                        <option value="4">4 BHK</option>
                        <option value="5">5+ BHK</option>
                        <option value="0">Not Applicable (Plot/Commercial)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Water Source
                      </label>
                      <input
                        type="text"
                        placeholder="Open Well + KWA"
                        value={formData.waterSource}
                        onChange={(e) =>
                          setFormData({ ...formData, waterSource: e.target.value })
                        }
                        className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-[#FAF8F2]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Location */}
              {currentStep === 4 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <h2 className="text-lg font-black text-slate-900">
                      Step 4: Location & Map Pin
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Select your Kerala district and key landmark.
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Kerala District *
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) =>
                        setFormData({ ...formData, district: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-2xl border border-slate-300 bg-[#FAF8F2]"
                    >
                      {KERALA_DISTRICTS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name} ({d.malayalam})
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
                      placeholder="E.g. Kakkanad, near Infopark Main Gate"
                      value={formData.locality}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          locality: e.target.value,
                          location: `${e.target.value}, ${formData.district}`,
                        })
                      }
                      className="w-full text-xs p-3 rounded-2xl border border-slate-300 bg-[#FAF8F2] focus:outline-none"
                    />
                  </div>

                  <div className="bg-[#FAF8F2] p-4 rounded-2xl border border-[#E2EBE5] text-center space-y-1">
                    <MapPin size={24} className="text-[#145C3D] mx-auto animate-bounce" />
                    <p className="text-xs font-bold text-slate-800">
                      GPS Map Pin Automatically Set
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Location set to: {formData.locality || formData.district}
                    </p>
                  </div>
                </div>
              )}

              {/* Step 5: Price */}
              {currentStep === 5 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <h2 className="text-lg font-black text-slate-900">
                      Step 5: Price & Expectations
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Set a transparent, realistic price for Kerala buyers.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Expected Price (₹) *
                      </label>
                      <input
                        type="text"
                        placeholder="E.g. ₹ 95 Lakhs or ₹ 1.25 Cr"
                        value={formData.price}
                        onChange={(e) =>
                          setFormData({ ...formData, price: e.target.value })
                        }
                        className="w-full text-xs p-3 rounded-2xl border border-slate-300 bg-[#FAF8F2] font-bold text-[#145C3D]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Pricing Unit
                      </label>
                      <select
                        value={formData.priceUnit}
                        onChange={(e) =>
                          setFormData({ ...formData, priceUnit: e.target.value })
                        }
                        className="w-full text-xs p-3 rounded-2xl border border-slate-300 bg-[#FAF8F2]"
                      >
                        <option>Total Amount</option>
                        <option>Per Cent (സെന്റിന്)</option>
                        <option>Per Month (വാടക)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Upload Photos and Video */}
              {currentStep === 6 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <h2 className="text-lg font-black text-slate-900">
                      Step 6: Photos & Video Tour
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Upload exterior, interior and road access photos.
                    </p>
                  </div>

                  <div className="border-2 border-dashed border-[#145C3D]/30 bg-[#FAF8F2] rounded-3xl p-6 text-center space-y-2 cursor-pointer hover:bg-emerald-50/50 transition-colors">
                    <Upload size={28} className="text-[#145C3D] mx-auto" />
                    <p className="text-xs font-bold text-slate-800">
                      Click to upload photos (or drag & drop)
                    </p>
                    <p className="text-[10px] text-slate-400">
                      JPEG, PNG up to 15MB each
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      YouTube Video Walkthrough URL (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://youtube.com/watch?v=..."
                      value={formData.videoUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, videoUrl: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-2xl border border-slate-300 bg-[#FAF8F2]"
                    />
                  </div>
                </div>
              )}

              {/* Step 7: Seller Details */}
              {currentStep === 7 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <h2 className="text-lg font-black text-slate-900">
                      Step 7: Seller Details
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Direct contact for genuine buyer calls and WhatsApp.
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="E.g. Pradeep Kurup"
                      value={formData.sellerName}
                      onChange={(e) =>
                        setFormData({ ...formData, sellerName: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-2xl border border-slate-300 bg-[#FAF8F2]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Calling Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.sellerPhone}
                        onChange={(e) =>
                          setFormData({ ...formData, sellerPhone: e.target.value })
                        }
                        className="w-full text-xs p-3 rounded-2xl border border-slate-300 bg-[#FAF8F2]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.sellerWhatsapp}
                        onChange={(e) =>
                          setFormData({ ...formData, sellerWhatsapp: e.target.value })
                        }
                        className="w-full text-xs p-3 rounded-2xl border border-slate-300 bg-[#FAF8F2]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 8: Preview Listing */}
              {currentStep === 8 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <h2 className="text-lg font-black text-slate-900">
                      Step 8: Preview Your Listing
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Check how your property card will appear to Kerala buyers.
                    </p>
                  </div>

                  <div className="bg-[#FAF8F2] rounded-3xl p-5 border border-[#E2EBE5] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-black text-[#145C3D]">
                        {formData.price}
                      </span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                        {formData.purpose === 'sell' ? 'For Sale' : 'For Rent'}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-slate-900">
                      {formData.title || 'Untitled Property'}
                    </h3>
                    <p className="text-xs text-slate-500">{formData.location}</p>

                    <div className="grid grid-cols-3 gap-2 py-2 px-3 bg-white rounded-xl text-center text-xs font-bold text-slate-700">
                      <div>{formData.landArea}</div>
                      <div>{formData.builtUpArea}</div>
                      <div>{formData.bedrooms} BHK</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 9: Submit for Approval */}
              {currentStep === 9 && (
                <div className="space-y-5 text-center py-4 animate-in fade-in">
                  <div className="w-14 h-14 bg-emerald-50 text-[#145C3D] rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-slate-900">
                      Step 9: Ready to Submit for Moderation
                    </h2>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 leading-relaxed">
                      VeeduX reviews every listing to ensure zero fake brokers and accurate Kerala land measurements.
                    </p>
                  </div>

                  <div className="bg-[#FAF8F2] p-4 rounded-2xl border border-[#E2EBE5] text-xs text-slate-600 max-w-sm mx-auto space-y-1.5 text-left">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                      <Check size={14} className="text-[#145C3D]" />
                      <span>100% Free Owner Listing</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                      <Check size={14} className="text-[#145C3D]" />
                      <span>Direct WhatsApp & Call Connect</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-1"
                  >
                    <ChevronLeft size={16} />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 9 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2.5 rounded-2xl bg-[#145C3D] hover:bg-[#0C3423] text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
                  >
                    <span>Continue to Step {currentStep + 1}</span>
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleSubmitForApproval}
                    className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#145C3D] to-[#27865B] hover:opacity-95 text-white text-xs sm:text-sm font-bold shadow-lg transition-all active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting to Moderation...' : 'Submit Listing for Approval'}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
