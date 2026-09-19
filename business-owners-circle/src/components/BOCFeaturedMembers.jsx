import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Megaphone, 
  Building2, 
  HeartPulse, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import membersKeralaBg from '../assets/boc-members-kerala-bg.jpg';
import arjunNairPhoto from '../assets/boc-member-arjun-nair.jpg';
import meeraThomasPhoto from '../assets/boc-member-meera-thomas.jpg';
import rohitMenonPhoto from '../assets/boc-member-rohit-menon.jpg';
import anithaVarmaPhoto from '../assets/boc-member-anitha-varma.jpg';
import sanjayPillaiPhoto from '../assets/boc-member-sanjay-pillai.jpg';
import bocLogoPng from '../assets/boc-logo.png';

/**
 * BOCFeaturedMembers — "Meet Our Valued Members" Executive Module
 * 1:1 Pixel-Perfect Recreation of Master Reference (media_1789791169061.jpg)
 *
 * Visual Highlights:
 * - Panoramic Kerala backwaters sunset background with traditional kettuvallam (houseboat) & wooden balcony railing
 * - Gold Kicker: "― FEATURED MEMBERS ―"
 * - Heading: "Meet Our Valued Members" with Playfair/Cinzel serif luxury styling
 * - Centered narrative lead paragraph & subtle gold divider
 * - 5 Verified Member Showcase Cards:
 *     1. Arjun Nair — NextGen Solutions (TECH & IT)
 *     2. Meera Thomas — Vista Consulting (CONSULTING)
 *     3. Rohit Menon — BrandSphere Media (MARKETING)
 *     4. Anitha Varma — GreenTech Industries (MANUFACTURING)
 *     5. Sanjay Pillai — LifeCare Hospitals (HEALTHCARE)
 * - Circular navy & gold medallions + Champagne industry pills
 * - Bottom Pill CTA: "View All Members →" with flanking golden rules
 * - Fully responsive: 5 columns on desktop, responsive swipe/grid on mobile & tablet
 */
export default function BOCFeaturedMembers({ onOpenJoinModal }) {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    {
      id: 'arjun-nair',
      name: 'Arjun Nair',
      company: 'NextGen Solutions',
      category: 'TECH & IT',
      tagline: 'Building innovative digital solutions for a smarter tomorrow.',
      icon: TrendingUp,
      photo: arjunNairPhoto,
    },
    {
      id: 'meera-thomas',
      name: 'Meera Thomas',
      company: 'Vista Consulting',
      category: 'CONSULTING',
      tagline: 'Helping businesses achieve sustainable growth through strategic insights.',
      icon: Users,
      photo: meeraThomasPhoto,
    },
    {
      id: 'rohit-menon',
      name: 'Rohit Menon',
      company: 'BrandSphere Media',
      category: 'MARKETING',
      tagline: 'Crafting brands that connect, engage and grow.',
      icon: Megaphone,
      photo: rohitMenonPhoto,
    },
    {
      id: 'anitha-varma',
      name: 'Anitha Varma',
      company: 'GreenTech Industries',
      category: 'MANUFACTURING',
      tagline: 'Sustainable solutions for a better and cleaner future.',
      icon: Building2,
      photo: anithaVarmaPhoto,
    },
    {
      id: 'sanjay-pillai',
      name: 'Sanjay Pillai',
      company: 'LifeCare Hospitals',
      category: 'HEALTHCARE',
      tagline: 'Quality healthcare for healthier communities.',
      icon: HeartPulse,
      photo: sanjayPillaiPhoto,
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ===================================================================== */}
        {/* 2. SECTION HEADER (KICKER, TITLE, NARRATIVE)                          */}
        {/* ===================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          
          {/* Kicker Badge with Horizontal Rules */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1.5px] w-6 sm:w-12 bg-[#B57D2B]" />
            <img src={bocLogoPng} alt="BOC Emblem" className="w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-sm" />
            <span className="text-[#B57D2B] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase font-cinzel">
              FEATURED MEMBERS
            </span>
            <div className="h-[1.5px] w-6 sm:w-12 bg-[#B57D2B]" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-bold tracking-tight leading-tight text-center mb-4">
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
        {/* 3. 5 MEMBER CARDS (5-COLUMN DESKTOP GRID / RESPONSIVE)               */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 mb-12 sm:mb-14">
          {members.map((member) => {
            const Icon = member.icon;
            return (
              <div 
                key={member.id}
                className="group relative bg-[#FAF8F5]/95 hover:bg-white backdrop-blur-md rounded-2xl p-3.5 sm:p-4 flex flex-col border border-[#EADBBD]/90 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(181,125,43,0.18)] hover:border-[#B57D2B]/60 transition-all duration-300 hover:-translate-y-1.5"
              >
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
                  <div className="w-8 h-8 rounded-full bg-[#07172C] border-2 border-[#D4AF37]/70 flex items-center justify-center text-[#D4AF37] shadow-md shrink-0 group-hover:rotate-6 transition-transform">
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>

                  {/* Champagne Category Pill */}
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F5EBD7] border border-[#EADBBD] text-[#9E6E24] text-[10px] font-bold tracking-wider uppercase ml-1.5 shadow-sm">
                    {member.category}
                  </span>
                </div>

                {/* Member Name */}
                <h3 className="font-serif font-bold text-lg text-[#0A192F] mb-0.5 leading-snug group-hover:text-[#B57D2B] transition-colors">
                  {member.name}
                </h3>

                {/* Company Name */}
                <span className="text-xs font-semibold text-slate-500 mb-2.5 block">
                  {member.company}
                </span>

                {/* Tagline / Bio */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4 flex-grow">
                  {member.tagline}
                </p>

                {/* View Profile Link */}
                <button
                  onClick={() => {
                    setSelectedMember(member);
                    onOpenJoinModal();
                  }}
                  className="text-xs font-bold text-[#0A192F] group-hover:text-[#B57D2B] inline-flex items-center gap-1.5 transition-colors mt-auto pt-2.5 border-t border-[#EADBBD]/60 text-left w-full cursor-pointer"
                >
                  <span>View Profile</span>
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
