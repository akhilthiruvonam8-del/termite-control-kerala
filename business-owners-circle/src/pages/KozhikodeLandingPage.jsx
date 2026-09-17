import React, { useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Award, 
  Clock, 
  CheckCircle, 
  Navigation, 
  Building, 
  Home, 
  Bug, 
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { KOZHIKODE_DATA } from '../data/kozhikodeData';
import { updateMetaTags } from '../utils/seo';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';
import LeadForm from '../components/LeadForm';
import FAQSection from '../components/FAQSection';
import PrimaryBottomCTA from '../components/PrimaryBottomCTA';

export default function KozhikodeLandingPage({ onOpenLeadModal, onOpenInspectionModal }) {
  useEffect(() => {
    updateMetaTags({
      title: "Termite Control in Kozhikode | Anti-Termite Treatment Calicut - Pavamani Road Office",
      description: "Best termite control and wood borer treatment in Kozhikode (Calicut). Local office at Pavamani Road (near Malabar Gold & Diamonds). 100% odorless, up to 10-year warranty. Call/WhatsApp 9020040009.",
      keywords: "termite control Kozhikode, termite treatment Calicut, anti termite treatment Kozhikode, wood borer treatment Kozhikode, pest control Pavamani road, termite control Mavoor Road, termite control Nadakkavu, pest control Calicut",
      schema: {
        "@context": "https://schema.org",
        "@type": "PestControlService",
        "name": "TermiteControl.me - Kozhikode Branch",
        "parentOrganization": { "@type": "Organization", "name": "Eco Pest India" },
        "url": "https://termitecontrol.me/termite-control-kozhikode",
        "telephone": "+91-9020040009",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Pavamani Road, Near Malabar Gold & Diamonds",
          "addressLocality": "Kozhikode",
          "addressRegion": "Kerala",
          "postalCode": "673004",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "11.2588",
          "longitude": "75.7804"
        },
        "areaServed": "Kozhikode District",
        "priceRange": "₹₹"
      }
    });
    window.scrollTo(0, 0);
  }, []);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Pavamani Road, near Malabar Gold and Diamonds, Kozhikode, Kerala")}`;

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Kozhikode Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950 text-white pt-8 pb-16 lg:py-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Office Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs text-slate-400">Home</span>
            <span className="text-xs text-slate-500">/</span>
            <span className="text-xs text-emerald-400 font-semibold">Kozhikode District (Calicut)</span>
            <span className="ml-auto inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Office: Pavamani Road (Near Malabar Gold)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Headlines, Address, Local Highlights, CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Calicut's #1 Rated Termite & Wood Borer Specialists</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                Professional Termite Control & Wood Borer Treatment in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Kozhikode</span>
              </h1>

              {/* Local Office Address Card */}
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-xs sm:text-sm text-slate-200 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white text-sm">
                        Kozhikode Central Branch Office
                      </p>
                      <p className="text-slate-300">
                        {KOZHIKODE_DATA.officeAddress.line1}, {KOZHIKODE_DATA.officeAddress.city}, Kerala - {KOZHIKODE_DATA.officeAddress.pincode}
                      </p>
                      <p className="text-[11px] text-emerald-300 font-semibold mt-0.5">
                        Landmark: {KOZHIKODE_DATA.officeAddress.landmark}
                      </p>
                    </div>
                  </div>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-lg text-xs font-bold transition flex items-center space-x-1 flex-shrink-0"
                    title="Open in Google Maps"
                  >
                    <Navigation className="w-3.5 h-3.5 text-amber-300" />
                    <span className="hidden sm:inline">Directions</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-300 gap-2">
                  <span className="flex items-center text-emerald-300 font-semibold">
                    <Clock className="w-3.5 h-3.5 mr-1" /> Same-Day Inspection Across Calicut
                  </span>
                  <span className="text-amber-300 font-bold">
                    📞 9020040009
                  </span>
                </div>
              </div>

              {/* Local Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Protect your home, luxury villa, apartment, or commercial property in Kozhikode with scientific drill-fill-seal subterranean termite barriers and specialized wood borer eradication. Safe, odorless, and compliant with IS 6313 specifications.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 sm:gap-4 items-center pt-2">
                <button
                  onClick={() => handlePhoneClick('kozhikode_hero')}
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl transition flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  <span>Call {PRIMARY_PHONE_DISPLAY}</span>
                </button>

                <button
                  onClick={() => handleWhatsAppClick('kozhikode_hero', { location: 'Kozhikode (Calicut)' })}
                  className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base shadow-xl transition flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>WhatsApp Calicut Desk</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>2,450+ Calicut Homes</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Up to 10 Yr Warranty</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>2-Hour Rapid Dispatch</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Govt Approved</span>
                </div>
              </div>

            </div>

            {/* Right Column: Kozhikode Specific Form */}
            <div className="lg:col-span-5">
              <LeadForm
                title="KOZHIKODE TERMITE INSPECTION"
                subtitle="Local technicians stationed at Pavamani Road for immediate booking"
                defaultLocation="Kozhikode (Pavamani Rd / Palayam)"
                source="kozhikode_landing_hero"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Local Coverage Areas in Kozhikode District */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              <span>Full District Coverage</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Serving All Localities Across Kozhikode
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our mobile pest squad delivers same-day inspection to every corner of Calicut city and Kozhikode rural zones.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center max-w-5xl mx-auto">
            {KOZHIKODE_DATA.majorLocalities.map((loc, idx) => (
              <div 
                key={idx}
                className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-900 transition shadow-sm flex items-center space-x-1.5"
              >
                <MapPin className="w-3 h-3 text-emerald-600" />
                <span>{loc}</span>
              </div>
            ))}
          </div>

          {/* Kozhikode Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {KOZHIKODE_DATA.localHighlights.map((h, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display mb-1">{h.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Frequently Treated Properties in Calicut */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Kozhikode Property Solutions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From traditional Malabar wooden residences to luxury apartments along Beach Road and Mavoor Road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {KOZHIKODE_DATA.frequentlyTreatedProperties.map((prop, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display mb-2 text-emerald-950">
                    {prop.type}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {prop.details}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-500 uppercase">Frequent Areas:</p>
                  <p className="text-xs font-semibold text-emerald-800 mt-0.5">{prop.popularAreas}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Kozhikode Local Office Feature with Photo */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Kozhikode Service Center</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold font-display">
                  Visit or Call Our Pavamani Road Office
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Located near Malabar Gold & Diamonds on Pavamani Road, Palayam, Kozhikode. Our technical supervisors are ready to schedule a prompt same-day assessment for your building.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-xs sm:text-sm rounded-xl transition flex items-center space-x-2 shadow"
                  >
                    <Navigation className="w-4 h-4 text-emerald-700" />
                    <span>Get Google Map Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <button
                    onClick={() => handlePhoneClick('kozhikode_office_banner')}
                    className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm rounded-xl transition flex items-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call 9020040009</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-slate-300 space-y-1.5">
                  <p><span className="font-bold text-white">Address:</span> Pavamani Road, Near Malabar Gold & Diamonds, Kozhikode 673004</p>
                  <p><span className="font-bold text-white">Operating Hours:</span> Mon - Sun: 7:00 AM – 9:00 PM</p>
                </div>
              </div>

              {/* Real Photo of Kozhikode Office / Squad */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl group">
                  <img
                    src="/images/kozhikode-office.jpg"
                    alt="TermiteControl.me Kozhikode Office at Pavamani Road near Malabar Gold & Diamonds"
                    className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/images/hero-technician.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <div className="w-full flex items-center justify-between text-xs text-white">
                      <span className="font-bold">Pavamani Road Service Center</span>
                      <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">Kozhikode</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Kozhikode Specific FAQs */}
      <FAQSection faqsList={KOZHIKODE_DATA.faqs} />

      {/* Final Bottom CTA */}
      <PrimaryBottomCTA onOpenInspectionModal={onOpenInspectionModal} />

    </div>
  );
}
