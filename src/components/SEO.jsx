import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_SEO, SEO_CONFIG } from '@/lib/seo';

const SITE_URL = 'https://kopperstone.com';

function setMetaByName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaByProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

// Renders nothing — just keeps <title>/meta description/canonical/og:*/twitter:* in sync
// with the current route. Every route previously shared the single set of tags baked into
// index.html, so every inner page looked identical to search engines and link-preview bots.
// This runs in the real app, so scripts/prerender.mjs (a real headless browser) captures the
// per-route tags into each static file too — no separate SSR/head-management step needed.
export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');
    const meta = SEO_CONFIG[path] || DEFAULT_SEO;
    const url = `${SITE_URL}${path === '/' ? '/' : `${path}/`}`;

    document.title = meta.title;
    setMetaByName('description', meta.description);
    setMetaByProperty('og:title', meta.title);
    setMetaByProperty('og:description', meta.description);
    setMetaByProperty('og:url', url);
    setMetaByName('twitter:title', meta.title);
    setCanonical(url);
  }, [location.pathname]);

  return null;
}
