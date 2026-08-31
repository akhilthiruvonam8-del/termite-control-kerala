import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import ServicesGrid from '../components/ServicesGrid';
import TermiteProblemSection from '../components/TermiteProblemSection';
import WoodBorerSection from '../components/WoodBorerSection';
import HowItWorks from '../components/HowItWorks';
import PropertyTypes from '../components/PropertyTypes';
import BeforeAfterShowcase from '../components/BeforeAfterShowcase';
import KeralaLocationsHub from '../components/KeralaLocationsHub';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import PrimaryBottomCTA from '../components/PrimaryBottomCTA';
import { updateMetaTags } from '../utils/seo';

export default function HomePage({ onNavigate, onOpenLeadModal, onOpenInspectionModal }) {
  useEffect(() => {
    updateMetaTags({
      title: "Termite Control Kerala | Anti-Termite & Wood Borer Treatment",
      description: "Professional termite control, anti-termite treatment and wood borer treatment across Kerala. Residential, commercial and pre/post-construction solutions. Call 9020040009.",
      keywords: "termite control Kerala, termite treatment Kerala, anti termite treatment Kerala, termite control Kozhikode, termite control Kochi, termite control Ernakulam, wood borer treatment Kerala, wood borer control Kerala, termite treatment Kochi, anti termite treatment Kochi, termite control near me, termite pest control Kerala, pre construction termite treatment Kerala, post construction termite treatment Kerala"
    });
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Section + Quick Lead Form */}
      <Hero 
        onOpenInspectionModal={onOpenInspectionModal}
      />

      {/* 2. Trust Section (7 Points) */}
      <TrustSection />

      {/* 3. Services Grid (7 Services) */}
      <ServicesGrid 
        onOpenLeadModal={onOpenLeadModal} 
      />

      {/* 4. Termite Problem Section (8 Signs) */}
      <TermiteProblemSection 
        onOpenInspectionModal={onOpenInspectionModal}
      />

      {/* 5. Wood Borer Section */}
      <WoodBorerSection 
        onOpenLeadModal={onOpenLeadModal}
      />

      {/* 6. How It Works (4 Steps) */}
      <HowItWorks 
        onOpenInspectionModal={onOpenInspectionModal}
      />

      {/* 7. Property Types (Residential, Commercial, Construction, etc.) */}
      <PropertyTypes 
        onOpenLeadModal={onOpenLeadModal}
      />

      {/* 8. Before & After Results Showcase */}
      <BeforeAfterShowcase 
        onOpenInspectionModal={onOpenInspectionModal}
      />

      {/* 9. Kerala-Wide Service Hub + Kozhikode & Kochi Focus */}
      <KeralaLocationsHub 
        onNavigate={onNavigate}
        onOpenLeadModal={onOpenLeadModal}
      />

      {/* 9. FAQ Section */}
      <FAQSection />

      {/* 10. Contact Section */}
      <ContactSection 
        onOpenLeadModal={onOpenLeadModal}
      />

      {/* 11. Final Primary Bottom CTA */}
      <PrimaryBottomCTA 
        onOpenInspectionModal={onOpenInspectionModal}
      />
    </div>
  );
}
