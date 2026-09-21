import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Lightbulb, 
  Handshake, 
  TrendingUp, 
  ArrowRight,
  Presentation,
  Palmtree,
  Sparkles
} from 'lucide-react';
import eventsBg from '../assets/boc-events-bg.jpg';
import seminarImg from '../assets/boc-event-seminar.jpg';
import networkingImg from '../assets/boc-event-networking.jpg';
import brandingImg from '../assets/boc-event-branding.jpg';
import retreatImg from '../assets/boc-event-retreat.jpg';
import bocLogoPng from '../assets/boc-logo.png';

/**
 * BOCEvents — "Upcoming Events: Learn. Network. Collaborate. Grow."
 * 100% Exact Recreation of Master Graphic (media_1789886066862.jpg)
 * Positioned immediately following BOCChapters.
 * Card templates are set as clean placeholders (TBA) ready to receive official details from leadership.
 */
export default function BOCEvents({ onOpenJoinModal }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // 4 Event Templates (Placeholders ready for official details)
  const events = [
    {
      id: 'event-slot-1',
      month: 'TBA',
      day: '--',
      year: '2025',
      weekday: 'SOON',
      category: 'BUSINESS SEMINAR',
      categoryIcon: Presentation,
      title: 'Digital Growth Strategies for SMEs',
      tagline: 'Learn how to leverage digital tools, marketing and technology to scale your business.',
      venue: 'Venue: To Be Announced (Kochi)',
      time: 'Schedule: Releasing Soon',
      capacity: 'Limited Seats • Pre-Register',
      photo: seminarImg,
    },
    {
      id: 'event-slot-2',
      month: 'TBA',
      day: '--',
      year: '2025',
      weekday: 'SOON',
      category: 'NETWORKING EVENT',
      categoryIcon: Users,
      title: 'Business Networking Mixer',
      tagline: 'Build new connections, exchange ideas and discover collaboration opportunities.',
      venue: 'Venue: To Be Announced (Kochi)',
      time: 'Schedule: Releasing Soon',
      capacity: 'BOC Members & Guests',
      photo: networkingImg,
    },
    {
      id: 'event-slot-3',
      month: 'TBA',
      day: '--',
      year: '2025',
      weekday: 'SOON',
      category: 'WORKSHOP',
      categoryIcon: Lightbulb,
      title: 'Effective Business Branding',
      tagline: 'Build a strong brand identity and stand out in your industry.',
      venue: 'Venue: To Be Announced (Kochi)',
      time: 'Schedule: Releasing Soon',
      capacity: 'BOC Members Only',
      photo: brandingImg,
    },
    {
      id: 'event-slot-4',
      month: 'TBA',
      day: '--',
      year: '2025',
      weekday: 'SOON',
      category: 'CHAPTER EVENT',
      categoryIcon: Palmtree,
      title: 'Backwater Retreat & Business Talks',
      tagline: 'Relax, connect and grow — an exclusive retreat for BOC members.',
      venue: 'Venue: Destination Resort (Kerala)',
      time: 'Schedule: Releasing Soon',
      capacity: 'BOC Members Only',
      photo: retreatImg,
    },
  ];

  return (
    <section 
      id="events" 
      className="relative w-full text-slate-900 overflow-hidden select-none py-16 sm:py-20 lg:py-24 border-t border-[#EADBBD]/40"
    >
      {/* ===================================================================== */}
      {/* 1. SCENIC PANORAMIC BACKDROP (Bridge, Houseboat, Sunset)              */}
      {/* ===================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={eventsBg} 
          alt="Kerala Waterfront Cable Bridge and Houseboat Sunset Background" 
          className="w-full h-full object-cover object-center transform scale-[1.02] filter brightness-[0.98] contrast-[1.02]"
        />
        {/* Soft atmospheric overlay matching master design */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/85 via-[#FAF8F5]/70 to-[#FAF8F5]/90 pointer-events-none" />
      </div>

      {/* ===================================================================== */}
      {/* 2. TOP-LEFT CURVED NAVY WAVE WITH BOC BRANDING (media_1789886066862) */}
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

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ===================================================================== */}
        {/* 3. SECTION HEADER (KICKER, TITLE, SUBTITLE, NARRATIVE)                */}
        {/* ===================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 pt-6 sm:pt-4">
          
          {/* Kicker Badge with Horizontal Rules */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1.5px] w-8 sm:w-16 bg-[#B57D2B]" />
            <span className="text-[#B57D2B] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase font-cinzel">
              BOC EVENTS
            </span>
            <div className="h-[1.5px] w-8 sm:w-16 bg-[#B57D2B]" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-bold tracking-tight leading-tight text-center mb-2">
            <span className="text-[#0A192F]">Upcoming </span>
            <span className="text-[#B57D2B]">Events</span>
          </h2>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl font-serif font-bold text-[#0A192F] mb-3">
            Learn. Network. Collaborate. Grow.
          </p>

          {/* Narrative Paragraph */}
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Join our upcoming events designed to help you connect with like-minded professionals, gain valuable insights and explore new opportunities.
          </p>

          {/* Subtle Golden Accent Line */}
          <div className="w-12 h-[1.5px] bg-[#B57D2B]/50 mx-auto mt-4" />
        </div>


        {/* ===================================================================== */}
        {/* 4. 4 EVENT CARDS (4-Column Layout on Desktop, 2 or 1 Col on Mobile)  */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-14 sm:mb-16 items-stretch">
          {events.map((evt) => {
            const CategoryIcon = evt.categoryIcon;

            return (
              <div 
                key={evt.id}
                className="group relative bg-[#FAF8F5]/95 hover:bg-white backdrop-blur-md rounded-2xl p-3 sm:p-3.5 flex flex-col border border-[#EADBBD]/90 hover:border-[#D4AF37] shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(181,125,43,0.18)] transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Event Photo Box with Floating Date Badge & Category Pill */}
                <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-4 bg-slate-200 shadow-inner">
                  <img 
                    src={evt.photo} 
                    alt={evt.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />

                  {/* Date Badge (Top Left Corner of Photo) */}
                  <div className="absolute top-2.5 left-2.5 bg-[#07172C]/92 backdrop-blur-md border border-[#D4AF37]/80 rounded-xl px-2.5 py-1.5 text-center shadow-lg min-w-[56px]">
                    <div className="flex items-center justify-center gap-1 text-[#D4AF37] mb-0.5">
                      <Calendar className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-cinzel font-bold text-[#F9D678] tracking-widest uppercase block leading-none">
                      {evt.month}
                    </span>
                    <span className="text-xl sm:text-2xl font-serif font-bold text-white leading-none my-0.5 block">
                      {evt.day}
                    </span>
                    <span className="text-[8.5px] font-medium text-slate-300 block leading-none">
                      {evt.year}
                    </span>
                    <span className="text-[8px] font-bold text-[#D4AF37] tracking-wider uppercase block mt-0.5">
                      {evt.weekday}
                    </span>
                  </div>

                  {/* Category Pill (Bottom Left of Photo) */}
                  <div className="absolute bottom-2.5 left-2.5 bg-gradient-to-r from-[#FDE8BB] via-[#FCE3AA] to-[#F5D082] text-[#7A4F0B] border border-[#EADBBD] text-[9.5px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wide">
                    <CategoryIcon className="w-3 h-3 stroke-[2.2]" />
                    <span>{evt.category}</span>
                  </div>
                </div>

                {/* Event Title */}
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0A192F] group-hover:text-[#B57D2B] transition-colors mb-2 leading-snug">
                  {evt.title}
                </h3>

                {/* Event Description */}
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-4">
                  {evt.tagline}
                </p>

                {/* Event Metadata List */}
                <div className="space-y-1.5 mb-5 text-[11px] sm:text-[11.5px] text-slate-600 font-medium">
                  {/* Venue */}
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#B57D2B] shrink-0" />
                    <span className="truncate">{evt.venue}</span>
                  </div>
                  {/* Time */}
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#B57D2B] shrink-0" />
                    <span>{evt.time}</span>
                  </div>
                  {/* Capacity */}
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#B57D2B] shrink-0" />
                    <span>{evt.capacity}</span>
                  </div>
                </div>

                {/* Register / Pre-Register Button */}
                <button
                  onClick={() => {
                    setSelectedEvent(evt);
                    onOpenJoinModal();
                  }}
                  className="w-full py-2.5 px-4 rounded-full bg-[#07172C] hover:bg-[#0B2548] text-white text-xs sm:text-sm font-semibold border border-[#B57D2B]/50 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-[#D4AF37] mt-auto cursor-pointer"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>


        {/* ===================================================================== */}
        {/* 5. BOTTOM 4 CORE PILLARS (MEET, GAIN, BUILD, EXPAND)                  */}
        {/* ===================================================================== */}
        <div className="bg-[#07172C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/50 shadow-2xl relative overflow-hidden">
          {/* Subtle Golden Glow */}
          <div className="absolute inset-0 bg-radial from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center text-center">
            
            {/* Pillar 1: Meet Business Owners */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#0B2548] border border-[#D4AF37]/60 text-[#F9D678] flex items-center justify-center mb-2.5 shadow-md">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[10.5px] sm:text-xs font-cinzel font-bold text-white tracking-widest uppercase block">
                MEET
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#F9D678] font-medium mt-0.5">
                BUSINESS OWNERS
              </span>
            </div>

            {/* Pillar 2: Gain New Insights */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#0B2548] border border-[#D4AF37]/60 text-[#F9D678] flex items-center justify-center mb-2.5 shadow-md">
                <Lightbulb className="w-5 h-5" />
              </div>
              <span className="text-[10.5px] sm:text-xs font-cinzel font-bold text-white tracking-widest uppercase block">
                GAIN
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#F9D678] font-medium mt-0.5">
                NEW INSIGHTS
              </span>
            </div>

            {/* Pillar 3: Build Partnerships */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#0B2548] border border-[#D4AF37]/60 text-[#F9D678] flex items-center justify-center mb-2.5 shadow-md">
                <Handshake className="w-5 h-5" />
              </div>
              <span className="text-[10.5px] sm:text-xs font-cinzel font-bold text-white tracking-widest uppercase block">
                BUILD
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#F9D678] font-medium mt-0.5">
                PARTNERSHIPS
              </span>
            </div>

            {/* Pillar 4: Expand Your Opportunities */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#0B2548] border border-[#D4AF37]/60 text-[#F9D678] flex items-center justify-center mb-2.5 shadow-md">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-[10.5px] sm:text-xs font-cinzel font-bold text-white tracking-widest uppercase block">
                EXPAND
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#F9D678] font-medium mt-0.5">
                YOUR OPPORTUNITIES
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* ===================================================================== */}
      {/* 6. BE PART OF WHAT'S NEXT! CURVED CORNER SCRIPT                       */}
      {/* ===================================================================== */}
      <div className="hidden sm:block absolute bottom-0 right-0 z-20 pointer-events-none">
        <div className="relative bg-[#07172C] border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-3xl px-8 py-3.5 shadow-2xl">
          <span className="font-serif italic font-semibold text-base sm:text-lg text-[#F9D678] tracking-wider drop-shadow-sm select-none">
            Be Part of What&apos;s Next!
          </span>
        </div>
      </div>
    </section>
  );
}
