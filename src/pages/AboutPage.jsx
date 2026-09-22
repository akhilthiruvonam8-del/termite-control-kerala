import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Globe, 
  Award, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import bocLogoPng from '../assets/boc-logo.png';
import retreatImg from '../assets/boc-event-retreat.jpg';

export default function AboutPage({ onOpenJoinModal }) {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Uncompromising Trust & Integrity',
      description: 'Every BOC member represents their category with peer-verified credentials, ethical conduct, and mutual respect.',
    },
    {
      icon: Users,
      title: 'Zero Category Competition',
      description: 'Members enjoy absolute exclusivity within their chapter, ensuring unreserved collaboration and full referral support.',
    },
    {
      icon: Target,
      title: 'Measurable Economic Growth',
      description: 'We do not engage in casual social networking; every conclave is designed to drive tangible business turnover and expansion.',
    },
    {
      icon: Globe,
      title: 'Kerala Roots, Global Ambition',
      description: 'From Cochin to Dubai, London, and New York, BOC connects forward-looking entrepreneurs to worldwide opportunities.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#020713] text-white pt-24 sm:pt-28 pb-20 selection:bg-[#D4AF37] selection:text-[#07172C] w-full max-w-full overflow-x-hidden relative">
      
      {/* Background Ambient Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172C] border border-[#D4AF37]/60 text-[#F9D678] text-xs font-cinzel font-bold tracking-[0.25em] uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F9D678]" />
            <span>WHO WE ARE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            About <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#F5C75D] bg-clip-text text-transparent">Business Owners Circle</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A professional executive business community built to empower business owners, 
            support business growth, and build meaningful professional connections across Kerala and globally.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Vision */}
          <div className="bg-gradient-to-b from-[#06172E] to-[#040E1E] rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/40 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#092244] border border-[#D4AF37] text-[#F9D678] flex items-center justify-center mb-6 shadow-md">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-cinzel font-bold text-[#F9D678] tracking-widest uppercase block mb-2">
              OUR VISION
            </span>
            <h3 className="font-serif font-bold text-2xl text-white mb-4">
              To Build India’s Most Trusted Global Business Fraternity
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We envision a borderless ecosystem where visionary business owners support, mentor, and trade with each other 
              underpinned by authentic relationships, category exclusivity, and generational wealth creation.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-b from-[#06172E] to-[#040E1E] rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/40 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#092244] border border-[#D4AF37] text-[#F9D678] flex items-center justify-center mb-6 shadow-md">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-cinzel font-bold text-[#F9D678] tracking-widest uppercase block mb-2">
              OUR MISSION
            </span>
            <h3 className="font-serif font-bold text-2xl text-white mb-4">
              Empowering Members to Scale Beyond Boundaries
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To provide ambitious founders with a proven chapter meeting rhythm, pre-qualified referral exchange protocol, 
              executive masterclasses, and statewide alliances that multiply enterprise revenue and impact.
            </p>
          </div>

        </div>

        {/* 4 Core Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-cinzel font-bold text-[#F9D678] tracking-widest uppercase block mb-2">
              FOUNDATIONAL PRINCIPLES
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
              The BOC Values Code
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="bg-[#051329] p-6 rounded-2xl border border-[#D4AF37]/35 hover:border-[#F9D678] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#092244] border border-[#D4AF37]/60 text-[#F9D678] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-white mb-2">{v.title}</h4>
                  <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership & Secretariat Banner */}
        <div className="bg-[#051329] border border-[#D4AF37]/40 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <img src={bocLogoPng} alt="BOC" className="w-16 h-16 mx-auto mb-4 object-contain drop-shadow-md" />
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-3">
            Guided by Proven Industry Captains
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto">
            BOC is governed by an elected Advisory Council of prominent industrialists, senior chartered accountants, 
            legal luminaries, and tech entrepreneurs committed to member success and statewide expansion.
          </p>
          <button
            onClick={onOpenJoinModal}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer"
          >
            Apply to Join the Circle →
          </button>
        </div>

      </div>

    </div>
  );
}
