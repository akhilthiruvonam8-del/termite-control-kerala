import React, { useState } from 'react';
import { 
  Users, 
  Handshake, 
  TrendingUp, 
  Globe, 
  ArrowRight,
  Compass,
  Target,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Building2,
  MapPin,
  Share2,
  Heart,
  Sparkles,
  Maximize2,
  X
} from 'lucide-react';

// Core Imagery Assets
import bocLogoPng from '../assets/boc-logo.png';
import aboutHeroNets from '../assets/boc-about-hero-nets.jpg';
import aboutFounderJijeesh from '../assets/boc-about-founder-jijeesh.jpg';
import aboutVisionBg from '../assets/boc-about-vision-bg.jpg';

// Verified Member Portraits for chapter/network showcase
import jijeeshImg from '../assets/boc-member-jijeesh-minerva.jpg';
import sajishImg from '../assets/boc-member-sajish-maliyekkal.jpg';
import maheshImg from '../assets/boc-member-mahesh-prabudhan.jpg';
import binuImg from '../assets/boc-member-binu-tb.jpg';
import vidhuImg from '../assets/boc-member-vidhu-mezhuveli.jpg';
import anjanaImg from '../assets/boc-member-anjana-sreedharan.jpg';
import nidhiImg from '../assets/boc-member-nidhi-tomer.jpg';

/**
 * Custom Owl Icon matching Urban Owls Digital Branding
 */
function OwlLogoIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#051226"/>
      <circle cx="17" cy="23" r="8" fill="#FFFFFF" stroke="#051226" strokeWidth="2.5"/>
      <circle cx="17" cy="23" r="4" fill="#051226"/>
      <circle cx="18" cy="22" r="1.5" fill="#FFFFFF"/>
      <circle cx="31" cy="23" r="8" fill="#FFFFFF" stroke="#051226" strokeWidth="2.5"/>
      <circle cx="31" cy="23" r="4" fill="#051226"/>
      <circle cx="32" cy="22" r="1.5" fill="#FFFFFF"/>
      <polygon points="24,26 21,32 27,32" fill="#F5C042"/>
      <polygon points="11,14 16,7 19,15" fill="#DFC688"/>
      <polygon points="37,14 32,7 29,15" fill="#DFC688"/>
    </svg>
  );
}

/**
 * Custom Sprout Icon matching Eco Pest India Branding
 */
function LeafLogoIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5"/>
      <path d="M16 33C16 24.5 22 15 33 13C33 24.5 27 34.5 16 33Z" fill="#10B981"/>
      <path d="M16 33C22 30.5 27 24 31 17" stroke="#D1FAE5" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 28.5C24.5 23.5 28.5 20.5 28.5 20.5" stroke="#047857" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

/**
 * AboutPage — Exact 1:1 Match to Master Mockup (media_1790784313478.jpg)
 * Features:
 * 1. Master Hero Section: About BOC + Waterfront Coffee Networking with Chinese Fishing Nets
 * 2. Founder Spotlight: Crisp Jijeesh Minerva Portrait + Bio + Urban Owls Digital & Eco Pest India
 * 3. Our Vision & Our Mission: Backwaters Boat/Nets Backdrop + 5 Core Value Pillars (Connect, Support, Refer, Collaborate, Grow)
 * 4. Regional Chapters Network & Council Verification Call to Action
 */
export default function AboutPage({ onOpenJoinModal }) {
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);

  // 5 Core Mission Pillars (Exact 1:1 from media_1790784313478.jpg)
  const missionPillars = [
    {
      id: 'connect',
      title: 'CONNECT',
      icon: Handshake,
      desc: 'Build meaningful professional relationships.'
    },
    {
      id: 'support',
      title: 'SUPPORT',
      icon: Heart,
      desc: 'Share knowledge, experience and business resources.'
    },
    {
      id: 'refer',
      title: 'REFER',
      icon: Share2,
      desc: 'Create genuine business opportunities for fellow members.'
    },
    {
      id: 'collaborate',
      title: 'COLLABORATE',
      icon: Users,
      desc: 'Build partnerships and work together on opportunities.'
    },
    {
      id: 'grow',
      title: 'GROW',
      icon: TrendingUp,
      desc: 'Create sustainable business growth through a strong professional network.'
    }
  ];

  // Statewide Chapters
  const chapters = [
    {
      name: 'Kochi Chapter',
      tagline: 'Commercial & Infopark Corridor',
      desc: 'Central commercial hub connecting tech, international trade, manufacturing, and financial advisory.',
      membersCount: '150+ Verified Seats',
    },
    {
      name: 'Kottayam Chapter',
      tagline: 'Plantation & Healthcare Hub',
      desc: 'Rubber and agro-conglomerates, multi-specialty healthcare systems, and higher education leaders.',
      membersCount: '40+ Verified Seats',
    },
    {
      name: 'Thiruvananthapuram Chapter',
      tagline: 'Capital Gateway & Space Tech',
      desc: 'Government relations, aerospace engineering, bio-tech, and institutional commercial leaders.',
      membersCount: '28+ Verified Seats',
    },
    {
      name: 'Thrissur Chapter',
      tagline: 'Financial & NBFC Heartland',
      desc: 'Kerala’s banking epicenter, gold jewellery retail, infrastructure, and heavy fabrication.',
      membersCount: '30+ Verified Seats',
    },
    {
      name: 'Kozhikode Chapter',
      tagline: 'Malabar Trade & Global Exports',
      desc: 'Centuries of international maritime trade, spice exports, retail conglomerates, and food science.',
      membersCount: '25+ Verified Seats',
    },
    {
      name: 'Kollam Chapter',
      tagline: 'Maritime & Agro-Processing',
      desc: 'Port logistics, cashew processing, marine exports, and eco-hospitality enterprises.',
      membersCount: '40+ Verified Seats',
    },
  ];

  return (
    <div className="min-h-screen bg-[#020713] text-white pt-16 sm:pt-20 pb-20 selection:bg-[#D4AF37] selection:text-[#07172C] w-full max-w-full overflow-x-hidden relative">
      
      {/* Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0A254E]/40 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12 sm:space-y-16">
        
        {/* ===================================================================== */}
        {/* 1. MASTER ABOUT BOC HERO SHOWCASE (1:1 with media_1790784313478.jpg)   */}
        {/* ===================================================================== */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] bg-[#020816]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px] sm:min-h-[520px]">
            
            {/* Left Content Column (100% Vector Typed Typography) */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-center relative z-10 bg-gradient-to-b from-[#020816] via-[#020816]/95 to-[#020816] lg:bg-transparent select-text">
              
              {/* Soft backdrop scrim for desktop */}
              <div className="hidden lg:block absolute inset-0 -right-24 bg-gradient-to-r from-[#020816] via-[#020816]/95 via-[#020816]/75 to-transparent -z-10 pointer-events-none" />

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="font-cinzel text-xs sm:text-[13px] font-bold text-[#FCE38A] tracking-[0.24em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  ABOUT BOC
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif font-black text-3xl sm:text-5xl lg:text-5xl text-white tracking-tight leading-[1.1] mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Business Owner’s<br />Circle
              </h1>

              {/* Sub-tagline */}
              <p className="text-[#FCE38A] font-semibold text-xs sm:text-sm lg:text-[14px] leading-snug mb-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                Built for Business Owners. Driven by Connections. Created for Mutual Growth.
              </p>

              {/* Body Text (Exact words from mockup) */}
              <div className="space-y-3 text-slate-200 text-xs sm:text-[13px] leading-relaxed mb-6 font-normal">
                <p>
                  BOC – Business Owner’s Circle is a professional business community created around a simple belief:
                  <br />
                  <span className="text-white font-medium">Business grows better when business owners grow together.</span>
                </p>
                <p className="text-slate-300">
                  BOC brings business owners, entrepreneurs and professionals together to create meaningful connections, share knowledge, support one another, generate business referrals, explore collaborations and create new opportunities.
                </p>
              </div>

              {/* Golden Core Objective Motto */}
              <div className="pt-2 border-t border-[#DFC688]/30">
                <p className="font-cinzel font-black text-xs sm:text-sm lg:text-[15px] text-[#F5C042] tracking-wider drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  Connect. Support. Refer. Collaborate. Grow.
                </p>
              </div>

            </div>

            {/* Right Photo Column (Executives with Waterfront & Chinese Fishing Nets) */}
            <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[340px] lg:min-h-full overflow-hidden">
              <img
                src={aboutHeroNets}
                alt="Business Executives Coffee Networking at Kochi Waterfront"
                className="w-full h-full object-cover object-[center_center] select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020816] via-transparent to-transparent lg:hidden pointer-events-none" />
              <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020816] to-transparent pointer-events-none" />

              {/* Fullscreen Photo Lightbox Button */}
              <button
                onClick={() => setIsPhotoLightboxOpen(true)}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#030A17]/85 border border-[#D4AF37]/60 text-[#F9D678] text-[11px] font-cinzel font-bold uppercase tracking-wider backdrop-blur-md shadow-lg flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                title="View Fullscreen"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Photo</span>
              </button>
            </div>

          </div>

        </div>


        {/* ===================================================================== */}
        {/* 2. FOUNDER SPOTLIGHT: JIJEESH MINERVA (1:1 with media_1790784313478)  */}
        {/* ===================================================================== */}
        <section className="rounded-2xl sm:rounded-3xl bg-[#FAF8F5] text-[#0A192F] p-6 sm:p-10 lg:p-14 border border-slate-200 shadow-xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Founder Photo Card with Attached Dark Navy Box */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-2xl bg-[#020B1A]">
                
                {/* Jijeesh Minerva Crystal-Clear HD Portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  <img
                    src={aboutFounderJijeesh}
                    alt="Jijeesh Minerva - Founder, BOC Business Owner's Circle"
                    className="w-full h-full object-cover object-[center_top] select-none"
                  />
                  {/* Subtle top/bottom rim for contrast */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
                </div>

                {/* Attached Dark Navy Bottom Box (Exact 1:1 from Mockup) */}
                <div className="p-5 sm:p-6 bg-[#020B1A] text-left select-text">
                  <h3 className="font-serif font-black text-xl sm:text-2xl text-white tracking-wide">
                    Jijeesh Minerva
                  </h3>
                  <p className="font-cinzel text-xs font-bold text-[#FCE38A] tracking-wider uppercase mt-1 mb-2.5">
                    Founder, BOC – Business Owner’s Circle
                  </p>
                  <div className="h-[1px] w-full bg-white/15 mb-2.5" />
                  <p className="text-[11px] sm:text-xs text-slate-300 font-medium">
                    Founder – Urban Owls Digital &nbsp;|&nbsp; Owner – Eco Pest India
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column: Founder Narrative & Business Interests */}
            <div className="lg:col-span-7 flex flex-col justify-center select-text">
              
              {/* Eyebrow */}
              <div className="text-[11px] font-cinzel font-bold text-[#C5A059] tracking-[0.24em] uppercase mb-1">
                ABOUT THE FOUNDER
              </div>

              {/* Founder Name */}
              <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#030B17] tracking-tight mb-1">
                Jijeesh Minerva
              </h2>

              {/* Role Subtitle */}
              <p className="font-cinzel text-xs sm:text-[13px] font-bold text-[#C5A059] tracking-wider uppercase mb-5">
                Founder, BOC – Business Owner’s Circle
              </p>

              {/* 5 Founder Narrative Paragraphs (Exact from Mockup) */}
              <div className="space-y-3.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                <p>
                  Jijeesh Minerva is an entrepreneur with experience across business development, digital marketing, brand building and service-based businesses.
                </p>
                <p>
                  He is the Founder of BOC – Business Owner’s Circle, a business community focused on meaningful connections, business support, referrals and collaboration.
                </p>
                <p>
                  He is also the Founder of Urban Owls Digital, a digital marketing and digital growth company, and the Owner of Eco Pest India, a professional pest management business.
                </p>
                <p>
                  Through his entrepreneurial journey across different industries, Jijeesh has developed a strong understanding of the importance of relationships, visibility, trust and business connections.
                </p>
                <p>
                  BOC brings that experience into a community-driven platform designed to help business owners connect with the right people and discover opportunities to grow together.
                </p>
              </div>

              {/* Section Sub-heading: FOUNDER'S BUSINESS INTERESTS */}
              <div className="mt-7 pt-5 border-t border-slate-200">
                <div className="text-[11px] font-cinzel font-black text-slate-500 tracking-[0.22em] uppercase mb-3.5">
                  FOUNDER’S BUSINESS INTERESTS
                </div>

                {/* Two Venture Cards Grid (1:1 with media_1790784313478.jpg) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Card 1: Urban Owls Digital */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#DFC688] hover:shadow-md transition-all group flex items-start gap-3.5">
                    <div className="shrink-0 mt-0.5">
                      <OwlLogoIcon className="w-11 h-11" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-[#030B17] group-hover:text-[#B58A36] transition-colors leading-tight">
                        Urban Owls Digital
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug mt-1 mb-2">
                        Digital Marketing • Website Development • Lead Generation • Digital Growth
                      </p>
                      <a 
                        href="https://urbanowls.co" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#030B17] hover:text-[#B58A36] transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5 text-slate-600" />
                        <span className="underline decoration-slate-300">urbanowls.co</span>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Card 2: Eco Pest India */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-md transition-all group flex items-start gap-3.5">
                    <div className="shrink-0 mt-0.5">
                      <LeafLogoIcon className="w-11 h-11" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-[#030B17] group-hover:text-emerald-700 transition-colors leading-tight">
                        Eco Pest India
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug mt-1 mb-2">
                        Professional Pest Management • Termite Control • Pest Management Solutions
                      </p>
                      <a 
                        href="https://ecopestindia.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#030B17] hover:text-emerald-700 transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5 text-slate-600" />
                        <span className="underline decoration-slate-300">ecopestindia.com</span>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================================== */}
        {/* 3. OUR VISION & OUR MISSION (1:1 with media_1790784313478.jpg)         */}
        {/* ===================================================================== */}
        <section className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-[#010612]">
          
          {/* Background: Kochi Waterfront with Traditional Boat & Chinese Fishing Nets at Sunset */}
          <div className="absolute inset-0">
            <img
              src={aboutVisionBg}
              alt="Kochi Waterfront Boat & Nets"
              className="w-full h-full object-cover object-left select-none pointer-events-none"
            />
            {/* Scrim Overlay that smoothly darkens the right side for clear typography */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#010612]/75 via-[#010612]/92 to-[#010612] pointer-events-none" />
          </div>

          <div className="relative z-10 p-6 sm:p-10 lg:p-14">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: OUR VISION (Col-span 4) */}
              <div className="lg:col-span-4 select-text">
                
                {/* Vision Icon & Heading */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full border-2 border-[#FCE38A] bg-[#020A17] flex items-center justify-center text-[#FCE38A] shadow-[0_0_12px_rgba(252,227,138,0.4)]">
                    <Compass className="w-4 h-4 stroke-[2.4]" />
                  </div>
                  <h3 className="font-cinzel font-black tracking-[0.2em] text-sm sm:text-base text-[#FCE38A] uppercase">
                    OUR VISION
                  </h3>
                </div>

                {/* Vision Statement */}
                <p className="text-slate-200 text-xs sm:text-[13px] leading-relaxed max-w-sm pl-12 font-normal">
                  To build a trusted business community where every genuine business owner can find connections, support, opportunities and relationships that contribute to sustainable growth.
                </p>

              </div>

              {/* Right Column: OUR MISSION + 5 Value Pillars (Col-span 8) */}
              <div className="lg:col-span-8 select-text">
                
                {/* Mission Icon & Heading */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full border-2 border-[#FCE38A] bg-[#020A17] flex items-center justify-center text-[#FCE38A] shadow-[0_0_12px_rgba(252,227,138,0.4)]">
                    <Target className="w-4 h-4 stroke-[2.4]" />
                  </div>
                  <h3 className="font-cinzel font-black tracking-[0.2em] text-sm sm:text-base text-[#FCE38A] uppercase">
                    OUR MISSION
                  </h3>
                </div>

                {/* Mission Introduction */}
                <p className="text-slate-200 text-xs sm:text-[13px] mb-6 pl-12 font-normal">
                  To create a professional ecosystem where business owners can:
                </p>

                {/* 5 Value Pillars Grid (Connect, Support, Refer, Collaborate, Grow) */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-3 text-center">
                  {missionPillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div 
                        key={pillar.id}
                        className="flex flex-col items-center p-3 rounded-xl bg-[#030C1C]/80 border border-[#DFC688]/30 hover:border-[#FCE38A] transition-all group backdrop-blur-sm"
                      >
                        {/* Circular Icon */}
                        <div className="w-10 h-10 rounded-full bg-[#020A17] border-2 border-[#FCE38A] flex items-center justify-center text-[#FCE38A] shadow-[0_0_12px_rgba(252,227,138,0.35)] group-hover:scale-110 group-hover:border-[#FFF5C0] group-hover:text-[#FFF5C0] transition-transform mb-2">
                          <Icon className="w-4 h-4 stroke-[2.2]" />
                        </div>

                        {/* Title */}
                        <h4 className="font-cinzel font-black text-[11px] sm:text-xs text-[#FCE38A] uppercase tracking-wider mb-1">
                          {pillar.title}
                        </h4>

                        {/* Description */}
                        <p className="text-[10px] sm:text-[10.5px] text-slate-300 leading-tight">
                          {pillar.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================================== */}
        {/* 4. STATEWIDE CHAPTER NETWORK (Regional Leadership Hubs)                */}
        {/* ===================================================================== */}
        <section className="pt-4">
          <div className="text-center max-w-2xl mx-auto mb-10 select-text">
            <div className="text-xs font-cinzel font-bold text-[#F9D678] tracking-[0.24em] uppercase mb-2">
              EXPANDING HORIZONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Statewide Chapter Network
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              BOC is establishing active chapters across key commercial hubs in Kerala.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {chapters.map((ch, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#051428] to-[#020B17] border border-[#D4AF37]/30 hover:border-[#F9D678] transition-all hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#F9D678]" />
                    <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#F9D678] transition-colors">
                      {ch.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold text-[#F9D678] px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 whitespace-nowrap">
                    {ch.membersCount}
                  </span>
                </div>
                <div className="text-xs font-semibold text-[#DFC688] mb-2">{ch.tagline}</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{ch.desc}</p>
                <button
                  onClick={onOpenJoinModal}
                  className="w-full py-2 rounded-xl bg-white/5 hover:bg-[#D4AF37] hover:text-[#07172C] border border-[#D4AF37]/30 text-xs font-cinzel font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Apply for Chapter</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </section>


        {/* ===================================================================== */}
        {/* 5. CLOSING INVITATION BANNER (Apply for Council Review)               */}
        {/* ===================================================================== */}
        <section className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#03132B] via-[#051C3D] to-[#03132B] border-2 border-[#D4AF37]/60 shadow-[0_0_40px_rgba(212,175,55,0.25)] text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto select-text">
            <span className="font-cinzel text-xs font-bold text-[#F9D678] tracking-[0.24em] uppercase">
              BECOME A MEMBER
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight mt-2 mb-4">
              Ready to Accelerate Your Business Growth?
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
              Experience the power of executive business networking with genuine founders, category exclusivity, and verified peer referrals across Kerala.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenJoinModal}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(212,175,55,0.7)] hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>APPLY FOR MEMBERSHIP</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
              <a
                href="tel:+919020040009"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-[#D4AF37]/50 text-white font-cinzel font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2"
              >
                <span>CONTACT SECRETARIAT</span>
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {isPhotoLightboxOpen && (
        <div 
          onClick={() => setIsPhotoLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200 cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-6xl max-h-[92vh] w-full flex flex-col items-center cursor-default"
          >
            <button
              onClick={() => setIsPhotoLightboxOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#F9D678] transition-colors cursor-pointer"
              aria-label="Close Fullscreen View"
            >
              <X className="w-7 h-7 stroke-[2.5]" />
            </button>
            <img
              src={aboutHeroNets}
              alt="Business Owners Circle Waterfront Meeting Fullscreen"
              className="w-auto h-auto max-h-[82vh] max-w-full rounded-2xl object-contain shadow-2xl border border-[#D4AF37]/40"
            />
            <div className="mt-3 text-center">
              <p className="font-serif italic text-base text-[#FCE38A]">
                Business Owners Circle (BOC) — Waterfront Executive Gathering
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
