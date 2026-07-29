import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { MISSION_STATEMENT } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import DirectorMessage from "@/components/sections/DirectorMessage";
import PrincipalMessage from "@/components/sections/PrincipalMessage";
import Card from "@/components/ui/Card";
import { Compass, Calendar, Award, HeartHandshake } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "About Us",
  description:
    "Discover Town Hall Public High School's mission of character building, holistic education, and equal opportunity in Newazganj, Lucknow.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-brand-blue text-white border-b border-brand-blue-hover">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider text-brand-gold font-semibold block mb-2">
              Institutional Heritage & Values
            </span>
            <h1 className="display-lg text-white mb-4">
              About Town Hall Public High School
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Dedicated to academic excellence, character building, and community transformation in Lucknow from PG to Class X.
            </p>
          </div>
        </Container>
      </section>

      {/* Official Mission Statement */}
      <section className="py-16 sm:py-24 bg-white border-b border-brand-border">
        <Container>
          <SectionHeader
            badge="Our Core Purpose"
            title="Official Mission Statement"
            subtitle="Guiding every academic programme and student initiative at Town Hall Public High School."
          />

          <div className="max-w-4xl mx-auto bg-brand-light p-8 sm:p-12 rounded-3xl border border-brand-border shadow-sm">
            <div className="prose prose-slate max-w-none text-brand-dark leading-relaxed space-y-4 text-base sm:text-lg font-medium">
              {MISSION_STATEMENT.split("\n\n").map((para, idx) => (
                <p key={idx} className="text-slate-800">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Official Vision Statement */}
      <section className="py-16 bg-brand-light border-b border-brand-border">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 sm:p-10 border-l-4 border-l-brand-gold bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="heading-1 text-brand-dark">Institutional Vision</h3>
              </div>
              <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
                To be a beacon of inclusive, transformative education in Uttar Pradesh — cultivating confident young leaders who possess academic mastery, ethical integrity, and a lifelong commitment to uplifting their communities.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Full Official Director's Message */}
      <DirectorMessage isFull={true} />

      {/* Official Principal's Message */}
      <PrincipalMessage />

      {/* School Founding History & Archival Milestones */}
      <section className="py-16 sm:py-24 bg-white border-b border-brand-border">
        <Container>
          <SectionHeader
            badge="Legacy & Journey"
            title="28+ Years of Educational Excellence"
            subtitle="Tracing the milestones of Town Hall Public High School from its inception in 1996 to its present status as a trusted High School institution in Lucknow."
          />

          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-brand-light">
              <div className="flex items-center gap-2 text-brand-blue font-bold text-lg mb-2">
                <Calendar className="w-5 h-5 text-brand-gold" />
                <span>1996</span>
              </div>
              <h4 className="font-heading font-semibold text-brand-dark text-base mb-2">
                Foundation in Newazganj
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Established with a vision to provide accessible, high-quality primary education to children in Newazganj and surrounding Lucknow neighborhoods.
              </p>
            </Card>

            <Card className="p-6 bg-brand-light">
              <div className="flex items-center gap-2 text-brand-blue font-bold text-lg mb-2">
                <Award className="w-5 h-5 text-brand-gold" />
                <span>UP Board Expansion</span>
              </div>
              <h4 className="font-heading font-semibold text-brand-dark text-base mb-2">
                High School Accreditation
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Expanded facilities to include dedicated Science (Physics, Chem, Bio) and Computer laboratories, establishing Class 10 board exam practicals.
              </p>
            </Card>

            <Card className="p-6 bg-brand-light">
              <div className="flex items-center gap-2 text-brand-blue font-bold text-lg mb-2">
                <HeartHandshake className="w-5 h-5 text-brand-gold" />
                <span>Present & Beyond</span>
              </div>
              <h4 className="font-heading font-semibold text-brand-dark text-base mb-2">
                Scholarships & Community Focus
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Continuing our mission as an educational equalizer through merit and need-based financial support, activity-based primary wings, and digital literacy.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
