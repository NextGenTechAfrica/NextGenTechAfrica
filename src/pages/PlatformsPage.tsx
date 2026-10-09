import React, { useState, useEffect } from 'react';
import { Layers, Filter, PlusCircle, CheckCircle, ArrowRight, Globe, ExternalLink, ShieldCheck, Code, ShoppingBag } from 'lucide-react';
import { PlatformCard } from '../components/platforms/PlatformCard';
import { platforms } from '../data/platformsData';
import { PlatformStatus } from '../types';
import { Button } from '../components/common/Button';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const PlatformsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | PlatformStatus>('ALL');

  useEffect(() => {
    document.title = 'Platforms Showcase — NextGen Technologies';
    window.scrollTo(0, 0);
  }, []);

  const filteredPlatforms = selectedFilter === 'ALL'
    ? platforms
    : platforms.filter((p) => p.status === selectedFilter);

  return (
    <div className="pt-28 pb-24 relative overflow-hidden transition-colors duration-250">
      {/* Background ambient glow */}
      <div className="absolute top-24 left-1/3 w-[600px] h-[350px] bg-cyan-accent/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-cyan-deep dark:text-cyan-accent text-xs font-semibold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>PORTFOLIO & PIPELINE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight leading-tight">
              Our Platforms
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-silver-300 font-normal leading-relaxed">
              Every platform we build begins with a tangible market challenge. We design, deploy, and scale dedicated platforms across enterprise engineering and trustless digital commerce.
            </p>
          </div>
        </ScrollReveal>

        {/* Status Filters */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 pb-6 border-b border-slate-200 dark:border-white/8">
            <span className="text-xs font-semibold text-slate-600 dark:text-silver-400 uppercase tracking-wider flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5 text-cyan-deep dark:text-cyan-accent" />
              <span>Filter Status:</span>
            </span>

            {(['ALL', 'LIVE', 'IN DEVELOPMENT', 'COMING SOON', 'CONCEPT'] as const).map((status) => {
              const isSelected = selectedFilter === status;
              return (
                <button
                  key={status}
                  onClick={() => setSelectedFilter(status)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all border ${
                    isSelected
                      ? 'bg-cyan-accent text-dark-950 border-cyan-300 font-semibold shadow-cyan-sm'
                      : 'bg-white dark:bg-dark-900 border-slate-200 dark:border-white/10 text-slate-600 dark:text-silver-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 shadow-sm dark:shadow-none'
                  }`}
                >
                  {status}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Platforms Grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredPlatforms.map((platform) => (
              <PlatformCard
                key={platform.id}
                platform={platform}
                featured={platform.status === 'LIVE'}
              />
            ))}

            {/* Planned pipeline card */}
            {selectedFilter === 'ALL' && (
              <div className="p-8 rounded-2xl border border-dashed border-slate-300 dark:border-white/10 bg-white/80 dark:bg-dark-950/40 shadow-sm dark:shadow-none flex flex-col justify-between items-center text-center">
                <div className="my-auto py-8">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10 flex items-center justify-center mx-auto mb-4 text-slate-500 dark:text-silver-400">
                    <PlusCircle className="w-6 h-6 text-cyan-deep dark:text-cyan-accent/70" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-silver-200">Continuous Incubation</h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-silver-400 max-w-xs mx-auto leading-relaxed">
                    We don't inflate our platform count with abandoned prototypes. Each platform represents an actively maintained, scalable product designed for endurance.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-white/5 w-full text-xs text-slate-500 dark:text-silver-500 font-mono">
                  NextGen Technologies Pipeline
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Highlight Section: Live Production Flagships Showcase */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-dark-850 dark:to-dark-900 border border-cyan-500/30 shadow-card dark:shadow-none relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-500/40 text-emerald-900 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>LIVE PRODUCTION ECOSYSTEM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight">
                CodeBridge & MarketBridge — Real Solutions Powering Enterprise & Digital Commerce.
              </h2>

              <p className="text-sm sm:text-base text-slate-700 dark:text-silver-300 leading-relaxed max-w-2xl">
                From full-cycle custom software engineering and enterprise BMS through CodeBridge, to verified merchant escrow and fraud-free marketplaces via MarketBridge, NextGen Technologies builds software that delivers tangible economic impact.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-700 dark:text-silver-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-cyan-deep dark:text-cyan-accent" />
                  <span>Dedicated Full-Stack Engineering</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-cyan-deep dark:text-cyan-accent" />
                  <span>Automated Escrow via Flutterwave</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-cyan-deep dark:text-cyan-accent" />
                  <span>Multi-Tier Vendor Verification</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:justify-end">
              <a
                href="https://code-bridge-rosy.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-cyan-deep to-cyan-bright text-white shadow-cyan-md hover:shadow-cyan-lg hover:scale-[1.02] transition-all"
              >
                <Code className="w-4 h-4" />
                <span>Launch CodeBridge</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://market-bridge-llc.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-sm transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Launch MarketBridge</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* How We Decide What to Build */}
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-silver-100 tracking-tight mb-3">
              How we decide what to build
            </h2>
            <p className="text-sm text-slate-600 dark:text-silver-400 leading-relaxed mb-6">
              We hold ourselves to a strict standard before allocating engineering resources to any new idea.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white dark:bg-dark-900/60 border border-slate-200 dark:border-white/8 shadow-sm dark:shadow-none">
                <div className="text-xs font-semibold text-cyan-deep dark:text-cyan-accent mb-1 font-mono">01. REAL FRICTION</div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-silver-100 mb-1">Authentic Problem Validation</h4>
                <p className="text-xs text-slate-600 dark:text-silver-400 leading-relaxed">
                  We never build technology looking for a problem. Every product solves a concrete, painful friction experienced by real businesses and consumers.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-dark-900/60 border border-slate-200 dark:border-white/8 shadow-sm dark:shadow-none">
                <div className="text-xs font-semibold text-cyan-deep dark:text-cyan-accent mb-1 font-mono">02. LONG-TERM VIABILITY</div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-silver-100 mb-1">Independent Venture Potential</h4>
                <p className="text-xs text-slate-600 dark:text-silver-400 leading-relaxed">
                  Platforms must possess a clear path toward sustainability, user retention, and eventual operational autonomy under the NextGen umbrella.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
