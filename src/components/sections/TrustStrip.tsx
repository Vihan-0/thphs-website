import React from "react";
import { MapPin, Users, Languages, Award, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import { TRUST_ITEMS } from "@/lib/constants";

const iconMap = {
  MapPin,
  Users,
  Languages,
  Award,
  Sparkles,
};

export function TrustStrip() {
  return (
    <section className="bg-brand-blue text-white py-6 border-b border-brand-blue-hover">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center md:text-left">
          {TRUST_ITEMS.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || MapPin;
            return (
              <div
                key={idx}
                className="flex items-center justify-center md:justify-start gap-2.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
              >
                <Icon className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-xs sm:text-sm font-medium tracking-tight">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default TrustStrip;
