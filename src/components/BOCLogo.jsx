import React from 'react';
import bocLogoImg from '../assets/boc-logo.jpg';

/**
 * Business Owner's Circle (BOC) Official Logo Emblem
 * Responsive across mobile, laptop and large screens with Dark and Light mode support.
 */
export default function BOCLogo({ size = 'md', className = '', showWordmark = true, isLight = false }) {
  const sizeMap = {
    sm: { px: 40, mdPx: 46, textClass: 'text-sm sm:text-base', subClass: 'text-[8px] sm:text-[9px]' },
    md: { px: 48, mdPx: 58, textClass: 'text-base sm:text-lg', subClass: 'text-[9px] sm:text-[11px]' },
    lg: { px: 72, mdPx: 84, textClass: 'text-xl sm:text-2xl', subClass: 'text-[10px] sm:text-xs' },
    xl: { px: 110, mdPx: 130, textClass: 'text-2xl sm:text-3xl', subClass: 'text-xs sm:text-sm' },
    hero: { px: 130, mdPx: 170, textClass: 'text-3xl sm:text-4xl', subClass: 'text-sm sm:text-base' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official 3D Circular Emblem with Ambient Gold Halo */}
      <div 
        className="relative flex-shrink-0 group cursor-pointer"
        style={{ width: currentSize.px, height: currentSize.px }}
      >
        {/* Ambient Gold Glow Halo behind emblem */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#C9A227] to-[#E5C45A] blur-[10px] opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

        {/* Circular Emblem Frame */}
        <div className={`relative w-full h-full rounded-full overflow-hidden border-2 border-[#E5C45A]/80 bg-[#041126] transition-transform duration-300 group-hover:scale-105 ${
          isLight 
            ? 'shadow-[0_4px_16px_rgba(7,27,58,0.25),0_0_10px_rgba(201,162,39,0.4)]' 
            : 'shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_12px_rgba(201,162,39,0.5)]'
        }`}>
          <img 
            src={bocLogoImg} 
            alt="Business Owner's Circle Logo" 
            className="w-full h-full object-cover scale-[1.03]"
          />
        </div>
      </div>

      {/* Official Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className={`font-serif-luxury font-extrabold tracking-tight ${
              isLight ? 'text-[#071B3A]' : 'text-white'
            } ${currentSize.textClass} leading-tight`}>
              BUSINESS OWNER’S <span className="text-gold-gradient">CIRCLE</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={`text-[8.5px] sm:text-[9.5px] tracking-[0.2em] font-bold uppercase ${
              isLight ? 'text-[#B08C1E]' : 'text-[#E5C45A]'
            }`}>
              EMPOWER TOGETHER
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
