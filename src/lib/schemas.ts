// =============================================================================
// Town Hall Public School — Zod Validation Schemas
// Source: FEATURES.md §2.1, §2.2
// =============================================================================

import { z } from "zod";

/**
 * Admissions Inquiry & Contact Form Schema
 * FEATURES.md §2.1
 */
export const contactFormSchema = z.object({
  parentName: z
    .string()
    .min(2, "Parent/Guardian name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  grade: z
    .string()
    .min(1, "Please select a grade of interest"),
  message: z
    .string()
    .max(500, "Message cannot exceed 500 characters")
    .optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * Career Application Form Schema
 * FEATURES.md §2.2
 */
export const careerFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  position: z
    .string()
    .min(1, "Please select a position"),
  coverNote: z
    .string()
    .max(1000, "Cover note cannot exceed 1000 characters")
    .optional(),
});

export type CareerFormValues = z.infer<typeof careerFormSchema>;
