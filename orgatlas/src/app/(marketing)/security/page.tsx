import { Hero } from "@/components/marketing/Hero";
import { Section } from "@/components/marketing/Section";

export default function SecurityPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Hero eyebrow="Security" title="Security & privacy" subtitle="We take data protection seriously." />
      <Section title="Practices">
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Encryption in transit and at rest</li>
          <li>Principle of least privilege</li>
          <li>Regular audits and monitoring</li>
        </ul>
      </Section>
    </div>
  );
}
