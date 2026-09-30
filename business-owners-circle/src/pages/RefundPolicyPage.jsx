import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  RefreshCw, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle,
  Phone, 
  Mail, 
  Scale 
} from 'lucide-react';

export default function RefundPolicyPage({ onOpenJoinModal }) {
  const sections = [
    {
      title: '1. PRE-SCREENING & ADMISSION PROCESSING',
      content: `In accordance with Section 16 of the BOC Membership Terms & Conditions, all applications undergo thorough peer-review and category exclusivity due diligence by the Chapter Admissions Committee.

• Application Pre-Screening: Any nominal administrative fee incurred for credential verification and background verification is non-refundable once vetting commences.
• Transparent Notification: Applicants are clearly notified of all applicable dues prior to any payment transaction.`
    },
    {
      title: '2. REJECTION OR UNAVAILABLE CATEGORY SEAT',
      content: `BOC operates strictly on One Leader Per Category per chapter:
• If an applicant cannot be admitted because their business category has already been locked by an existing verified member in that chapter, the applicant may choose to join a nearby chapter or request an immediate refund.
• Any advance membership fee deposited for an unapproved seat will be refunded 100% via the original payment method within 7 to 10 business banking days.`
    },
    {
      title: '3. CATEGORY EXCLUSIVITY LOCK & ACTIVE MEMBERSHIP',
      content: `Once a membership application is formally approved and inducted into a BOC chapter:
• The member is granted exclusive category protection, barring all direct competitors from joining that chapter.
• Because BOC commits this valuable commercial territory and turns away all other competing inquiries, annual membership and renewal fees are strictly non-refundable once the term begins.`
    },
    {
      title: '4. CONCLAVE & SPECIAL EVENT REGISTRATIONS',
      content: `For regional breakfast conclaves, statewide summits, and special leadership retreats:
• Cancellations received at least 48 hours prior to the event schedule will receive a 100% credit applicable toward any future BOC conclave or event.
• Cancellations within 48 hours or non-attendance ('no-shows') are non-refundable and non-creditable, as venue hospitality, luxury 5-star seating, and catering commitments are finalized in advance.`
    },
    {
      title: '5. VOLUNTARY RESIGNATION / EARLY WITHDRAWAL',
      content: `A member may choose to step down or resign from BOC at any point by giving written notice to the Chapter Director and Secretariat. However, voluntary mid-term departure does not entitle the member to pro-rata or partial refunds of the annual membership fee.`
    },
    {
      title: '6. DISCIPLINARY TERMINATION',
      content: `If a membership is suspended or terminated pursuant to Section 8 (Business Conduct), Section 10 (Criminal Activity & Unlawful Conduct), or Section 17 (Membership Suspension or Termination) of the BOC Terms:
• No refund of any fee, deposit, or dues will be issued.
• The former member forfeits all remaining privileges and community access immediately.`
    },
    {
      title: '7. REFUND CLAIM PROCEDURE & SECRETARIAT CONTACT',
      content: `To submit an eligible refund request or inquire regarding payment status:
• Send an official email to mailboc@yahoo.com containing your Applicant Reference ID, Registered Enterprise Name, and bank transfer transaction details.
• Our finance committee will review and provide a written resolution within 3 business days.

Direct Contact:
BOC Finance & Secretariat
Phone / WhatsApp: +91 90200 40009
Email: mailboc@yahoo.com`
    }
  ];

  return (
    <div className="min-h-screen bg-[#020713] text-white pt-24 sm:pt-28 pb-20 selection:bg-[#D4AF37] selection:text-[#07172C] relative w-full overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#0E2849]/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-400 font-cinzel">
          <Link to="/" className="hover:text-[#F9D678] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#F9D678]">Refund Policy</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172C] border border-[#D4AF37]/60 text-[#F9D678] text-xs font-cinzel font-bold tracking-[0.25em] uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <RefreshCw className="w-3.5 h-3.5 text-[#F9D678]" />
            <span>TRANSPARENT FINANCIAL GUIDELINES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            BOC Refund & <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#F5C75D] bg-clip-text text-transparent">Cancellation Policy</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            Clear, ethical, and equitable principles governing membership pre-screening, chapter seat allocations, renewals, and conclave events.
          </p>

          <div className="p-4 rounded-2xl bg-[#051329] border border-[#D4AF37]/40 text-xs sm:text-sm text-[#F9D678] font-medium leading-relaxed max-w-2xl mx-auto">
            Governed by Section 16 & Section 17 of the BOC Membership Terms & Conditions
          </div>
        </div>

        {/* Policy Quick Switcher Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10 text-center">
          <Link
            to="/terms"
            className="p-2.5 rounded-xl bg-[#051329] hover:bg-[#0E2849] border border-[#D4AF37]/30 text-slate-300 hover:text-[#F9D678] font-cinzel font-bold text-[11px] uppercase tracking-wider transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy"
            className="p-2.5 rounded-xl bg-[#051329] hover:bg-[#0E2849] border border-[#D4AF37]/30 text-slate-300 hover:text-[#F9D678] font-cinzel font-bold text-[11px] uppercase tracking-wider transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/refund-policy"
            className="p-2.5 rounded-xl bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-[11px] uppercase tracking-wider shadow-md"
          >
            Refund Policy
          </Link>
          <Link
            to="/referral-policy"
            className="p-2.5 rounded-xl bg-[#051329] hover:bg-[#0E2849] border border-[#D4AF37]/30 text-slate-300 hover:text-[#F9D678] font-cinzel font-bold text-[11px] uppercase tracking-wider transition-colors"
          >
            Referral Policy
          </Link>
        </div>

        {/* Content Sections */}
        <div className="space-y-6 mb-14">
          {sections.map((sec, idx) => (
            <div 
              key={idx}
              className="bg-[#051329]/90 border border-[#D4AF37]/35 hover:border-[#F9D678]/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-lg"
            >
              <h2 className="font-cinzel font-bold text-sm sm:text-base text-[#F9D678] tracking-wider mb-3 pb-2 border-b border-[#D4AF37]/20">
                {sec.title}
              </h2>
              <div className="text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-normal">
                {sec.content}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-gradient-to-r from-[#071D3E] via-[#0A2752] to-[#05142B] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl text-center space-y-4">
          <ShieldCheck className="w-12 h-12 text-[#F9D678] mx-auto" />
          <h3 className="font-serif font-bold text-2xl text-white">
            100% Protected Membership Inquiries
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Apply with confidence. If your business category cannot be approved in your target chapter, any advance deposit is returned in full.
          </p>
          <button
            onClick={onOpenJoinModal}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all cursor-pointer"
          >
            Submit Application Now →
          </button>
        </div>

      </div>
    </div>
  );
}
