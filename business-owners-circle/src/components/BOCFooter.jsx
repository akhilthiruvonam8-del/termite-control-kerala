import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ExternalLink,
  Building2,
  Calendar
} from 'lucide-react';
import BOCLogo from './BOCLogo';

/**
 * Business Owner's Circle (BOC) — Official Corporate Footer
 * Features Kochi Regional Address, Chapter Hubs, Admissions Desk, and Brand Values.
 */
export default function BOCFooter({ isLight = false, onOpenJoinModal }) {
  return (
    <footer id="footer" className={`w-full border-t transition-colors duration-700 relative overflow-hidden ${
      isLight 
        ? 'bg-[#F0F3F8] border-[#C9A227]/30 text-slate-800' 
        : 'bg-[#020A17] border-[#C9A227]/25 text-slate-300'
    }`}>
      
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-60"></div>
      
      {/* Background Decorative Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[250px] rounded-full blur-[140px] ${
          isLight ? 'bg-[#C9A227]/10' : 'bg-[#071B3A]/80'
        }`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Top Callout Strip / Action Banner */}
        <div className={`rounded-2xl p-6 sm:p-8 mb-12 border transition-all ${
          isLight 
            ? 'bg-white/90 border-[#C9A227]/40 shadow-lg' 
            : 'bg-[#071B3A]/80 border-[#C9A227]/30 shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl'
        }`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-bold tracking-widest uppercase text-[#E5C45A] bg-[#041126]/80 border-[#C9A227]/40">
                <Sparkles className="w-3.5 h-3.5" />
                <span>KOCHI FOUNDING CHAPTER • 2026 ADMISSIONS</span>
              </div>
              <h3 className={`font-serif-luxury text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isLight ? 'text-[#071B3A]' : 'text-white'
              }`}>
                Ready to Claim Your <span className="text-gold-gradient">Industry Seat</span> in Kochi?
              </h3>
              <p className={`text-xs sm:text-sm max-w-2xl ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                Only 1 business representative per industry category is accepted to ensure zero internal competition and maximum referral velocity.
              </p>
            </div>

            <button
              onClick={onOpenJoinModal}
              className="flex-shrink-0 flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E5C45A] via-[#C9A227] to-[#B08C1E] text-[#041126] font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-gold-md hover:brightness-110 active:scale-95 transition-all"
            >
              <span>APPLY FOR MEMBERSHIP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#C9A227]/20">
          
          {/* Column 1: Brand & Mission (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <BOCLogo size="md" isLight={isLight} />
            
            <div className={`text-xs sm:text-[13px] font-black tracking-[0.16em] uppercase flex items-center gap-1.5 pt-1 ${
              isLight ? 'text-[#B08C1E]' : 'text-[#E5C45A]'
            }`}>
              <span>REFER</span> • <span>COLLABORATE</span> • <span>SUPPORT</span> • <span>GROW</span>
            </div>

            <p className={`text-xs leading-relaxed font-light ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              Business Owner’s Circle is a professional business community connecting entrepreneurs, business owners and professionals to create meaningful business opportunities through referrals, collaboration and mutual support.
            </p>

            <div className={`inline-flex items-center gap-2 p-2.5 rounded-xl border text-[11px] ${
              isLight ? 'bg-white border-[#C9A227]/30 text-slate-700' : 'bg-[#041126]/90 border-[#C9A227]/30 text-slate-300'
            }`}>
              <ShieldCheck className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
              <span><strong>Exclusive Policy:</strong> 1 Seat Per Business Sector</span>
            </div>
          </div>

          {/* Column 2: Official Address & Chapter Secretariat (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-black tracking-widest uppercase border-b pb-2 ${
              isLight ? 'text-[#071B3A] border-[#C9A227]/30' : 'text-white border-[#C9A227]/30'
            }`}>
              CHAPTER SECRETARIAT & VENUE
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                <div>
                  <div className={`font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Kochi Regional Chapter Hub
                  </div>
                  <div className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                    Level 5, Executive Tower, Infopark Corridor,
                    <br />Kakkanad, Kochi, Kerala – 682042
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Building2 className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                <div>
                  <div className={`font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Alternative Meeting Hubs
                  </div>
                  <div className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                    Panampilly Nagar Club • Marine Drive CBD
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                <div>
                  <div className={`font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Weekly Mastermind Timing
                  </div>
                  <div className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                    Every Wednesday: 7:30 AM – 9:30 AM (Breakfast Meeting)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Direct Admissions Desk & Contact (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-black tracking-widest uppercase border-b pb-2 ${
              isLight ? 'text-[#071B3A] border-[#C9A227]/30' : 'text-white border-[#C9A227]/30'
            }`}>
              ADMISSIONS & INQUIRIES
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                <div>
                  <div className={`font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Chapter Admissions Helpline
                  </div>
                  <a href="tel:+914842800000" className="hover:text-[#E5C45A] transition-colors block">
                    +91 (0484) 280-BOC-IN
                  </a>
                  <a href="tel:+919847000000" className="hover:text-[#E5C45A] transition-colors block text-slate-400">
                    +91 98470 XXXXX (Admissions Lead)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                <div>
                  <div className={`font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Official Email
                  </div>
                  <a href="mailto:admissions@businessownerscircle.com" className="hover:text-[#E5C45A] transition-colors break-all">
                    admissions@businessownerscircle.com
                  </a>
                </div>
              </div>

              <div className={`p-3 rounded-xl border mt-2 ${
                isLight ? 'bg-white border-[#C9A227]/30' : 'bg-[#041126]/90 border-[#C9A227]/25'
              }`}>
                <div className={`text-[11px] font-bold ${isLight ? 'text-[#B08C1E]' : 'text-[#E5C45A]'}`}>
                  Vetted Entry Protocol
                </div>
                <div className={`text-[10px] mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  Applicants undergo cross-verification by the Membership Committee before seat allocation.
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Key Chapters & Sectors (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className={`text-xs font-black tracking-widest uppercase border-b pb-2 ${
              isLight ? 'text-[#071B3A] border-[#C9A227]/30' : 'text-white border-[#C9A227]/30'
            }`}>
              QUICK LINKS
            </h4>

            <ul className="space-y-1.5 text-xs">
              {['Home', 'About BOC', 'How It Works', 'Membership Criteria', 'Kochi Chapters', 'Member Login', 'Code of Conduct'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={(e) => {
                      if (link.includes('Membership') || link.includes('Login')) {
                        e.preventDefault();
                        onOpenJoinModal();
                      }
                    }}
                    className={`hover:text-[#E5C45A] transition-colors flex items-center gap-1 ${
                      isLight ? 'text-slate-600' : 'text-slate-400'
                    }`}
                  >
                    <span className="text-[#C9A227]/60">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
            <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
              © {new Date().getFullYear()} <strong className={isLight ? 'text-slate-900' : 'text-white'}>Business Owner’s Circle (BOC)</strong> – Kochi Chapter. All Rights Reserved.
            </span>
          </div>

          <div className="flex items-center gap-3 font-semibold">
            <span className={isLight ? 'text-[#B08C1E]' : 'text-[#E5C45A]'}>
              REFER • COLLABORATE • SUPPORT • GROW
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className={`tracking-wider ${isLight ? 'text-slate-700' : 'text-slate-300'} hidden sm:inline`}>
              EMPOWER TOGETHER.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
