"use client";

import React from "react";
import { ArrowRight, Sparkles, Award, Users, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ImageWithBlur from "@/components/ui/ImageWithBlur";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-24 bg-blue-950 text-white overflow-hidden border-b border-blue-900 animate-soft-fade">
      {/* Background Image with Heavy Solid Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithBlur
          src="/photos/a19.jpg"
          alt="Town Hall Public School"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full"
        />
        {/* Heavy solid dark blue overlay per UI Rule */}
        <div className="absolute inset-0 bg-blue-950/85 z-10" />
      </div>

      <Container className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: White & Yellow Typography on Dark Overlay */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-md bg-[#F59E0B] text-blue-950 font-semibold text-xs tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-950" />
              Academic Session 2026–27 • Admissions Open
            </div>

            <h1 className="display-xl text-white tracking-tight mb-6 leading-tight">
              Where Every Child Discovers Their{" "}
              <span className="text-[#F59E0B] block sm:inline">
                Best Self
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal">
              Providing high-quality UP Board English Medium education from PG to Class X in a nurturing environment designed for curiosity, confidence, and lifelong achievement.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <Button href="/admissions" variant="accent" size="lg" className="px-8 py-4 text-base">
                <span>Apply for Admission</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/facilities" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-950 px-8 py-4 text-base">
                Explore Campus Facilities
              </Button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-blue-900/80 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center shrink-0 border border-[#F59E0B]/30">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading font-bold text-white block text-base sm:text-lg">
                    High School
                  </span>
                  <span>PG to Class X</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center shrink-0 border border-[#F59E0B]/30">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading font-bold text-white block text-base sm:text-lg">
                    UP Board
                  </span>
                  <span>English Medium</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center shrink-0 border border-[#F59E0B]/30">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading font-bold text-white block text-base sm:text-lg">
                    Lucknow
                  </span>
                  <span>Est. 1996</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Matte Card with Clean Focus */}
          <div className="lg:col-span-4">
            <div className="bg-blue-900/90 p-6 rounded-2xl border border-blue-800 text-white space-y-4">
              <h3 className="font-heading font-semibold text-lg text-[#F59E0B]">
                Key Highlights
              </h3>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  <span>Interactive Smart Classrooms</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  <span>Activity-Based Foundational Learning</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  <span>Verified Workstations & Science Labs</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  <span>Merit & Need-Based Scholarship Programs</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  <span>Holistic Sports & Cultural Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
