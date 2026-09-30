import React, { useState, useEffect } from 'react';
import KochiNavbar from '../components/KochiNavbar';
import KochiHero from '../components/KochiHero';
import AboutUsSection from '../components/AboutUsSection';
import KochiServicesSection from '../components/KochiServicesSection';
import KochiLocationsSection from '../components/KochiLocationsSection';
import KochiBlogSection from '../components/KochiBlogSection';
import KochiFaqSection from '../components/KochiFaqSection';
import KochiPreloader from '../components/KochiPreloader';
import FloatingActionButtons from '../components/FloatingActionButtons';
import { updateMetaTags } from '../utils/seo';
import { Home, Info, Layers, MapPin, ArrowRight, Sparkles, ShieldCheck, Bug, BookOpen, HelpCircle } from 'lucide-react';

export default function KochiLandingPage({ onOpenInspectionModal }) {
  const [activeModule, setActiveModule] = useState('home');

  useEffect(() => {
    updateMetaTags({
      title: "Eco Pest India — Safe Home, Healthy Life | 100% Natural Cockroach, Termite & Pest Defense Kochi",
      description: "Eco Pest India — Safe Home, Healthy Life. Premier odorless cockroach, termite & wood borer defense in Kochi & Ernakulam. Certified Kerala technicians, child & pet safe with 100% satisfaction guarantee.",
      keywords: "eco pest india, cockroach control kochi, natural termite control kochi, odorless pest control ernakulam, safe home healthy life, herbal pest control marine drive",
      canonicalUrl: "https://termite-contro-service-kerala.vercel.app/",
      schema: {
        "@context": "https://schema.org",
        "@type": "PestControlService",
        "name": "Eco Pest India - Kochi Hub",
        "slogan": "Safe Home, Healthy Life",
        "url": "https://termite-contro-service-kerala.vercel.app/",
        "telephone": "+91-9020040009",
        "email": "ecopestindia@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near Metro Pillar 482, S.A. Road / Kakkanad Corridor",
          "addressLocality": "Kochi",
          "addressRegion": "Kerala",
          "postalCode": "682020",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "9.9816",
          "longitude": "76.2999"
        },
        "areaServed": [
          "Kochi", 
          "Ernakulam", 
          "Kakkanad", 
          "Marine Drive", 
          "Panampilly Nagar", 
          "Edappally", 
          "Aluva", 
          "Palarivattom", 
          "Kadavanthra", 
          "Kaloor", 
          "Vyttila", 
          "Fort Kochi", 
          "Thrippunithura", 
          "Kalamassery", 
          "Maradu", 
          "Bolgatty"
        ]
      }
    });

    // Check URL hash on initial load (e.g. #services, #about, #locations, #blog, #faq)
    const hash = window.location.hash.replace('#', '');
    if (['home', 'about', 'services', 'locations', 'blog', 'faq'].includes(hash)) {
      setActiveModule(hash);
    }
  }, []);

  const handleSelectModule = (id) => {
    if (id === 'contact') {
      if (onOpenInspectionModal) {
        onOpenInspectionModal({ location: 'Kochi' });
      }
      return;
    }
    setActiveModule(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#020e09] text-slate-100 min-h-screen w-full flex flex-col font-sans selection:bg-[#C9A227] selection:text-[#020e09] relative pb-16 sm:pb-0">
      {/* 0. Introductory Spinning Logo Preloader (Fumitech style) */}
      <KochiPreloader />
      
      {/* 1. Executive Navbar with Official Round Logo & Nav Links (Persistent Across ALL Modules) */}
      <KochiNavbar 
        onOpenInspectionModal={onOpenInspectionModal} 
        activeSection={activeModule}
        onSelectSection={handleSelectModule}
      />

      {/* 2. Main Page Content (Loads only the selected module on-demand when navbar is clicked) */}
      <main className="w-full flex-grow flex flex-col pt-[82px] sm:pt-[88px] md:pt-[96px]">
        
        {/* ================================================================= */}
        {/* MODULE 1: HOME / HERO SECTION                                     */}
        {/* ================================================================= */}
        {activeModule === 'home' && (
          <div id="home" className="w-full flex-grow flex flex-col animate-in fade-in duration-300">
            <KochiHero onOpenInspectionModal={onOpenInspectionModal} />

            {/* Quick Portal Switcher below Hero */}
            <section className="w-full bg-[#03150e] border-t border-emerald-900/50 py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-bold">
                    Explore Eco Pest India Kochi
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    Select a Module to Load Directly
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-4 max-w-7xl mx-auto">
                  
                  {/* Card 1: About Us */}
                  <button
                    onClick={() => handleSelectModule('about')}
                    className="p-4 rounded-2xl bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/30 hover:border-amber-400 text-left transition-all duration-200 group cursor-pointer shadow-md"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <Info className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      About Us
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                      Certified Kerala technicians, green chemistry &amp; 10-year bond.
                    </p>
                    <div className="mt-3 flex items-center text-xs font-bold text-emerald-400 group-hover:text-amber-300">
                      <span>View About Us</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  {/* Card 2: Services */}
                  <button
                    onClick={() => handleSelectModule('services')}
                    className="p-4 rounded-2xl bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/30 hover:border-amber-400 text-left transition-all duration-200 group cursor-pointer shadow-md"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        Services
                      </h4>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 font-black">
                        Cockroach #1
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                      Cockroach control, termite defense, wood borer &amp; pre-construction.
                    </p>
                    <div className="mt-3 flex items-center text-xs font-bold text-emerald-400 group-hover:text-amber-300">
                      <span>Explore 8 Services</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  {/* Card 3: Locations */}
                  <button
                    onClick={() => handleSelectModule('locations')}
                    className="p-4 rounded-2xl bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/30 hover:border-amber-400 text-left transition-all duration-200 group cursor-pointer shadow-md"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      Locations
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                      Protection across Kochi Corporation &amp; Greater Kochi hubs.
                    </p>
                    <div className="mt-3 flex items-center text-xs font-bold text-emerald-400 group-hover:text-amber-300">
                      <span>View Coverage</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  {/* Card 4: Blog & Insights */}
                  <button
                    onClick={() => handleSelectModule('blog')}
                    className="p-4 rounded-2xl bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/30 hover:border-amber-400 text-left transition-all duration-200 group cursor-pointer shadow-md"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        Blog &amp; Insights
                      </h4>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-black">
                        New
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                      Termite warning signs, pre-construction &amp; home pest tips.
                    </p>
                    <div className="mt-3 flex items-center text-xs font-bold text-emerald-400 group-hover:text-amber-300">
                      <span>Read Insights</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  {/* Card 5: FAQ & Answers */}
                  <button
                    onClick={() => handleSelectModule('faq')}
                    className="p-4 rounded-2xl bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/30 hover:border-amber-400 text-left transition-all duration-200 group cursor-pointer shadow-md"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        FAQ &amp; Answers
                      </h4>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 font-black">
                        14 FAQs
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                      Pricing, safety, 10-year warranty &amp; free inspection queries.
                    </p>
                    <div className="mt-3 flex items-center text-xs font-bold text-emerald-400 group-hover:text-amber-300">
                      <span>Got Questions?</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                </div>
              </div>
            </section>
          </div>
        )}

        {/* ================================================================= */}
        {/* MODULE 2: ABOUT US SECTION (Loaded on navbar click)                */}
        {/* ================================================================= */}
        {activeModule === 'about' && (
          <div id="about" className="w-full flex-grow flex flex-col animate-in fade-in duration-300">
            <AboutUsSection onOpenInspectionModal={onOpenInspectionModal} />
            
            {/* Bottom Module Flow Navigator */}
            <div className="bg-[#03150e] py-6 px-4 border-t border-emerald-900/40 text-center">
              <div className="max-w-2xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm font-bold">
                <button 
                  onClick={() => handleSelectModule('home')} 
                  className="px-4 py-2 rounded-full bg-emerald-950 border border-emerald-700 text-slate-300 hover:text-white hover:bg-emerald-900 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>← Back to Home</span>
                </button>
                <button 
                  onClick={() => handleSelectModule('services')} 
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black hover:from-amber-400 hover:to-amber-300 shadow-md flex items-center gap-1.5 transition cursor-pointer"
                >
                  <span>Next: Services (Cockroach & Termite)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* MODULE 3: SERVICES SECTION (Loaded on navbar click)               */}
        {/* ================================================================= */}
        {activeModule === 'services' && (
          <div id="services" className="w-full flex-grow flex flex-col animate-in fade-in duration-300">
            <KochiServicesSection onOpenInspectionModal={onOpenInspectionModal} />
            
            {/* Bottom Module Flow Navigator */}
            <div className="bg-[#03150e] py-6 px-4 border-t border-emerald-900/40 text-center">
              <div className="max-w-2xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm font-bold">
                <button 
                  onClick={() => handleSelectModule('about')} 
                  className="px-4 py-2 rounded-full bg-emerald-950 border border-emerald-700 text-slate-300 hover:text-white hover:bg-emerald-900 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>← About Us</span>
                </button>
                <button 
                  onClick={() => handleSelectModule('locations')} 
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black hover:from-amber-400 hover:to-amber-300 shadow-md flex items-center gap-1.5 transition cursor-pointer"
                >
                  <span>Next: Kochi Locations Coverage</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* MODULE 4: LOCATIONS SECTION (Loaded on navbar click)              */}
        {/* ================================================================= */}
        {activeModule === 'locations' && (
          <div id="locations" className="w-full flex-grow flex flex-col animate-in fade-in duration-300">
            <KochiLocationsSection onOpenInspectionModal={onOpenInspectionModal} />
            
            {/* Bottom Module Flow Navigator */}
            <div className="bg-[#03150e] py-6 px-4 border-t border-emerald-900/40 text-center">
              <div className="max-w-2xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm font-bold">
                <button 
                  onClick={() => handleSelectModule('services')} 
                  className="px-4 py-2 rounded-full bg-emerald-950 border border-emerald-700 text-slate-300 hover:text-white hover:bg-emerald-900 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>← Back to Services</span>
                </button>
                <button 
                  onClick={() => handleSelectModule('blog')} 
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black hover:from-amber-400 hover:to-amber-300 shadow-md flex items-center gap-1.5 transition cursor-pointer"
                >
                  <span>Next: Pest Insights &amp; Blog</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* MODULE 5: BLOG / INSIGHTS SECTION (Loaded on navbar click)         */}
        {/* ================================================================= */}
        {activeModule === 'blog' && (
          <div id="blog" className="w-full flex-grow flex flex-col animate-in fade-in duration-300">
            <KochiBlogSection onOpenInspectionModal={onOpenInspectionModal} />
            
            {/* Bottom Module Flow Navigator */}
            <div className="bg-[#03150e] py-6 px-4 border-t border-emerald-900/40 text-center">
              <div className="max-w-2xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm font-bold">
                <button 
                  onClick={() => handleSelectModule('locations')} 
                  className="px-4 py-2 rounded-full bg-emerald-950 border border-emerald-700 text-slate-300 hover:text-white hover:bg-emerald-900 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>← Back to Locations</span>
                </button>
                <button 
                  onClick={() => handleSelectModule('faq')} 
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black hover:from-amber-400 hover:to-amber-300 shadow-md flex items-center gap-1.5 transition cursor-pointer"
                >
                  <span>Next: FAQ &amp; Common Answers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* MODULE 6: FAQ / QUESTIONS SECTION (Loaded on navbar click)         */}
        {/* ================================================================= */}
        {activeModule === 'faq' && (
          <div id="faq" className="w-full flex-grow flex flex-col animate-in fade-in duration-300">
            <KochiFaqSection onOpenInspectionModal={onOpenInspectionModal} />
            
            {/* Bottom Module Flow Navigator */}
            <div className="bg-[#03150e] py-6 px-4 border-t border-emerald-900/40 text-center">
              <div className="max-w-2xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm font-bold">
                <button 
                  onClick={() => handleSelectModule('blog')} 
                  className="px-4 py-2 rounded-full bg-emerald-950 border border-emerald-700 text-slate-300 hover:text-white hover:bg-emerald-900 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>← Back to Blog</span>
                </button>
                <button 
                  onClick={() => onOpenInspectionModal && onOpenInspectionModal({ location: 'Kochi' })} 
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black hover:from-amber-400 hover:to-amber-300 shadow-md flex items-center gap-1.5 transition cursor-pointer"
                >
                  <span>📋 Book Free Inspection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* 3. MOBILE BOTTOM QUICK NAVIGATION DOCK (Instant 1-Tap Module Switching on Mobile) */}
      <nav 
        aria-label="Mobile quick module dock"
        className="sm:hidden fixed bottom-2 inset-x-2 z-40 bg-[#020e09]/95 backdrop-blur-xl border border-emerald-500/40 rounded-2xl px-1 py-1 shadow-[0_4px_25px_rgba(0,0,0,0.85)] flex items-center justify-around"
      >
        <button
          onClick={() => handleSelectModule('home')}
          className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all cursor-pointer ${
            activeModule === 'home'
              ? 'text-amber-300 bg-emerald-950/90 border border-amber-400/40 font-bold'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Home className="w-3.5 h-3.5" />
          <span className="text-[8.5px] mt-0.5">Home</span>
        </button>

        <button
          onClick={() => handleSelectModule('about')}
          className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all cursor-pointer ${
            activeModule === 'about'
              ? 'text-amber-300 bg-emerald-950/90 border border-amber-400/40 font-bold'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Info className="w-3.5 h-3.5" />
          <span className="text-[8.5px] mt-0.5">About</span>
        </button>

        <button
          onClick={() => handleSelectModule('services')}
          className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all cursor-pointer ${
            activeModule === 'services'
              ? 'text-amber-300 bg-emerald-950/90 border border-amber-400/40 font-bold'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="text-[8.5px] mt-0.5">Services</span>
        </button>

        <button
          onClick={() => handleSelectModule('locations')}
          className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all cursor-pointer ${
            activeModule === 'locations'
              ? 'text-amber-300 bg-emerald-950/90 border border-amber-400/40 font-bold'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-[8.5px] mt-0.5">Locations</span>
        </button>

        <button
          onClick={() => handleSelectModule('blog')}
          className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all cursor-pointer ${
            activeModule === 'blog'
              ? 'text-amber-300 bg-emerald-950/90 border border-amber-400/40 font-bold'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="text-[8.5px] mt-0.5">Blog</span>
        </button>

        <button
          onClick={() => handleSelectModule('faq')}
          className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all cursor-pointer ${
            activeModule === 'faq'
              ? 'text-amber-300 bg-emerald-950/90 border border-amber-400/40 font-bold'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span className="text-[8.5px] mt-0.5">FAQ</span>
        </button>
      </nav>

      {/* 4. Right-Side Bottom Floating Actions (Up Arrow, Call, WhatsApp) */}
      <FloatingActionButtons />
    </div>
  );
}
