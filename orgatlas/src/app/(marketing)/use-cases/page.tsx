import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const sections = [
  {
    slug: "sdr",
    title: "Find the real decision-makers.",
    description:
      "See who reports to whom, uncover hidden influencers, and target accounts with context. No more guesswork in outreach.",
    cta: "See SDR workflow →",
    href: "/contact",
    visual: "/images/use-cases/sdr.svg",
  },
  {
    slug: "recruiting",
    title: "See which teams are growing.",
    description:
      "Track headcount shifts, promotions, and new openings before competitors do. Get to talent first.",
    cta: "Explore recruiting use case →",
    href: "/contact",
    visual: "/images/use-cases/recruiting.svg",
  },
  {
    slug: "analyst",
    title: "Decode companies before you invest or advise.",
    description:
      "Visualize leadership stability, reporting lines, and departmental maturity to inform your research.",
    cta: "See analyst view →",
    href: "/contact",
    visual: "/images/use-cases/analyst.svg",
  },
  {
    slug: "research",
    title: "Make sense of people structures at scale.",
    description:
      "Study comparative structures across industries, track leadership moves, and generate insights faster.",
    cta: "See how it works →",
    href: "/contact",
    visual: "/images/use-cases/research.svg",
  },
];

const accentColor = "#D70000";
const neutral = "#1A1A1A";

export default function UseCasesPage() {
  return (
    <div className="bg-white" style={{ color: neutral }}>
      <section className="border-b border-[#E6E6E6] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[#FFD1D1] bg-[#FFF4F4] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#D70000]">
            Proven Workflows
          </span>
          <h1 className="mt-6 text-[44px] font-bold leading-[1.1] text-balance md:text-[56px]">
            Every team wins with better org intelligence.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            From first contact to closed deals, OrgAtlas gives SDRs, recruiters, analysts, and researchers a live map of who matters.
          </p>
        </div>
      </section>

      {sections.map((section, index) => {
        const isEven = index % 2 === 1;
        const textOrder = isEven ? "md:order-1" : "md:order-2";
        const visualOrder = isEven ? "md:order-2" : "md:order-1";
        return (
          <section
            key={section.slug}
            className={`border-b border-[#E6E6E6] ${isEven ? "bg-[#F5F5F5]" : "bg-white"}`}
          >
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
              <div className={`order-2 flex flex-col gap-6 ${textOrder}`}>
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D70000]">
                  {section.slug === "sdr"
                    ? "Sales Teams"
                    : section.slug === "recruiting"
                      ? "Recruiting"
                      : section.slug === "analyst"
                        ? "Analysts"
                        : "Research"}
                </span>
                <h2 className="text-[32px] font-semibold leading-tight">
                  {section.title}
                </h2>
                <p className="text-lg text-muted-foreground">{section.description}</p>
                <Link
                  href={section.href}
                  className="inline-flex items-center gap-2 text-base font-semibold"
                  style={{ color: accentColor }}
                >
                  {section.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className={`order-1 ${visualOrder}`}>
                <div className="relative mx-auto max-w-[420px] overflow-hidden rounded-[28px] border border-[#E6E6E6] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                  <div className="relative h-[260px] w-full">
                    <Image
                      src={section.visual}
                      alt={section.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 420px, 100vw"
                    />
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="flex items-center justify-between rounded-[16px] bg-[#F7F7F7] p-4">
                      <span className="text-sm font-semibold" style={{ color: neutral }}>
                        {section.slug === "sdr"
                          ? "Buying committee"
                          : section.slug === "recruiting"
                            ? "Talent signals"
                            : section.slug === "analyst"
                              ? "Org stability"
                              : "Research snapshot"}
                      </span>
                      <span className="rounded-full bg-[#D70000]/10 px-3 py-1 text-xs font-medium text-[#D70000]">
                        Live insight
                      </span>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      {section.slug === "sdr" && (
                        <>
                          <p>Decision chain · VP Sales → Directors</p>
                          <p>Influencers · RevOps, Sales Ops</p>
                          <p>Sequence ready • CSV export</p>
                        </>
                      )}
                      {section.slug === "recruiting" && (
                        <>
                          <p>Headcount trend · +18 roles this quarter</p>
                          <p>Priority hires · Product, GTM, AI</p>
                          <p>Alerts · 4 new openings flagged</p>
                        </>
                      )}
                      {section.slug === "analyst" && (
                        <>
                          <p>Leadership tenure · Avg 3.4 years</p>
                          <p>Reporting layers · 4 within GTM</p>
                          <p>Confidence score · 92%</p>
                        </>
                      )}
                      {section.slug === "research" && (
                        <>
                          <p>Compare: Acme vs. Horizon vs. Nimbus</p>
                          <p>Teams tracked · 48 across 12 orgs</p>
                          <p>Export ready • XLS & PDF</p>
                        </>
                      )}
                    </div>
                    <div className="rounded-[16px] border border-dashed border-[#E6E6E6] bg-[#FCFCFC] p-4 text-xs text-muted-foreground">
                      Auto-refreshed weekly with analyst review.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
