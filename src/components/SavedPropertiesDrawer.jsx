import React from 'react';
import { X, Heart, MapPin, Trash2, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { PROPERTIES } from '../data/veeduxData';

export default function SavedPropertiesDrawer({
  isOpen,
  onClose,
  savedIds,
  onToggleSave,
  onSelectProperty,
}) {
  if (!isOpen) return null;

  const savedList = PROPERTIES.filter((p) => savedIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-[#FAF8F2] w-full max-w-md min-h-screen sm:min-h-0 sm:rounded-3xl shadow-2xl overflow-hidden border border-[#E2EBE5] relative flex flex-col my-auto">
        {/* Header */}
        <div className="bg-white px-5 py-4 border-b border-[#E2EBE5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart size={20} className="text-rose-500 fill-rose-500" />
            <h2 className="font-bold text-base text-slate-900">
              Saved Properties ({savedList.length})
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex-grow overflow-y-auto max-h-[75vh] space-y-3">
          {savedList.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-300 flex items-center justify-center mx-auto">
                <Heart size={32} />
              </div>
              <p className="font-bold text-sm text-slate-700">No saved properties yet</p>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Tap the heart icon on any Kerala property card to save it for easy comparison and sharing!
              </p>
            </div>
          ) : (
            savedList.map((property) => (
              <div
                key={property.id}
                onClick={() => {
                  onSelectProperty?.(property);
                  onClose();
                }}
                className="bg-white p-3 rounded-2xl border border-[#E2EBE5] shadow-xs flex items-center gap-3 cursor-pointer hover:shadow-md transition-shadow"
              >
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                />

                <div className="flex-grow min-w-0">
                  <span className="font-black text-sm text-[#145C3D]">
                    {property.price}
                  </span>
                  <h4 className="font-bold text-xs text-slate-800 truncate mt-0.5">
                    {property.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                    <MapPin size={11} className="text-[#27865B] flex-shrink-0" />
                    <span className="truncate">{property.locality}</span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSave?.(property.id);
                  }}
                  className="p-2 text-slate-400 hover:text-rose-500 rounded-full hover:bg-rose-50 transition-colors flex-shrink-0"
                  title="Remove from saved"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
