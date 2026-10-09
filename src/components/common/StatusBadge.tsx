import React from 'react';
import { PlatformStatus } from '../../types';

interface StatusBadgeProps {
  status: PlatformStatus | string;
  size?: 'sm' | 'md' | 'lg';
  showPulse?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = 'md',
  showPulse = true,
}) => {
  const normalizedStatus = status.toUpperCase();

  const getStyles = () => {
    switch (normalizedStatus) {
      case 'LIVE':
        return {
          bg: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300',
          dot: 'bg-emerald-500 dark:bg-emerald-400',
          pulse: 'bg-emerald-400',
        };
      case 'IN DEVELOPMENT':
        return {
          bg: 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-300 dark:border-cyan-500/40 text-cyan-800 dark:text-cyan-300',
          dot: 'bg-cyan-600 dark:bg-cyan-accent',
          pulse: 'bg-cyan-400',
        };
      case 'COMING SOON':
        return {
          bg: 'bg-slate-100 dark:bg-slate-900/80 border-slate-300 dark:border-slate-700/60 text-slate-700 dark:text-slate-300',
          dot: 'bg-slate-500 dark:bg-slate-400',
          pulse: 'bg-slate-400',
        };
      case 'CONCEPT':
        return {
          bg: 'bg-zinc-100 dark:bg-zinc-900/70 border-zinc-300 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-400',
          dot: 'bg-zinc-500',
          pulse: 'bg-zinc-500',
        };
      default:
        return {
          bg: 'bg-slate-100 dark:bg-dark-800 border-slate-200 dark:border-white/10 text-slate-700 dark:text-silver-300',
          dot: 'bg-slate-500 dark:bg-silver-400',
          pulse: 'bg-slate-400 dark:bg-silver-400',
        };
    }
  };

  const styles = getStyles();

  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-0.5 tracking-wider',
    md: 'text-xs px-3 py-1 tracking-wider',
    lg: 'text-sm px-4 py-1.5 tracking-wider',
  }[size];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full font-medium uppercase border ${styles.bg} ${sizeClasses} backdrop-blur-sm transition-all duration-200`}
    >
      <span className="relative flex h-2 w-2">
        {showPulse && normalizedStatus === 'IN DEVELOPMENT' && (
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${styles.pulse}`}
          />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${styles.dot}`}
        />
      </span>
      <span>{normalizedStatus}</span>
    </span>
  );
};
