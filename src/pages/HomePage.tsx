import React, { useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { TheIdeaSection } from '../components/home/TheIdeaSection';
import { EcosystemPreview } from '../components/home/EcosystemPreview';
import { WhatWeBuildSection } from '../components/home/WhatWeBuildSection';
import { PlatformsPreview } from '../components/home/PlatformsPreview';
import { WhyNextGenSection } from '../components/home/WhyNextGenSection';
import { Button } from '../components/common/Button';
import { ScrollReveal, ParallaxText } from '../components/common/ScrollReveal';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'NextGen Technologies \u2014 Building Today. Powering Tomorrow.';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. The Idea Section */}
      <ScrollReveal delay={0.1}>
        <TheIdeaSection />
      </ScrollReveal>

      {/* 3. The Ecosystem Section */}
      <ScrollReveal delay={0.1}>
        <EcosystemPreview />
      </ScrollReveal>

      {/* 4. What We Build */}
      <ScrollReveal delay={0.1}>
        <WhatWeBuildSection />
      </ScrollReveal>

      {/* 5. Platforms Showcase */}
      <ScrollReveal delay={0.1}>
        <PlatformsPreview />
      </ScrollReveal>

      {/* 6. Why NextGen Exists */}
      <ScrollReveal delay={0.1}>
        <WhyNextGenSection />
      </ScrollReveal>

      {/* 7. Grounding Human CTA Banner */}
      <section className="py-20 relative bg-slate-100 dark:bg-dark-900 border-t border-slate-200 dark:border-white/8 overflow-hidden transition-colors duration-250">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-accent/8 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-cyan-deep dark:text-cyan-accent text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
            <span>STILL BUILDING</span>
          </div>

          {/* Parallax heading — moves at a slightly slower rate than the background */}
          <ParallaxText offset={30}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight">
              We&apos;re at the beginning of something enduring.
            </h2>
          </ParallaxText>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-silver-300 max-w-2xl mx-auto leading-relaxed">
            Some ideas are taking shape, some are in active development, and some are only sketches on a board. If you share our belief in thoughtful, useful technology, we&apos;d love to connect.
          </p>

          <ScrollReveal delay={0.2} direction="up" distance={30}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Mail className="w-4 h-4" />}
                iconPosition="left"
              >
                Get in Touch
              </Button>
              <Button
                href="/platforms"
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Our Platforms
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
