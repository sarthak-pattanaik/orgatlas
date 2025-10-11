"use client";

import { useCallback } from "react";
import type { AnalyticsEventInput } from "@/lib/analytics";
import { recordAnalyticsEvent } from "@/lib/analytics";

export function useAnalytics() {
  return useCallback(
    (name: AnalyticsEventInput["name"], properties?: AnalyticsEventInput["properties"]) => {
      recordAnalyticsEvent({ name, properties });
    },
    [],
  );
}
