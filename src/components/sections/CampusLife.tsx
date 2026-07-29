"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import ImageWithBlur from "@/components/ui/ImageWithBlur";
import { useMobileCarousel } from "@/hooks/useMobileCarousel";

export function CampusLife() {
  const { containerRef, handleTouchStart } = useMobileCarousel(3800);

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200 animate-soft-fade">
      <Container>
        <SectionHeader
          badge="Campus Life"
          title="Every Day Brings a New Opportunity to Learn"
          highlightText="Opportunity"
          subtitle="From classroom activities and cultural celebrations to sports and community events, campus life helps students build confidence, friendships, and lifelong memories."
        />

        {/* Mobile Swipeable Carousel Track -> Converts to 2-column Grid on Desktop */}
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onMouseDown={handleTouchStart}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 scrollbar-hide mt-12 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {/* Card 1: Creative Workshops mapped to /photos/bb (42).jpg */}
          <div className="w-[85vw] sm:w-[320px] shrink-0 snap-center md:w-auto group rounded-xl overflow-hidden border border-slate-200 border-l-4 border-l-[#F59E0B] hover:border-blue-900 bg-white flex flex-col transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-none">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
              <ImageWithBlur
                src="/photos/bb (42).jpg"
                alt="Holi Mask-Making and Celebration"
                fill
                sizes="(max-width: 768px) 85vw, 50vw"
                className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-blue-950/20" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  Creative Workshops
                </span>
                <h3 className="heading-2 text-blue-950 font-bold mb-2">
                  Art, Crafts & Cultural Celebrations
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Encouraging hands-on creativity, artistic expression, and cultural traditions through festive campus activities.
                </p>
              </div>
              <Button href="/gallery" variant="secondary" size="sm" className="self-start">
                <span>View Full Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

          {/* Card 2: Festival Performances mapped to /photos/bb (5).jpg */}
          <div className="w-[85vw] sm:w-[320px] shrink-0 snap-center md:w-auto group rounded-xl overflow-hidden border border-slate-200 border-l-4 border-l-[#F59E0B] hover:border-blue-900 bg-white flex flex-col transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-none">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
              <ImageWithBlur
                src="/photos/bb (5).jpg"
                alt="Girls in traditional dance attire performing on stage"
                fill
                sizes="(max-width: 768px) 85vw, 50vw"
                className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-blue-950/20" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  Culture & Heritage
                </span>
                <h3 className="heading-2 text-blue-950 font-bold mb-2">
                  Dussehra & Festival Performances
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Nurturing dramatic confidence, musical rhythm, and cultural pride through stage presentations and festival events.
                </p>
              </div>
              <Button href="/events" variant="secondary" size="sm" className="self-start">
                <span>Upcoming Events</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CampusLife;
