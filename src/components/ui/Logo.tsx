"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SCHOOL } from "@/lib/constants";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className = "", size = "md", showText = true }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  const imageSizes = {
    sm: "h-10 w-10 sm:h-12 sm:w-12",
    md: "h-14 w-14 sm:h-16 sm:w-16",
    lg: "h-16 w-16 sm:h-20 sm:w-20",
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group shrink-0 ${className}`}>
      {!imgError ? (
        <div className="flex items-center gap-3">
          <div className={`relative ${imageSizes[size]} flex items-center shrink-0`}>
            <img
              src="/photos/WhatsApp Image 2026-07-29 at 1.15.07 PM.jpeg"
              alt="Town Hall Public High School Logo"
              onError={() => setImgError(true)}
              className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </div>
          {showText && (
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tighter font-heading select-none">
              <span className="text-blue-900">THP</span>
              <span className="text-[#F59E0B]">HS</span>
            </span>
          )}
        </div>
      ) : (
        /* Fallback Branding Badge */
        <div className="flex items-center gap-2.5">
          <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center text-white font-heading font-bold text-xl shadow-sm border border-brand-gold">
            TH
          </div>
          {showText && (
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tighter font-heading select-none">
              <span className="text-blue-900">THP</span>
              <span className="text-[#F59E0B]">HS</span>
            </span>
          )}
        </div>
      )}
    </Link>
  );
}

export default Logo;
