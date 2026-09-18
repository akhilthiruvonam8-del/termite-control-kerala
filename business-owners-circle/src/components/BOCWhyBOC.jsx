import React from 'react';
import { Users, Handshake, BarChart3, ArrowRight } from 'lucide-react';
import bocTeamCollab from '../assets/boc-team-collaboration.jpg';
import bocWaterfrontSkyline from '../assets/boc-waterfront-skyline.jpg';

/**
 * BOCWhyBOC — "Why Business Owner's Circle?" Executive Module
 * 1:1 Pixel-Perfect Recreation of User's Mockup (media_1789708592373.jpg)
 * 
 * Features:
 * - Natural typed typography and semantic responsive layout
 * - Desktop View: 2-column layout with 3 horizontal feature pillars, offset gold card, and overlapping badge
 * - Mobile View: Vertical feature rows, centered executive image card, and smooth waterfront ground
 * - Ultra-high-resolution team collaboration photo and panoramic Kochi waterfront
 */
export default function BOCWhyBOC({ onOpenJoinModal }) {
  return (
    <section id="why-boc" className="relative w-full bg-[#FCFAF7] text-slate-800 overflow-hidden select-none">
      
      {/* Delicate Gold Palm Frond Watermark in Top-Right Corner */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 pointer-events-none opacity-15 sm:opacity-20 overflow-hidden z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#C59B27] fill-none" strokeWidth="1.2">
          <path d="M180,0 Q130,80 70,110 Q20,130 0,140" />
          <path d="M180,0 Q150,60 120,70" />
          <path d="M170,10 Q145,80 90,95" />
          <path d="M155,25 Q135,100 80,120" />
          <path d="M140,40 Q120,120 70,145" />
          <path d="M120,60 Q105,140 60,165" />
          <path d="M100,80 Q90,160 50,185" />
          <circle cx="170" cy="30" r="40" strokeDasharray="3 3" strokeWidth="0.8" opacity="0.6" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20">
        
        {/* =================================================================== */}
        {/* DESKTOP / LAPTOP LAYOUT (Hidden on mobile, shown on md and above)  */}
        {/* =================================================================== */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Content & Features) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline / Subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C59B27]" />
              <span className="text-[11px] sm:text-xs font-cinzel font-bold tracking-[0.25em] text-[#B58920] uppercase">
                WHY BUSINESS OWNER'S CIRCLE?
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-cinzel font-black tracking-tight text-[#081730] leading-[1.18] mb-5">
              MORE THAN NETWORKING.<br />
              A COMMUNITY BUILT<br />
              <span className="text-[#081730]">FOR </span>
              <span className="text-[#C59B27] drop-shadow-[0_2px_4px_rgba(197,155,39,0.25)]">GROWTH.</span>
            </h2>

            {/* Lead Narrative */}
            <p className="text-[14.5px] lg:text-[15.5px] text-slate-600 leading-relaxed font-normal max-w-xl mb-9">
              Business Owner's Circle is a structured business community where entrepreneurs, business owners and professionals build trusted relationships, exchange genuine opportunities, collaborate on projects and grow together.
            </p>

            {/* 3 Core Value Pillars (Horizontal Columns) */}
            <div className="grid grid-cols-3 gap-5 pt-3 pb-8 mb-8 max-w-2xl">
              
              {/* Pillar 1: Trusted Connections */}
              <div className="flex flex-col items-start pr-3">
                <div className="w-12 h-12 rounded-full border-2 border-[#D4A338]/80 bg-[#FAF6ED] text-[#B8860B] flex items-center justify-center mb-3.5 shadow-[0_2px_12px_rgba(212,163,56,0.18)]">
                  <Users className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="text-[11px] sm:text-[11.5px] font-black uppercase tracking-wider text-[#081730] mb-1.5 leading-snug">
                  TRUSTED CONNECTIONS
                </h4>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Build relationships with like-minded professionals.
                </p>
              </div>

              {/* Pillar 2: Genuine Opportunities */}
              <div className="flex flex-col items-start px-2">
                <div className="w-12 h-12 rounded-full border-2 border-[#D4A338]/80 bg-[#FAF6ED] text-[#B8860B] flex items-center justify-center mb-3.5 shadow-[0_2px_12px_rgba(212,163,56,0.18)]">
                  <Handshake className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="text-[11px] sm:text-[11.5px] font-black uppercase tracking-wider text-[#081730] mb-1.5 leading-snug">
                  GENUINE OPPORTUNITIES
                </h4>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Exchange relevant referrals and business opportunities.
                </p>
              </div>

              {/* Pillar 3: Meaningful Collaboration */}
              <div className="flex flex-col items-start pl-2">
                <div className="w-12 h-12 rounded-full border-2 border-[#D4A338]/80 bg-[#FAF6ED] text-[#B8860B] flex items-center justify-center mb-3.5 shadow-[0_2px_12px_rgba(212,163,56,0.18)]">
                  <BarChart3 className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="text-[11px] sm:text-[11.5px] font-black uppercase tracking-wider text-[#081730] mb-1.5 leading-snug">
                  MEANINGFUL COLLABORATION
                </h4>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Connect with people who can help your business grow.
                </p>
              </div>

            </div>

            {/* Action CTA Button */}
            <div>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#041633] hover:bg-[#072454] text-white font-bold text-xs uppercase tracking-widest shadow-[0_6px_22px_rgba(4,22,51,0.35)] hover:shadow-[0_8px_28px_rgba(4,22,51,0.5)] active:scale-95 transition-all group cursor-pointer"
              >
                <span>EXPLORE BOC</span>
                <ArrowRight className="w-4 h-4 text-[#FCE38A] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column (Side Collaboration Card) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative py-4">
            
            <div className="relative w-full max-w-[390px] lg:max-w-[420px]">
              
              {/* Warm Gold Accent Offset Border Backdrop */}
              <div className="absolute -bottom-3.5 -right-3.5 w-full h-full rounded-[36px] border-2 border-[#D4A338]/70 bg-gradient-to-br from-[#DFC688]/30 via-transparent to-[#B8860B]/20 pointer-events-none -z-0" />
              
              {/* Ultra High Quality Team Photo Card */}
              <div className="relative z-10 rounded-[32px] overflow-hidden border border-[#D4A338]/40 shadow-2xl bg-slate-900 aspect-[3/4]">
                <img 
                  src={bocTeamCollab} 
                  alt="BOC Business Executives Collaborating in Boardroom"
                  className="w-full h-full object-cover object-center contrast-[1.05] saturate-[1.1] transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Overlapping Midnight Navy Badge at Bottom Right */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 z-20 bg-[#031533] border border-[#DFC688]/80 px-6 py-2.5 sm:py-3 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.6)] text-center backdrop-blur-md">
                <div className="text-[11px] sm:text-[12px] font-cinzel font-black tracking-widest text-[#FCE38A] uppercase leading-tight">
                  CONNECT • TRUST
                </div>
                <div className="text-[10px] sm:text-[11px] font-cinzel font-bold tracking-widest text-[#DFC688] uppercase leading-tight mt-0.5">
                  COLLABORATE • GROW
                </div>
              </div>

            </div>

          </div>

        </div>


        {/* =================================================================== */}
        {/* MOBILE LAYOUT (Exact to Right Panel in Mockup)                     */}
        {/* =================================================================== */}
        <div className="md:hidden flex flex-col items-start text-left pt-2 pb-6">
          
          {/* Tagline / Subtitle */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#C59B27]" />
            <span className="text-[10.5px] font-cinzel font-bold tracking-[0.2em] text-[#B58920] uppercase">
              WHY BUSINESS OWNER'S CIRCLE?
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-[27px] font-cinzel font-black tracking-tight text-[#081730] leading-[1.2] mb-4">
            MORE THAN NETWORKING.<br />
            A COMMUNITY BUILT<br />
            <span className="text-[#081730]">FOR </span>
            <span className="text-[#C59B27]">GROWTH.</span>
          </h2>

          {/* Lead Narrative */}
          <p className="text-[13px] text-slate-600 leading-relaxed font-normal mb-6">
            Business Owner's Circle is a structured business community where entrepreneurs, business owners and professionals build trusted relationships, exchange genuine opportunities, collaborate on projects and grow together.
          </p>

          {/* 3 Core Value Pillars (Vertical Stacked Rows with Left Icon) */}
          <div className="w-full flex flex-col gap-4 mb-7">
            
            {/* Row 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full border-2 border-[#D4A338]/80 bg-[#FAF6ED] text-[#B8860B] flex-shrink-0 flex items-center justify-center shadow-[0_2px_10px_rgba(212,163,56,0.18)]">
                <Users className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-[11.5px] font-black uppercase tracking-wider text-[#081730]">
                  TRUSTED CONNECTIONS
                </h4>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  Build relationships with like-minded professionals.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full border-2 border-[#D4A338]/80 bg-[#FAF6ED] text-[#B8860B] flex-shrink-0 flex items-center justify-center shadow-[0_2px_10px_rgba(212,163,56,0.18)]">
                <Handshake className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-[11.5px] font-black uppercase tracking-wider text-[#081730]">
                  GENUINE OPPORTUNITIES
                </h4>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  Exchange relevant referrals and business opportunities.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full border-2 border-[#D4A338]/80 bg-[#FAF6ED] text-[#B8860B] flex-shrink-0 flex items-center justify-center shadow-[0_2px_10px_rgba(212,163,56,0.18)]">
                <BarChart3 className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-[11.5px] font-black uppercase tracking-wider text-[#081730]">
                  MEANINGFUL COLLABORATION
                </h4>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  Connect with people who can help your business grow.
                </p>
              </div>
            </div>

          </div>

          {/* Action CTA Button */}
          <div className="w-full mb-8">
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-full bg-[#041633] active:bg-[#072454] text-white font-bold text-xs uppercase tracking-widest shadow-[0_6px_20px_rgba(4,22,51,0.35)] cursor-pointer"
            >
              <span>EXPLORE BOC</span>
              <ArrowRight className="w-4 h-4 text-[#FCE38A]" />
            </button>
          </div>

          {/* Centered Mobile Collaboration Photo Card */}
          <div className="w-full flex justify-center pb-8">
            <div className="relative w-full max-w-[340px]">
              
              {/* Warm Gold Accent Offset Border Backdrop */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-[28px] border-2 border-[#D4A338]/70 bg-gradient-to-br from-[#DFC688]/30 via-transparent to-[#B8860B]/20 pointer-events-none -z-0" />
              
              {/* Ultra High Quality Team Photo Card */}
              <div className="relative z-10 rounded-[26px] overflow-hidden border border-[#D4A338]/40 shadow-xl bg-slate-900 aspect-[3/4]">
                <img 
                  src={bocTeamCollab} 
                  alt="BOC Business Executives Collaborating in Boardroom"
                  className="w-full h-full object-cover object-center contrast-[1.05] saturate-[1.1]"
                />
              </div>

              {/* Overlapping Midnight Navy Badge at Bottom Right */}
              <div className="absolute -bottom-3.5 -right-2 z-20 bg-[#031533] border border-[#DFC688]/80 px-4 py-2 rounded-xl shadow-[0_10px_28px_rgba(0,0,0,0.6)] text-center">
                <div className="text-[10px] font-cinzel font-black tracking-widest text-[#FCE38A] uppercase leading-tight">
                  CONNECT • TRUST
                </div>
                <div className="text-[9px] font-cinzel font-bold tracking-widest text-[#DFC688] uppercase leading-tight mt-0.5">
                  COLLABORATE • GROW
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>


      {/* ===================================================================== */}
      {/* FULL-WIDTH PANORAMIC WATERFRONT SKYLINE BANNER (BOTTOM OF SECTION)   */}
      {/* ===================================================================== */}
      <div className="relative w-full mt-4 sm:mt-10 overflow-hidden leading-none">
        
        {/* Soft feather gradient transition merging ivory background into the morning sky */}
        <div className="absolute inset-x-0 top-0 h-10 sm:h-24 md:h-32 bg-gradient-to-b from-[#FCFAF7] via-[#FCFAF7]/60 to-transparent z-10 pointer-events-none" />
        
        {/* Kochi Waterfront Skyline with Chinese Fishing Nets & City Reflections */}
        {/* Natural wide aspect ratio on mobile so both the nets on left and skyline on right are 100% visible without zoom */}
        <img 
          src={bocWaterfrontSkyline} 
          alt="BOC Kochi Harbor Skyline & Chinese Fishing Nets"
          className="w-full aspect-[3.3/1] xs:aspect-[3.6/1] sm:aspect-[4.2/1] md:h-64 lg:h-80 object-cover object-bottom contrast-[1.02] saturate-[1.05]"
        />

        {/* Subtle decorative bottom golden curve divider from mockup */}
        <div className="absolute inset-x-0 -bottom-1 flex justify-center pointer-events-none overflow-hidden">
          <div className="w-[125%] h-6 sm:h-8 rounded-t-[100%] border-t border-[#DFC688]/70 bg-gradient-to-b from-[#DFC688]/20 to-transparent" />
        </div>
      </div>

    </section>
  );
}
