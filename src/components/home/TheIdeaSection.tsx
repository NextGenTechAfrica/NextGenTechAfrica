import React from 'react';
import { ArrowUpRight, Box, RefreshCw, Sparkles, Layers } from 'lucide-react';
import { Button } from '../common/Button';

export const TheIdeaSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-dark-950 transition-colors duration-300">
      {/* Background radial accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Thoughtful Human Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 text-cyan-deep dark:text-cyan-accent text-xs font-semibold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE IDEA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight leading-tight">
              More than a product.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-deep via-cyan-accent to-slate-900 dark:from-silver-300 dark:via-silver-400 dark:to-cyan-bright">
                A home for useful ideas.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-silver-300 font-normal leading-relaxed">
              <p>
                NextGen started with a simple question: <strong className="text-slate-900 dark:text-silver-100 font-semibold">what if one dedicated team could keep turning good ideas into useful technology?</strong>
              </p>
              <p>
                Most tech startups are built to obsess over a single tool, scale it at all costs, and protect their moat. But real innovation doesn’t happen in isolation. The tools we need for learning, for creating, and for communicating are deeply interconnected.
              </p>
              <p className="text-slate-500 dark:text-silver-400 text-base">
                We aren't building a solitary app. NextGen Technologies is structured as an ecosystem and digital venture builder—a shared foundation where multiple platforms can be designed, launched, and nurtured with consistent craft, rigorous privacy, and human respect.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/about" variant="secondary" size="md">
                Read Our Story
              </Button>
              <Button
                href="/ecosystem"
                variant="ghost"
                size="md"
                icon={<ArrowUpRight className="w-4 h-4 text-cyan-deep dark:text-cyan-accent" />}
              >
                How The Ecosystem Works
              </Button>
            </div>
          </div>

          {/* Right Column: Architectural Visual Concept Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative p-8 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-dark-850 dark:to-dark-900 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-card">
              {/* Top Card Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-white/8">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-cyan-deep dark:bg-cyan-accent animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-silver-200">
                    Ecosystem Paradigm
                  </span>
                </div>
                <span className="text-xs text-slate-400 dark:text-silver-500 font-mono">v1.0 Architecture</span>
              </div>

              {/* Visual Tree */}
              <div className="py-6 space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-cyan-500/30 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <img src="/nextgen-emblem.png" alt="NextGen" className="h-6 w-auto" />
                    <span className="text-sm font-bold text-slate-900 dark:text-silver-100">NextGen Technologies</span>
                  </div>
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-500/10 text-cyan-deep dark:text-cyan-accent border border-cyan-200 dark:border-cyan-500/20">
                    Parent Engine
                  </span>
                </div>

                {/* Connecting branch lines */}
                <div className="pl-6 border-l-2 border-dashed border-cyan-400 dark:border-cyan-500/30 space-y-3 py-1">
                  <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-silver-300 bg-slate-50 dark:bg-dark-900/90 p-2.5 rounded-lg border border-slate-200 dark:border-white/5">
                    <Layers className="w-4 h-4 text-cyan-deep dark:text-cyan-accent" />
                    <span>Shared Engineering & Identity Substrate</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-silver-300 bg-slate-50 dark:bg-dark-900/90 p-2.5 rounded-lg border border-slate-200 dark:border-white/5">
                    <Box className="w-4 h-4 text-cyan-deep dark:text-cyan-accent" />
                    <span>Independent Platforms (e.g. CodeBridge, MarketBridge)</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-silver-300 bg-slate-50 dark:bg-dark-900/90 p-2.5 rounded-lg border border-slate-200 dark:border-white/5">
                    <RefreshCw className="w-4 h-4 text-slate-500 dark:text-silver-400" />
                    <span>Continuous Incubation & Lab Explorations</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quote */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/8">
                <p className="text-xs text-slate-500 dark:text-silver-400 italic">
                  "One company. Multiple technologies. One ecosystem."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
