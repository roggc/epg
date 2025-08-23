"use client";

import { forwardRef } from "react";
import Hour from "./hour";
import type { EPGData } from "@/types/epg";
import Programs from "./programs";

type HoursProps = { epgData: EPGData };

const Hours = forwardRef<HTMLDivElement, HoursProps>(({ epgData }, ref) => {
  return (
    <div className="w-full flex overflow-auto flex-col min-h-0 flex-1">
      <div
        className="w-full flex items-center flex-row sticky top-0 bg-background z-10"
        ref={ref}
      >
        {Array.from({ length: 24 }, (_, k) => k).map((value) => (
          <Hour key={`hour-${value}`} hour={value} />
        ))}
      </div>
      <div className="w-full">
        {epgData.channels.map((channel) => (
          <Programs key={channel.id} programs={channel.schedules} />
        ))}
      </div>
    </div>
  );
});

// const Hours = forwardRef<HTMLDivElement, HoursProps>(({ epgData }, ref) => {
//   return (
//     <div className="w-full h-full overflow-x-auto overflow-y-hidden flex flex-col flex-1">
//       <div
//         className="w-full flex items-center flex-row sticky top-0 bg-background z-10"
//         ref={ref}
//       >
//         {Array.from({ length: 24 }, (_, k) => k).map((value) => (
//           <Hour key={`hour-${value}`} hour={value} />
//         ))}
//       </div>
//       <div className="w-full flex-1 overflow-y-auto overflow-x-hidden flex flex-col">
//         {epgData.channels.map((channel) => (
//           <Programs key={channel.id} programs={channel.schedules} />
//         ))}
//       </div>
//     </div>
//   );
// });

export default Hours;
