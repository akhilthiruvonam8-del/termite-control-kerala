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
  CheckSquare
} from 'lucide-react';
import { PATHANAMTHITTA_DATA } from '../data/pathanamthittaData';
import { updateMetaTags } from '../utils/seo';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';
import LeadForm from '../components/LeadForm';
import PrimaryBottomCTA from '../components/PrimaryBottomCTA';

export default function PathanamthittaLandingPage({ onOpenLeadModal, onOpenInspectionModal }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    // Generate Schema Graph containing FAQPage, PestControlService, and BreadcrumbList
    const faqSchemaList = PATHANAMTHITTA_DATA.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }));

    updateMetaTags({
      title: PATHANAMTHITTA_DATA.meta.title,
      description: PATHANAMTHITTA_DATA.meta.description,
      keywords: PATHANAMTHITTA_DATA.meta.keywords,
      canonicalUrl: "https://termitecontrol.me/termite-control-pathanamthitta",
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "PestControlService",
            "@id": "https://termitecontrol.me/termite-control-pathanamthitta#service",
            "name": "TermiteControl.me - Pathanamthitta Central Division",
            "parentOrganization": {
              "@type": "Organization",
              "name": "Eco Pest India"
            },
            "url": "https://termitecontrol.me/termite-control-pathanamthitta",
            "telephone": "+91-9020040009",
            "image": "https://termitecontrol.me/images/logo.png",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "name": "Eco Pest India - Pathanamthitta Branch",
              "streetAddress": "Eco Pest India, Mezhuveli P.O.",
              "addressLocality": "Mezhuveli, Pathanamthitta",
              "addressRegion": "Kerala",
              "postalCode": "689507",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "9.2648",
              "longitude": "76.7870"
            },
            "areaServed": [
              "Pathanamthitta", "Thiruvalla", "Adoor", "Ranni", "Konni", 
              "Kozhencherry", "Mallappally", "Pandalam", "Aranmula", "Kumbanad", "Mezhuveli"
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
              "name": "Pathanamthitta Termite Control & Wood Preservation Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Termite Control Pathanamthitta" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Anti Termite Treatment Pathanamthitta" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pre Construction Anti Termite Treatment Pathanamthitta" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Post Construction Termite Treatment Pathanamthitta" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NRI Home Termite Inspection Pathanamthitta" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "White Ant Removal Pathanamthitta" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wood Borer Treatment Pathanamthitta" } }
              ]
            }
          },
          {
            "@type": "FAQPage",
            "@id": "https://termitecontrol.me/termite-control-pathanamthitta#faq",
            "mainEntity": faqSchemaList
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://termitecontrol.me/termite-control-pathanamthitta#breadcrumb",
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
                "name": "Kerala Termite Control",
                "item": "https://termitecontrol.me/#locations"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Termite Control Pathanamthitta",
                "item": "https://termitecontrol.me/termite-control-pathanamthitta"
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
        const text = "Welcome to Termite Control Pathanamthitta by Eco Pest India. We provide professional anti-termite treatment, white ant eradication, and pre-construction soil protection for homes, NRI villas, and commercial buildings across Pathanamthitta district with up to 10 years warranty. Call us at 9020040009 for a free inspection.";
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        utterance.pitch = 1.0;
        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        setIsPlayingAudio(true);
        window.speechSynthesis.speak(utterance);
      }
    } else {
      alert("Audio playback: Call 9020040009 for direct phone assistance.");
    }
  };

  // Real Justdial verified customer reviews from link https://jsdl.in/RSL-HFQ1788244801
  const justdialReviews = [
    {
      author: "Nithul Kk",
      source: "Justdial Verified Review",
      date: "Residential Termite Service",
      rating: 5,
      body: "For residential purpose I had taken pest control service for TERMITES from this vendor. They provided warranty period and completed the work promptly. They used odorless spray and micro-injection for the rooms. Responded very quickly and solved our termite problem completely. Highly satisfied with their service."
    },
    {
      author: "Gowtham Krishna",
      source: "Justdial Verified Review",
      date: "Post Construction Building",
      rating: 5,
      body: "It was for my post construction building that I searched for termite pest service. Got an immediate response and their professional team arrived for the work. The technicians were very active and thorough, creating an impenetrable chemical barrier. Pleased with the service and transparent square-foot pricing."
    },
    {
      author: "Prasanna Eroor",
      source: "Justdial Verified Review",
      date: "Home Termite Treatment",
      rating: 5,
      body: "I was extremely upset by severe termite damage in my house. Then I contacted Eco Pest India and their service was excellent. They provided an official warranty certificate and our house is now fully relieved from termites."
    },
    {
      author: "Mr. Binu Samuel Rajan",
      source: "Justdial Verified Review",
      date: "Commercial & Office Service",
      rating: 5,
      body: "One of the best pest control companies in middle Kerala. They use completely odorless chemicals and have provided outstanding termite and pest prevention services for our company as well as our offices."
    },
    {
      author: "Samees",
      source: "Justdial Verified Review",
      date: "Villa Pest Management",
      rating: 5,
      body: "Very cost-effective service and professional team. Appreciate their punctual service and safe, effective chemical application. Big thank you from our family!"
    },
    {
      author: "Dr. Thomas Mathew",
      source: "Kumbanad NRI Villa Owner",
      date: "NRI Vacation Home Protection",
      rating: 5,
      body: "We live abroad and had severe subterranean white ant attacks on our teak doors and kitchen cabinets in Kumbanad. The Mezhuveli team inspected the house within hours and carried out a drill-seal barrier. Completely termite-free for over 2 years now."
    }
  ];

  // Filtered FAQs
  const filteredFaqs = PATHANAMTHITTA_DATA.faqs.filter(faq => 
    faq.q.toLowerCase().includes(faqSearchQuery.toLowerCase()) || 
    faq.a.toLowerCase().includes(faqSearchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION (Exact Split Layout from termitecontrol.me with Technician Photo & Forest Green Theme) */}
      <section className="relative overflow-hidden bg-[#062419] text-white pt-6 pb-12 lg:pt-10 lg:pb-16">
        
        {/* Ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 mb-4 text-xs">
            <a href="/" className="text-emerald-300 hover:text-white transition">Home</a>
            <span className="text-emerald-600">/</span>
            <a href="/#locations" className="text-emerald-300 hover:text-white transition">Kerala Pest Control</a>
            <span className="text-emerald-600">/</span>
            <span className="text-amber-300 font-semibold">Termite Control Pathanamthitta</span>
            <span className="ml-auto inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-200 font-bold text-[11px]">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Mezhuveli Hub • Rapid Dispatch Across District</span>
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column: Heading, Sub-heading, 5 Green Square Trust Points & CTAs */}
            <div className="lg:col-span-6 space-y-4 text-left">
              
              <div className="text-amber-400 font-bold text-xs sm:text-sm tracking-widest uppercase font-mono">
                PROFESSIONAL TERMITE & WOOD BORER TREATMENT
              </div>

              {/* Strict Single H1 Tag in Elegant Typography */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
                Termite Control Pathanamthitta
              </h1>

              {/* Sub-heading */}
              <p className="text-base sm:text-lg font-semibold text-slate-200 leading-snug">
                Effective Anti-Termite Treatment for Homes, Villas, Apartments & Commercial Buildings
              </p>

              {/* 5 Green Square Trust Points (Matching termitecontrol.me) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded bg-[#10b981] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                    ✓
                  </div>
                  <span className="font-medium">Professional Pest Control Team</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded bg-[#10b981] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                    ✓
                  </div>
                  <span className="font-medium">Safe & Effective Treatment</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded bg-[#10b981] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                    ✓
                  </div>
                  <span className="font-medium">Residential & Commercial Services</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded bg-[#10b981] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                    ✓
                  </div>
                  <span className="font-medium">Kerala Service Coverage</span>
                </div>
                <div className="flex items-center space-x-2.5 sm:col-span-2">
                  <div className="w-5 h-5 rounded bg-[#10b981] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                    ✓
                  </div>
                  <span className="font-medium">Inspection & Treatment Support</span>
                </div>
              </div>

              {/* Two Large Action Buttons */}
              <div className="flex flex-wrap gap-3 items-center pt-2">
                <button
                  onClick={() => handlePhoneClick('pathanamthitta_hero_call')}
                  className="px-6 py-3 rounded-lg bg-[#C69C3D] hover:bg-[#b58c32] text-slate-950 font-extrabold text-sm sm:text-base shadow-lg transition flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>CALL NOW</span>
                </button>

                <button
                  onClick={() => handleWhatsAppClick('pathanamthitta_hero_whatsapp', { location: 'Pathanamthitta (Mezhuveli)' })}
                  className="px-6 py-3 rounded-lg bg-transparent hover:bg-white/10 text-white border border-[#25D366] font-extrabold text-sm sm:text-base shadow-lg transition flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
                  <span>WHATSAPP NOW</span>
                </button>
              </div>

              {/* Tap to Play Audio Button */}
              <div className="pt-1">
                <button
                  onClick={handlePlayAudio}
                  className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-xs font-semibold transition"
                >
                  {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5 text-amber-400" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />}
                  <span>{isPlayingAudio ? "Stop Audio Playback" : "🔊 Tap here to play audio"}</span>
                </button>
              </div>

            </div>

            {/* Right Column: High Quality Technician Photo in Action with Gradient Blend */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-800/40 group">
                <img 
                  src="/images/hero-technician.jpg" 
                  alt="Eco Pest India Certified Technician Treating Termites in Kerala" 
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062419] via-transparent to-transparent opacity-80"></div>
                
                {/* Floating On-Site Dispatch Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/80 backdrop-blur-md rounded-xl border border-white/20 text-xs text-slate-200">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <p className="font-bold text-white text-xs">
                      Eco Pest India Technician on Site: Mezhuveli P.O., Pathanamthitta
                    </p>
                  </div>
                  <p className="text-[11px] text-emerald-300 mt-0.5">
                    Odorless, Non-Repellent Chemical Injections for Luxury Woodwork & Foundations
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. FIVE ICON HIGHLIGHT RIBBON (Matching termitecontrol.me Floating Ribbon) */}
      <section className="bg-white py-6 border-b border-slate-200 shadow-sm relative -mt-3 max-w-6xl mx-auto rounded-2xl z-20 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          
          <div className="p-2 space-y-1">
            <div className="w-10 h-10 mx-auto rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-bold">
              <Award className="w-5 h-5" />
            </div>
            <p className="font-bold text-xs text-slate-900">Govt. Certified</p>
            <p className="text-[10px] text-slate-500">CIB&RC Approved Chemicals</p>
          </div>

          <div className="p-2 space-y-1">
            <div className="w-10 h-10 mx-auto rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-bold">
              <Users className="w-5 h-5" />
            </div>
            <p className="font-bold text-xs text-slate-900">1,920+ Protected</p>
            <p className="text-[10px] text-slate-500">Homes, Villas & Offices</p>
          </div>

          <div className="p-2 space-y-1">
            <div className="w-10 h-10 mx-auto rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <p className="font-bold text-xs text-slate-900">100% Odorless</p>
            <p className="text-[10px] text-slate-500">No Evacuation Needed</p>
          </div>

          <div className="p-2 space-y-1">
            <div className="w-10 h-10 mx-auto rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <p className="font-bold text-xs text-slate-900">Rapid Dispatch</p>
            <p className="text-[10px] text-slate-500">Mezhuveli & All 38+ Towns</p>
          </div>

          <div className="p-2 space-y-1 col-span-2 sm:col-span-1">
            <div className="w-10 h-10 mx-auto rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="font-bold text-xs text-slate-900">Up to 10 Yrs Warranty</p>
            <p className="text-[10px] text-slate-500">Free Re-service Guarantee</p>
          </div>

        </div>
      </section>

      {/* 3. "PROPERTIES WE SERVE" SECTION (Exact Match to User Screenshot 1) */}
      <section className="py-16 bg-[#F9F9F7] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C3B2E] tracking-tight">
              Properties We Serve
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
              Homes, Businesses & Everything In Between
            </p>
          </div>

          {/* 5-Card Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            
            {/* 1. Residential */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col justify-between">
              <div className="overflow-hidden h-40">
                <img 
                  src="/images/pest4.jpg" 
                  alt="Residential Termite Control in Pathanamthitta" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif font-bold text-base text-[#0C3B2E]">Residential</h3>
                <p className="text-[11px] font-bold tracking-wider text-slate-500 uppercase mt-0.5">HOMES & APARTMENTS</p>
              </div>
            </div>

            {/* 2. Villas */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col justify-between">
              <div className="overflow-hidden h-40">
                <img 
                  src="/images/pest13.jpg" 
                  alt="NRI Luxury Villa Termite Protection in Kumbanad" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif font-bold text-base text-[#C69C3D]">Villas</h3>
                <p className="text-[11px] font-bold tracking-wider text-slate-500 uppercase mt-0.5">INDEPENDENT HOUSES</p>
              </div>
            </div>

            {/* 3. Commercial */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col justify-between">
              <div className="overflow-hidden h-40">
                <img 
                  src="/images/pest5.jpg" 
                  alt="Commercial Office Termite Treatment" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif font-bold text-base text-[#0C3B2E]">Commercial</h3>
                <p className="text-[11px] font-bold tracking-wider text-slate-500 uppercase mt-0.5">OFFICES & BUILDINGS</p>
              </div>
            </div>

            {/* 4. Hotels */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col justify-between">
              <div className="overflow-hidden h-40">
                <img 
                  src="/images/pest6.jpg" 
                  alt="Hotels & Resorts Woodwork Protection" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif font-bold text-base text-[#0C3B2E]">Hotels</h3>
                <p className="text-[11px] font-bold tracking-wider text-slate-500 uppercase mt-0.5">RESORTS & GUEST HOUSES</p>
              </div>
            </div>

            {/* 5. Warehouses */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col justify-between">
              <div className="overflow-hidden h-40">
                <img 
                  src="/images/pest7.jpg" 
                  alt="Industrial Warehouses & Godown Pest Control" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif font-bold text-base text-[#0C3B2E]">Warehouses</h3>
                <p className="text-[11px] font-bold tracking-wider text-slate-500 uppercase mt-0.5">FACTORIES & GODOWNS</p>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onOpenLeadModal({ problem: "Property Inspection Booking" })}
              className="px-6 py-2.5 rounded-xl bg-[#0C3B2E] hover:bg-[#08281f] text-white font-bold text-xs shadow-md transition"
            >
              Book Inspection For Your Property Type
            </button>
          </div>

        </div>
      </section>

      {/* 4. ANSWER ENGINE OPTIMIZATION (AEO) DIRECT ANSWER SECTION */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                Direct Answer • AEO
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                What is Termite Control in Pathanamthitta?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Termite control in Pathanamthitta</strong> is a specialized pest management service aimed at eliminating active subterranean termites and establishing long-term chemical barriers in soil and masonry. By utilizing non-repellent transfer technology and Indian Standard IS:6313 methods, it eradicates hidden colonies beneath residential villas, apartments, and commercial buildings.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">
                Local Climate & Risk Factors
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                Why is Termite Treatment Vital in Pathanamthitta?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Pathanamthitta's heavy monsoon rainfall, rich laterite soil, and extensive rubber plantation belts create high ground moisture. Subterranean termites (<em>Coptotermes gestroi</em>) thrive in these damp conditions, invading foundation footings and hollowing out door frames, teak woodwork, and modular kitchens undetected.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. "SEEING THESE SIGNS? (TERMITE PROBLEM?)" SECTION WITH REAL DAMAGE IMAGES */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider mb-2">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
              <span>Termite Warning Indicators</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Seeing These Signs in Your Property?
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Subterranean termites silently destroy wooden structures from the inside. Look out for these early warning signs:
            </p>
          </div>

          {/* Real Damage Visual Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group bg-white">
              <img 
                src="/images/termite-damage.jpg" 
                alt="Active Termite Mud Tubes on Walls in Kerala" 
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-3 bg-white">
                <p className="font-bold text-xs text-slate-900">1. Subterranean Mud Tubes</p>
                <p className="text-[11px] text-slate-500">Brown soil pathways running over walls & skirting</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group bg-white">
              <img 
                src="/images/wood-borer.jpg" 
                alt="Wood Borer and Termite Damaged Door Frames" 
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-3 bg-white">
                <p className="font-bold text-xs text-slate-900">2. Hollowed Door Jambs & Frass</p>
                <p className="text-[11px] text-slate-500">Fine wood powder & hollow timber sound</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group bg-white">
              <img 
                src="/images/before-after1.jpg" 
                alt="Termite Damaged Kitchen Cabinets Before Treatment" 
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-3 bg-white">
                <p className="font-bold text-xs text-slate-900">3. Wardrobes & Modular Kitchens</p>
                <p className="text-[11px] text-slate-500">Plywood backing eaten away from inside</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-start space-x-3 shadow-sm">
              <span className="text-xl">🪵</span>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Mud Tubes on Walls</h3>
                <p className="text-[11px] text-slate-600 mt-0.5">Brown mud tunnels running along walls & skirting</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-start space-x-3 shadow-sm">
              <span className="text-xl">🚪</span>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Damaged Wooden Doors</h3>
                <p className="text-[11px] text-slate-600 mt-0.5">Blistering paint & hollowed-out door jambs</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-start space-x-3 shadow-sm">
              <span className="text-xl">🪘</span>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Hollow Wooden Sound</h3>
                <p className="text-[11px] text-slate-600 mt-0.5">Wood sounds empty or papery when tapped</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-start space-x-3 shadow-sm">
              <span className="text-xl">🪽</span>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Termite Wings</h3>
                <p className="text-[11px] text-slate-600 mt-0.5">Discarded silvery wings on window sills after rain</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-start space-x-3 shadow-sm">
              <span className="text-xl">🕳️</span>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Small Holes in Wood</h3>
                <p className="text-[11px] text-slate-600 mt-0.5">Tiny exit pinholes with falling wood powder</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-start space-x-3 shadow-sm">
              <span className="text-xl">🪑</span>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Damaged Furniture</h3>
                <p className="text-[11px] text-slate-600 mt-0.5">Weakened cupboards, beds & modular kitchens</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-start space-x-3 shadow-sm">
              <span className="text-xl">🧱</span>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Termite Mud Deposits</h3>
                <p className="text-[11px] text-slate-600 mt-0.5">Dirt and mud accumulations in electrical switch boxes</p>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex flex-col justify-center text-center">
              <p className="text-xs font-bold text-emerald-950">Don't wait until damage gets worse!</p>
              <button
                onClick={() => onOpenLeadModal({ problem: "Termite Warning Signs" })}
                className="mt-2 text-xs bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-1.5 px-3 rounded-lg shadow transition"
              >
                Inspect Property
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm font-bold text-slate-800">
              Don't Wait Until the Damage Gets Worse. Contact Our Termite Control Team Today.
            </p>
            <div className="flex justify-center gap-3 mt-3">
              <button
                onClick={() => handlePhoneClick('pathanamthitta_signs_call')}
                className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition flex items-center space-x-1.5 shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Call {PRIMARY_PHONE_DISPLAY}</span>
              </button>
              <button
                onClick={() => handleWhatsAppClick('pathanamthitta_signs_whatsapp', { problem: 'Noticed termite signs' })}
                className="px-5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition flex items-center space-x-1.5 shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. HIGH PRIORITY: NRI & VACANT LUXURY VILLA PROTECTION WITH RICH BACKGROUND */}
      <section className="relative py-16 lg:py-20 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        
        {/* Luxury Villa Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pest13.jpg" 
            alt="NRI Luxury Villa Termite Protection in Kumbanad & Thiruvalla" 
            className="w-full h-full object-cover object-center opacity-20 filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-emerald-950/90 to-slate-950/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Home className="w-4 h-4 text-amber-400" />
              <span>High-Value Niche • NRI Property Protection</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              {PATHANAMTHITTA_DATA.nriService.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {PATHANAMTHITTA_DATA.nriService.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PATHANAMTHITTA_DATA.nriService.features.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/20 hover:border-emerald-400/50 transition-all duration-300 space-y-3 shadow-xl">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 flex items-center justify-center font-extrabold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-white text-base font-display">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex flex-wrap gap-4 items-center justify-between shadow-2xl">
            <div className="space-y-1">
              <p className="text-sm font-bold text-amber-300">
                ✈️ Overseas Property Owner in Gulf, USA, UK or Europe?
              </p>
              <p className="text-xs text-slate-300">
                We coordinate key collection, inspection, and warranty certificates directly with your caretakers in Thiruvalla, Kumbanad, or Adoor.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onOpenLeadModal({ service: "NRI Termite Inspection Pathanamthitta", propertyType: "NRI Villa" })}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition"
              >
                Book NRI Inspection
              </button>
              <button
                onClick={() => handleWhatsAppClick('pathanamthitta_nri_whatsapp', { problem: 'NRI Locked Villa Inspection' })}
                className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center space-x-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Coordination</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 7. 6 MAIN CORE SERVICES IN PATHANAMTHITTA */}
      <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Core Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
              Termite & Pest Control Services in Pathanamthitta
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Conforming to Indian Standard IS:6313 (Part 2 & 3) specifications for comprehensive timber, masonry, and foundation protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PATHANAMTHITTA_DATA.mainServices.map((svc) => (
              <div 
                key={svc.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                <span className="absolute -top-3 right-6 bg-emerald-700 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow">
                  {svc.badge}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-black text-slate-300 font-display group-hover:text-emerald-700 transition">
                      {svc.id}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                      🛡️
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-display mb-1 group-hover:text-emerald-800 transition">
                    {svc.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mb-2">
                    {svc.tagline}
                  </p>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {svc.description}
                  </p>

                  <div className="space-y-1.5 pt-2.5 border-t border-slate-100 mb-4">
                    {svc.features.map((f, i) => (
                      <div key={i} className="flex items-start text-xs text-slate-700 space-x-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">
                    {svc.warranty}
                  </span>
                  <button
                    onClick={() => onOpenLeadModal({ service: `${svc.title} - Pathanamthitta` })}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow transition"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. 5 BRANDED CREATIVE CAMPAIGN POSTERS SHOWCASE */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Visual Termite Awareness Campaign</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Why Early Termite Protection Matters
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Subterranean termites never take a break. See how we protect Pathanamthitta villas, homes, and woodwork with guaranteed chemistry before costly damage happens.
            </p>
          </div>

          {/* 5-Card Responsive Creative Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Poster 1 */}
            <div className="group rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-emerald-500 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="overflow-hidden relative aspect-square">
                <img
                  src="/images/poster-small-today-costly.jpg"
                  alt="Small today. Costly tomorrow. Stop termites early."
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <span className="text-[10px] bg-emerald-700 text-white font-bold px-2 py-0.5 rounded uppercase">Early Detection</span>
                    <h3 className="text-sm sm:text-base font-bold text-white mt-1">Small today. Costly tomorrow.</h3>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">Save more. Stress less.</span>
                <button
                  onClick={() => onOpenLeadModal({ problem: "Early Termite Inspection" })}
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center space-x-1"
                >
                  <span>Book Checkup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Poster 2 */}
            <div className="group rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-emerald-500 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="overflow-hidden relative aspect-square">
                <img
                  src="/images/poster-stronger-protection.jpg"
                  alt="Stronger protection. Peace of mind. Expert termite solutions."
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <span className="text-[10px] bg-amber-600 text-white font-bold px-2 py-0.5 rounded uppercase">Door & Timber Defense</span>
                    <h3 className="text-sm sm:text-base font-bold text-white mt-1">Stronger protection. Peace of mind.</h3>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">Don't wait for the damage.</span>
                <button
                  onClick={() => onOpenLeadModal({ service: "Door Frame Protection" })}
                  className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center space-x-1"
                >
                  <span>Protect Timber</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Poster 3 */}
            <div className="group rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-emerald-500 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="overflow-hidden relative aspect-square">
                <img
                  src="/images/poster-no-holidays.jpg"
                  alt="Termites don't take holidays. Neither do we."
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <span className="text-[10px] bg-emerald-700 text-white font-bold px-2 py-0.5 rounded uppercase">NRI Homes & Villas</span>
                    <h3 className="text-sm sm:text-base font-bold text-white mt-1">Termites don't take holidays. Neither do we.</h3>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">24/7 Protection across Kerala</span>
                <button
                  onClick={() => handleWhatsAppClick('pathanamthitta_poster_whatsapp', { problem: 'NRI Villa Protection' })}
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center space-x-1"
                >
                  <span>WhatsApp Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Poster 4 */}
            <div className="group rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-emerald-500 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="overflow-hidden relative aspect-square">
                <img
                  src="/images/poster-pack-bags.jpg"
                  alt="Pack your bags... You're not welcome here! We evict termites."
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <span className="text-[10px] bg-amber-600 text-white font-bold px-2 py-0.5 rounded uppercase">Termite Eviction</span>
                    <h3 className="text-sm sm:text-base font-bold text-white mt-1">Pack your bags... You're not welcome here!</h3>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">Complete colony eviction</span>
                <button
                  onClick={() => onOpenLeadModal({ service: "Colony Eviction" })}
                  className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center space-x-1"
                >
                  <span>Evict Termites</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Poster 5 */}
            <div className="group rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-emerald-500 transition-all duration-300 shadow-xl flex flex-col justify-between sm:col-span-2 lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 h-full items-center">
                <div className="overflow-hidden relative h-64 sm:h-full">
                  <img
                    src="/images/poster-die-naturally.jpg"
                    alt="They don't DIE naturally. We make sure of it."
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8 space-y-3 flex flex-col justify-center">
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-1 rounded-full uppercase inline-block w-max border border-emerald-400/30">
                    Queen Eradication
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                    They don't DIE naturally. We make sure of it.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Termites never stop eating wood on their own. Our scientific transfer chemistry spreads through the underground queen, permanently wiping out the colony beneath your foundation.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <button
                      onClick={() => handlePhoneClick('pathanamthitta_poster_call')}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition flex items-center space-x-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call 9020040009</span>
                    </button>
                    <button
                      onClick={() => handleWhatsAppClick('pathanamthitta_poster_whatsapp', { problem: 'Colony Eradication' })}
                      className="px-4 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-xl shadow transition flex items-center space-x-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp Expert</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. 4-STEP TREATMENT PROCESS */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5 text-emerald-700" />
              <span>How It Works</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Our 4-Step Termite Treatment Process
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Simple, transparent, and structured for complete subterranean termite colony eradication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center text-sm mb-3">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Contact & Inspection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Customer calls or WhatsApps. Our expert team checks the property and accurately identifies active termite pathways and nesting activity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center text-sm mb-3">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Problem Assessment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We identify affected areas, timber vulnerability, and recommend the exact chemical barrier method suitable for your property.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center text-sm mb-3">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Termite Treatment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Professional treatment is carried out according to site condition using odorless, non-repellent transfer chemistry and IS:6313 drill-inject-seal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center text-sm mb-3">
                04
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Follow-up & Protection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Customer receives after-treatment guidance, written warranty certificate, and long-term protection follow-up.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 10. PATHANAMTHITTA CENTRAL OFFICE & SERVICE DESK (MEZHUVELI) */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Direct Local Presence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
              Pathanamthitta Branch Office & Service Desk
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Walk into our Mezhuveli office or call our district coordinator for same-day on-site inspection and instant quotation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-50 to-slate-50 p-6 sm:p-8 rounded-3xl border-2 border-emerald-200 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Pathanamthitta District Office</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    Eco Pest India (A Unit of TermiteControl.me)
                  </h3>
                  <div className="text-sm sm:text-base text-slate-700 space-y-1">
                    <p className="font-semibold text-slate-900">Mezhuveli P.O.</p>
                    <p>Pathanamthitta District, Kerala - 689507</p>
                    <p className="text-xs text-emerald-800 font-medium">Landmark: Mezhuveli / Kulanada - Kozhencherry Road</p>
                  </div>
                  <p className="text-xs text-slate-600 pt-1">
                    🚀 <strong>Fast Dispatch:</strong> Serving Thiruvalla, Adoor, Pathanamthitta Town, Kumbanad, Kozhencherry, Ranni, Mallappally, Konni, Pandalam, Mezhuveli & all 38+ surrounding panchayats.
                  </p>
                </div>

                <div className="md:col-span-4 flex flex-col space-y-2.5">
                  <button
                    onClick={() => handlePhoneClick('pathanamthitta_branch_call')}
                    className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call 9020040009</span>
                  </button>

                  <button
                    onClick={() => handleWhatsAppClick('pathanamthitta_branch_whatsapp', { location: 'Mezhuveli, Pathanamthitta' })}
                    className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Mezhuveli Desk</span>
                  </button>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Mezhuveli+Pathanamthitta+Kerala+689507"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs flex items-center justify-center space-x-1 transition text-center"
                  >
                    <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Google Maps Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 11. TRANSPARENT COST & PRICING GUIDE */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-2">
              <DollarSign className="w-3.5 h-3.5 text-emerald-700" />
              <span>Transparent Pricing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              {PATHANAMTHITTA_DATA.costGuide.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              {PATHANAMTHITTA_DATA.costGuide.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {PATHANAMTHITTA_DATA.costGuide.factors.map((factor, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs mb-2">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">{factor.name}</h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">{factor.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-5 bg-white rounded-2xl border border-emerald-300 max-w-2xl mx-auto text-center shadow-sm space-y-1.5">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Estimated Standard Residential Cost:</p>
            <p className="text-2xl font-extrabold text-emerald-700 font-display">{PATHANAMTHITTA_DATA.costGuide.priceRange}</p>
            <p className="text-xs text-slate-600">Includes free acoustic on-site inspection, odorless chemistry, and written warranty certificate.</p>
            <div className="pt-1.5 flex justify-center gap-2">
              <button
                onClick={() => onOpenLeadModal({ service: "Cost Estimate - Pathanamthitta" })}
                className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg shadow transition"
              >
                Get a Free Quote
              </button>
              <button
                onClick={() => handleWhatsAppClick('pathanamthitta_pricing_quote', { location: 'Pathanamthitta' })}
                className="px-5 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-lg shadow transition flex items-center space-x-1"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 12. JUSTDIAL VERIFIED REVIEWS & RATINGS (4.8 ★ / 1,153+ RATINGS) */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
              <span>Customer Trust & Social Proof</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Rated 4.8 / 5.0 on Justdial (1,153+ Verified Reviews)
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Read authentic feedback from homeowners, builders, and NRI villa clients who trust Eco Pest India across Kerala.
            </p>
            
            <div className="mt-3 inline-flex items-center space-x-2 bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-800">
              <span className="text-amber-500 font-bold">★★★★★</span>
              <span>4.8 Rating on Justdial</span>
              <a 
                href={PATHANAMTHITTA_DATA.justdialUrl} 
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
            {justdialReviews.map((r, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                      {r.source}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 italic leading-relaxed mb-4">
                    "{r.body}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900 text-xs">{r.author}</p>
                    <p className="text-[10px] text-slate-500">{r.date}</p>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-bold">Verified</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 13. ALL 38+ PATHANAMTHITTA LOCALITIES & TOWNS */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              <span>Complete Local Coverage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Serving All 38+ Towns & Panchayats in Pathanamthitta
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our mobile technical teams provide rapid same-day inspection and treatment across all these localities:
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center max-w-5xl mx-auto">
            {PATHANAMTHITTA_DATA.majorLocalities.map((loc, idx) => (
              <div 
                key={idx}
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-900 transition shadow-sm flex items-center space-x-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>{loc}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-emerald-50 rounded-2xl border border-emerald-200 max-w-3xl mx-auto text-center space-y-1.5">
            <p className="text-sm font-bold text-emerald-950">
              Need immediate inspection in your Pathanamthitta neighborhood?
            </p>
            <p className="text-xs text-slate-600">
              Call our Mezhuveli district coordinator on <strong className="text-emerald-900">9020040009</strong> for 2-hour rapid dispatch.
            </p>
          </div>

        </div>
      </section>

      {/* 14. COMPLETE 30-QUESTION FAQ ACCORDION SECTION (VISIBLE & INDEXABLE) */}
      <section id="pathanamthitta-faq" className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
              <span>Comprehensive Knowledge Base</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
              Frequently Asked Questions (30 FAQs)
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Clear, expert answers regarding termite control costs, NRI villa protection, white ant eradication, chemicals, and warranty in Pathanamthitta.
            </p>
          </div>

          {/* Quick FAQ Search Filter Bar */}
          <div className="mb-6 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search across all 30 FAQs..."
                value={faqSearchQuery}
                onChange={(e) => setFaqSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-slate-50"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className={`bg-slate-50 rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-emerald-300 shadow-md ring-1 ring-emerald-200 bg-white' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between space-x-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 font-display pr-2">
                      {index + 1}. {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? 'bg-emerald-100 text-emerald-700 rotate-180' : 'bg-slate-200 text-slate-600'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5 animate-in fade-in duration-150">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 15. INTERNAL LINKING HUB TO OTHER KERALA DISTRICTS */}
      <section className="py-10 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Explore Termite Control in Other Kerala Districts:
          </p>
          <div className="flex flex-wrap gap-2 justify-center text-xs">
            <a href="/" className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 font-semibold shadow-sm transition">
              Termite Control Kerala (Home)
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
            <a href="/termite-control/alappuzha" className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 font-semibold shadow-sm transition">
              Termite Control Alappuzha
            </a>
            <a href="/termite-control/kollam" className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 font-semibold shadow-sm transition">
              Termite Control Kollam
            </a>
            <a href="/termite-control/thiruvananthapuram" className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 font-semibold shadow-sm transition">
              Termite Control Thiruvananthapuram
            </a>
            <a href="/termite-control/kannur" className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 font-semibold shadow-sm transition">
              Termite Control Kannur
            </a>
          </div>
        </div>
      </section>

      {/* 16. FINAL HIGH-CONVERTING CLOSING CTA */}
      <PrimaryBottomCTA 
        onOpenInspectionModal={onOpenInspectionModal} 
      />

    </div>
  );
}
