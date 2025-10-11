export interface AnalyticsEventInput {
  name: string;
  properties?: Record<string, unknown>;
}

type AnalyticsPayload = Record<string, unknown> & {
  event: string;
  timestamp: number;
};

declare global {
  interface Window {
    dataLayer?: AnalyticsPayload[];
    __ORG_ATLAS_EVENTS__?: AnalyticsPayload[];
  }
}

export function recordAnalyticsEvent({ name, properties }: AnalyticsEventInput) {
  const payload: AnalyticsPayload = {
    event: name,
    timestamp: Date.now(),
    ...(properties ?? {}),
  };

  if (typeof window !== "undefined") {
    const target = window as Window;
    target.dataLayer = target.dataLayer ?? [];
    target.dataLayer.push(payload);

    target.__ORG_ATLAS_EVENTS__ = target.__ORG_ATLAS_EVENTS__ ?? [];
    target.__ORG_ATLAS_EVENTS__.push(payload);

    if (typeof CustomEvent === "function") {
      target.dispatchEvent(new CustomEvent("orgatlas:analytics", { detail: payload }));
    }
  } else if (process.env.NODE_ENV !== "production") {
    console.info(`[analytics:ssr] ${name}`, properties ?? {});
  }

  if (process.env.NODE_ENV !== "production") {
    console.info(`[analytics] ${name}`, properties ?? {});
  }
}
