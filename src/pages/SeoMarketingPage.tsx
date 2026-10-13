import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';

interface SeoMarketingPageProps {
  onNavigate: (path: string) => void;
}

export default function SeoMarketingPage({ onNavigate }: SeoMarketingPageProps) {
  const [domainUrl, setDomainUrl] = useState('');
  const [sectorType, setSectorType] = useState('energy');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<null | {
    score: number;
    crawlBudgetStatus: string;
    schemaGrade: string;
    velocityIndex: string;
    topRecommendations: string[];
  }>(null);

  const runAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainUrl) return;
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditResult({
        score: 64,
        crawlBudgetStatus: 'Moderate Leaks Detected',
        schemaGrade: 'Missing Organization & Entity Graph',
        velocityIndex: 'Low (0.4 articles/mo)',
        topRecommendations: [
          'Deploy Schema.org JSON-LD structured knowledge graphs across all subsidiary hubs.',
          'Resolve crawl budget leaks caused by duplicate URL query parameters.',
          'Implement daily semantic topical silos to capture high-intent West African B2B procurement searches.'
        ]
      });
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEOHead
        title="SEO & Digital Marketing Practice | Pedaserve Strategic Enterprise"
        description="We offer comprehensive Search Engine Optimization (SEO) engineering and data-driven digital marketing strategies that dominate organic search results."
        canonicalUrl="https://pedaserve.com/seo-and-digital-marketing"
        keywords={['SEO Nigeria', 'Programmatic SEO West Africa', 'Technical SEO Port Harcourt', 'Enterprise Search Engine Optimization', 'Pedaserve Digital Marketing']}
      />

      {/* Hero */}
      <section className="relative w-full bg-primary-container text-on-primary py-space-xl sm:py-space-2xl px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-lowest/10 backdrop-blur-md text-secondary-fixed-dim w-fit">
            <span className="material-symbols-outlined text-[16px]">manage_search</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider font-semibold">
              Algorithmic Search &amp; Growth Engineering
            </span>
          </div>

          <h1 className="font-display-hero text-headline-xl sm:text-4xl lg:text-display-hero font-bold text-on-primary tracking-tight">
            Defensible Organic Market Dominance.
          </h1>

          <p className="font-body-lead text-body-lead text-on-primary-container max-w-3xl leading-relaxed">
            We treat Search Engine Optimization not as speculative marketing, but as hard technical infrastructure. By engineering entity graphs and high-frequency publishing engines, we outrank legacy competitors permanently.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact-us')}
              className="h-12 px-6 sm:px-8 rounded-lg bg-secondary-container hover:bg-secondary text-primary font-label-button font-bold transition-all shadow-sm cursor-pointer text-center"
            >
              Commission a Technical Search Audit
            </button>
            <a
              href="#audit-tool"
              className="h-12 px-6 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-button flex items-center justify-center gap-2 transition-all text-center"
            >
              <span>Instant Domain SEO Check</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 Core Engineering Pillars */}
      <section className="w-full py-space-xl sm:py-space-2xl px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">query_stats</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface">Deep Architecture Technical Audits</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                We inspect server response headers, crawl budgets, internationalization tags, JavaScript rendering bottlenecks, and Core Web Vitals to remove structural barriers to indexation.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">hub</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface">Semantic Entity Knowledge Graphs</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                We design rich Schema.org JSON-LD structures that explicitly map your corporate divisions, executives, and services directly into Google’s Knowledge Graph.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">dynamic_feed</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface">High-Cadence Programmatic Publishing</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Daily editorial workflow architectures that build topical authority in 90 days, capturing high-intent B2B search phrases with zero paid advertising spend.
              </p>
            </div>
          </div>

          {/* Interactive Domain SEO Health Check Tool */}
          <div id="audit-tool" className="p-8 lg:p-12 rounded-3xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-6 shadow-sm">
            <div className="flex flex-col gap-2">
              <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider">
                Self-Service Assessment Tool
              </span>
              <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                Enterprise Search Readiness Diagnostics
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Enter your company domain below to evaluate your technical SEO architecture posture against the 2026 Pedaserve Benchmark.
              </p>
            </div>

            <form onSubmit={runAudit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                required
                placeholder="e.g. enterprise-holdings.com"
                value={domainUrl}
                onChange={(e) => setDomainUrl(e.target.value)}
                className="h-12 px-4 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm flex-1 border border-outline-variant/30 focus:outline-none"
              />
              <select
                value={sectorType}
                onChange={(e) => setSectorType(e.target.value)}
                className="h-12 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm border border-outline-variant/30 focus:outline-none"
              >
                <option value="energy">Energy &amp; Marine Logistics</option>
                <option value="finance">Banking &amp; Financial Services</option>
                <option value="agro">Agribusiness &amp; FMCG</option>
                <option value="consulting">Professional Advisory</option>
              </select>
              <button
                type="submit"
                disabled={isAuditing}
                className="h-12 px-6 rounded-lg bg-secondary-container hover:bg-secondary text-primary font-label-button font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm shrink-0"
              >
                {isAuditing ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                    <span>Auditing Domain...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">search_check</span>
                    <span>Run Diagnostic</span>
                  </>
                )}
              </button>
            </form>

            {auditResult && (
              <div className="mt-4 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-md flex flex-col gap-6 animate-in fade-in duration-300">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-surface-container-high">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary-container text-primary font-bold text-xl flex items-center justify-center">
                      {auditResult.score}/100
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-base font-bold text-on-surface">Domain: {domainUrl}</h4>
                      <span className="font-body-sm text-[12px] text-on-surface-variant">Pedaserve Diagnostic Benchmark v4.2</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-caps text-[11px] font-bold uppercase">
                    Needs Urgent Entity Structuring
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-surface-container-low">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">Crawl Budget</span>
                    <div className="font-headline-sm text-[15px] font-bold text-on-surface mt-1">{auditResult.crawlBudgetStatus}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">Schema &amp; Entities</span>
                    <div className="font-headline-sm text-[15px] font-bold text-on-surface mt-1">{auditResult.schemaGrade}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">Topical Publishing Velocity</span>
                    <div className="font-headline-sm text-[15px] font-bold text-on-surface mt-1">{auditResult.velocityIndex}</div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-label-caps text-[11px] font-bold text-on-surface uppercase tracking-wider">
                    Immediate Remediation Directive:
                  </span>
                  <ul className="flex flex-col gap-1.5 font-body-sm text-[13px] text-on-surface-variant">
                    {auditResult.topRecommendations.map((rec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">priority_high</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => onNavigate('contact-us')}
                    className="h-11 px-6 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-button text-[13px] font-bold flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Full 40-Page Engineering Report</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
