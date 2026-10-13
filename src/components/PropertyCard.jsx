import React, { useState } from 'react';
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  Heart,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  Camera,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { createWhatsAppPropertyLink } from '../utils/analytics';

export default function PropertyCard({ property }) {
  const { navigateTo, savedIds, toggleSave } = useApp();
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  if (!property) return null;

  const isSaved = savedIds.includes(property.id);

  const handleCardClick = () => {
    navigateTo('details', property.id);
  };

  const handleNextImg = (e) => {
    e.stopPropagation();
    if (property.images && property.images.length > 1) {
      setCurrentImgIdx((prev) => (prev + 1) % property.images.length);
    }
  };

  const handlePrevImg = (e) => {
    e.stopPropagation();
    if (property.images && property.images.length > 1) {
      setCurrentImgIdx((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
    }
  };

  const handleSave = (e) => {
    e.stopPropagation();
    toggleSave(property.id);
  };

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const link = createWhatsAppPropertyLink(property.seller?.whatsapp, property);
    window.open(link, '_blank');
  };

  const handleCall = (e) => {
    e.stopPropagation();
    window.open(`tel:${property.seller?.phone}`, '_self');
  };

  return (
    <article
      onClick={handleCardClick}
      className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E2EBE5] shadow-[0_4px_16px_rgba(20,92,61,0.06)] hover:shadow-[0_12px_28px_rgba(20,92,61,0.12)] transition-all duration-300 cursor-pointer flex flex-col relative"
    >
      {/* Property Image & Overlay Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 select-none">
        <img
          src={property.images?.[currentImgIdx] || '/images/kochi-nri-villa.jpg'}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient shadow for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 items-center z-10">
          {property.verified && (
            <span className="inline-flex items-center gap-1 bg-[#145C3D]/95 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
              <ShieldCheck size={11} className="text-[#D6AD55]" />
              Verified
            </span>
          )}

          {property.directOwner && (
            <span className="inline-flex items-center gap-1 bg-[#D6AD55] text-[#0C3423] text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
              Direct Owner
            </span>
          )}

          {property.purpose === 'rent' && (
            <span className="inline-flex items-center bg-blue-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
              Rent / Lease
            </span>
          )}
        </div>

        {/* Save / Favorite Button */}
        <button
          onClick={handleSave}
          aria-label={isSaved ? "Remove from saved properties" : "Save property"}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all z-10 ${
            isSaved
              ? 'bg-rose-500 text-white shadow-md scale-110'
              : 'bg-white/80 text-slate-700 hover:bg-white hover:text-rose-500'
          }`}
        >
          <Heart size={16} fill={isSaved ? 'currentColor' : 'none'} />
        </button>

        {/* Image Carousel Controls on hover */}
        {property.images && property.images.length > 1 && (
          <>
            <button
              onClick={handlePrevImg}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNextImg}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Bottom Image Info: Price & Photo Count */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-baseline justify-between text-white z-10">
          <div className="drop-shadow-md">
            <span className="text-lg sm:text-xl font-black tracking-tight text-[#FAF8F2]">
              {property.price}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[10px] bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-md text-white/90">
            <Camera size={11} />
            <span>
              {currentImgIdx + 1}/{property.images?.length || 1}
            </span>
          </div>
        </div>
      </div>

      {/* Property Details Body */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-grow justify-between gap-3">
        <div>
          {/* Category & Location */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium mb-1">
            <span className="uppercase tracking-wider font-bold text-[#145C3D]">
              {property.categoryName || property.propertyType}
            </span>
            <span>{property.postedAgo || 'Recent'}</span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-sm sm:text-base text-[#11291D] line-clamp-1 group-hover:text-[#145C3D] transition-colors">
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1 text-slate-500 text-xs mt-1">
            <MapPin size={13} className="text-[#27865B] flex-shrink-0" />
            <span className="truncate">{property.location || property.locality}</span>
          </div>
        </div>

        {/* Specs Pill Row (Kerala Metrics) */}
        <div className="flex items-center justify-between gap-2 py-2 px-2.5 bg-[#FAF8F2] rounded-xl border border-[#E2EBE5]/80 text-slate-700 text-xs">
          {property.bedrooms > 0 ? (
            <div className="flex items-center gap-1">
              <BedDouble size={14} className="text-[#145C3D]" />
              <span className="font-semibold">{property.bedrooms} BHK</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-slate-500 font-medium">
              <span>{property.landArea || 'Commercial'}</span>
            </div>
          )}

          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1">
              <Bath size={14} className="text-[#145C3D]" />
              <span className="font-semibold">{property.bathrooms} Bath</span>
            </div>
          )}

          {property.builtUpArea && property.builtUpArea !== 'N/A' && (
            <div className="flex items-center gap-1">
              <Maximize2 size={14} className="text-[#145C3D]" />
              <span className="font-semibold">{property.builtUpArea}</span>
            </div>
          )}
        </div>

        {/* Seller Info & Quick Direct Contact Buttons */}
        <div className="flex items-center justify-between pt-2 border-t border-[#E2EBE5] gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src={property.seller?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'}
              alt={property.seller?.name || 'Seller'}
              className="w-7 h-7 rounded-full object-cover border border-[#27865B]/30 flex-shrink-0"
            />
            <div className="truncate">
              <p className="text-xs font-bold text-slate-800 truncate leading-tight">
                {property.seller?.name || 'Direct Owner'}
              </p>
              <p className="text-[10px] text-[#27865B] font-medium truncate">
                {property.seller?.type || 'Direct Owner'}
              </p>
            </div>
          </div>

          {/* Action Buttons: WhatsApp & Call */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              onClick={handleWhatsApp}
              className="p-2 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#128C7E] hover:text-white transition-all shadow-xs"
              title="Chat with Owner on WhatsApp"
            >
              <MessageSquare size={15} />
            </button>
            <button
              onClick={handleCall}
              className="p-2 rounded-xl bg-[#145C3D]/10 hover:bg-[#145C3D] text-[#145C3D] hover:text-white transition-all shadow-xs"
              title="Call Owner Directly"
            >
              <Phone size={15} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
