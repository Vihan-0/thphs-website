# Project Overview: Town Hall Public School Website

## Purpose

This document defines the high-level scope, strategic rationale, target audience profiles, governance standards, and delivery expectations for the Town Hall Public School website project. It serves as an executive snapshot for project sponsors, agency stakeholders, and the lead engineering team.

---

## 1. Project Snapshot & Institutional Facts

Town Hall Public School is a leading educational institution situated in the heart of Aishbagh, Lucknow. The school provides continuous educational grounding from early childhood (Nursery) through senior secondary graduation (Class XII), governed by the UP Board standards with an English-medium curriculum.

| Property | Official Institutional Record | Governance / Verification |
| :--- | :--- | :--- |
| **School Name** | Town Hall Public School | Official Legal Name |
| **Street Address** | Tilak Nagar, Aishbagh | Physical Campus Location |
| **City & State** | Lucknow, Uttar Pradesh | Local Geographic Designation |
| **Postal Code** | 226004 | Official Pin Code |
| **Google Maps Pin** | Tilak Nagar, Aishbagh, Lucknow, Uttar Pradesh 226004 | Embed Coordinates Baseline |
| **Affiliation Board** | UP Board (Uttar Pradesh State Board) | Curriculum Framework |
| **Instruction Medium** | English Medium | Medium of Delivery |
| **Class Range** | Nursery to Class XII (K-12) | Educational Spectrum |
| **Primary Contact Phone**| +91 9235445595 | Admissions Line |
| **Secondary Contact Phone**| +91 9235445596 | Administrative Line |
| **Official Contact Email**| thps1996@gmail.com | Official Administrative Inbox |

---

## 2. Core Project Objectives & Strategic Intent

The primary mandate is to design and develop a **premium, modern, elegant, and deeply trustworthy school website**. The digital platform must transition the school's online presence away from legacy marketing copy toward a story-driven, parent-focused experience that inspires confidence and drives qualified admission inquiries.

### Key Objectives
1. **Establish Institutional Trust**: Address parent concerns regarding safety, academic standards, values, and holistic development through clean presentation and authentic storytelling.
2. **Drive Admissions Conversion**: Funnel prospective parents seamlessly from initial exploration to booking campus visits and submitting admission inquiry forms.
3. **Communicate Social Impact & Opportunity**: Elevate the school's mission of providing high-quality education as an equalizer, backed by merit-based and need-based scholarship support.
4. **Deliver Agency-Grade Technical Quality**: Implement a responsive, fast, accessible, and SEO-optimized website utilizing Next.js 15, TypeScript, and Tailwind CSS.

---

## 3. Target Audience Personas & User Journeys

The website experience is engineered around three distinct user personas, ensuring intuitive content discovery and clear CTA paths.

### Persona 1: The Prospective Parent (Primary Audience)
- **Profile**: Parents looking for a reputable, values-aligned school in Lucknow for their child (Nursery to Class XII).
- **Core Concerns**: Academic quality, safety, low student-teacher ratio, fee transparency, scholarship availability, character development.
- **Key User Journey**:
  1. Lands on Homepage -> Reads Hero statement *"Where Every Child Discovers Their Best Self"*.
  2. Scans Trust Strip (Lucknow, Nursery to XII, English Medium, UP Board, Scholarships).
  3. Reviews "Why Choose Us" & Director’s Message.
  4. Explores Academics and Facilities.
  5. Clicks `Apply Now` or submits inquiry on `/contact` or `/admissions`.

### Persona 2: Existing Parents & Community
- **Profile**: Current parents checking school announcements, event dates, or campus updates.
- **Core Needs**: Access to event notifications, gallery photos, contact details, and school leadership updates.
- **Key User Journey**:
  1. Navigates directly to `/events` or `/gallery`.
  2. Reviews upcoming activities or event announcements.

### Persona 3: Career Applicants / Educators
- **Profile**: Experienced teachers and administrative staff seeking employment opportunities.
- **Core Needs**: Understanding school culture, viewing open roles, submitting applications and resumes easily.
- **Key User Journey**:
  1. Navigates to `/careers` ("Join Our Team").
  2. Reviews open positions, completes application form, attaches PDF resume, and submits.

---

## 4. Scope of Work (Version 1 vs Future Versions)

### Version 1 Scope (Current Production Release)
- **Complete Information Architecture**: 9 primary static and dynamic pages (`/`, `/about`, `/academics`, `/admissions`, `/facilities`, `/gallery`, `/events`, `/careers`, `/contact`).
- **Approved Copy Integration**: Official Mission Statement, Full/Short Director’s Message, Why Choose Us core pillars, approved contact data.
- **Interactive Inquiries & Career Application**: Contact enquiry form with validation, career application form with client-side PDF resume attachment handling.
- **Photo-Mapped Visual Grid**: Structured visual layout utilizing pre-mapped placeholder image references (`a19`, `a20`, `a2`, etc.).
- **Strict Placeholder Engine**: Standardized handling (`[PLACEHOLDER]`) for all unverified items (Vision, Testimonials, Smart Classrooms).
- **Technical & SEO Foundation**: Dynamic sitemap generation, structured data (JSON-LD), Open Graph metadata, Google Analytics (GA4) integration, mobile-first responsive layout.

### Out of Scope for Version 1 (Planned for Future Releases)
- Live Parent/Student Login Portal (LMS / ERP integration).
- Online Fee Payment Gateway integration.
- Automated Real-time Chatbot.

---

## 5. Strict Governance & Editorial Rules

To guarantee institutional accuracy, all team members and future developers must strictly follow these rules:

1. **Zero Invention Rule**: Never invent claims regarding historical milestones, student counts, pass percentages, or unverified campus facilities.
2. **No Lorem Ipsum**: Never use placeholder dummy text. All non-approved content blocks must use the designated `[PLACEHOLDER]` marker.
3. **No Fake Testimonials**: Testimonials must remain explicitly marked as `[PLACEHOLDER]` until real quotes are gathered and verified from parents.
4. **Official Content Primacy**: Official content specified in [PROJECT_BIBLE.md](file:///c:/Users/VIHAN/Desktop/school/project/PROJECT_BIBLE.md) overrides any content found on old legacy websites.

---

## Related Documents

- [PROJECT_BIBLE.md](file:///c:/Users/VIHAN/Desktop/school/project/PROJECT_BIBLE.md) – Master Project Bible & Source of Truth
- [BRAND.md](file:///c:/Users/VIHAN/Desktop/school/project/BRAND.md) – Brand Personality & Voice System
- [CONTENT.md](file:///c:/Users/VIHAN/Desktop/school/project/CONTENT.md) – Page-by-Page Content Specification
- [DESIGN.md](file:///c:/Users/VIHAN/Desktop/school/project/DESIGN.md) – Visual & UX System Guidelines
- [FEATURES.md](file:///c:/Users/VIHAN/Desktop/school/project/FEATURES.md) – Functional Requirements Matrix
- [PLACEHOLDERS.md](file:///c:/Users/VIHAN/Desktop/school/project/PLACEHOLDERS.md) – Unresolved Items Log
