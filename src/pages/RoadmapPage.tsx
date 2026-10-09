import React, { useEffect } from 'react';
import { Milestone, CheckCircle2, Clock, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { roadmapPhases } from '../data/roadmapData';
import { Button } from '../components/common/Button';

export const RoadmapPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Roadmap — NextGen Technologies';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-24 relative overflow-hidden transition-colors duration-250">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[350px] bg-cyan-accent/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-cyan-deep dark:text-cyan-accent text-xs font-semibold uppercase tracking-widest mb-4">
            <Milestone className="w-3.5 h-3.5" />
            <span>DIRECTION & HORIZONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight leading-tight">
            Our Roadmap
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-silver-300 font-normal leading-relaxed">
            A clear strategic direction, not a rigid promise. How we are approaching the thoughtful expansion of NextGen Technologies.
          </p>
        </div>

        {/* Candid Disclaimer Banner */}
        <div className="p-6 rounded-2xl bg-white dark:bg-dark-900/80 border border-cyan-500/30 shadow-sm dark:shadow-none mb-16 flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-cyan-deep dark:text-cyan-accent shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900 dark:text-silver-200 uppercase tracking-wide">
              Direction Over Fixed Deadlines
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-silver-400 leading-relaxed">
              We prioritize building software that is reliable, secure, and genuinely useful over hitting artificial calendar dates. This roadmap represents our strategic focus sequence, subject to refinement as we learn from our real users and community.
            </p>
          </div>
        </div>

        {/* Visual Roadmap Sequence */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-cyan-accent before:via-slate-300/50 dark:before:via-silver-600/30 before:to-transparent hidden sm:block">
          {/* Desktop timeline with connected nodes */}
          {roadmapPhases.map((phase) => {
            const isNow = phase.tag === 'NOW';
            return (
              <div key={phase.tag} className="relative pl-20 group">
                {/* Node Indicator */}
                <div
                  className={`absolute left-5 top-8 -translate-x-1/2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isNow
                      ? 'bg-white dark:bg-dark-950 border-cyan-accent shadow-cyan-md'
                      : 'bg-white dark:bg-dark-950 border-slate-300 dark:border-silver-600 group-hover:border-slate-500 dark:group-hover:border-silver-400'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isNow ? 'bg-cyan-accent animate-ping' : 'bg-slate-400 dark:bg-silver-500'
                    }`}
                  />
                </div>

                {/* Phase Content Card */}
                <div
                  className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 ${
                    isNow
                      ? 'bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-dark-850 dark:to-dark-900 border-cyan-500/40 shadow-card dark:shadow-card hover:shadow-cyan-md'
                      : 'bg-white dark:bg-dark-900/60 border-slate-200 dark:border-white/8 hover:border-slate-300 dark:hover:border-white/20 shadow-sm dark:shadow-none'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono font-extrabold px-3 py-1 rounded-md tracking-widest ${
                          isNow
                            ? 'bg-cyan-accent text-dark-950 shadow-cyan-sm'
                            : 'bg-slate-100 dark:bg-dark-800 text-slate-700 dark:text-silver-300 border border-slate-200 dark:border-white/5'
                        }`}
                      >
                        {phase.tag}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight">
                        {phase.title}
                      </h2>
                    </div>

                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        isNow
                          ? 'bg-cyan-100 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40'
                          : 'bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-silver-400 border border-slate-200 dark:border-white/5'
                      }`}
                    >
                      {phase.statusLabel}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 dark:text-silver-300 font-medium leading-relaxed mb-6">
                    {phase.subheading}
                  </p>

                  <div className="pt-6 border-t border-slate-200 dark:border-white/8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-silver-400 mb-4">
                      Key Objectives & Workstreams:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {phase.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-silver-300 bg-slate-50 dark:bg-dark-950/40 p-3 rounded-xl border border-slate-200 dark:border-white/5"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isNow ? 'text-cyan-deep dark:text-cyan-accent' : 'text-slate-400 dark:text-silver-500'
                            }`}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View: Clean Vertical Cards without offset connector */}
        <div className="sm:hidden space-y-6">
          {roadmapPhases.map((phase) => {
            const isNow = phase.tag === 'NOW';
            return (
              <div
                key={phase.tag}
                className={`p-6 rounded-2xl border ${
                  isNow
                    ? 'bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-dark-850 dark:to-dark-900 border-cyan-500/40 shadow-sm'
                    : 'bg-white dark:bg-dark-900 border-slate-200 dark:border-white/8 shadow-sm dark:shadow-none'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded ${
                      isNow
                        ? 'bg-cyan-accent text-dark-950 font-bold'
                        : 'bg-slate-100 dark:bg-dark-800 text-slate-700 dark:text-silver-300'
                    }`}
                  >
                    {phase.tag}
                  </span>
                  <span className="text-[11px] text-slate-600 dark:text-silver-400">{phase.statusLabel}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-silver-100 mb-2">{phase.title}</h2>
                <p className="text-xs text-slate-700 dark:text-silver-300 mb-4">{phase.subheading}</p>

                <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-white/5">
                  {phase.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-silver-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-deep dark:text-cyan-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white dark:bg-dark-900/60 border border-slate-200 dark:border-white/10 shadow-card dark:shadow-none flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-silver-100">
              Have thoughts or want to follow along?
            </h3>
            <p className="text-sm text-slate-600 dark:text-silver-400 max-w-xl leading-relaxed">
              We frequently talk to learners, builders, and community partners as we refine our milestone priorities.
            </p>
          </div>

          <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Reach Out to the Team
          </Button>
        </div>
      </div>
    </div>
  );
};
