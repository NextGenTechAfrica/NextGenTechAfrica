import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Layers } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = '404 — Page Not Found | NextGen Technologies';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-28 pb-20 px-4 transition-colors duration-250">
      <div className="max-w-md w-full text-center p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10 shadow-card">
        <div className="w-16 h-16 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-500/30 text-cyan-deep dark:text-cyan-accent flex items-center justify-center mx-auto mb-6 text-2xl font-mono font-bold">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-silver-100 mb-2">
          Page Not Found
        </h1>

        <p className="text-sm text-slate-600 dark:text-silver-400 mb-8 leading-relaxed">
          The page or route you're looking for doesn't exist or is currently being built in our next sprint.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />} iconPosition="left">
            Back to Home
          </Button>
          <Button href="/platforms" variant="secondary" size="md" icon={<Layers className="w-4 h-4" />}>
            Explore Platforms
          </Button>
        </div>
      </div>
    </div>
  );
};
