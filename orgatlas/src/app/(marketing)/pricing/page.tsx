import Link from "next/link";
import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { faqs, pricingPlans } from "@/data/marketing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Choose the OrgAtlas plan that fits your team and scale when you are ready.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-20 px-4 py-12 sm:px-6">
      <section className="text-center">
        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          Pricing
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">Plans for every growth stage</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          Start with the essentials and upgrade when your team needs deeper signals, collaboration, and enterprise controls.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex-1 space-y-3">
              <h2 className="text-lg font-semibold">{plan.name}</h2>
              <p className="text-3xl font-semibold">{plan.price}</p>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-center gap-3 text-left">
                    {feature.included ? (
                      <Check className="h-4 w-4 text-primary" aria-hidden />
                    ) : (
                      <Minus className="h-4 w-4 text-muted-foreground" aria-hidden />
                    )}
                    <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>{feature.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/login"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </section>

      <section className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Have something else in mind? Email <a className="underline" href="mailto:hello@orgatlas.app">hello@orgatlas.app</a> and we will help you out.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-xl border bg-card p-5 shadow-sm">
              <summary className="cursor-pointer list-none text-base font-semibold text-foreground">
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
