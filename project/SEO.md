# Comprehensive SEO Strategy & Search Architecture: Town Hall Public School

## Purpose

This document outlines the complete Search Engine Optimization (SEO) plan, keyword architecture, metadata standards, structured data (JSON-LD) schemas, and technical crawlability setup for the Town Hall Public School website.

---

## 1. Primary SEO Objectives

1. **Local Search Dominance**: Secure top 3 rankings for queries related to schools in Tilak Nagar, Aishbagh, and Lucknow (UP Board, English Medium).
2. **Parent Trust & CTR Optimization**: Craft compelling page titles and meta descriptions that maximize click-through rates from search engine result pages (SERPs).
3. **Structured Entity Recognition**: Implement JSON-LD schema tags so Google indexes the school as a verified `EducationalOrganization` with complete location and contact metadata.
4. **Technical Excellence**: Achieve 100/100 Core Web Vitals performance scores to ensure favorable ranking signals.

---

## 2. Keyword Strategy & Mapping Architecture

| Page Target | Target Primary Keyword | Target Secondary Keywords | Meta Title Pattern | Meta Description Pattern |
| :--- | :--- | :--- | :--- | :--- |
| **Homepage (`/`)** | School in Tilak Nagar Lucknow | Town Hall Public School, UP Board English Medium Lucknow, Admissions in Lucknow | `Town Hall Public School Lucknow \| Nursery to Class XII` | `Town Hall Public School offers quality UP Board English Medium education from Nursery to Class XII in Tilak Nagar, Aishbagh, Lucknow. Admissions open.` |
| **About Us (`/about`)** | Best UP Board School Lucknow | Educational Philosophy Lucknow, Director Message Town Hall | `About Us \| Town Hall Public School Lucknow` | `Discover Town Hall Public School's mission of character building, holistic education, and equal opportunity in Tilak Nagar, Lucknow.` |
| **Academics (`/academics`)**| UP Board English Medium School | Nursery Primary Secondary Lucknow, Academics Town Hall | `Academics & Curriculum \| Town Hall Public School` | `Explore our comprehensive UP Board English Medium curriculum from Nursery to Class XII, fostering curiosity, critical thinking, and growth.` |
| **Admissions (`/admissions`)**| School Admissions Lucknow 2026 | School Scholarship Lucknow, Apply Town Hall Public School | `Admissions & Scholarships \| Town Hall Public School` | `Apply for admission at Town Hall Public School, Lucknow. Merit and need-based scholarships available for deserving students.` |
| **Facilities (`/facilities`)**| Science Computer Labs School Lucknow | Library Sports School Aishbagh, Facilities Town Hall | `Campus & Facilities \| Town Hall Public School` | `Explore our science laboratories, computer lab, sports facilities, music studio, and library at Town Hall Public School, Lucknow.` |
| **Contact Us (`/contact`)** | Town Hall Public School Contact | Address Phone Town Hall Lucknow, Aishbagh School Map | `Contact Us \| Town Hall Public School Lucknow` | `Contact Town Hall Public School in Tilak Nagar, Aishbagh, Lucknow. Call +91 9235445595 / +91 9235445596 or visit our campus.` |

---

## 3. Technical SEO Implementation Specs

### 3.1 Next.js Dynamic Metadata Implementation Example

```typescript
// app/layout.tsx snippet
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Town Hall Public School | Tilak Nagar, Lucknow',
    template: '%s | Town Hall Public School',
  },
  description: 'Providing quality UP Board English Medium education from Nursery to Class XII in Tilak Nagar, Aishbagh, Lucknow. Building character, confidence, and community.',
  keywords: ['Town Hall Public School', 'School in Lucknow', 'Tilak Nagar School', 'Aishbagh School', 'UP Board English Medium', 'Nursery to Class XII Lucknow'],
  authors: [{ name: 'Town Hall Public School' }],
  metadataBase: new URL('https://www.townhallpublicschool.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.townhallpublicschool.com',
    siteName: 'Town Hall Public School',
    title: 'Town Hall Public School | Lucknow',
    description: 'Where Every Child Discovers Their Best Self. Quality education from Nursery to Class XII.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Town Hall Public School Campus' }],
  },
  robots: { index: true, follow: true },
};
```

---

### 3.2 Dynamic Sitemap (`sitemap.ts`) & Robots (`robots.txt`)

- **Dynamic Sitemap**: Built-in Next.js `app/sitemap.ts` listing all static routes (`/`, `/about`, `/academics`, `/admissions`, `/facilities`, `/gallery`, `/events`, `/careers`, `/contact`) with `changeFrequency: 'weekly'` and priority ratings (`1.0` for homepage, `0.8` for admissions/contact).
- **Robots.txt**: Next.js `app/robots.txt` granting full crawl permissions to all major engines (`User-agent: *`, `Allow: /`, `Sitemap: https://www.townhallpublicschool.com/sitemap.xml`).

---

## 4. Analytics & Console Verification Protocol

1. **Google Analytics 4 (GA4)**: Integrated via `@next/third-parties/google` using environment variable `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Tracks pageviews, outbound calls (`tel:` clicks), email links (`mailto:` clicks), and admission form submissions.
2. **Google Search Console**: Verification code injected into root HTML layout via `verification.google` meta key.

---

## Related Documents

- [PROJECT_BIBLE.md](file:///c:/Users/VIHAN/Desktop/school/project/PROJECT_BIBLE.md) – Master Project Bible
- [FEATURES.md](file:///c:/Users/VIHAN/Desktop/school/project/FEATURES.md) – Technical Specs & JSON-LD
- [DEPLOYMENT.md](file:///c:/Users/VIHAN/Desktop/school/project/DEPLOYMENT.md) – Vercel Launch Checklist
- [PLACEHOLDERS.md](file:///c:/Users/VIHAN/Desktop/school/project/PLACEHOLDERS.md) – Analytics Credentials Log
