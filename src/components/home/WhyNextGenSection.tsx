import React from 'react';
import {
  Wrench,
  HelpCircle,
  TrendingUp,
  Clock,
  Compass,
  HeartHandshake,
  CheckCircle,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { StaggerChildren } from '../common/ScrollReveal';

const philosophyItems = [
  {
    title: 'Useful Technology',
    description: 'We prioritize tangible utility over vanity metrics or momentary hype. If a tool doesn’t make someone’s day simpler or their learning deeper, we don’t build it.',
    icon: Wrench,
  },
  {
    title: 'Solving Real Problems',
    description: 'Every initiative originates from a friction point we or our community experience firsthand—from chaotic study schedules to cluttered digital noise.',
    icon: HelpCircle,
  },
  {
    title: 'Learning Through Building',
    description: 'We don’t pretend to have every answer on day one. We ship honest early iterations, listen to real feedback, and let products mature through deliberate practice.',
    icon: TrendingUp,
  },
  {
    title: 'Thinking Long-Term',
    description: 'Some ideas take years to truly come together. We architect our shared systems with patience and resilience, intending to support platforms that last for decades.',
    icon: Clock,
  },
  {
    title: 'Creating Opportunities',
    description: 'Technology is an engine for human upward mobility. We build tools that help learners gain skills, builders create value, and communities thrive.',
    icon: Compass,
  },
  {
    title: 'Products People Actually Want',
    description: 'No dark patterns, no algorithmic traps, and no bloated feature sets. Just dignified, high-clarity software that respects user attention and dignity.',
    icon: HeartHandshake,
  },
];

export const WhyNextGenSection: React.FC = () => {
  return (
    <section className="py-24 relative bg-white dark:bg-dark-950 overflow-hidden transition-colors duration-250">
      {/* Subtle backdrop mesh */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-accent/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="WHY NEXTGEN EXISTS"
          title="Technology should move people forward."
          subtitle="We are building NextGen Technologies on a few clear, grounded principles. No inflated rhetoric—just a commitment to craft, honesty, and real human utility."
          center={true}
          className="mb-16"
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {philosophyItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="group p-8 rounded-2xl bg-white dark:bg-dark-900/60 border border-slate-200/90 dark:border-white/8 hover:border-cyan-500/40 hover:bg-slate-50/90 dark:hover:bg-dark-850/80 shadow-sm dark:shadow-none transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/20 text-cyan-deep dark:text-cyan-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-accent/40 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-silver-100 group-hover:text-cyan-deep dark:group-hover:text-cyan-bright transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 dark:text-silver-400 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-xs text-slate-500 dark:text-silver-500">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-deep dark:text-cyan-accent/70" />
                  <span>Foundational Principle</span>
                </div>
              </div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
};
