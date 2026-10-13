# Changes in this pass

## Routing and prerendering (the SEO fix)
- Replaced hash routing (`/#services`) with real paths (`/services`, `/insights/<slug>`).
  Old `#` links still work: `App.tsx` rewrites them to the new path on load.
- Added `src/entry-server.tsx` and `scripts/prerender.mjs`. `npm run build` now
  produces one static HTML file per page (25 at present) with that page's own
  title, description, canonical, Open Graph tags and JSON-LD already in the
  HTML. Crawlers no longer need to run JavaScript to see content.
- `SEOHead` now feeds the prerender step on the server and keeps updating
  `document.head` in the browser on client-side navigation.
- `sitemap.xml` is generated at build time from the route list. The hand-written
  one with `#` URLs was removed.
- `main.tsx` hydrates prerendered HTML instead of rendering from scratch.
- `vercel.json`: added `cleanUrls` and `trailingSlash: false`. The rewrite to
  `index.html` stays as a fallback for unknown paths.

## Images
- Every image that pointed at a temporary `lh3.googleusercontent.com` link now
  points at `/public/images/`. Placeholders are in place; see
  `public/images/README.md` for what to drop in (logo, OG image, article covers).

## Forms
- Contact form and both newsletter forms now POST to endpoints set in `.env`
  (`VITE_CONTACT_ENDPOINT`, `VITE_NEWSLETTER_ENDPOINT`). Formspree works out of
  the box. Loading, error and success states added. Until the variables are set,
  submissions log a warning and show an error instead of silently vanishing.

## Removed fabricated content
- Homepage: "500+ projects", "98% retention", "24/7 feed", "12+ sectors",
  "+148% capability surge / Verified" badge, "Updated 42 mins ago",
  "Published Every Morning".
- About page `STATS`: replaced with neutral placeholders marked for real numbers.
- Insights page: fake "SERP Volatility Index +38.4%" chart overlay.
- Article page: the seeded fake comment from "Dr. Tari Harry".
- Contact success: fake reference number and "24-hour SLA" promise.
- Footer: "Over 1,450 C-suite subscribers", "7:00 AM dispatch".
- Structured data: placeholder phone number and unverified Twitter/LinkedIn URLs.
- "Today's Lead Report" badges are now "Featured" (articles are dated Oct 2025).

## Copy
- Homepage hero, section intro and SEO title/description rewritten in plain
  English aimed at business owners. Service pages and article bodies are
  untouched; they still read as generated and need a human pass.

## Housekeeping
- Removed AI Studio leftovers: `metadata.json`, Gemini env vars, `@google/genai`,
  `express`, `dotenv`, unused `motion`. Package renamed from `react-example`.
- `index.html`: `lang="en-GB"`, favicon, `areaServed: ["GB","NG"]`,
  `ProfessionalService` schema with real email, no placeholder contact data.

## Still to do (not code)
- Decide UK vs Nigeria positioning and align About page and service copy.
- Trim the service list if the target reader is a small business owner.
- Replace placeholder images and `STATS` with real assets and numbers.
- Humanise the six seed articles or replace them with the four planned posts.
- The Services page "ROI calculator" still shows invented multipliers (marked
  illustrative). Remove it or feed it real figures.
- Run `npm install && npm run build` locally once; the prerender step was
  smoke-tested here with a stubbed bundle, not with Vite itself.

# Second pass: homepage redesign and UK address

## Homepage (`src/pages/HomePage.tsx`, rewritten)
Ten sections became five: hero, what we do, how it works, latest articles,
closing call to action. Removed the hero image mosaic, gradient glows, article
search and category filters on the homepage, the twelve-service ticker, the
fake growth chart, the testimonial block and the philosophy strip.
- Hero is a single headline with one paragraph and two buttons. No image.
- Services are a four-row list (writing, SEO and websites, strategy, training),
  each linking to its page. The remaining eight service pages still exist and
  are reachable from the header and Services page.
- "How it works" is the only numbered element, because it is a sequence.
- One dark block at the end; amber is used only on primary buttons and the
  step numbers.
- Visible keyboard focus on every interactive element.

## Header
Removed the top ribbon (phone, email, address). Tagline under the logo is now
"Strategy, writing and SEO". The mega menu is unchanged and still lists twelve
practice areas; trim it once the service list is decided.

## Address and contact details
- New file `src/data/company.ts` holds the address and email. Everything reads
  from it.
- Watford address replaces the Port Harcourt one in: index.html structured
  data, header drawer, footer, About page, Contact page, and the Service
  schema on seven service pages. `areaServed` is now GB.
- Lagos and Abuja office cards removed. The two Nigerian phone numbers and all
  `tel:` links removed. Add a UK number to `company.ts` when you have one.
- Contact form phone prefix is now +44.

## Not changed
Service page copy, the six seed articles and the Insights page still use the
old voice and Nigerian framing in places. The Legal page still says Nigerian
law governs the terms; that needs a real UK terms page.

# Third pass: photography

- New `src/data/images.ts` lists every photo with photographer and Unsplash
  page link. All are free under the Unsplash License; credit is optional.
- Homepage hero now has one photo (an English village shop) beside the
  headline on large screens, below it on mobile. Loaded eagerly with high
  fetch priority since it is above the fold.
- About page: photo of two shop owners replaces the "Governance Creed" quote
  card.
- Six article covers now use real photos instead of the placeholder.
- Default social sharing image is the hero photo (absolute URL), so links
  shared on LinkedIn or WhatsApp show a picture.
- Images are hotlinked from images.unsplash.com with width and quality
  parameters. That is permitted and fast, but if you would rather have no
  external dependency, download them into /public/images and update one file.

# Fourth pass: footer trim and hero photo

- Footer and header menus: "Charity & Foundation" is now "Charity".
  Agribusiness and Energy Procurement are removed from the footer, the header
  mega menu, the mobile drawer, the Services page grid and filters, and the
  sitemap. The two pages still exist at /agribusiness and /energy-procurement
  so no old link breaks; delete the page files when you are sure.
- Homepage hero sits on a pale blue band instead of white, and the photo has a
  thin border, a soft shadow and a navy slab offset behind it, so it reads as a
  framed picture rather than bleeding into the page. The section rhythm is now
  pale, white, pale, white, navy.
- About page photo gets the same thin border.

# Fifth pass
- Finance & Capital Advisory removed from the footer, header menus, Services
  page and sitemap. Page file FinanceCapitalPage.tsx still exists at
  /finance-and-capital; delete when ready. Header menu column renamed
  "Strategy & Growth"; Services filter renamed "Economics & Policy".

# Sixth pass: Insights and Contact rewritten

## Insights page (`InsightsHubPage.tsx`, 764 lines to ~150)
Removed: the search box and Ctrl+K shortcut, the "Monograph #14" PDF download
block and its modal, archive pagination ("Page 1 of 42"), the sidebar
newsletter card with "Join 1,450+ executives", "Most read this month", the
topic cloud and the editorial standards badge. What remains: a title, one
featured article, a five-button topic filter that works, the article list,
and a short close pointing to the writing service.

## Contact page (`ContactPage.tsx`, 642 lines to ~200)
Four fields: name, email, a dropdown for what they need, and a message.
Removed organisation, phone, budget, timeframe, the NDA callout, the sector
trust strip, the SLA box, the video-call booking modal, the three pillars and
the FAQ accordion. Email and office address sit beside the form.

## How the form reaches your inbox
`src/lib/forms.ts` now has two paths:
1. If `VITE_CONTACT_ENDPOINT` is set (a free Formspree form pointed at
   info@pedaserve.com), the message is posted there and arrives by email.
   Visitor sees "Thanks, we have your message."
2. If it is not set, submitting opens the visitor's email app with the
   message already written and addressed to info@pedaserve.com. Visitor sees
   "Your email app should now be open." Nothing is silently lost either way.
Option 1 is better (no reliance on the visitor having an email app set up);
it takes about five minutes to set up on formspree.io.

Deleted `MonographModal.tsx` and `DiscoveryModal.tsx`.

# Formspree connected
`.env` now contains the Formspree endpoint for both the contact form and the
newsletter box. `.env` is git-ignored, so add the same two variables in Vercel
(Project > Settings > Environment Variables) before deploying, otherwise the
production build falls back to the email-app route.

# Logo wordmark
Header and footer wordmark is now "Pedaserve" in title case, with the
strapline "Strategy, writing and SEO" in sentence case and normal letter
spacing instead of tracked-out capitals.

# Resend instead of Formspree
- New `api/contact.ts`: a Vercel serverless function that validates the
  submission, drops obvious bots (hidden honeypot field), and emails it to
  CONTACT_TO via Resend's HTTP API with Reply-To set to the visitor, so you
  can answer straight from your inbox. Handles both the contact form and the
  newsletter box. No npm dependency; it calls Resend over plain fetch.
- `src/lib/forms.ts` now posts to `/api/contact` by default. The Formspree
  override still works if VITE_CONTACT_ENDPOINT is set. On any failure the
  visitor's email app opens with the message pre-written.
- `vercel.json` rewrite now excludes `/api/` so the function is reachable.
- `.env` with the Formspree key removed; `.env.example` documents the three
  server variables.

Setup in Vercel (one time):
1. resend.com: add and verify the pedaserve.com domain (three DNS records).
2. resend.com > API Keys: create a key with "Sending access".
3. Vercel > Project > Settings > Environment Variables:
   RESEND_API_KEY = the key
   CONTACT_TO     = info@pedaserve.com
   CONTACT_FROM   = Pedaserve website <website@pedaserve.com>
4. Redeploy, then send a test from the live contact page.
Until the domain is verified you can leave CONTACT_FROM unset; the function
sends from onboarding@resend.dev, which Resend only delivers to the email you
registered with, which is fine for testing.
