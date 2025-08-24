// useSafeEffect.ts
import { useEffect, useLayoutEffect } from "react";

const isDevWithRefresh =
  // @ts-ignore
  typeof window !== "undefined" && typeof window.$RefreshReg$ !== "undefined";

export const useSafeEffect = isDevWithRefresh ? useLayoutEffect : useEffect;
