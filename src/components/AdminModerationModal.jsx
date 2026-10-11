import React, { useState } from 'react';
import {
  X,
  Shield,
  CheckCircle,
  XCircle,
  AlertTriangle,
  FileText,
  MapPin,
  Eye,
  Filter,
} from 'lucide-react';

export default function AdminModerationModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('pending'); // 'pending' | 'reported'

  const [pendingListings, setPendingListings] = useState([
    {
      id: 'mod-01',
      title: '5 BHK Waterfront Tharavadu in Kumarakom',
      district: 'Kottayam',
      price: '₹ 2.10 Cr',
      seller: 'Venu Gopal (Owner)',
      date: '15 mins ago',
      cents: '18 Cents',
      status: 'pending',
    },
    {
      id: 'mod-02',
      title: 'Commercial Showroom on Calicut Bypass',
      district: 'Kozhikode',
      price: '₹ 1.80 Lakhs/mo',
      seller: 'Apex Properties',
      date: '45 mins ago',
      cents: 'Built-up 4,500 sq.ft',
      status: 'pending',
    },
  ]);

  const [reportedListings, setReportedListings] = useState([
    {
      id: 'rep-01',
      title: '2 BHK Apartment in Kakkanad near Metro',
      district: 'Ernakulam',
      reason: 'Property already sold last week by another broker',
      reportedBy: 'Kishore M.',
      date: '2 hours ago',
      status: 'investigating',
    },
  ]);

  if (!isOpen) return null;

  const handleApprove = (id) => {
    setPendingListings((prev) => prev.filter((item) => item.id !== id));
  };

  const handleReject = (id) => {
    setPendingListings((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDismissReport = (id) => {
    setReportedListings((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-[#FAF8F2] w-full max-w-xl min-h-screen sm:min-h-0 sm:rounded-3xl shadow-2xl overflow-hidden border border-[#E2EBE5] relative flex flex-col my-auto">
        {/* Header */}
        <div className="bg-[#0C3423] text-white px-5 py-3.5 flex items-center justify-between border-b border-[#27865B]/30">
          <div className="flex items-center gap-2">
            <Shield size={20} className="text-[#D6AD55]" />
            <div>
              <h2 className="font-bold text-sm">VeeduX Admin Moderation</h2>
              <p className="text-[10px] text-white/60">Listing Verification & Content Quality</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Moderation Tabs */}
        <div className="flex border-b border-[#E2EBE5] bg-white">
          <button
            onClick={() => setActiveTab('pending')}
            className={`flex-1 py-3 text-xs font-bold border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'pending'
                ? 'border-[#145C3D] text-[#145C3D]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>Pending Approval</span>
            <span className="bg-[#D6AD55] text-[#0C3423] text-[10px] font-black px-1.5 py-0.2 rounded-full">
              {pendingListings.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('reported')}
            className={`flex-1 py-3 text-xs font-bold border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'reported'
                ? 'border-rose-600 text-rose-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>Reported Content</span>
            <span className="bg-rose-100 text-rose-800 text-[10px] font-black px-1.5 py-0.2 rounded-full">
              {reportedListings.length}
            </span>
          </button>
        </div>

        {/* Content List */}
        <div className="p-4 flex-grow overflow-y-auto max-h-[70vh] space-y-3">
          {activeTab === 'pending' ? (
            pendingListings.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-xs">
                All pending submissions approved! No queues waiting.
              </div>
            ) : (
              pendingListings.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-3.5 rounded-2xl border border-[#E2EBE5] shadow-xs space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">{item.title}</h4>
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                        <span className="flex items-center gap-1">
                          <MapPin size={11} className="text-[#27865B]" />
                          {item.district}
                        </span>
                        <span>•</span>
                        <span>{item.cents}</span>
                        <span>•</span>
                        <span className="text-slate-400">{item.date}</span>
                      </div>
                    </div>
                    <span className="font-bold text-xs text-[#145C3D] flex-shrink-0">
                      {item.price}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
                    <span className="text-slate-600">Submitted by: {item.seller}</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleReject(item.id)}
                        className="px-2.5 py-1 rounded-lg border border-rose-300 text-rose-600 hover:bg-rose-50 font-semibold"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => handleApprove(item.id)}
                        className="px-3 py-1 rounded-lg bg-[#145C3D] text-white hover:bg-[#0C3423] font-bold shadow-xs"
                      >
                        Approve & Live
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )
          ) : reportedListings.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs">
              Zero reported complaints pending review.
            </div>
          ) : (
            reportedListings.map((rep) => (
              <div
                key={rep.id}
                className="bg-white p-3.5 rounded-2xl border border-rose-200 shadow-xs space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">{rep.title}</span>
                  <span className="text-[10px] text-slate-400">{rep.date}</span>
                </div>

                <div className="bg-rose-50 p-2 rounded-xl text-xs text-rose-800 border border-rose-100">
                  <p className="font-semibold">Reason Reported:</p>
                  <p className="text-[11px] mt-0.5">{rep.reason}</p>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px]">
                  <span className="text-slate-500">Reported by: {rep.reportedBy}</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleDismissReport(rep.id)}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
                    >
                      Dismiss
                    </button>
                    <button
                      onClick={() => handleDismissReport(rep.id)}
                      className="px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold"
                    >
                      Take Down Ad
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
