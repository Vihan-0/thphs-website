# Comprehensive Implementation Tasks & Build Roadmap: Town Hall Public School

## Purpose

This document provides an actionable, sprint-by-sprint developer task breakdown for implementing the Town Hall Public School website. It ensures engineering teams can build, test, and deploy the project systematically.

---

## 1. Suggested Build Sequence & Phases

```
+-----------------------------------------------------------------------------------+
|                               PHASED BUILD ROADMAP                                |
|                                                                                   |
| PHASE 1: Technical & Design Foundation  (Next.js 15, Tailwind, Fonts, Tokens)    |
| PHASE 2: Core Components & Layout      (Nav, Footer, Buttons, Cards, Hero)      |
| PHASE 3: Page Route Assembly           (Home, About, Academics, Admissions, etc.)|
| PHASE 4: Forms & Interactive Features  (Inquiry Form, Career PDF Upload, Gallery)|
| PHASE 5: SEO, Schema & Analytics       (JSON-LD, Sitemap, GA4, Meta Tags)         |
| PHASE 6: QA, Accessibility & Deploy    (Lighthouse Audit, Vercel Production Release)|
+-----------------------------------------------------------------------------------+
```

---

## 2. Granular Task Checklist

### Phase 1: Technical & Design Foundation
- [ ] **TASK-101**: Initialize Next.js 15 App Router project structure with TypeScript (Strict mode enabled).
- [ ] **TASK-102**: Configure Tailwind CSS with primary design tokens (`brand-blue: #1E3A8A`, `brand-gold: #F59E0B`, `brand-dark: #0F172A`).
- [ ] **TASK-103**: Setup Google Fonts `Poppins` (Headings) and `Inter` (Body) via `next/font/google` in root `layout.tsx`.
- [ ] **TASK-104**: Create asset directory structure for icons, branding elements, and mapped photo placeholders (`a19`, `a20`, `a2`, etc.).

### Phase 2: Core Components & Design System
- [ ] **TASK-201**: Build responsive sticky Header with mobile slide-over menu and `Admissions Open` CTA.
- [ ] **TASK-202**: Build master Footer component featuring school metadata, quick links, contact info, and map link.
- [ ] **TASK-203**: Build `<Hero />` component supporting split text/image layout and category badges.
- [ ] **TASK-204**: Build `<TrustStrip />` component highlighting key institutional credentials.
- [ ] **TASK-205**: Build `<Card />` and `<SectionHeader />` reusable UI primitives with hover effects.

### Phase 3: Page Route Assembly & Editorial Copy Integration
- [ ] **TASK-301**: Implement Homepage (`/`) with all 10 required sections (Hero, Trust Strip, Why Choose Us, Director excerpt, Academics, Facilities, Campus Life, Scholarships, Testimonials placeholder, Final Admissions CTA).
- [ ] **TASK-302**: Implement About Us page (`/about`) featuring the full Director Message, official Mission Statement, and Vision placeholder block.
- [ ] **TASK-303**: Implement Academics page (`/academics`) detailing Primary, Middle, and Senior wings under UP Board curriculum.
- [ ] **TASK-304**: Implement Admissions page (`/admissions`) with scholarship details, placeholder fee structure, and inquiry path.
- [ ] **TASK-305**: Implement Facilities page (`/facilities`) listing verified labs, library, sports, and Smart Classrooms placeholder tag.
- [ ] **TASK-306**: Implement Gallery (`/gallery`), Events (`/events`), Careers (`/careers`), and Contact Us (`/contact`) pages.

### Phase 4: Forms & Interactive Features
- [ ] **TASK-401**: Implement React Hook Form + Zod schema validation for Admissions Inquiry Form on `/contact`.
- [ ] **TASK-402**: Implement Career Application Form on `/careers` with client-side PDF file attachment handling.
- [ ] **TASK-403**: Build dynamic filterable Media Gallery with fullscreen accessible modal lightbox.
- [ ] **TASK-404**: Integrate embedded lazy-loaded Google Maps iframe pointing to Tilak Nagar, Aishbagh, Lucknow 226004.

### Phase 5: SEO, Structured Data & Analytics
- [ ] **TASK-501**: Implement complete metadata API across all page routes (Titles, Descriptions, Open Graph tags).
- [ ] **TASK-502**: Inject JSON-LD `EducationalOrganization` structured data schema in root layout.
- [ ] **TASK-503**: Generate dynamic `sitemap.ts` and static `robots.txt`.
- [ ] **TASK-504**: Wire Google Analytics 4 tracking script via `@next/third-parties/google`.

### Phase 6: Quality Assurance, Performance Audit & Launch
- [ ] **TASK-601**: Audit all text for zero invented copy and ensure graceful rendering of all `[PLACEHOLDER]` tags.
- [ ] **TASK-602**: Execute Lighthouse performance audit (Target LCP < 2.5s, Performance score >= 90).
- [ ] **TASK-603**: Verify keyboard accessibility navigation and screen reader contrast compliance.
- [ ] **TASK-604**: Deploy production build to Vercel and verify custom domain configuration.

---

## Related Documents

- [PROJECT_BIBLE.md](file:///c:/Users/VIHAN/Desktop/school/project/PROJECT_BIBLE.md) – Master Project Bible
- [FEATURES.md](file:///c:/Users/VIHAN/Desktop/school/project/FEATURES.md) – Functional Matrix
- [TODO.md](file:///c:/Users/VIHAN/Desktop/school/project/TODO.md) – Action Item Register
- [DEPLOYMENT.md](file:///c:/Users/VIHAN/Desktop/school/project/DEPLOYMENT.md) – Vercel Runbook
