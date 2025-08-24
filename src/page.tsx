"use client";

import styles from "@/page.module.css";
import Suspense from "react-enhanced-suspense";
import { getEPG } from "@/server-functions/get-epg";

export default function Page() {
  return (
    <div className={`flex-1 flex flex-col h-full min-h-0`}>
      <Suspense fallback={<div>Loading EPG screen...</div>} resourceId="epg">
        {getEPG()}
      </Suspense>
    </div>
  );
}
