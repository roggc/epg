"use client";

import Hour from "./hour";

export default function Hours() {
  return (
    <div className="w-full flex items-center flex-row overflow-x-auto">
      {Array.from({ length: 24 }, (_, k) => k).map((value) => (
        <Hour key={`hour-${value}`} hour={value} />
      ))}
    </div>
  );
}
