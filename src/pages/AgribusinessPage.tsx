import React from 'react';
import SEOHead from '../components/SEOHead';

interface AgribusinessPageProps {
  onNavigate: (path: string) => void;
}

export default function AgribusinessPage({ onNavigate }: AgribusinessPageProps) {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEOHead
        title="Agribusiness Enterprise & Agro-Value Chains | Pedaserve"
        description="Pedaserve develops commercial cassava, plantain, and oil palm value chains, smallholder outgrower schemes, and cold-chain aggregation logistics."
        canonicalUrl="https://pedaserve.com/agribusiness"
        keywords={['Agribusiness Nigeria', 'Cassava Value Chain', 'Outgrower Schemes Niger Delta', 'Cold Chain Aggregation', 'Commercial Farming Advisory']}
      />

      {/* Hero */}
      <section className="relative w-full bg-primary-container text-on-primary py-space-xl sm:py-space-2xl px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-lowest/10 backdrop-blur-md text-secondary-fixed-dim w-fit">
            <span className="material-symbols-outlined text-[16px]">agriculture</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider font-semibold">
              Sustainable Agro-Value Chains
            </span>
          </div>

          <h1 className="font-display-hero text-headline-xl sm:text-4xl lg:text-display-hero font-bold text-on-primary tracking-tight">
            Industrializing Agricultural Supply Chains.
          </h1>

          <p className="font-body-lead text-body-lead text-on-primary-container max-w-3xl leading-relaxed">
            We bridge the gap between agrarian rural farming clusters and industrial off-takers. Through computerized outgrower systems, post-harvest logistics, and export quality audits, we unlock predictable margins.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact-us')}
              className="h-12 px-6 sm:px-8 rounded-lg bg-secondary-container hover:bg-secondary text-primary font-label-button font-bold transition-all shadow-sm cursor-pointer w-full sm:w-auto text-center"
            >
              Consult Agribusiness Practice
            </button>
          </div>
        </div>
      </section>

      {/* Value Chain Pillars */}
      <section className="w-full py-space-xl sm:py-space-2xl px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">inventory_2</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface">Post-Harvest Aggregation Logistics</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Minimizing the 30%+ perishable crop loss in cassava, tomatoes, and plantains through decentralized micro-processing hubs and temperature-managed transport routes.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">groups_3</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface">Digital Outgrower Scheme Structuring</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Organizing thousands of smallholder farmers into monitored production clusters equipped with input tracking, mobile payment disbursals, and guaranteed pricing floors.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">verified_user</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface">Industrial Off-Take &amp; Export Compliance</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Structuring bankable multi-year contracts with multinational food manufacturers, pharmaceutical starch buyers, and international agro-commodity traders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
