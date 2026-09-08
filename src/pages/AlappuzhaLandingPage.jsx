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
  Volume2,
  VolumeX,
  Hotel,
  Warehouse,
  CheckSquare,
  Layers,
  Compass,
  ArrowUpRight,
  Send
} from 'lucide-react';
import { ALAPPUZHA_DATA } from '../data/alappuzhaData';
import { updateMetaTags } from '../utils/seo';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';
import LeadForm from '../components/LeadForm';
import PrimaryBottomCTA from '../components/PrimaryBottomCTA';

export default function AlappuzhaLandingPage({ onOpenLeadModal, onOpenInspectionModal }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('all');
  const [panchayatSearch, setPanchayatSearch] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    // Generate Schema Graph containing FAQPage, PestControlService, and BreadcrumbList
    const faqSchemaList = ALAPPUZHA_DATA.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }));

    updateMetaTags({
      title: ALAPPUZHA_DATA.meta.title,
      description: ALAPPUZHA_DATA.meta.description,
      keywords: ALAPPUZHA_DATA.meta.keywords,
      canonicalUrl: "https://termitecontrol.me/termite-control-alappuzha",
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "PestControlService",
            "@id": "https://termitecontrol.me/termite-control-alappuzha#service",
            "name": "TermiteControl.me - Alappuzha District Central Division",
            "parentOrganization": {
              "@type": "Organization",
              "name": "Eco Pest India"
            },
            "url": "https://termitecontrol.me/termite-control-alappuzha",
            "telephone": "+91-9020040009",
            "image": "https://termitecontrol.me/images/alappuzha-hero-backwater.jpg",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "name": "Eco Pest India - Alappuzha District Office",
              "streetAddress": "Alappuzha District Central Dispatch",
              "addressLocality": "Alappuzha",
              "addressRegion": "Kerala",
              "postalCode": "688001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "9.4981",
              "longitude": "76.3388"
            },
            "areaServed": [
              "Alappuzha", "Cherthala", "Chengannur", "Kayamkulam", "Mavelikara", "Harippad",
              "Kuttanad", "Kainakary", "Champakkulam", "Edathua", "Nedumudi", "Aroor", "Mararikkulam",
              "Ambalappuzha", "Punnapra", "Thanneermukkam", "Muhamma", "Mannanchery"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1153",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Alappuzha Termite Control & Wood Preservation Solutions",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Termite Control Alappuzha" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Anti Termite Treatment Alappuzha" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pre Construction Termite Treatment Alappuzha" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Post Construction Termite Treatment Alappuzha" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Waterfront Villa Termite Protection Alappuzha" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kuttanad Backwater Home Termite Defense" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wood Borer Treatment Alappuzha" } }
              ]
            }
          },
          {
            "@type": "FAQPage",
            "@id": "https://termitecontrol.me/termite-control-alappuzha#faq",
            "mainEntity": faqSchemaList
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://termitecontrol.me/termite-control-alappuzha#breadcrumb",
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
                "name": "Kerala Pest Control",
                "item": "https://termitecontrol.me/#locations"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Termite Control Alappuzha",
                "item": "https://termitecontrol.me/termite-control-alappuzha"
              }
            ]
          }
        ]
      }
    });
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const handlePlayAudio = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        window.speechSynthesis.cancel();
        const text = "Welcome to Termite Control Alappuzha by Eco Pest India. Protecting What You've Built. We provide specialized anti-termite treatment, pre-construction soil barriers, and subterranean colony eradication for waterfront villas, Kuttanad homes, backwater resorts, and commercial buildings across all 6 municipalities, 12 blocks, and 72 panchayats in Alappuzha district. Call us at 9020040009 for a professional on-site inspection.";
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        utterance.pitch = 1.0;
        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        setIsPlayingAudio(true);
        window.speechSynthesis.speak(utterance);
      }
    } else {
      alert("Audio playback: Call 9020040009 for direct assistance.");
    }
  };

  // Filtered FAQs
  const filteredFaqs = ALAPPUZHA_DATA.faqs.filter(faq => 
    faq.q.toLowerCase().includes(faqSearchQuery.toLowerCase()) || 
    faq.a.toLowerCase().includes(faqSearchQuery.toLowerCase())
  );

  // Filtered Panchayats for Explorer
  const allPanchayats = ALAPPUZHA_DATA.blocks.flatMap(b => 
    b.panchayats.map(p => ({ ...p, blockName: b.name, blockSlug: b.slug }))
  );

  const filteredPanchayats = allPanchayats.filter(p => {
    const matchesBlock = selectedBlock === 'all' || p.blockSlug === selectedBlock;
    const matchesSearch = p.name.toLowerCase().includes(panchayatSearch.toLowerCase()) ||
                          p.desc.toLowerCase().includes(panchayatSearch.toLowerCase()) ||
                          p.blockName.toLowerCase().includes(panchayatSearch.toLowerCase());
    return matchesBlock && matchesSearch;
  });

  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen font-sans selection:bg-emerald-800 selection:text-white">
      
      {/* 1. HERO SECTION (Cinematic Backwater Sunset & Luxury Waterfront Villa Aesthetic) */}
      <section className="relative overflow-hidden bg-[#051F16] text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-emerald-950">
        
        {/* Cinematic Backdrop Image with Deep Architectural Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/alappuzha-hero-backwater.jpg" 
            alt="Termite Control in Alappuzha - Luxury Waterfront Villa and Backwaters" 
            className="w-full h-full object-cover object-center opacity-40 filter contrast-105"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051F16] via-[#051F16]/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#051F16] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 mb-6 text-xs">
            <a href="/" className="text-emerald-300/80 hover:text-white transition">Home</a>
            <span className="text-emerald-700">/</span>
            <a href="/#locations" className="text-emerald-300/80 hover:text-white transition">Kerala Service Hub</a>
            <span className="text-emerald-700">/</span>
            <span className="text-amber-300 font-semibold tracking-wide">Alappuzha District</span>
            <span className="ml-auto inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-900/60 backdrop-blur-md border border-emerald-500/30 text-emerald-200 text-[11px] font-medium">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Covering All 6 Municipalities & 72 Panchayats</span>
            </span>
          </nav>

          <div className="max-w-3xl space-y-5 text-left">
            
            {/* Brand Eyebrow Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>TERMITEControl.me • Alappuzha District</span>
            </div>

            {/* Primary Tagline */}
            <h2 className="text-amber-400 font-serif italic text-xl sm:text-2xl font-normal tracking-wide">
              Protecting What You’ve Built.
            </h2>

            {/* Strict Single H1 Tag */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Termite Control in Alappuzha, Kerala
            </h1>

            {/* Hero Copy (Minimal, Elegant, Architectural) */}
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
              Professional termite inspection, treatment and prevention solutions across Alappuzha District, Kerala. Designed around coastal soil dynamics, high water tables, and high-value timber structures.
            </p>

            {/* CTA Buttons Row */}
            <div className="pt-3 flex flex-wrap gap-3.5 items-center">
              <button
                onClick={() => onOpenInspectionModal()}
                className="px-7 py-3.5 rounded-xl bg-[#C69C3D] hover:bg-[#b58c32] active:bg-[#a37c2b] text-slate-950 font-extrabold text-sm sm:text-base shadow-xl transition transform active:scale-95 flex items-center space-x-2"
              >
                <CalendarIcon className="w-4 h-4" />
                <span>BOOK A TERMITE INSPECTION</span>
              </button>

              <button
                onClick={() => handlePhoneClick('alappuzha_hero_call')}
                className="px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-xl transition flex items-center space-x-2 border border-emerald-600/50"
              >
                <Phone className="w-4 h-4" />
                <span>CALL {PRIMARY_PHONE_DISPLAY}</span>
              </button>

              <button
                onClick={() => handleWhatsAppClick('alappuzha_hero_whatsapp', { location: 'Alappuzha District' })}
                className="px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/10 text-emerald-300 border border-[#25D366] font-bold text-sm sm:text-base shadow-lg transition flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
                <span>WHATSAPP US</span>
              </button>
            </div>

            {/* Tap to Play Audio Button */}
            <div className="pt-2">
              <button
                onClick={handlePlayAudio}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-amber-300 border border-amber-400/30 text-xs font-semibold transition"
              >
                {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5 text-amber-400" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />}
                <span>{isPlayingAudio ? "Stop Audio Introduction" : "🔊 Tap here to play audio introduction"}</span>
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* 2. FIVE ARCHITECTURAL PILLARS (Clean Floating Strip) */}
      <section className="bg-white py-6 border-b border-slate-200 shadow-sm relative -mt-4 max-w-6xl mx-auto rounded-2xl z-20 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          
          <div className="p-2 space-y-1">
            <div className="w-10 h-10 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
              <Shield className="w-5 h-5" />
            </div>
            <p className="font-bold text-xs text-slate-900">Advanced Technology</p>
            <p className="text-[10px] text-slate-500">Odorless Transfer Chemistry</p>
          </div>

          <div className="p-2 space-y-1">
            <div className="w-10 h-10 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
              <Clock className="w-5 h-5" />
            </div>
            <p className="font-bold text-xs text-slate-900">Long Lasting Protection</p>
            <p className="text-[10px] text-slate-500">Up to 10 Years Warranty</p>
          </div>

          <div className="p-2 space-y-1">
            <div className="w-10 h-10 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="font-bold text-xs text-slate-900">Family & Pet Safe</p>
            <p className="text-[10px] text-slate-500">Zero Evacuation Required</p>
          </div>

          <div className="p-2 space-y-1">
            <div className="w-10 h-10 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
              <Award className="w-5 h-5" />
            </div>
            <p className="font-bold text-xs text-slate-900">Certified Technicians</p>
            <p className="text-[10px] text-slate-500">IS:6313 Standard Protocol</p>
          </div>

          <div className="p-2 space-y-1 col-span-2 sm:col-span-1">
            <div className="w-10 h-10 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
              <Building2 className="w-5 h-5" />
            </div>
            <p className="font-bold text-xs text-slate-900">Residential & Commercial</p>
            <p className="text-[10px] text-slate-500">Homes, Villas & Resorts</p>
          </div>

        </div>
      </section>

      {/* 3. SECTION 02: THE PROBLEM ("Termites Work Quietly.") */}
      <section className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Creative Poster Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-300/80 bg-white group">
                <img 
                  src="/images/alappuzha-structure-protection.jpg" 
                  alt="Termite Management - Protecting Structures from the Ground Up" 
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Architectural Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <span>The Invisible Threat</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C3B2E] tracking-tight leading-tight">
                Termites Work Quietly.
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Termites can remain hidden while gradually affecting wooden elements and structural components of a property. In Alappuzha’s coastal terrain and Kuttanad backwaters, subterranean colonies thrive beneath the high water table, feeding on door frames, roof trusses, and modular kitchens undetected.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    01
                  </div>
                  <h3 className="font-serif font-bold text-slate-900 text-base">Early Inspection</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Identify hidden subterranean entry paths and acoustic nesting before structural timber fails.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    02
                  </div>
                  <h3 className="font-serif font-bold text-slate-900 text-base">Professional Treatment</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Non-repellent transfer chemistry injected into foundations to permanently eradicate the queen.</p>
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-4">
                <button
                  onClick={() => onOpenInspectionModal()}
                  className="px-6 py-3 rounded-xl bg-[#0C3B2E] hover:bg-[#08281f] text-white font-bold text-sm shadow-md transition"
                >
                  Schedule Ground-Up Assessment
                </button>
                <button
                  onClick={() => handleWhatsAppClick('alappuzha_problem_whatsapp', { problem: 'Suspected termite damage in wood' })}
                  className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-md transition flex items-center space-x-1.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Photos for Diagnosis</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. SECTION 03: OUR SERVICES ("Protection, Precisely Delivered.") */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C3B2E] tracking-tight">
              Protection, Precisely Delivered.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Conforming to Indian Standard IS:6313 specifications for residential villas, commercial establishments, and pre-construction projects across Alappuzha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ALAPPUZHA_DATA.services.slice(0, 6).map((svc) => (
              <div 
                key={svc.id}
                className="bg-[#FAF9F6] rounded-3xl p-6 border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase text-emerald-800 tracking-wider bg-emerald-100 px-2.5 py-1 rounded-full">
                      IS:6313 Standard
                    </span>
                    <span className="text-xs font-bold text-amber-700">{svc.warranty}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-1 group-hover:text-[#0C3B2E] transition">
                    {svc.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mb-2.5">
                    {svc.tagline}
                  </p>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {svc.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-200/60 mb-4">
                    {svc.benefits.map((b, i) => (
                      <div key={i} className="flex items-start text-xs text-slate-700 space-x-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium truncate max-w-[170px]">
                    {svc.propertyFit}
                  </span>
                  <button
                    onClick={() => onOpenLeadModal({ service: `${svc.title} - Alappuzha` })}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#0C3B2E] hover:bg-[#08281f] text-white text-xs font-bold shadow transition"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SECTION 04: "Built for Kerala Homes." */}
      <section className="py-16 sm:py-20 bg-[#F4F1EA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                <span>Architecture-Specific Engineering</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C3B2E] tracking-tight leading-tight">
                Built for Kerala Homes.
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                From contemporary waterfront villas and luxury homestays in Marari to traditional wooden tharavads in Mavelikara and Kuttanad, our termite-control solutions are designed around the property, its construction type, and its coastal environment.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Teak Door Frames & Skirting Preservation</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Micro-injection along floor-wall joints avoids tile breaking while treating the subterranean entry roots.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Modular Kitchen & Wardrobe Defense</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Treating the wall-plywood interface where sink moisture creates the primary subterranean termite attraction.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">High Water Table Foundation Shields</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Specially formulated non-leaching termiticides that remain tightly bound to the soil even in water-rich Kuttanad terrain.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-300">
                <img 
                  src="/images/pest13.jpg" 
                  alt="Luxury Modern Villa in Alappuzha" 
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-3 bg-white text-center">
                  <p className="font-serif font-bold text-xs text-[#0C3B2E]">Modern Waterfront Villas</p>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-300">
                <img 
                  src="/images/pest4.jpg" 
                  alt="Traditional Kerala Residential Architecture" 
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-3 bg-white text-center">
                  <p className="font-serif font-bold text-xs text-[#0C3B2E]">Traditional Kerala Homes</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. SECTION 05: "Alappuzha. Our Home Ground." (Interactive Hierarchy Explorer) */}
      <section id="service-areas" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-emerald-700" />
              <span>Complete District Service Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C3B2E] tracking-tight">
              Alappuzha. Our Home Ground.
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Serving homes, villas, commercial spaces, and construction projects across 6 Municipalities, 12 Block Panchayats, and 72 Grama Panchayats.
            </p>
          </div>

          {/* 6 Municipalities Cards */}
          <div className="mb-12">
            <h3 className="text-sm font-mono font-bold uppercase text-slate-500 tracking-wider mb-4 text-center">
              — 6 Major Municipalities —
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {ALAPPUZHA_DATA.municipalities.map((muni) => (
                <div 
                  key={muni.id}
                  className="bg-[#FAF9F6] p-5 rounded-2xl border border-slate-200 hover:border-emerald-400 shadow-sm hover:shadow-md transition-all space-y-2.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-lg text-[#0C3B2E]">{muni.name}</h4>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded uppercase">Municipality</span>
                    </div>
                    <p className="text-xs font-semibold text-amber-800 mt-0.5">{muni.tagline}</p>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{muni.description}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 truncate max-w-[160px]">
                      {muni.prominentAreas.slice(0, 2).join(', ')}...
                    </span>
                    <button
                      onClick={() => onOpenLeadModal({ location: `${muni.name} Municipality`, service: "Termite Inspection" })}
                      className="text-xs text-emerald-700 hover:text-emerald-900 font-bold flex items-center space-x-1"
                    >
                      <span>Book Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 12 Block Panchayats & 72 Grama Panchayats Explorer */}
          <div className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#0C3B2E]">
                  12 Block Panchayats & 72 Grama Panchayats Directory
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Filter by block or search your local panchayat for instant technician dispatch.</p>
              </div>

              {/* Live Search Input */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search 72 Panchayats..."
                  value={panchayatSearch}
                  onChange={(e) => setPanchayatSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Block Filter Buttons */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              <button
                onClick={() => setSelectedBlock('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${selectedBlock === 'all' ? 'bg-[#0C3B2E] text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}`}
              >
                All 12 Blocks ({allPanchayats.length})
              </button>
              {ALAPPUZHA_DATA.blocks.map(b => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBlock(b.slug)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${selectedBlock === b.slug ? 'bg-[#0C3B2E] text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}`}
                >
                  {b.name.replace(' Block', '')} ({b.panchayatsCount})
                </button>
              ))}
            </div>

            {/* Panchayats Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-1">
              {filteredPanchayats.map((p, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-emerald-400 transition shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-slate-900">{p.name}</h4>
                      <span className="text-[10px] text-slate-400 font-mono">{p.blockName.replace(' Block', '')}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">{p.desc}</p>
                  </div>
                  <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-emerald-700 font-semibold">Active Service Coverage</span>
                    <button
                      onClick={() => onOpenLeadModal({ location: `${p.name} (${p.blockName})`, service: "Termite Control" })}
                      className="text-[10px] text-slate-700 hover:text-emerald-800 font-bold underline"
                    >
                      Book Inspection
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600">
              <span>Need same-day on-site inspection in your Alappuzha village or ward?</span>
              <button
                onClick={() => handlePhoneClick('alappuzha_directory_call')}
                className="mt-2 sm:mt-0 font-bold text-emerald-800 hover:underline flex items-center space-x-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Central Coordinator: 9020040009</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 7. SECTION 06: "Professional by Process." (01 Inspect, 02 Treat, 03 Protect) */}
      <section className="py-16 bg-[#FAF9F6] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C3B2E] tracking-tight">
              Professional by Process.
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Clear, disciplined, and engineered for permanent termite colony elimination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-serif font-bold text-xl flex items-center justify-center">
                01
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-900">INSPECT</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Understand the property, identify subterranean mud tubes, moisture leaks, timber hollows, and determine the exact entry pathways.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-serif font-bold text-xl flex items-center justify-center">
                02
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-900">TREAT</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Apply appropriate non-repellent chemical barriers through precision 6mm drill-inject-seal or stage-wise pre-construction soil spraying.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-serif font-bold text-xl flex items-center justify-center">
                03
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-900">PROTECT</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Provide official written warranty certificates (up to 10 years) and periodic inspection guidance to safeguard what you've built.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 8. SECTION 07: "For Every Property Worth Protecting." (4-Image Layout) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C3B2E] tracking-tight">
              For Every Property Worth Protecting.
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Customized treatment protocols matched to architectural scale and building use.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* 1. HOME */}
            <div className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between group">
              <div className="h-44 overflow-hidden">
                <img 
                  src="/images/pest4.jpg" 
                  alt="Residential Homes & Apartments" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif font-bold text-lg text-[#0C3B2E]">HOME</h3>
                <p className="text-xs text-slate-600 mt-1">Residential homes, villas, tharavads & apartments.</p>
              </div>
            </div>

            {/* 2. BUSINESS */}
            <div className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between group">
              <div className="h-44 overflow-hidden">
                <img 
                  src="/images/pest5.jpg" 
                  alt="Commercial Properties & Offices" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif font-bold text-lg text-[#0C3B2E]">BUSINESS</h3>
                <p className="text-xs text-slate-600 mt-1">Offices, retail showrooms, coir units & godowns.</p>
              </div>
            </div>

            {/* 3. RESORT / HOSPITALITY */}
            <div className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between group">
              <div className="h-44 overflow-hidden">
                <img 
                  src="/images/pest6.jpg" 
                  alt="Waterfront Resorts & Backwater Homestays" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif font-bold text-lg text-[#0C3B2E]">HOSPITALITY</h3>
                <p className="text-xs text-slate-600 mt-1">Backwater eco-resorts, homestays & cottages.</p>
              </div>
            </div>

            {/* 4. NEW BUILD */}
            <div className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between group">
              <div className="h-44 overflow-hidden">
                <img 
                  src="/images/pre-construction.jpg" 
                  alt="Pre-Construction Foundation Protection" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif font-bold text-lg text-[#0C3B2E]">NEW BUILD</h3>
                <p className="text-xs text-slate-600 mt-1">Pre-construction IS:6313 stage-wise soil barriers.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. SECTION 08: "Why TermiteControl.me" (Genuine Trust Factors) */}
      <section className="py-16 bg-[#FAF9F6] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C3B2E] tracking-tight">
              Why TermiteControl.me
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Specialized pest engineering, transparent service, and genuine local accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Local Expertise</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Alappuzha-focused service coverage understanding sandy coastal soils, Kuttanad water tables, and inland laterite profiles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-sm">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Professional Inspection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Property-specific assessment before treatment to locate hidden mud tunnels and assess timber vulnerability without guesswork.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Complete Protection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full lifecycle solutions combining active colony eradication, chemical barriers, wood borer syringes, and post-treatment warranties.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-sm">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Clear Communication</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Simple recommendations, transparent per-square-foot quotes, and fast coordination over phone or WhatsApp.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 10. SECTION 09: ALAPPUZHA VISUAL STORY & CLIMATE DEFENSE */}
      <section className="py-16 sm:py-20 bg-[#051F16] text-white border-b border-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
                <span>Born in Kerala. Built for Protection.</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                Alappuzha’s High-Humidity Environment Demands Specialized Chemistry.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Alappuzha's unique geography — spanning coastal sands in Purakkad and Marari, fertile alluvium in Kuttanad below sea level, and river basins in Chengannur and Mavelikara — creates continuous underground moisture.
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Conventional pest sprays wash away with groundwater movement. Our certified non-repellent termiticides bind electrostatically to soil particles, creating a permanent, resilient barrier that subterranean termites cannot detect or bypass.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => handlePhoneClick('alappuzha_story_call')}
                  className="px-6 py-3 rounded-xl bg-[#C69C3D] hover:bg-[#b58c32] text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg transition flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 9020040009</span>
                </button>

                <button
                  onClick={() => handleWhatsAppClick('alappuzha_story_whatsapp', { location: 'Alappuzha Backwater/Coastal Property' })}
                  className="px-5 py-3 rounded-xl bg-transparent hover:bg-white/10 text-emerald-300 border border-[#25D366] font-bold text-xs sm:text-sm transition flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
                  <span>WhatsApp Specialist</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-emerald-800/40 shadow-2xl relative group">
                <img 
                  src="/images/alappuzha-hero-backwater.jpg" 
                  alt="Termite Control Across Alappuzha District Kerala" 
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051F16] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-white/10 text-xs text-slate-200">
                  <p className="font-serif font-bold text-white text-sm">Alappuzha District Rapid Response</p>
                  <p className="text-emerald-300 text-[11px] mt-0.5">Mobile technical teams dispatched across all 6 municipalities and 12 blocks daily.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 11. JUSTDIAL VERIFIED REVIEWS & RATINGS (4.8 ★ / 1,153+ RATINGS) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
              <span>Customer Trust & Social Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C3B2E] tracking-tight">
              Rated 4.8 / 5.0 on Justdial (1,153+ Ratings)
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Read authentic experiences from homeowners, luxury villa owners, and businesses who trust Eco Pest India across Kerala.
            </p>
            
            <div className="mt-3 inline-flex items-center space-x-2 bg-[#FAF9F6] px-4 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-800">
              <span className="text-amber-500 font-bold">★★★★★</span>
              <span>4.8 Rating on Justdial</span>
              <a 
                href={ALAPPUZHA_DATA.brand.justdialUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-700 hover:text-emerald-800 underline inline-flex items-center ml-2 font-bold"
              >
                <span>View Justdial Profile</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ALAPPUZHA_DATA.testimonials.map((r, idx) => (
              <div key={idx} className="bg-[#FAF9F6] p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                      {r.location}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 italic leading-relaxed mb-4">
                    "{r.review}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900 text-xs">{r.author}</p>
                    <p className="text-[10px] text-slate-500">{r.property}</p>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-bold">Verified Service</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. SECTION 11: 36 AEO FREQUENTLY ASKED QUESTIONS */}
      <section id="faqs" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
              <span>Direct Answer Engine Optimization (AEO)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C3B2E] tracking-tight">
              Frequently Asked Questions (36 FAQs)
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Clear, expert answers regarding termite biology, treatment methods, costs, warranties, and local service coverage in Alappuzha.
            </p>
          </div>

          {/* Quick FAQ Search Filter Bar */}
          <div className="mb-6 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search across all 36 FAQs..."
                value={faqSearchQuery}
                onChange={(e) => setFaqSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white shadow-xs"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-emerald-300 shadow-md ring-1 ring-emerald-200' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between space-x-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-serif font-bold text-slate-900 pr-2">
                      {index + 1}. {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? 'bg-emerald-100 text-emerald-700 rotate-180' : 'bg-slate-100 text-slate-600'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 13. INTERNAL LINKING TO OTHER KERALA DISTRICTS */}
      <section className="py-10 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
            Explore Termite Control in Neighboring Kerala Districts:
          </p>
          <div className="flex flex-wrap gap-2 justify-center text-xs">
            <a href="/" className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 font-semibold shadow-sm transition">
              Termite Control Kerala (Home)
            </a>
            <a href="/termite-control-pathanamthitta" className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 font-semibold shadow-sm transition">
              Termite Control Pathanamthitta
            </a>
            <a href="/termite-control-thrissur" className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 font-semibold shadow-sm transition">
              Termite Control Thrissur
            </a>
            <a href="/termite-control-palakkad" className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 font-semibold shadow-sm transition">
              Termite Control Palakkad
            </a>
            <a href="/termite-control-kozhikode" className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 font-semibold shadow-sm transition">
              Termite Control Kozhikode
            </a>
            <a href="/termite-control/ernakulam" className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 font-semibold shadow-sm transition">
              Termite Control Kochi / Ernakulam
            </a>
            <a href="/termite-control/kottayam" className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 font-semibold shadow-sm transition">
              Termite Control Kottayam
            </a>
            <a href="/termite-control/kollam" className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 font-semibold shadow-sm transition">
              Termite Control Kollam
            </a>
            <a href="/termite-control/thiruvananthapuram" className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 font-semibold shadow-sm transition">
              Termite Control Thiruvananthapuram
            </a>
          </div>
        </div>
      </section>

      {/* 14. FINAL CLOSING CTA ("Protect What You've Built.") */}
      <section className="relative py-16 sm:py-20 bg-[#051F16] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/alappuzha-hero-backwater.jpg" 
            alt="Protect What You've Built in Alappuzha" 
            className="w-full h-full object-cover object-center opacity-20 filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051F16] via-[#051F16]/95 to-[#051F16]/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Protect What You’ve Built.
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto">
            Professional termite inspection and treatment across Alappuzha District, Kerala. Fast dispatch, odorless chemistry, and up to 10 years written warranty.
          </p>

          <p className="text-2xl sm:text-3xl font-mono font-bold text-amber-400">
            {PRIMARY_PHONE_DISPLAY}
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handlePhoneClick('alappuzha_final_call')}
              className="px-8 py-4 rounded-xl bg-[#C69C3D] hover:bg-[#b58c32] text-slate-950 font-extrabold text-sm sm:text-base shadow-xl transition flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>CALL NOW</span>
            </button>

            <button
              onClick={() => onOpenInspectionModal()}
              className="px-8 py-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-xl transition flex items-center space-x-2 border border-emerald-500/40"
            >
              <CalendarIcon className="w-5 h-5" />
              <span>BOOK INSPECTION</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
      <line x1="16" x2="16" y1="2" y2="6"/>
      <line x1="8" x2="8" y1="2" y2="6"/>
      <line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
  );
}
