import React, { useState } from 'react';
import bocRooftopBg from '../assets/boc-rooftop-bg.jpg';
import bocMobileBg from '../assets/boc-mobile-bg.jpg';
import bocLogoPng from '../assets/boc-logo.png';
import { 
  ArrowRight, 
  Users, 
  Handshake, 
  TrendingUp, 
  Building2, 
  Star, 
  Link2,
  ChevronDown
} from 'lucide-react';

/**
 * Business Owner's Circle (BOC) — Ultra-Luxury Hero Section
 * EXACT 1:1 MASTER EXPERIENCE (media_1789641252571.jpg & media_1789658972902.jpg)
 * Features:
 * - 100% Authentic 2K Master Canvas without duplicate headers or boxes
 * - Clean visual hierarchy aligned with top unified floating BOCNavbar
 * - Interactive touch & click hotspots mapped directly to master buttons & icons
 */
export default function BOCHero({ onOpenJoinModal }) {
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Right vertical rail items (Refer, Connect, Collaborate, Grow)
  const verticalRailItems = [
    { id: 'refer', label: 'REFER', icon: Handshake, desc: 'Connect fellow members with genuine business opportunities.' },
    { id: 'connect', label: 'CONNECT', icon: Link2, desc: 'Build trusted relationships through regular masterminds.' },
    { id: 'collaborate', label: 'COLLABORATE', icon: Users, desc: 'Form multi-disciplinary packages for large clients.' },
    { id: 'grow', label: 'GROW', icon: TrendingUp, desc: 'Achieve sustainable, predictable business scaling.' },
  ];

  // Bottom 4 dock pillars
  const dockPillars = [
    { id: 'connections', label: 'BUSINESS CONNECTIONS', icon: Handshake, desc: 'High-trust, qualified executive relationships.' },
    { id: 'industries', label: 'DIVERSE INDUSTRIES', icon: Building2, desc: '100% verified founders across 25+ verticals.' },
    { id: 'opportunities', label: 'MORE OPPORTUNITIES', icon: Star, desc: 'Accelerated revenue via strategic referrals.' },
    { id: 'community', label: 'STRONGER COMMUNITY', icon: Users, desc: 'A fraternity where you never build alone.' },
  ];

  return (
    <div className="relative w-full flex flex-col bg-[#020712] text-slate-100 select-none overflow-x-hidden">
      
      {/* ===================================================================== */}
      {/* 1. DESKTOP VIEWPORT: 100% UNTOUCHED 2K MASTER CANVAS (1:1 SAMPLE)     */}
      {/* ===================================================================== */}
      <div className="hidden md:block relative w-full aspect-[2/1] max-w-[2048px] mx-auto select-none shadow-2xl overflow-visible">
        
        {/* The Exact Master 2K Image from User's Sample Picture (media_1789641252571.jpg) */}
        {/* Highlighted, Radiant Sunset Skyline & Terrace */}
        <img 
          src={bocRooftopBg} 
          alt="Business Owner's Circle Master Experience" 
          className="w-full h-full object-cover object-[center_20%] select-none pointer-events-none contrast-[1.14] saturate-[1.25] brightness-[1.08]"
        />
        {/* Ambient warm sunset radial glow */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-gradient-to-br from-amber-400/20 via-orange-500/10 to-transparent rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

        {/* ----------------------------------------------------------------- */}
        {/* 1. MEDALLION OFFICIAL CREST (1:1 Position on Left Railing)        */}
        {/* Exact Master Coordinates: media_1789640336285.jpg (top: 23.5%)    */}
        {/* ----------------------------------------------------------------- */}
        <div 
          onClick={onOpenJoinModal}
          className="absolute top-[23.5%] left-[3.8%] w-[16.2%] aspect-square rounded-full cursor-pointer z-20 group transition-all duration-300 hover:scale-105"
          title="Business Owners Circle Official Crest — Empower Together"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Soft Ambient Gold Halo */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#C5A059] to-[#FCE38A] blur-[18px] opacity-60 group-hover:opacity-85 transition-opacity" />
            {/* Crisp 3D Gold Medallion */}
            <img 
              src={bocLogoPng} 
              alt="Business Owners Circle Official Crest" 
              className="relative w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(223,198,136,0.75)] brightness-105"
            />
          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* 2. CENTER-LEFT HERO TYPOGRAPHY & CTA (Beside Medallion at 21.5%)  */}
        {/* ----------------------------------------------------------------- */}
        <div className="absolute top-[23.5%] left-[21.5%] max-w-[46%] z-20 flex flex-col justify-center select-text">
          
          {/* Soft directional backdrop scrim for 100% crisp text readability */}
          <div className="absolute -inset-x-8 -inset-y-6 -z-10 bg-gradient-to-r from-[#020712]/80 via-[#020712]/45 to-transparent rounded-3xl blur-xl pointer-events-none" />

          {/* Sub-Badge: Clean BOC */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-transparent to-[#FCE38A] shadow-[0_0_8px_rgba(252,227,138,0.8)]" />
            <span className="font-cinzel font-black tracking-[0.28em] text-[clamp(11px,1.05vw,15px)] text-[#FCE38A] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,1)] whitespace-nowrap">
              BOC
            </span>
            <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-l from-transparent to-[#FCE38A] shadow-[0_0_8px_rgba(252,227,138,0.8)]" />
          </div>

          {/* Grand Headline: REFER. COLLABORATE. SUPPORT. GROW. */}
          <h1 className="font-serif font-black tracking-tight text-[clamp(26px,3.2vw,56px)] leading-[1.08] mb-3 select-text">
            <span className="text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]">
              REFER. COLLABORATE.
            </span>
            <br />
            <span className="text-[#FCD34D] drop-shadow-[0_4px_20px_rgba(0,0,0,1)] [text-shadow:_0_2px_12px_rgba(0,0,0,0.95),_0_0_24px_rgba(252,211,77,0.45)]">
              SUPPORT. GROW.
            </span>
          </h1>

          {/* Mission Statement Subtitle */}
          <p className="text-[#FFFFFF] text-[clamp(13px,1.15vw,17px)] font-medium leading-relaxed max-w-xl drop-shadow-[0_2px_14px_rgba(0,0,0,1)] [text-shadow:_0_1px_4px_rgba(0,0,0,0.95)] mb-5">
            A professional business community where entrepreneurs, business owners and professionals connect, exchange genuine business opportunities and grow together.
          </p>

          {/* Action Button: EXPLORE OUR COMMUNITY */}
          <div className="flex items-center select-none">
            <button
              onClick={() => (document.getElementById('what-is-boc') || document.getElementById('why-boc'))?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#FFE58F] via-[#F5C042] to-[#D49319] border-2 border-[#FFF6C7] text-[#030B17] font-black text-[clamp(10px,1vw,14px)] tracking-wider uppercase shadow-[0_0_30px_rgba(245,192,66,0.7),_0_6px_20px_rgba(0,0,0,0.9)] hover:shadow-[0_0_40px_rgba(245,192,66,0.95)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer group"
            >
              <span>EXPLORE OUR COMMUNITY</span>
              <ArrowRight className="w-4 h-4 stroke-[3] text-[#030B17] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* 3. RIGHT VERTICAL TIMELINE RAIL (Coded in Real HTML/SVG)          */}
        {/* ----------------------------------------------------------------- */}
        <div className="absolute top-[20%] right-[2%] z-20 flex flex-col items-start gap-3 sm:gap-4 lg:gap-5">
          {/* Vertical Connecting Gold Line */}
          <div className="absolute left-[15px] sm:left-[19px] lg:left-[21px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#DFC688]/30 via-[#FCE38A] to-[#DFC688]/30 -z-10" />

          {verticalRailItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={onOpenJoinModal}
                onMouseEnter={() => setActiveTooltip(item.id)}
                onMouseLeave={() => setActiveTooltip(null)}
                className="relative flex items-center gap-2.5 group cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-[#030C1C]/95 border border-[#FCE38A] shadow-[0_0_15px_rgba(252,227,138,0.45)] flex items-center justify-center text-[#FCE38A] group-hover:border-[#FFF5C0] group-hover:text-[#FFF5C0] group-hover:scale-110 transition-all backdrop-blur-md">
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.4]" />
                </div>
                <span className="text-[clamp(8.5px,0.8vw,12px)] font-semibold tracking-[0.22em] text-[#FFFFFF] group-hover:text-[#FCE38A] uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,1)] transition-colors whitespace-nowrap">
                  {item.label}
                </span>

                {/* Tooltip */}
                {activeTooltip === item.id && (
                  <div className="absolute right-[105%] top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-[#041126]/95 border border-[#DFC688]/60 shadow-[0_8px_25px_rgba(0,0,0,0.9)] text-left whitespace-nowrap z-30 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-[11px] font-bold text-[#E5C45A] flex items-center gap-1">
                      <span>{item.label}</span>
                      <ArrowRight className="w-3 h-3 text-[#E5C45A]" />
                    </div>
                    <div className="text-[9.5px] text-slate-300 max-w-xs">{item.desc}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* 4. BOTTOM CURVED LUXURY DOCK (Coded in Real HTML/SVG)             */}
        {/* ----------------------------------------------------------------- */}
        <div className="absolute bottom-0 left-0 right-0 z-20 w-full py-2.5 sm:py-3.5 px-4 sm:px-8 lg:px-12 bg-gradient-to-t from-[#010610]/98 via-[#020A17]/90 to-transparent border-t border-[#DFC688]/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto grid grid-cols-4 gap-2 sm:gap-6 text-center">
            {dockPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  onClick={onOpenJoinModal}
                  onMouseEnter={() => setActiveTooltip(pillar.id)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  className="relative flex items-center justify-center gap-2 sm:gap-3 py-1 px-2 rounded-xl hover:bg-white/[0.04] transition-all cursor-pointer group"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#030C1C]/95 border border-[#FCE38A] flex items-center justify-center text-[#FCE38A] group-hover:border-[#FFF5C0] group-hover:text-[#FFF5C0] group-hover:scale-110 transition-all shadow-[0_0_14px_rgba(252,227,138,0.45)]">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.4]" />
                  </div>
                  <span className="text-[clamp(8px,0.85vw,12.5px)] font-bold tracking-wider text-[#FFFFFF] group-hover:text-[#FCE38A] uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,1)] transition-colors whitespace-nowrap">
                    {pillar.label}
                  </span>

                  {/* Tooltip */}
                  {activeTooltip === pillar.id && (
                    <div className="absolute bottom-[115%] left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-[#041126]/95 border border-[#DFC688]/60 shadow-[0_8px_25px_rgba(0,0,0,0.9)] text-center whitespace-nowrap z-30 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                      <div className="text-[11px] font-black text-white tracking-wide">{pillar.label}</div>
                      <div className="text-[9.5px] text-slate-300">{pillar.desc}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>


      {/* ===================================================================== */}
      {/* 2. MOBILE RESPONSIVE HERO VIEW (< md screens)                         */}
      {/* EXACT 1:1 TO USER'S MOCKUP (media_1789658972902.jpg)                  */}
      {/* Fits completely on single screen (otta page) without bottom cut-off   */}
      {/* ===================================================================== */}
      <div className="md:hidden relative w-full flex flex-col bg-[#020712] text-slate-100 pt-14">
        
        {/* Mobile Hero Viewport: Clean Portrait Photo + 100% Typed Vector Typography */}
        <div className="relative w-full overflow-hidden bg-[#020712]">
          
          {/* Background Image: Vivid, Ultra-Sharp 8K Crystal-Clear Networking */}
          <div className="relative w-full h-[420px] xs:h-[450px] sm:h-[490px] overflow-hidden">
            <img 
              src={bocMobileBg} 
              alt="BOC Rooftop Networking" 
              className="w-full h-full object-cover object-[center_top] select-none"
            />

            {/* Directional Soft Scrim ONLY Behind Upper Text — Fades completely before people's heads */}
            <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-[#020712]/95 via-[#020712]/55 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#010714] to-transparent pointer-events-none" />

            {/* Real Typed Web Typography (100% Native Vector HTML/CSS) */}
            <div className="absolute top-3 left-0 right-0 px-4 sm:px-6 z-20 flex flex-col items-start text-left select-text max-w-sm">
              
              {/* Sub-Badge: Clean BOC */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-5 h-[1.5px] bg-[#DFC688]" />
                <span className="font-cinzel font-bold text-[10px] tracking-[0.24em] text-[#DFC688] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,1)] whitespace-nowrap">
                  BOC
                </span>
                <span className="w-5 h-[1.5px] bg-[#DFC688]" />
              </div>

              {/* Main Headline: REFER. COLLABORATE. SUPPORT. GROW. */}
              <h1 className="font-serif font-black tracking-tight text-[21px] xs:text-[23px] sm:text-[26px] leading-[1.12] mb-1.5">
                <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
                  REFER. COLLABORATE.
                </span>
                <br />
                <span className="text-[#FCD34D] drop-shadow-[0_4px_16px_rgba(0,0,0,1)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.95),_0_0_16px_rgba(252,211,77,0.4)]">
                  SUPPORT. GROW.
                </span>
              </h1>

              {/* Subtitle description paragraph */}
              <p className="text-[#E2E8F0] text-[11px] xs:text-[11.5px] font-normal leading-relaxed mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,1)] max-w-xs">
                A professional business community where entrepreneurs, business owners and professionals connect, exchange genuine opportunities and grow together.
              </p>

              {/* Action Button: EXPLORE (Single clean button; JOIN BOC is already in the top navbar) */}
              <div className="w-full flex items-center select-none">
                <button
                  onClick={() => (document.getElementById('what-is-boc') || document.getElementById('why-boc'))?.scrollIntoView({ behavior: 'smooth' })}
                  className="py-2.5 px-6 rounded-full bg-gradient-to-r from-[#FFE58F] via-[#F5C042] to-[#D49319] border border-[#FFF6C7] text-[#030B17] font-black text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(245,192,66,0.6)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span className="font-black whitespace-nowrap">EXPLORE</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3] text-[#030B17] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

          {/* 3 Mobile Pillars Floating Dock (Now elevated to fit comfortably in single mobile screen view) */}
          <div className="w-full px-2.5 pt-2.5 pb-3 bg-[#010714] border-t border-[#DFC688]/30">
            <div className="grid grid-cols-3 gap-1 text-center">
              
              {/* Pillar 1: Business Connections */}
              <div onClick={onOpenJoinModal} className="flex flex-col items-center gap-1.5 cursor-pointer group px-0.5">
                <div className="w-10 h-10 rounded-full bg-[#020A17] border-2 border-[#FCE38A] flex items-center justify-center text-[#FCE38A] shadow-[0_0_15px_rgba(252,227,138,0.5)] group-hover:scale-110 transition-transform">
                  <Handshake className="w-4.5 h-4.5 stroke-[2.4]" />
                </div>
                <span className="text-[9.5px] font-black tracking-wider text-white uppercase leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                  BUSINESS<br />CONNECTIONS
                </span>
              </div>

              {/* Pillar 2: Diverse Industries */}
              <div onClick={onOpenJoinModal} className="flex flex-col items-center gap-1.5 cursor-pointer group border-x border-[#DFC688]/30 px-0.5">
                <div className="w-10 h-10 rounded-full bg-[#020A17] border-2 border-[#FCE38A] flex items-center justify-center text-[#FCE38A] shadow-[0_0_15px_rgba(252,227,138,0.5)] group-hover:scale-110 transition-transform">
                  <Building2 className="w-4.5 h-4.5 stroke-[2.4]" />
                </div>
                <span className="text-[9.5px] font-black tracking-wider text-white uppercase leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                  DIVERSE<br />INDUSTRIES
                </span>
              </div>

              {/* Pillar 3: More Opportunities */}
              <div onClick={onOpenJoinModal} className="flex flex-col items-center gap-1.5 cursor-pointer group px-0.5">
                <div className="w-10 h-10 rounded-full bg-[#020A17] border-2 border-[#FCE38A] flex items-center justify-center text-[#FCE38A] shadow-[0_0_15px_rgba(252,227,138,0.5)] group-hover:scale-110 transition-transform">
                  <Star className="w-4.5 h-4.5 stroke-[2.4]" />
                </div>
                <span className="text-[9.5px] font-black tracking-wider text-white uppercase leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                  MORE<br />OPPORTUNITIES
                </span>
              </div>

            </div>

            {/* Scroll Down Indicator */}
            <div 
              onClick={() => (document.getElementById('what-is-boc') || document.getElementById('why-boc'))?.scrollIntoView({ behavior: 'smooth' })}
              className="flex justify-center mt-2.5 cursor-pointer group select-none"
            >
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#020A17]/85 border border-[#FCE38A]/60 backdrop-blur-md shadow-[0_0_12px_rgba(252,227,138,0.25)] group-hover:border-[#FCE38A] group-hover:scale-105 transition-all">
                <span className="text-[9.5px] tracking-[0.2em] uppercase font-cinzel font-bold text-[#FCE38A]">
                  Scroll to Explore
                </span>
                <ChevronDown className="w-3 h-3 text-[#FCE38A] animate-bounce" />
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
