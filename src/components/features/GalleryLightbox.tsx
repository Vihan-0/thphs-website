"use client";

import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/types";
import ImageWithBlur from "@/components/ui/ImageWithBlur";

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export function GalleryLightbox({
  item,
  items,
  onClose,
  onSelect,
}: GalleryLightboxProps) {
  const currentIndex = items.findIndex((i) => i.id === item?.id);

  const handlePrev = () => {
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = () => {
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item, items, currentIndex]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 animate-soft-fade">
      {/* Close Trigger */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none cursor-pointer"
        aria-label="Close image modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Trigger */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Trigger */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Frame */}
      <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
          <ImageWithBlur
            src={item.src}
            alt={item.alt}
            fill
            sizes="100vw"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="mt-4 text-center text-white">
          <span className="text-xs uppercase tracking-wider text-[#F59E0B] font-bold block mb-1">
            {item.category}
          </span>
          <p className="text-sm sm:text-base font-semibold">
            {item.caption || item.alt}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GalleryLightbox;
