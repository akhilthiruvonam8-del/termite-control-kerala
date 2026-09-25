import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Award, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  Home, 
  Building2, 
  Hammer, 
  ChevronRight,
  ChevronLeft,
  CalendarCheck,
  Star,
  Eye,
  Zap
} from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function KochiHero({ onOpenInspectionModal }) {
  // 5 HD Background Slides matching the user's reference exactly
  const slides = [
    {
      id: 1,
      image: '/images/hero-slide-1-waterfront.jpg',
      title: 'Waterfront & Luxury Villa Defense',
      location: 'Kochi Backwaters, Marine Drive & Kakkanad',
      tag: 'OUTDOOR PERIMETER BARRIER',
      description: 'Stage-wise foundation soil protection along waterfront gardens & villa boundaries.'
    },
    {
      id: 2,
      image: '/images/hero-slide-2-torch-inspect.jpg',
      title: 'Tactical Acoustic & Torch Inspection',
      location: 'Door Frames, Beams & Timber Fittings',
      tag: 'PRECISION COLONY DETECTION',
      description: 'High-intensity optical and acoustic detection tracing hidden mud tubes inside teak & rosewood.'
    },
    {
      id: 3,
      image: '/images/hero-slide-3-indoor-inject.jpg',
      title: 'Odorless Indoor Skirting Micro-Injection',
      location: 'Living Rooms, Kitchen Cabinets & Wardrobes',
      tag: 'DRILL-INJECT-SEAL PROTOCOL',
      description: '1.2mm micro-drilling through floor skirting with zero odor and zero damage to marble tiles.'
    },
    {
      id: 4,
      image: '/images/hero-slide-4-termite-macro.jpg',
      title: 'Subterranean Colony & Queen Eradication',
      location: 'Underground Nests & Soil Formations',
      tag: '100% QUEEN COLONY KILL',
      description: 'Non-repellent transfer chemistry eliminating the reproductive queen and entire subterranean nest.'
    },
    {
      id: 5,
      image: '/images/hero-slide-5-commercial-van.jpg',
      title: 'Commercial Towers, IT Parks & Showrooms',
      location: 'Infopark Kakkanad, SmartCity & MG Road',
      tag: 'RAPID COMMERCIAL DISPATCH',
      description: 'Specialized mobile squads with industrial injection rigs for corporate IT hubs and hospitals.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Interactive Kochi Estimator States
  const [propertyType, setPropertyType] = useState('villa');
  const [kochiArea, setKochiArea] = useState('Kakkanad / Infopark');
  const [problemSeverity, setProblemSeverity] = useState('active');

  // Automatic Background Carousel Transition (every 5.5s)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const propertyOptions = [
    { id: 'villa', label: 'Luxury Villa / House', icon: Home, subtitle: 'Waterfront & independent residences' },
    { id: 'apartment', label: 'Apartment / Flat', icon: Building2, subtitle: 'High-rises & gated complexes' },
    { id: 'construction', label: 'Under Construction', icon: Hammer, subtitle: 'IS 6313 foundation soil piping' },
    { id: 'commercial', label: 'Office / Commercial', icon: Building2, subtitle: 'Corporate IT spaces & showrooms' },
  ];

  const kochiLocalities = [
    'Kakkanad / Infopark',
    'Marine Drive / MG Road',
    'Panampilly Nagar / Kadavanthra',
    'Edappally / Palarivattom',
    'Aluva / Angamaly',
    'Vyttila / Tripunithura',
    'Fort Kochi / Mattancherry',
    'Kalamassery / Ernakulam North'
  ];

  const problemOptions = [
    { id: 'active', label: 'Active Termite Mud Tubes', desc: 'Urgent eradication required' },
    { id: 'borer', label: 'Wood Borer / Hollow Timber', desc: 'Powder falling from furniture' },
    { id: 'preventive', label: 'Preventive Drill & Seal Barrier', desc: '5–10 Year defense protection' },
    { id: 'foundation', label: 'Pre-Construction Soil Treatment', desc: 'Stage-wise foundation defense' }
  ];

  const handlePlayAudio = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        window.speechSynthesis.cancel();
        const text = "Welcome to Termite Control Kochi dot com, a unit of Eco Pest India. We provide certified odorless anti termite treatment, subterranean colony eradication, and IS 6313 foundation soil protection for luxury villas, apartments, and commercial towers across Kochi, Kakkanad, Marine Drive, and Greater Ernakulam with up to 10 years written warranty. Call us at 9020040009 for a free property inspection.";
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        utterance.pitch = 1.0;
        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        setIsPlayingAudio(true);
        window.speechSynthesis.speak(utterance);
      }
    } else {
      alert("Call +91 9020040009 for direct assistance from our Kochi central service desk.");
    }
  };

  const handleEstimatorBook = () => {
    const selectedProp = propertyOptions.find(p => p.id === propertyType)?.label || propertyType;
    const selectedProb = problemOptions.find(p => p.id === problemSeverity)?.label || problemSeverity;
    
    if (onOpenInspectionModal) {
      onOpenInspectionModal({
        location: `Kochi (${kochiArea})`,
        propertyType: selectedProp,
        problem: selectedProb,
        title: "CONFIRM KOCHI ON-SITE INSPECTION",
        subtitle: `Priority inspection for ${selectedProp} in ${kochiArea}`
      });
    } else {
      handleWhatsAppClick('kochi_estimator_submit', {
        location: `Kochi (${kochiArea})`,
        propertyType: selectedProp,
        problem: selectedProb,
        message: `Hi Termite Control Kochi (termitecontrolkochi.com), I calculated an estimate for my ${selectedProp} in ${kochiArea}.\nIssue: ${selectedProb}.\nPlease share inspection slots and quotation.`
      });
    }
  };

  return (
    <div 
      className="relative min-h-[92vh] lg:min-h-screen bg-[#020e09] text-white overflow-hidden flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* 1. Dynamic 5-Slide HD Background with Smooth Cross-Fade & Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
              
              {/* Luxury Multi-Layer Vignette & Readability Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#020e09]/95 via-[#020e09]/80 to-[#020e09]/90" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020e09] via-transparent to-[#020e09]/60" />
            </div>
          );
        })}

        {/* Ambient Glowing Emerald & Gold Lights */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-emerald-500/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-amber-400/10 rounded-full blur-[130px] pointer-events-none" />
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 lg:pt-10 lg:pb-16 w-full flex-grow flex flex-col justify-center">
        
        {/* Top Badges: Official Eco Pest India Logo + Domain Pill + Malayalam Touch */}
        <div className="flex flex-wrap items-center gap-2.5 mb-5 justify-center lg:justify-start">
          
          {/* Eco Pest India Unit Branding Pill with Official Logo */}
          <div className="inline-flex items-center space-x-2 bg-black/80 border border-emerald-400/50 rounded-full px-3.5 py-1.5 backdrop-blur-xl shadow-lg">
            <img 
              src="/images/eco-pest-india-logo.png" 
              alt="Eco Pest India Logo" 
              className="h-5 w-auto object-contain"
            />
            <span className="text-[11px] font-bold text-white tracking-wide">
              Eco Pest India™
            </span>
            <span className="text-emerald-500 font-bold">•</span>
            <span className="text-[10px] uppercase font-mono font-bold text-amber-300">
              Kochi Central Division
            </span>
          </div>

          {/* Official Domain Pill */}
          <div className="inline-flex items-center space-x-2 bg-[#052115]/90 border border-emerald-400/50 rounded-full px-3.5 py-1.5 text-xs text-emerald-300 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-mono font-bold tracking-wider uppercase text-[11px] sm:text-xs">
              termitecontrolkochi.com
            </span>
          </div>

          {/* Malayalam Local Reassurance Badge */}
          <div className="inline-flex items-center space-x-1.5 bg-black/70 border border-amber-400/40 rounded-full px-3.5 py-1.5 text-xs text-amber-200 backdrop-blur-xl shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-[11px] sm:text-xs font-medium">
              കൊച്ചിയിലെ ആഡംബര വീടുകൾക്കും വില്ലകൾക്കും ആധികാരികമായ ചിതൽ പ്രതിരോധം
            </span>
          </div>
        </div>

        {/* 2-Column Split: Left Master Headline & CTAs, Right Interactive Estimator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headlines, Trust Chips & High-Converting CTAs */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Rapid Dispatch Ticker with Live Status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-600/50 text-emerald-300 text-[11px] sm:text-xs font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>45-Min Express Dispatch: Kakkanad • Marine Drive • Edappally • Aluva</span>
            </div>

            {/* Majestic H1 Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Architectural Termite Defense & Subterranean Colony Eradication in{' '}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(245,199,93,0.35)]">
                Kochi
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
              Government CIB&RC-certified odorless <strong className="text-amber-300 font-semibold">drill-inject-seal barriers</strong> and IS:6313 foundation soil protection engineered for luxury waterfront residences, modern villas, high-rise apartments, and commercial towers across Kochi & Greater Ernakulam.
            </p>

            {/* 4 Premium Trust Highlight Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 max-w-2xl mx-auto lg:mx-0">
              <div className="p-3 rounded-2xl bg-[#03150e]/85 border border-emerald-500/30 backdrop-blur-md shadow-xl text-left group hover:border-amber-400 transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
                <p className="font-bold text-xs text-white">10-Yr Warranty</p>
                <p className="text-[10px] text-slate-300">Stamped Legal Bond</p>
              </div>

              <div className="p-3 rounded-2xl bg-[#03150e]/85 border border-emerald-500/30 backdrop-blur-md shadow-xl text-left group hover:border-amber-400 transition-colors">
                <Sparkles className="w-4 h-4 text-amber-400 mb-1" />
                <p className="font-bold text-xs text-white">100% Odorless</p>
                <p className="text-[10px] text-slate-300">No Evacuation Needed</p>
              </div>

              <div className="p-3 rounded-2xl bg-[#03150e]/85 border border-emerald-500/30 backdrop-blur-md shadow-xl text-left group hover:border-amber-400 transition-colors">
                <Clock className="w-4 h-4 text-emerald-400 mb-1" />
                <p className="font-bold text-xs text-white">45-Min Dispatch</p>
                <p className="text-[10px] text-slate-300">Kochi Metro Coverage</p>
              </div>

              <div className="p-3 rounded-2xl bg-[#03150e]/85 border border-emerald-500/30 backdrop-blur-md shadow-xl text-left group hover:border-amber-400 transition-colors">
                <Award className="w-4 h-4 text-amber-400 mb-1" />
                <p className="font-bold text-xs text-white">IS:6313 Standard</p>
                <p className="text-[10px] text-slate-300">Queen Colony Kill</p>
              </div>
            </div>

            {/* CTAs & Audio Overview Strip */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                
                {/* Primary Gold CTA */}
                <button
                  onClick={() => onOpenInspectionModal ? onOpenInspectionModal({ location: 'Kochi (Ernakulam)' }) : handleEstimatorBook()}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl shadow-[0_0_30px_rgba(245,199,93,0.35)] transition-all transform hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  <CalendarCheck className="w-5 h-5 fill-slate-950" />
                  <span>Schedule Free On-Site Inspection</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                {/* Direct Emergency Call */}
                <button
                  onClick={() => handlePhoneClick('kochi_hero_call')}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#041c12]/90 hover:bg-[#072c1c] text-white font-bold px-6 py-3.5 rounded-xl border border-emerald-500/40 backdrop-blur-xl transition text-sm sm:text-base shadow-lg"
                >
                  <Phone className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>Call: {PRIMARY_PHONE_DISPLAY}</span>
                </button>

                {/* WhatsApp Support */}
                <button
                  onClick={() => handleWhatsAppClick('kochi_hero_wa', { 
                    location: 'Kochi', 
                    message: 'Hi Termite Control Kochi (termitecontrolkochi.com), I need termite/pest inspection for my property in Kochi. Please share available slots.' 
                  })}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-950/90 hover:bg-emerald-900 text-emerald-300 font-bold px-5 py-3.5 rounded-xl border border-emerald-400/50 backdrop-blur-xl transition text-sm shadow-xl"
                  title="WhatsApp Direct Desk"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>WhatsApp Desk</span>
                </button>

              </div>

              {/* Audio Overview Player & Trust Rating */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
                <button
                  onClick={handlePlayAudio}
                  className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-400/40 text-xs font-semibold transition backdrop-blur-md"
                >
                  {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5 text-amber-400" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />}
                  <span>{isPlayingAudio ? "Stop Audio Overview" : "🔊 Listen to 30-sec Voice Brief"}</span>
                </button>

                <div className="flex items-center space-x-1.5 text-xs text-slate-300 bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-white">4.9/5</span>
                  <span className="text-slate-400">(1,850+ Verified Kochi Properties)</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Luxury Property Defense Estimator Card */}
          <div id="estimator" className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#062419]/90 to-[#02130c]/95 border border-emerald-500/40 shadow-[0_20px_60px_rgba(2,14,9,0.95)] p-5 sm:p-7 backdrop-blur-2xl">
              
              {/* Subtle Golden Glow behind the card */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-emerald-800/60 pb-3.5 mb-4">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>INSTANT INSPECTION ESTIMATOR</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-extrabold text-white mt-0.5">
                    Kochi Property Defense
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-[10px] font-bold text-emerald-300">
                  Zero Cost Survey
                </div>
              </div>

              {/* Form Step 1: Property Type */}
              <div className="space-y-2 mb-3.5">
                <label className="text-xs font-semibold text-slate-300 block">
                  1. Select Property Classification:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {propertyOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = propertyType === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPropertyType(opt.id)}
                        className={`p-2 rounded-xl border text-left transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-emerald-900/70 border-amber-400/80 shadow-[0_0_15px_rgba(245,199,93,0.2)]'
                            : 'bg-[#03150e]/70 border-emerald-900/60 hover:border-emerald-700/60 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-300' : 'text-emerald-400'}`} />
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                        </div>
                        <span className={`text-[11px] sm:text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Step 2: Kochi Locality */}
              <div className="space-y-1.5 mb-3.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                  <span>2. Select Kochi Locality:</span>
                  <span className="text-[10px] text-emerald-400">45-min squad response</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={kochiArea}
                    onChange={(e) => setKochiArea(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#03150e] border border-emerald-800/80 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition"
                  >
                    {kochiLocalities.map((loc, idx) => (
                      <option key={idx} value={loc} className="bg-[#03150e] text-white">
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Form Step 3: Infestation Status */}
              <div className="space-y-1.5 mb-4">
                <label className="text-xs font-semibold text-slate-300 block">
                  3. Treatment Objective:
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {problemOptions.map((p) => {
                    const isSelected = problemSeverity === p.id;
                    return (
                      <div
                        key={p.id}
                        onClick={() => setProblemSeverity(p.id)}
                        className={`p-2 rounded-xl border cursor-pointer transition flex items-center justify-between text-xs ${
                          isSelected
                            ? 'bg-emerald-950/80 border-emerald-400 text-white shadow-sm'
                            : 'bg-[#03150e]/50 border-emerald-950 hover:border-emerald-800/60 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-400' : 'bg-slate-600'}`} />
                          <span className="font-semibold">{p.label}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 hidden sm:inline">{p.desc}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Solution Recommendation Box */}
              <div className="p-3 rounded-2xl bg-[#020e09]/90 border border-amber-400/30 mb-4">
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="text-slate-400">Prescribed Protocol:</span>
                  <span className="font-mono font-bold text-amber-300">IS:6313 Certified</span>
                </div>
                <div className="text-xs font-bold text-white mb-1">
                  {propertyType === 'construction' 
                    ? '4-Stage Foundation Soil Piping + Chemical Barrier' 
                    : '1.2mm Micro-Drill & Seal Odorless Subterranean Injection'}
                </div>
                <div className="flex items-center justify-between text-[10px] text-emerald-400 pt-1 border-t border-emerald-950">
                  <span>✓ 10-Yr Legal Warranty Certificate</span>
                  <span>✓ Zero Fumes / Odorless</span>
                </div>
              </div>

              {/* One-Click Action Button */}
              <button
                type="button"
                onClick={handleEstimatorBook}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm tracking-wide shadow-xl shadow-emerald-500/25 transition transform active:scale-95 flex items-center justify-center space-x-2"
              >
                <span>BOOK FREE KOCHI INSPECTION</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="text-center mt-2">
                <span className="text-[10px] text-slate-400">
                  🔒 Strictly No Spam • Senior Engineer Dispatched from Kochi Central
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* 3. Bottom Slide Navigator & Live Image Title Strip */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
          
          {/* Active Scene Description Pill */}
          <div className="flex items-center space-x-2 text-xs">
            <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-mono font-bold text-[10px] border border-amber-400/40">
              SCENE {currentSlide + 1}/5
            </span>
            <span className="text-white font-semibold text-xs sm:text-sm">
              {slides[currentSlide].title}
            </span>
            <span className="text-slate-400 hidden md:inline">•</span>
            <span className="text-emerald-400 text-xs hidden md:inline">
              {slides[currentSlide].location}
            </span>
          </div>

          {/* Interactive Slide Dots and Arrow Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-7 h-7 rounded-full bg-black/60 hover:bg-emerald-900/80 border border-white/20 text-white flex items-center justify-center transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-1.5 px-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? 'w-7 bg-amber-400 shadow-[0_0_10px_rgba(245,199,93,0.5)]'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-7 h-7 rounded-full bg-black/60 hover:bg-emerald-900/80 border border-white/20 text-white flex items-center justify-center transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* 4. Floating 5-Pillar Luxury Guarantee Dock (Sticky / Anchored at Bottom of Hero) */}
      <div className="relative z-10 w-full bg-[#03150e]/95 border-t border-emerald-900/50 backdrop-blur-xl py-4 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            
            {/* Pillar 1 */}
            <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/20 flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <h4 className="font-bold text-xs text-white">Govt. CIB&RC Approved</h4>
                <p className="text-[10px] text-slate-400">100% Genuine Bayer/Termidor</p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/20 flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Home className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <h4 className="font-bold text-xs text-white">1,850+ Protected</h4>
                <p className="text-[10px] text-slate-400">Kochi Villas & Penthouses</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/20 flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <h4 className="font-bold text-xs text-white">100% Odorless</h4>
                <p className="text-[10px] text-slate-400">Zero Evacuation Needed</p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/20 flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <h4 className="font-bold text-xs text-white">45-Min Fast Dispatch</h4>
                <p className="text-[10px] text-slate-400">Across Greater Kochi</p>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/20 flex items-center space-x-2.5 col-span-2 sm:col-span-1">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <h4 className="font-bold text-xs text-white">Up to 10-Yr Warranty</h4>
                <p className="text-[10px] text-slate-400">Signed Guarantee Bond</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
