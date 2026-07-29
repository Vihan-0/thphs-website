import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { SCHOOL } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScholarshipBanner from "@/components/sections/ScholarshipBanner";
import ContactForm from "@/components/features/ContactForm";
import ParentFAQ from "@/components/sections/ParentFAQ";
import Card from "@/components/ui/Card";
import ImageWithBlur from "@/components/ui/ImageWithBlur";
import { CheckCircle2, Phone, Mail, FileText, Download, Calendar } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Admissions & Scholarships",
  description:
    "Apply for admission at Town Hall Public High School, Lucknow. Merit and need-based scholarships available for deserving students.",
  path: "/admissions",
});

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-blue-950 text-white border-b border-blue-900 animate-soft-fade">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider text-[#F59E0B] font-bold block mb-2">
              Join Our Community
            </span>
            <h1 className="display-lg text-white font-bold mb-4">
              Admissions & Scholarships
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Empowering your child with an education that builds character, confidence, and community from PG to Class X.
            </p>
          </div>
        </Container>
      </section>

      {/* Admissions Form & Contact Info */}
      <section id="inquiry" className="py-16 sm:py-24 bg-white border-b border-slate-200 animate-soft-fade">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Form */}
            <div className="lg:col-span-7">
              <SectionHeader
                badge="Online Application"
                title="Submit an Admissions Inquiry"
                highlightText="Admissions"
                subtitle="Fill out the form below and our admissions desk will contact you with application details and campus visit scheduling."
                align="left"
              />
              <Card className="p-6 sm:p-8 bg-slate-50 border-slate-200 border-l-4 border-l-[#F59E0B]">
                <ContactForm />
              </Card>
            </div>

            {/* Right Column: Admission Poster & Key Facts */}
            <div className="lg:col-span-5 space-y-6">
              {/* Standalone Promotional Admission Open Flyer Poster */}
              <div className="rounded-xl overflow-hidden border-2 border-blue-950 bg-blue-950 p-2 shadow-none transition-all duration-300 hover:-translate-y-1.5">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-blue-950">
                  <ImageWithBlur
                    src="/photos/cc (18).jpeg"
                    alt="Town Hall Public High School Admission Open Official Flyer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain w-full h-full bg-blue-950"
                  />
                </div>
                <div className="p-3 text-center text-white">
                  <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider block">
                    Official Admissions Poster 2026–27
                  </span>
                </div>
              </div>

              <Card className="p-6 border-l-4 border-l-blue-900">
                <h3 className="heading-2 text-blue-950 font-bold mb-3">
                  Admissions Overview
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Open for <strong>PG through Class X</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Curriculum: <strong>UP Board (English Medium)</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Campus Location: <strong>Tilak Nagar, Lucknow</strong></span>
                  </li>
                </ul>
              </Card>

              {/* Direct Inquiry Contact Card */}
              <Card className="p-6">
                <h3 className="font-heading font-bold text-base text-blue-950 mb-3">
                  Admissions Office Direct Contact
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-blue-900 shrink-0" />
                    <a href={`tel:${SCHOOL.phone.primary}`} className="font-medium text-blue-950 hover:underline">
                      {SCHOOL.phone.primary}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-blue-900 shrink-0" />
                    <a href={`tel:${SCHOOL.phone.secondary}`} className="font-medium text-blue-950 hover:underline">
                      {SCHOOL.phone.secondary}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-blue-900 shrink-0" />
                    <a href={`mailto:${SCHOOL.email}`} className="font-medium text-blue-950 hover:underline">
                      {SCHOOL.email}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Download Prospectus Card */}
              <Card className="p-6 bg-amber-50/80 border-amber-200">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-amber-950 mb-1">
                      Digital Prospectus & Information Kit
                    </h4>
                    <p className="text-xs text-amber-800 leading-relaxed mb-3">
                      Get comprehensive details on academic streams, campus rules, activity calendar, and fee breakdown.
                    </p>
                    <a
                      href={`tel:${SCHOOL.phone.primary}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-950 hover:text-amber-700 underline"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Request Information Kit via Phone / Email
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Scholarship Section */}
      <ScholarshipBanner />

      {/* Parent FAQ Section */}
      <ParentFAQ />

      {/* Step-by-Step Admissions Process & Fee Guidelines */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <Container>
          <SectionHeader
            badge="Transparency & Guidelines"
            title="Admissions Governance & Fee Schedules"
            highlightText="Governance"
            subtitle="Adhering to strict institutional guidelines regarding fee transparency and application evaluation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="p-8 border-t-4 border-t-blue-900 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900/10 text-blue-900 flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="heading-2 text-blue-950 font-bold">4-Step Admissions Workflow</h3>
              </div>
              <ol className="space-y-3 text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li>Submit the Admissions Inquiry form online or visit our office.</li>
                <li>Attend an informal interaction & campus walkthrough with our coordinators.</li>
                <li>Complete document verification (Birth certificate, marksheets, photos).</li>
                <li>Confirm seat allotment and complete fee registration.</li>
              </ol>
            </Card>

            <Card className="p-8 border-t-4 border-t-[#F59E0B] bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="heading-2 text-blue-950 font-bold">Fee Structure Transparency</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Town Hall Public High School follows a non-discriminatory, affordable fee structure aligned with UP Board standards. Installment plans and scholarship waivers are provided upon review.
              </p>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-900 shrink-0" />
                <span>Detailed class-wise fee schedules are provided during campus visits or emailed upon request.</span>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
