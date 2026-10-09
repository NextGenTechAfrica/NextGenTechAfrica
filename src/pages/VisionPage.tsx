import React, { useEffect } from 'react';
import { Sparkles, Eye, Compass, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { visionContent, corePrinciples } from '../data/principlesData';
import { Button } from '../components/common/Button';

export const VisionPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Vision & Principles — NextGen Technologies';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-24 relative overflow-hidden transition-colors duration-250">
      {/* Background ambient accents */}
      <div className="absolute top-20 right-1/3 w-[600px] h-[350px] bg-cyan-accent/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-cyan-deep dark:text-cyan-accent text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FOUNDATIONAL VISION & MISSION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight leading-tight">
            Clear purpose.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-800 to-cyan-deep dark:from-silver-300 dark:via-silver-400 dark:to-cyan-bright">
              Grounded principles.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-silver-300 font-normal leading-relaxed">
            Technology is only as valuable as the human intention behind it. We define our vision and principles clearly so every platform we launch stays true to what matters.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-dark-850 dark:to-dark-900 border border-cyan-500/30 shadow-card dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-500/30 text-cyan-deep dark:text-cyan-accent flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-widest font-bold text-cyan-deep dark:text-cyan-accent">
                {visionContent.vision.title}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight mt-2 leading-snug">
                "{visionContent.vision.statement}"
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-silver-300 leading-relaxed font-normal">
                {visionContent.vision.context}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/5 text-xs text-slate-500 dark:text-silver-500">
              The long-term destination of the NextGen ecosystem
            </div>
          </div>

          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-dark-850 dark:to-dark-900 border border-slate-200 dark:border-white/10 shadow-card dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-silver-200 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-cyan-deep dark:text-cyan-bright" />
              </div>

              <span className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-silver-400">
                {visionContent.mission.title}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight mt-2 leading-snug">
                "{visionContent.mission.statement}"
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-silver-300 leading-relaxed font-normal">
                {visionContent.mission.context}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/5 text-xs text-slate-500 dark:text-silver-500">
              How we execute day in and day out
            </div>
          </div>
        </div>

        {/* Core Principles Section */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-silver-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>HOW WE OPERATE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight">
              Our Four Principles
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-silver-400 leading-relaxed">
              When we are deciding whether to start a feature, initiate a product, or refactor architecture, we measure our choices against these four tenets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corePrinciples.map((principle, index) => (
              <div
                key={principle.id}
                className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-900/80 border border-slate-200 dark:border-white/8 hover:border-cyan-500/40 shadow-sm dark:shadow-none transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-deep dark:text-cyan-accent">
                      0{index + 1}
                    </span>
                    <span className="text-[11px] uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-silver-400 border border-slate-200 dark:border-white/5">
                      Tenet
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-silver-100 tracking-tight">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-cyan-deep dark:text-cyan-bright">
                    "{principle.headline}"
                  </p>

                  <p className="mt-4 text-sm text-slate-700 dark:text-silver-300 leading-relaxed">
                    {principle.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-silver-400 mb-3">
                      What this looks like in practice:
                    </h4>
                    <ul className="space-y-2">
                      {principle.bulletPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-silver-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-deep dark:text-cyan-accent shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Builder's Manifesto */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-dark-900/50 border border-slate-200 dark:border-white/8 shadow-card dark:shadow-none max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-cyan-deep dark:text-cyan-accent text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>A NOTE ON INTEGRITY & CRAFT</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight">
            Why we choose discipline over quick shortcuts
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-silver-300 leading-relaxed font-normal">
            <p>
              The technology industry often celebrates vanity metrics: rapid funding rounds, exaggerated active user claims, and products rushed out before their foundation is solid.
            </p>
            <p>
              At NextGen Technologies, we have deliberately taken a different path. We do not invent partnerships, awards, or fake testimonials. We do not pretend to be larger than we are. We let our platforms speak for our craftsmanship.
            </p>
            <p>
              We believe users are tired of hyperactive software that treats them as data points to be monetized. By building with humility, honesty, and deep respect for attention, we hope to earn a place as a trusted technology home.
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-200 dark:border-white/8 text-xs text-slate-500 dark:text-silver-500">
            <span>NextGen Technologies Core Philosophy</span>
            <span>Est. for the world ahead</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Button
            href="/roadmap"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Our Roadmap
          </Button>
        </div>
      </div>
    </div>
  );
};
