"use client";

import { useEffect, useRef, useState } from "react";

export function useMobileCarousel(intervalMs: number = 3500) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const timer = setInterval(() => {
      // Only auto-scroll on mobile viewports (< 768px) and when not user-paused
      if (window.innerWidth >= 768 || isPaused) return;

      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const isAtEnd = el.scrollLeft >= maxScrollLeft - 15;

      if (isAtEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const cardWidth = el.firstElementChild
          ? (el.firstElementChild as HTMLElement).clientWidth + 16
          : 300;
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [intervalMs, isPaused]);

  const handleTouchStart = () => {
    setIsPaused(true);
    // Resume auto-slide after 8 seconds of inactivity
    setTimeout(() => setIsPaused(false), 8000);
  };

  return {
    containerRef,
    handleTouchStart,
  };
}

export default useMobileCarousel;
