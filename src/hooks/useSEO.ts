import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const BASE_URL = 'https://www.thebrick.com.ng';
const DEFAULT_IMAGE = `${BASE_URL}/images/doxa26.jpeg`;


/**
 * useSEO — Dynamically updates all SEO-critical meta tags per page.
 * Call this at the top of every page component.
 */
export function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  structuredData,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes('BRICKS') ? title : `${title} | BRICKS Furniture`;

    // ── Document title ──────────────────────────────────────────
    document.title = fullTitle;

    // ── Helper to upsert a <meta> tag ───────────────────────────
    const setMeta = (selector: string, content: string, attr = 'content') => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrValue] = selector.replace('[', '').replace(']', '').split('=');
        el.setAttribute(attrName, attrValue.replace(/"/g, ''));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, content);
    };

    // ── Helper to upsert a <link> tag ───────────────────────────
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── Primary meta ────────────────────────────────────────────
    setMeta('meta[name="description"]', description);
    if (keywords) setMeta('meta[name="keywords"]', keywords);

    // ── Canonical ───────────────────────────────────────────────
    const canonicalHref = canonical ? `${BASE_URL}${canonical}` : `${BASE_URL}/`;
    setLink('canonical', canonicalHref);

    // ── Open Graph ──────────────────────────────────────────────
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalHref);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[property="og:type"]', ogType);

    // ── Twitter Card ────────────────────────────────────────────
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', ogImage);

    // ── JSON-LD structured data ─────────────────────────────────
    if (structuredData) {
      const id = 'page-structured-data';
      let existing = document.getElementById(id);
      if (!existing) {
        existing = document.createElement('script');
        existing.id = id;
        existing.setAttribute('type', 'application/ld+json');
        document.head.appendChild(existing);
      }
      existing.textContent = JSON.stringify(structuredData);
    }

    return () => {
      // Clean up page-level structured data on unmount
      const el = document.getElementById('page-structured-data');
      if (el) el.remove();
    };
  }, [title, description, keywords, canonical, ogImage, ogType, structuredData]);
}
