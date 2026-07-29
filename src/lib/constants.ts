// =============================================================================
// Town Hall Public High School — Site Constants & Metadata
// Official Institutional Data & Specifications
// =============================================================================

import type { NavLink, FacilityItem, AcademicWing } from "@/types";

// ---------------------------------------------------------------------------
// School Identity
// ---------------------------------------------------------------------------
export const SCHOOL = {
  name: "Town Hall Public High School",
  shortName: "THPHS",
  tagline: "Where Every Child Discovers Their Best Self",
  location: "Tilak Nagar, Aishbagh, Lucknow, Uttar Pradesh 226004",
  locationShort: "Tilak Nagar, Aishbagh, Lucknow",
  board: "UP Board",
  medium: "English Medium",
  grades: "PG to Class X",
  phone: {
    primary: "+91 9235445595",
    secondary: "+91 9235445596",
  },
  email: "thps1996@gmail.com",
  established: 1996,
  timings: {
    summer: "7:15 AM to 1:35 PM (April to August)",
    winter: "8:45 AM to 3:40 PM (September to March)",
  },
  url: "https://www.townhallpublicschool.com",
  googleMapsUrl: "https://maps.app.goo.gl/D5wGmQVGXsnymHig8?g_st=iw",
  coordinates: {
    lat: 26.8378,
    lng: 80.9142,
  },
  mapQuery: "Tilak+Nagar+Aishbagh+Lucknow+Uttar+Pradesh+226004",
} as const;

// ---------------------------------------------------------------------------
// Navigation Links
// ---------------------------------------------------------------------------
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

// ---------------------------------------------------------------------------
// Footer Quick Links
// ---------------------------------------------------------------------------
export const FOOTER_LINKS: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Facilities", href: "/facilities" },
  { label: "Admissions", href: "/admissions" },
  { label: "Scholarships", href: "/admissions#scholarships" },
  { label: "Careers", href: "/careers" },
];

// ---------------------------------------------------------------------------
// Verified Facilities
// ---------------------------------------------------------------------------
export const FACILITIES: FacilityItem[] = [
  {
    id: "computer-lab",
    name: "Computer Lab",
    description:
      "Modern workstation setups for digital literacy, programming logic, and coding fundamentals.",
    icon: "Monitor",
  },
  {
    id: "physics-lab",
    name: "Physics Lab",
    description:
      "Hands-on experimental setup for mechanics, optics, electronics, and high school science practicals.",
    icon: "Atom",
  },
  {
    id: "chemistry-lab",
    name: "Chemistry Lab",
    description:
      "Fully equipped laboratory with reagents, titration stations, and comprehensive safety equipment.",
    icon: "FlaskConical",
  },
  {
    id: "biology-lab",
    name: "Biology Lab",
    description:
      "Microscope stations, anatomical models, biological specimens, and life science study kits.",
    icon: "Microscope",
  },
  {
    id: "sports",
    name: "Sports Facilities",
    description:
      "Outdoor play courts, athletic training areas for physical education, team sports, and fitness.",
    icon: "Trophy",
  },
  {
    id: "music-room",
    name: "Music Room",
    description:
      "Dedicated space for vocal training, instrumental music practice, and rhythmic learning.",
    icon: "Music",
  },
  {
    id: "dance-room",
    name: "Dance Studio",
    description:
      "Performing arts studio for dance rehearsals, cultural performances, and creative expression.",
    icon: "Drama",
  },
  {
    id: "library",
    name: "Library",
    description:
      "Curated collection of academic reference materials, literature, storybooks, and quiet reading areas.",
    icon: "BookOpen",
  },
  {
    id: "smart-classrooms",
    name: "Smart Classrooms",
    description:
      "Technology-enabled learning spaces equipped with interactive digital boards to make lessons engaging, visual, and highly interactive.",
    icon: "Presentation",
  },
];

// ---------------------------------------------------------------------------
// Academic Wings
// ---------------------------------------------------------------------------
export const ACADEMIC_WINGS: AcademicWing[] = [
  {
    id: "nursery-primary",
    title: "PG, Nursery & Primary",
    grades: "PG to Class V",
    description:
      "Foundation years focused on activity-based learning, literacy, numeracy, social skills, and creative play.",
    highlights: [
      "Activity-based learning",
      "Literacy & numeracy foundations",
      "Social skills development",
      "Creative play & exploration",
    ],
  },
  {
    id: "middle-school",
    title: "Middle School",
    grades: "Class VI to VIII",
    description:
      "Building analytical habits, scientific inquiry, language proficiency, and team project collaboration.",
    highlights: [
      "Scientific inquiry",
      "Analytical thinking",
      "Language arts proficiency",
      "Collaborative projects",
    ],
  },
  {
    id: "secondary",
    title: "Secondary",
    grades: "Class IX & X",
    description:
      "UP Board high school curriculum rigor, subject specialization, Class 10 board exam preparation, and academic guidance.",
    highlights: [
      "UP Board Class 10 exam prep",
      "Subject specialisation",
      "Academic guidance & exposure",
      "Mentorship programmes",
    ],
  },
];

// ---------------------------------------------------------------------------
// Why Choose Us Pillars
// ---------------------------------------------------------------------------
export const VALUE_PILLARS = [
  {
    id: "academic-excellence",
    title: "Academic Excellence",
    description:
      "Rigorous academic programmes that bridge learning gaps, unlock potential and prepare students for High School Board examinations.",
    icon: "GraduationCap",
  },
  {
    id: "real-world-learning",
    title: "Real World Learning",
    description:
      "Interactive classrooms that move beyond rote learning to encourage critical thinking, problem solving, and career exposure.",
    icon: "Globe",
  },
  {
    id: "character-community",
    title: "Character & Community",
    description:
      "Cultivating mutual respect, social cohesion, civic awareness, and leadership to help students build bridges in society.",
    icon: "Heart",
  },
] as const;

// ---------------------------------------------------------------------------
// Trust Strip Items
// ---------------------------------------------------------------------------
export const TRUST_ITEMS = [
  { label: "Tilak Nagar, Lucknow", icon: "MapPin" },
  { label: "PG to Class X", icon: "Users" },
  { label: "English Medium", icon: "Languages" },
  { label: "UP Board Affiliated", icon: "Award" },
  { label: "Merit & Need-Based Scholarships", icon: "Sparkles" },
] as const;

// ---------------------------------------------------------------------------
// Grade Options for Forms
// ---------------------------------------------------------------------------
export const GRADE_OPTIONS = [
  "Playgroup (PG)",
  "Nursery",
  "LKG",
  "UKG",
  "Class I",
  "Class II",
  "Class III",
  "Class IV",
  "Class V",
  "Class VI",
  "Class VII",
  "Class VIII",
  "Class IX",
  "Class X",
] as const;

// ---------------------------------------------------------------------------
// Career Position Options
// ---------------------------------------------------------------------------
export const POSITION_OPTIONS = [
  "Academic Coordinator",
  "Pre-Primary Educator",
  "Physical Education & Sports Educator",
  "Music Educator (Vocal / Instrumental)",
  "Primary Teacher",
  "Middle & Secondary Faculty",
  "Other",
] as const;

// ---------------------------------------------------------------------------
// Director's Messages
// ---------------------------------------------------------------------------
export const DIRECTOR_MESSAGE = {
  excerpt: `Welcome to our School Community,

At our core, we believe that education is not just a path to individual success, but the ultimate catalyst for community transformation. We understand that true education goes far beyond textbooks and examinations. For us, the classroom is a launching pad for holistic growth and societal upliftment. We are committed to providing an environment where financial barriers do not limit a child's horizon...`,

  full: `Welcome to our School Community,

At our core, we believe that education is not just a path to individual success, but the ultimate catalyst for community transformation.

We understand that true education goes far beyond textbooks and examinations.

For us, the classroom is a launching pad for holistic growth and societal upliftment.

We are committed to providing an environment where financial barriers do not limit a child's horizon, and where every student is empowered to discover and become the best version of themselves.

Our mission centres on education as a powerful equaliser, equipping students with the insight and capability to transcend barriers and drive generational advancement.

Recognising that meaningful progress relies on unity, we cultivate an environment of mutual respect and social cohesion, preparing our students to build bridges rather than walls.

Ultimately, we define true achievement by one's contribution to the collective good, inspiring our youth to pursue personal excellence so they may actively enrich and uplift society as a whole.`,
} as const;

// ---------------------------------------------------------------------------
// Mission Statement
// ---------------------------------------------------------------------------
export const MISSION_STATEMENT = `The mission of Town Hall Public High School is to provide high-quality educational opportunities that empower students to become responsible, productive citizens and enthusiastic lifelong learners.

Through its comprehensive educational programmes, the school fosters intellectual curiosity, creative expression and values diversity while measuring success through personal growth and meaningful contributions to society.`;

// ---------------------------------------------------------------------------
// Footer Copy
// ---------------------------------------------------------------------------
export const FOOTER_DESCRIPTION =
  "Town Hall Public High School is dedicated to providing quality education from PG to Class X in a nurturing environment that encourages curiosity, confidence, and lifelong learning.";

export const COPYRIGHT = `© ${new Date().getFullYear()} Town Hall Public High School. All Rights Reserved. Built with excellence.`;

// ---------------------------------------------------------------------------
// Parent FAQs — Frequently Asked Questions
// ---------------------------------------------------------------------------
export const PARENT_FAQS = [
  {
    question: "What grades are offered and what board curriculum is followed?",
    answer: "Town Hall Public High School provides high school education from PG through Class X. We follow the UP Board curriculum delivered exclusively in English Medium, combining academic rigor with practical learning."
  },
  {
    question: "How do I apply for admission for the 2026–27 session?",
    answer: "Admissions are open! You can submit an online inquiry through our website form, or visit our campus directly. Our admissions desk will schedule a personal interaction and campus tour."
  },
  {
    question: "Are scholarships available for students?",
    answer: "Yes, Town Hall Public High School offers both Merit-Based Scholarships (for academic and co-curricular achievers) and Need-Based Financial Assistance to ensure financial barriers do not limit a child's education."
  },
  {
    question: "What are the school timings and working days?",
    answer: "School operates Monday through Saturday. Summer Timings (April to August): 7:15 AM to 1:35 PM. Winter Timings (September to March): 8:45 AM to 3:40 PM."
  },
  {
    question: "How does the school ensure student safety and campus security?",
    answer: "Our campus is fully monitored under CCTV surveillance with gated entry, dedicated security personnel, and trained staff ensuring student safety during school hours and transport."
  },
  {
    question: "What science and technology facilities are available?",
    answer: "We offer dedicated Physics, Chemistry, Biology, and Computer Science laboratories, along with quiet reading library stations and smart learning tools for interactive learning."
  }
] as const;
