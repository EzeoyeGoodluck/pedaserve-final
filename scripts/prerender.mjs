// Prerender every route to a static HTML file in dist/, with the page's own
// title, meta tags and JSON-LD injected. Run after `vite build` and the SSR
// build (see package.json "build").
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const SITE_URL = 'https://pedaserve.com';

const template = readFileSync(resolve(dist, 'index.html'), 'utf8');
const { render, routes } = await import(pathToFileURL(resolve(dist, 'server/entry-server.js')).href);

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function headTags(head, path) {
  const url = head.canonicalUrl || `${SITE_URL}${path === '/' ? '' : path}`;
  const img = head.ogImage && head.ogImage.startsWith('/') ? `${SITE_URL}${head.ogImage}` : head.ogImage;
  const tags = [
    `<title>${esc(head.title)}</title>`,
    `<meta name="description" content="${esc(head.description)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="${esc(head.ogType || 'website')}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:title" content="${esc(head.title)}" />`,
    `<meta property="og:description" content="${esc(head.description)}" />`,
    `<meta property="og:image" content="${esc(img)}" />`,
    `<meta property="og:site_name" content="Pedaserve" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(head.title)}" />`,
    `<meta name="twitter:description" content="${esc(head.description)}" />`,
    `<meta name="twitter:image" content="${esc(img)}" />`,
  ];
  if (head.author) tags.push(`<meta name="author" content="${esc(head.author)}" />`);
  if (head.publishedTime) tags.push(`<meta property="article:published_time" content="${esc(head.publishedTime)}" />`);
  if (head.schemaData) {
    tags.push(`<script id="pedaserve-dynamic-schema" type="application/ld+json">${JSON.stringify(head.schemaData).replace(/</g, '\\u003c')}</script>`);
  }
  return tags.join('\n    ');
}

const all = routes();
const today = new Date().toISOString().slice(0, 10);
const sitemap = [];

for (const path of all) {
  const { html, head } = render(path);
  const page = template
    .replace(/<!-- PAGE_HEAD -->[\s\S]*?<!-- \/PAGE_HEAD -->/, `<!-- PAGE_HEAD -->\n    ${headTags(head, path)}\n    <!-- /PAGE_HEAD -->`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const outDir = path === '/' ? dist : resolve(dist, path.slice(1));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, 'index.html'), page);

  const priority = path === '/' ? '1.0' : path.startsWith('/insights/') ? '0.8' : '0.7';
  sitemap.push(`  <url><loc>${SITE_URL}${path === '/' ? '/' : path}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`);
  console.log('prerendered', path);
}

writeFileSync(resolve(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.join('\n')}\n</urlset>\n`);

// The SSR bundle is a build artefact, not something to deploy.
rmSync(resolve(dist, 'server'), { recursive: true, force: true });
console.log(`done: ${all.length} pages`);
