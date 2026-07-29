"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Upload, CheckCircle2, Loader2, FileText, AlertCircle } from "lucide-react";
import { careerFormSchema, type CareerFormValues } from "@/lib/schemas";
import { POSITION_OPTIONS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export function CareerForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareerFormValues>({
    resolver: zodResolver(careerFormSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        setFileError("Please upload a valid PDF or DOCX file");
        setSelectedFile(null);
        return;
      }

      if (file.size > maxSizeInBytes) {
        setFileError("File size must not exceed 5 MB");
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
    }
  };

  const onSubmit = async (data: CareerFormValues) => {
    if (!selectedFile) {
      setFileError("Please attach your resume file (PDF or DOCX)");
      return;
    }

    setIsSubmitting(true);
    // Simulate multipart form upload
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Career Application Submitted:", data, selectedFile.name);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setSelectedFile(null);
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
        <h3 className="heading-2 text-emerald-900">Application Submitted</h3>
        <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
          Thank you for applying to Town Hall Public High School. Our HR team will review your application and resume attachment.
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsSubmitted(false)}
          className="mt-2"
        >
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Applicant Name */}
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. Ananya Sharma"
          {...register("fullName")}
          className={`w-full h-12 px-4 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold ${
            errors.fullName ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-brand-blue"
          }`}
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-600 font-medium">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Grid: Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-1.5">
            Contact Mobile <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="e.g. 9876543210"
            {...register("phone")}
            className={`w-full h-12 px-4 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold ${
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
            placeholder="e.g. applicant@example.com"
            {...register("email")}
            className={`w-full h-12 px-4 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold ${
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

      {/* Position Selection */}
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-1.5">
          Position Applied For <span className="text-red-500">*</span>
        </label>
        <select
          {...register("position")}
          className={`w-full h-12 px-4 rounded-lg border text-sm transition-colors bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold ${
            errors.position ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-brand-blue"
          }`}
        >
          <option value="">Select a Position...</option>
          {POSITION_OPTIONS.map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
        </select>
        {errors.position && (
          <p className="mt-1 text-xs text-red-600 font-medium">
            {errors.position.message}
          </p>
        )}
      </div>

      {/* PDF/DOCX Resume Upload Handler */}
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-1.5">
          Resume / CV Attachment (PDF / DOCX, Max 5MB) <span className="text-red-500">*</span>
        </label>
        <div className="relative border-2 border-dashed border-slate-300 hover:border-brand-blue rounded-xl p-6 text-center transition-colors bg-slate-50/50">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center space-y-2">
            {selectedFile ? (
              <>
                <FileText className="w-8 h-8 text-brand-blue" />
                <span className="text-sm font-semibold text-brand-dark">
                  {selectedFile.name}
                </span>
                <span className="text-xs text-brand-muted">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </span>
              </>
            ) : (
              <>
                <Upload className="w-8 h-8 text-slate-400" />
                <span className="text-sm font-medium text-brand-dark">
                  Click or drag resume file to upload
                </span>
                <span className="text-xs text-slate-400">PDF, DOC, or DOCX up to 5MB</span>
              </>
            )}
          </div>
        </div>
        {fileError && (
          <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{fileError}</span>
          </p>
        )}
      </div>

      {/* Cover Note */}
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-1.5">
          Cover Note / Relevant Experience <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="Briefly describe your teaching philosophy or subject expertise..."
          {...register("coverNote")}
          className="w-full p-4 rounded-lg border border-slate-300 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-blue"
        />
        {errors.coverNote && (
          <p className="mt-1 text-xs text-red-600 font-medium">
            {errors.coverNote.message}
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
            <span>Submitting Application...</span>
          </>
        ) : (
          <>
            <Upload className="w-4 h-4" />
            <span>Submit Job Application</span>
          </>
        )}
      </Button>
    </form>
  );
}

export default CareerForm;
