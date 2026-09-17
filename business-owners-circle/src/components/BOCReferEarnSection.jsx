import React, { useState } from 'react';
import { ArrowDown, DollarSign, CheckCircle2, Sparkles, HelpCircle, Gift, ArrowRight } from 'lucide-react';

export default function BOCReferEarnSection({ onOpenJoinModal }) {
  const [dealValue, setDealValue] = useState(250000);
  const [dealCategory, setDealCategory] = useState('Tech & Software');

  // Interactive example calculator (illustrative based on standard 5%-10% community finder's reward)
  const estimatedReward = Math.round(dealValue * 0.08);

  return (
    <section id="referrals" className="relative py-20 lg:py-28 bg-[#040E20] text-white border-t border-[#C9A227]/20 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C9A227]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B3A]/80 border border-[#C9A227]/40 text-xs font-extrabold tracking-[0.22em] text-[#FFE27A] uppercase">
            <Gift className="w-3.5 h-3.5 text-[#FFE27A]" />
            <span>REFER & EARN OPPORTUNITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFF3C4] to-[#C9A227]">
            Give Opportunities. Create Value. Earn Rewards.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            When you know someone who needs a product or service offered by a fellow Circle member, you make a trusted warm introduction. When closed, everyone wins.
          </p>
        </div>

        {/* 2-Column Grid: Left is Step Flow, Right is Interactive Simulator */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: 4-Step Verified Referral Flow */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-[#FFE27A] rounded-full"></span>
              The Transparent Referral Journey
            </h3>

            {[
              {
                num: '1',
                title: 'Know an Opportunity',
                detail: 'You encounter a business or acquaintance looking for a website, interior fit-out, legal advice, or logistics.',
              },
              {
                num: '2',
                title: 'Introduce to BOC Member',
                detail: 'You introduce them to the verified category leader inside Business Owner’s Circle through the referral portal.',
              },
              {
                num: '3',
                title: 'Deal Discussion & Conversion',
                detail: 'The member conducts discussions professionally, delivers a great solution, and converts the lead into a paying client.',
              },
              {
                num: '4',
                title: 'Referral Reward Processed',
                detail: 'Upon deal closure, you receive the applicable referral reward per Circle policy and commercial terms.',
              },
            ].map((step, idx) => (
              <div
                key={step.num}
                className="p-5 rounded-2xl bg-[#06142B]/90 border border-[#C9A227]/25 hover:border-[#FFE27A] transition-all flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#C9A227] to-[#FFE27A] text-[#041126] font-cinzel font-black text-sm flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(255,226,122,0.4)]">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    {step.title}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}

            <p className="text-[11px] text-slate-400 italic pt-2">
              *Note: Referral rewards are subject to applicable Circle rules, service category specifications, and mutually agreed commercial terms.
            </p>
          </div>

          {/* RIGHT: Interactive Reward Simulator */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-[#071E42] via-[#04122B] to-[#020A18] border-2 border-[#C9A227]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE27A]/15 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-5 border-b border-[#C9A227]/25">
                <div>
                  <span className="text-[10px] font-extrabold tracking-widest text-[#FFE27A] uppercase">
                    INTERACTIVE ESTIMATOR
                  </span>
                  <h4 className="text-xl font-cinzel font-bold text-white">
                    Referral Value Simulator
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#05132B] border border-[#FFE27A] flex items-center justify-center text-[#FFE27A]">
                  <DollarSign className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>

              {/* Slider for Deal Value */}
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold mb-2">
                    <span className="text-slate-300">Referred Deal / Project Value</span>
                    <span className="text-lg font-cinzel font-bold text-[#FFE27A]">
                      ₹ {dealValue.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="25000"
                    max="2000000"
                    step="25000"
                    value={dealValue}
                    onChange={(e) => setDealValue(Number(e.target.value))}
                    className="w-full h-2 bg-[#05132B] rounded-lg appearance-none cursor-pointer accent-[#FFE27A]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>₹25,000</span>
                    <span>₹10,00,000</span>
                    <span>₹20,00,000</span>
                  </div>
                </div>

                {/* Industry Category Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Select Opportunity Sector
                  </label>
                  <select
                    value={dealCategory}
                    onChange={(e) => setDealCategory(e.target.value)}
                    className="w-full bg-[#05132B] border border-[#C9A227]/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFE27A]"
                  >
                    <option value="Tech & Software">Technology & Custom Software</option>
                    <option value="Architecture & Interior">Architecture, Civil & Interior Fitouts</option>
                    <option value="Corporate Consulting">Corporate Finance, CA & Legal Retainers</option>
                    <option value="Digital Marketing">Branding, Media & Performance Campaigns</option>
                    <option value="Commercial Real Estate">Commercial Office & Retail Leasing</option>
                  </select>
                </div>

                {/* Simulated Reward Box */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-[#071B3A] to-[#05132B] border border-[#FFE27A]/50 text-center space-y-1 mt-6 shadow-[0_0_25px_rgba(255,226,122,0.15)]">
                  <span className="text-[10px] font-extrabold tracking-widest text-slate-300 uppercase">
                    ESTIMATED REFERRAL REWARD
                  </span>
                  <div className="text-3xl sm:text-4xl font-cinzel font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF5] via-[#FFE27A] to-[#C9A227]">
                    ₹ {estimatedReward.toLocaleString('en-IN')}
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Calculated on standard ~8% commercial referral policy terms.
                  </p>
                </div>

                <button
                  onClick={onOpenJoinModal}
                  className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-[#F7E7A9] via-[#E5C45A] to-[#C9A227] text-[#041126] font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-gold-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>JOIN AS A REFERRING PARTNER</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
