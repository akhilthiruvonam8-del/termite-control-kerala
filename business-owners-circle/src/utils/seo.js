/**
 * SEO & OpenGraph / Social Metadata Helper for TermiteControl.me
 */

export const updateMetaTags = (options = {}) => {
  if (typeof document === 'undefined') return;

  try {
    const {
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
    } = options;

    const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://termitecontrol.me/');
    const defaultImage = typeof window !== 'undefined' 
      ? `${window.location.origin}/images/wayanad-luxury-hero.jpg` 
      : 'https://termitecontrol.me/images/wayanad-luxury-hero.jpg';
    const ogImage = image || defaultImage;

    const setMeta = (attrName, attrVal, content) => {
      if (!content) return;
      try {
        const metas = document.getElementsByTagName('meta');
        let found = false;
        for (let i = 0; i < metas.length; i++) {
          if (metas[i].getAttribute(attrName) === attrVal) {
            metas[i].setAttribute('content', content);
            found = true;
            break;
          }
        }
        if (!found) {
          const meta = document.createElement('meta');
          meta.setAttribute(attrName, attrVal);
          meta.setAttribute('content', content);
          document.head.appendChild(meta);
        }
      } catch (err) {}
    };

    // Title
    if (title) {
      document.title = title;
      setMeta('name', 'title', title);
      setMeta('property', 'og:title', title);
      setMeta('name', 'twitter:title', title);
      setMeta('property', 'twitter:title', title);
    }

    // Description
    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
      setMeta('property', 'twitter:description', description);
    }

    // Keywords
    if (keywords) {
      setMeta('name', 'keywords', keywords);
    }

    // URLs & Site
    setMeta('property', 'og:url', currentUrl);
    setMeta('name', 'twitter:url', currentUrl);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', siteName);
    setMeta('property', 'og:locale', locale);

    // Social Images (WhatsApp, Facebook, Twitter, iMessage)
    if (ogImage) {
      setMeta('property', 'og:image', ogImage);
      setMeta('property', 'og:image:secure_url', ogImage);
      setMeta('property', 'og:image:width', String(imageWidth));
      setMeta('property', 'og:image:height', String(imageHeight));
      setMeta('property', 'og:image:type', typeof ogImage === 'string' && ogImage.endsWith('.png') ? 'image/png' : 'image/jpeg');
      if (imageAlt) {
        setMeta('property', 'og:image:alt', imageAlt);
      }

      // Twitter Card
      setMeta('name', 'twitter:card', 'summary_large_image');
      setMeta('property', 'twitter:card', 'summary_large_image');
      setMeta('name', 'twitter:image', ogImage);
      setMeta('property', 'twitter:image', ogImage);
    }

    // Canonical Link
    try {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', currentUrl);
    } catch (err) {}

    // Dynamic Schema Injection
    if (schema) {
      try {
        let schemaScript = document.getElementById('dynamic-page-schema');
        if (!schemaScript) {
          schemaScript = document.createElement('script');
          schemaScript.id = 'dynamic-page-schema';
          schemaScript.type = 'application/ld+json';
          document.head.appendChild(schemaScript);
        }
        schemaScript.textContent = JSON.stringify(schema);
      } catch (err) {}
    }
  } catch (err) {
    console.error('Error updating meta tags:', err);
  }
};


