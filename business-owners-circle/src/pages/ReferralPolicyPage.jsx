import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Handshake, 
  FileText, 
  CheckCircle2, 
  TrendingUp, 
  HelpCircle,
  Phone, 
  Mail, 
  Scale 
} from 'lucide-react';

export default function ReferralPolicyPage({ onOpenJoinModal }) {
  const sections = [
    {
      title: '1. PURPOSE & PRINCIPLES OF BOC REFERRALS',
      content: `In accordance with Section 2 & Section 4 of the BOC Membership Terms & Conditions, BOC is designed to facilitate high-trust peer connections, business introductions, and mutually beneficial commercial opportunities.

• Warm Introductions: Members refer customers, clients, suppliers, or strategic contacts to fellow verified members in good faith.
• Respect & Dignity: All referrals must be handled professionally, promptly, and with the highest ethical standards.
• No Unsolicited Spamming: Members are strictly prohibited from mass-soliciting or cold-messaging fellow members without prior business relevance.`
    },
    {
      title: '2. NO GUARANTEE OF TRANSACTION OR SALES',
      content: `Pursuant to Section 4 & Section 7 of the BOC Terms:
• A business referral facilitates an introduction; it DOES NOT guarantee that a transaction, contract, or sale will occur.
• Neither BOC nor the referring member guarantees the financial viability, solvency, creditworthiness, or outcome of any referred client.
• Each receiving member remains entirely responsible for assessing customer requirements, pricing, contracts, due diligence, and delivery.`
    },
    {
      title: '3. COMMERCIAL COMMISSION & FINDER FEE AGREEMENTS',
      content: `As established in Section 5 of the BOC Charter:
• BOC facilitates referral-based business opportunities where commercial commissions, finder fees, or success fees may be agreed between members.
• Written Pre-Agreement: Where a referral commission is expected, both parties MUST mutually discuss, clarify, and agree in writing on the specific percentage, calculation method, and payment triggers BEFORE the transaction proceeds.
• Voluntary Commercial Terms: All commission terms are strictly between the participating members unless BOC has launched an official platform syndicate with published commission parameters.`
    },
    {
      title: '4. COMPLIANCE WITH INDIAN COMMERCIAL & TAX LAWS',
      content: `All referral fees and commission distributions must strictly adhere to Indian law:
• Proper Invoicing: Payments must be supported by valid GST tax invoices or legally recognized consultant vouchers.
• Statutory Deductions: Applicable Tax Deducted at Source (TDS) under the Indian Income Tax Act 1961 must be deducted and remitted where mandated.
• Prohibition of Unlawful Transactions: Members may not route unlawful kickbacks, undeclared cash transactions, or prohibited commissions through BOC referrals.`
    },
    {
      title: '5. INDEPENDENT MEMBER RESPONSIBILITY & DUE DILIGENCE',
      content: `Pursuant to Section 6 & Section 18 of the BOC Terms:
• Any contract, purchase, or service agreement is strictly between the members or clients involved.
• BOC is not a guarantor, insurer, or party to member-to-member transactions.
• Members must execute their own commercial contracts, service level agreements (SLAs), and payment terms.`
    },
    {
      title: '6. STRICT CONFIDENTIALITY & NON-CIRCUMVENTION',
      content: `Members who receive qualified client introductions agree:
• Not to bypass or circumvent the referring member to avoid an agreed commission.
• Not to disclose, leak, or sell proprietary client requirements or trade secrets to competitors outside the BOC circle.
• Violations of confidentiality or non-circumvention will result in immediate suspension under Section 17 of the BOC Charter.`
    },
    {
      title: '7. ETHICS COMMITTEE & VOLUNTARY DISPUTE ADVISORY',
      content: `Pursuant to Section 11 of the BOC Charter:
• If a commercial disagreement arises regarding an agreed commission or referral fulfillment, members may submit the matter to the Chapter Ethics Committee for informal mediation.
• BOC acts solely as a voluntary facilitator of communication and is not an arbitration tribunal or court of law.
• Members retain the right to seek independent legal advice under applicable Indian contract law.`
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
          <span className="text-[#F9D678]">Referral & Commission Policy</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172C] border border-[#D4AF37]/60 text-[#F9D678] text-xs font-cinzel font-bold tracking-[0.25em] uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Handshake className="w-3.5 h-3.5 text-[#F9D678]" />
            <span>ETHICAL COMMERCIAL STANDARDS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            BOC Referral & <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#F5C75D] bg-clip-text text-transparent">Commission Policy</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            Standards of transparency, mutual respect, and legal compliance governing member-to-member introductions and commercial rewards.
          </p>

          <div className="p-4 rounded-2xl bg-[#051329] border border-[#D4AF37]/40 text-xs sm:text-sm text-[#F9D678] font-medium leading-relaxed max-w-2xl mx-auto">
            Governed by Section 4, Section 5 & Section 6 of the BOC Membership Terms & Conditions
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
            className="p-2.5 rounded-xl bg-[#051329] hover:bg-[#0E2849] border border-[#D4AF37]/30 text-slate-300 hover:text-[#F9D678] font-cinzel font-bold text-[11px] uppercase tracking-wider transition-colors"
          >
            Refund Policy
          </Link>
          <Link
            to="/referral-policy"
            className="p-2.5 rounded-xl bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-[11px] uppercase tracking-wider shadow-md"
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
          <Handshake className="w-12 h-12 text-[#F9D678] mx-auto" />
          <h3 className="font-serif font-bold text-2xl text-white">
            Grow Through Protected Peer Referrals
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Zero competitors in your room. Total trust. Connect with Kerala and Tamil Nadu's leading business owners.
          </p>
          <button
            onClick={onOpenJoinModal}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all cursor-pointer"
          >
            Apply for Category Exclusivity →
          </button>
        </div>

      </div>
    </div>
  );
}
