"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SCHOOL } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-dark/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col z-10 transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-brand-border">
          <div onClick={onClose}>
            <Logo size="sm" />
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-lg text-brand-muted hover:text-brand-dark hover:bg-brand-light focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                    isActive
                      ? "text-brand-blue bg-brand-blue/10 font-semibold"
                      : "text-brand-dark hover:bg-brand-light hover:text-brand-blue"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-brand-border space-y-4">
            <Button
              href="/admissions"
              variant="accent"
              size="lg"
              className="w-full"
              onClick={onClose}
            >
              Admissions Open
            </Button>

            <div className="space-y-3 pt-4 text-xs text-brand-muted">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                <span>{SCHOOL.locationShort}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <a href={`tel:${SCHOOL.phone.primary}`} className="hover:underline">
                  {SCHOOL.phone.primary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <a href={`mailto:${SCHOOL.email}`} className="hover:underline">
                  {SCHOOL.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
