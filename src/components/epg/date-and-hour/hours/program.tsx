"use client";

import dayjs from "dayjs";
import { pixelsPerMinute } from "@/constants";

export default function Program({
  title,
  start,
  end,
}: {
  title: string;
  start: string;
  end: string;
}) {
  const duration = dayjs(end).diff(dayjs(start), "minutes");
  const width = Math.round(duration * pixelsPerMinute);

  return (
    <div
      className={`flex flex-col bg-gray-800 text-white h-16 min-h-16`}
      style={{ width, minWidth: width }}
    >
      <span className="text-xs">{title}</span>
      <span className="text-xs text-gray-400">{`${dayjs(start).format(
        "HH:mm"
      )} - ${dayjs(end).format("HH:mm")}`}</span>
    </div>
  );
}
