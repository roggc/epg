"use client";

import { forwardRef } from "react";
import Hour from "./hour";
import type { EPGData } from "@/types/epg";
import Programs from "./programs";

type HoursProps = { epgData: EPGData };

const Hours = forwardRef<HTMLDivElement, HoursProps>(({ epgData }, ref) => {
  return (
    <div className="w-full overflow-x-auto flex flex-col">
      <div className="w-full flex items-center flex-row" ref={ref}>
        {Array.from({ length: 24 }, (_, k) => k).map((value) => (
          <Hour key={`hour-${value}`} hour={value} />
        ))}
      </div>
      {epgData.channels.map((channel) => (
        <Programs key={channel.id} programs={channel.schedules} />
      ))}
    </div>
  );
});

export default Hours;
