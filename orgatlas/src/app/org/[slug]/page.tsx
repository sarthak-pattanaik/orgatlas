import { notFound } from "next/navigation";
import { CompanyOrgClient } from "@/components/company/CompanyOrgClient";
import { companies } from "@/data/companies";

const demoData: Record<string, { nodes: { id: string; fullName: string; title?: string; managerId?: string }[] }> = {
  microsoft: {
    nodes: [
      { id: "satya", fullName: "Satya Nadella", title: "CEO" },
      { id: "judson", fullName: "Judson Althoff", title: "EVP, CCO", managerId: "satya" },
      { id: "amanda", fullName: "Amanda Silver", title: "CVP, DevDiv", managerId: "satya" },
      { id: "scott", fullName: "Scott Guthrie", title: "EVP, Cloud+AI", managerId: "satya" },
      { id: "jasonz", fullName: "Jason Zander", title: "EVP, Strategic Missions", managerId: "satya" },
      { id: "pm_manager", fullName: "PM Manager", title: "Director", managerId: "amanda" },
      { id: "eng_manager", fullName: "Eng Manager", title: "Director", managerId: "amanda" },
      { id: "swe1", fullName: "Software Engineer", title: "Senior SWE", managerId: "eng_manager" },
      { id: "swe2", fullName: "Software Engineer", title: "SWE II", managerId: "eng_manager" },
    ],
  },
};

export default async function CompanyOrgPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = demoData[slug];
  if (!data) return notFound();
  const company = companies.find((c) => c.slug === slug);
  return <CompanyOrgClient slug={slug} data={data} company={company} />;
}
