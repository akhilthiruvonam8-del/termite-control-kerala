import React, { useState } from 'react';
import { 
  ArrowRight,
  Maximize2,
  X,
  Sparkles
} from 'lucide-react';

// Core Imagery Assets
import bocLogoPng from '../assets/boc-logo.png';
import aboutFounderJijeesh from '../assets/boc-about-founder-jijeesh.jpg';
import founderJijeeshFull from '../assets/boc-founder-jijeesh-full.jpg';
import founderSignaturePng from '../assets/boc-founder-signature.png';

/**
 * AboutPage — Exclusive Official "A Message from the Founder" Master Module
 * Standalone, elegant, uncluttered presentation of BOC — Business Owner's Circle
 * 
 * Contains exclusively:
 * - BOC Kochi Branding & Official Message Badge
 * - A Message from the Founder: Jijeesh Minerva
 * - Authentic 100% Unaltered HD Portrait with Natural Zoom (Hands in pockets, 3:4 framing)
 * - Golden Quote Box: "Business Owners Can Help Business Owners Grow."
 * - Core 5 Pillars: Connect. Support. Refer. Collaborate. Grow.
 * - Golden Signature Graphic & Direct "Join The Circle" Action
 */
export default function AboutPage({ onOpenJoinModal }) {
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020713] text-white pt-20 sm:pt-24 pb-20 selection:bg-[#D4AF37] selection:text-[#07172C] w-full max-w-full overflow-x-hidden relative flex flex-col justify-center">
      
      {/* Ambient Atmospheric Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0A254E]/40 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        {/* ===================================================================== */}
        {/* MASTER "A MESSAGE FROM THE FOUNDER" MODULE                            */}
        {/* ===================================================================== */}
        <section className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-[0_25px_70px_rgba(0,0,0,0.95)] bg-[#020B1A]">
          
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

                {/* Quick Action Buttons */}
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={onOpenJoinModal}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-black text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
                  >
                    <span>Join The Circle</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Authentic HD Founder Portrait (Exact Face, Reduced Zoom, Zero Alteration) */}
            <div className="lg:col-span-5 relative flex flex-col justify-center min-h-[460px] sm:min-h-[600px] lg:min-h-full bg-[#020B1A] overflow-hidden">
              
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
                onClick={() => setIsPhotoLightboxOpen(true)}
                className="absolute bottom-4 right-4 px-3.5 py-2 rounded-full bg-[#020B1A]/85 border border-[#D4AF37]/60 text-[#F9D678] text-[11px] font-cinzel font-bold uppercase tracking-wider backdrop-blur-md shadow-xl flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                title="View Full Resolution HD Photo"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Full HD</span>
              </button>

            </div>

          </div>

        </section>

      </div>

      {/* Founder Authentic HD Portrait Full-Resolution Lightbox Modal */}
      {isPhotoLightboxOpen && (
        <div 
          onClick={() => setIsPhotoLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200 cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl max-h-[92vh] w-full flex flex-col items-center cursor-default"
          >
            <button
              onClick={() => setIsPhotoLightboxOpen(false)}
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
