import React from 'react';
import { UserPlus, Users, Handshake, Megaphone, TrendingUp, ArrowRight } from 'lucide-react';
import bocNetsSkyline from '../assets/boc-journey-nets-skyline.jpg';
import bocHouseboatPalms from '../assets/boc-journey-houseboat-palms.jpg';

/**
 * Palm Frond Botanical Vector Accent
 */
function PalmFrond({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" stroke="currentColor">
      <path d="M10,110 Q40,40 110,10" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M25,85 Q40,65 55,60" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M35,70 Q55,50 75,48" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M50,55 Q70,35 95,35" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M68,40 Q85,25 110,24" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M30,95 Q50,90 65,95" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M45,80 Q70,75 88,82" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M60,65 Q85,60 105,68" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M78,50 Q98,45 115,52" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * BOCHowItWorks — "The BOC Journey" Executive Module
 * 1:1 Pixel-Perfect Recreation of Master Reference (media_1789724251023.jpg)
 *
 * Visual Highlights:
 * - Luxury warm ivory/cream background (#FAF8F5)
 * - Top-Right: Kochi skyline with Chinese fishing nets on water at sunset (feathered edges)
 * - Top-Left: Section kicker, "The BOC Journey" heading, premise, and narrative
 * - Angled Script Accent: "Connect / Collaborate / Grow" with golden flourish stroke
 * - Center: 5 clean horizontal cards (desktop) with dark navy & gold medallion badges and connecting golden arrows
 * - Centered dark navy pill button: "Be Part of the BOC Journey →"
 * - Bottom-Left: Kerala backwaters with coconut palms & traditional houseboat (feathered edges)
 * - Bottom-Right: "Stronger Together" script + "BUSINESS • PEOPLE • POSSIBILITIES" in gold
 * - Mobile: Responsive layout matching the smartphone mockup in media_1789724251023.jpg
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
    <section 
      id="how-it-works" 
      className="relative w-full bg-[#FAF8F5] text-slate-800 overflow-hidden select-none border-t border-[#EADBBD]/40"
    >
      
      {/* ===================================================================== */}
      {/* 1. CORNER PALM FROND BOTANICAL WATERMARKS                             */}
      {/* ===================================================================== */}
      <div className="absolute top-2 left-2 pointer-events-none opacity-25 text-[#D4A536]">
        <PalmFrond className="w-28 sm:w-36 h-28 sm:h-36 transform -rotate-12" />
      </div>
      <div className="absolute top-2 right-2 pointer-events-none opacity-20 text-[#D4A536]">
        <PalmFrond className="w-32 sm:w-44 h-32 sm:h-44 transform scale-x-[-1] rotate-12" />
      </div>
      <div className="absolute bottom-2 right-2 pointer-events-none opacity-20 text-[#D4A536]">
        <PalmFrond className="w-28 sm:w-36 h-28 sm:h-36 transform rotate-45" />
      </div>


      {/* ===================================================================== */}
      {/* 2. DESKTOP SCENIC FEATURE ARTWORK INSETS (media_1789724251023.jpg)   */}
      {/* ===================================================================== */}
      
      {/* Top-Right: Kochi Skyline + Chinese Fishing Nets on Water */}
      <div className="hidden lg:block absolute top-0 right-0 w-[48%] xl:w-[50%] h-[380px] pointer-events-none overflow-hidden z-0">
        <img 
          src={bocNetsSkyline} 
          alt="Kochi Skyline and Chinese Fishing Nets at Sunset"
          className="w-full h-full object-cover object-left-bottom contrast-[1.03] saturate-[1.08]"
        />
        {/* Soft edge feathering into cream background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/10 to-transparent" />
        <div className="absolute top-0 right-0 w-full h-10 bg-gradient-to-b from-[#FAF8F5] to-transparent" />
      </div>

      {/* Bottom-Left: Kerala Backwaters + Houseboat + Coconut Palms */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-[48%] xl:w-[50%] h-[340px] pointer-events-none overflow-hidden z-0">
        <img 
          src={bocHouseboatPalms} 
          alt="Kerala Backwaters and Traditional Houseboat"
          className="w-full h-full object-cover object-right-bottom contrast-[1.03] saturate-[1.08]"
        />
        {/* Soft edge feathering into cream background */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#FAF8F5] to-transparent" />
      </div>


      {/* ===================================================================== */}
      {/* 3. MAIN CONTENT CONTAINER                                            */}
      {/* ===================================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
        
        {/* TOP HEADER ROW: Title & Narrative + Angled Cursive Script */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-10 lg:mb-12">
          
          {/* Left: Section Kicker, Main Heading, Premise, Description */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline / Kicker */}
            <div className="flex items-center gap-3 mb-2.5">
              <span className="w-8 h-[2px] bg-[#C29023]" />
              <span className="text-[11px] sm:text-xs font-cinzel font-bold tracking-[0.25em] text-[#B58920] uppercase">
                HOW IT WORKS
              </span>
            </div>

            {/* Main Heading: "The BOC Journey" */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-cinzel font-black tracking-tight text-[#081730] leading-[1.15] mb-3">
              The BOC <span className="font-serif italic font-bold text-[#C29023] drop-shadow-[0_1px_2px_rgba(194,144,35,0.25)]">Journey</span>
            </h2>

            {/* Premise */}
            <p className="text-[15.5px] sm:text-[17px] font-bold text-[#0E1E38] leading-snug mb-2.5">
              Simple steps. Meaningful connections.<br className="hidden sm:inline" /> Real opportunities.
            </p>

            {/* Narrative Paragraph */}
            <p className="text-[13px] sm:text-[14px] text-slate-600 leading-relaxed font-normal max-w-lg">
              Joining Business Owner's Circle is easy. Follow these simple steps and become part of a growing community of business owners and professionals.
            </p>
          </div>

          {/* Right (Desktop): Angled Handwritten Cursive Accent */}
          <div className="hidden lg:flex lg:col-span-5 relative flex-col items-end justify-center pt-3 select-none">
            <div className="relative z-20 mr-12 -rotate-6">
              <div className="font-serif italic text-2xl sm:text-[32px] text-[#0B1E3F] font-bold tracking-wide leading-tight [text-shadow:_0_1px_3px_rgba(255,255,255,0.95)]">
                Connect<br />
                <span className="ml-4">Collaborate</span><br />
                <span className="ml-8">Grow</span>
              </div>
              {/* Gold swoosh underline flourish */}
              <svg className="w-32 sm:w-40 h-3 text-[#D4A536] -mt-1 ml-6" viewBox="0 0 120 12" fill="none">
                <path d="M2,9 Q60,1 118,6" stroke="#D4A536" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </div>
          </div>

        </div>


        {/* =================================================================== */}
        {/* MOBILE SUB-HEADER (Script on Left + Skyline Visual on Right)        */}
        {/* =================================================================== */}
        <div className="lg:hidden flex items-center justify-between gap-3 my-4 mb-8">
          {/* Left: Angled Script */}
          <div className="relative -rotate-6 select-none pl-1 flex-shrink-0">
            <div className="font-serif italic text-lg sm:text-xl text-[#0B1E3F] font-bold leading-tight">
              Connect<br />
              <span className="ml-2">Collaborate</span><br />
              <span className="ml-4">Grow</span>
            </div>
            <svg className="w-24 h-2.5 text-[#D4A536] -mt-0.5 ml-2" viewBox="0 0 100 10" fill="none">
              <path d="M2,7 Q50,1 98,5" stroke="#D4A536" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Right: Skyline & Chinese Fishing Nets image with soft border */}
          <div className="w-[58%] h-28 sm:h-36 rounded-2xl overflow-hidden relative shadow-sm border border-[#E5D7B5]/80 flex-shrink-0">
            <img 
              src={bocNetsSkyline} 
              alt="Kochi Skyline and Chinese Fishing Nets" 
              className="w-full h-full object-cover contrast-[1.03] saturate-[1.08]" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/50 via-transparent to-transparent" />
          </div>
        </div>


        {/* =================================================================== */}
        {/* 4. DESKTOP 5-STEP JOURNEY CARDS (>= lg screens)                     */}
        {/* =================================================================== */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative my-10 items-stretch max-w-6xl mx-auto z-10">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="relative flex flex-col">
                
                {/* Step Card */}
                <div className="relative h-full bg-[#FCFAF7]/95 backdrop-blur-sm rounded-2xl p-5 pt-9 border border-[#E5D7B5] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(212,163,56,0.18)] hover:border-[#D4A536] transition-all flex flex-col items-center text-center group">
                  
                  {/* Floating Circular Dark Navy Icon Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#06162E] border-2 border-[#D4A536] flex items-center justify-center text-[#F9D678] shadow-[0_4px_14px_rgba(6,22,46,0.3)] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Step Number */}
                  <span className="text-[17px] font-cinzel font-black text-[#C29023] mt-1 mb-1">
                    {item.step}
                  </span>

                  {/* Step Title */}
                  <h4 className="text-[15px] font-cinzel font-black text-[#081730] mb-2">
                    {item.title}
                  </h4>

                  {/* Step Description */}
                  <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Golden Arrow Connector to Next Step */}
                {idx < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-[#C29023]">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                )}

              </div>
            );
          })}
        </div>


        {/* =================================================================== */}
        {/* 5. MOBILE 5-STEP JOURNEY CARDS (< lg screens)                       */}
        {/* =================================================================== */}
        <div className="lg:hidden flex flex-col gap-3.5 my-6 max-w-md mx-auto z-10 relative">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step}
                className="flex items-center gap-4 bg-[#FCFAF7]/95 backdrop-blur-sm rounded-2xl p-4 border border-[#E5D7B5] shadow-[0_2px_10px_rgba(0,0,0,0.03)] active:border-[#D4A536] transition-all"
              >
                {/* Left Circular Badge */}
                <div className="w-12 h-12 rounded-full bg-[#06162E] border-2 border-[#D4A536] flex-shrink-0 flex items-center justify-center text-[#F9D678] shadow-[0_3px_10px_rgba(6,22,46,0.25)]">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-cinzel font-black text-[#C29023]">
                      {item.step}
                    </span>
                    <h4 className="text-sm font-cinzel font-black text-[#081730]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>


        {/* =================================================================== */}
        {/* 6. CALL TO ACTION PILL BUTTON                                       */}
        {/* =================================================================== */}
        <div className="flex justify-center mt-7 sm:mt-9 mb-8 sm:mb-12 relative z-10">
          <button
            onClick={onOpenJoinModal}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#081730] hover:bg-[#0f284e] active:scale-95 text-white font-bold text-xs uppercase tracking-widest shadow-[0_6px_22px_rgba(8,23,48,0.25)] hover:shadow-[0_8px_28px_rgba(8,23,48,0.4)] transition-all group cursor-pointer"
          >
            <span>Be Part of the BOC Journey</span>
            <ArrowRight className="w-4 h-4 text-[#F9D678] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>


        {/* =================================================================== */}
        {/* 7. DESKTOP BOTTOM SIGN-OFF ("Stronger Together")                    */}
        {/* =================================================================== */}
        <div className="hidden lg:flex relative w-full items-end justify-end pt-6 pb-2 z-10">
          <div className="flex flex-col items-end text-right select-none pr-4">
            <span className="font-serif italic text-3xl text-[#0B1E3F] font-bold tracking-wide -rotate-2 [text-shadow:_0_1px_3px_rgba(255,255,255,0.95)]">
              Stronger Together
            </span>
            <svg className="w-36 h-2.5 text-[#D4A536] -mt-1 mr-1" viewBox="0 0 120 10" fill="none">
              <path d="M2,7 Q60,1 118,5" stroke="#D4A536" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10.5px] font-cinzel font-bold tracking-[0.25em] text-[#B58920] uppercase">
                BUSINESS • PEOPLE • POSSIBILITIES
              </span>
            </div>
          </div>
        </div>


        {/* =================================================================== */}
        {/* 8. MOBILE BOTTOM VISUAL (Houseboat + Palms + Sign-off)              */}
        {/* =================================================================== */}
        <div className="lg:hidden relative w-full h-40 mt-6 rounded-2xl overflow-hidden border border-[#E5D7B5]/80 shadow-sm z-10">
          <img 
            src={bocHouseboatPalms} 
            alt="Kerala Houseboat and Palms" 
            className="w-full h-full object-cover contrast-[1.03] saturate-[1.08]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-[#FAF8F5]/80" />
          
          <div className="absolute bottom-3 right-4 flex flex-col items-end text-right select-none">
            <span className="font-serif italic text-xl text-white font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Stronger Together
            </span>
            <span className="text-[9.5px] font-cinzel font-bold tracking-[0.25em] text-[#F9D678] uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mt-0.5">
              BUSINESS • PEOPLE • POSSIBILITIES
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
