"use client";

import Star from "./star";
import Hours from "./hours/hours";

export default function DateAndHour() {
  return (
    <div className="flex items-center flex-col overflow-auto">
      <Star />
      <Hours />
    </div>
  );
}
