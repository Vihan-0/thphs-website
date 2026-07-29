"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { GRADE_OPTIONS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate server action / form dispatch
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Admissions Inquiry Form Submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
        <h3 className="heading-2 text-emerald-900">Inquiry Submitted Successfully</h3>
        <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
          Thank you for your interest in Town Hall Public High School. Our admissions team will review your inquiry and contact you shortly.
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsSubmitted(false)}
          className="mt-2"
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Parent Name */}
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-1.5">
          Parent / Guardian Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. Ramesh Kumar"
          {...register("parentName")}
          className={`w-full h-12 px-4 rounded-lg border text-base sm:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold ${
            errors.parentName ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-brand-blue"
          }`}
        />
        {errors.parentName && (
          <p className="mt-1 text-xs text-red-600 font-medium">
            {errors.parentName.message}
          </p>
        )}
      </div>

      {/* Grid: Mobile & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-1.5">
            Mobile Number (10-Digit) <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="e.g. 9876543210"
            {...register("phone")}
            className={`w-full h-12 px-4 rounded-lg border text-base sm:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold ${
              errors.phone ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-brand-blue"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 font-medium">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-dark mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="e.g. parent@example.com"
            {...register("email")}
            className={`w-full h-12 px-4 rounded-lg border text-base sm:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold ${
              errors.email ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-brand-blue"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Grade Selection */}
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-1.5">
          Student Grade Interest <span className="text-red-500">*</span>
        </label>
        <select
          {...register("grade")}
          className={`w-full h-12 px-4 rounded-lg border text-base sm:text-sm transition-colors bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold ${
            errors.grade ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-brand-blue"
          }`}
        >
          <option value="">Select a Grade...</option>
          {GRADE_OPTIONS.map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select>
        {errors.grade && (
          <p className="mt-1 text-xs text-red-600 font-medium">
            {errors.grade.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-1.5">
          Message / Specific Inquiry <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          rows={4}
          placeholder="Share any specific questions regarding admissions, curriculum, or scholarships..."
          {...register("message")}
          className="w-full p-4 rounded-lg border border-slate-300 text-base sm:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-blue"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 font-medium">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Inquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Admission Inquiry</span>
          </>
        )}
      </Button>
    </form>
  );
}

export default ContactForm;
