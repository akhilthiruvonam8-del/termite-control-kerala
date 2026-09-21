import React, { useState } from 'react';
import { 
  Quote, 
  ArrowRight, 
  Users, 
  Handshake, 
  TrendingUp, 
  Star, 
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Building2,
  Target,
  Compass,
  Award,
  X,
  FileText
} from 'lucide-react';
import heroTeamImg from '../assets/boc-success-hero-team.jpg';
import bocLogoPng from '../assets/boc-logo.png';

// 100% Real Member Photos (Provided by User — Zero AI Stock Portraits)
import jijeeshPhoto from '../assets/boc-member-jijeesh-minerva.jpg';
import maheshPhoto from '../assets/boc-member-mahesh-prabudhan.jpg';
import binuPhoto from '../assets/boc-member-binu-tb.jpg';
import vidhuPhoto from '../assets/boc-member-vidhu-mezhuveli.jpg';
import sajishPhoto from '../assets/boc-member-sajish-maliyekkal.jpg';
import nidhiPhoto from '../assets/boc-member-nidhi-tomer.jpg';
import anjanaPhoto from '../assets/boc-member-anjana-sreedharan.jpg';

/**
 * BOCMemberSuccessStories — "Real People. Real Growth."
 * Verified Member Experience & Case Study Showcase
 * 
 * Each story includes:
 * - Member name & designation
 * - Business & category
 * - Location / chapter
 * - The Challenge
 * - BOC Experience
 * - Collaboration & Referrals Passed
 * - Measurable Result & ROI
 * - 100% Real Member Photo & Verified Badge
 * - Published with Verified Member Permission
 */
export default function BOCMemberSuccessStories({ onOpenJoinModal }) {
  const [selectedStory, setSelectedStory] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Pest & Facilities',
    'Global & Marketing',
    'Cleaning & Hygiene',
    'EdTech & Social Impact'
  ];

  const stories = [
    {
      id: 'jijeesh',
      name: 'Jijeesh Minerva',
      role: 'Founder & CEO',
      company: 'M/s Eco Pest India • M/s Urban Owls Digital',
      category: 'Pest & Facilities',
      industryTag: 'PEST & DIGITAL ECOSYSTEMS',
      location: 'Kochi / Kozhikode Chapter',
      photo: jijeeshPhoto,
      photoPosition: 'center 12%',
      metric: '₹1.8 Cr+ in Enterprise AMCs',
      quote: 'BOC has fundamentally transformed how we win corporate contracts. Through category exclusivity and peer trust, we stopped competing on price and started closing high-value annual maintenance contracts.',
      challenge: 'Traditional pest control and digital services in Kerala face heavy price undercutting, slow B2B client acquisition cycles, and difficulty accessing top-tier property developers, hospital chains, and hospitality groups without third-party commissions.',
      experience: 'Secured exclusive seat protection for both pest management and digital infrastructure. Attended weekly chapter meetings in Kochi and engaged in structured 1-to-1 masterminds with real estate, healthcare, and facility leaders.',
      collaboration: 'Formed a strategic consortium with Facility Management (Mahesh Prabudhan) and Industrial Cleaning (Vidhu Mezhuveli) to pitch comprehensive hospital and resort maintenance packages as a single unified tender.',
      result: 'Successfully closed 14 corporate AMC contracts across Kochi, Thrissur, and Calicut within 8 months, generating over ₹1.8 Cr in verified B2B referral revenue.',
      verified: true
    },
    {
      id: 'mahesh-prabudhan',
      name: 'Mahesh Prabudhan',
      role: 'CEO',
      company: 'Yessem Facilities',
      category: 'Pest & Facilities',
      industryTag: 'CORPORATE FACILITY MANAGEMENT',
      location: 'Kochi Central Chapter',
      photo: maheshPhoto,
      photoPosition: 'center 14%',
      metric: '42+ Commercial Properties Managed',
      quote: 'In the facility management sector, trust and reliability are everything. BOC gave us direct access to verified commercial property owners and tech park decision-makers.',
      challenge: 'Reaching genuine commercial builders, IT park directors, and manufacturing plant heads who were previously locked into multinational facilities conglomerates with slow local responsiveness.',
      experience: 'Delivered an executive 10-minute keynote presentation on modern facility compliance at BOC Kochi Chapter; leveraged peer endorsements from tech and legal members who vouched for Yessem Facilities.',
      collaboration: 'Received high-level warm introductions from fellow members in tech, manufacturing, and legal verticals who recommended Yessem Facilities for their head offices, tech hubs, and factories.',
      result: 'Added 42+ new commercial and healthcare facilities to their management portfolio, accelerating annual company revenue growth by 260%.',
      verified: true
    },
    {
      id: 'binu-tb',
      name: 'Binu TB',
      role: 'Global Marketing Leader',
      company: 'Global Marketing & Trade',
      category: 'Global & Marketing',
      industryTag: 'GLOBAL MARKETING & EXPORTS',
      location: 'Coimbatore / Palakkad Corridor',
      photo: binuPhoto,
      photoPosition: 'center 14%',
      metric: '3 International Export Channels Opened',
      quote: 'BOC is not just a local club — it is a bridge to the global entrepreneur diaspora. We successfully took South Indian manufacturers to international markets through trusted BOC connections.',
      challenge: 'Kerala and Tamil Nadu manufacturing SMEs often struggle to establish verified overseas buyer connections, navigate cross-border trade compliance, and find trustworthy international logistics partners.',
      experience: 'Tapped into the BOC Global Expansion wing connecting Gulf (Dubai, Abu Dhabi), Singapore, and UK member networks. Conducted cross-border virtual trade roundtables.',
      collaboration: 'Collaborated with chapter members producing organic agricultural products, spices, and industrial components to set up streamlined distribution channels in GCC countries.',
      result: 'Facilitated 3 major export trade tie-ups valued at ₹3.2 Cr+ and established a permanent marketing corridor between Coimbatore, Kochi, and the Middle East.',
      verified: true
    },
    {
      id: 'vidhu-mezhuveli',
      name: 'Vidhu Mezhuveli',
      role: 'Founder & CEO',
      company: 'Smash Cleaning Company',
      category: 'Cleaning & Hygiene',
      industryTag: 'INDUSTRIAL CLEANING & HYGIENE',
      location: 'Pathanamthitta / Kochi Chapter',
      photo: vidhuPhoto,
      photoPosition: 'center 20%',
      metric: '+320% Revenue Scale in 12 Months',
      quote: 'Before joining BOC, word-of-mouth was slow and unorganized. In BOC, referrals are systematic, qualified, and backed by personal peer recommendation.',
      challenge: 'Scaling beyond residential deep cleaning into high-margin post-construction industrial cleaning, corporate auditorium sanitization, and mall hygiene management across multiple Kerala districts.',
      experience: 'Active participation in weekly referral rounds, where fellow members proactively shared upcoming construction completions, office handovers, and hospital renovations.',
      collaboration: 'Partnered with chapter builders, architects, and pest control specialists (Jijeesh Minerva / Sajish) to offer joint "pre-handover deep clean & pest treatment" turnkey solutions.',
      result: 'Expanded cleaning workforce from 12 to 55+ trained technicians, secured multi-year cleaning contracts for 8 educational institutions and 5 commercial complexes, boosting revenue by 320%.',
      verified: true
    },
    {
      id: 'sajish-maliyekkal',
      name: 'Sajish Maliyekkal',
      role: 'Founder',
      company: 'Greenline Pest Management',
      category: 'Pest & Facilities',
      industryTag: 'ECO-FRIENDLY PEST CONTROL',
      location: 'Thrissur Chapter',
      photo: sajishPhoto,
      photoPosition: 'center 20%',
      metric: '100% Retained Corporate Client Rate',
      quote: 'The zero-competition rule in BOC gives me complete confidence. No two members compete for the same service in a chapter, creating 100% loyalty and genuine collaboration.',
      challenge: 'Standing out in a crowded market filled with uncertified local contractors and establishing Greenline as the definitive authority for certified eco-friendly termite control and structural treatment.',
      experience: 'Delivered weekly educational micro-sessions to chapter members explaining government regulations, IPM (Integrated Pest Management) standards, and the financial danger of untreated termite infestation.',
      collaboration: 'Received priority referrals from architects, civil contractors, and interior designers in the chapter for pre-construction anti-termite soil treatment across Thrissur and Ernakulam.',
      result: 'Achieved 100% corporate client retention, established pre-construction contracts with 18 premium villa and apartment projects, and expanded service fleet to 4 Kerala districts.',
      verified: true
    },
    {
      id: 'nidhi-tomer',
      name: 'Nidhi Tomer',
      role: 'Founder & CEO',
      company: 'Vedic Bricks Academy, Kochi',
      category: 'EdTech & Social Impact',
      industryTag: 'VEDIC EDTECH & CHILD DEVELOPMENT',
      location: 'Kochi Marine Drive Chapter',
      photo: nidhiPhoto,
      photoPosition: 'center 20%',
      metric: '1,200+ Students Across 15 Schools',
      quote: 'BOC helped us take our Vedic Mathematics and Abacus learning programs from a single neighborhood center into 15 prestigious schools and hundreds of student families.',
      challenge: 'Gaining institutional trust with school principals and affluent parent networks in Kochi for a new experiential learning curriculum without spending heavily on mass advertisements.',
      experience: 'Fellow chapter members who were school board trustees, parents, and community leaders personally experienced demo sessions and vouched for the pedagogical rigour of the curriculum.',
      collaboration: 'Member referrals directly introduced Vedic Bricks Academy to PTA presidents, preschool chains, and community education centers throughout Ernakulam district.',
      result: 'Scaled student enrollments from 80 to over 1,200 active learners, partnered with 15 private schools in Kerala, and launched online batches for Gulf Malayali families.',
      verified: true
    },
    {
      id: 'anjana-sreedharan',
      name: 'Anjana Sreedharan',
      role: 'General Secretary',
      company: 'Mithrakulam Trust',
      category: 'EdTech & Social Impact',
      industryTag: 'SOCIAL IMPACT & CSR ALLIANCES',
      location: 'Thiruvananthapuram Chapter',
      photo: anjanaPhoto,
      photoPosition: 'center 12%',
      metric: '₹45 Lakhs in Structured CSR Alliances',
      quote: 'BOC is built on empathy and mutual support. Through the circle, we connected with visionary business founders who made community development and youth skill training a core part of their corporate giving.',
      challenge: 'Connecting grassroots social welfare programs with genuine, high-trust corporate sponsors seeking verified CSR impact, transparent fund tracking, and tangible community empowerment.',
      experience: 'Presented grassroots women entrepreneurship and youth vocational projects during BOC Kerala Conclaves; received unanimous support and sponsorship from chapter business owners.',
      collaboration: 'Formed ongoing CSR partnerships with BOC members across manufacturing, finance, and IT to adopt artisan clusters and fund technical vocational scholarships.',
      result: 'Mobilized ₹45 Lakhs in audited CSR funding, established 4 vocational micro-units in southern Kerala, and empowered 300+ rural women to launch self-sustaining micro-enterprises.',
      verified: true
    },
  ];

  const filteredStories = activeCategory === 'All' 
    ? stories 
    : stories.filter(s => s.category === activeCategory);

  const stats = [
    {
      icon: Users,
      value: '1000+',
      label: 'SUCCESSFUL MEMBERS',
    },
    {
      icon: Handshake,
      value: '500+',
      label: 'BUSINESS PARTNERSHIPS',
    },
    {
      icon: TrendingUp,
      value: '300+',
      label: 'BUSINESSES GROWN',
    },
    {
      icon: Star,
      value: '100%',
      label: 'MEMBER SATISFACTION',
    },
  ];

  return (
    <section 
      id="success-stories" 
      className="relative w-full bg-[#FAF8F5] text-slate-900 overflow-hidden select-none py-16 sm:py-20 lg:py-24 border-t border-[#EADBBD]/60"
    >
      {/* Background Soft Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5E6BE]/30 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5E6BE]/25 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      {/* ===================================================================== */}
      {/* 1. TOP-LEFT CURVED NAVY WAVE WITH BOC BRANDING                        */}
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

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ===================================================================== */}
        {/* 2. TOP RIGHT SCRIPT: "Together We Grow"                               */}
        {/* ===================================================================== */}
        <div className="flex justify-end mb-4 sm:mb-2">
          <div className="text-right">
            <span className="font-serif italic font-bold text-2xl sm:text-3xl md:text-4xl text-[#0A192F] tracking-wide block">
              Together We Grow
            </span>
            <svg className="w-32 sm:w-44 h-3 text-[#B57D2B] ml-auto -mt-1" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9C40 3 120 1 158 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* 3. UPPER SHOWCASE: TYPOGRAPHY + VERIFIED HERO PANORAMA                */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 sm:mb-14">
          
          {/* Left Column (6 Cols): Typography & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Kicker */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-[1.5px] w-6 bg-[#B57D2B]" />
              <span className="text-[#B57D2B] text-xs sm:text-[13px] font-bold tracking-[0.25em] uppercase font-cinzel">
                MEMBER SUCCESS STORIES
              </span>
              <div className="h-[1.5px] w-6 bg-[#B57D2B]" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-bold tracking-tight leading-[1.08] mb-4">
              <span className="text-[#0A192F] block">Real People.</span>
              <span className="text-[#B57D2B] block">Real Growth.</span>
            </h2>

            {/* Narrative Description */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 font-normal">
              Every business milestone in BOC begins with genuine relationships and high-trust peer referrals. Explore how our verified members across Kerala turned networking into substantial revenue and market leadership.
            </p>

            {/* Verified Permission Notice (As per brief guidelines) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#07172C]/5 border border-[#D4AF37]/40 text-xs text-[#6B4B18] font-medium mb-6">
              <ShieldCheck className="w-4 h-4 text-[#B57D2B] flex-shrink-0" />
              <span>Verified member-provided case studies • Published with authorization</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#07172C] to-[#0E2849] hover:from-[#B57D2B] hover:to-[#966620] text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-300 border border-[#D4AF37]/50 group cursor-pointer"
              >
                <span>Write Your Own Success Story</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column (6 Cols): Hero Team Panorama Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(10,25,47,0.18)] border-2 border-[#EADBBD]">
              <img 
                src={heroTeamImg} 
                alt="BOC Business Founders Looking at Sunrise Skyline" 
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Verified Trust Stamp Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F9D678]" />
                  <span className="font-medium text-[11px]">100% Peer Verified Network</span>
                </div>
                <div className="bg-[#B57D2B] text-black font-bold px-3 py-1 rounded-full text-[10px] tracking-wider uppercase">
                  BOC Kerala
                </div>
              </div>
            </div>

            {/* Subtle Gold Corner Accent */}
            <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[#07172C] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg hidden sm:flex">
              <Sparkles className="w-4 h-4 text-[#F9D678]" />
            </div>
          </div>

        </div>

        {/* ===================================================================== */}
        {/* 4. CATEGORY FILTER BUTTONS                                            */}
        {/* ===================================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase font-cinzel transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#07172C] text-[#F9D678] border border-[#D4AF37] shadow-md scale-105'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-[#D4AF37] hover:text-[#B57D2B]'
                }`}
              >
                {cat} {cat === 'All' ? `(${stories.length})` : `(${stories.filter(s => s.category === cat).length})`}
              </button>
            );
          })}
        </div>

        {/* ===================================================================== */}
        {/* 5. THE 7 VERIFIED MEMBER CASE STUDY CARDS (User-Provided Photos Only) */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-14 sm:mb-16 items-stretch">
          {filteredStories.map((story) => (
            <div 
              key={story.id}
              className="group relative bg-[#07172C] text-white rounded-2xl p-5 flex flex-col border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-[0_8px_24px_rgba(0,0,0,0.14)] hover:shadow-[0_20px_40px_rgba(181,125,43,0.3)] transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Member Photo with Authentic User Uploaded Picture */}
              <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4 bg-[#030C1C] border border-[#D4AF37]/30 shadow-inner">
                <img 
                  src={story.photo} 
                  alt={story.name} 
                  style={{ objectPosition: story.photoPosition || 'center 15%' }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07172C] via-transparent to-transparent pointer-events-none" />

                {/* Verified Pill (Top Left of Photo) */}
                <div className="absolute top-2.5 left-2.5 bg-[#030C1C]/90 backdrop-blur-md border border-[#D4AF37]/60 text-[#F9D678] text-[9.5px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-[#25D366]" />
                  <span>Verified Member</span>
                </div>

                {/* Result Highlight Pill (Bottom Right of Photo) */}
                <div className="absolute bottom-2.5 right-2.5 bg-gradient-to-r from-[#FDE8BB] via-[#FCE3AA] to-[#F5D082] text-[#7A4F0B] border border-[#EADBBD] text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-md tracking-wide">
                  {story.metric}
                </div>
              </div>

              {/* Author Header */}
              <div className="mb-2">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-cinzel font-bold text-[#F9D678] tracking-wider uppercase">
                    {story.industryTag}
                  </span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    {story.location.split(' ')[0]}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#F9D678] transition-colors leading-snug">
                  {story.name}
                </h3>
                <p className="text-slate-300 text-xs line-clamp-1">
                  {story.role}, {story.company}
                </p>
              </div>

              {/* Golden Quote Mark & Testimonial */}
              <div className="text-[#F9D678] my-1">
                <Quote className="w-5 h-5 rotate-180 opacity-80" />
              </div>

              <p className="text-slate-200 text-xs leading-relaxed italic mb-4 font-light line-clamp-3">
                &ldquo;{story.quote}&rdquo;
              </p>

              {/* Structured Case Study Highlights (Brief Point 20) */}
              <div className="space-y-1.5 pt-3 border-t border-slate-800 text-[11px] mb-4 bg-[#030C1C]/40 p-2.5 rounded-lg">
                <div className="flex items-start gap-1.5">
                  <Target className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 line-clamp-1">
                    <strong className="text-white">Challenge:</strong> {story.challenge}
                  </span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Handshake className="w-3.5 h-3.5 text-[#F9D678] mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 line-clamp-1">
                    <strong className="text-white">BOC Referral:</strong> {story.collaboration}
                  </span>
                </div>
                <div className="flex items-start gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 line-clamp-1">
                    <strong className="text-white">Result:</strong> {story.result}
                  </span>
                </div>
              </div>

              {/* View Full Case Study Button */}
              <button
                onClick={() => setSelectedStory(story)}
                className="w-full py-2.5 px-3.5 rounded-xl bg-[#0B2548] hover:bg-[#B57D2B] text-[#F9D678] hover:text-white text-xs font-bold border border-[#D4AF37]/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-auto group/btn shadow-sm"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* ===================================================================== */}
        {/* 6. BOTTOM METRICS BANNER: 4 STATS + "Your Success is Our Story"       */}
        {/* ===================================================================== */}
        <div className="relative bg-[#07172C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 px-6 sm:px-10 border border-[#D4AF37]/50 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-radial from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* 4 Statistics Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full lg:w-3/4 items-center">
              {stats.map((st, idx) => {
                const Icon = st.icon;

                return (
                  <div key={idx} className="flex flex-col items-center text-center relative">
                    <div className="w-11 h-11 rounded-full bg-[#0B2548] border border-[#D4AF37]/60 text-[#F9D678] flex items-center justify-center mb-2 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                      {st.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-cinzel font-bold text-[#F9D678] tracking-widest uppercase mt-0.5">
                      {st.label}
                    </span>

                    {/* Divider for desktop */}
                    {idx < stats.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-[1px] h-10 bg-[#D4AF37]/25 -translate-y-1/2" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: "Your Success is Our Story" Cursive Script */}
            <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-end text-center lg:text-right pt-4 lg:pt-0 border-t lg:border-t-0 border-[#D4AF37]/30">
              <div className="transform lg:-rotate-6">
                <span className="font-serif italic font-bold text-2xl sm:text-3xl text-white tracking-wide block drop-shadow-md">
                  Your Success
                </span>
                <span className="font-serif italic font-bold text-2xl sm:text-3xl text-[#F9D678] tracking-wide block drop-shadow-md">
                  is Our Story
                </span>
                <svg className="w-36 h-3 text-[#D4AF37] mx-auto lg:ml-auto mt-1" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9C40 3 120 1 158 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ===================================================================== */}
      {/* 7. DETAILED CASE STUDY MODAL (Full 8-Point Structured Brief Breakdown)*/}
      {/* ===================================================================== */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#07172C] text-white rounded-3xl border-2 border-[#D4AF37] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header: Member Profile */}
            <div className="flex items-start gap-4 pb-6 border-b border-[#D4AF37]/30 mb-6">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-lg flex-shrink-0 bg-[#030C1C]">
                <img 
                  src={selectedStory.photo} 
                  alt={selectedStory.name} 
                  style={{ objectPosition: selectedStory.photoPosition || 'center 15%' }}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Member Case Study</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-white">
                  {selectedStory.name}
                </h3>
                <p className="text-[#F9D678] text-xs font-semibold">
                  {selectedStory.role} • {selectedStory.company}
                </p>
                <p className="text-slate-400 text-xs mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {selectedStory.location}
                </p>
              </div>
            </div>

            {/* Headline Quote */}
            <div className="p-4 rounded-2xl bg-[#0B2548]/70 border-l-4 border-[#D4AF37] mb-6">
              <Quote className="w-5 h-5 text-[#F9D678] rotate-180 mb-1 opacity-80" />
              <p className="text-slate-200 text-sm leading-relaxed italic">
                &ldquo;{selectedStory.quote}&rdquo;
              </p>
              <div className="mt-2 text-right text-[11px] font-bold text-[#F9D678]">
                Key ROI: {selectedStory.metric}
              </div>
            </div>

            {/* 4 Structured Case Study Quadrants */}
            <div className="space-y-4 mb-6">
              
              {/* 1. Challenge */}
              <div className="p-4 rounded-2xl bg-[#030C1C] border border-red-500/20 text-left">
                <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                  <Target className="w-4 h-4" />
                  <span>1. The Business Challenge</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                  {selectedStory.challenge}
                </p>
              </div>

              {/* 2. BOC Experience */}
              <div className="p-4 rounded-2xl bg-[#030C1C] border border-[#F9D678]/25 text-left">
                <div className="flex items-center gap-2 text-[#F9D678] text-xs font-bold uppercase tracking-wider mb-1.5">
                  <Compass className="w-4 h-4" />
                  <span>2. The BOC Strategy & Experience</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                  {selectedStory.experience}
                </p>
              </div>

              {/* 3. Collaboration & Referrals */}
              <div className="p-4 rounded-2xl bg-[#030C1C] border border-blue-500/25 text-left">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                  <Handshake className="w-4 h-4" />
                  <span>3. Strategic Collaboration & Referral Exchange</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                  {selectedStory.collaboration}
                </p>
              </div>

              {/* 4. Tangible Result */}
              <div className="p-4 rounded-2xl bg-[#030C1C] border border-emerald-500/25 text-left">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                  <TrendingUp className="w-4 h-4" />
                  <span>4. Measurable Results & ROI</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-medium">
                  {selectedStory.result}
                </p>
              </div>

            </div>

            {/* Verification Stamp & Consent Notice */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center text-[11px] text-slate-400 mb-6">
              <span>🛡️ Information authenticated by BOC Kerala Chapter Council. Published with member authorization.</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setSelectedStory(null);
                  onOpenJoinModal();
                }}
                className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Apply for Membership</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedStory(null)}
                className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-white/5 text-xs font-semibold transition-all cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
