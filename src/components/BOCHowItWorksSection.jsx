import React from 'react';
import { UserCheck, Shield, Share2, Users, HeartHandshake, Rocket, ArrowRight } from 'lucide-react';

export default function BOCHowItWorksSection({ onOpenJoinModal }) {
  const steps = [
    {
      step: '01',
      title: 'CONNECT',
      desc: 'Meet vetted business owners and decision-makers across diverse industries in Kochi.',
      icon: UserCheck,
    },
    {
      step: '02',
      title: 'BUILD TRUST',
      desc: 'Develop authentic relationships through weekly masterminds and regular engagement.',
      icon: Shield,
    },
    {
      step: '03',
      title: 'REFER',
      desc: 'Identify qualified needs and introduce trusted customers to fellow Circle members.',
      icon: Share2,
    },
    {
      step: '04',
      title: 'COLLABORATE',
      desc: 'Form multi-disciplinary consortiums to bid for larger high-value commercial contracts.',
      icon: Users,
    },
    {
      step: '05',
      title: 'SUPPORT',
      desc: 'Help peers with strategic introductions, market insights, and peer advisory support.',
      icon: HeartHandshake,
    },
    {
      step: '06',
      title: 'GROW',
      desc: 'Enjoy compounding business volume, revenue, and an unshakeable regional reputation.',
      icon: Rocket,
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 bg-[#020712] text-white border-t border-[#C9A227]/20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B3A]/80 border border-[#C9A227]/40 text-xs font-extrabold tracking-[0.22em] text-[#FFE27A] uppercase">
            <span>STRUCTURED METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFF3C4] to-[#C9A227]">
            One Community. Multiple Opportunities.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            The Business Owner’s Circle follows a proven 6-stage blueprint that transforms simple introductions into measurable, long-term commercial success.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.step}
                className="group relative rounded-3xl p-8 bg-[#051124]/80 border border-[#C9A227]/25 hover:border-[#FFE27A] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(201,162,39,0.2)] hover:-translate-y-1"
              >
                {/* Step Number Watermark */}
                <div className="absolute top-6 right-6 font-cinzel font-black text-4xl lg:text-5xl text-[#C9A227]/15 group-hover:text-[#FFE27A]/30 transition-colors">
                  {item.step}
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#071B3A] border border-[#FFE27A]/60 flex items-center justify-center text-[#FFE27A] shadow-[0_0_15px_rgba(255,226,122,0.25)] mb-6 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6 stroke-[2.2]" />
                </div>

                <h3 className="text-xl font-cinzel font-bold text-white mb-2 group-hover:text-[#FFE27A] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenJoinModal}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#F7E7A9] via-[#E5C45A] to-[#C9A227] text-[#041126] font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_25px_rgba(229,196,90,0.5)] hover:brightness-110 active:scale-95 transition-all"
          >
            <span>START YOUR 6-STEP GROWTH JOURNEY</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
}
