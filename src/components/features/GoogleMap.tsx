import React from "react";
import { SCHOOL } from "@/lib/constants";
import { ExternalLink, Navigation } from "lucide-react";
import Button from "@/components/ui/Button";

interface GoogleMapProps {
  className?: string;
  height?: number;
}

export function GoogleMap({ className = "", height = 450 }: GoogleMapProps) {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    "Tilak Nagar, Aishbagh, Lucknow, Uttar Pradesh 226004"
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const externalMapUrl = SCHOOL.googleMapsUrl;

  return (
    <div className={`relative w-full rounded-2xl overflow-hidden border border-brand-border shadow-md bg-slate-100 group ${className}`}>
      <iframe
        title="Town Hall Public High School Campus Location Map"
        src={mapSrc}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />

      {/* Floating Directions Overlay Bar */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <span className="font-heading font-semibold text-sm text-brand-dark block">
            Town Hall Public High School Campus
          </span>
          <span className="text-xs text-brand-muted block">
            {SCHOOL.location}
          </span>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <a
            href={externalMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-brand-blue text-white text-xs font-medium hover:bg-brand-blue-hover transition-colors shadow-xs"
          >
            <Navigation className="w-3.5 h-3.5 text-brand-gold" />
            <span>Get Directions</span>
          </a>

          <a
            href={externalMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-brand-border text-brand-dark text-xs font-medium hover:bg-brand-light transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-brand-muted" />
            <span>Open in Google Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default GoogleMap;
