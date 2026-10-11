import React from 'react';
import { MapPin, BedDouble, Bath, Maximize2, Heart, Phone, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';

export default function PropertyCard({
  property,
  onSelectProperty,
  isSaved = false,
  onToggleSave,
}) {
  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello, I saw your property listing "${property.title}" (ID: ${property.id}) on VeeduX Kerala marketplace. Is it still available?`
    );
    window.open(`https://wa.me/${property.seller.whatsapp}?text=${text}`, '_blank');
  };

  const handleCall = (e) => {
    e.stopPropagation();
    window.open(`tel:${property.seller.phone}`, '_self');
  };

  const handleSaveClick = (e) => {
    e.stopPropagation();
    onToggleSave?.(property.id);
  };

  return (
    <div
      onClick={() => onSelectProperty?.(property)}
      className="group bg-white rounded-2xl overflow-hidden border border-[#E2EBE5] shadow-[0_4px_16px_rgba(20,92,61,0.06)] hover:shadow-[0_8px_24px_rgba(20,92,61,0.12)] transition-all duration-300 cursor-pointer flex flex-col relative"
    >
      {/* Property Image & Overlay Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient Overlay for Top Badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 items-center">
          {property.verified && (
            <span className="inline-flex items-center gap-1 bg-[#145C3D]/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
              <CheckCircle size={11} className="text-[#D6AD55]" />
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
              For Rent
            </span>
          )}
        </div>

        {/* Save / Favorite Button */}
        <button
          onClick={handleSaveClick}
          aria-label={isSaved ? "Remove from saved properties" : "Save property"}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
            isSaved
              ? 'bg-rose-500 text-white shadow-md'
              : 'bg-white/80 text-slate-700 hover:bg-white hover:text-rose-500'
          }`}
        >
          <Heart size={16} fill={isSaved ? 'currentColor' : 'none'} />
        </button>

        {/* Bottom Image Info: Price & Land Area */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-baseline justify-between text-white">
          <div className="drop-shadow-md">
            <span className="text-lg font-black tracking-tight text-[#FAF8F2]">
              {property.price}
            </span>
          </div>
          {property.landArea && property.landArea !== 'N/A' && (
            <span className="text-[11px] font-semibold bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/20 text-[#FAF8F2]">
              {property.landArea}
            </span>
          )}
        </div>
      </div>

      {/* Property Details Body */}
      <div className="p-3.5 flex flex-col flex-grow justify-between gap-2.5">
        <div>
          {/* Title */}
          <h3 className="font-bold text-sm text-[#11291D] line-clamp-1 group-hover:text-[#145C3D] transition-colors">
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1 text-slate-500 text-xs mt-1">
            <MapPin size={13} className="text-[#27865B] flex-shrink-0" />
            <span className="truncate">{property.locality}</span>
          </div>
        </div>

        {/* Specs Pill Row */}
        <div className="flex items-center gap-3 py-1.5 px-2 bg-[#FAF8F2] rounded-xl border border-[#E2EBE5]/80 text-slate-700 text-[11px]">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1">
              <BedDouble size={13} className="text-[#145C3D]" />
              <span className="font-semibold">{property.bedrooms} BHK</span>
            </div>
          )}

          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1">
              <Bath size={13} className="text-[#145C3D]" />
              <span className="font-semibold">{property.bathrooms} Bath</span>
            </div>
          )}

          {property.builtUpArea && property.builtUpArea !== 'N/A' && (
            <div className="flex items-center gap-1">
              <Maximize2 size={13} className="text-[#145C3D]" />
              <span className="font-semibold">{property.builtUpArea}</span>
            </div>
          )}
        </div>

        {/* Seller Info & Quick Direct Contact Buttons */}
        <div className="flex items-center justify-between pt-2 border-t border-[#E2EBE5] gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <img
              src={property.seller.avatar}
              alt={property.seller.name}
              className="w-6 h-6 rounded-full object-cover border border-[#27865B]/30 flex-shrink-0"
            />
            <div className="truncate">
              <p className="text-[11px] font-semibold text-slate-800 truncate leading-tight">
                {property.seller.name}
              </p>
              <p className="text-[9px] text-[#27865B] font-medium truncate">
                {property.seller.type}
              </p>
            </div>
          </div>

          {/* Action Buttons: WhatsApp & Call */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              onClick={handleWhatsApp}
              className="p-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366] text-[#128C7E] hover:text-white transition-all"
              title="Chat on WhatsApp"
            >
              <MessageSquare size={14} />
            </button>
            <button
              onClick={handleCall}
              className="p-1.5 rounded-lg bg-[#145C3D]/10 hover:bg-[#145C3D] text-[#145C3D] hover:text-white transition-all"
              title="Call Seller"
            >
              <Phone size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
