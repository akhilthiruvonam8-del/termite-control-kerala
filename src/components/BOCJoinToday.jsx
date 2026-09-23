import React, { useState } from 'react';
import { 
  Users, 
  Handshake, 
  TrendingUp, 
  Lightbulb, 
  Globe, 
  ArrowRight, 
  Play, 
  X,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import joinHeroImg from '../assets/boc-join-hero.jpg';
import bocLogoPng from '../assets/boc-logo.png';

/**
 * BOCJoinToday — "More Connections. Bigger Opportunities. — JOIN BOC TODAY"
 * Exact 1:1 Recreation of Master Graphic (media_1789903014233.jpg)
 */
export default function BOCJoinToday({ onOpenJoinModal }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const valuePillars = [
    {
      icon: Users,
      title: 'EXPAND YOUR NETWORK',
      subtitle: 'Meet like-minded business owners',
    },
    {
      icon: Handshake,
      title: 'GET REAL REFERRALS',
      subtitle: 'Turn connections into customers',
    },
    {
      icon: TrendingUp,
      title: 'GROW YOUR BUSINESS',
      subtitle: 'Discover new markets and opportunities',
    },
    {
      icon: Lightbulb,
      title: 'LEARN & COLLABORATE',
      subtitle: 'Gain insights from industry leaders',
    },
    {
      icon: Globe,
      title: 'BE PART OF A GLOBAL COMMUNITY',
      subtitle: 'Local roots. Global reach.',
    },
  ];

  return (
    <section 
      id="join-today" 
      className="relative w-full bg-gradient-to-b from-[#030B18] via-[#051329] to-[#020814] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-t border-[#D4AF37]/30"
    >
      {/* Ambient Luxury Background Lights & Flares */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#D4AF37]/12 via-[#B57D2B]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#0E2849]/35 rounded-full blur-3xl pointer-events-none" />

      {/* Elegant Golden Flowing Wave Lines in Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-100 120 C 300 20, 700 240, 1540 80" stroke="url(#goldGradientLine)" strokeWidth="1.5" />
          <path d="M-100 160 C 400 60, 800 280, 1540 120" stroke="url(#goldGradientLine)" strokeWidth="0.8" strokeDasharray="6 6" />
          <defs>
            <linearGradient id="goldGradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="30%" stopColor="#F9D678" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F9D678" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ===================================================================== */}
        {/* 1. TOP BAR: LEFT BOC EMBLEM + RIGHT "Better Together" SCRIPT          */}
        {/* ===================================================================== */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12">
          
          {/* Left: BOC Brand Signature with Golden Accents */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative">
              <img 
                src={bocLogoPng} 
                alt="BOC Official Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]"
              />
            </div>
            
            <div className="h-8 w-[1.5px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />
            
            <div className="flex flex-col text-left font-cinzel font-bold text-[9px] sm:text-[11px] tracking-[0.22em] leading-tight text-white">
              <span className="text-[#F9D678]">BUSINESS</span>
              <span>OWNERS</span>
              <span className="text-slate-300">CIRCLE</span>
            </div>
          </div>

          {/* Right: "Better Together" Elegant Luxury Script */}
          <div className="text-right">
            <span className="font-serif italic font-bold text-2xl sm:text-3xl md:text-4xl text-[#F9D678] tracking-wide block drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]">
              Better Together
            </span>
            <svg className="w-28 sm:w-36 h-2.5 text-[#D4AF37] ml-auto mt-0.5" viewBox="0 0 140 10" fill="none">
              <path d="M2 8C35 2 105 1 138 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

        </div>


        {/* ===================================================================== */}
        {/* 2. UPPER SHOWCASE: LEFT NARRATIVE & CTAS + RIGHT HERO PHOTO           */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          
          {/* Left Column (6 Cols): Typography, Value Pitch & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Kicker: — JOIN BOC TODAY — */}
            <div className="inline-flex items-center gap-3 mb-4 sm:mb-5">
              <div className="h-[1.5px] w-8 bg-[#D4AF37]" />
              <span className="text-[#F9D678] text-xs sm:text-sm font-bold tracking-[0.28em] uppercase font-cinzel">
                JOIN BOC TODAY
              </span>
              <div className="h-[1.5px] w-8 bg-[#D4AF37]" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-serif font-bold tracking-tight leading-[1.08] mb-6">
              <span className="text-white block">More Connections.</span>
              <span className="bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] bg-clip-text text-transparent block drop-shadow-sm">
                Bigger Opportunities.
              </span>
            </h2>

            {/* Description Narrative */}
            <p className="text-slate-300 text-sm sm:text-base md:text-[17px] leading-relaxed mb-8 max-w-xl font-normal">
              Be part of a powerful community of business owners, professionals and change-makers. 
              Join BOC and unlock new opportunities, partnerships and growth — together.
            </p>

            {/* Action Buttons: Primary Gold CTA + Secondary Watch Our Story */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              
              {/* Primary: BECOME A MEMBER → */}
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] hover:from-white hover:via-[#F9D678] hover:to-[#E5BF55] text-[#07172C] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:shadow-[0_0_35px_rgba(249,214,120,0.65)] transition-all duration-300 transform hover:scale-105 cursor-pointer font-cinzel group"
              >
                <span>BECOME A MEMBER</span>
                <ArrowRight className="w-4 h-4 text-[#07172C] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary: Watch Our Story */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full text-slate-200 hover:text-[#F9D678] transition-colors group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all shadow-[0_0_10px_rgba(212,175,55,0.25)]">
                  <Play className="w-3.5 h-3.5 text-[#F9D678] fill-[#F9D678] ml-0.5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-wide underline underline-offset-4 decoration-[#D4AF37]/60 group-hover:decoration-[#F9D678]">
                  Watch Our Story
                </span>
              </button>

            </div>

            {/* Key Assurance Badges */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F9D678]" />
                <span>100% Category Exclusivity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F9D678]" />
                <span>Verified Business Leaders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F9D678]" />
                <span>Statewide & Global Reach</span>
              </div>
            </div>

          </div>

          {/* Right Column (6 Cols): Handshake & Rooftop Skyline Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_20px_60px_rgba(0,0,0,0.6)] group">
              <img 
                src={joinHeroImg} 
                alt="Jijeesh Minerva and BOC Business Leaders Networking on Waterfront Terrace" 
                className="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020814]/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Gold Ribbon Frame Highlight */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl sm:rounded-3xl pointer-events-none" />
            </div>

            {/* Decorative Sparkle Badge */}
            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#07172C] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg hidden sm:flex">
              <Sparkles className="w-5 h-5 text-[#F9D678]" />
            </div>
          </div>

        </div>


        {/* ===================================================================== */}
        {/* 3. LUXURY GOLD WAVE DIVIDER RIBBON                                    */}
        {/* ===================================================================== */}
        <div className="relative w-full mb-10 overflow-hidden">
          <svg className="w-full h-7 sm:h-9" viewBox="0 0 1200 36" fill="none" preserveAspectRatio="none">
            <path d="M0 18 C 300 36, 600 0, 900 18 C 1050 27, 1150 18, 1200 18" stroke="url(#waveGoldGrad)" strokeWidth="2.5" />
            <path d="M0 14 C 300 32, 600 -4, 900 14 C 1050 23, 1150 14, 1200 14" stroke="#F9D678" strokeWidth="1" strokeOpacity="0.4" />
            <defs>
              <linearGradient id="waveGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
                <stop offset="25%" stopColor="#F9D678" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                <stop offset="75%" stopColor="#F9D678" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>


        {/* ===================================================================== */}
        {/* 4. THE 5 VALUE PILLARS (media_1789903014233.jpg)                      */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-6 mb-12 sm:mb-16 items-start">
          {valuePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isLast = idx === valuePillars.length - 1;

            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center relative px-2 sm:px-3 ${
                  isLast ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                {/* Circular Gold Outline Icon */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#081B33] border border-[#D4AF37] flex items-center justify-center text-[#F9D678] mb-3 shadow-[0_0_16px_rgba(212,175,55,0.25)] group hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]" />
                </div>

                {/* Title */}
                <h3 className="font-cinzel font-bold text-xs sm:text-[13px] text-white tracking-wider uppercase mb-1.5 leading-snug">
                  {pillar.title}
                </h3>

                {/* Subtitle */}
                <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed font-normal">
                  {pillar.subtitle}
                </p>

                {/* Vertical Divider for desktop */}
                {idx < valuePillars.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-[1px] h-12 bg-gradient-to-b from-transparent via-[#D4AF37]/35 to-transparent -translate-y-1/2" />
                )}
              </div>
            );
          })}
        </div>


        {/* ===================================================================== */}
        {/* 5. BOTTOM TAGLINE BAR: YOUR NEXT OPPORTUNITY IS A CONNECTION AWAY     */}
        {/* ===================================================================== */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 max-w-4xl mx-auto pt-4 border-t border-[#D4AF37]/25">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="text-[#F9D678] font-cinzel font-bold text-xs sm:text-sm tracking-[0.25em] uppercase text-center shrink-0">
            YOUR NEXT OPPORTUNITY IS A CONNECTION AWAY
          </span>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

      </div>

      {/* ===================================================================== */}
      {/* 6. WATCH OUR STORY VIDEO MODAL                                        */}
      {/* ===================================================================== */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#07172C] rounded-2xl border border-[#D4AF37] p-6 shadow-2xl overflow-hidden">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/30 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#F9D678]" />
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                  The BOC Story — Empowering Leaders Across Kerala & Beyond
                </h3>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-video bg-black/60 border border-slate-800 flex items-center justify-center">
              <img 
                src={joinHeroImg} 
                alt="Story Thumbnail" 
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10 text-center p-6 bg-black/70 rounded-2xl border border-[#D4AF37]/50 max-w-lg mx-4">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#07172C] flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Play className="w-8 h-8 fill-[#07172C] ml-1" />
                </div>
                <h4 className="font-cinzel font-bold text-white text-base sm:text-lg mb-2">
                  Discover Business Owner's Circle
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm mb-4">
                  Watch how ambitious founders in Kerala and globally connect, collaborate, and exchange multi-crore business opportunities.
                </p>
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    onOpenJoinModal();
                  }}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer font-cinzel"
                >
                  Join Us Today →
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
