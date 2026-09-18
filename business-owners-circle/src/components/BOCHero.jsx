import React, { useState, useRef, useEffect } from 'react';
import bocRooftopBg from '../assets/boc-rooftop-bg.jpg';
import bocMobileBg from '../assets/boc-mobile-bg.jpg';
import bocLogoPng from '../assets/boc-logo.png';
import { 
  ArrowRight, 
  ArrowUp,
  PhoneCall,
  Users, 
  Handshake, 
  TrendingUp, 
  Building2, 
  Star, 
  Sparkles,
  ShieldCheck,
  Link2,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Award,
  CheckCircle2,
  Crown,
  MapPin,
  Rocket,
  Gift,
  FileCheck,
  BarChart3,
  Trophy,
  Zap,
  Globe,
  Calendar,
  Flame,
  BookOpen,
  FileText,
  Shield,
  Phone,
  MessageCircle,
  HelpCircle,
  Compass,
  Home as HomeIcon,
  Info
} from 'lucide-react';

/**
 * Business Owner's Circle (BOC) — Ultra-Luxury Hero Section
 * EXACT 1:1 MASTER EXPERIENCE (media_1789641252571.jpg)
 * Features:
 * - 100% Authentic 2K Master Canvas without any boxes or artificial cuts
 * - Clean Twilight Sky at Top (Old horizontal navbar removed)
 * - Clean Top Bar with Logo, Join Button, and Side Menu Button (MENU ☰)
 * - Rich 11-Category Directory Side Dropdown Panel
 * - Interactive touch & click hotspots mapped directly to master buttons & icons
 * - Fixed bottom-right action buttons: Scroll to Top, WhatsApp, and Call
 */
export default function BOCHero({ onOpenJoinModal }) {
  const [activeNav, setActiveNav] = useState('Home');
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [floatingTooltip, setFloatingTooltip] = useState(null);

  const menuContainerRef = useRef(null);

  // Close side dropdown on outside click or Escape key
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuContainerRef.current && !menuContainerRef.current.contains(e.target)) {
        setSideMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSideMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // 11 Navigation Categories with Rich Sub-options for the Side Dropdown List
  const navCategories = [
    { 
      id: 'home', 
      label: 'Home', 
      icon: HomeIcon,
      desc: 'Return to BOC Kochi master showcase'
    },
    { 
      id: 'about', 
      label: 'About Us', 
      icon: Info,
      desc: 'Our founding philosophy, leadership & vision for Kerala'
    },
    { 
      id: 'how-it-works', 
      label: 'How It Works', 
      icon: Compass,
      desc: 'Step-by-step verified peer networking architecture'
    },
    { 
      id: 'membership', 
      label: 'Membership', 
      icon: ShieldCheck,
      dropdown: [
        { title: 'Executive Membership', desc: '1 verified seat per industry vertical', icon: ShieldCheck },
        { title: 'Category Exclusivity', desc: 'Zero competition guarantee in chapter', icon: Award },
        { title: 'Membership Benefits', desc: 'Referral exchange, masterminds & conclaves', icon: Sparkles },
        { title: 'Apply for Membership', desc: 'Submit application for Council review', icon: CheckCircle2, isAction: true },
      ]
    },
    { 
      id: 'members', 
      label: 'Members', 
      icon: Users,
      dropdown: [
        { title: 'Verified Founders Directory', desc: 'Browse established Kerala entrepreneurs', icon: Crown },
        { title: 'Industry Verticals', desc: 'IT, Real Estate, Manufacturing, Healthcare, Finance', icon: Building2 },
        { title: 'Hall of Fame', desc: 'Top referral generators & contributors', icon: Trophy },
      ]
    },
    { 
      id: 'chapters', 
      label: 'Chapters', 
      icon: MapPin,
      dropdown: [
        { title: 'Kochi Central Chapter', desc: 'Flagship rooftop club meeting every Thursday', icon: Building2 },
        { title: 'Marine Drive Chapter', desc: 'Waterfront business leaders forum', icon: MapPin },
        { title: 'Kakkanad Infopark Chapter', desc: 'Tech founders & high-growth scaleups', icon: Rocket },
        { title: 'Launch New Chapter', desc: 'Bring BOC to your city or district', icon: Flame, isAction: true },
      ]
    },
    { 
      id: 'referrals', 
      label: 'Referrals', 
      icon: Gift,
      dropdown: [
        { title: 'Referral Exchange Protocol', desc: 'How peer referrals are qualified & passed', icon: FileCheck },
        { title: 'Earn Commission Tracking', desc: 'Transparent revenue share & verified payouts', icon: BarChart3 },
        { title: 'Pass an Opportunity', desc: 'Submit a verified lead to a chapter member', icon: Zap, isAction: true },
      ]
    },
    { 
      id: 'collaborate', 
      label: 'Collaborate', 
      icon: Handshake,
      dropdown: [
        { title: 'Joint Venture Incubator', desc: 'Combine services to pitch enterprise deals', icon: Handshake },
        { title: 'Cross-Border Alliances', desc: 'Connect with Gulf & overseas Malayali founders', icon: Globe },
        { title: 'Supplier & Vendor Synergy', desc: 'Internal member procurement discounts', icon: Star },
      ]
    },
    { 
      id: 'events', 
      label: 'Events', 
      icon: Calendar,
      dropdown: [
        { title: 'Weekly Sunrise Conclave', desc: 'Every Thursday 7:00 AM — Grand Hyatt Kochi', icon: Calendar },
        { title: 'Quarterly CEO Dinner', desc: 'Private rooftop gala & keynote address', icon: Flame },
        { title: 'Kerala Business Expo 2026', desc: 'Annual 1,000+ delegate summit', icon: Rocket },
      ]
    },
    { 
      id: 'resources', 
      label: 'Resources', 
      icon: BookOpen,
      dropdown: [
        { title: 'BOC Constitution & Code', desc: 'Standard operating principles & ethics', icon: BookOpen },
        { title: 'B2B Pitch Decks & Templates', desc: 'Frameworks to present your business', icon: FileText },
        { title: 'Secretariat Support', desc: 'Help desk & chapter coordinators', icon: Shield },
      ]
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      icon: Phone,
      desc: 'Reach chapter secretariat & coordinators'
    },
  ];

  // Right vertical rail items (Refer, Connect, Collaborate, Grow)
  const verticalRailItems = [
    { id: 'refer', label: 'REFER', icon: Handshake, desc: 'Connect fellow members with genuine business opportunities.' },
    { id: 'connect', label: 'CONNECT', icon: Link2, desc: 'Build trusted relationships through regular masterminds.' },
    { id: 'collaborate', label: 'COLLABORATE', icon: Users, desc: 'Form multi-disciplinary packages for large clients.' },
    { id: 'grow', label: 'GROW', icon: TrendingUp, desc: 'Achieve sustainable, predictable business scaling.' },
  ];

  // Bottom 4 dock pillars
  const dockPillars = [
    { id: 'connections', label: 'BUSINESS CONNECTIONS', icon: Handshake, desc: 'High-trust, qualified executive relationships.' },
    { id: 'industries', label: 'DIVERSE INDUSTRIES', icon: Building2, desc: '100% verified founders across 25+ verticals.' },
    { id: 'opportunities', label: 'MORE OPPORTUNITIES', icon: Star, desc: 'Accelerated revenue via strategic referrals.' },
    { id: 'community', label: 'STRONGER COMMUNITY', icon: Users, desc: 'A fraternity where you never build alone.' },
  ];

  const handleItemClick = (item) => {
    setActiveNav(item.label);
    setSideMenuOpen(false);

    if (item.label === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onOpenJoinModal();
    }
  };

  const toggleAccordion = (id) => {
    setExpandedAccordion(expandedAccordion === id ? null : id);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center bg-[#020712] text-slate-100 select-none overflow-x-hidden">
      
      {/* ===================================================================== */}
      {/* 1. DESKTOP VIEWPORT: 100% UNTOUCHED 2K MASTER CANVAS (1:1 SAMPLE)     */}
      {/* ===================================================================== */}
      <div className="hidden md:block relative w-full aspect-[2/1] max-w-[2048px] mx-auto select-none shadow-2xl overflow-visible">
        
        {/* The Exact Master 2K Image from User's Sample Picture (media_1789641252571.jpg) */}
        {/* ZERO artificial dark shade, ZERO box seams: Natural river, plants, sunset, skyline intact */}
        <img 
          src={bocRooftopBg} 
          alt="Business Owner's Circle Kochi Master Experience"
          className="w-full h-full object-cover select-none pointer-events-none"
        />

        {/* =================================================================== */}
        {/* TOP BAR: LOGO (LEFT) + JOIN BUTTON & SIDE DROPDOWN MENU (RIGHT)     */}
        {/* =================================================================== */}
        <header className="absolute top-0 left-0 right-0 z-40 w-full px-5 sm:px-8 lg:px-10 pt-3 sm:pt-4 bg-gradient-to-b from-[#020712]/40 via-[#020712]/10 to-transparent pb-4">
          <div className="flex items-center justify-between">
            
            {/* Left Brand Wordmark & Official Emblem */}
            <div 
              onClick={() => { setActiveNav('Home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-3 sm:gap-3.5 cursor-pointer group py-1 flex-shrink-0"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 flex-shrink-0 group-hover:scale-105 transition-transform">
                <img 
                  src={bocLogoPng} 
                  alt="BOC Official Crest" 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(223,198,136,0.65)] brightness-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif tracking-[0.14em] text-xs sm:text-[13px] lg:text-[14px] font-bold text-[#FAF6ED] group-hover:text-[#F0DC9B] transition-colors uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-tight">
                  BUSINESS OWNERS CIRCLE
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] lg:text-[10px] tracking-[0.24em] text-[#DFC688] font-semibold uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] leading-none mt-1">
                  KOCHI, KERALA
                </span>
              </div>
            </div>

            {/* Right Side Actions: JOIN THE CIRCLE Button + SIDE DROPDOWN MENU BUTTON */}
            <div ref={menuContainerRef} className="relative flex items-center gap-3">
              
              {/* Primary CTA Button */}
              <button
                onClick={onOpenJoinModal}
                className="px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#F0DC9B] via-[#E2C77D] to-[#C5A059] text-[#041126] font-extrabold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(197,160,89,0.5)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-[#FFF3C4]/60 whitespace-nowrap"
              >
                <span>JOIN THE CIRCLE</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.8]" />
              </button>

              {/* Side Dropdown Menu Button */}
              <button
                onClick={() => setSideMenuOpen(!sideMenuOpen)}
                className={`px-3.5 sm:px-4 py-2 rounded-full border transition-all flex items-center gap-2 cursor-pointer shadow-lg active:scale-95 ${
                  sideMenuOpen 
                    ? 'bg-[#E5C45A] text-[#041126] border-[#FFF3C4] shadow-[0_0_20px_rgba(229,196,90,0.6)] font-black' 
                    : 'bg-[#030C1C]/90 hover:bg-[#071B3A] text-[#DFC688] hover:text-[#FAF6ED] border-[#DFC688]/50 hover:border-[#F0DC9B] font-bold'
                }`}
                title="Open Navigation Menu"
                aria-label="Navigation Menu"
              >
                <span className="text-xs uppercase tracking-widest font-extrabold">MENU</span>
                {sideMenuOpen ? (
                  <X className="w-4 h-4 text-[#041126] stroke-[2.8]" />
                ) : (
                  <Menu className="w-4 h-4 text-[#DFC688] stroke-[2.4]" />
                )}
              </button>

              {/* ============================================================= */}
              {/* SIDE DROPDOWN LIST PANEL (Opens right beneath Menu Button)    */}
              {/* ============================================================= */}
              {sideMenuOpen && (
                <div 
                  className="absolute top-full right-0 mt-3 w-88 sm:w-96 max-h-[82vh] overflow-y-auto rounded-2xl bg-[#030C1C]/98 border border-[#DFC688]/40 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl z-50 animate-in fade-in slide-in-from-top-3 duration-200"
                >
                  {/* Panel Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#DFC688]/20 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#E5C45A] animate-ping" />
                      <span className="text-xs font-black tracking-widest uppercase text-[#FAF6ED]">
                        NAVIGATION DIRECTORY
                      </span>
                    </div>
                    <span className="text-[10px] text-[#DFC688] font-bold px-2 py-0.5 rounded-full bg-[#DFC688]/10 border border-[#DFC688]/30">
                      11 SECTIONS
                    </span>
                  </div>

                  {/* Categories Accordion List */}
                  <div className="space-y-1 py-1">
                    {navCategories.map((item) => {
                      const hasDropdown = !!item.dropdown;
                      const isExpanded = expandedAccordion === item.id;
                      const ItemIcon = item.icon;

                      if (!hasDropdown) {
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleItemClick(item)}
                            className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-white/10 text-xs font-semibold text-slate-200 hover:text-white border border-transparent hover:border-[#DFC688]/30 transition-all flex items-center justify-between group cursor-pointer"
                          >
                            <div className="flex items-center gap-2.5">
                              <ItemIcon className="w-4 h-4 text-[#DFC688] group-hover:scale-110 transition-transform" />
                              <span>{item.label}</span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-[#DFC688]/50 group-hover:text-[#E5C45A] group-hover:translate-x-0.5 transition-all" />
                          </button>
                        );
                      }

                      return (
                        <div key={item.id} className="rounded-xl border border-white/5 overflow-hidden bg-white/[0.02]">
                          <button
                            onClick={() => toggleAccordion(item.id)}
                            className="w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                          >
                            <div className="flex items-center gap-2.5">
                              <ItemIcon className="w-4 h-4 text-[#DFC688]" />
                              <span>{item.label}</span>
                            </div>
                            <ChevronDown 
                              className={`w-3.5 h-3.5 text-[#DFC688] transition-transform duration-200 ${
                                isExpanded ? 'rotate-180 text-[#E5C45A]' : ''
                              }`} 
                            />
                          </button>

                          {isExpanded && (
                            <div className="p-2 space-y-1.5 bg-[#020712]/90 border-t border-white/5 animate-in fade-in duration-150">
                              {item.dropdown.map((sub, sIdx) => {
                                const SubIcon = sub.icon;
                                return (
                                  <div
                                    key={sIdx}
                                    onClick={() => {
                                      onOpenJoinModal();
                                      setSideMenuOpen(false);
                                    }}
                                    className={`p-2 rounded-lg flex items-start gap-2.5 cursor-pointer transition-all ${
                                      sub.isAction 
                                        ? 'bg-[#DFC688]/15 border border-[#DFC688]/40 hover:bg-[#DFC688]/25' 
                                        : 'hover:bg-white/10'
                                    }`}
                                  >
                                    <div className="w-6 h-6 rounded bg-[#071B3A] border border-[#DFC688]/30 flex items-center justify-center text-[#E5C45A] flex-shrink-0 mt-0.5">
                                      <SubIcon className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-xs font-bold text-white flex items-center gap-1">
                                        <span>{sub.title}</span>
                                        {sub.isAction && <ArrowRight className="w-3 h-3 text-[#E5C45A]" />}
                                      </div>
                                      <div className="text-[10px] text-slate-300 leading-tight">
                                        {sub.desc}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Panel Footer CTA */}
                  <div className="pt-3 mt-3 border-t border-[#DFC688]/20">
                    <button
                      onClick={() => {
                        onOpenJoinModal();
                        setSideMenuOpen(false);
                      }}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#F0DC9B] via-[#E2C77D] to-[#C5A059] text-[#041126] font-extrabold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(197,160,89,0.5)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>APPLY TO JOIN THE CIRCLE</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                    <div className="text-center text-[10px] text-slate-400 pt-2">
                      Refer • Collaborate • Support • Grow
                    </div>
                  </div>

                </div>
              )}

            </div>

          </div>
        </header>

        {/* ----------------------------------------------------------------- */}
        {/* 1. MEDALLION OFFICIAL CREST (Interactive with Radiant Hover Glow)  */}
        {/* ----------------------------------------------------------------- */}
        <div 
          onClick={onOpenJoinModal}
          className="absolute top-[11%] left-[3.2%] w-[16%] h-[32%] rounded-full cursor-pointer z-20 group"
          title="Business Owners Circle Official Crest — Empower Together"
        >
          <div className="w-full h-full rounded-full border-2 border-transparent group-hover:border-[#DFC688]/70 group-hover:shadow-[0_0_40px_rgba(223,198,136,0.7)] group-hover:scale-105 transition-all duration-300" />
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* 2. CENTER-LEFT HERO TYPOGRAPHY & CTA (100% Hand-Crafted Code)     */}
        {/* ----------------------------------------------------------------- */}
        <div className="absolute top-[13.5%] left-[21%] max-w-[46%] z-20 flex flex-col justify-center select-text">
          
          {/* Sub-Badge */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-8 sm:w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#FCE38A]" />
            <span className="text-[clamp(9px,0.85vw,13.5px)] font-bold tracking-[0.26em] text-[#FCE38A] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,1)] whitespace-nowrap">
              BUSINESS OWNERS CIRCLE — KOCHI, KERALA
            </span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#FCE38A]" />
          </div>

          {/* Grand Headline: REFER. COLLABORATE. SUPPORT. GROW. */}
          <h1 className="font-serif font-black text-white tracking-tight text-[clamp(22px,2.8vw,52px)] leading-[1.08] drop-shadow-[0_4px_20px_rgba(0,0,0,1)] mb-2.5">
            REFER. COLLABORATE.<br />
            <span className="text-white drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">SUPPORT. GROW.</span>
          </h1>

          {/* Mission Statement Subtitle */}
          <p className="text-white text-[clamp(11px,1.05vw,16px)] font-medium leading-relaxed max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,1)] mb-5">
            A professional business community where entrepreneurs, business owners and professionals connect, exchange genuine business opportunities and grow together.
          </p>

          {/* Action Buttons: JOIN THE CIRCLE & EXPLORE OUR COMMUNITY */}
          <div className="flex items-center gap-3 sm:gap-4 select-none">
            {/* Button 1: JOIN THE CIRCLE */}
            <button
              onClick={onOpenJoinModal}
              className="px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#DFB743] via-[#FCE38A] to-[#D4AF37] border border-[#FFF5C0] text-[#040E1E] font-black text-[clamp(9px,0.9vw,14px)] tracking-wider uppercase shadow-[0_6px_25px_rgba(223,198,136,0.55)] hover:shadow-[0_10px_35px_rgba(252,227,138,0.85)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer group"
            >
              <span>JOIN THE CIRCLE</span>
              <ArrowRight className="w-4 h-4 stroke-[3] text-[#040E1E] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Button 2: EXPLORE OUR COMMUNITY */}
            <button
              onClick={onOpenJoinModal}
              className="px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-[#030D1D]/85 backdrop-blur-md border border-[#DFC688] hover:border-[#FFF0B3] text-white hover:text-[#FCE38A] font-bold text-[clamp(8.5px,0.85vw,13.5px)] tracking-wider uppercase shadow-[0_6px_25px_rgba(0,0,0,0.7)] hover:shadow-[0_8px_35px_rgba(223,198,136,0.5)] hover:bg-[#06162E]/95 active:scale-95 transition-all flex items-center gap-2 cursor-pointer group drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
            >
              <span>EXPLORE OUR COMMUNITY</span>
              <ArrowRight className="w-4 h-4 stroke-[2.4] text-[#DFC688] group-hover:text-[#FCE38A] group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* 3. RIGHT VERTICAL TIMELINE RAIL (Coded in Real HTML/SVG)          */}
        {/* ----------------------------------------------------------------- */}
        <div className="absolute top-[20%] right-[2%] z-20 flex flex-col items-start gap-3 sm:gap-4 lg:gap-5">
          {/* Vertical Connecting Gold Line */}
          <div className="absolute left-[15px] sm:left-[19px] lg:left-[21px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#DFC688]/30 via-[#FCE38A] to-[#DFC688]/30 -z-10" />

          {verticalRailItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={onOpenJoinModal}
                onMouseEnter={() => setActiveTooltip(item.id)}
                onMouseLeave={() => setActiveTooltip(null)}
                className="relative flex items-center gap-2.5 group cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-[#030C1C]/95 border border-[#FCE38A] shadow-[0_0_15px_rgba(252,227,138,0.45)] flex items-center justify-center text-[#FCE38A] group-hover:border-[#FFF5C0] group-hover:text-[#FFF5C0] group-hover:scale-110 transition-all backdrop-blur-md">
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.4]" />
                </div>
                <span className="text-[clamp(8.5px,0.8vw,12px)] font-semibold tracking-[0.22em] text-[#FFFFFF] group-hover:text-[#FCE38A] uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,1)] transition-colors whitespace-nowrap">
                  {item.label}
                </span>

                {/* Tooltip */}
                {activeTooltip === item.id && (
                  <div className="absolute right-[105%] top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-[#041126]/95 border border-[#DFC688]/60 shadow-[0_8px_25px_rgba(0,0,0,0.9)] text-left whitespace-nowrap z-30 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-[11px] font-bold text-[#E5C45A] flex items-center gap-1">
                      <span>{item.label}</span>
                      <ArrowRight className="w-3 h-3 text-[#E5C45A]" />
                    </div>
                    <div className="text-[9.5px] text-slate-300 max-w-xs">{item.desc}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* 4. BOTTOM CURVED LUXURY DOCK (Coded in Real HTML/SVG)             */}
        {/* ----------------------------------------------------------------- */}
        <div className="absolute bottom-0 left-0 right-0 z-20 w-full py-2.5 sm:py-3.5 px-4 sm:px-8 lg:px-12 bg-gradient-to-t from-[#010610]/98 via-[#020A17]/90 to-transparent border-t border-[#DFC688]/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto grid grid-cols-4 gap-2 sm:gap-6 text-center">
            {dockPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  onClick={onOpenJoinModal}
                  onMouseEnter={() => setActiveTooltip(pillar.id)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  className="relative flex items-center justify-center gap-2 sm:gap-3 py-1 px-2 rounded-xl hover:bg-white/[0.04] transition-all cursor-pointer group"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#030C1C]/95 border border-[#FCE38A] flex items-center justify-center text-[#FCE38A] group-hover:border-[#FFF5C0] group-hover:text-[#FFF5C0] group-hover:scale-110 transition-all shadow-[0_0_14px_rgba(252,227,138,0.45)]">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.4]" />
                  </div>
                  <span className="text-[clamp(8px,0.85vw,12.5px)] font-bold tracking-wider text-[#FFFFFF] group-hover:text-[#FCE38A] uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,1)] transition-colors whitespace-nowrap">
                    {pillar.label}
                  </span>

                  {/* Tooltip */}
                  {activeTooltip === pillar.id && (
                    <div className="absolute bottom-[115%] left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-[#041126]/95 border border-[#DFC688]/60 shadow-[0_8px_25px_rgba(0,0,0,0.9)] text-center whitespace-nowrap z-30 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                      <div className="text-[11px] font-black text-white tracking-wide">{pillar.label}</div>
                      <div className="text-[9.5px] text-slate-300">{pillar.desc}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>


      {/* ===================================================================== */}
      {/* 2. MOBILE RESPONSIVE HERO VIEW (< md screens)                         */}
      {/* EXACT 1:1 TO USER'S MOCKUP (media_1789658972902.jpg)                  */}
      {/* 100% Real Hand-Crafted Typed Code with Crisp Vector Fonts & Icons     */}
      {/* ===================================================================== */}
      <div className="md:hidden relative w-full flex flex-col bg-[#020712] text-slate-100">
        
        {/* Mobile Navbar Header */}
        <header className="relative z-50 w-full flex items-center justify-between px-5 sm:px-6 pt-3.5 pb-3 border-b border-[#DFC688]/30 bg-[#020712]">
          <div 
            onClick={() => { setActiveNav('Home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer"
          >
            <img 
              src={bocLogoPng} 
              alt="BOC Official Crest" 
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain filter drop-shadow-[0_0_10px_rgba(223,198,136,0.7)] flex-shrink-0"
            />
            <div className="flex flex-col justify-center">
              <span className="font-serif tracking-[0.14em] text-[12px] sm:text-[13px] font-bold text-[#FCE38A] uppercase leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                BUSINESS OWNERS CIRCLE
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.24em] text-[#DFC688] font-semibold uppercase leading-none mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                KOCHI, KERALA
              </span>
            </div>
          </div>

          <button
            onClick={() => setSideMenuOpen(!sideMenuOpen)}
            className="p-1.5 text-[#DFC688] hover:text-[#FFF3C4] cursor-pointer transition-colors"
            aria-label="Open Navigation Menu"
          >
            {sideMenuOpen ? <X className="w-5 h-5 stroke-[2.2]" /> : <Menu className="w-6 h-6 stroke-[2]" />}
          </button>
        </header>

        {/* Mobile Dropdown Menu Drawer */}
        {sideMenuOpen && (
          <div className="relative z-50 w-full rounded-2xl bg-[#030C1C]/98 border border-[#DFC688]/40 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 mx-auto">
            <div className="space-y-2">
              {navCategories.map((item) => {
                const hasDropdown = !!item.dropdown;
                const isExpanded = expandedAccordion === item.id;
                const ItemIcon = item.icon;

                if (!hasDropdown) {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-white/5 text-xs font-semibold text-slate-200 hover:text-white border border-transparent hover:border-[#DFC688]/20 transition-all flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <ItemIcon className="w-4 h-4 text-[#DFC688]" />
                        <span>{item.label}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#DFC688]/60" />
                    </button>
                  );
                }

                return (
                  <div key={item.id} className="rounded-xl border border-white/5 overflow-hidden bg-white/[0.02]">
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <ItemIcon className="w-4 h-4 text-[#DFC688]" />
                        <span>{item.label}</span>
                      </div>
                      <ChevronDown 
                        className={`w-3.5 h-3.5 text-[#DFC688] transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-[#E5C45A]' : ''
                        }`} 
                      />
                    </button>

                    {isExpanded && (
                      <div className="p-2 space-y-1.5 bg-[#030C1C]/90 border-t border-white/5">
                        {item.dropdown.map((sub, sIdx) => {
                          const SubIcon = sub.icon;
                          return (
                            <div
                              key={sIdx}
                              onClick={() => {
                                onOpenJoinModal();
                                setSideMenuOpen(false);
                              }}
                              className={`p-2 rounded-lg flex items-start gap-2.5 cursor-pointer ${
                                sub.isAction 
                                  ? 'bg-[#DFC688]/15 border border-[#DFC688]/40' 
                                  : 'hover:bg-white/5'
                              }`}
                            >
                              <SubIcon className="w-4 h-4 text-[#E5C45A] mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-xs font-bold text-white flex items-center gap-1">
                                  <span>{sub.title}</span>
                                  {sub.isAction && <ArrowRight className="w-3 h-3 text-[#E5C45A]" />}
                                </div>
                                <div className="text-[10px] text-slate-300">{sub.desc}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-3">
                <button
                  onClick={() => {
                    onOpenJoinModal();
                    setSideMenuOpen(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#F0DC9B] via-[#E2C77D] to-[#C5A059] text-[#041126] font-black text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(197,160,89,0.5)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>APPLY TO JOIN THE CIRCLE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Hero Viewport: Clean Portrait Photo + 100% Typed Vector Typography */}
        <div className="relative w-full overflow-hidden bg-[#020712]">
          
          {/* Background Image: Clean Portrait Photo with zero baked text */}
          <div className="relative w-full h-[380px] sm:h-[420px] overflow-hidden">
            <img 
              src={bocMobileBg} 
              alt="BOC Kochi Rooftop Networking" 
              className="w-full h-full object-cover object-center select-none"
            />
            {/* Top gradient for crystal-clear readability of text on sky */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020712]/80 via-[#020712]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010714] via-transparent to-transparent" />

            {/* Real Typed Web Typography (100% Native Vector HTML/CSS) */}
            {/* FLUSH LEFT-ALIGNED 1:1 TO MASTER MOCKUP (media_1789658972902.jpg) */}
            <div className="absolute top-2.5 left-0 right-0 px-5 sm:px-6 z-20 flex flex-col items-start text-left select-text">
              
              {/* Sub-Badge: BUSINESS OWNERS CIRCLE — KOCHI, KERALA */}
              <div className="flex flex-col items-start mb-1.5">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#FAF6ED] uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,1)]">
                  BUSINESS OWNERS CIRCLE
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="w-5 h-[1.5px] bg-[#DFC688]" />
                  <span className="text-[9px] sm:text-[9.5px] font-bold tracking-[0.22em] text-[#DFC688] uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,1)]">
                    KOCHI, KERALA
                  </span>
                  <span className="w-5 h-[1.5px] bg-[#DFC688]" />
                </div>
              </div>

              {/* Grand Headline: REFER. COLLABORATE. SUPPORT. GROW. */}
              <h1 className="font-serif font-black text-white text-[22px] sm:text-[25px] leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,1)] mb-1.5 text-left">
                REFER. COLLABORATE.<br />
                <span className="text-white drop-shadow-[0_4px_20px_rgba(0,0,0,1)]">SUPPORT. GROW.</span>
              </h1>

              {/* Mission Statement Subtitle ("a professional..." line) */}
              <p className="text-white text-[10.5px] sm:text-[11.5px] leading-relaxed max-w-[310px] drop-shadow-[0_2px_10px_rgba(0,0,0,1)] font-medium mb-3 text-left">
                A professional business community where entrepreneurs, business owners and professionals connect, exchange genuine business opportunities and grow together.
              </p>

              {/* Two CTA Buttons Side-by-Side (Left Aligned) */}
              <div className="flex items-center justify-start gap-2.5 w-full max-w-xs select-none">
                {/* Button 1: JOIN THE CIRCLE */}
                <button
                  onClick={onOpenJoinModal}
                  className="py-2 px-3 sm:px-4 rounded-full bg-gradient-to-r from-[#DFB743] via-[#FCE38A] to-[#D4AF37] border border-[#FFF5C0] text-[#040E1E] font-black text-[10px] tracking-wider uppercase shadow-[0_4px_16px_rgba(223,198,136,0.55)] flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-all"
                >
                  <span className="whitespace-nowrap">JOIN THE CIRCLE</span>
                  <ArrowRight className="w-3 h-3 stroke-[3] text-[#040E1E]" />
                </button>

                {/* Button 2: EXPLORE OUR COMMUNITY */}
                <button
                  onClick={onOpenJoinModal}
                  className="py-2 px-2.5 sm:px-3 rounded-full bg-[#030D1D]/80 backdrop-blur-md border border-[#DFC688] hover:border-[#FFF0B3] text-white hover:text-[#FCE38A] font-bold text-[9px] tracking-wider uppercase flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-all drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                >
                  <span className="whitespace-nowrap">EXPLORE OUR COMMUNITY</span>
                  <ArrowRight className="w-3 h-3 stroke-[2.2] text-[#DFC688]" />
                </button>
              </div>

            </div>
          </div>

          {/* Curved Luxury Dock with 4 Value Pillars (Matching media_1789658972902.jpg) */}
          <div className="relative -mt-4 z-30 pt-5 pb-6 px-3 bg-gradient-to-b from-[#020B1A] to-[#010612] rounded-t-[34px] border-t-2 border-[#DFC688] shadow-[0_-12px_35px_rgba(0,0,0,0.95)]">
            
            {/* Top Row: 3 Value Pillars with Vertical Dividers */}
            <div className="grid grid-cols-3 gap-1 items-start text-center mb-4">
              
              {/* Pillar 1: Business Connections */}
              <div onClick={onOpenJoinModal} className="flex flex-col items-center gap-1.5 cursor-pointer group px-1">
                <div className="w-11 h-11 rounded-full bg-[#030C1C] border-2 border-[#FCE38A] flex items-center justify-center text-[#FCE38A] shadow-[0_0_14px_rgba(252,227,138,0.45)] group-hover:scale-110 transition-transform">
                  <Handshake className="w-5 h-5 stroke-[2.4]" />
                </div>
                <span className="text-[9.5px] font-black tracking-wider text-white uppercase leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                  BUSINESS<br />CONNECTIONS
                </span>
              </div>

              {/* Pillar 2: Diverse Industries */}
              <div onClick={onOpenJoinModal} className="flex flex-col items-center gap-1.5 cursor-pointer group border-x border-[#DFC688]/30 px-1">
                <div className="w-11 h-11 rounded-full bg-[#030C1C] border-2 border-[#FCE38A] flex items-center justify-center text-[#FCE38A] shadow-[0_0_14px_rgba(252,227,138,0.45)] group-hover:scale-110 transition-transform">
                  <Building2 className="w-5 h-5 stroke-[2.4]" />
                </div>
                <span className="text-[9.5px] font-black tracking-wider text-white uppercase leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                  DIVERSE<br />INDUSTRIES
                </span>
              </div>

              {/* Pillar 3: More Opportunities */}
              <div onClick={onOpenJoinModal} className="flex flex-col items-center gap-1.5 cursor-pointer group px-1">
                <div className="w-11 h-11 rounded-full bg-[#030C1C] border-2 border-[#FCE38A] flex items-center justify-center text-[#FCE38A] shadow-[0_0_14px_rgba(252,227,138,0.45)] group-hover:scale-110 transition-transform">
                  <Star className="w-5 h-5 stroke-[2.4]" />
                </div>
                <span className="text-[9.5px] font-black tracking-wider text-white uppercase leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                  MORE<br />OPPORTUNITIES
                </span>
              </div>

            </div>

            {/* Bottom Row: Centered 4th Pillar: Stronger Community */}
            <div className="flex justify-center pt-1">
              <div onClick={onOpenJoinModal} className="flex items-center gap-3 py-2 px-5 rounded-full bg-white/[0.05] border border-[#DFC688]/60 shadow-[0_4px_16px_rgba(0,0,0,0.6)] cursor-pointer group active:scale-95 transition-all">
                <div className="w-9 h-9 rounded-full bg-[#030C1C] border-2 border-[#FCE38A] flex items-center justify-center text-[#FCE38A] shadow-[0_0_12px_rgba(252,227,138,0.45)] group-hover:scale-110 transition-transform">
                  <Users className="w-4.5 h-4.5 stroke-[2.4]" />
                </div>
                <span className="text-[10.5px] font-black tracking-wider text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                  STRONGER COMMUNITY
                </span>
              </div>
            </div>

          </div>

          {/* About Us Section (Matching Bottom of media_1789658972902.jpg) */}
          <section className="bg-[#FAF8F5] text-[#0A192F] px-5 py-7 rounded-t-3xl border-t border-[#DFC688]/40">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#C5A059]" />
              <span className="text-[11px] font-black tracking-[0.2em] text-[#C5A059] uppercase">
                ABOUT US
              </span>
            </div>
            <h2 className="font-serif font-black text-[#0A192F] text-[22px] leading-tight mb-2.5">
              The Power of<br />Business Community
            </h2>
            <p className="text-slate-700 text-xs leading-relaxed mb-4 font-normal">
              Business Owners Circle (BOC) is a premium networking platform for forward-thinking business owners and professionals in Kochi, Kerala. We bring like-minded people together to share ideas, create opportunities and build lasting relationships.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <img 
                src={bocRooftopBg} 
                alt="BOC Kochi Skyline" 
                className="w-full h-32 object-cover object-[70%_center]" 
              />
            </div>
          </section>

        </div>

      </div>


      {/* ===================================================================== */}
      {/* 3. FIXED FLOATING ACTION BUTTONS (BOTTOM-RIGHT)                       */}
      {/* ===================================================================== */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center gap-3">
        
        {/* Scroll to Top Button */}
        <div className="relative group">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onMouseEnter={() => setFloatingTooltip('top')}
            onMouseLeave={() => setFloatingTooltip(null)}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#030C1C]/90 hover:bg-gradient-to-tr hover:from-[#DFC688] hover:to-[#FFF3C4] border border-[#DFC688]/60 text-[#DFC688] hover:text-[#041126] shadow-[0_6px_22px_rgba(0,0,0,0.85)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </button>
          
          {floatingTooltip === 'top' && (
            <div className="absolute right-[115%] top-1/2 -translate-y-1/2 mr-2 px-2.5 py-1 rounded-lg bg-[#041126] border border-[#DFC688]/50 text-[10px] text-[#FAF6ED] font-bold whitespace-nowrap shadow-lg pointer-events-none animate-in fade-in duration-150">
              Top
            </div>
          )}
        </div>

        {/* WhatsApp Direct Chat Button */}
        <div className="relative group">
          <a
            href="https://wa.me/919876543210?text=Hi%20Business%20Owners%20Circle%20Kochi%2C%20I%20am%20interested%20in%20joining%20the%20executive%20network."
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setFloatingTooltip('wa')}
            onMouseLeave={() => setFloatingTooltip(null)}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_6px_25px_rgba(37,211,102,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            title="Chat with Chapter Director on WhatsApp"
            aria-label="WhatsApp Director"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>

          {floatingTooltip === 'wa' && (
            <div className="absolute right-[115%] top-1/2 -translate-y-1/2 mr-2 px-2.5 py-1 rounded-lg bg-[#041126] border border-[#25D366]/50 text-[10px] text-[#25D366] font-bold whitespace-nowrap shadow-lg pointer-events-none animate-in fade-in duration-150">
              WhatsApp
            </div>
          )}
        </div>

        {/* Phone Call Secretariat Button */}
        <div className="relative group">
          <a
            href="tel:+919876543210"
            onMouseEnter={() => setFloatingTooltip('call')}
            onMouseLeave={() => setFloatingTooltip(null)}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#C5A059] to-[#F0DC9B] text-[#041126] shadow-[0_6px_25px_rgba(223,198,136,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            title="Call BOC Secretariat"
            aria-label="Call Secretariat"
          >
            <PhoneCall className="w-5 h-5 stroke-[2.5]" />
          </a>

          {floatingTooltip === 'call' && (
            <div className="absolute right-[115%] top-1/2 -translate-y-1/2 mr-2 px-2.5 py-1 rounded-lg bg-[#041126] border border-[#DFC688]/50 text-[10px] text-[#DFC688] font-bold whitespace-nowrap shadow-lg pointer-events-none animate-in fade-in duration-150">
              Call Us
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
