import React from "react";
import Badge from "./Badge";
import { clsx } from "clsx";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  highlightText,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  // If highlightText is provided, wrap it in a yellow span
  const renderTitle = () => {
    if (!highlightText || !title.includes(highlightText)) {
      return title;
    }
    const parts = title.split(highlightText);
    return (
      <>
        {parts[0]}
        <span className="text-[#F59E0B]">{highlightText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={clsx(
        "mb-10 sm:mb-12 max-w-3xl",
        align === "center" ? "mx-auto text-center flex flex-col items-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div className="mb-3">
          <Badge variant="gold">{badge}</Badge>
        </div>
      )}
      <h2 className="heading-1 text-blue-950 font-bold tracking-tight">{renderTitle()}</h2>
      {/* Accent Geometry line */}
      <div className="w-12 h-1 bg-[#F59E0B] rounded-full my-3" />
      {subtitle && (
        <p className="mt-2 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
