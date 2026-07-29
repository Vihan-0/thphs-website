"use client";

import React, { useState } from "react";
import { EVENTS_DATA } from "@/lib/events-data";
import EventCard from "@/components/features/EventCard";

const CATEGORIES = ["All", "Academic", "Cultural & Observances"] as const;

export function EventsFeed() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredEvents =
    selectedCategory === "All"
      ? EVENTS_DATA
      : EVENTS_DATA.filter((e) => e.category === selectedCategory);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex items-center overflow-x-auto gap-2 mb-8 sm:mb-10 pb-2 sm:pb-0 scrollbar-hide justify-start sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shrink-0 whitespace-nowrap transition-all duration-200 cursor-pointer ${
              selectedCategory === cat
                ? "bg-blue-950 text-white border border-blue-950"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventsFeed;
