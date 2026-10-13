/**
 * SEO & OpenGraph / Social Metadata Helper for VeeduX
 */

export const updateMetaTags = (options = {}) => {
  if (typeof document === 'undefined') return;

  try {
    const {
      title = "VeeduX — Every Property. One Place. | Kerala's Modern Property Marketplace",
      description = "Buy, sell or rent land, houses, villas, apartments, flats, commercial buildings, and shops across Kerala with confidence on VeeduX.",
      keywords = "kerala real estate, buy house in kerala, land for sale kerala, villas kochi, flats kozhikode, properties thrissur, veedux",
      canonicalUrl,
      image = "/images/alappuzha-waterfront-villa.jpg",
      siteName = "VeeduX Kerala",
    } = options;

    const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://veeduxdeploy.vercel.app');

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

    if (title) {
      document.title = title;
      setMeta('name', 'title', title);
      setMeta('property', 'og:title', title);
      setMeta('name', 'twitter:title', title);
    }

    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }

    if (keywords) {
      setMeta('name', 'keywords', keywords);
    }

    setMeta('property', 'og:url', currentUrl);
    setMeta('property', 'og:site_name', siteName);
    setMeta('property', 'og:image', image);
    setMeta('name', 'twitter:image', image);
    setMeta('name', 'twitter:card', 'summary_large_image');
  } catch (err) {
    console.error('Error updating SEO tags:', err);
  }
};
