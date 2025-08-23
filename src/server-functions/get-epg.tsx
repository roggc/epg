"use server";

import EPG from "@/components/epg";
import type { EPGData } from "@/types/epg";
import ImageChannelYoutube from "@/assets/youtube-image-channel.png";
import ImageChannelTV from "@/assets/tv-channel-image.png";

let flag = false;

function getImage() {
  flag = !flag;
  return flag ? ImageChannelYoutube : ImageChannelTV;
}

function processEPGData(epgData: EPGData) {
  return {
    ...epgData,
    channels: epgData.channels.map((channel, channelIndex) => ({
      ...channel,
      id: `channel-${channelIndex}`,
      images: {
        logo: getImage(),
        id: `channel-logo-${channelIndex}`,
      },
      schedules: channel.schedules.map((schedule, index) => ({
        ...schedule,
        id: `${channelIndex}-schedule-${index}`,
      })),
    })),
  };
}

export async function getEPG() {
  const res = await fetch("http://localhost:1337/epg");
  const epgData = await res.json();
  const processedEPGData = processEPGData(epgData);

  return <EPG epgData={processedEPGData} />;
}
