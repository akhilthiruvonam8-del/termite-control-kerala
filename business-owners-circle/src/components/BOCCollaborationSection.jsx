import React from 'react';
import { Layers, Plus, Check, ArrowRight, ShieldCheck, Cpu, Megaphone, Camera, Palette } from 'lucide-react';

export default function BOCCollaborationSection({ onOpenJoinModal }) {
  const collaborationFormats = [
    'Joint Commercial Projects',
    'Cross-Discipline Packages',
    'B2B Strategic Alliances',
    'Co-Marketing Initiatives',
    'Vendor & Supply Partnerships',
    'Consortium Bidding',
    'Shared Knowledge Labs',
    'Cross-Referral Pacts'
  ];

  const packageMembers = [
    { role: 'Web & App Developer', name: 'Cloud & Portal Tech', icon: Cpu },
    { role: 'Digital Marketing Agency', name: 'Performance Ads & SEO', icon: Megaphone },
    { role: 'Commercial Photographer', name: 'Product & Studio Media', icon: Camera },
    { role: 'Branding Consultant', name: 'Brand Strategy & Identity', icon: Palette },
  ];

  return (
    <section id="collaborate" className="relative py-20 lg:py-28 bg-[#020713] text-white border-t border-[#C9A227]/20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B3A]/80 border border-[#C9A227]/40 text-xs font-extrabold tracking-[0.22em] text-[#FFE27A] uppercase">
            <Layers className="w-3.5 h-3.5 text-[#FFE27A]" />
            <span>MUTUAL COLLABORATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFF3C4] to-[#C9A227]">
            Don’t Just Network. Build Together.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Many businesses in Kochi can create far greater client value and revenue by packaging their complementary services into unified, turnkey enterprise solutions.
          </p>
        </div>

        {/* Featured Showcase: 4 Members = 1 Complete Turnkey Solution */}
        <div className="mt-16 rounded-3xl p-8 lg:p-12 bg-gradient-to-b from-[#06142B] to-[#030A17] border-2 border-[#C9A227]/35 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-black tracking-[0.26em] text-[#FFE27A] uppercase">
              REAL-WORLD COLLABORATION BLUEPRINT
            </span>
            <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-white mt-1">
              One Client + Multiple BOC Members = One Complete Solution
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Instead of losing clients to giant conglomerates, Circle members team up to deliver full-scale enterprise capability with boutique personalized agility.
            </p>
          </div>

          {/* 4 Cards Connected with Plus icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {packageMembers.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={item.role} className="relative">
                  <div className="p-6 rounded-2xl bg-[#071E42]/80 border border-[#FFE27A]/30 text-center space-y-3 hover:border-[#FFE27A] transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-[#041126] border border-[#C9A227]/50 flex items-center justify-center text-[#FFE27A] mx-auto shadow-[0_0_15px_rgba(255,226,122,0.25)]">
                      <IconComp className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-wider text-[#FFE27A] uppercase">
                        {item.role}
                      </div>
                      <div className="text-sm font-semibold text-white mt-0.5">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Equals Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <div className="inline-block p-4 sm:p-5 rounded-2xl bg-[#030914] border border-[#FFE27A]/50 shadow-[0_0_25px_rgba(255,226,122,0.15)]">
              <span className="text-xs sm:text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0A5] via-[#FFE27A] to-[#D4AF37] uppercase tracking-wider">
                RESULT: Turnkey ₹15,00,000 Enterprise Digital Transformation Package for Kochi Client
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Different expertise. One single contract. Shared revenue. Lasting client satisfaction.
            </p>
          </div>
        </div>

        {/* 8 Collaboration Formats Grid */}
        <div className="mt-14">
          <div className="text-center mb-8">
            <h4 className="text-lg font-cinzel font-bold text-white">
              Recognized Collaboration Pathways in BOC
            </h4>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
            {collaborationFormats.map((format) => (
              <div
                key={format}
                className="p-4 rounded-xl bg-[#051124]/80 border border-[#C9A227]/20 flex items-center gap-2.5 text-xs text-slate-200"
              >
                <div className="w-5 h-5 rounded-full bg-[#071B3A] border border-[#FFE27A] flex items-center justify-center text-[#FFE27A] flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="font-semibold">{format}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
