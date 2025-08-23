"use client";

import dayjs from "dayjs";

export default function Day({ day }: { day: dayjs.Dayjs }) {
  return (
    <div className="flex items-center flex-col bg-gray-800 text-white h-8 w-12 min-w-12 justify-center">
      <span className="text-xs">{day.format("ddd")}</span>
      <span className="text-xs">{day.format("DD.MM.")}</span>
    </div>
  );
}
