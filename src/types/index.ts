// =============================================================================
// Town Hall Public School — Core Type Definitions
// Source: PROJECT_BIBLE.md §9, FEATURES.md §2
// =============================================================================

/** Navigation link item used in Header and Footer */
export interface NavLink {
  label: string;
  href: string;
}

/** Gallery image item for the filterable gallery grid */
export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  caption?: string;
}

/** Gallery filter categories per FEATURES.md §2.3 */
export type GalleryCategory =
  | "All"
  | "Digital Scrapbook & Flyers"
  | "Academic Milestones"
  | "Awards & Achievements"
  | "Cultural Events"
  | "Campus Life";

/** Event item for the events calendar */
export interface EventItem {
  id: string;
  title: string;
  date: string;
  category: EventCategory;
  description: string;
  isUpcoming: boolean;
  image?: string;
}

export type EventCategory =
  | "Academic"
  | "Cultural"
  | "Cultural & Observances"
  | "Sports"
  | "Community"
  | "Competition";

export interface JobListing {
  id: string;
  title: string;
  department: string;
  type: string;
  description: string;
  qualifications: string;
  experience: string;
  requirements?: string[];
  isActive: boolean;
}

/** Contact form data schema per FEATURES.md §2.1 */
export interface ContactFormData {
  parentName: string;
  phone: string;
  email: string;
  grade: string;
  message?: string;
}

/** Career application form data per FEATURES.md §2.2 */
export interface CareerFormData {
  fullName: string;
  phone: string;
  email: string;
  position: string;
  coverNote?: string;
  resume: FileList;
}

/** Facility item for the facilities page */
export interface FacilityItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  image?: string;
  isPlaceholder?: boolean;
}

/** Academic wing breakdown */
export interface AcademicWing {
  id: string;
  title: string;
  grades: string;
  description: string;
  highlights: string[];
}
