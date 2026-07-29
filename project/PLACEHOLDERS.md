# Master Placeholder Register & Open Items Log: Town Hall Public School

## Purpose

This document serves as the central register for all unverified, missing, or pending client content, assets, and approvals. It enforces strict compliance with the **Zero Invention Policy**, ensuring developers and copywriters handle unresolved items using the mandatory placeholder syntax: `[PLACEHOLDER - Reason]`.

---

## 1. Governance & Placeholder Rules

To maintain absolute institutional authenticity and avoid misrepresenting Town Hall Public School:
1. **Never Invent Data**: No speculative claims regarding founding years, pass percentages, student counts, campus acreage, or extra facilities.
2. **Never Use Lorem Ipsum**: All pending copy blocks must use the explicit placeholder format.
3. **Never Fabricate Testimonials**: Parent, student, or alumnus quotes must NOT be invented.
4. **Mandatory Marker Format**: `[PLACEHOLDER - Short Explanation]`.

---

## 2. Comprehensive Open Items Register

| Item ID | Category | Target Location | Description of Pending Data | Mandatory Placeholder Text | Required Action / Owner |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **PL-01** | Content | About Us (`/about`) | Institutional Vision Statement | `[PLACEHOLDER - Official vision statement pending client board approval]` | Client Board Review |
| **PL-02** | Content | Home (`/`), Admissions | Parent & Student Testimonials | `[PLACEHOLDER - Verified parent and student testimonials pending community collection]` | Administrative Team |
| **PL-03** | Facility | Facilities (`/facilities`) | Smart Classrooms Status | `[Smart Classrooms: PLACEHOLDER - Client Confirmation Required]` | Campus Facility Manager |
| **PL-04** | Content | Admissions (`/admissions`) | Step-by-Step Admission Procedure | `[PLACEHOLDER - Step-by-step admissions workflow pending administrative confirmation]` | Admissions Office |
| **PL-05** | Content | Admissions (`/admissions`) | Detailed Fee Structure Schedule | `[PLACEHOLDER - Detailed fee schedules are provided directly during campus visits or upon inquiry]` | Accounts Department |
| **PL-06** | History | About Us (`/about`) | Founding Year & Historical Milestones | `[PLACEHOLDER - Historical founding details and milestones pending archival verification]` | School Leadership |
| **PL-07** | Content | Events (`/events`) | Latest News & Announcements Feed | `[PLACEHOLDER - School announcements feed will activate prior to academic session start]` | School Admin |
| **PL-08** | Visual | Global Site | Vector Logo & Brand Color Extraction | `[PLACEHOLDER - Official vector logo files pending client delivery]` | Design Lead |
| **PL-09** | Visual | Global Site | Custom Campus High-Res Photography | `[PLACEHOLDER - Custom photography shoot planned for upcoming campus visit]` | Media Team |
| **PL-10** | Technical| Infrastructure | Google Analytics GA4 Measurement ID | `[PLACEHOLDER - Client GA4 property tracking ID required prior to production launch]` | Web Analytics Team |

---

## 3. Developer Guidance for Rendering Placeholders

When rendering placeholders in React/Next.js components, use a subtle, dignified UI alert component rather than raw broken text:

```tsx
// Example Placeholder UI Component Pattern
export function PlaceholderBlock({ label }: { label: string }) {
  return (
    <div className="p-4 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 text-sm italic">
      <span className="font-semibold text-slate-700">Notice: </span>
      {label}
    </div>
  );
}
```

---

## Related Documents

- [PROJECT_BIBLE.md](file:///c:/Users/VIHAN/Desktop/school/project/PROJECT_BIBLE.md) – Master Project Bible
- [CONTENT.md](file:///c:/Users/VIHAN/Desktop/school/project/CONTENT.md) – Page Copy Specs
- [FEATURES.md](file:///c:/Users/VIHAN/Desktop/school/project/FEATURES.md) – Functional Specifications
- [TODO.md](file:///c:/Users/VIHAN/Desktop/school/project/TODO.md) – Action Item Register
