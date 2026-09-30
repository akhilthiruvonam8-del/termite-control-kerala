import React, { useState, useEffect } from 'react';

export default function KochiPreloader({ onFinish }) {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Quick, smooth spinning logo entrance (800ms display, then fades out smoothly)
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 850);

    const removeTimer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish();
    }, 1300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#020e09] transition-all duration-700 ease-out ${
        fading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-label="Loading Termite Control Kochi"
    >
      {/* Background ambient lighting */}
      <div className="absolute w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-amber-400/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Spinning Logo Container (Exact circle, crystal-clear & high-definition) */}
      <div className="relative flex items-center justify-center mb-8">
        
        {/* Outer Rotating Emerald & Gold Orbit Ring (Clockwise) */}
        <div 
          className="w-40 h-40 sm:w-48 sm:h-48 aspect-square rounded-full border-2 border-transparent border-t-amber-400 border-r-amber-300 border-b-emerald-400/50 animate-spin shrink-0" 
          style={{ animationDuration: '1.6s' }} 
        />

        {/* Inner Counter-Rotating Ring (Counter-Clockwise) */}
        <div 
          className="absolute w-32 h-32 sm:w-40 sm:h-40 aspect-square rounded-full border-2 border-dashed border-emerald-400/60 animate-[spin_2.5s_linear_infinite_reverse] shrink-0" 
        />

        {/* Radiant Center Glow Aura */}
        <div className="absolute w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-tr from-emerald-500/30 via-amber-400/30 to-transparent rounded-full blur-2xl animate-pulse shrink-0" />

        {/* Center Eco Pest India Logo Emblem (Perfect Circle, 100% Clear & Crisp) */}
        <div className="absolute inset-0 flex items-center justify-center p-3 animate-[logo-spin-intro_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <div className="w-24 h-24 sm:w-32 sm:h-32 aspect-square rounded-full border-2 border-amber-400 bg-white p-2.5 sm:p-3 flex items-center justify-center shadow-[0_0_35px_rgba(245,199,93,0.7)] ring-4 ring-emerald-500/40 shrink-0 overflow-hidden">
            <img
              src="/images/eco-pest-india-logo.png"
              alt="Eco Pest India Logo"
              className="w-full h-full object-contain filter drop-shadow-sm select-none"
            />
          </div>
        </div>
      </div>

      {/* Brand Text & Status */}
      <div className="text-center space-y-2 relative z-10 px-4">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-mono uppercase tracking-widest text-emerald-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>INITIALIZING DEFENSE SYSTEMS</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-cinzel font-black tracking-wider text-white">
          ECO PEST <span className="bg-gradient-to-r from-[#FFF5B8] via-[#F5C042] to-[#D49319] bg-clip-text text-transparent">INDIA</span>
        </h2>

        <p className="text-xs font-sans font-semibold tracking-wider text-emerald-300/90 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
          Safe Home, Healthy Life
        </p>

        {/* Animated Progress Bar */}
        <div className="w-48 sm:w-60 h-1 bg-slate-900 rounded-full mx-auto mt-4 overflow-hidden border border-emerald-900/60">
          <div className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-400 rounded-full animate-[preloader-bar_1.6s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
