import React, { useEffect, useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Award, 
  Clock, 
  CheckCircle2, 
  Home, 
  Building2, 
  Bug, 
  AlertTriangle, 
  ArrowRight, 
  Check, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  HardHat, 
  Factory, 
  Droplet,
  Zap,
  PhoneCall,
  DollarSign,
  Star,
  Search,
  FileText,
  ShieldAlert,
  Camera,
  Users,
  Shield,
  ExternalLink,
  Hotel,
  Warehouse,
  CheckSquare,
  Layers,
  Compass,
  ArrowUpRight,
  Send,
  Eye,
  CheckCircle,
  Navigation,
  Crosshair,
  BadgeCheck,
  Flame,
  Info,
  Leaf,
  TreePine,
  Sparkle
} from 'lucide-react';
import { KOLLAM_DATA } from '../data/kollamData';
import { updateMetaTags } from '../utils/seo';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';
import LeadForm from '../components/LeadForm';
import PrimaryBottomCTA from '../components/PrimaryBottomCTA';

export default function KollamLandingPage({ onOpenLeadModal, onOpenInspectionModal }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('all');
  const [panchayatSearch, setPanchayatSearch] = useState('');

  useEffect(() => {
    // Generate Schema Graph containing FAQPage, PestControlService, LocalBusiness, and BreadcrumbList
    const faqSchemaList = KOLLAM_DATA.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }));

    updateMetaTags({
      title: KOLLAM_DATA.meta.title,
      description: KOLLAM_DATA.meta.description,
      keywords: KOLLAM_DATA.meta.keywords,
      canonicalUrl: "https://termitecontrol.me/termite-control-kollam",
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "PestControlService",
            "@id": "https://termitecontrol.me/termite-control-kollam#service",
            "name": "TermiteControl.me - Kollam District Central Division",
            "parentOrganization": {
              "@type": "Organization",
              "name": "Eco Pest India"
            },
            "url": "https://termitecontrol.me/termite-control-kollam",
            "telephone": "+91-9020040009",
            "priceRange": "₹₹",
            "image": "https://termitecontrol.me/images/kollam-hero-nature.jpg",
            "address": {
              "@type": "PostalAddress",
              "name": "Eco Pest India - Kollam Office",
              "streetAddress": "Near DYFI Youth Centre, Polayathodu",
              "addressLocality": "Kollam",
              "addressRegion": "Kerala",
              "postalCode": "691001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "8.8856",
              "longitude": "76.6042"
            },
            "areaServed": [
              { "@type": "City", "name": "Kollam" },
              { "@type": "City", "name": "Karunagappally" },
              { "@type": "City", "name": "Kottarakkara" },
              { "@type": "City", "name": "Paravur" },
              { "@type": "City", "name": "Punalur" },
              { "@type": "AdministrativeArea", "name": "Kollam District" }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1153",
              "bestRating": "5"
            }
          },
          {
            "@type": "LocalBusiness",
            "@id": "https://termitecontrol.me/termite-control-kollam#localbusiness",
            "name": "Eco Pest India - Termite Control Kollam",
            "image": "https://termitecontrol.me/images/kollam-hero-nature.jpg",
            "telephone": "+91-9020040009",
            "email": "support@termitecontrol.me",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near DYFI Youth Centre, Polayathodu",
              "addressLocality": "Kollam",
              "addressRegion": "Kerala",
              "postalCode": "691001",
              "addressCountry": "IN"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "08:00",
              "closes": "20:30"
            }
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://termitecontrol.me/termite-control-kollam#breadcrumbs",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://termitecontrol.me/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Kerala Locations",
                "item": "https://termitecontrol.me/#locations"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Kollam District",
                "item": "https://termitecontrol.me/termite-control-kollam"
              }
            ]
          },
          {
            "@type": "FAQPage",
            "@id": "https://termitecontrol.me/termite-control-kollam#faq",
            "mainEntity": faqSchemaList
          }
        ]
      }
    });

    window.scrollTo(0, 0);
  }, []);

  // Filter FAQs based on query
  const filteredFaqs = KOLLAM_DATA.faqs.filter(
    faq => faq.q.toLowerCase().includes(faqSearchQuery.toLowerCase()) || 
           faq.a.toLowerCase().includes(faqSearchQuery.toLowerCase())
  );

  // Flatten all panchayats across 11 blocks with parent block metadata
  const allPanchayats = KOLLAM_DATA.blocks.flatMap(block => 
    block.panchayats.map(p => ({
      ...p,
      blockName: block.name,
      blockId: block.id,
      terrain: block.terrain
    }))
  );

  // Filter panchayats based on block and search query
  const filteredPanchayats = allPanchayats.filter(p => {
    const matchesBlock = selectedBlock === 'all' || p.blockId === selectedBlock;
    const matchesSearch = p.name.toLowerCase().includes(panchayatSearch.toLowerCase()) ||
                          p.desc.toLowerCase().includes(panchayatSearch.toLowerCase()) ||
                          p.blockName.toLowerCase().includes(panchayatSearch.toLowerCase());
    return matchesBlock && matchesSearch;
  });

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Near DYFI youth centre, Polayathodu, Kollam, Kerala 691001")}`;

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-emerald-500 selection:text-slate-950 font-sans antialiased bg-[#020b08]">
      
      {/* 🌿 GLOBAL FIXED NATURE PHOTO BACKDROP WITH GLASSMORPHISM OVERLAYS ACROSS ALL MODULES */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/kollam-hero-nature.jpg" 
          alt="Lush nature background for Kollam termite control" 
          className="w-full h-full object-cover object-center scale-105 opacity-40 blur-[1px]"
        />
        {/* Deep Botanical Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020b08]/90 via-[#03150e]/85 to-[#020b08]/95" />
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">

        {/* 1. TOP BREADCRUMB & NOTICE BAR */}
        <div className="bg-[#010805]/95 border-b border-emerald-950/80 text-xs py-2.5 px-4 sm:px-6 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <nav className="flex items-center space-x-2 text-emerald-300/80 text-xs">
              <a href="/" className="hover:text-emerald-300 transition">Home</a>
              <span className="text-emerald-800">/</span>
              <a href="/#locations" className="hover:text-emerald-300 transition">Kerala Service Hub</a>
              <span className="text-emerald-800">/</span>
              <span className="text-emerald-400 font-semibold">Kollam District Coverage</span>
            </nav>
            <div className="flex items-center space-x-3 text-slate-300 text-[11px]">
              <span className="flex items-center text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1.5 inline-block"></span>
                Local Office: Polayathodu, Kollam
              </span>
              <span className="hidden sm:inline text-emerald-900">|</span>
              <span className="hidden sm:inline text-emerald-200/70">IS:6313 Certified • Odorless Chemistry</span>
            </div>
          </div>
        </div>

        {/* 2. ULTRA-PREMIUM NATURE HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 lg:py-20 border-b border-emerald-900/40">
          
          {/* Individual Hero High-Impact Nature Visual Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/images/kollam-hero-nature.jpg" 
              alt="Lush nature and luxury villa garden in Kollam protected from termites" 
              className="w-full h-full object-cover object-center scale-105"
              loading="eager"
              fetchPriority="high"
            />
            {/* Cinematic Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#020b08]/95 via-[#020b08]/85 to-[#020b08]/40 lg:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020b08] via-transparent to-[#020b08]/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Reference-Styled Typography & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                {/* Reference-Styled Pill Tag */}
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

                {/* 5 Emerald Checkpoint Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-200">
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
                <div className="pt-3 flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={() => onOpenInspectionModal()}
                    className="px-7 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-sm sm:text-base flex items-center space-x-2 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 transform active:scale-95"
                  >
                    <span>Book Free Inspection</span>
                    <ArrowRight className="w-4 h-4 text-slate-950 font-bold" />
                  </button>

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
                <div className="p-3.5 bg-black/60 rounded-2xl border border-emerald-500/20 backdrop-blur-md flex items-start space-x-3 text-xs text-slate-300 max-w-xl">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold">Kollam Office Desk:</span> {KOLLAM_DATA.brand.officeAddress.line1}, {KOLLAM_DATA.brand.officeAddress.city}, Kerala - {KOLLAM_DATA.brand.officeAddress.pincode}
                    <span className="block text-[11px] text-emerald-400 font-medium mt-0.5">{KOLLAM_DATA.brand.officeAddress.timing}</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Frosted Glassmorphic Lead Booking Form */}
              <div className="lg:col-span-5">
                <div className="bg-[#03150e]/90 border border-emerald-500/35 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Instant Dispatch Desk</span>
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">Book Kollam Termite Inspection</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Direct booking with local Polayathodu technicians. 100% free site evaluation.
                    </p>
                  </div>
                  <LeadForm 
                    defaultLocation="Kollam (Polayathodu / Chinnakkada)"
                    source="kollam_landing_hero"
                    buttonText="Request Inspection Now"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. KOLLAM ARCHITECTURAL PROPERTY SHOWCASE (Frosted Glass over Nature Canvas) */}
        <section className="py-20 border-b border-emerald-950/80 bg-black/50 backdrop-blur-md" id="property-gallery">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center justify-center space-x-1.5">
                <Camera className="w-4 h-4 text-emerald-400" />
                <span>Kollam Property Defense Gallery</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Protecting Valuable Spaces Across Kollam District
              </h2>
              <p className="text-sm text-slate-300">
                High-resolution photo showcase of the diverse architectural properties we safeguard against subterranean termites and timber-boring beetles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* 1. Ashtamudi Waterfront Villas */}
              <div className="rounded-3xl overflow-hidden bg-[#031710]/85 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 shadow-2xl group flex flex-col justify-between backdrop-blur-xl">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src="/images/alappuzha-waterfront-villa.jpg" 
                    alt="Termite protection for Ashtamudi Lake waterfront luxury villas in Kollam" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031710] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                    Ashtamudi Waterfront
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition">
                      Lakefront & Waterfront Villas
                    </h3>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      Thevally, Asramam, Perinad & Munroe Island. High-humidity subterranean chemical barriers resisting wet soil erosion.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenLeadModal({ propertyType: 'Waterfront Villa', location: 'Thevally, Kollam' })}
                    className="mt-4 w-full py-2 bg-emerald-950 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 text-xs font-bold rounded-xl transition border border-emerald-800/60 text-center"
                  >
                    Protect Waterfront Home
                  </button>
                </div>
              </div>

              {/* 2. Traditional Wooden Tharavads */}
              <div className="rounded-3xl overflow-hidden bg-[#031710]/85 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 shadow-2xl group flex flex-col justify-between backdrop-blur-xl">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src="/images/alappuzha-traditional-house.jpg" 
                    alt="Heritage teak woodwork and timber preservation in Kollam traditional Tharavads" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031710] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-amber-400 border border-amber-500/30">
                    Heritage Timber
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition">
                      Traditional Teak Tharavads
                    </h3>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      Kottarakkara, Poothakkulam, Pattazhi & Thalavoor. Preserving carved wooden ceilings, teak doors, and antique machans without aesthetic harm.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenLeadModal({ propertyType: 'Traditional Kerala Wooden House', location: 'Kottarakkara, Kollam' })}
                    className="mt-4 w-full py-2 bg-emerald-950 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 text-xs font-bold rounded-xl transition border border-emerald-800/60 text-center"
                  >
                    Preserve Heritage Wood
                  </button>
                </div>
              </div>

              {/* 3. Pre-Construction IS 6313 Foundation Soil Treatment */}
              <div className="rounded-3xl overflow-hidden bg-[#031710]/85 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 shadow-2xl group flex flex-col justify-between backdrop-blur-xl">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src="/images/pre-construction.jpg" 
                    alt="Pre-construction foundation soil chemical barrier as per IS 6313 in Kollam" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031710] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-teal-400 border border-teal-500/30">
                    Construction Stage
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition">
                      Pre-Construction Soil Barrier
                    </h3>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      4-Stage foundation soil spraying as per IS 6313 (Part 2) for new residential homes and commercial complexes. 10-Year Certificate.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenLeadModal({ service: 'Pre-Construction Termite Treatment', location: 'Kollam' })}
                    className="mt-4 w-full py-2 bg-emerald-950 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 text-xs font-bold rounded-xl transition border border-emerald-800/60 text-center"
                  >
                    Book 10-Yr Foundation Barrier
                  </button>
                </div>
              </div>

              {/* 4. Luxury Estate & Hillside Bungalows */}
              <div className="rounded-3xl overflow-hidden bg-[#031710]/85 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 shadow-2xl group flex flex-col justify-between backdrop-blur-xl">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src="/images/alappuzha-cottage-resort.jpg" 
                    alt="Termite and wood borer defense for luxury estate residences and hillside homes in Kollam" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031710] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-blue-400 border border-blue-500/30">
                    Estate Residences
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition">
                      Midland & Foothill Bungalows
                    </h3>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      Anchal, Thenmala, Punalur & Pathanapuram. Heavy-duty subterranean barrier shielding buildings against plantation termite colonies.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenLeadModal({ propertyType: 'Plantation Bungalow / Modern Villa', location: 'Punalur / Anchal, Kollam' })}
                    className="mt-4 w-full py-2 bg-emerald-950 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 text-xs font-bold rounded-xl transition border border-emerald-800/60 text-center"
                  >
                    Safeguard Estate Home
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 4. REAL BEFORE & AFTER TREATMENT PROOF (Glassmorphic Nature Canvas) */}
        <section className="py-20 border-b border-emerald-950/80 bg-black/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center justify-center space-x-1.5">
                <Eye className="w-4 h-4 text-emerald-400" />
                <span>Real Treatment Evidence</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Before & After Termite Eradication Showcase
              </h2>
              <p className="text-sm text-slate-300">
                See how our scientific non-repellent transfer chemistry completely destroys subterranean colonies and stops timber degradation without destroying aesthetics.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Visual 1: Structural Timber Before & After */}
              <div className="p-6 rounded-3xl bg-[#031710]/90 border border-emerald-500/30 space-y-4 shadow-2xl backdrop-blur-2xl">
                <div className="rounded-2xl overflow-hidden border border-emerald-900/50 relative">
                  <img 
                    src="/images/before-after.jpg" 
                    alt="Before and after termite treatment on wooden door frame in Kollam" 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">Teak Wood Door Frame & Wardrobe Restoration</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Active subterranean termite mud tube trails eradicated and injected with wood-nourishing termiticide. Micro-drilled holes sealed invisibly with color-matched epoxy compound.
                  </p>
                </div>
              </div>

              {/* Visual 2: Termite vs Wood Borer Macro Diagnosis */}
              <div className="p-6 rounded-3xl bg-[#031710]/90 border border-emerald-500/30 space-y-4 shadow-2xl backdrop-blur-2xl">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl overflow-hidden border border-emerald-900/50 relative group">
                    <img 
                      src="/images/termite-damage.jpg" 
                      alt="Subterranean termite mud tubes and wood damage" 
                      className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/80 px-2 py-1 rounded-lg text-[10px] font-bold text-red-400 border border-red-500/30">
                      🐜 Subterranean Termites
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-emerald-900/50 relative group">
                    <img 
                      src="/images/wood-borer.jpg" 
                      alt="Wood borer beetle pinholes and fine yellow powder" 
                      className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/80 px-2 py-1 rounded-lg text-[10px] font-bold text-amber-400 border border-amber-500/30">
                      🪵 Powder-Post Wood Borer
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <h3 className="text-base font-bold text-white">Visual Identification: Termite vs Wood Borer</h3>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-3 rounded-xl bg-black/60 border border-emerald-900/40">
                      <strong className="text-red-400 block">Termite Symptoms:</strong>
                      <span className="text-slate-300">Brown mud tubes on walls, hollow wood sound, discarded swarmer wings.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-black/60 border border-emerald-900/40">
                      <strong className="text-amber-400 block">Wood Borer Symptoms:</strong>
                      <span className="text-slate-300">Tiny 1mm round holes, fine flour-like yellow dust falling continuously.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 5. KOLLAM CORPORATION & 4 MUNICIPALITIES (Glass Cards on Nature Canvas) */}
        <section className="py-20 border-b border-emerald-950/80 bg-black/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Complete District Coverage</span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Termite Control Across Kollam District
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                From the coastal fishing harbour of Neendakara to the eastern plantation hills of Thenmala, our certified mobile squads deliver precision subterranean termite and wood borer eradication.
              </p>
            </div>

            {/* 4 Municipalities + 1 Corporation Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              
              {/* Corporation Card */}
              <div className="p-6 rounded-3xl bg-[#031911]/95 border border-emerald-400/50 shadow-2xl relative flex flex-col justify-between backdrop-blur-2xl">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold bg-emerald-400 text-slate-950 px-2.5 py-0.5 rounded-full uppercase shadow">
                      Corporation HQ
                    </span>
                    <Building2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="text-base font-bold text-white">{KOLLAM_DATA.corporation.name}</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{KOLLAM_DATA.corporation.description}</p>
                  
                  <div className="mt-4 pt-3 border-t border-emerald-900/60">
                    <span className="text-[11px] font-semibold text-emerald-300 block mb-1">Key Wards / Localities:</span>
                    <div className="flex flex-wrap gap-1">
                      {KOLLAM_DATA.corporation.prominentAreas.slice(0, 6).map((area, i) => (
                        <span key={i} className="text-[10px] bg-black/60 text-slate-200 px-2 py-0.5 rounded-lg border border-emerald-900/40">
                          {area}
                        </span>
                      ))}
                      <span className="text-[10px] text-emerald-400 font-semibold px-1 py-0.5">+14 more</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenLeadModal({ location: 'Kollam Corporation' })}
                  className="mt-5 w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold rounded-xl transition text-center shadow-lg"
                >
                  Inspect in Kollam City
                </button>
              </div>

              {/* 4 Municipalities */}
              {KOLLAM_DATA.municipalities.map((muni) => (
                <div key={muni.id} className="p-6 rounded-3xl bg-[#031710]/90 border border-emerald-500/30 hover:border-emerald-400/60 shadow-xl flex flex-col justify-between transition backdrop-blur-xl">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded-full uppercase border border-emerald-800/40">
                        Municipality
                      </span>
                      <MapPin className="w-4 h-4 text-teal-400" />
                    </div>
                    <h3 className="text-base font-bold text-white">{muni.name}</h3>
                    <span className="text-[11px] text-emerald-400 font-medium block mt-0.5">{muni.tagline}</span>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">{muni.description}</p>
                    
                    <div className="mt-4 pt-3 border-t border-emerald-900/50">
                      <span className="text-[11px] font-semibold text-emerald-300 block mb-1">Covered Zones:</span>
                      <div className="flex flex-wrap gap-1">
                        {muni.prominentAreas.slice(0, 4).map((area, i) => (
                          <span key={i} className="text-[10px] bg-black/50 text-slate-200 px-2 py-0.5 rounded-lg border border-emerald-900/30">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenLeadModal({ location: `${muni.name} Municipality` })}
                    className="mt-5 w-full py-2 bg-emerald-950/90 hover:bg-emerald-900 text-emerald-300 text-xs font-bold rounded-xl transition border border-emerald-800/50 text-center"
                  >
                    Book in {muni.name}
                  </button>
                </div>
              ))}

            </div>

            {/* Quick Stats Grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-3xl bg-[#03150e]/95 border border-emerald-500/30 text-center backdrop-blur-2xl shadow-2xl">
              <div>
                <p className="text-3xl font-black text-emerald-400">1</p>
                <p className="text-xs text-slate-300 font-medium">Municipal Corporation</p>
              </div>
              <div>
                <p className="text-3xl font-black text-teal-400">4</p>
                <p className="text-xs text-slate-300 font-medium">Municipalities</p>
              </div>
              <div>
                <p className="text-3xl font-black text-emerald-300">11</p>
                <p className="text-xs text-slate-300 font-medium">Block Panchayats</p>
              </div>
              <div>
                <p className="text-3xl font-black text-amber-400">68</p>
                <p className="text-xs text-slate-300 font-medium">Grama Panchayats</p>
              </div>
            </div>

          </div>
        </section>

        {/* 6. INTERACTIVE 11 BLOCKS & 68 GRAMA PANCHAYATS DIRECTORY */}
        <section className="py-20 border-b border-emerald-950/80 bg-black/60 backdrop-blur-md" id="panchayats">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Localized Coverage Matrix</span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mt-1">
                  All 11 Block Panchayats & 68 Grama Panchayats
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Select your block or search your panchayat name to view specialized soil vulnerability factors and book rapid inspection.
                </p>
              </div>

              {/* Live Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  value={panchayatSearch}
                  onChange={(e) => setPanchayatSearch(e.target.value)}
                  placeholder="Search panchayat / town..."
                  className="w-full bg-[#031911] border border-emerald-500/40 rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition shadow-inner"
                />
              </div>
            </div>

            {/* Block Filter Tabs */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-emerald-800">
              <button
                onClick={() => setSelectedBlock('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition ${
                  selectedBlock === 'all' 
                    ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30' 
                    : 'bg-[#031710]/90 text-slate-300 hover:bg-emerald-950 border border-emerald-900/50 backdrop-blur-md'
                }`}
              >
                All 11 Blocks (68)
              </button>
              {KOLLAM_DATA.blocks.map(b => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBlock(b.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                    selectedBlock === b.id 
                      ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30 font-bold' 
                      : 'bg-[#031710]/90 text-slate-300 hover:bg-emerald-950 border border-emerald-900/50 backdrop-blur-md'
                  }`}
                >
                  {b.name} ({b.panchayatsCount})
                </button>
              ))}
            </div>

            {/* Filtered Panchayats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredPanchayats.length > 0 ? (
                filteredPanchayats.map((p, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-3xl bg-[#031710]/90 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 group flex flex-col justify-between backdrop-blur-xl shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
                          {p.blockName}
                        </span>
                        <MapPin className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition" />
                      </div>
                      
                      <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition">
                        {p.name}
                      </h4>
                      
                      <p className="text-[11px] text-slate-300 mt-2 leading-relaxed line-clamp-3">
                        {p.desc}
                      </p>

                      <div className="mt-3 text-[10px] text-slate-400 font-medium">
                        Terrain: <span className="text-emerald-300">{p.terrain}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenLeadModal({ location: `${p.name}, ${p.blockName}, Kollam` })}
                      className="mt-4 pt-3 border-t border-emerald-950 w-full flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-emerald-300"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-slate-400">
                  <HelpCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-white">No panchayats found matching "{panchayatSearch}"</p>
                  <p className="text-xs text-slate-400 mt-1">Try searching for Anchal, Kundara, Chavara, Mayyanad, Sasthamcotta, etc.</p>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* 7. 14 DEDICATED TERMITE SERVICES */}
        <section className="py-20 border-b border-emerald-950/80 bg-black/50 backdrop-blur-md" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Complete Service Portfolio</span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Termite & Timber Protection Services in Kollam
              </h2>
              <p className="text-sm text-slate-300">
                Every service is delivered under strict chemical dosing norms, adhering to Indian Standards (IS:6313) with written guarantee certificates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {KOLLAM_DATA.services.map((svc) => (
                <div 
                  key={svc.id}
                  className="p-7 rounded-3xl bg-[#031710]/90 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 shadow-2xl flex flex-col justify-between group backdrop-blur-2xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold bg-black/60 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/60">
                        {svc.warranty}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition">
                      {svc.name}
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium mt-0.5">{svc.tagline}</p>

                    <p className="text-xs text-slate-300 mt-3.5 leading-relaxed">
                      {svc.description}
                    </p>

                    <div className="mt-5 space-y-2 pt-4 border-t border-emerald-950 text-xs">
                      <div className="flex items-start space-x-2 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong className="text-white">Method:</strong> {svc.method}</span>
                      </div>
                      <div className="flex items-start space-x-2 text-slate-200">
                        <Droplet className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                        <span><strong className="text-white">Chemistry:</strong> {svc.chemical}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-emerald-950 flex items-center gap-2.5">
                    <button
                      onClick={() => onOpenLeadModal({ service: svc.name, location: 'Kollam' })}
                      className="flex-1 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded-xl transition text-center shadow-lg"
                    >
                      Enquire Now
                    </button>
                    <button
                      onClick={() => handleWhatsAppClick('kollam_service_card', { service: svc.name, location: 'Kollam' })}
                      className="p-2.5 bg-black/60 hover:bg-emerald-950 text-emerald-400 border border-emerald-900/60 rounded-xl transition"
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

        {/* 8. PRE-CONSTRUCTION VS POST-CONSTRUCTION COMPARISON */}
        <section className="py-20 border-b border-emerald-950/80 bg-black/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Engineering Specifications</span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Pre-Construction vs Post-Construction Termite Treatment
              </h2>
              <p className="text-sm text-slate-300">
                Choose the exact scientific protocol matching your property’s construction lifecycle stage in Kollam.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Pre-Construction Card */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#031710]/95 border border-emerald-400/50 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
                    New Construction Stage
                  </span>
                  <HardHat className="w-6 h-6 text-emerald-400" />
                </div>

                <h3 className="text-xl font-bold text-white">Pre-Construction Soil Barrier (IS 6313)</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Applied in 4 chronological phases during foundation masonry and plinth casting to create an impenetrable chemical envelope.
                </p>

                <div className="mt-6 space-y-3 text-xs">
                  <div className="p-3.5 bg-black/60 rounded-2xl border border-emerald-900/50">
                    <span className="text-emerald-400 font-bold block">Stage 1: Trench Excavation</span>
                    <p className="text-slate-300 mt-0.5">Bottom and vertical sides of foundation trenches treated with 5 Litres/sq.m of emulsion.</p>
                  </div>
                  <div className="p-3.5 bg-black/60 rounded-2xl border border-emerald-900/50">
                    <span className="text-emerald-400 font-bold block">Stage 2: Backfilled Soil</span>
                    <p className="text-slate-300 mt-0.5">Sub-surface soil along retaining walls treated with 7.5 Litres/linear metre.</p>
                  </div>
                  <div className="p-3.5 bg-black/60 rounded-2xl border border-emerald-900/50">
                    <span className="text-emerald-400 font-bold block">Stage 3: Under-Floor Plinth Bed</span>
                    <p className="text-slate-300 mt-0.5">Complete consolidated gravel/sand bed sprayed prior to laying PCC floor slab.</p>
                  </div>
                  <div className="p-3.5 bg-black/60 rounded-2xl border border-emerald-900/50">
                    <span className="text-emerald-400 font-bold block">Stage 4: External Perimeter Rodding</span>
                    <p className="text-slate-300 mt-0.5">Final perimeter trenching along building apron to block horizontal foraging termites.</p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-emerald-950 flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Warranty: 10 Years Certified</span>
                  <button
                    onClick={() => onOpenLeadModal({ service: 'Pre-Construction Termite Treatment', location: 'Kollam' })}
                    className="px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-xs rounded-full transition shadow-lg"
                  >
                    Book Pre-Construction
                  </button>
                </div>
              </div>

              {/* Post-Construction Card */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#031710]/95 border border-emerald-500/30 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-black/60 text-teal-300 text-xs font-bold border border-emerald-800/40">
                    Existing Occupied Homes & Buildings
                  </span>
                  <Building2 className="w-6 h-6 text-teal-400" />
                </div>

                <h3 className="text-xl font-bold text-white">Drill-Fill-Seal Chemical Barrier</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Surgical non-destructive eradication and long-term protection for completed residences without lifting floor tiles.
                </p>

                <div className="mt-6 space-y-3 text-xs">
                  <div className="p-3.5 bg-black/60 rounded-2xl border border-emerald-900/50">
                    <span className="text-teal-400 font-bold block">Step 1: 12mm Precision Micro-Drilling</span>
                    <p className="text-slate-300 mt-0.5">Tiny holes drilled 1 foot apart along inner wall junctions and door frames.</p>
                  </div>
                  <div className="p-3.5 bg-black/60 rounded-2xl border border-emerald-900/50">
                    <span className="text-teal-400 font-bold block">Step 2: Pressurized Chemical Injection</span>
                    <p className="text-slate-300 mt-0.5">Odorless non-repellent termiticide pumped into sub-slab soil to destroy underground colonies.</p>
                  </div>
                  <div className="p-3.5 bg-black/60 rounded-2xl border border-emerald-900/50">
                    <span className="text-teal-400 font-bold block">Step 3: Color-Matched Sealing</span>
                    <p className="text-slate-300 mt-0.5">Holes cleanly sealed with color-matching waterproof epoxy compound leaving no scar.</p>
                  </div>
                  <div className="p-3.5 bg-black/60 rounded-2xl border border-emerald-900/50">
                    <span className="text-teal-400 font-bold block">Step 4: Woodwork & Wardrobe Defense</span>
                    <p className="text-slate-300 mt-0.5">Anti-fungal and borer-inhibiting formulation applied to door jambs and cabinetry backs.</p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-emerald-950 flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Warranty: Up to 5 Years</span>
                  <button
                    onClick={() => onOpenLeadModal({ service: 'Post-Construction Drill-Seal Treatment', location: 'Kollam' })}
                    className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs rounded-full transition shadow-lg"
                  >
                    Book Post-Construction
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 9. 36 AEO / AI SEARCH DIRECT-ANSWER FAQS */}
        <section className="py-20 border-b border-emerald-950/80 bg-black/60 backdrop-blur-md" id="faqs">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center space-y-3 mb-12">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">AEO & AI Search Knowledge Base</span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Frequently Asked Questions About Termite Control in Kollam
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
                Direct, transparent answers to the 36 most common questions about costs, chemicals, procedures, and local coverage in Kollam.
              </p>

              {/* FAQ Search */}
              <div className="relative max-w-md mx-auto pt-3">
                <Search className="w-4 h-4 text-emerald-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  value={faqSearchQuery}
                  onChange={(e) => setFaqSearchQuery(e.target.value)}
                  placeholder="Search questions (e.g. cost, safety, borers, Polayathodu)..."
                  className="w-full bg-[#031911] border border-emerald-500/40 rounded-full pl-11 pr-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-3.5">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div 
                      key={idx}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isOpen 
                          ? 'bg-[#031911] border-emerald-400/60 shadow-2xl' 
                          : 'bg-[#031710]/90 border-emerald-900/50 hover:border-emerald-800 backdrop-blur-xl'
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-emerald-300 transition"
                      >
                        <span className="flex items-center space-x-3">
                          <span className="text-xs font-mono text-emerald-400">Q{idx + 1}.</span>
                          <span>{faq.q}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'transform rotate-180 text-emerald-400' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-emerald-950 pt-3">
                          <div className="p-3.5 bg-black/60 rounded-xl border border-emerald-500/20 text-emerald-200 font-medium mb-2.5">
                            <strong className="text-emerald-400">Direct Answer:</strong> {faq.a.split('.')[0]}.
                          </div>
                          <p className="text-slate-300">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-10 text-slate-400 text-xs">
                  No FAQs matching "{faqSearchQuery}". Try asking about costs, guarantee, or inspection.
                </div>
              )}
            </div>

          </div>
        </section>

        {/* 10. KOLLAM LOCAL OFFICE SPOTLIGHT */}
        <section className="py-20 border-b border-emerald-950/80 bg-black/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#031710]/95 via-[#042017]/95 to-[#031710]/95 border border-emerald-500/40 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
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
                    <div className="p-4 rounded-2xl bg-black/60 border border-emerald-900/50">
                      <span className="text-slate-400 block font-medium">Physical Address:</span>
                      <strong className="text-white block mt-1">{KOLLAM_DATA.brand.officeAddress.line1}</strong>
                      <span className="text-slate-300">{KOLLAM_DATA.brand.officeAddress.city}, Kerala - {KOLLAM_DATA.brand.officeAddress.pincode}</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-black/60 border border-emerald-900/50">
                      <span className="text-slate-400 block font-medium">Service Timings & Helpline:</span>
                      <strong className="text-emerald-400 block mt-1">{KOLLAM_DATA.brand.officeAddress.timing}</strong>
                      <span className="text-white font-bold">Helpline: {PRIMARY_PHONE_DISPLAY}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-black/70 hover:bg-black text-white font-bold text-xs rounded-full border border-emerald-500/40 flex items-center space-x-2 transition"
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
                  <div className="p-7 rounded-3xl bg-black/80 border border-emerald-900/60 text-center space-y-4 shadow-2xl backdrop-blur-md">
                    <div className="inline-flex p-3.5 rounded-full bg-emerald-500/20 text-emerald-400 mb-1">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-base font-bold text-white">Same-Day Site Inspection</h4>
                    <p className="text-xs text-slate-300">
                      Need urgent assessment for swarming termites or damaged woodwork? Our technical squad is ready.
                    </p>
                    <button
                      onClick={() => onOpenInspectionModal()}
                      className="w-full py-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-extrabold text-xs rounded-full shadow-lg transition active:scale-95"
                    >
                      REQUEST INSPECTION NOW
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 11. CUSTOMER REVIEWS */}
        <section className="py-20 border-b border-emerald-950/80 bg-black/60 backdrop-blur-md" id="reviews">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Real Customer Feedback</span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Trusted by Homeowners & Builders in Kollam
              </h2>
              <div className="flex items-center justify-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-200 ml-2">4.8 / 5.0 (1,153+ Ratings)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {KOLLAM_DATA.reviews.map((rev, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-[#031710]/90 border border-emerald-500/30 flex flex-col justify-between shadow-2xl backdrop-blur-xl">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-400">{rev.date}</span>
                    </div>

                    <p className="text-xs text-slate-200 leading-relaxed italic">
                      "{rev.text}"
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-emerald-950">
                    <strong className="text-xs font-bold text-white block">{rev.name}</strong>
                    <span className="text-[11px] text-emerald-400 block">{rev.locality}</span>
                    <span className="text-[10px] text-slate-400">{rev.service}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 12. FINAL HIGH IMPACT CTA */}
        <section className="py-20 bg-gradient-to-b from-black/80 to-[#020b08]/95 text-center relative overflow-hidden backdrop-blur-md">
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
                className="w-full sm:w-auto px-7 py-4 bg-black/70 hover:bg-black text-emerald-400 font-bold text-sm sm:text-base rounded-full border border-emerald-500/40 flex items-center justify-center space-x-2 transition"
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

    </div>
  );
}
