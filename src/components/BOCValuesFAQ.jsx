import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Heart, 
  RefreshCw, 
  Users, 
  Award, 
  TrendingUp, 
  ChevronDown, 
  HelpCircle, 
  Sparkles,
  Quote
} from 'lucide-react';

export default function BOCValuesFAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  const values = [
    { title: 'TRUST', desc: 'We foster genuine, authentic, long-term professional relationships over transactional card swaps.', icon: ShieldCheck },
    { title: 'INTEGRITY', desc: 'Strict ethical codes govern every referral, customer delivery, and commercial transaction.', icon: Heart },
    { title: 'RECIPROCITY', desc: 'The Circle thrives because members actively seek to give opportunities first before asking.', icon: RefreshCw },
    { title: 'COLLABORATION', desc: 'We believe multi-disciplinary alliances create exponential commercial value for clients.', icon: Users },
    { title: 'RESPECT', desc: 'Every industry, professional discipline, and business scale commands equal dignity.', icon: Award },
    { title: 'SUSTAINABLE GROWTH', desc: 'Focusing on reliable, scalable, recurring revenue pipelines that withstand market shifts.', icon: TrendingUp },
  ];

  const faqs = [
    {
      q: 'What is Business Owner’s Circle (BOC)?',
      a: 'Business Owner’s Circle is an exclusive, structured business networking and collaboration community based in Kochi, Kerala. It connects vetted entrepreneurs and corporate leaders to exchange genuine business referrals, co-create turnkey solutions, provide mutual support, and grow together.'
    },
    {
      q: 'Who can join the Kochi Chapter?',
      a: 'Membership is open to established Business Owners, Startup Founders, Managing Directors, Corporate Consultants, and licensed Professionals (such as Chartered Accountants, Corporate Advocates, and Architects). Every applicant undergoes a peer review by the Membership Admissions Committee.'
    },
    {
      q: 'How does the Refer & Earn policy work?',
      a: 'When you identify a genuine customer need for a service provided by a fellow member, you make a warm introduction through the portal. When that introduction closes into a commercial agreement, the referring member receives an agreed-upon referral reward based on the Circle’s referral guidelines and agreed commercial terms.'
    },
    {
      q: 'Can members collaborate on joint bids or projects?',
      a: 'Yes! Cross-disciplinary collaboration is one of our defining core pillars. For example, a web developer, a branding consultant, a photographer, and a digital marketer can package a unified turnkey project for an enterprise client.'
    },
    {
      q: 'Are there regular structured meetings?',
      a: 'Yes. The Kochi Chapter meets every Wednesday morning from 7:30 AM to 9:30 AM for a structured mastermind breakfast, followed by referral exchange sessions, business presentations, and 1-on-1 collaboration break-outs.'
    },
    {
      q: 'Can multiple businesses from the exact same industry category join?',
      a: 'No. To eliminate conflict of interest and guarantee maximum referral concentration, each BOC Chapter enforces a strict "One Verified Leader per Business Category" exclusivity rule.'
    },
  ];

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-[#020712] text-white border-t border-[#C9A227]/20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* VALUES SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B3A]/80 border border-[#C9A227]/40 text-xs font-extrabold tracking-[0.22em] text-[#FFE27A] uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FFE27A]" />
            <span>FOUNDATIONAL PRINCIPLES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFF3C4] to-[#C9A227]">
            What Makes Our Circle Strong?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            These six core values guide every interaction, partnership, and referral inside the Business Owner’s Circle.
          </p>
        </div>

        {/* 6 Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {values.map((v) => {
            const IconComp = v.icon;
            return (
              <div
                key={v.title}
                className="p-7 rounded-3xl bg-[#051124]/80 border border-[#C9A227]/25 hover:border-[#FFE27A] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#071B3A] border border-[#FFE27A]/50 flex items-center justify-center text-[#FFE27A] shadow-[0_0_15px_rgba(255,226,122,0.25)]">
                    <IconComp className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-xl font-cinzel font-bold text-white">
                    {v.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ SECTION */}
        <div className="max-w-4xl mx-auto pt-8">
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071B3A]/80 border border-[#C9A227]/40 text-xs font-extrabold tracking-widest text-[#FFE27A] uppercase">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-cinzel font-black text-white">
              Everything You Need to Know About BOC
            </h3>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-[#C9A227]/30 bg-[#06142B]/90 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:text-[#FFE27A] transition-colors"
                  >
                    <span className="font-cinzel font-bold text-sm sm:text-base text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FFE27A] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-in fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
