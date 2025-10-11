import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Sparkles, Users, BriefcaseBusiness, Bot } from "lucide-react";
import { customerLogos, testimonials } from "@/data/marketing";

export const metadata: Metadata = {
  title: "Revenue intelligence built for operators",
  description:
    "OrgAtlas unifies company, people, job, and AI insights so go-to-market teams can prioritize the right accounts faster.",
};

const featureCards = [
  {
    title: "Discover",
    description: "Spot warm accounts with live funding, hiring, and buyer committee signals.",
    icon: Sparkles,
  },
  {
    title: "People",
    description: "Navigate org charts with verified titles, locations, and relationship intel.",
    icon: Users,
  },
  {
    title: "Jobs",
    description: "Track open roles to map initiatives and tee up recruiting plays.",
    icon: BriefcaseBusiness,
  },
  {
    title: "AI Mode",
    description: "Turn raw signals into talk tracks, call prep, and tailored outreach in seconds.",
    icon: Bot,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20 pt-10">
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Built for revenue, talent, and strategy teams
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Go-to-market clarity from a single source of truth.
          </h1>
          <p className="text-lg text-muted-foreground">
            OrgAtlas stitches together millions of data points so your team always knows which accounts are heating up, who
            to contact, and how to win the next conversation.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Log in <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              See Pricing
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-6 shadow-lg">
          <div className="rounded-xl border border-dashed border-primary/30 bg-primary/5 p-6">
            <p className="text-sm font-semibold text-primary">Problem → Solution</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Fragmented signals:</span> Research, enablement, and talent
                teams work from disconnected tools.
              </li>
              <li>
                <span className="font-semibold text-foreground">Slow handoffs:</span> Opportunities stall because buyer and
                hiring context is buried in docs.
              </li>
              <li>
                <span className="font-semibold text-foreground">OrgAtlas unifies workflows:</span> One workspace for account
                intelligence, people data, jobs, and AI guidance.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-semibold">Why teams choose OrgAtlas</h2>
            <p className="text-muted-foreground">
              Bring marketing, sales, talent, and leadership together with a real-time picture of every account and the people
              inside it.
            </p>
          </div>
          <div className="flex-1 space-y-4">
            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <h3 className="text-base font-semibold">Built for GTM precision</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                OrgAtlas enriches every account with funding, hiring, product usage, and executive moves. The moment a buying
                committee changes, your playbooks update automatically.
              </p>
            </div>
            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <h3 className="text-base font-semibold">Shared across the org</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Everyone sees the same truth—whether you are planning territories, sourcing candidates, or prepping an ELT
                readout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold">Four workspaces, one login</h2>
          <p className="mt-3 text-muted-foreground">
            Each module is designed to get you into the right conversation faster. Log in to explore the full experience.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {featureCards.map((feature) => (
            <Link
              key={feature.title}
              href="/login"
              className="group rounded-2xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <feature.icon className="h-10 w-10 rounded-lg bg-primary/10 p-2 text-primary" aria-hidden />
              <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                Explore in the app <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted by modern go-to-market teams
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {customerLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-16 items-center justify-center rounded-xl border bg-background text-sm font-semibold text-muted-foreground"
              >
                {logo.initials}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold">Teams see value in week one</h2>
          <p className="mt-3 text-muted-foreground">
            Operators from growth-stage SaaS to enterprise GTM teams rely on OrgAtlas to keep every motion aligned.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-2xl border bg-card p-6 shadow-sm">
              <p className="text-sm leading-relaxed text-muted-foreground">“{testimonial.quote}”</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
