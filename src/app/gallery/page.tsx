import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import GalleryGrid from "@/components/features/GalleryGrid";

export const metadata: Metadata = constructMetadata({
  title: "Media & Photo Gallery",
  description:
    "Explore photography from campus life, science labs, classroom sessions, sports events, and cultural functions at Town Hall Public High School, Lucknow.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-brand-blue text-white border-b border-brand-blue-hover">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider text-brand-gold font-semibold block mb-2">
              Visual Journey
            </span>
            <h1 className="display-lg text-white mb-4">
              Campus Media Gallery
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Capturing moments of learning, scientific discovery, athletic sports, and cultural celebration at Town Hall Public High School.
            </p>
          </div>
        </Container>
      </section>

      {/* Filterable Photo Grid Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-brand-border">
        <Container>
          <SectionHeader
            badge="Photography Catalog"
            title="Life at Town Hall Public High School"
            subtitle="Filter by category to explore classroom learning, science laboratory practicals, physical sports, and cultural functions."
          />

          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
