"use client";

import type { EPGImage } from "@/types/epg";

export default function ChannelLogos({ logos }: { logos: EPGImage[] }) {
  return (
    <div className="flex items-center flex-col sticky left-0 top-0 w-fit">
      {logos.map((logo) => (
        <img
          key={logo.id}
          src={logo.logo}
          alt={`Channel Logo ${logo.id}`}
          className="w-16 min-w-16 h-16"
        />
      ))}
    </div>
  );
}
