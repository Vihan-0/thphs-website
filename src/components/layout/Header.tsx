"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Mail, Sparkles } from "lucide-react";
import { NAV_LINKS, SCHOOL } from "@/lib/constants";
import { useScrollShadow } from "@/hooks/useScrollShadow";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollShadow(20);
  const pathname = usePathname();

  return (
    <>
      {/* Announcement & Top Metadata Bar */}
      <div className="bg-brand-blue text-white text-xs py-2 border-b border-blue-900/60">
        <Container className="flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left: Ticker Highlight */}
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded font-semibold text-[11px] uppercase tracking-wide">
              <Sparkles className="w-3 h-3" />
              Admissions Open 2026–27
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="text-slate-200 text-xs hidden md:inline">
              UP Board English Medium • PG to Class X
            </span>
          </div>

          {/* Right: Contact Hotline & Email */}
          <div className="flex items-center gap-4 text-[12px] sm:text-xs">
            <a
              href={`tel:${SCHOOL.phone.primary}`}
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>{SCHOOL.phone.primary}</span>
            </a>
            <span className="text-slate-400">|</span>
            <a
              href={`mailto:${SCHOOL.email}`}
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors font-medium hidden sm:flex"
            >
              <Mail className="w-3.5 h-3.5 text-brand-gold" />
              <span>{SCHOOL.email}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Primary Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-md border-b border-slate-200" : "border-b border-brand-border"
        }`}
      >
        <Container className="flex items-center justify-between h-20">
          {/* Official Logo */}
          <Logo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? "text-brand-blue bg-brand-blue/10 font-semibold"
                      : "text-brand-dark hover:text-brand-blue hover:bg-slate-100/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button & Mobile Drawer Trigger */}
          <div className="flex items-center gap-3">
            <Button
              href="/admissions"
              variant="accent"
              size="md"
              className="hidden md:inline-flex shadow-xs"
            >
              Admissions Open
            </Button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-lg text-brand-dark hover:bg-slate-100 lg:hidden focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

export default Header;
