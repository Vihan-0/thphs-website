import React from "react";
import Link from "next/link";
import { ArrowRight, Monitor, Atom, FlaskConical, Microscope, Trophy, Music, Drama, BookOpen, Info } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ImageWithBlur from "@/components/ui/ImageWithBlur";
import { FACILITIES } from "@/lib/constants";

export function FacilitiesPreview() {
  const iconMap = {
    Monitor,
    Atom,
    FlaskConical,
    Microscope,
    Trophy,
    Music,
    Drama,
    BookOpen,
  };

  const activeFacilities = FACILITIES.filter((f) => !f.isPlaceholder);

  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200 animate-soft-fade">
      <Container>
        <SectionHeader
          badge="Campus & Facilities"
          title="Designed for Learning Beyond the Classroom"
          subtitle="A safe, engaging campus equipped with verified workstations, activity corners, sports areas, and creative studios where students explore, discover, and grow."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
          {/* Left Column: Visual Asset mapped to /photos/bb (10).jpg */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-none">
              <ImageWithBlur
                src="/photos/bb (10).jpg"
                alt="Students participating in THPS campus activities"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center w-full h-full"
              />
              <div className="absolute inset-0 bg-blue-950/40" />
              <div className="absolute bottom-0 inset-x-0 bg-blue-950/90 p-4 text-white">
                <p className="font-heading font-semibold text-base text-[#F59E0B]">
                  Campus Facilities & Activity Hubs
                </p>
                <p className="text-xs text-slate-200">
                  Interactive learning environments and holistic student exposure.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Facilities Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {activeFacilities.map((facility) => {
                const IconComponent =
                  iconMap[facility.icon as keyof typeof iconMap] || BookOpen;
                return (
                  <Link key={facility.id} href="/facilities">
                    <Card className="h-full p-4 flex flex-col items-center text-center hover:border-blue-900 transition-colors duration-200 bg-white border-slate-200 shadow-none">
                      <div className="w-10 h-10 rounded-lg bg-blue-900/10 text-blue-900 flex items-center justify-center mb-2.5">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="font-heading font-semibold text-xs sm:text-sm text-blue-950">
                        {facility.name}
                      </h4>
                    </Card>
                  </Link>
                );
              })}
            </div>

            {/* Smart Classrooms Governance Notice */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block">Infrastructure Note:</span>
                <span>
                  [Smart Classrooms: PLACEHOLDER - Client Confirmation Required regarding active smart board installations]
                </span>
              </div>
            </div>

            <div className="mt-6 text-right">
              <Button href="/facilities" variant="primary" size="md">
                <span>View All Facilities</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FacilitiesPreview;
