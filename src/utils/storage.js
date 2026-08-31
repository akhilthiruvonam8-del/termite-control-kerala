/**
 * Lead Storage & CRM Utility for TermiteControl.me
 * Stores customer inspection requests and quotes locally, with export to CSV and webhook dispatch capability.
 */

const STORAGE_KEY = 'tc_leads_database_v1';

export const saveLead = (leadData) => {
  try {
    const existing = getStoredLeads();
    const newLead = {
      id: 'TC-' + Date.now().toString(36).toUpperCase() + '-' + Math.floor(Math.random() * 1000),
      createdAt: new Date().toISOString(),
      formattedDate: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      ...leadData,
      status: 'New',
      sourceUrl: window.location.href,
      pagePath: window.location.pathname,
    };

    const updated = [newLead, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Also attempt optional webhook if configured
    if (window.TC_WEBHOOK_URL) {
      fetch(window.TC_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead)
      }).catch(err => console.warn('Webhook dispatch failed (optional):', err));
    }

    return { success: true, lead: newLead };
  } catch (error) {
    console.error('Failed to store lead:', error);
    return { success: false, error: error.message };
  }
};

export const getStoredLeads = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to read leads:', e);
    return [];
  }
};

export const updateLeadStatus = (id, newStatus) => {
  try {
    const leads = getStoredLeads();
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to update lead status:', e);
    return [];
  }
};

export const deleteLead = (id) => {
  try {
    const leads = getStoredLeads();
    const filtered = leads.filter(l => l.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return filtered;
  } catch (e) {
    console.error('Failed to delete lead:', e);
    return [];
  }
};

export const exportLeadsToCSV = () => {
  const leads = getStoredLeads();
  if (leads.length === 0) {
    alert('No leads recorded yet in database.');
    return;
  }

  const headers = ['Lead ID', 'Date & Time', 'Customer Name', 'Phone Number', 'Location / City', 'Property Type', 'Problem Type', 'Message / Notes', 'Status', 'Page Path'];
  const rows = leads.map(l => [
    `"${l.id || ''}"`,
    `"${l.formattedDate || l.createdAt || ''}"`,
    `"${(l.name || '').replace(/"/g, '""')}"`,
    `"${l.phone || ''}"`,
    `"${(l.location || '').replace(/"/g, '""')}"`,
    `"${(l.propertyType || '').replace(/"/g, '""')}"`,
    `"${(l.problem || '').replace(/"/g, '""')}"`,
    `"${(l.message || '').replace(/"/g, '""')}"`,
    `"${l.status || 'New'}"`,
    `"${l.pagePath || ''}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `TermiteControl_Me_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
