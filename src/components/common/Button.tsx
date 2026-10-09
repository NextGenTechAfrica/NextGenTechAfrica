import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-accent focus:ring-offset-2 focus:ring-offset-dark-950 active:scale-[0.98] select-none gap-2';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-6 py-3.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-cyan-accent text-dark-950 font-semibold shadow-cyan-sm hover:bg-cyan-bright hover:shadow-cyan-md hover:-translate-y-0.5 border border-cyan-300/40',
    secondary:
      'bg-white dark:bg-dark-800 text-slate-800 dark:text-silver-100 border border-slate-200 dark:border-white/10 hover:border-cyan-deep dark:hover:border-cyan-accent/50 hover:bg-slate-100 dark:hover:bg-dark-750 hover:text-black dark:hover:text-white hover:-translate-y-0.5 shadow-sm',
    outline:
      'bg-transparent text-slate-700 dark:text-silver-200 border border-slate-300 dark:border-silver-500/30 hover:border-cyan-deep dark:hover:border-cyan-accent hover:text-cyan-deep dark:hover:text-cyan-accent hover:bg-cyan-50 dark:hover:bg-cyan-accent/5',
    ghost:
      'bg-transparent text-slate-600 dark:text-silver-300 hover:text-black dark:hover:text-silver-100 hover:bg-slate-100 dark:hover:bg-white/5',
  }[variant];

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '';

  const combinedStyles = `${baseStyles} ${sizeStyles} ${variantStyles} ${disabledStyles} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
