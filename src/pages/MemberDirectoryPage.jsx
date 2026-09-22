import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ExternalLink, 
  ShieldCheck, 
  Briefcase, 
  CheckCircle2, 
  Sparkles,
  X,
  Share2,
  Building2,
  Users
} from 'lucide-react';

// Import existing verified member images
import sajishImg from '../assets/boc-member-sajish-maliyekkal.jpg';
import jijeeshImg from '../assets/boc-member-jijeesh-minerva.jpg';
import maheshImg from '../assets/boc-member-mahesh-prabudhan.jpg';
import binuImg from '../assets/boc-member-binu-tb.jpg';
import vidhuImg from '../assets/boc-member-vidhu-mezhuveli.jpg';
import anjanaImg from '../assets/boc-member-anjana-sreedharan.jpg';
import nidhiImg from '../assets/boc-member-nidhi-tomer.jpg';
import arjunImg from '../assets/boc-story-arjun-nair.jpg';
import priyaImg from '../assets/boc-story-priya-thomas.jpg';
import rahulImg from '../assets/boc-story-rahul-menon.jpg';
import ananyaImg from '../assets/boc-story-ananya-suresh.jpg';

export default function MemberDirectoryPage({ onOpenJoinModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedChapter, setSelectedChapter] = useState('All');
  const [activeProfile, setActiveProfile] = useState(null);

  // Complete Verified Directory Data
  const members = [
    {
      id: 'mem-1',
      name: 'Sajish Maliyekkal',
      role: 'CEO & Founder',
      company: 'Maliyekkal Builders & Infra',
      category: 'Real Estate & Construction',
      chapter: 'Kochi Chapter',
      city: 'Kochi',
      photo: sajishImg,
      phone: '+91 98460 11223',
      email: 'sajish@maliyekkalbuilders.com',
      whatsapp: '919846011223',
      website: 'www.maliyekkalbuilders.com',
      experience: '18+ Years',
      services: ['Commercial Construction', 'Luxury Villa Projects', 'Industrial Warehousing', 'Turnkey Contracting'],
      bio: 'Leading residential and commercial infrastructure developer in Central Kerala with over 1.2 million sq. ft. constructed.',
    },
    {
      id: 'mem-2',
      name: 'Jijeesh Minerva',
      role: 'Managing Director',
      company: 'Minerva Business Solutions',
      category: 'Management & Strategic Consulting',
      chapter: 'Kochi Chapter',
      city: 'Kochi',
      photo: jijeeshImg,
      phone: '+91 98471 22334',
      email: 'jijeesh@minervagroup.in',
      whatsapp: '919847122334',
      website: 'www.minervagroup.in',
      experience: '15+ Years',
      services: ['Corporate Advisory', 'Business Scaling', 'Franchise Structuring', 'SOP Implementation'],
      bio: 'Strategic business growth architect advising over 60+ mid-market family-owned enterprises across South India.',
    },
    {
      id: 'mem-3',
      name: 'Mahesh Prabudhan',
      role: 'Chief Executive Officer',
      company: 'Apex Logistics & Freight',
      category: 'Logistics & Supply Chain',
      chapter: 'Kochi Chapter',
      city: 'Kochi',
      photo: maheshImg,
      phone: '+91 98465 33445',
      email: 'mahesh@apexlogistics.in',
      whatsapp: '919846533445',
      website: 'www.apexlogistics.in',
      experience: '12+ Years',
      services: ['Container Freight Station', 'Customs Clearance', 'Cold Chain Transport', 'GCC Freight Forwarding'],
      bio: 'End-to-end multi-modal logistics enterprise connecting South Indian manufacturers to international markets.',
    },
    {
      id: 'mem-4',
      name: 'Binu T.B.',
      role: 'Founder & Principal Consultant',
      company: 'Equinox Financial Advisory',
      category: 'Financial & Wealth Services',
      chapter: 'Thrissur Chapter',
      city: 'Thrissur',
      photo: binuImg,
      phone: '+91 94470 44556',
      email: 'binu@equinoxwealth.com',
      whatsapp: '919447044556',
      website: 'www.equinoxwealth.com',
      experience: '20+ Years',
      services: ['Corporate Tax Structuring', 'HNI Wealth Advisory', 'Debt Syndication', 'CFO Services'],
      bio: 'Seasoned financial advisory firm managing over ₹350 Cr in institutional and family office portfolios.',
    },
    {
      id: 'mem-5',
      name: 'Vidhu Mezhuveli',
      role: 'Managing Partner',
      company: 'Mezhuveli Agro & Food Processing',
      category: 'Manufacturing & Agriculture',
      chapter: 'Kottayam Chapter',
      city: 'Kottayam',
      photo: vidhuImg,
      phone: '+91 94472 55667',
      email: 'vidhu@mezhuveliagro.com',
      whatsapp: '919447255667',
      website: 'www.mezhuveliagro.com',
      experience: '16+ Years',
      services: ['Organic Spice Processing', 'Export Packaging', 'Private Labeling', 'FMCG Supply'],
      bio: 'Export-oriented agro-processing pioneer shipping premium Kerala spices to Europe, North America, and the Middle East.',
    },
    {
      id: 'mem-6',
      name: 'Anjana Sreedharan',
      role: 'Chief Architect',
      company: 'Studio Aesthetica',
      category: 'Architecture & Interior Design',
      chapter: 'Kochi Chapter',
      city: 'Kochi',
      photo: anjanaImg,
      phone: '+91 98950 66778',
      email: 'anjana@studioaesthetica.com',
      whatsapp: '919895066778',
      website: 'www.studioaesthetica.com',
      experience: '11+ Years',
      services: ['Sustainable Architecture', 'Luxury Corporate Interiors', 'Resort Masterplanning', 'Bespoke Lighting'],
      bio: 'Award-winning architectural atelier renowned for blending Kerala vernacular sensibilities with modern minimalism.',
    },
    {
      id: 'mem-7',
      name: 'Nidhi Tomer',
      role: 'Director of Healthcare',
      company: 'Aura Diagnostics & Wellness',
      category: 'Healthcare & Diagnostics',
      chapter: 'Thiruvananthapuram Chapter',
      city: 'Thiruvananthapuram',
      photo: nidhiImg,
      phone: '+91 97450 77889',
      email: 'nidhi@auradiagnostics.com',
      whatsapp: '919745077889',
      website: 'www.auradiagnostics.com',
      experience: '14+ Years',
      services: ['Molecular Diagnostics', 'Executive Health Checkups', 'Corporate Wellness Programs', 'Telemedicine'],
      bio: 'Advanced diagnostic network operating 8 accredited laboratories across Southern Kerala.',
    },
    {
      id: 'mem-8',
      name: 'Arjun Nair',
      role: 'Founder & CTO',
      company: 'Nair Tech Solutions',
      category: 'Information Technology & Software',
      chapter: 'Kochi Chapter',
      city: 'Kochi',
      photo: arjunImg,
      phone: '+91 98462 88990',
      email: 'arjun@nairtech.io',
      whatsapp: '919846288990',
      website: 'www.nairtech.io',
      experience: '10+ Years',
      services: ['Custom Cloud Platforms', 'Enterprise ERP', 'AI Automation', 'Mobile Apps'],
      bio: 'Enterprise SaaS and digital transformation engineering firm serving international logistics and fintech clients.',
    },
    {
      id: 'mem-9',
      name: 'Ananya Suresh',
      role: 'Co-Founder & Creative Director',
      company: 'Bloom Creative Studio',
      category: 'Media & Branding',
      chapter: 'Kochi Chapter',
      city: 'Kochi',
      photo: ananyaImg,
      phone: '+91 98955 99001',
      email: 'ananya@bloomcreative.co',
      whatsapp: '919895599001',
      website: 'www.bloomcreative.co',
      experience: '8+ Years',
      services: ['Brand Identity', 'Performance Marketing', 'Packaging Design', 'Video Production'],
      bio: 'Creative agency scaling direct-to-consumer and retail brands across India with measurable ROI.',
    },
    {
      id: 'mem-10',
      name: 'Rahul Menon',
      role: 'Managing Director',
      company: 'GreenBuild Infra & Solar',
      category: 'Renewable Energy & Utilities',
      chapter: 'Thrissur Chapter',
      city: 'Thrissur',
      photo: rahulImg,
      phone: '+91 98473 11224',
      email: 'rahul@greenbuildinfra.com',
      whatsapp: '919847311224',
      website: 'www.greenbuildinfra.com',
      experience: '13+ Years',
      services: ['Rooftop Commercial Solar', 'Industrial EPC', 'Energy Auditing', 'Green Building Consulting'],
      bio: 'Pioneering renewable energy infrastructure with over 15 MW commissioned across industrial zones in Kerala.',
    },
    {
      id: 'mem-11',
      name: 'Priya Thomas',
      role: 'Founder',
      company: 'Luxe Wellness & Spa Resorts',
      category: 'Hospitality & Tourism',
      chapter: 'Kollam Chapter',
      city: 'Kollam',
      photo: priyaImg,
      phone: '+91 98464 22335',
      email: 'priya@luxewellness.com',
      whatsapp: '919846422335',
      website: 'www.luxewellness.com',
      experience: '9+ Years',
      services: ['Ayurvedic Luxury Retreats', 'Corporate Offsites', 'Wellness Hospitality', 'Eco-Resort Management'],
      bio: 'Curator of heritage lakeside wellness retreats providing restorative executive experiences in Kerala.',
    },
  ];

  const categories = [
    'All',
    'Real Estate & Construction',
    'Information Technology & Software',
    'Management & Strategic Consulting',
    'Financial & Wealth Services',
    'Manufacturing & Agriculture',
    'Architecture & Interior Design',
    'Healthcare & Diagnostics',
    'Renewable Energy & Utilities',
    'Logistics & Supply Chain',
    'Media & Branding',
    'Hospitality & Tourism',
  ];

  const chapters = [
    'All',
    'Kochi Chapter',
    'Thrissur Chapter',
    'Kozhikode Chapter',
    'Thiruvananthapuram Chapter',
    'Kottayam Chapter',
    'Kollam Chapter',
  ];

  // Filtered list based on Search, Category, and Chapter
  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesSearch = 
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        member.city.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || member.category === selectedCategory;
      const matchesChapter = selectedChapter === 'All' || member.chapter === selectedChapter;

      return matchesSearch && matchesCategory && matchesChapter;
    });
  }, [searchQuery, selectedCategory, selectedChapter]);

  return (
    <div className="min-h-screen bg-[#020713] text-white pt-24 sm:pt-28 pb-20 selection:bg-[#D4AF37] selection:text-[#07172C] w-full max-w-full overflow-x-hidden relative">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute top-40 left-10 w-[450px] h-[450px] bg-[#0E2849]/35 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ===================================================================== */}
        {/* 1. HEADER SHOWCASE                                                    */}
        {/* ===================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172C] border border-[#D4AF37]/60 text-[#F9D678] text-xs font-cinzel font-bold tracking-[0.25em] uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F9D678]" />
            <span>VERIFIED MEMBER ROSTER</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            BOC Executive <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#F5C75D] bg-clip-text text-transparent">Member Directory</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Connect directly with verified business founders, managing directors, and category leaders. 
            Search by name, industry, service, or chapter.
          </p>
        </div>


        {/* ===================================================================== */}
        {/* 2. SEARCH & FILTER CONTROLS                                           */}
        {/* ===================================================================== */}
        <div className="bg-[#051329]/90 border border-[#D4AF37]/35 rounded-2xl p-5 sm:p-6 mb-10 shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input (6 cols) */}
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 text-[#D4AF37] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by member name, company, service or keyword..."
                className="w-full bg-[#020814] border border-[#D4AF37]/40 rounded-xl py-3 pl-12 pr-10 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#F9D678] transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Dropdown (3 cols) */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#020814] border border-[#D4AF37]/40 rounded-xl py-3 px-4 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#F9D678] cursor-pointer"
              >
                <option value="All">All Categories ({members.length})</option>
                {categories.filter(c => c !== 'All').map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Chapter Dropdown (3 cols) */}
            <div className="md:col-span-3">
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="w-full bg-[#020814] border border-[#D4AF37]/40 rounded-xl py-3 px-4 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#F9D678] cursor-pointer"
              >
                <option value="All">All Chapters</option>
                {chapters.filter(ch => ch !== 'All').map((ch) => (
                  <option key={ch} value={ch}>{ch}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Quick Category Chips */}
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-800/80 overflow-x-auto pb-1 scrollbar-none w-full max-w-full min-w-0">
            <span className="text-[11px] font-cinzel text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Filter className="w-3 h-3 text-[#D4AF37]" /> Filter:
            </span>
            {categories.slice(0, 6).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs shrink-0 transition-all font-medium ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-[#07172C] font-bold shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>


        {/* ===================================================================== */}
        {/* 3. RESULTS SUMMARY & ROSTER GRID                                      */}
        {/* ===================================================================== */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs sm:text-sm text-slate-400 font-medium">
            Showing <strong className="text-[#F9D678]">{filteredMembers.length}</strong> verified business leaders
          </span>
          {(searchQuery || selectedCategory !== 'All' || selectedChapter !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedChapter('All');
              }}
              className="text-xs text-[#D4AF37] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Member Cards Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gradient-to-b from-[#06172E] to-[#040E1E] border border-[#D4AF37]/35 hover:border-[#F9D678] rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Top Row: Photo + Badges */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative shrink-0">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-16 h-16 sm:w-18 sm:h-18 rounded-full object-cover border-2 border-[#D4AF37] shadow-md group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#D4AF37] text-[#07172C] flex items-center justify-center shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>

                    <div className="flex-grow min-w-0">
                      <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-[#F9D678] transition-colors truncate">
                        {member.name}
                      </h3>
                      <p className="text-xs text-[#F9D678] font-medium truncate">
                        {member.role}
                      </p>
                      <p className="text-xs text-slate-300 font-semibold truncate mt-0.5">
                        {member.company}
                      </p>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-1">
                        <MapPin className="w-3 h-3 text-[#D4AF37]" />
                        <span>{member.chapter}</span>
                      </div>
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="mb-3">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#092244] border border-[#D4AF37]/40 text-[#F9D678] text-[11px] font-cinzel font-semibold tracking-wider">
                      {member.category}
                    </span>
                  </div>

                  {/* Bio snippet */}
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 mb-3">
                    {member.bio}
                  </p>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {member.services.slice(0, 3).map((service, sIdx) => (
                      <span key={sIdx} className="text-[10px] bg-white/5 text-slate-300 px-2 py-0.5 rounded border border-white/5">
                        {service}
                      </span>
                    ))}
                    {member.services.length > 3 && (
                      <span className="text-[10px] text-[#D4AF37] font-semibold self-center">
                        +{member.services.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action Controls */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {/* Call */}
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, '')}`}
                      className="w-8 h-8 rounded-full bg-[#092244] hover:bg-[#D4AF37] hover:text-[#07172C] text-[#F9D678] border border-[#D4AF37]/40 flex items-center justify-center transition-all"
                      title="Call Direct"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${member.whatsapp}?text=Hello%20${encodeURIComponent(member.name)},%20I%20saw%20your%20profile%20on%20BOC%20Network.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-[#092244] hover:bg-emerald-600 hover:text-white text-emerald-400 border border-[#D4AF37]/40 flex items-center justify-center transition-all"
                      title="WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                    {/* Email */}
                    <a
                      href={`mailto:${member.email}?subject=BOC%20Synergy%20Introduction`}
                      className="w-8 h-8 rounded-full bg-[#092244] hover:bg-[#D4AF37] hover:text-[#07172C] text-[#F9D678] border border-[#D4AF37]/40 flex items-center justify-center transition-all"
                      title="Send Email"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Connect / View Profile */}
                  <button
                    onClick={() => setActiveProfile(member)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-[11px] tracking-wider uppercase hover:scale-105 transition-all cursor-pointer shadow-sm"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 bg-[#051329] border border-dashed border-[#D4AF37]/40 rounded-2xl max-w-xl mx-auto">
            <Users className="w-12 h-12 text-[#D4AF37] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif font-bold text-lg text-white mb-2">No Matching Members Found</h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              There is currently no member matching your exact query. 
              Would you like to represent this business category exclusively in your city?
            </p>
            <button
              onClick={onOpenJoinModal}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
            >
              Apply for Category Exclusivity →
            </button>
          </div>
        )}

      </div>

      {/* ===================================================================== */}
      {/* 4. MEMBER PROFILE MODAL (DIGITAL PUBLIC PROFILE - BRIEF POINT 10)     */}
      {/* ===================================================================== */}
      {activeProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#071B36] to-[#040E1E] rounded-3xl border-2 border-[#D4AF37] p-5 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveProfile(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 pb-6 border-b border-[#D4AF37]/30">
              <div className="relative shrink-0">
                <img
                  src={activeProfile.photo}
                  alt={activeProfile.name}
                  className="w-24 h-24 rounded-full object-cover border-3 border-[#D4AF37] shadow-xl"
                />
                <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-[#D4AF37] text-[#07172C] font-bold text-[10px] tracking-wider uppercase flex items-center gap-1 shadow-md">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>

              <div className="text-center sm:text-left flex-grow">
                <h3 className="font-serif font-bold text-2xl text-white mb-1">
                  {activeProfile.name}
                </h3>
                <p className="text-sm text-[#F9D678] font-medium mb-1">
                  {activeProfile.role} • <strong className="text-white">{activeProfile.company}</strong>
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-300 mt-2">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {activeProfile.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {activeProfile.chapter}
                  </span>
                  <span>•</span>
                  <span className="text-[#F9D678] font-semibold">{activeProfile.experience}</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-6">
              <h4 className="text-xs font-cinzel font-bold text-[#F9D678] uppercase tracking-wider mb-2">
                Executive Profile
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeProfile.bio}
              </p>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h4 className="text-xs font-cinzel font-bold text-[#F9D678] uppercase tracking-wider mb-2.5">
                Core Services & Business Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeProfile.services.map((srv, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F9D678] shrink-0" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-[#D4AF37]/30">
              <a
                href={`tel:${activeProfile.phone.replace(/\s+/g, '')}`}
                className="py-2.5 px-3 rounded-xl bg-[#092244] hover:bg-[#D4AF37] hover:text-[#07172C] text-[#F9D678] border border-[#D4AF37]/40 flex items-center justify-center gap-2 text-xs font-bold transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </a>

              <a
                href={`https://wa.me/${activeProfile.whatsapp}?text=Hello%20${encodeURIComponent(activeProfile.name)},%20I%20am%20connecting%20via%20BOC.`}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white flex items-center justify-center gap-2 text-xs font-bold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${activeProfile.email}`}
                className="py-2.5 px-3 rounded-xl bg-[#092244] hover:bg-[#D4AF37] hover:text-[#07172C] text-[#F9D678] border border-[#D4AF37]/40 flex items-center justify-center gap-2 text-xs font-bold transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>

              <button
                onClick={() => {
                  setActiveProfile(null);
                  onOpenJoinModal();
                }}
                className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all font-cinzel"
              >
                <span>Connect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
