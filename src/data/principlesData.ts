import { Principle } from '../types';

export const visionContent = {
  vision: {
    title: 'Our Vision',
    statement: 'To build a growing ecosystem of technology platforms that make the digital world more useful, accessible, and connected.',
    context: 'We envision a future where digital software is defined by clarity, quiet utility, and genuine human respect—built by a dedicated team that continually crafts meaningful technology.'
  },
  mission: {
    title: 'Our Mission',
    statement: 'To turn ambitious ideas into thoughtful, useful technology.',
    context: 'We take ideas from early conceptual curiosity to dependable, well-crafted products. Every line of code and interface decision is focused on solving real friction in everyday lives.'
  }
};

export const corePrinciples: Principle[] = [
  {
    id: 'purpose',
    title: 'BUILD WITH PURPOSE',
    headline: "We don't want to build technology simply because we can.",
    description: 'We resist the temptation to build bloated software or chase transient hype cycles. Every product in the NextGen ecosystem must earn its existence by solving a real problem and delivering tangible value to the people who trust it.',
    bulletPoints: [
      'Problem-led, never buzzword-driven',
      'No unnecessary complexity or features',
      'Respecting user attention and digital peace',
      'Designing tools that solve tangible frictions'
    ]
  },
  {
    id: 'learning',
    title: 'KEEP LEARNING',
    headline: 'Every product is an opportunity to learn, improve, and grow.',
    description: 'We treat building software as a continuous craft. We embrace early prototypes, welcome honest criticism, and iterate rapidly based on real user experience rather than our own assumptions.',
    bulletPoints: [
      'Humility in product development',
      'Relentless feedback loops with real users',
      'Treating missteps as valuable data',
      'Continuous evolution of engineering standards'
    ]
  },
  {
    id: 'long-term',
    title: 'THINK LONG TERM',
    headline: 'Some ideas take time. We want to build things that can evolve.',
    description: 'We are in this for the long haul. We architect our software, data structures, and company foundations so they can endure, adapt, and scale sustainably as the ecosystem expands over decades.',
    bulletPoints: [
      'Durable architecture over fragile quick fixes',
      'Sustainable product velocity and code health',
      'Patience to let ideas mature thoughtfully',
      'Building systems meant to last for years'
    ]
  },
  {
    id: 'people',
    title: 'PEOPLE FIRST',
    headline: 'Technology matters because of the people who use it.',
    description: 'Behind every screen, every metric, and every database record is a human being trying to learn, work, or create. Our work succeeds only when their lives are genuinely enriched, simplified, or empowered.',
    bulletPoints: [
      'Empathetic design and intuitive ergonomics',
      'Rigorous privacy and data transparency',
      'Universal accessibility as a default standard',
      'Human support and authentic communication'
    ]
  }
];
