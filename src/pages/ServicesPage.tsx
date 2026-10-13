import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import SEOHead from '../components/SEOHead';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedSize, setSelectedSize] = useState('50-250');
  const [selectedArea, setSelectedArea] = useState('seo-writing');

  const filteredServices = SERVICES.filter((s) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'editorial' && (s.slug === 'the-writing-hub' || s.slug === 'blog-management' || s.slug === 'creative-direction' || s.slug === 'website-design-and-branding')) return true;
    if (activeFilter === 'capital' && (s.slug === 'finance-and-capital' || s.slug === 'economics-and-policy')) return true;
    if (activeFilter === 'growth' && (s.slug === 'seo-and-digital-marketing' || s.slug === 'strategy-business-development')) return true;
    if (activeFilter === 'science' && (s.slug === 'scientific-documentation' || s.slug === 'charity-and-foundation')) return true;
    if (activeFilter === 'people' && (s.slug === 'training-and-leadership' || s.slug === 'coaching-mentoring-leadership')) return true;
    if (activeFilter === 'infrastructure' && (s.slug === 'agribusiness' || s.slug === 'energy-procurement')) return true;
    return true;
  });

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': SERVICES.map((s, index) => ({
      '@type': 'Service',
      'position': index + 1,
      'name': s.title,
      'description': s.shortDescription,
      'provider': {
        '@type': 'Organization',
        'name': 'Pedaserve'
      }
    }))
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEOHead
        title="14 Enterprise Practice Areas & Specialized Capabilities | Pedaserve"
        description="Explore Pedaserve's practice areas: The Writing Hub, Blog Management, Charity, Scientific Documentation, Creative Direction, Economics, SEO, Strategy, and Training."
        canonicalUrl="https://pedaserve.com/services"
        schemaData={servicesSchema}
      />

      {/* Hero Section */}
      <section className="relative w-full bg-primary-container text-on-primary py-space-xl sm:py-space-2xl px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-lowest/10 backdrop-blur-md text-secondary-fixed-dim w-fit">
            <span className="material-symbols-outlined text-[16px]">domain</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider font-semibold">
              14 Multidisciplinary Practice Areas
            </span>
          </div>

          <h1 className="font-display-hero text-headline-xl sm:text-4xl lg:text-display-hero font-bold text-on-primary tracking-tight">
            Institutional Solutions Engineered for Scale.
          </h1>

          <p className="font-body-lead text-body-lead text-on-primary-container max-w-3xl leading-relaxed">
            We align long-term visionary corporate goals with ground-level market execution across publishing, blog operations, finance &amp; economics, scientific research, philanthropy, and critical infrastructure.
          </p>

          {/* Practice Area Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg font-label-button text-[13px] sm:text-[14px] transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-secondary-container text-primary font-bold shadow-sm'
                  : 'bg-surface-container-lowest/10 text-on-primary hover:bg-surface-container-lowest/20'
              }`}
            >
              All (14 Practices)
            </button>
            <button
              onClick={() => setActiveFilter('editorial')}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg font-label-button text-[13px] sm:text-[14px] transition-colors cursor-pointer ${
                activeFilter === 'editorial'
                  ? 'bg-secondary-container text-primary font-bold shadow-sm'
                  : 'bg-surface-container-lowest/10 text-on-primary hover:bg-surface-container-lowest/20'
              }`}
            >
              Editorial, Blog &amp; Creative
            </button>
            <button
              onClick={() => setActiveFilter('capital')}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg font-label-button text-[13px] sm:text-[14px] transition-colors cursor-pointer ${
                activeFilter === 'capital'
                  ? 'bg-secondary-container text-primary font-bold shadow-sm'
                  : 'bg-surface-container-lowest/10 text-on-primary hover:bg-surface-container-lowest/20'
              }`}
            >
              Economics &amp; Policy
            </button>
            <button
              onClick={() => setActiveFilter('growth')}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg font-label-button text-[13px] sm:text-[14px] transition-colors cursor-pointer ${
                activeFilter === 'growth'
                  ? 'bg-secondary-container text-primary font-bold shadow-sm'
                  : 'bg-surface-container-lowest/10 text-on-primary hover:bg-surface-container-lowest/20'
              }`}
            >
              SEO &amp; Corporate Strategy
            </button>
            <button
              onClick={() => setActiveFilter('science')}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg font-label-button text-[13px] sm:text-[14px] transition-colors cursor-pointer ${
                activeFilter === 'science'
                  ? 'bg-secondary-container text-primary font-bold shadow-sm'
                  : 'bg-surface-container-lowest/10 text-on-primary hover:bg-surface-container-lowest/20'
              }`}
            >
              Science &amp; Charity
            </button>
            <button
              onClick={() => setActiveFilter('people')}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg font-label-button text-[13px] sm:text-[14px] transition-colors cursor-pointer ${
                activeFilter === 'people'
                  ? 'bg-secondary-container text-primary font-bold shadow-sm'
                  : 'bg-surface-container-lowest/10 text-on-primary hover:bg-surface-container-lowest/20'
              }`}
            >
              Training &amp; Discipleship
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-space-xl sm:py-space-2xl px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[28px]">{service.iconName}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-caps text-[11px] font-bold uppercase">
                      {service.categoryTag}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-[22px] font-bold text-on-surface">
                    {service.title}
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="pt-2 flex flex-col gap-2">
                    <span className="font-label-caps text-[11px] text-on-surface font-bold uppercase tracking-wider">
                      Core Deliverables:
                    </span>
                    <ul className="flex flex-col gap-1.5 font-body-sm text-[13px] text-on-surface-variant">
                      {service.deliverables.map((del, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-surface-container-high mt-6 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (service.slug === 'the-writing-hub') onNavigate('the-writing-hub');
                      else if (service.slug === 'blog-management') onNavigate('blog-management');
                      else if (service.slug === 'charity-and-foundation') onNavigate('charity-and-foundation');
                      else if (service.slug === 'scientific-documentation') onNavigate('scientific-documentation');
                      else if (service.slug === 'creative-direction') onNavigate('creative-direction');
                      else if (service.slug === 'economics-and-policy') onNavigate('economics-and-policy');
                      else if (service.slug === 'finance-and-capital') onNavigate('finance-and-capital');
                      else if (service.slug === 'seo-and-digital-marketing' || service.slug === 'website-design-and-branding') onNavigate('seo-and-digital-marketing');
                      else if (service.slug === 'training-and-leadership' || service.slug === 'coaching-mentoring-leadership') onNavigate('training-and-leadership');
                      else if (service.slug === 'agribusiness') onNavigate('agribusiness');
                      else if (service.slug === 'energy-procurement') onNavigate('energy-procurement');
                      else onNavigate('contact-us');
                    }}
                    className="font-label-button text-label-button text-primary font-bold group-hover:text-secondary transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Practice Details</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>

                  <button
                    onClick={() => onNavigate('contact-us')}
                    className="h-9 px-3.5 rounded bg-surface-container hover:bg-secondary-container hover:text-primary text-on-surface font-label-button text-[12px] font-semibold transition-colors cursor-pointer"
                  >
                    Engage
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Transformation & Value Estimator */}
          <div className="p-8 lg:p-12 rounded-3xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-8 shadow-sm">
            <div className="max-w-2xl flex flex-col gap-2">
              <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-wider">
                Interactive Capability Estimator
              </span>
              <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                Estimate Your Enterprise Transformation Multiplier
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Select your organization scale and primary transformation vector to see projected velocity enhancements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-label-button text-[14px] text-on-surface font-semibold">
                    Workforce / Subsidiary Scale:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: '10-50', label: '10 - 50 staff' },
                      { id: '50-250', label: '50 - 250 staff' },
                      { id: '250+', label: '250+ enterprise' }
                    ].map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedSize(s.id)}
                        className={`py-2 px-3 rounded-lg font-body-sm text-[13px] font-semibold border transition-all cursor-pointer ${
                          selectedSize === s.id
                            ? 'bg-primary-container text-on-primary border-primary-container'
                            : 'bg-surface-container-lowest text-on-surface border-outline-variant/30 hover:bg-surface-container'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-button text-[14px] text-on-surface font-semibold">
                    Target Transformation Vector:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'seo-writing', label: 'SEO & Executive Publishing' },
                      { id: 'training-lms', label: 'Corporate Training LMS' },
                      { id: 'strategy-dev', label: 'Market Strategy & Advisory' }
                    ].map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedArea(v.id)}
                        className={`p-2.5 rounded-lg font-body-sm text-[13px] font-semibold border text-left transition-all cursor-pointer ${
                          selectedArea === v.id
                            ? 'bg-primary-container text-on-primary border-primary-container'
                            : 'bg-surface-container-lowest text-on-surface border-outline-variant/30 hover:bg-surface-container'
                        }`}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Real-time Calculation Outcome */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-md flex flex-col gap-4">
                <span className="font-label-caps text-[11px] text-secondary font-bold uppercase tracking-wider">
                  Projected Transformation Scorecard
                </span>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-surface-container-low">
                    <span className="font-headline-lg text-2xl font-bold text-on-surface">
                      {selectedSize === '10-50' ? '2.8x' : selectedSize === '50-250' ? '3.8x' : '4.6x'}
                    </span>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">
                      Faster Time-To-Market Execution
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low">
                    <span className="font-headline-lg text-2xl font-bold text-secondary">
                      {selectedArea === 'seo-writing' ? '+148%' : selectedArea === 'training-lms' ? '+210%' : '+185%'}
                    </span>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">
                      Organic Capability Multiplier
                    </p>
                  </div>
                </div>
                <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
                  Illustrative only. We will replace this with figures from your own engagement.
                </p>
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="w-full h-11 rounded-lg bg-secondary-container hover:bg-secondary text-primary font-label-button text-[14px] font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Request Scoped Proposal</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate CTA Banner */}
      <section className="w-full bg-primary-container text-on-primary py-space-xl px-6 lg:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-headline-lg text-2xl font-bold text-on-primary">
              Ready to Discuss a Tailored Scope of Mandate?
            </h3>
            <p className="font-body-md text-on-primary-container">
              We read every brief and reply within two working days.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact-us')}
            className="h-12 px-8 rounded-lg bg-secondary-container hover:bg-secondary text-primary font-label-button font-bold shrink-0 transition-colors cursor-pointer"
          >
            Initiate Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
