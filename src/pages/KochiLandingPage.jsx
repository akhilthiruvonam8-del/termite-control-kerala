import React, { useState, useEffect } from 'react';
import KochiNavbar from '../components/KochiNavbar';
import KochiHero from '../components/KochiHero';
import AboutUsSection from '../components/AboutUsSection';
import KochiServicesSection from '../components/KochiServicesSection';
import KochiLocationsSection from '../components/KochiLocationsSection';
import KochiFaqSection from '../components/KochiFaqSection';
import KochiContactSection from '../components/KochiContactSection';
import KochiPreloader from '../components/KochiPreloader';
import FloatingActionButtons from '../components/FloatingActionButtons';
import { updateMetaTags } from '../utils/seo';

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
        "telephone": ["+91-9020040009", "+91-9020400009"],
        "email": "ecopestindia@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3rd Floor, Safa complex, Kayath Ln, near Hi-tech Lab, Palarivattom",
          "addressLocality": "Kochi",
          "addressRegion": "Kerala",
          "postalCode": "682025",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "10.0014",
          "longitude": "76.3101"
        },
        "areaServed": [
          "Kochi", 
          "Ernakulam", 
          "Palarivattom", 
          "Kakkanad", 
          "Marine Drive", 
          "Panampilly Nagar", 
          "Edappally", 
          "Aluva", 
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

    const sectionIds = ['home', 'about', 'services', 'locations', 'faq', 'contact'];

    // Check URL hash on initial load
    const hash = window.location.hash.replace('#', '');
    if (sectionIds.includes(hash)) {
      setActiveModule(hash);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const pos = el.getBoundingClientRect().top + window.pageYOffset - 84;
          window.scrollTo({ top: Math.max(0, pos), behavior: 'smooth' });
        }
      }, 150);
    }

    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveModule(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleSelectModule = (id) => {
    setActiveModule(id);
    window.history.replaceState(null, '', `#${id}`);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 84;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#020e09] text-slate-100 min-h-screen w-full flex flex-col font-sans selection:bg-[#C9A227] selection:text-[#020e09] relative">
      {/* 0. Introductory Spinning Logo Preloader */}
      <KochiPreloader />
      
      {/* 1. Executive Navbar with Official Round Logo & Smooth Scroll Nav Links */}
      <KochiNavbar 
        onOpenInspectionModal={onOpenInspectionModal} 
        activeSection={activeModule}
        onSelectSection={handleSelectModule}
      />

      {/* 2. Main Page Content — All Modules Stacked Vertically One Below the Other */}
      <main className="w-full flex-grow flex flex-col pt-[82px] sm:pt-[88px] md:pt-[96px]">
        
        {/* MODULE 1: HOME / HERO SECTION */}
        <div id="home" className="w-full">
          <KochiHero onOpenInspectionModal={onOpenInspectionModal} />
        </div>

        {/* MODULE 2: ABOUT US SECTION */}
        <div id="about" className="w-full">
          <AboutUsSection onOpenInspectionModal={onOpenInspectionModal} />
        </div>

        {/* MODULE 3: SERVICES SECTION */}
        <div id="services" className="w-full">
          <KochiServicesSection onOpenInspectionModal={onOpenInspectionModal} />
        </div>

        {/* MODULE 4: LOCATIONS SECTION */}
        <div id="locations" className="w-full">
          <KochiLocationsSection onOpenInspectionModal={onOpenInspectionModal} />
        </div>

        {/* MODULE 5: FAQ SECTION */}
        <div id="faq" className="w-full">
          <KochiFaqSection onOpenInspectionModal={onOpenInspectionModal} />
        </div>

        {/* MODULE 6: CONTACT US SECTION & EXECUTIVE FOOTER */}
        <KochiContactSection onOpenInspectionModal={onOpenInspectionModal} />

      </main>

      {/* 3. Right-Side Bottom Floating Actions (WhatsApp, Call, Up Arrow) */}
      <FloatingActionButtons />
    </div>
  );
}
