"use client";

import React from "react";
import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ImageWithBlur from "@/components/ui/ImageWithBlur";
import { ACADEMIC_WINGS } from "@/lib/constants";
import { useMobileCarousel } from "@/hooks/useMobileCarousel";

export function AcademicsOverview() {
  const { containerRef, handleTouchStart } = useMobileCarousel(3500);

  const cardImages = [
    { src: "/photos/cc (4).jpeg", pos: "object-top" },
    { src: "/photos/cc (2).jpeg", pos: "object-top" },
    { src: "/photos/cc (6).jpeg", pos: "object-top" },
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-white border-b border-slate-200 animate-soft-fade">
      <Container>
        <SectionHeader
          badge="Academics"
          title="Learning That Inspires Growth"
          highlightText="Inspires"
          subtitle="Our academic approach combines UP Board curriculum rigor with interactive teaching methods that encourage curiosity, creativity, and critical thinking from PG through Class X."
        />

        {/* Mobile Swipeable Carousel Track -> Converts to 3-column Grid on Desktop */}
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onMouseDown={handleTouchStart}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-hide mt-12 relative z-10 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {ACADEMIC_WINGS.map((wing, index) => {
            const imgData = cardImages[index] || { src: "/photos/bb (1).jpg", pos: "object-center" };
            return (
              <div
                key={wing.id}
                className="w-[85vw] sm:w-[320px] shrink-0 snap-center md:w-auto group flex flex-col justify-between p-0 overflow-hidden border border-slate-200 border-l-4 border-l-[#F59E0B] hover:border-blue-900 bg-white transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-none rounded-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <ImageWithBlur
                      src={imgData.src}
                      alt={wing.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 33vw"
                      className={`object-cover ${imgData.pos} w-full h-full transition-transform duration-300 group-hover:scale-[1.02]`}
                    />
                    <div className="absolute inset-0 bg-blue-950/20" />
                    <div className="absolute top-3 right-3">
                      <Badge variant="blue" className="bg-blue-900 text-white font-semibold">
                        {wing.grades}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-900/10 text-blue-900 flex items-center justify-center shrink-0">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <h3 className="heading-2 text-blue-950 font-bold">
                        {wing.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {wing.description}
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {wing.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Button
                    href="/academics"
                    variant="secondary"
                    size="sm"
                    className="w-full justify-between"
                  >
                    <span>Curriculum Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default AcademicsOverview;
