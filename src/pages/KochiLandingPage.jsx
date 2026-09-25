import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Award, 
  CheckCircle2, 
  Building2, 
  Home, 
  Hammer, 
  Layers, 
  Sparkles, 
  ChevronRight, 
  ArrowRight,
  ShieldAlert,
  AlertTriangle,
  HelpCircle,
  Trees
} from 'lucide-react';
import KochiNavbar from '../components/KochiNavbar';
import KochiHero from '../components/KochiHero';
import KochiPreloader from '../components/KochiPreloader';
import Footer from '../components/Footer';
import { KOCHI_DATA } from '../data/kochiData';
import { updateMetaTags } from '../utils/seo';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function KochiLandingPage({ onOpenInspectionModal, onOpenCrmModal, onOpenCalculatorModal }) {
  useEffect(() => {
    updateMetaTags({
      title: "Termite Control Kochi | Anti-Termite Treatment & Subterranean Colony Eradication",
      description: "Premier anti-termite treatment & timber protection in Kochi (Ernakulam). 100% odorless, IS:6313 certified drill-seal barriers & foundation piping with 10-year warranty. 45-min dispatch in Kakkanad, Marine Drive, Edappally, Aluva.",
      keywords: "termite control kochi, termite treatment kochi, anti termite treatment ernakulam, pest control kochi, termite treatment kakkanad, wood borer treatment kochi, pre construction termite treatment kochi, termitecontrolkochi.com",
      canonicalUrl: "https://termitecontrolkochi.com/",
      schema: {
        "@context": "https://schema.org",
        "@type": "PestControlService",
        "name": "Termite Control Kochi",
        "url": "https://termitecontrolkochi.com/",
        "telephone": "+91-9020040009",
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
        "areaServed": ["Kochi", "Ernakulam", "Kakkanad", "Marine Drive", "Edappally", "Panampilly Nagar", "Aluva", "Vyttila"]
      }
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#020d08] text-slate-100 min-h-screen font-sans selection:bg-[#C9A227] selection:text-[#020d08]">
      {/* 0. Introductory Spinning Logo Preloader (Fumitech style) */}
      <KochiPreloader />
      
      {/* 1. Executive Kochi Navbar */}
      <KochiNavbar onOpenInspectionModal={onOpenInspectionModal} />

      {/* 2. World-Class Luxury Kochi Hero Section */}
      <KochiHero onOpenInspectionModal={onOpenInspectionModal} />

      {/* 3. Core Treatment Protocols in Kochi */}
      <section id="kochi-services" className="py-16 sm:py-24 bg-[#03140e] border-t border-emerald-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-bold tracking-widest uppercase mb-3 shadow">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>IS:6313 SPECIFICATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white tracking-tight">
              Specialized Anti-Termite Protocols in <span className="text-amber-400">Kochi</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
              Scientifically engineered treatments tailored to Kochi’s coastal humid climate and subterranean water tables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {KOCHI_DATA.services.map((srv, idx) => (
              <div 
                key={idx}
                className="rounded-3xl bg-[#041a12] border border-emerald-800/50 hover:border-amber-400/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-400/30">
                      {srv.warranty}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                <button
                  onClick={() => onOpenInspectionModal({ 
                    service: srv.title, 
                    location: 'Kochi',
                    title: `REQUEST: ${srv.title.toUpperCase()}`
                  })}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/50 text-emerald-300 hover:text-white font-bold text-xs transition flex items-center justify-center space-x-1.5"
                >
                  <span>Book This Service</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Kochi Localities & Rapid Squad Coverage */}
      <section id="kochi-areas" className="py-16 sm:py-20 bg-[#020d08] border-t border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>GREATER KOCHI COVERAGE MATRIX</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
                Same-Day Squad Stations in Kochi
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md mt-2 md:mt-0">
              Mobile squads stationed across key metro hubs ensure immediate response within 30 to 45 minutes for emergency termite outbreaks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {KOCHI_DATA.keyZones.map((zone, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[#041911] border border-emerald-900/60 hover:border-emerald-600/50 transition-all text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm sm:text-base text-white">
                    {zone.name}
                  </h3>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-700/40">
                    ETA: {zone.eta}
                  </span>
                </div>
                <p className="text-[11px] font-medium text-amber-300 mb-3">
                  {zone.type}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {zone.hotspots.map((spot, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-[#020f09] text-slate-300 border border-emerald-950"
                    >
                      {spot}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. 4-Stage IS:6313 Architectural Defense Process */}
      <section id="is-6313-process" className="py-16 sm:py-20 bg-[#03150e] border-t border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400 font-bold">
              SCIENTIFIC STANDARD OPERATING PROCEDURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white mt-1">
              How We Eliminate Termites Permanently
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl bg-[#041a12] border border-emerald-800/40 relative">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-black text-sm flex items-center justify-center mb-3">
                01
              </div>
              <h3 className="font-bold text-sm text-white mb-1.5">Thermal & Acoustic Audit</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Non-destructive thermal sensors detect hidden hollow galleries inside timber walls, doorframes, and ceiling rafters.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#041a12] border border-emerald-800/40 relative">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-black text-sm flex items-center justify-center mb-3">
                02
              </div>
              <h3 className="font-bold text-sm text-white mb-1.5">1.2mm Micro-Drill Access</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Precision micro-drilling through skirting margins and tile grout lines without damaging costly flooring.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#041a12] border border-emerald-800/40 relative">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-black text-sm flex items-center justify-center mb-3">
                03
              </div>
              <h3 className="font-bold text-sm text-white mb-1.5">Pressurized Injection</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Non-repellent termiticide creates a continuous chemical subterranean barrier that workers carry back to the queen.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#041a12] border border-emerald-800/40 relative">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-black text-sm flex items-center justify-center mb-3">
                04
              </div>
              <h3 className="font-bold text-sm text-white mb-1.5">Color-Matched Seal & Bond</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Holes sealed with matching tile epoxy, followed by issuance of an official 10-year stamped warranty certificate.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Kochi Termite FAQs */}
      <section id="faq-section" className="py-16 sm:py-20 bg-[#020e09] border-t border-emerald-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 font-bold">
              OFFICIAL CLARIFICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white mt-1">
              Frequently Asked Questions in Kochi
            </h2>
          </div>

          <div className="space-y-4">
            {KOCHI_DATA.faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[#03150e] border border-emerald-900/60"
              >
                <h3 className="font-bold text-sm sm:text-base text-white mb-2 flex items-start">
                  <HelpCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Bottom Prestige CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-950 via-[#05261a] to-emerald-950 border-t border-emerald-800 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>EXPRESS DISPATCH WITHIN 45 MINUTES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-black text-white tracking-tight">
            Protect Your Kochi Property with a Stamped 10-Year Warranty
          </h2>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto">
            Book a complimentary on-site inspection today. Our senior structural protection engineer will inspect every corner of your property with thermal detection.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenInspectionModal({ location: 'Kochi (Ernakulam)' })}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl transition transform hover:-translate-y-0.5"
            >
              Book Free On-Site Inspection
            </button>

            <button
              onClick={() => handlePhoneClick('kochi_bottom_cta')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: {PRIMARY_PHONE_DISPLAY}</span>
            </button>

            <button
              onClick={() => handleWhatsAppClick('kochi_bottom_cta', { location: 'Kochi', message: 'Hi Termite Control Kochi, I want to book an inspection.' })}
              className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm transition flex items-center space-x-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Chat</span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. Global Termite Defense Footer */}
      <Footer 
        currentPath="/termite-control-kochi" 
        onNavigate={(path) => {
          if (path.startsWith('/#')) {
            const el = document.getElementById(path.substring(2));
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = path;
          }
        }} 
        onOpenCrmModal={onOpenCrmModal} 
      />

    </div>
  );
}
