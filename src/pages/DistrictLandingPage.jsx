import React, { useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Award, 
  Clock, 
  CheckCircle, 
  Home, 
  Building2, 
  Bug, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { updateMetaTags } from '../utils/seo';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';
import LeadForm from '../components/LeadForm';
import FAQSection from '../components/FAQSection';
import PrimaryBottomCTA from '../components/PrimaryBottomCTA';

export default function DistrictLandingPage({ district, onOpenInspectionModal }) {
  useEffect(() => {
    if (!district) return;
    updateMetaTags({
      title: district.metaTitle || `Termite Control in ${district.name} | Anti-Termite Treatment`,
      description: district.metaDescription || `Professional termite control and wood borer treatment in ${district.name}, Kerala. 100% odorless, warranty backed. Call 9020040009.`,
      keywords: `termite control ${district.name}, termite treatment ${district.name}, anti termite treatment ${district.name}, wood borer treatment ${district.name}, pest control ${district.name}`,
      schema: {
        "@context": "https://schema.org",
        "@type": "PestControlService",
        "name": `TermiteControl.me - ${district.name} Division`,
        "parentOrganization": { "@type": "Organization", "name": "Eco Pest India" },
        "url": `https://termitecontrol.me/${district.slug}`,
        "telephone": "+91-9020040009",
        "areaServed": `${district.name} District, Kerala`,
        "priceRange": "₹₹"
      }
    });
    window.scrollTo(0, 0);
  }, [district]);

  if (!district) return null;

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section for District */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950 text-white pt-8 pb-16 lg:py-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-4">
            <span>Home</span>
            <span>/</span>
            <span>Kerala Locations</span>
            <span>/</span>
            <span className="text-emerald-400 font-semibold">{district.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Serving All Areas in {district.name} District</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                Professional Termite Control & Anti-Termite Treatment in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">{district.name}</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {district.intro}
              </p>

              {/* District Office / Quick Hotline */}
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-xs sm:text-sm text-slate-200 space-y-2">
                <p className="font-bold text-white flex items-center">
                  <Clock className="w-4 h-4 mr-1.5 text-amber-400" />
                  Same-Day Mobile Inspection Squad for {district.name}
                </p>
                <p className="text-slate-300">
                  Call our central dispatch desk on <span className="text-amber-300 font-bold">9020040009</span> to schedule a free property assessment.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 sm:gap-4 items-center pt-2">
                <button
                  onClick={() => handlePhoneClick(`district_hero_${district.id}`)}
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl transition flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  <span>Call {PRIMARY_PHONE_DISPLAY}</span>
                </button>

                <button
                  onClick={() => handleWhatsAppClick(`district_hero_${district.id}`, { location: `${district.name} District` })}
                  className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base shadow-xl transition flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>WhatsApp {district.name} Desk</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>100% Odorless</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Up to 10 Yr Warranty</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Same-Day Booking</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Govt. Approved</span>
                </div>
              </div>

            </div>

            {/* Right Column: District Lead Form */}
            <div className="lg:col-span-5">
              <LeadForm
                title={`${district.name.toUpperCase()} INSPECTION REQUEST`}
                subtitle={`Prompt technician dispatch across ${district.name}`}
                defaultLocation={`${district.name} District`}
                source={`district_landing_${district.id}`}
              />
            </div>

          </div>

        </div>
      </section>

      {/* Local Areas Grid for this District */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Areas Covered in {district.name}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our certified pest control technicians provide prompt on-site service across these key regions:
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 justify-center max-w-4xl mx-auto">
            {district.majorAreas.map((area, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm flex items-center space-x-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                <span>{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-emerald-50 rounded-2xl border border-emerald-200 max-w-3xl mx-auto text-center">
            <p className="text-sm font-bold text-emerald-950">
              Don't see your specific town or panchayat listed?
            </p>
            <p className="text-xs text-slate-600 mt-1">
              We cover all municipalities and rural locations in {district.name}. Contact our dispatch coordinator at 9020040009.
            </p>
          </div>

        </div>
      </section>

      {/* Standard FAQ */}
      <FAQSection />

      {/* Bottom CTA */}
      <PrimaryBottomCTA onOpenInspectionModal={onOpenInspectionModal} />

    </div>
  );
}
