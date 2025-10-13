"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const accentColor = "#D70000";

const plans = [
  {
    name: "Free Plan",
    description: "Basic search and limited chart viewing",
    monthly: 0,
    annual: 0,
    cta: "Get Started",
    href: "/waitlist",
    features: [
      "5 org charts / month",
      "Basic search filters",
      "Public org view only",
    ],
    spotlight: false,
  },
  {
    name: "Pro Plan",
    description: "For individuals or small teams",
    monthly: 89,
    annual: 79,
    cta: "Start Free Trial",
    href: "/waitlist",
    features: [
      "Unlimited charts",
      "Export and embed",
      "Leadership & hiring alerts",
      "Priority refresh",
    ],
    spotlight: true,
  },
  {
    name: "Enterprise Plan",
    description: "For organizations and integrations",
    monthly: 0,
    annual: 0,
    cta: "Book a Demo",
    href: "/contact",
    features: [
      "Team workspaces",
      "API access & SSO",
      "Custom data enrichment",
      "Dedicated success manager",
    ],
    spotlight: false,
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <div className="bg-white" style={{ color: "#1A1A1A" }}>
      <section className="border-b border-[#E6E6E6] bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D70000]">
            Pricing
          </p>
          <h1 className="mt-4 text-[44px] font-bold leading-[1.1] md:text-[56px]">
            Choose a plan that fits your team.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Start free. Upgrade as your org intelligence needs grow.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#E6E6E6] bg-white p-2 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${billingCycle === "monthly" ? "bg-[#D70000] text-white shadow-[0_10px_25px_rgba(215,0,0,0.35)]" : "text-muted-foreground"}`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${billingCycle === "annual" ? "bg-[#D70000] text-white shadow-[0_10px_25px_rgba(215,0,0,0.35)]" : "text-muted-foreground"}`}
            >
              Annual
            </button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Save 10% with annual billing.
          </p>
        </div>
      </section>

      <section className="border-b border-[#E6E6E6] bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
          {plans.map((plan) => {
            const isEnterprise = plan.name === "Enterprise Plan";
            const isFree = plan.name === "Free Plan";
            const price = isEnterprise
              ? "Contact"
              : billingCycle === "monthly"
                ? `$${plan.monthly}`
                : `$${plan.annual}`;
            const subLabel = isEnterprise
              ? "Custom"
              : billingCycle === "monthly"
                ? "/month"
                : "/seat / month";

            return (
              <div
                key={plan.name}
                className={`flex h-full flex-col rounded-[24px] border border-[#E6E6E6] bg-white p-8 shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-1 ${
                  plan.spotlight ? "ring-2 ring-[#D70000]/60" : ""
                }`}
              >
                {plan.spotlight ? (
                  <span className="mb-6 inline-flex rounded-full bg-[#D70000]/10 px-4 py-1 text-xs font-semibold text-[#D70000]">
                    Most popular
                  </span>
                ) : (
                  <span className="mb-6 h-4" />
                )}
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold">{plan.name}</h2>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-bold" style={{ color: accentColor }}>
                    {price}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">{subLabel}</span>
                </div>
                <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 rounded-full bg-[#D70000]/10 p-1 text-[#D70000]">
                        <Check className="size-3.5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button
                    asChild
                    size="lg"
                    variant={plan.spotlight ? "secondary" : "outline"}
                    className={`${
                      plan.spotlight
                        ? "w-full rounded-[12px] border-none bg-[#D70000] py-6 text-white shadow-[0_18px_40px_rgba(215,0,0,0.35)] hover:-translate-y-0.5"
                        : "w-full rounded-[12px] border-2 border-[#D70000] py-6 text-[#D70000] hover:-translate-y-0.5"
                    }`}
                  >
                    <a href={plan.href}>{plan.cta}</a>
                  </Button>
                  {isEnterprise && (
                    <p className="mt-3 text-xs text-muted-foreground">
                      We’ll tailor pricing to your workflow and integrations.
                    </p>
                  )}
                  {isFree && (
                    <p className="mt-3 text-xs text-muted-foreground">
                      No credit card required to start.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#F5F5F5]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-base text-muted-foreground">
            All plans include access to our live chart viewer and verified org data.
          </p>
        </div>
      </section>
    </div>
  );
}
