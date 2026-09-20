import React, { useState } from 'react';
import { 
  MapPin, 
  ArrowRight, 
  Users, 
  Globe, 
  Building2, 
  Handshake, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import earthHeroImg from '../assets/boc-global-earth-skyline.jpg';
import keralaImg from '../assets/boc-global-kerala.jpg';
import indiaImg from '../assets/boc-global-india.jpg';
import middleEastImg from '../assets/boc-global-middle-east.jpg';
import europeImg from '../assets/boc-global-europe.jpg';
import northAmericaImg from '../assets/boc-global-north-america.jpg';
import asiaImg from '../assets/boc-global-asia.jpg';
import bocLogoPng from '../assets/boc-logo.png';

/**
 * BOCGlobalExpansion — "Global Expansion: From Kerala to the World."
 * Exact 1:1 Recreation of Master Graphic (media_1789888101257.jpg)
 */
export default function BOCGlobalExpansion({ onOpenJoinModal }) {
  const [selectedStage, setSelectedStage] = useState(null);

  const stages = [
    {
      id: 'kerala',
      title: 'KERALA',
      subtitle: 'Our roots. Our strength.',
      photo: keralaImg,
      isHighlighted: true,
    },
    {
      id: 'india',
      title: 'INDIA',
      subtitle: 'Expanding across major cities.',
      photo: indiaImg,
    },
    {
      id: 'middle-east',
      title: 'MIDDLE EAST',
      subtitle: 'Building bridges across borders.',
      photo: middleEastImg,
    },
    {
      id: 'europe',
      title: 'EUROPE',
      subtitle: 'Creating global partnerships.',
      photo: europeImg,
    },
    {
      id: 'north-america',
      title: 'NORTH AMERICA',
      subtitle: 'Connecting ideas, industries and people.',
      photo: northAmericaImg,
    },
    {
      id: 'asia-beyond',
      title: 'ASIA & BEYOND',
      subtitle: 'More regions. More opportunities.',
      photo: asiaImg,
    },
  ];

  const metrics = [
    {
      icon: Users,
      value: '1000+',
      label: 'MEMBERS WORLDWIDE',
    },
    {
      icon: Globe,
      value: '5+',
      label: 'COUNTRIES & REGIONS',
    },
    {
      icon: Building2,
      value: '50+',
      label: 'INDUSTRY SECTORS',
    },
    {
      icon: Handshake,
      value: 'COUNTLESS',
      label: 'OPPORTUNITIES',
    },
  ];

  return (
    <section 
      id="global-expansion" 
      className="relative w-full bg-[#050D1C] text-white overflow-hidden select-none py-16 sm:py-20 lg:py-24 border-t border-[#D4AF37]/30"
    >
      {/* ===================================================================== */}
      {/* 1. SCENIC EARTH GLOBE & WORLD SKYLINE BACKDROP                         */}
      {/* ===================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={earthHeroImg} 
          alt="BOC Global Earth and Skyline Network Background" 
          className="w-full h-full object-cover object-right-top sm:object-center opacity-85 filter contrast-110"
        />
        {/* Soft vignette gradient for left text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050D1C] via-[#050D1C]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050D1C]/60 via-transparent to-[#050D1C] pointer-events-none" />
      </div>

      {/* ===================================================================== */}
      {/* 2. TOP-LEFT CURVED NAVY WAVE WITH BOC BRANDING (media_1789888101257)  */}
      {/* ===================================================================== */}
      <div className="absolute top-0 left-0 z-20 pointer-events-none hidden sm:block">
        <div className="relative">
          <svg className="w-80 sm:w-96 md:w-[420px] h-28 sm:h-32 md:h-36 drop-shadow-lg" viewBox="0 0 420 140" fill="none" preserveAspectRatio="none">
            <path d="M0 0 H420 C320 25 240 75 160 115 C90 145 40 140 0 135 Z" fill="#07172C"/>
            <path d="M0 135 C40 140 90 145 160 115 C240 75 320 25 420 0" stroke="#D4AF37" strokeWidth="2.5"/>
            <path d="M0 125 C40 130 90 135 155 108 C235 68 315 20 410 0" stroke="#F9D678" strokeWidth="1" strokeOpacity="0.5"/>
          </svg>
          {/* BOC Emblem Inside Wave */}
          <div className="absolute top-3 left-6 sm:top-4 sm:left-8 flex items-center gap-3">
            <img src={bocLogoPng} alt="BOC Logo" className="w-9 h-9 sm:w-11 sm:h-11 object-contain drop-shadow-sm" />
            <div className="h-7 w-[1.5px] bg-[#D4AF37]" />
            <div className="flex flex-col text-white tracking-[0.2em] leading-tight text-[8px] sm:text-[9.5px] font-cinzel font-bold">
              <span>BUSINESS</span>
              <span>OPPORTUNITIES</span>
              <span className="text-[#F9D678]">CONNECTIONS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ===================================================================== */}
        {/* 3. TOP RIGHT SCRIPT: "Local Roots, Global Reach"                      */}
        {/* ===================================================================== */}
        <div className="flex justify-end mb-4 sm:mb-2">
          <div className="text-right">
            <span className="font-serif italic font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-wide block drop-shadow-md">
              Local Roots
            </span>
            <span className="font-serif italic font-bold text-2xl sm:text-3xl md:text-4xl text-[#F9D678] tracking-wide block drop-shadow-md">
              Global Reach
            </span>
            <svg className="w-32 sm:w-44 h-3 text-[#D4AF37] ml-auto mt-1" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9C40 3 120 1 158 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>


        {/* ===================================================================== */}
        {/* 4. UPPER SHOWCASE: LEFT HEADLINE + NARRATIVE + CTA                    */}
        {/* ===================================================================== */}
        <div className="max-w-2xl text-left mb-14 sm:mb-16 pt-4 sm:pt-6">
          
          {/* Kicker */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
            <span className="text-[#F9D678] text-xs sm:text-[13px] font-bold tracking-[0.25em] uppercase font-cinzel">
              GLOBAL EXPANSION
            </span>
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-serif font-bold tracking-tight leading-[1.08] mb-5">
            <span className="text-white block">From Kerala</span>
            <span className="text-[#F9D678] block">to the World.</span>
          </h2>

          {/* Narrative */}
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-7 font-light max-w-xl">
            What started as a vision in Kerala is now a growing global network. BOC is expanding its presence across India and internationally, connecting business minds, creating opportunities and building a stronger, more united global community.
          </p>

          {/* Golden CTA Button */}
          <div>
            <button
              onClick={onOpenJoinModal}
              className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] hover:from-white hover:to-[#F9D678] text-[#07172C] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_10px_25px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-cinzel"
            >
              <span>OUR GLOBAL JOURNEY</span>
              <ArrowRight className="w-4 h-4 text-[#07172C] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>


        {/* ===================================================================== */}
        {/* 5. 6-STAGE CONNECTED JOURNEY CARDS (Horizontal Timeline Strip)       */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-14 sm:mb-16 items-stretch">
          {stages.map((st, idx) => (
            <div key={st.id} className="relative flex items-center">
              
              {/* Individual Stage Card */}
              <div 
                className={`w-full group relative bg-[#07172C]/90 hover:bg-[#0B2548] backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-3 flex flex-col transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${
                  st.isHighlighted 
                    ? 'border-2 border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.35)]' 
                    : 'border border-[#D4AF37]/30 hover:border-[#D4AF37]'
                }`}
                onClick={() => {
                  setSelectedStage(st);
                  onOpenJoinModal();
                }}
              >
                {/* Photo Frame */}
                <div className="relative w-full h-28 sm:h-32 rounded-lg sm:rounded-xl overflow-hidden mb-2.5 bg-slate-900 shadow-inner">
                  <img 
                    src={st.photo} 
                    alt={st.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Stage Title with Map Pin */}
                <div className="flex items-center gap-1.5 mb-1 text-left">
                  <MapPin className="w-3.5 h-3.5 text-[#F9D678] shrink-0" />
                  <span className="font-serif font-bold text-xs sm:text-[13px] text-white tracking-wide group-hover:text-[#F9D678] transition-colors truncate">
                    {st.title}
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-[10px] sm:text-[11px] text-slate-300 leading-snug font-light text-left mt-auto">
                  {st.subtitle}
                </p>
              </div>

              {/* Connecting Arrow for Desktop (Between Cards) */}
              {idx < stages.length - 1 && (
                <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-[#F9D678] pointer-events-none">
                  <ChevronRight className="w-4 h-4 drop-shadow-md" />
                </div>
              )}

            </div>
          ))}
        </div>


        {/* ===================================================================== */}
        {/* 6. BOTTOM WAVE BANNER: 4 GLOBAL METRICS + SCRIPT SLOGAN               */}
        {/* ===================================================================== */}
        <div className="relative bg-[#07172C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 px-6 sm:px-10 border border-[#D4AF37]/50 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-radial from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* 4 Metrics Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full lg:w-3/4 items-center">
              {metrics.map((m, idx) => {
                const Icon = m.icon;

                return (
                  <div key={idx} className="flex flex-col items-center text-center relative">
                    <div className="w-11 h-11 rounded-full bg-[#0B2548] border border-[#D4AF37]/60 text-[#F9D678] flex items-center justify-center mb-2 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                      {m.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-cinzel font-bold text-[#F9D678] tracking-widest uppercase mt-0.5">
                      {m.label}
                    </span>

                    {/* Divider for desktop */}
                    {idx < metrics.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-[1px] h-10 bg-[#D4AF37]/25 -translate-y-1/2" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: "More Countries. More Connections." Cursive Script */}
            <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-end text-center lg:text-right pt-4 lg:pt-0 border-t lg:border-t-0 border-[#D4AF37]/30">
              <div className="transform lg:-rotate-6">
                <span className="font-serif italic font-bold text-2xl sm:text-3xl text-white tracking-wide block drop-shadow-md">
                  More Countries.
                </span>
                <span className="font-serif italic font-bold text-2xl sm:text-3xl text-[#F9D678] tracking-wide block drop-shadow-md">
                  More Connections.
                </span>
                <svg className="w-36 h-3 text-[#D4AF37] mx-auto lg:ml-auto mt-1" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9C40 3 120 1 158 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
