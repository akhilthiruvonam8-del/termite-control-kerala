import React, { useState } from 'react';
import {
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
  ArrowLeft,
  Play,
  Video,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { createWhatsAppPropertyLink } from '../utils/analytics';
import PropertyCard from '../components/PropertyCard';

export default function PropertyDetailPage() {
  const {
    activeProperty,
    properties,
    navigateTo,
    savedIds,
    toggleSave,
    reportListing,
    addEnquiry,
  } = useApp();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [reportSuccess, setReportSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Enquiry form state
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerMessage, setBuyerMessage] = useState(
    'Hello, I would like to schedule a site visit and discuss price.'
  );

  // Report form state
  const [reportReason, setReportReason] = useState('Property already sold or unavailable');
  const [reportNotes, setReportNotes] = useState('');

  if (!activeProperty) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-xl font-bold text-slate-800">Property Not Found</h2>
        <button
          onClick={() => navigateTo('home')}
          className="mt-4 px-6 py-2.5 bg-[#145C3D] text-white rounded-xl text-xs font-bold"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const isSaved = savedIds.includes(activeProperty.id);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: activeProperty.title,
        text: `Check out ${activeProperty.title} for ${activeProperty.price} on VeeduX Kerala!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleWhatsApp = () => {
    const link = createWhatsAppPropertyLink(activeProperty.seller?.whatsapp, activeProperty);
    window.open(link, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${activeProperty.seller?.phone}`, '_self');
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    addEnquiry({
      propertyId: activeProperty.id,
      propertyTitle: activeProperty.title,
      buyerName,
      buyerPhone,
      message: buyerMessage,
    });
    setEnquirySuccess(true);
    setTimeout(() => {
      setEnquirySuccess(false);
      setShowEnquiryModal(false);
    }, 2000);
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    reportListing(activeProperty.id, `${reportReason} - ${reportNotes}`, buyerPhone || 'User');
    setReportSuccess(true);
    setTimeout(() => {
      setReportSuccess(false);
      setShowReportModal(false);
    }, 2000);
  };

  // Similar Properties
  const similarProperties = properties
    .filter(
      (p) =>
        p.id !== activeProperty.id &&
        (p.district === activeProperty.district || p.propertyType === activeProperty.propertyType)
    )
    .slice(0, 3);

  return (
    <div className="w-full bg-[#FAF8F2] pb-24 sm:pb-16 text-[#11291D]">
      {/* Top Breadcrumb & Return Bar */}
      <div className="bg-white border-b border-[#E2EBE5] px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-1.5 text-xs font-bold text-[#145C3D] hover:underline"
          >
            <ArrowLeft size={16} />
            <span>Back to Listings</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleSave(activeProperty.id)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full border text-xs font-bold transition-all ${
                isSaved
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-rose-500'
              }`}
            >
              <Heart size={15} fill={isSaved ? 'currentColor' : 'none'} />
              <span>{isSaved ? 'Saved' : 'Save Property'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-[#145C3D] transition-colors"
              title="Share Link"
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>
      </div>

      {copiedLink && (
        <div className="bg-[#145C3D] text-white text-xs py-2 px-4 text-center font-bold animate-in slide-in-from-top">
          Link copied to clipboard! Share with family or buyers.
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        {/* Gallery & Video Tour Showcase */}
        <section className="bg-white rounded-3xl overflow-hidden border border-[#E2EBE5] shadow-sm">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-slate-900 group">
            <img
              src={activeProperty.images?.[activeImageIndex] || '/images/kochi-nri-villa.jpg'}
              alt={activeProperty.title}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {/* Carousel Navigation Arrows */}
            {activeProperty.images && activeProperty.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev === 0 ? activeProperty.images.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      (prev + 1) % activeProperty.images.length
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {activeProperty.verified && (
                <span className="bg-[#145C3D] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#D6AD55]" />
                  <span>VeeduX Verified</span>
                </span>
              )}
              {activeProperty.directOwner && (
                <span className="bg-[#D6AD55] text-[#0C3423] text-xs font-black px-3 py-1 rounded-full shadow-md">
                  Direct Owner Listing
                </span>
              )}
            </div>

            {/* Bottom Actions on Gallery: Video Walkthrough Trigger & Photo Counter */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <button
                onClick={() => setShowVideoModal(true)}
                className="flex items-center gap-2 bg-black/60 hover:bg-black/80 text-white text-xs font-bold px-3.5 py-2 rounded-full backdrop-blur-md border border-white/25 transition-all shadow-md"
              >
                <Play size={14} className="text-[#D6AD55] fill-[#D6AD55]" />
                <span>Watch Virtual Video Tour</span>
              </button>

              <div className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                {activeImageIndex + 1} / {activeProperty.images?.length || 1} Photos
              </div>
            </div>
          </div>

          {/* Thumbnails Row */}
          {activeProperty.images && activeProperty.images.length > 1 && (
            <div className="flex items-center gap-2.5 p-3 sm:p-4 bg-[#FAF8F2] overflow-x-auto no-scrollbar border-t border-[#E2EBE5]">
              {activeProperty.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#145C3D] ring-2 ring-[#D6AD55]/50 scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Core Property Content & Sticky Contact Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Details, Specs, Amenities, Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Price Header */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2EBE5] space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-2">
                <span className="text-3xl sm:text-4xl font-black text-[#145C3D] tracking-tight">
                  {activeProperty.price}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {activeProperty.purpose === 'sell' ? 'Freehold Sale' : 'Rental Lease'}
                </span>
              </div>

              <div>
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  {activeProperty.title}
                </h1>
                {activeProperty.malayalamTitle && (
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {activeProperty.malayalamTitle}
                  </p>
                )}
                <div className="flex items-center gap-1.5 text-slate-600 text-sm mt-2">
                  <MapPin size={16} className="text-[#27865B] flex-shrink-0" />
                  <span>{activeProperty.location || activeProperty.locality}</span>
                </div>
              </div>

              {/* Kerala Key Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100">
                <div className="bg-[#FAF8F2] p-3.5 rounded-2xl border border-[#E2EBE5]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Land Area
                  </span>
                  <p className="text-sm font-bold text-[#145C3D] mt-0.5">
                    {activeProperty.landArea || 'N/A'}
                  </p>
                </div>

                <div className="bg-[#FAF8F2] p-3.5 rounded-2xl border border-[#E2EBE5]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Built-up Area
                  </span>
                  <p className="text-sm font-bold text-[#145C3D] mt-0.5">
                    {activeProperty.builtUpArea || 'N/A'}
                  </p>
                </div>

                <div className="bg-[#FAF8F2] p-3.5 rounded-2xl border border-[#E2EBE5]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Bedrooms
                  </span>
                  <p className="text-sm font-bold text-[#145C3D] mt-0.5">
                    {activeProperty.bedrooms > 0 ? `${activeProperty.bedrooms} BHK` : 'Commercial'}
                  </p>
                </div>

                <div className="bg-[#FAF8F2] p-3.5 rounded-2xl border border-[#E2EBE5]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Bathrooms
                  </span>
                  <p className="text-sm font-bold text-[#145C3D] mt-0.5">
                    {activeProperty.bathrooms > 0 ? `${activeProperty.bathrooms} Bath` : 'N/A'}
                  </p>
                </div>
              </div>
            </div>

            {/* Kerala Specifications */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2EBE5] space-y-4 shadow-xs">
              <h2 className="text-base font-bold text-slate-900">
                Property Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-center gap-2 text-slate-700 bg-[#FAF8F2] p-3 rounded-xl border border-[#E2EBE5]">
                  <Compass size={16} className="text-[#27865B]" />
                  <span className="text-slate-500">Facing:</span>
                  <span className="font-bold text-slate-900">{activeProperty.facing}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 bg-[#FAF8F2] p-3 rounded-xl border border-[#E2EBE5]">
                  <Droplets size={16} className="text-[#27865B]" />
                  <span className="text-slate-500">Water Source:</span>
                  <span className="font-bold text-slate-900">{activeProperty.waterSource}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 bg-[#FAF8F2] p-3 rounded-xl border border-[#E2EBE5]">
                  <Car size={16} className="text-[#27865B]" />
                  <span className="text-slate-500">Parking:</span>
                  <span className="font-bold text-slate-900">{activeProperty.parking}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 bg-[#FAF8F2] p-3 rounded-xl border border-[#E2EBE5]">
                  <Calendar size={16} className="text-[#27865B]" />
                  <span className="text-slate-500">Furnishing:</span>
                  <span className="font-bold text-slate-900">{activeProperty.furnishing}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2EBE5] space-y-3 shadow-xs">
              <h2 className="text-base font-bold text-slate-900">About this Property</h2>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                {activeProperty.description}
              </p>
            </div>

            {/* Amenities Grid */}
            {activeProperty.amenities && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2EBE5] space-y-4 shadow-xs">
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles size={18} className="text-[#D6AD55]" />
                  <span>Amenities & Features</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProperty.amenities.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100/80 text-xs text-emerald-950 font-medium"
                    >
                      <Check size={15} className="text-[#145C3D] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Map Location */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2EBE5] space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-900">Map & Surroundings</h2>
                <span className="text-xs text-[#145C3D] font-bold">{activeProperty.district}</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-[#E2EBE5] bg-emerald-900/10 h-52 flex flex-col items-center justify-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-[#145C3D] text-white flex items-center justify-center shadow-lg animate-bounce">
                  <MapPin size={24} className="text-[#D6AD55]" />
                </div>
                <p className="font-bold text-sm text-slate-800 mt-2">
                  {activeProperty.location || activeProperty.locality}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Verified geographic coordinates with access to schools, hospital, and bus stop
                </p>
              </div>
            </div>

            {/* Report Listing Trigger */}
            <div className="flex justify-center pt-2">
              <button
                onClick={() => setShowReportModal(true)}
                className="text-xs text-slate-400 hover:text-rose-600 flex items-center gap-1.5 transition-colors"
              >
                <Flag size={14} />
                <span>Report this listing if inaccurate or sold</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sticky Seller Profile Card & Action Box */}
          <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl p-6 border border-[#E2EBE5] shadow-lg space-y-6">
              {/* Seller Profile Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-[#E2EBE5]">
                <img
                  src={activeProperty.seller?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'}
                  alt={activeProperty.seller?.name || 'Seller'}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#D6AD55]"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-slate-900 text-sm">
                      {activeProperty.seller?.name || 'Direct Owner'}
                    </span>
                    <CheckCircle2 size={15} className="text-[#27865B]" />
                  </div>
                  <p className="text-xs text-[#145C3D] font-semibold">
                    {activeProperty.seller?.type || 'Direct Owner'}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {activeProperty.seller?.memberSince || 'VeeduX Member'}
                  </p>
                </div>
              </div>

              {/* Action Buttons: WhatsApp, Call, Send Enquiry */}
              <div className="space-y-2.5">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <MessageSquare size={18} />
                  <span>Chat on WhatsApp</span>
                </button>

                <button
                  onClick={handleCall}
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#145C3D] hover:bg-[#0C3423] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <Phone size={18} />
                  <span>Call Seller Now</span>
                </button>

                <button
                  onClick={() => setShowEnquiryModal(true)}
                  className="w-full py-3.5 px-4 rounded-2xl bg-white border-2 border-[#145C3D] text-[#145C3D] hover:bg-emerald-50 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Send size={16} />
                  <span>Send Enquiry / Visit</span>
                </button>
              </div>

              {/* Trust Box */}
              <div className="bg-[#FAF8F2] p-4 rounded-2xl border border-[#E2EBE5] space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-emerald-800 font-bold">
                  <ShieldCheck size={16} className="text-[#145C3D]" />
                  <span>Zero Brokerage Guarantee</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  Connect with genuine property owners directly without third-party commission markups.
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Similar Properties Section */}
        {similarProperties.length > 0 && (
          <section className="pt-8 border-t border-[#E2EBE5] space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Similar Properties in Kerala
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                More verified listings in {activeProperty.district}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {similarProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Video Tour Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-black rounded-3xl max-w-2xl w-full p-4 border border-white/20 relative shadow-2xl space-y-3">
            <div className="flex items-center justify-between text-white pb-2 border-b border-white/10">
              <span className="font-bold text-sm">Virtual Video Tour</span>
              <button
                onClick={() => setShowVideoModal(false)}
                className="text-white/70 hover:text-white"
              >
                Close (✕)
              </button>
            </div>
            <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden flex flex-col items-center justify-center relative text-white">
              <img
                src={activeProperty.images?.[0]}
                alt="Walkthrough"
                className="w-full h-full object-cover filter brightness-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-[#145C3D] flex items-center justify-center shadow-xl animate-pulse">
                  <Play size={24} className="text-[#D6AD55] fill-[#D6AD55] ml-1" />
                </div>
                <p className="font-bold text-sm">HD Drone & Walkthrough Video</p>
                <p className="text-xs text-white/70">
                  Recorded in 4K: {activeProperty.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Send Enquiry Modal */}
      {showEnquiryModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-[#E2EBE5] shadow-2xl relative">
            <button
              onClick={() => setShowEnquiryModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>

            <h3 className="text-base font-bold text-[#145C3D]">
              Send Enquiry for {activeProperty.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Direct notification will be sent to {activeProperty.seller?.name}.
            </p>

            {enquirySuccess ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 size={36} className="text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 text-sm">Enquiry Dispatched!</h4>
                <p className="text-xs text-slate-500">The seller will contact you shortly.</p>
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
                    placeholder="E.g. Jayaram Nambiar"
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#145C3D]"
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
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#145C3D]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Message / Preferred Site Visit Timing
                  </label>
                  <textarea
                    rows={3}
                    value={buyerMessage}
                    onChange={(e) => setBuyerMessage(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#145C3D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#145C3D] hover:bg-[#0C3423] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  <span>Submit Direct Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Report Listing Modal */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-5 border border-[#E2EBE5] shadow-2xl relative">
            <button
              onClick={() => setShowReportModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 text-rose-600 mb-2">
              <AlertTriangle size={18} />
              <h3 className="font-bold text-sm">Report This Listing</h3>
            </div>

            {reportSuccess ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 size={32} className="text-emerald-600 mx-auto" />
                <p className="text-xs font-semibold text-slate-800">
                  Thank you. VeeduX moderators have flagged this listing for review.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReportSubmit} className="space-y-3">
                <p className="text-xs text-slate-500">
                  Help keep VeeduX 100% verified and free of fake listings.
                </p>
                <select
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none"
                >
                  <option>Property already sold or unavailable</option>
                  <option>Price is incorrect or hidden brokerage</option>
                  <option>Wrong location or fake photographs</option>
                  <option>Unresponsive or fraud seller</option>
                </select>
                <textarea
                  rows={2}
                  placeholder="Additional remarks (optional)"
                  value={reportNotes}
                  onChange={(e) => setReportNotes(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl"
                >
                  Submit Report
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
