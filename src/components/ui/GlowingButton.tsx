import React from 'react';

export interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'ghost' | 'outline' | 'dark' | 'orange' | 'cyan' | 'green' | 'purple';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  icon,
  className = '',
  onClick,
  href,
  target,
  rel,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs font-semibold rounded-lg',
    md: 'px-4 py-2 text-sm font-semibold rounded-xl',
    lg: 'px-5 py-2.5 text-base font-semibold rounded-xl',
    xl: 'px-7 py-3 text-base font-semibold rounded-xl',
  };

  const variantClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all',
    dark: 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow transition-all',
    ghost: 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all',
    outline: 'bg-transparent text-slate-700 border border-slate-300 hover:bg-slate-50 transition-all',
    orange: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all',
    cyan: 'bg-sky-600 hover:bg-sky-700 text-white shadow-sm hover:shadow transition-all',
    green: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow transition-all',
    purple: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow transition-all',
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-sans select-none cursor-pointer transition-all duration-150
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};
