import React from "react";
import { Calendar, Tag } from "lucide-react";
import type { EventItem } from "@/types";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ImageWithBlur from "@/components/ui/ImageWithBlur";

interface EventCardProps {
  event: EventItem;
}

const EVENT_FOCAL_POSITIONS: Record<string, string> = {
  "/photos/cc (13).jpeg": "object-[center_42%]",
  "/photos/cc (17).jpeg": "object-top",
  "/photos/bb (38).jpg": "object-center",
  "/photos/bb (11).jpg": "object-top",
  "/photos/bb (8).jpg": "object-top",
  "/photos/bb (13).jpg": "object-top",
  "/photos/bb (21).jpg": "object-top",
  "/photos/bb (7).jpg": "object-top",
  "/photos/bb (26).jpg": "object-top",
};

export function EventCard({ event }: EventCardProps) {
  const focalPos = (event.image && EVENT_FOCAL_POSITIONS[event.image]) || "object-center";

  return (
    <Card className="group p-0 overflow-hidden flex flex-col justify-between h-full border border-slate-200 hover:border-blue-900 border-l-4 border-l-[#F59E0B] bg-white transition-colors duration-200 shadow-none rounded-xl">
      <div>
        {event.image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
            <ImageWithBlur
              src={event.image}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover ${focalPos} w-full h-full transition-transform duration-300 group-hover:scale-[1.02]`}
            />
            <div className="absolute inset-0 bg-blue-950/20" />
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-950 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>{event.date}</span>
            </div>
            <Badge variant="outline">{event.category}</Badge>
          </div>

          <h3 className="heading-2 text-blue-950 font-bold mb-2">{event.title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span className="font-semibold text-emerald-700">Official School Event</span>
          <Tag className="w-3.5 h-3.5 text-slate-400" />
        </div>
      </div>
    </Card>
  );
}

export default EventCard;
