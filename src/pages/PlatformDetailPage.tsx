import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Flame,
  Target,
  RotateCcw,
  Brain,
  BarChart2,
  Zap,
  FolderTree,
  CheckCircle,
  BookOpen,
  MessageSquare,
  Layers,
  Sparkles,
  Milestone,
  CheckCircle2,
  Mail,
  Code,
  ShieldCheck,
  ShoppingBag,
  Lock,
  Briefcase,
  Globe,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon } from '../components/common/SocialIcons';
import { getPlatformById } from '../data/platformsData';
import { StatusBadge } from '../components/common/StatusBadge';
import { Button } from '../components/common/Button';

export const PlatformDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const platform = getPlatformById(id || 'codebridge');

  useEffect(() => {
    if (platform) {
      document.title = `${platform.name} — Built by NextGen Technologies`;
    } else {
      document.title = 'Platform Not Found — NextGen Technologies';
    }
    window.scrollTo(0, 0);
  }, [platform]);

  if (!platform) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center pt-28 pb-20">
        <div className="max-w-md text-center p-8 rounded-3xl bg-dark-900 border border-white/10">
          <h2 className="text-2xl font-bold text-silver-100">Platform Not Found</h2>
          <p className="mt-2 text-sm text-silver-400">
            The platform you're searching for hasn't been announced or doesn't exist yet.
          </p>
          <div className="mt-6">
            <Button href="/platforms" variant="primary" size="md">
              Back to Platforms
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const getFeatureIcon = (iconName?: string) => {
    const className = 'w-5 h-5 text-cyan-deep dark:text-cyan-accent';
    switch (iconName) {
      case 'Code':
        return <Code className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      case 'Lock':
        return <Lock className={className} />;
      case 'Briefcase':
        return <Briefcase className={className} />;
      case 'Globe':
        return <Globe className={className} />;
      case 'Calendar':
        return <Calendar className={className} />;
      case 'Flame':
        return <Flame className={className} />;
      case 'Target':
        return <Target className={className} />;
      case 'RotateCcw':
        return <RotateCcw className={className} />;
      case 'Brain':
        return <Brain className={className} />;
      case 'BarChart2':
        return <BarChart2 className={className} />;
      case 'Zap':
        return <Zap className={className} />;
      case 'FolderTree':
        return <FolderTree className={className} />;
      case 'CheckCircle':
        return <CheckCircle className={className} />;
      case 'BookOpen':
        return <BookOpen className={className} />;
      case 'MessageSquare':
        return <MessageSquare className={className} />;
      case 'Layers':
      default:
        return <Layers className={className} />;
    }
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden transition-colors duration-250">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-accent/6 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Navigation & Verification Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            to="/platforms"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Platforms</span>
          </Link>

          {/* Official Verification Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10 shadow-sm text-xs text-slate-700 dark:text-silver-300">
            <img src="/nextgen-logo.png" alt="NextGen" className="h-4 w-auto object-contain" />
            <span className="text-slate-400 dark:text-silver-500 font-light">•</span>
            <span className="font-semibold text-slate-900 dark:text-silver-200">Built by NextGen Technologies</span>
          </div>
        </div>

        {/* Platform Hero Banner */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-dark-850 dark:via-dark-900 dark:to-dark-950 border border-cyan-500/30 shadow-card dark:shadow-none mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold text-slate-700 dark:text-silver-400 uppercase tracking-widest px-3 py-1 rounded-full bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none">
                {platform.category}
              </span>
              <StatusBadge status={platform.status} size="sm" />
              {platform.status === 'LIVE' && (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live in Production
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight">
              {platform.name}
            </h1>

            <p className="text-lg sm:text-xl text-cyan-deep dark:text-cyan-bright font-medium leading-relaxed">
              {platform.tagline}
            </p>

            <p className="text-base text-slate-700 dark:text-silver-300 leading-relaxed font-normal">
              {platform.description}
            </p>

            {/* Direct Platform Launch CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {platform.externalUrl && (
                <a
                  href={platform.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-cyan-deep to-cyan-bright text-white shadow-cyan-md hover:shadow-cyan-lg hover:scale-[1.02] transition-all"
                >
                  <Globe className="w-4 h-4" />
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>
              )}

              {platform.githubUrl && (
                <a
                  href={platform.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm bg-slate-100 dark:bg-dark-800 text-slate-800 dark:text-silver-200 border border-slate-300 dark:border-white/10 hover:border-cyan-500/40 hover:bg-slate-200 dark:hover:bg-dark-750 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            {/* Platform Tags */}
            <div className="pt-2 flex flex-wrap gap-2">
              {platform.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-md bg-white dark:bg-dark-800/80 text-slate-700 dark:text-silver-400 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* The Problem & The Idea (Comparative Split) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* The Problem */}
          <div className="p-8 rounded-3xl bg-white dark:bg-dark-900/70 border border-slate-200 dark:border-white/8 shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>THE FRICTION</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-silver-100 tracking-tight mb-4">
                The Problem
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-silver-300 leading-relaxed">
                {platform.problem}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 text-xs text-slate-500 dark:text-silver-400">
              Identifying structural breakdowns in current digital workflows.
            </div>
          </div>

          {/* The Idea / Solution */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-50/60 via-white to-cyan-50/30 dark:from-dark-850 dark:via-dark-900 dark:to-dark-900 border border-cyan-200 dark:border-cyan-500/30 shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/15 border border-cyan-300 dark:border-cyan-500/30 text-cyan-deep dark:text-cyan-accent text-xs font-semibold uppercase tracking-wider mb-4">
                <span>OUR ARCHITECTURAL RESPONSE</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-silver-100 tracking-tight mb-4">
                The Idea
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-silver-200 leading-relaxed font-normal">
                {platform.idea}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-cyan-100 dark:border-cyan-500/10 text-xs text-cyan-deep dark:text-cyan-accent font-medium">
              Engineered for measurable impact, scalability, and security.
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mb-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold text-cyan-deep dark:text-cyan-accent uppercase tracking-widest">
              CAPABILITIES & WORKFLOWS
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-silver-100 tracking-tight mt-1">
              Engineered Features
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-silver-400">
              Thoughtfully architected to solve operational bottlenecks and deliver seamless user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platform.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-dark-900/80 border border-slate-200 dark:border-white/8 hover:border-cyan-500/40 shadow-sm dark:shadow-none transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-4">
                    {getFeatureIcon(feature.iconName)}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-silver-100 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-silver-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Status & Future Direction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Current Development Status (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white dark:bg-dark-900/80 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none space-y-5">
            <div className="flex items-center gap-2">
              <Milestone className="w-5 h-5 text-cyan-deep dark:text-cyan-accent" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-silver-100">
                Where We Stand Today
              </h3>
            </div>

            <p className="text-sm text-slate-700 dark:text-silver-300 leading-relaxed">
              {platform.developmentStatus}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-950 border border-cyan-500/20 space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-cyan-deep dark:text-cyan-accent">
                Current Active Milestone
              </span>
              <p className="text-sm font-semibold text-slate-900 dark:text-silver-100">
                {platform.currentMilestone}
              </p>
            </div>
          </div>

          {/* Future Direction (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white dark:bg-dark-900/80 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none space-y-5">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-slate-500 dark:text-silver-300" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-silver-100">
                Future Direction
              </h3>
            </div>

            <p className="text-sm text-slate-600 dark:text-silver-400 leading-relaxed">
              {platform.futureDirection}
            </p>

            <div className="pt-2">
              <p className="text-xs text-slate-500 italic">
                Platform enhancements are governed by real user feedback, data integrity, and long-term ecosystem synergy.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-dark-850 dark:to-dark-900 border border-cyan-500/40 shadow-card dark:shadow-none text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-deep dark:text-cyan-accent mb-4">
            <Mail className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-silver-100">
            Connect Regarding {platform.name}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-silver-300 max-w-xl leading-relaxed">
            Interested in deploying custom digital software through CodeBridge, joining MarketBridge as a verified dealer, or exploring enterprise integrations? We are excited to collaborate.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Button
              href={`/contact?subject=${encodeURIComponent(platform.name + ' Inquiry / Partnership')}`}
              variant="primary"
              size="lg"
            >
              Get in Touch Regarding {platform.name}
            </Button>
            {platform.externalUrl && (
              <Button href={platform.externalUrl} isExternal variant="secondary" size="lg">
                Open {platform.name}
              </Button>
            )}
            <Button href="/platforms" variant="secondary" size="lg">
              Explore All Platforms
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
