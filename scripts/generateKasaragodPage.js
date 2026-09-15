const fs = require('fs');

const pageCode = `import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  MapPin, 
  PhoneCall, 
  MessageCircle, 
  Star, 
  CheckCircle, 
  AlertTriangle, 
  ChevronRight, 
  Search, 
  Home, 
  Building2, 
  Sparkles, 
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Building,
  Trees,
  Check,
  Zap,
  Hotel,
  Shield,
  Send,
  Waves,
  Hammer,
  Paintbrush,
  Ruler,
  Briefcase,
  Users,
  Plane,
  Video,
  FileCheck,
  CheckCircle2,
  ExternalLink,
  Layers,
  Phone
} from 'lucide-react';
import { updateMetaTags } from '../utils/seo';
import { handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';
import { KASARAGOD_DATA } from '../data/kasaragodData';
import LeadForm from '../components/LeadForm';

export default function KasaragodLandingPage({ onOpenLeadModal, onOpenInspectionModal }) {
  const [activeTradeTab, setActiveTradeTab] = useState(KASARAGOD_DATA.tradeSegments[0].id);
  const [activeLocationFilter, setActiveLocationFilter] = useState('all');
  const [selectedMunicipality, setSelectedMunicipality] = useState(KASARAGOD_DATA.municipalities[0]);
  const [selectedBlock, setSelectedBlock] = useState(KASARAGOD_DATA.blocks[0]);
  const [openFaq, setOpenFaq] = useState(0);
  const [searchLocality, setSearchLocality] = useState('');

  useEffect(() => {
    updateMetaTags({
      title: KASARAGOD_DATA.meta.title,
      description: KASARAGOD_DATA.meta.description,
      keywords: KASARAGOD_DATA.meta.keywords,
      image: 'https://termitecontrol.me/images/kasaragod-luxury-hero.jpg',
      url: 'https://termitecontrol.me/termite-control-kasaragod',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'PestControlService',
        'name': 'TermiteControl.me - Kasaragod District Division',
        'parentOrganization': {
          '@type': 'Organization',
          'name': 'Eco Pest India'
        },
        'url': 'https://termitecontrol.me/termite-control-kasaragod',
        'image': 'https://termitecontrol.me/images/kasaragod-luxury-hero.jpg',
        'telephone': '+91-9020040009',
        'priceRange': '₹₹',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': KASARAGOD_DATA.brand.officeAddress.line1,
          'addressLocality': KASARAGOD_DATA.brand.officeAddress.city,
          'addressRegion': 'Kerala',
          'postalCode': KASARAGOD_DATA.brand.officeAddress.pincode,
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': KASARAGOD_DATA.brand.officeAddress.geo.latitude,
          'longitude': KASARAGOD_DATA.brand.officeAddress.geo.longitude
        },
        'areaServed': 'Kasaragod District, Kerala',
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          'opens': '08:00',
          'closes': '20:30'
        }
      }
    });
    window.scrollTo(0, 0);
  }, []);

  const activeTrade = KASARAGOD_DATA.tradeSegments.find(t => t.id === activeTradeTab) || KASARAGOD_DATA.tradeSegments[0];

  // Flatten all panchayats
  const allPanchayats = KASARAGOD_DATA.blocks.flatMap(b => b.panchayats.map(p => ({ ...p, blockName: b.name })));
  const filteredPanchayats = allPanchayats.filter(p => 
    p.name.toLowerCase().includes(searchLocality.toLowerCase()) || 
    p.desc.toLowerCase().includes(searchLocality.toLowerCase()) ||
    p.blockName.toLowerCase().includes(searchLocality.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* 1. TOP ANNOUNCEMENT & BREADCRUMB BAR */}
      <div className="bg-emerald-950/70 border-b border-emerald-800/40 text-xs py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
          <nav className="flex items-center space-x-2 text-slate-300 text-[11px] font-medium">
            <a href="/" className="hover:text-emerald-400 transition">Home</a>
            <span className="text-slate-500">/</span>
            <a href="/#locations" className="hover:text-emerald-400 transition">Kerala Service Hub</a>
            <span className="text-slate-500">/</span>
            <span className="text-emerald-300 font-bold">Kasaragod District Coverage</span>
          </nav>
          <div className="flex items-center space-x-3 text-slate-300 text-[11px]">
            <span className="flex items-center text-emerald-300 font-bold bg-emerald-900/60 px-3 py-0.5 rounded-full border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1.5 inline-block"></span>
              Primary Hub: Bus Stand Building, Kanhangad
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300 font-medium">IS:6313 Certified • Odorless & Eco-Safe</span>
          </div>
        </div>
      </div>

      {/* 2. NATURE HERO SECTION (EXPANDED PANORAMIC KASARAGOD COASTAL VILLA VIEW) */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-10 pb-20 lg:py-24 border-b border-emerald-950 bg-[#020b08] text-white overflow-hidden">
        
        {/* Breathtaking Background Visual Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/kasaragod-luxury-hero.jpg" 
            alt="Ultra luxury modern villa nestled in lush green Kasaragod coastal palm groves and nature lawn" 
            className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
            loading="eager"
            fetchPriority="high"
          />
          {/* Enhanced cinematic gradient: deep rich contrast behind left text for 100% crystal clear legibility, while landscape remains vivid on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#010906]/95 via-[#010906]/80 to-[#010906]/25 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#010906]/95 via-transparent to-[#010906]/55" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="max-w-2xl lg:max-w-3xl space-y-6 text-center lg:text-left">
            
            {/* Luxury Pill Tag & NRI Malayalam Badge */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-2.5">
              <div className="inline-flex items-center space-x-2 bg-black/80 border border-emerald-400/60 rounded-full px-4 py-1.5 text-xs text-emerald-300 backdrop-blur-xl shadow-xl shadow-black/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-extrabold tracking-wider uppercase text-[10px] sm:text-[11px] font-sans">
                  PREMIUM TERMITE & TIMBER DEFENSE • KASARAGOD
                </span>
              </div>

              <div className="inline-flex items-center space-x-2 bg-black/80 border border-amber-400/60 rounded-full px-4 py-1.5 text-xs text-amber-200 backdrop-blur-xl shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span className="text-[11px] sm:text-[12px] font-semibold text-amber-200">
                  ഗൾഫ് പ്രവാസികൾക്കും കാസർഗോഡ് തീരദേശ വില്ലകൾക്കും വിശ്വസിക്കാവുന്ന സംരക്ഷണം
                </span>
              </div>
            </div>

            {/* Majestic Headline - High Contrast & High Legibility */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                Termite Control & Prevention in <br />
                <span className="text-amber-400 font-serif font-extrabold tracking-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
                  Kasaragod District, Kerala
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-300 font-sans flex flex-wrap items-center justify-center lg:justify-start gap-2 drop-shadow-md">
                <span>Kanhangad Hub</span>
                <span className="text-amber-400">•</span>
                <span>Kasaragod Town</span>
                <span className="text-amber-400">•</span>
                <span>Nileshwar</span>
                <span className="text-amber-400">•</span>
                <span>Bekal</span>
                <span className="text-amber-400">•</span>
                <span>Uppala</span>
                <span className="text-amber-400">•</span>
                <span className="text-white">6 Blocks & 38 Panchayats</span>
              </p>
            </div>

            <p className="text-slate-100 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mx-auto lg:mx-0">
              Professional termite inspection, treatment and construction-stage protection for 
              <strong className="text-amber-300 font-bold"> residential homes, luxury GCC/NRI villas, new building constructions, builders, and commercial properties</strong> across Kasaragod.
            </p>

            {/* 4 Checkpoint Badges (Frosted Glass - High Contrast) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 max-w-2xl">
              <div className="flex items-center space-x-2 bg-black/75 backdrop-blur-xl border border-white/20 rounded-xl p-2.5 shadow-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-white">Kanhangad Central Hub</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/75 backdrop-blur-xl border border-white/20 rounded-xl p-2.5 shadow-xl">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-white">45-Min Fast Dispatch</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/75 backdrop-blur-xl border border-white/20 rounded-xl p-2.5 shadow-xl">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-white">IS:6313 Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/75 backdrop-blur-xl border border-white/20 rounded-xl p-2.5 shadow-xl">
                <Trees className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-white">100% Odorless & Eco-Safe</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href="#dispatch-desk"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/50 transition-all transform hover:-translate-y-0.5 text-sm"
              >
                <Search className="w-4 h-4" />
                <span>Book Free Kasaragod Inspection</span>
              </a>

              <button
                onClick={() => handlePhoneClick('kasaragod_hero_call')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3.5 rounded-xl border border-white/30 backdrop-blur-xl transition text-sm shadow-lg"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call: {KASARAGOD_DATA.brand.phoneDisplay}</span>
              </button>

              <button
                onClick={() => handleWhatsAppClick('kasaragod_hero_wa', { message: 'Hi TermiteControl.me, I need termite/pest inspection for my property in Kasaragod (Kanhangad/Nileshwar/Bekal/Uppala). Please share details.' })}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold px-5 py-3.5 rounded-xl border border-emerald-400/60 backdrop-blur-xl transition text-sm shadow-xl shadow-black/40"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Desk</span>
              </button>
            </div>

            {/* Micro Trust Strip */}
            <div className="pt-2 text-xs text-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-3 drop-shadow-md">
              <span className="flex items-center text-amber-300 font-extrabold">
                <Star className="w-3.5 h-3.5 fill-amber-300 mr-1" />
                {KASARAGOD_DATA.brand.justdialRating}
              </span>
              <span className="text-slate-400">•</span>
              <span className="font-semibold text-slate-100">{KASARAGOD_DATA.brand.justdialReviewsCount} in Kasaragod</span>
              <span className="text-slate-400">•</span>
              <span className="text-emerald-300 font-bold bg-emerald-950/70 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                Live Video Report for Gulf NRIs
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* 3. QUICK TRUST & CREDENTIALS BAR */}
      <section className="bg-slate-900 border-b border-slate-800 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            <div className="pt-2 sm:pt-0 sm:px-3">
              <div className="text-xl sm:text-2xl font-bold text-white font-serif">45 Mins</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Kanhangad & Kasaragod Rapid Response</div>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <div className="text-xl sm:text-2xl font-bold text-white font-serif">IS:6313</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Bureau of Indian Standards Certified</div>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <div className="text-xl sm:text-2xl font-bold text-white font-serif">5 - 10 Yrs</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Written Guarantee Certificates</div>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <div className="text-xl sm:text-2xl font-bold text-white font-serif">Zero Odor</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">100% Non-Toxic & Family Safe</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEDICATED KANHANGAD BUS STAND CENTRAL DISPATCH DESK & LEAD FORM */}
      <section id="dispatch-desk" className="py-14 sm:py-18 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Office & Rapid Service Commitment */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase">
                  <MapPin className="w-4 h-4" />
                  <span>Kasaragod Central Service Base</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Direct Mobile Dispatch from Kanhangad Bus Stand Building
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Our certified mobile squads provide on-site termite inspection and treatment across all 3 municipalities, 6 block panchayats, and 38 grama panchayats in Kasaragod District.
                </p>
              </div>

              {/* Office Address Card */}
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 space-y-4 shadow-xl">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-white">
                      {KASARAGOD_DATA.brand.officeAddress.brand}
                    </div>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      {KASARAGOD_DATA.brand.officeAddress.line1}, {KASARAGOD_DATA.brand.officeAddress.city}, {KASARAGOD_DATA.brand.officeAddress.state} - {KASARAGOD_DATA.brand.officeAddress.pincode}
                    </div>
                    <div className="text-[11px] text-amber-300 font-medium pt-1">
                      Landmark: {KASARAGOD_DATA.brand.officeAddress.landmark}
                    </div>
                    <div className="text-[11px] text-slate-400 pt-0.5">
                      {KASARAGOD_DATA.brand.officeAddress.timing}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-700/60">
                  <button
                    onClick={() => handlePhoneClick('kasaragod_dispatch_call')}
                    className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs transition shadow-md"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Central Desk: 90200 40009</span>
                  </button>

                  <button
                    onClick={() => handleWhatsAppClick('kasaragod_dispatch_wa', { message: 'Hi TermiteControl.me Kanhangad, I need termite inspection for my property. Please share details.' })}
                    className="inline-flex items-center justify-center space-x-2 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold py-2.5 px-4 rounded-xl text-xs border border-emerald-500/30 transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Service Squad</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-6 bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="space-y-2 mb-6 text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">Instant Priority Booking</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">Book Free Kasaragod Property Assessment</h3>
                <p className="text-xs text-slate-300">Certified technician visits your location with acoustic & thermal moisture sensors.</p>
              </div>
              <LeadForm source="kasaragod_hero_form" defaultLocation="Kasaragod District" />
            </div>

          </div>

        </div>
      </section>

      {/* 5. GCC / NRI DREAM HOME & REMOTE PROPERTY PROTECTION SUITE */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-950 via-[#031c14] to-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 bg-black/70 border border-amber-400/60 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Plane className="w-3.5 h-3.5 text-amber-400" />
              <span>GCC / NRI Property Protection Suite</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white">
              Building Your Home in Kasaragod While Living in the Gulf?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Living in UAE, Saudi Arabia, Qatar, Oman, Kuwait, or Bahrain? Managing construction remotely makes on-site termite inspection difficult. Protect your investment during construction before handing over the keys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {KASARAGOD_DATA.nriFeatures.map((feat, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 space-y-3 hover:border-amber-400/50 transition">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-white">{feat.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-black/60 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center lg:text-left">
              <h4 className="text-lg font-bold text-white">Coordinate Termite Treatment for Your Kasaragod Project from Abroad</h4>
              <p className="text-xs text-slate-300">Direct WhatsApp updates, family coordination in Kasaragod, and digital payment options.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onOpenLeadModal({ service: 'NRI Property Protection', location: 'Kasaragod District' })}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition shadow-lg"
              >
                Book NRI Property Inspection
              </button>
              <button
                onClick={() => handleWhatsAppClick('kasaragod_nri_wa', { message: 'Hi TermiteControl.me, I am an NRI based in GCC building a house in Kasaragod. Please share pre-construction termite protection details.' })}
                className="bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold px-5 py-3 rounded-xl text-xs border border-emerald-500/40 transition"
              >
                WhatsApp NRI Desk
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CONSTRUCTION INDUSTRY & TRADE REFERRAL PARTNER HUB */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-950 border border-emerald-500/40 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              <span>B2B & Construction Trade Partnerships</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white">
              Termite Protection for Builders, Contractors & Architects
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Partner with Kasaragod's dedicated termite defense network for new builds, villa projects, interior woodwork, and renovation handovers.
            </p>
          </div>

          {/* Trade Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {KASARAGOD_DATA.tradeSegments.map((trade) => (
              <button
                key={trade.id}
                onClick={() => setActiveTradeTab(trade.id)}
                className={'p-4 rounded-2xl border text-center transition space-y-2 ' + (
                  activeTradeTab === trade.id 
                    ? 'bg-emerald-600 text-slate-950 border-emerald-400 shadow-xl shadow-emerald-600/30 font-extrabold' 
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-emerald-500/40 font-semibold'
                )}
              >
                <div className="text-xs">{trade.role}</div>
              </button>
            ))}
          </div>

          {/* Active Trade Display Box */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-700 pb-6">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">{activeTrade.role} Specification</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">{activeTrade.headline}</h3>
                <p className="text-xs text-slate-300 mt-2 max-w-3xl leading-relaxed">{activeTrade.desc}</p>
              </div>
              <button
                onClick={() => onOpenLeadModal({ service: activeTrade.role + ' Partnership', location: 'Kasaragod District' })}
                className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition shadow-md shrink-0"
              >
                <span>{activeTrade.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeTrade.benefits.map((ben, i) => (
                <div key={i} className="bg-slate-900 border border-slate-700/80 rounded-xl p-4 flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 font-medium">{ben}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. PRE-CONSTRUCTION VS POST-CONSTRUCTION PROTOCOLS */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">Scientific Methods</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white">
              Pre-Construction & Post-Construction Protection
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Whether laying your foundation in Kanhangad or protecting an existing villa in Kasaragod, we use IS:6313 certified subterranean barrier chemistry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Pre-Construction Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 hover:border-emerald-500/40 transition">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="space-y-1">
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 font-bold px-2.5 py-1 rounded-full uppercase border border-emerald-500/40">10-Year Written Guarantee</span>
                  <h3 className="text-xl font-serif font-bold text-white pt-1">Pre-Construction Soil Treatment</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Applied during foundation excavation, plinth beam filling, and floor subgrade preparation before laying PCC flooring. Creates an unbroken chemical defense zone blocking subterranean colonies from entering masonry.
              </p>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-400" /><span>Stage 1: Trench bottom and sides chemical flooding (IS:6313 Part 2)</span></div>
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-400" /><span>Stage 2: Plinth wall backfilled soil chemical injection at 1-foot intervals</span></div>
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-400" /><span>Stage 3: Under-floor gravel bed saturation before PCC floor casting</span></div>
              </div>
              <button
                onClick={() => onOpenLeadModal({ service: 'Pre-Construction Treatment', location: 'Kasaragod District' })}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold py-3 rounded-xl text-xs transition"
              >
                Book Pre-Construction Site Visit
              </button>
            </div>

            {/* Post-Construction Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 hover:border-emerald-500/40 transition">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="space-y-1">
                  <span className="text-[10px] bg-amber-950 text-amber-300 font-bold px-2.5 py-1 rounded-full uppercase border border-amber-500/40">5-Year Written Guarantee</span>
                  <h3 className="text-xl font-serif font-bold text-white pt-1">Post-Construction Drill-Fill-Seal</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                For existing houses, villas, and commercial buildings. Precision diamond drilling along internal skirting and external plinth walls allows high-pressure termiticide injection directly into sub-slab soil.
              </p>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-amber-400" /><span>12mm diamond core drilling along skirting tiles with zero tile cracking</span></div>
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-amber-400" /><span>High-pressure odorless chemical saturation into foundation soil</span></div>
                <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-amber-400" /><span>Matching color compound sealing leaving floors smooth and aesthetic</span></div>
              </div>
              <button
                onClick={() => onOpenLeadModal({ service: 'Post-Construction Treatment', location: 'Kasaragod District' })}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-xs border border-slate-700 transition"
              >
                Book Existing House Inspection
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 8. 14 CORE SERVICES SHOWCASE */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">Comprehensive Solutions</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white">
              Specialized Termite & Wood Defense Services
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Customized treatments backed by Bureau of Indian Standards (IS:6313) guidelines and 5 to 10-year written warranty certificates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {KASARAGOD_DATA.services.map((srv) => (
              <div key={srv.id} className="bg-slate-800/90 border border-slate-700 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition flex flex-col justify-between">
                <div>
                  <div className="h-44 w-full overflow-hidden relative">
                    <img src={srv.image} alt={srv.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 right-3 bg-emerald-500 text-slate-950 font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      {srv.badge}
                    </span>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-serif font-bold text-white">{srv.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{srv.desc}</p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenLeadModal({ service: srv.title, location: 'Kasaragod District' })}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-emerald-600 hover:text-slate-950 text-emerald-300 font-bold py-2.5 rounded-xl text-xs transition border border-slate-700 hover:border-emerald-500"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. 3 MUNICIPALITIES, 6 BLOCK PANCHAYATS & 38 GRAMA PANCHAYATS EXPLORER */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">100% Administrative Coverage</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white">
              Serving All 3 Municipalities, 6 Blocks & 38 Grama Panchayats
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Verified local service coverage across Kanhangad, Kasaragod, Nileshwar, and all surrounding rural panchayats.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveLocationFilter('all')}
              className={'px-4 py-2 rounded-xl text-xs font-bold transition ' + (activeLocationFilter === 'all' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-slate-800')}
            >
              All Coverage
            </button>
            <button
              onClick={() => setActiveLocationFilter('municipalities')}
              className={'px-4 py-2 rounded-xl text-xs font-bold transition ' + (activeLocationFilter === 'municipalities' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-slate-800')}
            >
              3 Municipalities
            </button>
            {KASARAGOD_DATA.blocks.map(b => (
              <button
                key={b.id}
                onClick={() => { setActiveLocationFilter('block'); setSelectedBlock(b); }}
                className={'px-4 py-2 rounded-xl text-xs font-bold transition ' + (activeLocationFilter === 'block' && selectedBlock.id === b.id ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-slate-800')}
              >
                {b.name}
              </button>
            ))}
          </div>

          {/* Municipalities View */}
          {(activeLocationFilter === 'all' || activeLocationFilter === 'municipalities') && (
            <div className="mb-10">
              <h3 className="text-lg font-serif font-bold text-white mb-4 flex items-center space-x-2">
                <Building className="w-4 h-4 text-emerald-400" />
                <span>Major Municipalities & Commercial Centers:</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {KASARAGOD_DATA.municipalities.map(m => (
                  <div key={m.id} className={'rounded-3xl p-6 border space-y-4 flex flex-col justify-between ' + (m.isPrimaryHub ? 'bg-slate-900/90 border-emerald-500/60 shadow-xl shadow-emerald-950/50' : 'bg-slate-900 border-slate-800')}>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase">{m.tagline}</span>
                        {m.isPrimaryHub && <span className="bg-emerald-500 text-slate-950 font-extrabold text-[10px] px-2 py-0.5 rounded-md">Primary Base</span>}
                      </div>
                      <h4 className="text-xl font-serif font-bold text-white">{m.name}</h4>
                      <p className="text-xs text-amber-300 font-medium">{m.officeDesc}</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{m.description}</p>
                      
                      <div className="pt-2">
                        <div className="text-[11px] font-bold text-slate-300 mb-2">Key Areas:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {m.areas.slice(0, 8).map((a, idx) => (
                            <span key={idx} className="bg-slate-950 text-slate-300 border border-slate-800 text-[10px] px-2 py-0.5 rounded">
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenLeadModal({ location: m.name, service: 'Municipality Service' })}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold py-2.5 rounded-xl text-xs transition"
                    >
                      Book in {m.name.split(' ')[0]}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 38 Panchayats Search & Grid */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-white">All 38 Grama Panchayats Directory</h3>
                <p className="text-xs text-slate-400">Search your panchayat to view rapid mobile dispatch availability.</p>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchLocality}
                  onChange={(e) => setSearchLocality(e.target.value)}
                  placeholder="Search Panchayat or Town..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-h-96 overflow-y-auto pr-1">
              {filteredPanchayats.map((p, i) => (
                <div key={i} className="bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-3.5 flex items-start justify-between gap-3 transition">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-xs font-bold text-white">{p.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">{p.desc}</p>
                    <span className="text-[10px] text-emerald-400/80 font-mono">{p.blockName}</span>
                  </div>
                  <button
                    onClick={() => onOpenLeadModal({ location: p.name + ' (' + p.blockName + ')', service: 'Panchayat Service' })}
                    className="shrink-0 bg-slate-800 hover:bg-emerald-600 hover:text-slate-950 text-slate-300 p-1.5 rounded-lg transition"
                    title="Book in this location"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 10. COMPREHENSIVE AEO / AI SEARCH FAQS ACCORDION */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-950 border border-emerald-500/40 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Expert Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white">
              Frequently Asked Questions About Kasaragod Termite Control
            </h2>
            <p className="text-slate-300 text-sm">
              Instant answers on inspection pricing, warranty periods, pre-construction steps, and Gulf NRI coordination.
            </p>
          </div>

          <div className="space-y-3">
            {KASARAGOD_DATA.faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden transition">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between space-x-4 font-bold text-sm text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={'w-4 h-4 text-emerald-400 shrink-0 transition-transform duration-200 ' + (openFaq === idx ? 'rotate-180' : '')} />
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-700/50">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. FINAL HIGH-CONVERTING CTA BANNER */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-emerald-950 via-slate-950 to-emerald-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">Protect Your Building Before Termites Destroy It</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
            Schedule Your Free Kasaragod Termite Inspection Today
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our certified mobile units are active daily across Kanhangad, Kasaragod Town, Nileshwar, Bekal, Uppala, and all 38 panchayats. Fast 45-minute on-site response.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenInspectionModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold px-8 py-4 rounded-xl text-sm transition shadow-xl"
            >
              <Search className="w-4 h-4" />
              <span>Book Property Assessment</span>
            </button>
            <button
              onClick={() => handlePhoneClick('kasaragod_bottom_call')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-4 rounded-xl text-sm border border-white/20 transition"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Call: 90200 40009</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
\`;

fs.writeFileSync('src/pages/KasaragodLandingPage.jsx', pageCode, 'utf8');
console.log('src/pages/KasaragodLandingPage.jsx written successfully');
