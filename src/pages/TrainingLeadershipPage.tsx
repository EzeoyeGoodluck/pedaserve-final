import React from 'react';
import SEOHead from '../components/SEOHead';

interface TrainingLeadershipPageProps {
  onNavigate: (path: string) => void;
}

export default function TrainingLeadershipPage({ onNavigate }: TrainingLeadershipPageProps) {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <SEOHead
        title="Training, Workforce Capability & Leadership | Pedaserve"
        description="Institutional corporate academy, executive mentorship, custom LMS portals, and marketplace discipleship in leadership."
        canonicalUrl="https://pedaserve.com/training-and-leadership"
        keywords={['Corporate Training Nigeria', 'Pedaserve LMS Portals', 'Leadership Discipleship West Africa', 'Executive Mentoring Port Harcourt']}
      />

      {/* Hero */}
      <section className="relative w-full bg-primary-container text-on-primary py-space-2xl px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-lowest/10 backdrop-blur-md text-secondary-fixed-dim w-fit">
            <span className="material-symbols-outlined text-[16px]">school</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider font-semibold">
              Workforce Capability &amp; Executive Council
            </span>
          </div>

          <h1 className="font-display-hero text-headline-xl sm:text-4xl lg:text-display-hero font-bold text-on-primary tracking-tight">
            Cultivating Exceptional Leadership DNA.
          </h1>

          <p className="font-body-lead text-body-lead text-on-primary-container max-w-3xl leading-relaxed">
            Transformation is an innate constituent of the DNA of an exceptional leader. We parade a pool of transformative mentors, intentional about the high-caliber spiritual and operational energy we bring to the marketplace.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact-us')}
              className="h-12 px-8 rounded-lg bg-secondary-container hover:bg-secondary text-primary font-label-button font-bold transition-all shadow-sm cursor-pointer"
            >
              Enroll Corporate Cohort
            </button>
            <a
              href="#curriculum"
              className="h-12 px-6 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-button flex items-center gap-2 transition-all"
            >
              <span>Explore Curriculum Modules</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2 Core Practice Arms */}
      <section className="w-full py-space-2xl px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Arm 1: Corporate Academy */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">local_library</span>
                </div>
                <h3 className="font-headline-sm text-2xl font-bold text-on-surface">
                  The Corporate Online School &amp; Custom LMS
                </h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  An institutional learning engine open for both professional and non-traditional students. We architect branded enterprise digital portals that deliver simulation-based training, tracked assessments, and verifiable credentialing.
                </p>
                <ul className="flex flex-col gap-2 font-body-sm text-[13px] text-on-surface-variant pt-2">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                    Interactive SCORM-compliant enterprise portal deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                    Situational decision-making simulations for mid-tier managers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                    Automated corporate compliance &amp; governance reporting
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-surface-container-high">
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="font-label-button text-primary font-bold hover:text-secondary flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Request LMS Portal Demonstration</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Arm 2: Coaching & Marketplace Discipleship */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">supervisor_account</span>
                </div>
                <h3 className="font-headline-sm text-2xl font-bold text-on-surface">
                  Coaching, Mentoring &amp; Discipleship in Leadership
                </h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  We believe commercial acumen without moral and spiritual fortitude produces brittle institutions. We disciple executives to lead with conviction, intentionality, and generational stewardship.
                </p>
                <ul className="flex flex-col gap-2 font-body-sm text-[13px] text-on-surface-variant pt-2">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                    Private confidential 1-on-1 counsel with veteran managing directors
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                    Marketplace Discipleship Hub exploring principled commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                    Succession architecture and high-potential leader sponsorship
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-surface-container-high">
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="font-label-button text-primary font-bold hover:text-secondary flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Join Executive Mentorship Circle</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Curriculum Overview */}
          <div id="curriculum" className="flex flex-col gap-6 pt-6">
            <h3 className="font-headline-lg text-2xl font-bold text-on-surface">Core Curriculum Modules</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-2">
                <span className="font-label-caps text-[11px] text-secondary font-bold uppercase">Module 1</span>
                <h4 className="font-headline-sm text-[17px] font-bold text-on-surface">Strategic Command in Volatile Economies</h4>
                <p className="font-body-sm text-on-surface-variant">
                  Navigating currency swings, supply chain fracture, and inflation through agile capital redeployment and scenario mapping.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-2">
                <span className="font-label-caps text-[11px] text-secondary font-bold uppercase">Module 2</span>
                <h4 className="font-headline-sm text-[17px] font-bold text-on-surface">Digital Maturity &amp; Automation</h4>
                <p className="font-body-sm text-on-surface-variant">
                  Transitioning internal operational procedures from manual paper approval chains to encrypted cloud data pipelines.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-2">
                <span className="font-label-caps text-[11px] text-secondary font-bold uppercase">Module 3</span>
                <h4 className="font-headline-sm text-[17px] font-bold text-on-surface">Ethical Governance &amp; Board Diplomacy</h4>
                <p className="font-body-sm text-on-surface-variant">
                  Mastering shareholder communication, conflict resolution, double-blind audit protocols, and executive accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
