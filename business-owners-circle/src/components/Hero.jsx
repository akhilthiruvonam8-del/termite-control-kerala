import React, { useState } from 'react';
import { Phone, MessageCircle, ShieldCheck, MapPin, Award, CheckCircle2, FileCheck, Volume2, VolumeX, Users, Shield } from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';
import LeadForm from './LeadForm';

export default function Hero({ onOpenInspectionModal }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handlePlayAudio = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        window.speechSynthesis.cancel();
        const text = "Welcome to TermiteControl.me by Eco Pest India. We provide professional anti-termite treatment, white ant eradication, and pre-construction soil protection for homes, luxury villas, and commercial properties across Kerala with up to 10 years warranty. Call us at 9020040009 for a free property inspection.";
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

  return (
    <>
      {/* 1. Main Split Hero Section */}
      <section className="relative overflow-hidden bg-[#062419] text-white pt-6 pb-12 lg:pt-10 lg:pb-16">
        
        {/* Ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column: Heading, Sub-heading, 5 Green Square Trust Points & CTAs */}
            <div className="lg:col-span-6 space-y-4 text-left">
              
              <div className="text-amber-400 font-bold text-xs sm:text-sm tracking-widest uppercase font-mono">
                PROFESSIONAL TERMITE & WOOD BORER TREATMENT
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
                Professional Termite Control Services in Kerala
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
                  onClick={() => handlePhoneClick('hero_call')}
                  className="px-6 py-3 rounded-lg bg-[#C69C3D] hover:bg-[#b58c32] text-slate-950 font-extrabold text-sm sm:text-base shadow-lg transition flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>CALL NOW</span>
                </button>

                <button
                  onClick={() => handleWhatsAppClick('hero_whatsapp')}
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
                      Eco Pest India Technician on Site in Kerala
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
            <p className="text-[10px] text-slate-500">All 14 Kerala Districts</p>
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
    </>
  );
}
