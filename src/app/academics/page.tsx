import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { ACADEMIC_WINGS, SCHOOL } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { BookOpen, CheckCircle2, ArrowRight, Award, Compass, Users } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Academics & Curriculum",
  description:
    "Explore our comprehensive UP Board English Medium curriculum from PG to Class X, fostering curiosity, critical thinking, and growth.",
  path: "/academics",
});

export default function AcademicsPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-brand-blue text-white border-b border-brand-blue-hover">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider text-brand-gold font-semibold block mb-2">
              Academic Excellence
            </span>
            <h1 className="display-lg text-white mb-4">
              Academic Framework & Curriculum
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Combining UP Board curriculum rigor with student-centric, interactive teaching methods from PG to Class X in Lucknow.
            </p>
          </div>
        </Container>
      </section>

      {/* Curriculum Breakdown */}
      <section className="py-16 sm:py-24 bg-white border-b border-brand-border">
        <Container>
          <SectionHeader
            badge="Grade Wings"
            title="Comprehensive High School Academic Journey"
            subtitle="Tailored pedagogical approaches designed to meet the cognitive, social, and academic needs of each age group."
          />

          <div className="space-y-12 mt-12">
            {ACADEMIC_WINGS.map((wing, idx) => (
              <Card
                key={wing.id}
                hoverEffect={false}
                className="p-8 sm:p-10 border-l-4 border-l-brand-blue"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="blue">{wing.grades}</Badge>
                      <span className="text-xs text-brand-muted font-medium">
                        Wing 0{idx + 1}
                      </span>
                    </div>
                    <h2 className="heading-1 text-brand-dark mb-4">
                      {wing.title}
                    </h2>
                    <p className="text-base text-brand-muted leading-relaxed mb-6">
                      {wing.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {wing.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-2 text-sm text-slate-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-brand-light p-6 rounded-2xl border border-brand-border text-center">
                    <BookOpen className="w-10 h-10 text-brand-blue mx-auto mb-3" />
                    <h3 className="font-heading font-semibold text-base text-brand-dark mb-1">
                      {wing.grades} Enrollment
                    </h3>
                    <p className="text-xs text-brand-muted mb-4">
                      Admissions open for the current academic session under UP Board.
                    </p>
                    <Button href="/admissions" variant="primary" size="sm" className="w-full">
                      Inquire for {wing.title}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Pedagogical Approach */}
      <section className="py-16 sm:py-20 bg-brand-light border-b border-brand-border">
        <Container>
          <SectionHeader
            badge="Teaching Methodology"
            title="Core Academic Pillars"
            subtitle="How we structure learning to move beyond rote examination prep towards lifelong understanding."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <Card className="p-6">
              <Compass className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="heading-2 text-brand-dark mb-2">Interactive Classrooms</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Encouraging discussion, analytical problem-solving, and concept clarity rather than memorization.
              </p>
            </Card>

            <Card className="p-6">
              <Users className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="heading-2 text-brand-dark mb-2">Low Student-Teacher Ratio</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Personalized attention, individual academic support, and mentorship for every child.
              </p>
            </Card>

            <Card className="p-6">
              <Award className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="heading-2 text-brand-dark mb-2">Real World Exposure</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Career Days featuring industry professionals who help students understand practical career pathways.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
