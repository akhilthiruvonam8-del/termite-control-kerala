import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Award
} from 'lucide-react';

export default function KochiHero({ onOpenInspectionModal }) {
  // 6 HD Background Slides with dedicated 3:4 un-zoomed mobile portrait versions + 16:9 widescreen desktop versions
  const slides = [
    {
      id: 1,
      image: '/images/hero-slide-1-protected-home.jpg',
      mobileImage: '/images/hero-slide-1-mobile.jpg',
      tag: 'MARINE DRIVE & BOLGATTY',
      title: 'Waterfront & Luxury Villa Defense',
      desc: 'Deep subterranean barrier and odorless borer protection for Marine Drive, Bolgatty & Kochi waterfront residences.'
    },
    {
      id: 6,
      image: '/images/hero-slide-pet-safe-shield.jpg',
      mobileImage: '/images/hero-slide-pet-mobile.jpg',
      tag: '100% PET-SAFE & ECO-FRIENDLY DEFENSE',
      title: 'Child & Pet-Safe Green Pest Protection',
      desc: 'Odorless, non-toxic herbal and green chemistry safe for families and pets across all Kochi residences.'
    },
    {
      id: 2,
      image: '/images/hero-slide-2-torch-inspect.jpg',
      mobileImage: '/images/hero-slide-2-mobile.jpg',
      tag: 'KAKKANAD & INFOPARK TECH CORRIDOR',
      title: 'Precision Acoustic & Wall Inspection',
      desc: 'Advanced acoustic and thermal scanning to pinpoint hidden termite colonies across Kakkanad tech campuses and high-rises.'
    },
    {
      id: 3,
      image: '/images/hero-slide-3-indoor-inject.jpg',
      mobileImage: '/images/hero-slide-3-mobile.jpg',
      tag: 'PANAMPILLY NAGAR & KADAVANTHRA',
      title: '100% Odorless Skirting & Gel Treatment',
      desc: 'Govt. CIB&RC certified odorless micro-injection protecting premium woodwork in Panampilly Nagar, Kadavanthra & Thevara.'
    },
    {
      id: 4,
      image: '/images/hero-slide-4-termite-macro.jpg',
      mobileImage: '/images/hero-slide-4-mobile.jpg',
      tag: 'EDAPPALLY, PALARIVATTOM & ALUVA',
      title: 'Subterranean Colony & Pest Eradication',
      desc: 'IS:6313 certified chemical barrier creating an impenetrable perimeter across Edappally, Palarivattom & Aluva.'
    },
    {
      id: 5,
      image: '/images/hero-slide-5-commercial-van.jpg',
      mobileImage: '/images/hero-slide-5-mobile.jpg',
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
      className="relative w-full h-[calc(100dvh-82px)] sm:h-[calc(100vh-88px)] md:h-[calc(100vh-96px)] flex flex-col justify-between bg-[#020e09] overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Eco Pest India Master Hero Experience"
    >
      {/* ===================================================================== */}
      {/* 1. FULL-PAGE BACKGROUND PICTURE CAROUSEL (Un-Zoomed 3:4 Mobile Fit)   */}
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
              <picture className="block w-full h-full">
                <source media="(max-width: 639px)" srcSet={slide.mobileImage} />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover object-center transform-gpu transition-all duration-[6000ms] ease-out will-change-transform brightness-[1.04] contrast-[1.06] saturate-[1.15] filter ${
                    isActive ? 'scale-100 sm:scale-[1.04]' : 'scale-100'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchpriority={index === 0 ? 'high' : 'auto'}
                />
              </picture>
            </div>
          );
        })}
      </div>

      {/* Subtle top-left / top readability scrim so background stays 100% clear & vibrant */}
      <div className="absolute inset-0 z-15 bg-gradient-to-r from-black/80 via-black/35 to-transparent pointer-events-none hidden sm:block" />
      <div className="absolute top-0 inset-x-0 h-[42%] bg-gradient-to-b from-black/75 via-black/35 to-transparent pointer-events-none z-15 sm:hidden" />

      {/* ===================================================================== */}
      {/* 2. WRITINGS & BUTTONS LAYERED DIRECTLY ON TOP OF THE BACKGROUND       */}
      {/* ===================================================================== */}
      <div className="relative z-20 w-full h-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-4 xs:pt-5 sm:pt-7 md:pt-10 pb-4 sm:pb-6">
        
        {/* Main Hero Typography & Action Buttons */}
        <div className="max-w-2xl lg:max-w-3xl mt-1 sm:mt-2 text-left">
          
          {/* Service Tag */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/85 border border-emerald-500/50 text-amber-300 text-[9px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-1 sm:mb-1.5 backdrop-blur-md shadow">
            <Award className="w-3 h-3 text-amber-400" />
            <span>{slides[currentSlide].tag}</span>
          </div>

          {/* Grand Headline: ECO PEST INDIA */}
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
            <button
              onClick={() => onOpenInspectionModal && onOpenInspectionModal({ service: slides[currentSlide].title, location: 'Kochi' })}
              className="px-5 sm:px-7 py-2 sm:py-3.5 rounded-full bg-gradient-to-r from-[#FFE58F] via-[#F5C042] to-[#D49319] border border-[#FFF6C7] text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(245,192,66,0.65)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>Book Free Inspection</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Slide Dots */}
        <div className="self-center z-25 flex items-center justify-center pb-1">
          <div className="flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
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
        </div>

      </div>

      {/* Desktop Frosted Glass Prev / Next Arrows */}
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
