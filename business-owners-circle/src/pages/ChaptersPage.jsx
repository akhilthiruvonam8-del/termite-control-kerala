import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  Users, 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  Sparkles,
  Search,
  CheckCircle2,
  Layers,
  Globe2
} from 'lucide-react';

import kochiImg from '../assets/boc-chapter-kochi.jpg';
import thrissurImg from '../assets/boc-chapter-thrissur.jpg';
import kozhikodeImg from '../assets/boc-chapter-kozhikode.jpg';
import tvmImg from '../assets/boc-chapter-thiruvananthapuram.jpg';
import kottayamImg from '../assets/boc-chapter-kottayam.jpg';
import kollamImg from '../assets/boc-chapter-kollam.jpg';
import madrasImg from '../assets/boc-chapter-madras.jpg';

export default function ChaptersPage({ onOpenJoinModal }) {
  const [selectedCircle, setSelectedCircle] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');

  const chapters = [
    // =========================================================================
    // KERALA CIRCLE
    // =========================================================================
    {
      id: 'ch-kochi',
      circle: 'Kerala Circle',
      city: 'Kochi',
      name: 'BOC Kochi Central Chapter',
      venue: 'Grand Hyatt Kochi Bolgatty',
      meetingDay: 'Every Wednesday',
      meetingTime: '7:00 AM – 8:30 AM',
      director: 'K. R. Venugopal',
      membersCount: '150+',
      seatsAvailable: 6,
      categories: ['IT & SaaS', 'Real Estate', 'Logistics', 'Interior Design', 'Wealth Advisory'],
      image: kochiImg,
      status: 'Active & Expanding',
    },
    {
      id: 'ch-thrissur',
      circle: 'Kerala Circle',
      city: 'Thrissur',
      name: 'BOC Thrissur Heritage Chapter',
      venue: 'Hyatt Regency Thrissur',
      meetingDay: 'Every Thursday',
      meetingTime: '7:00 AM – 8:30 AM',
      director: 'P. M. Joy',
      membersCount: '42',
      seatsAvailable: 8,
      categories: ['Gold & Jewelry Retail', 'Banking & NBFC', 'Healthcare', 'Solar Energy', 'Automobile'],
      image: thrissurImg,
      status: 'Active & Expanding',
    },
    {
      id: 'ch-kozhikode',
      circle: 'Kerala Circle',
      city: 'Kozhikode',
      name: 'BOC Kozhikode Malabar Chapter',
      venue: 'The Gateway Hotel Beach Road',
      meetingDay: 'Every Tuesday',
      meetingTime: '7:00 AM – 8:30 AM',
      director: 'Rasheed Ahamed',
      membersCount: '38',
      seatsAvailable: 12,
      categories: ['Export-Import', 'Food & FMCG', 'Textiles', 'EdTech', 'Commercial Infra'],
      image: kozhikodeImg,
      status: 'Active & Expanding',
    },
    {
      id: 'ch-tvm',
      circle: 'Kerala Circle',
      city: 'Thiruvananthapuram',
      name: 'BOC Capital Chapter',
      venue: 'O by Tamara Trivandrum',
      meetingDay: 'Every Friday',
      meetingTime: '7:00 AM – 8:30 AM',
      director: 'Dr. Arun Varma',
      membersCount: '36',
      seatsAvailable: 14,
      categories: ['Biotech & Pharma', 'Govt Defense Contracting', 'Media & Broadcasting', 'Hospitality'],
      image: tvmImg,
      status: 'Active & Expanding',
    },
    {
      id: 'ch-kottayam',
      circle: 'Kerala Circle',
      city: 'Kottayam',
      name: 'BOC Kottayam Royal Chapter',
      venue: 'Windsor Castle Kottayam',
      meetingDay: 'Every Tuesday',
      meetingTime: '7:00 AM – 8:30 AM',
      director: 'Mathews Cherian',
      membersCount: '32',
      seatsAvailable: 16,
      categories: ['Plantations & Rubber', 'Publishing & Media', 'Agro-Processing', 'Education Groups'],
      image: kottayamImg,
      status: 'Active & Expanding',
    },
    {
      id: 'ch-kollam',
      circle: 'Kerala Circle',
      city: 'Kollam',
      name: 'BOC Kollam Port City Chapter',
      venue: 'The Raviz Ashtamudi',
      meetingDay: 'Every Thursday',
      meetingTime: '7:00 AM – 8:30 AM',
      director: 'Suresh Babu',
      membersCount: '40+',
      seatsAvailable: 12,
      categories: ['Cashew Processing & Export', 'Maritime & Marine Products', 'Logistics', 'Eco-Tourism'],
      image: kollamImg,
      status: 'Active & Expanding',
    },

    // =========================================================================
    // TAMIL NADU CIRCLE
    // =========================================================================
    {
      id: 'ch-madras',
      circle: 'Tamil Nadu Circle',
      city: 'Madras',
      name: 'BOC Madras Capital Chapter',
      venue: 'ITC Grand Chola / Taj Coromandel',
      meetingDay: 'Every Wednesday',
      meetingTime: '7:00 AM – 8:30 AM',
      director: 'K. R. V. Ramanathan',
      membersCount: '65+',
      seatsAvailable: 10,
      categories: ['Automotive & EV', 'SaaS & Enterprise IT', 'Healthcare & MedTech', 'Financial Services', 'Export & Logistics'],
      image: madrasImg,
      status: 'Active & Expanding',
    },
  ];

  // Circle options with counts
  const circles = [
    { id: 'All', label: 'All Circles', count: chapters.length },
    { id: 'Kerala Circle', label: 'Kerala Circle', count: chapters.filter(c => c.circle === 'Kerala Circle').length },
    { id: 'Tamil Nadu Circle', label: 'Tamil Nadu Circle', count: chapters.filter(c => c.circle === 'Tamil Nadu Circle').length },
  ];

  // Dynamic available cities based on selected circle
  const availableCities = useMemo(() => {
    const list = selectedCircle === 'All' ? chapters : chapters.filter(c => c.circle === selectedCircle);
    const uniqueCities = Array.from(new Set(list.map(c => c.city)));
    return ['All', ...uniqueCities];
  }, [selectedCircle]);

  // Filtered chapters list
  const filteredChapters = chapters.filter(c => {
    const matchesCircle = selectedCircle === 'All' || c.circle === selectedCircle;
    const matchesCity = selectedCity === 'All' || c.city === selectedCity;
    return matchesCircle && matchesCity;
  });

  const handleCircleChange = (circleId) => {
    setSelectedCircle(circleId);
    setSelectedCity('All'); // Reset city filter when switching circles
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#020713] text-white pt-24 sm:pt-28 pb-20 selection:bg-[#D4AF37] selection:text-[#07172C] relative">
      
      {/* Background Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#0E2849]/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full min-w-0">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172C] border border-[#D4AF37]/60 text-[#F9D678] text-xs font-cinzel font-bold tracking-[0.25em] uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Building2 className="w-3.5 h-3.5 text-[#F9D678]" />
            <span>EXECUTIVE CHAPTER NETWORK</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            BOC Regional <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#F5C75D] bg-clip-text text-transparent">Circles & Chapters</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every BOC chapter operates under strict category exclusivity. 
            Connect with vetted industry leaders across Kerala and Tamil Nadu circles for breakfast conclaves and strategic expansion.
          </p>
        </div>

        {/* 1. Primary Circle Switcher Tabs */}
        <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
          {circles.map((cir) => (
            <button
              key={cir.id}
              onClick={() => handleCircleChange(cir.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-cinzel font-bold tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                selectedCircle === cir.id
                  ? 'bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] shadow-[0_0_20px_rgba(212,175,55,0.35)] scale-105'
                  : 'bg-[#05142B] hover:bg-[#0A2244] text-slate-300 border border-[#D4AF37]/30 hover:border-[#D4AF37]/70'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{cir.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                selectedCircle === cir.id ? 'bg-[#07172C] text-[#F9D678]' : 'bg-white/10 text-slate-400'
              }`}>
                {cir.count}
              </span>
            </button>
          ))}
        </div>

        {/* 2. Secondary City Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap max-w-full px-2">
          {availableCities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-cinzel font-semibold tracking-wider transition-all cursor-pointer ${
                selectedCity === city
                  ? 'bg-white/20 text-[#F9D678] border border-[#F9D678] shadow-sm'
                  : 'bg-[#030B18] hover:bg-white/5 text-slate-400 border border-slate-800'
              }`}
            >
              {city === 'All' 
                ? (selectedCircle === 'All' ? 'All Cities' : `All in ${selectedCircle}`) 
                : `${city} Chapter`}
            </button>
          ))}
        </div>

        {/* Chapters Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredChapters.map((ch) => (
            <div 
              key={ch.id}
              className="bg-[#051329] rounded-3xl border border-[#D4AF37]/40 overflow-hidden hover:border-[#F9D678] transition-all duration-300 shadow-xl hover:shadow-[0_15px_35px_rgba(212,175,55,0.2)] flex flex-col justify-between group"
            >
              <div>
                {/* Chapter Photo Banner */}
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img 
                    src={ch.image} 
                    alt={ch.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-[#051329]/20 to-transparent" />
                  
                  {/* Circle Badge (Top Left) */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#07172C]/90 border border-[#D4AF37] text-[#F9D678] text-[10px] font-cinzel font-bold tracking-wider uppercase backdrop-blur-md flex items-center gap-1.5 shadow-md">
                    <Layers className="w-3 h-3 text-[#F9D678]" />
                    <span>{ch.circle}</span>
                  </div>

                  {/* Status Badge (Top Right) */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#020814]/85 border border-emerald-500/50 text-emerald-400 text-[10px] font-cinzel font-bold tracking-wider uppercase backdrop-blur-md">
                    {ch.status}
                  </div>

                  {/* City Badge (Bottom Left) */}
                  <div className="absolute bottom-3 left-5">
                    <span className="text-xl font-serif font-bold text-white block">
                      {ch.city}
                    </span>
                    <span className="text-xs text-[#F9D678] font-medium block">
                      {ch.name}
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 space-y-4">
                  
                  {/* Meeting Venue */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#F9D678] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-400 block">Conclave Venue:</span>
                      <strong className="text-sm text-white font-medium block">{ch.venue}</strong>
                    </div>
                  </div>

                  {/* Meeting Time */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#F9D678] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-400 block">Schedule:</span>
                      <strong className="text-sm text-white font-medium block">
                        {ch.meetingDay} • {ch.meetingTime}
                      </strong>
                    </div>
                  </div>

                  {/* Chapter Stats */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-[#020814] p-3 rounded-xl border border-slate-800">
                      <span className="text-[11px] text-slate-400 block">Active Members</span>
                      <strong className="text-base text-[#F9D678] font-serif font-bold">{ch.membersCount} Leaders</strong>
                    </div>
                    <div className="bg-[#020814] p-3 rounded-xl border border-slate-800">
                      <span className="text-[11px] text-slate-400 block">Open Seats</span>
                      <strong className="text-base text-emerald-400 font-serif font-bold">{ch.seatsAvailable} Categories</strong>
                    </div>
                  </div>

                  {/* Represented Sectors */}
                  <div className="pt-2">
                    <span className="text-[11px] font-cinzel text-slate-400 uppercase tracking-wider block mb-2">
                      Key Industries Represented:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ch.categories.map((cat, idx) => (
                        <span key={idx} className="text-[11px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-slate-300">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenJoinModal}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#07172C] to-[#0E2849] hover:from-[#F9D678] hover:to-[#D4AF37] text-white hover:text-[#07172C] border border-[#D4AF37]/50 font-cinzel font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-md"
                >
                  <span>Attend As Guest</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-[#07172C] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner: Launch a Chapter */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#081E3B] via-[#0B2548] to-[#040F21] p-5 sm:p-12 border-2 border-[#D4AF37]/50 text-center overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto w-full min-w-0">
            <Sparkles className="w-8 h-8 text-[#F9D678] mx-auto mb-3" />
            <h3 className="font-serif font-bold text-xl sm:text-3xl text-white mb-3">
              Want to Launch a BOC Chapter in Your City or Country?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              BOC is expanding across major business districts in Kerala, Tamil Nadu, across India, and globally. 
              Partner with the BOC Secretariat as a Chapter Founding Director.
            </p>
            <button
              onClick={onOpenJoinModal}
              className="px-5 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-all max-w-full cursor-pointer"
            >
              Apply as Chapter Founding Leader →
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
