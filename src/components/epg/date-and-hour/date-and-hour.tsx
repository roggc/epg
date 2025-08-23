"use client";

import Star from "./star";
import Hours from "./hours/hours";
import Days from "./days/days";

export default function DateAndHour() {
  return (
    <div className="flex items-center flex-col">
      <Days />
      <Hours />
    </div>
  );
}
