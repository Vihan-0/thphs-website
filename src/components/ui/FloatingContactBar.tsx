"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, X, Sparkles, Send } from "lucide-react";
import { SCHOOL } from "@/lib/constants";
import Link from "next/link";

export function FloatingContactBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 print:hidden">
      {/* Expanded Quick Options Menu */}
      {isExpanded && (
        <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-brand-border space-y-3 w-64 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-xs font-semibold text-brand-dark flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Admissions Helpdesk
            </span>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <a
            href={`tel:${SCHOOL.phone.primary}`}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-brand-light hover:bg-brand-blue/10 text-brand-dark transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-medium block text-brand-muted">Call Us Direct</span>
              <span className="text-xs font-bold text-brand-dark group-hover:text-brand-blue">
                {SCHOOL.phone.primary}
              </span>
            </div>
          </a>

          <Link
            href="/admissions#inquiry"
            onClick={() => setIsExpanded(false)}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-brand-blue text-white hover:bg-brand-blue-hover transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-gold text-brand-dark flex items-center justify-center shrink-0">
              <Send className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-medium block text-slate-200">Online Form</span>
              <span className="text-xs font-bold">Submit Admissions Inquiry</span>
            </div>
          </Link>
        </div>
      )}

      {/* Primary Floating Action Trigger Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2.5 px-4 py-3 bg-brand-blue text-white rounded-full shadow-xl hover:bg-brand-blue-hover active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold border border-blue-900/40"
        aria-label="Quick Admissions Contact"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gold"></span>
        </span>
        <Phone className="w-4 h-4" />
        <span className="text-xs font-bold tracking-wide uppercase">Admissions Help</span>
      </button>
    </div>
  );
}

export default FloatingContactBar;
