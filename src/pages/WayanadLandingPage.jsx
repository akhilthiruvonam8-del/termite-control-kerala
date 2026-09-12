import React, { useState, useMemo, useEffect } from 'react';
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
  Eye, 
  Compass, 
  HardHat, 
  Droplet, 
  PhoneCall, 
  ArrowUpRight, 
  Layers, 
  CheckCircle, 
  ExternalLink,
  Navigation,
  Hotel,
  Bug,
  Flame,
  ShieldAlert,
  Trees,
  Utensils,
  Share2,
  Copy,
  Check,
  Send
} from 'lucide-react';
import { WAYANAD_DATA } from '../data/wayanadData';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';
import { updateMetaTags } from '../utils/seo';
import LeadForm from '../components/LeadForm';
import PrimaryBottomCTA from '../components/PrimaryBottomCTA';

export default function WayanadLandingPage({ onOpenLeadModal, onOpenInspectionModal }) {
  // Interactive UI state
  const [selectedBlock, setSelectedBlock] = useState('all');
  const [panchayatSearch, setPanchayatSearch] = useState('');
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Sync OpenGraph Meta Tags & Rich Social Previews for Wayanad
  useEffect(() => {
    updateMetaTags({
      title: "Termite Control Wayanad | Kerala's Premier Resort & Villa Pest Protection",
      description: "Specialized anti-termite & wood borer defense for luxury resorts, plantation villas, treehouses & NRI homes in Sultan Bathery, Kalpetta, Vythiri & Wayanad. IS:6313 certified with written warranty.",
      keywords: "termite control wayanad, sultan bathery pest control, kalpetta termite treatment, vythiri resort pest control, meppadi wood borer control, nri villa termite protection wayanad, luxury resort termite control kerala",
      canonicalUrl: `${window.location.origin}/termite-control-wayanad`,
      image: `${window.location.origin}/images/wayanad-luxury-hero.jpg`,
      imageAlt: "TermiteControl.me Wayanad - Luxury Resort & Villa Pest Protection",
      schema: {
        "@context": "https://schema.org",
        "@type": "PestControlService",
        "name": "TermiteControl.me Wayanad - Unit of Eco Pest India",
        "url": `${window.location.origin}/termite-control-wayanad`,
        "image": `${window.location.origin}/images/wayanad-luxury-hero.jpg`,
        "telephone": "+91-9020040009",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near St. Mary's College, Kuppadi",
          "addressLocality": "Sultan Bathery",
          "addressRegion": "Wayanad, Kerala",
          "postalCode": "673592",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "11.6625",
          "longitude": "76.2570"
        },
        "priceRange": "₹₹",
        "areaServed": (WAYANAD_DATA.majorHubs || []).map(h => ({
          "@type": "AdministrativeArea",
          "name": h.name
        }))
      }
    });
    try {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    } catch (e) {}
  }, []);

  const handleCopyLink = () => {
    try {
      const url = typeof window !== 'undefined' ? window.location.href : 'https://termitecontrol.me/termite-control-wayanad';
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2500);
        }).catch(() => {
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2500);
        });
      } else {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
    } catch (e) {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    const shareText = `🌲 *TermiteControl.me Wayanad - Luxury Resort & Villa Pest Protection*\n\nPreserving Wayanad's finest estates, treehouses, homestays and timber villas with IS:6313 certified treatments and 10-year warranty.\n\n📍 Central Hub: Near St. Mary's College, Kuppadi, Sultan Bathery\n📞 Call/WhatsApp: +91 9020040009\n\n👉 View Plan & Book Inspection: https://termitecontrol.me/termite-control-wayanad`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleNativeShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: "Termite Control Wayanad | Kerala's Premier Resort & Villa Protection",
        text: "Specialized anti-termite & wood borer defense for luxury resorts, plantation villas, treehouses & homes in Wayanad.",
        url: typeof window !== 'undefined' ? window.location.href : 'https://termitecontrol.me/termite-control-wayanad'
      }).catch(() => {});
    } else {
      handleShareWhatsApp();
    }
  };

  // Filter FAQs based on search
  const filteredFaqs = useMemo(() => {
    if (!faqSearchQuery.trim()) return WAYANAD_DATA.faqs;
    const query = faqSearchQuery.toLowerCase();
    return WAYANAD_DATA.faqs.filter(
      f => f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query)
    );
  }, [faqSearchQuery]);

  // Flatten all panchayats with block metadata for interactive lookup
  const allPanchayats = useMemo(() => 
    WAYANAD_DATA.blocks.flatMap(block => block.panchayats.map(p => ({
      ...p,
      blockName: block.name,
      blockId: block.id,
      blockTagline: block.tagline
    }))),
    []
  );

  // Filter panchayats based on block and search query
  const filteredPanchayats = useMemo(() => {
    return allPanchayats.filter(p => {
      const matchesBlock = selectedBlock === 'all' || p.blockId === selectedBlock;
      const matchesSearch = p.name.toLowerCase().includes(panchayatSearch.toLowerCase()) ||
                            p.areas.toLowerCase().includes(panchayatSearch.toLowerCase()) ||
                            p.blockName.toLowerCase().includes(panchayatSearch.toLowerCase());
      return matchesBlock && matchesSearch;
    });
  }, [allPanchayats, selectedBlock, panchayatSearch]);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Near St. Mary's College, Kuppadi, Sultan Bathery, Wayanad, Kerala 673592")}`;

  return (
    <div className="relative min-h-screen text-slate-900 selection:bg-emerald-600 selection:text-white font-sans antialiased bg-[#FBFBF9]">
      
      {/* 1. TOP BREADCRUMB & LOCAL NOTICE BAR */}
      <div className="bg-white border-b border-slate-200 text-xs py-2.5 px-4 sm:px-6 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <nav className="flex items-center space-x-2 text-slate-600 text-xs">
            <a href="/" className="hover:text-emerald-700 transition">Home</a>
            <span className="text-slate-400">/</span>
            <a href="/#locations" className="hover:text-emerald-700 transition">Kerala Service Hub</a>
            <span className="text-slate-400">/</span>
            <span className="text-emerald-800 font-bold">Wayanad District Coverage</span>
          </nav>
          <div className="flex items-center space-x-3 text-slate-600 text-[11px]">
            <span className="flex items-center text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping mr-1.5 inline-block"></span>
              Central Hub: Near St. Mary's College, Kuppadi, Sultan Bathery
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline text-slate-600 font-medium">IS:6313 Certified • Odorless & Eco-Safe</span>
          </div>
        </div>
      </div>

      {/* 2. NATURE HERO SECTION (EXPANDED PANORAMIC WAYANAD HILLS & RAINFOREST VIEW) */}
      <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center pt-10 pb-20 lg:py-24 border-b border-emerald-950 bg-[#020b08] text-white overflow-hidden">
        
        {/* Breathtaking Background Visual Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/wayanad-luxury-hero.jpg" 
            alt="Ultra luxury modern villa nestled in misty green Wayanad tea plantations and mountains" 
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
            loading="eager"
            fetchPriority="high"
          />
          {/* Subtle cinematic gradient so sunrise and villa stay vivid while text is razor-sharp */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b08]/95 via-[#020b08]/75 to-[#020b08]/30 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020b08]/95 via-transparent to-[#020b08]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Premium Brand Messaging */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Luxury Pill Tag & NRI Malayalam Badge */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-2.5">
                <div className="inline-flex items-center space-x-2 bg-black/60 border border-emerald-500/40 rounded-full px-3.5 py-1.5 text-xs text-emerald-300 backdrop-blur-xl shadow-xl shadow-emerald-950/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-bold tracking-widest uppercase text-[10px] sm:text-[11px] font-mono">
                    PREMIUM TERMITE & TIMBER DEFENSE • WAYANAD
                  </span>
                </div>

                <div className="inline-flex items-center space-x-1.5 bg-amber-950/70 border border-amber-500/40 rounded-full px-3.5 py-1.5 text-xs text-amber-200 backdrop-blur-xl shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-[11px] font-medium">
                    വിദേശത്തുള്ള പ്രവാസികൾക്കും നാട്ടിലെ റിസോർട്ടുകൾക്കും വിശ്വസിക്കാവുന്ന സേവനം
                  </span>
                </div>
              </div>

              {/* Majestic Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]">
                  Preserving Wayanad's <br />
                  <span className="italic font-light bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent font-serif">
                    Finest Estates & Timber
                  </span>
                </h1>
                
                <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald-400/90 font-mono">
                  Sultan Bathery • Kalpetta • Mananthavady • Vythiri • Resorts & Homestays
                </p>
              </div>

              <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl text-shadow-sm mx-auto lg:mx-0">
                Odorless, IS:6313 certified subterranean termite elimination, deep wood borer eradication & annual protection for 
                <strong className="text-white font-semibold"> luxury rainforest resorts, plantation bungalows, modern villas, and commercial properties</strong> across Wayanad.
              </p>

              {/* 4 Checkpoint Badges (Frosted Glass) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="flex items-center space-x-2 bg-black/45 backdrop-blur-xl border border-white/15 rounded-xl p-2.5 shadow-lg">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-100">Kuppadi Central Hub</span>
                </div>
                <div className="flex items-center space-x-2 bg-black/45 backdrop-blur-xl border border-white/15 rounded-xl p-2.5 shadow-lg">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-100">45-Min Fast Dispatch</span>
                </div>
                <div className="flex items-center space-x-2 bg-black/45 backdrop-blur-xl border border-white/15 rounded-xl p-2.5 shadow-lg">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-100">IS:6313 Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-black/45 backdrop-blur-xl border border-white/15 rounded-xl p-2.5 shadow-lg">
                  <Trees className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-100">Eco-Safe & Odorless</span>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
                <a
                  href="#dispatch-desk"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/50 transition-all transform hover:-translate-y-0.5 text-sm"
                >
                  <Search className="w-4 h-4" />
                  <span>Book Free Wayanad Inspection</span>
                </a>

                <button
                  onClick={() => handlePhoneClick('wayanad_hero_call')}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-xl transition text-sm"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Call: {WAYANAD_DATA.brand.phoneDisplay}</span>
                </button>

                <button
                  onClick={() => handleWhatsAppClick('wayanad_hero_wa', { message: 'Hi TermiteControl.me, I need termite/pest inspection for my property in Wayanad (Sultan Bathery/Kalpetta/Vythiri). Please share details.' })}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-950/90 hover:bg-emerald-900 text-emerald-300 font-semibold px-5 py-3.5 rounded-xl border border-emerald-500/40 backdrop-blur-xl transition text-sm shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Desk</span>
                </button>
              </div>

              {/* Micro Trust Strip */}
              <div className="pt-2 text-xs text-slate-300 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <span className="flex items-center text-amber-300 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-300 mr-1" />
                  {WAYANAD_DATA.brand.justdialRating}
                </span>
                <span>•</span>
                <span>{WAYANAD_DATA.brand.justdialReviewsCount} across Wayanad</span>
                <span>•</span>
                <span className="text-emerald-300 font-medium">Live Video Report for NRI Owners</span>
              </div>

            </div>

            {/* Right Column: Floating Luxury Feature Card (Visible on lg screens) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="bg-black/50 backdrop-blur-2xl border border-white/15 rounded-3xl p-7 shadow-2xl space-y-5 text-left relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">EXCELLENCE IN TIMBER DEFENSE</div>
                    <div className="text-lg font-serif font-bold text-white mt-0.5">Wayanad Hospitality & Villa Protocol</div>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                    <Hotel className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Rainforest Resort & Homestay Specialist</div>
                      <div className="text-slate-300 text-[11px] mt-0.5">Zero guest room evacuation, 100% odorless, eco-safe for forest biospheres.</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Heritage Teak & Anjili Timber Preservation</div>
                      <div className="text-slate-300 text-[11px] mt-0.5">Surgical micro-syringe injection into wood borer exit holes without surface staining.</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">IS:6313 Certified 10-Year Soil Barrier</div>
                      <div className="text-slate-300 text-[11px] mt-0.5">Transfer chemistry eliminating subterranean termite colonies & the queen.</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Sultan Bathery Base: <strong className="text-white">Kuppadi</strong></span>
                  <a href="#dispatch-desk" className="text-emerald-400 font-bold hover:underline inline-flex items-center space-x-1">
                    <span>View Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* 3. QUICK TRUST & CREDENTIALS BAR */}
      <section className="bg-white border-b border-slate-200 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="pt-2 sm:pt-0 sm:px-3">
              <div className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">45 Mins</div>
              <div className="text-xs text-slate-600 font-medium mt-0.5">Sultan Bathery & Kalpetta Response</div>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <div className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">IS:6313</div>
              <div className="text-xs text-slate-600 font-medium mt-0.5">Bureau of Indian Standards Certified</div>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <div className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">5 - 10 Yrs</div>
              <div className="text-xs text-slate-600 font-medium mt-0.5">Written Guarantee Certificates</div>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <div className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">Zero Odor</div>
              <div className="text-xs text-slate-600 font-medium mt-0.5">100% Guest & Pet Safe Formulations</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEDICATED INSTANT LOCAL DISPATCH DESK MODULE */}
      <section id="dispatch-desk" className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Office & Rapid Service Commitment */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 rounded-full px-3.5 py-1 text-xs text-emerald-800 font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Primary Wayanad Service Base</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight">
                  Instant Dispatch Desk <br />
                  <span className="text-emerald-700 font-sans font-medium text-xl sm:text-2xl">Near St. Mary's College, Kuppadi, Sultan Bathery</span>
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our central Wayanad technical fleet is stationed at Kuppadi, Sultan Bathery. We provide same-day on-site acoustic inspections, moisture scans, and emergency termite/pest treatments across Sultan Bathery, Kalpetta, Mananthavady, Vythiri, Meppadi, and all surrounding panchayats.
                </p>
              </div>

              {/* Physical Office Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3.5">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Service Hub</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      {WAYANAD_DATA.brand.officeAddress.brand} ({WAYANAD_DATA.brand.officeAddress.unit})
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      {WAYANAD_DATA.brand.officeAddress.line1}, {WAYANAD_DATA.brand.officeAddress.city}, Wayanad, Kerala - {WAYANAD_DATA.brand.officeAddress.pincode}
                    </div>
                    <div className="text-xs text-emerald-700 font-medium mt-1 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {WAYANAD_DATA.brand.officeAddress.timing}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-slate-200">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-300 transition"
                  >
                    <Navigation className="w-3.5 h-3.5 text-blue-600" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <button
                    onClick={() => handlePhoneClick(WAYANAD_DATA.brand.phone, 'wayanad_desk_call')}
                    className="inline-flex items-center space-x-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct Desk: {WAYANAD_DATA.brand.phoneDisplay}</span>
                  </button>
                </div>
              </div>

              {/* Wayanad Response Guarantee Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl">
                  <div className="text-xs font-bold text-emerald-900">Sultan Bathery & Surroundings</div>
                  <div className="text-xs text-emerald-700 mt-0.5">30 – 45 Min Technician Arrival</div>
                </div>
                <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl">
                  <div className="text-xs font-bold text-emerald-900">Kalpetta, Vythiri & Meppadi</div>
                  <div className="text-xs text-emerald-700 mt-0.5">45 – 60 Min Dedicated Dispatch</div>
                </div>
              </div>

            </div>

            {/* Right Column: Embedded Lead Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative">
                <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Quick Booking
                </div>
                <LeadForm
                  title="BOOK FREE WAYANAD INSPECTION"
                  subtitle="Same-day visit from our Sultan Bathery Kuppadi Technical Desk"
                  defaultLocation="Wayanad (Sultan Bathery Hub)"
                  source="wayanad_dispatch_desk"
                  onSuccess={() => {}}
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US FOR WAYANAD (8 TRUST PILLARS) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Engineered For Wayanad's Terrain</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900">
              Why Wayanad Trusts TermiteControl.me
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              From dense high-altitude rainforests to heritage plantation bungalows, our specialized non-repellent transfer chemistry protects valuable timber without toxic fumes or guest disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WAYANAD_DATA.whyChooseUs.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 shadow-xs hover:shadow-md transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-base mb-4 group-hover:bg-emerald-600 group-hover:text-white transition">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. WAYANAD CLIMATE & TERMITE PROBLEM DIAGNOSTICS */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>High-Risk Hill Station Ecology</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight">
                Why Termites & Wood Borers Attack Wayanad Buildings
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                Wayanad experiences annual rainfall exceeding 3,000mm and dense rainforest dampness. Combined with rich organic soil and extensive teak, anjili, jackfruit wood, and bamboo in local architecture, subterranean termite colonies rapidly invade foundation slabs and wooden ceiling rafters.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong>High Soil Moisture:</strong> Water tables along Banasura, Karapuzha, and Vythiri sustain immense underground white ant supercolonies.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong>Exposed Timber Architecture:</strong> Resorts, treehouses, and tharavads provide thousands of square feet of unprotected cellulose.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong>Wood Borer Beetle Larvae:</strong> Fine yellow powdery frass beneath wooden furniture indicates powder-post beetles hollowing timber from within.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#dispatch-desk"
                  className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl transition text-xs sm:text-sm"
                >
                  <Search className="w-4 h-4 text-emerald-400" />
                  <span>Request Immediate Moisture & Termite Scan</span>
                </a>
              </div>
            </div>

            {/* Right: 8 Warning Signs Grid */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Diagnostic Self-Check</div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">
                8 Warning Signs You Need Professional Termite Treatment in Wayanad
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Mud Tubes on Wall Junctions", desc: "Brown pencil-thin dirt tunnels climbing up foundation plinths and exterior brickwork." },
                  { title: "Hollow-Sounding Wooden Door Frames", desc: "Tapping wood produces a papery, empty resonance where interior timber is eaten." },
                  { title: "Fine Wood Powder (Frass)", desc: "Yellowish dust piles beneath wooden tables, beds, and roof beams from wood borers." },
                  { title: "Blistering & Peeling Paint", desc: "Moisture build-up and hollow channels directly behind painted drywall or plaster." },
                  { title: "Discarded Silvery Wings", desc: "Piles of termite alate wings on window sills and door frames after monsoon rains." },
                  { title: "Jammed Doors & Windows", desc: "Swelling caused by moisture introduced by termites tunneling through wooden frames." },
                  { title: "Damaged Modular Kitchens", desc: "Termites exploiting damp plumbing conduits behind plywood cabinets." },
                  { title: "Resort Cottage Stilt Weakening", desc: "Subterranean white ants hollowing out wooden posts and deck footings." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{item.title}</div>
                      <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. SPECIALIZED WAYANAD TOURISM & HOSPITALITY PEST MANAGEMENT MODULE */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-950 border border-emerald-500/40 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Hotel className="w-3.5 h-3.5 text-emerald-400" />
              <span>Specialized Hospitality & Tourism Focus</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white">
              Pest & Timber Management for Wayanad Resorts, Homestays & Treehouses
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Targeted odorless, eco-safe pest solutions for over 1,500+ luxury hospitality properties across Vythiri, Lakkidi, Meppadi, Chembra, Banasura, and Thirunelly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WAYANAD_DATA.tourismDestinations.map((dest, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-4 hover:border-emerald-500/50 transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-emerald-400 font-mono tracking-wider">
                      {dest.locations}
                    </span>
                    <Trees className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white leading-snug">
                    {dest.title}
                  </h3>
                  <div className="space-y-2 pt-1">
                    <div className="text-xs text-amber-300/90 leading-relaxed bg-amber-950/40 p-2.5 rounded-lg border border-amber-800/40">
                      <strong>Ecology Challenge:</strong> {dest.challenge}
                    </div>
                    <div className="text-xs text-emerald-300 leading-relaxed bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/40">
                      <strong>Scientific Solution:</strong> {dest.solution}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenLeadModal({ location: dest.locations, propertyType: 'Resort / Homestay' })}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-xs font-bold py-2.5 rounded-xl transition"
                  >
                    <span>Book Resort Inspection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Hospitality Key Commitments Bar */}
          <div className="mt-12 bg-slate-800/60 border border-slate-700 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-emerald-400 font-bold text-sm">100% Odor-Free & Non-Toxic</div>
              <p className="text-xs text-slate-400">Zero guest room evacuation required. Treatments can be executed during regular check-in/check-out hours.</p>
            </div>
            <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-700 pt-4 md:pt-0 md:pl-6">
              <div className="text-emerald-400 font-bold text-sm">FSSAI & Eco-Audit Compliant</div>
              <p className="text-xs text-slate-400">Audit-ready documentation, bait station mapping, and certified chemical data sheets for resort kitchens and dining areas.</p>
            </div>
            <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-700 pt-4 md:pt-0 md:pl-6">
              <div className="text-emerald-400 font-bold text-sm">Priority 24/7 Service Desk</div>
              <p className="text-xs text-slate-400">Dedicated emergency dispatch for hospitality clients with guaranteed technician arrival within 45 minutes.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. 14 COMPREHENSIVE TERMITE SERVICES GRID (IMAGE HEADERS + WARRANTY) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Complete Wayanad Timber Defense</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900">
              Termite & Timber Protection Services in Wayanad
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every service is delivered under strict chemical dosing norms, adhering to Indian Standards (IS:6313) with written guarantee certificates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {WAYANAD_DATA.services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image Header with Hover Zoom */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={service.image} 
                      alt={`${service.name} in Wayanad`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                    
                    {/* Top Warranty Badge Pill */}
                    <div className="absolute top-3 right-3 bg-emerald-950/90 text-emerald-300 border border-emerald-400/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md">
                      {service.warranty.split(' ')[0]} {service.warranty.split(' ')[1] || 'Warranty'}
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-[11px] font-mono text-emerald-300 uppercase tracking-wider">{service.tagline}</div>
                      <h3 className="text-lg font-bold font-serif leading-tight drop-shadow-sm">{service.name}</h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3.5">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-1 border-t border-slate-100 text-xs text-slate-700">
                      <div>
                        <strong className="text-slate-900">Application Method:</strong> {service.method}
                      </div>
                      <div>
                        <strong className="text-slate-900">Chemistry:</strong> {service.chemical}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenLeadModal({ problem: service.name, location: 'Wayanad District' })}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold py-2.5 rounded-xl transition"
                  >
                    <span>Book {service.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. GENERAL PEST CONTROL SERVICES MODULE */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Bug className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full Pest Management</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900">
              General Pest Control Services in Wayanad
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Comprehensive pest defense for residences, hotels, restaurants, and commercial establishments across Wayanad District.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WAYANAD_DATA.generalPestServices.map((pest) => (
              <div 
                key={pest.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 hover:border-emerald-500 shadow-xs hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                      <Bug className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      Wayanad Safe
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-slate-900">
                    {pest.name}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-700">{pest.tagline}</div>
                  
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pest.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {pest.features.map((feat, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenLeadModal({ problem: pest.name, location: 'Wayanad District' })}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-900 text-xs font-bold py-2 rounded-xl transition"
                  >
                    <span>Get {pest.name} Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. 5-STEP SCIENTIFIC TREATMENT PROCESS */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Standardized Protocol</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900">
              5-Step Scientific Eradication Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              How our certified technicians diagnose, eliminate, and permanently protect your Wayanad property under Indian Standards (IS:6313).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {WAYANAD_DATA.treatmentProcess.map((step, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-emerald-500 transition space-y-3"
              >
                <div className="text-2xl font-serif font-bold text-emerald-700 font-mono">
                  {step.step}
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. WAYANAD ADMINISTRATIVE & GEOGRAPHIC COVERAGE (ALL TALUKS & 23 PANCHAYATS) */}
      <section id="coverage" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% District Wide Coverage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900">
              Complete Wayanad Service Reach
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Our mobile technical fleet covers all 3 Taluks, 4 Urban Centers, 4 Block Panchayats & 23 Grama Panchayats in Wayanad District.
            </p>
          </div>

          {/* 4 Major Hub Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {WAYANAD_DATA.majorHubs.map((hub) => (
              <div 
                key={hub.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    {hub.type.split('/')[0]}
                  </span>
                  <MapPin className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  {hub.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {hub.description}
                </p>
                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Key Areas:</div>
                  <div className="text-xs text-slate-700 leading-normal">
                    {hub.prominentAreas.slice(0, 7).join(', ')}...
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Block Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedBlock('all')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${selectedBlock === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                >
                  All Wayanad ({allPanchayats.length})
                </button>
                {WAYANAD_DATA.blocks.map(b => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBlock(b.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${selectedBlock === b.id ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                  >
                    {b.name.split(' ')[0]} ({b.panchayats.length})
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search town, village or panchayat..."
                  value={panchayatSearch}
                  onChange={(e) => setPanchayatSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:border-emerald-500"
                />
              </div>

            </div>
          </div>

          {/* Grama Panchayats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPanchayats.map((p, idx) => (
              <div 
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200 hover:border-emerald-400 transition space-y-2 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {p.name} Grama Panchayat
                  </h4>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                    {p.blockName.split(' ')[0]} Block
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-700">Locations Covered:</strong> {p.areas}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-700 font-medium">✓ Same-day inspection</span>
                  <button
                    onClick={() => onOpenLeadModal({ location: `${p.name} Panchayat, Wayanad` })}
                    className="text-xs font-bold text-slate-900 hover:text-emerald-700 inline-flex items-center space-x-1"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. CUSTOMER REVIEWS & TESTIMONIALS FROM WAYANAD */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Real Wayanad Client Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900">
              Trusted by Wayanad Homeowners & Resorts
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Verified testimonials from resort directors, plantation owners, and residential clients across Wayanad District.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WAYANAD_DATA.testimonials.slice(0, 3).map((test, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{test.review}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">{test.name}</div>
                    <div className="text-[11px] text-slate-500">{test.role} • {test.location}</div>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded-md">
                    {test.service.split(' ')[0]} {test.service.split(' ')[1]}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12B. WHATSAPP & SOCIAL MEDIA RICH PREVIEW (OPENGRAPH CARD SHOWCASE) */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 via-[#031510] to-slate-950 text-white border-b border-emerald-950/60 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Share Description & Quick Action Buttons */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp & Social Share • Rich Preview Card</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-snug">
                  Share This Wayanad Defense Plan With Family or Resort Team
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Easily send this comprehensive timber & termite protection page to NRI property owners in the Gulf/UK, resort general managers, or on-site caretakers in Wayanad.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={handleShareWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition shadow-lg shadow-emerald-950/50 cursor-pointer active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                  <span>Share on WhatsApp (With Preview)</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-3.5 rounded-xl text-sm font-semibold transition cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300 font-bold">Link Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Direct Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Trust Tag */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
                <span className="flex items-center space-x-1.5 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>High-Res Villa Photo Attached</span>
                </span>
                <span className="flex items-center space-x-1.5 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>IS:6313 Guarantee Summary Included</span>
                </span>
              </div>

            </div>

            {/* Right Column: Simulated WhatsApp Rich Card Preview */}
            <div className="lg:col-span-6 flex justify-center">
              
              <div className="w-full max-w-md bg-[#0b141a] rounded-3xl p-4 sm:p-5 border border-slate-800 shadow-2xl relative">
                
                {/* Chat Header */}
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-800 text-xs text-slate-300">
                  <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-white font-bold text-xs">
                    TC
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white truncate flex items-center space-x-1">
                      <span>TermiteControl.me (Wayanad Desk)</span>
                      <span className="text-emerald-400 text-[10px]">✓</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 truncate">Online • Sultan Bathery Central Office</div>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">16:40</div>
                </div>

                {/* WhatsApp Chat Bubble */}
                <div className="mt-3 bg-[#1f2c34] rounded-2xl overflow-hidden border border-slate-700/60 text-left shadow-lg">
                  
                  {/* Rich OpenGraph Image */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                    <img 
                      src="/images/wayanad-luxury-hero.jpg" 
                      alt="TermiteControl.me Wayanad Luxury Villa Preview" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md text-[10px] font-bold text-emerald-300 px-2.5 py-1 rounded-md border border-emerald-500/40">
                      IS:6313 Certified
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                      <span className="text-[10px] text-slate-300 font-mono tracking-wider">
                        termitecontrol.me/termite-control-wayanad
                      </span>
                    </div>
                  </div>

                  {/* Rich OpenGraph Card Content */}
                  <div className="p-3.5 space-y-1.5 bg-[#1f2c34]">
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      TermiteControl.me Wayanad | Kerala's Premier Resort & Villa Protection
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      Specialized anti-termite & wood borer defense for luxury resorts, plantation villas, treehouses & NRI estates. 10-Yr Warranty & live video audit.
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-700/50">
                      <span className="text-emerald-400 font-semibold">Central Hub: Kuppadi, Sultan Bathery</span>
                      <span className="text-emerald-400 flex items-center space-x-0.5">
                        <span>Read</span>
                        <span className="text-sky-400 font-bold text-xs">✓✓</span>
                      </span>
                    </div>
                  </div>

                </div>

                <div className="mt-3 text-center">
                  <span className="text-[11px] text-slate-400 font-medium">
                    ✨ Automatically renders when shared on WhatsApp, iMessage & Facebook
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 13. AEO & VOICE SEARCH FAQ SECTION */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>AEO & Voice Search Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900">
              Frequently Asked Questions (Wayanad)
            </h2>
            <p className="text-slate-600 text-sm">
              Direct, transparent answers regarding termite costs, inspection protocols, odorless chemistry, and resort pest control in Wayanad.
            </p>

            {/* FAQ Search Filter */}
            <div className="pt-4 max-w-md mx-auto">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search questions (e.g. cost, safety, resort AMC)..."
                  value={faqSearchQuery}
                  onChange={(e) => setFaqSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:border-emerald-500 shadow-2xs"
                />
              </div>
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between space-x-4 hover:bg-slate-50/50 transition"
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base font-serif">
                      {faq.q}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 14. PRIMARY BOTTOM CALL-TO-ACTION (WAYANAD HIGH-CONVERSION) */}
      <PrimaryBottomCTA 
        onOpenInspectionModal={onOpenInspectionModal}
        districtName="Wayanad"
        customOfficeAddress="Near St. Mary's College, Kuppadi, Sultan Bathery, Wayanad"
      />

      {/* 15. JSON-LD STRUCTURED DATA SCHEMA FOR SEO & AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://termitecontrol.me/#localbusiness-wayanad",
                "name": "TermiteControl.me Wayanad - Unit of Eco Pest India",
                "url": "https://termitecontrol.me/termite-control-wayanad",
                "logo": "https://termitecontrol.me/images/logo.png",
                "image": "https://termitecontrol.me/images/wayanad-hero-nature.jpg",
                "description": "Professional IS:6313 certified termite control, anti-termite treatment, wood borer eradication and general pest control for homes, luxury resorts and homestays across Wayanad District.",
                "telephone": "+919020040009",
                "email": "support@termitecontrol.me",
                "priceRange": "₹₹",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Near St. Mary's College, Kuppadi",
                  "addressLocality": "Sultan Bathery",
                  "addressRegion": "Kerala",
                  "postalCode": "673592",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 11.6625,
                  "longitude": 76.2570
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "08:00",
                  "closes": "20:30"
                },
                "areaServed": [
                  "Sultan Bathery", "Kalpetta", "Mananthavady", "Vythiri", "Meppadi", 
                  "Panamaram", "Ambalavayal", "Pulpally", "Kuppadi", "Lakkidi", 
                  "Pookode", "Thirunelly", "Padinjarathara", "Wayanad District"
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "940"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://termitecontrol.me/termite-control-wayanad#faq",
                "mainEntity": WAYANAD_DATA.faqs.map(f => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.a
                  }
                }))
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://termitecontrol.me/termite-control-wayanad#breadcrumb",
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
                    "name": "Kerala Service Locations",
                    "item": "https://termitecontrol.me/#locations"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Wayanad District",
                    "item": "https://termitecontrol.me/termite-control-wayanad"
                  }
                ]
              }
            ]
          })
        }}
      />

    </div>
  );
}
