import React from 'react';
import { UserPlus, Users, Handshake, Megaphone, TrendingUp, ArrowRight } from 'lucide-react';
import bocHouseboat from '../assets/boc-kerala-houseboat.jpg';
import bocJourneyWaterfront from '../assets/boc-journey-waterfront.jpg';

/**
 * BOCHowItWorks — "The BOC Journey" Executive Module
 * 1:1 Pixel-Perfect Recreation of User's Mockup (media_1789724251023.jpg)
 * 
 * Features:
 * - 100% natural, typed semantic HTML & Tailwind typography (no AI baked-in text)
 * - 5-Step Executive Roadmap: 01 Join, 02 Connect, 03 Collaborate, 04 Refer, 05 Grow
 * - Desktop Layout: 5 horizontal timeline cards with golden connector arrows
 * - Mobile Layout: Vertical stacked cards with left circular icon badges
 * - Handwritten accents: "Connect / Collaborate / Grow" & "Stronger Together"
 * - Authentic Kerala houseboat and sunset waterfront scenic backgrounds
 */
export default function BOCHowItWorks({ onOpenJoinModal }) {
  const steps = [
    {
      step: '01',
      title: 'Join',
      desc: 'Become a member and get access to your chapter.',
      icon: UserPlus
    },
    {
      step: '02',
      title: 'Connect',
      desc: 'Meet and build relationships with like-minded business owners and professionals.',
      icon: Users
    },
    {
      step: '03',
      title: 'Collaborate',
      desc: 'Work together on projects and opportunities.',
      icon: Handshake
    },
    {
      step: '04',
      title: 'Refer',
      desc: 'Share genuine referrals and create business opportunities.',
      icon: Megaphone
    },
    {
      step: '05',
      title: 'Grow',
      desc: 'Expand your network, create new opportunities and grow your business.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="how-it-works" className="relative w-full bg-[#FCFAF7] text-slate-800 overflow-hidden select-none border-t border-[#EADBBD]/50">
      
      {/* Delicate Gold Palm Leaf Watermarks in Corners */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 pointer-events-none opacity-20 overflow-hidden z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#C59B27] fill-none" strokeWidth="1.2">
          <path d="M180,0 Q130,80 70,110 Q20,130 0,140" />
          <path d="M180,0 Q150,60 120,70" />
          <path d="M170,10 Q145,80 90,95" />
          <path d="M155,25 Q135,100 80,120" />
          <path d="M140,40 Q120,120 70,145" />
          <path d="M120,60 Q105,140 60,165" />
          <path d="M100,80 Q90,160 50,185" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20">
        
        {/* =================================================================== */}
        {/* TOP HEADER SECTION (HEADLINE & SCENIC SUNSET WATERFRONT)            */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-10 lg:mb-14">
          
          {/* Left: Narrative & Title */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#C59B27]" />
              <span className="text-[11px] sm:text-xs font-cinzel font-bold tracking-[0.25em] text-[#B58920] uppercase">
                HOW IT WORKS
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-cinzel font-black tracking-tight text-[#081730] leading-[1.15] mb-3.5">
              The BOC <span className="font-serif italic font-bold text-[#C59B27] drop-shadow-[0_1px_2px_rgba(197,155,39,0.25)]">Journey</span>
            </h2>

            {/* Core Premise */}
            <p className="text-[15.5px] sm:text-[17px] font-semibold text-[#0F1E36] leading-snug mb-2.5">
              Simple steps. Meaningful connections.<br className="hidden sm:inline" /> Real opportunities.
            </p>

            {/* Narrative Paragraph */}
            <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed font-normal max-w-lg">
              Joining Business Owner's Circle is easy. Follow these simple steps and become part of a growing community of business owners and professionals.
            </p>
          </div>

          {/* Right: Sunset Chinese Fishing Nets & Handwritten Script */}
          <div className="lg:col-span-5 relative flex flex-col items-end justify-center min-h-[160px] sm:min-h-[200px]">
            
            {/* Kochi Sunset Waterfront Backdrop with Chinese Fishing Nets */}
            <div className="absolute top-0 right-0 w-full max-w-[340px] sm:max-w-[400px] h-[160px] sm:h-[200px] rounded-2xl overflow-hidden pointer-events-none opacity-90">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAF7] via-[#FCFAF7]/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF7] via-transparent to-transparent z-10" />
              <img 
                src={bocJourneyWaterfront} 
                alt="Kochi Sunset Waterfront with Chinese Fishing Nets"
                className="w-full h-full object-cover object-center contrast-[1.05] saturate-[1.1]"
              />
            </div>

            {/* Handwritten Signature Script: Connect / Collaborate / Grow */}
            <div className="relative z-20 mr-4 sm:mr-8 -rotate-6 select-none pt-2">
              <div className="font-serif italic text-2xl sm:text-3xl text-[#0B1E3F] font-bold tracking-wide leading-tight [text-shadow:_0_1px_4px_rgba(255,255,255,0.9)]">
                Connect<br />
                <span className="ml-3">Collaborate</span><br />
                <span className="ml-6">Grow</span>
              </div>
              {/* Gold underline flourish */}
              <svg className="w-28 sm:w-36 h-3 text-[#D4A338] -mt-1 ml-4" viewBox="0 0 120 12" fill="none">
                <path d="M2,9 Q60,1 118,6" stroke="#D4A338" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </div>

          </div>

        </div>


        {/* =================================================================== */}
        {/* 1. DESKTOP 5-STEP JOURNEY TIMELINE (>= lg screens)                  */}
        {/* =================================================================== */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative my-8 items-stretch max-w-6xl mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="relative flex flex-col">
                
                {/* Step Card */}
                <div className="relative h-full bg-white/90 backdrop-blur-sm rounded-2xl p-5 pt-9 border border-[#EADBBD]/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(212,163,56,0.18)] hover:border-[#D4A338] transition-all flex flex-col items-center text-center group">
                  
                  {/* Floating Circular Dark Navy Icon Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#03142F] border-2 border-[#D4A338] flex items-center justify-center text-[#FCE38A] shadow-[0_4px_14px_rgba(3,20,47,0.35)] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Step Number */}
                  <span className="text-[17px] font-cinzel font-black text-[#C59B27] mt-1 mb-1">
                    {item.step}
                  </span>

                  {/* Step Title */}
                  <h4 className="text-[15px] font-cinzel font-black text-[#081730] mb-2">
                    {item.title}
                  </h4>

                  {/* Step Description */}
                  <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Golden Arrow Connector to Next Step */}
                {idx < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-[#C59B27]">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                )}

              </div>
            );
          })}
        </div>


        {/* =================================================================== */}
        {/* 2. MOBILE & TABLET 5-STEP JOURNEY STACK (< lg screens)              */}
        {/* =================================================================== */}
        <div className="lg:hidden flex flex-col gap-3.5 my-6 max-w-md mx-auto">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step}
                className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-[#EADBBD]/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] active:border-[#D4A338] transition-all"
              >
                {/* Left Circular Badge */}
                <div className="w-12 h-12 rounded-full bg-[#03142F] border-2 border-[#D4A338] flex-shrink-0 flex items-center justify-center text-[#FCE38A] shadow-[0_3px_10px_rgba(3,20,47,0.25)]">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-cinzel font-black text-[#C59B27]">
                      {item.step}
                    </span>
                    <h4 className="text-sm font-cinzel font-black text-[#081730]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>


        {/* =================================================================== */}
        {/* CALL TO ACTION BUTTON                                               */}
        {/* =================================================================== */}
        <div className="flex justify-center mt-6 sm:mt-8 mb-8 sm:mb-12">
          <button
            onClick={onOpenJoinModal}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#041633] hover:bg-[#072454] active:scale-95 text-white font-bold text-xs uppercase tracking-widest shadow-[0_6px_22px_rgba(4,22,51,0.35)] hover:shadow-[0_8px_28px_rgba(4,22,51,0.5)] transition-all group cursor-pointer"
          >
            <span>Be Part of the BOC Journey</span>
            <ArrowRight className="w-4 h-4 text-[#FCE38A] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>


        {/* =================================================================== */}
        {/* BOTTOM KERALA HOUSEBOAT SCENE & "STRONGER TOGETHER" WATERMARK       */}
        {/* =================================================================== */}
        <div className="relative w-full flex flex-col sm:flex-row items-end justify-between pt-4 pb-2 border-t border-[#EADBBD]/40">
          
          {/* Bottom Left: Scenic Kerala Houseboat Cruising Calm River */}
          <div className="relative w-full sm:w-[55%] h-28 sm:h-36 overflow-hidden rounded-2xl pointer-events-none mb-4 sm:mb-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FCFAF7] z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF7]/40 to-transparent z-10" />
            <img 
              src={bocHouseboat} 
              alt="Traditional Kerala Houseboat along Palm Riverbank"
              className="w-full h-full object-cover object-left-bottom contrast-[1.04] saturate-[1.12]"
            />
          </div>

          {/* Bottom Right: "Stronger Together / BUSINESS • PEOPLE • POSSIBILITIES" */}
          <div className="flex flex-col items-end text-right select-none pr-2 sm:pr-4 pb-2">
            <span className="font-serif italic text-2xl sm:text-3xl text-[#0B1E3F] font-bold tracking-wide -rotate-2 [text-shadow:_0_1px_3px_rgba(255,255,255,0.9)]">
              Stronger Together
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] sm:text-[11px] font-cinzel font-bold tracking-[0.25em] text-[#B58920] uppercase">
                BUSINESS • PEOPLE • POSSIBILITIES
              </span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
