// =============================================================================
// Town Hall Public High School — Careers & Open Positions Catalog (2026)
// =============================================================================

import type { JobListing } from "@/types";

export const JOB_LISTINGS: JobListing[] = [
  {
    id: "j1",
    title: "Academic Coordinator",
    department: "Academic Leadership Wing",
    type: "Full-Time",
    description:
      "Are you a passionate educator driven by curiosity, innovation, and a vision for academic excellence? We are looking for an inspiring Academic Coordinator who thrives on empowering teachers, fostering vibrant learning environments, and sparking intellectual curiosity in young minds.",
    qualifications:
      "Postgraduate (Master’s Degree) in English, Social Sciences, or a relevant field, along with a B.Ed.",
    experience:
      "Minimum 5 years of teaching experience in English and/or Social Studies.",
    isActive: true,
  },
  {
    id: "j2",
    title: "Pre-Primary Educator",
    department: "Foundational & Pre-Primary Wing",
    type: "Full-Time",
    description:
      "Are you a warm, creative, and patient educator who loves nurturing young minds during their foundational years? We are seeking enthusiastic Pre-Primary Teachers who can build an engaging, play-based learning environment that ignites early curiosity, creativity, and joy.",
    qualifications:
      "Graduation degree in any discipline, along with a Nursery Teacher Training (NTT) certification.",
    experience:
      "Freshers are welcome! (Prior experience in early childhood education is a plus.)",
    isActive: true,
  },
  {
    id: "j3",
    title: "Physical Education & Sports Educator",
    department: "Physical Education & Sports Wing",
    type: "Full-Time",
    description:
      "Are you energetic, athletic, and passionate about inspiring fitness, sportsmanship, and healthy habits in young learners? We are looking for a dynamic Sports Teacher to lead our physical education program and foster teamwork, discipline, and athletic excellence.",
    qualifications:
      "Bachelor’s or Master’s in Physical Education (B.P.Ed. / M.P.Ed.) or an equivalent sports coaching certification.",
    experience:
      "Experience in school sports coaching and managing athletics, team sports, or fitness programs. (Freshers with strong athletic track records are welcome to apply).",
    isActive: true,
  },
  {
    id: "j4",
    title: "Music Educator (Vocal / Instrumental)",
    department: "Performing Arts & Music Wing",
    type: "Full-Time / Part-Time",
    description:
      "Do you have a passion for melody and a natural talent for sparking musical creativity in students? We are seeking a creative, inspiring Music Teacher to nurture artistic expression, introduce diverse musical traditions, and bring our school’s cultural performances to life.",
    qualifications:
      "Proficiency in vocal training or mastery of instruments (such as Keyboard, Guitar, Harmonium, or Tabla).",
    experience:
      "Strong musical aptitude and a passion for teaching. (Prior experience conducting school assemblies, choirs, or cultural events is a plus).",
    isActive: true,
  },
];

export const careersData = JOB_LISTINGS;
export default JOB_LISTINGS;
