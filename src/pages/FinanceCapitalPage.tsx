import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { COMPANY } from '../data/company';
import { Landmark, DollarSign, PieChart, FileSpreadsheet, CheckCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface FinanceCapitalPageProps {
  onNavigate: (path: string) => void;
}

export default function FinanceCapitalPage({ onNavigate }: FinanceCapitalPageProps) {
  const [dealType, setDealType] = useState<'debt' | 'equity' | 'refinance'>('debt');
  const [dealSize, setDealSize] = useState<'tier1' | 'tier2' | 'tier3'>('tier2');

  const financeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Finance & Capital Advisory',
    'provider': {
      '@type': 'Organization',
      'name': 'Pedaserve',
      'address': COMPANY.schemaAddress
    },
    'description': 'Strategic corporate finance, bankable Confidential Information Memorandums (CIM), 5-year DCF models, debt consortium syndication, and M&A due diligence for African enterprises.'
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEOHead
        title="Finance & Capital Advisory Services | Pedaserve"
        description="Strategic corporate finance, bankable investment memorandums (CIM), dynamic DCF valuation modeling, debt syndication, and capital restructuring by Pedaserve."
        canonicalUrl="https://pedaserve.com/finance-and-capital"
        keywords={['Corporate finance advisory Nigeria', 'investment memorandum CIM Port Harcourt', 'DCF valuation modeling Africa', 'debt syndication Nigeria', 'capital restructuring']}
        schemaData={financeSchema}
      />

      {/* Hero Header */}
      <section className="relative w-full bg-[#081726] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 w-fit text-xs font-semibold uppercase tracking-wider">
            <Landmark className="w-4 h-4 text-amber-400" />
            <span>Practice Area: Capital Architecture &amp; Corporate Finance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
            Finance &amp; Capital Advisory.
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed">
            Securing institutional capital requires flawless financial engineering and bankable underwriting presentation. We build audited 5-year integrated DCF models, Confidential Information Memorandums (CIM), and structure debt-equity capital stacks for expanding mid-to-large enterprises.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-6 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Consult Capital Advisors</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all cursor-pointer"
            >
              Explore Full Practice Catalog
            </button>
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
            Institutional Capital Readiness
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
            Structuring Bankable Deals for Tier-1 Lenders &amp; Private Equity
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            We represent founders and boards during high-stakes capital raises, translating operational momentum into rigorous financial underwriting documents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Bankable CIM Memos</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Confidential Information Memorandums (CIM) and investor teasers written with institutional precision to compel domestic and international capital allocators.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold mb-4">
              02
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Dynamic 5-Year DCF Models</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Three-statement linked financial models with integrated debt service coverage ratios (DSCR), sensitivity toggles, and working capital cycle analyses.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold mb-4">
              03
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Debt Syndication &amp; Refinance</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Restructuring high-interest commercial debt into longer-tenor facility syndicates, mezzanine instruments, and development finance institution (DFI) facilities.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold mb-4">
              04
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">M&amp;A Due Diligence Defenses</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Buy-side and sell-side financial due diligence, virtual data room (VDR) curation, and valuation defenses during equity divestments or joint ventures.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Capital Scope */}
      <section className="w-full bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-slate-800/90 rounded-2xl p-6 sm:p-10 border border-slate-700 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-700 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Capital Readiness &amp; Underwriting Scope</h3>
              <p className="text-slate-400 text-sm">Configure transaction parameters to evaluate readiness milestones</p>
            </div>
            <span className="px-3 py-1 bg-amber-400/20 text-amber-300 text-xs font-semibold rounded-full border border-amber-400/30 w-fit">
              Corporate Finance
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Transaction Structure:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setDealType('debt')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      dealType === 'debt' ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    Senior Debt
                  </button>
                  <button
                    onClick={() => setDealType('equity')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      dealType === 'equity' ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    Equity / JV
                  </button>
                  <button
                    onClick={() => setDealType('refinance')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      dealType === 'refinance' ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    Refinancing
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Target Capital Quantum:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setDealSize('tier1')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      dealSize === 'tier1' ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    ₦500M - ₦2B
                  </button>
                  <button
                    onClick={() => setDealSize('tier2')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      dealSize === 'tier2' ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    ₦2B - ₦10B
                  </button>
                  <button
                    onClick={() => setDealSize('tier3')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      dealSize === 'tier3' ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    ₦10B+ / $15M+
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-400" /> Complete confidential double-blind investor custody</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-400" /> Bank of Industry (BOI) &amp; DFI compliance mapping</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-400" /> Term-sheet representation and financial covenant defense</span>
              </div>
            </div>

            <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 flex flex-col justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Underwriting Outputs</span>

              <div className="grid grid-cols-2 gap-4 my-4">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Financial Model Standard</span>
                  <span className="text-xl font-bold text-white">FAST Standard</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">CIM Depth</span>
                  <span className="text-xl font-bold text-amber-400">45-60 Pages</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">VDR Preparation</span>
                  <span className="text-xl font-bold text-white">2 - 3 Weeks</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Underwriting Confidence</span>
                  <span className="text-xl font-bold text-emerald-400">Tier-1 Ready</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact-us')}
                className="w-full py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Capital Advisory Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
