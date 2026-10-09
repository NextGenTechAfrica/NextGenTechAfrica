import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '../common/Button';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'About Us', href: '/about' },
  { name: 'Ecosystem', href: '/ecosystem' },
  { name: 'Platforms', href: '/platforms' },
  { name: 'Vision', href: '/vision' },
  { name: 'Roadmap', href: '/roadmap' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const resolvedTheme = 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isHomeAtTop = location.pathname === '/' && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomeAtTop
          ? 'bg-black/40 backdrop-blur-md py-4 border-b border-white/10'
          : scrolled
          ? 'bg-white/95 dark:bg-black/90 backdrop-blur-md border-b border-slate-200/90 dark:border-white/10 py-3.5 shadow-md dark:shadow-2xl'
          : 'bg-white/90 dark:bg-black/70 backdrop-blur-md py-4 border-b border-slate-200/60 dark:border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with architectural baseline extension matching mockup */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 rounded-lg p-1 transition-transform"
              aria-label="NextGen Technologies Home"
            >
              <img
                src="/nextgen-emblem.png"
                alt="NextGen Technologies Emblem"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,196,212,0.3)]"
              />
              <div className="flex items-baseline tracking-tight font-display">
                <span
                  className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                    isHomeAtTop
                      ? 'text-white'
                      : 'text-slate-900 dark:text-white'
                  }`}
                >
                  NextGen
                </span>
                <span className="text-lg sm:text-xl font-extrabold text-cyan-deep dark:text-cyan-accent ml-0.5 tracking-tight">
                  Tech
                </span>
              </div>
            </Link>

            {/* Signature horizontal hairline extending from logo baseline */}
            <div
              className={`hidden lg:block w-10 xl:w-24 h-px transition-colors ${
                isHomeAtTop
                  ? 'bg-white/20'
                  : 'bg-slate-300 dark:bg-white/20'
              }`}
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm tracking-wide transition-all duration-200 relative py-1 ${
                    isHomeAtTop
                      ? active
                        ? 'text-white font-semibold'
                        : 'text-silver-300 hover:text-white'
                      : active
                      ? 'text-cyan-deep dark:text-white font-semibold'
                      : 'text-slate-600 dark:text-silver-300 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-deep dark:bg-cyan-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Contact Us, Theme Toggle, and Action Button */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-4">
            <Link
              to="/contact"
              className={`text-sm font-medium px-2 py-1.5 transition-colors ${
                isHomeAtTop
                  ? 'text-silver-300 hover:text-white'
                  : 'text-slate-600 dark:text-silver-300 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              Contact Us
            </Link>

            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="!rounded-full px-5 py-2 text-xs font-bold"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Right Controls: Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-accent transition-colors ${
                isHomeAtTop
                  ? 'text-white hover:bg-white/10'
                  : 'text-slate-700 dark:text-silver-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-cyan-deep dark:text-cyan-accent" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden border-b border-slate-200 dark:border-white/10 ${
          mobileMenuOpen
            ? 'max-h-[580px] opacity-100 bg-white/98 dark:bg-dark-950/98 backdrop-blur-xl py-6 px-6 shadow-2xl'
            : 'max-h-0 opacity-0 py-0 px-6 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-slate-700 dark:text-silver-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
          >
            <span>Home</span>
          </Link>

          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  active
                    ? 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-deep dark:text-cyan-bright border border-cyan-200 dark:border-cyan-500/20'
                    : 'text-slate-700 dark:text-silver-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                <span>{item.name}</span>
                {active && <span className="w-2 h-2 rounded-full bg-cyan-deep dark:bg-cyan-accent" />}
              </Link>
            );
          })}

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-slate-700 dark:text-silver-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
          >
            <span>Contact Us</span>
          </Link>

          <div className="pt-3 mt-1 flex flex-col gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center !rounded-full"
              icon={<ArrowUpRight className="w-4 h-4" />}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
