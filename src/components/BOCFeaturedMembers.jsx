import React, { useState } from 'react';
import { 
  Crown,
  Building2, 
  Globe, 
  Sparkles, 
  ShieldCheck, 
  UserPlus, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import membersKeralaBg from '../assets/boc-members-kerala-bg.jpg';
import bocLogoPng from '../assets/boc-logo.png';
import jijeeshPhoto from '../assets/boc-member-jijeesh-minerva.jpg';
import maheshPhoto from '../assets/boc-member-mahesh-prabudhan.jpg';
import binuPhoto from '../assets/boc-member-binu-tb.jpg';
import vidhuPhoto from '../assets/boc-member-vidhu-mezhuveli.jpg';
import sajishPhoto from '../assets/boc-member-sajish-maliyekkal.jpg';

/**
 * BOCFeaturedMembers — "Meet Our Valued Members" Executive Module
 * 1:1 Recreation of Master Reference (media_1789791169061.jpg)
 *
 * Real Member Profiles:
 * 1. Jijeesh Minerva (HIGHLIGHTED #1) — Founder & COO, M/s Eco Pest India & M/s Urban Owls Digital
 * 2. Mahesh Prabudhan — CEO, Yessem Facilities
 * 3. Binu TB — Global Marketing, Coimbatore
 * 4. Vidhu Mezhuveli — Founder & CEO, Smash Cleaning Company
 * 5. Sajish Maliyekkal — Founder, Greenline Pest Management
 * 6. Upcoming Member (Reserved Slot 1)
 * 7. Upcoming Member (Reserved Slot 2)
 */
export default function BOCFeaturedMembers({ onOpenJoinModal }) {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    {
      id: 'jijeesh-minerva',
      name: 'Jijeesh Minerva',
      role: 'Founder & COO',
      company: 'M/s Eco Pest India • M/s Urban Owls Digital',
      category: 'PEST & DIGITAL',
      tagline: 'Driving business ecosystems, pest control excellence & digital innovation across Kerala.',
      icon: Crown,
      photo: jijeeshPhoto,
      isMain: true,
      highlightBadge: 'BOC FOUNDER',
    },
    {
      id: 'mahesh-prabudhan',
      name: 'Mahesh Prabudhan',
      role: 'CEO',
      company: 'Yessem Facilities',
      category: 'FACILITY MGMT',
      tagline: 'Delivering world-class corporate facility management and operational excellence.',
      icon: Building2,
      photo: maheshPhoto,
    },
    {
      id: 'binu-tb',
      name: 'Binu TB',
      role: 'Global Marketing Leader',
      company: 'Global Marketing, Coimbatore',
      category: 'GLOBAL MARKETING',
      tagline: 'Expanding enterprise markets, international connections & strategic trade growth.',
      icon: Globe,
      photo: binuPhoto,
    },
    {
      id: 'vidhu-mezhuveli',
      name: 'Vidhu Mezhuveli',
      role: 'Founder & CEO',
      company: 'Smash Cleaning Company',
      category: 'CLEANING SERVICES',
      tagline: 'Setting new benchmarks in industrial cleaning, sanitization & modern facility care.',
      icon: Sparkles,
      photo: vidhuPhoto,
    },
    {
      id: 'sajish-maliyekkal',
      name: 'Sajish Maliyekkal',
      role: 'Founder',
      company: 'Greenline Pest Management',
      category: 'PEST MANAGEMENT',
      tagline: 'Pioneering eco-friendly, reliable and certified pest management solutions.',
      icon: ShieldCheck,
      photo: sajishPhoto,
    },
    {
      id: 'reserved-slot-1',
      name: 'Upcoming Member',
      role: 'Chapter Seat Reserved',
      company: 'Induction in Progress',
      category: 'NEW VERTICAL',
      tagline: 'Exclusive category seat reserved for an established Kerala business leader.',
      icon: UserPlus,
      isReserved: true,
    },
    {
      id: 'reserved-slot-2',
      name: 'Upcoming Member',
      role: 'Chapter Seat Reserved',
      company: 'Induction in Progress',
      category: 'NEW VERTICAL',
      tagline: 'Exclusive category seat reserved for an established Kerala business leader.',
      icon: UserPlus,
      isReserved: true,
    },
  ];

  return (
    <section 
      id="featured-members" 
      className="relative w-full text-slate-900 overflow-hidden select-none py-16 sm:py-20 lg:py-24 border-t border-[#EADBBD]/40"
    >
      {/* ===================================================================== */}
      {/* 1. SCENIC KERALA SUNSET BACKDROP (media_1789791169061.jpg)            */}
      {/* ===================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={membersKeralaBg} 
          alt="Kerala Backwaters Sunset Background" 
          className="w-full h-full object-cover object-center transform scale-[1.02] filter brightness-[0.98] contrast-[1.02]"
        />
        {/* Soft atmospheric overlay for maximum legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/85 via-[#FAF8F5]/65 to-[#FAF8F5]/90 pointer-events-none" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ===================================================================== */}
        {/* 2. SECTION HEADER (KICKER, TITLE, NARRATIVE)                          */}
        {/* ===================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          
          {/* Kicker Badge with Horizontal Rules & BOC Logo */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1.5px] w-6 sm:w-12 bg-[#B57D2B]" />
            <img src={bocLogoPng} alt="BOC Emblem" className="w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-sm" />
            <span className="text-[#B57D2B] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase font-cinzel">
              FEATURED MEMBERS
            </span>
            <div className="h-[1.5px] w-6 sm:w-12 bg-[#B57D2B]" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-bold tracking-tight leading-tight text-center mb-4">
            <span className="text-[#0A192F]">Meet Our </span>
            <span className="text-[#B57D2B]">Valued Members</span>
          </h2>

          {/* Narrative Paragraph */}
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Connect with inspiring business owners, entrepreneurs and professionals from diverse industries. Build relationships, explore opportunities, and grow together.
          </p>

          {/* Subtle Decorative Golden Accent Line */}
          <div className="w-12 h-[1.5px] bg-[#B57D2B]/50 mx-auto mt-4" />
        </div>


        {/* ===================================================================== */}
        {/* 3. 7 MEMBER CARDS (5 Real Profiles + 2 Reserved Slots)                */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3.5 xl:gap-3 mb-12 sm:mb-14 items-stretch">
          {members.map((member) => {
            const Icon = member.icon;
            
            // Reserved / Upcoming Slot Styling
            if (member.isReserved) {
              return (
                <div 
                  key={member.id}
                  onClick={onOpenJoinModal}
                  className="group relative bg-[#FAF8F5]/80 hover:bg-white backdrop-blur-sm rounded-2xl p-3 sm:p-3.5 flex flex-col border-2 border-dashed border-[#D4AF37]/50 hover:border-[#D4AF37] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(212,175,55,0.18)] transition-all duration-300 hover:-translate-y-1 cursor-pointer min-h-[380px]"
                >
                  {/* Placeholder Visual Box */}
                  <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-3 bg-gradient-to-b from-[#07172C]/5 to-[#EADBBD]/20 flex flex-col items-center justify-center border border-[#EADBBD]/60 group-hover:bg-[#07172C]/10 transition-colors">
                    <img 
                      src={bocLogoPng} 
                      alt="BOC Seal" 
                      className="w-16 h-16 object-contain opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"
                    />
                    <span className="text-[10px] font-cinzel font-bold text-[#B57D2B] mt-2 tracking-widest uppercase">
                      Seat Open
                    </span>
                  </div>

                  {/* Floating Medallion */}
                  <div className="flex items-center -mt-7 mb-2.5 relative z-10 px-0.5">
                    <div className="w-8 h-8 rounded-full bg-[#07172C] border-2 border-[#D4AF37]/70 flex items-center justify-center text-[#D4AF37] shadow-md shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#F5EBD7] border border-[#EADBBD] text-[#9E6E24] text-[9.5px] font-bold tracking-wider uppercase ml-1.5 shadow-sm">
                      {member.category}
                    </span>
                  </div>

                  {/* Member Name */}
                  <h3 className="font-serif font-bold text-base text-[#0A192F] mb-0.5 leading-snug group-hover:text-[#B57D2B] transition-colors">
                    {member.name}
                  </h3>

                  {/* Company/Designation */}
                  <span className="text-[11px] font-semibold text-slate-500 mb-2 block">
                    {member.company}
                  </span>

                  {/* Tagline */}
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-4 flex-grow italic">
                    {member.tagline}
                  </p>

                  {/* Apply Prompt */}
                  <div className="text-[11px] font-bold text-[#B57D2B] inline-flex items-center gap-1 mt-auto pt-2.5 border-t border-dashed border-[#EADBBD] w-full">
                    <span>Inquire for Seat</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            }

            // Real Member Profile Card
            return (
              <div 
                key={member.id}
                className={`group relative rounded-2xl p-3 sm:p-3.5 flex flex-col transition-all duration-300 hover:-translate-y-1.5 min-h-[380px] ${
                  member.isMain
                    ? 'bg-gradient-to-b from-white to-[#FDFBF7] border-2 border-[#D4AF37] shadow-[0_12px_36px_rgba(212,175,55,0.22)] ring-2 ring-[#D4AF37]/30 hover:shadow-[0_16px_44px_rgba(212,175,55,0.3)]'
                    : 'bg-[#FAF8F5]/95 hover:bg-white backdrop-blur-md border border-[#EADBBD]/90 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(181,125,43,0.18)] hover:border-[#B57D2B]/60'
                }`}
              >
                {/* Highlight Badge for Main Founder (Jijeesh Minerva) */}
                {member.isMain && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 bg-gradient-to-r from-[#07172C] via-[#0B2548] to-[#07172C] text-[#F9D678] border border-[#D4AF37] text-[9.5px] font-cinzel font-bold px-3 py-0.5 rounded-full shadow-md flex items-center gap-1 tracking-widest uppercase">
                    <Crown className="w-3 h-3 text-[#D4AF37]" />
                    <span>BOC FOUNDER</span>
                  </div>
                )}

                {/* Member Portrait Box */}
                <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-3 bg-slate-200/80 shadow-inner">
                  <img 
                    src={member.photo} 
                    alt={`${member.name} - ${member.company}`} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* Floating Badge Cluster (Medallion + Pill) */}
                <div className="flex items-center -mt-7 mb-2.5 relative z-10 px-0.5">
                  {/* Navy Circular Medallion */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md shrink-0 group-hover:rotate-6 transition-transform ${
                    member.isMain 
                      ? 'bg-[#07172C] border-2 border-[#D4AF37] text-[#F9D678] ring-2 ring-[#D4AF37]/40' 
                      : 'bg-[#07172C] border-2 border-[#D4AF37]/70 text-[#D4AF37]'
                  }`}>
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>

                  {/* Category Pill */}
                  <span className="px-2 py-0.5 rounded-full bg-[#F5EBD7] border border-[#EADBBD] text-[#9E6E24] text-[9.5px] font-bold tracking-wider uppercase ml-1.5 shadow-sm truncate max-w-[110px]">
                    {member.category}
                  </span>
                </div>

                {/* Member Name */}
                <h3 className="font-serif font-bold text-base text-[#0A192F] mb-0.5 leading-snug group-hover:text-[#B57D2B] transition-colors">
                  {member.name}
                </h3>

                {/* Role & Company */}
                <div className="mb-2">
                  <span className="text-[11px] font-bold text-[#B57D2B] block">
                    {member.role}
                  </span>
                  <span className="text-[10.5px] font-semibold text-slate-500 leading-tight block line-clamp-2">
                    {member.company}
                  </span>
                </div>

                {/* Tagline / Bio */}
                <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-3 mb-4 flex-grow">
                  {member.tagline}
                </p>

                {/* View Profile Link */}
                <button
                  onClick={() => {
                    setSelectedMember(member);
                    onOpenJoinModal();
                  }}
                  className="text-[11px] font-bold text-[#0A192F] group-hover:text-[#B57D2B] inline-flex items-center gap-1.5 transition-colors mt-auto pt-2.5 border-t border-[#EADBBD]/60 text-left w-full cursor-pointer"
                >
                  <span>Connect Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B57D2B] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>


        {/* ===================================================================== */}
        {/* 4. BOTTOM ACTION CTA ("View All Members →")                           */}
        {/* ===================================================================== */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <div className="h-[1.5px] w-12 sm:w-20 bg-[#B57D2B]/50" />
          
          <button
            onClick={onOpenJoinModal}
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-[#07172C] hover:bg-[#0B2548] text-white font-medium text-sm sm:text-base border border-[#B57D2B]/50 shadow-xl hover:shadow-2xl hover:shadow-[#B57D2B]/25 transition-all duration-300 transform hover:-translate-y-0.5 group"
          >
            <img src={bocLogoPng} alt="BOC Emblem" className="w-5 h-5 object-contain" />
            <span>View All Members</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
          </button>

          <div className="h-[1.5px] w-12 sm:w-20 bg-[#B57D2B]/50" />
        </div>

      </div>
    </section>
  );
}
