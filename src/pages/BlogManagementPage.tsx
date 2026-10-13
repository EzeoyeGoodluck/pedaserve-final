import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { COMPANY } from '../data/company';
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, BookOpen, Clock, TrendingUp, Sparkles } from 'lucide-react';

interface BlogManagementPageProps {
  onNavigate: (path: string) => void;
}

export default function BlogManagementPage({ onNavigate }: BlogManagementPageProps) {
  const [postCadence, setPostCadence] = useState<'daily' | 'thrice' | 'weekly'>('daily');
  const [targetAudience, setTargetAudience] = useState<'b2b' | 'investor' | 'consumer'>('b2b');

  const calculateEstimate = () => {
    switch (postCadence) {
      case 'daily':
        return { postsPerMonth: 22, monthlyReach: '45,000 - 90,000+', indexRate: '99.4%' };
      case 'thrice':
        return { postsPerMonth: 12, monthlyReach: '22,000 - 48,000', indexRate: '98.1%' };
      case 'weekly':
        return { postsPerMonth: 4, monthlyReach: '8,000 - 18,000', indexRate: '95.0%' };
    }
  };

  const est = calculateEstimate();

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Enterprise Blog Management & Daily Content Operations',
    'provider': {
      '@type': 'Organization',
      'name': 'Pedaserve',
      'address': COMPANY.schemaAddress
    },
    'description': 'Full-lifecycle enterprise blog management, daily editorial calendar governance, technical ghostwriting, Schema.org SEO publishing, and multi-channel syndication.'
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEOHead
        title="Enterprise Blog Management & Daily Content Operations | Pedaserve"
        description="Transform corporate blogs into authoritative industry publications. Daily editorial calendars, empirical ghostwriting, SEO syndication, and newsletter ingestion by Pedaserve."
        canonicalUrl="https://pedaserve.com/blog-management"
        keywords={['Blog Management Nigeria', 'corporate blogging Port Harcourt', 'SEO blog publishing', 'executive content ops', 'enterprise editorial calendar']}
        schemaData={blogSchema}
      />

      {/* Hero Header */}
      <section className="relative w-full bg-[#0a1128] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 w-fit text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Practice Area: Editorial &amp; Publishing</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
            Enterprise Blog Management &amp; Daily Editorial Operations.
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed">
            Turn your dormant corporate blog into the definitive publication in your industry. We manage the entire lifecycle—from thematic calendar ideation and executive ghostwriting to programmatic SEO formatting and morning email dispatch syndication.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-6 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Commission Blog Operations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('daily-insights-and-blog')}
              className="px-6 py-3.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all cursor-pointer"
            >
              Review Live Pedaserve Editorial
            </button>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Blog Management */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
            Full-Spectrum Editorial Pipeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
            Why Leading Institutions Outsource Blog Management to Pedaserve
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Most corporate blogs fail because subject-matter experts lack the time to write regularly. We solve this with dedicated journalistic bureaus that protect brand integrity while publishing at high velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Daily Editorial Calendars</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Never miss a publishing cycle. We build monthly quarterly topical matrices aligning with market developments, regulatory milestones, and corporate product launches.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold mb-4">
              02
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Empirical Ghostwriting</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our writers conduct brief interviews with your partners and executives, translating technical operational knowledge into compelling, peer-grade prose.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold mb-4">
              03
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Technical SEO Architecture</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every post includes Schema.org NewsArticle markup, custom OpenGraph social cards, high-intent keyword clustering, and internal linking to high-margin service pages.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold mb-4">
              04
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Multi-Channel Syndication</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We repurpose every article into LinkedIn executive carousels, newsletter broadcast templates, and press release digests for regional publications.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Scope & Velocity Calculator */}
      <section className="w-full bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-slate-800/90 rounded-2xl p-6 sm:p-10 border border-slate-700 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-700 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Publishing Velocity &amp; Organic Reach Estimator</h3>
              <p className="text-slate-400 text-sm">Model your organization's quarterly topical authority based on publishing frequency</p>
            </div>
            <span className="px-3 py-1 bg-amber-400/20 text-amber-300 text-xs font-semibold rounded-full border border-amber-400/30 w-fit">
              Dynamic Projection
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Desired Publishing Cadence:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setPostCadence('daily')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      postCadence === 'daily' ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    Daily (5x/wk)
                  </button>
                  <button
                    onClick={() => setPostCadence('thrice')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      postCadence === 'thrice' ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    3x per Week
                  </button>
                  <button
                    onClick={() => setPostCadence('weekly')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      postCadence === 'weekly' ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    Weekly (1x)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Target Enterprise Audience:</label>
                <select
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="b2b">Corporate B2B &amp; Institutional Procurement</option>
                  <option value="investor">Investors, Venture Capital &amp; Family Offices</option>
                  <option value="consumer">High-Value Commercial &amp; Consumer Trust</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-400" /> Dedicated managing editor and industry research analyst</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-400" /> Turnkey CMS upload, styling, and graphics formatting</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-400" /> 100% intellectual property transfer on all manuscripts</span>
              </div>
            </div>

            {/* Results Panel */}
            <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 flex flex-col justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Projected Output &amp; Footprint</span>

              <div className="grid grid-cols-2 gap-4 my-4">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Monthly Monograph Volume</span>
                  <span className="text-2xl font-bold text-amber-400">{est.postsPerMonth} Articles</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Est. 6-Month Organic Views</span>
                  <span className="text-2xl font-bold text-white">{est.monthlyReach}</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Search Indexation Rate</span>
                  <span className="text-2xl font-bold text-emerald-400">{est.indexRate}</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Editorial Turnaround</span>
                  <span className="text-2xl font-bold text-white">48 Hours</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact-us')}
                className="w-full py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Custom Editorial Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Matrix */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Standard Blog Management Retainer Deliverables</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-600" />
              Editorial Content Engine
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Thorough investigative research &amp; peer-reviewed citations</li>
              <li>• Executive interview recordings &amp; transcript translation</li>
              <li>• Double-blind senior editor proofing &amp; fact checking</li>
              <li>• Custom hero banner artwork &amp; data visualization charts</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-600" />
              Search &amp; Technical Compliance
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Exact-match target keywords with low-difficulty silos</li>
              <li>• Structured Schema.org Article / Author markup</li>
              <li>• Internal anchor-text link graph weaving</li>
              <li>• Automated XML sitemap pinging upon publication</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" />
              Governance &amp; Reporting
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Monthly keyword rank tracking &amp; organic impression reports</li>
              <li>• Inbound lead attribution analysis from article referrers</li>
              <li>• Dedicated Slack/Teams channel with editorial directors</li>
              <li>• Continuous quarterly strategic alignment sessions</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-slate-900">Ready to build your company's editorial dominance?</h4>
            <p className="text-slate-600 text-sm mt-1">Talk to our Managing Editor, Boma Mac-Pepple, and schedule your publishing pilot.</p>
          </div>
          <button
            onClick={() => onNavigate('contact-us')}
            className="px-6 py-3 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
          >
            Schedule Editorial Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
