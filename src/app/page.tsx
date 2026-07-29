import React from "react";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DirectorMessage from "@/components/sections/DirectorMessage";
import AcademicsOverview from "@/components/sections/AcademicsOverview";
import FacilitiesPreview from "@/components/sections/FacilitiesPreview";
import CampusLife from "@/components/sections/CampusLife";
import ScholarshipBanner from "@/components/sections/ScholarshipBanner";
import AlumniSpotlight from "@/components/sections/AlumniSpotlight";
import AdmissionsCTA from "@/components/sections/AdmissionsCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyChooseUs />
      <DirectorMessage isFull={false} />
      <AcademicsOverview />
      <FacilitiesPreview />
      <CampusLife />
      <ScholarshipBanner />
      <AlumniSpotlight />
      <AdmissionsCTA />
    </>
  );
}
