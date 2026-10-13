import { useState } from 'react';
import { ARTICLES } from '../data/mockData';
import SEOHead from '../components/SEOHead';

interface InsightsHubPageProps {
  onNavigate: (path: string, articleId?: string) => void;
}

const CATEGORIES: { key: string; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'seo', label: 'SEO and websites' },
  { key: 'writing', label: 'Writing' },
  { key: 'strategy', label: 'Strategy' },
  { key: 'leadership', label: 'Leadership' },
];

export default function InsightsHubPage({ onNavigate }: InsightsHubPageProps) {
  const [category, setCategory] = useState('all');

  const featured = ARTICLES.find((a) => a.isLeadReport) || ARTICLES[0];
  const rest = ARTICLES.filter((a) => a.id !== featured.id).filter(
    (a) => category === 'all' || a.category === category
  );

  const open = (slug: string) => onNavigate('article', slug);

  return (
    <div className="flex flex-col w-full">
      <SEOHead
        title="Insights | Pedaserve"
        description="Practical articles for business owners on winning clients, using AI sensibly, fixing marketing that isn't working, and leading a team."
        canonicalUrl="https://pedaserve.com/insights"
      />

      {/* Title */}
      <section className="w-full bg-surface-container-lowest">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-12 pb-10 lg:pt-20 lg:pb-14">
          <h1 className="font-display-hero font-bold tracking-[-0.02em] text-on-surface text-4xl sm:text-5xl leading-tight">
            Insights
          </h1>
          <p className="font-body-lead text-on-surface-variant text-lg leading-relaxed max-w-2xl mt-4">
            Plain-English articles on getting found, winning the right clients and running a business well. Written by the team, not generated.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="w-full bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <button
            onClick={() => open(featured.slug)}
            className="w-full text-left grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-lg"
          >
            <img
              src={featured.coverImage}
              alt=""
              width={1400}
              height={933}
              loading="eager"
              className="lg:col-span-6 w-full aspect-[3/2] object-cover rounded-lg border border-outline-variant/60"
            />
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span className="font-body-sm text-sm text-on-surface-variant">{featured.categoryLabel}</span>
              <h2 className="font-headline-xl font-bold text-on-surface text-2xl sm:text-3xl leading-snug group-hover:underline underline-offset-4 decoration-secondary-container decoration-2">
                {featured.title}
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">{featured.summary}</p>
              <span className="font-body-sm text-sm text-on-surface-variant">
                {featured.author.name}, {featured.readTime}
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* Filter and list */}
      <section className="w-full bg-surface-container-lowest">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by topic">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                aria-pressed={category === c.key}
                className={`h-10 px-4 rounded-full font-label-button text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  category === c.key
                    ? 'bg-primary-container text-on-primary'
                    : 'border border-outline-variant text-on-surface hover:bg-surface-container-low'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {rest.length === 0 ? (
            <p className="font-body-md text-on-surface-variant mt-10">
              Nothing in this topic yet. Try another, or read the featured article above.
            </p>
          ) : (
            <ul className="mt-10 border-t border-outline-variant/60">
              {rest.map((a) => (
                <li key={a.id} className="border-b border-outline-variant/60">
                  <button
                    onClick={() => open(a.slug)}
                    className="w-full text-left py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                  >
                    <img
                      src={a.coverImage}
                      alt=""
                      width={1400}
                      height={933}
                      loading="lazy"
                      className="sm:col-span-3 w-full aspect-[3/2] object-cover rounded-md border border-outline-variant/60"
                    />
                    <div className="sm:col-span-9 flex flex-col gap-2">
                      <span className="font-body-sm text-sm text-on-surface-variant">{a.categoryLabel}</span>
                      <h3 className="font-headline-sm font-semibold text-on-surface text-xl leading-snug group-hover:underline underline-offset-4 decoration-secondary-container decoration-2">
                        {a.title}
                      </h3>
                      <p className="font-body-md text-on-surface-variant leading-relaxed line-clamp-2">{a.summary}</p>
                      <span className="font-body-sm text-sm text-on-surface-variant mt-1">
                        {a.author.name}, {a.readTime}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Quiet close */}
      <section className="w-full bg-primary-container text-on-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-20 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 className="font-headline-xl font-bold text-2xl sm:text-3xl leading-tight">Want this kind of writing for your own business?</h2>
            <p className="font-body-lead text-primary-fixed-dim text-lg leading-relaxed mt-3 max-w-xl">
              We write articles, reports and web copy for clients in their own voice.
            </p>
          </div>
          <div className="lg:col-span-4 mt-8 lg:mt-0 lg:flex lg:justify-end">
            <button
              onClick={() => onNavigate('the-writing-hub')}
              className="inline-flex items-center justify-center h-12 px-7 rounded-md bg-secondary-container hover:bg-secondary-fixed-dim text-on-secondary-fixed font-label-button text-base font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-container"
            >
              About our writing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
