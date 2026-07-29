import React from "react";
import { Quote, GraduationCap, Stethoscope, Sparkles } from "lucide-react";
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
];

export function AlumniSpotlight() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200 animate-soft-fade">
      <Container>
        <SectionHeader
          badge="Alumni Success & Testimonials"
          title="Voices of Pride: Alumni Success Stories"
          highlightText="Alumni"
          subtitle="Discover how Town Hall Public High School shaped the character, confidence, and career journeys of our distinguished graduates."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-12">
          {ALUMNI_DATA.map((alumnus) => {
            const IconComp = alumnus.icon;
            return (
              <div
                key={alumnus.id}
                className="group flex flex-col justify-between p-7 sm:p-10 rounded-2xl border border-slate-200 border-l-4 border-l-[#F59E0B] hover:border-blue-900 bg-slate-50/70 transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-sm relative"
              >
                <Quote className="w-12 h-12 text-[#F59E0B]/20 absolute top-6 right-6 pointer-events-none" />

                <div>
                  {/* Larger Prominent Alumni Image Header */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 mb-6">
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-3 border-blue-900 shadow-md bg-slate-900 shrink-0 ring-4 ring-blue-900/10">
                      <ImageWithBlur
                        src={alumnus.image}
                        alt={alumnus.name}
                        fill
                        sizes="(max-width: 640px) 112px, 144px"
                        className={`object-cover ${alumnus.focalPos} w-full h-full transition-transform duration-300 group-hover:scale-105`}
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-blue-950">
                        {alumnus.name}
                      </h3>
                      <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-800 bg-amber-500/15 px-3 py-1 rounded-full border border-amber-500/25 mt-2 self-center sm:self-start">
                        <GraduationCap className="w-4 h-4 text-amber-600" />
                        <span>{alumnus.batch}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                    &ldquo;{alumnus.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-start gap-2.5 text-xs sm:text-sm text-blue-950 font-semibold bg-white/60 p-3 rounded-xl border border-slate-200/60">
                  <IconComp className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span className="leading-snug">{alumnus.role}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default AlumniSpotlight;
