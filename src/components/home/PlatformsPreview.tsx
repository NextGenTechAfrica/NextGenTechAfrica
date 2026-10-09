import React from 'react';
import { ArrowRight, PlusCircle } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { PlatformCard } from '../platforms/PlatformCard';
import { platforms } from '../../data/platformsData';
import { Button } from '../common/Button';
import { StaggerChildren } from '../common/ScrollReveal';

export const PlatformsPreview: React.FC = () => {
  return (
    <section className="py-24 relative bg-slate-100/60 dark:bg-dark-900/40 border-t border-slate-200 dark:border-white/5" id="platforms">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            badge="OUR PLATFORMS"
            title="Platforms taking shape."
            subtitle="Here is what is actively in the forge, what is slated next, and how our ecosystem unfolds. We only show what is genuine."
            center={false}
            className="max-w-2xl"
          />

          <Button
            href="/platforms"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View All Platforms
          </Button>
        </div>

        {/* Platforms Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.12}>
          {platforms.map((platform) => (
            <PlatformCard
              key={platform.id}
              platform={platform}
              featured={platform.status === 'LIVE'}
            />
          ))}

          {/* Tasteful 'More Coming Soon' Card */}
          <div className="p-8 rounded-2xl border border-dashed border-slate-300 dark:border-white/10 bg-white/70 dark:bg-dark-950/40 flex flex-col justify-between items-center text-center shadow-sm dark:shadow-none">
            <div className="my-auto py-8">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10 flex items-center justify-center mx-auto mb-4 text-slate-500 dark:text-silver-400">
                <PlusCircle className="w-6 h-6 text-cyan-deep dark:text-cyan-accent/70" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-silver-200">More In The Pipeline</h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-silver-400 max-w-xs mx-auto leading-relaxed">
                We take our time to validate genuine human problems before writing the first line of code. Additional platforms will appear here as they pass incubation.
              </p>
            </div>
            
            <div className="pt-4 border-t border-slate-200 dark:border-white/5 w-full">
              <span className="text-xs text-slate-500 dark:text-silver-500 font-mono">Continuous R&D</span>
            </div>
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
};
