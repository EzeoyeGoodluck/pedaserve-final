import { Article, ServiceItem, TeamMember, FAQItem } from '../types';
import { IMAGES } from './images';

export const ARTICLES: Article[] = [
  {
    id: 'lead-report-algorithmic-enterprise',
    slug: 'algorithmic-enterprise-seo-dominance-2026',
    title: 'The Algorithmic Enterprise: Engineering Search Dominance and Content Velocity in 2026',
    subtitle: 'Why semantic knowledge architecture and programmatic topical authority have replaced traditional keyword stuffing across West African enterprise sectors.',
    category: 'seo',
    categoryLabel: 'SEO & Search Engineering',
    author: {
      name: 'Jide Adepoju',
      role: 'Chief Executive Officer, Pedaserve',
      avatarInitials: 'JA',
      avatarColor: 'bg-primary-container text-secondary-container'
    },
    date: 'Thursday, October 24, 2025',
    readTime: '7 min read',
    isLeadReport: true,
    editionBadge: 'Featured',
    coverImage: IMAGES.laptopNotebook,
    summary: 'Traditional publishing pipelines are collapsing under the weight of generative search engines and answer-based conversational LLMs. Nigerian and sub-Saharan enterprises must redesign their digital publishing posture around semantic authority grids, entity-based topical graphs, and programmatic syndication or risk complete digital invisibility.',
    tags: ['ProgrammaticSEO', 'SERPEngineering', 'TopicalAuthority', 'EnterpriseGovernance'],
    keyTakeaways: [
      'Topical Authority Grids supersede isolated keyword campaigns by mapping 100% of executive buyer intent journeys.',
      'Zero-click search experiences demand proprietary proprietary research models and structured entity schemas.',
      'Programmatic CMS infrastructure reduces marginal cost of high-yield publication to near zero.'
    ],
    content: [
      'The modern landscape of search engine discovery is experiencing its most seismic tectonic shift since the inception of the PageRank algorithm. For over two decades, enterprise organizations across Sub-Saharan Africa relied on reactive agency retainers, generic blog posts, and surface-level keyword optimization to maintain regional digital presence.',
      'In 2026, generative answer engines synthesize instant answers directly inside the search interface. If your corporate website merely repeats commodity definitions, search crawlers harvest the text, omit the attribution, and siphon your inbound client discovery pipeline.',
      'At Pedaserve, our Search Engineering practice approaches organic discovery not as an incidental marketing sub-discipline, but as core enterprise infrastructure. When we construct semantic topical silos for institutional clients in energy, maritime logistics, and financial technology, we establish deep relational entities that search engines recognize as the definitive regional ground truth.',
      'To build defensible search equity, enterprises must adopt three foundational pillars: first, rigorous entity graph structuring through custom JSON-LD schemas; second, daily strategic publishing frequency that signals uninterrupted institutional relevance; and third, proprietary data telemetry that no automated crawler can duplicate without citing your brand.'
    ]
  },
  {
    id: 'art-semantic-search-b2b',
    slug: 'semantic-search-architecture-b2b-revenue',
    title: 'How Enterprise Semantic Search Architecture Drives B2B Revenue in 2026',
    subtitle: 'Resolving crawl budget leaks and structuring indexation to outrank regional competitors in energy, agritech, and advisory sectors.',
    category: 'seo',
    categoryLabel: 'SEO Architecture',
    author: {
      name: 'Jide Adepoju',
      role: 'Chief Executive Officer, Pedaserve',
      avatarInitials: 'JA',
      avatarColor: 'bg-primary-container text-secondary-container'
    },
    date: 'October 24, 2025',
    readTime: '6 min read',
    editionBadge: 'Featured',
    coverImage: IMAGES.twoLaptops,
    summary: 'Traditional keyword matching is obsolete. Discover how modern Nigerian and multinational institutions are redesigning their digital knowledge silos to capture high-intent corporate discovery and accelerate client acquisition cycles.',
    tags: ['ProgrammaticSEO', 'SemanticSearch', 'B2BGrowth', 'DigitalStrategy'],
    keyTakeaways: [
      'Semantic search evaluates contextual entity relevance rather than keyword density.',
      'Multi-subsidiary corporate groups leak 40%+ of domain authority without inter-linked topical hubs.',
      'Accelerating B2B discovery cycle drives qualified requests for proposal without paid advertising.'
    ],
    content: [
      'When high-net-worth procurement officers and corporate boards evaluate advisory partners, their search behavior is distinct from consumer queries. They enter complex, multi-variable queries requiring authoritative verification.',
      'Semantic search indexes understand the conceptual relationships between "gas pipeline maintenance Niger Delta", "captive off-grid turbine procurement", and "regulatory NUPRC compliance". Pedaserve builds technical architecture that unifies these nodes, guaranteeing client visibility at the exact moment of commercial consideration.'
    ]
  },
  {
    id: 'art-thought-leadership-memoirs',
    slug: 'executive-biographies-corporate-thought-leadership',
    title: 'Crafting Executive Biographies & Corporate Thought Leadership That Converts',
    subtitle: 'Why astute literary prose and structured business memoirs have become the ultimate trust anchor for West African CEOs.',
    category: 'writing',
    categoryLabel: 'The Writing Hub',
    author: {
      name: 'Editorial Desk',
      role: 'Pedaserve Publishing Wing',
      avatarInitials: 'PA',
      avatarColor: 'bg-primary-container text-on-primary'
    },
    date: 'October 24, 2025',
    readTime: '4 min read',
    coverImage: IMAGES.manLaptop,
    summary: 'Why astute literary prose and structured business memoirs have become the ultimate trust anchor for West African CEOs seeking institutional legacy and global investor trust.',
    tags: ['ExecutivePublishing', 'TheWritingHub', 'CorporateLegacy', 'MemoirCraft'],
    keyTakeaways: [
      'An executive memoir immortalizes corporate strategy and cements generational institutional reputation.',
      'Ghostwritten whitepapers unlock board-level speaking opportunities and state bilateral partnerships.',
      'Meticulous editorial prose eliminates the sterile jargon that alienates global capital allocators.'
    ],
    content: [
      'In an era dominated by transient social feeds, physical literature and rigorous executive memoirs carry an irreplaceable weight of permanence. A published monograph by a corporate founder conveys decades of operational resilience, ethical stewardship, and industry mastery.',
      'The Writing Hub at Pedaserve brings together master prose stylists, investigative researchers, and commercial editors to craft executive narratives that endure across generations.'
    ]
  },
  {
    id: 'art-governance-resilience',
    slug: 'building-resilient-middle-tier-governance',
    title: 'Building Resilient Middle-Tier Governance in Turbulent Macro Markets',
    subtitle: 'How Nigerian mid-market enterprises are restructuring operational command to withstand foreign exchange shocks, talent attrition, and supply chain volatility.',
    category: 'leadership',
    categoryLabel: 'Leadership & Capability',
    author: {
      name: 'Dr. Osita Eze',
      role: 'Director of Leadership Discipleship',
      avatarInitials: 'OE',
      avatarColor: 'bg-surface-tint text-on-primary'
    },
    date: 'October 23, 2025',
    readTime: '5 min read',
    coverImage: IMAGES.kitchenOwner,
    summary: 'How blended online learning portals and simulation modules bridge executive capability deficits in rapidly moving markets, shielding enterprise balance sheets.',
    tags: ['LeadershipPedagogy', 'CorporateGovernance', 'TalentTransformation', 'Discipleship'],
    keyTakeaways: [
      'Middle managers represent the critical operational shock absorber in volatile economies.',
      'Decentralized authority frameworks prevent paralysis during supply chain disruptions.',
      'Discipleship in leadership fosters deep institutional loyalty that outlasts wage inflation.'
    ],
    content: [
      'When macroeconomic turbulence strikes, the gap between board-level strategic intent and floor-level execution is where profitability bleeds out. Without continuous discipleship in leadership, middle managers default to risk-averse inaction.',
      'Pedaserve’s corporate academies install practical decision matrices and situational leadership simulations, enabling mid-tier directors to make high-conviction decisions autonomously.'
    ]
  },
  {
    id: 'art-captive-power-procurement',
    slug: 'decentralized-captive-power-procurement-niger-delta',
    title: 'Decentralized Captive Power: Procurement Realities in the Niger Delta',
    subtitle: 'Auditing the true cost per kilowatt of off-grid solar-gas hybrids for industrial estates across Rivers, Delta, and Edo commercial zones.',
    category: 'energy',
    categoryLabel: 'Energy & Power',
    author: {
      name: 'Engr. T. Allison',
      role: 'Principal Energy Infrastructure Advisor',
      avatarInitials: 'TA',
      avatarColor: 'bg-primary text-secondary-container'
    },
    date: 'October 21, 2025',
    readTime: '6 min read',
    coverImage: IMAGES.storeInterior,
    summary: 'Auditing the true cost per kilowatt of off-grid solar-gas hybrids for industrial manufacturing estates and deep-water ports along the Port Harcourt corridor.',
    tags: ['CaptiveEnergy', 'PortHarcourtCommerce', 'Infrastructure', 'ProcurementAudits'],
    keyTakeaways: [
      'Industrial diesel reliance generates a 35% drag on operating gross margins.',
      'PPA models combined with off-grid natural gas generators deliver sub-18 month break-evens.',
      'Pedaserve conducts vendor-neutral procurement due diligence protecting institutional capital.'
    ],
    content: [
      'Unreliable utility power remains the premier impediment to manufacturing scalability across southern Nigeria. However, transitioning from emergency diesel generators to sustainable captive power requires rigorous technical engineering and vendor contract adjudication.',
      'Pedaserve assists industrial estates, agro-processing facilities, and commercial ports in drafting RFP specifications, inspecting gas-turbine equipment warranties, and structuring favorable Power Purchase Agreements.'
    ]
  },
  {
    id: 'art-cassava-value-chain',
    slug: 'commercial-cassava-value-chains-logistics',
    title: 'Commercial Cassava Value-Chains: Overcoming Logistics Margin Leaks',
    subtitle: 'A ground-level audit of post-harvest transport losses between South-South agrarian farms and secondary industrial starch processing facilities.',
    category: 'agribusiness',
    categoryLabel: 'Agribusiness Enterprise',
    author: {
      name: 'Folake Kolawole',
      role: 'Agribusiness Advisory Lead',
      avatarInitials: 'FK',
      avatarColor: 'bg-secondary text-on-secondary'
    },
    date: 'October 20, 2025',
    readTime: '10 min read',
    coverImage: IMAGES.plantShop,
    summary: 'A ground-level audit of post-harvest transport losses and aggregation infrastructure between South-South agrarian farms and secondary industrial starch processing plants.',
    tags: ['AgroValueChain', 'FoodSecurity', 'CommercialFarming', 'LogisticsResilience'],
    keyTakeaways: [
      'Fresh cassava root perishability requires rapid 48-hour farm-to-mill aggregation loops.',
      'Distributed micro-processing hubs capture 2.4x higher farmer retention margins.',
      'Modern cold aggregation preserves export quality for high-grade cassava flour.'
    ],
    content: [
      'With escalating global demand for industrial cassava derivatives including sorbitol, high-grade starch, and ethanol, West Africa holds a profound geographic advantage. Yet, 30% of harvested yield disintegrates before reaching refinery crushers.',
      'Pedaserve designs turn-key aggregation corridors, integrating smallholder outgrower clusters with computerized logistics hubs that guarantee supply certainty for commercial buyers.'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'the-writing-hub',
    slug: 'the-writing-hub',
    title: 'The Writing Hub',
    categoryTag: 'Executive Craft',
    shortDescription: 'We parade a prodigious collection of astute writers. We go beyond the traditional genre of writing, expressing your thoughts and ideas through the transformative power of words.',
    iconName: 'edit_note',
    deliverables: [
      'Executive Biographies, Memoirs & Corporate History Books',
      'Institutional Whitepapers, Policy Briefs & Annual Reports',
      'High-Yield C-Suite Thought Leadership Articles & Op-Eds',
      'Investor Pitch Memorandums & Strategic Corporate Proposals'
    ],
    fullOverview: 'The Writing Hub at Pedaserve is an elite literary and corporate documentation bureau. We collaborate directly with chairpersons, founders, institutional directors, and public leaders to articulate complex visions into captivating, authoritative prose. Every manuscript undergoes double-blind editorial custody to safeguard proprietary intellectual property.',
    targetClients: 'Corporations seeking published authority, Founders authoring legacy memoirs, and Multinationals preparing regulatory whitepapers.',
    capabilities: [
      {
        title: 'Executive Ghostwriting Bureau',
        description: 'Complete confidential authorship of published books, board papers, and executive memoirs with full copyright transfer.'
      },
      {
        title: 'Research Whitepapers & Industry Monographs',
        description: 'Empirical data collection, statistical modeling, and institutional framing designed to establish authoritative industry leadership.'
      },
      {
        title: 'High-Stakes M&A & Investor Documents',
        description: 'Persuasive confidential information memorandums (CIM) and corporate profiles that compel international capital allocators.'
      }
    ]
  },
  {
    id: 'website-design-branding',
    slug: 'website-design-and-branding',
    title: 'Website Design, Branding & Social Media',
    categoryTag: 'Digital Identity',
    shortDescription: 'We consult to Enterprises on strategic branding and multichannel social media optimization to accelerate qualified awareness, establish defensible reputation, and generate verified inbound dealflow.',
    iconName: 'devices',
    deliverables: [
      'High-Conversion Corporate Portals & Web Experiences',
      'Enterprise Identity & Comprehensive Visual Design Systems',
      'Social Media Authority Management & Executive Presence',
      'Continuous Brand Reputation & Media Monitoring'
    ],
    fullOverview: 'Your digital footprint is the front entrance to your corporate credibility. Pedaserve architects fast, accessible, mobile-responsive web portals combined with coherent visual identity systems that reflect stability, institutional pedigree, and modern design precision.',
    targetClients: 'Enterprises modernizing legacy websites, fast-scaling ventures establishing enterprise credibility, and corporate holdings consolidating multiple brands.',
    capabilities: [
      {
        title: 'Enterprise Web Engineering',
        description: 'Ultra-fast web platforms engineered with accessibility, responsive layout grids, and enterprise CMS architectures.'
      },
      {
        title: 'Visual Identity & Design Systems',
        description: 'Typography scales, cohesive palette tokens, custom iconographic libraries, and brand governance style guides.'
      },
      {
        title: 'Executive LinkedIn & Public Relations',
        description: 'Curating authoritative C-suite digital positioning that attracts strategic partners, talent, and high-value commercial inquiries.'
      }
    ]
  },
  {
    id: 'seo-and-digital-marketing',
    slug: 'seo-and-digital-marketing',
    title: 'Search Engine Optimization (SEO) Services',
    categoryTag: 'Organic Engine',
    shortDescription: 'We offer comprehensive Search Engine Optimization (SEO) engineering and data-driven digital marketing strategies, developing programmatic content frameworks that dominate organic search results.',
    iconName: 'manage_search',
    deliverables: [
      'Deep Architecture Technical SEO Audits & Crawl Optimization',
      'High-Intent Programmatic Keyword Silos & Knowledge Graphs',
      'Editorial SEO Daily Publishing Systems & Topical Authority Grids',
      'Local & Regional SERP Domination for West African Corridors'
    ],
    fullOverview: 'We treat search engine optimization as an engineering discipline rather than guesswork. Pedaserve maps buyer journey search topologies, rectifies indexing bottlenecks, builds semantic Schema.org metadata graphs, and deploys high-cadence programmatic editorial frameworks that outrank legacy competitors permanently.',
    targetClients: 'Industrial service firms, financial institutions, logistics conglomerates, and professional service groups seeking defensible organic client discovery.',
    capabilities: [
      {
        title: 'Technical Infrastructure Optimization',
        description: 'Rectifying crawl budget leaks, Core Web Vitals performance, multi-language internationalization, and dynamic rendering.'
      },
      {
        title: 'Entity & Knowledge Graph Structuring',
        description: 'Deep Schema.org JSON-LD integration that instructs Google, Bing, and AI conversational search engines on corporate entities.'
      },
      {
        title: 'Editorial Frequency & Programmatic Syndication',
        description: 'Daily editorial workflow deployment that builds topical velocity, capturing high-intent long-tail inquiries consistently.'
      }
    ]
  },
  {
    id: 'strategy-business-development',
    slug: 'strategy-business-development',
    title: 'Strategy, Dev & Marketing',
    categoryTag: 'Enterprise Blueprint',
    shortDescription: 'We are specialists with a proven track record in developing conscientious, accurate master plans to gain, maintain, and surpass competitive positions across complex African and global markets.',
    iconName: 'hub',
    deliverables: [
      'Strategic Market Entry & Regional Expansion Playbooks',
      'Corporate Value Realization Roadmaps & Unit Economics Optimization',
      'Commercial Pipeline Expansion & B2B Deal Structuring',
      'Organizational Transformation & M&A Post-Merger Integration'
    ],
    fullOverview: 'True strategy operates in tandem with people, employees, the environment, and shareholders. Pedaserve helps executive teams navigate shifting regulatory conditions, inflationary cycles, and technological disruptions by crafting clear operational blueprints backed by measurable revenue targets.',
    targetClients: 'Boards seeking strategic direction, conglomerates entering new regional markets, and enterprises undergoing structural operational reorganization.',
    capabilities: [
      {
        title: 'Competitive Market Landscape Mapping',
        description: 'Exhaustive regional competitive intelligence that pinpoints untapped market moats and pricing inefficiencies.'
      },
      {
        title: 'Commercial Business Development Pipelines',
        description: 'Direct institutional introductions, RFP bid management, and partner consortium structuring across public and private sectors.'
      },
      {
        title: 'Strategic Governance Frameworks',
        description: 'Translating executive board resolutions into balanced scorecard KPIs and accountable management reporting rhythms.'
      }
    ]
  },
  {
    id: 'training-and-leadership',
    slug: 'training-and-leadership',
    title: 'Training & Workforce Capability',
    categoryTag: 'Talent Upskilling',
    shortDescription: 'An institutional Online School and corporate academy open for both professional and non-traditional students, delivering practical tutoring via cutting-edge digital portals and simulations.',
    iconName: 'school',
    deliverables: [
      'Custom Corporate Digital LMS Portals & Learning Experiences',
      'Continuous Executive Capability Certifications & Micro-Credentials',
      'Hands-On Digital Transformation & Data Literacy Bootcamps',
      'Mid-Level Management Readiness & Decision-Making Clinics'
    ],
    fullOverview: 'Pedaserve’s training division bridges the gap between academic theory and high-stakes market execution. We construct proprietary internal learning management portals for corporations, equipping staff with verifiable modern skills in digital execution, corporate governance, and analytical problem-solving.',
    targetClients: 'Corporate human resources departments, banking and energy enterprises training thousands of personnel, and professional associations.',
    capabilities: [
      {
        title: 'Turnkey Enterprise LMS Infrastructure',
        description: 'Branded digital learning platforms featuring interactive progress tracking, assessments, and corporate compliance audit trails.'
      },
      {
        title: 'Cohort-Based Executive Masterclasses',
        description: 'Immersive weekend and modular executive intensives facilitated by experienced managing partners and industry directors.'
      },
      {
        title: 'Custom Curriculum Development',
        description: 'Bespoke training courseware mapped directly to your company’s unique operational manuals, ERP workflows, and culture.'
      }
    ]
  },
  {
    id: 'coaching-mentoring-leadership',
    slug: 'coaching-mentoring-leadership',
    title: 'Coaching, Mentoring & Leadership',
    categoryTag: 'Executive Council',
    shortDescription: 'Transformation is an innate constituent of the DNA of an exceptional leader. We parade a pool of transformative mentors, intentional about the high-caliber spiritual and operational energy we bring to the marketplace.',
    iconName: 'supervisor_account',
    deliverables: [
      'Executive 1-on-1 Confidential Mentorship Circles',
      'Marketplace Discipleship Hub & Ethical Governance Labs',
      'C-Suite Succession Planning & High-Potential Leader Sponsorship',
      'Conflict Resolution & Boardroom Decision Alignment'
    ],
    fullOverview: 'Leadership is fundamentally spiritual and philosophical before it becomes operational. We disciple leaders to carry integrity, strategic fortitude, and regenerative servant leadership into the marketplace, equipping them to withstand the intense psychological pressures of enterprise stewardship.',
    targetClients: 'Founders, managing directors, newly appointed C-suite executives, and family business successors facing high-stress governance transitions.',
    capabilities: [
      {
        title: 'Executive Mentorship Retainers',
        description: 'Bi-weekly private counsel with seasoned boardroom veterans addressing strategic dilemmas and emotional equilibrium.'
      },
      {
        title: 'Marketplace Discipleship Mandate',
        description: 'Inculcating deep ethical values, spiritual resilience, and principled stewardship into high-impact corporate decision-making.'
      },
      {
        title: 'Crisis Governance & Stakeholder Mediation',
        description: 'Objective, discreet third-party mediation for shareholder disputes, board realignments, and leadership transitions.'
      }
    ]
  },
  {
    id: 'blog-management',
    slug: 'blog-management',
    title: 'Blog Management & Content Operations',
    categoryTag: 'Editorial Engine',
    shortDescription: 'Turn-key daily enterprise blogging, editorial calendar governance, ghostwritten research articles, and multi-channel publication management that turns corporate websites into definitive industry media hubs.',
    iconName: 'post_add',
    deliverables: [
      'Daily & Weekly Editorial Calendar Execution & Curation',
      'High-Intent SEO Blog Posts with Verified Subject Citations',
      'CMS Upload, Typography Styling & Multi-Platform Syndication',
      'Reader Analytics, Engagement Loops & Newsletter Ingestion'
    ],
    fullOverview: 'Maintaining a daily corporate publication requires disciplined journalistic operations. Pedaserve takes over your corporate blog from ideation to distribution, assigning veteran industry researchers, copywriters, and SEO editors to publish timely, authoritative analyses every morning.',
    targetClients: 'Corporations desiring an active industry publication without hiring a full in-house newsroom, B2B enterprises seeking inbound search discovery.',
    capabilities: [
      {
        title: 'Daily Publishing Cadence',
        description: 'Consistent, uninterrupted morning dispatches that signal institutional vitality to clients, investors, and search algorithms.'
      },
      {
        title: 'Rigorous Technical Fact-Checking',
        description: 'Empirical verification and compliance screening preventing reputational leaks or misleading claims.'
      },
      {
        title: 'Syndicated Multi-Channel Reach',
        description: 'Repurposing blog monographs into executive LinkedIn carousels, newsletter blasts, and press syndicates.'
      }
    ]
  },
  {
    id: 'charity-and-foundation',
    slug: 'charity-and-foundation',
    title: 'Charity Advisory',
    categoryTag: 'Philanthropic Impact',
    shortDescription: 'Strategic advisory for philanthropic foundations, corporate CSR directorates, and international NGOs on grant governance, donor accountability, audited impact reporting, and sustainable community development.',
    iconName: 'volunteer_activism',
    deliverables: [
      'Foundation Charter Design, Trusteeship & Governance Frameworks',
      'Grant Proposal Engineering & International Donor Matching',
      'CSR Community Impact Audits & Social Return on Investment (SROI)',
      'Annual Philanthropic Transparency & Stewardship Reports'
    ],
    fullOverview: 'Philanthropy without rigorous operational architecture often suffers from grant leakage and unmeasured outcomes. Pedaserve advises family foundations, multinational CSR units, and faith-based charitable initiatives in the Niger Delta and West Africa to ensure every naira or dollar delivers verifiable, regenerative social impact.',
    targetClients: 'High-net-worth family foundations, corporate social responsibility (CSR) departments, non-governmental organizations (NGOs), and community trusts.',
    capabilities: [
      {
        title: 'Institutional Grant Due Diligence',
        description: 'Auditing prospective beneficiary entities, tracking disbursements, and installing milestone-contingent funding gates.'
      },
      {
        title: 'Community Stakeholder Mediation',
        description: 'Grassroots alignment with host communities ensuring community-led project permanence and peaceful operations.'
      },
      {
        title: 'Verified SROI Telemetry',
        description: 'Quantitative metric frameworks that demonstrate tangible socio-economic dividends to boards and international grantmakers.'
      }
    ]
  },
  {
    id: 'scientific-documentation',
    slug: 'scientific-documentation',
    title: 'Scientific & Research Documentation',
    categoryTag: 'Technical Monograph',
    shortDescription: 'Rigorous technical documentation for scientific institutes, environmental laboratories, patent applicants, and agro-chemical ventures translating complex empirical research into peer-reviewed publications.',
    iconName: 'biotech',
    deliverables: [
      'Peer-Reviewed Scientific Manuscript Drafting & Journal Submissions',
      'Environmental Impact Assessment (EIA) Technical Reports',
      'Laboratory Protocol Documentation & Regulatory Clinical Briefs',
      'Patent Application Claims & Empirical Invention Specifications'
    ],
    fullOverview: 'Scientific innovation requires precise, unassailable written articulation to pass institutional peer reviews, patent examiners, and regulatory boards. Pedaserve’s scientific documentation group pairs technical subject-matter specialists with master technical writers to produce publication-grade manuscripts.',
    targetClients: 'Research universities, environmental testing laboratories, pharmaceutical and agrochemical developers, and industrial patent holders.',
    capabilities: [
      {
        title: 'Empirical Data Visualization & Modeling',
        description: 'Translating raw spectrometer, soil chemistry, and trial datasets into high-fidelity statistical figures and tables.'
      },
      {
        title: 'Regulatory Scientific Submissions',
        description: 'Drafting dossiers compliant with NAFDAC, Federal Ministry of Environment, and international ISO quality standards.'
      },
      {
        title: 'Academic Peer-Review Editorial Support',
        description: 'Guiding faculty and corporate researchers through revisions, response-to-referees, and indexing in PubMed and Scopus.'
      }
    ]
  },
  {
    id: 'creative-direction',
    slug: 'creative-direction',
    title: 'Creative Direction & Brand Storytelling',
    categoryTag: 'Brand Narrative',
    shortDescription: 'High-concept creative strategy, documentary brand storytelling, executive keynote visual narratives, and multi-platform media productions that elevate institutional prestige.',
    iconName: 'palette',
    deliverables: [
      'Corporate Documentary Films & Heritage Video Productions',
      'Executive Keynote & Boardroom Visual Presentation Design',
      'Multi-Sensory Brand Guidelines & Photographic Architecture',
      'Commemorative Corporate Milestone Books & Art Direction'
    ],
    fullOverview: 'Modern institutions must communicate through arresting, cinematic visual storytelling that captures emotional resonance without diluting corporate gravitas. Pedaserve provides end-to-end creative direction, orchestrating documentary photography, bespoke typography, and high-production brand anthologies.',
    targetClients: 'Enterprise conglomerates marking milestone anniversaries, luxury commercial developments, and visionary founders building enduring cultural prestige.',
    capabilities: [
      {
        title: 'Documentary Visual Storytelling',
        description: 'Field production and long-form video narratives documenting corporate operations, community transformation, and founder heritage.'
      },
      {
        title: 'Boardroom Presentation Art Direction',
        description: 'Crafting visually arresting, data-dense slide architecture that commands attention at AGM shareholder meetings.'
      },
      {
        title: 'Curated Heritage Publishing',
        description: 'Limited-edition hardbound institutional books featuring museum-grade paper, foil stamping, and archival photography.'
      }
    ]
  },
  {
    id: 'economics-and-policy',
    slug: 'economics-and-policy',
    title: 'Economics & Policy Advisory',
    categoryTag: 'Macro Intelligence',
    shortDescription: 'Actionable macroeconomic intelligence, regional trade forecasting, policy advocacy memos, and fiscal impact modeling guiding boardrooms through West African market shifts.',
    iconName: 'analytics',
    deliverables: [
      'Quarterly Regional Macroeconomic Intelligence Bulletins',
      'Fiscal Policy Impact Assessments & Customs Tariff Modeling',
      'AfCFTA Cross-Border Trade Corridor Econometric Forecasts',
      'Sovereign & State Legislative Policy Advocacy Memoranda'
    ],
    fullOverview: 'Uncertain exchange rate volatility, subsidy adjustments, and evolving fiscal legislation demand rigorous econometric foresight. Pedaserve’s Economics and Policy Advisory desk provides boards with quantitative predictive modeling, scenario stress-testing, and direct policy advocacy framing.',
    targetClients: 'Banking institutions, industrial conglomerates, regional trade associations, and multinational entities managing sovereign risk in Africa.',
    capabilities: [
      {
        title: 'Econometric Scenario Stress-Testing',
        description: 'Simulating currency devaluation, interest rate shifts, and import tariff changes against enterprise balance sheets.'
      },
      {
        title: 'AfCFTA Trade Corridor Optimization',
        description: 'Pinpointing regulatory moats, rules-of-origin tariffs, and clearing efficiencies across the West African economic corridor.'
      },
      {
        title: 'Bilateral State Engagement Memos',
        description: 'Articulating private-sector policy briefs for legislative hearings, ministry consultations, and tax reform committees.'
      }
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Jide Adepoju',
    role: 'Chief Executive Officer & Managing Partner',
    division: 'Executive Directorate',
    bio: 'Visionary enterprise strategist with over two decades of experience consulting for multinational institutions, public agencies, and industrial conglomerates across West Africa and Europe. Passionate about empowering enterprises to evolve their heritage.',
    initials: 'JA'
  },
  {
    name: 'Dr. Osita Eze',
    role: 'Director of Leadership & Governance',
    division: 'Training & Capability Division',
    bio: 'Former senior corporate dean and executive coach. Specializes in designing resilient middle-tier command structures, corporate board governance, and marketplace discipleship frameworks.',
    initials: 'OE'
  },
  {
    name: 'Boma Mac-Pepple',
    role: 'Managing Editor & Head of The Writing Hub',
    division: 'Publishing & Editorial Wing',
    bio: 'Award-winning editor and biographer who has authored and curated memoirs, corporate whitepapers, and annual reports for notable African business icons and sovereign agencies.',
    initials: 'BM'
  },
  {
    name: 'Engr. T. Allison',
    role: 'Principal Energy & Infrastructure Advisor',
    division: 'Energy Procurement Unit',
    bio: 'Chartered power engineer with extensive track record in captive gas-solar hybrid deployment, industrial micro-grids, and regulatory advisory across the Niger Delta commercial corridor.',
    initials: 'TA'
  },
  {
    name: 'Folake Kolawole',
    role: 'Agribusiness Advisory Lead',
    division: 'Agro-Value Chain Practice',
    bio: 'Agricultural economist specializing in commercial cassava and grain supply chain optimization, cold-chain aggregation logistics, and smallholder outgrower financing.',
    initials: 'FK'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How rapidly can Pedaserve mobilize a specialist team after initial contact?',
    answer: 'Following your initial brief and the completion of the discovery alignment call, we deliver a comprehensive Scope of Mandate (SoM) within 48 to 72 business hours. Upon institutional sign-off, our operational units begin engagement kick-off within 5 business days.'
  },
  {
    id: 'faq-2',
    question: 'What confidentiality and Non-Disclosure Agreements (NDA) are standard?',
    answer: "Pedaserve enforces institutional-grade bilateral NDAs compliant with Nigerian and international jurisdiction before confidential materials or data assets are transferred. For high-profile memoir ghostwriting and sensitive commercial reorganizations, dedicated anonymous protocols ensure complete identity isolation."
  },
  {
    id: 'faq-3',
    question: 'Can services across writing, digital growth, and leadership training be bundled?',
    answer: 'Yes. The majority of our mid-to-large corporate partners engage us under unified enterprise retainers. A typical transformation engagement might involve an overhaul of corporate publications (The Writing Hub), paired with technical SEO and an executive training curriculum for in-house communications departments.'
  },
  {
    id: 'faq-4',
    question: 'Do your managing consultants conduct in-person consultations outside Rivers State?',
    answer: 'Our directors routinely convene board-level workshops and executive consultations across Abuja, Lagos, and the Niger Delta corridor. International mandates in the UK, GCC, and North America are coordinated through scheduled hybrid missions or intensive executive sessions.'
  },
  {
    id: 'faq-5',
    question: 'How does Pedaserve measure the return on investment (ROI) for enterprise clients?',
    answer: 'Every engagement begins with baseline telemetry: organic search acquisition volume, content conversion velocity, executive brand sentiment, employee capability benchmark ratings, or kilowatt-hour cost reductions. We structure transparent milestone gates with verifiable quantitative deliverables.'
  }
];

// Fill these with real, verifiable numbers before launch (years trading,
// clients served, articles published). Fabricated figures were removed.
export const STATS = [
  { value: '2', label: 'Countries we work in' },
  { value: '6', label: 'Core service areas' },
  { value: '1', label: 'Point of contact per client' },
  { value: '48h', label: 'Reply to every enquiry' }
];

export const SECTOR_TICKER = [
  { icon: 'account_balance', label: 'Financial Services' },
  { icon: 'corporate_fare', label: 'Public Sector' },
  { icon: 'dns', label: 'Enterprise Technology' }
];
