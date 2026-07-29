import React from "react";
import { ArrowRight, PhoneCall } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ImageWithBlur from "@/components/ui/ImageWithBlur";

export function AdmissionsCTA() {
  return (
    <section className="relative py-20 lg:py-24 bg-slate-50 border-b border-slate-200 animate-soft-fade">
      <Container className="relative z-10">
        <div className="relative bg-blue-950 text-white rounded-2xl border border-blue-900 border-l-4 border-l-[#F59E0B] overflow-hidden shadow-none transition-all duration-300">
          {/* Background Image: /photos/bb (15).jpg with object-[center_30%] focal point */}
          <div className="absolute inset-0 z-0">
            <ImageWithBlur
              src="/photos/cc (14).jpeg"
              alt="Girl praying beautifully in the sun"
              fill
              sizes="100vw"
              className="object-cover object-center w-full h-full"
            />
            {/* Very dark matte overlay to obscure noise but keep civic award faces visible */}
            <div className="absolute inset-0 bg-blue-950/85 z-10" />
          </div>

          <div className="relative z-20 p-8 sm:p-12 md:p-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider block mb-3">
              Enroll for 2026–27 Academic Session
            </span>
            <h2 className="heading-1 sm:display-lg text-white font-bold mb-4">
              Begin Your Child&apos;s <span className="text-[#F59E0B]">Journey</span> with Town Hall Public High School
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto">
              Admissions are open for the current academic session from PG to Class X. Visit our campus in Newazganj, Lucknow, meet our educators, and experience our learning environment firsthand.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/admissions" variant="accent" size="lg" className="w-full sm:w-auto px-8 py-3.5">
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-950 px-8 py-3.5">
                <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
                <span>Contact Admissions Office</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AdmissionsCTA;
