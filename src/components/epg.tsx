"use client";

import type { EPGData } from "@/types/epg";
import ChannelLogos from "@/components/channel-logos";

export default function EPG({ epgData }: { epgData: EPGData }) {
  const channelLogos = epgData.channels.map((channel) => channel.images);
  return (
    <>
      <ChannelLogos logos={channelLogos} />
    </>
  );
}
