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
  Share2,
  Heart,
  Sparkles,
  Maximize2,
  X,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';

// Core Imagery Assets
import bocLogoPng from '../assets/boc-logo.png';
import aboutFounderJijeesh from '../assets/boc-about-founder-jijeesh.jpg';
import founderJijeeshFull from '../assets/boc-founder-jijeesh-full.jpg';

// Official Partner & Founder Assets
import ecoPestLogo from '../assets/eco-pest-india-logo.png';
import founderSignaturePng from '../assets/boc-founder-signature.png';

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
 * AboutPage — Exclusive Official "A Message from the Founder" Master Module
 * Direct, elegant, uncluttered presentation of BOC — Business Owner's Circle
 * Features:
 * 1. Founder's Authentic Message & Journey (Exact Narrative from Jijeesh Minerva)
 * 2. Authentic Jijeesh Minerva HD Photograph (Reduced Zoom, Natural 3:4 Framing, Crystal Clear)
 * 3. Golden Core Belief Quote: "Business Owners Can Help Business Owners Grow."
 * 4. Founder's Businesses: Urban Owls Digital + Official Eco Pest India
 * 5. 5 Core Value Pillars: Connect, Support, Refer, Collaborate, Grow
 * 6. Closing Membership Action
 */
export default function AboutPage({ onOpenJoinModal }) {
  const [isFounderPhotoModalOpen, setIsFounderPhotoModalOpen] = useState(false);

  // 5 Core Mission Pillars
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

  return (
    <div className="min-h-screen bg-[#020713] text-white pt-16 sm:pt-20 pb-20 selection:bg-[#D4AF37] selection:text-[#07172C] w-full max-w-full overflow-x-hidden relative">
      
      {/* Ambient Atmospheric Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0A254E]/40 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-10 sm:space-y-14">
        
        {/* ===================================================================== */}
        {/* 1. MASTER MODULE: A MESSAGE FROM THE FOUNDER                          */}
        {/* ===================================================================== */}
        <section className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-[0_20px_60px_rgba(0,0,0,0.95)] bg-[#020B1A]">
          
          {/* Subtle Ambient Backdrops */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0A254E]/40 rounded-full blur-[140px]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Founder Message Content */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between select-text border-b lg:border-b-0 lg:border-r border-[#D4AF37]/20 bg-gradient-to-b from-[#020B1A] via-[#020917] to-[#010612]">
              
              <div>
                
                {/* Header Branding Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img 
                      src={bocLogoPng} 
                      alt="BOC Kochi - Business Owner's Circle" 
                      className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" 
                    />
                    <div>
                      <div className="font-cinzel text-xs font-bold text-[#FCE38A] tracking-[0.22em] uppercase">
                        BOC KOCHI
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium tracking-wide">
                        BUSINESS OWNER’S CIRCLE
                      </div>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[10px] font-cinzel font-bold text-[#FCE38A] uppercase tracking-wider">
                    Official Message
                  </span>
                </div>

                {/* Eyebrow with gold accent lines */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="h-[1.5px] w-6 bg-gradient-to-r from-transparent to-[#FCE38A]" />
                  <span className="font-cinzel text-xs sm:text-[13px] font-bold text-[#FCE38A] tracking-[0.22em] uppercase">
                    A MESSAGE FROM THE FOUNDER
                  </span>
                  <div className="h-[1.5px] w-12 bg-gradient-to-r from-[#FCE38A] to-transparent" />
                </div>

                {/* Founder Name */}
                <h1 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1] mb-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  Jijeesh Minerva
                </h1>

                {/* Subtitle */}
                <p className="font-cinzel text-xs sm:text-sm font-bold text-[#FCE38A] tracking-wider uppercase mb-6">
                  Founder, BOC – Business Owner’s Circle
                </p>

                {/* Message Paragraphs (Exact Authentic Message) */}
                <div className="space-y-3.5 text-slate-200 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                  <p>
                    I have always believed that behind every business there is a person with a story. Someone who took a risk. Someone who started with an idea. Someone who faced challenges, made mistakes, learned, adapted and kept moving forward.
                  </p>

                  <p className="font-medium text-white">
                    As a business owner myself, I understand that journey.
                  </p>

                  <p>
                    Through my own businesses — <span className="text-[#FCE38A] font-semibold">Eco Pest India</span> and <span className="text-[#FCE38A] font-semibold">Urban Owls Digital</span> — I have experienced the importance of having the right people around you. There have been times when a simple introduction, a recommendation, an honest suggestion or a conversation with another business owner could make a real difference.
                  </p>

                  <p>
                    That made me think: What if business owners had a community where they could genuinely support one another? Not just exchanging visiting cards. Not just attending meetings. But actually knowing each other, trusting each other, referring business to each other, sharing experiences and standing by each other when support is needed.
                  </p>

                  <p className="font-medium text-white">
                    That thought became the foundation of BOC – Business Owner’s Circle.
                  </p>
                </div>

                {/* Golden Quote Highlight Box */}
                <div className="my-5 p-4 rounded-xl bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent border-l-4 border-[#FCE38A] shadow-inner">
                  <p className="font-serif italic font-bold text-sm sm:text-base text-[#FCE38A] tracking-wide">
                    “Business Owners Can Help Business Owners Grow.”
                  </p>
                </div>

                {/* Concluding Paragraphs */}
                <div className="space-y-3 text-slate-200 text-xs sm:text-[13.5px] leading-relaxed font-normal mb-5">
                  <p>
                    That is where the real value of a community begins.
                  </p>
                  <p>
                    If you are a genuine business owner who believes in trust, professionalism, mutual support and ethical business, I invite you to be part of this journey.
                  </p>
                  <p className="font-medium text-white">
                    This is our circle. This is our opportunity to grow together.
                  </p>
                </div>

                {/* 5 Core Pillars Motto */}
                <div className="py-2.5 px-3.5 rounded-lg bg-[#010612]/80 border border-[#DFC688]/30 mb-6">
                  <p className="font-cinzel font-black text-xs sm:text-[13.5px] text-[#F5C042] tracking-wider text-center sm:text-left">
                    Connect. Support. Refer. Collaborate. Grow.
                  </p>
                </div>

              </div>

              {/* Signature Row & Founder Attribution */}
              <div className="pt-4 border-t border-[#D4AF37]/25 flex items-end justify-between gap-4">
                <div>
                  {/* Handwritten Signature */}
                  <div className="mb-1">
                    <img 
                      src={founderSignaturePng} 
                      alt="Jijeesh Signature" 
                      className="h-11 sm:h-13 w-auto object-contain filter drop-shadow-[0_2px_4px_rgba(252,227,138,0.35)]"
                    />
                  </div>
                  <div className="font-serif font-bold text-base text-white tracking-wide">
                    Jijeesh Minerva
                  </div>
                  <div className="font-cinzel text-[11px] font-semibold text-[#FCE38A] tracking-wider uppercase">
                    Founder, BOC – Business Owner’s Circle
                  </div>
                </div>

                {/* Quick Action Button */}
                <button
                  onClick={onOpenJoinModal}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-black text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer whitespace-nowrap hidden sm:inline-flex items-center gap-1.5"
                >
                  <span>Join The Circle</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>

            </div>

            {/* Right Column: Authentic HD Founder Portrait (Exact Face, Reduced Zoom, Zero Alteration) */}
            <div className="lg:col-span-5 relative flex flex-col justify-center min-h-[440px] sm:min-h-[580px] lg:min-h-full bg-[#020B1A] overflow-hidden">
              
              <img
                src={aboutFounderJijeesh}
                alt="Jijeesh Minerva - Founder, BOC Business Owner's Circle"
                className="w-full h-full object-cover object-[center_top] select-none"
              />
              
              {/* Subtle edge scrim gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020B1A] via-transparent to-transparent lg:hidden pointer-events-none" />
              <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#020B1A] to-transparent pointer-events-none" />

              {/* Floating Verified Founder Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3.5 py-1.5 rounded-full bg-[#020B1A]/85 border border-[#D4AF37]/60 backdrop-blur-md shadow-xl flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FCE38A]" />
                <span className="font-cinzel text-[11px] font-bold text-[#FCE38A] uppercase tracking-wider">
                  Founder & Visionary
                </span>
              </div>

              {/* Fullscreen Photo Lightbox Button */}
              <button
                onClick={() => setIsFounderPhotoModalOpen(true)}
                className="absolute bottom-4 right-4 px-3.5 py-2 rounded-full bg-[#020B1A]/85 border border-[#D4AF37]/60 text-[#F9D678] text-[11px] font-cinzel font-bold uppercase tracking-wider backdrop-blur-md shadow-xl flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                title="View Full Resolution HD Photo"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Full HD</span>
              </button>

            </div>

          </div>

        </section>


        {/* ===================================================================== */}
        {/* 2. FOUNDER'S BUSINESS INTERESTS (Urban Owls + Official Eco Pest India) */}
        {/* ===================================================================== */}
        <section className="rounded-2xl sm:rounded-3xl bg-[#FAF8F5] text-[#0A192F] p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-xl overflow-hidden">
          
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-6 select-text">
              <span className="text-[11px] font-cinzel font-black text-[#C5A059] tracking-[0.24em] uppercase">
                PORTFOLIO VENTURES
              </span>
              <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#030B17] tracking-tight mt-1">
                Founder’s Business Interests
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
                Established enterprises built on trust, client commitment, and professional excellence across Kerala.
              </p>
            </div>

            {/* Two Venture Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Card 1: Urban Owls Digital */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#DFC688] hover:shadow-lg transition-all group flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <OwlLogoIcon className="w-12 h-12" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base text-[#030B17] group-hover:text-[#B58A36] transition-colors leading-tight">
                    Urban Owls Digital
                  </h3>
                  <p className="text-xs text-slate-500 leading-snug mt-1.5 mb-3">
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

              {/* Card 2: Official Eco Pest India with Actual Logo */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-lg transition-all group flex items-start gap-4">
                <div className="shrink-0 w-14 h-14 flex items-center justify-center bg-white rounded-xl border border-slate-100 shadow-xs p-1">
                  <img 
                    src={ecoPestLogo} 
                    alt="Eco Pest India Logo" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base text-[#030B17] group-hover:text-emerald-700 transition-colors leading-tight">
                    Eco Pest India
                  </h3>
                  <p className="text-xs text-slate-500 leading-snug mt-1.5 mb-3">
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

        </section>


        {/* ===================================================================== */}
        {/* 3. CORE MISSION ARCHITECTURE (5 Pillars of BOC)                       */}
        {/* ===================================================================== */}
        <section className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#031126] to-[#010815] border border-[#D4AF37]/35 shadow-xl">
          
          <div className="text-center max-w-2xl mx-auto mb-8 select-text">
            <span className="text-[11px] font-cinzel font-bold text-[#FCE38A] tracking-[0.24em] uppercase">
              COMMUNITY FOUNDATION
            </span>
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-white tracking-tight mt-1 mb-2">
              Our 5 Core Pillars
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-300">
              Every gathering, referral, and collaboration in BOC is anchored upon five core principles.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 text-center">
            {missionPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={pillar.id}
                  className="flex flex-col items-center p-4 rounded-2xl bg-[#020A17]/85 border border-[#DFC688]/30 hover:border-[#FCE38A] transition-all group backdrop-blur-sm hover:-translate-y-1"
                >
                  <div className="w-11 h-11 rounded-full bg-[#030C1C] border-2 border-[#FCE38A] flex items-center justify-center text-[#FCE38A] shadow-[0_0_12px_rgba(252,227,138,0.35)] group-hover:scale-110 group-hover:border-[#FFF5C0] group-hover:text-[#FFF5C0] transition-transform mb-3">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  <h3 className="font-cinzel font-black text-xs text-[#FCE38A] uppercase tracking-wider mb-1.5">
                    {pillar.title}
                  </h3>

                  <p className="text-[11px] text-slate-300 leading-snug">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </section>


        {/* ===================================================================== */}
        {/* 4. CLOSING INVITATION BANNER (Apply for Membership)                   */}
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

      {/* Founder Authentic HD Portrait Full-Resolution Lightbox Modal */}
      {isFounderPhotoModalOpen && (
        <div 
          onClick={() => setIsFounderPhotoModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200 cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl max-h-[92vh] w-full flex flex-col items-center cursor-default"
          >
            <button
              onClick={() => setIsFounderPhotoModalOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#F9D678] transition-colors cursor-pointer"
              aria-label="Close Fullscreen View"
            >
              <X className="w-7 h-7 stroke-[2.5]" />
            </button>
            <img
              src={founderJijeeshFull}
              alt="Jijeesh Minerva Full HD Portrait"
              className="w-auto h-auto max-h-[84vh] max-w-full rounded-2xl object-contain shadow-2xl border border-[#D4AF37]/40"
            />
            <div className="mt-3 text-center">
              <p className="font-serif font-bold text-lg text-white">
                Jijeesh Minerva
              </p>
              <p className="font-cinzel text-xs text-[#FCE38A] uppercase tracking-wider">
                Founder, BOC – Business Owner’s Circle
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
