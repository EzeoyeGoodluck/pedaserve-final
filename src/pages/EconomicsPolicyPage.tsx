import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { COMPANY } from '../data/company';
import { TrendingUp, LineChart, Globe2, Building2, CheckCircle, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface EconomicsPolicyPageProps {
  onNavigate: (path: string) => void;
}

export default function EconomicsPolicyPage({ onNavigate }: EconomicsPolicyPageProps) {
  const [macroScenario, setMacroScenario] = useState<'fx' | 'inflation' | 'trade'>('fx');

  const economicsSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Economics & Policy Advisory',
    'provider': {
      '@type': 'Organization',
      'name': 'Pedaserve',
      'address': COMPANY.schemaAddress
    },
    'description': 'Macroeconomic forecasting, AfCFTA trade corridor analysis, fiscal policy stress-testing, and public sector policy advocacy for African enterprise boards.'
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEOHead
        title="Economics & Policy Advisory | Pedaserve"
        description="Actionable macroeconomic intelligence, regional trade forecasting, policy advocacy memos, and fiscal impact modeling guiding boardrooms through African market shifts."
        canonicalUrl="https://pedaserve.com/economics-and-policy"
        keywords={['Economics advisory Nigeria', 'macroeconomic intelligence Port Harcourt', 'AfCFTA trade modeling', 'fiscal policy analysis', 'corporate policy advocacy Africa']}
        schemaData={economicsSchema}
      />

      {/* Hero Header */}
      <section className="relative w-full bg-[#0a1526] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-400/10 border border-blue-400/30 text-blue-300 w-fit text-xs font-semibold uppercase tracking-wider">
            <LineChart className="w-4 h-4 text-blue-400" />
            <span>Practice Area: Macro Intelligence &amp; Public Policy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
            Economics &amp; Policy Advisory.
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed">
            Turbulent macroeconomic shifts, currency devaluations, and regulatory tax overhauls require quantitative predictive intelligence. We equip boards and public agencies with scenario models, AfCFTA trade forecasts, and sovereign policy memoranda.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-6 py-3.5 rounded-lg bg-blue-400 hover:bg-blue-300 text-slate-950 font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Board Economic Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('daily-insights-and-blog')}
              className="px-6 py-3.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all cursor-pointer"
            >
              Read Latest Market Intelligence
            </button>
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Macro Foresight
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
            Guiding Enterprise Balance Sheets Through Shifting Fiscal Landscapes
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            From foreign exchange volatility in Nigeria to cross-border logistics across ECOWAS and Central Africa, our economists translate econometric data into board-level decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-blue-400 flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Macro Stress-Testing</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Stress-testing enterprise cash flows against inflation, interest rate hikes, and foreign exchange volatility to protect operating gross margins.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-blue-400 flex items-center justify-center font-bold mb-4">
              02
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">AfCFTA Trade Corridors</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Modeling tariff schedules, rules-of-origin bottlenecks, and freight costs across the African Continental Free Trade Area for industrial exporters.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-blue-400 flex items-center justify-center font-bold mb-4">
              03
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Fiscal Policy Impact</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Evaluating new tax legislation, statutory levies, and government subsidy adjustments to re-optimize supply chains before policy implementation.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-blue-400 flex items-center justify-center font-bold mb-4">
              04
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Policy Advocacy Memos</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Authoring empirical whitepapers for legislative committee hearings, ministerial consultations, and private-sector trade coalitions.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Scenario Simulator */}
      <section className="w-full bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-slate-800/90 rounded-2xl p-6 sm:p-10 border border-slate-700 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-700 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Macroeconomic Scenario Stress-Test Simulation</h3>
              <p className="text-slate-400 text-sm">Select primary risk variable to view modeling parameters</p>
            </div>
            <span className="px-3 py-1 bg-blue-400/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-400/30 w-fit">
              Econometric Model
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Simulate Macro Stressor:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setMacroScenario('fx')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      macroScenario === 'fx' ? 'bg-blue-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    FX Volatility
                  </button>
                  <button
                    onClick={() => setMacroScenario('inflation')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      macroScenario === 'inflation' ? 'bg-blue-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    Sticky Inflation
                  </button>
                  <button
                    onClick={() => setMacroScenario('trade')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      macroScenario === 'trade' ? 'bg-blue-400 text-slate-950' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    Tariff Reform
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> Dynamic stochastic general equilibrium (DSGE) frameworks</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> Sector-specific sensitivity index mapping</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> Actionable hedging and supply chain relocation playbooks</span>
              </div>
            </div>

            <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 flex flex-col justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Advisory Output</span>

              <div className="grid grid-cols-2 gap-4 my-4">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Forecast Horizon</span>
                  <span className="text-xl font-bold text-white">12 - 36 Months</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Scenario Bands</span>
                  <span className="text-xl font-bold text-blue-400">Base / Bear / Bull</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Confidence Interval</span>
                  <span className="text-xl font-bold text-white">95% Monte Carlo</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Briefing Format</span>
                  <span className="text-xl font-bold text-emerald-400">Executive Dossier</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact-us')}
                className="w-full py-3 rounded-lg bg-blue-400 hover:bg-blue-300 text-slate-950 font-bold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Boardroom Economic Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
