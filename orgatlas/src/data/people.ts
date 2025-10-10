export type Person = {
  id: string;
  fullName: string;
  title?: string;
  companySlug: string;
  team?: string;
  location?: string;
  avatarUrl?: string;
  linkedinUrl?: string;
};

export const people: Person[] = [
  { id: "satya", fullName: "Satya Nadella", title: "CEO", companySlug: "microsoft", location: "Redmond, WA" },
  { id: "amanda", fullName: "Amanda Silver", title: "CVP, DevDiv", companySlug: "microsoft", location: "Redmond, WA" },
  { id: "scott", fullName: "Scott Guthrie", title: "EVP, Cloud+AI", companySlug: "microsoft", location: "Redmond, WA" },
  { id: "judson", fullName: "Judson Althoff", title: "EVP, CCO", companySlug: "microsoft" },
  { id: "eng_manager", fullName: "Eng Manager", title: "Director", companySlug: "microsoft", team: "Developer Division" },
  { id: "swe1", fullName: "Software Engineer", title: "Senior SWE", companySlug: "microsoft", team: "Developer Division" },
  { id: "swe2", fullName: "Software Engineer", title: "SWE II", companySlug: "microsoft", team: "Developer Division" },
];
