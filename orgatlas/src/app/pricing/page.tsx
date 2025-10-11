import { Hero } from "@/components/marketing/Hero";
import { Section } from "@/components/marketing/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Hero eyebrow="Pricing" title="Simple plans for teams of all sizes" subtitle="Start free. Upgrade for unlimited lists, saved contacts, and exports." />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[{name:'Free', price:'$0', features:['3 lists','5 saved contacts','Embed export']},{name:'Pro', price:'$29', features:['Unlimited lists','1k saved contacts','PNG export']},{name:'Team', price:'$99', features:['Shared lists','5k saved contacts','Priority support']}].map((p)=> (
          <Card key={p.name}>
            <CardHeader><CardTitle>{p.name}</CardTitle></CardHeader>
            <CardContent>
              <div className="text-3xl font-extrabold">{p.price}<span className="text-sm font-normal">/mo</span></div>
              <ul className="mt-3 text-sm space-y-1 list-disc pl-4">{p.features.map(f=> <li key={f}>{f}</li>)}</ul>
              <div className="mt-4"><Button className="w-full">Choose {p.name}</Button></div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Section title="FAQ">
        <p>Cancel anytime. No hidden fees. Contact sales for enterprise.</p>
      </Section>
    </div>
  );
}
