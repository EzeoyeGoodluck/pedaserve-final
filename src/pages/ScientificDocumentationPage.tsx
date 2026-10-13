import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { COMPANY } from '../data/company';
import { Microscope, FileText, CheckCircle, ArrowRight, ShieldAlert, Cpu, Sparkles, BookOpenCheck } from 'lucide-react';

interface ScientificDocumentationPageProps {
  onNavigate: (path: string) => void;
}

export default function ScientificDocumentationPage({ onNavigate }: ScientificDocumentationPageProps) {
  const [docType, setDocType] = useState<'peer-reviewed' | 'eia' | 'patent'>('peer-reviewed');

  const scientificSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Scientific & Technical Research Documentation',
    'provider': {
      '@type': 'Organization',
      'name': 'Pedaserve',
      'address': COMPANY.schemaAddress
    },
    'description': 'Peer-reviewed manuscript writing, Environmental Impact Assessment (EIA) technical reports, patent specifications, and scientific monograph synthesis.'
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEOHead
        title="Scientific & Research Documentation Services | Pedaserve"
        description="Rigorous technical documentation for laboratories, universities, patent applicants, and agro-industrial ventures. Peer-reviewed papers, EIA reports, and regulatory dossiers."
        canonicalUrl="https://pedaserve.com/scientific-documentation"
        keywords={['Scientific documentation Nigeria', 'EIA reports Port Harcourt', 'peer reviewed manuscript drafting', 'patent technical writing', 'laboratory protocol writing']}
        schemaData={scientificSchema}
      />

      {/* Hero Header */}
      <section className="relative w-full bg-[#0d1624] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 w-fit text-xs font-semibold uppercase tracking-wider">
            <Microscope className="w-4 h-4 text-cyan-400" />
            <span>Practice Area: Science &amp; Technical Synthesis</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
            Scientific &amp; Technical Research Documentation.
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed">
            Transform empirical datasets and laboratory discoveries into publication-grade manuscripts, unassailable Environmental Impact Assessments (EIA), and defendable patent filings that withstand the scrutiny of international review bodies.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-6 py-3.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Commission Technical Documentation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all cursor-pointer"
            >
              View Practice Catalog
            </button>
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-100 px-3 py-1 rounded-full">
            Methodological Rigor
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
            Translating Complex Laboratory Insights into Defendable Publications
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Our scientific documentation bureau unites PhD researchers, chartered engineers, and technical biographers to bridge the gap between empirical experimentation and regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-cyan-400 flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Peer-Reviewed Manuscripts</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Assisting researchers, faculty, and corporate labs with manuscript drafting, statistical analysis presentation, and journal formatting for Scopus, PubMed, and Springer-indexed periodicals.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-cyan-400 flex items-center justify-center font-bold mb-4">
              02
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Environmental Impact (EIA)</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Comprehensive EIA technical reports for industrial energy, port dredging, agro-processing, and manufacturing estates meeting Federal Ministry of Environment standards.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-cyan-400 flex items-center justify-center font-bold mb-4">
              03
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Patent &amp; IP Technical Claims</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Drafting exact chemical, biological, and engineering claims that protect institutional intellectual property from infringement across international patent offices.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-cyan-400 flex items-center justify-center font-bold mb-4">
              04
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Laboratory Protocol Manuals</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Standard Operating Procedure (SOP) documentation, hazard mitigation frameworks, and ISO 17025 accreditation dossiers for commercial testing laboratories.
            </p>
          </div>
        </div>
      </section>

      {/* Scope Selector */}
      <section className="w-full bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-slate-800/90 rounded-2xl p-6 sm:p-10 border border-slate-700 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-700 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Scientific Manuscript &amp; Dossier Pipeline</h3>
              <p className="text-slate-400 text-sm">Select document category for structural milestone timeline</p>
            </div>
            <span className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-400/30 w-fit">
              Peer-Review Standard
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Technical Document Category:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setDocType('peer-reviewed')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      docType === 'peer-reviewed' ? 'bg-cyan-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    Peer-Reviewed Paper
                  </button>
                  <button
                    onClick={() => setDocType('eia')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      docType === 'eia' ? 'bg-cyan-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    EIA Technical Report
                  </button>
                  <button
                    onClick={() => setDocType('patent')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      docType === 'patent' ? 'bg-cyan-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    Patent Specification
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Full citation indexing (IEEE, APA, Nature, Harvard formats)</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> High-resolution vector diagrams and statistical charts</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Non-disclosure and confidential intellectual property custody</span>
              </div>
            </div>

            <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 flex flex-col justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Milestone Timeline</span>

              <div className="grid grid-cols-2 gap-4 my-4">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Empirical Data Ingestion</span>
                  <span className="text-xl font-bold text-white">Days 1 - 7</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Initial Manuscript Draft</span>
                  <span className="text-xl font-bold text-cyan-400">Day 14</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Senior Peer Review</span>
                  <span className="text-xl font-bold text-white">Day 21</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Final Dossier Handover</span>
                  <span className="text-xl font-bold text-emerald-400">Day 30</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact-us')}
                className="w-full py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Scientific Documentation Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
