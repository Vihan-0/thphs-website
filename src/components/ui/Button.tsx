import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-brand-blue text-white hover:bg-brand-blue-hover shadow-sm focus:ring-brand-blue",
    secondary:
      "bg-white text-brand-dark border border-brand-border hover:bg-brand-light hover:border-slate-400 focus:ring-brand-blue",
    accent:
      "bg-brand-gold text-brand-dark font-semibold hover:bg-brand-gold-hover shadow-sm focus:ring-brand-gold",
    outline:
      "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white focus:ring-brand-blue",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const combinedClasses = clsx(baseClasses, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = href.startsWith("http://") || href.startsWith("https://");
    const isSpecial = href.startsWith("mailto:") || href.startsWith("tel:");

    if (isExternal || isSpecial) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;
