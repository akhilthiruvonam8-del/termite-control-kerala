import React, { useState } from 'react';
import { Image as ImageIcon, Check, SlidersHorizontal } from 'lucide-react';

export const BACKGROUND_PRESETS = [
  {
    id: 'atrium',
    name: 'Luxury Glass Atrium',
    subtitle: 'Pinterest Architectural Executive',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85',
    overlayOpacity: 'bg-[#041126]/85',
    tag: 'Recommended'
  },
  {
    id: 'skyline',
    name: 'Kochi Twilight Skyline',
    subtitle: 'Waterfront City Lights & Blue Hour',
    url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=85',
    overlayOpacity: 'bg-[#041126]/88',
    tag: 'Metropolitan'
  },
  {
    id: 'boardroom',
    name: 'Executive Members Lounge',
    subtitle: 'Private Club & Panoramic Glass',
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2400&q=85',
    overlayOpacity: 'bg-[#041126]/85',
    tag: 'Elite Club'
  },
  {
    id: 'skyscraper',
    name: 'Modern Tower Facade',
    subtitle: 'Vertical Growth & Geometric Glass',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85',
    overlayOpacity: 'bg-[#041126]/88',
    tag: 'Corporate'
  }
];

export default function BackgroundSwitcher({ activeBg, onChangeBg }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Toggle Button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#071B3A]/90 hover:bg-[#071B3A] border border-[#C9A227]/40 text-slate-200 hover:text-[#E5C45A] shadow-gold-sm hover:shadow-gold-md backdrop-blur-lg transition-all duration-300 text-xs font-semibold group"
          title="Switch Pinterest-style Hero Background"
        >
          <SlidersHorizontal className="w-4 h-4 text-[#C9A227] group-hover:rotate-45 transition-transform" />
          <span>Hero Theme ({activeBg.name.split(' ')[0]})</span>
        </button>

        {/* Backdrop Selector Popover */}
        {isOpen && (
          <div className="absolute bottom-12 right-0 w-80 bg-[#041126]/95 border border-[#C9A227]/30 rounded-2xl shadow-navy-deep p-4 backdrop-blur-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#C9A227]/20">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#E5C45A]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Select Hero Background
                </span>
              </div>
              <span className="text-[10px] text-[#E5C45A] bg-[#071B3A] border border-[#C9A227]/30 px-2 py-0.5 rounded-full">
                Pinterest Vibe
              </span>
            </div>

            <div className="space-y-2">
              {BACKGROUND_PRESETS.map((preset) => {
                const isSelected = activeBg.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => {
                      onChangeBg(preset);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition-all duration-200 flex items-center justify-between group relative overflow-hidden ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#071B3A] to-[#0D2D5E] border border-[#E5C45A]/60 shadow-gold-sm'
                        : 'bg-[#071B3A]/40 hover:bg-[#071B3A]/80 border border-slate-700/50'
                    }`}
                  >
                    {/* Tiny Thumbnail preview */}
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg bg-cover bg-center border border-[#C9A227]/30 flex-shrink-0"
                        style={{ backgroundImage: `url(${preset.url})` }}
                      ></div>
                      <div>
                        <div className="text-xs font-semibold text-slate-100 flex items-center gap-2">
                          {preset.name}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate max-w-[160px]">
                          {preset.subtitle}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-[#E5C45A] text-[#041126] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <p className="mt-3 text-[10px] text-slate-400 text-center leading-relaxed">
              💡 Tip: Click each background to demonstrate to the client which luxury tone best matches their vision.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
