"use client";

import Day from "./day";
import dayjs from "dayjs";
import Star from "@/components/epg/date-and-hour/star";

export default function Days() {
  const days = Array.from({ length: 31 }, (_, index) =>
    dayjs().startOf("month").add(index, "day")
  );

  return (
    <div className="w-full flex items-center relative">
      <Star />
      <div className="w-full flex items-center overflow-x-auto">
        {days.map((day) => (
          <Day key={`day-${day.format("YYYY-MM-DD")}`} day={day} />
        ))}
      </div>
    </div>
  );
}
