import React from 'react';
import { 
  Users, 
  Handshake, 
  TrendingUp, 
  Sparkles, 
  Star,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import networkingHeroImg from '../assets/boc-networking-referrals-hero.jpg';
import bocLogoPng from '../assets/boc-logo.png';

/**
 * BOCNetworkingReferrals — "Networking & Referrals: Real Connections. Big Opportunities."
 * Exact 1:1 Recreation of Master Reference Poster (media_1789819361897.jpg)
 */
export default function BOCNetworkingReferrals({ onOpenJoinModal }) {
  const pillars = [
    {
      id: 'expand-network',
      icon: Users,
      title: 'Expand Your Network',
      description: 'Meet like-minded business owners, professionals and industry leaders.',
    },
    {
      id: 'trusted-referrals',
      icon: Handshake,
      title: 'Get Trusted Referrals',
      description: 'Access genuine referrals for your products, services and business needs.',
    },
    {
      id: 'business-opportunities',
      icon: TrendingUp,
      title: 'Create Business Opportunities',
      description: 'Turn meaningful connections into long-term partnerships and collaborations.',
    },
    {
      id: 'lasting-relationships',
      icon: ShieldCheck,
      title: 'Build Lasting Relationships',
      description: 'Be part of a supportive community that grows together.',
    },
    {
      id: 'grow-together',
      icon: Star,
      title: 'Grow Together',
      description: 'More referrals. More customers. More success.',
    },
  ];

  return (
    <section 
      id="referrals" 
      className="relative w-full bg-[#FAF8F5] text-slate-900 overflow-hidden select-none py-16 sm:py-20 lg:py-24 border-t border-[#EADBBD]/60"
    >
      {/* Background Soft Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5E6BE]/30 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5E6BE]/25 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ===================================================================== */}
        {/* 1. TOP BAR: BOC BRANDING & CONNECT • REFER • GROW                      */}
        {/* ===================================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#EADBBD]/70">
          
          {/* Left: BOC Logo + Divider + Subtext */}
          <div className="flex items-center gap-3.5">
            <img 
              src={bocLogoPng} 
              alt="BOC Logo" 
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-sm" 
            />
            <div className="h-9 w-[1.5px] bg-[#B57D2B]/50" />
            <div className="flex flex-col text-[#0A192F] tracking-[0.18em] leading-tight text-[10px] sm:text-[11px] font-cinzel font-bold">
              <span>BUSINESS</span>
              <span>OPPORTUNITIES</span>
              <span className="text-[#B57D2B]">CONNECTIONS</span>
            </div>
          </div>

          {/* Right: CONNECT • REFER • GROW */}
          <div className="text-[#0A192F] text-xs sm:text-sm font-cinzel font-bold tracking-[0.3em] uppercase flex items-center gap-2">
            <span>CONNECT</span>
            <span className="text-[#B57D2B] font-bold">•</span>
            <span>REFER</span>
            <span className="text-[#B57D2B] font-bold">•</span>
            <span className="text-[#B57D2B]">GROW</span>
          </div>
        </div>


        {/* ===================================================================== */}
        {/* 2. MAIN SHOWCASE: LEFT HEADLINE/NARRATIVE + RIGHT EXECUTIVE PHOTO    */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-16">
          
          {/* Left Column (5 Cols): Typography & Message */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            
            {/* Kicker */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-[1.5px] w-6 bg-[#B57D2B]" />
              <span className="text-[#B57D2B] text-xs sm:text-[13px] font-bold tracking-[0.25em] uppercase font-cinzel">
                NETWORKING & REFERRALS
              </span>
              <div className="h-[1.5px] w-6 bg-[#B57D2B]" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-bold tracking-tight leading-[1.08] mb-5">
              <span className="text-[#0A192F] block">Real Connections.</span>
              <span className="text-[#B57D2B] block">Big Opportunities.</span>
            </h2>

            {/* Narrative Description */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              At BOC, we bring together ambitious business owners, professionals and industry leaders — creating a powerful network where trust leads to referrals, and referrals lead to real business growth.
            </p>

            {/* Script Signature & Underline */}
            <div className="relative inline-block mb-8">
              <span className="font-serif italic text-2xl sm:text-3xl text-[#0A192F] font-bold tracking-wide">
                Connect <span className="text-[#B57D2B]">•</span> Refer <span className="text-[#B57D2B]">•</span> Grow
              </span>
              <svg className="w-full h-3 text-[#B57D2B] mt-1" viewBox="0 0 240 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 9C50 3 180 1 238 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Direct Action Button */}
            <div>
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#07172C] to-[#0E2849] hover:from-[#B57D2B] hover:to-[#966620] text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-300 border border-[#D4AF37]/50 group cursor-pointer"
              >
                <span>Join Our Exclusive Network</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column (7 Cols): Executive Handshake Photo with Script Overlay */}
          <div className="lg:col-span-7 relative">
            
            {/* Visual Frame */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(10,25,47,0.18)] border-2 border-[#EADBBD]">
              <img 
                src={networkingHeroImg} 
                alt="BOC Business Owners Handshake and Networking in Kerala" 
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
              />
              
              {/* Soft warm sun flare overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Script Overlay: "Your Network is Your Net Worth" */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-right z-10 pointer-events-none">
                <div className="transform -rotate-6">
                  <span className="font-serif italic font-bold text-xl sm:text-2xl md:text-3xl text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] tracking-wide block">
                    Your Network
                  </span>
                  <span className="font-serif italic font-bold text-xl sm:text-2xl md:text-3xl text-[#F9D678] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] tracking-wide block">
                    is Your Net Worth
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Gold Corner Emblem */}
            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#07172C] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg hidden sm:flex">
              <Sparkles className="w-5 h-5 text-[#F9D678]" />
            </div>
          </div>

        </div>


        {/* ===================================================================== */}
        {/* 3. THE 5 BOTTOM FEATURE CARDS (1:1 with Master Poster)                */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mb-12 sm:mb-14 items-stretch">
          {pillars.map((item) => {
            const Icon = item.icon;

            return (
              <div 
                key={item.id}
                className="group relative bg-white/95 hover:bg-white backdrop-blur-sm rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center border border-[#EADBBD] hover:border-[#B57D2B] shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_rgba(181,125,43,0.16)] transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Circular Icon with Gold Border */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#07172C] border-2 border-[#D4AF37] flex items-center justify-center text-[#F9D678] mb-4 shadow-md group-hover:scale-110 group-hover:bg-[#0B2548] transition-all duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                </div>

                {/* Card Title */}
                <h3 className="font-serif font-bold text-base sm:text-[17px] text-[#0A192F] group-hover:text-[#B57D2B] transition-colors leading-snug mb-2.5">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Bottom subtle gold indicator */}
                <div className="w-6 h-[2px] bg-[#EADBBD] group-hover:bg-[#B57D2B] group-hover:w-12 transition-all duration-300 mt-4" />
              </div>
            );
          })}
        </div>


        {/* ===================================================================== */}
        {/* 4. BOTTOM WAVE BANNER: STRONGER NETWORKS | GREATER REFERRALS | ...    */}
        {/* ===================================================================== */}
        <div className="relative bg-[#07172C] rounded-2xl sm:rounded-3xl p-5 sm:p-6 px-6 sm:px-10 border border-[#D4AF37]/50 shadow-2xl overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-radial from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />

          {/* Left Text: STRONGER NETWORKS | GREATER REFERRALS | LASTING GROWTH */}
          <div className="relative z-10 flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-4 text-center sm:text-left">
            <span className="text-[11px] sm:text-xs font-cinzel font-bold text-white tracking-[0.2em] uppercase">
              STRONGER NETWORKS
            </span>
            <span className="text-[#D4AF37] font-bold text-xs sm:text-sm">|</span>
            <span className="text-[11px] sm:text-xs font-cinzel font-bold text-[#F9D678] tracking-[0.2em] uppercase">
              GREATER REFERRALS
            </span>
            <span className="text-[#D4AF37] font-bold text-xs sm:text-sm">|</span>
            <span className="text-[11px] sm:text-xs font-cinzel font-bold text-white tracking-[0.2em] uppercase">
              LASTING GROWTH
            </span>
          </div>

          {/* Right: Elegant Golden Multi-Arc Crest */}
          <div className="relative z-10 flex items-center gap-3">
            <svg className="w-16 h-8 text-[#D4AF37]" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 35C30 35 55 25 75 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M25 35C45 35 65 25 78 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.75"/>
              <path d="M40 35C55 35 70 28 80 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5"/>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
