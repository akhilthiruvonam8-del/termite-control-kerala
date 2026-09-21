import React, { useState } from 'react';
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  Users, 
  ShieldCheck, 
  Globe, 
  Mail, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import faqHeroImg from '../assets/boc-faq-hero.jpg';
import bocLogoPng from '../assets/boc-logo.png';

/**
 * BOCFAQ — "Frequently Asked Questions: Get Clarity. Move Forward."
 * Exact 1:1 Recreation of Master Graphic (media_1789901679833.jpg)
 */
export default function BOCFAQ({ onOpenJoinModal }) {
  // Store expanded FAQ indices (allows toggling any item)
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      id: 'faq-1',
      question: 'What is BOC and what is its main purpose?',
      answer: "Business Owner's Circle (BOC) is an exclusive executive business fraternity that brings together ambitious business owners, entrepreneurs, and industry leaders. Our primary purpose is to foster high-trust peer relationships, exchange verified business referrals, and build long-term collaborations that drive measurable business growth.",
    },
    {
      id: 'faq-2',
      question: 'Who can join BOC?',
      answer: "BOC membership is open to founders, CEOs, managing directors, and senior partners of established, registered enterprises. We welcome ambitious business owners across diverse industries who are committed to peer trust, ethical business practices, and active mutual support.",
    },
    {
      id: 'faq-3',
      question: 'What are the membership benefits?',
      answer: "Members enjoy category exclusivity within their chapter (zero direct competition), access to qualified high-value referrals, weekly & monthly executive conclaves, statewide and international networking, masterclasses led by strategic advisors, and prominent placement in the verified BOC directory.",
    },
    {
      id: 'faq-4',
      question: 'How does the referral system work?',
      answer: "BOC operates on an authentic, relationship-driven referral protocol. Members build deep trust through 1-on-1 synergy sessions and chapter meetings. Referrals are pre-qualified and warmly introduced, ensuring you receive genuine, high-conversion business opportunities rather than cold leads.",
    },
    {
      id: 'faq-5',
      question: 'Are there any membership fees?',
      answer: "Yes, BOC has an annual membership fee structure that funds chapter meeting venues, administrative secretariat support, statewide conclaves, digital member platforms, and executive resources. Full investment details are transparently shared during the executive interview stage.",
    },
    {
      id: 'faq-6',
      question: 'What types of events does BOC organize?',
      answer: "BOC hosts weekly chapter breakfast conclaves, regional business networking mixers, high-impact growth seminars and workshops with prominent guest speakers, annual backwater executive retreats, and statewide multi-chapter summits.",
    },
    {
      id: 'faq-7',
      question: 'Can I promote my business or services on BOC?',
      answer: "Yes! As the exclusive representative of your business category in your chapter, you have regular spotlight presentations to educate fellow members on your services, share client success stories, and request specific strategic introductions.",
    },
    {
      id: 'faq-8',
      question: 'How can I connect with other members?',
      answer: "You can connect through weekly chapter conclaves, scheduled private 1-on-1 meetings, the BOC digital member directory, and inter-chapter business mixers spanning across Kochi, Thrissur, Kozhikode, Thiruvananthapuram, and beyond.",
    },
    {
      id: 'faq-9',
      question: 'Is BOC only for businesses in Kerala?',
      answer: "While BOC is deeply rooted in Kerala, our vision and reach are global. BOC is rapidly expanding across India and international hubs including the Middle East, Europe, North America, and Asia, connecting Malayali and global entrepreneurs worldwide.",
    },
    {
      id: 'faq-10',
      question: 'How do I get started / become a member?',
      answer: "Getting started is straightforward: click on 'Apply for Membership' or 'Contact Us', submit your business profile, and our chapter membership committee will check for category availability and invite you for an executive guest session.",
    },
  ];

  const trustPillars = [
    {
      icon: HelpCircle,
      title: 'REAL ANSWERS',
      subtitle: 'Clear & Simple',
    },
    {
      icon: Users,
      title: 'SUPPORT ALWAYS',
      subtitle: 'Our team is here',
    },
    {
      icon: ShieldCheck,
      title: 'TRUSTED COMMUNITY',
      subtitle: 'Built on transparency',
    },
    {
      icon: Globe,
      title: 'GROW TOGETHER',
      subtitle: 'Your success matters',
    },
  ];

  return (
    <section 
      id="faq" 
      className="relative w-full bg-[#FAF8F5] text-slate-900 overflow-hidden select-none py-16 sm:py-20 lg:py-24 border-t border-[#EADBBD]/60"
    >
      {/* Background Soft Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5E6BE]/30 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5E6BE]/25 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      {/* ===================================================================== */}
      {/* 1. TOP-LEFT CURVED NAVY WAVE WITH BOC BRANDING (media_1789901679833)  */}
      {/* ===================================================================== */}
      <div className="absolute top-0 left-0 z-20 pointer-events-none hidden sm:block">
        <div className="relative">
          <svg className="w-80 sm:w-96 md:w-[420px] h-28 sm:h-32 md:h-36 drop-shadow-lg" viewBox="0 0 420 140" fill="none" preserveAspectRatio="none">
            <path d="M0 0 H420 C320 25 240 75 160 115 C90 145 40 140 0 135 Z" fill="#07172C"/>
            <path d="M0 135 C40 140 90 145 160 115 C240 75 320 25 420 0" stroke="#D4AF37" strokeWidth="2.5"/>
            <path d="M0 125 C40 130 90 135 155 108 C235 68 315 20 410 0" stroke="#F9D678" strokeWidth="1" strokeOpacity="0.5"/>
          </svg>
          {/* BOC Emblem Inside Wave */}
          <div className="absolute top-3 left-6 sm:top-4 sm:left-8 flex items-center gap-3">
            <img src={bocLogoPng} alt="BOC Logo" className="w-9 h-9 sm:w-11 sm:h-11 object-contain drop-shadow-sm" />
            <div className="h-7 w-[1.5px] bg-[#D4AF37]" />
            <div className="flex flex-col text-white tracking-[0.2em] leading-tight text-[8px] sm:text-[9.5px] font-cinzel font-bold">
              <span>BUSINESS</span>
              <span className="text-[#F9D678]">OWNERS</span>
              <span>CIRCLE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ===================================================================== */}
        {/* 2. TOP RIGHT SCRIPT: "Your Questions Matter"                          */}
        {/* ===================================================================== */}
        <div className="flex justify-end mb-4 sm:mb-2">
          <div className="text-right">
            <span className="font-serif italic font-bold text-2xl sm:text-3xl md:text-4xl text-[#0A192F] tracking-wide block drop-shadow-sm">
              Your Questions
            </span>
            <span className="font-serif italic font-bold text-2xl sm:text-3xl md:text-4xl text-[#B57D2B] tracking-wide block drop-shadow-sm">
              Matter
            </span>
            <svg className="w-32 sm:w-44 h-3 text-[#B57D2B] ml-auto mt-1" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9C40 3 120 1 158 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>


        {/* ===================================================================== */}
        {/* 3. UPPER SHOWCASE: LEFT HEADLINE + RIGHT QUESTION CUBE PHOTO          */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12 sm:mb-16">
          
          {/* Left Column (5 Cols): Typography & Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            {/* Kicker */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-[1.5px] w-6 bg-[#B57D2B]" />
              <span className="text-[#B57D2B] text-xs sm:text-[13px] font-bold tracking-[0.25em] uppercase font-cinzel">
                FREQUENTLY ASKED
              </span>
              <div className="h-[1.5px] w-6 bg-[#B57D2B]" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-serif font-bold tracking-tight leading-[1.05] mb-4 text-[#0A192F]">
              Questions
            </h2>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-serif font-bold text-[#B57D2B] mb-4">
              Get Clarity. Move Forward.
            </p>

            {/* Narrative Description */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal max-w-xl">
              Find answers to the most common questions about BOC — our community, membership, events, and more.
            </p>

            {/* Direct Action Button */}
            <div>
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#07172C] to-[#0E2849] hover:from-[#B57D2B] hover:to-[#966620] text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-300 border border-[#D4AF37]/50 group cursor-pointer"
              >
                <span>Ask Us Directly</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column (7 Cols): Glowing Question Mark Cube Photo */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(10,25,47,0.18)] border-2 border-[#EADBBD]">
              <img 
                src={faqHeroImg} 
                alt="Glowing Question Mark Blocks on Executive Desk" 
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Subtle Gold Corner Accent */}
            <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[#07172C] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg hidden sm:flex">
              <Sparkles className="w-4 h-4 text-[#F9D678]" />
            </div>
          </div>

        </div>


        {/* ===================================================================== */}
        {/* 4. THE 10 FAQ ACCORDION CARDS (2 Columns x 5 Rows)                   */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mb-14 sm:mb-16 items-start">
          
          {/* Column 1: Items 1 to 5 */}
          <div className="flex flex-col gap-3.5">
            {faqs.slice(0, 5).map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div 
                  key={faq.id}
                  className="bg-white/95 hover:bg-white border border-[#EADBBD] hover:border-[#B57D2B] rounded-2xl transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(181,125,43,0.12)] overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-3.5 text-left cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Circular 'Q' Icon */}
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#07172C] text-white flex items-center justify-center text-xs sm:text-sm font-serif font-bold shadow-sm shrink-0 border border-[#D4AF37]/50">
                        Q
                      </div>
                      <span className="font-serif font-bold text-sm sm:text-base text-[#0A192F] hover:text-[#B57D2B] transition-colors leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    {/* Gold Plus/Minus Icon */}
                    <div className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#EADBBD] flex items-center justify-center text-[#B57D2B] shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Expandable Answer */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-[#FAF8F5]/50 animate-fadeIn">
                      <p className="font-normal pl-11">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Column 2: Items 6 to 10 */}
          <div className="flex flex-col gap-3.5">
            {faqs.slice(5, 10).map((faq, idx) => {
              const actualIdx = idx + 5;
              const isOpen = openFaq === actualIdx;

              return (
                <div 
                  key={faq.id}
                  className="bg-white/95 hover:bg-white border border-[#EADBBD] hover:border-[#B57D2B] rounded-2xl transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(181,125,43,0.12)] overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(actualIdx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-3.5 text-left cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Circular 'Q' Icon */}
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#07172C] text-white flex items-center justify-center text-xs sm:text-sm font-serif font-bold shadow-sm shrink-0 border border-[#D4AF37]/50">
                        Q
                      </div>
                      <span className="font-serif font-bold text-sm sm:text-base text-[#0A192F] hover:text-[#B57D2B] transition-colors leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    {/* Gold Plus/Minus Icon */}
                    <div className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#EADBBD] flex items-center justify-center text-[#B57D2B] shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Expandable Answer */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-[#FAF8F5]/50 animate-fadeIn">
                      <p className="font-normal pl-11">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>


        {/* ===================================================================== */}
        {/* 5. BOTTOM WAVE BANNER: 4 TRUST PILLARS + "STILL HAVE QUESTIONS?"      */}
        {/* ===================================================================== */}
        <div className="relative bg-[#07172C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 px-6 sm:px-10 border border-[#D4AF37]/50 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-radial from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* 4 Trust Pillars Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full lg:w-3/4 items-center">
              {trustPillars.map((tp, idx) => {
                const Icon = tp.icon;

                return (
                  <div key={idx} className="flex flex-col items-center text-center relative">
                    <div className="w-11 h-11 rounded-full bg-[#0B2548] border border-[#D4AF37]/60 text-[#F9D678] flex items-center justify-center mb-2 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-cinzel font-bold text-white tracking-widest uppercase">
                      {tp.title}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#F9D678] font-normal mt-0.5">
                      {tp.subtitle}
                    </span>

                    {/* Divider for desktop */}
                    {idx < trustPillars.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-[1px] h-10 bg-[#D4AF37]/25 -translate-y-1/2" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: "Still Have Questions? CONTACT US →" Button */}
            <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-end text-center lg:text-right pt-4 lg:pt-0 border-t lg:border-t-0 border-[#D4AF37]/30">
              <span className="font-serif italic font-bold text-lg sm:text-xl text-[#F9D678] tracking-wide block mb-2.5">
                Still Have Questions?
              </span>
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] hover:from-white hover:to-[#F9D678] text-[#07172C] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer font-cinzel"
              >
                <Mail className="w-4 h-4 text-[#07172C]" />
                <span>CONTACT US →</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
