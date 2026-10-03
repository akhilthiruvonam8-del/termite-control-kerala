import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Scale, 
  Lock, 
  AlertCircle, 
  HelpCircle,
  ExternalLink,
  Phone,
  Mail
} from 'lucide-react';
import bocLogoPng from '../assets/boc-logo.png';

export default function TermsPage({ onOpenJoinModal }) {
  const sections = [
    {
      num: 1,
      title: 'MEMBERSHIP ELIGIBILITY',
      content: `BOC membership is intended primarily for genuine:
• Business Owners
• Entrepreneurs
• Founders
• Proprietors
• Partners
• Directors
• Authorized Business Representatives
• Professionals eligible to participate in BOC business activities

Applicants must provide accurate and complete information about themselves and their business.
BOC may request reasonable information or documents for business verification.
BOC reserves the right to approve, reject, suspend or terminate an application or membership in accordance with these Terms & Conditions and applicable law.`
    },
    {
      num: 2,
      title: 'PURPOSE OF BOC',
      content: `BOC is a professional business community designed to facilitate:
• Business Connections
• Business Networking
• Business Support
• Business Referrals
• Business Leads
• Knowledge Sharing
• Experience Sharing
• Collaboration
• Partnerships
• Business Development Opportunities
• Member-to-Member Support
• Referral-Based Business Opportunities

The objective of BOC is:
CONNECT • SUPPORT • REFER • COLLABORATE • GROW

BOC aims to create an environment where:
Business Owners Help Business Owners.`
    },
    {
      num: 3,
      title: 'BUSINESS SUPPORT',
      content: `BOC members may support one another through:
• Business referrals
• Recommendations
• Professional contacts
• Business introductions
• Knowledge sharing
• Experience sharing
• Collaboration opportunities
• Supplier or service-provider references
• Business problem discussions
• Joint business opportunities
• Other legitimate business-support activities

BOC is a platform for facilitating such opportunities and does not guarantee that every member will receive customers, leads, referrals, contracts, sales or financial benefits.`
    },
    {
      num: 4,
      title: 'BUSINESS REFERRALS',
      content: `BOC members may refer customers, contacts or business opportunities to other BOC members.
A referral does not guarantee that a sale or transaction will occur.
Members must handle referrals professionally and respectfully.
Members must not misuse, sell, distribute or improperly contact another member's personal or business contact information.`
    },
    {
      num: 5,
      title: 'REFERRAL COMMISSION',
      content: `BOC may facilitate referral-based business opportunities where a commission, referral fee or other commercial benefit is applicable.

Where a commission arrangement exists:
• The applicable commission terms should be clearly communicated.
• The relevant parties should agree to the terms before proceeding wherever reasonably possible.
• Commission arrangements must comply with applicable Indian laws.
• Members are responsible for fulfilling their agreed commercial obligations.
• BOC does not automatically guarantee payment of a commission unless BOC is expressly responsible for that particular commission arrangement.

BOC may introduce separate rules, commission structures or procedures for specific referral programs.`
    },
    {
      num: 6,
      title: 'MEMBER-TO-MEMBER BUSINESS TRANSACTIONS',
      content: `Any purchase, sale, service, contract, partnership, referral or other business transaction between members is primarily between the parties involved.
BOC is not automatically a party to such transactions.

BOC does not guarantee:
• Product quality
• Service quality
• Delivery
• Payment
• Profit
• Contract performance
• Warranty
• Business results

Members should conduct their own due diligence before entering into any business relationship or transaction.`
    },
    {
      num: 7,
      title: 'NO GUARANTEE OF BUSINESS RESULTS',
      content: `BOC membership does not guarantee:
• Leads
• Customers
• Sales
• Referrals
• Contracts
• Profits
• Minimum income
• Business growth
• Commission income
• Any specific financial return

Business results depend on the member's own business, performance, market conditions, customer requirements and other factors.`
    },
    {
      num: 8,
      title: 'BUSINESS CONDUCT',
      content: `All BOC members are expected to maintain professional, ethical and respectful conduct.

Members must not:
• Provide knowingly false or misleading information
• Engage in fraudulent business activities
• Misrepresent products or services
• Harass other members
• Threaten other members
• Spam members
• Misuse member information
• Engage in unlawful activities through BOC
• Damage another member's business through knowingly false or malicious statements
• Use BOC primarily for unauthorized or inappropriate solicitation
• Misuse BOC branding, platform or community resources`
    },
    {
      num: 9,
      title: 'PERSONAL MATTERS & PERSONAL DISPUTES',
      content: `BOC is a professional business community.
BOC does not provide personal support, representation, financial assistance, mediation or intervention for disputes that are unrelated to legitimate business activities.

This may include:
• Personal relationship disputes
• Family disputes
• Personal financial disputes
• Personal property disputes
• Personal conflicts
• Private relationship matters
• Personal criminal allegations or proceedings
• Other private disputes unrelated to legitimate BOC business activities

Members should approach the appropriate legal, governmental or professional authority for such matters.`
    },
    {
      num: 10,
      title: 'CRIMINAL ACTIVITY & UNLAWFUL CONDUCT',
      content: `BOC does not support, facilitate or provide protection for unlawful activities.
Members must comply with applicable laws and regulations in India.

If BOC receives credible information concerning unlawful conduct connected with the use of the BOC platform, membership or BOC activities, BOC may take appropriate action, including suspension or termination of membership, subject to applicable law.

BOC does not determine guilt or innocence.
Only competent legal authorities and courts can make such determinations where applicable.`
    },
    {
      num: 11,
      title: 'BUSINESS DISPUTES',
      content: `If a dispute arises between BOC members in relation to a business transaction, BOC may, at its discretion, facilitate communication or voluntary resolution where appropriate.

However, BOC is not:
• A court
• An arbitrator
• A legal representative
• A police authority
• A financial guarantor
• A guarantor of any member's business

Members remain responsible for their own contracts, payments, services, products, employees, customers and business decisions.
Where necessary, members should obtain independent legal or professional advice.`
    },
    {
      num: 12,
      title: 'NO LEGAL OR CRIMINAL PROTECTION',
      content: `BOC membership does not provide:
• Legal immunity
• Criminal protection
• Protection from investigation
• Protection from police action
• Protection from court proceedings
• Protection from regulatory authorities
• Protection from contractual obligations

BOC does not represent members before police, courts, government authorities or other legal bodies unless separately and lawfully authorized to do so.`
    },
    {
      num: 13,
      title: 'CONFIDENTIALITY',
      content: `Members may receive confidential business information through BOC.
Members agree to respect confidential information and must not disclose, copy, sell, misuse or distribute confidential business information without appropriate authorization.

Members should exercise reasonable care when sharing sensitive business information within the community.`
    },
    {
      num: 14,
      title: 'MEMBER DATA & PRIVACY',
      content: `Information submitted during BOC registration may be collected, stored and used for legitimate purposes including:
• Membership administration
• Member verification
• Business networking
• Member communication
• Referral activities
• Events
• Business introductions
• Community management
• Administrative purposes

Certain business information may be displayed to other BOC members or on BOC platforms where appropriate consent has been provided.
BOC will handle personal information in accordance with its applicable Privacy Policy and applicable Indian law.`
    },
    {
      num: 15,
      title: 'COMMUNICATIONS',
      content: `By joining BOC, members may receive relevant communications through:
• WhatsApp
• Phone
• SMS
• Email
• Website notifications
• Other official BOC communication channels

Communications may include:
• Membership updates
• Business referrals
• Networking opportunities
• Events
• Meetings
• Community announcements
• Business opportunities
• Administrative notices

Members may have applicable communication preferences or opt-out options subject to essential service communications and applicable law.`
    },
    {
      num: 16,
      title: 'MEMBERSHIP FEES',
      content: `Where applicable, BOC may charge:
• Membership fees
• Renewal fees
• Event fees
• Special program fees
• Other disclosed service or participation fees

Applicable fees will be communicated before payment.
Payment of a membership fee does not guarantee leads, customers, sales, referrals, commissions, profits or any specific business result.
Refunds and cancellations will be governed by the applicable BOC Refund/Cancellation Policy.`
    },
    {
      num: 17,
      title: 'MEMBERSHIP SUSPENSION OR TERMINATION',
      content: `BOC may suspend, restrict or terminate a membership where appropriate, including in circumstances involving:
• Violation of these Terms & Conditions
• False or misleading information
• Fraudulent activity
• Serious misconduct
• Unlawful use of the BOC platform
• Misuse of member information
• Repeated complaints
• Unethical business conduct
• Conduct materially harmful to BOC or its members

BOC may take such action subject to applicable law and its internal policies.`
    },
    {
      num: 18,
      title: 'INDEPENDENT BUSINESSES',
      content: `Every BOC member operates their own independent business.
Membership in BOC does not automatically create:
• Employer-employee relationship
• Partnership
• Joint venture
• Agency relationship
• Franchise relationship
• Legal representation

between BOC and any member.
Any separate commercial relationship must be established through appropriate agreements between the relevant parties.`
    },
    {
      num: 19,
      title: "BOC'S ROLE",
      content: `BOC operates as a business community and networking platform that facilitates:
Connections + Support + Referrals + Collaboration + Growth Opportunities

BOC does not guarantee the quality, legality, financial position, performance or reliability of every member or business listed on the platform.
Members are responsible for independently evaluating any person, business, product, service or transaction before proceeding.`
    },
    {
      num: 20,
      title: 'INTELLECTUAL PROPERTY',
      content: `The BOC name, logo, website, platform, content, designs, documents and other proprietary materials belong to BOC or their respective rights holders.
Members may not reproduce, modify, distribute or commercially exploit BOC intellectual property without appropriate authorization.
Approved BOC member branding must be used according to BOC guidelines.`
    },
    {
      num: 21,
      title: 'CHANGES TO TERMS',
      content: `BOC may update these Terms & Conditions from time to time due to changes in:
• BOC services
• Membership structure
• Referral programs
• Commission programs
• Community rules
• Applicable legal or regulatory requirements

Updated terms may be published on the BOC website or communicated through official BOC channels.`
    },
    {
      num: 22,
      title: 'GOVERNING LAW',
      content: `These Terms & Conditions shall be interpreted and governed in accordance with the applicable laws of India.
Any legal dispute relating to BOC shall be subject to the jurisdiction of the competent courts having jurisdiction under applicable Indian law.`
    },
    {
      num: 23,
      title: 'MEMBER DECLARATION & CONSENT',
      content: `Before submitting the BOC membership application, the applicant must confirm:
☑ I confirm that I am a genuine business owner, entrepreneur, founder, partner, director, professional or authorized business representative.
☑ I confirm that the information provided in this application is accurate and complete to the best of my knowledge.
☑ I understand that BOC is a professional business community focused on connections, support, referrals, collaboration and business growth opportunities.
☑ I understand that BOC does not guarantee leads, customers, sales, referrals, commissions, profits or business growth.
☑ I understand that BOC does not provide support or representation for personal disputes or personal criminal matters.
☑ I agree to comply with applicable Indian laws and BOC community rules.
☑ I understand that BOC is not responsible for independent transactions or disputes between members unless BOC has expressly agreed to be involved in a specific matter.
☑ I agree to respect the confidentiality and privacy of other BOC members.
☑ I agree to the BOC Privacy Policy.
☑ I agree to the BOC Membership Terms & Conditions.`
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
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-400 font-cinzel">
          <Link to="/" className="hover:text-[#F9D678] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#F9D678]">Terms & Conditions</span>
        </div>

        {/* Master Document Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172C] border border-[#D4AF37]/60 text-[#F9D678] text-xs font-cinzel font-bold tracking-[0.25em] uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Scale className="w-3.5 h-3.5 text-[#F9D678]" />
            <span>OFFICIAL CHARTER & AGREEMENT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            BOC Membership <span className="bg-gradient-to-r from-[#FFF3C4] via-[#FCE38A] to-[#F5C75D] bg-clip-text text-transparent">Terms & Conditions</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            BOC – Business Owner’s Circle is a professional business community created to connect business owners, facilitate business support, referrals, collaborations and mutually beneficial business opportunities.
          </p>

          <div className="p-4 rounded-2xl bg-[#051329] border border-[#D4AF37]/40 text-xs sm:text-sm text-[#F9D678] font-medium leading-relaxed max-w-2xl mx-auto">
            By submitting the BOC membership application, the applicant confirms that they have read, understood and agreed to the following Terms & Conditions.
          </div>
        </div>

        {/* Policy Quick Switcher Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10 text-center">
          <Link
            to="/terms"
            className="p-2.5 rounded-xl bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-[11px] uppercase tracking-wider shadow-md"
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
            className="p-2.5 rounded-xl bg-[#051329] hover:bg-[#0E2849] border border-[#D4AF37]/30 text-slate-300 hover:text-[#F9D678] font-cinzel font-bold text-[11px] uppercase tracking-wider transition-colors"
          >
            Referral Policy
          </Link>
        </div>

        {/* 23 Terms Sections Container */}
        <div className="space-y-6 mb-14">
          {sections.map((sec) => (
            <div 
              key={sec.num}
              id={`section-${sec.num}`}
              className="bg-[#051329]/90 border border-[#D4AF37]/35 hover:border-[#F9D678]/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3 pb-2 border-b border-[#D4AF37]/20">
                <span className="w-8 h-8 rounded-xl bg-[#07172C] border border-[#D4AF37] text-[#F9D678] flex items-center justify-center font-cinzel font-black text-xs shrink-0 shadow-sm">
                  {sec.num}
                </span>
                <h2 className="font-cinzel font-bold text-sm sm:text-base text-white tracking-wider">
                  {sec.title}
                </h2>
              </div>

              <div className="text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-normal space-y-2">
                {sec.content}
              </div>
            </div>
          ))}
        </div>

        {/* Applicant Verification Summary Card */}
        <div className="bg-gradient-to-r from-[#071D3E] via-[#0A2752] to-[#05142B] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <ShieldCheck className="w-12 h-12 text-[#F9D678] mx-auto" />
            <h3 className="font-serif font-bold text-2xl text-white">
              BOC – Business Owner’s Circle
            </h3>
            <p className="text-[#F9D678] font-cinzel text-xs sm:text-sm tracking-[0.25em] font-bold">
              CONNECT • SUPPORT • REFER • COLLABORATE • GROW
            </p>
            <p className="text-slate-300 text-xs sm:text-sm italic">
              "Business Owners Helping Business Owners."
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenJoinModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all cursor-pointer"
              >
                Proceed with Membership Application →
              </button>
            </div>
          </div>
        </div>

        {/* Contact / Inquiries Secretariat Footer */}
        <div className="p-6 rounded-2xl bg-[#030B18] border border-slate-800 text-center text-xs text-slate-400 space-y-2">
          <span className="block font-medium text-slate-300">
            Questions regarding BOC Membership Terms & Conditions?
          </span>
          <div className="flex items-center justify-center gap-6 flex-wrap text-slate-300">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#F9D678]" />
              <a href="tel:+919020040009" className="hover:text-[#F9D678]">+91 90200 40009</a>
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#F9D678]" />
              <a href="mailto:bocconnect.in@gmail.com" className="hover:text-[#F9D678]">bocconnect.in@gmail.com</a>
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}
