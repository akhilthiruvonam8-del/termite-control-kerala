/**
 * Analytics and Conversion Tracking utility for TermiteControl.me
 * Supports Google Ads conversion tracking, GA4 events, Meta pixel hooks, and internal CRM tracking.
 */

export const PRIMARY_PHONE = "9020040009";
export const PRIMARY_PHONE_DISPLAY = "9020040009";
export const WHATSAPP_NUMBER = "919020040009";

export const trackConversion = (eventName, params = {}) => {
  try {
    const timestamp = new Date().toISOString();
    const eventPayload = {
      event: eventName,
      timestamp,
      url: window.location.href,
      pathname: window.location.pathname,
      ...params
    };

    // Google Tag / Google Ads / GA4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        send_to: window.GA_CONVERSION_ID || undefined,
        ...params
      });
    }

    // Google Tag Manager dataLayer
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(eventPayload);
    }

    // Meta Pixel (fbq)
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, params);
    }

    console.info(`[Conversion Tracked]: ${eventName}`, eventPayload);
  } catch (err) {
    console.error("Error logging conversion event:", err);
  }
};

/**
 * Creates a prefilled WhatsApp chat link with optional context (e.g., location, service, property)
 */
export const getWhatsAppLink = (context = {}) => {
  const { location, service, propertyType, message } = context;
  let text = "Hi, I need termite control / wood borer treatment. Please provide details.";
  
  if (location && service) {
    text = `Hi TermiteControl.me, I am looking for ${service} in ${location}. Please provide inspection and quotation details.`;
  } else if (location) {
    text = `Hi TermiteControl.me, I need termite / wood borer treatment for my property in ${location}. Please share consultation and inspection details.`;
  } else if (service) {
    text = `Hi, I need information regarding ${service}. Please contact me.`;
  } else if (message) {
    text = message;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

/**
 * Handles Phone click with conversion tracking
 */
export const handlePhoneClick = (source = 'direct') => {
  trackConversion('phone_call_click', {
    source,
    phone: PRIMARY_PHONE,
    page: window.location.pathname
  });
  window.location.href = `tel:${PRIMARY_PHONE}`;
};

/**
 * Handles WhatsApp click with conversion tracking
 */
export const handleWhatsAppClick = (source = 'direct', context = {}) => {
  trackConversion('whatsapp_click', {
    source,
    context,
    page: window.location.pathname
  });
  const link = getWhatsAppLink(context);
  window.open(link, '_blank', 'noopener,noreferrer');
};
