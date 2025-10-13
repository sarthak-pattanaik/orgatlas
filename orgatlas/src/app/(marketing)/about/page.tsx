import { Hero } from "@/components/marketing/Hero";
import { Section } from "@/components/marketing/Section";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Hero eyebrow="About" title="We’re mapping how organizations work" subtitle="OrgAtlas helps go-to-market and research teams understand company structures to move faster." ctaPrimary={{ href: "/login", label: "Explore the workspace" }} />
      <Section title="Our mission">
        <p>Make organizational knowledge accessible and actionable for every team.</p>
      </Section>
      <Section title="What we believe">
        <ul className="list-disc pl-6 space-y-1">
          <li>Transparency creates opportunity.</li>
          <li>Great outreach starts with understanding people and teams.</li>
          <li>Accurate org maps lead to better decisions.</li>
        </ul>
      </Section>
    </div>
  );
}
