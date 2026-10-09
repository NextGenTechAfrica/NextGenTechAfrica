import { EcosystemPillar } from '../types';

export const ecosystemPillars: EcosystemPillar[] = [
  {
    id: 'digital-engineering',
    title: 'Enterprise Engineering',
    category: 'Digital Products & Systems',
    description: 'Dedicated software engineering, custom digital products, modern web and mobile applications, and enterprise Business Management Systems (BMS).',
    focusAreas: [
      'Custom web & mobile application engineering',
      'Enterprise Business Management Systems (BMS)',
      'Sprint milestone & escrow delivery frameworks',
      'Client portals and representative workspaces'
    ],
    statusLabel: 'Active Production Platform',
    activeProject: 'CodeBridge',
    activeProjectId: 'codebridge',
    iconName: 'Code'
  },
  {
    id: 'commerce',
    title: 'Trustless Commerce',
    category: 'Marketplaces & Fintech',
    description: 'Modern digital commerce and verified dealer ecosystems built on trustless architecture where transparency replaces blind trust.',
    focusAreas: [
      'Automated Flutterwave escrow payments',
      'Multi-tier vendor & CAC document verification',
      'Visual order lifecycle timelines',
      'Audited dealer chat & dispute arbitration'
    ],
    statusLabel: 'Active Production Platform',
    activeProject: 'MarketBridge',
    activeProjectId: 'marketbridge',
    iconName: 'ShoppingBag'
  },
  {
    id: 'technology',
    title: 'Technology Core',
    category: 'Foundational Infrastructure',
    description: 'The shared technological substrate, secure design systems, authentication infrastructure, and reusable APIs that power every platform in our ecosystem.',
    focusAreas: [
      'Unified identity & cross-platform SSO',
      'Shared design system & UI tokens',
      'Resilient backend services & telemetry',
      'Standardized payment & escrow connectors'
    ],
    statusLabel: 'Foundational Layer',
    activeProject: 'NextGen Core',
    activeProjectId: 'nextgen-core',
    iconName: 'Cpu'
  },
  {
    id: 'ai',
    title: 'Applied AI',
    category: 'Intelligent Augmentation',
    description: 'Purpose-built machine intelligence applied to practical human needs—not novelty buzzwords, but quiet assistance that automates operations and empowers users.',
    focusAreas: [
      'Algorithmic vendor risk evaluation',
      'Automated code scoping and sprint planning',
      'Intelligent commerce fraud detection',
      'Automated customer support routing'
    ],
    statusLabel: 'Research & Feasibility',
    iconName: 'Sparkles'
  },
  {
    id: 'productivity',
    title: 'Workflow & Developer Tooling',
    category: 'Productivity & Tooling',
    description: 'Minimalist, high-leverage software designed to accelerate digital venture creation, automate repetitive tasks, and empower engineers.',
    focusAreas: [
      'Venture bootstrapping CLI & scaffolds',
      'Rapid API prototyping tools',
      'Microservice deployment templates',
      'Telemetry and operational monitoring'
    ],
    statusLabel: 'In Design & Prototyping',
    iconName: 'Zap'
  },
  {
    id: 'future-projects',
    title: 'Future Ventures',
    category: 'Ventures & Labs',
    description: 'An incubator pipeline for emergent ideas. As NextGen matures, this branch investigates unmet technological challenges and potential spin-out initiatives across Africa and the global market.',
    focusAreas: [
      'Emerging tech incubations',
      'Cross-border trade infrastructure',
      'Independent venture spinning',
      'Decentralized data protocols'
    ],
    statusLabel: 'Long-term Pipeline',
    iconName: 'Compass'
  }
];

export const whatWeBuildArchetypes = [
  {
    title: 'Digital Platforms',
    tagline: 'End-to-End Solutions',
    description: 'Comprehensive digital environments addressing complex, multi-sided domains such as digital commerce, verified marketplaces, and enterprise engineering.',
    icon: 'Layers',
    examples: 'e.g., MarketBridge, CodeBridge'
  },
  {
    title: 'Technology Products',
    tagline: 'Focused Tools',
    description: 'Sharply focused applications and utilities engineered to do one specific task with speed, precision, and elegance.',
    icon: 'Box',
    examples: 'e.g., Milestone Escrow Rails, Vendor Verification'
  },
  {
    title: 'Experimental Projects',
    tagline: 'Labs & Prototypes',
    description: 'Safe sandboxes where we explore new software ideas, emerging interaction paradigms, and prototypes before committing to production.',
    icon: 'FlaskConical',
    examples: 'e.g., NextGen Core, R&D prototypes'
  },
  {
    title: 'Future Ventures',
    tagline: 'Independent Spin-Outs',
    description: 'Platforms that grow large enough and gain enough traction to stand independently as dedicated technology entities under NextGen.',
    icon: 'TrendingUp',
    examples: 'e.g., Independent ecosystem companies'
  }
];
