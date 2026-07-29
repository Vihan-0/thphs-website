"use client";

import React, { useState } from "react";
import { ZoomIn } from "lucide-react";
import type { GalleryItem, GalleryCategory } from "@/types";
import { GALLERY_ITEMS } from "@/lib/gallery-data";
import GalleryLightbox from "./GalleryLightbox";
import ImageWithBlur from "@/components/ui/ImageWithBlur";
import { useMobileCarousel } from "@/hooks/useMobileCarousel";

const CATEGORIES: GalleryCategory[] = [
  "All",
  "Digital Scrapbook & Flyers",
  "Academic Milestones",
  "Awards & Achievements",
  "Cultural Events",
  "Campus Life",
];

// Specific focal points for portrait & top-head photos to prevent head cutoff
const FOCAL_POSITIONS: Record<string, string> = {
  "/photos/bb (45).jpg": "object-contain bg-slate-900",
  "/photos/bb (24).jpg": "object-contain bg-slate-900",
  "/photos/cc (3).jpeg": "object-[center_20%]",
  "/photos/cc (3).jpg": "object-[center_20%]",
  "/photos/cc (5).jpeg": "object-top",
  "/photos/cc (5).jpg": "object-top",
  "/photos/cc (7).jpeg": "object-top",
  "/photos/cc (7).jpg": "object-top",
  "/photos/cc (8).jpeg": "object-top",
  "/photos/cc (8).jpg": "object-top",
  "/photos/cc (12).jpeg": "object-[center_20%]",
  "/photos/cc (12).jpg": "object-[center_20%]",
  "/photos/cc (13).jpeg": "object-top",
  "/photos/cc (13).jpg": "object-top",
  "/photos/cc (16).jpeg": "object-top",
  "/photos/cc (16).jpg": "object-top",
  "/photos/cc (19).jpg": "object-contain bg-slate-900",
  "/photos/cc (19).jpeg": "object-contain bg-slate-900",
  "/photos/cc (20).jpg": "object-contain bg-slate-900",
  "/photos/cc (20).jpeg": "object-contain bg-slate-900",
  "/photos/bb (5).jpg": "object-top",
  "/photos/bb (31).jpg": "object-[center_20%]",
  "/photos/bb (8).jpg": "object-top",
  "/photos/bb (3).jpg": "object-top",
};

export function GalleryGrid() {
  const { containerRef, handleTouchStart } = useMobileCarousel(4000);
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="animate-soft-fade">
      {/* Filter Tabs */}
      <div className="flex items-center overflow-x-auto gap-2 mb-8 sm:mb-10 pb-2 sm:pb-0 scrollbar-hide justify-start sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shrink-0 whitespace-nowrap transition-all duration-200 cursor-pointer ${
              selectedCategory === category
                ? "bg-blue-950 text-white border border-blue-950"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Track with Mobile Swipeable Carousel -> Desktop Standard Grid */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onMouseDown={handleTouchStart}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {filteredItems.map((item) => {
          const objectPosClass = FOCAL_POSITIONS[item.src] || "object-center";
          return (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="w-[85vw] sm:w-[300px] shrink-0 snap-center md:w-auto group cursor-pointer rounded-xl border border-slate-200 border-l-4 border-l-[#F59E0B] hover:border-blue-900 bg-white p-2.5 transition-all duration-300 ease-out hover:-translate-y-1.5 overflow-hidden shadow-none"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100">
                <ImageWithBlur
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover ${objectPosClass} w-full h-full transition-transform duration-300 group-hover:scale-[1.02]`}
                />
                <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-blue-950 flex items-center justify-center border border-slate-200">
                    <ZoomIn className="w-5 h-5 text-blue-950" />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <p className="text-xs sm:text-sm font-medium text-blue-950 line-clamp-1">
                  {item.caption || item.alt}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={activeItem}
        items={filteredItems}
        onClose={() => setActiveItem(null)}
        onSelect={(item) => setActiveItem(item)}
      />
    </div>
  );
}

export default GalleryGrid;
