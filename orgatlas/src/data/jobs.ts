export type Job = {
  id: string;
  companySlug: string;
  title: string;
  functionTag: string;
  location?: string;
  postedAt: string;
};

export const jobs: Job[] = [
  { id: "job-1", companySlug: "microsoft", title: "Senior Software Engineer", functionTag: "Engineering", location: "Remote", postedAt: "2025-10-01" },
  { id: "job-2", companySlug: "microsoft", title: "Product Manager", functionTag: "Product", location: "Redmond, WA", postedAt: "2025-09-27" },
  { id: "job-3", companySlug: "tcs", title: "Account Executive", functionTag: "Sales", location: "Mumbai, India", postedAt: "2025-09-25" }
];
