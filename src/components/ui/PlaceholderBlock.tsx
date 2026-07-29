import React from "react";
import { Info } from "lucide-react";
import Card from "./Card";

interface PlaceholderBlockProps {
  title: string;
  placeholderText: string;
  className?: string;
}

/**
 * Placeholder component enforcing PROJECT_BIBLE.md §11 Governance Protocol.
 * Gracefully renders unverified content or pending client confirmation tags.
 */
export function PlaceholderBlock({
  title,
  placeholderText,
  className = "",
}: PlaceholderBlockProps) {
  return (
    <Card
      hoverEffect={false}
      className={`bg-amber-50/60 border-amber-200 p-6 ${className}`}
    >
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
        <div>
          <h3 className="font-heading text-base font-semibold text-amber-900 mb-1">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-amber-800/90 leading-relaxed font-mono">
            {placeholderText}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default PlaceholderBlock;
