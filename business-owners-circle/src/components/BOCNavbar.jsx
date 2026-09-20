import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
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
 * - Single glowing 3-line golden hamburger on mobile
 * - Desktop navigation links with active indicators
 * - Member Login & Join BOC buttons
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
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#030B18]/95 backdrop-blur-md py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)] border-b border-[#D4AF37]/30' 
            : 'bg-gradient-to-b from-[#020712]/95 via-[#020712]/80 to-transparent py-3.5 sm:py-4 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Brand Logo & Title */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3.5 group flex-shrink-0">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full border border-[#D4B56A]/60 bg-[#030C1C] p-0.5 shadow-[0_0_12px_rgba(223,198,136,0.45)] flex-shrink-0 group-hover:scale-105 transition-transform">
              <img 
                src={bocLogoPng} 
                alt="BOC Official Crest" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(223,198,136,0.5)] brightness-105" 
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-cinzel font-bold text-xs sm:text-[13.5px] lg:text-[15px] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FAF6ED] via-[#FCE38A] to-[#DFC688] uppercase leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                BUSINESS OWNERS CIRCLE
              </span>
              <span className="font-sans font-semibold text-[7.5px] sm:text-[8.5px] lg:text-[9.5px] tracking-[0.18em] text-[#C5A059] uppercase mt-1">
                BUSINESS • OPPORTUNITIES • CONNECTIONS
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all uppercase font-cinzel ${
                    active 
                      ? 'text-[#F9D678] bg-[#D4AF37]/15 border border-[#D4AF37]/40 shadow-sm' 
                      : 'text-slate-200 hover:text-[#F9D678] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Desktop Action Buttons (Login & Join BOC) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Member Login */}
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/50 hover:border-[#F9D678] text-slate-200 hover:text-white bg-[#05142B]/80 hover:bg-[#D4AF37]/20 text-xs font-semibold tracking-wider transition-all font-cinzel"
            >
              <User className="w-3.5 h-3.5 text-[#F9D678]" />
              <span>MEMBER LOGIN</span>
            </Link>

            {/* Join BOC */}
            <button
              onClick={onOpenJoinModal}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] hover:from-white hover:to-[#F9D678] text-[#07172C] font-bold text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(212,175,55,0.35)] transition-all transform hover:scale-105 cursor-pointer font-cinzel"
            >
              <span>JOIN BOC</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right: Login & Sleek Glowing Gold Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/login"
              className="px-3 py-1.5 rounded-full border border-[#D4AF37]/60 text-[#F9D678] hover:text-white hover:bg-[#D4AF37]/20 text-[10.5px] font-bold tracking-wider font-cinzel transition-all shadow-sm flex items-center gap-1.5"
            >
              <User className="w-3 h-3 text-[#F9D678]" />
              <span>LOGIN</span>
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#E5C45A] hover:text-[#FFF3C4] cursor-pointer transition-colors flex flex-col items-center justify-center rounded-lg hover:bg-white/5"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2.4] text-[#E5C45A]" />
              ) : (
                <div className="flex flex-col gap-[5px] p-1">
                  <span className="block w-6 h-[2.5px] bg-gradient-to-r from-[#F0DC9B] to-[#C5A059] rounded-full shadow-[0_0_6px_rgba(229,196,90,0.7)]" />
                  <span className="block w-6 h-[2.5px] bg-gradient-to-r from-[#F0DC9B] to-[#C5A059] rounded-full shadow-[0_0_6px_rgba(229,196,90,0.7)]" />
                  <span className="block w-6 h-[2.5px] bg-gradient-to-r from-[#F0DC9B] to-[#C5A059] rounded-full shadow-[0_0_6px_rgba(229,196,90,0.7)]" />
                </div>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#030B18] border-l border-[#D4AF37]/30 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            
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
                  className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase font-cinzel transition-all ${
                        active 
                          ? 'text-[#F9D678] bg-[#D4AF37]/15 border border-[#D4AF37]/40' 
                          : 'text-slate-200 hover:text-[#F9D678] hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-[#D4AF37]/20 space-y-3">
              <Link
                to="/login"
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
