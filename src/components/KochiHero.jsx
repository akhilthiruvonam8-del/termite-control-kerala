import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Award,
  ChevronDown
} from 'lucide-react';

export default function KochiHero({ onOpenInspectionModal }) {
  // 6 HD Background Slides matching user's exact images & branding tailored specifically for Kochi
  const slides = [
    {
      id: 1,
      image: '/images/hero-slide-1-protected-home.jpg',
      mobilePos: 'object-center',
      tag: 'MARINE DRIVE & BOLGATTY',
      title: 'Waterfront & Luxury Villa Defense',
      desc: 'Deep subterranean barrier and odorless borer protection for Marine Drive, Bolgatty & Kochi waterfront residences.'
    },
    {
      id: 6,
      image: '/images/hero-slide-pet-safe-shield.jpg',
      mobilePos: 'object-[54%_center] sm:object-center',
      tag: '100% PET-SAFE & ECO-FRIENDLY DEFENSE',
      title: 'Child & Pet-Safe Green Pest Protection',
      desc: 'Odorless, non-toxic herbal and green chemistry safe for families and pets across all Kochi residences.'
    },
    {
      id: 2,
      image: '/images/hero-slide-2-torch-inspect.jpg',
      mobilePos: 'object-[46%_center] sm:object-center',
      tag: 'KAKKANAD & INFOPARK TECH CORRIDOR',
      title: 'Precision Acoustic & Wall Inspection',
      desc: 'Advanced acoustic and thermal scanning to pinpoint hidden termite colonies across Kakkanad tech campuses and high-rises.'
    },
    {
      id: 3,
      image: '/images/hero-slide-3-indoor-inject.jpg',
      mobilePos: 'object-[64%_center] sm:object-center',
      tag: 'PANAMPILLY NAGAR & KADAVANTHRA',
      title: '100% Odorless Skirting & Gel Treatment',
      desc: 'Govt. CIB&RC certified odorless micro-injection protecting premium woodwork in Panampilly Nagar, Kadavanthra & Thevara.'
    },
    {
      id: 4,
      image: '/images/hero-slide-4-termite-macro.jpg',
      mobilePos: 'object-center',
      tag: 'EDAPPALLY, PALARIVATTOM & ALUVA',
      title: 'Subterranean Colony & Pest Eradication',
      desc: 'IS:6313 certified chemical barrier creating an impenetrable perimeter across Edappally, Palarivattom & Aluva.'
    },
    {
      id: 5,
      image: '/images/hero-slide-5-commercial-van.jpg',
      mobilePos: 'object-[56%_center] sm:object-center',
      tag: 'FORT KOCHI, VYTTILA & MARADU',
      title: 'Commercial Towers, Heritage & Showrooms',
      desc: 'Rapid response units equipped for Fort Kochi heritage estates, MG Road showrooms, Vyttila & Maradu commercial spaces.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Automatic Background Transition (every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };


  return (
    <section 
      className="relative w-full min-h-[calc(100dvh-82px)] sm:min-h-[calc(100vh-88px)] flex flex-col justify-between bg-[#020e09] overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Eco Pest India Master Hero Experience"
    >
      {/* ===================================================================== */}
      {/* 1. FULL BACKGROUND PICTURE CAROUSEL (Un-Zoomed Mobile + 2K HD Laptop) */}
      {/* ===================================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Mobile Ambient Backdrop Layer (prevents harsh bars while keeping top text readable) */}
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                className="sm:hidden absolute inset-0 w-full h-full object-cover object-center blur-md brightness-[0.36] saturate-125 scale-105 pointer-events-none"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* Main Crisp HD Image: Un-zoomed 16:10 natural widescreen framing on mobile, full-bleed on desktop */}
              <div className="absolute inset-x-0 top-[29%] aspect-[16/11] xs:aspect-[16/10] sm:inset-0 sm:aspect-auto sm:h-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)] sm:[mask-image:none]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover ${slide.mobilePos} transform-gpu transition-all duration-[6000ms] ease-out will-change-transform brightness-[1.05] contrast-[1.08] saturate-[1.18] filter ${
                    isActive ? 'scale-100 sm:scale-[1.05]' : 'scale-100'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchpriority={index === 0 ? 'high' : 'auto'}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Ultra-Light, Crystal-Clear Scrim: 85%+ of the image is 100% natural, bright & vivid */}
      <div className="absolute inset-0 z-15 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none hidden sm:block" />
      <div className="absolute top-0 inset-x-0 h-[34%] bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-15 sm:hidden" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/75 to-transparent pointer-events-none z-15 sm:hidden" />

      {/* ===================================================================== */}
      {/* 2. WRITINGS & BUTTONS LAYERED DIRECTLY ON TOP OF THE BACKGROUND       */}
      {/* ===================================================================== */}
      <div className="relative z-20 w-full h-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-5 xs:pt-7 sm:pt-6 md:pt-8 pb-4 sm:pb-6">
        
        {/* Main Hero Typography & Action Buttons (Moved down safely for mobile clearance) */}
        <div className="max-w-2xl lg:max-w-3xl mt-1 xs:mt-2 sm:mt-1 text-left">
          
          {/* Service Tag */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/85 border border-emerald-500/50 text-amber-300 text-[9px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-1 sm:mb-1.5 backdrop-blur-md shadow">
            <Award className="w-3 h-3 text-amber-400" />
            <span>{slides[currentSlide].tag}</span>
          </div>

          {/* Grand Headline: ECO PEST INDIA (All Solid White) */}
          <h1 className="font-cinzel font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-1 sm:mb-1.5 drop-shadow-[0_4px_24px_rgba(0,0,0,1)] [text-shadow:_0_2px_14px_rgba(0,0,0,0.95)]">
            ECO PEST INDIA
          </h1>

          {/* Attractive Slogan / Tagline */}
          <div className="text-xs xs:text-sm sm:text-lg md:text-xl font-cinzel font-bold text-amber-300 tracking-wide mb-1 sm:mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
            Safe Home, Healthy Life
          </div>

          {/* Attractive, High-Converting Pest Control Description */}
          <p className="text-[11px] xs:text-xs sm:text-sm md:text-base text-white font-medium leading-snug sm:leading-relaxed max-w-xl mb-2.5 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,1)] [text-shadow:_0_1px_8px_rgba(0,0,0,1)]">
            Kochi's #1 Odorless Termite &amp; Pest Defense for Luxury Residences, High-Rise Apartments &amp; Commercial Spaces. 100% Safe For Kids &amp; Pets • 10-Year Govt Warranty Bond.
          </p>

          {/* Quick Action CTA Button Floating on Image */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Primary Golden CTA Button */}
            <button
              onClick={() => onOpenInspectionModal && onOpenInspectionModal({ service: slides[currentSlide].title, location: 'Kochi' })}
              className="px-5 sm:px-7 py-2 sm:py-3.5 rounded-full bg-gradient-to-r from-[#FFE58F] via-[#F5C042] to-[#D49319] border border-[#FFF6C7] text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(245,192,66,0.65)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>Book Free Inspection</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Slide Dots (Mobile) & Subtle Scroll Down Prompt */}
        <div className="self-center z-25 flex flex-col items-center gap-2 pb-1">
          {/* Interactive Slide Dots on Mobile */}
          <div className="flex sm:hidden items-center gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`View slide ${idx + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  currentSlide === idx
                    ? 'w-5 h-1.5 bg-amber-400'
                    : 'w-1.5 h-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>

          <div 
            onClick={() => {
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center cursor-pointer group opacity-85 hover:opacity-100 transition-opacity"
            aria-label="Scroll down to About Us"
          >
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/70 group-hover:text-amber-300 transition-colors">
              Scroll
            </span>
            <ChevronDown className="w-4 h-4 text-amber-400 animate-bounce -mt-0.5" />
          </div>
        </div>

      </div>

      {/* Desktop Frosted Glass Prev / Next Arrows (Hidden on mobile to avoid cluttering content) */}
      <button
        onClick={prevSlide}
        aria-label="Previous Image"
        className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-black/75 border border-white/25 hover:border-amber-400/80 text-white items-center justify-center transition-all duration-300 backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 cursor-pointer group"
      >
        <ChevronLeft className="w-5 h-5 text-white group-hover:text-amber-300 transition-colors" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Image"
        className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-black/75 border border-white/25 hover:border-amber-400/80 text-white items-center justify-center transition-all duration-300 backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 cursor-pointer group"
      >
        <ChevronRight className="w-5 h-5 text-white group-hover:text-amber-300 transition-colors" />
      </button>

    </section>
  );
}
