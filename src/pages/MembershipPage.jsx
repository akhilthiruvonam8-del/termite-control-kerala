import React from 'react';
import { 
  Check, 
  ShieldCheck, 
  Crown, 
  Sparkles, 
  ArrowRight, 
  Star, 
  Building2, 
  Users, 
  Globe 
} from 'lucide-react';

export default function MembershipPage({ onOpenJoinModal }) {
  const plans = [
    {
      id: 'plan-pro',
      name: 'PROFESSIONAL',
      badge: 'Rising Founders',
      popular: false,
      description: 'Ideal for independent professionals and specialized service founders entering the executive network.',
      features: [
        'Local Chapter Category Exclusivity',
        'Weekly Chapter Conclaves & Breakfasts',
        'Access to Verified Member Directory',
        'Direct 1-on-1 Synergy Sessions',
        'BOC Digital Membership Badge',
        'Direct Referral Exchange Protocol',
      ],
      notIncluded: [
        'Statewide Multi-Chapter Visiting Access',
        'Annual Backwater Retreat Pass',
        'Executive Spotlight Presentation',
      ],
      cta: 'Apply for Professional Tier',
    },
    {
      id: 'plan-business',
      name: 'BUSINESS',
      badge: 'Established Enterprises',
      popular: false,
      description: 'Designed for scaling business owners and established SMEs expanding regional presence.',
      features: [
        '100% Industry Category Exclusivity',
        'Weekly Chapter Breakfast Meetings',
        'Full Verified Member Directory Access',
        'Bi-Monthly Regional Synergy Mixers',
        'Priority Referral Introduction Queues',
        'Access to BOC Workshop Masterclasses',
        'Dedicated Secretariat Support',
      ],
      notIncluded: [
        'Annual Backwater Retreat Pass',
        'International Chapter Access',
      ],
      cta: 'Apply for Business Tier',
    },
    {
      id: 'plan-premium',
      name: 'PREMIUM',
      badge: 'Most Popular',
      popular: true,
      description: 'The premier tier for prominent CEOs, managing directors, and founders commanding multi-city influence.',
      features: [
        'Exclusive Category Lock Across Chapter',
        'Statewide Visiting Passes to All Kerala Chapters',
        'Annual Executive Backwater Retreat Pass',
        'Quarterly Keynote Spotlight Presentation',
        'Priority Referral Introduction Network',
        'Access to International Conclaves & Summits',
        'VIP Access to Strategic Masterclasses',
        'Dedicated Relationship Officer',
      ],
      notIncluded: [],
      cta: 'Apply for Premium Tier',
    },
    {
      id: 'plan-corporate',
      name: 'CORPORATE',
      badge: 'Conglomerates & Groups',
      popular: false,
      description: 'Tailored for large business houses, conglomerates, and enterprises with multiple leadership representatives.',
      features: [
        'Multiple Partner Representation (Up to 3 Partners)',
        'Statewide & GCC Cross-Chapter Visiting Access',
        'VIP Corporate Table at Annual Summits',
        'Dedicated Brand Feature in Statewide Compendium',
        'Custom Strategic Introduction Facilitation',
        'Complimentary Passes to All BOC Retreats',
        'Advisory Council Representation Eligibility',
      ],
      notIncluded: [],
      cta: 'Contact Corporate Desk',
    },
  ];

  return (
    <div className="min-h-screen bg-[#020713] text-white pt-24 sm:pt-28 pb-20 selection:bg-[#D4AF37] selection:text-[#07172C]">
      
      {/* Background Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172C] border border-[#D4AF37]/60 text-[#F9D678] text-xs font-cinzel font-bold tracking-[0.25em] uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Crown className="w-3.5 h-3.5" />
            <span>EXECUTIVE ADMISSIONS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Membership <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#F5C75D] bg-clip-text text-transparent">Tiers & Privileges</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Membership in Business Owners Circle is strictly by invitation and category exclusivity. 
            Choose the tier that matches your enterprise vision and network reach.
          </p>
        </div>

        {/* 4 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mb-20 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#092244] via-[#071B36] to-[#040E1E] border-2 border-[#F9D678] shadow-[0_15px_40px_rgba(212,175,55,0.25)] scale-102 lg:-translate-y-2'
                  : 'bg-[#051329] border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-xl'
              }`}
            >
              {/* Popular Tag */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-[11px] tracking-widest uppercase shadow-md flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-[#07172C]" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-4">
                  <span className="text-[11px] font-cinzel font-semibold text-[#F9D678] tracking-wider uppercase block">
                    {plan.badge}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white tracking-wide mt-1">
                    {plan.name}
                  </h3>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed mb-6 font-normal min-h-[48px]">
                  {plan.description}
                </p>

                <div className="h-[1px] w-full bg-[#D4AF37]/30 mb-6" />

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[10px] font-cinzel text-slate-400 uppercase tracking-wider block">
                    Included Privileges:
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-[#D4AF37]/20 text-[#F9D678] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}

                  {/* Not Included */}
                  {plan.notIncluded.map((nInc, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-500 line-through">
                      <div className="w-4 h-4 rounded-full bg-slate-800 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                        ×
                      </div>
                      <span className="leading-snug">{nInc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={onOpenJoinModal}
                  className={`w-full py-3 rounded-full font-cinzel font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] hover:from-white hover:to-[#F9D678] text-[#07172C]'
                      : 'bg-[#092244] hover:bg-[#D4AF37] text-[#F9D678] hover:text-[#07172C] border border-[#D4AF37]/50'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Admission Protocol Process */}
        <div className="bg-[#051329] border border-[#D4AF37]/35 rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-2">
              The 4-Step Executive Admission Process
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              How ambitious founders join the verified circle with zero category conflicts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#020814] p-5 rounded-2xl border border-slate-800">
              <span className="text-3xl font-serif font-bold text-[#F9D678] block mb-2">01</span>
              <h4 className="font-serif font-bold text-sm text-white mb-1">Submit Application</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Provide your enterprise profile, industry category, and preferred chapter.</p>
            </div>
            <div className="bg-[#020814] p-5 rounded-2xl border border-slate-800">
              <span className="text-3xl font-serif font-bold text-[#F9D678] block mb-2">02</span>
              <h4 className="font-serif font-bold text-sm text-white mb-1">Category Verification</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Our Admissions Committee verifies your category availability in the chapter.</p>
            </div>
            <div className="bg-[#020814] p-5 rounded-2xl border border-slate-800">
              <span className="text-3xl font-serif font-bold text-[#F9D678] block mb-2">03</span>
              <h4 className="font-serif font-bold text-sm text-white mb-1">Guest Conclave</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Attend an exclusive Wednesday breakfast conclave to experience the culture.</p>
            </div>
            <div className="bg-[#020814] p-5 rounded-2xl border border-slate-800">
              <span className="text-3xl font-serif font-bold text-[#F9D678] block mb-2">04</span>
              <h4 className="font-serif font-bold text-sm text-white mb-1">Induction & Badge</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Receive your exclusive category seat, member kit, and statewide directory access.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
