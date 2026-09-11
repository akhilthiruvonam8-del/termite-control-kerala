import React, { useState, useMemo } from 'react';
import { 
  Shield, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  Home, 
  Building2, 
  Search, 
  Star, 
  Award, 
  Clock, 
  FileText, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Camera, 
  Eye, 
  Compass, 
  HardHat, 
  Droplet, 
  PhoneCall, 
  ArrowUpRight, 
  Layers, 
  CheckCircle, 
  ExternalLink,
  Navigation
} from 'lucide-react';
import { KOLLAM_DATA } from '../data/kollamData';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';
import LeadForm from '../components/LeadForm';
import PrimaryBottomCTA from '../components/PrimaryBottomCTA';

export default function KollamLandingPage({ onOpenLeadModal, onOpenInspectionModal }) {
  // Interactive UI state
  const [selectedBlock, setSelectedBlock] = useState('all');
  const [panchayatSearch, setPanchayatSearch] = useState('');
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Filter FAQs based on search
  const filteredFaqs = useMemo(() => {
    if (!faqSearchQuery.trim()) return KOLLAM_DATA.faqs;
    const query = faqSearchQuery.toLowerCase();
    return KOLLAM_DATA.faqs.filter(
      f => f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query)
    );
  }, [faqSearchQuery]);

  // Flatten all panchayats with block metadata for interactive lookup
  const allPanchayats = useMemo(() => 
    KOLLAM_DATA.blocks.flatMap(block => block.panchayats.map(p => ({
      ...p,
      blockName: block.name,
      blockId: block.id,
      terrain: block.terrain
    }))),
    []
  );

  // Filter panchayats based on block and search query
  const filteredPanchayats = useMemo(() => {
    return allPanchayats.filter(p => {
      const matchesBlock = selectedBlock === 'all' || p.blockId === selectedBlock;
      const matchesSearch = p.name.toLowerCase().includes(panchayatSearch.toLowerCase()) ||
                            p.desc.toLowerCase().includes(panchayatSearch.toLowerCase()) ||
                            p.blockName.toLowerCase().includes(panchayatSearch.toLowerCase());
      return matchesBlock && matchesSearch;
    });
  }, [allPanchayats, selectedBlock, panchayatSearch]);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Near DYFI youth centre, Polayathodu, Kollam, Kerala 691001")}`;

  return (
    <div className="relative min-h-screen text-slate-900 selection:bg-emerald-500 selection:text-white font-sans antialiased bg-[#FBFBF9]">
      
      {/* 1. TOP BREADCRUMB & NOTICE BAR */}
      <div className="bg-white border-b border-slate-200 text-xs py-2.5 px-4 sm:px-6 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <nav className="flex items-center space-x-2 text-slate-600 text-xs">
            <a href="/" className="hover:text-emerald-700 transition">Home</a>
            <span className="text-slate-400">/</span>
            <a href="/#locations" className="hover:text-emerald-700 transition">Kerala Service Hub</a>
            <span className="text-slate-400">/</span>
            <span className="text-emerald-800 font-bold">Kollam District Coverage</span>
          </nav>
          <div className="flex items-center space-x-3 text-slate-600 text-[11px]">
            <span className="flex items-center text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping mr-1.5 inline-block"></span>
              Local Office: Polayathodu, Kollam
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline text-slate-600 font-medium">IS:6313 Certified • Odorless Chemistry</span>
          </div>
        </div>
      </div>

      {/* 2. NATURE HERO SECTION (EXPANDED FULL-WIDTH NATURE VIEW) */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-12 pb-20 lg:py-24 border-b border-emerald-950 bg-[#020b08] text-white">
        
        {/* Hero Nature Visual Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/images/kollam-hero-nature.jpg" 
            alt="Lush nature and luxury villa garden in Kollam protected from termites" 
            className="w-full h-full object-cover object-center scale-105"
            loading="eager"
            fetchPriority="high"
          />
          {/* Subtle cinematic gradient so nature photo is vibrant and clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b08]/90 via-[#020b08]/60 to-[#020b08]/30 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020b08]/95 via-transparent to-[#020b08]/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left">
          
          <div className="space-y-6 max-w-3xl mx-auto lg:mx-0">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center space-x-2 bg-emerald-950/90 border border-emerald-500/40 rounded-full px-4 py-1.5 text-xs text-emerald-300 backdrop-blur-md shadow-lg shadow-emerald-950/50">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold tracking-wider uppercase text-[11px]">
                PROFESSIONAL TERMITE CONTROL • KOLLAM DISTRICT
              </span>
            </div>

            {/* Elegant Serif & Modern Sans Hybrid Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]">
                Beautiful Spaces with <br />
                <span className="italic font-light text-emerald-400 font-serif">Termite-Free</span> Protection
              </h1>
              
              {/* Secondary SEO Sub-headline */}
              <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald-400/90 font-mono">
                Termite Control. Local Expertise. Kollam Coverage.
              </p>
            </div>

            <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl text-shadow-sm">
              From lush Ashtamudi backwater gardens to luxury modern villas, we provide odorless, IS:6313 certified subterranean termite & wood borer defense across 
              <strong className="text-white font-semibold"> Kollam Corporation, 4 Municipalities & All 68 Grama Panchayats</strong>.
            </p>

            {/* 4 Checkpoint Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-200 max-w-2xl">
              <div className="flex items-center space-x-2.5 bg-black/50 backdrop-blur-md p-2 rounded-xl border border-emerald-500/20 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-slate-950 text-xs font-black shadow">
                  ✓
                </div>
                <span className="font-medium text-slate-100">100% Odorless & Pet-Safe</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-black/50 backdrop-blur-md p-2 rounded-xl border border-emerald-500/20 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-slate-950 text-xs font-black shadow">
                  ✓
                </div>
                <span className="font-medium text-slate-100">Up to 10-Year Written Guarantee</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-black/50 backdrop-blur-md p-2 rounded-xl border border-emerald-500/20 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-slate-950 text-xs font-black shadow">
                  ✓
                </div>
                <span className="font-medium text-slate-100">IS:6313 BIS Standard Compliance</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-black/50 backdrop-blur-md p-2 rounded-xl border border-emerald-500/20 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-slate-950 text-xs font-black shadow">
                  ✓
                </div>
                <span className="font-medium text-slate-100">Same-Day Local Inspection</span>
              </div>
            </div>

            {/* Glowing CTA Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#dispatch-desk"
                className="px-7 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-sm sm:text-base flex items-center space-x-2 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 transform active:scale-95 cursor-pointer"
              >
                <span>Book Free Inspection</span>
                <ArrowRight className="w-4 h-4 text-slate-950 font-bold" />
              </a>

              <button
                onClick={() => handlePhoneClick('kollam_hero')}
                className="px-6 py-3.5 rounded-full bg-black/60 hover:bg-black/80 text-white font-bold text-sm sm:text-base border border-emerald-500/40 backdrop-blur-md flex items-center space-x-2 transition"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call: {PRIMARY_PHONE_DISPLAY}</span>
              </button>

              <button
                onClick={() => handleWhatsAppClick('kollam_hero', { location: 'Kollam District' })}
                className="px-5 py-3.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] font-bold text-sm sm:text-base flex items-center space-x-2 backdrop-blur-md transition"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366]" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Local Desk Floating Badge */}
            <div className="p-3.5 bg-black/60 rounded-2xl border border-emerald-500/20 backdrop-blur-md flex items-start space-x-3 text-xs text-slate-300 max-w-xl text-left">
              <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-bold">Kollam Office Desk:</span> {KOLLAM_DATA.brand.officeAddress.line1}, {KOLLAM_DATA.brand.officeAddress.city}, Kerala - {KOLLAM_DATA.brand.officeAddress.pincode}
                <span className="block text-[11px] text-emerald-400 font-medium mt-0.5">{KOLLAM_DATA.brand.officeAddress.timing}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. QUICK TRUST SUMMARY BAR */}
      <section className="bg-white py-6 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 border-r border-slate-100 last:border-0">
              <div className="text-2xl font-black text-emerald-800">10-Year</div>
              <div className="text-xs text-slate-600 font-medium mt-0.5">Written Warranty Protection</div>
            </div>
            <div className="p-3 border-r border-slate-100 last:border-0">
              <div className="text-2xl font-black text-emerald-800">IS:6313</div>
              <div className="text-xs text-slate-600 font-medium mt-0.5">BIS Standard Certified Method</div>
            </div>
            <div className="p-3 border-r border-slate-100 last:border-0">
              <div className="text-2xl font-black text-emerald-800">100%</div>
              <div className="text-xs text-slate-600 font-medium mt-0.5">Odorless & Non-Toxic Chemicals</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-black text-emerald-800">2-Hour</div>
              <div className="text-xs text-slate-600 font-medium mt-0.5">Rapid Dispatch across Kollam</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEDICATED INSTANT LOCAL DISPATCH DESK SECTION */}
      <section id="dispatch-desk" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Dispatch Desk Details */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-300 rounded-full px-3.5 py-1 text-xs text-emerald-900 font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Instant Local Dispatch Desk</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
                Schedule a Free Termite Site Inspection in Kollam
              </h2>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our certified technical squad from Polayathodu central office is ready for rapid on-site diagnosis. We inspect hidden mud tubes, foundation slab voids, door frames, and roof woodwork using non-destructive moisture and thermal sensors.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-[#F8FAF8] border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-slate-900 block">100% Free Site Evaluation & Quote</strong>
                    <span className="text-xs text-slate-600">No obligation. Transparent linear/sq.ft estimation as per IS:6313 chemical standards.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-[#F8FAF8] border border-slate-200">
                  <Clock className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-slate-900 block">2-Hour Rapid Response Dispatch</strong>
                    <span className="text-xs text-slate-600">Same-day technician visit across Kollam Corporation, Kottarakkara, Karunagappally & all 11 Blocks.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-[#F8FAF8] border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-slate-900 block">Written Multi-Year Warranty Certificate</strong>
                    <span className="text-xs text-slate-600">Up to 10-Year guarantee for pre-construction and up to 5-Year for drill-fill post-construction.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                <span className="flex items-center text-emerald-800 font-bold">
                  <PhoneCall className="w-4 h-4 mr-1.5 text-emerald-700" />
                  Direct Helpline: {PRIMARY_PHONE_DISPLAY}
                </span>
                <span className="hidden sm:inline">•</span>
                <span>Mon-Sun: 8:00 AM - 8:00 PM</span>
              </div>
            </div>

            {/* Right Column: High-Converting White Card Lead Form */}
            <div className="lg:col-span-6">
              <div className="bg-[#FBFBF9] border border-emerald-300 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="mb-4">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-emerald-700" />
                    <span>Quick Booking Form</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">Book Your Termite Inspection</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Fill out the quick form below. Our Polayathodu coordinator will call back within 15 minutes.
                  </p>
                </div>
                <LeadForm 
                  defaultLocation="Kollam (Polayathodu / Chinnakkada)"
                  source="kollam_landing_dispatch_desk"
                  buttonText="Request Inspection Now"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. KOLLAM ARCHITECTURAL PROPERTY SHOWCASE (WHITE THEME) */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-[#F8FAF8]" id="property-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest flex items-center justify-center space-x-1.5 bg-emerald-100 px-3 py-1 rounded-full w-max mx-auto">
              <Camera className="w-3.5 h-3.5 text-emerald-700" />
              <span>Kollam Property Defense Gallery</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Protecting Valuable Spaces Across Kollam District
            </h2>
            <p className="text-sm text-slate-600">
              High-resolution photo showcase of the diverse architectural properties we safeguard against subterranean termites and timber-boring beetles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Ashtamudi Waterfront Villas */}
            <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-500 transition-all duration-300 shadow-md hover:shadow-xl group flex flex-col justify-between">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="/images/alappuzha-waterfront-villa.jpg" 
                  alt="Termite protection for Ashtamudi Lake waterfront luxury villas in Kollam" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 text-[10px] font-bold text-emerald-300">
                  Ashtamudi Waterfront
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition">
                    Lakefront & Waterfront Villas
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Thevally, Asramam, Perinad & Munroe Island. High-humidity subterranean chemical barriers resisting wet soil erosion.
                  </p>
                </div>
                <button
                  onClick={() => onOpenLeadModal({ propertyType: 'Waterfront Villa', location: 'Thevally, Kollam' })}
                  className="mt-4 w-full py-2 bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-800 text-xs font-bold rounded-xl transition border border-emerald-200 text-center"
                >
                  Protect Waterfront Home
                </button>
              </div>
            </div>

            {/* 2. Traditional Wooden Tharavads */}
            <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-500 transition-all duration-300 shadow-md hover:shadow-xl group flex flex-col justify-between">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="/images/alappuzha-traditional-house.jpg" 
                  alt="Heritage teak woodwork and timber preservation in Kollam traditional Tharavads" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 text-[10px] font-bold text-amber-300">
                  Heritage Timber
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition">
                    Traditional Teak Tharavads
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Kottarakkara, Poothakkulam, Pattazhi & Thalavoor. Preserving carved wooden ceilings, teak doors, and antique machans without aesthetic harm.
                  </p>
                </div>
                <button
                  onClick={() => onOpenLeadModal({ propertyType: 'Traditional Kerala Wooden House', location: 'Kottarakkara, Kollam' })}
                  className="mt-4 w-full py-2 bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-800 text-xs font-bold rounded-xl transition border border-emerald-200 text-center"
                >
                  Preserve Heritage Wood
                </button>
              </div>
            </div>

            {/* 3. Pre-Construction IS 6313 Foundation Soil Treatment */}
            <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-500 transition-all duration-300 shadow-md hover:shadow-xl group flex flex-col justify-between">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="/images/pre-construction.jpg" 
                  alt="Pre-construction foundation soil chemical barrier as per IS 6313 in Kollam" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 text-[10px] font-bold text-teal-300">
                  Construction Stage
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition">
                    Pre-Construction Soil Barrier
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    4-Stage foundation soil spraying as per IS 6313 (Part 2) for new residential homes and commercial complexes. 10-Year Certificate.
                  </p>
                </div>
                <button
                  onClick={() => onOpenLeadModal({ service: 'Pre-Construction Termite Treatment', location: 'Kollam' })}
                  className="mt-4 w-full py-2 bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-800 text-xs font-bold rounded-xl transition border border-emerald-200 text-center"
                >
                  Book 10-Yr Foundation Barrier
                </button>
              </div>
            </div>

            {/* 4. Luxury Estate & Hillside Bungalows */}
            <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-500 transition-all duration-300 shadow-md hover:shadow-xl group flex flex-col justify-between">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="/images/alappuzha-cottage-resort.jpg" 
                  alt="Termite and wood borer defense for luxury estate residences and hillside homes in Kollam" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 text-[10px] font-bold text-blue-300">
                  Estate Residences
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition">
                    Midland & Foothill Bungalows
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Anchal, Thenmala, Punalur & Pathanapuram. Heavy-duty subterranean barrier shielding buildings against plantation termite colonies.
                  </p>
                </div>
                <button
                  onClick={() => onOpenLeadModal({ propertyType: 'Plantation Bungalow / Modern Villa', location: 'Punalur / Anchal, Kollam' })}
                  className="mt-4 w-full py-2 bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-800 text-xs font-bold rounded-xl transition border border-emerald-200 text-center"
                >
                  Safeguard Estate Home
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. REAL BEFORE & AFTER TREATMENT PROOF (WHITE THEME) */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest flex items-center justify-center space-x-1.5 bg-emerald-100 px-3 py-1 rounded-full w-max mx-auto">
              <Eye className="w-3.5 h-3.5 text-emerald-700" />
              <span>Real Treatment Evidence</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Before & After Termite Eradication Showcase
            </h2>
            <p className="text-sm text-slate-600">
              See how our scientific non-repellent transfer chemistry completely destroys subterranean colonies and stops timber degradation without destroying aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Visual 1: Structural Timber Before & After */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FBFBF9] border border-slate-200 space-y-4 shadow-sm">
              <div className="rounded-2xl overflow-hidden border border-slate-200 relative">
                <img 
                  src="/images/before-after.jpg" 
                  alt="Before and after termite treatment on wooden door frame in Kollam" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">Teak Wood Door Frame & Wardrobe Restoration</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Active subterranean termite mud tube trails eradicated and injected with wood-nourishing termiticide. Micro-drilled holes sealed invisibly with color-matched epoxy compound.
                </p>
              </div>
            </div>

            {/* Visual 2: Termite vs Wood Borer Macro Diagnosis */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FBFBF9] border border-slate-200 space-y-4 shadow-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl overflow-hidden border border-slate-200 relative group">
                  <img 
                    src="/images/termite-damage.jpg" 
                    alt="Subterranean termite mud tubes and wood damage" 
                    className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/85 px-2 py-1 rounded-lg text-[10px] font-bold text-red-400">
                    🐜 Subterranean Termites
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200 relative group">
                  <img 
                    src="/images/wood-borer.jpg" 
                    alt="Wood borer beetle pinholes and fine yellow powder" 
                    className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/85 px-2 py-1 rounded-lg text-[10px] font-bold text-amber-400">
                    🪵 Powder-Post Wood Borer
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <h3 className="text-base font-bold text-slate-900">Visual Identification: Termite vs Wood Borer</h3>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-3.5 rounded-xl bg-white border border-red-200">
                    <strong className="text-red-700 block font-bold">Termite Symptoms:</strong>
                    <span className="text-slate-600">Brown mud tubes on walls, hollow wood sound, discarded swarmer wings.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-amber-200">
                    <strong className="text-amber-800 block font-bold">Wood Borer Symptoms:</strong>
                    <span className="text-slate-600">Tiny 1mm round holes, fine flour-like yellow dust falling continuously.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. KOLLAM CORPORATION & 4 MUNICIPALITIES (WHITE THEME) */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full w-max mx-auto block">
              Complete District Coverage
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Termite Control Across Kollam District
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              From the coastal fishing harbour of Neendakara to the eastern plantation hills of Thenmala, our certified mobile squads deliver precision subterranean termite and wood borer eradication.
            </p>
          </div>

          {/* 4 Municipalities + 1 Corporation Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            
            {/* Corporation Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950 via-[#032016] to-emerald-950 text-white border border-emerald-700 shadow-xl relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold bg-emerald-400 text-slate-950 px-2.5 py-0.5 rounded-full uppercase shadow">
                    Corporation HQ
                  </span>
                  <Building2 className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-base font-bold text-white">{KOLLAM_DATA.corporation.name}</h3>
                <p className="text-xs text-slate-200 mt-2 leading-relaxed">{KOLLAM_DATA.corporation.description}</p>
                
                <div className="mt-4 pt-3 border-t border-emerald-800">
                  <span className="text-[11px] font-semibold text-emerald-300 block mb-1">Key Wards / Localities:</span>
                  <div className="flex flex-wrap gap-1">
                    {KOLLAM_DATA.corporation.prominentAreas.slice(0, 6).map((area, i) => (
                      <span key={i} className="text-[10px] bg-black/40 text-emerald-100 px-2 py-0.5 rounded-lg border border-emerald-800/60">
                        {area}
                      </span>
                    ))}
                    <span className="text-[10px] text-emerald-400 font-semibold px-1 py-0.5">+14 more</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenLeadModal({ location: 'Kollam Corporation' })}
                className="mt-5 w-full py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-extrabold rounded-xl transition text-center shadow-lg"
              >
                Inspect in Kollam City
              </button>
            </div>

            {/* 4 Municipalities */}
            {KOLLAM_DATA.municipalities.map((muni) => (
              <div key={muni.id} className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 shadow-sm hover:shadow-lg flex flex-col justify-between transition">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full uppercase border border-emerald-200">
                      Municipality
                    </span>
                    <MapPin className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{muni.name}</h3>
                  <span className="text-[11px] text-emerald-700 font-semibold block mt-0.5">{muni.tagline}</span>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{muni.description}</p>
                  
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-700 block mb-1">Covered Zones:</span>
                    <div className="flex flex-wrap gap-1">
                      {muni.prominentAreas.slice(0, 4).map((area, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-lg border border-slate-200">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenLeadModal({ location: `${muni.name} Municipality` })}
                  className="mt-5 w-full py-2 bg-slate-50 hover:bg-emerald-50 text-emerald-800 font-bold text-xs rounded-xl transition border border-slate-200 text-center"
                >
                  Book in {muni.name}
                </button>
              </div>
            ))}

          </div>

          {/* Quick Stats Grid */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border border-slate-200 text-center shadow-sm">
            <div>
              <p className="text-3xl font-black text-emerald-800">1</p>
              <p className="text-xs text-slate-600 font-semibold">Municipal Corporation</p>
            </div>
            <div>
              <p className="text-3xl font-black text-teal-800">4</p>
              <p className="text-xs text-slate-600 font-semibold">Municipalities</p>
            </div>
            <div>
              <p className="text-3xl font-black text-emerald-700">11</p>
              <p className="text-xs text-slate-600 font-semibold">Block Panchayats</p>
            </div>
            <div>
              <p className="text-3xl font-black text-amber-700">68</p>
              <p className="text-xs text-slate-600 font-semibold">Grama Panchayats</p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. INTERACTIVE 11 BLOCKS & 68 GRAMA PANCHAYATS DIRECTORY (SCROLLABLE WHITE THEME) */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white" id="panchayats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Master Explorer Container with Clean White Card */}
          <div className="bg-[#FBFBF9] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md max-w-6xl mx-auto">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 pb-6 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Localized Coverage Matrix</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                  All 11 Block Panchayats & 68 Grama Panchayats Directory
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                  Filter by block or search your local panchayat for instant technician dispatch and terrain vulnerability data.
                </p>
              </div>

              {/* Live Search Bar */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  value={panchayatSearch}
                  onChange={(e) => setPanchayatSearch(e.target.value)}
                  placeholder="Search 68 panchayats..."
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 transition shadow-inner"
                />
              </div>
            </div>

            {/* Block Filter Tabs (Smooth Horizontal Scroll) */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 scrollbar-thin scrollbar-thumb-slate-300">
              <button
                onClick={() => setSelectedBlock('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  selectedBlock === 'all' 
                    ? 'bg-emerald-800 text-white shadow-md' 
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All 11 Blocks (68)
              </button>
              {KOLLAM_DATA.blocks.map(b => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBlock(b.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                    selectedBlock === b.id 
                      ? 'bg-emerald-800 text-white shadow-md font-bold' 
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {b.name} ({b.panchayatsCount})
                </button>
              ))}
            </div>

            {/* Status & Scroll Helper Hint */}
            <div className="flex items-center justify-between text-[11px] text-slate-600 mb-3 px-1">
              <span>Showing <strong className="text-slate-900 font-bold">{filteredPanchayats.length}</strong> Panchayats</span>
              <span className="text-emerald-800 font-semibold flex items-center space-x-1">
                <span>↓ Scroll to explore all areas</span>
              </span>
            </div>

            {/* Scrollable Panchayats Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-h-[460px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 hover:scrollbar-thumb-emerald-500 scrollbar-track-slate-100">
              {filteredPanchayats.length > 0 ? (
                filteredPanchayats.map((p, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {p.blockName}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {p.terrain}
                        </span>
                      </div>
                      
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition">
                        {p.name}
                      </h4>
                      
                      <p className="text-[11px] text-slate-600 mt-1.5 leading-snug line-clamp-2">
                        {p.desc}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] text-emerald-700 font-semibold flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-1.5 inline-block"></span>
                        Active Squad
                      </span>
                      <button
                        onClick={() => onOpenLeadModal({ location: `${p.name}, ${p.blockName}, Kollam`, service: "Termite Control" })}
                        className="text-[11px] text-emerald-800 hover:text-emerald-950 font-bold flex items-center space-x-1 group/btn"
                      >
                        <span>Book Free Inspection</span>
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-slate-500">
                  <HelpCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-800">No panchayats found matching "{panchayatSearch}"</p>
                  <p className="text-xs text-slate-500 mt-1">Try searching for Anchal, Kundara, Chavara, Mayyanad, Sasthamcotta, etc.</p>
                </div>
              )}
            </div>

            {/* Bottom Assistance & Direct Hotline Bar */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-700 gap-3">
              <span>Need urgent same-day termite inspection anywhere in Kollam district?</span>
              <button
                onClick={() => handlePhoneClick('kollam_directory_call')}
                className="font-bold text-emerald-800 hover:text-emerald-950 flex items-center space-x-1.5 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Kollam Coordinator: 9020040009</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 8. 14 DEDICATED TERMITE SERVICES (WHITE THEME) */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-[#F8FAF8]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full w-max mx-auto block">
              Complete Service Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Termite & Timber Protection Services in Kollam
            </h2>
            <p className="text-sm text-slate-600">
              Every service is delivered under strict chemical dosing norms, adhering to Indian Standards (IS:6313) with written guarantee certificates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KOLLAM_DATA.services.map((svc) => (
              <div 
                key={svc.id}
                className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">
                      {svc.warranty}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition">
                    {svc.name}
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold mt-0.5">{svc.tagline}</p>

                  <p className="text-xs text-slate-600 mt-3.5 leading-relaxed">
                    {svc.description}
                  </p>

                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 text-xs">
                    <div className="flex items-start space-x-2 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-slate-900">Method:</strong> {svc.method}</span>
                    </div>
                    <div className="flex items-start space-x-2 text-slate-700">
                      <Droplet className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-slate-900">Chemistry:</strong> {svc.chemical}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2.5">
                  <button
                    onClick={() => onOpenLeadModal({ service: svc.name, location: 'Kollam' })}
                    className="flex-1 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition text-center shadow"
                  >
                    Enquire Now
                  </button>
                  <button
                    onClick={() => handleWhatsAppClick('kollam_service_card', { service: svc.name, location: 'Kollam' })}
                    className="p-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl transition"
                    title="WhatsApp enquiry"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. PRE-CONSTRUCTION VS POST-CONSTRUCTION COMPARISON (WHITE THEME) */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full w-max mx-auto block">
              Engineering Specifications
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Pre-Construction vs Post-Construction Termite Treatment
            </h2>
            <p className="text-sm text-slate-600">
              Choose the exact scientific protocol matching your property’s construction lifecycle stage in Kollam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pre-Construction Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#FBFBF9] border border-emerald-200 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  New Construction Stage
                </span>
                <HardHat className="w-6 h-6 text-emerald-700" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">Pre-Construction Soil Barrier (IS 6313)</h3>
              <p className="text-xs text-slate-600 mt-1">
                Applied in 4 chronological phases during foundation masonry and plinth casting to create an impenetrable chemical envelope.
              </p>

              <div className="mt-6 space-y-3 text-xs">
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200">
                  <span className="text-emerald-800 font-bold block">Stage 1: Trench Excavation</span>
                  <p className="text-slate-600 mt-0.5">Bottom and vertical sides of foundation trenches treated with 5 Litres/sq.m of emulsion.</p>
                </div>
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200">
                  <span className="text-emerald-800 font-bold block">Stage 2: Backfilled Soil</span>
                  <p className="text-slate-600 mt-0.5">Sub-surface soil along retaining walls treated with 7.5 Litres/linear metre.</p>
                </div>
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200">
                  <span className="text-emerald-800 font-bold block">Stage 3: Under-Floor Plinth Bed</span>
                  <p className="text-slate-600 mt-0.5">Complete consolidated gravel/sand bed sprayed prior to laying PCC floor slab.</p>
                </div>
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200">
                  <span className="text-emerald-800 font-bold block">Stage 4: External Perimeter Rodding</span>
                  <p className="text-slate-600 mt-0.5">Final perimeter trenching along building apron to block horizontal foraging termites.</p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">Warranty: 10 Years Certified</span>
                <button
                  onClick={() => onOpenLeadModal({ service: 'Pre-Construction Termite Treatment', location: 'Kollam' })}
                  className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-full transition shadow"
                >
                  Book Pre-Construction
                </button>
              </div>
            </div>

            {/* Post-Construction Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#FBFBF9] border border-teal-200 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
                  Existing Occupied Homes & Buildings
                </span>
                <Building2 className="w-6 h-6 text-teal-700" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">Drill-Fill-Seal Chemical Barrier</h3>
              <p className="text-xs text-slate-600 mt-1">
                Surgical non-destructive eradication and long-term protection for completed residences without lifting floor tiles.
              </p>

              <div className="mt-6 space-y-3 text-xs">
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200">
                  <span className="text-teal-800 font-bold block">Step 1: 12mm Precision Micro-Drilling</span>
                  <p className="text-slate-600 mt-0.5">Tiny holes drilled 1 foot apart along inner wall junctions and door frames.</p>
                </div>
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200">
                  <span className="text-teal-800 font-bold block">Step 2: Pressurized Chemical Injection</span>
                  <p className="text-slate-600 mt-0.5">Odorless non-repellent termiticide pumped into sub-slab soil to destroy underground colonies.</p>
                </div>
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200">
                  <span className="text-teal-800 font-bold block">Step 3: Color-Matched Sealing</span>
                  <p className="text-slate-600 mt-0.5">Holes cleanly sealed with color-matching waterproof epoxy compound leaving no scar.</p>
                </div>
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200">
                  <span className="text-teal-800 font-bold block">Step 4: Woodwork & Wardrobe Defense</span>
                  <p className="text-slate-600 mt-0.5">Anti-fungal and borer-inhibiting formulation applied to door jambs and cabinetry backs.</p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">Warranty: Up to 5 Years</span>
                <button
                  onClick={() => onOpenLeadModal({ service: 'Post-Construction Drill-Seal Treatment', location: 'Kollam' })}
                  className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-full transition shadow"
                >
                  Book Post-Construction
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. 36 AEO / AI SEARCH DIRECT-ANSWER FAQS (WHITE THEME) */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-[#F8FAF8]" id="faqs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full w-max mx-auto block">
              AEO & AI Search Knowledge Base
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Frequently Asked Questions About Termite Control in Kollam
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Direct, transparent answers to the 36 most common questions about costs, chemicals, procedures, and local coverage in Kollam.
            </p>

            {/* FAQ Search */}
            <div className="relative max-w-md mx-auto pt-3">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                value={faqSearchQuery}
                onChange={(e) => setFaqSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. cost, safety, borers, Polayathodu)..."
                className="w-full bg-white border border-slate-300 rounded-full pl-11 pr-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 transition shadow-inner"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen 
                        ? 'bg-white border-emerald-300 shadow-md ring-1 ring-emerald-200' 
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-emerald-800 transition"
                    >
                      <span className="flex items-center space-x-3">
                        <span className="text-xs font-mono text-emerald-700">Q{idx + 1}.</span>
                        <span>{faq.q}</span>
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'transform rotate-180 text-emerald-700' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                        <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 font-medium mb-2.5">
                          <strong className="text-emerald-800">Direct Answer:</strong> {faq.a.split('.')[0]}.
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-10 text-slate-500 text-xs">
                No FAQs matching "{faqSearchQuery}". Try asking about costs, guarantee, or inspection.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 11. KOLLAM LOCAL OFFICE SPOTLIGHT */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950 via-[#042017] to-emerald-950 border border-emerald-800 shadow-2xl relative overflow-hidden text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Kollam District Service Center</span>
                </span>
                
                <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                  Eco Pest India — Polayathodu Central Office
                </h3>

                <p className="text-sm text-slate-200 leading-relaxed">
                  Located near the DYFI Youth Centre on the main road in Polayathodu, Kollam. Our field inspection supervisors and certified technicians dispatch promptly across all Kollam Corporation wards, municipalities, and suburban taluks.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                  <div className="p-4 rounded-2xl bg-black/50 border border-emerald-800/60">
                    <span className="text-slate-300 block font-medium">Physical Address:</span>
                    <strong className="text-white block mt-1">{KOLLAM_DATA.brand.officeAddress.line1}</strong>
                    <span className="text-slate-300">{KOLLAM_DATA.brand.officeAddress.city}, Kerala - {KOLLAM_DATA.brand.officeAddress.pincode}</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-emerald-800/60">
                    <span className="text-slate-300 block font-medium">Service Timings & Helpline:</span>
                    <strong className="text-emerald-400 block mt-1">{KOLLAM_DATA.brand.officeAddress.timing}</strong>
                    <span className="text-white font-bold">Helpline: {PRIMARY_PHONE_DISPLAY}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-black/60 hover:bg-black text-white font-bold text-xs rounded-full border border-emerald-500/40 flex items-center space-x-2 transition"
                  >
                    <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 ml-1" />
                  </a>

                  <button
                    onClick={() => handlePhoneClick('kollam_office_spotlight')}
                    className="px-5 py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-xs rounded-full flex items-center space-x-2 transition shadow-lg"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Polayathodu Desk</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="p-7 rounded-3xl bg-black/70 border border-emerald-800/60 text-center space-y-4 shadow-2xl backdrop-blur-md">
                  <div className="inline-flex p-3.5 rounded-full bg-emerald-500/20 text-emerald-400 mb-1">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-white">Same-Day Site Inspection</h4>
                  <p className="text-xs text-slate-300">
                    Need urgent assessment for swarming termites or damaged woodwork? Our technical squad is ready.
                  </p>
                  <button
                    onClick={() => onOpenInspectionModal()}
                    className="w-full py-3 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-extrabold text-xs rounded-full shadow-lg transition active:scale-95"
                  >
                    REQUEST INSPECTION NOW
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 12. CUSTOMER REVIEWS (WHITE THEME) */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-[#F8FAF8]" id="reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full w-max mx-auto block">
              Real Customer Feedback
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Trusted by Homeowners & Builders in Kollam
            </h2>
            <div className="flex items-center justify-center space-x-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-700 ml-2">4.8 / 5.0 (1,153+ Ratings)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KOLLAM_DATA.reviews.map((rev, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400">{rev.date}</span>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <strong className="text-xs font-bold text-slate-900 block">{rev.name}</strong>
                  <span className="text-[11px] text-emerald-700 font-semibold block">{rev.locality}</span>
                  <span className="text-[10px] text-slate-500">{rev.service}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 13. FINAL HIGH IMPACT CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#021b12] to-[#010e09] text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/15 border border-emerald-500/40 rounded-full px-4 py-1.5 text-xs text-emerald-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Guaranteed Termite Eradication in Kollam</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Protect Your Home or Building From Termite Damage Today
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Schedule a professional diagnostic assessment with our Polayathodu technicians. Safe, odorless, and backed by a comprehensive multi-year warranty certificate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenInspectionModal()}
              className="w-full sm:w-auto px-9 py-4 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-sm sm:text-base rounded-full shadow-2xl shadow-emerald-500/40 transition transform active:scale-95"
            >
              BOOK INSPECTION (CALL 9020040009)
            </button>

            <button
              onClick={() => handleWhatsAppClick('kollam_final_cta', { location: 'Kollam' })}
              className="w-full sm:w-auto px-7 py-4 bg-black/60 hover:bg-black text-emerald-400 font-bold text-sm sm:text-base rounded-full border border-emerald-500/40 flex items-center justify-center space-x-2 transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>CHAT ON WHATSAPP</span>
            </button>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar on Mobile */}
      <PrimaryBottomCTA 
        onOpenLeadModal={() => onOpenLeadModal({ location: 'Kollam' })}
        source="kollam_sticky_bar"
      />

    </div>
  );
}
