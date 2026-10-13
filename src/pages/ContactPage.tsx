import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { COMPANY } from '../data/company';
import { submitForm, SendResult } from '../lib/forms';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

const NEEDS = [
  'Writing (articles, reports, web copy)',
  'SEO or a new website',
  'Strategy and marketing',
  'Training or coaching',
  'Not sure yet',
];

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [need, setNeed] = useState(NEEDS[4]);
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // honeypot, stays empty for real people
  const [status, setStatus] = useState<'idle' | 'sending' | SendResult>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    const result = await submitForm('contact', { name, email, need, message, website });
    setStatus(result);
  };

  const inputClass =
    'w-full h-12 px-4 rounded-md border border-outline-variant bg-surface-container-lowest text-on-surface font-body-md placeholder:text-on-surface-variant/70 focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20';

  return (
    <div className="flex flex-col w-full">
      <SEOHead
        title="Contact | Pedaserve"
        description="Tell us where your business is stuck. We reply to every message within two working days."
        canonicalUrl="https://pedaserve.com/contact"
      />

      <section className="w-full bg-surface-container-lowest">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24 lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Left: the ask */}
          <div className="lg:col-span-5">
            <h1 className="font-display-hero font-bold tracking-[-0.02em] text-on-surface text-4xl sm:text-5xl leading-tight">
              Tell us where the business is stuck.
            </h1>
            <p className="font-body-lead text-on-surface-variant text-lg leading-relaxed mt-6 max-w-md">
              A few lines is enough. We read every message and reply within two working days, usually with a suggestion whether or not you end up working with us.
            </p>

            <dl className="mt-10 flex flex-col gap-5 font-body-md text-on-surface">
              <div>
                <dt className="font-body-sm text-sm text-on-surface-variant">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${COMPANY.email}`} className="underline underline-offset-4 decoration-outline-variant hover:decoration-secondary-container">
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-body-sm text-sm text-on-surface-variant">Office</dt>
                <dd className="mt-1 leading-relaxed">
                  {COMPANY.address.line1}<br />
                  {COMPANY.address.town}, {COMPANY.address.postcode}<br />
                  {COMPANY.address.country}
                </dd>
              </div>
              {COMPANY.phone && (
                <div>
                  <dt className="font-body-sm text-sm text-on-surface-variant">Phone</dt>
                  <dd className="mt-1">
                    <a href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`} className="underline underline-offset-4 decoration-outline-variant hover:decoration-secondary-container">
                      {COMPANY.phone}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* Right: the form */}
          <div className="lg:col-span-7 mt-12 lg:mt-0">
            {status === 'sent' || status === 'mailto' ? (
              <div className="p-8 rounded-lg bg-surface-container-low border border-outline-variant/60" role="status">
                <h2 className="font-headline-sm font-semibold text-on-surface text-xl">
                  {status === 'sent' ? 'Thanks, we have your message.' : 'Your email app should now be open.'}
                </h2>
                <p className="font-body-md text-on-surface-variant leading-relaxed mt-2">
                  {status === 'sent'
                    ? `We'll reply to ${email} within two working days.`
                    : `Press send there and it will reach us at ${COMPANY.email}. If nothing opened, email us directly at that address.`}
                </p>
                <button
                  onClick={() => onNavigate('home')}
                  className="mt-6 font-label-button text-base font-semibold text-on-surface underline underline-offset-4 decoration-outline-variant hover:decoration-secondary-container cursor-pointer"
                >
                  Back to the homepage
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label>
                    Website
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-2">
                    <span className="font-body-sm text-sm font-medium text-on-surface">Your name</span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-body-sm text-sm font-medium text-on-surface">Email</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="font-body-sm text-sm font-medium text-on-surface">What do you need help with?</span>
                  <select
                    name="need"
                    value={need}
                    onChange={(e) => setNeed(e.target.value)}
                    className={inputClass}
                  >
                    {NEEDS.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="font-body-sm text-sm font-medium text-on-surface">Your message</span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What is the business, and what would you like to be different in six months?"
                    className={`${inputClass} h-auto py-3 resize-y`}
                  />
                </label>

                {status === 'failed' && (
                  <p className="font-body-sm text-sm text-error" role="alert">
                    That didn't send. Please try again, or email us at {COMPANY.email}.
                  </p>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center justify-center h-12 px-7 rounded-md bg-secondary-container hover:bg-secondary-fixed-dim text-on-secondary-fixed font-label-button text-base font-semibold transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-wait focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send message'}
                  </button>
                  <span className="font-body-sm text-sm text-on-surface-variant">
                    We only use this to reply to you.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
