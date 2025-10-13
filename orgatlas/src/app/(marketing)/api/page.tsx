import { Hero } from "@/components/marketing/Hero";
import { Section } from "@/components/marketing/Section";

export default function ApiPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Hero eyebrow="API" title="OrgAtlas API (early)" subtitle="Programmatic access to companies, people, teams, and relations." ctaPrimary={{ href: "mailto:api@orgatlas.app", label: "Join waitlist" }} />
      <Section title="What’s coming">
        <p>Company search, org traversal, deltas over time, and embeddable charts.</p>
      </Section>
    </div>
  );
}
