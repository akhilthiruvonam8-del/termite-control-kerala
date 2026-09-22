import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck,
  HelpCircle,
  LogIn
} from 'lucide-react';

import BOCHero from '../components/BOCHero';
import BOCWhyBOC from '../components/BOCWhyBOC';
import BOCHowItWorks from '../components/BOCHowItWorks';
import BOCJoinToday from '../components/BOCJoinToday';

/**
 * HomePage — Executive Portal with Direct Navigation to Dedicated Modules
 */
export default function HomePage({ onOpenJoinModal }) {
  const portalModules = [
    {
      title: 'About BOC',
      badge: 'OUR ETHOS',
      desc: 'Discover our founding vision, zero-competition category protection, and executive governance.',
      path: '/about',
      icon: ShieldCheck,
      action: 'Explore About BOC',
      stats: 'Zero Competition'
    },
    {
      title: 'Membership Tiers',
      badge: 'EXCLUSIVE PRIVILEGES',
      desc: 'Explore Professional, Business, and Premium tiers tailored for ambitious business leaders.',
      path: '/membership',
      icon: Award,
      action: 'View Membership Plans',
      stats: '1 Seat per Category'
    },
    {
      title: 'Kerala Chapters',
      badge: 'REGIONAL HUBS',
      desc: 'Connect with active chapters across Kochi, Thrissur, Calicut, TVM, and growing districts.',
      path: '/chapters',
      icon: MapPin,
      action: 'Find Local Chapter',
      stats: '14 Districts'
    },
    {
      title: 'Members Directory',
      badge: 'VERIFIED NETWORK',
      desc: 'Search, filter, and connect with peer-verified business owners and enterprise decision-makers.',
      path: '/members',
      icon: Users,
      action: 'Search Directory',
      stats: '340+ Founders'
    },
    {
      title: 'Upcoming Events',
      badge: 'NETWORKING ROUNDS',
      desc: 'Weekly breakfast conclaves, regional CEO roundtables, and high-impact business summits.',
      path: '/events',
      icon: Calendar,
      action: 'Browse Calendar',
      stats: 'Weekly Conclaves'
    },
    {
      title: 'Success Stories',
      badge: 'DOCUMENTED ROI',
      desc: 'Read real case studies of Kerala entrepreneurs closing multi-crore deals through BOC.',
      path: '/success-stories',
      icon: TrendingUp,
      action: 'Read Member Stories',
      stats: '₹450 Cr+ Exchanged'
    },
    {
      title: 'FAQ & Help Center',
      badge: 'OFFICIAL ANSWERS',
      desc: '50 official questions & answers on membership, business networking, chapters, events, and partnerships.',
      path: '/faq',
      icon: HelpCircle,
      action: 'Explore FAQs',
      stats: '50 Official FAQs'
    },
    {
      title: 'Member Portal & Login',
      badge: 'EXCLUSIVE ACCESS',
      desc: 'Secure portal for registered BOC members to pass referrals, track synergies, and connect.',
      path: '/login',
      icon: LogIn,
      action: 'Access Portal',
      stats: 'Members Only'
    },
  ];

  return (
    <main className="flex-grow flex flex-col items-center justify-center bg-[#020712] w-full">
      {/* 1. Hero Showcase */}
      <BOCHero onOpenJoinModal={onOpenJoinModal} />

      {/* 2. Why Business Owner's Circle? */}
      <BOCWhyBOC onOpenJoinModal={onOpenJoinModal} />

      {/* 3. How It Works — The BOC Journey */}
      <BOCHowItWorks onOpenJoinModal={onOpenJoinModal} />

      {/* 4. Executive Platform Modules Directory */}
      <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-[#020712] via-[#040E1E] to-[#020712] relative overflow-hidden border-t border-[#D4AF37]/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172C] border border-[#D4AF37]/60 text-[#F9D678] text-[11px] font-cinzel font-bold tracking-[0.25em] uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-[#F9D678]" />
              <span>EXPLORE PLATFORM MODULES</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
              Everything You Need to <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#F5C75D] bg-clip-text text-transparent">Scale & Collaborate</span>
            </h2>
            
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Navigate seamlessly across all dedicated platform modules. Click on any section below or use the top navigation menu to access full directories, chapter conclaves, and membership services.
            </p>
          </div>

          {/* 8 Modules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {portalModules.map((module, idx) => {
              const Icon = module.icon;
              return (
                <Link
                  key={idx}
                  to={module.path}
                  className="group relative rounded-2xl bg-gradient-to-b from-[#07182E] to-[#030B17] border border-[#D4AF37]/30 hover:border-[#F9D678] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)] overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#D4AF37]/20 transition-all" />

                  <div>
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#092244] border border-[#D4AF37]/50 text-[#F9D678] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-[#F9D678] transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-cinzel font-bold tracking-widest uppercase bg-[#D4AF37]/15 text-[#F9D678] border border-[#D4AF37]/30">
                        {module.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-cinzel font-bold text-lg sm:text-xl text-white group-hover:text-[#F9D678] transition-colors mb-2">
                      {module.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {module.desc}
                    </p>
                  </div>

                  {/* Footer Action & Stat */}
                  <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-semibold text-[#DFC688]">
                      {module.stats}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-cinzel font-bold text-[#F9D678] group-hover:text-white transition-colors">
                      <span>{module.action}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Join BOC Today CTA */}
      <BOCJoinToday onOpenJoinModal={onOpenJoinModal} />
    </main>
  );
}
