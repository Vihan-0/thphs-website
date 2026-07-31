"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Quote,
  GraduationCap,
  Stethoscope,
  Sparkles,
  Building2,
  BookOpen,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ImageWithBlur from "@/components/ui/ImageWithBlur";

export const ALUMNI_DATA = [
  {
    id: "a1",
    name: "Ridhita Raj",
    batch: "Class of 2018–19",
    role: "Founder of Trinity Pranic Healing & Meditation Centre, Lucknow. Associate Certified Pranic Healer, Counsellor & Animal Telepathist.",
    image: "/photos/Al (1).jpeg",
    focalPos: "object-[center_18%]",
    icon: Sparkles,
    quote:
      "Town Hall Public School laid the foundation of who I am today. Serving as Head Girl and participating in cultural events gave me the confidence to pursue my dreams. My teachers didn’t just educate me; they believed in me. To every THPS student: embrace every opportunity. The lessons you learn here will become the foundation for your future.",
  },
  {
    id: "a2",
    name: "Mohd Sadiq Shaikh",
    batch: "Class of 2020–2021 (10th Standard)",
    role: "MBBS 2nd-Year Student at UPUMS, Saifai, Etawah.",
    image: "/photos/Al (2).jpg",
    focalPos: "object-[75%_25%]",
    icon: Stethoscope,
    quote:
      "I sincerely believe that my school played a vital role in helping me achieve my dream of becoming a doctor. THPHS not only provided me with quality education but also shaped my personality, built my confidence, and taught me the value of hard work and discipline. I will always be grateful to my teachers for their constant guidance and support.",
  },
  {
    id: "a3",
    name: "Vidhi & Sunidhi",
    batch: "Session 2019-20",
    role: "THPHS Alumni",
    image: "/photos/pp (1).jpeg",
    focalPos: "object-center",
    icon: Users,
    quote:
      "This school holds a special place in our hearts as the foundation of our learning and growth. The supportive teachers always encouraged us and made complex subjects easy to understand. We made wonderful friends and shared countless joyful memories. The campus featured spacious classrooms and a great play area. Even though we have moved on, the valuable life skills and education we received here will stay with us forever.",
  },
  {
    id: "a4",
    name: "Adarsh Verma",
    batch: "Session 2014-15",
    role: "Deputy Manager at Bandhan Bank Ltd., Hewette Road Branch, Lko.",
    image: "/photos/pp (2).jpeg",
    focalPos: "object-top",
    icon: Building2,
    quote:
      "My school (Town Hall Family) has played an important role in shaping my personality and values. I studied here from Class 3rd to Class 10th, and those years were filled with learning, growth, and unforgettable memories. The dedicated teachers, supportive environment, and emphasis on discipline and character development helped me become a confident and responsible individual. No matter where life takes me, I will always remain grateful and proud to be a part of this wonderful institution.",
  },
  {
    id: "a5",
    name: "Aman Mishra",
    batch: "Session 2013-14",
    role: "International Science & Math Educator",
    image: "/photos/pp (3).jpeg",
    focalPos: "object-top",
    icon: BookOpen,
    quote:
      "Today, I’m an educator teaching science and math to students across India and abroad in the USA, Australia, and New Zealand. My journey truly began at Town Hall Public School, a fantastic place that pairs high academic standards with an encouraging environment. The real turning point was the incredible faculty. They didn't just teach; they sparked a deep curiosity that inspired me to become a teacher myself. Every day I connect with my students, I'm proud to carry forward the legacy I received at Town Hall.",
  },
];

export function AlumniSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % ALUMNI_DATA.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + ALUMNI_DATA.length) % ALUMNI_DATA.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const current = ALUMNI_DATA[currentIndex];
  const IconComp = current.icon;

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200 animate-soft-fade">
      <Container>
        <SectionHeader
          badge="Alumni Success & Testimonials"
          title="Voices of Pride: Alumni Success Stories"
          highlightText="Alumni"
          subtitle="Discover how Town Hall Public High School shaped the character, confidence, and career journeys of our distinguished graduates."
        />

        <div
          className="relative w-full max-w-4xl mx-auto mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Testimonial Card */}
          <div
            key={current.id}
            className="group flex flex-col justify-between p-6 sm:p-10 rounded-2xl border border-slate-200 border-l-4 border-l-[#F59E0B] hover:border-blue-900 bg-slate-50/80 transition-all duration-500 ease-out shadow-sm relative min-h-[320px]"
          >
            <Quote className="w-10 h-10 sm:w-14 sm:h-14 text-[#F59E0B]/20 absolute top-6 right-6 pointer-events-none" />

            <div>
              {/* Alumni Photo Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 mb-6">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-3 border-blue-900 shadow-md bg-slate-900 shrink-0 ring-4 ring-blue-900/10">
                  <ImageWithBlur
                    src={current.image}
                    alt={current.name}
                    fill
                    sizes="(max-width: 640px) 112px, 144px"
                    className={`object-cover ${current.focalPos || "object-top"} w-full h-full transition-transform duration-300 group-hover:scale-105`}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-blue-950">
                    {current.name}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-800 bg-amber-500/15 px-3 py-1 rounded-full border border-amber-500/25 mt-2 self-center sm:self-start">
                    <GraduationCap className="w-4 h-4 text-amber-600" />
                    <span>{current.batch}</span>
                  </div>
                </div>
              </div>

              {/* Quote Body */}
              <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed italic mb-6">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>

            {/* Role Footer */}
            <div className="pt-4 border-t border-slate-200 flex items-start gap-2.5 text-xs sm:text-sm text-blue-950 font-semibold bg-white/70 p-3 rounded-xl border border-slate-200/60">
              <IconComp className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
              <span className="leading-snug">{current.role}</span>
            </div>
          </div>

          {/* Controls & Pagination */}
          <div className="flex items-center justify-between mt-6 px-2">
            {/* Arrow Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                aria-label="Previous story"
                className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next story"
                className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all shadow-sm active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {ALUMNI_DATA.map((alumnus, idx) => (
                <button
                  key={alumnus.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-blue-900"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AlumniSpotlight;
