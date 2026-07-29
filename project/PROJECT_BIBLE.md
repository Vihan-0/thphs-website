# Project Bible: Town Hall Public School Website

## Purpose

This document serves as the master source of truth and definitive product specification for the Town Hall Public School website project. It articulates the overarching product vision, brand architecture, design principles, information architecture, functional requirements, technical stack, content guidelines, SEO strategy, media strategy, and deployment standards. Every other specification document in the project repository derives its authority from this Bible.

---

## 1. Executive Summary & Project Snapshot

Town Hall Public School is an established educational institution in Lucknow, Uttar Pradesh, dedicated to providing accessible, high-quality, holistic education from Nursery through Class XII. The institution operates under the UP Board curriculum with English as the medium of instruction.

### Project Identity & Core Metadata

| Parameter | Official Specification | Notes / Governance |
| :--- | :--- | :--- |
| **School Name** | Town Hall Public School | Official legal & brand entity |
| **Location Address** | Tilak Nagar, Aishbagh, Lucknow, Uttar Pradesh, India - 226004 | Official campus location |
| **Google Maps Pin** | Tilak Nagar, Aishbagh, Lucknow, Uttar Pradesh 226004 | Embed target for Contact & Footer maps |
| **Affiliation Board** | UP Board (Uttar Pradesh Board of High School and Intermediate Education) | Curriculum standard |
| **Instruction Medium** | English Medium | Primary medium of instruction |
| **Grade Offerings** | Nursery to Class XII (K-12) | Primary, Middle, Secondary, Senior Secondary |
| **Primary Phone** | +91 9235445595 | Official admissions & inquiry line |
| **Secondary Phone** | +91 9235445596 | Administrative line |
| **Official Email** | thps1996@gmail.com | Official contact email |
| **Established Year** | 1996 (Derived from email domain handle; historical details subject to verification) | [PLACEHOLDER - Historical verification required] |

---

## 2. Strategic Objectives & Core Value Proposition

The primary goal of this project is to design and develop a **premium, modern, elegant, and deeply trustworthy school website**. The digital platform must establish immediate confidence among prospective and existing parents, drive qualified admission enquiries, and clearly communicate the school’s core philosophy: education as a catalyst for personal growth, community transformation, and social mobility.

### Key Objectives

1. **Build Institutional Trust**: Present an authentic, warm, and highly professional digital presence that reassures parents regarding academic rigor, safety, and student care.
2. **Drive Admission Enquiries**: Convert visiting parents into prospective applicants via intuitive navigation, clear calls to action (CTAs), and transparent scholarship information.
3. **Communicate Educational Philosophy**: Articulate the school's commitment to holistic growth, character building, critical thinking, and social cohesion over mere rote examination prep.
4. **Deliver Exceptional UX/UI**: Offer a fast, mobile-first, highly accessible web experience inspired by world-class educational sites (emphasizing visual whitespace, typography, and storytelling) without copycat visual tropes or bloated graphics.

---

## 3. Brand Personality & Messaging Architecture

Town Hall Public School’s brand voice is calm, confident, warm, and principled. It speaks directly to parents and community members with clarity and respect.

### Brand Personality Spectrum

- **Primary Attributes**: Premium, Welcoming, Academic, Modern, Growth-Focused, Trustworthy.
- **Secondary Attributes**: Student-Centric, Student-First, Community-Driven, Accessible, Warm, Professional.

### Messaging Hierarchy

```
                                  [ PRIMARY BRAND STATEMENT ]
                       "Where Every Child Discovers Their Best Self"
                                              |
        +-------------------------------------+-------------------------------------+
        |                                     |                                     |
[ SUPPORTING PILLAR 1 ]             [ SUPPORTING PILLAR 2 ]             [ SUPPORTING PILLAR 3 ]
"Education That Builds Character,   "Helping Every Child Learn,          "Shaping Confident Minds.
  Confidence, and Community."          Grow, and Belong."                 Inspiring Better Futures."
```

### Guidance on Copy Execution
- **DO**: Use warm, structured, parent-focused language that highlights student discovery, mentorship, civic responsibility, and equal opportunity.
- **DON'T**: Use high-pressure sales copy, generic marketing jargon ("World's #1 School"), fabricated statistics, or clunky legacy text.

---

## 4. Official Statements & Approved Copy Foundations

The official copy blocks provided below constitute immutable baseline facts. They take precedent over all legacy marketing copy.

### 4.1 Official Mission Statement

> *"The mission of Town Hall Public School is to provide high-quality educational opportunities that empower students to become responsible, productive citizens and enthusiastic lifelong learners.*
> 
> *Through its comprehensive educational programmes, the school fosters intellectual curiosity, creative expression and values diversity while measuring success through personal growth and meaningful contributions to society."*

### 4.2 Official Director’s Message (Full Version for About Page)

> *"Welcome to our School Community,*
> 
> *At our core, we believe that education is not just a path to individual success, but the ultimate catalyst for community transformation.*
> 
> *We understand that true education goes far beyond textbooks and examinations.*
> 
> *For us, the classroom is a launching pad for holistic growth and societal upliftment.*
> 
> *We are committed to providing an environment where financial barriers do not limit a child's horizon, and where every student is empowered to discover and become the best version of themselves.*
> 
> *Our mission centres on education as a powerful equaliser, equipping students with the insight and capability to transcend barriers and drive generational advancement.*
> 
> *Recognising that meaningful progress relies on unity, we cultivate an environment of mutual respect and social cohesion, preparing our students to build bridges rather than walls.*
> 
> *Ultimately, we define true achievement by one's contribution to the collective good, inspiring our youth to pursue personal excellence so they may actively enrich and uplift society as a whole."*

### 4.3 Official Director's Message (Shortened Homepage Excerpt)

> *"Welcome to our School Community,*
> 
> *At our core, we believe that education is not just a path to individual success, but the ultimate catalyst for community transformation. We understand that true education goes far beyond textbooks and examinations. For us, the classroom is a launching pad for holistic growth and societal upliftment. We are committed to providing an environment where financial barriers do not limit a child's horizon..."*
> 
> *(Followed by a prominent `Read Full Message ->` link directing to [About Us](file:///c:/Users/VIHAN/Desktop/school/project/PROJECT_BIBLE.md#7-information-architecture--sitemap)).*

### 4.4 Why Choose Town Hall (Core Value Pillars)

| Pillar | Approved Descriptive Text |
| :--- | :--- |
| **Academic Excellence** | Rigorous academic programmes that bridge learning gaps, unlock potential and prepare students for the future. |
| **Student Centric Learning** | Interactive classrooms that move beyond rote learning to encourage critical thinking and real world problem solving. |
| **Low Student Teacher Ratio** | Personalised attention, mentorship and academic support for every child. |
| **Real World Exposure** | Career Days featuring professionals from multiple industries who help students understand future career opportunities. |
| **Holistic Development** | Focus on curiosity, creativity, confidence, character, and civic awareness. |
| **Values & Community** | Mutual respect, unity, harmony, building bridges, and responsible citizenship. |

---

## 5. Design Philosophy & Visual Identity

The design system balances editorial elegance with warm accessibility. It draws inspiration strictly from high-end institutional benchmarks (such as `shrewsburyindia.in`) for typography contrast, generous white space, cinematic photography, and subtle motion pacing.

### 5.1 Critical Design Constraints

- **Strict Non-Imitation Rule**: Do NOT copy component layouts, DOM structure, navigation bars, or branding elements from reference sites.
- **Avoid Visual Clutter**: No heavy glassmorphism, aggressive gradient overlays, floating 3D graphics, neon accents, or distracting parallax effects.
- **Subtle Micro-Animations**: Use Framer Motion exclusively for gentle fades, progressive stagger reveals, and smooth modal transitions.

### 5.2 Typography System

- **Primary Headings**: `Poppins` (Google Font) – Weights: 600 (Semi-Bold), 700 (Bold). Delivers warmth, clarity, and structural confidence.
- **Body & Interface**: `Inter` (Google Font) – Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold). Delivers clean readability across all screen sizes.

### 5.3 Color Palette Architecture

Until official logo vector files are received for color extraction, the web design system will utilize the following curated token palette:

| Color Token | Hex Code | HSL Value | Usage Specification |
| :--- | :--- | :--- | :--- |
| **Primary Blue** | `#1E3A8A` | `hsl(224, 64%, 33%)` | Header bars, primary CTAs, major section titles, authoritative panels |
| **Accent Yellow** | `#F59E0B` | `hsl(38, 92%, 50%)` | Key badge highlights, scholarship banners, interactive focus indicators |
| **Background Light**| `#F8FAFC` | `hsl(210, 40%, 98%)` | Primary page background, card surfaces |
| **Pure White** | `#FFFFFF` | `hsl(0, 0%, 100%)` | Container cards, sticky navigation background, modal dialogs |
| **Text Dark Neutral**| `#0F172A` | `hsl(222, 47%, 11%)` | Primary body text, headings, crisp typography |
| **Text Muted** | `#475569` | `hsl(215, 16%, 47%)` | Subtitles, metadata, secondary captions |
| **Border Neutral** | `#E2E8F0` | `hsl(214, 32%, 91%)` | Subtle card borders, divider rules |

---

## 6. Known Facilities & Facility Governance

Facilities showcased on the website must strictly reflect verified campus physical infrastructure.

### Verified Campus Facilities

1. **Computer Lab**: Modern workstation setups for digital literacy and coding fundamentals.
2. **Physics Lab**: Hands-on experimental setup for high school science practicals.
3. **Chemistry Lab**: Fully equipped laboratory for chemical experimentations and safety standards.
4. **Biology Lab**: Microscope stations, anatomical models, and life science study kits.
5. **Sports Facilities**: Outdoor/indoor areas for physical education, team sports, and fitness.
6. **Music Room**: Dedicated space for vocal training, instruments, and rhythmic learning.
7. **Dance Room**: Performing arts studio for dance and cultural rehearsals.
8. **Library**: Curated collection of academic books, literature, and reading areas.

### Facility Governance Rule
- **Smart Classrooms**: Must be explicitly published as `[PLACEHOLDER - Client Confirmation Required]`.
- **Unverified Facilities**: Any facility not listed above must NOT be published as active without written confirmation.

---

## 7. Information Architecture & Sitemap

The website comprises 9 primary page routes designed to take parents through a structured conversion funnel: **Discover -> Learn -> Validate -> Engage**.

```
                           +------------------------+
                           |       Homepage         |
                           |          (/)           |
                           +-----------+------------+
                                       |
     +-----------------+---------------+---------------+-----------------+
     |                 |                               |                 |
+----+----+     +------+-----+                   +-----+------+    +-----+----+
|  About  |     | Academics  |                   | Admissions |    | Contact  |
| (/about)|     |(/academics)|                   |(/admissions|    |(/contact)|
+----+----+     +------+-----+                   +-----+------+    +-----+----+
     |                 |                               |                 |
     +-----------------+---------------+---------------+-----------------+
                                       |
     +-----------------+---------------+---------------+-----------------+
     |                 |                               |                 |
+----+----+     +------+-----+                   +-----+------+    +-----+----+
|Facilities     |   Gallery  |                   |   Events   |    | Careers  |
|(/facilities)  | (/gallery) |                   |  (/events) |    |(/careers)|
+---------+     +------------+                   +------------+    +----------+
```

### Detailed Route Specifications

1. **Home (`/`)**: High-impact introduction, brand statement, Director excerpt, key pillars, facility preview, scholarship teaser, admissions CTA.
2. **About Us (`/about`)**: Full Director message, mission statement, core philosophy, community focus, school leadership context.
3. **Academics (`/academics`)**: Breakdown of Nursery/Primary, Middle School, and Secondary/Senior Secondary wings, UP Board curriculum orientation, learning methodology.
4. **Admissions (`/admissions`)**: Transparent entry requirements, merit/need-based scholarship details, inquiry form, download link for prospectus `[PLACEHOLDER]`.
5. **Facilities (`/facilities`)**: Comprehensive overview of verified labs, library, sports, creative studios, and pending Smart Classroom status.
6. **Gallery (`/gallery`)**: Visual grid of campus life, classroom learning, cultural events, and sports activities using photo-mapping placeholders.
7. **Events (`/events`)**: Annual event calendar, upcoming celebrations, academic competitions, and community outreach updates.
8. **Careers (`/careers`)**: "Join Our Team" portal, teaching/administrative open roles, online application form with PDF resume upload integration.
9. **Contact Us (`/contact`)**: Interactive inquiry form, direct phone numbers, thps1996@gmail.com link, address, Google Maps pin embed.

---

## 8. Technical Architecture & Technology Stack

The platform is engineered using modern full-stack web standards, prioritizing high performance, SEO optimization, and effortless maintainability.

```
+-----------------------------------------------------------------------+
|                          Next.js 15 App Router                        |
|                                                                       |
|  +-----------------------+ +--------------------+ +----------------+  |
|  | TypeScript (Strict)   | | Tailwind CSS v3/v4 | | Framer Motion  |  |
|  +-----------------------+ +--------------------+ +----------------+  |
|  | Lucide React Icons    | | React Hook Form    | | Zod Schema Val |  |
|  +-----------------------+ +--------------------+ +----------------+  |
+-----------------------------------++----------------------------------+
                                    ||
                                    \/
+-----------------------------------------------------------------------+
|                    Deployment & Analytics Infrastructure              |
|                                                                       |
|  +-----------------------+ +--------------------+ +----------------+  |
|  | Vercel Edge Server    | | Google Analytics 4 | | Search Console |  |
|  +-----------------------+ +--------------------+ +----------------+  |
|  | JSON-LD Schemas       | | Dynamic Sitemap    | | Open Graph    |  |
|  +-----------------------+ +--------------------+ +----------------+  |
+-----------------------------------------------------------------------+
```

### Core Stack Specifications

- **Framework**: Next.js 15 (App Router architecture using React Server Components for optimal render speed).
- **Language**: TypeScript (Strict mode enabled, no `any` types).
- **Styling**: Tailwind CSS (Utility-first styling adhering strictly to visual design tokens).
- **Animation**: Framer Motion (Restrained micro-interactions, scroll reveals, lazy animation execution).
- **Form Handling**: React Hook Form paired with Zod schema validation for robust client-side & API validation.
- **Iconography**: Lucide React (Clean, lightweight stroke icons).
- **Deployment Platform**: Vercel (Edge network deployment, automatic SSL, CI/CD integration).

---

## 9. Functional Requirements Matrix

| Feature ID | Feature Name | Detailed Functional Specification | Implementation Strategy |
| :--- | :--- | :--- | :--- |
| **FR-01** | **Responsive Design** | Pixel-perfect layout across mobile (320px+), tablet (768px+), desktop (1024px+), and ultra-wide (1440px+). | Tailwind breakpoint system (`sm`, `md`, `lg`, `xl`, `2xl`). |
| **FR-02** | **Admissions CTA** | Sticky header CTA button + prominent section banners driving to `/admissions` & enquiry modal. | Reusable `<AdmissionsCTA />` component. |
| **FR-03** | **Contact Form** | Inputs for Parent Name, Phone, Email, Student Grade Interest, Message. Includes server-side validation & submission feedback. | React Hook Form + Zod + Next.js Server Action / API Route. |
| **FR-04** | **Google Maps Integration** | Embedded responsive map frame pointing to Tilak Nagar, Aishbagh, Lucknow 226004. | Standard clean iframe with lazy loading (`loading="lazy"`). |
| **FR-05** | **Media Gallery** | Filterable grid (Campus, Labs, Events) supporting high-res photography popups. | Accessible Modal / Lightbox component. |
| **FR-06** | **Events Calendar** | List view of upcoming events with date tags, titles, category badges, and summary modal. | JSON-driven event structure with placeholder fallback. |
| **FR-07** | **Careers Portal** | List of open vacancies with job descriptions, requirements, and application modal. | Dynamic dynamic job listing component. |
| **FR-08** | **Resume Upload** | Secure PDF/DOCX file attachment handling in career form (max 5MB validation). | Form multipart upload handler with client-size check. |
| **FR-09** | **Scholarship Information** | Dedicated informative block detailing Merit-based and Need-based assistance eligibility. | Structural highlight panel in Home and Admissions pages. |
| **FR-10** | **SEO & Structured Data** | Open Graph tags, Twitter cards, dynamic XML sitemap, `robots.txt`, JSON-LD `EducationalOrganization` schema. | Next.js Metadata API + Custom JSON-LD script inject. |
| **FR-11** | **Analytics & Console** | Integration of GA4 tracking scripts and Google Search Console meta verification tags. | `@next/third-parties/google` component package. |
| **FR-12** | **Accessibility (a11y)**| Full keyboard navigation compliance, ARIA attributes, color contrast >= 4.5:1, screen reader text. | Native HTML5 semantics + Automated AXE auditing. |

---

## 10. Photo Mapping & Visual Asset Strategy

The platform relies on photography-led storytelling. Until custom high-resolution campus photography is conducted, existing photo reference codes must be assigned as follows:

### Photo Mapping Reference Table

| Target Section | Reference ID | Asset Description & Visual Intent | Status |
| :--- | :--- | :--- | :--- |
| **Homepage Hero** | `a19` | Inspiring shot of students engaged in learning or campus environment | Active Placeholder |
| **Why Choose Us** | `a20` | Collaborative student interaction highlighting mentorship & values | Active Placeholder |
| **Director's Desk**| `a2` | Professional portrait of the School Director / Leadership | Active Placeholder |
| **Facilities Showcase**| `a29` | Student working in science lab or computer lab space | Active Placeholder |
| **Campus Life 1** | `a9` | Outdoor sports, morning assembly, or playground activity | Active Placeholder |
| **Campus Life 2** | `a13` | Cultural performance, art session, or group activity | Active Placeholder |
| **Events Banner** | `a13` | Celebration moment, annual function, or competition | Active Placeholder |
| **Gallery Grid Item 1**| `a3` | Classroom teaching / interactive smart desk session | Active Placeholder |
| **Gallery Grid Item 2**| `a12` | Library reading session / quiet academic study | Active Placeholder |
| **Gallery Grid Item 3**| `a17` | Physical education / sports day sprint | Active Placeholder |
| **Gallery Grid Item 4**| `a18` | Music or dance workshop rehearsal | Active Placeholder |
| **Gallery Grid Item 5**| `a23` | Community outreach or science exhibition showcase | Active Placeholder |

### Photography Protocol & Future Capture Checklist
- **[ ] Shoot Requirement 1**: Professional exterior campus architectural shots (Golden hour lighting).
- **[ ] Shoot Requirement 2**: High-res interior lab photographs (Physics, Chemistry, Biology, Computer Labs).
- **[ ] Shoot Requirement 3**: Unstaged, authentic student activity shots across primary and senior grades.
- **[ ] Shoot Requirement 4**: High-resolution executive portrait of the Director.

---

## 11. Placeholder Governance & Unresolved Items Protocol

To preserve institutional integrity, no speculative claims or invented figures may be published. Any missing data point MUST be rendered using the strict placeholder protocol: `[PLACEHOLDER - Short Reason]`.

### Comprehensive Placeholder Log

1. **Institutional Vision Statement**: `[PLACEHOLDER - Official vision statement pending client board approval]`
2. **Parent & Student Testimonials**: `[PLACEHOLDER - Verified parent testimonials will be featured here following community review; no fake quotes permitted]`
3. **Smart Classrooms Facility**: `[PLACEHOLDER - Client Confirmation Required regarding active smart board installations]`
4. **Detailed Fee Structure**: `[PLACEHOLDER - Fee schedule available upon direct inquiry at the campus admissions office]`
5. **Detailed Admission Procedure Steps**: `[PLACEHOLDER - Step-by-step admissions workflow pending administrative confirmation]`
6. **School Founding History**: `[PLACEHOLDER - Historical milestones and founder profile pending client archival review]`
7. **Latest News & Press Releases**: `[PLACEHOLDER - School news feed will be activated upon academic session launch]`

---

## 12. Quality Assurance, Performance & Launch Protocol

Prior to production deployment on Vercel, the site must pass the following release gates:

### Core Performance Benchmarks (Lighthouse target: >= 90/100)
- **Largest Contentful Paint (LCP)**: < 2.5s (Optimized Next.js images with `priority` tag on hero image).
- **First Input Delay (FID) / INP**: < 100ms.
- **Cumulative Layout Shift (CLS)**: < 0.1 (Strict dimension reservation on image wrappers).
- **Total Byte Weight**: < 1.5MB initial bundle load across static pages.

### Launch Checklist
- [ ] Verify zero occurrences of invented copy or generic lipsum text.
- [ ] Confirm all `[PLACEHOLDER]` tags render gracefully without breaking UI layouts.
- [ ] Audit phone numbers (`+91 9235445595`, `+91 9235445596`) for clickable `tel:` hyperlinks.
- [ ] Audit official email (`thps1996@gmail.com`) for clickable `mailto:` link.
- [ ] Validate Google Maps iframe pointing to Lucknow 226004.
- [ ] Ensure JSON-LD `EducationalOrganization` schema validates on Google Rich Results Test.
- [ ] Test career form PDF upload against file size and extension restrictions.

---

## Related Project Specifications

- [PROJECT.md](file:///c:/Users/VIHAN/Desktop/school/project/PROJECT.md) – Executive Overview & Scope Snapshot
- [BRAND.md](file:///c:/Users/VIHAN/Desktop/school/project/BRAND.md) – Comprehensive Brand Identity & Voice Guide
- [CONTENT.md](file:///c:/Users/VIHAN/Desktop/school/project/CONTENT.md) – Page-by-Page Editorial Content Plan
- [DESIGN.md](file:///c:/Users/VIHAN/Desktop/school/project/DESIGN.md) – UX/UI Design System & Component Guidelines
- [FEATURES.md](file:///c:/Users/VIHAN/Desktop/school/project/FEATURES.md) – Complete Functional & Technical Feature Matrix
- [PHOTO_PLAN.md](file:///c:/Users/VIHAN/Desktop/school/project/PHOTO_PLAN.md) – Detailed Photography Strategy & Shot List
- [SEO.md](file:///c:/Users/VIHAN/Desktop/school/project/SEO.md) – Comprehensive Search Engine Optimization Strategy
- [TASKS.md](file:///c:/Users/VIHAN/Desktop/school/project/TASKS.md) – Granular Sprint & Task Breakdown
- [PLACEHOLDERS.md](file:///c:/Users/VIHAN/Desktop/school/project/PLACEHOLDERS.md) – Comprehensive Placeholder Register
- [ASSETS.md](file:///c:/Users/VIHAN/Desktop/school/project/ASSETS.md) – Asset Management & Directory Architecture
- [DEPLOYMENT.md](file:///c:/Users/VIHAN/Desktop/school/project/DEPLOYMENT.md) – Vercel Infrastructure & Launch Runbook
- [DECISIONS.md](file:///c:/Users/VIHAN/Desktop/school/project/DECISIONS.md) – Architectural & Product Decision Log
- [TODO.md](file:///c:/Users/VIHAN/Desktop/school/project/TODO.md) – Pre-Launch Action Item Register
