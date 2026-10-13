import React from 'react';
import { TEAM_MEMBERS, STATS } from '../data/mockData';
import SEOHead from '../components/SEOHead';
import { COMPANY } from '../data/company';
import { IMAGES } from '../data/images';

interface AboutUsPageProps {
  onNavigate: (path: string) => void;
}

export default function AboutUsPage({ onNavigate }: AboutUsPageProps) {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEOHead
        title="About Pedaserve Strategic Enterprise | Heritage, Leadership & Mandate"
        description="Learn about Pedaserve's heritage as an institutional advisory and transformation organization empowering enterprises across Nigeria and West Africa."
        canonicalUrl="https://pedaserve.com/about-us"
        keywords={['About Pedaserve', 'Jide Adepoju Pedaserve', 'Port Harcourt Consulting Group', 'Enterprise Advisory Directorate']}
      />

      {/* Hero */}
      <section className="relative w-full bg-primary-container text-on-primary py-space-xl sm:py-space-2xl px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-lowest/10 backdrop-blur-md text-secondary-fixed-dim w-fit">
            <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider font-semibold">
              Institutional Heritage &amp; Directorate
            </span>
          </div>

          <h1 className="font-display-hero text-headline-xl sm:text-4xl lg:text-display-hero font-bold text-on-primary tracking-tight">
            Evolving Enterprise Heritage <br className="hidden sm:inline" />
            <span className="text-secondary-fixed-dim">Into Market Valuation.</span>
          </h1>

          <p className="font-body-lead text-body-lead text-on-primary-container max-w-3xl leading-relaxed">
            Pedaserve was founded with a singular conviction: that African institutions possess immense inherent legacy and operational stamina, but require uncompromising modern publishing, algorithmic digital visibility, and principled governance to compete on global terms.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact-us')}
              className="h-12 px-6 sm:px-8 rounded-lg bg-secondary-container hover:bg-secondary text-primary font-label-button font-bold transition-all shadow-sm cursor-pointer w-full sm:w-auto text-center"
            >
              Consult Our Leadership Directorate
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full bg-surface-container-low py-8 sm:py-10 px-4 sm:px-6 lg:px-12 border-b border-surface-container-high">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-headline-xl text-3xl lg:text-headline-xl font-bold text-secondary">
                {stat.value}
              </span>
              <span className="font-body-sm text-[13px] text-on-surface-variant mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Founding Philosophy */}
      <section className="w-full py-space-xl sm:py-space-2xl px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider">
              Governance Philosophy
            </span>
            <h2 className="font-headline-xl text-headline-lg lg:text-headline-xl font-bold text-on-surface">
              Principled Stewardship Across Market Generations
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We reject short-term speculative hype. Every solution we engineer—whether an executive biography designed to stand in national archives for fifty years, or an algorithmic SEO knowledge grid built to dominate organic search—is anchored in structural permanence.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We are a small team based in Watford, with backgrounds in writing, search, business development and training. Most of our work is with owner-led businesses across the UK.
            </p>
          </div>

          <figure className="lg:col-span-6">
            <img
              src={IMAGES.shopOwners}
              alt="Two owners talking in their small shop"
              width={1400}
              height={933}
              loading="lazy"
              className="w-full aspect-[3/2] object-cover rounded-lg border border-outline-variant/60"
            />
          </figure>
        </div>
      </section>

      {/* Leadership Directorate Profiles */}
      <section className="w-full py-space-xl sm:py-space-2xl px-4 sm:px-6 lg:px-12 bg-surface-container-low border-t border-surface-container-high">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider">
              Leadership Directorate
            </span>
            <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface mt-2 mb-3">
              The Managing Partners &amp; Directors
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Experienced practitioners personally accountable for every engagement milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary-container text-secondary-container flex items-center justify-center font-headline-sm font-bold text-xl shadow-sm">
                      {member.initials}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-headline-sm text-lg font-bold text-on-surface">{member.name}</h3>
                      <span className="font-body-sm text-[13px] text-secondary font-semibold">{member.role}</span>
                      <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">{member.division}</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-container-high">
                  <button
                    onClick={() => onNavigate('contact-us')}
                    className="font-label-button text-[13px] text-primary font-bold hover:text-secondary flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Partner Consultation</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Operational Coordinates */}
      <section className="w-full py-space-2xl px-6 lg:px-12 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider">
              Geographic Presence
            </span>
            <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
              Operational Hubs &amp; Desks
            </h2>
          </div>

          <div className="max-w-xl p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-2">
            <h4 className="font-headline-sm text-lg font-bold text-on-surface">Our office</h4>
            <p className="font-body-sm text-on-surface-variant">{COMPANY.addressOneLine}</p>
            <a href={`mailto:${COMPANY.email}`} className="font-body-sm text-[13px] text-secondary font-semibold pt-1">{COMPANY.email}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
