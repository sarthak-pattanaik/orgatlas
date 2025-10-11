import type {
  AiRunResponse,
  DiscoverResponse,
  JobListing,
  JobsResponse,
  PeopleResponse,
  PersonRecord,
  SessionUser,
} from "@/types";

async function request<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const response = await fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Request failed");
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export const apiClient = {
  async getDiscover(query?: { search?: string; tag?: string }) {
    const params = new URLSearchParams();
    if (query?.search) params.set("search", query.search);
    if (query?.tag) params.set("tag", query.tag);

    const suffix = params.toString() ? `?${params.toString()}` : "";
    const payload = await request<DiscoverResponse>(`/api/discover${suffix}`);
    return payload.data;
  },
  async getPeople(): Promise<PersonRecord[]> {
    const payload = await request<PeopleResponse>("/api/people");
    return payload.data;
  },
  async getJobs(): Promise<JobListing[]> {
    const payload = await request<JobsResponse>("/api/jobs");
    return payload.data;
  },
  async runAi(prompt: string): Promise<AiRunResponse> {
    return request<AiRunResponse>("/api/ai/run", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });
  },
  async login(credentials: { email: string; password: string }): Promise<SessionUser> {
    return request<SessionUser>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  },
  async logout(): Promise<void> {
    await request("/api/auth/logout", { method: "POST" });
  },
  async getSession(): Promise<SessionUser | null> {
    try {
      return await request<SessionUser | null>("/api/auth/session");
    } catch (error) {
      console.error("Failed to load session", error);
      return null;
    }
  },
};
