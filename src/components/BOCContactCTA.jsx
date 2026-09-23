import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

export default function BOCContactCTA({ onOpenJoinModal }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#030917] text-white border-t border-[#C9A227]/20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* GRAND FINAL CTA BANNER */}
        <div className="rounded-3xl p-8 lg:p-14 bg-gradient-to-r from-[#061838] via-[#041126] to-[#061838] border-2 border-[#FFE27A]/50 shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-center relative overflow-hidden mb-20">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#FFE27A]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#FFE27A]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="text-[11px] font-black tracking-[0.28em] text-[#FFE27A] uppercase">
              YOUR BUSINESS CAN GROW WITH THE RIGHT CIRCLE
            </span>

            <h2 className="text-3xl sm:text-5xl font-cinzel font-black text-white tracking-tight leading-tight">
              Meet the Right People. Create the Right Connections. Share Opportunities.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              REFER • COLLABORATE • SUPPORT • GROW
              <br />
              <strong className="text-[#FFE27A]">BUSINESS OWNER’S CIRCLE — Kochi, Kerala</strong>
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenJoinModal}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F7E7A9] via-[#E5C45A] to-[#C9A227] text-[#041126] font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_25px_rgba(229,196,90,0.55)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>JOIN THE CIRCLE TODAY</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* CONTACT SECTION 2-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-black tracking-widest text-[#FFE27A] uppercase">
                GET IN TOUCH
              </span>
              <h3 className="text-3xl font-cinzel font-black text-white mt-1">
                Let’s Build Your Business Circle
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Have questions regarding the Kochi Chapter admissions, category reservations, or weekly meetings? Our Secretariat is ready to assist you.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <div className="p-4 rounded-2xl bg-[#06142B]/90 border border-[#C9A227]/25 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#071B3A] border border-[#FFE27A] flex items-center justify-center text-[#FFE27A] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Chapter Hotline</div>
                  <a href="tel:+919020040009" className="text-sm font-bold text-white hover:text-[#FFE27A] transition-colors">
                    +91 90200 40009
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="p-4 rounded-2xl bg-[#06142B]/90 border border-[#C9A227]/25 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#071B3A] border border-[#FFE27A] flex items-center justify-center text-[#FFE27A] flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">WhatsApp Membership Concierge</div>
                  <a href="https://wa.me/919020040009" target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:text-[#FFE27A] transition-colors">
                    +91 90200 40009 (Quick Chat)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-[#06142B]/90 border border-[#C9A227]/25 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#071B3A] border border-[#FFE27A] flex items-center justify-center text-[#FFE27A] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Official Admissions Desk</div>
                  <a href="mailto:mailboc@yahoo.com" className="text-sm font-bold text-white hover:text-[#FFE27A] transition-colors">
                    mailboc@yahoo.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-[#06142B]/90 border border-[#C9A227]/25 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#071B3A] border border-[#FFE27A] flex items-center justify-center text-[#FFE27A] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Chapter Secretariat</div>
                  <div className="text-xs font-medium text-slate-200 mt-0.5">
                    Level 5, Executive Tower, Infopark Corridor, Kakkanad, Kochi, Kerala – 682042
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#06142B]/95 border-2 border-[#C9A227]/35 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-xl font-cinzel font-bold text-white">
                    Send an Inquiry to the Kochi Secretariat
                  </h4>
                  <p className="text-xs text-slate-300">
                    Our team will contact you within 24 hours regarding chapter seats and guest passes.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Varma"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-[#030A18] border border-[#C9A227]/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFE27A]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        Business / Company *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Varma Logistics"
                        value={contactForm.business}
                        onChange={(e) => setContactForm({ ...contactForm, business: e.target.value })}
                        className="w-full bg-[#030A18] border border-[#C9A227]/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFE27A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 90200 40009"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full bg-[#030A18] border border-[#C9A227]/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFE27A]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="mailboc@yahoo.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-[#030A18] border border-[#C9A227]/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFE27A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                      Inquiry / Category Interest
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Tell us about your industry and what you are looking for in the Circle..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-[#030A18] border border-[#C9A227]/30 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#FFE27A]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F7E7A9] via-[#E5C45A] to-[#C9A227] text-[#041126] font-extrabold text-xs uppercase tracking-wider shadow-gold-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE TO SECRETARIAT</span>
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-[#041126] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h4 className="text-2xl font-cinzel font-bold text-white">
                    Thank You, {contactForm.name}!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been logged with the Kochi Chapter Admissions Lead. We will be in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2 rounded-full border border-[#C9A227] text-xs font-bold text-[#FFE27A]"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
