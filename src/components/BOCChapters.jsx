import React, { useState } from 'react';
import { 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  Users, 
  Compass,
  CheckCircle2
} from 'lucide-react';
import chaptersBg from '../assets/boc-chapters-kerala-bg.jpg';
import keralaMapImg from '../assets/boc-kerala-golden-map.jpg';
import bocLogoPng from '../assets/boc-logo.png';

// Landmark Photos
import kochiPhoto from '../assets/boc-chapter-kochi.jpg';
import thrissurPhoto from '../assets/boc-chapter-thrissur.jpg';
import tvmPhoto from '../assets/boc-chapter-thiruvananthapuram.jpg';
import kozhikodePhoto from '../assets/boc-chapter-kozhikode.jpg';
import kottayamPhoto from '../assets/boc-chapter-kottayam.jpg';
import kollamPhoto from '../assets/boc-chapter-kollam.jpg';

/**
 * BOCChapters — "Growing Together, Chapter by Chapter."
 * 1:1 Master Recreation of media_1789814800466.jpg
 * 
 * Features:
 * - 6 Regional Chapters across Kerala (Kochi, Thrissur, Thiruvananthapuram, Kozhikode, Kottayam, Kollam)
 * - Central 3D Kerala Golden Network Map with connected node telemetry
 * - Panoramic Kerala backwaters sunset landscape background
 * - Responsive desktop 3-column tri-split layout (Left Cards, Central Map, Right Cards)
 * - Mobile-first optimized landscape card proportions with crystal-clear photos
 * - "ONE COMMUNITY. MANY CHAPTERS." footer ribbon
 */
export default function BOCChapters({ onOpenJoinModal }) {
  const [activeChapter, setActiveChapter] = useState('kochi');

  const leftChapters = [
    {
      id: 'kochi',
      name: 'Kochi',
      tagline: 'The business heart of Kerala, where ideas, people and opportunities meet.',
      photo: kochiPhoto,
      status: 'Active Chapter',
      featured: true,
    },
    {
      id: 'thrissur',
      name: 'Thrissur',
      tagline: 'Where tradition meets progress, and businesses grow together.',
      photo: thrissurPhoto,
      status: 'Active Chapter',
    },
    {
      id: 'thiruvananthapuram',
      name: 'Thiruvananthapuram',
      tagline: 'From vision to success — together we go further.',
      photo: tvmPhoto,
      status: 'Active Chapter',
    },
  ];

  const rightChapters = [
    {
      id: 'kozhikode',
      name: 'Kozhikode',
      tagline: 'A thriving hub of innovation, entrepreneurship and new possibilities.',
      photo: kozhikodePhoto,
      status: 'Active Chapter',
    },
    {
      id: 'kottayam',
      name: 'Kottayam',
      tagline: 'Building connections, creating value and driving growth.',
      photo: kottayamPhoto,
      status: 'Active Chapter',
    },
    {
      id: 'kollam',
      name: 'Kollam',
      tagline: 'Strong networks. Shared goals. Greater opportunities.',
      photo: kollamPhoto,
      status: 'Active Chapter',
    },
  ];

  const allChapters = [...leftChapters, ...rightChapters];

  const renderCard = (chapter) => {
    const isSelected = activeChapter === chapter.id;

    return (
      <div 
        key={chapter.id}
        onClick={() => {
          setActiveChapter(chapter.id);
          onOpenJoinModal();
        }}
        className={`group relative bg-[#FAF8F5]/90 hover:bg-white backdrop-blur-md rounded-2xl p-2.5 sm:p-3 flex items-center gap-3 border transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(181,125,43,0.18)] ${
          isSelected 
            ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]/40 bg-white' 
            : 'border-[#EADBBD]/80 hover:border-[#D4AF37]'
        }`}
      >
        {/* Landmark Photo Box */}
        <div className="relative w-28 sm:w-36 h-20 sm:h-24 rounded-xl overflow-hidden shrink-0 shadow-inner bg-slate-200 border border-[#EADBBD]/60">
          <img 
            src={chapter.photo} 
            alt={`${chapter.name} Chapter landmark`} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
        </div>

        {/* Card Content */}
        <div className="flex-1 min-w-0 pr-1">
          {/* Header row: Medallion Pin + City Name + CHAPTER Kicker */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#07172C] border border-[#D4AF37]/70 text-[#D4AF37] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
              <MapPin className="w-3.5 h-3.5 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#0A192F] group-hover:text-[#B57D2B] transition-colors leading-none truncate">
                {chapter.name}
              </h3>
              <span className="text-[8.5px] sm:text-[9.5px] font-cinzel font-bold text-[#B57D2B] tracking-widest uppercase block mt-0.5">
                CHAPTER
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-[11px] sm:text-[12px] leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
            {chapter.tagline}
          </p>

          {/* Connect indicator on hover */}
          <div className="text-[10px] font-bold text-[#B57D2B] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 mt-1">
            <span>Explore Chapter</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="chapters" 
      className="relative w-full text-slate-900 overflow-hidden select-none py-16 sm:py-20 lg:py-24 border-t border-[#EADBBD]/40"
    >
      {/* ===================================================================== */}
      {/* 1. SCENIC KERALA BACKWATERS SUNSET BACKDROP                           */}
      {/* ===================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={chaptersBg} 
          alt="Kerala Backwaters Sunset Background" 
          className="w-full h-full object-cover object-center transform scale-[1.02] filter brightness-[0.98] contrast-[1.02]"
        />
        {/* Soft atmospheric overlay for readability matching reference */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/85 via-[#FAF8F5]/65 to-[#FAF8F5]/90 pointer-events-none" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ===================================================================== */}
        {/* 2. SECTION HEADER (KICKER, TITLE, NARRATIVE)                          */}
        {/* ===================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Kicker Badge with Horizontal Rules & BOC Logo */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1.5px] w-6 sm:w-12 bg-[#B57D2B]" />
            <img src={bocLogoPng} alt="BOC Emblem" className="w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-sm" />
            <span className="text-[#B57D2B] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase font-cinzel">
              BOC CHAPTERS
            </span>
            <div className="h-[1.5px] w-6 sm:w-12 bg-[#B57D2B]" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-bold tracking-tight leading-tight text-center mb-4">
            <span className="text-[#0A192F]">Growing Together, </span>
            <br className="hidden sm:inline" />
            <span className="text-[#B57D2B]">Chapter by Chapter.</span>
          </h2>

          {/* Narrative Paragraph */}
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Connecting business owners across Kerala, one chapter at a time — for stronger networks, more referrals and greater opportunities.
          </p>

          {/* Subtle Decorative Golden Accent Line */}
          <div className="w-12 h-[1.5px] bg-[#B57D2B]/50 mx-auto mt-4" />
        </div>

        {/* ===================================================================== */}
        {/* 3. DESKTOP TRI-SPLIT LAYOUT (LEFT CARDS - 3D MAP - RIGHT CARDS)       */}
        {/* ===================================================================== */}
        <div className="hidden lg:grid grid-cols-12 gap-5 xl:gap-7 items-center mb-14">
          
          {/* Left Column: Kochi, Thrissur, Thiruvananthapuram */}
          <div className="col-span-4 flex flex-col gap-4">
            {leftChapters.map(renderCard)}
          </div>

          {/* Center Column: 3D Kerala Golden Network Map */}
          <div className="col-span-4 flex flex-col items-center justify-center relative px-2">
            <div className="relative w-full max-w-[340px] flex items-center justify-center group">
              {/* Radial Golden Aura Behind Map */}
              <div className="absolute inset-0 bg-radial from-[#D4AF37]/25 via-[#D4AF37]/5 to-transparent blur-2xl rounded-full scale-110 pointer-events-none" />
              
              {/* 3D Kerala Relief Map */}
              <img 
                src={keralaMapImg} 
                alt="Kerala Chapter Network Map" 
                className="w-full h-auto max-h-[520px] object-contain drop-shadow-[0_15px_30px_rgba(7,23,44,0.35)] mix-blend-multiply transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Right Column: Kozhikode, Kottayam, Kollam */}
          <div className="col-span-4 flex flex-col gap-4">
            {rightChapters.map(renderCard)}
          </div>

        </div>

        {/* ===================================================================== */}
        {/* 3B. MOBILE & TABLET RESPONSIVE LAYOUT (< lg screens)                 */}
        {/* ===================================================================== */}
        <div className="lg:hidden flex flex-col items-center mb-12">
          
          {/* Centered Kerala Map Showcase */}
          <div className="relative w-full max-w-[260px] sm:max-w-[300px] mb-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-radial from-[#D4AF37]/25 via-transparent to-transparent blur-xl rounded-full" />
            <img 
              src={keralaMapImg} 
              alt="Kerala Chapter Network Map" 
              className="w-full h-auto max-h-[380px] object-contain drop-shadow-xl mix-blend-multiply"
            />
          </div>

          {/* 6 Chapter Cards Grid on Mobile */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {allChapters.map(renderCard)}
          </div>

        </div>

        {/* ===================================================================== */}
        {/* 4. BOTTOM ACCENT: ONE COMMUNITY. MANY CHAPTERS.                       */}
        {/* ===================================================================== */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
          <div className="h-[1.5px] w-8 sm:w-20 bg-[#B57D2B]/50" />
          <span className="text-[#B57D2B] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase font-cinzel text-center">
            ONE COMMUNITY. MANY CHAPTERS.
          </span>
          <div className="h-[1.5px] w-8 sm:w-20 bg-[#B57D2B]/50" />
        </div>

        {/* Action CTA Button */}
        <div className="flex items-center justify-center">
          <button
            onClick={onOpenJoinModal}
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-[#07172C] hover:bg-[#0B2548] text-white font-medium text-sm sm:text-base border border-[#B57D2B]/50 shadow-xl hover:shadow-2xl hover:shadow-[#B57D2B]/25 transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
          >
            <img src={bocLogoPng} alt="BOC Emblem" className="w-5 h-5 object-contain" />
            <span>Apply to Join Your Local Chapter</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>

      {/* ===================================================================== */}
      {/* 5. BOTTOM DECORATIVE LUXURY ACCENTS                                   */}
      {/* ===================================================================== */}
      <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent pointer-events-none" />
    </section>
  );
}
