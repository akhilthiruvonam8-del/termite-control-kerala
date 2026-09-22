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
  Handshake,
  Gem,
  Maximize2,
  X
} from 'lucide-react';

// Assets
import bocLogoPng from '../assets/boc-logo.png';
import masterAboutHero from '../assets/boc-about-master-hero.jpg';
import keralaWaterfrontBg from '../assets/boc-about-kerala-hd.jpg';

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
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);

  // 4 Core Master Highlights (Exact from Master Reference)
  const masterHighlights = [
    {
      id: 'connect',
      title: 'CONNECT',
      subtitle: 'with like-minded business owners',
      icon: Users,
      desc: 'Build deep, authentic relationships with verified enterprise founders and decision-makers across your region.'
    },
    {
      id: 'collaborate',
      title: 'COLLABORATE',
      subtitle: 'on new opportunities',
      icon: Handshake,
      desc: 'Form high-value joint ventures, cross-industry packages, and syndicate alliances without internal competition.'
    },
    {
      id: 'grow',
      title: 'GROW',
      subtitle: 'together as a community',
      icon: TrendingUp,
      desc: 'Accelerate balance-sheet revenue and company footprint through structured, high-conversion peer referrals.'
    },
    {
      id: 'create',
      title: 'CREATE',
      subtitle: 'a bigger impact in the business world',
      icon: Globe,
      desc: 'Elevate Kerala’s enterprise stature on the national and global stage through cohesive collective leadership.'
    }
  ];

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

  return (
    <div className="min-h-screen bg-[#020713] text-white pt-20 sm:pt-24 pb-20 selection:bg-[#D4AF37] selection:text-[#07172C] w-full max-w-full overflow-x-hidden relative">
      
      {/* Background Ambient Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0A254E]/40 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ===================================================================== */}
        {/* 1. MASTER ABOUT BOC SHOWCASE BANNER                                   */}
        {/* ===================================================================== */}
        <div className="mb-14 sm:mb-20">
          
          {/* Header Title (Clean without 'the backbone of kerala') */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#C9A227] bg-clip-text text-transparent">
                Business Owners Circle
              </span>
            </h1>
          </div>

          {/* MASTER SHOWCASE: FULL BACKGROUND WITH CRISP ULTRA-HD TYPOGRAPHY */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_25px_70px_rgba(0,0,0,0.85)] bg-[#020713] max-w-6xl mx-auto">
            
            {/* Desktop Viewport (md and up): Real Master Background with Left Vector Scrim & Typography */}
            <div className="hidden md:block relative w-full aspect-[16/9] min-h-[580px] lg:min-h-[640px] overflow-hidden">
              
              {/* Full Background Image: 100% Natural User Photograph */}
              <img
                src={masterAboutHero}
                alt="Business Owners Circle Kerala Waterfront Meeting"
                className="absolute inset-0 w-full h-full object-cover object-[center_right] select-none pointer-events-none"
              />

              {/* Directional Soft Luxury Scrim on Left: Perfectly shields text readability while leaving natural photo ambiance and faces 100% natural */}
              <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-[#020713]/90 via-[#020713]/65 via-[#020713]/30 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020713]/85 via-[#020713]/25 to-transparent pointer-events-none" />

              {/* 100% Native Vector Typed Content (Razor Sharp, Infinite Resolution, Never Fuzzy) */}
              <div className="relative z-10 w-full max-w-[58%] h-full p-8 lg:p-12 flex flex-col justify-between select-text">
                
                <div>
                  {/* BOC Logo & Branding (Official Emblem & Correct Full Form) */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="relative shrink-0">
                      <img 
                        src={bocLogoPng} 
                        alt="BOC Official Logo" 
                        className="w-12 h-12 lg:w-14 lg:h-14 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" 
                      />
                    </div>
                    <div>
                      <div className="text-2xl font-cinzel font-black tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        BOC
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-cinzel font-extrabold text-[#F9D678] tracking-[0.22em] uppercase leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                        BUSINESS • OWNERS • CIRCLE
                      </div>
                    </div>
                  </div>

                  {/* Eyebrow Tag */}
                  <div className="text-xs font-cinzel font-bold text-[#F9D678] tracking-[0.22em] uppercase mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                    — ABOUT US
                  </div>

                  {/* Main Headline */}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-[1.14] mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                    More Than a Network,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#D4AF37] drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]">
                      We’re a Community.
                    </span>
                  </h2>

                  {/* Subtitle Description */}
                  <p className="text-slate-200 text-xs sm:text-[13px] lg:text-sm leading-relaxed max-w-xl mb-5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] font-normal">
                    Business Owners Circle (BOC) is a premium networking platform for entrepreneurs, professionals and business leaders who believe in the power of genuine connections, collaboration and shared growth.
                  </p>

                  {/* 4 Feature Badges (Ultra-Sharp Native Icons) */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-5 max-w-lg">
                    <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#030B17]/85 border border-[#D4AF37]/35 shadow-md backdrop-blur-sm">
                      <div className="w-7 h-7 rounded-full bg-[#081F42] border border-[#D4AF37] text-[#F9D678] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-cinzel font-bold text-[#F9D678] uppercase">CONNECT</div>
                        <div className="text-[10px] text-slate-300 leading-tight">with like-minded business owners</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#030B17]/85 border border-[#D4AF37]/35 shadow-md backdrop-blur-sm">
                      <div className="w-7 h-7 rounded-full bg-[#081F42] border border-[#D4AF37] text-[#F9D678] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Handshake className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-cinzel font-bold text-[#F9D678] uppercase">COLLABORATE</div>
                        <div className="text-[10px] text-slate-300 leading-tight">on new opportunities</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#030B17]/85 border border-[#D4AF37]/35 shadow-md backdrop-blur-sm">
                      <div className="w-7 h-7 rounded-full bg-[#081F42] border border-[#D4AF37] text-[#F9D678] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <TrendingUp className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-cinzel font-bold text-[#F9D678] uppercase">GROW</div>
                        <div className="text-[10px] text-slate-300 leading-tight">together as a community</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#030B17]/85 border border-[#D4AF37]/35 shadow-md backdrop-blur-sm">
                      <div className="w-7 h-7 rounded-full bg-[#081F42] border border-[#D4AF37] text-[#F9D678] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Globe className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-cinzel font-bold text-[#F9D678] uppercase">CREATE</div>
                        <div className="text-[10px] text-slate-300 leading-tight">a bigger impact in business</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Signature Script & Action Buttons */}
                <div>
                  <div className="mb-4">
                    <p className="font-serif italic text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#D4AF37] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                      Real People. Real Business. Real Growth.
                    </p>
                    <div className="h-[1.5px] w-48 bg-gradient-to-r from-[#D4AF37] to-transparent mt-1" />
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={onOpenJoinModal}
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>JOIN BOC</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>

                    <button
                      onClick={() => setIsPhotoLightboxOpen(true)}
                      className="px-4 py-2.5 rounded-full bg-[#030A17]/85 hover:bg-[#030A17] border border-[#D4AF37] text-[#F9D678] font-cinzel font-bold text-xs uppercase tracking-wider backdrop-blur-md shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
                      title="View Fullscreen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Fullscreen View</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Mobile Viewport (< md screens): Crisp Portrait Photo + Full HD Responsive Typography */}
            <div className="md:hidden flex flex-col bg-[#030914]">
              
              {/* Photo Area with Natural Master Photo */}
              <div className="relative w-full h-[240px] xs:h-[270px] overflow-hidden">
                <img
                  src={masterAboutHero}
                  alt="Business Owners Circle Gathering"
                  className="w-full h-full object-cover object-[center_right] select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-transparent pointer-events-none" />
                
                <button
                  onClick={() => setIsPhotoLightboxOpen(true)}
                  className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#030A17]/85 border border-[#D4AF37] text-[#F9D678] text-[10px] font-cinzel font-bold uppercase tracking-wider backdrop-blur-md shadow-md flex items-center gap-1"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>View Photo</span>
                </button>
              </div>

              {/* Crisp Mobile Typography Content (Native Vector Text - 100% HD Quality) */}
              <div className="p-5 xs:p-6 flex flex-col">
                
                {/* Logo & Subtitle (Official Emblem & Correct Full Form) */}
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="relative shrink-0">
                    <img 
                      src={bocLogoPng} 
                      alt="BOC Official Logo" 
                      className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]" 
                    />
                  </div>
                  <div>
                    <div className="text-xl font-cinzel font-black tracking-wider text-white">
                      BOC
                    </div>
                    <div className="text-[9px] font-cinzel font-extrabold text-[#F9D678] tracking-[0.18em] uppercase leading-tight">
                      BUSINESS • OWNERS • CIRCLE
                    </div>
                  </div>
                </div>

                {/* Eyebrow */}
                <div className="text-[10.5px] font-cinzel font-bold text-[#F9D678] tracking-[0.2em] uppercase mb-1.5">
                  — ABOUT US
                </div>

                {/* Headline */}
                <h2 className="text-xl xs:text-2xl font-serif font-bold text-white tracking-tight leading-snug mb-2.5">
                  More Than a Network,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#D4AF37]">
                    We’re a Community.
                  </span>
                </h2>

                {/* Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Business Owners Circle (BOC) is a premium networking platform for entrepreneurs, professionals and business leaders who believe in the power of genuine connections, collaboration and shared growth.
                </p>

                {/* 4 Pillars Grid (Mobile) */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-white/5 border border-[#D4AF37]/25">
                    <div className="w-6 h-6 rounded-full bg-[#081F42] border border-[#D4AF37] text-[#F9D678] flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-3 h-3" />
                    </div>
                    <div>
                      <div className="text-[10px] font-cinzel font-bold text-[#F9D678] uppercase">CONNECT</div>
                      <div className="text-[9px] text-slate-300 leading-tight">with business owners</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2 rounded-lg bg-white/5 border border-[#D4AF37]/25">
                    <div className="w-6 h-6 rounded-full bg-[#081F42] border border-[#D4AF37] text-[#F9D678] flex items-center justify-center shrink-0 mt-0.5">
                      <Handshake className="w-3 h-3" />
                    </div>
                    <div>
                      <div className="text-[10px] font-cinzel font-bold text-[#F9D678] uppercase">COLLABORATE</div>
                      <div className="text-[9px] text-slate-300 leading-tight">on opportunities</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2 rounded-lg bg-white/5 border border-[#D4AF37]/25">
                    <div className="w-6 h-6 rounded-full bg-[#081F42] border border-[#D4AF37] text-[#F9D678] flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp className="w-3 h-3" />
                    </div>
                    <div>
                      <div className="text-[10px] font-cinzel font-bold text-[#F9D678] uppercase">GROW</div>
                      <div className="text-[9px] text-slate-300 leading-tight">as a community</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2 rounded-lg bg-white/5 border border-[#D4AF37]/25">
                    <div className="w-6 h-6 rounded-full bg-[#081F42] border border-[#D4AF37] text-[#F9D678] flex items-center justify-center shrink-0 mt-0.5">
                      <Globe className="w-3 h-3" />
                    </div>
                    <div>
                      <div className="text-[10px] font-cinzel font-bold text-[#F9D678] uppercase">CREATE</div>
                      <div className="text-[9px] text-slate-300 leading-tight">bigger impact</div>
                    </div>
                  </div>
                </div>

                {/* Motto */}
                <div className="mb-4">
                  <p className="font-serif italic text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#D4AF37]">
                    Real People. Real Business. Real Growth.
                  </p>
                </div>

                {/* Mobile CTA Button */}
                <button
                  onClick={onOpenJoinModal}
                  className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-black text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>JOIN BOC</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* ===================================================================== */}
        {/* 2. THE 4 EXPANDED PILLARS (CONNECT • COLLABORATE • GROW • CREATE)     */}
        {/* ===================================================================== */}
        <section className="mb-20 sm:mb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {masterHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  className="rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-[#06172E] to-[#040E1E] border border-[#D4AF37]/35 hover:border-[#F9D678] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(212,175,55,0.2)] flex flex-col justify-between group"
                >
                  <div>
                    {/* Gold Circular Icon */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#0B254E] to-[#07172C] border-2 border-[#D4AF37] text-[#F9D678] flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:border-[#FFE27A] transition-all">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <h3 className="font-cinzel font-extrabold text-xl text-white group-hover:text-[#F9D678] transition-colors mb-1 tracking-wider uppercase">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#F9D678] mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-[#D4AF37]/20 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-cinzel font-bold text-[#DFC688]">
                      Core Principle
                    </span>
                    <button
                      onClick={onOpenJoinModal}
                      className="text-[11px] font-bold text-[#F9D678] group-hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Join</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 3. FOUNDING CIRCLE & PEER LEADERSHIP SHOWCASE (JIJEESH SIR ALWAYS #1) */}
        {/* ===================================================================== */}
        <section id="leadership" className="mb-20 sm:mb-28 pt-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#071D3E] border border-[#D4AF37]/50 text-[#F9D678] text-[11px] font-cinzel font-bold tracking-[0.2em] uppercase mb-3">
              <Gem className="w-3.5 h-3.5 text-[#F9D678]" />
              <span>THE FOUNDING CIRCLE & EXECUTIVE ROSTER</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Guided by Kerala’s Proven Business Leaders
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every member represents peer-verified credibility, industry authority, and absolute category exclusivity. 
              Led by strategic veterans with decades of enterprise experience, BOC drives statewide commerce with unyielding ethics.
            </p>
          </div>

          {/* Members Grid (Jijeesh Minerva Always First) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {leaders.map((leader, index) => {
              const isFirst = index === 0;
              return (
                <div
                  key={leader.id}
                  className={`rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between relative group ${
                    isFirst 
                      ? 'bg-gradient-to-b from-[#0B254E] via-[#07172C] to-[#040E1E] border-2 border-[#E5C45A] shadow-[0_15px_40px_rgba(212,175,55,0.25)]' 
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
                      className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-[11px] tracking-wider uppercase hover:scale-105 transition-all cursor-pointer shadow-sm flex items-center gap-1"
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

        </section>

        {/* ===================================================================== */}
        {/* 4. THE GENESIS STORY OF BOC (THE BACKBONE NARRATIVE)                 */}
        {/* ===================================================================== */}
        <section className="mb-20 sm:mb-28 py-14 px-6 sm:px-12 rounded-3xl bg-gradient-to-b from-[#06172E] via-[#041024] to-[#06172E] border border-[#C9A227]/30 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071D3E] border border-[#D4AF37]/40 text-[#F9D678] text-[11px] font-cinzel font-bold tracking-[0.2em] uppercase">
                <Compass className="w-3.5 h-3.5 text-[#F9D678]" />
                <span>OUR FOUNDING GENESIS</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                Why We Built Business Owners Circle in Kerala
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                For years, Kerala’s entrepreneurial community faced a recurring hurdle in traditional business networking: 
                <strong> superficial exchanges, lack of accountability, and direct competitors in the very same room.</strong> Business owners 
                often hesitated to share opportunities, worried that a competitor sitting nearby would undercut their deal.
              </p>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                In 2020, a group of senior founders in Kochi established <strong>Business Owners Circle (BOC)</strong> to solve this forever. 
                Our foundational rule: <em>Only ONE verified leader holds each industry specialty per chapter.</em> Zero competition. Total trust. 
                Every meeting produces genuine economic expansion, pre-qualified referrals, and statewide syndicates.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#030B1A] border border-[#D4AF37]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#F9D678] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-xs">100% Protected Exclusivity</h4>
                    <p className="text-slate-400 text-[11px] mt-0.5">All chapter inquiries in your domain belong entirely to you.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#030B1A] border border-[#D4AF37]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#F9D678] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-xs">Peer-Selected Quality</h4>
                    <p className="text-slate-400 text-[11px] mt-0.5">Rigorous vetting ensures only reputable founders sit in the room.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Visual Card (Kerala Waterfront Backdrop) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl">
                <img 
                  src={keralaWaterfrontBg} 
                  alt="Kerala Backwaters Executive Boardroom" 
                  className="w-full h-72 sm:h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020A17] via-[#020A17]/60 to-transparent" />
                
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#07172C] font-cinzel font-black text-[9px] uppercase tracking-wider mb-1.5">
                    Heritage of Commerce
                  </span>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white mb-1">
                    Kerala Roots, Global Ambition
                  </h3>
                  <p className="text-slate-200 text-xs leading-relaxed">
                    From ancient spice trading ports of Muziris and Cochin to modern tech corridors, Kerala has always traded with the world. 
                    BOC modernizes that camaraderie for the 21st century.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* ===================================================================== */}
        {/* 5. STATEWIDE CHAPTER ECOSYSTEM                                       */}
        {/* ===================================================================== */}
        <section className="mb-20 sm:mb-28">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#071D3E] border border-[#D4AF37]/50 text-[#F9D678] text-[11px] font-cinzel font-bold tracking-[0.2em] uppercase mb-3">
              <Globe className="w-3.5 h-3.5 text-[#F9D678]" />
              <span>STATEWIDE COMMERCE NETWORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3">
              6 Chapters • One Unbroken Statewide Circle
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              When you join your local chapter, you gain verified cross-chapter visiting rights across all major commercial corridors of Kerala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {chapters.map((chap, cIdx) => (
              <div 
                key={cIdx} 
                className="p-6 rounded-2xl bg-gradient-to-b from-[#05142B] to-[#030A17] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif font-bold text-lg text-white">{chap.name}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F9D678] border border-[#D4AF37]/40">
                      Active
                    </span>
                  </div>
                  <div className="text-[11px] text-[#F9D678] font-cinzel font-semibold uppercase tracking-wider mb-2">
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

        </section>

        {/* ===================================================================== */}
        {/* 6. ETHICS & 4-TIER VETTING PROCESS                                   */}
        {/* ===================================================================== */}
        <section className="mb-20 sm:mb-28">
          <div className="bg-gradient-to-r from-[#071F42] via-[#05142B] to-[#071F42] rounded-3xl border-2 border-[#D4AF37]/60 p-6 sm:p-12 shadow-2xl text-center">
            
            <div className="max-w-3xl mx-auto space-y-3 mb-10">
              <span className="text-xs font-cinzel font-bold text-[#F9D678] tracking-[0.2em] uppercase block">
                MEMBERSHIP STANDARDS
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-4xl text-white">
                How A Leader Enters The Circle
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                To protect the economic integrity of every meeting room, BOC enforces a strict 4-stage induction protocol.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div className="p-4 rounded-xl bg-[#030A17]/80 border border-[#D4AF37]/30">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs flex items-center justify-center mb-2 shadow">
                  1
                </div>
                <h4 className="font-serif font-bold text-sm text-white mb-1">Seat Verification</h4>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Confirmation that your industry specialty is open in your requested chapter.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#030A17]/80 border border-[#D4AF37]/30">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs flex items-center justify-center mb-2 shadow">
                  2
                </div>
                <h4 className="font-serif font-bold text-sm text-white mb-1">Peer Due Diligence</h4>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Confidential review by Chapter Membership Committee regarding reputation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#030A17]/80 border border-[#D4AF37]/30">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs flex items-center justify-center mb-2 shadow">
                  3
                </div>
                <h4 className="font-serif font-bold text-sm text-white mb-1">Integrity Pledge</h4>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Acceptance of the BOC Non-Compete Code and meeting commitment.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#030A17]/80 border border-[#D4AF37]/30">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs flex items-center justify-center mb-2 shadow">
                  4
                </div>
                <h4 className="font-serif font-bold text-sm text-white mb-1">Official Induction</h4>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Exclusive seat locked, statewide directory roster unlocked, chapter voting seat given.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ===================================================================== */}
        {/* 7. HIGH-PRESTIGE CLOSING INVITATION (JOIN THE CIRCLE)                 */}
        {/* ===================================================================== */}
        <section className="mb-10">
          <div className="bg-gradient-to-r from-[#061836] via-[#041126] to-[#061836] border-2 border-[#D4AF37] rounded-3xl p-8 sm:p-12 text-center shadow-[0_20px_50px_rgba(212,175,55,0.2)]">
            
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#071B3A] border border-[#D4AF37]/50 text-[#F9D678] text-xs font-cinzel font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F9D678]" />
              <span>APPLY FOR CATEGORY EXCLUSIVITY</span>
            </div>

            <h2 className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl text-white mb-4">
              Will Your Competitor Own Your Seat, Or Will You?
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              Seats in Kochi, Trivandrum, Thrissur, Kozhikode, Kottayam, and Kollam are strictly limited to one leader per industry. 
              Once a seat is occupied, it cannot be reopened. Apply today to secure your exclusive position.
            </p>

            <button
              onClick={onOpenJoinModal}
              className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Apply to Join Business Owners Circle</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </section>

      </div>

      {/* ===================================================================== */}
      {/* 8. LIGHTBOX FOR ULTRA-HD PHOTO                                        */}
      {/* ===================================================================== */}
      {isPhotoLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-fadeIn">
          <button
            onClick={() => setIsPhotoLightboxOpen(false)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
            title="Close Fullscreen"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center">
            <img 
              src={masterAboutHero} 
              alt="BOC Leadership Fullscreen Master Photograph" 
              className="max-w-full max-h-[80vh] object-contain rounded-2xl border-2 border-[#D4AF37] shadow-2xl"
            />
            <div className="text-center mt-4 text-xs font-cinzel font-bold text-[#F9D678] tracking-widest uppercase">
              Business Owners Circle • Kerala Executive Gathering
            </div>
          </div>
        </div>
      )}

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
