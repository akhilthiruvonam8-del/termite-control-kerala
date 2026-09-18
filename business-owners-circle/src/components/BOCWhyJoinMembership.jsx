import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Crown, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  Briefcase, 
  Award, 
  Zap, 
  Users, 
  Globe, 
  PhoneCall,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';

/**
 * Module 2: Why Join BOC? & Executive Membership Plans
 * Based on Section 6, 7 & 45 of BOC Master Development Brief
 * Inspired by EO, YPO, Vistage, TiE Global & Founders Network
 */
export default function BOCWhyJoinMembership({ onOpenJoinModal }) {
  const [selectedBilling, setSelectedBilling] = useState('annual');

  const benefits = [
    {
      title: 'Guaranteed Category Exclusivity',
      desc: 'Lock out direct competitors. Exactly one verified business owner per industry vertical is admitted to each local chapter.',
      icon: ShieldCheck
    },
    {
      title: 'Peer-Vetted Qualified Referrals',
      desc: 'Receive pre-qualified introductions to decision-makers. No random cold calls or unverified consumer leads.',
      icon: Zap
    },
    {
      title: 'Enterprise Consortium Bidding',
      desc: 'Team up with complementary founders to pitch and execute large multi-crore enterprise and government projects together.',
      icon: Layers
    },
    {
      title: 'Digital Executive Profile & Directory',
      desc: 'Searchable public verification badge, CEO biography, service listings, direct WhatsApp, and call buttons for credibility.',
      icon: Users
    },
    {
      title: 'Weekly Sunrise Conclaves',
      desc: 'Structured high-energy meetings every week with strict 7:00 AM punctuality, referral tracking, and member showcases.',
      icon: Calendar
    },
    {
      title: 'Global Chapter Reciprocity',
      desc: 'Visiting rights and cross-chapter referral passing across upcoming city hubs in India, the UAE, and overseas.',
      icon: Globe
    },
  ];

  const plans = [
    {
      id: 'professional',
      name: 'PROFESSIONAL',
      tier: 'Charter Associate',
      badge: 'Independent Practitioners',
      tagline: 'For licensed professionals, specialized consultants & boutique agency founders.',
      features: [
        '1 Chapter Seat (Category Locked)',
        'Weekly Sunrise Conclave Attendance',
        'Direct Referral Exchange Rights',
        'Verified Member Digital Profile',
        'Secretariat Referral Logging',
        'Standard B2B Directory Listing',
      ],
      isPopular: false,
      ctaText: 'APPLY FOR PROFESSIONAL'
    },
    {
      id: 'business',
      name: 'BUSINESS',
      tier: 'Established SME Seat',
      badge: 'Core Enterprise',
      tagline: 'For established service providers, trading firms, IT scaleups & contractors.',
      features: [
        'Everything in Professional Seat',
        'Priority Chapter Category Locking',
        'Quarterly 10-Minute Keynote Spotlight',
        'Joint Venture Consortium Pitch Rights',
        'Featured Spotlight in Business Directory',
        'Executive WhatsApp Secretariat Support',
      ],
      isPopular: false,
      ctaText: 'APPLY FOR BUSINESS'
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      tier: 'Flagship Executive',
      badge: 'MOST POPULAR',
      tagline: 'For high-growth founders, manufacturing heads & multi-branch business owners.',
      features: [
        'Everything in Business Seat',
        'Invitation to Quarterly Rooftop CEO Dinners',
        'Cross-Chapter Visiting & Pitch Rights',
        'Eligible for Chapter Leadership & Board',
        'Annual Conclave VIP Delegate Passes',
        'Priority Referral Matching by Council',
      ],
      isPopular: true,
      ctaText: 'APPLY FOR EXECUTIVE SEAT'
    },
    {
      id: 'corporate',
      name: 'CORPORATE',
      tier: 'Conglomerate Circle',
      badge: 'Enterprise Institutional',
      tagline: 'For multi-vertical groups, enterprise conglomerates & regional market leaders.',
      features: [
        'Dual-Representative Chapter Presence',
        'Multi-Industry Cross-Chapter Access',
        'BOC Annual Conclave Sponsor Branding',
        'Dedicated Secretariat Key Account Manager',
        'Private Syndicate & M&A Roundtable Access',
        'Founder Advisory & Board Mentorship',
      ],
      isPopular: false,
      ctaText: 'APPLY FOR CORPORATE'
    },
  ];

  const journeySteps = [
    { step: '01', title: 'Submit Application', desc: 'Complete verified profile & business category details' },
    { step: '02', title: 'Council Verification', desc: 'Chapter board reviews category availability & reputation' },
    { step: '03', title: 'Chapter Induction', desc: 'Formal introduction at weekly sunrise conclave' },
    { step: '04', title: 'Referral Exchange', desc: 'Start giving & receiving verified business opportunities' },
  ];

  return (
    <section id="membership" className="relative w-full py-20 lg:py-28 bg-[#030914] text-slate-100 overflow-hidden border-t border-[#DFC688]/20">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-[#DFC688]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#071B3A]/70 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================================================================= */}
        {/* 1. SECTION HEADER                                                 */}
        {/* ================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#041126] border border-[#DFC688]/40 shadow-[0_0_15px_rgba(223,198,136,0.2)]">
            <Crown className="w-3.5 h-3.5 text-[#FCE38A]" />
            <span className="text-[11px] font-black tracking-[0.24em] text-[#FCE38A] uppercase">
              MODULE 2: MEMBERSHIP & VALUE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FFF5C0] to-[#DFC688]">
            Why Forward-Thinking Founders Join BOC
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Traditional advertising has diminishing returns. BOC gives you an executive salesforce of 50+ non-competing business owners actively recommending your services to their personal and corporate networks.
          </p>
        </div>

        {/* ================================================================= */}
        {/* 2. SIX STRATEGIC ADVANTAGES GRID                                 */}
        {/* ================================================================= */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const IconComp = benefit.icon;
            return (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-[#041126]/90 border border-[#DFC688]/25 hover:border-[#FCE38A] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_40px_rgba(223,198,136,0.25)] hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#030C1C] border border-[#DFC688]/40 flex items-center justify-center text-[#FCE38A] mb-5 shadow-[0_0_15px_rgba(252,227,138,0.3)] group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-cinzel font-bold text-lg text-white group-hover:text-[#FCE38A] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-2.5">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ================================================================= */}
        {/* 3. MEMBERSHIP PLANS (4 TIERS: SECTION 6 OF BRIEF)                 */}
        {/* ================================================================= */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black tracking-[0.24em] text-[#DFC688] uppercase">
              SELECT YOUR MEMBERSHIP LEVEL
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-black text-white mt-1.5">
              Structured Executive Plans
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Every membership tier includes strict category locking to guarantee zero peer conflict.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {plans.map((plan) => {
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                    plan.isPopular 
                      ? 'bg-gradient-to-b from-[#061838] via-[#041126] to-[#020712] border-2 border-[#FCE38A] shadow-[0_0_35px_rgba(252,227,138,0.25)] -translate-y-2' 
                      : 'bg-[#041126]/95 border border-[#DFC688]/30 hover:border-[#DFC688]/70 shadow-xl'
                  }`}
                >
                  {/* Popular Floating Badge */}
                  {plan.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#F0DC9B] via-[#E2C77D] to-[#C5A059] text-[#041126] text-[10px] font-black tracking-widest uppercase shadow-[0_2px_12px_rgba(229,196,90,0.6)]">
                      MOST POPULAR
                    </div>
                  )}

                  <div>
                    <div className="text-[10px] font-black tracking-widest text-[#DFC688] uppercase">
                      {plan.tier}
                    </div>

                    <h4 className="font-cinzel font-black text-2xl text-white mt-1">
                      {plan.name}
                    </h4>

                    <p className="text-[11px] text-slate-300 mt-3 min-h-[44px] leading-relaxed">
                      {plan.tagline}
                    </p>

                    <div className="py-4 my-4 border-y border-white/10">
                      <div className="text-[11px] font-bold text-[#FCE38A] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FCE38A]" />
                        <span>1 Seat Per Chapter Guaranteed</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-1">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#DFC688] flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Plan CTA Button */}
                  <div className="pt-8 mt-6">
                    <button
                      onClick={onOpenJoinModal}
                      className={`w-full py-3 px-4 rounded-full font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 ${
                        plan.isPopular
                          ? 'bg-gradient-to-r from-[#FFE58F] via-[#F5C042] to-[#D49319] border-2 border-[#FFF6C7] text-[#030914] shadow-[0_0_20px_rgba(245,192,66,0.6)] hover:brightness-110'
                          : 'bg-[#030C1C] border border-[#DFC688]/60 text-[#DFC688] hover:bg-[#071B3A] hover:text-white hover:border-[#FCE38A]'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* ================================================================= */}
        {/* 4. APPLICATION & INDUCTION JOURNEY (SECTION 7 OF BRIEF)           */}
        {/* ================================================================= */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#041126] via-[#030C1C] to-[#041126] border border-[#DFC688]/30 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-black tracking-[0.24em] text-[#DFC688] uppercase">
              4-STEP INDUCTION ROADMAP
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1">
              How to Become a BOC Member
            </h3>
            <p className="text-xs text-slate-300 mt-1.5">
              Strict governance ensures category exclusivity and maintains peer quality across all chapters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((step, sIdx) => (
              <div key={sIdx} className="relative p-6 rounded-2xl bg-[#020712]/90 border border-white/5 flex flex-col justify-between group hover:border-[#DFC688]/50 transition-all">
                <div>
                  <span className="font-cinzel font-black text-3xl text-[#DFC688]/30 group-hover:text-[#FCE38A] transition-colors">
                    {step.step}
                  </span>
                  <h4 className="font-cinzel font-bold text-base text-white mt-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1 text-[11px] font-bold text-[#DFC688]">
                  <span>Step {step.step}</span>
                  <ChevronRight className="w-3 h-3 text-[#DFC688]" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 text-center">
            <button
              onClick={onOpenJoinModal}
              className="py-3.5 px-8 rounded-full bg-gradient-to-r from-[#F0DC9B] via-[#E2C77D] to-[#C5A059] text-[#041126] font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_25px_rgba(197,160,89,0.5)] hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2.5 cursor-pointer"
            >
              <span>CHECK SEAT AVAILABILITY & APPLY NOW</span>
              <ArrowRight className="w-4 h-4 stroke-[2.8]" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
