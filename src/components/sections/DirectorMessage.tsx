import React from "react";
import { Quote, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import ImageWithBlur from "@/components/ui/ImageWithBlur";
import { DIRECTOR_MESSAGE } from "@/lib/constants";

interface DirectorMessageProps {
  isFull?: boolean;
}

export function DirectorMessage({ isFull = false }: DirectorMessageProps) {
  return (
    <section
      id="director-message"
      className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200 animate-soft-fade"
    >
      <Container>
        <SectionHeader
          badge="Leadership Message"
          title="From the Director's Desk"
          highlightText="Director's"
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-10">
          {/* Left Column: Portrait with strict circular crop isolating Director's face */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-blue-900 bg-slate-200 aspect-square shrink-0 mb-4 shadow-none">
              <ImageWithBlur
                src="/photos/cc (1).jpeg"
                alt="Town Hall Public High School Director"
                fill
                sizes="(max-width: 768px) 224px, 256px"
                className="object-cover object-[center_15%] rounded-full"
              />
            </div>
            <h3 className="font-heading font-bold text-xl text-blue-950">
              Director
            </h3>
            <p className="text-sm text-slate-600 font-medium">
              Town Hall Public High School, Lucknow
            </p>
          </div>

          {/* Right Column: Quote & Editorial Copy */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 border-l-4 border-l-[#F59E0B] relative transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-none">
            <Quote className="w-12 h-12 text-[#F59E0B]/40 absolute top-6 right-6" />

            <div className="prose prose-slate max-w-none text-slate-900 leading-relaxed space-y-4">
              {isFull ? (
                DIRECTOR_MESSAGE.full.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="text-base sm:text-lg text-slate-700">
                    {paragraph}
                  </p>
                ))
              ) : (
                <>
                  <p className="text-base sm:text-lg text-blue-950 font-semibold italic">
                    &ldquo;Welcome to our School Community,&rdquo;
                  </p>
                  <p className="text-base sm:text-lg text-slate-700">
                    At our core, we believe that education is not just a path to individual success, but the ultimate catalyst for community transformation. We understand that true education goes far beyond textbooks and examinations. For us, the classroom is a launching pad for holistic growth and societal upliftment. We are committed to providing an environment where financial barriers do not limit a child&apos;s horizon...
                  </p>
                  <div className="pt-4">
                    <Button
                      href="/about#director-message"
                      variant="primary"
                      size="md"
                    >
                      <span>Read Full Message</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default DirectorMessage;
