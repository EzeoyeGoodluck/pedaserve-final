import React, { useState } from 'react';
import { submitForm } from '../lib/forms';
import { COMPANY } from '../data/company';

interface FooterProps {
  onNavigate: (path: string, articleId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const [subscribeError, setSubscribeError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribeError('');
    const ok = await submitForm('newsletter', { email, source: 'footer' });
    if (ok !== 'failed') setSubscribed(true);
    else setSubscribeError('Something went wrong. Please try again or email info@pedaserve.com.');
  };

  const handleLink = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-low mt-space-2xl">
      {/* Newsletter Dispatch Bar */}
      <div className="bg-primary-container text-on-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-secondary-container font-label-caps text-label-caps uppercase tracking-wider mb-2 font-bold">
                <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                Daily Editorial Dispatch
              </div>
              <h3 className="font-headline-lg text-headline-lg font-bold text-on-primary mb-2">
                Stay Informed with Institutional Intelligence
              </h3>
              <p className="font-body-md text-body-md text-on-primary-container">
                Receive daily practical strategic analysis, SEO blueprints, leadership playbooks, and market intelligence straight to your inbox at 7:00 AM WAT.
              </p>
            </div>

            <div className="w-full lg:w-auto lg:min-w-[360px]">
              {subscribed ? (
                <div className="p-4 rounded-xl bg-surface-container-lowest/10 border border-secondary-container/40 flex items-center gap-3 text-secondary-fixed-dim">
                  <span className="material-symbols-outlined text-[24px] text-secondary-container">check_circle</span>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-[15px] font-bold text-on-primary">You're subscribed</span>
                    <span className="font-body-sm text-[12px] text-on-primary-container">
                      New articles will be sent to {email}.
                    </span>
                  </div>
                </div>
              ) : (
                <form className="flex flex-col sm:flex-row gap-2 w-full" onSubmit={handleSubscribe}>
                  <input
                    className="h-12 px-4 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none flex-1 w-full min-w-0 shadow-sm"
                    placeholder="Your email address"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="h-12 px-6 rounded-lg bg-secondary-container hover:bg-secondary text-primary font-label-button text-label-button font-bold shrink-0 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm w-full sm:w-auto"
                    type="submit"
                  >
                    <span>Subscribe</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                </form>
              )}
              {subscribeError && (
                <p className="font-body-sm text-[12px] text-error mt-2" role="alert">{subscribeError}</p>
              )}
              <p className="font-body-sm text-[12px] text-on-primary-container mt-2">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl">
          {/* Column 1: Organization Summary (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-secondary-container">
                <span className="material-symbols-outlined text-[24px]">spa</span>
              </div>
              <span className="font-headline-sm text-headline-sm font-bold text-on-surface">Pedaserve</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant pr-4">
              Strategy, writing, SEO and training for growing businesses. Based in Watford, working across the UK.
            </p>
            <div className="flex flex-col gap-2.5 pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">location_on</span>
                <span>{COMPANY.addressOneLine}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">mail</span>
                <a className="hover:text-on-surface transition-colors font-medium" href="mailto:info@pedaserve.com">
                  info@pedaserve.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-label-button text-label-button text-on-surface uppercase tracking-wider font-bold mb-1">
              Quick Links
            </h4>
            <button
              onClick={(e) => handleLink('home', e)}
              className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Home
            </button>
            <button
              onClick={(e) => handleLink('about-us', e)}
              className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            >
              About Us
            </button>
            <button
              onClick={(e) => handleLink('services', e)}
              className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            >
              All Services
            </button>
            <button
              onClick={(e) => handleLink('daily-insights-and-blog', e)}
              className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Daily Insights
            </button>
            <button
              onClick={(e) => handleLink('contact-us', e)}
              className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Contact Us
            </button>
            <button
              onClick={(e) => handleLink('contact-us', e)}
              className="text-left font-body-sm text-body-sm text-secondary font-semibold hover:underline"
            >
              Get Started
            </button>
          </div>

          {/* Column 3: Core Practice Areas (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <h4 className="font-label-button text-label-button text-on-surface uppercase tracking-wider font-bold mb-1">
              Core Practice Areas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-left">
              <button
                onClick={(e) => handleLink('the-writing-hub', e)}
                className="text-left font-body-sm text-[13px] text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                The Writing Hub
              </button>
              <button
                onClick={(e) => handleLink('blog-management', e)}
                className="text-left font-body-sm text-[13px] text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Blog Management
              </button>
              <button
                onClick={(e) => handleLink('creative-direction', e)}
                className="text-left font-body-sm text-[13px] text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Creative Direction
              </button>
              <button
                onClick={(e) => handleLink('seo-and-digital-marketing', e)}
                className="text-left font-body-sm text-[13px] text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                SEO &amp; Digital Marketing
              </button>
              <button
                onClick={(e) => handleLink('economics-and-policy', e)}
                className="text-left font-body-sm text-[13px] text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Economics &amp; Policy Advisory
              </button>
              <button
                onClick={(e) => handleLink('charity-and-foundation', e)}
                className="text-left font-body-sm text-[13px] text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Charity
              </button>
              <button
                onClick={(e) => handleLink('scientific-documentation', e)}
                className="text-left font-body-sm text-[13px] text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Scientific Documentation
              </button>
              <button
                onClick={(e) => handleLink('training-and-leadership', e)}
                className="text-left font-body-sm text-[13px] text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Training &amp; Leadership
              </button>
            </div>
          </div>

          {/* Column 4: Daily Blog Categories (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-label-button text-label-button text-on-surface uppercase tracking-wider font-bold mb-1">
              Daily Blog Categories
            </h4>
            <button
              onClick={(e) => handleLink('daily-insights-and-blog', e)}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-between text-left"
            >
              <span>Corporate Strategy</span>
              <span className="font-label-caps text-[11px] bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">Daily</span>
            </button>
            <button
              onClick={(e) => handleLink('daily-insights-and-blog', e)}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-between text-left"
            >
              <span>SEO &amp; Growth Insights</span>
              <span className="font-label-caps text-[11px] bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">Trending</span>
            </button>
            <button
              onClick={(e) => handleLink('daily-insights-and-blog', e)}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-between text-left"
            >
              <span>Writing &amp; Publishing Crafts</span>
              <span className="font-label-caps text-[11px] bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">Guides</span>
            </button>
            <button
              onClick={(e) => handleLink('daily-insights-and-blog', e)}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-between text-left"
            >
              <span>Leadership Executive Series</span>
              <span className="font-label-caps text-[11px] bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">Weekly</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Legal Sub-bar */}
      <div className="bg-surface-container-high py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
          <p>© 2025 Pedaserve Strategic Enterprise. All rights reserved.</p>
          <div className="flex items-center gap-space-md font-body-sm text-[13px]">
            <button
              onClick={(e) => handleLink('privacy-policy', e)}
              className="hover:text-on-surface transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={(e) => handleLink('terms-of-service', e)}
              className="hover:text-on-surface transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={(e) => handleLink('sitemap', e)}
              className="hover:text-on-surface transition-colors"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
