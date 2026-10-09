import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers, Code, ShoppingBag, Cpu, ExternalLink, Globe } from 'lucide-react';
import { Platform } from '../../types';
import { StatusBadge } from '../common/StatusBadge';

interface PlatformCardProps {
  platform: Platform;
  featured?: boolean;
}

export const PlatformCard: React.FC<PlatformCardProps> = ({ platform, featured = false }) => {
  const isLive = platform.status === 'LIVE';
  const isFeatured = featured || isLive;

  const getCategoryIcon = () => {
    const iconClass = isLive
      ? 'w-3.5 h-3.5 text-cyan-deep dark:text-cyan-accent'
      : 'w-3.5 h-3.5 text-slate-400 dark:text-silver-500';

    if (platform.id === 'codebridge' || platform.category.toLowerCase().includes('software')) {
      return <Code className={iconClass} />;
    }
    if (platform.id === 'marketbridge' || platform.category.toLowerCase().includes('commerce')) {
      return <ShoppingBag className={iconClass} />;
    }
    if (platform.category.toLowerCase().includes('infrastructure')) {
      return <Cpu className={iconClass} />;
    }
    return <Layers className={iconClass} />;
  };

  return (
    <div
      className={`group relative rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border ${
        isFeatured
          ? 'bg-gradient-to-b from-cyan-50/50 via-white to-white dark:from-dark-850 dark:via-dark-900 dark:to-dark-900 border-cyan-300 dark:border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-400 shadow-md dark:shadow-card hover:shadow-cyan-sm dark:hover:shadow-cyan-md'
          : 'bg-white dark:bg-dark-900/80 border-slate-200 dark:border-white/8 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50/80 dark:hover:bg-dark-850/80 shadow-sm'
      } p-6 sm:p-8`}
    >
      {/* Subtle accent corner glow for featured / live */}
      {isFeatured && (
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/15 transition-colors" />
      )}

      <div>
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <span className="text-xs font-semibold text-slate-500 dark:text-silver-400 tracking-wider uppercase flex items-center gap-1.5">
            {getCategoryIcon()}
            {platform.category}
          </span>
          <StatusBadge status={platform.status} size="sm" />
        </div>

        {/* Platform Title & Badge */}
        <div className="flex items-center gap-2.5">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-silver-100 group-hover:text-cyan-deep dark:group-hover:text-cyan-bright transition-colors">
            {platform.name}
          </h3>
          {isLive && (
            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Platform
            </span>
          )}
        </div>

        {/* Tagline */}
        <p className="mt-2 text-sm font-medium text-slate-700 dark:text-silver-300 leading-snug">
          {platform.tagline}
        </p>

        {/* Description */}
        <p className="mt-4 text-sm text-slate-600 dark:text-silver-400 leading-relaxed">
          {platform.description}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {platform.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-silver-400 border border-slate-200 dark:border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action / Footer */}
      <div className="mt-8 pt-5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-3">
        <span className="text-xs text-slate-500 dark:text-silver-500 font-medium flex items-center gap-1.5">
          {isLive ? (
            <>
              <Globe className="w-3.5 h-3.5 text-cyan-deep dark:text-cyan-accent" />
              <span>Production Deployment</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-slate-400 dark:text-silver-500" />
              <span>Active Sprint</span>
            </>
          )}
        </span>

        <div className="flex items-center gap-3">
          {platform.externalUrl && (
            <a
              href={platform.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-silver-300 hover:text-cyan-deep dark:hover:text-cyan-accent py-1 px-2 rounded hover:bg-slate-100 dark:hover:bg-dark-800 transition-colors"
              title={`Launch ${platform.name} in new tab`}
            >
              <span>Visit Live</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          <Link
            to={`/platforms/${platform.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-deep dark:text-cyan-accent hover:text-cyan-bright group-hover:translate-x-1 transition-all py-1 px-2 -mr-2 rounded focus:outline-none focus:ring-1 focus:ring-cyan-accent"
          >
            <span>Overview</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
