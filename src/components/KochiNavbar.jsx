import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Award, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function KochiNavbar({ onOpenInspectionModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const kochiAreas = [
    'Kakkanad / Infopark',
    'Marine Drive / MG Road',
    'Panampilly Nagar / Kadavanthra',
    'Edappally / Palarivattom',
    'Aluva / Angamaly',
    'Vyttila / Tripunithura',
    'Fort Kochi / Mattancherry',
    'Kalamassery / Eloor'
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Top Luxury Dispatch & Trust Ticker (Desktop & Mobile) */}
      <div className="bg-[#010906] text-slate-300 text-xs py-1.5 px-3 sm:px-4 border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          
          {/* Left: Active Squad Status */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="flex items-center text-emerald-400 font-semibold tracking-wide text-[11px] sm:text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5 sm:mr-2"></span>
              <span className="font-bold">Kochi Hub:</span> Rapid Squad Active
            </span>
            <span className="hidden md:inline text-emerald-800">•</span>
            <span className="hidden md:flex items-center text-slate-300 text-[11px] sm:text-xs">
              <Clock className="w-3.5 h-3.5 mr-1 text-amber-400" />
              Same-Day On-Site Inspection in Greater Kochi
            </span>
          </div>

          {/* Right: Hotline & IS:6313 Certification */}
          <div className="flex items-center space-x-3 sm:space-x-4 text-[11px] sm:text-xs">
            <div className="hidden sm:inline-flex items-center gap-1.5 text-amber-300 font-mono text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>IS:6313 & CIB&RC Certified</span>
            </div>
            <span className="text-emerald-800 hidden sm:inline">|</span>
            <a 
              href="tel:9020040009"
              className="flex items-center text-emerald-300 hover:text-white font-bold transition text-[11px] sm:text-xs"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 text-emerald-400" />
              <span>{PRIMARY_PHONE_DISPLAY}</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Executive Navbar */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#020e09]/95 backdrop-blur-md shadow-2xl py-2.5 sm:py-3 border-b border-emerald-500/20' 
          : 'bg-[#020e09]/90 backdrop-blur-sm py-3 sm:py-3.5 border-b border-emerald-950/70'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Authority Label (Official Eco Pest India Logo) */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer group flex items-center space-x-2.5 sm:space-x-3 select-none"
            >
              {/* Eco Pest India Official Logo Image */}
              <div className="relative p-1 rounded-xl bg-black/50 border border-emerald-500/30 group-hover:border-emerald-400/70 transition-all flex items-center justify-center shrink-0">
                <img 
                  src="/images/eco-pest-india-logo.png" 
                  alt="Eco Pest India Logo" 
                  className="h-8 sm:h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(16,185,129,0.3)] group-hover:scale-105 transition-transform"
                />
              </div>
              
              <div className="flex flex-col text-left">
                <div className="flex items-baseline gap-1">
                  <span className="text-base sm:text-xl lg:text-2xl font-serif font-black tracking-tight text-white leading-tight">
                    Termite Control <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">Kochi</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase text-emerald-400">
                    termitecontrolkochi.com
                  </span>
                  <span className="text-emerald-700 hidden sm:inline">•</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 hidden sm:inline font-sans">
                    A Unit of Eco Pest India™
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop / Laptop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-3 py-2 text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-emerald-900/30 rounded-lg transition"
              >
                Overview
              </button>

              <button 
                onClick={() => scrollToSection('kochi-services')}
                className="px-3 py-2 text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-emerald-900/30 rounded-lg transition"
              >
                Treatments & Pricing
              </button>

              <button 
                onClick={() => scrollToSection('estimator')}
                className="px-3 py-2 text-xs font-semibold text-amber-300 hover:text-amber-200 bg-amber-500/10 border border-amber-400/30 rounded-lg transition flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Cost Estimator</span>
              </button>

              <button 
                onClick={() => scrollToSection('kochi-areas')}
                className="px-3 py-2 text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-emerald-900/30 rounded-lg transition"
              >
                Areas in Kochi
              </button>

              <button 
                onClick={() => scrollToSection('is-6313-process')}
                className="px-3 py-2 text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-emerald-900/30 rounded-lg transition"
              >
                IS:6313 Standard
              </button>

              <button 
                onClick={() => scrollToSection('faq-section')}
                className="px-3 py-2 text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-emerald-900/30 rounded-lg transition"
              >
                FAQ
              </button>
            </nav>

            {/* Desktop / Laptop Right Action CTAs */}
            <div className="hidden sm:flex items-center space-x-2.5 md:space-x-3">
              {/* WhatsApp Button */}
              <button
                onClick={() => handleWhatsAppClick('kochi_header', { location: 'Kochi', message: 'Hi Termite Control Kochi, I need inspection and treatment details for my property in Kochi.' })}
                className="inline-flex items-center justify-center px-3 py-2 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900 font-semibold text-xs transition shadow-sm"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1.5 text-[#25D366] fill-[#25D366]" />
                <span>WhatsApp</span>
              </button>

              {/* Call Now Button */}
              <button
                onClick={() => handlePhoneClick('kochi_header')}
                className="inline-flex items-center justify-center px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs shadow-[0_0_15px_rgba(245,199,93,0.3)] transition transform hover:-translate-y-0.5"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 fill-slate-950" />
                <span>{PRIMARY_PHONE_DISPLAY}</span>
              </button>

              {/* Free Inspection Trigger Button */}
              <button
                onClick={() => onOpenInspectionModal({ location: 'Kochi (Ernakulam)' })}
                className="hidden xl:inline-flex items-center justify-center px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition border border-emerald-400/40"
              >
                <span>Free Inspection</span>
              </button>
            </div>

            {/* Mobile View Header Actions (Compact, responsive & touch-friendly) */}
            <div className="flex items-center space-x-1.5 lg:hidden">
              
              {/* Mobile Direct Call Button */}
              <button
                onClick={() => handlePhoneClick('kochi_header_mobile')}
                className="p-2 sm:p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center space-x-1 shadow-md"
                aria-label="Call Helpline"
                title="Call 9020040009"
              >
                <Phone className="w-3.5 h-3.5 fill-slate-950" />
                <span className="text-[11px] font-bold">Call</span>
              </button>

              {/* Mobile Direct WhatsApp Button */}
              <button
                onClick={() => handleWhatsAppClick('kochi_header_mobile', { location: 'Kochi', message: 'Hi Termite Control Kochi, I need inspection details.' })}
                className="p-2 sm:p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-md"
                aria-label="Chat on WhatsApp"
                title="WhatsApp Chat"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
              </button>

              {/* Mobile Drawer Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 sm:p-2.5 rounded-xl text-slate-200 hover:text-white bg-emerald-950/80 border border-emerald-500/40 transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Mobile View Slide-Down Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#020e09]/98 backdrop-blur-2xl border-b border-emerald-800/60 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-3.5">
            
            {/* Header in Drawer with Eco Pest India Logo */}
            <div className="flex items-center justify-between pb-3 border-b border-emerald-900/50">
              <div className="flex items-center space-x-2">
                <img 
                  src="/images/eco-pest-india-logo.png" 
                  alt="Eco Pest India Logo" 
                  className="h-8 w-auto object-contain"
                />
                <div>
                  <p className="text-xs font-bold text-white">Termite Control Kochi</p>
                  <p className="text-[10px] font-mono text-emerald-400">termitecontrolkochi.com</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-[9px] font-mono font-bold text-amber-300">
                IS:6313 Standard
              </span>
            </div>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <button
                onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left px-3 py-2.5 rounded-xl bg-emerald-950/60 text-slate-200 hover:text-white border border-emerald-800/40 flex items-center justify-between"
              >
                <span>🏠 Overview</span>
              </button>
              <button
                onClick={() => scrollToSection('kochi-services')}
                className="text-left px-3 py-2.5 rounded-xl bg-emerald-950/60 text-slate-200 hover:text-white border border-emerald-800/40 flex items-center justify-between"
              >
                <span>🛡️ Treatments</span>
              </button>
              <button
                onClick={() => scrollToSection('estimator')}
                className="text-left px-3 py-2.5 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-400/40 flex items-center justify-between"
              >
                <span>🧮 Cost Estimator</span>
              </button>
              <button
                onClick={() => scrollToSection('is-6313-process')}
                className="text-left px-3 py-2.5 rounded-xl bg-emerald-950/60 text-slate-200 hover:text-white border border-emerald-800/40 flex items-center justify-between"
              >
                <span>🔬 IS 6313 Process</span>
              </button>
              <button
                onClick={() => scrollToSection('kochi-areas')}
                className="text-left px-3 py-2.5 rounded-xl bg-emerald-950/60 text-slate-200 hover:text-white border border-emerald-800/40 flex items-center justify-between"
              >
                <span>📍 Kochi Localities</span>
              </button>
              <button
                onClick={() => scrollToSection('faq-section')}
                className="text-left px-3 py-2.5 rounded-xl bg-emerald-950/60 text-slate-200 hover:text-white border border-emerald-800/40 flex items-center justify-between"
              >
                <span>❓ FAQs</span>
              </button>
            </div>

            {/* Kochi Localities Quick Chips */}
            <div className="pt-2 border-t border-emerald-900/60">
              <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 flex items-center">
                <MapPin className="w-3 h-3 mr-1 text-emerald-400" />
                Greater Kochi Same-Day Service Hubs
              </div>
              <div className="flex flex-wrap gap-1.5">
                {kochiAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded-lg bg-emerald-950/80 text-slate-300 border border-emerald-800/40"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile CTAs in Drawer */}
            <div className="pt-2 border-t border-emerald-900/60 space-y-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenInspectionModal({ location: 'Kochi' }); }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm text-center shadow-lg flex items-center justify-center space-x-1.5"
              >
                <span>📋 Book Free Inspection in Kochi</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handlePhoneClick('kochi_mobile_drawer')}
                  className="w-full py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 border border-emerald-600/40 shadow"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {PRIMARY_PHONE_DISPLAY}</span>
                </button>
                <button
                  onClick={() => handleWhatsAppClick('kochi_mobile_drawer', { location: 'Kochi', message: 'Hi Termite Control Kochi, I need an urgent inspection for my property.' })}
                  className="w-full py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
