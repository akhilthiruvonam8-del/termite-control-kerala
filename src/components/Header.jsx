import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Shield, MapPin, ChevronDown, Clock, CheckCircle2, Database } from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';
import { DISTRICTS } from '../data/districts';

export default function Header({ currentPath, onNavigate, onOpenLeadModal, onOpenCrmModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      type: 'dropdown',
      items: [
        { name: 'Termite Control', path: '/#services' },
        { name: 'Anti-Termite Treatment', path: '/#services' },
        { name: 'Wood Borer Treatment', path: '/#wood-borer' },
        { name: 'Pre-Construction Treatment', path: '/#services' },
        { name: 'Post-Construction Treatment', path: '/#services' },
        { name: 'Residential Termite Control', path: '/#services' },
        { name: 'Commercial Termite Control', path: '/#services' },
      ]
    },
    { 
      name: 'Locations', 
      type: 'dropdown',
      highlight: 'Kozhikode',
      items: DISTRICTS.map(d => ({
        name: d.name + (d.id === 'kozhikode' ? ' (Pavamani Rd)' : ''),
        path: `/${d.slug}`,
        isHub: d.id === 'kozhikode' || d.id === 'ernakulam'
      }))
    },
    { name: 'Signs of Termites', path: '/#signs' },
    { name: 'How It Works', path: '/#how-it-works' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Contact', path: '/#contact' }
  ];

  const handleLinkClick = (path, e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    setLocationsDropdownOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Notification & Trust Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-emerald-400 font-medium">
              <Shield className="w-3.5 h-3.5 mr-1" /> Govt. Approved & CIB&RC Certified
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:flex items-center text-slate-300">
              <Clock className="w-3.5 h-3.5 mr-1 text-amber-400" /> Same-Day Inspection Across Kerala
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            {currentPath.includes('alappuzha') || currentPath.includes('alleppey') || currentPath.includes('cherthala') || currentPath.includes('chengannur') || currentPath.includes('kayamkulam') || currentPath.includes('mavelikara') || currentPath.includes('harippad') ? (
              <button 
                onClick={() => handleLinkClick('/termite-control-alappuzha')}
                className="flex items-center text-amber-300 hover:text-amber-200 font-medium transition"
              >
                <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400" />
                <span>Alappuzha Hub: Central Dispatch (All 6 Municipalities)</span>
              </button>
            ) : currentPath.includes('pathanamthitta') || currentPath.includes('pathanam-thitta') ? (
              <button 
                onClick={() => handleLinkClick('/termite-control-pathanamthitta')}
                className="flex items-center text-amber-300 hover:text-amber-200 font-medium transition"
              >
                <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400" />
                <span>Pathanamthitta Office: Mezhuveli P.O.</span>
              </button>
            ) : currentPath.includes('thrissur') || currentPath.includes('trissur') ? (
              <button 
                onClick={() => handleLinkClick('/termite-control-thrissur')}
                className="flex items-center text-amber-300 hover:text-amber-200 font-medium transition"
              >
                <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400" />
                <span>Thrissur Office: Veluthath Bldg, Kuttoor</span>
              </button>
            ) : currentPath.includes('palakkad') ? (
              <button 
                onClick={() => handleLinkClick('/termite-control-palakkad')}
                className="flex items-center text-amber-300 hover:text-amber-200 font-medium transition"
              >
                <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400" />
                <span>Palakkad Office: Chandra Nagar HQ</span>
              </button>
            ) : (
              <button 
                onClick={() => handleLinkClick('/termite-control-kozhikode')}
                className="flex items-center text-amber-300 hover:text-amber-200 font-medium transition"
              >
                <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400" />
                <span>Kozhikode Office: Pavamani Rd</span>
              </button>
            )}
            <span className="text-slate-600 hidden md:inline">|</span>
            <button
              onClick={onOpenCrmModal}
              title="Admin CRM Lead Viewer"
              className="hidden lg:flex items-center text-slate-400 hover:text-slate-200 transition text-[11px]"
            >
              <Database className="w-3 h-3 mr-1 text-brand-400" />
              <span>Lead CRM</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Nav */}
      <div className={`bg-white border-b border-slate-200 transition-shadow duration-200 ${scrolled ? 'shadow-md py-2.5' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Sub-tag */}
            <div 
              onClick={(e) => handleLinkClick('/', e)} 
              className="cursor-pointer group flex items-center space-x-2 select-none"
            >
              <img 
                src="/images/logo.png" 
                alt="TermiteControl.me Logo" 
                className="h-10 w-auto max-w-[150px] object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 font-display">
                    Termite<span className="text-emerald-700">Control</span><span className="text-amber-600 font-bold">.me</span>
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-slate-500 -mt-0.5">
                  A Unit of Eco Pest India
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <button 
                onClick={(e) => handleLinkClick('/', e)}
                className={`px-3 py-2 text-sm font-semibold rounded-md transition ${currentPath === '/' ? 'text-emerald-700 bg-emerald-50' : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'}`}
              >
                Home
              </button>

              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-md flex items-center transition"
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 ml-1 text-slate-400 group-hover:text-emerald-700 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Core Solutions
                  </div>
                  <button onClick={(e) => handleLinkClick('/#services', e)} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition flex items-center justify-between">
                    <span>Termite Control</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-medium">Popular</span>
                  </button>
                  <button onClick={(e) => handleLinkClick('/#services', e)} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition">
                    Anti-Termite Treatment
                  </button>
                  <button onClick={(e) => handleLinkClick('/#wood-borer', e)} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition flex items-center justify-between">
                    <span>Wood Borer Treatment</span>
                    <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-medium">Timber</span>
                  </button>
                  <button onClick={(e) => handleLinkClick('/#services', e)} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition">
                    Pre-Construction (IS 6313)
                  </button>
                  <button onClick={(e) => handleLinkClick('/#services', e)} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition">
                    Post-Construction Drill-Seal
                  </button>
                  <button onClick={(e) => handleLinkClick('/#services', e)} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition">
                    Residential & Commercial
                  </button>
                </div>
              </div>

              {/* Locations Dropdown */}
              <div className="relative group">
                <button 
                  onClick={() => setLocationsDropdownOpen(!locationsDropdownOpen)}
                  className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-md flex items-center transition"
                >
                  <span>Locations</span>
                  <span className="ml-1 text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded-full">14 Districts</span>
                  <ChevronDown className="w-4 h-4 ml-1 text-slate-400 group-hover:text-emerald-700 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider flex justify-between items-center">
                    <span>Select District</span>
                    <span className="text-[11px] text-emerald-700 font-semibold cursor-pointer" onClick={(e) => handleLinkClick('/#locations', e)}>View All</span>
                  </div>

                  {/* Kozhikode Priority Spotlight */}
                  <div className="p-2 bg-emerald-50/70 border-y border-emerald-100 my-1">
                    <button 
                      onClick={(e) => handleLinkClick('/termite-control-kozhikode', e)}
                      className="w-full text-left px-3 py-2 text-sm font-bold text-emerald-950 hover:bg-emerald-100/70 rounded-lg transition flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-emerald-700 mr-2 flex-shrink-0" />
                        <div>
                          <p className="leading-tight">Kozhikode (Calicut)</p>
                          <p className="text-[11px] text-emerald-700 font-normal">Pavamani Rd • Fast Dispatch</p>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-700 text-white px-2 py-0.5 rounded-full font-bold">Office</span>
                    </button>
                  </div>

                  {/* Palakkad Priority Spotlight */}
                  <div className="px-2 py-1">
                    <button 
                      onClick={(e) => handleLinkClick('/termite-control-palakkad', e)}
                      className="w-full text-left px-3 py-1.5 text-xs font-bold text-amber-900 bg-amber-50/80 hover:bg-amber-100/80 rounded-md transition flex items-center justify-between border border-amber-200/60"
                    >
                      <div className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 text-amber-700 mr-1.5 flex-shrink-0" />
                        <span>Palakkad District</span>
                      </div>
                      <span className="text-[10px] bg-amber-600 text-white px-1.5 py-0.5 rounded font-bold">Featured</span>
                    </button>
                  </div>

                  {/* Thrissur Priority Spotlight */}
                  <div className="px-2 py-1">
                    <button 
                      onClick={(e) => handleLinkClick('/termite-control-thrissur', e)}
                      className="w-full text-left px-3 py-1.5 text-xs font-bold text-emerald-950 bg-emerald-50 hover:bg-emerald-100 rounded-md transition flex items-center justify-between border border-emerald-200"
                    >
                      <div className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 text-emerald-700 mr-1.5 flex-shrink-0" />
                        <div>
                          <span>Thrissur District</span>
                          <span className="block text-[10px] text-emerald-700 font-normal">Kuttoor / Pamboor Desk</span>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-700 text-white px-1.5 py-0.5 rounded font-bold">Office</span>
                    </button>
                  </div>

                  {/* Pathanamthitta Priority Spotlight */}
                  <div className="px-2 py-1">
                    <button 
                      onClick={(e) => handleLinkClick('/termite-control-pathanamthitta', e)}
                      className="w-full text-left px-3 py-1.5 text-xs font-bold text-emerald-950 bg-emerald-50 hover:bg-emerald-100 rounded-md transition flex items-center justify-between border border-emerald-200"
                    >
                      <div className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 text-emerald-700 mr-1.5 flex-shrink-0" />
                        <div>
                          <span>Pathanamthitta District</span>
                          <span className="block text-[10px] text-emerald-700 font-normal">Mezhuveli Branch Desk</span>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-700 text-white px-1.5 py-0.5 rounded font-bold">Office</span>
                    </button>
                  </div>

                  {/* Ernakulam Spotlight */}
                  <div className="px-2 py-1">
                    <button 
                      onClick={(e) => handleLinkClick('/termite-control-ernakulam', e)}
                      className="w-full text-left px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-100 rounded-md transition flex items-center justify-between"
                    >
                      <span>Kochi / Ernakulam</span>
                      <span className="text-[10px] text-slate-500">Kakkanad / Aluva</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-0.5 px-2 pt-1 border-t border-slate-100 max-h-48 overflow-y-auto">
                    {DISTRICTS.filter(d => d.id !== 'kozhikode' && d.id !== 'ernakulam' && d.id !== 'palakkad' && d.id !== 'thrissur' && d.id !== 'pathanamthitta').map(d => (
                      <button
                        key={d.id}
                        onClick={(e) => handleLinkClick(`/${d.slug}`, e)}
                        className="text-left px-2.5 py-1.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 rounded transition"
                      >
                        {d.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={(e) => handleLinkClick('/#signs', e)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-md transition"
              >
                Signs
              </button>

              <button 
                onClick={(e) => handleLinkClick('/#how-it-works', e)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-md transition"
              >
                Process
              </button>

              <button 
                onClick={(e) => handleLinkClick('/#faq', e)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-md transition"
              >
                FAQ
              </button>

              <button 
                onClick={(e) => handleLinkClick('/#contact', e)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-md transition"
              >
                Contact
              </button>
            </nav>

            {/* Header Right Action CTAs */}
            <div className="hidden sm:flex items-center space-x-2 md:space-x-3">
              {/* WhatsApp Button */}
              <button
                onClick={() => handleWhatsAppClick('header')}
                className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold text-xs transition border border-emerald-200"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 mr-1 text-[#25D366] fill-[#25D366]" />
                <span>WhatsApp</span>
              </button>

              {/* Call Now Button */}
              <button
                onClick={() => handlePhoneClick('header')}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-sm hover:shadow transition"
              >
                <Phone className="w-4 h-4 mr-1.5 animate-pulse" />
                <span>{PRIMARY_PHONE_DISPLAY}</span>
              </button>

              {/* Quick Quote / Inspection Button */}
              <button
                onClick={() => onOpenLeadModal()}
                className="hidden xl:inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-xs shadow-sm transition"
              >
                <span>Free Inspection</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle & Fast Call */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => handlePhoneClick('header_mobile')}
                className="p-2 rounded-lg bg-emerald-700 text-white font-bold text-xs flex items-center space-x-1"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
                <span className="text-xs">{PRIMARY_PHONE_DISPLAY}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
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
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-3">
            
            {/* Kozhikode Priority Banner in Mobile */}
            <div 
              onClick={(e) => handleLinkClick('/termite-control-kozhikode', e)}
              className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-emerald-700" />
                <div>
                  <div className="font-bold text-sm text-emerald-950">Kozhikode District Page</div>
                  <div className="text-xs text-emerald-700">Pavamani Road (Near Malabar Gold)</div>
                </div>
              </div>
              <span className="text-xs bg-emerald-700 text-white font-bold px-2 py-1 rounded">View</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={(e) => handleLinkClick('/', e)}
                className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                🏠 Home
              </button>
              <button
                onClick={(e) => handleLinkClick('/#services', e)}
                className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                🛡️ All Services
              </button>
              <button
                onClick={(e) => handleLinkClick('/#wood-borer', e)}
                className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                🪵 Wood Borer
              </button>
              <button
                onClick={(e) => handleLinkClick('/#signs', e)}
                className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                ⚠️ Termite Signs
              </button>
              <button
                onClick={(e) => handleLinkClick('/#how-it-works', e)}
                className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                📋 4-Step Process
              </button>
              <button
                onClick={(e) => handleLinkClick('/#faq', e)}
                className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                ❓ FAQs
              </button>
            </div>

            {/* 14 Districts quick selector */}
            <div className="pt-2 border-t border-slate-100">
              <div className="text-xs font-bold uppercase text-slate-500 mb-2 flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-700" /> Kerala Districts Coverage
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {DISTRICTS.map(d => (
                  <button
                    key={d.id}
                    onClick={(e) => handleLinkClick(`/${d.slug}`, e)}
                    className={`text-left px-2.5 py-1.5 rounded text-xs font-medium transition ${d.id === 'kozhikode' ? 'bg-emerald-100 text-emerald-900 font-bold' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
                  >
                    {d.name} {d.id === 'kozhikode' ? '⭐' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="pt-3 border-t border-slate-200 space-y-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenLeadModal(); }}
                className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-sm text-center shadow"
              >
                📋 Request Free Inspection
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handlePhoneClick('mobile_menu')}
                  className="w-full py-2 rounded-lg bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 9020040009</span>
                </button>
                <button
                  onClick={() => handleWhatsAppClick('mobile_menu')}
                  className="w-full py-2 rounded-lg bg-[#25D366] text-white font-bold text-xs flex items-center justify-center space-x-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>
              <div className="text-center pt-1">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenCrmModal(); }}
                  className="text-[11px] text-slate-400 hover:text-slate-600 underline"
                >
                  Open Lead CRM Storage
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
