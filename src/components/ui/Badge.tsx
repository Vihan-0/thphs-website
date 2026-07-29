import React from "react";
import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "gold" | "outline" | "placeholder";
  className?: string;
}

export function Badge({
  children,
  variant = "gold",
  className,
}: BadgeProps) {
  const variants = {
    blue: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
    gold: "bg-brand-gold/15 text-brand-gold-hover border-brand-gold/30 font-semibold",
    outline: "border-brand-border text-brand-muted bg-white",
    placeholder: "bg-amber-50 text-amber-800 border-amber-300 font-medium",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs uppercase tracking-wider border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
