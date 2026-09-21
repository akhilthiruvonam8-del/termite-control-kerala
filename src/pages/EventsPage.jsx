import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Users, 
  Share2, 
  CheckCircle2, 
  Filter 
} from 'lucide-react';

import networkingImg from '../assets/boc-event-networking.jpg';
import seminarImg from '../assets/boc-event-seminar.jpg';
import retreatImg from '../assets/boc-event-retreat.jpg';
import brandingImg from '../assets/boc-event-branding.jpg';

export default function EventsPage({ onOpenJoinModal }) {
  const [selectedType, setSelectedType] = useState('All');

  const events = [
    {
      id: 'ev-1',
      title: 'BOC Executive Breakfast Conclave',
      type: 'Weekly Conclave',
      date: 'Wednesday, Oct 15, 2025',
      time: '7:00 AM – 8:30 AM IST',
      venue: 'Grand Hyatt Kochi Bolgatty',
      city: 'Kochi',
      attendees: '60+ Business Leaders',
      image: networkingImg,
      description: 'Weekly high-synergy networking conclave featuring 1-on-1 strategic introductions and pre-qualified member referral exchanges.',
      speaker: 'BOC Executive Council & Keynote Guest',
      fee: 'Complimentary for Members / ₹1,500 Guest Pass',
      spotsLeft: 8,
    },
    {
      id: 'ev-2',
      title: 'Kerala Business Leaders Conclave & Summit',
      type: 'Summit & Expo',
      date: 'Saturday, Nov 08, 2025',
      time: '9:30 AM – 4:30 PM IST',
      venue: 'Lulu Bolgatty International Convention Centre',
      city: 'Kochi',
      attendees: '250+ Founders & CEOs',
      image: seminarImg,
      description: 'The premier statewide convergence of top entrepreneurs, investors, and family-business founders across South India.',
      speaker: 'Renowned Industrialists & Strategic Advisors',
      fee: 'All-Day Pass (Includes Executive Networking Luncheon)',
      spotsLeft: 24,
    },
    {
      id: 'ev-3',
      title: 'Annual Executive Backwater Leadership Retreat',
      type: 'Executive Retreat',
      date: 'Fri–Sun, Dec 12–14, 2025',
      time: '3-Day Immersive Offsite',
      venue: 'Kumarakom Lake Resort',
      city: 'Kumarakom',
      attendees: 'Exclusive to 40 Selected Leaders',
      image: retreatImg,
      description: 'An intimate, high-impact leadership retreat designed for visionary CEOs to recharge, forge deep lifelong alliances, and plan 2026 growth.',
      speaker: 'International Executive Coaches',
      fee: 'Premium & Corporate Member Privilege',
      spotsLeft: 5,
    },
    {
      id: 'ev-4',
      title: 'Brand Scaling & Global Market Expansion Workshop',
      type: 'Masterclass',
      date: 'Thursday, Jan 22, 2026',
      time: '5:30 PM – 8:00 PM IST',
      venue: 'Hyatt Regency Thrissur',
      city: 'Thrissur',
      attendees: '75+ Scaling Enterprises',
      image: brandingImg,
      description: 'Practical, actionable masterclass on taking South Indian enterprises into GCC and international markets.',
      speaker: 'Global Trade & Brand Specialists',
      fee: 'Free for BOC Members',
      spotsLeft: 15,
    },
  ];

  const types = ['All', 'Weekly Conclave', 'Summit & Expo', 'Executive Retreat', 'Masterclass'];

  const filteredEvents = selectedType === 'All' 
    ? events 
    : events.filter(e => e.type === selectedType);

  return (
    <div className="min-h-screen bg-[#020713] text-white pt-24 sm:pt-28 pb-20 selection:bg-[#D4AF37] selection:text-[#07172C]">
      
      {/* Ambient Lights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172C] border border-[#D4AF37]/60 text-[#F9D678] text-xs font-cinzel font-bold tracking-[0.25em] uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Calendar className="w-3.5 h-3.5 text-[#F9D678]" />
            <span>EXECUTIVE CALENDAR</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Upcoming <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#F5C75D] bg-clip-text text-transparent">Events & Conclaves</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            High-level business conclaves, networking mixers, masterclasses, and executive retreats. 
            Connect with industry pioneers across Kerala and beyond.
          </p>
        </div>

        {/* Type Filter */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-xs font-cinzel font-semibold tracking-wider transition-all cursor-pointer ${
                selectedType === type
                  ? 'bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-bold shadow-lg scale-105'
                  : 'bg-[#05142B] hover:bg-white/10 text-slate-300 border border-slate-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-[#051329] rounded-3xl border border-[#D4AF37]/35 overflow-hidden hover:border-[#F9D678] transition-all duration-300 shadow-xl hover:shadow-[0_15px_35px_rgba(212,175,55,0.2)] flex flex-col justify-between group"
            >
              <div>
                {/* Event Photo */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-[#051329]/40 to-transparent" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#07172C]/90 border border-[#D4AF37] text-[#F9D678] text-[10px] font-cinzel font-bold tracking-wider uppercase backdrop-blur-md">
                    {event.type}
                  </div>

                  {/* Spots Left */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[11px] font-medium backdrop-blur-md">
                    {event.spotsLeft} Seats Remaining
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-white group-hover:text-[#F9D678] transition-colors leading-snug">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Event Metadata */}
                <div className="p-6 space-y-3.5">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Calendar className="w-4 h-4 text-[#F9D678] shrink-0" />
                    <span className="font-semibold text-white">{event.date}</span>
                    <span className="text-slate-500">•</span>
                    <Clock className="w-4 h-4 text-[#F9D678] shrink-0" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <MapPin className="w-4 h-4 text-[#F9D678] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium block">{event.venue}</span>
                      <span className="text-slate-400 block">{event.city}, Kerala</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed pt-2">
                    {event.description}
                  </p>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>Keynote / Facilitators: <strong className="text-white">{event.speaker}</strong></span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenJoinModal}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] hover:from-white hover:to-[#F9D678] text-[#07172C] font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg transition-all transform hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Register for Conclave Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
