import React from 'react';
import { 
  ArrowRight, 
  Users, 
  Handshake, 
  TrendingUp, 
  Star, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import heroTeamImg from '../assets/boc-success-hero-team.jpg';
import bocLogoPng from '../assets/boc-logo.png';

// 100% Real Member Photos (Jijeesh Minerva Always First)
import jijeeshPhoto from '../assets/boc-member-jijeesh-minerva.jpg';
import sajishPhoto from '../assets/boc-member-sajish-maliyekkal.jpg';
import maheshPhoto from '../assets/boc-member-mahesh-prabudhan.jpg';
import binuPhoto from '../assets/boc-member-binu-tb.jpg';
import vidhuPhoto from '../assets/boc-member-vidhu-mezhuveli.jpg';
import nidhiPhoto from '../assets/boc-member-nidhi-tomer.jpg';
import anjanaPhoto from '../assets/boc-member-anjana-sreedharan.jpg';

/**
 * BOCMemberSuccessStories — Verified Member Showcase
 * Strictly displays user-provided 4 fields: Photo, Name, Position, and Company.
 * Zero fabricated bios, zero fake quotes, zero AI metrics.
 */
export default function BOCMemberSuccessStories({ onOpenJoinModal }) {
  const members = [
    {
      id: 'jijeesh',
      name: 'Jijeesh Minerva',
      role: 'Founder & CEO',
      company: 'M/s Eco Pest India • M/s Urban Owls Digital',
      photo: jijeeshPhoto,
      photoPosition: 'center 20%',
    },
    {
      id: 'sajish-maliyekkal',
      name: 'Sajish Maliyekkal',
      role: 'Founder',
      company: 'Greenline Pest Management',
      photo: sajishPhoto,
      photoPosition: 'center 20%',
    },
    {
      id: 'mahesh-prabudhan',
      name: 'Mahesh Prabudhan',
      role: 'CEO',
      company: 'Yessem Facilities',
      photo: maheshPhoto,
      photoPosition: 'center 14%',
    },
    {
      id: 'binu-tb',
      name: 'Binu T.B.',
      role: 'Global Marketing Leader',
      company: 'Global Marketing, Coimbatore',
      photo: binuPhoto,
      photoPosition: 'center 14%',
    },
    {
      id: 'vidhu-mezhuveli',
      name: 'Vidhu Mezhuveli',
      role: 'Founder & CEO',
      company: 'Smash Cleaning Company',
      photo: vidhuPhoto,
      photoPosition: 'center 20%',
    },
    {
      id: 'nidhi-tomer',
      name: 'Nidhi Tomer',
      role: 'Founder & CEO',
      company: 'Vedic Bricks Academy, Kochi',
      photo: nidhiPhoto,
      photoPosition: 'center 20%',
    },
    {
      id: 'anjana-sreedharan',
      name: 'Anjana Sreedharan',
      role: 'General Secretary',
      company: 'Mithrakulam Trust',
      photo: anjanaPhoto,
      photoPosition: 'center 12%',
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
      className="relative w-full max-w-full bg-[#FAF8F5] text-slate-900 overflow-hidden select-none py-16 sm:py-20 lg:py-24 border-t border-[#EADBBD]/60"
    >
      {/* Background Soft Subtle Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5E6BE]/30 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5E6BE]/25 rounded-full blur-3xl -ml-32 -mb-32" />
      </div>

      {/* 1. TOP-LEFT CURVED NAVY WAVE WITH BOC BRANDING */}
      <div className="absolute top-0 left-0 z-20 pointer-events-none hidden sm:block">
        <div className="relative">
          <svg className="w-80 sm:w-96 md:w-[420px] h-28 sm:h-32 md:h-36 drop-shadow-lg" viewBox="0 0 420 140" fill="none" preserveAspectRatio="none">
            <path d="M0 0 H420 C320 25 240 75 160 115 C90 145 40 140 0 135 Z" fill="#07172C"/>
            <path d="M0 135 C40 140 90 145 160 115 C240 75 320 25 420 0" stroke="#D4AF37" strokeWidth="2.5"/>
            <path d="M0 125 C40 130 90 135 155 108 C235 68 315 20 410 0" stroke="#F9D678" strokeWidth="1" strokeOpacity="0.5"/>
          </svg>
          <div className="absolute top-3 left-6 sm:top-4 sm:left-8 flex items-center gap-3">
            <img src={bocLogoPng} alt="BOC Logo" className="w-9 h-9 sm:w-11 sm:h-11 object-contain drop-shadow-sm" />
            <div className="h-7 w-[1.5px] bg-[#D4AF37]" />
            <div className="flex flex-col text-white tracking-[0.2em] leading-tight text-[8px] sm:text-[9.5px] font-cinzel font-bold">
              <span>BUSINESS</span>
              <span className="text-[#F9D678]">OWNERS</span>
              <span>CIRCLE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* 2. TOP RIGHT SCRIPT: "Together We Grow" */}
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

        {/* 3. UPPER SHOWCASE: TYPOGRAPHY + VERIFIED HERO PANORAMA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12 sm:mb-16">
          
          {/* Left Column (6 Cols): Typography & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172C] border border-[#D4AF37]/60 text-[#F9D678] text-[11px] font-cinzel font-bold tracking-[0.25em] uppercase shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-[#F9D678]" />
                <span>MEMBER SUCCESS STORIES</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-bold tracking-tight leading-[1.08] mb-4">
              <span className="text-[#0A192F] block">Real People.</span>
              <span className="bg-gradient-to-r from-[#B57D2B] via-[#D4AF37] to-[#966620] bg-clip-text text-transparent block">Real Growth.</span>
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 font-normal">
              Every business milestone in BOC begins with genuine relationships and high-trust peer referrals. Explore our verified members across Kerala who collaborate and lead in their industries.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#07172C]/5 border border-[#D4AF37]/40 text-xs text-[#6B4B18] font-medium mb-6">
              <ShieldCheck className="w-4 h-4 text-[#B57D2B] flex-shrink-0" />
              <span>Verified member roster • Published with authorization</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#07172C] to-[#0E2849] hover:from-[#B57D2B] hover:to-[#966620] text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-300 border border-[#D4AF37]/50 group cursor-pointer"
              >
                <span>Connect with Members</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column (6 Cols): Hero Team Panorama Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(10,25,47,0.18)] border-2 border-[#EADBBD]">
              <img 
                src={heroTeamImg} 
                alt="BOC Business Founders Looking at Sunrise Skyline" 
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F9D678]" />
                  <span className="font-medium text-[11px]">100% Peer Verified Network</span>
                </div>
                <div className="bg-[#B57D2B] text-black font-bold px-3 py-1 rounded-full text-[10px] tracking-wider uppercase">
                  BOC Kerala
                </div>
              </div>
            </div>

            <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[#07172C] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg hidden sm:flex">
              <Sparkles className="w-4 h-4 text-[#F9D678]" />
            </div>
          </div>

        </div>

        {/* 4. VERIFIED MEMBER CARDS (Strict 4 Fields Only: Photo, Name, Position, Company) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-14 sm:mb-16 items-stretch">
          {members.map((member) => (
            <div 
              key={member.id}
              className="group relative bg-[#07172C] text-white rounded-2xl p-5 flex flex-col justify-between border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-[0_8px_24px_rgba(0,0,0,0.14)] hover:shadow-[0_16px_36px_rgba(181,125,43,0.25)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                {/* Photo */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-[#030C1C] border border-[#D4AF37]/30 shadow-inner">
                  <img 
                    src={member.photo} 
                    alt={`${member.name} - ${member.company}`} 
                    style={{ objectPosition: member.photoPosition || 'center 15%' }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07172C]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Name */}
                <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#F9D678] transition-colors leading-snug mb-1">
                  {member.name}
                </h3>

                {/* Role (Position) */}
                <p className="text-xs sm:text-sm font-semibold text-[#F9D678] mb-1">
                  {member.role}
                </p>

                {/* Company */}
                <p className="text-xs text-slate-300 line-clamp-2">
                  {member.company}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenJoinModal}
                className="w-full mt-4 py-2.5 px-3.5 rounded-xl bg-[#0B2548] hover:bg-[#B57D2B] text-[#F9D678] hover:text-white text-xs font-bold border border-[#D4AF37]/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Connect via BOC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* 5. BOTTOM METRICS BANNER */}
        <div className="relative bg-[#07172C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 px-6 sm:px-10 border border-[#D4AF37]/50 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-radial from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
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

                    {idx < stats.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-[1px] h-10 bg-[#D4AF37]/25 -translate-y-1/2" />
                    )}
                  </div>
                );
              })}
            </div>

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
