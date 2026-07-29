import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { SCHOOL } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/features/ContactForm";
import GoogleMap from "@/components/features/GoogleMap";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us",
  description:
    "Contact Town Hall Public High School at Tilak Nagar, Aishbagh, Lucknow, Uttar Pradesh 226004. Call +91 9235445595 / +91 9235445596 or visit our campus.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-brand-blue text-white border-b border-brand-blue-hover">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider text-brand-gold font-semibold block mb-2">
              Get in Touch
            </span>
            <h1 className="display-lg text-white mb-4">
              Contact Town Hall Public High School
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              We welcome prospective parents, community members, and visitors to reach out to our campus desk in Tilak Nagar, Aishbagh, Lucknow.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-brand-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <SectionHeader
                badge="Inquiry Form"
                title="Send Us a Message"
                subtitle="Whether you have questions regarding admissions, academics, or campus visits, submit your message below."
                align="left"
              />
              <Card className="p-6 sm:p-8 bg-brand-light/50">
                <ContactForm />
              </Card>
            </div>

            {/* Right Column: Contact Metadata */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeader
                badge="Campus Address"
                title="Official Contact Details"
                align="left"
                className="mb-6"
              />

              <Card className="p-6 space-y-6 border-l-4 border-l-brand-blue">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base text-brand-dark mb-1">
                      Campus Address
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {SCHOOL.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-brand-border/60">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base text-brand-dark mb-1">
                      Telephone Lines
                    </h3>
                    <div className="flex flex-col text-sm text-brand-muted space-y-1">
                      <a
                        href={`tel:${SCHOOL.phone.primary}`}
                        className="hover:text-brand-blue font-medium transition-colors"
                      >
                        {SCHOOL.phone.primary} (Admissions & Inquiry)
                      </a>
                      <a
                        href={`tel:${SCHOOL.phone.secondary}`}
                        className="hover:text-brand-blue font-medium transition-colors"
                      >
                        {SCHOOL.phone.secondary} (Administrative Desk)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-brand-border/60">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base text-brand-dark mb-1">
                      Official Email
                    </h3>
                    <a
                      href={`mailto:${SCHOOL.email}`}
                      className="text-sm font-medium text-brand-blue hover:underline"
                    >
                      {SCHOOL.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-brand-border/60">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base text-brand-dark mb-1">
                      School Timings & Hours
                    </h3>
                    <div className="text-xs sm:text-sm text-brand-muted space-y-1.5">
                      <p>
                        <strong className="text-brand-dark">Summer Timings (April to August):</strong> 7:15 AM to 1:35 PM
                      </p>
                      <p>
                        <strong className="text-brand-dark">Winter Timings (September to March):</strong> 8:45 AM to 3:40 PM
                      </p>
                      <p className="text-xs text-slate-500 pt-0.5">
                        Monday – Saturday • Sunday & Public Holidays Closed
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-brand-light border-b border-brand-border">
        <Container>
          <SectionHeader
            badge="Interactive Location Map"
            title="Campus Location in Lucknow"
            highlightText="Location"
            subtitle="Located conveniently at Tilak Nagar, Aishbagh, Lucknow, Uttar Pradesh 226004."
          />
          <GoogleMap height={450} />
        </Container>
      </section>
    </>
  );
}
