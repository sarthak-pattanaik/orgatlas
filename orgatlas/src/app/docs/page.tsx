import { Hero } from "@/components/marketing/Hero";
import { Section } from "@/components/marketing/Section";

export default function DocsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Hero eyebrow="Docs" title="OrgAtlas Documentation" subtitle="Learn how to explore, contribute, embed, and export." />
      <Section title="Topics">
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Exploring org charts</li>
          <li>Suggesting edits</li>
          <li>Embedding charts</li>
          <li>Exporting images and data</li>
        </ul>
      </Section>
    </div>
  );
}
