import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu,
  X, 
  User, 
  ArrowRight, 
  Phone
} from 'lucide-react';
import bocLogoPng from '../assets/boc-logo.png';

/**
 * BOCNavbar — Unified Executive Luxury Navigation Bar
 * Features:
 * - Prominent "BUSINESS OWNERS CIRCLE" Branding + Golden Tagline
 * - Standout 3-line golden hamburger (Menu) on mobile
 * - Desktop navigation links with uniform executive styling and luminous indicator
 * - Member Login button
 * - Mobile slide-over drawer with all platform destinations
 */
export default function BOCNavbar({ onOpenJoinModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About BOC', path: '/about' },
    { name: 'Membership', path: '/membership' },
    { name: 'Chapters', path: '/chapters' },
    { name: 'Members Directory', path: '/members' },
    { name: 'Events', path: '/events' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#030B17]/95 backdrop-blur-md py-2.5 border-b border-[#D4AF37]/35 shadow-[0_4px_25px_rgba(0,0,0,0.6)]' 
            : 'bg-gradient-to-b from-[#020712]/95 via-[#030B18]/85 to-transparent py-3 sm:py-3.5 border-b border-[#D4AF37]/20'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Brand Identity & Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-3 group flex-shrink-0 cursor-pointer min-w-0 pr-1"
          >
            <div className="relative flex-shrink-0">
              <img 
                src={bocLogoPng} 
                alt="BOC Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col text-left truncate">
              <span className="font-cinzel font-black tracking-wider text-[11px] xs:text-xs sm:text-[13.5px] lg:text-[15px] text-white group-hover:text-[#F9D678] transition-colors leading-tight truncate">
                BUSINESS OWNERS CIRCLE
              </span>
              <span className="font-cinzel tracking-[0.18em] sm:tracking-[0.22em] text-[7px] sm:text-[8px] text-[#D4AF37] uppercase font-bold leading-tight mt-0.5 truncate">
                BUSINESS • OWNERS • CIRCLE
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links (Uniform Executive Styling) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all uppercase font-cinzel ${
                    active 
                      ? 'text-[#F9D678] font-bold' 
                      : 'text-slate-200 hover:text-[#F9D678] hover:bg-white/5 font-medium'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#F9D678] to-transparent rounded-full shadow-[0_0_8px_#F9D678]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Desktop Action Buttons (Login Only) */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/50 hover:border-[#F9D678] text-slate-200 hover:text-white bg-[#05142B]/80 hover:bg-[#D4AF37]/20 text-xs font-semibold tracking-wider transition-all font-cinzel shadow-sm"
            >
              <User className="w-3.5 h-3.5 text-[#F9D678]" />
              <span>MEMBER LOGIN</span>
            </Link>
          </div>

          {/* Mobile Right: Login & Standout Gold Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
            <Link
              to="/login"
              className="px-2.5 py-1.5 rounded-full border border-[#D4AF37]/60 text-[#F9D678] hover:text-white hover:bg-[#D4AF37]/20 text-[10px] sm:text-[11px] font-bold tracking-wider font-cinzel transition-all shadow-sm flex items-center gap-1"
            >
              <User className="w-3 h-3 text-[#F9D678]" />
              <span>LOGIN</span>
            </Link>
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#081B38] border border-[#D4AF37]/80 text-[#F9D678] hover:border-[#F9D678] hover:bg-[#D4AF37]/20 transition-all shadow-[0_0_12px_rgba(212,175,55,0.35)] cursor-pointer active:scale-95"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[2.5] text-[#F9D678]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[2.5] text-[#F9D678]" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop with click-to-close */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fadeIn" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#030B18] border-l border-[#D4AF37]/40 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto z-10">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#D4AF37]/20 mb-6">
                <div className="flex items-center gap-2.5">
                  <img src={bocLogoPng} alt="BOC" className="w-8 h-8 object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                  <div className="flex flex-col text-left">
                    <span className="font-cinzel font-bold text-white text-xs tracking-wider">
                      BUSINESS OWNERS CIRCLE
                    </span>
                    <span className="text-[7.5px] text-[#C5A059] tracking-widest uppercase">
                      OFFICIAL NETWORKING PLATFORM
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5 text-[#F9D678]" />
                </button>
              </div>

              {/* Navigation Links with Active Indicator */}
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-xl text-xs tracking-wider uppercase font-cinzel transition-all flex items-center justify-between ${
                        active 
                          ? 'text-[#F9D678] bg-[#D4AF37]/20 border border-[#D4AF37]/50 shadow-[0_0_12px_rgba(212,175,55,0.25)] font-bold' 
                          : 'text-slate-200 hover:text-[#F9D678] hover:bg-white/5 font-medium'
                      }`}
                    >
                      <span>{link.name}</span>
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-[#F9D678] shadow-[0_0_6px_#F9D678]" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-[#D4AF37]/20 space-y-3">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#D4AF37]/60 text-[#F9D678] font-cinzel font-bold text-xs tracking-wider hover:bg-[#D4AF37]/15 transition-all"
              >
                <User className="w-4 h-4" />
                <span>MEMBER LOGIN</span>
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <span>APPLY FOR MEMBERSHIP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center pt-2 text-[11px] text-slate-400">
                <span>Admissions Desk: </span>
                <a href="tel:+919020040009" className="text-[#F9D678] font-semibold">9020040009</a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
