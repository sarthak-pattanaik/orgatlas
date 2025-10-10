import { OrgChartViewer } from "@/components/org/OrgChartViewer";
import { notFound } from "next/navigation";

const demoData: Record<string, Parameters<typeof OrgChartViewer>[0]["data"]> = {
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
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Org chart: {slug}</h1>
      <div className="mt-6">
        <OrgChartViewer data={data} />
      </div>
    </div>
  );
}
