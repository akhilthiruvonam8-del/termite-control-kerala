import React from 'react';
import { 
  Users, 
  Handshake, 
  TrendingUp, 
  Megaphone, 
  GraduationCap, 
  Star, 
  Globe, 
  ArrowRight 
} from 'lucide-react';
import bocNetworkingTerrace from '../assets/boc-networking-terrace.jpg';

/**
 * Traditional Kerala Houseboat (Kettuvallam) Line Art Sketch Watermark
 */
function HouseboatWatermark({ className }) {
  return (
    <svg className={className} viewBox="0 0 280 180" fill="none" stroke="currentColor">
      {/* Palm trees on bank */}
      <path d="M15,120 Q30,70 45,35" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M45,35 Q60,25 75,32" strokeWidth="1.2" />
      <path d="M45,35 Q30,22 15,25" strokeWidth="1.2" />
      <path d="M45,35 Q50,15 42,5" strokeWidth="1.2" />
      <path d="M45,35 Q30,35 20,48" strokeWidth="1.2" />
      <path d="M45,35 Q60,45 68,55" strokeWidth="1.2" />
      
      {/* Second palm tree */}
      <path d="M40,125 Q55,80 65,50" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M65,50 Q80,42 92,50" strokeWidth="1.2" />
      <path d="M65,50 Q52,38 40,42" strokeWidth="1.2" />
      <path d="M65,50 Q70,30 62,20" strokeWidth="1.2" />

      {/* Houseboat Hull (Kettuvallam) */}
      <path d="M50,135 Q140,145 230,130 Q245,125 255,115 Q220,125 140,125 Q65,125 50,135 Z" strokeWidth="1.5" />
      <path d="M35,122 Q50,135 65,135" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Arched Thatched Roof */}
      <path d="M70,125 Q75,100 135,98 Q200,98 215,125" strokeWidth="1.5" />
      <path d="M80,125 Q85,103 135,101 Q190,101 205,125" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M90,125 Q95,106 135,104 Q180,104 195,125" strokeWidth="1" strokeDasharray="3 3" />
      
      {/* Windows on Houseboat */}
      <rect x="95" y="108" width="10" height="12" rx="1.5" strokeWidth="1" />
      <rect x="115" y="108" width="10" height="12" rx="1.5" strokeWidth="1" />
      <rect x="135" y="108" width="10" height="12" rx="1.5" strokeWidth="1" />
      <rect x="155" y="108" width="10" height="12" rx="1.5" strokeWidth="1" />
      <rect x="175" y="108" width="10" height="12" rx="1.5" strokeWidth="1" />

      {/* Water Ripples */}
      <path d="M10,145 Q60,143 110,145" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M70,152 Q150,150 230,152" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M30,160 Q110,158 190,160" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M120,168 Q180,166 250,168" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

/**
 * BOCWhyBOC — "WHAT IS BOC?" & "WHY JOIN BOC?" Executive Module
 * 1:1 Pixel-Perfect Recreation of Master Reference (media_1789729171746.jpg)
 */
export default function BOCWhyBOC({ onOpenJoinModal }) {
  const whyJoinCards = [
    {
      title: 'Expand Your Network',
      desc: 'Connect with like-minded business owners and professionals.',
      icon: Users
    },
    {
      title: 'Get Referrals',
      desc: 'Discover new opportunities through trusted recommendations.',
      icon: Handshake
    },
    {
      title: 'Collaborate',
      desc: 'Work together on projects and partnerships.',
      icon: TrendingUp
    },
    {
      title: 'Increase Your Visibility',
      desc: 'Showcase your business to a wider audience.',
      icon: Megaphone
    },
    {
      title: 'Learn & Grow',
      desc: 'Join events, workshops and knowledge sharing sessions.',
      icon: GraduationCap
    },
    {
      title: 'Build Credibility',
      desc: 'Be part of a trusted and professional community.',
      icon: Star
    },
    {
      title: 'Create Opportunities',
      desc: 'Turn conversations into long-term business success.',
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
      <div className="relative w-full overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 min-h-[500px] lg:min-h-[530px]">
        
        {/* Desktop Top-Right Background Image Feature (Crystal Clear, Zero Milky Wash) */}
        <div className="hidden lg:block absolute top-0 right-0 w-[50%] xl:w-[52%] 2xl:w-[50%] h-[530px] pointer-events-none overflow-hidden z-0">
          <img 
            src={bocNetworkingTerrace} 
            alt="BOC Business Professionals Networking on Waterfront Terrace"
            className="w-full h-full object-cover object-[25%_center] contrast-[1.03] brightness-[1.01]"
          />
          {/* Subtle soft left feather strip (strictly on the far left margin, NOT over the people) */}
          <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/50 to-transparent pointer-events-none" />
          {/* Soft bottom feather strip */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
              
              {/* Section Kicker */}
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[1.5px] bg-[#C29023]" />
                <span className="text-[11px] sm:text-xs font-cinzel font-bold tracking-[0.25em] text-[#B58920] uppercase">
                  WHAT IS BOC?
                </span>
                <span className="w-8 h-[1.5px] bg-[#C29023]" />
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-cinzel font-black tracking-tight text-[#081730] leading-[1.18] mb-4">
                More Than a Network.<br />
                <span className="text-[#C29023] font-bold drop-shadow-[0_1px_2px_rgba(194,144,35,0.25)]">
                  It's a Growth Ecosystem.
                </span>
              </h2>

              {/* Narrative Paragraph */}
              <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed font-normal max-w-xl mb-7">
                Business Owner's Circle (BOC) is a professional community where business owners, entrepreneurs and professionals connect, collaborate, exchange referrals and create meaningful business opportunities.
              </p>

              {/* Mobile Terrace Image (visible on mobile only, 100% crystal clear) */}
              <div className="lg:hidden w-full h-60 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-[#E5D7B5]/80 shadow-md relative">
                <img 
                  src={bocNetworkingTerrace} 
                  alt="BOC Professionals on Terrace" 
                  className="w-full h-full object-cover object-center contrast-[1.03] brightness-[1.01]"
                />
              </div>

              {/* 3 Value Props Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2 pb-2 w-full max-w-xl">
                
                {/* 1. Real People */}
                <div className="flex items-start gap-3">
                  <Users className="w-7 h-7 text-[#C29023] stroke-[1.8] flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <h4 className="text-[14px] font-bold text-[#081730] leading-snug">
                      Real People
                    </h4>
                    <p className="text-[12px] text-slate-500 font-normal leading-tight mt-0.5">
                      Not just contacts
                    </p>
                  </div>
                </div>

                {/* 2. Meaningful Connections */}
                <div className="flex items-start gap-3">
                  <Handshake className="w-7 h-7 text-[#C29023] stroke-[1.8] flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <h4 className="text-[14px] font-bold text-[#081730] leading-snug">
                      Meaningful Connections
                    </h4>
                    <p className="text-[12px] text-slate-500 font-normal leading-tight mt-0.5">
                      Not just introductions
                    </p>
                  </div>
                </div>

                {/* 3. Business Growth */}
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-7 h-7 text-[#C29023] stroke-[1.8] flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <h4 className="text-[14px] font-bold text-[#081730] leading-snug">
                      Business Growth
                    </h4>
                    <p className="text-[12px] text-slate-500 font-normal leading-tight mt-0.5">
                      For everyone
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ===================================================================== */}
      {/* PART 2: "WHY JOIN BOC?" SECTION                                       */}
      {/* ===================================================================== */}
      <div className="relative w-full overflow-hidden pt-8 sm:pt-12 pb-16 sm:pb-24 border-t border-[#EADBBD]/30">
        
        {/* Bottom-Left Curved Champagne Wave Accent */}
        <svg 
          className="absolute bottom-0 left-0 w-80 sm:w-[480px] h-32 sm:h-48 pointer-events-none text-[#E8D6B0]/30 z-0" 
          viewBox="0 0 500 200" 
          fill="none"
        >
          <path d="M0,200 L0,120 Q180,140 320,80 Q420,35 500,0 L500,200 Z" fill="currentColor" />
        </svg>

        {/* Bottom-Left Houseboat & Palms Line Sketch Watermark */}
        <div className="absolute bottom-2 left-2 sm:left-4 pointer-events-none opacity-25 sm:opacity-35 text-[#C29023] z-0">
          <HouseboatWatermark className="w-48 sm:w-64 h-32 sm:h-44" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          
          {/* Section Kicker */}
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-8 h-[1.5px] bg-[#C29023]" />
            <span className="text-[11px] sm:text-xs font-cinzel font-bold tracking-[0.25em] text-[#B58920] uppercase">
              WHY JOIN BOC?
            </span>
            <span className="w-8 h-[1.5px] bg-[#C29023]" />
          </div>

          {/* Main Headline */}
          <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-cinzel font-black tracking-tight text-[#081730] mb-3">
            Be Part of Something Bigger
          </h3>

          {/* Narrative Subtitle */}
          <p className="text-[14px] sm:text-[15px] text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12 font-normal">
            Join a community that believes in collaboration, trust and shared success.<br className="hidden sm:inline" />
            At BOC, you don't just build your business — you build lasting relationships.
          </p>

          {/* 7 Value Cards in a Row (Desktop: 7 Columns, Mobile: 2-3 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3.5 xl:gap-4 items-stretch max-w-7xl mx-auto mb-10">
            {whyJoinCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className="relative h-full bg-[#FCFAF7]/90 backdrop-blur-sm rounded-2xl p-4 pt-5 pb-5 border border-[#E5D7B5] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(212,163,56,0.18)] hover:border-[#D4A536] transition-all flex flex-col items-center text-center group"
                >
                  {/* Circular Icon Medallion */}
                  <div className="w-12 h-12 rounded-full bg-[#06162E] border border-[#D4A536] flex items-center justify-center text-[#F9D678] shadow-sm mb-3.5 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Card Title */}
                  <h4 className="text-[13px] sm:text-[13.5px] font-cinzel font-bold text-[#081730] leading-snug mb-1.5 min-h-[36px] flex items-center justify-center">
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

          {/* Bottom CTA Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#081730] hover:bg-[#0f284e] text-white font-bold text-xs tracking-widest uppercase shadow-[0_6px_20px_rgba(8,23,48,0.25)] hover:shadow-[0_8px_28px_rgba(8,23,48,0.4)] active:scale-95 transition-all group cursor-pointer"
            >
              <span>Explore the BOC Journey</span>
              <ArrowRight className="w-4 h-4 text-[#F9D678] group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
