import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Share2, 
  Users, 
  Handshake, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Globe2, 
  Building2, 
  Lock,
  Compass,
  Target
} from 'lucide-react';
import bocLogoPng from '../assets/boc-logo.png';

/**
 * Module 1: What is BOC? (About BOC / Executive Philosophy & Global Architecture)
 * Based on Section 1, 4, 5 & 14 of BOC Master Development Brief
 * Inspired by EO, YPO, Vistage & TiE Global architecture
 */
export default function BOCWhatIsBOC({ onOpenJoinModal }) {
  const pillars = [
    {
      id: 'refer',
      title: 'REFER',
      icon: Share2,
      subtitle: 'Verified Introductions',
      desc: 'Connect fellow founders with genuine, high-value business opportunities when trusted clients demand reliable enterprise services.',
      metric: '100% Verified',
      accent: 'from-[#FFE27A]/20 to-[#C9A227]/5'
    },
    {
      id: 'collaborate',
      title: 'COLLABORATE',
      icon: Users,
      subtitle: 'Joint Ventures',
      desc: 'Form multi-disciplinary consortiums and service packages to pitch, win, and execute enterprise-scale contracts together.',
      metric: 'Consortium Power',
      accent: 'from-[#FFE27A]/20 to-[#C9A227]/5'
    },
    {
      id: 'support',
      title: 'SUPPORT',
      icon: Handshake,
      subtitle: 'Peer Advisory',
      desc: 'Confidential peer masterminds, operational advice, and verified supplier networks. A fraternity where you never build alone.',
      metric: 'Executive Trust',
      accent: 'from-[#FFE27A]/20 to-[#C9A227]/5'
    },
    {
      id: 'grow',
      title: 'GROW',
      icon: TrendingUp,
      subtitle: 'Compounding Scale',
      desc: 'Transform scattered marketing efforts into a predictable, compounding referral pipeline that scales your revenue and prestige.',
      metric: 'Predictable Scale',
      accent: 'from-[#FFE27A]/20 to-[#C9A227]/5'
    }
  ];

  const highlights = [
    {
      icon: Lock,
      title: 'Category Exclusivity',
      desc: 'Only 1 verified seat per industry vertical per chapter. Zero competition, zero conflict of interest.'
    },
    {
      icon: Award,
      title: 'Council-Vetted Leaders',
      desc: 'Strict screening process ensuring every member is an active founder, director, or managing partner.'
    },
    {
      icon: Globe2,
      title: 'Multi-City Architecture',
      desc: 'Built on a scalable Country → Region → City → Chapter structure for pan-India and global conclaves.'
    },
    {
      icon: Target,
      title: 'Weekly Structured Conclaves',
      desc: 'Punctual 7:00 AM sunrise meetings with focused referral rounds, B2B showcases, and 1-on-1 synergies.'
    }
  ];

  return (
    <section id="about" className="relative w-full py-20 lg:py-28 bg-[#020712] text-slate-100 overflow-hidden border-t border-[#DFC688]/20">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C5A059]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#071B3A]/80 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================================================================= */}
        {/* 1. SECTION HEADER BADGE & TITLE                                   */}
        {/* ================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#041126] border border-[#DFC688]/40 shadow-[0_0_15px_rgba(223,198,136,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#FCE38A]" />
            <span className="text-[11px] font-black tracking-[0.24em] text-[#FCE38A] uppercase">
              MODULE 1: WHAT IS BOC?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FFF5C0] to-[#DFC688]">
            More Than Exchanging Business Cards
          </h2>

          <p className="text-[#DFC688] font-cinzel font-bold text-sm sm:text-base tracking-[0.2em] uppercase">
            BUILD CONNECTIONS. CREATE OPPORTUNITIES. GROW TOGETHER.
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Business Owner’s Circle (BOC) is not an open directory or casual meetup. It is an exclusive, structured business networking ecosystem where established founders and decision-makers unite to exchange qualified referrals, build joint ventures, and scale together.
          </p>
        </div>

        {/* ================================================================= */}
        {/* 2. EXECUTIVE CORE VALUE SPLIT                                     */}
        {/* ================================================================= */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: The Philosophy & Founding Truth */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#041126] via-[#030C1C] to-[#020712] border border-[#DFC688]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#DFC688]/10 rounded-full blur-3xl pointer-events-none" />
              
              <span className="text-[11px] font-black tracking-[0.25em] text-[#DFC688] uppercase block mb-2">
                OUR FOUNDING PHILOSOPHY
              </span>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white leading-snug">
                “Your Network Determines Your Net Worth. Your Circle Determines Your Growth.”
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-4">
                A business owner may build a superior product or service, but high-margin growth rarely comes through cold outreach. It comes through trusted introductions, peer endorsements, joint venture bids, and warm handshakes.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-cinzel font-black text-[#FCE38A]">1 Seat</div>
                  <div className="text-xs text-slate-400 mt-0.5">Per Industry Category</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-cinzel font-black text-[#FCE38A]">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Council Verified Peers</div>
                </div>
              </div>
            </div>

            {/* 4 Pillars Mini-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-[#030C1C]/90 border border-[#DFC688]/20 hover:border-[#DFC688]/60 transition-all duration-300 group shadow-lg"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#041126] border border-[#DFC688]/40 flex items-center justify-center text-[#FCE38A] mb-3 group-hover:scale-105 transition-transform shadow-[0_0_12px_rgba(223,198,136,0.3)]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-cinzel font-bold text-sm text-white group-hover:text-[#FCE38A] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-1.5">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: The Official Seal & Crest Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#030C1C] via-[#041126] to-[#010612] border-2 border-[#DFC688]/50 shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-center relative group">
              
              {/* Gold Ring Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#C5A059]/30 to-[#FCE38A]/20 blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />

              <div className="relative z-10 flex flex-col items-center">
                {/* 3D Gold Medallion */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 mb-6 transition-transform duration-500 group-hover:scale-105">
                  <img 
                    src={bocLogoPng} 
                    alt="BOC Official Crest" 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(223,198,136,0.7)]"
                  />
                </div>

                <span className="font-cinzel font-black tracking-[0.24em] text-xs text-[#DFC688] uppercase mb-1">
                  OFFICIAL CHARTER
                </span>

                <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-white">
                  Business Owners Circle
                </h3>

                <p className="text-xs text-slate-300 mt-3 leading-relaxed max-w-xs">
                  A sovereign peer alliance inspired by international standards of EO, YPO, and Vistage, engineered exclusively for forward-thinking Indian & global business leaders.
                </p>

                <div className="w-full mt-6 pt-6 border-t border-[#DFC688]/20 space-y-2 text-left">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#FCE38A] flex-shrink-0" />
                    <span>Cross-Chapter Referral Tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#FCE38A] flex-shrink-0" />
                    <span>Searchable Public Digital Directory</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#FCE38A] flex-shrink-0" />
                    <span>Monthly Rooftop CEO Dinners</span>
                  </div>
                </div>

                <button
                  onClick={onOpenJoinModal}
                  className="w-full mt-6 py-3 px-6 rounded-full bg-gradient-to-r from-[#F0DC9B] via-[#E2C77D] to-[#C5A059] text-[#041126] font-extrabold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(197,160,89,0.5)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>REQUEST INVITATION</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* ================================================================= */}
        {/* 3. FOUR PILLARS OF BOC (REFER • COLLABORATE • SUPPORT • GROW)     */}
        {/* ================================================================= */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black tracking-[0.24em] text-[#DFC688] uppercase">
              THE FOUR PILLARS
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-black text-white mt-1.5">
              The Four Cornerstones of the Circle
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Every member both actively contributes to and reaps continuous benefits from this disciplined four-stage cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="group relative rounded-3xl p-7 bg-gradient-to-b from-[#041126]/95 to-[#020A17] border border-[#DFC688]/30 hover:border-[#FCE38A] transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_45px_rgba(223,198,136,0.3)] hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Icon Badge */}
                    <div className="w-14 h-14 rounded-2xl bg-[#030C1C] border-2 border-[#FCE38A] flex items-center justify-center text-[#FCE38A] shadow-[0_0_20px_rgba(252,227,138,0.4)] group-hover:scale-110 transition-transform">
                      <IconComp className="w-7 h-7 stroke-[2.2]" />
                    </div>

                    <div>
                      <span className="text-[10px] font-black tracking-widest uppercase text-[#DFC688]">
                        {pillar.subtitle}
                      </span>
                      <h4 className="font-cinzel font-black text-2xl text-white mt-0.5 group-hover:text-[#FCE38A] transition-colors">
                        {pillar.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-wider text-[#DFC688] uppercase">
                      {pillar.metric}
                    </span>
                    <button 
                      onClick={onOpenJoinModal}
                      className="text-xs font-bold text-[#FCE38A] group-hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
