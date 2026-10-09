export type PlatformStatus = 'LIVE' | 'IN DEVELOPMENT' | 'COMING SOON' | 'CONCEPT';

export interface PlatformFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface Platform {
  id: string;
  name: string;
  tagline: string;
  category: string;
  status: PlatformStatus;
  description: string;
  problem: string;
  idea: string;
  keyFeatures: PlatformFeature[];
  developmentStatus: string;
  currentMilestone: string;
  futureDirection: string;
  tags: string[];
  externalUrl?: string;
  githubUrl?: string;
}

export interface EcosystemPillar {
  id: string;
  title: string;
  category: string;
  description: string;
  focusAreas: string[];
  statusLabel: string;
  activeProject?: string;
  activeProjectId?: string;
  iconName: string;
}

export interface RoadmapPhase {
  tag: 'NOW' | 'NEXT' | 'LATER' | 'BEYOND';
  title: string;
  subheading: string;
  items: string[];
  statusLabel: string;
  badgeColor?: string;
}

export interface Principle {
  id: string;
  title: string;
  headline: string;
  description: string;
  bulletPoints: string[];
}

export interface ContactConfig {
  email: string;
  supportEmail: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  linkedinUrl: string;
  instagramUrl: string;
  githubUrl: string;
  twitterUrl?: string;
  address: string;
}
