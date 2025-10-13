"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const accentColor = "#D70000";

const plans = [
  {
    name: "Start Free",
    description: "Start exploring without commitment",
    monthly: 0,
    annual: 0,
    cta: "Get Started",
    href: "/waitlist",
    features: [
      "5 org chart views per month",
      "Basic company search",
      "CSV exports (lite)",
      "Email change alerts",
    ],
    spotlight: false,
  },
  {
    name: "Pro",
    description: "Everything you need to win more deals",
    monthly: 49,
    annual: 39,
    cta: "Start 14-day Trial",
    href: "/waitlist",
    features: [
      "Unlimited org chart access",
      "Advanced search and filters",
      "Full chart exports & embeds",
      "Real-time alerts on changes",
      "Team workspace (5 seats)",
    ],
    spotlight: true,
  },
  {
    name: "Enterprise",
    description: "Built for scale and security",
    monthly: 0,
    annual: 0,
    cta: "Request Demo",
    href: "/contact",
    features: [
      "Everything in Pro, plus",
      "Unlimited API calls",
      "Custom CRM integrations",
      "Dedicated success manager",
      "SSO & advanced security",
      "Unlimited team seats",
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
          <span className="inline-flex items-center justify-center rounded-full border border-[#FFD1D1] bg-[#FFF4F4] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#D70000]">
            Pricing
          </span>
          <h1 className="mt-6 text-[44px] font-bold leading-[1.1] md:text-[56px]">
            Plans that scale with your pipeline.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Start free, then upgrade when you&apos;re ready to unlock deeper insights, alerts, and collaboration.
          </p>
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#E6E6E6] bg-white p-2 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
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
            Save 20% with annual billing.
          </p>
        </div>
      </section>

      <section className="border-b border-[#E6E6E6] bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
          {plans.map((plan) => {
            const isEnterprise = plan.name === "Enterprise";
            const isFree = plan.name === "Start Free";
            const price = isEnterprise
              ? "Custom"
              : billingCycle === "monthly"
                ? `$${plan.monthly}`
                : `$${plan.annual}`;
            const subLabel = isEnterprise
              ? "Let’s talk"
              : billingCycle === "monthly"
                ? "per seat / month"
                : "per seat / month (billed annually)";

            return (
              <div
                key={plan.name}
                className={`flex h-full flex-col rounded-[28px] border border-[#E6E6E6] bg-white p-8 shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-1 ${
                  plan.spotlight ? "ring-2 ring-[#D70000]/60" : ""
                }`}
              >
                {plan.spotlight ? (
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#D70000]/10 px-4 py-1 text-xs font-semibold text-[#D70000]">
                    <span className="inline-block size-2 rounded-full bg-[#D70000]" />
                    Most Popular
                  </div>
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
                    className={`w-full rounded-[12px] py-6 text-base font-semibold transition-transform ${
                      plan.spotlight
                        ? "border-none bg-[#D70000] text-white shadow-[0_18px_40px_rgba(215,0,0,0.35)] hover:-translate-y-0.5"
                        : "border-2 border-[#D70000] bg-white text-[#D70000] hover:-translate-y-0.5"
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
          <h2 className="text-2xl font-semibold text-[#1A1A1A]">
            All plans include our live chart viewer, verified data, and support.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Upgrade when you&apos;re ready for deeper automation, CRM integrations, and team collaboration.
          </p>
        </div>
      </section>
    </div>
  );
}
