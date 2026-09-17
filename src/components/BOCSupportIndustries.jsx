import React from 'react';
import { 
  HeartHandshake, 
  Cpu, 
  Scale, 
  Building, 
  Palette, 
  Truck, 
  Coffee, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function BOCSupportIndustries({ onOpenJoinModal }) {
  const industries = [
    {
      category: 'TECHNOLOGY & DIGITAL',
      icon: Cpu,
      sectors: ['Custom Software & SaaS', 'Web & Mobile App Development', 'Digital Marketing & SEO', 'Cloud Infrastructure & Cyber Security'],
      seats: '1 Seat Per Specialty'
    },
    {
      category: 'PROFESSIONAL SERVICES',
      icon: Scale,
      sectors: ['Corporate Law & Legal Advisory', 'Chartered Accountants (CA) & Tax', 'Investment & Wealth Management', 'HR & Executive Search'],
      seats: '1 Seat Per Specialty'
    },
    {
      category: 'CONSTRUCTION & PROPERTY',
      icon: Building,
      sectors: ['Architects & Urban Planners', 'Interior Designers & Fitouts', 'Civil Builders & General Contractors', 'Commercial Real Estate Brokers'],
      seats: '1 Seat Per Specialty'
    },
    {
      category: 'MARKETING & CREATIVE',
      icon: Palette,
      sectors: ['Brand Identity & Positioning', 'Commercial Photography & Video', 'PR & Media Relations', 'Event & Exhibition Producers'],
      seats: '1 Seat Per Specialty'
    },
    {
      category: 'BUSINESS SERVICES & SUPPLY',
      icon: Truck,
      sectors: ['Export-Import Logistics & Freight', 'Commercial Insurance Brokers', 'Packaging & Industrial Printing', 'Facility Management & Office Tech'],
      seats: '1 Seat Per Specialty'
    },
    {
      category: 'LIFESTYLE & HEALTHCARE',
      icon: Coffee,
      sectors: ['Specialty Hospitals & Clinics', 'Higher Education & Coaching', 'Luxury Hospitality & Travel', 'Gourmet Food & Retail Brands'],
      seats: '1 Seat Per Specialty'
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#030916] text-white border-t border-[#C9A227]/20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP: BUSINESS SUPPORT HERO STRIP */}
        <div className="rounded-3xl p-8 lg:p-12 bg-gradient-to-r from-[#071E42] via-[#04122B] to-[#071E42] border-2 border-[#C9A227]/30 shadow-[0_15px_50px_rgba(0,0,0,0.7)] text-center relative overflow-hidden mb-20">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#051124] border border-[#FFE27A]/40 text-xs font-extrabold tracking-[0.22em] text-[#FFE27A] uppercase">
              <HeartHandshake className="w-3.5 h-3.5 text-[#FFE27A]" />
              <span>MUTUAL PILLAR OF STRENGTH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFF3C4] to-[#C9A227]">
              “You Don’t Have to Build Alone.”
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Running an enterprise in Kerala comes with unique regulatory, recruitment, and scaling challenges. Inside BOC, members freely exchange battle-tested wisdom, high-level connections, and genuine peer support.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 text-xs text-slate-200">
              <div className="p-3 rounded-xl bg-[#040E1E] border border-white/5">Verified Introductions</div>
              <div className="p-3 rounded-xl bg-[#040E1E] border border-white/5">Peer Mentorship</div>
              <div className="p-3 rounded-xl bg-[#040E1E] border border-white/5">Executive Masterminds</div>
              <div className="p-3 rounded-xl bg-[#040E1E] border border-white/5">Emergency Advisory</div>
            </div>
          </div>
        </div>

        {/* BOTTOM: WHO CAN JOIN & INDUSTRIES */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B3A]/80 border border-[#C9A227]/40 text-xs font-extrabold tracking-[0.22em] text-[#FFE27A] uppercase">
            <Award className="w-3.5 h-3.5 text-[#FFE27A]" />
            <span>EXCLUSIVITY BY DESIGN</span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFF3C4] to-[#C9A227]">
            Diverse Industries. One Unified Circle.
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Designed for Business Owners, Startup Founders, Managing Directors, and Industry Specialists. We operate on a strict category exclusivity rule to protect your seat and guarantee non-compete referral flow.
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const IconComp = ind.icon;
            return (
              <div
                key={ind.category}
                className="rounded-3xl p-7 bg-[#051124]/90 border border-[#C9A227]/25 hover:border-[#FFE27A] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(201,162,39,0.2)] hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#071B3A] border border-[#FFE27A]/50 flex items-center justify-center text-[#FFE27A]">
                      <IconComp className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-[#030914] text-[#FFE27A] border border-[#C9A227]/30">
                      {ind.seats}
                    </span>
                  </div>

                  <h4 className="text-lg font-cinzel font-bold text-white mb-3">
                    {ind.category}
                  </h4>

                  <ul className="space-y-2">
                    {ind.sectors.map((sec) => (
                      <li key={sec} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE27A] flex-shrink-0" />
                        <span>{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={onOpenJoinModal}
                    className="w-full py-2.5 rounded-xl border border-[#C9A227]/50 hover:border-[#FFE27A] text-[11px] font-bold text-[#FFE27A] hover:bg-[#FFE27A] hover:text-[#041126] transition-all uppercase tracking-wider"
                  >
                    Check Seat Availability
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
