import { renderToString } from 'react-dom/server';
import App from './App';
import { HeadContext, HeadData } from './lib/head';
import { ARTICLES } from './data/mockData';
import { PAGE_PATHS } from './lib/routes';

/** Called by scripts/prerender.mjs for every route. */
export function render(path: string): { html: string; head: HeadData } {
  const head: HeadData = {};
  const html = renderToString(
    <HeadContext.Provider value={head}>
      <App initialPath={path} />
    </HeadContext.Provider>
  );
  return { html, head };
}

/** Every URL that should exist as a static file. */
export function routes(): string[] {
  const pages = Object.entries(PAGE_PATHS)
    .filter(([key]) => !['article', 'agribusiness', 'energy-procurement', 'finance-and-capital'].includes(key))
    .map(([, p]) => p);
  const articles = ARTICLES.map((a) => `/insights/${a.slug}`);
  return Array.from(new Set([...pages, ...articles]));
}
