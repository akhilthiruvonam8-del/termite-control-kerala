import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  TrendingUp, 
  Handshake, 
  Calendar, 
  Clock, 
  MapPin, 
  Plus, 
  CheckCircle2, 
  Share2, 
  MessageCircle, 
  Phone, 
  Building2, 
  ShieldCheck, 
  DollarSign, 
  LogOut, 
  Sparkles,
  X,
  Send,
  AlertCircle
} from 'lucide-react';

import sajishImg from '../assets/boc-member-sajish-maliyekkal.jpg';
import jijeeshImg from '../assets/boc-member-jijeesh-minerva.jpg';
import maheshImg from '../assets/boc-member-mahesh-prabudhan.jpg';
import binuImg from '../assets/boc-member-binu-tb.jpg';

export default function DashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview'); // overview, referrals, chapter, profile
  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);
  const [referralSuccessToast, setReferralSuccessToast] = useState(false);

  // New Referral Form state (Jijeesh Minerva First)
  const [newReferral, setNewReferral] = useState({
    recipient: 'Jijeesh Minerva (Minerva Solutions - Strategic Consulting)',
    clientName: '',
    clientPhone: '',
    opportunityType: 'High Interest / Ready to Purchase',
    estimatedValue: '',
    requirementNotes: '',
  });

  // Sample Referrals Pipeline Data
  const [referralsList, setReferralsList] = useState([
    {
      id: 'ref-1',
      recipient: 'Jijeesh Minerva (Minerva Solutions)',
      category: 'Strategic Consulting',
      client: 'Sunny Mathew (Skyline Auto Logistics)',
      phone: '+91 97450 55662',
      requirement: 'Franchise SOP development & enterprise facilities setup',
      estimatedValue: '₹6,00,000',
      status: 'Converted',
      date: 'Oct 02, 2025',
    },
    {
      id: 'ref-2',
      recipient: 'Mahesh Prabudhan (Yessem Facilities)',
      category: 'Facility Management',
      client: 'Kiran Raj (Grand Spices Co.)',
      phone: '+91 94470 33441',
      requirement: 'Complete warehouse facility management & compliance audit',
      estimatedValue: '₹4,80,000',
      status: 'In Progress',
      date: 'Oct 06, 2025',
    },
    {
      id: 'ref-3',
      recipient: 'Binu T.B. (Equinox Financial)',
      category: 'Financial Advisory',
      client: 'K.V. Haridas (Haridas Cashews)',
      phone: '+91 98950 11228',
      requirement: 'Debt syndication & working capital structuring for factory',
      estimatedValue: '₹12,00,000',
      status: 'Contacted',
      date: 'Oct 10, 2025',
    },
  ]);

  const handleCreateReferral = (e) => {
    e.preventDefault();
    if (!newReferral.clientName || !newReferral.clientPhone) return;

    const created = {
      id: `ref-${Date.now()}`,
      recipient: newReferral.recipient,
      category: 'Business Referral',
      client: newReferral.clientName,
      phone: newReferral.clientPhone,
      requirement: newReferral.requirementNotes || 'High priority referral introduction',
      estimatedValue: newReferral.estimatedValue ? `₹${newReferral.estimatedValue}` : 'Direct Synergy',
      status: 'New',
      date: 'Just Now',
    };

    setReferralsList([created, ...referralsList]);
    setIsReferralModalOpen(false);
    setReferralSuccessToast(true);
    setTimeout(() => setReferralSuccessToast(false), 4000);

    // Reset
    setNewReferral({
      recipient: 'Jijeesh Minerva (Minerva Solutions - Strategic Consulting)',
      clientName: '',
      clientPhone: '',
      opportunityType: 'High Interest / Ready to Purchase',
      estimatedValue: '',
      requirementNotes: '',
    });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Converted':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'In Progress':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      case 'Contacted':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      default:
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
    }
  };

  return (
    <div className="min-h-screen bg-[#020713] text-white pt-24 sm:pt-28 pb-20 selection:bg-[#D4AF37] selection:text-[#07172C]">
      
      {/* Background Ambient Lights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ===================================================================== */}
        {/* 1. MEMBER PROFILE BANNER (BRIEF POINT 9)                              */}
        {/* ===================================================================== */}
        <div className="bg-gradient-to-r from-[#06172E] via-[#082042] to-[#040E1E] border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 mb-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="relative shrink-0">
              <img
                src={sajishImg}
                alt="Sajish Maliyekkal"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-3 border-[#D4AF37] shadow-xl"
              />
              <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-bold text-[9px] font-cinzel uppercase shadow-md flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                <span>PREMIUM</span>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <h1 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                  Sajish Maliyekkal
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#F9D678] text-[10px] font-cinzel font-bold tracking-wider uppercase">
                  Active Member
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#F9D678] font-medium">
                Founder & CEO • Maliyekkal Builders & Infra
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-300 mt-2">
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Real Estate & Construction
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  BOC Kochi Central Chapter
                </span>
              </div>
            </div>
          </div>

          {/* Quick Dashboard Action CTA */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-center">
            <button
              onClick={() => setIsReferralModalOpen(true)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Give a Referral</span>
            </button>

            <button
              onClick={() => navigate('/login')}
              className="p-3 rounded-full bg-white/5 hover:bg-rose-950/40 text-slate-400 hover:text-rose-300 border border-slate-700 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Success Toast */}
        {referralSuccessToast && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-950/90 border border-emerald-400 text-emerald-200 flex items-center justify-between gap-3 animate-fadeIn shadow-xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                <strong>Referral Dispatched Successfully!</strong> Fellow member and secretariat notified via platform & WhatsApp.
              </span>
            </div>
            <button onClick={() => setReferralSuccessToast(false)} className="text-emerald-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ===================================================================== */}
        {/* 2. NAVIGATION TABS                                                    */}
        {/* ===================================================================== */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-8 overflow-x-auto scrollbar-none">
          {[
            { id: 'overview', name: 'Dashboard Overview', icon: Sparkles },
            { id: 'referrals', name: 'Referral Engine', icon: Handshake },
            { id: 'chapter', name: 'Chapter Network', icon: Users },
            { id: 'profile', name: 'My Public Profile', icon: Building2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-cinzel text-xs font-bold tracking-wider uppercase transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>


        {/* ===================================================================== */}
        {/* TAB 1: DASHBOARD OVERVIEW                                             */}
        {/* ===================================================================== */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* 4 Metric Counter Cards (Brief Point 19) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-[#051329] p-5 rounded-2xl border border-[#D4AF37]/35 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-cinzel text-slate-400 uppercase tracking-wider">Referrals Given</span>
                  <Handshake className="w-4 h-4 text-[#F9D678]" />
                </div>
                <strong className="text-2xl sm:text-3xl font-serif font-bold text-white block">14</strong>
                <span className="text-[11px] text-emerald-400 mt-1 block">+3 this month</span>
              </div>

              <div className="bg-[#051329] p-5 rounded-2xl border border-[#D4AF37]/35 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-cinzel text-slate-400 uppercase tracking-wider">Referrals Received</span>
                  <Users className="w-4 h-4 text-[#F9D678]" />
                </div>
                <strong className="text-2xl sm:text-3xl font-serif font-bold text-white block">9</strong>
                <span className="text-[11px] text-emerald-400 mt-1 block">7 Converted</span>
              </div>

              <div className="bg-[#051329] p-5 rounded-2xl border border-[#D4AF37]/35 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-cinzel text-slate-400 uppercase tracking-wider">Business Generated</span>
                  <TrendingUp className="w-4 h-4 text-[#F9D678]" />
                </div>
                <strong className="text-2xl sm:text-3xl font-serif font-bold text-[#F9D678] block">₹68.5 L</strong>
                <span className="text-[11px] text-slate-400 mt-1 block">Value to fellow members</span>
              </div>

              <div className="bg-[#051329] p-5 rounded-2xl border border-[#D4AF37]/35 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-cinzel text-slate-400 uppercase tracking-wider">Next Conclave</span>
                  <Calendar className="w-4 h-4 text-[#F9D678]" />
                </div>
                <strong className="text-xl sm:text-2xl font-serif font-bold text-white block">Wednesday</strong>
                <span className="text-[11px] text-[#F9D678] mt-1 block">7:00 AM @ Grand Hyatt</span>
              </div>
            </div>

            {/* Next Chapter Meeting Banner */}
            <div className="bg-gradient-to-r from-[#081F3D] via-[#0A274D] to-[#051329] rounded-2xl p-6 border border-[#D4AF37]/50 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#F9D678] font-cinzel font-bold tracking-widest uppercase mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>UPCOMING WEEKLY CONCLAVE</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  BOC Kochi Central Chapter Meeting #142
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Wednesday, Oct 15, 2025
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    7:00 AM – 8:30 AM IST
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Grand Hyatt Kochi Bolgatty
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-cinzel font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>RSVP Confirmed</span>
                </button>
              </div>
            </div>

            {/* Recent Referral Activity Preview */}
            <div className="bg-[#051329] rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <h3 className="font-serif font-bold text-lg text-white">Recent Referral Pipeline</h3>
                <button onClick={() => setActiveTab('referrals')} className="text-xs text-[#F9D678] hover:underline font-semibold">
                  View All Referrals →
                </button>
              </div>

              <div className="space-y-3">
                {referralsList.slice(0, 3).map((ref) => (
                  <div key={ref.id} className="bg-[#020814] p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-sm font-semibold text-white block">{ref.client}</span>
                      <span className="text-xs text-[#F9D678] block">To: {ref.recipient}</span>
                      <p className="text-xs text-slate-400 mt-0.5">{ref.requirement}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-serif font-bold text-white">{ref.estimatedValue}</span>
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${getStatusBadge(ref.status)}`}>
                        {ref.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}


        {/* ===================================================================== */}
        {/* TAB 2: REFERRAL ENGINE (BRIEF SECTIONS 18 & 19)                       */}
        {/* ===================================================================== */}
        {activeTab === 'referrals' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Header + Action */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#051329] p-6 rounded-2xl border border-[#D4AF37]/40">
              <div>
                <h2 className="font-serif font-bold text-2xl text-white mb-1">
                  BOC Referral Exchange Protocol
                </h2>
                <p className="text-xs sm:text-sm text-slate-300">
                  Track qualified introductions and conversions inside the fraternity
                </p>
              </div>
              <button
                onClick={() => setIsReferralModalOpen(true)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center gap-2 cursor-pointer shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Submit New Referral</span>
              </button>
            </div>

            {/* Referrals Table / Cards */}
            <div className="bg-[#051329] rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
              <div className="p-4 bg-[#020814] border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-cinzel uppercase tracking-wider">
                <span>Total Active Records: {referralsList.length}</span>
                <span>Referral Flow: 100% Peer Verified</span>
              </div>

              <div className="divide-y divide-slate-800/80">
                {referralsList.map((ref) => (
                  <div key={ref.id} className="p-5 hover:bg-[#071B36]/50 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif font-bold text-base text-white">{ref.client}</h4>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getStatusBadge(ref.status)}`}>
                          {ref.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#F9D678] font-medium">
                        Referred to: <strong className="text-slate-200">{ref.recipient}</strong>
                      </p>
                      <p className="text-xs text-slate-300">
                        {ref.requirement}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-1">
                        <span>Contact: {ref.phone}</span>
                        <span>•</span>
                        <span>Date: {ref.date}</span>
                      </div>
                    </div>

                    <div className="flex md:flex-col items-end justify-between w-full md:w-auto gap-2 shrink-0">
                      <span className="text-base font-serif font-bold text-[#F9D678]">
                        {ref.estimatedValue}
                      </span>
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(`Hi, regarding the BOC referral for ${ref.client}...`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/40 text-xs font-semibold transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Discuss Referral</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}


        {/* ===================================================================== */}
        {/* TAB 3: CHAPTER NETWORK                                                */}
        {/* ===================================================================== */}
        {activeTab === 'chapter' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-[#051329] p-6 rounded-2xl border border-slate-800">
              <h2 className="font-serif font-bold text-2xl text-white mb-2">
                BOC Kochi Central Chapter Members
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Your direct chapter peers. Reach out for 1-on-1 synergy sessions or category collaborations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Jijeesh Minerva', company: 'M/s Eco Pest India • M/s Urban Owls', cat: 'Strategic Consulting', photo: jijeeshImg, phone: '+91 98471 22334' },
                  { name: 'Sajish Maliyekkal', company: 'Maliyekkal Builders & Infra', cat: 'Construction & Infra', photo: sajishImg, phone: '+91 98460 11223' },
                  { name: 'Mahesh Prabudhan', company: 'Yessem Facilities & Logistics', cat: 'Corporate Facilities', photo: maheshImg, phone: '+91 98465 33445' },
                  { name: 'Binu T.B.', company: 'Equinox Financial Advisory', cat: 'Wealth Advisory', photo: binuImg, phone: '+91 94470 44556' },
                ].map((m, idx) => (
                  <div key={idx} className="bg-[#020814] p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img src={m.photo} alt={m.name} className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]" />
                      <div>
                        <h4 className="font-serif font-bold text-sm text-white">{m.name}</h4>
                        <span className="text-xs text-[#F9D678] block">{m.company}</span>
                        <span className="text-[11px] text-slate-400 block">{m.cat}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <a href={`tel:${m.phone}`} className="p-2 rounded-full bg-[#092244] text-[#F9D678] hover:bg-[#D4AF37] hover:text-[#07172C] transition-all">
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}


        {/* ===================================================================== */}
        {/* TAB 4: MY PUBLIC PROFILE                                              */}
        {/* ===================================================================== */}
        {activeTab === 'profile' && (
          <div className="bg-[#051329] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/35 max-w-2xl mx-auto space-y-6 animate-fadeIn">
            <h2 className="font-serif font-bold text-2xl text-white">
              Edit Business Profile
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-cinzel font-bold text-[#F9D678] mb-1">Company Name</label>
                <input type="text" defaultValue="Maliyekkal Builders & Infra" className="w-full py-2.5 px-3 bg-[#020814] border border-slate-700 rounded-xl text-white outline-none" />
              </div>
              <div>
                <label className="block text-xs font-cinzel font-bold text-[#F9D678] mb-1">Business Description</label>
                <textarea rows="3" defaultValue="Leading residential and commercial infrastructure developer in Central Kerala with over 1.2 million sq. ft. constructed." className="w-full py-2.5 px-3 bg-[#020814] border border-slate-700 rounded-xl text-white outline-none" />
              </div>
              <div>
                <label className="block text-xs font-cinzel font-bold text-[#F9D678] mb-1">Direct Phone</label>
                <input type="text" defaultValue="+91 98460 11223" className="w-full py-2.5 px-3 bg-[#020814] border border-slate-700 rounded-xl text-white outline-none" />
              </div>
              <div>
                <label className="block text-xs font-cinzel font-bold text-[#F9D678] mb-1">WhatsApp</label>
                <input type="text" defaultValue="919846011223" className="w-full py-2.5 px-3 bg-[#020814] border border-slate-700 rounded-xl text-white outline-none" />
              </div>
              <button
                type="button"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                Save Profile Changes
              </button>
            </div>
          </div>
        )}

      </div>

      {/* ===================================================================== */}
      {/* 5. CREATE REFERRAL MODAL (BRIEF SECTION 18)                           */}
      {/* ===================================================================== */}
      {isReferralModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-gradient-to-b from-[#071B36] to-[#040E1E] rounded-3xl border-2 border-[#D4AF37] p-6 sm:p-8 shadow-2xl">
            
            <button
              onClick={() => setIsReferralModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <Handshake className="w-5 h-5 text-[#F9D678]" />
              <h3 className="font-serif font-bold text-xl text-white">Give a Business Referral</h3>
            </div>
            <p className="text-xs text-slate-300 mb-6">
              Connect a warm prospective client with a fellow verified BOC member.
            </p>

            <form onSubmit={handleCreateReferral} className="space-y-4">
              <div>
                <label className="block text-xs font-cinzel font-bold text-[#F9D678] mb-1">
                  Recipient Fellow Member *
                </label>
                <select
                  value={newReferral.recipient}
                  onChange={(e) => setNewReferral({ ...newReferral, recipient: e.target.value })}
                  className="w-full py-2.5 px-3 bg-[#020814] border border-[#D4AF37]/40 rounded-xl text-xs sm:text-sm text-white focus:border-[#F9D678] outline-none"
                >
                  <option value="Jijeesh Minerva (Minerva Solutions - Strategic Consulting)">Jijeesh Minerva (Management Consulting & Pest/Digital)</option>
                  <option value="Sajish Maliyekkal (Maliyekkal Builders - Construction)">Sajish Maliyekkal (Construction & Infra)</option>
                  <option value="Mahesh Prabudhan (Yessem Facilities - Facility Mgmt)">Mahesh Prabudhan (Facility Management & Logistics)</option>
                  <option value="Binu T.B. (Equinox Financial - Wealth & Tax)">Binu T.B. (Wealth Advisory & Debt)</option>
                  <option value="Anjana Sreedharan (Studio Aesthetica - Architecture)">Anjana Sreedharan (Architecture & Interiors)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-cinzel font-bold text-[#F9D678] mb-1">
                  Prospective Client / Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={newReferral.clientName}
                  onChange={(e) => setNewReferral({ ...newReferral, clientName: e.target.value })}
                  placeholder="e.g. Dr. Mathew Varghese (Apollo Hospital)"
                  className="w-full py-2.5 px-3 bg-[#020814] border border-[#D4AF37]/40 rounded-xl text-xs sm:text-sm text-white focus:border-[#F9D678] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-cinzel font-bold text-[#F9D678] mb-1">
                    Client Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={newReferral.clientPhone}
                    onChange={(e) => setNewReferral({ ...newReferral, clientPhone: e.target.value })}
                    placeholder="+91 98460 12345"
                    className="w-full py-2.5 px-3 bg-[#020814] border border-[#D4AF37]/40 rounded-xl text-xs sm:text-sm text-white focus:border-[#F9D678] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-cinzel font-bold text-[#F9D678] mb-1">
                    Estimated Deal Value (INR)
                  </label>
                  <input
                    type="text"
                    value={newReferral.estimatedValue}
                    onChange={(e) => setNewReferral({ ...newReferral, estimatedValue: e.target.value })}
                    placeholder="e.g. 5,00,000"
                    className="w-full py-2.5 px-3 bg-[#020814] border border-[#D4AF37]/40 rounded-xl text-xs sm:text-sm text-white focus:border-[#F9D678] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-cinzel font-bold text-[#F9D678] mb-1">
                  Requirement Notes & Background
                </label>
                <textarea
                  rows="3"
                  value={newReferral.requirementNotes}
                  onChange={(e) => setNewReferral({ ...newReferral, requirementNotes: e.target.value })}
                  placeholder="Explain what the client needs and how you introduced the fellow member..."
                  className="w-full py-2.5 px-3 bg-[#020814] border border-[#D4AF37]/40 rounded-xl text-xs sm:text-sm text-white focus:border-[#F9D678] outline-none"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-102 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Qualified Referral</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
