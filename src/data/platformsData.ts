import { Platform } from '../types';

export const platforms: Platform[] = [
  {
    id: 'codebridge',
    name: 'CodeBridge',
    tagline: 'Ideas to Impact | Build Your Project. Bridge to the World.',
    category: 'Enterprise Software & Digital Products',
    status: 'LIVE',
    description: 'CodeBridge designs, develops, and deploys high-performance digital products and custom business software for companies globally — delivered on time and within budget.',
    problem: 'Companies and visionary founders often struggle to translate ambitious business concepts into reliable, production-ready software without endless delays, communication barriers, or ballooning budgets.',
    idea: 'An end-to-end engineering studio and digital venture engine that delivers dedicated software development, modern web and mobile applications, enterprise Business Management Systems (BMS), and milestone-based escrow tracking for businesses worldwide.',
    keyFeatures: [
      {
        title: 'Dedicated Full-Stack Engineering',
        description: 'Production-ready web and mobile applications engineered with modern TypeScript frameworks, robust cloud backends, and optimal UX.',
        iconName: 'Code'
      },
      {
        title: 'Business Management Systems (BMS)',
        description: 'Centralized enterprise portals, inventory workflows, and operations software tailored to specific industry requirements.',
        iconName: 'Layers'
      },
      {
        title: 'Milestone Escrow Delivery',
        description: 'Transparent sprint-based escrow structure where payments are released strictly upon verified milestone completion.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Client & Project Workspace',
        description: 'Dedicated client portal providing real-time sprint tracking, deliverable sign-offs, and transparent invoice management.',
        iconName: 'Briefcase'
      },
      {
        title: 'Partner & Representative Desk',
        description: 'Self-service workspace for authorized sales representatives with lead registration and commission transparency.',
        iconName: 'Target'
      },
      {
        title: 'Global Production Deployment',
        description: 'High-availability infrastructure, automated CI/CD pipelines, and secure cloud architectures serving global clients.',
        iconName: 'Globe'
      }
    ],
    developmentStatus: 'Live in production. Active client engagements, operational milestone portals, and global representative workspaces deployed at code-bridge-rosy.vercel.app.',
    currentMilestone: 'Production v1.2 — Global Client Expansion & Enterprise BMS Deployments',
    futureDirection: 'Automated client milestone verification, enterprise microservice templates, and expanded multi-currency escrow rails.',
    tags: ['Live Platform', 'Custom Software', 'Web Apps', 'Mobile Apps', 'BMS', 'Milestone Escrow'],
    externalUrl: 'https://code-bridge-rosy.vercel.app',
    githubUrl: 'https://github.com/NextGenTechAfrica/CodeBridge'
  },
  {
    id: 'marketbridge',
    name: 'MarketBridge',
    tagline: 'The Trustless Marketplace — Where Transparency Replaces Blind Trust.',
    category: 'Commerce & Trustless Marketplaces',
    status: 'LIVE',
    description: 'MarketBridge is a modern e-commerce platform and trustless marketplace engineered with automated escrow payments, rigorous vendor verification, and visual order transparency.',
    problem: 'Online commerce in emerging markets is severely impaired by rampant fraud, unverified counterfeit sellers, payment risk, and a lack of reliable buyer-seller dispute mechanisms.',
    idea: 'A trustless multi-vendor ecosystem where transparency replaces blind trust: vendors undergo strict document vetting (NIN, CAC, Govt ID), buyer payments are held in automated escrow via Flutterwave until physical delivery is confirmed, and disputes follow transparent audit logs.',
    keyFeatures: [
      {
        title: 'Strict Multi-Tier Vendor Verification',
        description: 'Rigorous vendor onboarding requiring business documentation (CAC, NIN, and government-issued identification) before listing.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Automated Escrow Payment Protection',
        description: 'Funds remain held securely in escrow via Flutterwave, releasing to dealers only when buyers confirm satisfactory delivery.',
        iconName: 'Lock'
      },
      {
        title: 'Visual Order Lifecycle Tracking',
        description: 'Real-time order progression timelines providing end-to-end transparency from merchant preparation to courier handover.',
        iconName: 'Calendar'
      },
      {
        title: 'Verified Dealer Geolocation Directory',
        description: 'Location-based dealer discovery allowing buyers to browse verified merchants with genuine ratings and transparent inventory.',
        iconName: 'ShoppingBag'
      },
      {
        title: 'Secure In-Platform Dealer Chat',
        description: 'Direct buyer-seller messaging with chat auditing and built-in dispute resolution triggers to prevent off-platform scams.',
        iconName: 'MessageSquare'
      },
      {
        title: 'MarketBridge Admin Operations Center',
        description: 'Dedicated administrative command platform with granular role-based access for dispute arbitration, operations, and audit controls.',
        iconName: 'Layers'
      }
    ],
    developmentStatus: 'Live in production. Multi-vendor marketplace, Flutterwave escrow rails, and administrative command center active at market-bridge-llc.vercel.app.',
    currentMilestone: 'Production v1.0 — Vendor Onboarding Wave & Verified Dealer Network Expansion',
    futureDirection: 'Cross-border logistics integrations, automated courier dispatch APIs, and AI-powered merchant reputation scoring.',
    tags: ['Live Platform', 'E-Commerce', 'Trustless Marketplace', 'Flutterwave Escrow', 'Dealer Verification', 'NextGen Venture'],
    externalUrl: 'https://market-bridge-llc.vercel.app',
    githubUrl: 'https://github.com/NextGenTechAfrica/MarketBridgeLLC'
  },
  {
    id: 'nextgen-core',
    name: 'NextGen Core',
    tagline: 'Foundational infrastructure, shared identity, and developer tooling powering the NextGen ecosystem.',
    category: 'Infrastructure & Ecosystem Tooling',
    status: 'IN DEVELOPMENT',
    description: 'The shared architectural layer underpinning CodeBridge, MarketBridge, and upcoming digital ventures—providing centralized authentication, telemetry, and reusable design components.',
    problem: 'Building multiple independent digital ventures from scratch leads to redundant engineering, fragmented user identities, and inconsistent security practices across platforms.',
    idea: 'A unified infrastructure substrate providing Single Sign-On (SSO), cross-platform telemetry, shared financial escrow connectors, and unified design tokens across every NextGen Technologies venture.',
    keyFeatures: [
      {
        title: 'Unified Identity & Cross-Platform SSO',
        description: 'Centralized authentication allowing users to navigate CodeBridge, MarketBridge, and future platforms with a single secure profile.',
        iconName: 'Lock'
      },
      {
        title: 'Shared Financial & Escrow Connectors',
        description: 'Standardized payment processing and automated escrow primitives shared across all commercial ventures.',
        iconName: 'Zap'
      },
      {
        title: 'Ecosystem Telemetry & Health Hub',
        description: 'Real-time monitoring, error tracking, and performance analytics across all active production deployments.',
        iconName: 'BarChart2'
      }
    ],
    developmentStatus: 'Active architecture and internal library standardization across NextGenTechAfrica repositories.',
    currentMilestone: 'Phase 1: Shared Design Token Engine & Unified Auth RFC',
    futureDirection: 'Public developer APIs, venture bootstrapping CLI, and shared cross-platform notifications.',
    tags: ['Core Infrastructure', 'SSO', 'APIs', 'In Development', 'Ecosystem Backbone'],
    githubUrl: 'https://github.com/NextGenTechAfrica'
  }
];

export function getPlatformById(id: string): Platform | undefined {
  return platforms.find((p) => p.id.toLowerCase() === id.toLowerCase());
}
