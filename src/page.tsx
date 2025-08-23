"use client";

import styles from "@/page.module.css";
import { Suspense } from "react";
import { getEPG } from "@/server-functions/get-epg";

export default function Page() {
  return (
    <div className={`flex-1 flex flex-col overflow-hidden`}>
      <Suspense fallback={<div>Loading EPG screen...</div>}>
        {getEPG()}
      </Suspense>
    </div>
  );
}
