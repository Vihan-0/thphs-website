import React from "react";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ImageWithBlur from "@/components/ui/ImageWithBlur";

export function PrincipalMessage() {
  return (
    <section
      id="principal-message"
      className="py-20 lg:py-24 bg-white border-b border-slate-200 animate-soft-fade"
    >
      <Container>
        <SectionHeader
          badge="Academic Leadership"
          title="From the Principal's Desk"
          highlightText="Principal's"
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-10">
          {/* Left Column: Principal Portrait */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-4 border-blue-900 bg-slate-200 aspect-square shrink-0 mb-4 shadow-none">
              <ImageWithBlur
                src="/photos/bb (25).jpg"
                alt="Town Hall Public High School Principal"
                fill
                sizes="(max-width: 768px) 224px, 256px"
                className="object-cover object-top rounded-2xl"
              />
            </div>
            <h3 className="font-heading font-bold text-xl text-blue-950">
              Principal
            </h3>
            <p className="text-sm text-slate-600 font-medium">
              Town Hall Public High School, Lucknow
            </p>
          </div>

          {/* Right Column: Principal's Statement Card */}
          <div className="lg:col-span-8 bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 border-l-4 border-l-[#F59E0B] relative transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-none">
            <Quote className="w-12 h-12 text-[#F59E0B]/40 absolute top-6 right-6" />

            <div className="prose prose-slate max-w-none text-slate-900 leading-relaxed space-y-4">
              <p className="text-base sm:text-lg text-blue-950 font-semibold italic">
                &ldquo;Nurturing Excellence, Character & Compassion,&rdquo;
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Our focus is on creating a nurturing environment where academic rigor meets character development. We strive to empower every student to reach their full potential, instilling values of discipline, curiosity, and ethical responsibility. Through dedicated faculty mentorship and holistic learning experiences, we prepare our young minds to excel in board examinations and step confidently into the future.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PrincipalMessage;
