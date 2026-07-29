import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import EventsFeed from "@/components/features/EventsFeed";
import PlaceholderBlock from "@/components/ui/PlaceholderBlock";

export const metadata: Metadata = constructMetadata({
  title: "Events & Announcements",
  description:
    "Stay updated on annual functions, science exhibitions, sports meets, and academic competitions at Town Hall Public High School, Lucknow.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-brand-blue text-white border-b border-brand-blue-hover">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider text-brand-gold font-semibold block mb-2">
              School Calendar
            </span>
            <h1 className="display-lg text-white mb-4">
              Events & Campus Announcements
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Celebrating student achievements, sports meets, cultural festivals, and academic exhibitions throughout the school session.
            </p>
          </div>
        </Container>
      </section>

      {/* Events Calendar Feed with Filter Tabs */}
      <section className="py-16 sm:py-24 bg-white border-b border-brand-border">
        <Container>
          <SectionHeader
            badge="Upcoming Schedule"
            title="Annual Session Event Feed"
            subtitle="Explore scheduled academic forums, rhetoric competitions, patriotic commemorations, and cultural celebrations."
          />

          <div className="mt-10">
            <EventsFeed />
          </div>
        </Container>
      </section>

      {/* News & Press Release Placeholder */}
      <section className="py-16 bg-brand-light border-b border-brand-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <PlaceholderBlock
              title="Official School Press & News Bulletins"
              placeholderText="Official school press releases and newsletter bulletins for the 2026-27 session will be published here. Please check back soon."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
