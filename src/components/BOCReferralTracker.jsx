import React, { useState } from 'react';
import { 
  GitCommit, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Send, 
  UserCheck, 
  FileText,
  ShieldCheck
} from 'lucide-react';

export default function BOCReferralTracker({ onOpenJoinModal }) {
  const [activeTab, setActiveTab] = useState('pipeline');

  const pipelineStages = [
    { stage: '1', title: 'Submitted', desc: 'Member submits referral details via portal', color: 'bg-[#C9A227]' },
    { stage: '2', title: 'Contacted', desc: 'Recipient makes warm contact within 24h', color: 'bg-[#E5C45A]' },
    { stage: '3', title: 'In Discussion', desc: 'Scope evaluation, pricing & proposal phase', color: 'bg-amber-400' },
    { stage: '4', title: 'Converted', desc: 'Commercial agreement signed & deal closed', color: 'bg-emerald-400' },
    { stage: '5', title: 'Reward Processed', desc: 'Eligible referral reward credited to member', color: 'bg-[#FFE27A]' },
  ];

  const sampleLiveReferrals = [
    {
      id: 'REF-2026-089',
      from: 'Rahul Menon (Cloud Tech)',
      to: 'Mathew Joseph (Interior Fitouts)',
      client: 'Fintech Startup, Infopark Phase 2',
      requirement: '12,000 sq.ft Corporate Office Turnkey Interior',
      status: 'Converted',
      value: '₹34,00,000',
      reward: '₹2,04,000 Processed',
      stepIndex: 4,
    },
    {
      id: 'REF-2026-092',
      from: 'Adv. Anjali Varma (Legal)',
      to: 'Rahul Menon (Cloud Tech)',
      client: 'Healthcare Diagnostics Chain',
      requirement: 'HIPAA-compliant Patient Records Cloud SaaS',
      status: 'In Discussion',
      value: '₹8,50,000',
      reward: 'Estimated ₹68,000',
      stepIndex: 2,
    },
    {
      id: 'REF-2026-095',
      from: 'Sneha Nair (Branding)',
      to: 'George K. Thomas (Logistics)',
      client: 'Organic Spice Exporter, Mattancherry',
      requirement: 'FMCG Container Shipping to Hamburg & Dubai',
      status: 'Contacted',
      value: '₹14,20,000',
      reward: 'Pending Close',
      stepIndex: 1,
    },
  ];

  return (
    <section id="referral-tracker" className="relative py-20 lg:py-28 bg-[#030A19] text-white border-t border-[#C9A227]/20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B3A]/80 border border-[#C9A227]/40 text-xs font-extrabold tracking-[0.22em] text-[#FFE27A] uppercase">
            <GitCommit className="w-3.5 h-3.5 text-[#FFE27A]" />
            <span>TRANSPARENT SYSTEM PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFF3C4] to-[#C9A227]">
            Turn Connections Into Opportunities
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every introduction is logged, tracked, and verified through our 5-stage referral management engine to guarantee absolute accountability.
          </p>
        </div>

        {/* 5-Stage Visual Workflow Track */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#06142B]/90 border border-[#C9A227]/30 shadow-[0_15px_45px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {pipelineStages.map((stage, idx) => (
              <div
                key={stage.stage}
                className="p-4 rounded-2xl bg-[#030914] border border-white/10 relative text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#071B3A] border border-[#FFE27A] text-[11px] font-black text-[#FFE27A] flex items-center justify-center">
                    {stage.stage}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase font-mono">
                    Step {stage.stage}
                  </span>
                </div>
                <h4 className="font-cinzel font-bold text-white text-sm mb-1">
                  {stage.title}
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Sample Referral Feed */}
        <div className="mt-10 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-cinzel font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFE27A]" />
              Live Referral Tracker Demonstration
            </h3>
            <span className="text-xs text-[#FFE27A] font-medium hidden sm:inline">
              Verified BOC Kochi Engine
            </span>
          </div>

          <div className="space-y-3">
            {sampleLiveReferrals.map((item) => (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#061733] to-[#041126] border border-[#C9A227]/25 hover:border-[#FFE27A] transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#FFE27A] bg-[#030914] px-2 py-0.5 rounded border border-[#C9A227]/30">
                      {item.id}
                    </span>
                    <span className="text-xs font-bold text-white">
                      {item.from} → {item.to}
                    </span>
                  </div>
                  <div className="text-xs text-slate-300">
                    <strong className="text-white">Client:</strong> {item.client} — <span className="text-slate-400">{item.requirement}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-end lg:self-center flex-shrink-0">
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#FFE27A]">
                      Deal: {item.value}
                    </div>
                    <div className="text-[11px] text-emerald-400 font-semibold">
                      {item.reward}
                    </div>
                  </div>

                  <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                    item.status === 'Converted'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                      : 'bg-[#071B3A] text-[#FFE27A] border border-[#FFE27A]/30'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Member Dashboard Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenJoinModal}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F7E7A9] via-[#E5C45A] to-[#C9A227] text-[#041126] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-gold-md hover:brightness-110 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>ACCESS MEMBER REFERRAL PORTAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
