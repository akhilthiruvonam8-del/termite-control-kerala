import React from 'react';
import { Share2, Users, Handshake, TrendingUp, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function BOCAboutPhilosophy({ onOpenJoinModal }) {
  const pillars = [
    {
      id: 'refer',
      title: 'REFER',
      icon: Share2,
      tagline: 'Give Opportunities',
      desc: 'Connect fellow members with genuine business opportunities and trusted introductions when clients need reliable services.',
      action: 'Share Opportunities',
      glow: 'from-[#FFE27A]/20 to-[#C9A227]/5'
    },
    {
      id: 'collaborate',
      title: 'COLLABORATE',
      icon: Users,
      tagline: 'Build Together',
      desc: 'Work together on joint projects, service packages, B2B campaigns, and strategic alliances to deliver larger complete solutions.',
      action: 'Form Partnerships',
      glow: 'from-[#FFE27A]/20 to-[#C9A227]/5'
    },
    {
      id: 'support',
      title: 'SUPPORT',
      icon: Handshake,
      tagline: 'Never Build Alone',
      desc: 'Share verified contacts, practical business wisdom, mentorship, and resources to help every entrepreneur navigate growth hurdles.',
      action: 'Exchange Knowledge',
      glow: 'from-[#FFE27A]/20 to-[#C9A227]/5'
    },
    {
      id: 'grow',
      title: 'GROW',
      icon: TrendingUp,
      tagline: 'Sustainable Scale',
      desc: 'Create scalable, predictable business revenue and expand your local and regional influence through a trusted ecosystem.',
      action: 'Expand Reach',
      glow: 'from-[#FFE27A]/20 to-[#C9A227]/5'
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#030A18] text-white overflow-hidden border-t border-[#C9A227]/20">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#071B3A]/80 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER: INTRODUCTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B3A]/80 border border-[#C9A227]/40 text-xs font-extrabold tracking-[0.22em] text-[#FFE27A] uppercase shadow-[0_0_15px_rgba(201,162,39,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#FFE27A]" />
            <span>BUILDING BUSINESSES THROUGH TRUSTED CONNECTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFF3C4] to-[#C9A227]">
            More Than Exchanging Visiting Cards
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            Business Owner’s Circle (BOC) – Kochi is a professional networking and collaboration community created for entrepreneurs and professionals who believe that business growth becomes stronger when opportunities are shared.
          </p>

          <p className="text-slate-400 text-xs sm:text-sm italic">
            “Networking is not about handing out cards to strangers. It is about knowing the right people, creating trust, sharing opportunities, and growing together.”
          </p>
        </div>

        {/* PHILOSOPHY CALLOUT BANNER */}
        <div className="mt-12 rounded-3xl p-8 lg:p-10 bg-gradient-to-r from-[#071B3A] via-[#041126] to-[#071B3A] border border-[#C9A227]/30 shadow-[0_15px_50px_rgba(0,0,0,0.6)] text-center relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#FFE27A]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-black tracking-[0.25em] text-[#E5C45A] uppercase">
              OUR CORE PHILOSOPHY
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-white">
              “Your Network Can Become Your Growth Network”
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              A business owner may have a great product or service, but growth often comes through the right introductions, relationships, recommendations, and strategic collaborations.
            </p>
          </div>
        </div>

        {/* FOUR PILLARS GRID */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0A5] via-[#FFE27A] to-[#D4AF37]">
              The Four Pillars of the Circle
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Every member actively contributes to and benefits from this virtuous cycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="group relative rounded-3xl p-7 bg-[#041126]/90 border border-[#C9A227]/25 hover:border-[#FFE27A] transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(201,162,39,0.25)] hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  {/* Subtle hover gradient */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${pillar.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                  <div className="relative z-10 space-y-4">
                    {/* Circular Icon with Gold Border & Glow */}
                    <div className="w-14 h-14 rounded-2xl bg-[#071B3A] border-2 border-[#FFE27A] flex items-center justify-center text-[#FFE27A] shadow-[0_0_20px_rgba(255,226,122,0.35)] group-hover:scale-110 transition-transform duration-300">
                      <IconComp className="w-7 h-7 stroke-[2.2]" />
                    </div>

                    <div>
                      <div className="text-[10px] font-extrabold tracking-widest uppercase text-[#FFE27A]">
                        {pillar.tagline}
                      </div>
                      <h4 className="text-2xl font-cinzel font-black text-white mt-0.5">
                        {pillar.title}
                      </h4>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="relative z-10 pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#FFE27A] group-hover:text-white transition-colors">
                    <span>{pillar.action}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
