import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Minus, 
  Search,
  X,
  HelpCircle, 
  Users, 
  ShieldCheck, 
  Globe, 
  Mail, 
  Phone,
  ArrowRight,
  Sparkles,
  ExternalLink,
  BookOpen,
  Briefcase,
  Layers,
  CheckCircle2,
  Handshake
} from 'lucide-react';
import { faqCategories, faqData } from '../data/faqData';
import faqHeroImg from '../assets/boc-faq-hero.jpg';
import bocLogoPng from '../assets/boc-logo.png';

/**
 * BOCFAQ — Comprehensive 50 Frequently Asked Questions & Membership Clarity Portal
 * Grouped across 5 Official Modules with Live Search, Interactive Category Tabs & Official CTA
 */
export default function BOCFAQ({ onOpenJoinModal }) {
  // Selected category filter (default: 'all')
  const [activeCategory, setActiveCategory] = useState('all');

  // Search input query
  const [searchQuery, setSearchQuery] = useState('');

  // Set of opened FAQ IDs (multi-expand enabled; Q1 open by default for immediate engagement)
  const [expandedIds, setExpandedIds] = useState(new Set([1]));

  // Toggle single FAQ open/close
  const toggleFaq = (id) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Filtered FAQ list based on activeCategory and searchQuery
  const filteredFaqs = useMemo(() => {
    return faqData.filter(faq => {
      // Category filter
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      if (!matchesCategory) return false;

      // Search query filter
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase().trim();
      return (
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.categoryName.toLowerCase().includes(query) ||
        String(faq.id).includes(query)
      );
    });
  }, [activeCategory, searchQuery]);

  // Expand all current filtered FAQs
  const expandAll = () => {
    setExpandedIds(new Set(filteredFaqs.map(f => f.id)));
  };

  // Collapse all
  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  // Trust pillars
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

  // Quick search pill suggestions
  const quickTopics = [
    'Membership',
    'Startups',
    'Referrals',
    'Meetings',
    'Chapters',
    'Events',
    'Fees',
    'Partnerships'
  ];

  return (
    <section 
      id="faq" 
      className="relative w-full bg-[#020712] text-slate-100 overflow-hidden select-none py-16 sm:py-20 lg:py-24 border-t border-[#D4AF37]/30"
    >
      {/* Background Soft Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0A2246]/25 rounded-full blur-[140px] pointer-events-none -ml-32 -mb-32" />

      {/* ===================================================================== */}
      {/* 1. TOP-LEFT CURVED NAVY WAVE WITH BOC BRANDING                        */}
      {/* ===================================================================== */}
      <div className="absolute top-0 left-0 z-20 pointer-events-none hidden sm:block">
        <div className="relative">
          <svg className="w-80 sm:w-96 md:w-[420px] h-28 sm:h-32 md:h-36 drop-shadow-lg" viewBox="0 0 420 140" fill="none" preserveAspectRatio="none">
            <path d="M0 0 H420 C320 25 240 75 160 115 C90 145 40 140 0 135 Z" fill="#040E1F"/>
            <path d="M0 135 C40 140 90 145 160 115 C240 75 320 25 420 0" stroke="#D4AF37" strokeWidth="2.5"/>
            <path d="M0 125 C40 130 90 135 155 108 C235 68 315 20 410 0" stroke="#F9D678" strokeWidth="1" strokeOpacity="0.5"/>
          </svg>
          {/* BOC Emblem Inside Wave */}
          <div className="absolute top-3 left-6 sm:top-4 sm:left-8 flex items-center gap-3">
            <img src={bocLogoPng} alt="BOC Logo" className="w-9 h-9 sm:w-11 sm:h-11 object-contain drop-shadow-sm" />
            <div className="h-7 w-[1.5px] bg-[#D4AF37]" />
            <div className="flex flex-col text-white tracking-[0.2em] leading-tight text-[8px] sm:text-[9.5px] font-cinzel font-bold">
              <span>BUSINESS</span>
              <span className="text-[#F9D678]">OWNER'S</span>
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
            <span className="font-serif italic font-bold text-2xl sm:text-3xl md:text-4xl text-white/90 tracking-wide block drop-shadow-sm">
              Your Questions
            </span>
            <span className="font-serif italic font-bold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] bg-clip-text text-transparent tracking-wide block drop-shadow-sm">
              Matter
            </span>
            <svg className="w-32 sm:w-44 h-3 text-[#D4AF37] ml-auto mt-1" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9C40 3 120 1 158 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* 3. UPPER SHOWCASE: LEFT HEADLINE + RIGHT QUESTION CUBE PHOTO          */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 sm:mb-14">
          
          {/* Left Column (6 Cols): Typography & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Kicker */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#05142B] border border-[#D4AF37]/60 text-[#F9D678] text-[11px] font-cinzel font-bold tracking-[0.25em] uppercase shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-[#F9D678]" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight leading-[1.08] mb-3 text-white">
              Get Clarity. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#F5C75D] bg-clip-text text-transparent">
                Move Forward.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-serif font-semibold text-[#F9D678] mb-4">
              50 Official Answers Across 5 Core Modules
            </p>

            {/* Narrative Description */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-normal max-w-xl">
              Welcome to the official Business Owner’s Circle (BOC) knowledge portal. Find clear, authoritative answers regarding membership eligibility, referral protocols, weekly chapter meetings, conclaves, and strategic enterprise partnerships.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] hover:from-white hover:to-[#F9D678] text-[#030B17] font-cinzel font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <span>Ask Us Directly</span>
                <ArrowRight className="w-4 h-4 text-[#030B17]" />
              </button>

              <a
                href="tel:+919020040009"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#05142B] hover:bg-[#071C3D] text-slate-200 hover:text-white border border-[#D4AF37]/40 text-xs sm:text-sm font-semibold transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#F9D678]" />
                <span>+91 90200 40009</span>
              </a>
            </div>
          </div>

          {/* Right Column (6 Cols): Question Mark Block Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-[#D4AF37]/40 group">
              <img 
                src={faqHeroImg} 
                alt="Glowing Question Mark Blocks on Executive Desk" 
                className="w-full h-[260px] sm:h-[340px] md:h-[380px] object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020712]/90 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge on Photo */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#030B18]/85 backdrop-blur-md px-4 py-3 rounded-xl border border-[#D4AF37]/40">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#030B17] flex items-center justify-center font-bold text-sm">
                    ?
                  </div>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm font-bold text-white">Have a specific question?</p>
                    <p className="text-[11px] text-[#F9D678]">Our executive advisory team responds within 24 hours</p>
                  </div>
                </div>
                <button
                  onClick={onOpenJoinModal}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D4AF37] text-[#030B17] text-xs font-bold font-cinzel hover:bg-white transition-colors"
                >
                  Connect
                </button>
              </div>
            </div>

            {/* Subtle Gold Corner Accent */}
            <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[#030B18] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg hidden sm:flex">
              <Sparkles className="w-4 h-4 text-[#F9D678]" />
            </div>
          </div>

        </div>

        {/* ===================================================================== */}
        {/* 4. SEARCH & DISCOVERY BAR                                            */}
        {/* ===================================================================== */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-[#D4AF37]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all 50 questions, answers, and topics (e.g. fee, chapter, startups, referrals)..."
              className="w-full bg-[#05142B]/95 border-2 border-[#D4AF37]/40 focus:border-[#F9D678] rounded-2xl pl-12 pr-12 py-3.5 sm:py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 transition-all text-xs sm:text-sm md:text-base shadow-xl"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Pill Suggestions */}
          <div className="flex flex-wrap items-center gap-2 mt-3 text-xs">
            <span className="text-[#D4AF37] font-semibold text-[11px] uppercase tracking-wider">Quick Topics:</span>
            {quickTopics.map(tag => (
              <button
                key={tag}
                onClick={() => {
                  setSearchQuery(tag);
                  setActiveCategory('all');
                }}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors border ${
                  searchQuery.toLowerCase() === tag.toLowerCase()
                    ? 'bg-[#D4AF37] text-[#030B17] border-white font-bold'
                    : 'bg-[#05142B] hover:bg-[#071C3D] text-slate-300 hover:text-[#F9D678] border-[#D4AF37]/30'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* ===================================================================== */}
        {/* 5. INTERACTIVE CATEGORY TABS                                          */}
        {/* ===================================================================== */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 mb-8 scrollbar-none no-scrollbar">
          {faqCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                }}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-cinzel font-bold whitespace-nowrap transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#030B17] shadow-[0_0_20px_rgba(212,175,55,0.4)] border border-white'
                    : 'bg-[#05142B]/85 text-slate-300 hover:text-white hover:bg-[#071C3D] border border-[#D4AF37]/30'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-sans ${
                  isActive ? 'bg-[#030B17]/20 text-[#030B17] font-bold' : 'bg-[#0A2246] text-[#F9D678]'
                }`}>
                  {cat.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* ===================================================================== */}
        {/* 6. ACTION BAR (Category Description, Counter & Expand/Collapse All)   */}
        {/* ===================================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#D4AF37]/20">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-base sm:text-lg font-serif font-bold text-[#F9D678]">
              {activeCategory === 'all' 
                ? 'All 50 Official Questions' 
                : faqCategories.find(c => c.id === activeCategory)?.name}
            </span>
            <span className="text-xs text-slate-300 bg-[#071C3D] px-3 py-1 rounded-full border border-slate-700 w-fit">
              Showing {filteredFaqs.length} of 50 FAQs
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="px-3.5 py-1.5 rounded-lg bg-[#05142B] hover:bg-[#071C3D] text-xs text-slate-200 hover:text-white border border-[#D4AF37]/40 transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-3.5 py-1.5 rounded-lg bg-[#05142B] hover:bg-[#071C3D] text-xs text-slate-200 hover:text-white border border-[#D4AF37]/40 transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* 7. FAQ ACCORDION LIST (2 Responsive Columns)                          */}
        {/* ===================================================================== */}
        {filteredFaqs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mb-14 sm:mb-16 items-start">
            {/* Column 1 (Even items by index) */}
            <div className="flex flex-col gap-3.5">
              {filteredFaqs
                .filter((_, idx) => idx % 2 === 0)
                .map((faq) => {
                  const isOpen = expandedIds.has(faq.id);

                  return (
                    <div 
                      key={faq.id}
                      className={`bg-[#05142B]/90 hover:bg-[#071C3D] border rounded-2xl transition-all duration-300 shadow-md overflow-hidden ${
                        isOpen 
                          ? 'border-[#F9D678] shadow-[0_8px_30px_rgba(212,175,55,0.15)] ring-1 ring-[#D4AF37]/30' 
                          : 'border-[#D4AF37]/30 hover:border-[#D4AF37]/60'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full p-4 sm:p-5 flex items-start justify-between gap-3 text-left cursor-pointer transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          {/* Number Badge */}
                          <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-cinzel font-bold shrink-0 mt-0.5 border ${
                            isOpen 
                              ? 'bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#030B17] border-white shadow-sm' 
                              : 'bg-[#030B17] text-[#F9D678] border-[#D4AF37]/60'
                          }`}>
                            {String(faq.id).padStart(2, '0')}
                          </div>

                          <div className="flex flex-col">
                            {activeCategory === 'all' && (
                              <span className="text-[10px] font-cinzel font-semibold tracking-wider uppercase text-[#D4AF37] mb-1">
                                {faq.categoryName}
                              </span>
                            )}
                            <span className={`font-serif font-bold text-sm sm:text-base transition-colors leading-snug ${
                              isOpen ? 'text-[#F9D678]' : 'text-white hover:text-[#F9D678]'
                            }`}>
                              {faq.question}
                            </span>
                          </div>
                        </div>

                        {/* Plus/Minus Indicator */}
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                          isOpen ? 'bg-[#D4AF37] text-[#030B17]' : 'bg-[#030B17] text-[#F9D678] border border-[#D4AF37]/40'
                        }`}>
                          {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                        </div>
                      </button>

                      {/* Expandable Answer */}
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 bg-[#020712]/70 animate-fadeIn">
                          <div className="pl-4 sm:pl-5 border-l-2 border-[#D4AF37] py-1.5 mt-2">
                            <p className="font-normal text-slate-200">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>

            {/* Column 2 (Odd items by index) */}
            <div className="flex flex-col gap-3.5">
              {filteredFaqs
                .filter((_, idx) => idx % 2 === 1)
                .map((faq) => {
                  const isOpen = expandedIds.has(faq.id);

                  return (
                    <div 
                      key={faq.id}
                      className={`bg-[#05142B]/90 hover:bg-[#071C3D] border rounded-2xl transition-all duration-300 shadow-md overflow-hidden ${
                        isOpen 
                          ? 'border-[#F9D678] shadow-[0_8px_30px_rgba(212,175,55,0.15)] ring-1 ring-[#D4AF37]/30' 
                          : 'border-[#D4AF37]/30 hover:border-[#D4AF37]/60'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full p-4 sm:p-5 flex items-start justify-between gap-3 text-left cursor-pointer transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          {/* Number Badge */}
                          <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-cinzel font-bold shrink-0 mt-0.5 border ${
                            isOpen 
                              ? 'bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#030B17] border-white shadow-sm' 
                              : 'bg-[#030B17] text-[#F9D678] border-[#D4AF37]/60'
                          }`}>
                            {String(faq.id).padStart(2, '0')}
                          </div>

                          <div className="flex flex-col">
                            {activeCategory === 'all' && (
                              <span className="text-[10px] font-cinzel font-semibold tracking-wider uppercase text-[#D4AF37] mb-1">
                                {faq.categoryName}
                              </span>
                            )}
                            <span className={`font-serif font-bold text-sm sm:text-base transition-colors leading-snug ${
                              isOpen ? 'text-[#F9D678]' : 'text-white hover:text-[#F9D678]'
                            }`}>
                              {faq.question}
                            </span>
                          </div>
                        </div>

                        {/* Plus/Minus Indicator */}
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                          isOpen ? 'bg-[#D4AF37] text-[#030B17]' : 'bg-[#030B17] text-[#F9D678] border border-[#D4AF37]/40'
                        }`}>
                          {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                        </div>
                      </button>

                      {/* Expandable Answer */}
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 bg-[#020712]/70 animate-fadeIn">
                          <div className="pl-4 sm:pl-5 border-l-2 border-[#D4AF37] py-1.5 mt-2">
                            <p className="font-normal text-slate-200">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 bg-[#05142B]/60 rounded-3xl border border-[#D4AF37]/30 max-w-2xl mx-auto mb-14">
            <HelpCircle className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold text-white mb-2">No Matching FAQs Found</h3>
            <p className="text-slate-400 text-sm mb-6">
              We couldn't find any questions matching "{searchQuery}". Try a different keyword or contact the BOC executive secretariat directly.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-5 py-2.5 rounded-full bg-[#D4AF37] text-[#030B17] text-xs font-bold font-cinzel hover:bg-white transition-colors"
              >
                Reset Search Filters
              </button>
              <button
                onClick={onOpenJoinModal}
                className="px-5 py-2.5 rounded-full bg-[#071C3D] text-[#F9D678] border border-[#D4AF37]/50 text-xs font-bold font-cinzel hover:bg-[#0A2855] transition-colors"
              >
                Ask Secretariat Directly
              </button>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* 8. 4 TRUST PILLARS (media_1789901679833 master graphic)             */}
        {/* ===================================================================== */}
        <div className="relative bg-[#040E1E] rounded-2xl sm:rounded-3xl p-6 sm:p-8 px-6 sm:px-10 border border-[#D4AF37]/40 shadow-2xl overflow-hidden mb-14">
          <div className="absolute inset-0 bg-radial from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* 4 Trust Pillars Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full lg:w-3/4 items-center">
              {trustPillars.map((tp, idx) => {
                const Icon = tp.icon;

                return (
                  <div key={idx} className="flex flex-col items-center text-center relative">
                    <div className="w-11 h-11 rounded-full bg-[#071C3D] border border-[#D4AF37]/60 text-[#F9D678] flex items-center justify-center mb-2 shadow-md">
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

            {/* Right: Still Have Questions */}
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

        {/* ===================================================================== */}
        {/* 9. THE OFFICIAL FAQ PAGE CTA BLOCK (Requested by User)               */}
        {/* ===================================================================== */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37] p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-[#040E1E] via-[#081B35] to-[#030B17] text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Golden Corner Accents & Ambient Flares */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/25 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#D4AF37]/25 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Kicker Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#020712] border border-[#D4AF37] text-[#F9D678] text-[11px] font-cinzel font-bold tracking-[0.25em] uppercase mb-5 shadow-[0_0_15px_rgba(212,175,55,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-[#F9D678]" />
              <span>FAQ PAGE CTA</span>
            </div>

            {/* Headline */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
              Ready to Build Meaningful <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#F5C75D] bg-clip-text text-transparent">
                Business Connections?
              </span>
            </h3>

            {/* Subtitle */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              Join Business Owner’s Circle and connect with entrepreneurs, professionals and businesses that can help create new opportunities.
            </p>

            {/* Three Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full">
              {/* Button 1: [ JOIN BOC ] */}
              <button
                onClick={onOpenJoinModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] hover:from-white hover:to-[#F9D678] text-[#030B17] font-cinzel font-bold text-xs sm:text-sm tracking-[0.15em] uppercase shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>JOIN BOC</span>
                <ArrowRight className="w-4 h-4 text-[#030B17]" />
              </button>

              {/* Button 2: [ EXPLORE MEMBERSHIP ] */}
              <Link
                to="/membership"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#030B17] hover:bg-[#071C3D] text-[#F9D678] hover:text-white border-2 border-[#D4AF37] hover:border-[#F9D678] font-cinzel font-bold text-xs sm:text-sm tracking-[0.15em] uppercase shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>EXPLORE MEMBERSHIP</span>
                <ExternalLink className="w-4 h-4 text-[#F9D678]" />
              </Link>

              {/* Button 3: [ CONTACT US ] */}
              <a
                href="tel:+919020040009"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 text-white hover:text-[#F9D678] border border-white/30 hover:border-[#D4AF37] font-cinzel font-bold text-xs sm:text-sm tracking-[0.15em] uppercase transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#F9D678]" />
                <span>CONTACT US</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
