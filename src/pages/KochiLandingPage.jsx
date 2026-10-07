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

    // Check URL hash on initial load (e.g. #services, #about, #locations)
    const hash = window.location.hash.replace('#', '');
    if (['home', 'about', 'services', 'locations'].includes(hash)) {
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
    <div className="bg-[#020e09] text-slate-100 min-h-screen w-full flex flex-col font-sans selection:bg-[#C9A227] selection:text-[#020e09] relative">
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
        {/* MODULE 1: HOME / HERO SECTION (Exact 100% Viewport Fit)           */}
        {/* ================================================================= */}
        {activeModule === 'home' && (
          <div id="home" className="w-full flex-grow flex flex-col animate-in fade-in duration-300">
            <KochiHero onOpenInspectionModal={onOpenInspectionModal} />
          </div>
        )}

        {/* ================================================================= */}
        {/* MODULE 2: ABOUT US SECTION (Loaded on navbar click)                */}
        {/* ================================================================= */}
        {activeModule === 'about' && (
          <div id="about" className="w-full flex-grow flex flex-col animate-in fade-in duration-300">
            <AboutUsSection onOpenInspectionModal={onOpenInspectionModal} />
          </div>
        )}

        {/* ================================================================= */}
        {/* MODULE 3: SERVICES SECTION (Loaded on navbar click)               */}
        {/* ================================================================= */}
        {activeModule === 'services' && (
          <div id="services" className="w-full flex-grow flex flex-col animate-in fade-in duration-300">
            <KochiServicesSection onOpenInspectionModal={onOpenInspectionModal} />
          </div>
        )}

        {/* ================================================================= */}
        {/* MODULE 4: LOCATIONS SECTION (Loaded on navbar click)              */}
        {/* ================================================================= */}
        {activeModule === 'locations' && (
          <div id="locations" className="w-full flex-grow flex flex-col animate-in fade-in duration-300">
            <KochiLocationsSection onOpenInspectionModal={onOpenInspectionModal} />
          </div>
        )}

      </main>

      {/* 3. Right-Side Bottom Floating Actions (Up Arrow, Call, WhatsApp) */}
      <FloatingActionButtons />
    </div>
  );
}
