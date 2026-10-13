import React from 'react';
import SEOHead from '../components/SEOHead';

interface EnergyProcurementPageProps {
  onNavigate: (path: string) => void;
}

export default function EnergyProcurementPage({ onNavigate }: EnergyProcurementPageProps) {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEOHead
        title="Energy Procurement & Captive Power Infrastructure | Pedaserve"
        description="Strategic advisory and technical procurement for decentralized captive power, off-grid gas-solar hybrid systems, and PPA structuring across industrial corridors."
        canonicalUrl="https://pedaserve.com/energy-procurement"
        keywords={['Captive Power Nigeria', 'Gas Turbine Procurement Port Harcourt', 'Industrial Solar Mini-Grids', 'PPA Negotiation', 'Energy Infrastructure Advisory']}
      />

      {/* Hero */}
      <section className="relative w-full bg-primary-container text-on-primary py-space-xl sm:py-space-2xl px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-lowest/10 backdrop-blur-md text-secondary-fixed-dim w-fit">
            <span className="material-symbols-outlined text-[16px]">bolt</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider font-semibold">
              Power Infrastructure &amp; Capital Procurement
            </span>
          </div>

          <h1 className="font-display-hero text-headline-xl sm:text-4xl lg:text-display-hero font-bold text-on-primary tracking-tight">
            Reliable Energy for Industrial Productivity.
          </h1>

          <p className="font-body-lead text-body-lead text-on-primary-container max-w-3xl leading-relaxed">
            Eliminate the ruinous margin drag of emergency diesel gensets. Pedaserve guides manufacturing estates, deep-water ports, and commercial complexes in procuring resilient off-grid captive gas and solar hybrid infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact-us')}
              className="h-12 px-6 sm:px-8 rounded-lg bg-secondary-container hover:bg-secondary text-primary font-label-button font-bold transition-all shadow-sm cursor-pointer w-full sm:w-auto text-center"
            >
              Request Energy Feasibility Audit
            </button>
          </div>
        </div>
      </section>

      {/* 3 Core Engineering Pillars */}
      <section className="w-full py-space-xl sm:py-space-2xl px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">speed</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface">LCOE &amp; Tariff Optimization</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Auditing current diesel consumption vs. natural gas reciprocating engines and solar mini-grids to establish baseline Levelized Cost of Energy models.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">precision_manufacturing</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface">Vendor-Neutral Equipment Tendering</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Structuring competitive bidding for industrial gas turbines, medium-voltage switchgears, and battery storage from Tier-1 global engineering firms.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">gavel</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface">PPA Structuring &amp; NUPRC Compliance</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Advising industrial clients on Power Purchase Agreement contracts, indexation formulas, gas sales aggregation agreements, and licensing with state energy commissions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
