import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ShieldCheck, 
  ArrowRight,
  X,
  Users
} from 'lucide-react';

// Verified Member Portraits (Jijeesh Minerva Always First)
import jijeeshImg from '../assets/boc-member-jijeesh-minerva.jpg';
import sajishImg from '../assets/boc-member-sajish-maliyekkal.jpg';
import maheshImg from '../assets/boc-member-mahesh-prabudhan.jpg';
import binuImg from '../assets/boc-member-binu-tb.jpg';
import vidhuImg from '../assets/boc-member-vidhu-mezhuveli.jpg';
import nidhiImg from '../assets/boc-member-nidhi-tomer.jpg';
import anjanaImg from '../assets/boc-member-anjana-sreedharan.jpg';

export default function MemberDirectoryPage({ onOpenJoinModal }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Verified Member Roster (Strictly 4 user-provided fields: Photo, Name, Position, Company)
  const members = [
    {
      id: 'mem-1',
      name: 'Jijeesh Minerva',
      role: 'Founder & CEO',
      company: 'M/s Eco Pest India • M/s Urban Owls Digital',
      photo: jijeeshImg,
    },
    {
      id: 'mem-2',
      name: 'Sajish Maliyekkal',
      role: 'Founder',
      company: 'Greenline Pest Management',
      photo: sajishImg,
    },
    {
      id: 'mem-3',
      name: 'Mahesh Prabudhan',
      role: 'CEO',
      company: 'Yessem Facilities',
      photo: maheshImg,
    },
    {
      id: 'mem-4',
      name: 'Binu T.B.',
      role: 'Global Marketing Leader',
      company: 'Global Marketing, Coimbatore',
      photo: binuImg,
    },
    {
      id: 'mem-5',
      name: 'Vidhu Mezhuveli',
      role: 'Founder & CEO',
      company: 'Smash Cleaning Company',
      photo: vidhuImg,
    },
    {
      id: 'mem-6',
      name: 'Nidhi Tomer',
      role: 'Founder & CEO',
      company: 'Vedic Bricks Academy, Kochi',
      photo: nidhiImg,
    },
    {
      id: 'mem-7',
      name: 'Anjana Sreedharan',
      role: 'General Secretary',
      company: 'Mithrakulam Trust',
      photo: anjanaImg,
    },
  ];

  // Filter list strictly based on Name, Position/Role, and Company
  const filteredMembers = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return members;
    return members.filter((member) => 
      member.name.toLowerCase().includes(q) ||
      member.role.toLowerCase().includes(q) ||
      member.company.toLowerCase().includes(q)
    );
  }, [searchQuery]);

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
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172C] border border-[#D4AF37]/60 text-[#F9D678] text-xs font-cinzel font-bold tracking-[0.25em] uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F9D678]" />
            <span>VERIFIED MEMBER ROSTER</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            BOC Executive <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#F5C75D] bg-clip-text text-transparent">Member Directory</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Connect directly with verified business founders, managing directors, and enterprise decision-makers across Kerala.
          </p>
        </div>


        {/* ===================================================================== */}
        {/* 2. SEARCH CONTROL                                                     */}
        {/* ===================================================================== */}
        <div className="bg-[#051329]/90 border border-[#D4AF37]/35 rounded-2xl p-4 sm:p-5 mb-8 shadow-xl backdrop-blur-md max-w-2xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 text-[#D4AF37] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by member name, position, or company..."
              className="w-full bg-[#020814] border border-[#D4AF37]/40 rounded-xl py-3 pl-12 pr-10 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#F9D678] transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>


        {/* ===================================================================== */}
        {/* 3. RESULTS SUMMARY                                                    */}
        {/* ===================================================================== */}
        <div className="flex items-center justify-between mb-6 max-w-6xl mx-auto px-1">
          <span className="text-xs sm:text-sm text-slate-400 font-medium">
            Showing <strong className="text-[#F9D678]">{filteredMembers.length}</strong> verified business leaders
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-[#D4AF37] hover:underline"
            >
              Reset Search
            </button>
          )}
        </div>

        {/* Member Cards Grid (Strict 4 Fields Only: Photo, Name, Position, Company) */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gradient-to-b from-[#06172E] to-[#040E1E] border border-[#D4AF37]/35 hover:border-[#F9D678] rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(212,175,55,0.18)] hover:-translate-y-1 flex flex-col justify-between group overflow-hidden"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Correct HD Photo */}
                  <div className="relative mb-4">
                    <img
                      src={member.photo}
                      alt={`${member.name} - ${member.company}`}
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover object-top border-2 border-[#D4AF37] shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#F9D678] transition-colors mb-1">
                    {member.name}
                  </h3>

                  {/* Position / Role */}
                  <p className="text-xs sm:text-sm font-semibold text-[#F9D678] mb-1">
                    {member.role}
                  </p>

                  {/* Company Detail */}
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    {member.company}
                  </p>
                </div>

                {/* Connect Action Button */}
                <button
                  onClick={onOpenJoinModal}
                  className="mt-5 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#F9D678] to-[#D4AF37] hover:from-[#FFF3C4] hover:to-[#F5C75D] text-[#07172C] font-cinzel font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Connect via BOC</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 bg-[#051329] border border-dashed border-[#D4AF37]/40 rounded-2xl max-w-xl mx-auto">
            <Users className="w-12 h-12 text-[#D4AF37] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif font-bold text-lg text-white mb-2">No Matching Members Found</h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              There is currently no member matching your query. Would you like to represent your business category in BOC?
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
    </div>
  );
}
