import { ARTICLES } from '../data/mockData';
import { COMPANY } from '../data/company';
import SEOHead from '../components/SEOHead';
import { IMAGES } from '../data/images';

interface HomePageProps {
  onNavigate: (path: string, articleId?: string) => void;
}

const SERVICES = [
  {
    key: 'the-writing-hub',
    name: 'Writing',
    line: 'Articles, reports, web copy and the occasional book, written in your voice and read by the people you want to reach.',
  },
  {
    key: 'seo-and-digital-marketing',
    name: 'SEO and websites',
    line: 'Sites that load fast, say the right things and show up when someone searches for what you do.',
  },
  {
    key: 'services',
    name: 'Strategy and marketing',
    line: 'A plan for the next quarter you can actually act on, and help carrying it out.',
  },
  {
    key: 'training-and-leadership',
    name: 'Training and coaching',
    line: 'Practical sessions for owners and teams: leadership, using AI well, selling without the hard sell.',
  },
];

const STEPS = [
  {
    title: 'A conversation',
    body: 'Half an hour on the phone or over coffee. You tell us where the business is and where it is stuck. No pitch deck.',
  },
  {
    title: 'A short written plan',
    body: 'Within a week you get a few pages: what we would do, in what order, and what it costs. You can take it elsewhere if you like.',
  },
  {
    title: 'The work, with one person on it',
    body: 'A named consultant does the work and stays reachable. We review progress monthly against the plan, not against a dashboard.',
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const latest = ARTICLES.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      <SEOHead
        title="Pedaserve | Strategy, writing and SEO for growing businesses"
        description="Pedaserve is a Watford-based consultancy helping small and growing businesses win clients, cut costs and get found online. Writing, SEO, strategy and training."
        canonicalUrl="https://pedaserve.com"
      />

      {/* Hero: the headline is the whole point. Nothing competes with it. */}
      <section className="w-full bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display-hero font-bold tracking-[-0.02em] text-on-surface text-[2.5rem] leading-[1.08] sm:text-[3.25rem] lg:text-[4rem]">
              Good businesses deserve to be found, understood and chosen.
            </h1>
            <p className="font-body-lead text-on-surface-variant text-lg sm:text-xl leading-relaxed max-w-2xl mt-8">
              Pedaserve helps small and growing businesses win more of the right clients. We write the words, build the search presence, shape the plan and train the team, then stay around to make sure it works.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <button
                onClick={() => onNavigate('contact-us')}
                className="inline-flex items-center justify-center h-12 px-7 rounded-md bg-secondary-container hover:bg-secondary-fixed-dim text-on-secondary-fixed font-label-button text-base font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Book a conversation
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center h-12 px-7 rounded-md border border-outline-variant text-on-surface hover:bg-surface-container-low font-label-button text-base font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                See what we do
              </button>
            </div>
            <p className="font-body-sm text-on-surface-variant text-sm mt-10">
              Based in Watford. Working with owner-led businesses, charities and professional firms across the UK.
            </p>
          </div>
          <figure className="lg:col-span-5 mt-14 lg:mt-0 relative">
            {/* Offset slab behind the photo gives it an edge against the pale page. */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full rounded-lg bg-primary-container" aria-hidden="true"></div>
            <img
              src={IMAGES.heroShop}
              alt="An independent village shop in England with a red post box outside"
              width={1600}
              height={1067}
              loading="eager"
              fetchPriority="high"
              className="relative w-full aspect-[4/3] object-cover rounded-lg border border-outline-variant/60 shadow-[0_20px_40px_-20px_rgba(11,28,48,0.45)]"
            />
          </figure>
        </div>
      </section>

      {/* What we do: a list, so it is built as rows rather than cards. */}
      <section className="w-full bg-surface-container-lowest border-t border-outline-variant/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4 mb-10 lg:mb-0">
              <h2 className="font-headline-xl font-bold text-on-surface text-3xl leading-tight">What we do</h2>
              <p className="font-body-md text-on-surface-variant mt-4 max-w-sm">
                Four things, done properly. Most clients start with one and add another once the first is paying for itself.
              </p>
            </div>
            <ul className="lg:col-span-8 border-t border-outline-variant/60">
              {SERVICES.map((s) => (
                <li key={s.key} className="border-b border-outline-variant/60">
                  <button
                    onClick={() => onNavigate(s.key)}
                    className="w-full text-left py-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                  >
                    <span className="sm:col-span-4 font-headline-sm font-semibold text-on-surface text-xl group-hover:underline underline-offset-4 decoration-secondary-container decoration-2">
                      {s.name}
                    </span>
                    <span className="sm:col-span-8 font-body-md text-on-surface-variant leading-relaxed">
                      {s.line}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How we work: this is a real sequence, so numbering earns its place. */}
      <section className="w-full bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <h2 className="font-headline-xl font-bold text-on-surface text-3xl leading-tight">How it works</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-10">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex flex-col">
                <span className="font-display-hero font-bold text-secondary text-4xl leading-none" aria-hidden="true">{i + 1}</span>
                <h3 className="font-headline-sm font-semibold text-on-surface text-xl mt-4">{step.title}</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed mt-2">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Latest writing: three pieces, no chrome. */}
      <section className="w-full bg-surface-container-lowest">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-headline-xl font-bold text-on-surface text-3xl leading-tight">From the blog</h2>
            <button
              onClick={() => onNavigate('insights')}
              className="font-label-button text-base font-semibold text-on-surface underline underline-offset-4 decoration-outline-variant hover:decoration-secondary-container cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
            >
              All articles
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-10">
            {latest.map((a) => (
              <article key={a.id} className="flex flex-col">
                <button
                  onClick={() => onNavigate('article', a.slug)}
                  className="text-left flex flex-col gap-3 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                >
                  <span className="font-body-sm text-sm text-on-surface-variant">{a.categoryLabel}</span>
                  <h3 className="font-headline-sm font-semibold text-on-surface text-xl leading-snug group-hover:underline underline-offset-4 decoration-secondary-container decoration-2">
                    {a.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed line-clamp-3">{a.summary}</p>
                  <span className="font-body-sm text-sm text-on-surface-variant mt-1">{a.readTime}</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Close: the one dark block on the page. */}
      <section className="w-full bg-primary-container text-on-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <h2 className="font-headline-xl font-bold text-3xl sm:text-4xl leading-tight">
                Tell us where the business is stuck.
              </h2>
              <p className="font-body-lead text-primary-fixed-dim text-lg leading-relaxed mt-4 max-w-xl">
                A half-hour conversation costs nothing and usually ends with something useful, whether or not you work with us.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4 mt-8 lg:mt-0 lg:items-end">
              <button
                onClick={() => onNavigate('contact-us')}
                className="inline-flex items-center justify-center h-12 px-7 rounded-md bg-secondary-container hover:bg-secondary-fixed-dim text-on-secondary-fixed font-label-button text-base font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-container w-full sm:w-auto"
              >
                Book a conversation
              </button>
              <a
                href={`mailto:${COMPANY.email}`}
                className="font-body-md text-primary-fixed-dim hover:text-on-primary underline underline-offset-4 decoration-primary-fixed-dim/40"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
