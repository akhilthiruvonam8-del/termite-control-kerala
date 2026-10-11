import React, { useState } from 'react';
import {
  X,
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  Heart,
  Phone,
  MessageSquare,
  Share2,
  ShieldCheck,
  Check,
  Compass,
  Droplets,
  Car,
  Calendar,
  AlertTriangle,
  Send,
  Flag,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export default function PropertyDetailModal({
  property,
  onClose,
  isSaved = false,
  onToggleSave,
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [reportSuccess, setReportSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Form states
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerMessage, setBuyerMessage] = useState(
    'I am interested in this property and would like to schedule a site visit.'
  );

  if (!property) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this Kerala property on VeeduX: ${property.title} - ${property.price}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${property.seller.name}, I am interested in your property "${property.title}" (${property.price}, ${property.locality}) listed on VeeduX Kerala. Please share more details.`
    );
    window.open(`https://wa.me/${property.seller.whatsapp}?text=${text}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${property.seller.phone}`, '_self');
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquirySuccess(true);
    setTimeout(() => {
      setEnquirySuccess(false);
      setShowEnquiryForm(false);
    }, 2000);
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    setReportSuccess(true);
    setTimeout(() => {
      setReportSuccess(false);
      setShowReportModal(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#FAF8F2] w-full max-w-2xl min-h-screen sm:min-h-0 sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative my-auto border border-[#E2EBE5]">
        {/* Sticky Mobile Modal Header */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-4 py-3 border-b border-[#E2EBE5] flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
            >
              <X size={20} />
            </button>
            <span className="font-bold text-sm text-[#145C3D] truncate max-w-[200px]">
              {property.categoryName}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onToggleSave?.(property.id)}
              className={`p-2 rounded-full border transition-all ${
                isSaved
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-rose-500'
              }`}
              title="Save to favorites"
            >
              <Heart size={18} fill={isSaved ? 'currentColor' : 'none'} />
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#145C3D] transition-colors"
              title="Share property"
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {copiedLink && (
          <div className="bg-[#145C3D] text-white text-xs py-1.5 px-4 text-center font-medium animate-in slide-in-from-top">
            Link copied to clipboard! Share with family or buyers.
          </div>
        )}

        <div className="overflow-y-auto flex-grow pb-24">
          {/* Large Image Gallery & Carousel */}
          <div className="relative aspect-[16/10] bg-slate-900 group">
            <img
              src={property.images[activeImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {/* Carousel Navigation Arrows */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev === 0 ? property.images.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev === property.images.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Image Counter & Badge */}
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20">
              {activeImageIndex + 1} / {property.images.length} Photos
            </div>

            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="bg-[#145C3D] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <ShieldCheck size={13} className="text-[#D6AD55]" />
                {property.badge || 'Verified Listing'}
              </span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {property.images.length > 1 && (
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/5 overflow-x-auto no-scrollbar border-b border-[#E2EBE5]">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-14 h-11 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#145C3D] ring-2 ring-[#D6AD55]/40 scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Core Content Container */}
          <div className="p-4 sm:p-6 space-y-6">
            {/* Title & Price Header */}
            <div>
              <div className="flex items-baseline justify-between gap-3">
                <div className="text-2xl sm:text-3xl font-black text-[#145C3D] tracking-tight">
                  {property.price}
                </div>
                {property.purpose === 'rent' ? (
                  <span className="text-xs font-semibold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded-md">
                    Rental Lease
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                    Freehold Sale
                  </span>
                )}
              </div>

              <h1 className="text-lg sm:text-xl font-bold text-slate-900 mt-2 leading-snug">
                {property.title}
              </h1>

              <div className="flex items-center gap-1.5 text-slate-600 text-sm mt-2">
                <MapPin size={16} className="text-[#27865B] flex-shrink-0" />
                <span>{property.locality}</span>
              </div>
            </div>

            {/* Quick Metrics Grid (Kerala Focus) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="bg-white p-3 rounded-2xl border border-[#E2EBE5] shadow-xs">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Land Area
                </span>
                <p className="text-sm font-bold text-[#145C3D] mt-0.5">
                  {property.landArea || 'N/A'}
                </p>
              </div>

              <div className="bg-white p-3 rounded-2xl border border-[#E2EBE5] shadow-xs">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Built-up Area
                </span>
                <p className="text-sm font-bold text-[#145C3D] mt-0.5">
                  {property.builtUpArea || 'N/A'}
                </p>
              </div>

              <div className="bg-white p-3 rounded-2xl border border-[#E2EBE5] shadow-xs">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Bedrooms
                </span>
                <p className="text-sm font-bold text-[#145C3D] mt-0.5">
                  {property.bedrooms > 0 ? `${property.bedrooms} BHK` : 'Commercial'}
                </p>
              </div>

              <div className="bg-white p-3 rounded-2xl border border-[#E2EBE5] shadow-xs">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Bathrooms
                </span>
                <p className="text-sm font-bold text-[#145C3D] mt-0.5">
                  {property.bathrooms > 0 ? `${property.bathrooms} En-suite` : 'N/A'}
                </p>
              </div>
            </div>

            {/* Kerala Key Specifications Table */}
            <div className="bg-white rounded-2xl p-4 border border-[#E2EBE5] shadow-xs space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Property Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Compass size={15} className="text-[#27865B]" />
                  <span className="text-slate-500">Facing:</span>
                  <span className="font-semibold text-slate-900">{property.facing}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Droplets size={15} className="text-[#27865B]" />
                  <span className="text-slate-500">Water Source:</span>
                  <span className="font-semibold text-slate-900">{property.waterSource}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Car size={15} className="text-[#27865B]" />
                  <span className="text-slate-500">Parking:</span>
                  <span className="font-semibold text-slate-900">{property.carParking}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Calendar size={15} className="text-[#27865B]" />
                  <span className="text-slate-500">Furnishing:</span>
                  <span className="font-semibold text-slate-900">{property.furnishing}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">About this Property</h2>
              <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line bg-white p-4 rounded-2xl border border-[#E2EBE5]">
                {property.description}
              </p>
            </div>

            {/* Key Kerala Highlights */}
            {property.highlights && (
              <div className="space-y-2.5">
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles size={18} className="text-[#D6AD55]" />
                  Kerala Highlights & Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {property.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100/80 text-xs text-emerald-950"
                    >
                      <Check size={14} className="text-[#145C3D] flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Interactive Map Location Mock */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-900">Map & Surroundings</h2>
                <span className="text-xs text-[#145C3D] font-semibold">{property.district}</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-[#E2EBE5] bg-emerald-900/10 h-44 flex flex-col items-center justify-center text-center p-4">
                <div className="w-10 h-10 rounded-full bg-[#145C3D] text-white flex items-center justify-center shadow-lg animate-bounce">
                  <MapPin size={22} className="text-[#D6AD55]" />
                </div>
                <p className="font-bold text-sm text-slate-800 mt-2">{property.locality}</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Verified GPS location with nearby schools, temples, churches, and bus stop
                </p>
              </div>
            </div>

            {/* Seller Profile Card */}
            <div className="bg-white rounded-2xl p-4 border border-[#E2EBE5] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <img
                  src={property.seller.avatar}
                  alt={property.seller.name}
                  className="w-13 h-13 rounded-full object-cover border-2 border-[#D6AD55]"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-900 text-sm">
                      {property.seller.name}
                    </span>
                    <CheckCircle2 size={14} className="text-[#27865B]" />
                  </div>
                  <p className="text-xs text-[#145C3D] font-medium">{property.seller.type}</p>
                  <p className="text-[10px] text-slate-400">{property.seller.memberSince}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-all shadow-xs"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={handleCall}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#145C3D] text-white text-xs font-bold hover:bg-[#0C3423] transition-all shadow-xs"
                >
                  <Phone size={16} />
                  <span>Call Seller</span>
                </button>
              </div>
            </div>

            {/* Report Listing Button */}
            <div className="pt-2 flex justify-center">
              <button
                onClick={() => setShowReportModal(true)}
                className="text-xs text-slate-400 hover:text-rose-600 flex items-center gap-1 transition-colors"
              >
                <Flag size={13} />
                <span>Report this listing if inaccurate or suspicious</span>
              </button>
            </div>
          </div>
        </div>

        {/* Fixed Mobile Bottom Action Bar */}
        <div className="fixed sm:absolute bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md px-4 py-3 border-t border-[#E2EBE5] flex items-center gap-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
          <button
            onClick={handleCall}
            className="flex-1 py-3 px-3 rounded-xl bg-white border-2 border-[#145C3D] text-[#145C3D] font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#145C3D]/5 transition-all"
          >
            <Phone size={16} />
            <span>Call Now</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex-1 py-3 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#1ebd5b] transition-all shadow-xs"
          >
            <MessageSquare size={16} />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={() => setShowEnquiryForm(true)}
            className="flex-1.5 py-3 px-4 rounded-xl bg-gradient-to-r from-[#145C3D] to-[#27865B] text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:opacity-95 transition-all shadow-sm"
          >
            <Send size={15} />
            <span>Enquire / Visit</span>
          </button>
        </div>

        {/* Send Enquiry Modal */}
        {showEnquiryForm && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-5 border border-[#E2EBE5] shadow-2xl relative animate-in zoom-in-95">
              <button
                onClick={() => setShowEnquiryForm(false)}
                className="absolute top-3.5 right-3.5 p-1 text-slate-400 hover:text-slate-700"
              >
                <X size={18} />
              </button>

              <h2 className="text-base font-bold text-[#145C3D]">
                Enquire for {property.title}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                The seller ({property.seller.name}) will receive your request directly.
              </p>

              {enquirySuccess ? (
                <div className="py-8 text-center space-y-2">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="font-bold text-emerald-900">Enquiry Sent Successfully!</h3>
                  <p className="text-xs text-slate-500">The seller will call or WhatsApp you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="mt-4 space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="E.g. Rajesh Pillai"
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#145C3D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      required
                      value={buyerPhone}
                      onChange={(e) => setBuyerPhone(e.target.value)}
                      placeholder="+91 98470 XXXXX"
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#145C3D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Message / Visit Timing
                    </label>
                    <textarea
                      rows={3}
                      value={buyerMessage}
                      onChange={(e) => setBuyerMessage(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#145C3D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#145C3D] hover:bg-[#0C3423] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    <span>Send Direct Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Report Listing Modal */}
        {showReportModal && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-sm w-full p-5 border border-[#E2EBE5] shadow-2xl relative animate-in zoom-in-95">
              <button
                onClick={() => setShowReportModal(false)}
                className="absolute top-3.5 right-3.5 p-1 text-slate-400 hover:text-slate-700"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 text-rose-600">
                <AlertTriangle size={20} />
                <h2 className="text-sm font-bold">Report This Property</h2>
              </div>

              {reportSuccess ? (
                <div className="py-6 text-center space-y-2">
                  <CheckCircle2 size={28} className="text-emerald-600 mx-auto" />
                  <p className="text-xs font-semibold text-slate-800">
                    Thank you. VeeduX moderation team will inspect this listing.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleReportSubmit} className="mt-3 space-y-2.5">
                  <p className="text-xs text-slate-600">
                    Help us keep Kerala real estate 100% verified and secure.
                  </p>
                  <select className="w-full text-xs p-2 rounded-xl border border-slate-300 focus:outline-none">
                    <option>Property already sold / rented out</option>
                    <option>Incorrect price or hidden brokerage</option>
                    <option>Misleading photos or wrong location</option>
                    <option>Duplicate listing / spam</option>
                    <option>Suspicious or unresponsive seller</option>
                  </select>
                  <textarea
                    placeholder="Additional notes (optional)"
                    rows={2}
                    className="w-full text-xs p-2 rounded-xl border border-slate-300 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-xs"
                  >
                    Submit Report
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
