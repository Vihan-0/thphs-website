"use client";

import React from "react";
import { GraduationCap, Globe, Heart } from "lucide-react";
import Container from "@/components/ui/Container";
import ImageWithBlur from "@/components/ui/ImageWithBlur";
import { VALUE_PILLARS } from "@/lib/constants";
import { useMobileCarousel } from "@/hooks/useMobileCarousel";

export function WhyChooseUs() {
  const { containerRef, handleTouchStart } = useMobileCarousel(3600);

  const iconMap = {
    GraduationCap,
    Globe,
    Heart,
  };

  return (
    <section className="relative py-20 lg:py-24 bg-[#F59E0B] text-blue-950 border-b border-amber-500 animate-soft-fade">
      <Container>
        {/* Structural Yellow Header with Dark Blue Typography */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-wider text-blue-950 font-bold px-3 py-1 bg-white/40 rounded inline-block mb-3">
            Why Town Hall Public High School
          </span>
          <h2 className="display-lg text-blue-950 font-bold tracking-tight mb-4">
            More Than a School—A <span className="text-white underline decoration-blue-950 decoration-4">Foundation</span> for Life
          </h2>
          <div className="w-12 h-1 bg-blue-950 rounded-full mb-4" />
          <p className="text-base sm:text-lg text-blue-900 font-medium leading-relaxed">
            At Town Hall Public High School, learning goes beyond textbooks. Every child is encouraged to think independently, grow confidently, and contribute meaningfully to society.
          </p>
        </div>

        {/* Structural Overlap Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Card Grid with Mobile Swipeable Track */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onTouchStart={handleTouchStart}
              onMouseDown={handleTouchStart}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-1 md:overflow-visible md:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {VALUE_PILLARS.map((pillar) => {
                const IconComponent = iconMap[pillar.icon as keyof typeof iconMap] || GraduationCap;
                return (
                  <div
                    key={pillar.id}
                    className="w-[85vw] sm:w-[320px] shrink-0 snap-center md:w-auto flex flex-col sm:flex-row items-start gap-5 p-6 bg-white rounded-xl border-2 border-blue-950 border-l-4 border-l-blue-950 text-blue-950 shadow-none transition-all duration-300 ease-out hover:-translate-y-1.5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-950 text-[#F59E0B] flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="heading-2 text-blue-950 font-bold mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Feature Image: /photos/cc (13).jpeg (Girl giving welcome speech at podium) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-blue-950 bg-blue-950 shadow-none transition-all duration-300 hover:-translate-y-1.5">
              <ImageWithBlur
                src="/photos/cc (13).jpeg"
                alt="Student giving welcome speech at the podium"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_42%] w-full h-full"
              />
              <div className="absolute inset-0 bg-blue-950/30" />
              <div className="absolute bottom-0 inset-x-0 bg-blue-950 p-4 text-white">
                <p className="font-heading font-bold text-base text-[#F59E0B]">
                  Confidence & Student Leadership
                </p>
                <p className="text-xs text-slate-200">
                  Fostering articulate communication, public speaking, and self-assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
