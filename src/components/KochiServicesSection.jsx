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
  PhoneCall,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Columns,
  ShieldAlert,
  Hammer,
  Wrench
} from 'lucide-react';

export default function KochiServicesSection({ onOpenInspectionModal }) {
  const [mobileViewMode, setMobileViewMode] = useState('grid'); // Default to 'grid' so all services are immediately visible & scrollable on mobile, with 'scroll' swipe toggle available
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // All 10 User-Mandated Core Services + Cockroach Control with 100% Real Field Photography
  const services = [
    {
      id: 'termite-control',
      category: 'termite',
      isMain: true,
      title: 'Termite Control',
      desc: 'Complete subterranean termite colony eradication for residential villas, apartments, and commercial properties using odorless, government-approved termiticides.',
      image: '/images/service-termite-control.jpg',
      icon: ShieldCheck,
      tag: 'Complete Colony Eradication',
      warranty: 'Up to 5–10 Years Warranty'
    },
    {
      id: 'termite-treatment',
      category: 'termite',
      isMain: true,
      title: 'Termite Treatment',
      desc: 'Precision drill-inject-seal treatment along wall-floor junctions, wooden door frames, and cabinets to stop active termite infestations at the root.',
      image: '/images/service-termite-treatment.jpg',
      icon: Wrench,
      tag: 'Precision Drill & Inject',
      warranty: 'Odorless & Non-Messy'
    },
    {
      id: 'anti-termite-treatment',
      category: 'termite',
      isMain: true,
      title: 'Anti Termite Treatment',
      desc: 'Preventive and curative chemical barrier treatment by trained Eco Pest India technicians that locks out moisture-loving termites year-round.',
      image: '/images/pest7.jpg',
      icon: ShieldCheck,
      tag: 'Chemical Barrier Defense',
      warranty: 'IS:6313 Certified Protocol'
    },
    {
      id: 'anti-termite-control',
      category: 'termite',
      isMain: false,
      title: 'Anti Termite Control',
      desc: 'External perimeter trenching and indoor skirting protection designed specifically for Kerala’s humid coastal soil and monsoon conditions.',
      image: '/images/pest6.jpg',
      icon: Home,
      tag: 'Perimeter & Plinth Protection',
      warranty: 'Annual Inspection Support'
    },
    {
      id: 'white-ants',
      category: 'termite',
      isMain: false,
      title: 'White Ants',
      desc: 'Targeted elimination of subterranean white ants and mud tubes destroying wooden rafters, wardrobes, kitchen woodwork, and structural timber.',
      image: '/images/service-white-ants-real.jpg',
      icon: Bug,
      tag: 'Mud Tube & Wood Protection',
      warranty: 'Deep Timber Penetration'
    },
    {
      id: 'post-construction-anti-termite',
      category: 'termite',
      isMain: true,
      title: 'Post Construction Anti Termite Treatment',
      desc: 'Specialized treatment for existing homes, occupied flats, and offices—micro-drilling along floor skirting, injecting termiticide, and color-matched sealing.',
      image: '/images/service-termite-inspection.jpg',
      icon: Home,
      tag: 'For Existing Homes & Villas',
      warranty: '5-Year Service Warranty'
    },
    {
      id: 'pre-construction-anti-termite',
      category: 'termite',
      isMain: true,
      title: 'Pre Construction Anti Termite Treatment',
      desc: 'IS:6313 Part-2 compliant soil saturation for foundation trenches, backfill, and plinth sub-slab before concrete pouring on new building sites.',
      image: '/images/service-pre-construction-real.jpg',
      icon: Building2,
      tag: 'New Building Foundation',
      warranty: '10-Year Structural Warranty'
    },
    {
      id: 'rodent-management',
      category: 'rodent',
      isMain: true,
      title: 'Rodent Management',
      desc: 'Integrated 3-stage rodent defense with tamper-resistant exterior bait stations, entry-point proofing, and scheduled monitoring for homes, warehouses, and hotels.',
      image: '/images/service-rodent-management.jpg',
      icon: ShieldAlert,
      tag: 'Commercial & Residential IPM',
      warranty: 'HACCP & Audit Compliant'
    },
    {
      id: 'rodent-control',
      category: 'rodent',
      isMain: false,
      title: 'Rodent Control',
      desc: 'Safe, pet-secure lockable rodent bait stations and burrow treatments to stop rats and mice from damaging wiring, plumbing, and stored goods.',
      image: '/images/service-rodent-control.jpg',
      icon: Layers,
      tag: 'Tamper-Proof Bait Stations',
      warranty: 'Child & Pet Safe Boxes'
    },
    {
      id: 'rat-control',
      category: 'rodent',
      isMain: false,
      title: 'Rat Control',
      desc: 'Targeted mechanical trapping, glueboard placement, and ceiling/drain runway blocking to quickly clear roof rats, bandicoots, and house mice.',
      image: '/images/service-rat-control.jpg',
      icon: Search,
      tag: 'Trapping & Entry Sealing',
      warranty: 'Fast Indoor & Outdoor Relief'
    },
    {
      id: 'cockroach-control',
      category: 'cockroach',
      isMain: true,
      title: 'Cockroach Control',
      desc: 'Odorless German cockroach gel baiting and drain spray treatment for modular kitchens, restaurants, and apartments—no need to empty kitchen cabinets.',
      image: '/images/pest3.jpg',
      icon: Bug,
      tag: 'Kitchen & Home Essential',
      warranty: 'Zero Smell • Kid Safe'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services (11)' },
    { id: 'termite', label: 'Termite & White Ants (7)' },
    { id: 'rodent', label: 'Rodent & Rat Control (3)' },
    { id: 'cockroach', label: 'Cockroach Control (1)' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const trustBadges = [
    {
      id: 'family',
      icon: ShieldCheck,
      title: 'Safe for Children, Family & Pets'
    },
    {
      id: 'eco',
      icon: Leaf,
      title: 'Odorless Bayer & Govt. Approved Chemicals'
    },
    {
      id: 'protection',
      icon: Clock,
      title: 'Written Warranty & Prompt Follow-Up'
    },
    {
      id: 'properties',
      icon: Home,
      title: 'Villas, Flats, Offices & Construction Sites'
    }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.82));
      setActiveSlideIndex(Math.min(index, Math.max(0, filteredServices.length - 1)));
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
    const nextIdx = Math.min(filteredServices.length - 1, activeSlideIndex + 1);
    scrollToCard(nextIdx);
  };

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setActiveSlideIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="services" 
      className="relative w-full bg-[#f6f8f7] pt-20 pb-10 sm:py-16 md:py-20 scroll-mt-20 sm:scroll-mt-24"
      aria-label="Eco Pest India Services in Kochi & Kerala"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. NATURAL EDITORIAL HEADER WITH REAL ECO PEST INDIA FIELD PHOTOGRAPHY    */}
        {/* ========================================================================= */}
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-slate-200 bg-white mb-6 sm:mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Clean Editorial Typography & Direct Contact */}
            <div className="lg:col-span-7 p-5 sm:p-8 md:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold w-fit mb-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>IS:6313 Certified Pest & Termite Specialists • Kerala</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Professional Anti-Termite, White Ant &amp; Rodent Control Services
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-2xl">
                Our trained Eco Pest India field technicians use genuine, odorless termiticides and tamper-resistant rodent management systems tailored for homes, apartments, commercial kitchens, and new construction projects across Kochi and Kerala.
              </p>

              {/* Quick Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-5 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <span>Pre &amp; Post Construction</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <span>White Ant Eradication</span>
                </div>
                <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <span>Rodent &amp; Rat Proofing</span>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Field Photos of Eco Pest India Technicians */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-1.5 p-2 sm:p-3 bg-slate-100">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full">
                <img 
                  src="/images/pest5.jpg" 
                  alt="Eco Pest India technician performing indoor anti-termite skirting treatment" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-xs text-white text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-lg">
                  Indoor Anti-Termite Barrier
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full">
                <img 
                  src="/images/pest6.jpg" 
                  alt="Eco Pest India technician performing outdoor perimeter pest control treatment" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-xs text-white text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-lg">
                  Exterior Perimeter Defense
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. CATEGORY FILTER TABS & MOBILE VIEW TOGGLE                              */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          
          {/* Category Filter Pills (Scrollable on mobile) */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0e6e3c] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mobile View Mode Toggle (Grid vs Horizontal Swipe) */}
          <div className="flex sm:hidden items-center justify-between bg-white px-3 py-2 rounded-xl border border-slate-200">
            <span className="text-xs font-bold text-slate-700">
              Showing {filteredServices.length} Services:
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setMobileViewMode('grid')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition cursor-pointer ${
                  mobileViewMode === 'grid' 
                    ? 'bg-[#0e6e3c] text-white' 
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                <LayoutGrid className="w-3 h-3" />
                <span>All Cards</span>
              </button>
              <button
                onClick={() => setMobileViewMode('scroll')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition cursor-pointer ${
                  mobileViewMode === 'scroll' 
                    ? 'bg-[#0e6e3c] text-white' 
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                <Columns className="w-3 h-3" />
                <span>Swipe</span>
              </button>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. SERVICES GRID / SWIPE CARDS (ALL 10 CORE SERVICES + COCKROACH CONTROL) */}
        {/* ========================================================================= */}
        <div className="relative">
          
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className={`${
              mobileViewMode === 'scroll'
                ? 'flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-none gap-3.5 sm:gap-5 pb-4 sm:pb-0'
                : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-6 sm:mb-10'
            }`}
          >
            {filteredServices.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => onOpenInspectionModal && onOpenInspectionModal({ service: service.title, location: 'Kochi' })}
                  className={`group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md hover:border-emerald-600/50 transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                    mobileViewMode === 'scroll' 
                      ? 'w-[84vw] max-w-[310px] sm:w-auto shrink-0 snap-center' 
                      : 'w-full'
                  }`}
                >
                  {/* Real Service Photograph */}
                  <div>
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      />
                      {/* Clean Subtle Tag Pill */}
                      <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md font-semibold">
                        {service.tag}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-[#0e6e3c] transition-colors leading-snug">
                          {service.title}
                        </h3>
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer with Warranty Note & Direct Action */}
                  <div className="px-4 sm:px-5 pb-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 bg-slate-50/60">
                    <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{service.warranty}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0e6e3c] group-hover:translate-x-0.5 transition-transform whitespace-nowrap">
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Horizontal Swipe Controls (Only when 'scroll' mode is active) */}
          {mobileViewMode === 'scroll' && filteredServices.length > 1 && (
            <div className="sm:hidden flex items-center justify-between mt-2 pt-1">
              <button
                onClick={handlePrev}
                disabled={activeSlideIndex === 0}
                className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 disabled:opacity-30 cursor-pointer"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {filteredServices.map((srv, dotIdx) => (
                  <button
                    key={srv.id}
                    onClick={() => scrollToCard(dotIdx)}
                    className={`transition-all rounded-full ${
                      activeSlideIndex === dotIdx
                        ? 'w-5 h-2 bg-[#0e6e3c]'
                        : 'w-2 h-2 bg-slate-300'
                    }`}
                    aria-label={`Go to ${srv.title}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={activeSlideIndex === filteredServices.length - 1}
                className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 disabled:opacity-30 cursor-pointer"
                aria-label="Next service"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

        {/* ========================================================================= */}
        {/* 4. DIRECT SITE INSPECTION CALLOUT BAR & TRUST BADGES                      */}
        {/* ========================================================================= */}
        <div className="mt-8 sm:mt-10 bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 mb-5 border-b border-slate-100">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Not sure whether you need Pre-Construction, Post-Construction, or Rodent Proofing?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Speak directly with our certified pest control supervisor for a free site assessment and transparent quote.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
              <a
                href="tel:+919020040009"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0e6e3c] hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm transition shadow-xs"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call +91 90200 40009</span>
              </a>
              <button
                onClick={() => onOpenInspectionModal && onOpenInspectionModal({ service: 'Free Site Inspection', location: 'Kochi' })}
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition cursor-pointer"
              >
                <span>Request Free Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 items-center">
            {trustBadges.map((badge, idx) => {
              const IconComp = badge.icon;
              return (
                <div 
                  key={badge.id}
                  className={`flex items-center gap-2.5 ${
                    idx !== trustBadges.length - 1 ? 'md:border-r md:border-slate-200 md:pr-3' : ''
                  }`}
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 border border-emerald-200/80 shrink-0 flex items-center justify-center text-emerald-700">
                    <IconComp className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-800 leading-tight">
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
