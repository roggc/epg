"use client";

import Star from "./star";
import Hours from "./hours/hours";
import Days from "./days/days";
import { useRef } from "react";
import type { EPGData } from "@/types/epg";

export default function DateAndHour({ epgData }: { epgData: EPGData }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="flex items-center flex-col h-full min-h-0 flex-1 overflow-hidden">
      <Days />
      <Hours ref={ref} epgData={epgData} />
    </div>
  );
}
