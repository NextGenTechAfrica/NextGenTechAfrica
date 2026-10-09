import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Laptop, Check } from 'lucide-react';
import { useTheme, Theme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md';
  showDropdown?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  size = 'sm',
  showDropdown = true,
}) => {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
    {
      value: 'light',
      label: 'Light Mode',
      icon: <Sun className="w-3.5 h-3.5 text-amber-500" />,
    },
    {
      value: 'dark',
      label: 'Dark Mode',
      icon: <Moon className="w-3.5 h-3.5 text-cyan-400" />,
    },
    {
      value: 'system',
      label: 'System Sync',
      icon: <Laptop className="w-3.5 h-3.5 text-slate-400 dark:text-silver-400" />,
    },
  ];

  const getCurrentIcon = () => {
    if (theme === 'system') {
      return <Laptop className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />;
    }
    if (resolvedTheme === 'dark') {
      return <Moon className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />;
    }
    return <Sun className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />;
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <div className="flex items-center">
        {/* Main Quick Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          className={`relative inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-accent ${
            size === 'sm' ? 'w-8 h-8' : 'w-9 h-9'
          } ${
            resolvedTheme === 'dark'
              ? 'bg-dark-850/90 hover:bg-dark-800 text-cyan-accent border border-white/10 shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-800 hover:text-cyan-deep border border-slate-200 shadow-sm'
          } ${className}`}
          aria-label={`Current theme: ${theme}. Click to switch theme.`}
          title={`Theme: ${theme.toUpperCase()} (Click to toggle, right-click for options)`}
          onContextMenu={(e) => {
            e.preventDefault();
            setMenuOpen((prev) => !prev);
          }}
        >
          <span className="sr-only">Toggle theme</span>
          <div className="flex items-center justify-center">
            {getCurrentIcon()}
          </div>
        </button>

        {/* Optional Dropdown Arrow Button for explicitly choosing Light / Dark / System */}
        {showDropdown && (
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`-ml-2 pl-2 pr-1.5 py-1 text-[10px] font-mono rounded-r-full transition-colors flex items-center gap-0.5 ${
              resolvedTheme === 'dark'
                ? 'text-silver-400 hover:text-white hover:bg-white/5'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
            aria-label="Open theme options menu"
            title="Choose Light, Dark, or System mode"
          >
            <span className="text-[9px] uppercase tracking-wider hidden sm:inline-block">
              {theme}
            </span>
            <svg
              className={`w-3 h-3 transition-transform ${menuOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl py-1.5 z-50 shadow-xl border bg-white dark:bg-dark-900 border-slate-200 dark:border-white/10 backdrop-blur-md animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600 dark:text-silver-400 border-b border-slate-100 dark:border-white/5">
            Appearance
          </div>

          <div className="py-1">
            {options.map((opt) => {
              const isSelected = theme === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    setTheme(opt.value);
                    setMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors ${
                    isSelected
                      ? 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-deep dark:text-cyan-bright font-semibold'
                      : 'text-slate-700 dark:text-silver-300 hover:bg-slate-100 dark:hover:bg-dark-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {opt.icon}
                    <span>{opt.label}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-cyan-deep dark:text-cyan-accent" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Segmented Control for Mobile Menu & Settings Panels
 */
export const ThemeSegmentedControl: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`p-1 rounded-xl bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-white/10 flex items-center gap-1 ${className}`}>
      <button
        type="button"
        onClick={() => setTheme('light')}
        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
          theme === 'light'
            ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
            : 'text-slate-600 dark:text-silver-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <Sun className="w-3.5 h-3.5 text-amber-500" />
        <span>Light</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
          theme === 'dark'
            ? 'bg-dark-800 text-white shadow-sm border border-white/10'
            : 'text-slate-600 dark:text-silver-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <Moon className="w-3.5 h-3.5 text-cyan-accent" />
        <span>Dark</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme('system')}
        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
          theme === 'system'
            ? 'bg-white dark:bg-dark-800 text-cyan-deep dark:text-cyan-accent shadow-sm border border-slate-200 dark:border-white/10'
            : 'text-slate-600 dark:text-silver-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <Laptop className="w-3.5 h-3.5" />
        <span>System</span>
      </button>
    </div>
  );
};
