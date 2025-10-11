export interface DiscoverResult {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  industry: string;
  lastUpdated: string;
}

export interface DiscoverResponse {
  data: DiscoverResult[];
  total: number;
}

export interface PersonRecord {
  id: string;
  name: string;
  title: string;
  company: string;
  department: string;
  location: string;
  email?: string;
  phone?: string;
  bio: string;
  links: Array<{ label: string; url: string }>;
}

export interface PeopleResponse {
  data: PersonRecord[];
}

export interface JobListing {
  id: string;
  role: string;
  level: string;
  team: string;
  location: string;
  status: "Open" | "Paused" | "Closed";
  description: string;
}

export interface JobsResponse {
  data: JobListing[];
}

export interface AiRunRequest {
  prompt: string;
}

export interface AiRunResponse {
  id: string;
  prompt: string;
  output: string;
  createdAt: string;
}

export interface SessionUser {
  email: string;
  name: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  cta: string;
  features: Array<{ label: string; included: boolean }>;
}

export interface FaqEntry {
  question: string;
  answer: string;
}
