import React from 'react';
import { 
  Users, 
  Handshake, 
  TrendingUp, 
  Megaphone, 
  GraduationCap, 
  ShieldCheck, 
  Globe, 
  ArrowRight 
} from 'lucide-react';
import bocNetworkingHandshake from '../assets/boc-networking-handshake.jpg';
import bocHouseboatPalms from '../assets/boc-journey-houseboat-palms.jpg';
import bocLogoPng from '../assets/boc-logo.png';

/**
 * Palm Frond Botanical Vector Accent for Bottom-Right Corner
 */
function PalmCorner({ className }) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" stroke="currentColor">
      <path d="M140,150 Q100,80 10,20" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M120,130 Q90,105 70,115" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M100,110 Q75,85 55,95" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M80,90 Q55,65 35,75" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M60,70 Q40,45 20,55" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M110,140 Q85,125 75,138" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M90,120 Q65,105 55,118" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M70,100 Q45,85 35,98" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M50,80 Q25,65 15,78" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/**
 * BOCWhyBOC — "WHAT IS BOC?" & "WHY JOIN BOC?"
 * 1:1 Pixel-Perfect Recreation with Ultra-Luxury Boardroom Handshake Photography
 */
export default function BOCWhyBOC({ onOpenJoinModal }) {
  const whyJoinCards = [
    {
      title: 'EXPAND YOUR NETWORK',
      desc: 'Connect with business owners and professionals from different industries.',
      icon: Users
    },
    {
      title: 'GET REFERRALS',
      desc: 'Discover genuine business opportunities through trusted connections.',
      icon: Handshake
    },
    {
      title: 'COLLABORATE',
      desc: 'Build partnerships, projects, services and campaigns together.',
      icon: TrendingUp
    },
    {
      title: 'INCREASE YOUR VISIBILITY',
      desc: 'Showcase your business and strengthen your professional presence.',
      icon: Megaphone
    },
    {
      title: 'LEARN & GROW',
      desc: 'Share knowledge, experience, resources and practical business insights.',
      icon: GraduationCap
    },
    {
      title: 'BUILD CREDIBILITY',
      desc: 'Grow through trusted professional relationships and recommendations.',
      icon: ShieldCheck
    },
    {
      title: 'CREATE OPPORTUNITIES',
      desc: 'Turn meaningful connections into mutually beneficial business opportunities.',
      icon: Globe
    }
  ];

  return (
    <section 
      id="what-is-boc" 
      className="relative w-full bg-[#FAF8F5] text-slate-800 overflow-hidden select-none border-t border-[#EADBBD]/40"
    >
      <div id="why-boc" className="absolute top-0" />

      {/* ===================================================================== */}
      {/* PART 1: "WHAT IS BOC?" SECTION                                        */}
      {/* ===================================================================== */}
      <div className="relative w-full overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 min-h-[500px] lg:min-h-[540px]">
        
        {/* Desktop Top-Right Feature (Ultra-Luxury Boardroom Handshake) */}
        <div className="hidden lg:block absolute top-0 right-0 w-[52%] xl:w-[54%] 2xl:w-[52%] h-[540px] pointer-events-none overflow-hidden z-0">
          <img 
            src={bocNetworkingHandshake} 
            alt="BOC Business Executives Shaking Hands in Luxury Boardroom"
            className="w-full h-full object-cover object-[center_35%] contrast-[1.03] brightness-[1.01]"
          />
          {/* Subtle soft left feather strip */}
          <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/50 to-transparent pointer-events-none" />
          {/* Soft bottom edge feathering */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
              
              {/* Section Kicker */}
              <div className="flex items-center gap-3 mb-3">
                <img src={bocLogoPng} alt="BOC Emblem" className="w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-sm" />
                <span className="w-6 h-[1.5px] bg-[#C29023]" />
                <span className="text-[11px] sm:text-xs font-cinzel font-bold tracking-[0.25em] text-[#B58920] uppercase">
                  WHAT IS BOC?
                </span>
                <span className="w-6 h-[1.5px] bg-[#C29023]" />
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-cinzel font-black tracking-tight text-[#081730] leading-[1.18] mb-5">
                MORE THAN A NETWORK.<br />
                <span className="text-[#C29023] font-bold drop-shadow-[0_1px_2px_rgba(194,144,35,0.25)]">
                  IT'S A GROWTH ECOSYSTEM.
                </span>
              </h2>

              {/* Mobile Handshake Image (visible on mobile only, crystal clear) */}
              <div className="lg:hidden w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-[#E5D7B5]/80 shadow-md relative">
                <img 
                  src={bocNetworkingHandshake} 
                  alt="BOC Business Executives Shaking Hands in Luxury Boardroom" 
                  className="w-full h-full object-cover object-[center_30%] contrast-[1.02] brightness-[1.01]"
                />
              </div>

              {/* Narrative Paragraphs */}
              <div className="space-y-4 max-w-xl text-[14px] sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                <p>
                  Business Owner's Circle – Kochi is a professional business networking and collaboration community created for entrepreneurs and professionals who believe that business growth becomes stronger when opportunities are shared.
                </p>
                <p>
                  Our community brings together people from different industries to build meaningful professional relationships, generate referrals, discover collaboration opportunities, and support each other's business journey.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ===================================================================== */}
      {/* ORGANIC CURVED WAVE TRANSITION DIVIDER                                */}
      {/* ===================================================================== */}
      <div className="relative w-full overflow-hidden leading-none z-10 pointer-events-none -mt-4 sm:-mt-6">
        <svg 
          className="w-full h-10 sm:h-14 text-[#FAF8F5] fill-current" 
          viewBox="0 0 1440 60" 
          preserveAspectRatio="none"
        >
          <path d="M0,0 Q360,50 720,25 Q1080,0 1440,35 L1440,60 L0,60 Z" />
        </svg>
      </div>


      {/* ===================================================================== */}
      {/* PART 2: "WHY JOIN BOC?" SECTION                                       */}
      {/* ===================================================================== */}
      <div className="relative w-full overflow-hidden pt-6 sm:pt-10 pb-20 sm:pb-28">
        
        {/* Bottom Panoramic Backwaters & Houseboat Landscape Feature */}
        <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 pointer-events-none overflow-hidden z-0">
          <img 
            src={bocHouseboatPalms} 
            alt="Kerala Backwaters and Traditional Houseboat"
            className="w-full h-full object-cover object-bottom opacity-75 contrast-[1.02] saturate-[1.05]"
          />
          {/* Gentle top fade into the cream canvas */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/10 via-[#FAF8F5]/70 to-[#FAF8F5]" />
        </div>

        {/* Bottom-Right Corner Palm Fronds Accent */}
        <div className="absolute bottom-1 right-1 pointer-events-none opacity-30 text-[#D4A536] z-0">
          <PalmCorner className="w-36 sm:w-52 h-36 sm:h-52 transform rotate-12" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          
          {/* Section Kicker */}
          <div className="flex items-center justify-center gap-3 mb-8 sm:mb-11">
            <span className="w-8 h-[1.5px] bg-[#C29023]" />
            <span className="text-[11px] sm:text-xs font-cinzel font-bold tracking-[0.25em] text-[#B58920] uppercase">
              WHY JOIN BOC?
            </span>
            <span className="w-8 h-[1.5px] bg-[#C29023]" />
          </div>

          {/* 7 Value Cards in a Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3.5 xl:gap-4 items-stretch max-w-7xl mx-auto mb-9">
            {whyJoinCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className="relative h-full bg-[#FCFAF7]/95 backdrop-blur-sm rounded-2xl p-4 pt-5 pb-5 border border-[#E5D7B5] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(212,163,56,0.18)] hover:border-[#D4A536] transition-all flex flex-col items-center text-center group"
                >
                  {/* Circular Icon Medallion */}
                  <div className="w-12 h-12 rounded-full bg-[#06162E] border border-[#D4A536] flex items-center justify-center text-[#F9D678] shadow-sm mb-3.5 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Card Title */}
                  <h4 className="text-[11.5px] sm:text-[12px] font-cinzel font-bold text-[#081730] leading-snug mb-2 min-h-[34px] flex items-center justify-center uppercase tracking-wide">
                    {card.title}
                  </h4>

                  {/* Card Description */}
                  <p className="text-[11px] text-slate-500 leading-snug font-normal">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Centered CTA Pill Button */}
          <div className="flex justify-center mt-7 relative z-20">
            <button
              onClick={onOpenJoinModal}
              className="inline-flex items-center gap-2.5 px-9 py-3.5 rounded-full bg-[#081730] hover:bg-[#0f284e] text-white font-bold text-xs tracking-widest uppercase border border-[#D4A536]/40 shadow-[0_6px_22px_rgba(8,23,48,0.3)] hover:shadow-[0_8px_28px_rgba(8,23,48,0.45)] active:scale-95 transition-all group cursor-pointer"
            >
              <img src={bocLogoPng} alt="BOC Emblem" className="w-5 h-5 object-contain" />
              <span>JOIN THE CIRCLE</span>
              <ArrowRight className="w-4 h-4 text-[#F9D678] group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
