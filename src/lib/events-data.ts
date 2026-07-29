// =============================================================================
// Town Hall Public High School — Official Academic & Cultural Events Catalog (2026)
// =============================================================================

import type { EventItem } from "@/types";

export const EVENTS_DATA: EventItem[] = [
  // Academic Events
  {
    id: "e1",
    title: "English Oration & Literary Showcase",
    date: "27 August 2026",
    category: "Academic",
    image: "/photos/cc (13).jpeg",
    description:
      "Fostering public speaking confidence, clear articulation, and deep engagement with English literature.",
    isUpcoming: true,
  },
  {
    id: "e2",
    title: "Hindi Rhetoric & Elocution Competition",
    date: "01 September 2026",
    category: "Academic",
    image: "/photos/cc (17).jpeg",
    description:
      "Celebrating expressive articulation, poise, and linguistic mastery in the Hindi language.",
    isUpcoming: true,
  },
  {
    id: "e3",
    title: "Hindi Academic Portfolio Submission",
    date: "15 September 2026",
    category: "Academic",
    image: "/photos/bb (38).jpg",
    description:
      "A structured assignment designed to evaluate deep linguistic comprehension and literary appreciation.",
    isUpcoming: true,
  },
  {
    id: "e4",
    title: "Impromptu Oration & Tech-Commercial Showcase",
    date: "24 October 2026",
    category: "Academic",
    image: "/photos/bb (11).jpg",
    description:
      "A multidisciplinary forum that tests spontaneous critical thinking alongside practical applications in Computer Science and Business Studies.",
    isUpcoming: true,
  },

  // Cultural & Observances Events
  {
    id: "e5",
    title: "Independence Day Commemoration",
    date: "15 August 2026",
    category: "Cultural & Observances",
    image: "/photos/bb (38).jpg",
    description:
      "Honouring national pride through patriotic songs, inspiring student speeches, and thematic skits performed by our young learners.",
    isUpcoming: true,
  },
  {
    id: "e6",
    title: "Raksha Bandhan Celebration",
    date: "28 August 2026",
    category: "Cultural & Observances",
    image: "/photos/bb (8).jpg",
    description:
      "A vibrant cultural event showcasing student-led skits and heartwarming musical performances celebrating harmony and shared bonds.",
    isUpcoming: true,
  },
  {
    id: "e7",
    title: "Teachers’ Day Observance",
    date: "05 September 2026",
    category: "Cultural & Observances",
    image: "/photos/bb (13).jpg",
    description:
      "Expressing gratitude and respect to educators for their dedicated academic leadership and mentorship.",
    isUpcoming: true,
  },
  {
    id: "e8",
    title: "Janmashtami Celebration",
    date: "07 September 2026",
    category: "Cultural & Observances",
    image: "/photos/bb (21).jpg",
    description:
      "A joyful cultural showcase featuring creative tableau displays by students and a festive fancy-dress presentation for pre-primary classes.",
    isUpcoming: true,
  },
  {
    id: "e9",
    title: "Gandhi Jayanti & Swachh Bharat Drive",
    date: "02 October 2026",
    category: "Cultural & Observances",
    image: "/photos/bb (7).jpg",
    description:
      "Promoting core values of truth and responsibility through student speeches, themed art competitions, and practical cleanliness initiatives.",
    isUpcoming: true,
  },
  {
    id: "e10",
    title: "Dussehra Celebration",
    date: "18 October 2026",
    category: "Cultural & Observances",
    image: "/photos/bb (26).jpg",
    description:
      "Bringing epic traditions to life through expressive theatrical plays and dramatic performances centred on the enduring victory of good over evil.",
    isUpcoming: true,
  },
];

// Alias export for compatibility
export const eventsData = EVENTS_DATA;

export default EVENTS_DATA;
