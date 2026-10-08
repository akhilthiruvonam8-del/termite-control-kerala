import React, { useState } from 'react';
import {
  Phone,
  PhoneCall,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Send,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function KochiContactSection({ onOpenInspectionModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Palarivattom / Kochi',
    service: 'Termite Control & Treatment',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const waText = `Hi Eco Pest India, I would like to book a free inspection.\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nService: ${formData.service}${formData.message ? `\nNote: ${formData.message}` : ''}`;
    window.open(`https://wa.me/919020040009?text=${encodeURIComponent(waText)}`, '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 84;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* =================================================================== */}
      {/* CONTACT US SECTION (#contact)                                       */}
      {/* =================================================================== */}
      <section
        id="contact"
        className="relative py-16 sm:py-24 bg-gradient-to-b from-[#02120b] via-[#03180f] to-[#010906] text-white border-t border-emerald-900/50 overflow-hidden"
      >
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest mb-3 shadow-md">
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>24/7 Kochi Customer Support &amp; Head Office</span>
            </div>

            <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Contact <span className="bg-gradient-to-r from-[#FFF5B8] via-[#F5C042] to-[#D49319] bg-clip-text text-transparent">Eco Pest India</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Reach out to our Palarivattom, Kochi office for same-day pest &amp; termite inspection, odorless treatment quotes, or 10-year warranty support across Ernakulam.
            </p>
          </div>

          {/* Main Grid: Left Contact Details + Right Quick Inspection Booking Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* LEFT COLUMN: Official Phone Numbers, WhatsApp Us, Email & Palarivattom Office Address */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              
              {/* 1. Primary & Secondary Phone Numbers Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-emerald-950/60 border border-emerald-500/30 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300 font-bold mb-3">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Direct Helpline Numbers (24/7)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Phone 1: +91 90200 40009 */}
                  <a
                    href="tel:+919020040009"
                    onClick={(e) => { e.preventDefault(); handlePhoneClick('contact_primary'); }}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-gradient-to-r from-[#FFE58F] via-[#F5C042] to-[#D49319] text-slate-950 font-black shadow-[0_6px_20px_rgba(245,192,66,0.35)] hover:brightness-110 active:scale-98 transition group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-950/15 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5 text-slate-950" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-900 font-bold">
                        Primary Hotline
                      </span>
                      <span className="text-base sm:text-lg font-extrabold tracking-tight">
                        +91 90200 40009
                      </span>
                    </div>
                  </a>

                  {/* Phone 2: +91 90204 00009 */}
                  <a
                    href="tel:+919020400009"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-900/80 hover:bg-emerald-800/90 border border-emerald-400/40 text-white font-bold shadow-md active:scale-98 transition group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center shrink-0 text-amber-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-bold">
                        Support Line 2
                      </span>
                      <span className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                        +91 90204 00009
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* 2. WhatsApp Us & Official Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* WhatsApp Us Button Card */}
                <button
                  type="button"
                  onClick={() => handleWhatsAppClick('contact_whatsapp_card', { location: 'Kochi', message: 'Hi Eco Pest India, I would like to book a free pest inspection in Kochi.' })}
                  className="w-full p-5 rounded-3xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] flex items-center gap-3.5 transition-all hover:-translate-y-0.5 active:scale-98 cursor-pointer text-left group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-black/15 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 fill-white text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-white/90 font-bold">
                      Instant Chat
                    </span>
                    <span className="text-lg sm:text-xl font-black tracking-tight flex items-center gap-1.5">
                      <span>WhatsApp Us</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="block text-[11px] text-white/90 mt-0.5 font-medium">
                      +91 90200 40009
                    </span>
                  </div>
                </button>

                {/* Email Us Card: ecopestindia@gmail.com */}
                <a
                  href="mailto:ecopestindia@gmail.com"
                  className="w-full p-5 rounded-3xl bg-emerald-950/70 hover:bg-emerald-900/75 border border-emerald-500/35 hover:border-amber-400/60 text-white shadow-xl flex items-center gap-3.5 transition-all hover:-translate-y-0.5 text-left group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-900/90 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold">
                      Official Email ID
                    </span>
                    <span className="block text-sm sm:text-base font-extrabold text-white group-hover:text-amber-300 transition-colors truncate">
                      ecopestindia@gmail.com
                    </span>
                    <span className="block text-[11px] text-slate-300 mt-0.5">
                      24/7 Quotation &amp; Support Desk
                    </span>
                  </div>
                </a>

              </div>

              {/* 3. Kochi Office Address Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-emerald-950/70 border-2 border-amber-400/45 shadow-xl space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md mt-0.5">
                    <MapPin className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-bold block">
                      Kochi Corporate Office Address
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-white mt-0.5">
                      Eco Pest India — Palarivattom, Kochi
                    </h3>
                    <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed mt-1">
                      3rd Floor, Safa complex, Kayath Ln, near Hi-tech Lab, Palarivattom, Kochi - 682025
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-emerald-800/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Mon – Sun: 7:00 AM – 10:00 PM (24/7 Emergency Support)</span>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3rd+Floor+Safa+complex+Kayath+Ln+near+Hi-tech+Lab+Palarivattom+Kochi+682025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 underline underline-offset-4"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Fast Free Inspection Booking Form */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#041f14] to-[#02100a] border-2 border-emerald-500/40 shadow-2xl">
                <div className="mb-5 text-left">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-bold">
                    FREE SITE SURVEY &amp; QUOTATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-cinzel font-black text-white mt-1">
                    Book Your Free Inspection
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Fill out your details below or call <strong className="text-amber-300">+91 90200 40009</strong> / <strong className="text-amber-300">+91 90204 00009</strong> for immediate same-day dispatch.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-950/90 border border-emerald-400/50 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Request Sent Successfully!</h4>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Our Palarivattom Kochi team will contact you shortly on <strong className="text-amber-300">{formData.phone}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-full bg-emerald-800 text-white text-xs font-bold hover:bg-emerald-700 transition cursor-pointer"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-200 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-emerald-700/60 focus:border-amber-400 text-white text-sm placeholder-slate-400 focus:outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-200 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98470 12345"
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-emerald-700/60 focus:border-amber-400 text-white text-sm placeholder-slate-400 focus:outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-200 mb-1.5">
                          Your Location in Kochi
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Palarivattom, Kakkanad, Edappally"
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-emerald-700/60 focus:border-amber-400 text-white text-sm placeholder-slate-400 focus:outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-200 mb-1.5">
                          Select Service Needed
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-3 rounded-xl bg-black/50 border border-emerald-700/60 focus:border-amber-400 text-white text-sm focus:outline-none transition"
                        >
                          <option value="Termite Control & Treatment">Termite Control &amp; Treatment</option>
                          <option value="Anti Termite Treatment">Anti Termite Treatment</option>
                          <option value="Pre Construction Anti Termite Treatment">Pre Construction Anti Termite Treatment</option>
                          <option value="Post Construction Anti Termite Treatment">Post Construction Anti Termite Treatment</option>
                          <option value="White Ants Eradication">White Ants Eradication</option>
                          <option value="Cockroach Control">Cockroach Control</option>
                          <option value="Rodent & Rat Control">Rodent &amp; Rat Control</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1.5">
                        Message / Property Details (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention villa, apartment, office, or preferred inspection time..."
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-emerald-700/60 focus:border-amber-400 text-white text-sm placeholder-slate-400 focus:outline-none transition"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#FFE58F] via-[#F5C042] to-[#D49319] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(245,192,66,0.45)] hover:brightness-110 active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit &amp; Connect via WhatsApp</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-300 pt-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>100% Odorless • Child &amp; Pet Safe • IS:6313 Certified</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================== */}
      {/* EXECUTIVE FOOTER                                                    */}
      {/* =================================================================== */}
      <footer className="bg-[#010805] text-slate-300 text-xs pt-12 pb-10 border-t border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-emerald-900/40 text-left">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-3.5">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-amber-400 bg-white p-1.5 flex items-center justify-center shadow-md shrink-0">
                  <img
                    src="/images/eco-pest-india-logo.png"
                    alt="Eco Pest India Official Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-cinzel font-black text-white">
                    ECO PEST <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">INDIA</span>
                  </h3>
                  <p className="text-[11px] font-semibold text-emerald-300">Safe Home, Healthy Life</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                Kochi’s trusted termite, cockroach, and rodent management specialists. 100% odorless, child &amp; pet-safe treatments backed by our 10-Year Warranty Bond.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-2.5">
              <h4 className="text-xs font-cinzel font-bold uppercase tracking-wider text-amber-300">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-amber-300 transition cursor-pointer">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-amber-300 transition cursor-pointer">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-amber-300 transition cursor-pointer">Services</button></li>
                <li><button onClick={() => scrollToSection('locations')} className="hover:text-amber-300 transition cursor-pointer">Locations</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-amber-300 transition cursor-pointer">FAQ</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-amber-300 transition cursor-pointer">Contact Us</button></li>
              </ul>
            </div>

            {/* Core Services */}
            <div className="lg:col-span-3 space-y-2.5">
              <h4 className="text-xs font-cinzel font-bold uppercase tracking-wider text-amber-300">
                Core Services
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>Termite Control &amp; Termite Treatment</li>
                <li>Anti Termite Treatment &amp; Control</li>
                <li>Pre &amp; Post Construction Anti Termite</li>
                <li>White Ants Eradication</li>
                <li>Rodent Management &amp; Rat Control</li>
                <li>Odorless Cockroach Control</li>
              </ul>
            </div>

            {/* Official Contact Info */}
            <div className="lg:col-span-3 space-y-2.5">
              <h4 className="text-xs font-cinzel font-bold uppercase tracking-wider text-amber-300">
                Contact Us
              </h4>
              <div className="space-y-2 text-xs">
                <a href="tel:+919020040009" className="flex items-center gap-2 text-white hover:text-amber-300 font-bold">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>+91 90200 40009</span>
                </a>
                <a href="tel:+919020400009" className="flex items-center gap-2 text-white hover:text-amber-300 font-bold">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>+91 90204 00009</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleWhatsAppClick('footer_whatsapp', { location: 'Kochi' })}
                  className="flex items-center gap-2 text-[#25D366] hover:underline font-bold cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span>WhatsApp Us</span>
                </button>
                <a href="mailto:ecopestindia@gmail.com" className="flex items-center gap-2 text-amber-300 hover:underline font-semibold">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>ecopestindia@gmail.com</span>
                </a>
                <div className="flex items-start gap-2 text-slate-300 pt-1">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>3rd Floor, Safa complex, Kayath Ln, near Hi-tech Lab, Palarivattom, Kochi - 682025</span>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
            <p>© {new Date().getFullYear()} Eco Pest India — Safe Home, Healthy Life. All Rights Reserved.</p>
            <p className="text-emerald-400 font-mono">Palarivattom, Kochi - 682025 • IS:6313 Certified</p>
          </div>
        </div>
      </footer>
    </>
  );
}
