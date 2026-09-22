import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Phone, 
  Mail, 
  Globe, 
  Award, 
  Sparkles, 
  User, 
  Building2,
  ExternalLink,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { eventsData } from '../data/eventsData';
import bocLogoPng from '../assets/boc-logo.png';

export default function EventDetailPage({ onOpenJoinModal }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find target event by ID, or fallback to first event
  const event = eventsData.find((e) => e.id === id) || eventsData[0];

  // Registration Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    category: '',
    phone: '',
    email: '',
    city: 'Kochi',
    passType: 'Executive Guest Pass',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setFormSubmitted(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.shortDescription,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#020713] text-white pt-24 sm:pt-28 pb-20 selection:bg-[#D4AF37] selection:text-[#07172C] w-full max-w-full overflow-x-hidden relative">
      
      {/* Background Ambient Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute top-96 left-10 w-[500px] h-[500px] bg-[#0E2849]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-8 pt-2 flex-wrap">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-cinzel font-semibold text-[#F9D678] hover:text-white transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Events</span>
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#05142B] border border-[#D4AF37]/40 hover:border-[#F9D678] text-[#F9D678] text-xs font-semibold tracking-wider transition-all cursor-pointer"
            title="Share this event"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Link Copied!' : 'Share Event'}</span>
          </button>
        </div>


        {/* =================================================================== */}
        {/* 1. HERO HEADER: TITLE, BADGES & EVENT BANNER                       */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column (7 Cols): Typography & Quick Stats */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Type Badge & Status */}
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172C] border border-[#D4AF37]/60 text-[#F9D678] text-[11px] font-cinzel font-bold tracking-[0.25em] uppercase shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-[#F9D678]" />
                <span>{event.type}</span>
              </div>

              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                event.isUpcoming 
                  ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-300' 
                  : 'bg-slate-800 border border-slate-700 text-slate-400'
              }`}>
                {event.registrationStatus}
              </span>

              {event.isUpcoming && event.spotsLeft > 0 && (
                <span className="px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/50 text-amber-300 text-xs font-medium">
                  {event.spotsLeft} Seats Remaining
                </span>
              )}
            </div>

            {/* Event Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.12] mb-4">
              {event.title}
            </h1>

            {/* Subtitle */}
            {event.subtitle && (
              <p className="font-cinzel text-sm sm:text-base text-[#F9D678] font-bold tracking-wider mb-6">
                {event.subtitle}
              </p>
            )}

            {/* Key Metadata Chips Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#051329]/90 border border-[#D4AF37]/35 shadow-xl backdrop-blur-md mb-8">
              
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-9 h-9 rounded-lg bg-[#071E3D] border border-[#D4AF37]/50 text-[#F9D678] flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-cinzel">Date</span>
                  <span className="font-bold text-white block">{event.date}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-9 h-9 rounded-lg bg-[#071E3D] border border-[#D4AF37]/50 text-[#F9D678] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-cinzel">Time</span>
                  <span className="font-bold text-white block">{event.time}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 sm:col-span-2 pt-2 border-t border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-[#071E3D] border border-[#D4AF37]/50 text-[#F9D678] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-cinzel">Location & Venue</span>
                  <span className="font-bold text-white block">{event.location}</span>
                  <span className="text-xs text-[#DFC688] block">{event.venue}, {event.city}</span>
                </div>
              </div>

            </div>

            {/* Quick Action Anchor */}
            {event.isUpcoming ? (
              <a
                href="#register-section"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] hover:from-white hover:to-[#F9D678] text-[#07172C] font-cinzel font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all transform hover:scale-102 cursor-pointer"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-cinzel font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>This event has concluded successfully</span>
              </div>
            )}

          </div>

          {/* Right Column (5 Cols): Event Banner Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <img
                src={event.banner || event.image}
                alt={event.title}
                className="w-full h-auto max-h-[580px] object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020713]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Event Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-[#040F22]/90 border border-[#D4AF37]/40 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <img src={bocLogoPng} alt="BOC Logo" className="w-6 h-6 object-contain" />
                  <span className="text-[10px] font-cinzel font-bold text-[#F9D678] tracking-widest uppercase">
                    OFFICIAL CONCLAVE
                  </span>
                </div>
                <span className="text-[11px] text-white font-semibold">
                  {event.city}
                </span>
              </div>
            </div>
          </div>

        </div>


        {/* =================================================================== */}
        {/* 2. MAIN BODY: DESCRIPTION & AGENDA                                 */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          {/* Left 8 Cols: Overview, Agenda, Speakers, Sponsors */}
          <div className="lg:col-span-8 space-y-12 text-left">
            
            {/* Section: Overview & Description */}
            <div className="bg-[#051329]/80 rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/35 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                Event <span className="text-[#F9D678]">Overview</span>
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {event.fullDescription}
              </p>

              {/* Highlights Bullets */}
              {event.highlights && event.highlights.length > 0 && (
                <div className="pt-4 border-t border-slate-800">
                  <h3 className="font-cinzel text-xs font-bold text-[#DFC688] tracking-wider uppercase mb-3">
                    KEY TAKEAWAYS & HIGHLIGHTS
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {event.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#F9D678] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Section: Structured Event Agenda */}
            {event.agenda && event.agenda.length > 0 && (
              <div className="bg-[#051329]/80 rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/35 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#071E3D] border border-[#D4AF37]/60 text-[#F9D678] flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Event <span className="text-[#F9D678]">Agenda</span>
                    </h2>
                    <span className="text-xs text-slate-400 font-cinzel uppercase tracking-wider">
                      Schedule & Topic Breakdown
                    </span>
                  </div>
                </div>

                <div className="space-y-4 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-gradient-to-b before:from-[#D4AF37] before:to-transparent">
                  {event.agenda.map((item, idx) => (
                    <div key={idx} className="relative pl-10 group">
                      <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] group-hover:scale-125 transition-transform" />
                      <div className="p-4 rounded-2xl bg-[#030C1C] border border-slate-800 hover:border-[#D4AF37]/50 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                          <h4 className="font-serif font-bold text-white text-base sm:text-lg group-hover:text-[#F9D678] transition-colors">
                            {item.title}
                          </h4>
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#071E3D] text-[#F9D678] text-[11px] font-semibold tracking-wider font-cinzel">
                            {item.time}
                          </span>
                        </div>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section: Featured Speakers */}
            {event.speakers && event.speakers.length > 0 && (
              <div className="bg-[#051329]/80 rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/35 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#071E3D] border border-[#D4AF37]/60 text-[#F9D678] flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Featured <span className="text-[#F9D678]">Speakers</span>
                    </h2>
                    <span className="text-xs text-slate-400 font-cinzel uppercase tracking-wider">
                      Distinguished Guests & Mentors
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.speakers.map((spk, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-2xl bg-[#030C1C] border border-[#D4AF37]/40 flex flex-col gap-4 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#D4AF37] shrink-0">
                          <img 
                            src={spk.photo} 
                            alt={spk.name} 
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform" 
                          />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-lg text-white group-hover:text-[#F9D678] transition-colors">
                            {spk.name}
                          </h4>
                          <span className="text-xs text-[#DFC688] font-cinzel font-semibold block">
                            {spk.role}
                          </span>
                          <span className="text-xs text-slate-400 block">
                            {spk.company}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 text-xs leading-relaxed border-t border-slate-800 pt-3">
                        {spk.bio}
                      </p>

                      {spk.phone && (
                        <div className="text-[11px] text-[#F9D678] font-semibold pt-1">
                          Direct Contact: {spk.phone}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section: Sponsors & Presenters */}
            {event.sponsors && event.sponsors.length > 0 && (
              <div className="bg-[#051329]/80 rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/35 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#071E3D] border border-[#D4AF37]/60 text-[#F9D678] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Event <span className="text-[#F9D678]">Sponsors & Partners</span>
                    </h2>
                    <span className="text-xs text-slate-400 font-cinzel uppercase tracking-wider">
                      Collaborative Enterprise Patrons
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.sponsors.map((spn, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-2xl bg-[#030C1C] border border-slate-800 hover:border-[#D4AF37]/50 transition-colors flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#071E3D] border border-[#D4AF37]/40 flex items-center justify-center text-[#F9D678] font-cinzel font-bold text-lg shrink-0">
                        {spn.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-white text-base">
                          {spn.name}
                        </h4>
                        <span className="text-xs text-[#DFC688] font-medium block">
                          {spn.tier}
                        </span>
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          {spn.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>


          {/* Right 4 Cols: Registration Form & Venue Map */}
          <div className="lg:col-span-4 space-y-8 text-left">
            
            {/* Registration Form Box */}
            <div 
              id="register-section"
              className="bg-gradient-to-b from-[#092244] to-[#040F22] rounded-3xl p-6 sm:p-7 border-2 border-[#F9D678] shadow-[0_15px_40px_rgba(212,175,55,0.25)] sticky top-24"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#F9D678]" />
                <span className="text-xs font-cinzel font-bold tracking-widest text-[#F9D678] uppercase">
                  CONFIRM YOUR ATTENDANCE
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Register for Pass
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                Reserve your delegate seat. Due to category lock, seats are strictly allocated on first-verified basis.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-serif font-bold text-white">
                    Registration Confirmed!
                  </h4>
                  <p className="text-xs text-emerald-200 leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your delegate pass request for <em>{event.title}</em> has been lodged.
                  </p>
                  <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 text-[11px] text-slate-300 font-mono">
                    Pass Reference: BOC-EV-{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                  <p className="text-[11px] text-slate-400 pt-1">
                    Our admissions secretariat will contact you on <strong>{formData.phone}</strong> with your entry badge.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs font-cinzel text-[#F9D678] underline hover:text-white cursor-pointer"
                  >
                    Submit another attendee
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  
                  <div>
                    <label className="block text-[11px] font-cinzel font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Jijeesh Minerva"
                      className="w-full bg-[#020814] border border-[#D4AF37]/40 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#F9D678] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-cinzel font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Business / Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g. Eco Pest India"
                      className="w-full bg-[#020814] border border-[#D4AF37]/40 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#F9D678] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-cinzel font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="98470 40009"
                        className="w-full bg-[#020814] border border-[#D4AF37]/40 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#F9D678] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-cinzel font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        City / Chapter
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full bg-[#020814] border border-[#D4AF37]/40 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#F9D678] transition-colors"
                      >
                        <option value="Kochi">Kochi</option>
                        <option value="Thrissur">Thrissur</option>
                        <option value="Kozhikode">Kozhikode</option>
                        <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                        <option value="Kottayam">Kottayam</option>
                        <option value="Kollam">Kollam</option>
                        <option value="Other">Other District</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-cinzel font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Business Category / Vertical *
                    </label>
                    <input
                      type="text"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                      placeholder="e.g. Facility Management / Real Estate"
                      className="w-full bg-[#020814] border border-[#D4AF37]/40 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#F9D678] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-cinzel font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Business Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="founder@company.com"
                      className="w-full bg-[#020814] border border-[#D4AF37]/40 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#F9D678] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 mt-3 rounded-xl bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] hover:from-white hover:to-[#F9D678] text-[#07172C] font-cinzel font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl transition-all transform hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>REGISTER NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-slate-400 text-center pt-1">
                    🔒 Category reservation applies. Zero unsolicited calls.
                  </p>
                </form>
              )}

            </div>

            {/* Map & Venue Location Box */}
            <div className="bg-[#051329]/90 rounded-3xl p-6 border border-[#D4AF37]/35 shadow-xl">
              <h4 className="font-cinzel font-bold text-xs text-[#F9D678] tracking-widest uppercase mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F9D678]" />
                <span>VENUE & LOCATION</span>
              </h4>

              <div className="p-4 rounded-2xl bg-[#020814] border border-slate-800 mb-4 text-xs text-slate-300 space-y-2">
                <div className="font-semibold text-white text-sm">
                  {event.venue}
                </div>
                <div>{event.mapLocation.address}</div>
                {event.mapLocation.landmark && (
                  <div className="text-[11px] text-[#DFC688]">
                    Landmark: {event.mapLocation.landmark}
                  </div>
                )}
              </div>

              <a
                href={event.mapLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl border border-[#D4AF37]/50 hover:border-[#F9D678] text-[#F9D678] hover:text-white hover:bg-[#D4AF37]/20 transition-all text-xs font-cinzel font-bold tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Contact Information Box */}
            <div className="bg-[#051329]/90 rounded-3xl p-6 border border-[#D4AF37]/35 shadow-xl space-y-3 text-xs text-slate-300">
              <h4 className="font-cinzel font-bold text-xs text-[#F9D678] tracking-widest uppercase mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F9D678]" />
                <span>EVENT ENQUIRIES</span>
              </h4>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${event.contactInfo.helpline}`} className="hover:text-[#F9D678] font-bold text-white">
                  {event.contactInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${event.contactInfo.email}`} className="hover:text-[#F9D678]">
                  {event.contactInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`https://${event.contactInfo.website}`} target="_blank" rel="noreferrer" className="hover:text-[#F9D678]">
                  {event.contactInfo.website}
                </a>
              </div>

              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                Desk Coordinator: <span className="text-white font-medium">{event.contactInfo.coordinator}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
