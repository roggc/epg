"use client";

import { Star as StarIcon } from "lucide-react";

export default function Star() {
  return (
    <div className="flex items-center justify-center sticky left-0 top-0 w-16 h-16 min-w-16 min-h-16 bg-gray-800 text-white">
      <StarIcon className="text-xs w-6 h-6" />
    </div>
  );
}
