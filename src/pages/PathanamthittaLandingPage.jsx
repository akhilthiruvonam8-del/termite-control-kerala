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
  Flame, 
  Droplet,
  Zap,
  PhoneCall,
  DollarSign,
  Star,
  Search,
  FileText,
  ShieldAlert,
  CalendarCheck
} from 'lucide-react';
import { PATHANAMTHITTA_DATA } from '../data/pathanamthittaData';
import { updateMetaTags } from '../utils/seo';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';
import LeadForm from '../components/LeadForm';
import PrimaryBottomCTA from '../components/PrimaryBottomCTA';

export default function PathanamthittaLandingPage({ onOpenLeadModal, onOpenInspectionModal }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    updateMetaTags({
      title: PATHANAMTHITTA_DATA.meta.title,
      description: PATHANAMTHITTA_DATA.meta.description,
      keywords: PATHANAMTHITTA_DATA.meta.keywords,
      canonicalUrl: "https://termitecontrol.me/termite-control-pathanamthitta",
      schema: {
        "@context": "https://schema.org",
        "@type": "PestControlService",
        "name": "TermiteControl.me - Pathanamthitta Division",
        "parentOrganization": { "@type": "Organization", "name": "Eco Pest India" },
        "url": "https://termitecontrol.me/termite-control-pathanamthitta",
        "telephone": "+91-9020040009",
        "address": {
          "@type": "PostalAddress",
          "name": "Pathanamthitta Central Branch",
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
        "areaServed": "Pathanamthitta District, Kerala",
        "priceRange": "₹₹",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Pathanamthitta Termite & Wood Borer Control Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Anti-Termite Treatment Pathanamthitta" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "White Ant Removal Pathanamthitta" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pre Construction Anti Termite Treatment Pathanamthitta" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Post Construction Termite Treatment Pathanamthitta" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wood Borer Treatment Pathanamthitta" } }
          ]
        }
      }
    });
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const reviews = [
    {
      name: "Dr. Thomas Mathew",
      location: "Kumbanad, Pathanamthitta",
      property: "NRI Luxury Villa",
      rating: 5,
      comment: "We live abroad and had severe subterranean termite attacks on our teak door frames and kitchen cabinets in Kumbanad. The Mezhuveli team inspected the house within hours and did an odorless drill-seal treatment. Completely termite-free for over 2 years now."
    },
    {
      name: "Rajesh Varma",
      location: "Thiruvalla",
      property: "Independent Residential Home",
      rating: 5,
      comment: "Prompt inspection and very transparent pricing. They explained the difference between white ants and borers clearly. Highly professional team with proper warranty documents."
    },
    {
      name: "Anoop K.",
      location: "Adoor",
      property: "Pre-Construction Villa Project",
      rating: 5,
      comment: "Engaged them for IS:6313 stage-wise foundation soil treatment for our new villa in Adoor. They arrived on time for each stage before PCC casting and issued a 10-year certificate."
    },
    {
      name: "Susan Philip",
      location: "Kozhencherry",
      property: "Ancestral Home Woodwork",
      rating: 5,
      comment: "We were worried about chemical smell and damaging our polished woodwork. The odorless transfer treatment destroyed the entire white ant colony without any smell or stain."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION (Simple, Fast, High-Intent Conversion) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950 text-white pt-8 pb-14 lg:py-18">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Top Location Dispatch Tag */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs text-slate-400">Home</span>
            <span className="text-xs text-slate-500">/</span>
            <span className="text-xs text-slate-400">Kerala Locations</span>
            <span className="text-xs text-slate-500">/</span>
            <span className="text-xs text-emerald-400 font-semibold">Pathanamthitta District</span>
            <span className="ml-auto inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mezhuveli Service Hub • Same-Day Dispatch Across District</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Professional Termite Control Services in Kerala</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                Professional Termite Control & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Anti-Termite Treatment</span> in Pathanamthitta
              </h1>

              {/* Sub-heading */}
              <p className="text-base sm:text-lg font-bold text-amber-300 leading-snug">
                Effective Anti-Termite Treatment for Homes, Villas, Apartments & Commercial Buildings in Thiruvalla, Adoor & Kumbanad
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Effective termite inspection and treatment solutions for homes, luxury villas, apartments, church woodwork, and commercial properties. Odorless drill-inject-seal barriers and stage-wise foundation soil protection with official warranty.
              </p>

              {/* Pathanamthitta Office Dispatch Strip */}
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-xs sm:text-sm text-slate-200 space-y-2">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-sm">
                      Pathanamthitta Central Office: Mezhuveli P.O.
                    </p>
                    <p className="text-slate-300 text-xs">
                      Eco Pest India, Mezhuveli P.O., Pathanamthitta - 689507
                    </p>
                    <p className="text-[11px] text-emerald-300 font-semibold mt-0.5">
                      Fast Dispatch: Thiruvalla, Adoor, Kumbanad, Kozhencherry, Ranni, Pandalam, Konni, Mezhuveli & all taluks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Large Hero CTA Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 items-center pt-1">
                <button
                  onClick={() => handlePhoneClick('pathanamthitta_hero_call')}
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl transition flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  <span>CALL NOW ({PRIMARY_PHONE_DISPLAY})</span>
                </button>

                <button
                  onClick={() => handleWhatsAppClick('pathanamthitta_hero_whatsapp', { location: 'Pathanamthitta (Mezhuveli)' })}
                  className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base shadow-xl transition flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>WHATSAPP NOW</span>
                </button>

                <button
                  onClick={() => onOpenLeadModal({ location: 'Pathanamthitta' })}
                  className="px-4 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow transition"
                >
                  <span>GET A QUOTE</span>
                </button>
              </div>

              {/* 5 Simple Trust Points Immediately Below Heading */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-slate-800 text-xs text-slate-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Professional Pest Control Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Safe & Effective Odorless Treatment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Residential & Commercial Services</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Kerala & Pathanamthitta Service Coverage</span>
                </div>
                <div className="flex items-center space-x-2 sm:col-span-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Free Inspection & Quotation Support (1,920+ Sites Protected)</span>
                </div>
              </div>

            </div>

            {/* Right Column: High-Conversion Simple Lead Form */}
            <div className="lg:col-span-5">
              <LeadForm
                title="GET FREE CONSULTATION"
                subtitle="Same-day technician inspection across Thiruvalla, Adoor, Kumbanad & Mezhuveli"
                defaultLocation="Pathanamthitta District"
                source="pathanamthitta_landing_hero"
              />
            </div>

          </div>

        </div>
      </section>

      {/* 2. "SEEING THESE SIGNS? (TERMITE PROBLEM?)" SECTION */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider mb-2">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
              <span>Termite Problem?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Seeing These Signs in Your Property?
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Subterranean termites silently destroy wooden structures from inside. Look out for these early warning signs:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start space-x-3">
              <span className="text-xl">🪵</span>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Mud Tubes on Walls</h3>
                <p className="text-[11px] text-slate-600 mt-0.5">Brown mud tunnels running along walls & skirting</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start space-x-3">
              <span className="text-xl">🚪</span>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Damaged Wooden Doors</h3>
                <p className="text-[11px] text-slate-600 mt-0.5">Blistering paint & hollowed-out door jambs</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start space-x-3">
              <span className="text-xl">🪘</span>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Hollow Wooden Sound</h3>
                <p className="text-[11px] text-slate-600 mt-0.5">Wood sounds empty or papery when tapped</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start space-x-3">
              <span className="text-xl">🪽</span>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Termite Wings</h3>
                <p className="text-[11px] text-slate-600 mt-0.5">Discarded silvery wings on window sills after rain</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start space-x-3">
              <span className="text-xl">🕳️</span>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Small Holes in Wood</h3>
                <p className="text-[11px] text-slate-600 mt-0.5">Tiny exit pinholes with falling wood powder</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start space-x-3">
              <span className="text-xl">🪑</span>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Damaged Furniture</h3>
                <p className="text-[11px] text-slate-600 mt-0.5">Weakened cupboards, beds & modular kitchens</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start space-x-3">
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
                className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition flex items-center space-x-1.5"
              >
                <Phone className="w-4 h-4" />
                <span>Call {PRIMARY_PHONE_DISPLAY}</span>
              </button>
              <button
                onClick={() => handleWhatsAppClick('pathanamthitta_signs_whatsapp', { problem: 'Noticed termite signs' })}
                className="px-5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition flex items-center space-x-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. 4-STEP TREATMENT PROCESS */}
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
              Simple, transparent, and structured for complete termite colony eradication.
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

      {/* 4. SPECIALIZED "WHITE ANT REMOVAL (ചിതൽ നിവാരണം)" FEATURE SECTION */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3.5">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-extrabold uppercase tracking-wider">
                  <Bug className="w-4 h-4 text-amber-400" />
                  <span>White Ant Removal Kerala • ചിതൽ നിവാരണം</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
                  What Are "White Ants" & Why Are They Destroying Your Pathanamthitta Home?
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  In Kerala, <strong className="text-white">"White Ants" (ചിതൽ)</strong> is the common everyday name used for highly destructive <strong className="text-emerald-300">Subterranean Termites</strong>. Although called ants, they are biologically wood-eating insects that live in underground mega-colonies.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10 text-xs text-slate-200 space-y-1">
                    <p className="font-bold text-amber-300">⚠️ Hidden White Ant Damage:</p>
                    <p>They enter through microscopic foundation cracks and hollow out teak doors, skirting, wardrobes, and modular kitchens undetected while houses remain closed.</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10 text-xs text-slate-200 space-y-1">
                    <p className="font-bold text-emerald-300">🛡️ Our Permanent Eradication:</p>
                    <p>We use non-repellent transfer chemistry that workers unwittingly carry back to eliminate the queen and the entire underground colony.</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => onOpenLeadModal({ service: "White Ant Removal Pathanamthitta", problem: "White Ant / Termite" })}
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl shadow transition flex items-center space-x-1.5"
                  >
                    <span>Book White Ant Inspection in Pathanamthitta</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppClick('pathanamthitta_white_ant', { service: 'White Ant Removal Pathanamthitta' })}
                    className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm rounded-xl shadow transition flex items-center space-x-1.5"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp White Ant Expert</span>
                  </button>
                </div>
              </div>

              {/* White Ant Visual Evidence */}
              <div className="lg:col-span-4">
                <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl relative group">
                  <img
                    src="/images/termite-damage.jpg"
                    alt="White Ant Mud Tubes in Kerala House"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-3.5">
                    <div>
                      <p className="text-xs font-bold text-white">Active White Ant Mud Tunnels</p>
                      <p className="text-[10px] text-amber-300">Found on skirting & door frames</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. 6 MAIN CORE SERVICES IN PATHANAMTHITTA */}
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
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative"
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

      {/* 6. PATHANAMTHITTA CENTRAL OFFICE & SERVICE DESK (MEZHUVELI) */}
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
                    🚀 <strong>Fast Dispatch:</strong> Serving Thiruvalla, Adoor, Pathanamthitta Town, Kumbanad, Kozhencherry, Ranni, Mallappally, Konni, Pandalam, Mezhuveli & all surrounding panchayats.
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

      {/* 7. COST & PRICING TRANSPARENCY SECTION */}
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

      {/* 8. GENUINE CUSTOMER REVIEWS FROM PATHANAMTHITTA */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
              <span>Customer Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              What Our Customers in Pathanamthitta Say
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Real reviews from homeowners and builders across Pathanamthitta district.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((r, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                    "{r.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900 text-xs">{r.name}</p>
                    <p className="text-[11px] text-slate-500">{r.location}</p>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">
                    {r.property}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. ALL PATHANAMTHITTA LOCALITIES & TALUKS COVERAGE */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              <span>Service Areas in Pathanamthitta</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Serving All Towns & Panchayats in Pathanamthitta
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our mobile technical teams provide same-day inspection and treatment across all these localities:
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

      {/* 10. 15 COMPREHENSIVE SEO FAQS ACCORDION */}
      <section id="pathanamthitta-faq" className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Clear answers regarding termite control costs, NRI villa protection, white ant elimination, and warranty protection in Pathanamthitta.
            </p>
          </div>

          <div className="space-y-3">
            {PATHANAMTHITTA_DATA.faqs.map((faq, index) => {
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
                      {faq.q}
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

      {/* 11. FINAL HIGH-CONVERTING CLOSING CTA */}
      <PrimaryBottomCTA 
        onOpenInspectionModal={onOpenInspectionModal} 
      />

    </div>
  );
}
