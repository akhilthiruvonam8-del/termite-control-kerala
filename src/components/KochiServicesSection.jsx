import React, { useState, useRef } from 'react';
import { 
  Bug, 
  Search, 
  ShieldCheck, 
  Building2, 
  Home, 
  Layers, 
  ArrowRight, 
  Leaf, 
  Clock, 
  Sprout,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  LayoutGrid,
  Columns
} from 'lucide-react';

export default function KochiServicesSection({ onOpenInspectionModal }) {
  const [mobileViewMode, setMobileViewMode] = useState('scroll'); // 'scroll' (horizontal swipe) or 'grid'
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // 8 Main Services with Cockroach Control prominently featured at #1 as requested!
  const services = [
    {
      id: 'cockroach-control',
      isMain: true,
      badge: 'Main & Most Requested',
      title: 'Cockroach Control',
      desc: 'Certified odorless herbal gel baiting & targeted drain eradication for kitchen and home with 100% guarantee.',
      image: '/images/pest3.jpg',
      icon: Bug,
      tag: 'Kitchen & Home Essential'
    },
    {
      id: 'termite-control',
      isMain: false,
      title: 'Termite Control',
      desc: 'Eliminate termites and protect your property from long-term structural wood damage.',
      image: '/images/hero-slide-4-termite-macro.jpg',
      icon: Bug,
      tag: 'Deep Colony Elimination'
    },
    {
      id: 'termite-inspection',
      isMain: false,
      title: 'Termite Inspection',
      desc: 'Detect hidden infestations early with advanced thermal and acoustic detection techniques.',
      image: '/images/hero-slide-2-torch-inspect.jpg',
      icon: Search,
      tag: 'Early Detection'
    },
    {
      id: 'anti-termite',
      isMain: false,
      title: 'Anti-Termite Treatment',
      desc: 'Build a stronger defense with long-lasting odorless anti-termite drill-inject-seal barrier.',
      image: '/images/hero-slide-3-indoor-inject.jpg',
      icon: ShieldCheck,
      tag: 'Chemical Barrier'
    },
    {
      id: 'pre-construction',
      isMain: false,
      title: 'Pre-Construction Protection',
      desc: 'Prevent termite attacks before your dream project begins under strict IS:6313 standards.',
      image: '/images/pre-construction.jpg',
      icon: Building2,
      tag: 'IS:6313 Foundation Soil'
    },
    {
      id: 'post-construction',
      isMain: false,
      title: 'Post-Construction Treatment',
      desc: 'Keep your new or renovated waterfront villa, flat and house completely termite-free.',
      image: '/images/hero-slide-1-waterfront.jpg',
      icon: Home,
      tag: 'Villas & Apartments'
    },
    {
      id: 'wood-borer',
      isMain: false,
      title: 'Wood Borer Treatment',
      desc: 'Safeguard your precious wooden furniture, door frames, wardrobes and ceiling timber.',
      image: '/images/service-wood-borer-hd.jpg',
      icon: Layers,
      tag: 'Syringe Injection'
    }
  ];

  const trustBadges = [
    {
      id: 'family',
      icon: ShieldCheck,
      title: 'Safe for Your Family & Pets'
    },
    {
      id: 'eco',
      icon: Leaf,
      title: 'Eco-Friendly Products'
    },
    {
      id: 'protection',
      icon: Clock,
      title: 'Long-Lasting Protection'
    },
    {
      id: 'properties',
      icon: Home,
      title: 'Residential & Commercial Properties'
    }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.82));
      setActiveSlideIndex(Math.min(index, 7));
    }
  };

  const scrollToCard = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.82;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveSlideIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeSlideIndex - 1);
    scrollToCard(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(7, activeSlideIndex + 1);
    scrollToCard(nextIdx);
  };

  return (
    <section 
      id="services" 
      className="relative w-full bg-[#f4f7f5] py-8 sm:py-12 md:py-16 lg:py-20 scroll-mt-20 sm:scroll-mt-24"
      aria-label="Eco Pest India Services in Kochi"
    >
      {/* Decorative Subtle Gradients */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-100/50 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-32 bg-gradient-to-tr from-emerald-100/40 to-transparent rounded-tr-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. PANORAMIC HEADER BANNER (Kochi Waterfront, Nets & Technician)          */}
        {/* ========================================================================= */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 mb-6 sm:mb-10 bg-white">
          
          {/* Panoramic HD Image Backdrop for Laptop / Desktop (Matching User Mockup) */}
          <div 
            className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-right lg:bg-center pointer-events-none select-none"
            style={{ backgroundImage: `url('/images/services-header-bg.jpg')` }}
          />

          {/* Soft White Gradient Overlay ensuring 100% natural, crisp text legibility */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent w-full lg:w-[68%]" />

          {/* Mobile View Scenic Photo Banner (< md) showing Cheena Vala, Water & Technician */}
          <div className="md:hidden relative w-full overflow-hidden bg-slate-900">
            <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] overflow-hidden">
              <img 
                src="/images/services-header-bg.jpg" 
                alt="Eco Pest India Technician at Kochi Backwaters & Chinese Fishing Nets"
                className="w-full h-full object-cover object-[65%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              <div className="absolute bottom-2 left-2.5 bg-emerald-950/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-emerald-400/40 text-[10px] font-semibold text-emerald-200 flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Kochi Backwaters & Coastal Pest Defense</span>
              </div>
            </div>
          </div>

          {/* Naturally Typed Heading & Paragraph */}
          <div className="relative z-10 p-4 sm:p-8 md:p-10 lg:p-12 max-w-2xl bg-white md:bg-transparent">
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.15]">
              <span className="block text-slate-900">
                Every Pest Problem Has a
              </span>
              <span className="block text-[#0e6e3c] mt-0.5 sm:mt-1">
                Different Solution.
              </span>
            </h2>

            {/* Short Green Accent Divider */}
            <div className="w-12 sm:w-14 h-1 sm:h-1.5 bg-[#0e6e3c] rounded-full my-2.5 sm:my-4" />

            {/* Subtitle / Paragraph */}
            <p className="text-slate-600 font-normal text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
              From the first inspection to complete protection, our treatments are designed around the property, the pest and the problem.
            </p>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW SCROLL CONTROL BAR (Allows Swiping Horizontally or Grid View) */}
        {/* ========================================================================= */}
        <div className="flex sm:hidden items-center justify-between gap-2 mb-3 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
          
          <div className="flex items-center gap-1 text-xs font-bold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Swipe & Browse Services:</span>
          </div>

          {/* Toggle between Swipe Carousel and 2-Column Grid on Mobile */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setMobileViewMode('scroll')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition ${
                mobileViewMode === 'scroll' 
                  ? 'bg-emerald-800 text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-600'
              }`}
              title="Horizontal Swipeable Cards"
            >
              <Columns className="w-3 h-3" />
              <span>Swipe</span>
            </button>
            <button
              onClick={() => setMobileViewMode('grid')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition ${
                mobileViewMode === 'grid' 
                  ? 'bg-emerald-800 text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-600'
              }`}
              title="2-Column Grid View"
            >
              <LayoutGrid className="w-3 h-3" />
              <span>Grid</span>
            </button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. SERVICES LIST: HORIZONTAL SWIPE ON MOBILE / 4-COL GRID ON LAPTOP         */}
        {/* ========================================================================= */}
        <div className="relative">
          
          {/* Scroll Track Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className={`${
              mobileViewMode === 'scroll'
                ? 'flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-none gap-3 sm:gap-4 md:gap-6 pb-4 sm:pb-0'
                : 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 mb-6 sm:mb-12'
            }`}
          >
            
            {/* 7 Core Services (Including Cockroach Control as #1 Main) */}
            {services.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => onOpenInspectionModal && onOpenInspectionModal({ service: service.title, location: 'Kochi' })}
                  className={`group bg-white rounded-xl sm:rounded-2xl overflow-hidden border shadow-xs hover:shadow-xl hover:border-emerald-500/50 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    mobileViewMode === 'scroll' 
                      ? 'w-[80vw] max-w-[290px] sm:w-auto shrink-0 snap-center' 
                      : 'w-full'
                  } ${
                    service.isMain 
                      ? 'border-emerald-500/80 ring-2 ring-emerald-500/20' 
                      : 'border-slate-200/90'
                  }`}
                >
                  {/* Top HD Photo with Category Tag */}
                  <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-slate-900">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    
                    {/* Main / Featured Ribbon Badge */}
                    {service.isMain && (
                      <div className="absolute top-2 left-2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-[9.5px] sm:text-[10.5px] px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1 uppercase tracking-wider">
                        <Sparkles className="w-3 h-3 fill-slate-950" />
                        <span>Featured Main Service</span>
                      </div>
                    )}

                    {/* Tag badge on top right */}
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] px-2 py-0.5 rounded-md font-medium">
                      {service.tag}
                    </div>
                  </div>

                  {/* Floating Icon Badge */}
                  <div className="relative px-3 sm:px-4 pt-0 flex items-center justify-between">
                    <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white shadow-md flex items-center justify-center -mt-4.5 sm:-mt-5.5 relative z-10 transition-colors ${
                      service.isMain
                        ? 'bg-emerald-700 text-white group-hover:bg-emerald-600'
                        : 'bg-[#eefaf3] text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white'
                    }`}>
                      <IconComp className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.2]" />
                    </div>

                    {/* Quick Tap Indicator for Mobile */}
                    <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 sm:hidden">
                      Tap to Book
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-3 sm:p-4 pt-1 sm:pt-1.5 flex-grow flex flex-col justify-between text-left">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0e6e3c] transition-colors leading-snug flex items-center justify-between">
                        <span>{service.title}</span>
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-600 leading-snug mt-1 mb-2.5 sm:mb-3">
                        {service.desc}
                      </p>
                    </div>

                    {/* Learn More Action Link */}
                    <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 group-hover:text-emerald-800 pt-1 border-t border-slate-100">
                      <span>Book Inspection</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CARD 8: SPECIAL BRAND BANNER CARD (Safer Spaces. Healthier Tomorrow.) */}
            <div 
              onClick={() => onOpenInspectionModal && onOpenInspectionModal({ service: 'General Consultation', location: 'Kochi' })}
              className={`bg-gradient-to-br from-[#ebf7f0] via-[#e2f4e9] to-[#d3ede0] rounded-xl sm:rounded-2xl border border-emerald-300/80 p-4 sm:p-5 md:p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden text-center sm:text-left group cursor-pointer ${
                mobileViewMode === 'scroll' 
                  ? 'w-[80vw] max-w-[290px] sm:w-auto shrink-0 snap-center' 
                  : 'w-full'
              }`}
            >
              {/* Background Silhouettes of Kochi Palms & Boat */}
              <div className="absolute inset-0 pointer-events-none select-none opacity-20">
                <svg className="w-full h-full object-cover" viewBox="0 0 300 200" fill="none">
                  <path d="M20 180 Q35 120 40 80 Q50 60 70 70 M40 80 Q25 60 10 75 M40 80 Q40 50 45 40 M40 80 Q60 55 65 60" stroke="#0e6e3c" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M15 180 Q25 130 30 100 Q20 80 5 90 M30 100 Q45 85 50 95" stroke="#0e6e3c" strokeWidth="2" strokeLinecap="round" />
                  <path d="M180 170 Q220 175 260 170 L250 160 L190 160 Z" fill="#0e6e3c" />
                  <path d="M220 160 L220 140 L210 150" stroke="#0e6e3c" strokeWidth="2" />
                  <path d="M0 185 Q75 180 150 185 T300 185" stroke="#0e6e3c" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Top Leaf Sprout */}
              <div className="relative z-10 flex items-center justify-center sm:justify-start">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 border border-emerald-300/70 shadow-xs flex items-center justify-center text-emerald-700">
                  <Sprout className="w-5 h-5 fill-emerald-600/20 stroke-[2.2]" />
                </div>
              </div>

              {/* Center Cursive Signature Text */}
              <div className="relative z-10 my-3 sm:my-4">
                <div className="font-script text-xl sm:text-2xl lg:text-3xl text-emerald-800 font-bold leading-tight">
                  <div>Safer Spaces.</div>
                  <div className="text-emerald-700">Healthier Tomorrow.</div>
                </div>
              </div>

              {/* Bottom City / District Tagline */}
              <div className="relative z-10 pt-2 border-t border-emerald-300/60">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-emerald-800 uppercase">
                  KOCHI • ERNAKULAM • BEYOND
                </span>
              </div>

            </div>

          </div>

          {/* Mobile Horizontal Navigation Controls (Prev/Next buttons & 8 dots indicator) */}
          {mobileViewMode === 'scroll' && (
            <div className="sm:hidden flex items-center justify-between mt-2 pt-1">
              
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                disabled={activeSlideIndex === 0}
                className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* 8 Pagination Indicator Dots */}
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => scrollToCard(dotIdx)}
                    className={`transition-all rounded-full ${
                      activeSlideIndex === dotIdx
                        ? 'w-5 h-2 bg-emerald-700'
                        : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={activeSlideIndex === 7}
                className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Next service"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>
          )}

        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM TRUST RIBBON (4 Key Quality Badges)                             */}
        {/* ========================================================================= */}
        <div className="mt-8 sm:mt-12 w-full bg-white rounded-xl sm:rounded-full border border-slate-200/90 shadow-sm p-3.5 sm:px-8 sm:py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-2 items-center">
            {trustBadges.map((badge, idx) => {
              const IconComp = badge.icon;
              return (
                <div 
                  key={badge.id}
                  className={`flex items-center gap-2 sm:gap-2.5 p-1 sm:p-0 ${
                    idx !== trustBadges.length - 1 ? 'md:border-r md:border-slate-200/80' : ''
                  }`}
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#eefaf3] border border-emerald-200/90 shrink-0 flex items-center justify-center text-emerald-700 shadow-xs">
                    <IconComp className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
                  </div>
                  <span className="text-[10.5px] sm:text-xs font-bold text-slate-800 text-left leading-tight">
                    {badge.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
