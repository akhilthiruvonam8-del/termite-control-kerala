import React, { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';
import bocLogoImg from '../assets/boc-logo.jpg';
import BOCLogo from './BOCLogo';

/**
 * Clean Luxury Header for Business Owner's Circle
 * Exactly matches Sir's executive reference mockup (media_1789637955762.jpg on mobile & media_1789637827669.jpg on desktop):
 */
export default function BOCHeader({ onOpenJoinModal, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', hasDropdown: false },
    { label: 'About', href: '#about', hasDropdown: false },
    { label: 'How It Works', href: '#how-it-works', hasDropdown: false },
    { label: 'Membership', href: '#membership', hasDropdown: true },
    { label: 'Members', href: '#members', hasDropdown: false },
    { label: 'Chapters', href: '#chapters', hasDropdown: true },
    { label: 'Referrals', href: '#referrals', hasDropdown: true },
    { label: 'Collaborate', href: '#collaborate', hasDropdown: true },
    { label: 'Events', href: '#events', hasDropdown: false },
    { label: 'Resources', href: '#resources', hasDropdown: true },
    { label: 'Contact', href: '#contact', hasDropdown: false },
  ];

  const handleNavClick = (label, href) => {
    setActiveNav(label);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href);
    } else {
      if (label === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(href.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else if (onOpenJoinModal) onOpenJoinModal();
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#030914]/95 backdrop-blur-xl py-2 sm:py-2.5 border-b border-[#C9A227]/25 shadow-[0_10px_35px_rgba(0,0,0,0.8)]' 
            : 'bg-[#020712]/90 sm:bg-[#030914]/40 backdrop-blur-sm py-2 sm:py-3.5 border-b border-white/5'
        }`}
      >
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* 1. Left: Official Circular 3D Gold Logo + Elegant Wordmark */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('Home', '#home'); }}
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer transition-transform hover:scale-102 flex-shrink-0"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 flex-shrink-0">
              {/* Soft Ambient Gold Halo */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#C5A059] to-[#E2C77D] blur-[6px] opacity-35 group-hover:opacity-60 transition-opacity duration-300"></div>
              {/* Crisp 3D Metallic Gold Ring Frame */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[1.5px] border-[#D4B56A] bg-[#030C1C] shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                <img 
                  src={bocLogoImg} 
                  alt="Business Owner's Circle Logo" 
                  className="w-full h-full object-cover scale-[1.02] brightness-[0.98]"
                  loading="eager"
                />
              </div>
            </div>

            {/* Wordmark next to emblem */}
            <div className="flex flex-col text-left">
              <span className="font-cinzel font-bold text-[10px] sm:text-xs lg:text-[14px] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FAF6EE] via-[#E2C77D] to-[#C5A059] leading-tight">
                BUSINESS OWNERS CIRCLE
              </span>
              <span className="text-[7.5px] sm:text-[9.5px] tracking-[0.24em] font-semibold text-[#DFC688] uppercase leading-none mt-0.5">
                KOCHI, KERALA
              </span>
            </div>
          </a>

          {/* 2. Center: Rich Executive Nav Links with Active Pill (Desktop) */}
          <div className="hidden xl:flex items-center gap-3 2xl:gap-5">
            {navLinks.map((item) => {
              const isActive = activeNav === item.label;
              if (isActive) {
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.label, item.href)}
                    className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F0DC9B] via-[#E2C77D] to-[#C5A059] text-[#061120] font-bold text-xs lg:text-[12.5px] tracking-wide shadow-[0_2px_12px_rgba(197,160,89,0.3)] transition-all cursor-pointer"
                  >
                    {item.label}
                  </button>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.label, item.href);
                  }}
                  className="text-xs lg:text-[12.5px] font-medium tracking-wide text-slate-200 hover:text-[#F0DC9B] transition-colors py-1 px-1.5 flex items-center gap-1 cursor-pointer whitespace-nowrap"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <span className="text-[9px] opacity-75 font-sans">▾</span>
                  )}
                </a>
              );
            })}
          </div>

          {/* 3. Right: Luxury Gold Gradient Pill Button (Desktop) */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenJoinModal}
              className="px-5 sm:px-6 py-2 rounded-full bg-gradient-to-r from-[#F0DC9B] via-[#E2C77D] to-[#C5A059] text-[#061120] font-bold text-xs lg:text-[12.5px] tracking-wider uppercase transition-all duration-300 shadow-[0_2px_14px_rgba(197,160,89,0.3)] hover:brightness-105 active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>JOIN THE CIRCLE</span>
              <span className="font-bold text-sm">→</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle (Pure CSS Gold bars matching media_1789637955762.jpg) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden flex flex-col justify-center items-center gap-1.5 p-1.5 text-[#E5C45A] hover:text-[#FFF0A5] transition-colors focus:outline-none flex-shrink-0 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2.5]" />
            ) : (
              <>
                <span className="block w-6 h-[2px] bg-[#E5C45A] rounded-full"></span>
                <span className="block w-6 h-[2px] bg-[#E5C45A] rounded-full"></span>
                <span className="block w-6 h-[2px] bg-[#E5C45A] rounded-full"></span>
              </>
            )}
          </button>

        </div>

        {/* Mobile Sub-Header: Active Home Pill matching media_1789637955762.jpg */}
        <div className="xl:hidden px-4 pt-2 pb-2 flex items-center justify-start border-b border-[#C9A227]/25">
          <button
            onClick={() => handleNavClick('Home', '#home')}
            className="flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-gradient-to-r from-[#F7E7A9] via-[#E5C45A] to-[#C9A227] text-[#041126] font-bold text-xs shadow-[0_2px_10px_rgba(229,196,90,0.4)] cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 fill-[#041126]" />
            <span>Home</span>
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#041126]/98 border-b border-[#C9A227]/30 px-6 py-6 space-y-4 backdrop-blur-2xl">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.label, item.href);
                }}
                className={`block text-base font-semibold tracking-wider ${
                  activeNav === item.label ? 'text-[#E5C45A]' : 'text-slate-200'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenJoinModal(); }}
              className="w-full py-3 rounded-lg border border-[#C9A227] text-[#E5C45A] hover:bg-[#C9A227] hover:text-[#041126] font-bold text-xs tracking-wider uppercase transition-all mt-4"
            >
              JOIN THE CIRCLE
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
