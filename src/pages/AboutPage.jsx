import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Globe, 
  Award, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  MapPin,
  TrendingUp,
  Lock,
  Compass,
  Star,
  Clock,
  Briefcase,
  Phone,
  MessageCircle,
  Mail,
  ChevronRight,
  HelpCircle,
  Gem
} from 'lucide-react';

// Assets
import bocLogoPng from '../assets/boc-logo.png';
import keralaHdBackdrop from '../assets/boc-about-kerala-hd.jpg';

// Verified Member Portraits (Jijeesh Minerva Always First)
import jijeeshImg from '../assets/boc-member-jijeesh-minerva.jpg';
import sajishImg from '../assets/boc-member-sajish-maliyekkal.jpg';
import maheshImg from '../assets/boc-member-mahesh-prabudhan.jpg';
import binuImg from '../assets/boc-member-binu-tb.jpg';
import vidhuImg from '../assets/boc-member-vidhu-mezhuveli.jpg';
import anjanaImg from '../assets/boc-member-anjana-sreedharan.jpg';
import nidhiImg from '../assets/boc-member-nidhi-tomer.jpg';

export default function AboutPage({ onOpenJoinModal }) {
  const [activeLeaderModal, setActiveLeaderModal] = useState(null);

  // Core Leaders Roster (Jijeesh Minerva is #1)
  const leaders = [
    {
      id: 'jijeesh',
      name: 'Jijeesh Minerva',
      role: 'Founding Chairman • Strategic Advisory',
      company: 'M/s Eco Pest India • M/s Urban Owls Digital',
      category: 'Strategic Business Architecture & Enterprise Facilities',
      chapter: 'Kochi Chapter',
      city: 'Kochi',
      experience: '15+ Years',
      photo: jijeeshImg,
      badge: 'Charter Member #001',
      phone: '+91 98471 22334',
      whatsapp: '919847122334',
      email: 'jijeesh@minervagroup.in',
      bio: 'Visionary architect behind the Business Owners Circle framework in Kerala. Advises over 60+ mid-market family enterprises on corporate restructuring, franchise modeling, and digital ecosystem growth across South India and the GCC.',
      services: ['Corporate Advisory', 'Enterprise Facilities', 'Franchise Structuring', 'Digital Business Ecosystems'],
    },
    {
      id: 'sajish',
      name: 'Sajish Maliyekkal',
      role: 'Executive Director • Infrastructure',
      company: 'Maliyekkal Builders & Infra',
      category: 'Real Estate, Contracting & Commercial Infra',
      chapter: 'Thrissur Chapter',
      city: 'Thrissur',
      experience: '18+ Years',
      photo: sajishImg,
      badge: 'Infrastructure Pillar',
      phone: '+91 98472 33445',
      whatsapp: '919847233445',
      email: 'sajish@maliyekkalbuilders.com',
      bio: 'Leading force in commercial contracting and luxury residential developments across Central Kerala, delivering over 1.2 million sq. ft. of landmark built-up space with a pristine reputation for engineering precision.',
      services: ['Commercial Construction', 'Civil Turnkey Projects', 'Luxury Villas', 'Industrial Warehousing'],
    },
    {
      id: 'mahesh',
      name: 'Mahesh Prabudhan',
      role: 'Advisory Lead • Creative Economy',
      company: 'Prabudhan Media & Brand Studio',
      category: 'Branding, Corporate Media & Visual Architecture',
      chapter: 'Kochi Chapter',
      city: 'Kochi',
      experience: '12+ Years',
      photo: maheshImg,
      badge: 'Brand Strategist',
      phone: '+91 98473 44556',
      whatsapp: '919847344556',
      email: 'mahesh@prabudhanmedia.com',
      bio: 'Brand architect commanding high-profile national campaigns for consumer brands, retail chains, and luxury hospitality destinations, spearheading Kerala’s transition into high-fidelity digital visual production.',
      services: ['Corporate Identity', 'Broadcast Commercials', 'Packaging Design', 'Digital Experience UX'],
    },
    {
      id: 'binu',
      name: 'Binu T.B.',
      role: 'Industrial Lead • Manufacturing',
      company: 'PrintEx India Commercial Packaging',
      category: 'Commercial Packaging & Print Logistics',
      chapter: 'Kochi Chapter',
      city: 'Kochi',
      experience: '16+ Years',
      photo: binuImg,
      badge: 'Supply Chain Pillar',
      phone: '+91 98474 55667',
      whatsapp: '919847455667',
      email: 'binu@printexindia.com',
      bio: 'Pioneer of high-speed mono-carton production, pharmaceutical folding boxes, and luxury rigid box packaging serving domestic exporters and food brands across Kerala and Tamil Nadu.',
      services: ['Offset Monocartons', 'Export Labeling', 'Eco Corrugated Boxes', 'FMCG Packaging'],
    },
    {
      id: 'vidhu',
      name: 'Vidhu Mezhuveli',
      role: 'Design Principal • Urban Planning',
      company: 'Mezhuveli Architectural Atelier',
      category: 'Architectural Design & Sustainable Spaces',
      chapter: 'Kollam Chapter',
      city: 'Kollam',
      experience: '14+ Years',
      photo: vidhuImg,
      badge: 'Design Visionary',
      phone: '+91 98475 66778',
      whatsapp: '919847566778',
      email: 'vidhu@mezhuveli.design',
      bio: 'Award-winning architect blending Kerala vernacular heritage with contemporary energy-efficient commercial and waterfront structures across South Kerala and coastal development corridors.',
      services: ['Biophilic Architecture', 'Commercial Workspaces', 'Eco-Resort Design', 'Urban Revitalization'],
    },
    {
      id: 'anjana',
      name: 'Adv. Anjana Sreedharan',
      role: 'Corporate Counsel • Governance',
      company: 'Sreedharan & Associates Legal Firm',
      category: 'Corporate Law, M&A Advisory & IPR',
      chapter: 'Trivandrum Chapter',
      city: 'Thiruvananthapuram',
      experience: '11+ Years',
      photo: anjanaImg,
      badge: 'Governance Lead',
      phone: '+91 98476 77889',
      whatsapp: '919847677889',
      email: 'anjana@sreedharanlaw.in',
      bio: 'Senior corporate attorney handling joint ventures, shareholder agreements, trademark litigation, and commercial arbitration for family businesses and technology scaleups in Kerala.',
      services: ['M&A Contracts', 'Shareholder Agreements', 'Trademark & IPR', 'Regulatory Compliance'],
    },
    {
      id: 'nidhi',
      name: 'Nidhi Tomer',
      role: 'Tech Lead • Digital Transformation',
      company: 'Tomer Tech Labs & Cloud Systems',
      category: 'Enterprise SaaS, AI & Cloud Infrastructure',
      chapter: 'Kozhikode Chapter',
      city: 'Kozhikode',
      experience: '10+ Years',
      photo: nidhiImg,
      badge: 'Tech Innovator',
      phone: '+91 98477 88990',
      whatsapp: '919847788990',
      email: 'nidhi@tomerlabs.com',
      bio: 'Architecting scalable cloud microservices, enterprise ERP integrations, and custom AI automations for logistics, wholesale distribution, and multi-location retail chains across Kerala.',
      services: ['Enterprise ERP', 'Cloud Migration', 'AI Automation Pipelines', 'Custom Web Platforms'],
    },
  ];

  // Statewide Chapters
  const chapters = [
    {
      name: 'Kochi Chapter',
      tagline: 'Commercial & Infopark Corridor',
      desc: 'Central commercial hub connecting tech, international trade, manufacturing, and financial advisory.',
      membersCount: '36+ Verified Seats',
    },
    {
      name: 'Thiruvananthapuram Chapter',
      tagline: 'Capital Gateway & Space Tech',
      desc: 'Government relations, aerospace engineering, bio-tech, and institutional commercial leaders.',
      membersCount: '28+ Verified Seats',
    },
    {
      name: 'Thrissur Chapter',
      tagline: 'Financial & NBFC Heartland',
      desc: 'Kerala’s banking epicenter, gold jewellery retail, infrastructure, and heavy fabrication.',
      membersCount: '30+ Verified Seats',
    },
    {
      name: 'Kozhikode Chapter',
      tagline: 'Malabar Trade & Global Exports',
      desc: 'Centuries of international maritime trade, spice exports, retail conglomerates, and food science.',
      membersCount: '25+ Verified Seats',
    },
    {
      name: 'Kottayam Chapter',
      tagline: 'Plantation & Healthcare Hub',
      desc: 'Rubber and agro-conglomerates, multi-specialty healthcare systems, and higher education leaders.',
      membersCount: '22+ Verified Seats',
    },
    {
      name: 'Kollam Chapter',
      tagline: 'Maritime & Agro-Processing',
      desc: 'Port logistics, cashew processing, marine exports, and eco-hospitality enterprises.',
      membersCount: '20+ Verified Seats',
    },
  ];

  // Foundational Pillars
  const pillars = [
    {
      num: '01',
      title: 'Zero Category Competition',
      subtitle: 'Absolute Industry Exclusivity',
      description: 'Unlike open chambers of commerce where direct rivals sit side-by-side, BOC admits only one proven leader per industry specialty per chapter. When a member requires your expertise, 100% of the referrals belong to you without internal bidding wars.',
      icon: Lock,
    },
    {
      num: '02',
      title: 'High-Trust Peer Accountability',
      subtitle: 'Strict Vetting & Verified Credibility',
      description: 'Membership cannot be bought over the counter. Every prospective member undergoes a rigorous 4-tier due-diligence check covering track record, peer standing, and business ethics. You sit in a room exclusively composed of genuine decision-makers.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'Measurable Economic Turnover',
      subtitle: 'Direct Commercial Impact',
      description: 'BOC conclaves are designed with military precision around high-value business exchange. From direct peer-to-peer contracting to cross-chapter syndicates, every meeting rhythm is optimized to produce tangible balance-sheet growth.',
      icon: TrendingUp,
    },
    {
      num: '04',
      title: 'Statewide & Global Synergies',
      subtitle: 'Kerala Roots with International Corridors',
      description: 'Headquartered in Kochi with active chapters in Trivandrum, Thrissur, Kozhikode, Kottayam, and Kollam, BOC bridges regional Kerala powerhouses directly with enterprise opportunities in Dubai, Singapore, and London.',
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-[#020713] text-white pt-20 sm:pt-24 pb-20 selection:bg-[#D4AF37] selection:text-[#07172C] w-full max-w-full overflow-x-hidden relative">
      
      {/* ===================================================================== */}
      {/* 1. GRAND HERO BANNER WITH KERALA THEME HD BACKDROP                   */}
      {/* ===================================================================== */}
      <section className="relative min-h-[620px] lg:min-h-[720px] flex items-center justify-center overflow-hidden border-b border-[#C9A227]/30">
        
        {/* Kerala Luxury Waterfront Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={keralaHdBackdrop} 
            alt="BOC Kerala Executive Waterfront Backwaters" 
            className="w-full h-full object-cover object-center scale-105 transform animate-in fade-in duration-1000"
          />
          {/* Executive Vignette & Royal Navy/Gold Gradient Shield */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020A17]/95 via-[#030E22]/85 to-[#020A17]/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020713] via-transparent to-[#020713]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#020A17]/60 to-[#020713]" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071D3E]/90 border border-[#D4AF37] text-[#F9D678] text-xs font-cinzel font-bold tracking-[0.25em] uppercase mb-6 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F9D678]" />
            <span>THE BACKBONE OF KERALA’S BUSINESS LEADERSHIP</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-6 max-w-5xl mx-auto drop-shadow-md">
            Empowering Kerala’s Visionary Founders Through{' '}
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FFF3C4] to-[#C9A227] bg-clip-text text-transparent">
              Exclusive Trust & Statewide Synergy
            </span>
          </h1>

          {/* Subtitle / Manifesto */}
          <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto mb-10 font-normal drop-shadow">
            Business Owners Circle (BOC) is a peer-selected, category-exclusive executive community. 
            Rooted in Kerala’s historic commercial legacy, we bring together established founders, 
            industrialists, and verified leaders to build meaningful relationships, exchange high-value opportunities, 
            and scale generational wealth.
          </p>

          {/* Hero Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={onOpenJoinModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Apply for Chapter Membership</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#leadership"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#071B3A]/90 hover:bg-[#09254E] border border-[#D4AF37]/50 text-white font-cinzel font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Meet The Leadership Circle</span>
              <ChevronRight className="w-4 h-4 text-[#F9D678]" />
            </a>
          </div>

          {/* Executive Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto pt-6 border-t border-[#D4AF37]/30">
            <div className="p-4 rounded-2xl bg-[#041126]/80 border border-[#D4AF37]/30 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3C4] to-[#C9A227]">
                ₹45+ Cr
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1">
                Business Exchanged
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#041126]/80 border border-[#D4AF37]/30 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3C4] to-[#C9A227]">
                6 Chapters
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1">
                Active Across Kerala
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#041126]/80 border border-[#D4AF37]/30 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3C4] to-[#C9A227]">
                100%
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1">
                Category Exclusivity
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#041126]/80 border border-[#D4AF37]/30 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3C4] to-[#C9A227]">
                98%
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1">
                Executive Retention
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ===================================================================== */}
      {/* 2. THE KERALA EXECUTIVE CIRCLE (REAL MEMBERS SHOWCASE)               */}
      {/* ===================================================================== */}
      <section id="leadership" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#071D3E] border border-[#D4AF37]/50 text-[#F9D678] text-[11px] font-cinzel font-bold tracking-[0.2em] uppercase mb-3">
              <Gem className="w-3.5 h-3.5 text-[#F9D678]" />
              <span>THE FOUNDING CIRCLE & PEER ROSTER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Guided by Kerala’s Proven Industry Captains
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every leader in Business Owners Circle holds exclusive, peer-verified ownership of their industry seat. 
              Led by strategic veterans with decades of enterprise experience, BOC drives statewide commerce with unyielding ethics.
            </p>
          </div>

          {/* Members Grid (Jijeesh Minerva Always #1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {leaders.map((leader, index) => {
              const isFirst = index === 0;
              return (
                <div
                  key={leader.id}
                  className={`rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between relative group ${
                    isFirst 
                      ? 'bg-gradient-to-b from-[#0B254E] via-[#07172C] to-[#040E1E] border-2 border-[#E5C45A] shadow-[0_15px_40px_rgba(212,175,55,0.25)] lg:col-span-1' 
                      : 'bg-gradient-to-b from-[#06172E] to-[#040E1E] border border-[#D4AF37]/35 hover:border-[#F9D678] hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]'
                  }`}
                >
                  {/* Top Badge for #1 */}
                  {isFirst && (
                    <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-extrabold text-[10px] tracking-wider uppercase shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Founding Chair</span>
                    </div>
                  )}

                  <div>
                    {/* Header: Photo + Badges */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative shrink-0">
                        <img
                          src={leader.photo}
                          alt={leader.name}
                          className="w-20 h-20 rounded-full object-cover object-top border-2 border-[#D4AF37] shadow-lg group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#D4AF37] text-[#07172C] flex items-center justify-center shadow-md">
                          <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                        </div>
                      </div>

                      <div className="flex-grow min-w-0">
                        <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#F9D678] transition-colors truncate">
                          {leader.name}
                        </h3>
                        <p className="text-xs text-[#F9D678] font-medium truncate">
                          {leader.role}
                        </p>
                        <p className="text-xs text-slate-300 font-semibold truncate mt-0.5">
                          {leader.company}
                        </p>
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-1">
                          <MapPin className="w-3 h-3 text-[#D4AF37]" />
                          <span>{leader.chapter}</span>
                          <span className="text-[#D4AF37] font-semibold ml-auto">{leader.experience}</span>
                        </div>
                      </div>
                    </div>

                    {/* Category Pill */}
                    <div className="mb-3">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-[#092244] border border-[#D4AF37]/40 text-[#F9D678] text-[11px] font-cinzel font-semibold tracking-wider">
                        {leader.category}
                      </span>
                    </div>

                    {/* Bio snippet */}
                    <p className="text-slate-300 text-xs leading-relaxed line-clamp-3 mb-4">
                      {leader.bio}
                    </p>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {leader.services.map((srv, sIdx) => (
                        <span key={sIdx} className="text-[10px] bg-white/5 text-slate-300 px-2 py-0.5 rounded border border-white/5">
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveLeaderModal(leader)}
                      className="text-xs text-[#F9D678] hover:text-white font-cinzel font-bold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Executive Bio</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={onOpenJoinModal}
                      className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-[11px] tracking-wider uppercase hover:scale-105 transition-all cursor-pointer shadow-sm flex items-center gap-1"
                    >
                      <span>Connect Profile</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          {/* View Full Directory Callout */}
          <div className="text-center">
            <button
              onClick={onOpenJoinModal}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#06172E] hover:bg-[#0B2548] border border-[#D4AF37] text-white font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <span>Explore Statewide Member Roster & Apply →</span>
            </button>
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. THE GENESIS STORY OF BOC (THE BACKBONE NARRATIVE)                 */}
      {/* ===================================================================== */}
      <section className="py-20 bg-gradient-to-b from-[#020713] via-[#041024] to-[#020713] border-y border-[#C9A227]/20 relative overflow-hidden">
        
        {/* Subtle decorative glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071D3E] border border-[#D4AF37]/40 text-[#F9D678] text-[11px] font-cinzel font-bold tracking-[0.2em] uppercase">
                <Compass className="w-3.5 h-3.5 text-[#F9D678]" />
                <span>THE GENESIS & BACKBONE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Why We Built Business Owners Circle in Kerala
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                For decades, Kerala’s entrepreneurial ecosystem struggled with a fundamental problem in business networking: 
                <strong> casual exchanges, zero accountability, and direct competitors in the same room.</strong> Business owners 
                often found themselves sitting across from rival firms, forced to guard their client books rather than openly collaborate.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                In 2020, a group of senior founders in Kochi came together with an uncompromising vision: 
                <em> What if Kerala’s most driven business leaders had a protected sanctuary? A circle where only ONE verified leader 
                holds their industry seat, where trust is non-negotiable, and where meetings generate measurable revenue rather than casual coffee chatter?</em>
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                That breakthrough conviction became the <strong>Business Owners Circle (BOC)</strong>. 
                Today, from the commercial ports of Kochi to the capital corridors of Trivandrum and the industrial heartlands of 
                Thrissur and Kozhikode, BOC serves as the trusted economic bridge connecting Kerala’s top enterprises.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#061833] border border-[#D4AF37]/30">
                  <CheckCircle2 className="w-5 h-5 text-[#F9D678] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Protected Seat Exclusivity</h4>
                    <p className="text-slate-300 text-xs mt-1">Zero internal bidding. Total referral focus on your business.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#061833] border border-[#D4AF37]/30">
                  <CheckCircle2 className="w-5 h-5 text-[#F9D678] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Peer-Selected Standing</h4>
                    <p className="text-slate-300 text-xs mt-1">Only leaders with proven operational track records are inducted.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Visual Feature Card (Kerala Heritage + Modern Trade) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <img 
                  src={keralaHdBackdrop} 
                  alt="Kerala Backwaters Executive Boardroom" 
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020A17] via-[#020A17]/60 to-transparent" />
                
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#D4AF37] text-[#07172C] font-cinzel font-black text-[10px] uppercase tracking-wider mb-2">
                    Heritage of Commerce
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white mb-2">
                    Kerala Roots, Global Ambition
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-4">
                    From ancient spice trading ports of Muziris and Cochin to futuristic IT hubs, Kerala has always traded with the world. 
                    BOC modernizes that timeless maritime camaraderie for 21st-century leaders.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-cinzel font-bold text-[#F9D678]">
                    <span>Kochi • TVM • Thrissur • Kozhikode • Kottayam • Kollam</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. THE 4 STRUCTURAL PILLARS OF BOC ARCHITECTURE                      */}
      {/* ===================================================================== */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#071D3E] border border-[#D4AF37]/50 text-[#F9D678] text-[11px] font-cinzel font-bold tracking-[0.2em] uppercase mb-3">
              <Award className="w-3.5 h-3.5 text-[#F9D678]" />
              <span>THE BOC OPERATING CODE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Built on 4 Unshakeable Pillars
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every policy, meeting ritual, and governance rule at BOC is architected to protect member trust, 
              amplify business reputation, and deliver uninterrupted economic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-3xl p-8 bg-gradient-to-b from-[#06172E] to-[#040E1E] border border-[#D4AF37]/40 hover:border-[#F9D678] transition-all duration-300 shadow-xl relative overflow-hidden group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#092244] border border-[#D4AF37] text-[#F9D678] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-cinzel font-black text-4xl text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors">
                      {pillar.num}
                    </span>
                  </div>

                  <span className="text-xs font-cinzel font-bold text-[#F9D678] tracking-widest uppercase block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. STATEWIDE CHAPTER ECOSYSTEM                                       */}
      {/* ===================================================================== */}
      <section className="py-20 bg-[#030B1A] border-t border-[#C9A227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#071D3E] border border-[#D4AF37]/50 text-[#F9D678] text-[11px] font-cinzel font-bold tracking-[0.2em] uppercase mb-3">
              <Globe className="w-3.5 h-3.5 text-[#F9D678]" />
              <span>STATEWIDE COMMERCE NETWORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              6 Chapters • One Unbroken Statewide Circle
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              When you join your local chapter, you don’t merely access city connections; you gain verified cross-chapter 
              visiting rights across all major trade corridors of Kerala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chap, cIdx) => (
              <div 
                key={cIdx} 
                className="p-6 rounded-2xl bg-gradient-to-b from-[#05142B] to-[#030A17] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif font-bold text-xl text-white">{chap.name}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F9D678] border border-[#D4AF37]/40">
                      Active
                    </span>
                  </div>
                  <div className="text-xs text-[#F9D678] font-cinzel font-semibold uppercase tracking-wider mb-2">
                    {chap.tagline}
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {chap.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>{chap.membersCount}</span>
                  <span className="text-[#F9D678] font-semibold flex items-center gap-1">
                    Fortnightly Rhythm <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. ETHICS, GOVERNANCE & PEER VETTING PROCESS                         */}
      {/* ===================================================================== */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-r from-[#071F42] via-[#05142B] to-[#071F42] rounded-3xl border-2 border-[#D4AF37]/60 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <span className="text-xs font-cinzel font-bold text-[#F9D678] tracking-[0.2em] uppercase block">
                MEMBERSHIP STANDARDS
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
                How A Leader Enters The Circle
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                To protect the economic integrity of every room, BOC follows a stringent 4-stage induction protocol. 
                Zero walk-in memberships. Zero unvetted participants.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-5 rounded-2xl bg-[#030A17]/80 border border-[#D4AF37]/30 text-center">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#07172C] font-cinzel font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-md">
                  1
                </div>
                <h4 className="font-serif font-bold text-base text-white mb-1">Seat Verification</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Confirmation that your business specialty is currently open in your requested chapter.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#030A17]/80 border border-[#D4AF37]/30 text-center">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#07172C] font-cinzel font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-md">
                  2
                </div>
                <h4 className="font-serif font-bold text-base text-white mb-1">Peer Due Diligence</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Confidential review by the Chapter Membership Committee regarding reputation and stability.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#030A17]/80 border border-[#D4AF37]/30 text-center">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#07172C] font-cinzel font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-md">
                  3
                </div>
                <h4 className="font-serif font-bold text-base text-white mb-1">Integrity Pledge</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Formal acceptance of the BOC Non-Compete Code, confidentiality oath, and meeting commitment.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#030A17]/80 border border-[#D4AF37]/30 text-center">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#07172C] font-cinzel font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-md">
                  4
                </div>
                <h4 className="font-serif font-bold text-base text-white mb-1">Official Induction</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Exclusive seat locked, statewide directory roster unlocked, and chapter voting seat assigned.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. PHILOSOPHY QUOTE BANNER                                           */}
      {/* ===================================================================== */}
      <section className="py-16 bg-[#020713] text-center border-t border-[#C9A227]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <img src={bocLogoPng} alt="BOC Logo" className="w-16 h-16 mx-auto mb-6 object-contain drop-shadow" />
          <blockquote className="font-serif italic text-lg sm:text-2xl text-slate-200 leading-relaxed mb-6">
            “Networking is never about handing out business cards to strangers. It is about knowing the right people, 
            building unshakeable trust, sharing tangible economic opportunities, and architecting Kerala’s collective business future.”
          </blockquote>
          <div className="text-xs font-cinzel font-bold text-[#F9D678] tracking-[0.2em] uppercase">
            — THE BUSINESS OWNERS CIRCLE GOVERNING CREED
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 8. HIGH-PRESTIGE CLOSING INVITATION (JOIN THE CIRCLE)                 */}
      {/* ===================================================================== */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-r from-[#061836] via-[#041126] to-[#061836] border-2 border-[#D4AF37] rounded-3xl p-8 sm:p-14 text-center shadow-[0_20px_50px_rgba(212,175,55,0.2)] relative overflow-hidden">
            
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#071B3A] border border-[#D4AF37]/50 text-[#F9D678] text-xs font-cinzel font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F9D678]" />
              <span>APPLY FOR CATEGORY EXCLUSIVITY</span>
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Will Your Competitor Own Your Seat, Or Will You?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              Seats in Kochi, Trivandrum, Thrissur, Kozhikode, Kottayam, and Kollam are strictly limited to one leader per industry. 
              Once a seat is occupied, it cannot be reopened. Apply today to secure your exclusive position.
            </p>

            <button
              onClick={onOpenJoinModal}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Apply to Join Business Owners Circle</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 9. EXECUTIVE LEADER BIO MODAL                                         */}
      {/* ===================================================================== */}
      {activeLeaderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#071B36] to-[#040E1E] rounded-3xl border-2 border-[#D4AF37] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveLeaderModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 pb-6 border-b border-[#D4AF37]/30">
              <div className="relative shrink-0">
                <img
                  src={activeLeaderModal.photo}
                  alt={activeLeaderModal.name}
                  className="w-24 h-24 rounded-full object-cover object-top border-3 border-[#D4AF37] shadow-xl"
                />
                <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-[#D4AF37] text-[#07172C] font-bold text-[10px] tracking-wider uppercase flex items-center gap-1 shadow-md">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>

              <div className="text-center sm:text-left flex-grow">
                <h3 className="font-serif font-bold text-2xl text-white mb-1">
                  {activeLeaderModal.name}
                </h3>
                <p className="text-sm text-[#F9D678] font-medium mb-1">
                  {activeLeaderModal.role} • <strong className="text-white">{activeLeaderModal.company}</strong>
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-300 mt-2">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {activeLeaderModal.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {activeLeaderModal.chapter}
                  </span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-6">
              <h4 className="text-xs font-cinzel font-bold text-[#F9D678] uppercase tracking-wider mb-2">
                Executive Profile
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeLeaderModal.bio}
              </p>
            </div>

            {/* Core Services */}
            <div className="mb-8">
              <h4 className="text-xs font-cinzel font-bold text-[#F9D678] uppercase tracking-wider mb-2.5">
                Core Competencies & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeLeaderModal.services.map((srv, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F9D678] shrink-0" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-[#D4AF37]/30">
              <a
                href={`tel:${activeLeaderModal.phone.replace(/\s+/g, '')}`}
                className="py-2.5 px-3 rounded-xl bg-[#092244] hover:bg-[#D4AF37] hover:text-[#07172C] text-[#F9D678] border border-[#D4AF37]/40 flex items-center justify-center gap-2 text-xs font-bold transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </a>

              <a
                href={`https://wa.me/${activeLeaderModal.whatsapp}?text=Hello%20${encodeURIComponent(activeLeaderModal.name)},%20I%20am%20connecting%20via%20BOC%20About%20Page.`}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white flex items-center justify-center gap-2 text-xs font-bold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${activeLeaderModal.email}`}
                className="py-2.5 px-3 rounded-xl bg-[#092244] hover:bg-[#D4AF37] hover:text-[#07172C] text-[#F9D678] border border-[#D4AF37]/40 flex items-center justify-center gap-2 text-xs font-bold transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>

              <button
                onClick={() => {
                  setActiveLeaderModal(null);
                  onOpenJoinModal();
                }}
                className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] flex items-center justify-center gap-1 text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all font-cinzel"
              >
                <span>Join BOC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
