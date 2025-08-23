"use client";

import { forwardRef, useLayoutEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { pixelsPerMinute } from "@/constants";
import Hour from "./hour";
import Programs from "./programs";
import ChannelLogos from "@/components/epg/channel-logos";
import Padding from "./padding";
import type { EPGData } from "@/types/epg";

interface HoursProps {
  epgData: EPGData;
}

const Hours = forwardRef<HTMLDivElement, HoursProps>(({ epgData }, ref) => {
  const channelLogos = epgData.channels.map((channel) => channel.images);

  const [nowPosition, setNowPosition] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasScrolled = useRef(false);

  useLayoutEffect(() => {
    const update = () => {
      const minutesNow = dayjs().diff(dayjs().startOf("day"), "minutes");
      setNowPosition(minutesNow * pixelsPerMinute);
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  useLayoutEffect(() => {
    if (scrollRef.current && !hasScrolled.current && nowPosition !== -1) {
      const container = scrollRef.current;
      const centerOffset = nowPosition - container.clientWidth / 2;
      container.scrollLeft = Math.max(centerOffset, 0);
      hasScrolled.current = true;
    }
  }, [nowPosition]);

  return (
    <div
      className="w-full flex overflow-auto flex-col min-h-0 flex-1"
      ref={scrollRef}
    >
      {/* Cabecera de horas */}
      <div
        className="w-full flex items-center flex-row sticky top-0 bg-background z-40"
        ref={ref}
      >
        <Padding />
        {Array.from({ length: 24 }, (_, k) => k).map((value) => (
          <Hour key={`hour-${value}`} hour={value} />
        ))}
      </div>

      {/* Bloque de logos + programas */}
      <div className="w-fit flex items-start relative">
        <ChannelLogos logos={channelLogos} />
        <div className="w-full h-full relative">
          {/* Línea de tiempo */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-red-500 z-20"
            style={{ left: nowPosition }}
          />
          {epgData.channels.map((channel) => (
            <Programs key={channel.id} programs={channel.schedules} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Hours;
