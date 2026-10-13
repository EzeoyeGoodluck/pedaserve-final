import { createContext } from 'react';

/**
 * During prerendering, SEOHead writes its props into this context instead
 * of touching the DOM. The prerender script then injects them into the
 * static HTML so crawlers see per-page titles, descriptions and schema.
 * In the browser the context is null and SEOHead updates document.head.
 */
export interface HeadData {
  title?: string;
  description?: string;
  ogType?: string;
  ogImage?: string;
  canonicalUrl?: string;
  publishedTime?: string;
  author?: string;
  keywords?: string[];
  schemaData?: object;
}

export const HeadContext = createContext<HeadData | null>(null);
