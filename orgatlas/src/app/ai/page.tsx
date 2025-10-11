import { Hero } from "@/components/marketing/Hero";
import { Section } from "@/components/marketing/Section";

export default function AIPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Hero eyebrow="AI Mode" title="AI that understands orgs" subtitle="Ask questions like ‘Who leads EMEA Sales at Contoso?’ and get instant answers." ctaPrimary={{ href: "/discover", label: "Try it on demo" }} />
      <Section title="What it can do">
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Summarize teams and reporting lines</li>
          <li>Suggest outreach paths</li>
          <li>Explain role moves and org changes</li>
        </ul>
      </Section>
    </div>
  );
}
