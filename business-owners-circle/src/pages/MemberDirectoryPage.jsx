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
  Users,
  ArrowRight
} from 'lucide-react';

// Import existing verified member images
import jijeeshImg from '../assets/boc-member-jijeesh-minerva.jpg';
import sajishImg from '../assets/boc-member-sajish-maliyekkal.jpg';
import maheshImg from '../assets/boc-member-mahesh-prabudhan.jpg';
import binuImg from '../assets/boc-member-binu-tb.jpg';
import vidhuImg from '../assets/boc-member-vidhu-mezhuveli.jpg';
import anjanaImg from '../assets/boc-member-anjana-sreedharan.jpg';
import nidhiImg from '../assets/boc-member-nidhi-tomer.jpg';

export default function MemberDirectoryPage({ onOpenJoinModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedChapter, setSelectedChapter] = useState('All');
  const [activeProfile, setActiveProfile] = useState(null);

  // Complete Verified Directory Data (Jijeesh Minerva Always First)
  const members = [
    {
      id: 'mem-1',
      name: 'Jijeesh Minerva',
      role: 'Founder & CEO',
      company: 'M/s Eco Pest India • M/s Urban Owls Digital',
      category: 'Pest & Digital Ecosystems',
      chapter: 'Kochi Chapter',
      city: 'Kochi',
      photo: jijeeshImg,
      phone: '+91 90200 40009',
      email: 'mailboc@yahoo.com',
      whatsapp: '919020040009',
      website: 'www.minervagroup.in',
      experience: '15+ Years',
      services: ['Corporate Advisory', 'Eco Pest Solutions', 'Digital Infrastructure', 'Enterprise Growth'],
      bio: 'Founder & CEO of M/s Eco Pest India & M/s Urban Owls Digital, driving business ecosystems, pest control excellence and digital innovation across Kerala.',
    },
    {
      id: 'mem-2',
      name: 'Sajish Maliyekkal',
      role: 'Founder',
      company: 'Greenline Pest Management',
      category: 'Pest Management',
      chapter: 'Thrissur Chapter',
      city: 'Thrissur',
      photo: sajishImg,
      phone: '+91 90200 40009',
      email: 'mailboc@yahoo.com',
      whatsapp: '919020040009',
      website: 'www.greenlinepest.com',
      experience: '18+ Years',
      services: ['Eco-friendly Pest Control', 'Termite Treatment', 'Industrial Disinfection', 'Commercial Audits'],
      bio: 'Founder of Greenline Pest Management, pioneering eco-friendly, reliable and certified pest management solutions across Central Kerala.',
    },
    {
      id: 'mem-3',
      name: 'Mahesh Prabudhan',
      role: 'CEO',
      company: 'Yessem Facilities',
      category: 'Facility Management',
      chapter: 'Kochi Chapter',
      city: 'Kochi',
      photo: maheshImg,
      phone: '+91 90200 40009',
      email: 'mailboc@yahoo.com',
      whatsapp: '919020040009',
      website: 'www.yessemfacilities.com',
      experience: '12+ Years',
      services: ['Corporate Facility Management', 'Operations Management', 'Commercial Maintenance', 'Property Support'],
      bio: 'CEO of Yessem Facilities, delivering world-class corporate facility management and operational excellence for commercial properties and enterprises.',
    },
    {
      id: 'mem-4',
      name: 'Binu T.B.',
      role: 'Global Marketing Leader',
      company: 'Global Marketing, Coimbatore',
      category: 'Global Marketing & Trade',
      chapter: 'Thrissur Chapter',
      city: 'Coimbatore',
      photo: binuImg,
      phone: '+91 90200 40009',
      email: 'mailboc@yahoo.com',
      whatsapp: '919020040009',
      website: 'www.globalmarketingcbe.com',
      experience: '20+ Years',
      services: ['Global Market Expansion', 'Cross-border Trade', 'International Distribution', 'B2B Marketing'],
      bio: 'Leading Global Marketing in Coimbatore, expanding enterprise markets, international connections and strategic trade growth across South India and overseas.',
    },
    {
      id: 'mem-5',
      name: 'Vidhu Mezhuveli',
      role: 'Founder & CEO',
      company: 'Smash Cleaning Company',
      category: 'Cleaning Services',
      chapter: 'Kollam Chapter',
      city: 'Kollam',
      photo: vidhuImg,
      phone: '+91 90200 40009',
      email: 'mailboc@yahoo.com',
      whatsapp: '919020040009',
      website: 'www.smashcleaning.com',
      experience: '16+ Years',
      services: ['Industrial Cleaning', 'Sanitization Services', 'Modern Facility Care', 'Commercial Deep Cleaning'],
      bio: 'Founder & CEO of Smash Cleaning Company, setting new benchmarks in industrial cleaning, sanitization and modern facility care.',
    },
    {
      id: 'mem-6',
      name: 'Nidhi Tomer',
      role: 'Founder & CEO',
      company: 'Vedic Bricks Academy, Kochi',
      category: 'Vedic EdTech & Academy',
      chapter: 'Kochi Chapter',
      city: 'Kochi',
      photo: nidhiImg,
      phone: '+91 90200 40009',
      email: 'mailboc@yahoo.com',
      whatsapp: '919020040009',
      website: 'www.vedicbricks.com',
      experience: '14+ Years',
      services: ['Vedic Education', 'Transformative Learning', 'Holistic Skill Development', 'Educational Workshops'],
      bio: 'Founder & CEO of Vedic Bricks Academy, Kochi, empowering future generations with transformative learning and holistic skill development.',
    },
    {
      id: 'mem-7',
      name: 'Anjana Sreedharan',
      role: 'General Secretary',
      company: 'Mithrakulam Trust',
      category: 'Social Impact & Trust',
      chapter: 'Thiruvananthapuram Chapter',
      city: 'Thiruvananthapuram',
      photo: anjanaImg,
      phone: '+91 90200 40009',
      email: 'mailboc@yahoo.com',
      whatsapp: '919020040009',
      website: 'www.mithrakulamtrust.org',
      experience: '11+ Years',
      services: ['Community Welfare', 'Cultural Empowerment', 'Social Impact Initiatives', 'Sustainable Upliftment'],
      bio: 'General Secretary of Mithrakulam Trust, championing community welfare, cultural empowerment and sustainable social upliftment across Kerala.',
    },
  ];

  const categories = [
    'All',
    'Pest & Digital Ecosystems',
    'Pest Management',
    'Facility Management',
    'Global Marketing & Trade',
    'Cleaning Services',
    'Vedic EdTech & Academy',
    'Social Impact & Trust',
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
                  {/* Top Row: Photo + Badges (Click to preview full bio) */}
                  <div 
                    onClick={() => setActiveProfile(member)}
                    className="flex items-start gap-4 mb-4 cursor-pointer group/profile"
                    title="Click to view full bio"
                  >
                    <div className="relative shrink-0">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-16 h-16 sm:w-18 sm:h-18 rounded-full object-cover object-top border-2 border-[#D4AF37] shadow-md group-hover:scale-105 transition-transform"
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

                  {/* Connect / View Profile -> Opens Join BOC Application Form */}
                  <button
                    onClick={onOpenJoinModal}
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
                  className="w-24 h-24 rounded-full object-cover object-top border-3 border-[#D4AF37] shadow-xl"
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
                <span>Join BOC to Connect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
