import { RoadmapPhase } from '../types';

export const roadmapPhases: RoadmapPhase[] = [
  {
    tag: 'NOW',
    title: 'Deploying Production Flagships',
    subheading: 'Operating and scaling our initial production platforms: CodeBridge and MarketBridge.',
    statusLabel: 'Active Workstream',
    badgeColor: 'cyan',
    items: [
      'Operating CodeBridge — enterprise digital engineering, custom software, and milestone escrow portal',
      'Scaling MarketBridge — trustless commerce marketplace with Flutterwave escrow & vendor vetting',
      'Deploying MarketBridge Admin portal for real-time order tracking, dispute arbitration, and dealer controls',
      'Standardizing shared design system, responsive UI components, and NextGen brand assets',
      'Continuous deployment of client deliverables and vendor verification pipelines'
    ]
  },
  {
    tag: 'NEXT',
    title: 'NextGen Core & Ecosystem Infrastructure',
    subheading: 'Unifying authentication, telemetry, and developer infrastructure across all platforms.',
    statusLabel: 'Upcoming Phase',
    badgeColor: 'silver',
    items: [
      'Architecting NextGen Core unified identity and Single Sign-On (SSO) across CodeBridge & MarketBridge',
      'Expanding MarketBridge dealer geolocation network and multi-category vendor onboarding',
      'Deploying CodeBridge client project workspace enhancements and automated milestone tracking',
      'Centralized telemetry, error logging, and performance monitoring dashboard',
      'Establishing developer SDKs for accelerated venture creation'
    ]
  },
  {
    tag: 'LATER',
    title: 'Cross-Border Rails & Ecosystem Synergies',
    subheading: 'Connecting platforms through shared financial escrow, logistics APIs, and regional hubs.',
    statusLabel: 'Strategic Planning',
    badgeColor: 'slate',
    items: [
      'Multi-currency payment integration and pan-African cross-border escrow rails',
      'Automated courier logistics dispatch and delivery confirmation APIs for MarketBridge',
      'CodeBridge enterprise BMS microservice templates and partner engineering networks',
      'Exploratory R&D on next-generation venture concepts and automated dispute risk engines',
      'Cross-platform loyalty, verified merchant badges, and shared client reputation graphs'
    ]
  },
  {
    tag: 'BEYOND',
    title: 'Autonomous Ventures & Global Expansion',
    subheading: 'Nurturing independent, scalable digital ventures under the NextGen parent umbrella.',
    statusLabel: 'Long-term Horizon',
    badgeColor: 'charcoal',
    items: [
      'Spinning out mature platforms into autonomous, self-sustaining operating companies',
      'Establishing NextGen Labs for community-driven technological challenges and incubations',
      'Expanding into specialized vertical SaaS, decentralized commerce protocols, and enterprise infrastructure',
      'Building an enduring, multi-venture technology conglomerate originating from Africa for the world'
    ]
  }
];
