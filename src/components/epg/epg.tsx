"use client";

import type { EPGData } from "@/types/epg";
// import ChannelLogos from "@/components/epg/channel-logos";
import DateAndHour from "./date-and-hour/date-and-hour";

export default function EPG({ epgData }: { epgData: EPGData }) {
  const channelLogos = epgData.channels.map((channel) => channel.images);
  return (
    <div className="flex-1 flex flex-col min-h-0 h-full overflow-hidden">
      <DateAndHour epgData={epgData} />
      {/* <ChannelLogos logos={channelLogos} /> */}
    </div>
  );
}
