import React, { useState, useEffect } from 'react';
import { X, Database, Download, Phone, MessageCircle, Search, Trash2, CheckCircle, Clock, RefreshCw } from 'lucide-react';
import { getStoredLeads, updateLeadStatus, deleteLead, exportLeadsToCSV } from '../utils/storage';
import { handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function LeadManagerModal({ isOpen, onClose }) {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');

  const loadLeads = () => {
    setLeads(getStoredLeads());
  };

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStatusChange = (id, newStatus) => {
    const updated = updateLeadStatus(id, newStatus);
    setLeads(updated);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this lead record?')) {
      const updated = deleteLead(id);
      setLeads(updated);
    }
  };

  const filtered = leads.filter(l => {
    const matchesSearch = 
      (l.name && l.name.toLowerCase().includes(search.toLowerCase())) ||
      (l.phone && l.phone.includes(search)) ||
      (l.location && l.location.toLowerCase().includes(search.toLowerCase())) ||
      (l.problem && l.problem.toLowerCase().includes(search.toLowerCase()));

    const matchesStatus = filterStatus === 'ALL' || l.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full h-[90vh] max-h-[850px] shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display flex items-center space-x-2">
                <span>TermiteControl.me — Lead CRM Database</span>
                <span className="text-xs bg-emerald-700/80 text-white font-bold px-2 py-0.5 rounded-full">
                  {leads.length} Total Leads
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Real-time customer enquiries, inspection requests, and contact submissions.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={exportLeadsToCSV}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shadow"
              title="Download Excel / CSV format"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export to CSV</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toolbar: Search, Filter, Refresh */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, phone, city, or problem..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-600 text-xs"
            />
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-600">Filter Status:</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <option value="ALL">All Statuses ({leads.length})</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Inspected">Inspected</option>
              <option value="Converted">Converted</option>
            </select>

            <button
              onClick={loadLeads}
              className="p-2 text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-xl"
              title="Refresh leads"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Leads Table / List */}
        <div className="flex-1 overflow-y-auto p-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400 space-y-3">
              <Database className="w-12 h-12 mx-auto text-slate-300" />
              <p className="text-base font-semibold text-slate-600">No leads found</p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                {leads.length === 0 
                  ? 'Submit an inspection or consultation form on the website to see incoming leads appear here in real time.' 
                  : 'No leads match your active search filters.'}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((lead) => (
                <div 
                  key={lead.id} 
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 transition"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {lead.id}
                      </span>
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase ${
                        lead.status === 'Converted' ? 'bg-emerald-100 text-emerald-800' :
                        lead.status === 'Inspected' ? 'bg-blue-100 text-blue-800' :
                        lead.status === 'Contacted' ? 'bg-amber-100 text-amber-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        ● {lead.status || 'New'}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {lead.formattedDate || lead.createdAt}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-2 pt-1">
                      <p className="text-base font-bold text-slate-900 font-display">
                        {lead.name}
                      </p>
                      <span className="text-sm font-bold text-emerald-700 font-mono">
                        +91 {lead.phone}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                      <span className="bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                        📍 {lead.location || 'Kerala'}
                      </span>
                      <span className="bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                        🏠 {lead.propertyType || 'Residential'}
                      </span>
                      <span className="bg-amber-50 border border-amber-200 text-amber-900 px-2 py-0.5 rounded font-semibold">
                        ⚠️ {lead.problem || 'Termite'}
                      </span>
                      {lead.pagePath && (
                        <span className="bg-slate-50 border border-slate-200 text-slate-500 px-2 py-0.5 rounded text-[10px]">
                          Page: {lead.pagePath}
                        </span>
                      )}
                    </div>

                    {lead.message && (
                      <p className="text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100 mt-1">
                        <span className="font-bold">Note: </span>{lead.message}
                      </p>
                    )}
                  </div>

                  {/* Right Actions: Quick Call, Quick WhatsApp, Status Dropdown, Delete */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 lg:pt-0 w-full lg:w-auto justify-end border-t lg:border-t-0 border-slate-100">
                    <a
                      href={`tel:${lead.phone}`}
                      className="p-2.5 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 rounded-xl transition flex items-center space-x-1 text-xs font-bold border border-emerald-200"
                      title="Call customer directly"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call</span>
                    </a>

                    <a
                      href={`https://wa.me/91${lead.phone}?text=${encodeURIComponent(`Hi ${lead.name}, regarding your termite / pest enquiry with TermiteControl.me for ${lead.location}...`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-[#25D366]/10 text-emerald-900 hover:bg-[#25D366]/20 rounded-xl transition flex items-center space-x-1 text-xs font-bold border border-[#25D366]/30"
                      title="WhatsApp customer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>

                    <select
                      value={lead.status || 'New'}
                      onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                      className="px-2.5 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 outline-none cursor-pointer"
                    >
                      <option value="New">Mark New</option>
                      <option value="Contacted">Mark Contacted</option>
                      <option value="Inspected">Mark Inspected</option>
                      <option value="Converted">Mark Converted</option>
                    </select>

                    <button
                      onClick={() => handleDelete(lead.id)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition"
                      title="Delete lead"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 text-center text-[11px] text-slate-500">
          Leads are securely persisted in browser storage and can be exported at any time. Connect webhooks by setting <code className="bg-slate-200 px-1 py-0.5 rounded">window.TC_WEBHOOK_URL</code>.
        </div>

      </div>
    </div>
  );
}
