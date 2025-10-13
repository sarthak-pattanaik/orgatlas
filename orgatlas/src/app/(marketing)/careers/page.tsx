import { Hero } from "@/components/marketing/Hero";
import { Section } from "@/components/marketing/Section";

export default function CareersPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Hero eyebrow="Careers" title="Join us to build the org graph" subtitle="We’re a small, product-minded team shipping fast." ctaPrimary={{ href: "/jobs", label: "Open roles" }} ctaSecondary={{ href: "/about", label: "Learn more" }} />
      <Section title="Working at OrgAtlas">
        <p>Ownership, impact, and craft. We value builders who care about users.</p>
      </Section>
    </div>
  );
}
