# Features & Technical Requirements Matrix: Town Hall Public School

## Purpose

This document provides a granular functional specification for all features built into the Town Hall Public School website. It details technical requirements, data models, validation rules, component boundaries, and third-party integrations.

---

## 1. Complete Feature Matrix

| Feature ID | Feature Title | User Persona | Primary Route | Technical Implementation Method | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **FEAT-01** | **Responsive Design Framework** | All Users | Global | Next.js 15 App Router + Tailwind CSS Flex/Grid Breakpoints | Production Spec |
| **FEAT-02** | **Admissions Inquiry System** | Prospective Parents | `/`, `/admissions`, `/contact` | Client React Hook Form + Server Action / API Handler | Production Spec |
| **FEAT-03** | **Interactive Contact Form** | General Enquirers | `/contact` | React Hook Form + Zod Validation Schema | Production Spec |
| **FEAT-04** | **Google Maps Campus Location**| All Users | `/contact`, Footer | Embedded Iframe with lazy loading (`loading="lazy"`) | Production Spec |
| **FEAT-05** | **Filtered Media Gallery** | Prospective Parents | `/gallery` | Dynamic client-side category filter + Image Lightbox | Production Spec |
| **FEAT-06** | **Events Calendar & Announcements**| Parents & Community| `/events` | JSON data-driven event feed with category tags | Production Spec |
| **FEAT-07** | **Careers "Join Our Team" Portal**| Job Applicants | `/careers` | Job listing cards + Modal Application Form | Production Spec |
| **FEAT-08** | **PDF Resume File Upload** | Job Applicants | `/careers` | Form Multipart data handler (PDF/DOCX validation, <5MB) | Production Spec |
| **FEAT-09** | **Scholarships Information Module**| Prospective Parents | `/`, `/admissions` | Highlight callout panels detailing Merit & Need criteria | Production Spec |
| **FEAT-10** | **SEO & OpenGraph Architecture** | Search Engines | Global | Dynamic Next.js `metadata` API + JSON-LD Schemas | Production Spec |
| **FEAT-11** | **Analytics & Console Readiness**| Site Admins | Global | Google Analytics 4 (`@next/third-parties/google`) | Production Spec |
| **FEAT-12** | **Accessibility (a11y) Engine**| Screen Readers | Global | Semantic HTML5, ARIA labels, Keyboard traps, Contrast >=4.5:1 | Production Spec |

---

## 2. Granular Feature Specifications

### 2.1 Admissions Inquiry & Contact Forms (FEAT-02, FEAT-03)

#### Data Fields & Validation Rules
- **Parent Name** (`parentName`): String, required, min 2 chars, max 100 chars.
- **Mobile Number** (`phone`): String, required, regex pattern `^[6-9]\d{9}$` (Indian 10-digit mobile number format).
- **Email Address** (`email`): String, required, valid email format.
- **Student Grade Interest** (`grade`): Select dropdown, required options: `Nursery`, `LKG`, `UKG`, `Class I` through `Class XII`.
- **Message / Notes** (`message`): String, optional, max 500 chars.

#### Form Behavior
1. Client-side instant validation using Zod.
2. Submit button shows loading spinner state (`Submitting inquiry...`).
3. On success, displays a clean confirmation banner: *"Thank you for your interest in Town Hall Public School. Our admissions team will contact you shortly."*
4. Form resets state automatically after submission.

---

### 2.2 Careers & PDF Resume Upload Handler (FEAT-07, FEAT-08)

#### Data Fields & Validation Rules
- **Applicant Name** (`fullName`): String, required.
- **Contact Phone** (`phone`): String, required, 10-digit validation.
- **Email Address** (`email`): String, required.
- **Position Applied For** (`position`): Select dropdown (`Primary Teacher`, `Middle School Science`, `Mathematics Faculty`, `Administrative Staff`, `Sports Instructor`, `Other`).
- **Resume File** (`resume`): File upload, required, allowed MIME types: `application/pdf`, `application/msword`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`. Maximum size: 5 MB.

---

### 2.3 Media Gallery & Photo Lightbox (FEAT-05)

- **Filtering Categories**: `All`, `Campus & Classrooms`, `Science Labs`, `Sports & Fitness`, `Events & Culture`.
- **Image Item Architecture**:
  - Image thumbnail with next/image optimization.
  - Hover caption overlay.
  - Click event opens accessible fullscreen modal lightbox with high-res asset view and close trigger (`Escape` key supported).

---

### 2.4 SEO & JSON-LD Structured Data Engine (FEAT-10)

Dynamic generation of `EducationalOrganization` and `School` schemas rendered in the `<head>` of every route.

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Town Hall Public School",
  "url": "https://www.townhallpublicschool.com",
  "logo": "https://www.townhallpublicschool.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tilak Nagar, Aishbagh",
    "addressLocality": "Lucknow",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "226004",
    "addressCountry": "IN"
  },
  "telephone": "+919235445595",
  "email": "thps1996@gmail.com",
  "sameAs": []
}
```

---

## Related Documents

- [PROJECT_BIBLE.md](file:///c:/Users/VIHAN/Desktop/school/project/PROJECT_BIBLE.md) – Master Project Bible
- [CONTENT.md](file:///c:/Users/VIHAN/Desktop/school/project/CONTENT.md) – Content Strategy & Page Copy
- [DESIGN.md](file:///c:/Users/VIHAN/Desktop/school/project/DESIGN.md) – UX/UI System Design
- [SEO.md](file:///c:/Users/VIHAN/Desktop/school/project/SEO.md) – Technical SEO Strategy
- [PLACEHOLDERS.md](file:///c:/Users/VIHAN/Desktop/school/project/PLACEHOLDERS.md) – Open Items Register
