import { Hero } from "@/components/marketing/Hero";
import { Section } from "@/components/marketing/Section";
import { Button } from "@/components/ui/button";

export default function SalesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Hero eyebrow="Sales" title="Talk to our team" subtitle="We’ll help you deploy OrgAtlas for your workflow." ctaPrimary={{ href: "mailto:sales@orgatlas.app", label: "Contact sales" }} />
      <Section title="Why OrgAtlas for GTM">
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Faster prospecting with org intelligence.</li>
          <li>Better targeting with accurate reporting lines.</li>
          <li>Shareable org views for alignment.</li>
        </ul>
      </Section>
      <div className="mt-6"><Button asChild><a href="/pricing">See pricing</a></Button></div>
    </div>
  );
}
