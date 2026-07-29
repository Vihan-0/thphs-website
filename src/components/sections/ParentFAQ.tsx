"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, MessageCircleQuestion } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { PARENT_FAQS } from "@/lib/constants";

export function ParentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-brand-border">
      <Container>
        <SectionHeader
          badge="Parents' Guide & FAQs"
          title="Everything You Need to Know Before Applying"
          subtitle="Clear answers to common questions from parents searching for quality education in Lucknow."
        />

        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {PARENT_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-brand-light border-brand-blue shadow-md"
                    : "bg-white border-brand-border hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-brand-blue text-white"
                          : "bg-slate-100 text-brand-muted"
                      }`}
                    >
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-heading font-semibold text-base sm:text-lg text-brand-dark">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-brand-blue" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-brand-muted text-sm sm:text-base leading-relaxed border-t border-brand-border/60">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-12 text-center bg-brand-light p-6 rounded-2xl border border-brand-border max-w-xl mx-auto">
          <MessageCircleQuestion className="w-8 h-8 text-brand-blue mx-auto mb-2" />
          <h4 className="font-heading font-semibold text-base text-brand-dark mb-1">
            Have a specific question not listed here?
          </h4>
          <p className="text-xs sm:text-sm text-brand-muted mb-3">
            Our admissions team is available daily to answer your queries.
          </p>
          <a
            href="tel:+919235445595"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-blue hover:text-brand-blue-hover hover:underline"
          >
            <span>Call Admissions Hotline: +91 9235445595</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default ParentFAQ;
