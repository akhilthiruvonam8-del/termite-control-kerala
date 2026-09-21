import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  Filter,
  History,
  TrendingUp,
  Award
} from 'lucide-react';
import { eventsData } from '../data/eventsData';

export default function EventsPage({ onOpenJoinModal }) {
  // Tab State: 'upcoming' vs 'previous'
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedType, setSelectedType] = useState('All');

  // Filter by Tab (Upcoming vs Previous)
  const tabFilteredEvents = eventsData.filter((event) => 
    activeTab === 'upcoming' ? event.isUpcoming : !event.isUpcoming
  );

  // Extract unique types for the active tab
  const availableTypes = ['All', ...new Set(tabFilteredEvents.map((e) => e.type))];

  // Apply Type Filter
  const displayEvents = selectedType === 'All'
    ? tabFilteredEvents
    : tabFilteredEvents.filter((e) => e.type === selectedType);

  return (
    <div className="min-h-screen bg-[#020713] text-white pt-24 sm:pt-28 pb-20 selection:bg-[#D4AF37] selection:text-[#07172C]">
      
      {/* Background Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-96 left-10 w-[450px] h-[450px] bg-[#0E2849]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* =================================================================== */}
        {/* 1. HEADER SHOWCASE (Radiant Gold Pill Badge & Luminous Gradient)    */}
        {/* =================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172C] border border-[#D4AF37]/60 text-[#F9D678] text-[11px] font-cinzel font-bold tracking-[0.25em] uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F9D678]" />
            <span>EXECUTIVE CALENDAR</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            BOC <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#F5C75D] bg-clip-text text-transparent">Events & Conclaves</span>
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
            High-level business conclaves, wealth masterclasses, networking breakfasts, and executive retreats. 
            Connect with peer founders across Kerala and scale through category-exclusive collaboration.
          </p>
        </div>


        {/* =================================================================== */}
        {/* 2. UPCOMING VS PREVIOUS EVENTS TOGGLE TABS                          */}
        {/* =================================================================== */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            onClick={() => {
              setActiveTab('upcoming');
              setSelectedType('All');
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-cinzel font-bold tracking-wider uppercase transition-all cursor-pointer shadow-md ${
              activeTab === 'upcoming'
                ? 'bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] shadow-[0_4px_20px_rgba(212,175,55,0.3)] scale-105'
                : 'bg-[#05142B] hover:bg-[#071F3E] text-slate-300 border border-[#D4AF37]/35 hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Upcoming Events ({eventsData.filter(e => e.isUpcoming).length})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('previous');
              setSelectedType('All');
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-cinzel font-bold tracking-wider uppercase transition-all cursor-pointer shadow-md ${
              activeTab === 'previous'
                ? 'bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] shadow-[0_4px_20px_rgba(212,175,55,0.3)] scale-105'
                : 'bg-[#05142B] hover:bg-[#071F3E] text-slate-300 border border-[#D4AF37]/35 hover:text-white'
            }`}
          >
            <History className="w-4 h-4" />
            <span>Previous Events ({eventsData.filter(e => !e.isUpcoming).length})</span>
          </button>
        </div>


        {/* =================================================================== */}
        {/* 3. EVENT TYPE SUB-FILTER PILLS                                      */}
        {/* =================================================================== */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {availableTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-cinzel font-semibold tracking-wider transition-all cursor-pointer ${
                selectedType === type
                  ? 'bg-[#D4AF37]/25 text-[#F9D678] border border-[#F9D678] font-bold shadow-[0_0_10px_rgba(212,175,55,0.2)]'
                  : 'bg-[#030B17] hover:bg-white/5 text-slate-400 border border-slate-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>


        {/* =================================================================== */}
        {/* 4. EVENT CARDS GRID (Strictly adhering to Point 9 Requirements)     */}
        {/* =================================================================== */}
        {displayEvents.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-[#051329]/60 border border-[#D4AF37]/20 max-w-lg mx-auto">
            <Calendar className="w-12 h-12 text-[#D4AF37]/60 mx-auto mb-3" />
            <h3 className="font-serif font-bold text-lg text-white mb-1">No Events Found</h3>
            <p className="text-slate-400 text-xs">No events match the selected filter category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 items-stretch">
            {displayEvents.map((event) => (
              <div
                key={event.id}
                className="bg-[#051329] rounded-3xl border border-[#D4AF37]/35 overflow-hidden hover:border-[#F9D678] transition-all duration-300 shadow-xl hover:shadow-[0_15px_35px_rgba(212,175,55,0.2)] flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Event Image & Header Banner */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-[#020714]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-[#051329]/40 to-transparent" />
                    
                    {/* Event Type Badge */}
                    <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#07172C]/90 border border-[#D4AF37] text-[#F9D678] text-[10px] font-cinzel font-bold tracking-wider uppercase backdrop-blur-md shadow-md">
                      {event.type}
                    </div>

                    {/* Registration Status Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-medium backdrop-blur-md shadow-md ${
                      event.isUpcoming
                        ? 'bg-emerald-950/85 border border-emerald-500/50 text-emerald-300'
                        : 'bg-slate-900/85 border border-slate-700 text-slate-300'
                    }`}>
                      {event.registrationStatus}
                    </div>

                    {/* Quick Seats Stat Overlay */}
                    {event.isUpcoming && event.spotsLeft > 0 && (
                      <div className="absolute bottom-3 right-4 px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-[10px] font-semibold backdrop-blur-md">
                        {event.spotsLeft} Seats Left
                      </div>
                    )}
                  </div>

                  {/* Card Content Details */}
                  <div className="p-6 sm:p-7 space-y-4 text-left">
                    
                    {/* Event Name */}
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-white group-hover:text-[#F9D678] transition-colors leading-snug">
                      {event.title}
                    </h3>

                    {/* Date & Time */}
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-300 pt-1">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#F9D678] shrink-0" />
                        <span className="font-semibold text-white">{event.date}</span>
                      </div>
                      <span className="text-slate-600 hidden sm:inline">•</span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[#F9D678] shrink-0" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <MapPin className="w-4 h-4 text-[#F9D678] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white font-medium block">{event.venue}</span>
                        <span className="text-slate-400 block">{event.location}</span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1">
                      {event.shortDescription}
                    </p>

                  </div>
                </div>

                {/* Card CTA: VIEW EVENT */}
                <div className="p-6 sm:p-7 pt-0">
                  <Link
                    to={`/events/${event.id}`}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] hover:from-white hover:to-[#F9D678] text-[#07172C] font-cinzel font-black text-xs sm:text-[13px] uppercase tracking-wider shadow-lg transition-all transform hover:scale-102 flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    <span>VIEW EVENT</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
