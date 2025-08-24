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

  const now = dayjs();
  const startMinutes = dayjs(start).hour() * 60 + dayjs(start).minute();
  const endMinutes = dayjs(end).hour() * 60 + dayjs(end).minute();
  const nowMinutes = now.hour() * 60 + now.minute();

  // ignore day
  const isActive = nowMinutes >= startMinutes && nowMinutes < endMinutes;

  // const isActive = now.isAfter(dayjs(start)) && now.isBefore(dayjs(end));  // This is how it should be if we take into account the actual day

  return (
    <div
      className={`flex flex-col h-16 min-h-16 ${
        isActive ? "bg-gray-600" : "bg-gray-800"
      } text-white border border-gray-700`}
      style={{ width, minWidth: width }}
    >
      <span className="text-xs font-medium truncate">{title}</span>
      <span className="text-xs text-gray-400">
        {dayjs(start).format("HH:mm")} - {dayjs(end).format("HH:mm")}
      </span>
    </div>
  );
}
