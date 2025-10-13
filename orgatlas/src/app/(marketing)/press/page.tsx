import { Hero } from "@/components/marketing/Hero";
import { Section } from "@/components/marketing/Section";

export default function PressPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Hero eyebrow="Press" title="Press & media" subtitle="Brand assets and media inquiries." ctaPrimary={{ href: "mailto:press@orgatlas.app", label: "Contact press" }} />
      <Section title="Brand">
        <p>Download our logo and guidelines. Use screenshots with attribution.</p>
      </Section>
    </div>
  );
}
