// Central route table. Paths are real URLs (no hash), which is what search
// engines index. Legacy keys from the old hash router are kept as aliases so
// existing onNavigate('contact-us') calls keep working.

import { ARTICLES } from '../data/mockData';

export type PageKey =
  | 'home' | 'insights' | 'article' | 'contact' | 'services'
  | 'the-writing-hub' | 'seo-and-digital-marketing' | 'training-and-leadership'
  | 'agribusiness' | 'energy-procurement' | 'blog-management'
  | 'charity-and-foundation' | 'scientific-documentation' | 'creative-direction'
  | 'economics-and-policy' | 'finance-and-capital' | 'about-us'
  | 'privacy-policy' | 'terms-of-service' | 'sitemap';

export const SITE_URL = 'https://pedaserve.com';

/** Canonical path for every page key. */
export const PAGE_PATHS: Record<PageKey, string> = {
  'home': '/',
  'insights': '/insights',
  'article': '/insights',
  'contact': '/contact',
  'services': '/services',
  'the-writing-hub': '/the-writing-hub',
  'seo-and-digital-marketing': '/seo-and-digital-marketing',
  'training-and-leadership': '/training-and-leadership',
  'agribusiness': '/agribusiness',
  'energy-procurement': '/energy-procurement',
  'blog-management': '/blog-management',
  'charity-and-foundation': '/charity-and-foundation',
  'scientific-documentation': '/scientific-documentation',
  'creative-direction': '/creative-direction',
  'economics-and-policy': '/economics-and-policy',
  'finance-and-capital': '/finance-and-capital',
  'about-us': '/about-us',
  'privacy-policy': '/privacy-policy',
  'terms-of-service': '/terms-of-service',
  'sitemap': '/sitemap',
};

/** Legacy hash-router keys and short aliases -> page key. */
const ALIASES: Record<string, PageKey> = {
  'home': 'home',
  'pedaserve-modernized-homepage-daily-insights-hub': 'home',
  'daily-insights-and-blog': 'insights',
  'blog-daily-insights': 'insights',
  'insights': 'insights',
  'contact-us': 'contact',
  'contact': 'contact',
  'get-started': 'contact',
  'consultation': 'contact',
  'services': 'services',
  'the-writing-hub': 'the-writing-hub',
  'seo-and-digital-marketing': 'seo-and-digital-marketing',
  'website-design-and-branding': 'seo-and-digital-marketing',
  'training-and-leadership': 'training-and-leadership',
  'coaching-mentoring-leadership': 'training-and-leadership',
  'agribusiness': 'agribusiness',
  'energy-procurement': 'energy-procurement',
  'blog-management': 'blog-management',
  'blog-editorial': 'blog-management',
  'charity-and-foundation': 'charity-and-foundation',
  'charity': 'charity-and-foundation',
  'foundation': 'charity-and-foundation',
  'scientific-documentation': 'scientific-documentation',
  'scientific': 'scientific-documentation',
  'research-documentation': 'scientific-documentation',
  'creative-direction': 'creative-direction',
  'creative': 'creative-direction',
  'creative-strategy': 'creative-direction',
  'economics-and-policy': 'economics-and-policy',
  'economics': 'economics-and-policy',
  'policy': 'economics-and-policy',
  'finance-and-capital': 'finance-and-capital',
  'finance': 'finance-and-capital',
  'capital': 'finance-and-capital',
  'about-us': 'about-us',
  'privacy-policy': 'privacy-policy',
  'terms-of-service': 'terms-of-service',
  'sitemap': 'sitemap',
};

export interface RouteMatch {
  page: PageKey;
  articleSlug?: string;
}

/** Resolve a URL pathname (or legacy key) to a page. */
export function matchRoute(pathname: string): RouteMatch {
  let p = pathname.trim();
  if (p.startsWith('/')) p = p.slice(1);
  if (p.endsWith('/')) p = p.slice(0, -1);
  if (!p) return { page: 'home' };

  if (p.startsWith('insights/')) {
    return { page: 'article', articleSlug: p.slice('insights/'.length) };
  }
  // Legacy: #article/<id>
  if (p.startsWith('article/')) {
    return { page: 'article', articleSlug: p.slice('article/'.length) };
  }

  const key = ALIASES[p];
  return key ? { page: key } : { page: 'home' };
}

/** True when a legacy hash value refers to a page, not an in-page anchor. */
export function isLegacyRouteHash(hash: string): boolean {
  const p = hash.replace(/^\/?/, '').replace(/\/$/, '');
  return p in ALIASES || p.startsWith('article/') || p.startsWith('insights/');
}

/** Build a path from an onNavigate() call. */
export function pathFor(key: string, articleSlug?: string): string {
  if (key === 'article') {
    // Callers may pass an article id; URLs always use the slug.
    const art = ARTICLES.find((a) => a.id === articleSlug || a.slug === articleSlug);
    return `/insights/${art ? art.slug : (articleSlug ?? '')}`;
  }
  const page = ALIASES[key];
  return page ? PAGE_PATHS[page] : '/';
}
