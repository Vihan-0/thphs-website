import React from "react";
import { Sparkles, Award, Heart, ArrowRight, CheckCircle2, Gift } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export function ScholarshipBanner() {
  return (
    <section id="scholarships" className="py-16 sm:py-20 bg-gradient-to-r from-brand-blue via-blue-900 to-brand-blue text-white border-b border-brand-blue-hover">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="mb-3">
                <Badge variant="gold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Equal Opportunity
                </Badge>
              </div>
              <h2 className="display-lg text-white mb-3">
                Making Quality Education Accessible to Every Child
              </h2>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
                Town Hall Public High School offers Merit-based and Need-based scholarships to ensure financial barriers never limit a child&apos;s horizon or educational growth.
              </p>
            </div>

            {/* Official Chairman's Scholarship Highlight Card */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/15 pb-3">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F59E0B] font-bold block mb-0.5">
                    Recognising Unwavering Academic Dedication
                  </span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                    Chairman’s Scholarship for Academic Excellence
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] text-xs font-semibold border border-[#F59E0B]/30 shrink-0 self-start sm:self-auto">
                  <Gift className="w-3.5 h-3.5" />
                  <span>Prize: Cash Reward</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                The Chairman’s Scholarship honours students who demonstrate exceptional and consistent academic performance over time. This prestigious award recognises individuals who maintain high academic standards throughout their studies.
              </p>

              <div className="flex items-start gap-2.5 pt-1 text-xs sm:text-sm text-amber-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>
                  <strong>Eligibility:</strong> Students who maintain 90% or above consistently for 3 consecutive years.
                </span>
              </div>
            </div>

            {/* General Overview Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-slate-200">
              <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                <Award className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Merit-Based Scholarships</span>
                  <span className="text-xs text-slate-300">Recognizing academic excellence and outstanding student potential.</span>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                <Heart className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Need-Based Financial Aid</span>
                  <span className="text-xs text-slate-300">Supporting deserving families to enable equal access to learning.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center lg:pt-16">
            <Button href="/admissions#scholarships" variant="accent" size="lg" className="w-full sm:w-auto">
              <span>Scholarship Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ScholarshipBanner;
