import React from 'react';
import SEOHead from '../components/SEOHead';
import { SERVICES, ARTICLES } from '../data/mockData';

interface LegalPageProps {
  type: 'privacy-policy' | 'terms-of-service' | 'sitemap';
  onNavigate: (path: string, articleId?: string) => void;
}

export default function LegalPage({ type, onNavigate }: LegalPageProps) {
  if (type === 'sitemap') {
    return (
      <div className="flex flex-col w-full bg-background min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-12">
        <SEOHead
          title="HTML Sitemap & Directory | Pedaserve Strategic Enterprise"
          description="Complete index of all corporate services, daily dispatches, leadership directories, and institutional resources."
          canonicalUrl="https://pedaserve.com/sitemap"
        />
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div>
            <span className="font-label-caps text-secondary font-bold uppercase tracking-wider text-[11px]">
              Complete Index
            </span>
            <h1 className="font-headline-xl text-3xl font-bold text-on-surface mt-1">Institutional Sitemap</h1>
            <p className="font-body-md text-on-surface-variant mt-2">
              Browse all primary web pages, practice area monographs, and daily market intelligence briefings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm">
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">Core Navigation</h3>
              <ul className="flex flex-col gap-2 font-body-sm text-[14px]">
                <li><button onClick={() => onNavigate('home')} className="text-secondary font-semibold hover:underline">Home &amp; Daily Insights Hub</button></li>
                <li><button onClick={() => onNavigate('about-us')} className="text-secondary font-semibold hover:underline">About Us &amp; Leadership Directorate</button></li>
                <li><button onClick={() => onNavigate('services')} className="text-secondary font-semibold hover:underline">Enterprise Practice Areas Catalog</button></li>
                <li><button onClick={() => onNavigate('daily-insights-and-blog')} className="text-secondary font-semibold hover:underline">Daily Insights &amp; Market Intelligence</button></li>
                <li><button onClick={() => onNavigate('contact-us')} className="text-secondary font-semibold hover:underline">Executive Consultation &amp; Contact</button></li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm">
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">Practice Areas</h3>
              <ul className="flex flex-col gap-2 font-body-sm text-[14px]">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => onNavigate(s.slug)}
                      className="text-secondary font-semibold hover:underline text-left"
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm md:col-span-2">
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">Daily Published Dispatches</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body-sm text-[14px]">
                {ARTICLES.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => onNavigate('article', a.id)}
                    className="text-left text-on-surface-variant hover:text-secondary flex items-start gap-2"
                  >
                    <span className="text-secondary font-bold">•</span>
                    <span className="line-clamp-1">{a.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isPrivacy = type === 'privacy-policy';

  return (
    <div className="flex flex-col w-full bg-background min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-12">
      <SEOHead
        title={`${isPrivacy ? 'Privacy Policy' : 'Terms of Service'} | Pedaserve Strategic Enterprise`}
        description={isPrivacy ? 'Pedaserve enterprise data governance and privacy policies.' : 'Pedaserve institutional advisory engagement terms and conditions.'}
        canonicalUrl={`https://pedaserve.com/${isPrivacy ? 'privacy-policy' : 'terms-of-service'}`}
      />
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <div>
          <span className="font-label-caps text-secondary font-bold uppercase tracking-wider text-[11px]">
            Institutional Governance
          </span>
          <h1 className="font-headline-xl text-3xl font-bold text-on-surface mt-1">
            {isPrivacy ? 'Enterprise Privacy Policy & Data Custody' : 'Terms of Advisory Service & Engagement'}
          </h1>
          <p className="font-body-sm text-on-surface-variant mt-2">
            Last Updated: October 2025 • Governing Law: Federal Republic of Nigeria
          </p>
        </div>

        <div className="prose max-w-none text-on-surface font-body-md text-body-md space-y-6 leading-relaxed bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
          {isPrivacy ? (
            <>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">1. Non-Disclosure &amp; Information Confidentiality</h3>
              <p>
                Pedaserve enforces strict institutional bilateral Non-Disclosure Protocols. Any corporate documentation, internal organizational memos, financial forecasts, executive bios, or proprietary commercial datasets shared through our consultation requests or during active mandates are held under double-blind editorial custody.
              </p>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">2. Data Collection and Usage</h3>
              <p>
                We collect only corporate contact information, organization parameters, and project parameters required to evaluate scope and allocate partner resources. We never sell, lease, or monetize client records or data assets with commercial third parties.
              </p>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">3. Ghostwriting &amp; Copyright Transfer</h3>
              <p>
                All executive ghostwriting, memoir publishing, research whitepapers, and intellectual property developed by The Writing Hub at Pedaserve become 100% the exclusive copyright and property of the commissioning client upon final contractual milestone satisfaction.
              </p>
            </>
          ) : (
            <>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">1. Scope of Mandate (SoM)</h3>
              <p>
                All advisory, search engine engineering, publishing, and leadership training programs are formalized through an executed Scope of Mandate (SoM) detailing specific timeline gates, measurable deliverables, and financial compensation schedules.
              </p>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">2. Institutional Service Level Agreements (SLA)</h3>
              <p>
                Our 24-hour response guarantee applies to formal incoming consultation submissions. Engagement kick-offs commence within 5 business days of bilateral contract execution and requisite mobilization provisions.
              </p>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">3. Jurisdiction &amp; Dispute Resolution</h3>
              <p>
                These terms are governed by the laws of the Federal Republic of Nigeria, with primary venue established in the courts of Rivers State or via commercial arbitration in Lagos.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
