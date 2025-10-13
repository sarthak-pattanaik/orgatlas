import { Hero } from "@/components/marketing/Hero";
import { Section } from "@/components/marketing/Section";

export default function PartnersPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Hero eyebrow="Partners" title="Partner with OrgAtlas" subtitle="Let’s build the org graph together." ctaPrimary={{ href: "mailto:partners@orgatlas.app", label: "Become a partner" }} />
      <Section title="Partner benefits">
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Co-marketing and early feature access</li>
          <li>API and data collaboration</li>
          <li>Revenue opportunities</li>
        </ul>
      </Section>
    </div>
  );
}
