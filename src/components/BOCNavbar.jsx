import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  User, 
  ArrowRight, 
  Phone, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import bocLogoPng from '../assets/boc-logo.png';

/**
 * BOCNavbar — Executive Floating Navigation Bar
 * High-luxury styling, active route indicator, mobile slide-over drawer
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
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#030B18]/95 backdrop-blur-md py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-[#D4AF37]/30' 
            : 'bg-gradient-to-b from-[#020712]/90 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Brand Logo & Emblem */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={bocLogoPng} 
              alt="BOC Logo" 
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform" 
            />
            <div className="h-7 w-[1.5px] bg-[#D4AF37]" />
            <div className="flex flex-col text-left font-cinzel font-bold text-[8.5px] sm:text-[9.5px] tracking-[0.2em] leading-tight text-white">
              <span className="text-[#F9D678]">BUSINESS</span>
              <span>OPPORTUNITIES</span>
              <span className="text-slate-300">CONNECTIONS</span>
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
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all uppercase font-cinzel ${
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

          {/* Right: Action Buttons (Login & Join BOC) */}
          <div className="hidden sm:flex items-center gap-3">
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

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              to="/login"
              className="px-2.5 py-1.5 rounded-full border border-[#D4AF37]/50 text-[#F9D678] text-[10px] font-bold tracking-wider font-cinzel"
            >
              LOGIN
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                  <img src={bocLogoPng} alt="BOC" className="w-8 h-8 object-contain" />
                  <span className="font-cinzel font-bold text-white text-xs tracking-widest">
                    BOC PLATFORM
                  </span>
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
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#D4AF37]/60 text-[#F9D678] font-cinzel font-bold text-xs tracking-wider"
              >
                <User className="w-4 h-4" />
                <span>MEMBER LOGIN</span>
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs tracking-wider shadow-lg"
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
