export type Company = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  industry?: string;
  employee_count?: number;
  hq_location?: string;
  logo_url?: string;
  tags?: string[];
};

export const companies: Company[] = [
  {
    id: "tcs",
    slug: "tcs",
    name: "Tata Consultancy Services",
    description: "Global IT services and consulting company.",
    industry: "IT Services",
    employee_count: 600000,
    hq_location: "Mumbai, India",
    logo_url: "/tcs.svg",
    tags: ["services", "consulting"],
  },
  {
    id: "microsoft",
    slug: "microsoft",
    name: "Microsoft",
    description: "Productivity and platform company.",
    industry: "Software",
    employee_count: 220000,
    hq_location: "Redmond, WA",
    logo_url: "/microsoft.svg",
    tags: ["cloud", "developer", "productivity"],
  },
  {
    id: "acme",
    slug: "acme",
    name: "Acme Corp",
    description: "Example manufacturer of everything.",
    industry: "Manufacturing",
    employee_count: 1200,
    hq_location: "San Francisco, CA",
    logo_url: "/acme.svg",
    tags: ["example"],
  },
  {
    id: "northbeam",
    slug: "northbeam",
    name: "Northbeam",
    description: "Revenue intelligence for modern go-to-market teams.",
    industry: "Analytics",
    employee_count: 480,
    hq_location: "New York, NY",
    tags: ["revenue", "analytics"],
  },
  {
    id: "stratus-ai",
    slug: "stratus-ai",
    name: "Stratus AI",
    description: "AI-powered hiring and workforce planning platform.",
    industry: "AI",
    employee_count: 1200,
    hq_location: "Austin, TX",
    tags: ["ai", "talent"],
  },
  {
    id: "apex-ventures",
    slug: "apex-ventures",
    name: "Apex Ventures",
    description: "Early-stage fund focused on data-rich B2B SaaS.",
    industry: "Finance",
    employee_count: 85,
    hq_location: "San Francisco, CA",
    tags: ["investing", "saas"],
  },
  {
    id: "signalworks",
    slug: "signalworks",
    name: "SignalWorks",
    description: "Market intelligence platform for diligence teams.",
    industry: "Research",
    employee_count: 350,
    hq_location: "London, UK",
    tags: ["research", "intelligence"],
  },
];
