"use client";

import type { EPGImage } from "@/types/epg";

export default function ChannelLogos({ logos }: { logos: EPGImage[] }) {
  return (
    <>
      {logos.map((logo) => (
        <img
          key={logo.id}
          src={logo.logo}
          alt={`Channel Logo ${logo.id}`}
          className="w-16 h-16"
        />
      ))}
    </>
  );
}
