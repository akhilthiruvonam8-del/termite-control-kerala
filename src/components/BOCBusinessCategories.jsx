import React from 'react';
import { 
  Code2, 
  Users, 
  Megaphone, 
  TrendingUp, 
  Home, 
  HeartPulse, 
  Factory, 
  GraduationCap, 
  ShoppingCart, 
  Scale, 
  HardHat, 
  Hotel,
  ArrowRight
} from 'lucide-react';
import categoriesBg from '../assets/boc-categories-kerala-bg.jpg';
import bocLogoPng from '../assets/boc-logo.png';

/**
 * BOCBusinessCategories — "Connect Across Industries. Create New Opportunities."
 * 1:1 Recreation of Master Reference (media_1789811016312.jpg)
 * 
 * Features:
 * - Panoramic Kerala backwaters backdrop with traditional Kettuvallam houseboat & modern skyline
 * - 12 Industry Category Cards in 4x3 Grid (Technology, Consulting, Marketing, Finance, Real Estate,
 *   Healthcare, Manufacturing, Education, Retail, Legal, Construction, Hospitality)
 * - Deep navy medallions with gold icons
 * - "DIFFERENT INDUSTRIES. ONE COMMUNITY." accent divider
 * - "Stronger Together" executive navy ribbon
 */
export default function BOCBusinessCategories({ onOpenJoinModal }) {
  const categories = [
    {
      id: 'tech-it',
      title: 'Technology & IT',
      desc: 'Software, IT services, digital solutions and more.',
      icon: Code2,
    },
    {
      id: 'consulting',
      title: 'Consulting',
      desc: 'Business, strategy, management and advisory services.',
      icon: Users,
    },
    {
      id: 'marketing-media',
      title: 'Marketing & Media',
      desc: 'Branding, digital marketing, media and communications.',
      icon: Megaphone,
    },
    {
      id: 'finance-accounting',
      title: 'Finance & Accounting',
      desc: 'Finance, accounting, tax, insurance and investment services.',
      icon: TrendingUp,
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      desc: 'Residential, commercial, property and investment.',
      icon: Home,
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      desc: 'Hospitals, clinics, healthcare services and wellness.',
      icon: HeartPulse,
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      desc: 'Industrial, production, engineering and supply chain.',
      icon: Factory,
    },
    {
      id: 'education-training',
      title: 'Education & Training',
      desc: 'Institutions, e-learning, coaching and skill development.',
      icon: GraduationCap,
    },
    {
      id: 'retail-ecommerce',
      title: 'Retail & E-commerce',
      desc: 'Retail, online stores, consumer brands and trade.',
      icon: ShoppingCart,
    },
    {
      id: 'legal-professional',
      title: 'Legal & Professional Services',
      desc: 'Law, HR, recruitment, professional services and more.',
      icon: Scale,
    },
    {
      id: 'construction-architecture',
      title: 'Construction & Architecture',
      desc: 'Construction, interior design, architecture and real estate development.',
      icon: HardHat,
    },
    {
      id: 'hospitality-tourism',
      title: 'Hospitality & Tourism',
      desc: 'Hotels, resorts, travel, events and tourism services.',
      icon: Hotel,
    },
  ];

  return (
    <section 
      id="business-categories" 
      className="relative w-full text-slate-900 overflow-hidden select-none py-16 sm:py-20 lg:py-24 border-t border-[#EADBBD]/40"
    >
      {/* ===================================================================== */}
      {/* 1. SCENIC KERALA BACKWATERS BACKDROP (Houseboat + City Skyline)        */}
      {/* ===================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={categoriesBg} 
          alt="Kerala Backwaters Houseboat and Skyline Background" 
          className="w-full h-full object-cover object-center transform scale-[1.02] filter brightness-[0.98] contrast-[1.02]"
        />
        {/* Soft atmospheric overlay for readability matching reference */}
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
              BUSINESS CATEGORIES
            </span>
            <div className="h-[1.5px] w-6 sm:w-12 bg-[#B57D2B]" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-bold tracking-tight leading-tight text-center mb-4">
            <span className="text-[#0A192F]">Connect Across Industries. </span>
            <br className="hidden sm:inline" />
            <span className="text-[#B57D2B]">Create New Opportunities.</span>
          </h2>

          {/* Narrative Paragraph */}
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            BOC brings business owners and professionals from diverse industries together for networking, referrals, collaboration and growth.
          </p>

          {/* Subtle Decorative Golden Accent Line */}
          <div className="w-12 h-[1.5px] bg-[#B57D2B]/50 mx-auto mt-4" />
        </div>

        {/* ===================================================================== */}
        {/* 3. 12 BUSINESS CATEGORY CARDS (4 Columns x 3 Rows)                   */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-14">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id}
                onClick={onOpenJoinModal}
                className="group relative bg-[#FAF8F5]/90 hover:bg-white backdrop-blur-md rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center border border-[#EADBBD]/80 hover:border-[#D4AF37] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(181,125,43,0.18)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Navy Circular Medallion with Gold Icon */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#07172C] border-2 border-[#D4AF37]/70 flex items-center justify-center text-[#D4AF37] shadow-md group-hover:scale-110 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 mb-4">
                  <Icon className="w-6 h-6 stroke-[1.9]" />
                </div>

                {/* Category Title */}
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#0A192F] group-hover:text-[#B57D2B] transition-colors mb-2 leading-snug">
                  {cat.title}
                </h3>

                {/* Category Description */}
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal flex-grow">
                  {cat.desc}
                </p>

                {/* Subtle Inquire Link on Hover */}
                <div className="text-[11px] font-bold text-[#B57D2B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 mt-3 pt-2 border-t border-[#EADBBD]/60 w-full justify-center">
                  <span>Inquire Seat</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* ===================================================================== */}
        {/* 4. BOTTOM ACCENT DIVIDER: DIFFERENT INDUSTRIES. ONE COMMUNITY.        */}
        {/* ===================================================================== */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
          <div className="h-[1.5px] w-8 sm:w-20 bg-[#B57D2B]/50" />
          <span className="text-[#B57D2B] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase font-cinzel text-center">
            DIFFERENT INDUSTRIES. ONE COMMUNITY.
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
            <span>Apply for Your Category Seat</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>

      {/* ===================================================================== */}
      {/* 5. STRONGER TOGETHER EXECUTIVE CORNER SWOOSH                          */}
      {/* ===================================================================== */}
      <div className="hidden sm:block absolute bottom-0 right-0 z-20 pointer-events-none">
        <div className="relative bg-[#07172C] border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-3xl px-8 py-3.5 shadow-2xl">
          <span className="font-serif italic font-semibold text-base sm:text-lg text-[#F9D678] tracking-wider drop-shadow-sm select-none">
            Stronger Together
          </span>
        </div>
      </div>
    </section>
  );
}
