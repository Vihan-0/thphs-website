"use client";

import React, { useState } from "react";
import { JOB_LISTINGS } from "@/lib/careers-data";
import { Mail, GraduationCap, Clock, Award, Send, Check, Copy } from "lucide-react";

export function CareersList() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleApplyClick = (jobTitle: string, jobId: string) => {
    const email = "thps1996@gmail.com";
    const mailtoUrl = `mailto:${email}?subject=Job%20Application:%20${encodeURIComponent(
      jobTitle
    )}`;

    // 1. Copy email address to clipboard as helper
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).catch(() => {});
    }

    setCopiedId(jobId);
    setTimeout(() => setCopiedId(null), 3000);

    // 2. Open mail client
    window.location.href = mailtoUrl;
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {JOB_LISTINGS.map((job) => {
        const isCopied = copiedId === job.id;
        const mailtoUrl = `mailto:thps1996@gmail.com?subject=Job%20Application:%20${encodeURIComponent(
          job.title
        )}`;

        return (
          <div
            key={job.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-none hover:border-slate-300 transition-colors duration-200"
          >
            {/* Top Bar: Title & Position Type Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                  {job.department}
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-blue-950">
                  {job.title}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-900 rounded-full px-3.5 py-1 text-xs sm:text-sm font-semibold self-start sm:self-auto shrink-0">
                <Clock className="w-3.5 h-3.5 text-blue-800" />
                <span>{job.type}</span>
              </span>
            </div>

            {/* Job Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {job.description}
            </p>

            {/* Qualifications & Experience Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50/80 p-4 sm:p-5 rounded-xl border border-slate-200/70 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-blue-950 block mb-0.5">Qualifications:</strong>
                  <span className="text-slate-600 leading-normal">{job.qualifications}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-blue-950 block mb-0.5">Experience Required:</strong>
                  <span className="text-slate-600 leading-normal">{job.experience}</span>
                </div>
              </div>
            </div>

            {/* Apply Now Action */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Send resume to <strong>thps1996@gmail.com</strong></span>
                {isCopied && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    <Check className="w-3 h-3" /> Email Copied!
                  </span>
                )}
              </div>

              <a
                href={mailtoUrl}
                onClick={(e) => {
                  handleApplyClick(job.title, job.id);
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-950 text-white text-xs sm:text-sm font-semibold hover:bg-blue-900 active:scale-[0.98] transition-all duration-200 shrink-0 shadow-none cursor-pointer"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Apply Now</span>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CareersList;
