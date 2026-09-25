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
  ChevronDown
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
      {/* 1. Top Luxury Dispatch & Trust Ticker */}
      <div className="bg-[#020d08] text-slate-300 text-xs py-2 px-4 border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          
          {/* Left: Active Squad Status */}
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-emerald-400 font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2"></span>
              Kochi Central Hub: Rapid Squad on Duty
            </span>
            <span className="hidden md:inline text-emerald-800">•</span>
            <span className="hidden md:flex items-center text-slate-300">
              <Clock className="w-3.5 h-3.5 mr-1 text-amber-400" />
              Same-Day On-Site Inspection in Greater Kochi
            </span>
          </div>

          {/* Right: Domain badge & Hotline */}
          <div className="flex items-center space-x-4 text-[11px] sm:text-xs">
            <div className="hidden sm:inline-flex items-center gap-1.5 text-amber-300 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>IS:6313 & CIB&RC Approved</span>
            </div>
            <span className="text-emerald-800 hidden sm:inline">|</span>
            <a 
              href="tel:9020040009"
              className="flex items-center text-emerald-300 hover:text-white font-bold transition"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              <span>Helpline: +91 90200 40009</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Executive Navbar */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-[#03150e]/95 backdrop-blur-md shadow-2xl py-3 border-b border-emerald-500/20' : 'bg-[#03150e]/90 backdrop-blur-sm py-4 border-b border-emerald-950/60'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Authority Label */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer group flex items-center space-x-3 select-none"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-800 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.35)] border border-emerald-400/40 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg sm:text-2xl font-serif font-black tracking-tight text-white">
                    Termite Control <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">Kochi</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase text-emerald-400">
                    termitecontrolkochi.com
                  </span>
                  <span className="text-emerald-700 hidden sm:inline">•</span>
                  <span className="text-[10px] text-slate-400 hidden sm:inline">
                    Eco Pest India Unit
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
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

            {/* Header Right Action CTAs */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* WhatsApp Button */}
              <button
                onClick={() => handleWhatsAppClick('kochi_header', { location: 'Kochi', message: 'Hi Termite Control Kochi, I need inspection and treatment details for my property in Kochi.' })}
                className="inline-flex items-center justify-center px-3.5 py-2 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900 font-semibold text-xs transition shadow-sm"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 mr-1.5 text-[#25D366] fill-[#25D366]" />
                <span>WhatsApp</span>
              </button>

              {/* Call Now Button */}
              <button
                onClick={() => handlePhoneClick('kochi_header')}
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs shadow-[0_0_15px_rgba(245,199,93,0.3)] transition transform hover:-translate-y-0.5"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 fill-slate-950" />
                <span>{PRIMARY_PHONE_DISPLAY}</span>
              </button>

              {/* Free Inspection Trigger Button */}
              <button
                onClick={() => onOpenInspectionModal({ location: 'Kochi (Ernakulam)' })}
                className="hidden xl:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition border border-emerald-400/40"
              >
                <span>Free Inspection</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle & Fast Call */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => handlePhoneClick('kochi_header_mobile')}
                className="p-2.5 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs flex items-center space-x-1"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span className="text-xs font-bold">Call</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-200 hover:text-white bg-emerald-950/80 border border-emerald-500/30 transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#03150e]/98 backdrop-blur-2xl border-b border-emerald-800/60 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="px-5 pt-4 pb-7 space-y-4">
            
            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-2 pt-1 text-xs font-semibold">
              <button
                onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left px-3.5 py-2.5 rounded-xl bg-emerald-950/60 text-slate-200 hover:text-white border border-emerald-800/40"
              >
                🏠 Overview
              </button>
              <button
                onClick={() => scrollToSection('kochi-services')}
                className="text-left px-3.5 py-2.5 rounded-xl bg-emerald-950/60 text-slate-200 hover:text-white border border-emerald-800/40"
              >
                🛡️ Treatments
              </button>
              <button
                onClick={() => scrollToSection('estimator')}
                className="text-left px-3.5 py-2.5 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-400/40"
              >
                ✨ Cost Estimator
              </button>
              <button
                onClick={() => scrollToSection('is-6313-process')}
                className="text-left px-3.5 py-2.5 rounded-xl bg-emerald-950/60 text-slate-200 hover:text-white border border-emerald-800/40"
              >
                📋 IS 6313 Standard
              </button>
              <button
                onClick={() => scrollToSection('kochi-areas')}
                className="text-left px-3.5 py-2.5 rounded-xl bg-emerald-950/60 text-slate-200 hover:text-white border border-emerald-800/40"
              >
                📍 Kochi Localities
              </button>
              <button
                onClick={() => scrollToSection('faq-section')}
                className="text-left px-3.5 py-2.5 rounded-xl bg-emerald-950/60 text-slate-200 hover:text-white border border-emerald-800/40"
              >
                ❓ FAQs
              </button>
            </div>

            {/* Kochi Localities Quick Chips */}
            <div className="pt-2 border-t border-emerald-900/60">
              <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                Greater Kochi Same-Day Service Hubs
              </div>
              <div className="flex flex-wrap gap-1.5">
                {kochiAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-950/80 text-slate-300 border border-emerald-800/40"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="pt-3 border-t border-emerald-900/60 space-y-2.5">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenInspectionModal({ location: 'Kochi' }); }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-extrabold text-sm text-center shadow-lg"
              >
                📋 Book Free Inspection in Kochi
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handlePhoneClick('kochi_mobile_drawer')}
                  className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center space-x-1.5 border border-emerald-500/40 shadow"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 9020040009</span>
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
