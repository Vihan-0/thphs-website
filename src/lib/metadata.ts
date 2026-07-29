// =============================================================================
// Town Hall Public High School — Metadata & SEO Utilities
// =============================================================================

import type { Metadata } from "next";
import { SCHOOL } from "./constants";

export const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || SCHOOL.url;

export function constructMetadata({
  title,
  description,
  path = "",
  image = "/photos/WhatsApp Image 2026-07-29 at 1.15.07 PM.jpeg",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
} = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${SCHOOL.name}`
    : `${SCHOOL.name} | Tilak Nagar, Aishbagh, Lucknow`;

  const fullDescription =
    description ||
    `Town Hall Public High School provides quality UP Board English Medium education from PG to Class X in Tilak Nagar, Aishbagh, Lucknow. Admissions open.`;

  const url = `${siteBaseUrl}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [
      "Town Hall Public High School",
      "THPHS Lucknow",
      "School in Lucknow",
      "Tilak Nagar School",
      "Aishbagh School",
      "UP Board English Medium",
      "PG to Class X Lucknow",
      "Best School in Lucknow",
      "School Admission Lucknow",
    ],
    authors: [{ name: SCHOOL.name }],
    metadataBase: new URL(siteBaseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SCHOOL.name,
      title: fullTitle,
      description: fullDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SCHOOL.name} Campus`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/**
 * Generates EducationalOrganization JSON-LD structured data schema
 */
export function getEducationalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SCHOOL.name,
    url: siteBaseUrl,
    logo: `${siteBaseUrl}/photos/WhatsApp Image 2026-07-29 at 1.15.07 PM.jpeg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tilak Nagar, Aishbagh",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: "226004",
      addressCountry: "IN",
    },
    telephone: SCHOOL.phone.primary,
    email: SCHOOL.email,
    sameAs: [],
  };
}
