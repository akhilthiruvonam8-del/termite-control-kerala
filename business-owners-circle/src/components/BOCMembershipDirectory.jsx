import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Briefcase, 
  ExternalLink, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Building2,
  CheckCircle2
} from 'lucide-react';

export default function BOCMembershipDirectory({ onOpenJoinModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const categories = [
    'All',
    'Technology',
    'Professional Services',
    'Construction & Real Estate',
    'Marketing & Media',
    'Logistics & Trade',
    'Healthcare & Lifestyle'
  ];

  const locations = [
    'All',
    'Kakkanad',
    'Ernakulam CBD',
    'Edappally',
    'Tripunithura',
    'Aluva'
  ];

  const sampleMembers = [
    {
      id: 1,
      name: 'Jijeesh Minerva',
      company: 'M/s Eco Pest India • M/s Urban Owls Digital',
      category: 'Professional Services',
      specialty: 'Strategic Business Consulting & Facility Solutions',
      location: 'Ernakulam CBD',
      experience: '15+ Years',
      verified: true,
      bio: 'Founder & CEO driving corporate business consulting, certified pest control excellence, and digital transformation across Kerala.',
      services: ['Corporate Advisory', 'Enterprise Facilities', 'Digital Architecture'],
    },
    {
      id: 2,
      name: 'Adv. Anjali Varma',
      company: 'Varma Corporate Legal Partners',
      category: 'Professional Services',
      specialty: 'Corporate Law, Contracts & M&A',
      location: 'Ernakulam CBD',
      experience: '15+ Years',
      verified: true,
      bio: 'Specialized legal counsel for Kerala business groups, contract drafting, IP trademarks, and joint-venture advisory.',
      services: ['Contract Advisory', 'Trademark & IP', 'Company Incorporation'],
    },
    {
      id: 3,
      name: 'Mathew Joseph',
      company: 'Arcadia Living Spaces',
      category: 'Construction & Real Estate',
      specialty: 'Luxury Architecture & Turnkey Interiors',
      location: 'Edappally',
      experience: '10+ Years',
      verified: true,
      bio: 'Designing contemporary luxury villas, corporate executive offices, and sustainable commercial interiors across Kochi.',
      services: ['Commercial Interiors', 'Luxury Residential', 'BIM Architecture'],
    },
    {
      id: 4,
      name: 'Sneha Nair',
      company: 'Zenith Brand Strategy & Digital',
      category: 'Marketing & Media',
      specialty: 'Performance Marketing & Media Production',
      location: 'Tripunithura',
      experience: '8+ Years',
      verified: true,
      bio: 'Driving measurable multi-crore revenue campaigns for FMCG, education, and luxury jewelry brands via meta ads and influencer PR.',
      services: ['Performance Ads', 'Brand Identity', 'Video Commercials'],
    },
    {
      id: 5,
      name: 'George K. Thomas',
      company: 'Malabar Global Freightways',
      category: 'Logistics & Trade',
      specialty: 'Customs Clearance & International Ocean Freight',
      location: 'Aluva',
      experience: '18+ Years',
      verified: true,
      bio: 'Seamless sea-air cargo handling through Cochin Port, bonded warehousing, and export logistics for spices and electronics.',
      services: ['Port Logistics', 'Customs Broking', 'Cold Storage Chain'],
    },
    {
      id: 6,
      name: 'Dr. Faisal Rahman',
      company: 'CuraVibe Executive Wellness Hub',
      category: 'Healthcare & Lifestyle',
      specialty: 'Occupational Health & Ergonomics Clinic',
      location: 'Kakkanad',
      experience: '14+ Years',
      verified: true,
      bio: 'Corporate wellness audits, ergonomic consulting for tech firms, and VIP preventive health checks for senior leadership.',
      services: ['Corporate Wellness', 'Physiotherapy & Spine', 'Executive Health'],
    },
  ];

  const filteredMembers = sampleMembers.filter((m) => {
    const matchesSearch = 
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || m.category === selectedCategory;
    const matchesLocation = selectedLocation === 'All' || m.location === selectedLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <section id="members" className="relative py-20 lg:py-28 bg-[#030917] text-white border-t border-[#C9A227]/20 overflow-hidden w-full max-w-full">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B3A]/80 border border-[#C9A227]/40 text-xs font-extrabold tracking-[0.22em] text-[#FFE27A] uppercase">
            <Briefcase className="w-3.5 h-3.5 text-[#FFE27A]" />
            <span>EXCLUSIVE NETWORK ROSTER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFF3C4] to-[#C9A227]">
            Discover Businesses Within Your Circle
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every business listed below holds the exclusive verified seat for their specialty in the Kochi Chapter. Browse, introduce, and collaborate with confidence.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-12 p-6 rounded-2xl bg-[#06142B]/90 border border-[#C9A227]/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)] space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search by member name, business name, or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#030A18] border border-[#C9A227]/30 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FFE27A]"
              />
            </div>

            {/* Category Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#030A18] border border-[#C9A227]/30 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FFE27A]"
              >
                {categories.map((c) => (
                  <option key={c} value={c} className="bg-[#030A18] text-white">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-[#030A18] border border-[#C9A227]/30 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FFE27A]"
              >
                {locations.map((l) => (
                  <option key={l} value={l} className="bg-[#030A18] text-white">
                    {l === 'All' ? 'All Kochi Locations' : l}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Directory Member Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-3xl p-6 bg-gradient-to-b from-[#071C3D] to-[#041126] border border-[#C9A227]/25 hover:border-[#FFE27A] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(201,162,39,0.2)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FFE27A] to-[#C9A227] text-[#041126] font-cinzel font-black text-lg flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(255,226,122,0.4)]">
                    {member.name.charAt(0)}
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3" />
                      Verified Leader
                    </span>
                    <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-end gap-1">
                      <MapPin className="w-3 h-3 text-[#FFE27A]" />
                      <span>{member.location}, Kochi</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-cinzel font-bold text-white">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-[#FFE27A] mb-2">
                  {member.company}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.services.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-[#030914] text-slate-300 border border-white/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-[#FFE27A] font-medium">
                  {member.category}
                </span>
                <button
                  onClick={onOpenJoinModal}
                  className="px-3 py-1.5 rounded-lg bg-[#071B3A] border border-[#FFE27A]/40 text-[#FFE27A] hover:bg-[#FFE27A] hover:text-[#041126] text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Claim Your Category Callout */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#071E42] via-[#05142E] to-[#071E42] border-2 border-[#C9A227]/40 text-center relative overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
            Is Your Business Specialty Still Unclaimed in Kochi?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-2">
            Once a seat is verified, no competing business in that exact category is allowed in the chapter. Secure your monopoly today.
          </p>
          <div className="mt-6">
            <button
              onClick={onOpenJoinModal}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F7E7A9] via-[#E5C45A] to-[#C9A227] text-[#041126] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-gold-md hover:brightness-110 transition-all cursor-pointer"
            >
              APPLY FOR MEMBERSHIP SEAT
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
