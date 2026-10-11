import React from 'react';

/**
 * VeeduX Official Logo Component
 * Matches the Kerala-inspired brand identity:
 * - Green house contour with tropical coconut palm
 * - 4-pane warm gold window
 * - Golden foundation backwater wave
 * - Bold forest green "Veedu" + warm gold "X"
 * - Tagline: "Every Property. One Place."
 */
export default function VeeduXLogo({
  variant = 'default', // 'default' | 'compact' | 'light' | 'icon-only'
  showTagline = true,
  className = '',
  size = 'md', // 'sm' | 'md' | 'lg'
}) {
  const isLight = variant === 'light';

  // Size scalings
  const dimensions = {
    sm: { symbol: 'w-7 h-7', text: 'text-lg', subtext: 'text-[9px]' },
    md: { symbol: 'w-10 h-10', text: 'text-2xl', subtext: 'text-[11px]' },
    lg: { symbol: 'w-14 h-14', text: 'text-3xl', subtext: 'text-xs' },
  }[size] || { symbol: 'w-10 h-10', text: 'text-2xl', subtext: 'text-[11px]' };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* VeeduX Kerala Symbol */}
      <div className={`relative ${dimensions.symbol} flex-shrink-0 transition-transform duration-300 hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Defs for gradients */}
          <defs>
            <linearGradient id="forestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B734D" />
              <stop offset="50%" stopColor="#145C3D" />
              <stop offset="100%" stopColor="#0B3E26" />
            </linearGradient>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D88C" />
              <stop offset="50%" stopColor="#D6AD55" />
              <stop offset="100%" stopColor="#B3862A" />
            </linearGradient>
            <linearGradient id="palmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2BB075" />
              <stop offset="100%" stopColor="#145C3D" />
            </linearGradient>
          </defs>

          {/* Left House Roof Ribbon / "V" arm */}
          <path
            d="M 12 32 L 28 66 L 36 63 L 24 38 L 50 18 L 62 26 L 68 20 L 50 8 Z"
            fill="url(#forestGrad)"
          />

          {/* Right Slope to foundation */}
          <path
            d="M 50 18 L 78 44 L 72 50 L 50 28 L 36 39 L 33 34 Z"
            fill="url(#forestGrad)"
          />

          {/* 4-Pane Warm Gold Window in Attic */}
          <g transform="translate(43, 27)">
            <rect x="0" y="0" width="5.5" height="5.5" rx="0.8" fill="url(#goldGrad)" />
            <rect x="7" y="0" width="5.5" height="5.5" rx="0.8" fill="url(#goldGrad)" />
            <rect x="0" y="7" width="5.5" height="5.5" rx="0.8" fill="url(#goldGrad)" />
            <rect x="7" y="7" width="5.5" height="5.5" rx="0.8" fill="url(#goldGrad)" />
          </g>

          {/* Kerala Coconut Palm Tree on Right Peak */}
          <g transform="translate(62, 5)">
            {/* Trunk */}
            <path
              d="M 8 26 C 9 18 12 11 15 5 C 13.8 11 11.5 18 11 26 Z"
              fill="url(#forestGrad)"
            />
            {/* Palm Fronds */}
            <path
              d="M 15 5 C 19 0 25 3 28 8 C 24 6 18 7 15 5 Z"
              fill="url(#palmGrad)"
            />
            <path
              d="M 15 5 C 21 8 25 15 26 21 C 23 16 19 12 15 5 Z"
              fill="url(#palmGrad)"
            />
            <path
              d="M 15 5 C 14 0 9 0 5 4 C 8 5 12 5 15 5 Z"
              fill="url(#palmGrad)"
            />
            <path
              d="M 15 5 C 9 7 4 13 3 19 C 7 15 11 11 15 5 Z"
              fill="url(#palmGrad)"
            />
            <path
              d="M 15 5 C 16 -1 18 -1 20 2 C 18 3 16 4 15 5 Z"
              fill="url(#palmGrad)"
            />
          </g>

          {/* Golden Kerala Wave / Foundation Contour */}
          <path
            d="M 22 75 C 38 78 48 64 64 61 C 76 59 86 64 92 70 C 84 66 74 65 64 66 C 48 69 36 82 22 75 Z"
            fill="url(#goldGrad)"
          />
          <path
            d="M 28 82 C 44 85 54 73 70 70 C 82 68 88 72 90 74 C 84 71 74 72 68 74 C 52 79 40 88 28 82 Z"
            fill="url(#goldGrad)"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col justify-center">
          <div className={`font-extrabold tracking-tight leading-none ${dimensions.text} font-sans flex items-baseline`}>
            <span className={isLight ? 'text-white' : 'text-[#0E432A]'}>
              Veedu
            </span>
            <span className="text-[#D6AD55] font-black italic tracking-tighter ml-0.5">
              X
            </span>
          </div>

          {showTagline && (
            <span
              className={`font-medium tracking-wide uppercase mt-0.5 ${dimensions.subtext} ${
                isLight ? 'text-emerald-100/80' : 'text-[#145C3D]/80'
              }`}
            >
              Every Property. One Place.
            </span>
          )}
        </div>
      )}
    </div>
  );
}
