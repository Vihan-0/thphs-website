import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { SCHOOL, FOOTER_LINKS, FOOTER_DESCRIPTION, COPYRIGHT } from "@/lib/constants";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-200 pt-16 pb-8 border-t-4 border-brand-gold">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: School Identity */}
          <div>
            <div className="bg-white p-2.5 rounded-xl inline-block mb-4 shadow-sm">
              <Logo size="md" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {FOOTER_DESCRIPTION}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-800/80 text-xs text-brand-gold font-medium border border-slate-700">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{SCHOOL.board} | {SCHOOL.medium}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-gold/70" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Campus */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Contact & Campus
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>{SCHOOL.location}</span>
                  <a
                    href={SCHOOL.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#F59E0B] hover:underline font-semibold mt-1.5 inline-flex items-center gap-1"
                  >
                    <span>View on Google Maps</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${SCHOOL.phone.primary}`} className="hover:text-white transition-colors">
                    {SCHOOL.phone.primary}
                  </a>
                  <a href={`tel:${SCHOOL.phone.secondary}`} className="hover:text-white transition-colors">
                    {SCHOOL.phone.secondary}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href={`mailto:${SCHOOL.email}`} className="hover:text-white transition-colors">
                  {SCHOOL.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Admissions & Timings */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              School Timings & Hours
            </h3>
            <div className="space-y-3 text-xs text-slate-400 bg-slate-900/80 p-4 rounded-xl border border-slate-800 mb-5">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block mb-0.5">Summer Timings (Apr–Aug)</span>
                  <span>7:15 AM to 1:35 PM</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block mb-0.5">Winter Timings (Sep–Mar)</span>
                  <span>8:45 AM to 3:40 PM</span>
                </div>
              </div>
            </div>

            <Button
              href="/admissions"
              variant="accent"
              size="md"
              className="w-full"
            >
              Admissions Open
            </Button>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>{COPYRIGHT}</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-slate-300">
              Campus Location
            </Link>
            <span>•</span>
            <Link href="/admissions" className="hover:text-slate-300">
              Scholarships
            </Link>
            <span>•</span>
            <Link href="/careers" className="hover:text-slate-300">
              Join Our Team
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
