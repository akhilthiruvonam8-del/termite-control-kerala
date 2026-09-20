import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  ArrowRight, 
  Check, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Youtube,
  Send,
  Sparkles
} from 'lucide-react';
import bocLogoPng from '../assets/boc-logo.png';
import footerSkylineImg from '../assets/boc-footer-skyline.png';
import footerRibbonsImg from '../assets/boc-footer-ribbons.png';

/**
 * Custom X (Twitter) Icon
 */
function XIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/**
 * BOCFooter — Executive Master Grand Footer
 * Exact 1:1 Recreation of Master Reference Graphic (media_1789907540023.png)
 */
export default function BOCFooter({ onOpenJoinModal }) {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#020713] text-white overflow-hidden select-none border-t border-[#D4AF37]/30">
      
      {/* Background World Dot Grid Map Accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Ambient Lighting Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -mt-32" />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#B57D2B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 z-10">
        
        {/* ===================================================================== */}
        {/* 5 MASTER COLUMNS (media_1789907540023.png)                            */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-14 border-b border-[#D4AF37]/30">
          
          {/* =================================================================== */}
          {/* COLUMN 1: BRAND IDENTITY & SOCIALS (3 Cols)                         */}
          {/* =================================================================== */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              {/* Brand Logo & Name */}
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={bocLogoPng} 
                  alt="BOC Logo" 
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                />
                <div className="h-9 w-[1.5px] bg-[#D4AF37]" />
                <div className="flex flex-col text-left font-cinzel font-bold text-[9px] sm:text-[10px] tracking-[0.22em] leading-tight text-white">
                  <span className="text-[#F9D678]">BUSINESS</span>
                  <span>OPPORTUNITIES</span>
                  <span className="text-slate-300">CONNECTIONS</span>
                </div>
              </div>

              {/* Tagline */}
              <div className="text-[#F9D678] font-cinzel text-xs tracking-[0.25em] font-semibold mb-4">
                CONNECT &nbsp;|&nbsp; COLLABORATE &nbsp;|&nbsp; GROW
              </div>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed mb-6 font-normal max-w-sm">
                BOC is a global business networking platform that connects entrepreneurs, professionals and changemakers to create meaningful opportunities and lasting partnerships.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-2.5 mb-6">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full border border-[#D4AF37]/60 hover:border-[#F9D678] text-[#F9D678] hover:text-white hover:bg-[#D4AF37]/20 flex items-center justify-center transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full border border-[#D4AF37]/60 hover:border-[#F9D678] text-[#F9D678] hover:text-white hover:bg-[#D4AF37]/20 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full border border-[#D4AF37]/60 hover:border-[#F9D678] text-[#F9D678] hover:text-white hover:bg-[#D4AF37]/20 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full border border-[#D4AF37]/60 hover:border-[#F9D678] text-[#F9D678] hover:text-white hover:bg-[#D4AF37]/20 flex items-center justify-center transition-all shadow-sm"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full border border-[#D4AF37]/60 hover:border-[#F9D678] text-[#F9D678] hover:text-white hover:bg-[#D4AF37]/20 flex items-center justify-center transition-all shadow-sm"
                  aria-label="X"
                >
                  <XIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Script: "Let's Stay Connected" */}
            <div className="pt-2">
              <span className="font-serif italic font-bold text-xl sm:text-2xl text-[#F9D678] tracking-wide block">
                Let's Stay Connected
              </span>
              <svg className="w-32 h-2 text-[#D4AF37] mt-1" viewBox="0 0 130 8" fill="none">
                <path d="M2 6C30 1 95 1 128 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </div>
          </div>


          {/* =================================================================== */}
          {/* COLUMN 2: QUICK LINKS (2 Cols)                                      */}
          {/* =================================================================== */}
          <div className="lg:col-span-2 md:border-l md:border-[#D4AF37]/30 md:pl-6 lg:pl-8">
            <h4 className="font-cinzel font-bold text-xs sm:text-[13px] text-[#F9D678] tracking-[0.2em] uppercase mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-300">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-[#F9D678] transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                  <span>Home</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-boc')} className="hover:text-[#F9D678] transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                  <span>About Us</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('members')} className="hover:text-[#F9D678] transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                  <span>Our Community</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('categories')} className="hover:text-[#F9D678] transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                  <span>Business Connections</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('success-stories')} className="hover:text-[#F9D678] transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                  <span>Success Stories</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('global')} className="hover:text-[#F9D678] transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                  <span>Global Expansion</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('success-stories')} className="hover:text-[#F9D678] transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                  <span>Testimonials</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-[#F9D678] transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                  <span>FAQ</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </li>
            </ul>
          </div>


          {/* =================================================================== */}
          {/* COLUMN 3: FOR MEMBERS (2 Cols)                                      */}
          {/* =================================================================== */}
          <div className="lg:col-span-2 md:border-l md:border-[#D4AF37]/30 md:pl-6 lg:pl-8">
            <h4 className="font-cinzel font-bold text-xs sm:text-[13px] text-[#F9D678] tracking-[0.2em] uppercase mb-4">
              FOR MEMBERS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-300">
              <li>
                <button onClick={() => scrollToSection('benefits')} className="hover:text-[#F9D678] transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                  <span>Membership Benefits</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenJoinModal} className="hover:text-[#F9D678] transition-colors flex items-center gap-1.5 group cursor-pointer text-left font-semibold text-white">
                  <span>Join BOC</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('members')} className="hover:text-[#F9D678] transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                  <span>Member Directory</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('events')} className="hover:text-[#F9D678] transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                  <span>Events & Webinars</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('networking')} className="hover:text-[#F9D678] transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                  <span>Networking Opportunities</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenJoinModal} className="hover:text-[#F9D678] transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                  <span>Resources</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenJoinModal} className="hover:text-[#F9D678] transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                  <span>Partner With Us</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </li>
            </ul>
          </div>


          {/* =================================================================== */}
          {/* COLUMN 4: CONTACT US (2 Cols)                                       */}
          {/* =================================================================== */}
          <div className="lg:col-span-2 md:border-l md:border-[#D4AF37]/30 md:pl-6 lg:pl-8">
            <h4 className="font-cinzel font-bold text-xs sm:text-[13px] text-[#F9D678] tracking-[0.2em] uppercase mb-4">
              CONTACT US
            </h4>
            <div className="space-y-3.5 text-xs sm:text-[13px] text-slate-300">
              
              {/* Location */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F9D678] shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <span className="block text-white">Kochi, Kerala</span>
                  <span className="text-slate-400">India</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F9D678] shrink-0" />
                <a href="mailto:mailboc@yahoo.com" className="hover:text-[#F9D678] transition-colors">
                  hello@boc.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F9D678] shrink-0" />
                <a href="tel:+919020040009" className="hover:text-[#F9D678] transition-colors font-medium">
                  +91 90200 40009
                </a>
              </div>

              {/* Website */}
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#F9D678] shrink-0" />
                <span className="text-slate-300">www.boc.com</span>
              </div>

              {/* Follow Us mini bar */}
              <div className="pt-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-cinzel text-slate-400 uppercase tracking-wider">Follow Us</span>
                  <div className="h-[1px] flex-grow bg-[#D4AF37]/40" />
                </div>
                <div className="flex items-center gap-1.5">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full border border-[#D4AF37]/50 text-[#F9D678] hover:bg-[#D4AF37]/20 flex items-center justify-center transition-all">
                    <Linkedin className="w-3 h-3" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full border border-[#D4AF37]/50 text-[#F9D678] hover:bg-[#D4AF37]/20 flex items-center justify-center transition-all">
                    <Instagram className="w-3 h-3" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full border border-[#D4AF37]/50 text-[#F9D678] hover:bg-[#D4AF37]/20 flex items-center justify-center transition-all">
                    <Facebook className="w-3 h-3" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full border border-[#D4AF37]/50 text-[#F9D678] hover:bg-[#D4AF37]/20 flex items-center justify-center transition-all">
                    <Youtube className="w-3 h-3" />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full border border-[#D4AF37]/50 text-[#F9D678] hover:bg-[#D4AF37]/20 flex items-center justify-center transition-all">
                    <XIcon className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>


          {/* =================================================================== */}
          {/* COLUMN 5: STAY UPDATED WITH BOC & SKYLINE (3 Cols)                  */}
          {/* =================================================================== */}
          <div className="lg:col-span-3 md:border-l md:border-[#D4AF37]/30 md:pl-6 lg:pl-8 relative flex flex-col justify-between">
            
            {/* Skyline Backdrop Element in Right Corner */}
            <div className="absolute -top-12 -right-4 w-40 sm:w-48 h-56 pointer-events-none opacity-40 lg:opacity-60 overflow-hidden mix-blend-screen hidden sm:block">
              <img 
                src={footerSkylineImg} 
                alt="Global Skyline" 
                className="w-full h-full object-cover object-right"
              />
            </div>

            <div className="relative z-10">
              {/* Heading */}
              <h4 className="font-serif font-bold text-xl sm:text-2xl leading-tight mb-2">
                <span className="text-white block">Stay Updated</span>
                <span className="text-[#F9D678] block">with BOC</span>
              </h4>

              {/* Subtitle */}
              <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed mb-4 font-normal">
                Get the latest updates, events, opportunities and success stories delivered to your inbox.
              </p>

              {/* Email Form */}
              <form onSubmit={handleSubscribe} className="mb-3">
                <div className="relative flex items-center rounded-full bg-[#05142B] border border-[#D4AF37]/60 shadow-inner overflow-hidden group focus-within:border-[#F9D678] transition-colors">
                  <Mail className="w-4 h-4 text-[#D4AF37] ml-3.5 shrink-0" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full py-2.5 sm:py-3 pl-2.5 pr-12 bg-transparent text-white text-xs sm:text-[13px] placeholder:text-slate-500 focus:outline-none"
                    disabled={subscribed}
                  />
                  <button
                    type="submit"
                    className="absolute right-1 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#F9D678] to-[#D4AF37] hover:from-white hover:to-[#F9D678] text-[#07172C] flex items-center justify-center shadow-md transition-transform active:scale-95 cursor-pointer"
                    aria-label="Subscribe"
                  >
                    {subscribed ? (
                      <Check className="w-4 h-4 text-emerald-800 stroke-[3]" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-[#07172C] stroke-[2.5]" />
                    )}
                  </button>
                </div>
              </form>

              {/* Subscribed Success Message */}
              {subscribed && (
                <div className="text-emerald-400 text-xs font-medium mb-2 flex items-center gap-1.5 animate-fadeIn">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Thank you for subscribing! You're now on our priority list.</span>
                </div>
              )}

              {/* Checkbox Agreement */}
              <label className="flex items-center gap-2 cursor-pointer text-slate-400 text-[11px]">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="rounded border-[#D4AF37] text-[#D4AF37] focus:ring-0 focus:outline-none accent-[#D4AF37]"
                />
                <span>I agree to receive updates from BOC</span>
              </label>
            </div>

          </div>

        </div>


        {/* ===================================================================== */}
        {/* BOTTOM COPYRIGHT BAR & SCRIPT (media_1789907540023.png)               */}
        {/* ===================================================================== */}
        <div className="relative pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left: Copyright */}
          <div className="text-slate-400 text-xs sm:text-[13px]">
            © {new Date().getFullYear()} BOC. All rights reserved.
          </div>

          {/* Right: "More Connections. Bigger Opportunities." Script */}
          <div className="text-center sm:text-right">
            <span className="font-serif italic font-bold text-lg sm:text-xl md:text-2xl text-[#F9D678] tracking-wide block drop-shadow-sm">
              More Connections. Bigger Opportunities.
            </span>
            <svg className="w-48 sm:w-60 h-2.5 text-[#D4AF37] ml-auto mt-0.5" viewBox="0 0 240 10" fill="none">
              <path d="M2 8C60 2 180 2 238 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

        </div>

      </div>

      {/* ===================================================================== */}
      {/* 3D GOLDEN SILK RIBBONS / AMBER WAVE (media_1789907540023.png)         */}
      {/* ===================================================================== */}
      <div className="relative w-full h-16 sm:h-20 pointer-events-none overflow-hidden -mt-4">
        <img 
          src={footerRibbonsImg} 
          alt="Golden Ribbons" 
          className="w-full h-full object-cover object-bottom opacity-85 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020713] via-transparent to-transparent" />
      </div>

    </footer>
  );
}
