"use client";

import Program from "./program";
import type { Schedule } from "@/types/epg";

export default function Programs({ programs }: { programs: Schedule[] }) {
  return (
    <div className="w-full flex items-center flex-row">
      {programs.map((program) => (
        <Program key={program.id} {...program} />
      ))}
    </div>
  );
}
