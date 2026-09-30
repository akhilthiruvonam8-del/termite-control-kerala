import React from 'react';
import { ShieldCheck, Leaf, Target, Handshake, Sprout } from 'lucide-react';

export default function AboutUsSection({ onOpenInspectionModal }) {
  const pillars = [
    {
      id: 'experienced',
      icon: ShieldCheck,
      title: 'Experienced',
      subtitle: 'Professionals'
    },
    {
      id: 'ecofriendly',
      icon: Leaf,
      title: 'Eco-Friendly',
      subtitle: 'Solutions'
    },
    {
      id: 'protection',
      icon: Target,
      title: 'Long-Term',
      subtitle: 'Protection'
    },
    {
      id: 'satisfaction',
      icon: Handshake,
      title: 'Customer',
      subtitle: 'Satisfaction'
    }
  ];

  return (
    <section 
      id="about" 
      className="relative w-full bg-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 scroll-mt-20 sm:scroll-mt-24"
      aria-label="About Eco Pest India"
    >
      {/* ========================================================================= */}
      {/* 1. DESKTOP / WIDE SCREEN: Clean HD Panoramic Backdrop                      */}
      {/* ========================================================================= */}
      <div 
        className="hidden md:block absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-left lg:bg-center pointer-events-none select-none"
        style={{ backgroundImage: `url('/images/about-us-clean-bg.jpg')` }}
      />

      {/* Decorative Organic Corners for mobile / small screen fallback */}
      <div className="md:hidden absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-emerald-100/60 to-transparent rounded-bl-full pointer-events-none" />
      <div className="md:hidden absolute bottom-0 right-0 w-48 h-20 bg-gradient-to-t from-emerald-900 via-emerald-800 to-transparent rounded-tl-[80px] pointer-events-none" />

      {/* ========================================================================= */}
      {/* 2. RESPONSIVE CONTAINER & NATURAL TYPOGRAPHY                              */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MOBILE TECHNICIAN PHOTO CARD (Rendered on small screens < md) */}
        <div className="md:hidden mb-8 rounded-2xl overflow-hidden shadow-lg border border-emerald-900/10 relative">
          <div className="aspect-[16/9] w-full relative overflow-hidden bg-emerald-950">
            <img 
              src="/images/about-us-clean-bg.jpg" 
              alt="Eco Pest India Professional Technician overlooking Kochi Waterfront"
              className="w-full h-full object-cover object-left"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
            <div className="absolute bottom-2.5 left-3 bg-emerald-950/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/40 text-[11px] font-semibold text-emerald-300">
              Kochi Waterfront & Luxury Villa Specialists
            </div>
          </div>
        </div>

        {/* MAIN SPLIT GRID: Left reveals the technician, villa & backwater; Right has live text */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left Column Spacer for Desktop Photo */}
          <div className="hidden md:block md:col-span-5 lg:col-span-5 xl:col-span-5" />

          {/* Right Column: Typed Content (Matches User Mockup Exactly) */}
          <div className="col-span-1 md:col-span-7 lg:col-span-7 xl:col-span-7 md:pl-4 lg:pl-10 text-left">
            
            {/* 1. Pre-Title Script with Sprout Accent: "Our Commitment" */}
            <div className="inline-flex items-center gap-2 mb-1 sm:mb-2">
              <Sprout className="w-6 h-6 text-emerald-600 fill-emerald-500/20 stroke-[2.2]" />
              <span className="font-script text-2xl sm:text-3xl text-emerald-700 font-bold tracking-wide">
                Our Commitment
              </span>
            </div>

            {/* 2. Main Title: "Safer Spaces. Healthier Tomorrows." */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.12] mb-3">
              <span className="block text-slate-900">
                Safer Spaces.
              </span>
              <span className="block text-[#0e6e3c] mt-0.5">
                Healthier Tomorrows.
              </span>
            </h2>

            {/* 3. Short Forest Green Accent Bar */}
            <div className="w-14 h-1.5 bg-[#0e6e3c] rounded-full mb-5" />

            {/* 4. Natural Typed Paragraph */}
            <p className="text-slate-600 font-normal text-sm sm:text-base leading-relaxed max-w-xl mb-7 sm:mb-8">
              At Eco Pest India, we are more than just a pest control company. We are a team of dedicated professionals, committed to creating safe, healthy and pest-free spaces for homes, businesses and communities across Kochi. With years of experience and a passion for what we do, we bring effective, long-lasting and eco-friendly solutions to every space we touch.
            </p>

            {/* 5. Four Key Pillars / Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 pt-2 pb-6 border-y border-slate-100 sm:border-y-0">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={pillar.id}
                    className={`flex flex-col items-center text-center px-1 sm:px-2 ${
                      idx !== pillars.length - 1 ? 'sm:border-r sm:border-slate-200/80' : ''
                    }`}
                  >
                    {/* Soft Light Green Circle Icon Badge */}
                    <div className="w-12 h-12 rounded-full bg-[#eefaf3] border border-emerald-200/90 flex items-center justify-center text-emerald-700 shadow-sm mb-2 transition-transform hover:scale-105">
                      <IconComponent className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    {/* 2-line Label */}
                    <div className="text-[12px] sm:text-[13px] font-semibold text-slate-800 leading-tight">
                      <div>{pillar.title}</div>
                      <div>{pillar.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 6. Handwritten Signature Tagline with Brush Underline */}
            <div className="mt-6 sm:mt-8 pt-2 inline-block">
              <div className="font-script text-2xl sm:text-3xl text-emerald-800 font-bold tracking-wide leading-tight">
                <div>Because every space</div>
                <div className="pl-6 sm:pl-10">deserves to be pest-free.</div>
              </div>
              {/* Natural Curved Green Brush Stroke SVG Underline */}
              <svg 
                className="w-56 sm:w-64 h-3 text-emerald-600/80 ml-6 sm:ml-10 mt-1" 
                viewBox="0 0 320 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M3 6.5C45 3 140 2.2 315 5.5C230 8.5 110 9.8 3 6.5Z" 
                  fill="currentColor" 
                />
              </svg>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
