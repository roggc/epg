"use client";

import { hourWidth } from "@/constants";

export default function Hour({ hour }: { hour: number }) {
  return (
    <div
      className={`flex items-center bg-gray-800 text-white h-8 justify-center border border-gray-700`}
      style={{ width: `${hourWidth}px`, minWidth: `${hourWidth}px` }}
    >
      <span className="text-sm">{hour.toString().padStart(2, "0")}:00</span>
    </div>
  );
}
