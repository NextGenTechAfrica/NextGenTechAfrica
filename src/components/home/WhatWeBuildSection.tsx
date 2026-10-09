import React from 'react';
import { Layers, Box, FlaskConical, TrendingUp } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { whatWeBuildArchetypes } from '../../data/ecosystemData';
import { StaggerChildren } from '../common/ScrollReveal';

export const WhatWeBuildSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-cyan-deep dark:text-cyan-accent" />;
      case 'Box':
        return <Box className="w-6 h-6 text-cyan-deep dark:text-cyan-bright" />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6 text-slate-600 dark:text-silver-300" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-cyan-deep dark:text-cyan-accent" />;
      default:
        return <Layers className="w-6 h-6 text-cyan-deep dark:text-cyan-accent" />;
    }
  };

  return (
    <section className="py-24 relative bg-slate-100/60 dark:bg-dark-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="WHAT WE BUILD"
          title="Designed for purpose. Built to endure."
          subtitle="We don't believe in generic one-size-fits-all software. We organize our engineering efforts into four clear archetypes, each tailored for specific human needs."
          center={true}
          className="mb-16"
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
          {whatWeBuildArchetypes.map((item, index) => (
            <div
              key={item.title}
              className="group p-7 rounded-2xl bg-white dark:bg-dark-900/60 border border-slate-200 dark:border-white/8 hover:border-cyan-deep dark:hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-dark-850/80 transition-all duration-300 flex flex-col justify-between shadow-sm dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-cyan-50 dark:bg-dark-800 border border-cyan-200 dark:border-white/10 group-hover:border-cyan-400 dark:group-hover:border-cyan-500/30 group-hover:scale-105 transition-all">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-silver-600">0{index + 1}</span>
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-deep dark:text-cyan-accent mb-1">
                  {item.tagline}
                </p>

                <h3 className="text-xl font-bold text-slate-900 dark:text-silver-100 group-hover:text-cyan-deep dark:group-hover:text-cyan-bright transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 dark:text-silver-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-silver-500">
                <span>Domain Scope</span>
                <span className="font-mono text-slate-700 dark:text-silver-400">{item.examples}</span>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};
