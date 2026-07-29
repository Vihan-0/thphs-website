# Asset Inventory & Media Architecture: Town Hall Public School

## Purpose

This document provides a complete inventory of media assets, directory organization rules, optimization specifications, and photography placeholders for the Town Hall Public School website.

---

## 1. Asset Directory Architecture

All web assets must be organized within the Next.js `public/` directory following strict naming conventions:

```
public/
├── branding/
│   ├── logo-primary.png          # [PLACEHOLDER - Official primary logo]
│   ├── logo-white.png            # White contrast variant for dark footers
│   └── favicon.ico               # Institutional browser icon
├── images/
│   ├── hero/
│   │   └── hero-main.jpg         # Photo reference code: a19
│   ├── leadership/
│   │   └── director-portrait.jpg # Photo reference code: a2
│   ├── campus/
│   │   ├── why-choose.jpg        # Photo reference code: a20
│   │   ├── facilities.jpg        # Photo reference code: a29
│   │   ├── campus-life-1.jpg     # Photo reference code: a9
│   │   └── campus-life-2.jpg     # Photo reference code: a13
│   └── gallery/
│       ├── gallery-1.jpg         # Photo reference code: a3
│       ├── gallery-2.jpg         # Photo reference code: a12
│       ├── gallery-3.jpg         # Photo reference code: a17
│       ├── gallery-4.jpg         # Photo reference code: a18
│       └── gallery-5.jpg         # Photo reference code: a23
└── og-image.jpg                  # OpenGraph social share card visual (1200x630px)
```

---

## 2. Technical Asset Guidelines

### 2.1 Image Optimization Standards
- **Format**: All images served as modern `WebP` or `AVIF` formats via Next.js `<Image />` optimization component.
- **Sizing**:
  - Hero Backgrounds: `1920x1080px` max, quality `85`.
  - Feature Cards: `800x600px` max, quality `80`.
  - Director Portrait: `600x800px` max, quality `85`.
  - Thumbnails / Gallery: `600x400px` max, quality `75`.
- **Accessibility**: Mandatory descriptive `alt` tags on every image element (e.g., `alt="Town Hall Public School students collaborating in classroom"`).

---

## 3. Asset Mapping Reference

| Logical Asset Name | Mapped Reference Code | Visual Context | Implementation Target |
| :--- | :--- | :--- | :--- |
| `hero-main.jpg` | `a19` | Inspiring student engagement moment | Homepage Hero Banner |
| `why-choose.jpg` | `a20` | Collaborative student mentorship | Why Choose Us Section |
| `director-portrait.jpg`| `a2` | Executive portrait of School Director | Director Message (Home & About) |
| `facilities.jpg` | `a29` | Science lab / computer lab session | Facilities Preview Panel |
| `campus-life-1.jpg` | `a9` | Sports / outdoor activity | Campus Life Section |
| `campus-life-2.jpg` | `a13` | Stage performance / cultural event | Campus Life & Events Banner |
| `gallery-1.jpg` | `a3` | Classroom teaching session | Media Gallery Grid Item 1 |
| `gallery-2.jpg` | `a12` | Library reading session | Media Gallery Grid Item 2 |
| `gallery-3.jpg` | `a17` | Athletic sports sprint | Media Gallery Grid Item 3 |
| `gallery-4.jpg` | `a18` | Music and dance practice | Media Gallery Grid Item 4 |
| `gallery-5.jpg` | `a23` | Science project exhibition | Media Gallery Grid Item 5 |

---

## Related Documents

- [PROJECT_BIBLE.md](file:///c:/Users/VIHAN/Desktop/school/project/PROJECT_BIBLE.md) – Master Project Bible
- [PHOTO_PLAN.md](file:///c:/Users/VIHAN/Desktop/school/project/PHOTO_PLAN.md) – Detailed Photography Strategy
- [DESIGN.md](file:///c:/Users/VIHAN/Desktop/school/project/DESIGN.md) – Component Design Guidelines
- [PLACEHOLDERS.md](file:///c:/Users/VIHAN/Desktop/school/project/PLACEHOLDERS.md) – Open Items Log
