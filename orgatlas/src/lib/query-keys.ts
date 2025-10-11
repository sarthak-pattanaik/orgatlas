export const queryKeys = {
  discover: (search?: string, tag?: string) => ["discover", search ?? "", tag ?? ""] as const,
  people: () => ["people"] as const,
  jobs: () => ["jobs"] as const,
  aiHistory: () => ["ai-history"] as const,
};
