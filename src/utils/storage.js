/**
 * VeeduX Property Marketplace - Local Storage & Leads/Enquiries Utility
 */

const STORAGE_KEY = 'veedux_enquiries_database_v1';

export const saveEnquiry = (enquiryData) => {
  try {
    const existing = getStoredEnquiries();
    const newEnquiry = {
      id: 'VX-' + Date.now().toString(36).toUpperCase() + '-' + Math.floor(Math.random() * 1000),
      createdAt: new Date().toISOString(),
      formattedDate: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      ...enquiryData,
      status: 'New',
      sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
      pagePath: typeof window !== 'undefined' ? window.location.pathname : '',
    };

    const updated = [newEnquiry, ...existing];
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }

    return { success: true, enquiry: newEnquiry };
  } catch (error) {
    console.error('Failed to store enquiry:', error);
    return { success: false, error: error.message };
  }
};

export const getStoredEnquiries = () => {
  try {
    if (typeof localStorage === 'undefined') return [];
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to read enquiries:', e);
    return [];
  }
};

export const updateEnquiryStatus = (id, newStatus) => {
  try {
    const enquiries = getStoredEnquiries();
    const updated = enquiries.map((item) => (item.id === id ? { ...item, status: newStatus } : item));
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
    return updated;
  } catch (e) {
    console.error('Failed to update enquiry status:', e);
    return [];
  }
};

export const deleteEnquiry = (id) => {
  try {
    const enquiries = getStoredEnquiries();
    const filtered = enquiries.filter((item) => item.id !== id);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    }
    return filtered;
  } catch (e) {
    console.error('Failed to delete enquiry:', e);
    return [];
  }
};

export const exportEnquiriesToCSV = () => {
  const enquiries = getStoredEnquiries();
  if (enquiries.length === 0) {
    alert('No enquiries recorded yet.');
    return;
  }

  const headers = ['Enquiry ID', 'Date & Time', 'Customer Name', 'Phone Number', 'Property Title', 'Property ID', 'Message', 'Status'];
  const rows = enquiries.map((e) => [
    `"${e.id || ''}"`,
    `"${e.formattedDate || e.createdAt || ''}"`,
    `"${(e.name || '').replace(/"/g, '""')}"`,
    `"${e.phone || ''}"`,
    `"${(e.propertyTitle || '').replace(/"/g, '""')}"`,
    `"${e.propertyId || ''}"`,
    `"${(e.message || '').replace(/"/g, '""')}"`,
    `"${e.status || 'New'}"`,
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `VeeduX_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
