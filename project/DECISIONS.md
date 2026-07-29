# Architectural & Product Decision Log: Town Hall Public School

## Purpose

This document records the foundational product, design, content, and technical decisions established for Version 1 of the Town Hall Public School website project. It explains the rationale behind key architecture choices to provide clarity for future engineering iterations.

---

## 1. Summary Decision Register

| Decision ID | Area | Decision Summary | Rationale & Tradeoffs | Status |
| :--- | :--- | :--- | :--- | :--- |
| **DEC-01** | Architecture | Standardize on Next.js 15 App Router | Server Components provide fast static rendering, excellent SEO, and native metadata management. | Approved |
| **DEC-02** | Styling | Vanilla Tailwind CSS without glassmorphism | Aligns with the minimal, premium aesthetic requested. Prevents visual clutter and heavy render overhead. | Approved |
| **DEC-03** | Typography | Poppins (Headings) + Inter (Body) | Poppins provides warm institutional structure; Inter ensures clean mobile legibility across dense content. | Approved |
| **DEC-04** | Governance | Zero Invention & Strict Placeholder Syntax | Protects client integrity. Unverified facts are explicitly rendered as `[PLACEHOLDER]` rather than guessed. | Approved |
| **DEC-05** | Legacy Site | Use old site ONLY for verified facts | Old website contains outdated marketing copy. Only factual address, phone, and board details were extracted. | Approved |
| **DEC-06** | Color System | Deep Blue primary + Gold accent | Professional, trustworthy institutional pairing. Will be fine-tuned once vector logo files are delivered. | Approved |
| **DEC-07** | Design Reference| Inspiration from `shrewsburyindia.in` | Adopt editorial spacing, whitespace, typography pacing, and photography focus without copying layouts. | Approved |
| **DEC-08** | Photo System | Pre-mapped reference code system (`a19`, etc.) | Enables full component development and visual hierarchy setup prior to custom campus photography shoot. | Approved |
| **DEC-09** | Form Architecture| React Hook Form + Zod Schema Validation | Ensures robust client-side instant feedback and server-side safety for inquiry forms and PDF resume uploads. | Approved |
| **DEC-10** | Infrastructure| Single-click Serverless Deploy on Vercel Edge | Provides automatic SSL, dynamic sitemaps, edge caching, and zero server maintenance overhead. | Approved |

---

## Related Documents

- [PROJECT_BIBLE.md](file:///c:/Users/VIHAN/Desktop/school/project/PROJECT_BIBLE.md) – Master Project Bible
- [PROJECT.md](file:///c:/Users/VIHAN/Desktop/school/project/PROJECT.md) – Executive Overview
- [BRAND.md](file:///c:/Users/VIHAN/Desktop/school/project/BRAND.md) – Brand Positioning Strategy
- [DESIGN.md](file:///c:/Users/VIHAN/Desktop/school/project/DESIGN.md) – UX/UI System Design
