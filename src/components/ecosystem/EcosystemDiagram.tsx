import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Zap,
  Radio,
  Cpu,
  Sparkles,
  Compass,
  ArrowRight,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { ecosystemPillars } from '../../data/ecosystemData';
import { EcosystemPillar } from '../../types';

export const EcosystemDiagram: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('education');

  const selectedPillar =
    ecosystemPillars.find((p) => p.id === selectedPillarId) || ecosystemPillars[0];

  const getPillarIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'Zap':
        return <Zap className={className} />;
      case 'Radio':
        return <Radio className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  return (
    <div className="relative w-full">
      {/* Interactive Pillar Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {ecosystemPillars.map((pillar) => {
          const isSelected = pillar.id === selectedPillarId;
          return (
            <button
              key={pillar.id}
              onClick={() => setSelectedPillarId(pillar.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                isSelected
                  ? 'bg-cyan-100 dark:bg-cyan-950/70 border-cyan-500 dark:border-cyan-400 text-cyan-deep dark:text-cyan-bright shadow-sm'
                  : 'bg-white dark:bg-dark-900/60 border-slate-200 dark:border-white/5 text-slate-600 dark:text-silver-400 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-silver-200'
              }`}
              aria-pressed={isSelected}
            >
              <span className={isSelected ? 'text-cyan-deep dark:text-cyan-accent' : 'text-slate-400 dark:text-silver-500'}>
                {getPillarIcon(pillar.iconName, 'w-4 h-4')}
              </span>
              <span>{pillar.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Diagram & Details Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Visual Ecosystem Constellation (7 cols) */}
        <div className="lg:col-span-7 relative p-6 sm:p-10 rounded-3xl bg-slate-50 dark:bg-dark-900/50 border border-slate-200 dark:border-white/8 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center min-h-[380px] sm:min-h-[440px] shadow-sm">
          {/* Subtle concentric rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full border border-dashed border-cyan-500/40 animate-[spin_120s_linear_infinite]" />
            <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full border border-slate-300 dark:border-white/20" />
          </div>

          {/* Central NextGen Hub */}
          <div className="relative z-10 text-center p-5 rounded-2xl bg-white dark:bg-dark-950/90 border border-cyan-400 dark:border-cyan-500/40 shadow-lg dark:shadow-cyan-md max-w-xs mx-auto">
            <img
              src="/nextgen-logo.png"
              alt="NextGen Technologies"
              className="h-10 mx-auto object-contain"
            />
            <p className="mt-2 text-[11px] uppercase tracking-widest text-cyan-deep dark:text-cyan-accent font-semibold">
              Parent Ecosystem
            </p>
            <p className="text-[12px] text-slate-500 dark:text-silver-400 font-light mt-0.5">
              One Company • Multiple Technologies
            </p>
          </div>

          {/* Connected Peripheral Nodes */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 relative z-10">
            {ecosystemPillars.map((pillar) => {
              const isSelected = pillar.id === selectedPillarId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-cyan-50 dark:bg-dark-800 border-cyan-500 dark:border-cyan-accent shadow-md -translate-y-1'
                      : 'bg-white dark:bg-dark-950/70 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-dark-850 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span
                      className={`p-2 rounded-lg ${
                        isSelected
                          ? 'bg-cyan-100 dark:bg-cyan-500/10 text-cyan-deep dark:text-cyan-bright'
                          : 'bg-slate-100 dark:bg-dark-800 text-slate-500 dark:text-silver-400'
                      }`}
                    >
                      {getPillarIcon(pillar.iconName, 'w-4 h-4')}
                    </span>
                    {pillar.activeProject && (
                      <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-500/30 text-cyan-deep dark:text-cyan-300 font-semibold">
                        Active
                      </span>
                    )}
                  </div>
                  <div>
                    <h4
                      className={`text-sm font-bold ${
                        isSelected ? 'text-cyan-deep dark:text-cyan-bright' : 'text-slate-800 dark:text-silver-200'
                      }`}
                    >
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-silver-500 truncate">
                      {pillar.category}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Pillar Focus Information (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-dark-850 dark:to-dark-900 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-card flex flex-col justify-between min-h-[380px] sm:min-h-[440px]">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="text-xs font-semibold text-cyan-deep dark:text-cyan-accent uppercase tracking-widest flex items-center gap-1.5">
                {getPillarIcon(selectedPillar.iconName, 'w-4 h-4')}
                {selectedPillar.category}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-silver-300">
                {selectedPillar.statusLabel}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight">
              {selectedPillar.title}
            </h3>

            <p className="mt-3 text-sm text-slate-600 dark:text-silver-300 leading-relaxed">
              {selectedPillar.description}
            </p>

            {/* Focus Areas */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-silver-400 mb-3">
                Key Explorations & Focus Areas:
              </h4>
              <ul className="space-y-2.5">
                {selectedPillar.focusAreas.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-silver-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-deep dark:text-cyan-accent shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Active project callout or exploratory status */}
          <div className="mt-8 pt-5 border-t border-slate-100 dark:border-white/8">
            {selectedPillar.activeProject && selectedPillar.activeProjectId ? (
              <div className="p-3.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold text-cyan-deep dark:text-cyan-accent tracking-wider">
                    Project Under Construction
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-silver-100">
                    {selectedPillar.activeProject}
                  </p>
                </div>
                <Link
                  to={`/platforms/${selectedPillar.activeProjectId}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-deep dark:text-cyan-bright hover:underline"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <p className="text-xs text-slate-500 dark:text-silver-500 italic">
                Category in concept and architecture definition. We only launch when an idea solves a genuine problem.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
