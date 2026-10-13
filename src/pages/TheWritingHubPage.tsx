import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';

interface TheWritingHubPageProps {
  onNavigate: (path: string) => void;
}

export default function TheWritingHubPage({ onNavigate }: TheWritingHubPageProps) {
  const [selectedFormat, setSelectedFormat] = useState('memoir');
  const [estimatedPages, setEstimatedPages] = useState(150);

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEOHead
        title="The Writing Hub | Executive Memoirs, Whitepapers & Ghostwriting"
        description="We parade a prodigious collection of astute writers. Executive biographies, institutional whitepapers, annual reports, and thought leadership prose."
        canonicalUrl="https://pedaserve.com/the-writing-hub"
        keywords={['The Writing Hub Pedaserve', 'Executive Ghostwriting Nigeria', 'Corporate Whitepapers West Africa', 'Memoir Publishing', 'Thought Leadership']}
      />

      {/* Hero */}
      <section className="relative w-full bg-primary-container text-on-primary py-space-xl sm:py-space-2xl px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-lowest/10 backdrop-blur-md text-secondary-fixed-dim w-fit">
            <span className="material-symbols-outlined text-[16px]">edit_note</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider font-semibold">
              Executive Publishing &amp; Documentation Wing
            </span>
          </div>

          <h1 className="font-display-hero text-headline-xl sm:text-4xl lg:text-display-hero font-bold text-on-primary tracking-tight">
            The Transformative Power of Words.
          </h1>

          <p className="font-body-lead text-body-lead text-on-primary-container max-w-3xl leading-relaxed">
            We parade a prodigious collection of astute writers. We go beyond the traditional genre of writing, bringing you home and expressing your thoughts and ideas through the transformative power of words.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact-us')}
              className="h-12 px-6 sm:px-8 rounded-lg bg-secondary-container hover:bg-secondary text-primary font-label-button font-bold transition-all shadow-sm cursor-pointer text-center"
            >
              Commission an Editorial Mandate
            </button>
            <a
              href="#excerpts"
              className="h-12 px-6 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-button flex items-center justify-center gap-2 transition-all text-center"
            >
              <span>Explore Manuscript Excerpts</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4 Practice Pillars */}
      <section className="w-full py-space-xl sm:py-space-2xl px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-wider">
              Literary Architecture
            </span>
            <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface mt-2 mb-3">
              Crafted for Institutional Permanence
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every sentence is meticulously researched, fact-checked, and sculpted to reflect profound gravitas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">menu_book</span>
              </div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface">Executive Biographies &amp; Memoirs</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Full-scale autobiographies and corporate foundation histories celebrating business visionaries, public servants, and family legacies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">article</span>
              </div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface">Institutional Whitepapers</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Empirically grounded research monographs that position corporate groups as definitive sector authorities before regulatory bodies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">record_voice_over</span>
              </div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface">C-Suite Thought Leadership</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                High-yield op-eds, keynote speeches, and syndicated executive essays tailored for international publications and board addresses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">security</span>
              </div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface">Double-Blind NDA Protocol</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Guaranteed total confidentiality with complete transfer of copyright, intellectual property, and author bylines to the client.
              </p>
            </div>
          </div>

          {/* Interactive Manuscript Estimator */}
          <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-lg">
              <h3 className="font-headline-sm text-xl font-bold text-on-surface">Manuscript Scope Calculator</h3>
              <p className="font-body-sm text-on-surface-variant">
                Estimate the research duration and editorial commitment required for your publication.
              </p>
              <div className="flex gap-2 pt-2">
                {['memoir', 'whitepaper', 'annual-report'].map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setSelectedFormat(fmt)}
                    className={`px-3 py-1.5 rounded-lg text-body-sm font-semibold capitalize border cursor-pointer ${
                      selectedFormat === fmt
                        ? 'bg-primary-container text-on-primary border-primary-container'
                        : 'bg-surface-container-lowest text-on-surface border-outline-variant/30'
                    }`}
                  >
                    {fmt.replace('-', ' ')}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-2">
                <span className="text-body-sm font-medium">Estimated Length: {estimatedPages} pages</span>
                <input
                  type="range"
                  min="20"
                  max="350"
                  step="10"
                  value={estimatedPages}
                  onChange={(e) => setEstimatedPages(Number(e.target.value))}
                  className="accent-secondary"
                />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 text-center min-w-[280px] shadow-sm">
              <span className="font-label-caps text-[11px] text-secondary font-bold uppercase">Estimated Timeline</span>
              <div className="font-headline-lg text-3xl font-bold text-on-surface my-1">
                {selectedFormat === 'whitepaper' ? '4 - 6 Weeks' : `${Math.ceil(estimatedPages / 40) + 2} - ${Math.ceil(estimatedPages / 30) + 3} Months`}
              </div>
              <p className="font-body-sm text-[12px] text-on-surface-variant mb-4">
                Includes oral interviews, archival research, 3 editorial review passes, and typeset layout.
              </p>
              <button
                onClick={() => onNavigate('contact-us')}
                className="w-full h-10 rounded-lg bg-secondary-container hover:bg-secondary text-primary font-label-button text-[13px] font-bold transition-colors cursor-pointer"
              >
                Inquire With Managing Editor
              </button>
            </div>
          </div>

          {/* Manuscript Excerpt Showcase */}
          <div id="excerpts" className="flex flex-col gap-6 pt-6">
            <h3 className="font-headline-lg text-2xl font-bold text-on-surface">From the Editorial Archives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col gap-3">
                <span className="font-label-caps text-[11px] text-secondary font-bold uppercase">Corporate Memoir Case</span>
                <h4 className="font-headline-sm text-lg font-bold text-on-surface">The River and the Rig: 30 Years of Indigenous Energy</h4>
                <p className="font-body-sm text-on-surface-variant italic">
                  “When the first swamp barge slipped into the Nun River under dawn mist in 1994, nobody foresaw the oil shocks that would follow. We had only two welding machines and an unshakeable conviction that Rivers State technicians would one day run this entire basin...”
                </p>
                <span className="font-body-sm text-[12px] text-on-surface font-semibold pt-2">
                  Client: Confidential Oilfield Engineering Founder, Port Harcourt
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col gap-3">
                <span className="font-label-caps text-[11px] text-secondary font-bold uppercase">Public Policy Monograph</span>
                <h4 className="font-headline-sm text-lg font-bold text-on-surface">Industrial Energy Security in the Gulf of Guinea</h4>
                <p className="font-body-sm text-on-surface-variant italic">
                  “The cost of electricity in regional manufacturing cannot be viewed purely as a utility invoice; it is a national defense metric. A country that spends 38% of factory operating cash flow on diesel generators effectively levies a tariff against its own sovereignty...”
                </p>
                <span className="font-body-sm text-[12px] text-on-surface font-semibold pt-2">
                  Commissioned for Regional Industrial Development Forum
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
