import React, { useEffect } from 'react';
import { Compass, Hammer, Sparkles, Target, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Button } from '../components/common/Button';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About NextGen Technologies — Our Story & Approach';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-24 relative overflow-hidden transition-colors duration-250">
      {/* Background ambient accents */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-cyan-deep dark:text-cyan-accent text-xs font-semibold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>ABOUT NEXTGEN TECHNOLOGIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight leading-tight">
            Building technology around ideas worth bringing to life.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-silver-300 font-normal leading-relaxed">
            NextGen Technologies is being built with a long-term idea in mind: create technology that can grow beyond a single product.
          </p>
        </div>

        {/* Narrative & Origin Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-slate-200 dark:border-white/8">
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-700 dark:text-silver-300 leading-relaxed font-normal">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-silver-100 tracking-tight">
              An ecosystem, not just an app.
            </h2>
            
            <p>
              Many technology endeavors start with an attempt to build a single application, capture immediate market share, and figure out the rest later.
            </p>

            <p>
              NextGen was conceived differently. We believe that true digital value comes from building coherent, interconnected software. Instead of launching isolated tools that operate in silos, we are creating a parent ecosystem where multiple digital platforms can share engineering standards, user-first ethics, and clean design.
            </p>

            <p className="text-slate-600 dark:text-silver-400">
              We are not a trading firm, financial institution, marketplace, or e-commerce shop. We are a digital venture builder and software craft collective focused on tools that genuinely make people’s lives more focused, organized, and capable.
            </p>

            <div className="p-6 rounded-2xl bg-white dark:bg-dark-900/90 border border-cyan-500/30 shadow-sm dark:shadow-none space-y-3">
              <div className="flex items-center gap-2 text-cyan-deep dark:text-cyan-bright font-semibold text-sm">
                <Heart className="w-4 h-4" />
                <span>Our Core Operating Principle</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-silver-300 italic leading-relaxed">
                "We don't want to build technology simply because we can. Every platform we touch must solve real human friction and stand the test of time."
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-900/80 border border-slate-200 dark:border-white/10 shadow-card">
              <h3 className="text-lg font-bold text-slate-900 dark:text-silver-100 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-deep dark:text-cyan-accent" />
                <span>The NextGen Model</span>
              </h3>

              <ul className="space-y-4 text-sm text-slate-700 dark:text-silver-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-deep dark:bg-cyan-accent mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-silver-100">Parent Governance:</strong>
                    <p className="text-slate-600 dark:text-silver-400 text-xs mt-0.5">
                      Sets engineering quality, privacy standards, and strategic vision across all platforms.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-silver-400 mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-silver-100">Dedicated Platforms:</strong>
                    <p className="text-slate-600 dark:text-silver-400 text-xs mt-0.5">
                      Focused platforms like CodeBridge and MarketBridge engineered for production excellence.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-deep dark:bg-cyan-bright mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-silver-100">Future Ventures:</strong>
                    <p className="text-slate-600 dark:text-silver-400 text-xs mt-0.5">
                      Platforms that mature and thrive can evolve into dedicated independent entities under NextGen.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-dark-850/60 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none flex items-center gap-4">
              <img src="/nextgen-logo.png" alt="NextGen Technologies" className="h-10 w-auto" />
              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-deep dark:text-cyan-accent font-semibold">
                  Official Brand
                </p>
                <p className="text-xs text-slate-600 dark:text-silver-400">
                  Building Today / Powering Tomorrow
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Where We're Going */}
        <div className="py-20 border-b border-slate-200 dark:border-white/8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-silver-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>EXPANSION HORIZON</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight">
              Where we're going
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-silver-400 leading-relaxed">
              We envision NextGen Technologies becoming a steady incubator for tools that empower human curiosity and capability across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-white dark:bg-dark-900/60 border border-slate-200 dark:border-white/8 shadow-sm dark:shadow-none">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-cyan-deep dark:text-cyan-accent mb-5 font-mono text-sm font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-silver-100">Prove in Production</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-silver-400 leading-relaxed">
                We start with CodeBridge and MarketBridge. By solving tangible enterprise engineering and trustless commerce challenges, we prove our design and execution philosophy in real-world commercial environments.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white dark:bg-dark-900/60 border border-slate-200 dark:border-white/8 shadow-sm dark:shadow-none">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-silver-300 mb-5 font-mono text-sm font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-silver-100">Expand the Toolkit</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-silver-400 leading-relaxed">
                As our core platform stabilizes, we will introduce focused productivity software and clean media platforms, creating an interconnected suite for builders, thinkers, and students.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white dark:bg-dark-900/60 border border-slate-200 dark:border-white/8 shadow-sm dark:shadow-none">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-cyan-deep dark:text-cyan-bright mb-5 font-mono text-sm font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-silver-100">Spin Out Ventures</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-silver-400 leading-relaxed">
                Over time, successful platforms will become self-sufficient companies operating under the NextGen Technologies parent umbrella, supported by our shared engineering and values.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Still Building (Authentic & Human) */}
        <div className="pt-20">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-dark-850 dark:via-dark-900 dark:to-dark-950 border border-cyan-500/30 shadow-card dark:shadow-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100/70 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-500/40 text-cyan-900 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                <Hammer className="w-3.5 h-3.5" />
                <span>STILL BUILDING</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight">
                Authentic, early, and proud of the craft.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-silver-300 leading-relaxed">
                <p>
                  We won't pretend to be a massive multinational conglomerate with thousands of employees or glossy corporate towers. We are at an early, vital stage—and that is our greatest advantage.
                </p>
                <p>
                  Some of our ideas are actively in development, some are taking shape in prototypes, and others are still sketches on a board. We celebrate this stage because it allows us to talk directly to users, make decisions based on human need rather than bureaucratic compromise, and write software with meticulous care.
                </p>
                <p className="text-slate-600 dark:text-silver-400 text-sm">
                  This is only the beginning. More is coming.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button href="/platforms" variant="primary" size="md">
                  See Our Current Platforms
                </Button>
                <Button href="/contact" variant="secondary" size="md">
                  Connect With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
