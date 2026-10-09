import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  center?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  center = true,
  className = '',
}) => {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-cyan-100/80 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 text-cyan-deep dark:text-cyan-accent text-xs font-semibold uppercase tracking-widest shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-deep dark:bg-cyan-accent animate-pulse" />
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-silver-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
