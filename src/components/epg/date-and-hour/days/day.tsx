"use client";

import dayjs from "dayjs";

export default function Day({ day }: { day: dayjs.Dayjs }) {
  return (
    <div className="flex items-center flex-col bg-gray-800 text-white h-16 min-h-16 w-16 min-w-16 justify-center">
      <span className="text-xs">{day.format("ddd")}</span>
      <span className="text-xs">{day.format("DD.MM.")}</span>
    </div>
  );
}
