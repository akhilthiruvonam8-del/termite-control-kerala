import React from 'react';
import { 
  Users, 
  Handshake, 
  Workflow, 
  TrendingUp, 
  Lightbulb, 
  Eye, 
  DoorOpen, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import bocMembershipNetworking from '../assets/boc-membership-networking.jpg';
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
 * BOCMembershipBenefits — "Membership Benefits" Executive Module
 * 1:1 Pixel-Perfect Recreation of Master Reference (media_1789753031520.jpg)
 *
 * Visual Highlights:
 * - Luxury warm ivory/cream background (#FAF8F5)
 * - Top-Left: "MEMBERSHIP BENEFITS" kicker, "More Connections. More Opportunities. More Growth." serif title, narrative paragraph
 * - Top-Right: High-res photograph of South Indian Malayali business owners networking on executive Kochi waterfront terrace
 * - 8 Benefit Cards (4x2 desktop grid):
 *     1. Professional Networking
 *     2. Business Referrals
 *     3. Collaboration Opportunities
 *     4. Business Growth
 *     5. Knowledge Sharing
 *     6. Business Visibility
 *     7. New Opportunities
 *     8. Mutual Support
 * - Bottom: Kerala houseboat on backwaters (left) + "Together We Grow" cursive sign-off with gold flourish (right)
 * - Responsive: Clean mobile & desktop layouts with zero text distortion
 */
export default function BOCMembershipBenefits({ onOpenJoinModal }) {
  const benefits = [
    {
      id: 'networking',
      title: 'Professional Networking',
      desc: 'Connect with like-minded business owners and professionals across diverse industries.',
      icon: Users,
    },
    {
      id: 'referrals',
      title: 'Business Referrals',
      desc: 'Discover genuine business opportunities through trusted recommendations.',
      icon: Handshake,
    },
    {
      id: 'collaboration',
      title: 'Collaboration Opportunities',
      desc: 'Work together on projects, services, campaigns and partnerships.',
      icon: Workflow,
    },
    {
      id: 'growth',
      title: 'Business Growth',
      desc: 'Gain new clients, expand your reach and grow your business sustainably.',
      icon: TrendingUp,
    },
    {
      id: 'knowledge',
      title: 'Knowledge Sharing',
      desc: 'Learn from experts, attend workshops and gain valuable business insights.',
      icon: Lightbulb,
    },
    {
      id: 'visibility',
      title: 'Business Visibility',
      desc: 'Showcase your business and increase your brand presence.',
      icon: Eye,
    },
    {
      id: 'opportunities',
      title: 'New Opportunities',
      desc: 'Get access to events, projects and opportunities within the BOC community.',
      icon: DoorOpen,
    },
    {
      id: 'support',
      title: 'Mutual Support',
      desc: 'Be part of a trusted community that supports, encourages and grows together.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section 
      id="membership-benefits" 
      className="relative w-full bg-[#FAF8F5] text-slate-800 overflow-hidden select-none border-t border-[#EADBBD]/40 py-16 sm:py-20 lg:py-24"
    >
      {/* Corner Botanical Palm Watermarks */}
      <div className="absolute top-2 left-2 pointer-events-none opacity-25 text-[#D4A536]">
        <PalmFrond className="w-28 sm:w-36 h-28 sm:h-36 transform -rotate-12" />
      </div>
      <div className="absolute top-2 right-2 pointer-events-none opacity-20 text-[#D4A536]">
        <PalmFrond className="w-32 sm:w-44 h-32 sm:h-44 transform scale-x-[-1] rotate-12" />
      </div>
      <div className="absolute bottom-2 right-2 pointer-events-none opacity-20 text-[#D4A536]">
        <PalmFrond className="w-28 sm:w-36 h-28 sm:h-36 transform rotate-45" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ===================================================================== */}
        {/* 1. TOP HERO ROW: HEADLINE & NARRATIVE (LEFT) + PHOTO (RIGHT)          */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            
            {/* Kicker Badge */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1.5px] w-8 sm:w-12 bg-[#B57D2B]" />
              <span className="text-[#B57D2B] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase font-cinzel">
                MEMBERSHIP BENEFITS
              </span>
              <div className="h-[1.5px] w-8 sm:w-12 bg-[#B57D2B]" />
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-bold tracking-tight leading-[1.08] mb-5">
              <span className="block text-[#0A192F]">More Connections.</span>
              <span className="block text-[#0A192F]">More Opportunities.</span>
              <span className="block text-[#B57D2B]">More Growth.</span>
            </h2>

            {/* Introductory Narrative Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Being a part of BOC gives you access to a powerful network, valuable resources and endless opportunities to grow your business and build lasting relationships.
            </p>

            {/* Mobile View Image Placement */}
            <div className="lg:hidden relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-[#EADBBD]/80 my-6">
              <img 
                src={bocMembershipNetworking} 
                alt="BOC Kerala Business Leaders Networking" 
                className="w-full h-full object-cover object-[center_30%]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Quick Action CTA Button */}
            <div className="pt-2 hidden sm:flex items-center gap-4">
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#07172C] hover:bg-[#0B2548] text-white font-medium text-sm shadow-md hover:shadow-lg hover:shadow-[#B57D2B]/15 transition-all duration-300 border border-[#B57D2B]/40 group"
              >
                <span>Join the Circle</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-xs text-slate-500 font-medium">
                Verified Category Exclusivity • 1 Seat per Industry
              </span>
            </div>
          </div>

          {/* Right Column: High-Res Executive Photograph (Desktop) */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-5 relative">
            <div className="relative w-full h-[380px] xl:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-[#EADBBD]/70 group">
              <img 
                src={bocMembershipNetworking} 
                alt="BOC Kerala Business Leaders Networking on Waterfront Terrace" 
                className="w-full h-full object-cover object-[center_35%] transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              {/* Soft aesthetic gradient frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Subtle badge on photo */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#07172C]/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#D4AF37]/30 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
                  <span className="text-xs font-medium tracking-wide">Kerala Executive Networking Forum</span>
                </div>
                <span className="text-[11px] font-cinzel font-bold text-[#D4AF37]">BOC EXCLUSIVE</span>
              </div>
            </div>
          </div>

        </div>


        {/* ===================================================================== */}
        {/* 2. 8 BENEFIT CARDS (4x2 DESKTOP GRID)                                 */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-12 lg:mt-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.id}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center border border-[#EADBBD]/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(181,125,43,0.12)] hover:border-[#B57D2B]/50 transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Navy & Gold Medallion Badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#07172C] flex items-center justify-center text-[#D4AF37] ring-4 ring-[#EADBBD]/40 group-hover:ring-[#B57D2B]/40 group-hover:scale-105 transition-all duration-300 mb-5 shadow-sm">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
                </div>

                {/* Card Title */}
                <h3 className="font-serif font-bold text-lg sm:text-[19px] text-[#0A192F] mb-3 leading-snug group-hover:text-[#B57D2B] transition-colors">
                  {benefit.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>


        {/* ===================================================================== */}
        {/* 3. BOTTOM FOOTER ACCENTS: HOUSEBOAT + SIGNATURE ("Together We Grow")  */}
        {/* ===================================================================== */}
        <div className="relative mt-12 sm:mt-16 pt-6 border-t border-[#EADBBD]/50 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Bottom Left: Kerala Houseboat & Palms Scenic Inset */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative w-36 sm:w-44 h-20 rounded-xl overflow-hidden shadow-sm border border-[#EADBBD]/80 shrink-0">
              <img 
                src={bocHouseboatPalms} 
                alt="Kerala Backwaters Houseboat" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-sm text-[#0A192F]">Rooted in Kerala</span>
              <span className="text-xs text-slate-500 max-w-[200px] leading-tight mt-0.5">
                Empowering visionary entrepreneurs across God's Own Country.
              </span>
            </div>
          </div>

          {/* Center: Mobile Join Button */}
          <div className="sm:hidden w-full">
            <button
              onClick={onOpenJoinModal}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#07172C] text-white font-medium text-sm shadow-md border border-[#B57D2B]/40"
            >
              <span>Join the Circle</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>

          {/* Bottom Right: Handwritten Signature "Together We Grow" with Gold Underline */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right select-none pr-0 md:pr-2">
            <span className="font-['Caveat',cursive] text-4xl sm:text-5xl text-[#0D2238] font-bold tracking-wide -rotate-2">
              Together We Grow
            </span>
            <svg className="w-48 sm:w-56 h-3.5 text-[#D4A536] -mt-1 mr-1" viewBox="0 0 160 12" fill="none">
              <path d="M2,9 Q80,2 158,8" stroke="#D4A536" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}
