"use client";

import styles from "@/page.module.css";
import { Suspense } from "react";
import { getEPG } from "@/server-functions/get-epg";
import DateAndHour from "@/components/date-and-hour/date-and-hour";

export default function Page() {
  return (
    <div className={`flex-1 flex flex-col overflow-auto`}>
      <DateAndHour />
      <Suspense fallback={<div>Loading EPG screen...</div>}>
        {getEPG()}
      </Suspense>
    </div>
  );
}
