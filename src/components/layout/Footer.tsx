import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../common/SocialIcons';
import { contactConfig } from '../../config/contactConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-dark-950 border-t border-slate-200 dark:border-white/8 relative z-10 pt-16 pb-12 overflow-hidden transition-colors duration-250">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-deep/30 dark:via-cyan-accent/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-200 dark:border-white/5">
          {/* Brand Column (spans 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group" aria-label="NextGen Technologies Home">
              <img
                src="/nextgen-logo.png"
                alt="NextGen Technologies"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </Link>
            
            <p className="text-xs uppercase tracking-widest text-cyan-deep dark:text-cyan-accent font-semibold">
              BUILDING TODAY / POWERING TOMORROW
            </p>

            <p className="text-slate-600 dark:text-silver-400 text-sm leading-relaxed max-w-sm">
              Building digital platforms and technology for what comes next. An early-stage venture builder creating thoughtful software for learners, builders, and modern communities.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`mailto:${contactConfig.email}`}
                className="w-9 h-9 rounded-lg bg-white dark:bg-dark-850 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent hover:border-cyan-deep/40 dark:hover:border-cyan-accent/40 shadow-sm dark:shadow-none transition-colors"
                aria-label="Email NextGen Technologies"
                title={`Email: ${contactConfig.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={contactConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white dark:bg-dark-850 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent hover:border-cyan-deep/40 dark:hover:border-cyan-accent/40 shadow-sm dark:shadow-none transition-colors"
                aria-label="GitHub Repository Placeholder"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={contactConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white dark:bg-dark-850 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent hover:border-cyan-deep/40 dark:hover:border-cyan-accent/40 shadow-sm dark:shadow-none transition-colors"
                aria-label="LinkedIn Profile Placeholder"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={contactConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white dark:bg-dark-850 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent hover:border-cyan-deep/40 dark:hover:border-cyan-accent/40 shadow-sm dark:shadow-none transition-colors"
                aria-label="Instagram Profile Placeholder"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="w-9 h-9 rounded-lg bg-white dark:bg-dark-850 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent hover:border-cyan-deep/40 dark:hover:border-cyan-accent/40 shadow-sm dark:shadow-none transition-colors"
                aria-label="WhatsApp / Contact Us"
                title="Contact via WhatsApp / Form"
              >
                <MessageCircle className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 dark:text-silver-200 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent transition-colors">
                  About NextGen
                </Link>
              </li>
              <li>
                <Link to="/vision" className="text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent transition-colors">
                  Vision & Principles
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Ecosystem Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 dark:text-silver-200 uppercase tracking-wider">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/ecosystem" className="text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent transition-colors">
                  The Ecosystem Model
                </Link>
              </li>
              <li>
                <Link to="/platforms" className="text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent transition-colors">
                  Platform Showcase
                </Link>
              </li>
              <li>
                <Link to="/platforms/codebridge" className="text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent transition-colors">
                  CodeBridge (Live)
                </Link>
              </li>
              <li>
                <Link to="/platforms/marketbridge" className="text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent transition-colors">
                  MarketBridge (Live)
                </Link>
              </li>
              <li>
                <Link to="/ecosystem#pillars" className="text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent transition-colors">
                  Future Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Status & Humanity Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 dark:text-silver-200 uppercase tracking-wider">
              Building in Public
            </h4>
            <div className="p-3.5 rounded-lg bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse" />
                <span className="text-xs font-medium text-slate-900 dark:text-silver-200">Active Stage</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-silver-400 leading-normal">
                We're early and still building. Products are taking shape one focused iteration at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-silver-500">
          <p>© 2026 NextGen Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400 dark:text-silver-600">One company. Multiple technologies. One ecosystem.</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-600 dark:text-silver-400 hover:text-cyan-deep dark:hover:text-cyan-accent transition-colors p-1.5 focus:outline-none"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
