"use client";

import type { EPGData } from "@/types/epg";
import DateAndHour from "./date-and-hour/date-and-hour";

export default function EPG({ epgData }: { epgData: EPGData }) {
  return (
    <div
      className="flex-1 flex flex-col min-h-0 h-full overflow-hidden relative"
      id="portal-root"
    >
      <DateAndHour epgData={epgData} />
    </div>
  );
}
