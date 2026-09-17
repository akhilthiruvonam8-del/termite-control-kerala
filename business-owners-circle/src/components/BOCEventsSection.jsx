import React from 'react';
import { Calendar, Clock, MapPin, Users, Presentation, Award, ArrowRight, Sparkles } from 'lucide-react';

export default function BOCEventsSection({ onOpenJoinModal }) {
  const events = [
    {
      id: 1,
      type: 'WEEKLY BREAKFAST MASTERMIND',
      title: 'Kochi Chapter Weekly Referral Exchange',
      date: 'Next Wednesday',
      time: '7:30 AM – 9:30 AM',
      venue: 'Grand Executive Ballroom, Kakkanad, Kochi',
      seats: 'Guest Passes by Invitation',
      highlight: '30+ Qualified Referrals Exchanged',
      icon: Users,
    },
    {
      id: 2,
      type: 'BUSINESS PRESENTATION SHOWCASE',
      title: 'Tech & Architecture Cross-Disciplinary Showcase',
      date: 'Last Friday of the Month',
      time: '6:30 PM – 9:00 PM',
      venue: 'Panampilly Nagar Executive Club, Kochi',
      seats: 'Limited to 45 Leaders',
      highlight: 'Turnkey Commercial Bidding Masterclass',
      icon: Presentation,
    },
    {
      id: 3,
      type: 'FOUNDER FIRESIDE & NETWORKING',
      title: 'Scaling Kerala Enterprises: Capital & Governance',
      date: 'Quarterly Summit',
      time: '5:00 PM – 8:30 PM',
      venue: 'Marine Drive Luxury Waterfront Hotel, Kochi',
      seats: 'All Chapter Members + VIP Guests',
      highlight: 'Keynote by Kerala Unicorn & Growth Founders',
      icon: Award,
    },
  ];

  return (
    <section id="events" className="relative py-20 lg:py-28 bg-[#020712] text-white border-t border-[#C9A227]/20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B3A]/80 border border-[#C9A227]/40 text-xs font-extrabold tracking-[0.22em] text-[#FFE27A] uppercase">
            <Calendar className="w-3.5 h-3.5 text-[#FFE27A]" />
            <span>CALENDAR & ENGAGEMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFF3C4] to-[#C9A227]">
            Meet. Connect. Exchange. Grow.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Attend high-impact structured meetings, business spotlights, referral sessions, and founder workshops designed to generate real commercial traction.
          </p>
        </div>

        {/* Events Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {events.map((ev) => {
            const IconComp = ev.icon;
            return (
              <div
                key={ev.id}
                className="rounded-3xl p-7 bg-gradient-to-b from-[#061733] via-[#041126] to-[#020A17] border border-[#C9A227]/30 hover:border-[#FFE27A] transition-all shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold tracking-wider px-3 py-1 rounded-full bg-[#071B3A] text-[#FFE27A] border border-[#FFE27A]/30">
                      {ev.type}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#071B3A] border border-[#FFE27A]/40 flex items-center justify-center text-[#FFE27A]">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-cinzel font-bold text-white">
                    {ev.title}
                  </h3>

                  <div className="space-y-2 pt-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#FFE27A] flex-shrink-0" />
                      <span className="font-semibold text-white">{ev.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#FFE27A] flex-shrink-0" />
                      <span>{ev.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#FFE27A] flex-shrink-0 mt-0.5" />
                      <span>{ev.venue}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#030914] border border-white/5 text-[11px] text-[#FFE27A] font-medium flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{ev.highlight}</span>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10">
                  <button
                    onClick={onOpenJoinModal}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F7E7A9] via-[#E5C45A] to-[#C9A227] text-[#041126] font-extrabold text-xs uppercase tracking-wider shadow-gold-sm hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>REQUEST GUEST PASS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
