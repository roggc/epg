"use client";

import type { EPGData } from "@/types/epg";
import ChannelLogos from "@/components/epg/channel-logos";

export default function EPG({ epgData }: { epgData: EPGData }) {
  const channelLogos = epgData.channels.map((channel) => channel.images);
  return (
    <div className="flex-1 overflow-auto">
      <ChannelLogos logos={channelLogos} />
    </div>
  );
}
