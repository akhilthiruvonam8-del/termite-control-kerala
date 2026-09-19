import React, { useState } from 'react';
import { 
  Crown,
  Building2, 
  Globe, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap,
  HeartHandshake,
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
import nidhiPhoto from '../assets/boc-member-nidhi-tomer.jpg';
import anjanaPhoto from '../assets/boc-member-anjana-sreedharan.jpg';

/**
 * BOCFeaturedMembers — "Meet Our Valued Members" Executive Module
 * 1:1 Recreation of Master Reference (media_1789791169061.jpg)
 *
 * 7 Real Member Profiles:
 * 1. Jijeesh — Founder & CEO, M/s Eco Pest India & M/s Urban Owls Digital
 * 2. Mahesh Prabudhan — CEO, Yessem Facilities
 * 3. Binu TB — Global Marketing, Coimbatore
 * 4. Vidhu Mezhuveli — Founder & CEO, Smash Cleaning Company
 * 5. Sajish Maliyekkal — Founder, Greenline Pest Management (Executive Portrait)
 * 6. Nidhi Tomer — Founder & CEO, Vedic Bricks Academy, Kochi
 * 7. Anjana Sreedharan — General Secretary, Mithrakulam Trust
 */
export default function BOCFeaturedMembers({ onOpenJoinModal }) {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    {
      id: 'jijeesh',
      name: 'Jijeesh',
      role: 'Founder & CEO',
      company: 'M/s Eco Pest India • M/s Urban Owls Digital',
      category: 'PEST & DIGITAL',
      tagline: 'Driving business ecosystems, pest control excellence & digital innovation across Kerala.',
      icon: Crown,
      photo: jijeeshPhoto,
      photoPosition: 'center 12%',
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
      photoPosition: 'center 14%',
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
      photoPosition: 'center 14%',
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
      photoPosition: 'center 20%',
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
      photoPosition: 'center 20%',
    },
    {
      id: 'nidhi-tomer',
      name: 'Nidhi Tomer',
      role: 'Founder & CEO',
      company: 'Vedic Bricks Academy, Kochi',
      category: 'VEDIC EDTECH',
      tagline: 'Empowering future generations with transformative learning and holistic skill development.',
      icon: GraduationCap,
      photo: nidhiPhoto,
      photoPosition: 'center 20%',
    },
    {
      id: 'anjana-sreedharan',
      name: 'Anjana Sreedharan',
      role: 'General Secretary',
      company: 'Mithrakulam Trust',
      category: 'SOCIAL IMPACT',
      tagline: 'Championing community welfare, cultural empowerment and sustainable social upliftment.',
      icon: HeartHandshake,
      photo: anjanaPhoto,
      photoPosition: 'center 12%',
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
        {/* 3. 7 MEMBER CARDS (Responsive 2-Col Mobile & 7-Col Desktop Grid)       */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-3.5 xl:gap-3 mb-12 sm:mb-14 items-stretch">
          {members.map((member) => {
            const Icon = member.icon;
            const isLastOnMobile = member.id === 'anjana-sreedharan';
            
            return (
              <div 
                key={member.id}
                className={`group relative rounded-2xl p-2.5 sm:p-3.5 flex flex-col transition-all duration-300 hover:-translate-y-1.5 min-h-[350px] sm:min-h-[380px] bg-[#FAF8F5]/95 hover:bg-white backdrop-blur-md border border-[#EADBBD]/90 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(181,125,43,0.18)] hover:border-[#B57D2B]/60 ${
                  isLastOnMobile ? 'col-span-2 sm:col-span-1 max-w-[calc(50%-6px)] sm:max-w-none mx-auto sm:mx-0 w-full' : ''
                }`}
              >
                {/* Member Portrait Box (Precise 4:5 Aspect Ratio — No Head Cutoff) */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-2.5 sm:mb-3 bg-slate-200/80 shadow-inner">
                  <img 
                    src={member.photo} 
                    alt={`${member.name} - ${member.company}`} 
                    style={{ objectPosition: member.photoPosition || 'center 15%' }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* Floating Badge Cluster (Medallion + Pill) */}
                <div className="flex items-center -mt-5 sm:-mt-6 mb-2 sm:mb-2.5 relative z-10 px-0.5">
                  {/* Navy Circular Medallion */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-md shrink-0 group-hover:rotate-6 transition-transform bg-[#07172C] border-2 border-[#D4AF37]/70 text-[#D4AF37]">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                  </div>

                  {/* Category Pill */}
                  <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#F5EBD7] border border-[#EADBBD] text-[#9E6E24] text-[8px] sm:text-[9.5px] font-bold tracking-wider uppercase ml-1 sm:ml-1.5 shadow-sm truncate max-w-[85px] sm:max-w-[110px]">
                    {member.category}
                  </span>
                </div>

                {/* Member Name */}
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#0A192F] mb-0.5 leading-snug group-hover:text-[#B57D2B] transition-colors truncate">
                  {member.name}
                </h3>

                {/* Role & Company */}
                <div className="mb-1.5 sm:mb-2">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#B57D2B] block truncate">
                    {member.role}
                  </span>
                  <span className="text-[9px] sm:text-[10.5px] font-semibold text-slate-500 leading-tight block line-clamp-1 sm:line-clamp-2">
                    {member.company}
                  </span>
                </div>

                {/* Tagline / Bio */}
                <p className="text-[9.5px] sm:text-[11px] text-slate-600 leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4 flex-grow">
                  {member.tagline}
                </p>

                {/* View Profile Link */}
                <button
                  onClick={() => {
                    setSelectedMember(member);
                    onOpenJoinModal();
                  }}
                  className="text-[10px] sm:text-[11px] font-bold text-[#0A192F] group-hover:text-[#B57D2B] inline-flex items-center gap-1 sm:gap-1.5 transition-colors mt-auto pt-2 sm:pt-2.5 border-t border-[#EADBBD]/60 text-left w-full cursor-pointer"
                >
                  <span>Connect Profile</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B57D2B] group-hover:translate-x-1 transition-transform" />
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
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-[#07172C] hover:bg-[#0B2548] text-white font-medium text-sm sm:text-base border border-[#B57D2B]/50 shadow-xl hover:shadow-2xl hover:shadow-[#B57D2B]/25 transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
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
