import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CareersList from "@/components/features/CareersList";
import CareerForm from "@/components/features/CareerForm";

export const metadata: Metadata = constructMetadata({
  title: "Careers & Recruitment",
  description:
    "Explore career opportunities at Town Hall Public High School, Lucknow. We are hiring Academic Coordinators, Pre-Primary Teachers, Sports Educators, and Music Faculty.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-brand-blue text-white border-b border-brand-blue-hover">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider text-brand-gold font-semibold block mb-2">
              Join Our Faculty
            </span>
            <h1 className="display-lg text-white mb-4">
              Careers at Town Hall Public High School
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Become part of a passionate team of educators dedicated to academic rigor, student mentorship, and community transformation in Lucknow.
            </p>
          </div>
        </Container>
      </section>

      {/* Open Positions List */}
      <section className="py-16 sm:py-24 bg-slate-50/50 border-b border-slate-200">
        <Container>
          <SectionHeader
            badge="Current Opportunities"
            title="Open Teaching & Administrative Roles"
            subtitle="We invite applications from qualified, energetic educators who share our commitment to student-centric learning."
          />

          <div className="mt-10">
            <CareersList />
          </div>
        </Container>
      </section>

      {/* Online Direct Application Form */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <Container size="md">
          <SectionHeader
            badge="Online Application Form"
            title="Submit Resume Online"
            subtitle="Alternatively, fill out the form below to submit your details directly to our recruitment team."
          />

          <div className="bg-slate-50 p-6 sm:p-10 rounded-2xl border border-slate-200 max-w-3xl mx-auto mt-8">
            <CareerForm />
          </div>
        </Container>
      </section>
    </>
  );
}
