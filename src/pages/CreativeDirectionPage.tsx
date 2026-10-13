import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { COMPANY } from '../data/company';
import { Palette, Film, Presentation, BookCheck, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface CreativeDirectionPageProps {
  onNavigate: (path: string) => void;
}

export default function CreativeDirectionPage({ onNavigate }: CreativeDirectionPageProps) {
  const [creativeFormat, setCreativeFormat] = useState<'film' | 'presentation' | 'monograph'>('film');

  const creativeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Creative Direction & Brand Storytelling',
    'provider': {
      '@type': 'Organization',
      'name': 'Pedaserve',
      'address': COMPANY.schemaAddress
    },
    'description': 'High-concept creative strategy, corporate documentary films, executive keynote decks, brand design systems, and commemorative corporate books.'
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEOHead
        title="Creative Direction & Brand Storytelling | Pedaserve"
        description="High-concept creative strategy, corporate documentary films, executive keynote design, and commemorative milestone books that elevate corporate pedigree."
        canonicalUrl="https://pedaserve.com/creative-direction"
        keywords={['Creative direction Nigeria', 'corporate documentary Port Harcourt', 'executive presentation design', 'brand storytelling Africa', 'institutional monograph']}
        schemaData={creativeSchema}
      />

      {/* Hero Header */}
      <section className="relative w-full bg-[#160e26] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-fuchsia-400/10 border border-fuchsia-400/30 text-fuchsia-300 w-fit text-xs font-semibold uppercase tracking-wider">
            <Palette className="w-4 h-4 text-fuchsia-400" />
            <span>Practice Area: Creative Narrative &amp; Brand Art</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
            Creative Direction &amp; Brand Storytelling.
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed">
            Corporate excellence requires emotional resonance without sacrificing institutional pedigree. We orchestrate documentary films, high-stakes boardroom keynote architecture, and museum-grade milestone publications that immortalize your legacy.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-6 py-3.5 rounded-lg bg-fuchsia-400 hover:bg-fuchsia-300 text-slate-950 font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Consult Creative Directors</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('the-writing-hub')}
              className="px-6 py-3.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all cursor-pointer"
            >
              Explore The Writing Hub
            </button>
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-700 bg-fuchsia-100 px-3 py-1 rounded-full">
            Narrative Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
            Cinematic Artistry Meets Enterprise Gravitas
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            We move beyond generic agency advertising to engineer enduring cultural artifacts for enterprise conglomerates and visionary chairpersons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-fuchsia-400 flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Documentary Films</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Cinema-grade brand documentaries capturing company heritage, industrial scale, and host-community impact for broadcast and shareholder AGMs.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-fuchsia-400 flex items-center justify-center font-bold mb-4">
              02
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Keynote Slide Architecture</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Transforming dense data and financial projections into visually arresting, narrative-driven presentation decks that command boardroom respect.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-fuchsia-400 flex items-center justify-center font-bold mb-4">
              03
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Commemorative Books</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Museum-grade hardbound anniversary volumes, foil-stamped corporate histories, and archival monographs crafted on premium Italian art paper.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-fuchsia-400 flex items-center justify-center font-bold mb-4">
              04
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Brand Art Direction</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Comprehensive visual identity systems, bespoke typography guidelines, photographic moodboards, and multi-sensory brand governance manuals.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Scope */}
      <section className="w-full bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-slate-800/90 rounded-2xl p-6 sm:p-10 border border-slate-700 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-700 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Creative Production Scope &amp; Milestones</h3>
              <p className="text-slate-400 text-sm">Select production asset to preview timeline and deliverables</p>
            </div>
            <span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-300 text-xs font-semibold rounded-full border border-fuchsia-400/30 w-fit">
              High-Concept Production
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Creative Asset Type:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setCreativeFormat('film')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      creativeFormat === 'film' ? 'bg-fuchsia-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    Documentary Film
                  </button>
                  <button
                    onClick={() => setCreativeFormat('presentation')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      creativeFormat === 'presentation' ? 'bg-fuchsia-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    AGM Keynote Deck
                  </button>
                  <button
                    onClick={() => setCreativeFormat('monograph')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      creativeFormat === 'monograph' ? 'bg-fuchsia-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    Hardbound Book
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-fuchsia-400" /> On-location cinematographers &amp; executive interview directors</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-fuchsia-400" /> Original score composition &amp; professional broadcast color grading</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-fuchsia-400" /> Full copyright and broadcast license handover</span>
              </div>
            </div>

            <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 flex flex-col justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Production Output</span>

              <div className="grid grid-cols-2 gap-4 my-4">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Resolution / Quality</span>
                  <span className="text-xl font-bold text-white">4K DCI / 300 DPI</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Executive Review</span>
                  <span className="text-xl font-bold text-fuchsia-400">3 Revisions</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Production Window</span>
                  <span className="text-xl font-bold text-white">3 - 6 Weeks</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Asset Delivery</span>
                  <span className="text-xl font-bold text-emerald-400">Master Drive</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact-us')}
                className="w-full py-3 rounded-lg bg-fuchsia-400 hover:bg-fuchsia-300 text-slate-950 font-bold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Creative Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
