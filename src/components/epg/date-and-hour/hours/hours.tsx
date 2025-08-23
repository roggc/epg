"use client";

import { forwardRef } from "react";
import Hour from "./hour";
import type { EPGData } from "@/types/epg";
import Programs from "./programs";
import ChannelLogos from "@/components/epg/channel-logos";
import Padding from "./padding";

type HoursProps = { epgData: EPGData };

const Hours = forwardRef<HTMLDivElement, HoursProps>(({ epgData }, ref) => {
  const channelLogos = epgData.channels.map((channel) => channel.images);
  return (
    <div className="w-full flex overflow-auto flex-col min-h-0 flex-1">
      <div
        className="w-full flex items-center flex-row sticky top-0 bg-background z-10"
        ref={ref}
      >
        <Padding />
        {Array.from({ length: 24 }, (_, k) => k).map((value) => (
          <Hour key={`hour-${value}`} hour={value} />
        ))}
      </div>
      <div className="w-fit flex items-center relative">
        <ChannelLogos logos={channelLogos} />
        <div className="w-full h-full">
          {epgData.channels.map((channel) => (
            <Programs key={channel.id} programs={channel.schedules} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Hours;
