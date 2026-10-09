import React from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { AnimatedSpaceBackground } from './AnimatedSpaceBackground';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-16 overflow-hidden bg-black">
      {/* Dynamic Animated Space Background (Parallax, Twinkling Stars, Shimmer, and Shooting Stars) */}
      <AnimatedSpaceBackground />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        {/* Tagline / Brand Indicator */}
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-950/70 border border-cyan-500/30 text-cyan-accent text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-cyan-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BUILDING TODAY / POWERING TOMORROW</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-silver-400 font-mono tracking-wider">
            <span>•</span>
            <span>NEXTGEN TECHNOLOGIES</span>
          </div>
        </div>

        {/* Large, Bold, Left-Aligned Headline (matching the mockup composition) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold text-white tracking-tight leading-[1.06] max-w-5xl">
          Crafting the Foundations<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-100 via-white to-cyan-bright">
            of Tomorrow's Technology
          </span>
        </h1>

        {/* Full-width Thin Dividing Line (Signature element from mockup) */}
        <div className="w-full h-px bg-white/20 my-10 sm:my-14" />

        {/* Split Bottom Row (matching mockup layout: buttons on left, narrative on right) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left: Two Pill Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href="/ecosystem"
              variant="primary"
              size="lg"
              className="!rounded-full px-8 py-3.5 font-bold shadow-cyan-md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Our Ecosystem
            </Button>

            <Button
              href="/about"
              variant="secondary"
              size="lg"
              className="!rounded-full px-8 py-3.5 font-medium border-white/30 bg-white/10 hover:bg-white/20 text-white hover:text-white"
              icon={<Compass className="w-4 h-4 text-silver-300" />}
              iconPosition="left"
            >
              About NextGen
            </Button>
          </div>

          {/* Right: Supporting Narrative Paragraph */}
          <div className="max-w-md lg:text-right">
            <p className="text-base sm:text-lg text-silver-200 font-normal leading-relaxed">
              Shaping intelligent digital platforms and thoughtful systems that define how we learn, work, build, and evolve.
            </p>
            <p className="mt-1 text-xs text-cyan-accent font-medium tracking-wide uppercase">
              One company. Multiple technologies. One ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Grounding Bottom Pill Stats / Brand Markers */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-silver-400 font-mono pt-4 border-t border-white/15">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-silver-200 font-medium">Live Ecosystem Flagships: CodeBridge & MarketBridge</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-silver-400">
            <span>Parent Venture Builder</span>
            <span>•</span>
            <span>Digital Platforms</span>
            <span>•</span>
            <span>Applied Technologies</span>
          </div>

          <div className="text-silver-400">
            Est. for the world ahead
          </div>
        </div>
      </div>
    </section>
  );
};
