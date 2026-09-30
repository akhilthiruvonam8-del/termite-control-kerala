import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  CheckCircle2, 
  Scale, 
  Phone, 
  Mail, 
  Building2 
} from 'lucide-react';

export default function PrivacyPage({ onOpenJoinModal }) {
  const sections = [
    {
      title: '1. INTRODUCTION & SCOPE',
      content: `BOC – Business Owner’s Circle ("BOC", "we", "our", or "us") is a professional business community dedicated to connecting verified entrepreneurs, founders, and business owners. We respect your personal privacy and are committed to protecting the business and personal data you share with us.

This Privacy Policy applies to all applicants, registered members, guests attending BOC conclaves, and visitors to our website (business-owners-circle-kochi.vercel.app) and official communication channels in India.`
    },
    {
      title: '2. INFORMATION WE COLLECT',
      content: `When you apply for membership, register for a conclave, or participate in BOC activities, we collect:
• Applicant Profile Data: Full Name, Designation / Role (Founder, CEO, Director, Partner, Proprietor), and identity verification credentials.
• Business Entity Information: Business Name, Registered Enterprise Address, City / District, Primary Industry Category, GSTIN / Business Registration number, and Website URL.
• Contact Details: Direct Mobile Number, WhatsApp Number for circle updates, and Email Address.
• Application & Consent Logs: Exact timestamp of application submission, consent declaration, accepted Terms & Conditions version, and digital confirmations.
• Referral & Activity Records: Chapter attendance logs, peer referral records, and member dashboard interactions.`
    },
    {
      title: '3. PURPOSE OF PROCESSING',
      content: `We collect and process your information exclusively for legitimate business community operations:
• Processing and vetting executive membership applications against our strict Category Exclusivity charter.
• Administering regional chapters (Kochi, Thrissur, Kozhikode, Thiruvananthapuram, Kottayam, Kollam, Madras, etc.).
• Facilitating verified B2B referrals, member-to-member introductions, and partnership syndicates.
• Publishing verified business credentials in the BOC Executive Member Directory for peer networking.
• Sending official conclave schedules, category availability alerts, and executive circulars via WhatsApp, SMS, Phone, and Email.
• Fulfilling statutory and legal compliance obligations under applicable Indian laws.`
    },
    {
      title: '4. MEMBER DIRECTORY VISIBILITY & CONSENT',
      content: `BOC operates on transparency and mutual commercial trust:
• Approved members' verified professional details (Name, Company, Industry Category, Chapter, and approved contact links) are displayed in the BOC Member Directory and Member Dashboard.
• We strictly enforce Section 4 & Section 13 of our Terms: Members are prohibited from scraping, mass-exporting, selling, or spamming fellow members' contact details.
• Any applicant may specify communication preferences or request restricted directory display for sensitive corporate divisions.`
    },
    {
      title: '5. COMMUNICATIONS & NOTIFICATIONS',
      content: `By applying to BOC, you consent to receive direct business communications via:
• Official WhatsApp announcements from the BOC Secretariat (+91 90200 40009).
• Direct phone calls for category verification and admissions committee interviews.
• Email digests and official receipts from mailboc@yahoo.com.
• Emergency schedule updates for breakfast conclaves and chapter meetings.

Members may update their contact preferences or opt out of promotional broadcasts at any time, while essential administrative notifications regarding active membership remain mandatory.`
    },
    {
      title: '6. ZERO THIRD-PARTY DATA SELLING',
      content: `We value peer confidentiality above all else:
• BOC DOES NOT sell, rent, lease, or trade member personal information or business databases to commercial marketing agencies, third-party advertisers, or telemarketers.
• Information is only shared with authorized service infrastructure partners (such as secure hosting providers and transactional SMS/email relays) bound by strict confidentiality covenants.`
    },
    {
      title: '7. DATA SECURITY & STORAGE SAFEGUARDS',
      content: `We employ enterprise-grade administrative, technical, and physical safeguards:
• Secure cloud hosting environments with TLS encryption for all data in transit.
• Role-based administrative access restricted exclusively to the BOC Secretariat and Admissions Committee.
• Routine security reviews and regular backup protocols to prevent unauthorized access, alteration, or disclosure.`
    },
    {
      title: '8. STATUTORY DISCLOSURES UNDER INDIAN LAW',
      content: `BOC will disclose information only when strictly mandated by competent legal authorities, court orders, law enforcement investigations, or regulatory requirements under the Information Technology Act 2000, Digital Personal Data Protection Act (DPDP Act) 2023, and applicable Indian jurisprudence.`
    },
    {
      title: '9. RETENTION & DATA DELETION RIGHTS',
      content: `Members hold full rights regarding their submitted information:
• Right of Access & Correction: You may review and update your business category, address, or contact details at any time via the Member Portal.
• Right of Erasure: Upon voluntary resignation or termination of membership, you may request permanent archiving or deletion of your public directory profile, subject to retention of transaction and tax records required by Indian law.`
    },
    {
      title: '10. GRIEVANCE OFFICER & SECRETARIAT CONTACT',
      content: `For any privacy inquiries, data correction requests, or policy clarifications, please contact the BOC Secretariat:

BOC Secretariat & Grievance Redressal
Email: mailboc@yahoo.com
Phone / WhatsApp: +91 90200 40009
Operating Base: Kochi, Kerala, India`
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
          <span className="text-[#F9D678]">Privacy Policy</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172C] border border-[#D4AF37]/60 text-[#F9D678] text-xs font-cinzel font-bold tracking-[0.25em] uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Lock className="w-3.5 h-3.5 text-[#F9D678]" />
            <span>CONFIDENTIALITY & DATA PROTECTION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            BOC Official <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#F5C75D] bg-clip-text text-transparent">Privacy Policy</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            At Business Owner’s Circle, we hold your business confidentiality, identity integrity, and contact privacy with uncompromising executive standards.
          </p>

          <div className="p-4 rounded-2xl bg-[#051329] border border-[#D4AF37]/40 text-xs sm:text-sm text-[#F9D678] font-medium leading-relaxed max-w-2xl mx-auto">
            Last Updated: September 2026 • Policy Version 1.0 (DPDP Act & Indian Jurisprudence Compliant)
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
            className="p-2.5 rounded-xl bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-[11px] uppercase tracking-wider shadow-md"
          >
            Privacy Policy
          </Link>
          <Link
            to="/refund-policy"
            className="p-2.5 rounded-xl bg-[#051329] hover:bg-[#0E2849] border border-[#D4AF37]/30 text-slate-300 hover:text-[#F9D678] font-cinzel font-bold text-[11px] uppercase tracking-wider transition-colors"
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
            Ready to Join a Trusted Business Community?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Lock your category exclusivity today. Your personal and business details are handled with complete confidentiality.
          </p>
          <button
            onClick={onOpenJoinModal}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all cursor-pointer"
          >
            Apply for BOC Membership →
          </button>
        </div>

      </div>
    </div>
  );
}
