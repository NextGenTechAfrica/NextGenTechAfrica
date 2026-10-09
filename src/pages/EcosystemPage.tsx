import React, { useEffect } from 'react';
import { Network, Layers, Shield, Key, Share2, CheckCircle, ArrowRight } from 'lucide-react';
import { EcosystemDiagram } from '../components/ecosystem/EcosystemDiagram';
import { StatusBadge } from '../components/common/StatusBadge';
import { ecosystemPillars } from '../data/ecosystemData';
import { Button } from '../components/common/Button';

export const EcosystemPage: React.FC = () => {
  useEffect(() => {
    document.title = 'The NextGen Ecosystem — One Company, Multiple Technologies';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-24 relative overflow-hidden transition-colors duration-250">
      {/* Background ambient accents */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-cyan-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-cyan-deep dark:text-cyan-accent text-xs font-semibold uppercase tracking-widest mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>THE NEXTGEN ECOSYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight leading-tight">
            One company. Multiple technologies. One ecosystem.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-silver-300 font-normal leading-relaxed">
            NextGen Technologies functions as a parent architecture and digital venture builder. Rather than treating each platform as an isolated venture, our ecosystem connects them with shared engineering, design consistency, and ethical software standards.
          </p>
        </div>

        {/* Interactive Diagram Section */}
        <div className="py-8 mb-20">
          <EcosystemDiagram />
        </div>

        {/* Status Classification Guide */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-900/60 border border-slate-200 dark:border-white/8 shadow-sm dark:shadow-none mb-20">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-silver-100 tracking-tight mb-3">
            How we classify project stages
          </h2>
          <p className="text-sm text-slate-600 dark:text-silver-400 mb-8 max-w-2xl leading-relaxed">
            Transparency is central to our culture. We explicitly label every initiative inside the NextGen ecosystem so visitors know exactly where every project stands.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-dark-950/80 border border-emerald-500/30 space-y-3">
              <StatusBadge status="LIVE" />
              <p className="text-xs text-slate-600 dark:text-silver-400 leading-relaxed">
                Fully operational, deployed to production, and actively serving real businesses and users. Our current live flagships are CodeBridge and MarketBridge.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-dark-950/80 border border-cyan-500/30 space-y-3">
              <StatusBadge status="IN DEVELOPMENT" />
              <p className="text-xs text-slate-600 dark:text-silver-400 leading-relaxed">
                Actively being designed, engineered, and tested. Our current focus is NextGen Core developer infrastructure and shared SSO rails.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-dark-950/80 border border-slate-300 dark:border-slate-700/60 space-y-3">
              <StatusBadge status="COMING SOON" />
              <p className="text-xs text-slate-600 dark:text-silver-400 leading-relaxed">
                Architecture specified and wireframed. Slated for active coding in an upcoming development sprint.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-dark-950/80 border border-zinc-300 dark:border-zinc-700/50 space-y-3">
              <StatusBadge status="CONCEPT" />
              <p className="text-xs text-slate-600 dark:text-silver-400 leading-relaxed">
                Early-stage problem research, community interviews, and architectural feasibility exploration.
              </p>
            </div>
          </div>
        </div>

        {/* The Shared Ecosystem Advantages */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-silver-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight">
              Why an ecosystem model benefits you
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-silver-400">
              When software tools are built by the same unified team under common principles, users experience a fundamentally higher quality of digital life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-dark-900/80 border border-slate-200 dark:border-white/8 shadow-sm dark:shadow-none space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-500/30 text-cyan-deep dark:text-cyan-accent flex items-center justify-center">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-silver-100">Unified Account & Identity</h3>
              <p className="text-sm text-slate-600 dark:text-silver-400 leading-relaxed">
                One secure account to access every platform we build. No managing dozens of passwords across disconnected SaaS products.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-dark-900/80 border border-slate-200 dark:border-white/8 shadow-sm dark:shadow-none space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-silver-200 flex items-center justify-center">
                <Layers className="w-6 h-6 text-cyan-deep dark:text-cyan-bright" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-silver-100">Consistent Design Language</h3>
              <p className="text-sm text-slate-600 dark:text-silver-400 leading-relaxed">
                Once you learn how to navigate one NextGen tool, every other product in the ecosystem feels instantly familiar, calm, and intuitive.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-dark-900/80 border border-slate-200 dark:border-white/8 shadow-sm dark:shadow-none space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-500/30 text-cyan-deep dark:text-cyan-accent flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-silver-100">Zero Surveillance or Ad Tracking</h3>
              <p className="text-sm text-slate-600 dark:text-silver-400 leading-relaxed">
                Your data is yours. We refuse to sell private student or user telemetry to third-party ad brokers across any of our applications.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-dark-850 dark:to-dark-900 border border-cyan-500/30 shadow-card dark:shadow-none flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-silver-100">Ready to explore our live ecosystem?</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-silver-400">
              Discover CodeBridge and MarketBridge—our production platforms powering digital enterprise and verified commerce.
            </p>
          </div>
          <Button
            href="/platforms"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Our Platforms
          </Button>
        </div>
      </div>
    </div>
  );
};
