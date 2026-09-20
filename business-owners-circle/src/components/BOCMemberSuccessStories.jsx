import React, { useState } from 'react';
import { 
  Quote, 
  ArrowRight, 
  Users, 
  Handshake, 
  TrendingUp, 
  Star, 
  Sparkles,
  Award,
  CheckCircle2
} from 'lucide-react';
import heroTeamImg from '../assets/boc-success-hero-team.jpg';
import arjunImg from '../assets/boc-story-arjun-nair.jpg';
import ananyaImg from '../assets/boc-story-ananya-suresh.jpg';
import rahulImg from '../assets/boc-story-rahul-menon.jpg';
import priyaImg from '../assets/boc-story-priya-thomas.jpg';
import bocLogoPng from '../assets/boc-logo.png';

/**
 * BOCMemberSuccessStories — "Real People. Real Growth."
 * 100% Exact Recreation of Master Graphic (media_1789887563575.jpg)
 */
export default function BOCMemberSuccessStories({ onOpenJoinModal }) {
  const [activeStory, setActiveStory] = useState(null);

  const stories = [
    {
      id: 'arjun-nair',
      name: 'Arjun Nair',
      role: 'Founder, Nair Tech Solutions',
      location: 'Kochi',
      tag: 'BUSINESS GROWTH',
      photo: arjunImg,
      quote: 'BOC gave me the right people, the right introductions and the right opportunities. Within 6 months, I got 3 key clients through the network.',
    },
    {
      id: 'ananya-suresh',
      name: 'Ananya Suresh',
      role: 'Co-Founder, Bloom Creative Studio',
      location: 'Kochi',
      tag: 'NEW PARTNERSHIPS',
      photo: ananyaImg,
      quote: "Through BOC, I connected with potential partners who helped me expand my service offerings and reach new markets. It's more than just a network — it's a family.",
    },
    {
      id: 'rahul-menon',
      name: 'Rahul Menon',
      role: 'Managing Director, GreenBuild Infra',
      location: 'Kochi',
      tag: 'EXPANDED MARKET REACH',
      photo: rahulImg,
      quote: 'The referrals I received from BOC members opened doors I never imagined. Today, my business has grown to 3 new cities.',
    },
    {
      id: 'priya-thomas',
      name: 'Priya Thomas',
      role: 'Founder, Luxe Wellness',
      location: 'Kochi',
      tag: 'INCREASED REVENUE',
      photo: priyaImg,
      quote: "The quality of people in BOC is exceptional. I've gained not just customers, but long-term business relationships that continue to grow.",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: '1000+',
      label: 'SUCCESSFUL MEMBERS',
    },
    {
      icon: Handshake,
      value: '500+',
      label: 'BUSINESS PARTNERSHIPS',
    },
    {
      icon: TrendingUp,
      value: '300+',
      label: 'BUSINESSES GROWN',
    },
    {
      icon: Star,
      value: '100%',
      label: 'MEMBER SATISFACTION',
    },
  ];

  return (
    <section 
      id="success-stories" 
      className="relative w-full bg-[#FAF8F5] text-slate-900 overflow-hidden select-none py-16 sm:py-20 lg:py-24 border-t border-[#EADBBD]/60"
    >
      {/* Background Soft Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5E6BE]/30 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5E6BE]/25 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      {/* ===================================================================== */}
      {/* 1. TOP-LEFT CURVED NAVY WAVE WITH BOC BRANDING (media_1789887563575)  */}
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

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ===================================================================== */}
        {/* 2. TOP RIGHT SCRIPT: "Together We Grow"                               */}
        {/* ===================================================================== */}
        <div className="flex justify-end mb-4 sm:mb-2">
          <div className="text-right">
            <span className="font-serif italic font-bold text-2xl sm:text-3xl md:text-4xl text-[#0A192F] tracking-wide block">
              Together We Grow
            </span>
            <svg className="w-32 sm:w-44 h-3 text-[#B57D2B] ml-auto -mt-1" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9C40 3 120 1 158 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>


        {/* ===================================================================== */}
        {/* 3. UPPER SHOWCASE: LEFT HEADLINE + RIGHT HERO PANORAMA TEAM           */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12 sm:mb-16">
          
          {/* Left Column (5 Cols): Typography & Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            {/* Kicker */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-[1.5px] w-6 bg-[#B57D2B]" />
              <span className="text-[#B57D2B] text-xs sm:text-[13px] font-bold tracking-[0.25em] uppercase font-cinzel">
                MEMBER SUCCESS STORIES
              </span>
              <div className="h-[1.5px] w-6 bg-[#B57D2B]" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-bold tracking-tight leading-[1.08] mb-4">
              <span className="text-[#0A192F] block">Real People.</span>
              <span className="text-[#B57D2B] block">Real Growth.</span>
            </h2>

            {/* Narrative Description */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              From new connections to bigger opportunities — our members are building better businesses, stronger networks and brighter futures.
            </p>

            {/* Direct Action Button */}
            <div>
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#07172C] to-[#0E2849] hover:from-[#B57D2B] hover:to-[#966620] text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-300 border border-[#D4AF37]/50 group cursor-pointer"
              >
                <span>Write Your Own Success Story</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column (7 Cols): Hero Team Panorama Photo */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(10,25,47,0.18)] border-2 border-[#EADBBD]">
              <img 
                src={heroTeamImg} 
                alt="BOC Business Founders Looking at Sunrise Skyline" 
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Subtle Gold Corner Accent */}
            <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[#07172C] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg hidden sm:flex">
              <Sparkles className="w-4 h-4 text-[#F9D678]" />
            </div>
          </div>

        </div>


        {/* ===================================================================== */}
        {/* 4. THE 4 SUCCESS STORY CARDS (1:1 with Master Poster)                 */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-14 sm:mb-16 items-stretch">
          {stories.map((story) => (
            <div 
              key={story.id}
              className="group relative bg-[#07172C] text-white rounded-2xl p-4 sm:p-5 flex flex-col border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_18px_36px_rgba(181,125,43,0.25)] transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Member Photo with Category Tag */}
              <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-4 bg-slate-800 shadow-inner">
                <img 
                  src={story.photo} 
                  alt={story.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Category Pill (Bottom Right of Photo) */}
                <div className="absolute bottom-2.5 right-2.5 bg-gradient-to-r from-[#FDE8BB] via-[#FCE3AA] to-[#F5D082] text-[#7A4F0B] border border-[#EADBBD] text-[9.5px] font-bold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider">
                  {story.tag}
                </div>
              </div>

              {/* Golden Quote Mark */}
              <div className="text-[#F9D678] mb-2">
                <Quote className="w-6 h-6 rotate-180 opacity-80" />
              </div>

              {/* Quote Content */}
              <p className="text-slate-200 text-xs sm:text-[12.5px] leading-relaxed italic mb-5 flex-grow font-light">
                &ldquo;{story.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="pt-3 border-t border-slate-700/80 mb-3">
                <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-[#F9D678] transition-colors leading-snug">
                  {story.name}
                </h3>
                <p className="text-slate-300 text-xs mt-0.5">
                  {story.role}
                </p>
                <p className="text-[#D4AF37] text-[11px] font-medium mt-0.5">
                  {story.location}
                </p>
              </div>

              {/* Read Full Story Button */}
              <button
                onClick={() => {
                  setActiveStory(story);
                  onOpenJoinModal();
                }}
                className="w-full py-2 px-3 rounded-lg bg-[#0B2548] hover:bg-[#12396E] text-[#F9D678] hover:text-white text-xs font-semibold border border-[#D4AF37]/30 transition-all duration-300 flex items-center justify-end gap-1.5 cursor-pointer mt-auto"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>


        {/* ===================================================================== */}
        {/* 5. BOTTOM WAVE BANNER: 4 METRICS + "Your Success is Our Story"        */}
        {/* ===================================================================== */}
        <div className="relative bg-[#07172C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 px-6 sm:px-10 border border-[#D4AF37]/50 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-radial from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* 4 Statistics Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full lg:w-3/4 items-center">
              {stats.map((st, idx) => {
                const Icon = st.icon;

                return (
                  <div key={idx} className="flex flex-col items-center text-center relative">
                    <div className="w-11 h-11 rounded-full bg-[#0B2548] border border-[#D4AF37]/60 text-[#F9D678] flex items-center justify-center mb-2 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                      {st.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-cinzel font-bold text-[#F9D678] tracking-widest uppercase mt-0.5">
                      {st.label}
                    </span>

                    {/* Divider for desktop */}
                    {idx < stats.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-[1px] h-10 bg-[#D4AF37]/25 -translate-y-1/2" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: "Your Success is Our Story" Cursive Script */}
            <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-end text-center lg:text-right pt-4 lg:pt-0 border-t lg:border-t-0 border-[#D4AF37]/30">
              <div className="transform lg:-rotate-6">
                <span className="font-serif italic font-bold text-2xl sm:text-3xl text-white tracking-wide block drop-shadow-md">
                  Your Success
                </span>
                <span className="font-serif italic font-bold text-2xl sm:text-3xl text-[#F9D678] tracking-wide block drop-shadow-md">
                  is Our Story
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
