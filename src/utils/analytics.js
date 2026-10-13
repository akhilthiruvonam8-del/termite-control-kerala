/**
 * VeeduX Real Estate Marketplace - Analytics & Engagement Tracking
 */

export const VEEDUX_PHONE = "+91 98471 22345";
export const VEEDUX_EMAIL = "support@veedux.com";
export const VEEDUX_WHATSAPP = "919847122345";

export const trackEvent = (eventName, data = {}) => {
  try {
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...data,
    };
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(payload);
    }
    console.info(`[VeeduX Event]: ${eventName}`, payload);
  } catch (err) {
    console.error('Event tracking error:', err);
  }
};

export const createWhatsAppPropertyLink = (phone, property) => {
  const targetPhone = phone || VEEDUX_WHATSAPP;
  const message = property
    ? `Hello, I saw your property "${property.title}" (${property.price}, ${property.locality || property.district}) on VeeduX Kerala. Is it available?`
    : `Hello VeeduX, I am looking to buy/rent property in Kerala. Please help.`;
  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
};
