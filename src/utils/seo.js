/**
 * SEO & OpenGraph / Social Metadata Helper for TermiteControl.me
 */

const setMetaTag = (attrName, attrVal, content) => {
  if (!content || typeof document === 'undefined') return;
  let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrVal);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

export const updateMetaTags = ({
  title,
  description,
  keywords,
  canonicalUrl,
  image,
  imageAlt,
  imageWidth = '1200',
  imageHeight = '630',
  type = 'website',
  siteName = 'TermiteControl.me - A Unit of Eco Pest India',
  locale = 'en_IN',
  schema
}) => {
  if (typeof document === 'undefined') return;

  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://termitecontrol.me/');
  const defaultImage = typeof window !== 'undefined' 
    ? `${window.location.origin}/images/wayanad-luxury-hero.jpg` 
    : 'https://termitecontrol.me/images/wayanad-luxury-hero.jpg';
  const ogImage = image || defaultImage;

  // Title
  if (title) {
    document.title = title;
    setMetaTag('name', 'title', title);
    setMetaTag('property', 'og:title', title);
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('property', 'twitter:title', title);
  }

  // Description
  if (description) {
    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:description', description);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('property', 'twitter:description', description);
  }

  // Keywords
  if (keywords) {
    setMetaTag('name', 'keywords', keywords);
  }

  // URLs & Site
  setMetaTag('property', 'og:url', currentUrl);
  setMetaTag('name', 'twitter:url', currentUrl);
  setMetaTag('property', 'og:type', type);
  setMetaTag('property', 'og:site_name', siteName);
  setMetaTag('property', 'og:locale', locale);

  // Social Images (WhatsApp, Facebook, Twitter, iMessage)
  setMetaTag('property', 'og:image', ogImage);
  setMetaTag('property', 'og:image:secure_url', ogImage);
  setMetaTag('property', 'og:image:width', String(imageWidth));
  setMetaTag('property', 'og:image:height', String(imageHeight));
  setMetaTag('property', 'og:image:type', ogImage.endsWith('.png') ? 'image/png' : 'image/jpeg');
  if (imageAlt) {
    setMetaTag('property', 'og:image:alt', imageAlt);
  }

  // Twitter Card
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('property', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:image', ogImage);
  setMetaTag('property', 'twitter:image', ogImage);

  // Canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', currentUrl);

  // Dynamic Schema Injection
  if (schema) {
    let schemaScript = document.getElementById('dynamic-page-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'dynamic-page-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);
  }
};

