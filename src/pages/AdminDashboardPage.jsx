import React, { useState } from 'react';
import {
  Shield,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Users,
  BarChart3,
  Home,
  Eye,
  Check,
  X,
  MapPin,
  Clock,
  Layers,
  ArrowUpRight,
  RefreshCw,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AdminDashboardPage() {
  const {
    properties,
    approveProperty,
    rejectProperty,
    refreshProperties,
    reportedListings,
    setReportedListings,
    navigateTo,
  } = useApp();

  const [activeTab, setActiveTab] = useState('pending'); // 'pending' | 'approved' | 'rejected' | 'reported' | 'users' | 'stats'
  const [actionLoadingId, setActionLoadingId] = useState(null);
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error', message: string, details?: string }

  // Categorize properties by status
  const pendingProps = properties.filter((p) => p.approvalStatus === 'pending');
  const approvedProps = properties.filter((p) => p.approvalStatus === 'approved');
  const rejectedProps = properties.filter((p) => p.approvalStatus === 'rejected');

  // Sample registered users
  const [usersList] = useState([
    {
      id: 'u-1',
      name: 'Thomas K. Varghese',
      phone: '+91 94471 22345',
      role: 'Direct Owner',
      listingsCount: 2,
      location: 'Alappuzha',
      joined: '12 Oct 2026',
    },
    {
      id: 'u-2',
      name: 'Skyline Prime Realty',
      phone: '+91 94470 88990',
      role: 'Certified Agent',
      listingsCount: 5,
      location: 'Kochi',
      joined: '08 Oct 2026',
    },
    {
      id: 'u-3',
      name: 'Suma Radhakrishnan',
      phone: '+91 94950 55122',
      role: 'Direct Owner',
      listingsCount: 1,
      location: 'Trivandrum',
      joined: '10 Oct 2026',
    },
  ]);

  const handleDismissReport = (id) => {
    setReportedListings((prev) => prev.filter((r) => r.id !== id));
  };

  const handleApprove = async (property) => {
    setActionLoadingId(property.id);
    setFeedback(null);
    console.log(`[VeeduX Admin] Approving listing: "${property.title}" (ID: ${property.id})...`);

    try {
      const res = await approveProperty(property.id);
      if (res?.success) {
        setFeedback({
          type: 'success',
          message: `Property "${property.title}" was approved and published live!`,
          details: res.isMock
            ? 'Demo/Local Listing updated in state.'
            : 'Supabase database record updated (approval_status: approved).',
        });
        console.log(`[VeeduX Admin] Listing "${property.title}" approved successfully:`, res);
      } else {
        const errorMsg = res?.error?.message || 'Database update failed.';
        setFeedback({
          type: 'error',
          message: `Approval failed for "${property.title}".`,
          details: errorMsg,
        });
        console.error('[VeeduX Admin] Supabase approval error:', res?.error);
      }
    } catch (err) {
      setFeedback({
        type: 'error',
        message: `Unexpected error approving "${property.title}".`,
        details: err?.message || String(err),
      });
      console.error('[VeeduX Admin] Approval exception:', err);
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleReject = async (property) => {
    setActionLoadingId(property.id);
    setFeedback(null);
    console.log(`[VeeduX Admin] Rejecting listing: "${property.title}" (ID: ${property.id})...`);

    try {
      const res = await rejectProperty(property.id);
      if (res?.success) {
        setFeedback({
          type: 'success',
          message: `Property "${property.title}" was marked as rejected.`,
          details: res.isMock
            ? 'Demo/Local Listing rejected in state.'
            : 'Supabase database record updated (approval_status: rejected).',
        });
        console.log(`[VeeduX Admin] Listing rejected successfully:`, res);
      } else {
        const errorMsg = res?.error?.message || 'Database update failed.';
        setFeedback({
          type: 'error',
          message: `Rejection failed for "${property.title}".`,
          details: errorMsg,
        });
        console.error('[VeeduX Admin] Supabase rejection error:', res?.error);
      }
    } catch (err) {
      setFeedback({
        type: 'error',
        message: `Unexpected error rejecting "${property.title}".`,
        details: err?.message || String(err),
      });
      console.error('[VeeduX Admin] Rejection exception:', err);
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleRefresh = async () => {
    setActionLoadingId('refresh');
    setFeedback(null);
    try {
      const res = await refreshProperties();
      if (res?.error) {
        setFeedback({
          type: 'error',
          message: 'Failed to refresh listings from Supabase.',
          details: res.error.message,
        });
      } else {
        setFeedback({
          type: 'success',
          message: 'Listings refreshed from database.',
          details: `Synchronized ${properties.length} total listings.`,
        });
      }
    } catch (err) {
      setFeedback({
        type: 'error',
        message: 'Error refreshing properties.',
        details: err?.message,
      });
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleTakeDownReportedProperty = async (report) => {
    await rejectProperty(report.propertyId);
    handleDismissReport(report.id);
  };

  return (
    <div className="w-full bg-[#FAF8F2] min-h-screen py-8 px-4 sm:px-6 pb-24 sm:pb-16 text-[#11291D]">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Banner */}
        <div className="bg-[#0C3423] text-white rounded-3xl p-6 sm:p-8 border border-[#27865B]/30 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Shield size={22} className="text-[#D6AD55]" />
              <h1 className="text-xl sm:text-2xl font-black">
                VeeduX Admin & Moderation Portal
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-emerald-100/80">
              Review and approve Kerala property listings before public display.
            </p>
          </div>

          <span className="bg-[#D6AD55] text-[#0C3423] text-xs font-black px-3.5 py-1.5 rounded-full shadow-xs">
            Super Admin Access
          </span>
        </div>

        {/* Dynamic Success / Error Alert Banner */}
        {feedback && (
          <div
            className={`p-4 rounded-2xl border flex items-start justify-between gap-3 shadow-xs animate-in fade-in duration-200 ${
              feedback.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-rose-50 border-rose-200 text-rose-900'
            }`}
          >
            <div className="flex items-start gap-3">
              {feedback.type === 'success' ? (
                <CheckCircle2 size={20} className="text-emerald-700 shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle size={20} className="text-rose-700 shrink-0 mt-0.5" />
              )}
              <div className="space-y-0.5">
                <p className="text-xs sm:text-sm font-bold">{feedback.message}</p>
                {feedback.details && (
                  <p className="text-[11px] opacity-90 font-mono break-all">{feedback.details}</p>
                )}
              </div>
            </div>
            <button
              onClick={() => setFeedback(null)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-lg"
              title="Dismiss"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          <div
            onClick={() => setActiveTab('pending')}
            className="bg-white p-4 rounded-2xl border border-[#E2EBE5] shadow-xs cursor-pointer hover:border-[#145C3D] transition-all"
          >
            <span className="text-[10px] font-bold uppercase text-amber-600 block">
              Pending Approval
            </span>
            <p className="text-2xl font-black text-amber-700 mt-1">{pendingProps.length}</p>
          </div>

          <div
            onClick={() => setActiveTab('approved')}
            className="bg-white p-4 rounded-2xl border border-[#E2EBE5] shadow-xs cursor-pointer hover:border-[#145C3D] transition-all"
          >
            <span className="text-[10px] font-bold uppercase text-[#145C3D] block">
              Approved & Live
            </span>
            <p className="text-2xl font-black text-[#145C3D] mt-1">{approvedProps.length}</p>
          </div>

          <div
            onClick={() => setActiveTab('rejected')}
            className="bg-white p-4 rounded-2xl border border-[#E2EBE5] shadow-xs cursor-pointer hover:border-[#145C3D] transition-all"
          >
            <span className="text-[10px] font-bold uppercase text-slate-400 block">
              Rejected Ads
            </span>
            <p className="text-2xl font-black text-slate-700 mt-1">{rejectedProps.length}</p>
          </div>

          <div
            onClick={() => setActiveTab('reported')}
            className="bg-white p-4 rounded-2xl border border-[#E2EBE5] shadow-xs cursor-pointer hover:border-rose-500 transition-all"
          >
            <span className="text-[10px] font-bold uppercase text-rose-600 block">
              Reported Content
            </span>
            <p className="text-2xl font-black text-rose-700 mt-1">
              {reportedListings.length}
            </p>
          </div>

          <div
            onClick={() => setActiveTab('users')}
            className="bg-white p-4 rounded-2xl border border-[#E2EBE5] shadow-xs cursor-pointer hover:border-[#145C3D] transition-all"
          >
            <span className="text-[10px] font-bold uppercase text-slate-500 block">
              Registered Users
            </span>
            <p className="text-2xl font-black text-slate-900 mt-1">2,840+</p>
          </div>
        </div>

        {/* Tab Controls Bar with Refresh */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
          <div className="flex border-b border-[#E2EBE5] bg-white rounded-2xl p-1.5 overflow-x-auto no-scrollbar shadow-xs flex-grow">
            {[
              { id: 'pending', label: 'Pending Review', count: pendingProps.length },
              { id: 'approved', label: 'Approved Properties', count: approvedProps.length },
              { id: 'rejected', label: 'Rejected Properties', count: rejectedProps.length },
              { id: 'reported', label: 'Reported Listings', count: reportedListings.length },
              { id: 'users', label: 'Users Management' },
              { id: 'stats', label: 'Kerala Statistics' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-[#145C3D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                      activeTab === tab.id ? 'bg-[#D6AD55] text-[#0C3423]' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={handleRefresh}
            disabled={actionLoadingId === 'refresh'}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-white border border-[#E2EBE5] hover:border-[#145C3D] text-xs font-bold text-slate-700 hover:text-[#145C3D] shadow-xs transition-all active:scale-95 disabled:opacity-50"
            title="Refresh listings from database"
          >
            <RefreshCw size={14} className={actionLoadingId === 'refresh' ? 'animate-spin text-[#145C3D]' : ''} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2EBE5] shadow-xs min-h-[400px]">
          {/* 1. Pending Approval Tab */}
          {activeTab === 'pending' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-base text-slate-900">
                  Properties Awaiting Verification ({pendingProps.length})
                </h3>
                <span className="text-xs text-slate-400">
                  Approved listings immediately become publicly visible on VeeduX
                </span>
              </div>

              {pendingProps.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-xs">
                  All listings reviewed! Zero queue backlog.
                </div>
              ) : (
                <div className="space-y-3">
                  {pendingProps.map((p) => (
                    <div
                      key={p.id}
                      className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#E2EBE5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        {p.images?.[0] ? (
                          <img
                            src={p.images[0]}
                            alt={p.title}
                            className="w-20 h-20 rounded-2xl object-cover"
                          />
                        ) : (
                          <div className="w-20 h-20 rounded-2xl bg-emerald-100/70 text-[#145C3D] flex items-center justify-center flex-shrink-0">
                            <Home size={28} />
                          </div>
                        )}
                        <div>
                          <span className="font-black text-sm text-[#145C3D]">{p.price}</span>
                          <h4 className="font-bold text-xs text-slate-900">{p.title}</h4>
                          <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-1">
                            <span>{p.location}</span>
                            <span>•</span>
                            <span>{p.landArea || 'Land N/A'}</span>
                            <span>•</span>
                            <span>Owner: {p.seller?.name}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto">
                        <button
                          onClick={() => navigateTo('details', p.id)}
                          className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50"
                        >
                          Preview Full Ad
                        </button>
                        <button
                          onClick={() => handleReject(p)}
                          disabled={actionLoadingId === p.id}
                          className="px-3 py-2 rounded-xl border border-rose-300 text-rose-600 text-xs font-bold hover:bg-rose-50 disabled:opacity-50 transition-all"
                        >
                          {actionLoadingId === p.id ? 'Working...' : 'Reject'}
                        </button>
                        <button
                          onClick={() => handleApprove(p)}
                          disabled={actionLoadingId === p.id}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#145C3D] hover:bg-[#0C3423] disabled:opacity-50 text-white text-xs font-bold shadow-md transition-all active:scale-95"
                        >
                          {actionLoadingId === p.id ? (
                            <>
                              <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Approving...</span>
                            </>
                          ) : (
                            <>
                              <Check size={14} className="text-[#D6AD55]" />
                              <span>Approve & Publish Live</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 2. Approved Properties Tab */}
          {activeTab === 'approved' && (
            <div className="space-y-4">
              <h3 className="font-bold text-base text-slate-900 pb-3 border-b border-slate-100">
                Live Online Listings ({approvedProps.length})
              </h3>
              {approvedProps.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-xs">
                  No approved properties currently live.
                </div>
              ) : (
                <div className="space-y-2.5">
                  {approvedProps.map((p) => (
                    <div
                      key={p.id}
                      className="p-3.5 rounded-2xl bg-[#FAF8F2] border border-[#E2EBE5] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        {p.images?.[0] ? (
                          <img
                            src={p.images[0]}
                            alt={p.title}
                            className="w-14 h-14 rounded-xl object-cover"
                          />
                        ) : (
                          <div className="w-14 h-14 rounded-xl bg-emerald-100/70 text-[#145C3D] flex items-center justify-center">
                            <Home size={20} />
                          </div>
                        )}
                        <div>
                          <span className="font-black text-xs text-[#145C3D]">{p.price}</span>
                          <h4 className="font-bold text-xs text-slate-900">{p.title}</h4>
                          <p className="text-[10px] text-slate-500">{p.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => navigateTo('details', p.id)}
                          className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#145C3D]"
                          title="View Live Ad"
                        >
                          <Eye size={15} />
                        </button>
                        <button
                          onClick={() => rejectProperty(p.id)}
                          className="px-2.5 py-1.5 rounded-xl border border-rose-200 text-rose-600 text-[11px] font-semibold hover:bg-rose-50"
                        >
                          Unpublish
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 3. Rejected Properties Tab */}
          {activeTab === 'rejected' && (
            <div className="space-y-4">
              <h3 className="font-bold text-base text-slate-900 pb-3 border-b border-slate-100">
                Rejected / Taken Down Properties ({rejectedProps.length})
              </h3>
              {rejectedProps.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-xs">
                  Zero rejected listings.
                </div>
              ) : (
                <div className="space-y-2">
                  {rejectedProps.map((p) => (
                    <div
                      key={p.id}
                      className="p-3.5 rounded-2xl bg-rose-50/50 border border-rose-200 flex items-center justify-between"
                    >
                      <div>
                        <span className="font-bold text-xs text-rose-900">{p.title}</span>
                        <p className="text-[10px] text-slate-500">
                          {p.location} • Status: Rejected by Moderator
                        </p>
                      </div>
                      <button
                        onClick={() => handleApprove(p)}
                        disabled={actionLoadingId === p.id}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-emerald-300 text-emerald-800 rounded-xl text-xs font-bold hover:bg-emerald-50 disabled:opacity-50 transition-all shadow-2xs"
                      >
                        {actionLoadingId === p.id ? (
                          <>
                            <span className="w-3 h-3 border-2 border-emerald-700/30 border-t-emerald-700 rounded-full animate-spin" />
                            <span>Restoring...</span>
                          </>
                        ) : (
                          <>
                            <Check size={13} className="text-[#145C3D]" />
                            <span>Restore & Approve</span>
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 4. Reported Listings Tab */}
          {activeTab === 'reported' && (
            <div className="space-y-4">
              <h3 className="font-bold text-base text-slate-900 pb-3 border-b border-slate-100">
                User Reports & Inaccurate Content ({reportedListings.length})
              </h3>

              {reportedListings.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-xs">
                  Zero reported issues pending investigation.
                </div>
              ) : (
                <div className="space-y-3">
                  {reportedListings.map((rep) => (
                    <div
                      key={rep.id}
                      className="p-4 rounded-2xl bg-white border-2 border-rose-200 space-y-2 shadow-xs"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900">{rep.propertyTitle}</span>
                        <span className="text-[10px] text-slate-400">{rep.date}</span>
                      </div>
                      <div className="bg-rose-50 p-2.5 rounded-xl text-xs text-rose-900 border border-rose-100">
                        <p className="font-bold">Reported Reason:</p>
                        <p className="text-[11px] mt-0.5">{rep.reason}</p>
                      </div>
                      <div className="pt-2 flex items-center justify-between text-xs">
                        <span className="text-slate-500 text-[11px]">
                          Reported by: {rep.reportedBy}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleDismissReport(rep.id)}
                            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                          >
                            Dismiss Report
                          </button>
                          <button
                            onClick={() => handleTakeDownReportedProperty(rep)}
                            className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs"
                          >
                            Take Down Listing
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 5. Users Tab */}
          {activeTab === 'users' && (
            <div className="space-y-4">
              <h3 className="font-bold text-base text-slate-900 pb-3 border-b border-slate-100">
                Registered Kerala Users & Direct Owners
              </h3>
              <div className="space-y-2.5">
                {usersList.map((u) => (
                  <div
                    key={u.id}
                    className="p-3.5 rounded-2xl bg-[#FAF8F2] border border-[#E2EBE5] flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">{u.name}</h4>
                      <p className="text-[10px] text-slate-500">
                        {u.phone} • {u.location} • {u.role}
                      </p>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                      {u.listingsCount} Listings
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Stats Tab */}
          {activeTab === 'stats' && (
            <div className="space-y-6">
              <h3 className="font-bold text-base text-slate-900 pb-3 border-b border-slate-100">
                Kerala Real Estate Marketplace Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-[#FAF8F2] p-4 rounded-2xl border border-[#E2EBE5] space-y-1">
                  <span className="text-slate-400 font-bold block">Top District</span>
                  <p className="text-base font-black text-[#145C3D]">Ernakulam (Kochi)</p>
                  <p className="text-slate-500 text-[11px]">38% of all buyer inquiries</p>
                </div>
                <div className="bg-[#FAF8F2] p-4 rounded-2xl border border-[#E2EBE5] space-y-1">
                  <span className="text-slate-400 font-bold block">Highest In-Demand Type</span>
                  <p className="text-base font-black text-[#145C3D]">Houses & Villas (3-4 BHK)</p>
                  <p className="text-slate-500 text-[11px]">Kakkanad & Thrissur leading</p>
                </div>
                <div className="bg-[#FAF8F2] p-4 rounded-2xl border border-[#E2EBE5] space-y-1">
                  <span className="text-slate-400 font-bold block">Average Land Rate</span>
                  <p className="text-base font-black text-[#145C3D]">₹ 6.5 - 14 Lakhs / Cent</p>
                  <p className="text-slate-500 text-[11px]">Across NH 66 corridors</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
