import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { FACILITIES } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { Monitor, Atom, FlaskConical, Microscope, Trophy, Music, Drama, BookOpen, Presentation, Sparkles } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Campus & Facilities",
  description:
    "Explore our interactive Smart Classrooms, science laboratories, computer lab, sports facilities, music studio, and library at Town Hall Public High School, Lucknow.",
  path: "/facilities",
});

export default function FacilitiesPage() {
  const iconMap = {
    Monitor,
    Atom,
    FlaskConical,
    Microscope,
    Trophy,
    Music,
    Drama,
    BookOpen,
    Presentation,
  };

  const verifiedFacilities = FACILITIES.filter((f) => !f.isPlaceholder);

  return (
    <>
      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-brand-blue text-white border-b border-brand-blue-hover">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider text-brand-gold font-semibold block mb-2">
              Physical Infrastructure
            </span>
            <h1 className="display-lg text-white mb-4">
              Campus Facilities & Learning Spaces
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Equipped with interactive Smart Classrooms, modern science laboratories, workstation setups, sports areas, creative studios, and reference libraries in Lucknow.
            </p>
          </div>
        </Container>
      </section>

      {/* Verified Facilities Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-brand-border">
        <Container>
          <SectionHeader
            badge="Campus Infrastructure"
            title="Smart Classrooms, Laboratories & Creative Spaces"
            subtitle="Every facility is designed to support hands-on learning, physical wellbeing, and artistic development."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {verifiedFacilities.map((facility) => {
              const IconComponent =
                iconMap[facility.icon as keyof typeof iconMap] || BookOpen;
              const isSmartClass = facility.id === "smart-classrooms";

              return (
                <Card
                  key={facility.id}
                  className={`p-8 flex flex-col justify-between transition-all duration-200 ${
                    isSmartClass
                      ? "border-t-4 border-t-[#F59E0B] bg-slate-50/90 ring-1 ring-[#F59E0B]/30"
                      : "border-t-4 border-t-brand-blue bg-white"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          isSmartClass
                            ? "bg-amber-500/15 text-amber-700 border border-amber-500/25"
                            : "bg-brand-blue/10 text-brand-blue"
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {isSmartClass && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                          <Sparkles className="w-3 h-3 text-amber-600" />
                          <span>Smart Technology</span>
                        </span>
                      )}
                    </div>
                    <h3 className="heading-2 text-brand-dark mb-3">
                      {facility.name}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
