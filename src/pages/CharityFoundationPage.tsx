import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { COMPANY } from '../data/company';
import { HeartHandshake, ShieldCheck, Users, TrendingUp, CheckCircle, ArrowRight, FileCheck, Award, Sparkles } from 'lucide-react';

interface CharityFoundationPageProps {
  onNavigate: (path: string) => void;
}

export default function CharityFoundationPage({ onNavigate }: CharityFoundationPageProps) {
  const [budgetRange, setBudgetRange] = useState<'tier1' | 'tier2' | 'tier3'>('tier2');

  const charitySchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Charity & Foundation Strategic Advisory',
    'provider': {
      '@type': 'Organization',
      'name': 'Pedaserve',
      'address': COMPANY.schemaAddress
    },
    'description': 'Strategic philanthropic advisory, foundation governance, international grant matching, CSR impact verification, and host community alignment in West Africa.'
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEOHead
        title="Charity & Foundation Strategic Advisory | Pedaserve"
        description="Empowering philanthropic foundations, corporate CSR directorates, and NGOs with rigorous governance, SROI audits, donor grant structuring, and community mediation."
        canonicalUrl="https://pedaserve.com/charity-and-foundation"
        keywords={['Charity advisory Nigeria', 'foundation governance Port Harcourt', 'NGO grant writing', 'CSR impact audits', 'SROI Nigeria']}
        schemaData={charitySchema}
      />

      {/* Hero Header */}
      <section className="relative w-full bg-[#0a1826] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 w-fit text-xs font-semibold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4 text-emerald-400" />
            <span>Practice Area: Philanthropy &amp; Social Impact</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
            Charity &amp; Foundation Strategic Advisory.
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed">
            Philanthropic capital must be stewarded with the same analytical rigor as commercial enterprise. We guide family foundations, corporate CSR boards, and non-profits in creating transparent charters, winning multilateral grants, and measuring audited social returns.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-6 py-3.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Consult Philanthropic Directors</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all cursor-pointer"
            >
              Explore All Practice Areas
            </button>
          </div>
        </div>
      </section>

      {/* Core Advisory Capabilities */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Institutional Impact Framework
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
            Guiding Philanthropic Stewards from Intent to Verifiable Change
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            From oil-producing host communities across the Niger Delta to regional education initiatives, we ensure philanthropic programs operate transparently and withstand international audit standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-emerald-900 text-emerald-300 flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Trusteeship &amp; Governance</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Establishing rock-solid foundation deeds, conflict-of-interest bylaws, disbursement approval committees, and regulatory compliance with statutory authorities.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-emerald-900 text-emerald-300 flex items-center justify-center font-bold mb-4">
              02
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Multilateral Grant Engineering</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Drafting bankable grant requests and response dossiers for USAID, Gates Foundation, Ford Foundation, AfDB, and global philanthropic funds.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-emerald-900 text-emerald-300 flex items-center justify-center font-bold mb-4">
              03
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">CSR &amp; Host Community Mediation</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Facilitating deep stakeholder dialogue and consensus building between corporate industrial operators and traditional grassroots leadership.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-emerald-900 text-emerald-300 flex items-center justify-center font-bold mb-4">
              04
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Audited SROI Telemetry</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Quantifying Social Return on Investment (SROI) with measurable economic indicators, beneficiary surveys, and independent third-party monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive SROI Estimator */}
      <section className="w-full bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-slate-800/90 rounded-2xl p-6 sm:p-10 border border-slate-700 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-700 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Philanthropic Capital Efficiency &amp; SROI Matrix</h3>
              <p className="text-slate-400 text-sm">Evaluate projected community impact leverage based on program scope</p>
            </div>
            <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-400/30 w-fit">
              Model Assessment
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Annual Program Capital Band:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setBudgetRange('tier1')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      budgetRange === 'tier1' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    ₦10M - ₦50M
                  </button>
                  <button
                    onClick={() => setBudgetRange('tier2')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      budgetRange === 'tier2' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    ₦50M - ₦250M
                  </button>
                  <button
                    onClick={() => setBudgetRange('tier3')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      budgetRange === 'tier3' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    ₦250M+ / $1M+
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Milestone-based escrow disbursement structuring</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> International anti-bribery &amp; AML compliance vetting</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Annual full-color transparency report for stakeholders</span>
              </div>
            </div>

            <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 flex flex-col justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Projected Philanthropic Output</span>

              <div className="grid grid-cols-2 gap-4 my-4">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">SROI Value Multiplier</span>
                  <span className="text-2xl font-bold text-emerald-400">4.2x to 6.8x</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Capital Leakage Margin</span>
                  <span className="text-2xl font-bold text-white">&lt; 1.5%</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Audited Compliance</span>
                  <span className="text-2xl font-bold text-amber-400">100% Passed</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Reporting Cadence</span>
                  <span className="text-2xl font-bold text-white">Quarterly</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact-us')}
                className="w-full py-3 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Foundation Structuring Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Scope */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Institutional Engagement Scopes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Corporate CSR Restructuring
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Auditing legacy corporate charitable donations to eliminate ad-hoc giving, consolidating funds into strategic flagship initiatives with quantifiable returns.
            </p>
            <ul className="text-xs text-slate-500 space-y-1">
              <li>• Host community needs assessment</li>
              <li>• Key performance index setup</li>
              <li>• Memorandum of Understanding (MoU) drafting</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-600" />
              Family Foundation Setup
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Crafting generational philanthropic legacy vehicles for high-net-worth founders, structuring perpetual endowments and succession charters.
            </p>
            <ul className="text-xs text-slate-500 space-y-1">
              <li>• Board of trustees bylaws</li>
              <li>• Ethical investment mandate</li>
              <li>• Next-generation stewardship training</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" />
              NGO Grant Capacity Building
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Training non-profit management teams to prepare rigorous financial reporting, log-frame matrices, and procurement systems required by international donors.
            </p>
            <ul className="text-xs text-slate-500 space-y-1">
              <li>• Theory of Change workshop</li>
              <li>• Grant compliance toolkits</li>
              <li>• Donor pitch decks and whitepapers</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
