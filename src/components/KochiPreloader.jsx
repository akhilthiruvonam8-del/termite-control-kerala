import React, { useState, useEffect } from 'react';

export default function KochiPreloader({ onFinish }) {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Show spinning logo preloader on initial page open
    const timer = setTimeout(() => {
      setFading(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
        if (onFinish) onFinish();
      }, 700);
      return () => clearTimeout(removeTimer);
    }, 1800);

    return () => clearTimeout(timer);
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

      {/* Main Spinning Logo Container (similar to Fumitech.in preloader) */}
      <div className="relative flex items-center justify-center mb-8">
        
        {/* Outer Rotating Emerald & Gold Orbit Ring (Clockwise) */}
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-transparent border-t-amber-400 border-r-emerald-400 border-b-emerald-600/30 animate-spin" style={{ animationDuration: '1.4s' }} />

        {/* Inner Counter-Rotating Ring (Counter-Clockwise) */}
        <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-transparent border-b-amber-300 border-l-emerald-500 border-t-amber-500/30 animate-[spin_2s_linear_infinite_reverse]" />

        {/* Radiant Center Glow Aura */}
        <div className="absolute w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-tr from-emerald-500/25 to-amber-400/25 rounded-full blur-xl animate-pulse" />

        {/* Center Eco Pest India Logo with 3D Spin Entrance */}
        <div className="absolute inset-0 flex items-center justify-center p-3 animate-[logo-spin-intro_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <img
            src="/images/eco-pest-india-logo.png"
            alt="Eco Pest India Logo"
            className="w-20 sm:w-24 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(245,199,93,0.4)]"
          />
        </div>
      </div>

      {/* Brand Text & Status */}
      <div className="text-center space-y-2 relative z-10 px-4">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-mono uppercase tracking-widest text-emerald-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>INITIALIZING DEFENSE SYSTEMS</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-serif font-black tracking-tight text-white">
          Termite Control <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">Kochi</span>
        </h2>

        <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
          A Unit of Eco Pest India™ • IS:6313 Certified
        </p>

        {/* Animated Progress Bar */}
        <div className="w-48 sm:w-60 h-1 bg-slate-900 rounded-full mx-auto mt-4 overflow-hidden border border-emerald-900/60">
          <div className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-400 rounded-full animate-[preloader-bar_1.6s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
