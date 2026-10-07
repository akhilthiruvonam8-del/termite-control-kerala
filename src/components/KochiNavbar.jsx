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
  ArrowRight,
  Home,
  Info,
  Layers,
  FileText,
  Image,
  HelpCircle,
  PhoneCall,
  Mail,
  BookOpen
} from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, SUPPORT_EMAIL, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function KochiNavbar({ 
  onOpenInspectionModal, 
  activeSection: controlledActiveSection, 
  onSelectSection 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localActiveSection, setLocalActiveSection] = useState('home');

  const activeSection = controlledActiveSection || localActiveSection;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'locations', label: 'Locations', icon: MapPin },
  ];

  const kochiAreas = [
    'Kakkanad (Infopark)',
    'Marine Drive',
    'Panampilly Nagar',
    'Edappally',
    'Aluva',
    'Palarivattom',
    'Kadavanthra',
    'Kaloor',
    'Vyttila',
    'Fort Kochi',
    'Thrippunithura',
    'Kalamassery',
    'Maradu',
    'Bolgatty'
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setLocalActiveSection(id);
    if (onSelectSection) {
      onSelectSection(id);
      return;
    }
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
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (id === 'contact' && onOpenInspectionModal) {
      onOpenInspectionModal({ location: 'Kochi' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full transition-all duration-300">
      {/* 1. Top Luxury Dispatch & Trust Ticker (Desktop & Mobile) */}
      <div className="bg-[#010906] text-slate-300 text-xs py-1 px-3 sm:px-4 border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          
          {/* Left: Active Squad Status */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            <span className="flex items-center text-emerald-400 font-semibold tracking-wide text-[10.5px] sm:text-xs whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5 sm:mr-2 shrink-0"></span>
              <span className="font-bold">Eco Pest India</span>
            </span>
            <span className="hidden md:inline text-emerald-800">•</span>
            <span className="hidden md:flex items-center text-slate-300 text-[11px] sm:text-xs whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 mr-1 text-amber-400 shrink-0" />
              Same-Day On-Site Inspection Across All Kochi Locations
            </span>
          </div>

          {/* Right: Hotline & Support Email */}
          <div className="flex items-center space-x-2 sm:space-x-4 text-[11px] sm:text-xs shrink-0">
            <a 
              href={`mailto:${SUPPORT_EMAIL}`}
              className="hidden lg:flex items-center text-slate-300 hover:text-amber-300 transition text-[11px] whitespace-nowrap"
              title="Official Eco Pest India Support Email"
            >
              <Mail className="w-3 h-3 mr-1 text-amber-400" />
              <span>Support: <strong className="text-amber-300 font-mono">{SUPPORT_EMAIL}</strong></span>
            </a>
            <span className="text-emerald-800 hidden lg:inline">|</span>
            <div className="hidden sm:inline-flex items-center gap-1.5 text-amber-300 font-mono text-[11px] whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>IS:6313 Certified</span>
            </div>
            <span className="text-emerald-800 hidden sm:inline">|</span>
            <a 
              href="tel:9020040009"
              onClick={(e) => { e.preventDefault(); handlePhoneClick('navbar_top'); }}
              className="flex items-center text-emerald-300 hover:text-white font-bold transition text-[11px] sm:text-xs whitespace-nowrap"
              title="Call 24/7 Hotline"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 text-emerald-400 shrink-0" />
              <span>24/7 Hotline: <strong className="text-white ml-0.5">{PRIMARY_PHONE_DISPLAY}</strong></span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Executive Navbar */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#020e09]/95 backdrop-blur-md shadow-2xl py-1.5 sm:py-2.5 border-b border-emerald-500/20' 
          : 'bg-[#020e09]/90 backdrop-blur-sm py-1.5 sm:py-2.5 border-b border-emerald-950/70'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 lg:gap-4">
            
            {/* Brand Logo & Authority Label: ECO PEST INDIA + Safe Home, Healthy Life */}
            <div 
              onClick={() => scrollToSection('home')}
              className="cursor-pointer group flex items-center space-x-2 sm:space-x-3 select-none shrink-0"
            >
              {/* Eco Pest India Official Round Logo Badge - Crisp white backing & comfortable padding so NOTHING is cut */}
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-amber-400 shadow-[0_0_20px_rgba(245,199,93,0.55)] ring-2 ring-emerald-500/40 p-1.5 flex items-center justify-center shrink-0 group-hover:border-amber-300 group-hover:scale-105 transition-all duration-300">
                <img 
                  src="/images/eco-pest-india-logo.png" 
                  alt="Eco Pest India Official Logo" 
                  className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform"
                />
              </div>
              
              {/* Heading: ECO PEST INDIA / Subtitle: Safe Home, Healthy Life */}
              <div className="flex flex-col text-left">
                <div className="flex items-baseline gap-1">
                  <span className="text-base sm:text-lg lg:text-xl font-cinzel font-black tracking-wider text-slate-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] group-hover:text-white transition-colors">
                    ECO PEST <span className="font-cinzel font-black tracking-widest bg-gradient-to-r from-[#FFF5B8] via-[#F5C042] to-[#D49319] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(245,199,93,0.45)]">INDIA</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-wider text-emerald-300/90 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                    Safe Home, Healthy Life
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links: Home, About, Services, Locations, Blog, Gallery, FAQ, Contact */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 2xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`px-2.5 py-1.5 text-xs xl:text-[13px] font-semibold rounded-lg transition tracking-wide cursor-pointer whitespace-nowrap ${
                      isActive 
                        ? 'text-amber-300 bg-emerald-950/90 border border-amber-400/40 shadow-sm' 
                        : 'text-slate-200 hover:text-amber-300 hover:bg-emerald-950/60'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Right Action CTAs */}
            <div className="hidden sm:flex items-center space-x-2 md:space-x-2.5 shrink-0">
              {/* WhatsApp Button */}
              <button
                onClick={() => handleWhatsAppClick('kochi_header', { location: 'Kochi', message: 'Hi Eco Pest India, I need pest & termite inspection details for my property in Kochi.' })}
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-emerald-950/70 border border-[#25D366]/40 text-emerald-300 hover:text-white hover:bg-emerald-900/60 font-semibold text-xs transition shadow-sm cursor-pointer"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1.5 text-[#25D366] fill-[#25D366]" />
                <span>WhatsApp</span>
              </button>

              {/* Call Now Button */}
              <button
                onClick={() => handlePhoneClick('kochi_header')}
                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#F5C042] via-[#E5A920] to-[#C98B10] hover:from-[#FFD566] hover:to-[#E5A920] text-slate-950 font-black text-xs shadow-[0_0_15px_rgba(245,199,93,0.35)] transition transform hover:-translate-y-0.5 tracking-wide cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 fill-slate-950" />
                <span>{PRIMARY_PHONE_DISPLAY}</span>
              </button>

              {/* Free Inspection Trigger Button */}
              <button
                onClick={() => onOpenInspectionModal({ location: 'Kochi' })}
                className="hidden 2xl:inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition border border-emerald-400/50 cursor-pointer"
              >
                <span>Free Inspection</span>
              </button>
            </div>

            {/* Mobile View Header Actions (Compact, responsive & touch-friendly) */}
            <div className="flex items-center space-x-1.5 lg:hidden">
              
              {/* Mobile Direct Call Button */}
              <button
                onClick={() => handlePhoneClick('kochi_header_mobile')}
                className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs flex items-center space-x-1 shadow-[0_0_12px_rgba(245,199,93,0.35)] cursor-pointer"
                aria-label="Call Helpline"
                title="Call 9020040009"
              >
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-slate-950" />
                <span className="text-[11px] font-bold">Call</span>
              </button>

              {/* Mobile Direct WhatsApp Button */}
              <button
                onClick={() => handleWhatsAppClick('kochi_header_mobile', { location: 'Kochi', message: 'Hi Eco Pest India, I need pest & termite inspection details for my property in Kochi.' })}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-md cursor-pointer"
                aria-label="Chat on WhatsApp"
                title="WhatsApp Chat"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
              </button>

              {/* Mobile Drawer Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full text-slate-200 hover:text-white bg-emerald-950/80 border border-emerald-500/40 transition flex items-center justify-center cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Mobile View Slide-Down Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#020e09]/98 backdrop-blur-2xl border-b border-emerald-800/60 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-3.5 pb-6 space-y-3.5">
            
            {/* Navigation Links Grid for Mobile: Home, About, Services, Locations */}
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left px-3 py-2.5 rounded-xl border flex items-center space-x-2 cursor-pointer active:scale-95 transition-all ${
                      isActive
                        ? 'bg-emerald-900/90 text-amber-300 border-amber-400/60 shadow-sm'
                        : 'bg-emerald-950/60 text-slate-200 hover:text-white border-emerald-800/40'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-amber-300' : 'text-amber-400'}`} />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Kochi Service Hubs Quick Chips */}
            <div className="pt-1 border-t border-emerald-900/60">
              <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 flex items-center">
                <MapPin className="w-3 h-3 mr-1 text-emerald-400" />
                Kochi Same-Day Service Hubs
              </div>
              <div className="flex flex-wrap gap-1.5">
                {kochiAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-950/80 text-slate-300 border border-emerald-800/40"
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
                className="w-full py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm text-center shadow-lg flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>📋 Book Free Inspection in Kochi</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handlePhoneClick('kochi_mobile_drawer')}
                  className="w-full py-2.5 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 border border-emerald-600/40 shadow cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {PRIMARY_PHONE_DISPLAY}</span>
                </button>
                <button
                  onClick={() => handleWhatsAppClick('kochi_mobile_drawer', { location: 'Kochi', message: 'Hi Eco Pest India, I need an urgent inspection for my property in Kochi.' })}
                  className="w-full py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>

              {/* Mobile Drawer Support Email */}
              <a 
                href={`mailto:${SUPPORT_EMAIL}`}
                className="w-full py-2 px-3 rounded-xl bg-emerald-950/80 border border-emerald-800/40 text-slate-300 hover:text-amber-300 text-xs flex items-center justify-center space-x-2 transition"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>Support: <strong className="text-amber-300">{SUPPORT_EMAIL}</strong></span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
