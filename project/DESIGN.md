# Design System & UX/UI Guidelines: Town Hall Public School

## Purpose

This document outlines the design architecture, visual aesthetic, typography scale, color tokens, layout grids, component library specs, and motion guidelines for the Town Hall Public School website. It provides complete design governance for front-end developers implementing the site using Next.js and Tailwind CSS.

---

## 1. Design Philosophy & Architectural Tone

The visual design is inspired strictly by elite institutional web benchmarks (such as `shrewsburyindia.in`) in terms of **editorial tone, spacious layouts, strong typography, and photography-first storytelling**.

```
+-------------------------------------------------------------------------+
|                              DESIGN PRINCIPLES                          |
|                                                                         |
|  1. MINIMALIST ELEGANCE      Generous whitespace, non-cluttered cards.  |
|  2. TYPOGRAPHIC CLARITY      Poppins headings + Inter body text.        |
|  3. CALM COLOUR BALANCE      Deep Blue primary + Gold accent highlights.|
|  4. RESTRAINED MOTION        Subtle Framer Motion reveals only.         |
|  5. ZERO CLUTTER             NO glassmorphism, NO heavy neon gradients. |
+-------------------------------------------------------------------------+
```

---

## 2. Typography System & Font Scale

Headings use `Poppins` (Google Font) to convey warmth, institutional strength, and clarity. Body text uses `Inter` (Google Font) to ensure maximum legibility across screen sizes.

### Tailwind Type Scale Mapping

| Token Name | Font Family | Size (Desktop / Mobile) | Weight | Line Height | Usage Context |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-xl`| Poppins | `48px` / `36px` | 700 (Bold) | `1.15` | Homepage Hero H1 Heading |
| `display-lg`| Poppins | `36px` / `28px` | 600 (SemiBold)| `1.2` | Primary Page Titles (H1) |
| `heading-1` | Poppins | `30px` / `24px` | 600 (SemiBold)| `1.25` | Major Section Headings (H2) |
| `heading-2` | Poppins | `24px` / `20px` | 600 (SemiBold)| `1.3` | Card Headings & Sub-sections (H3) |
| `heading-3` | Poppins | `20px` / `18px` | 600 (SemiBold)| `1.35` | Small Feature Headers (H4) |
| `body-lg` | Inter | `18px` / `16px` | 400 (Regular) | `1.6` | Hero lead text, Director excerpt |
| `body-base` | Inter | `16px` / `14px` | 400 (Regular) | `1.5` | Default body paragraphs, card body |
| `body-sm` | Inter | `14px` / `13px` | 400 (Regular) | `1.4` | Helper text, footer links, metadata |
| `caption` | Inter | `12px` / `11px` | 500 (Medium) | `1.3` | Badges, image captions, tag labels |

---

## 3. Color Tokens & Theme Architecture

The website uses a restrained, high-contrast palette that ensures full WCAG 2.1 AA accessibility compliance.

```
[ Primary Deep Blue: #1E3A8A ]   --> Headers, Major CTAs, Section Titles
[ Accent Gold:       #F59E0B ]   --> Badges, Highlights, Focus Indicators
[ Dark Neutral:      #0F172A ]   --> Headings, Body Text
[ Surface White:     #FFFFFF ]   --> Content Cards, Dialog Containers
[ Off-White Canvas:  #F8FAFC ]   --> Page Backdrops, Alternating Sections
```

### Tailwind Configuration Extension Spec

```typescript
// tailwind.config.ts extension snippet
export const themeColors = {
  brand: {
    blue: '#1E3A8A',    // Primary institutional blue
    gold: '#F59E0B',    // Accent gold
    dark: '#0F172A',    // High-contrast text
    muted: '#475569',   // Subtitle text
    light: '#F8FAFC',   // Clean background
    border: '#E2E8F0',  // Subtle border lines
  }
};
```

---

## 4. Component Design System Specs

### 4.1 Global Navigation Header
- **Layout**: Sticky top navigation bar with a subtle shadow on scroll.
- **Desktop Grid**: Logo on the left, horizontal link menu centered, `Admissions Open` primary button on the right.
- **Mobile Drawer**: Clean slide-over overlay with full-screen dark overlay and large tap targets (minimum 44x44px).

### 4.2 Hero Component (`<Hero />`)
- **Composition**: Full-width container with a split layout (Text on left, high-res photography reference `a19` on right) or cinematic full-width image backdrop with dark overlay tint (opacity 40%).
- **Elements**: Category pill badge ("Admissions Open 2026–27"), Display-XL title, Body-LG subtitle, twin CTA button cluster (`Apply Now` primary filled blue, `Explore Campus` outlined neutral).

### 4.3 Content Cards & Surface Containers
- **Border Radius**: `rounded-xl` (12px) for cards, `rounded-2xl` (16px) for major section callout panels.
- **Shadow Tokens**: `shadow-sm` on rest, transitioning smoothly to `shadow-md` on hover.
- **Hover State**: Subtle `-translate-y-1` vertical lift over 200ms ease-out.

### 4.4 Form Controls & Inputs
- **Text Inputs**: `h-12`, `px-4`, `rounded-lg`, border `border-slate-300`, focus state `focus:ring-2 focus:ring-brand-gold focus:border-brand-blue`.
- **Validation Error States**: Red border `border-red-500` with inline caption text in `text-red-600`.

---

## 5. Micro-Animations & Motion Guidelines

Motion must be invisible until noticed, serving strictly to guide user orientation.

- **Library**: `framer-motion`.
- **Page Entrance**: Fade-in with 20px Y-axis translate (`opacity: [0, 1]`, `y: [20, 0]`) over `0.4s` duration.
- **Stagger Children**: Stagger container children by `0.1s` for card lists and feature grids.
- **Scroll Triggers**: Execute animations once when element enters `0.2` viewport margin (`viewport={{ once: true, amount: 0.2 }}`).
- **Reduced Motion**: Respect `prefers-reduced-motion` media queries by disabling transform animations.

---

## Related Documents

- [PROJECT_BIBLE.md](file:///c:/Users/VIHAN/Desktop/school/project/PROJECT_BIBLE.md) – Master Source of Truth
- [BRAND.md](file:///c:/Users/VIHAN/Desktop/school/project/BRAND.md) – Brand Strategy
- [CONTENT.md](file:///c:/Users/VIHAN/Desktop/school/project/CONTENT.md) – Editorial Content Breakdown
- [FEATURES.md](file:///c:/Users/VIHAN/Desktop/school/project/FEATURES.md) – Feature Specifications
- [ASSETS.md](file:///c:/Users/VIHAN/Desktop/school/project/ASSETS.md) – Media & Image Mapping
