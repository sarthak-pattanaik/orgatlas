"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Share2,
  Search,
  Target,
  Users,
  Network,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const accentColor = "#D70000";
const neutralText = "#1A1A1A";
const lightGray = "#F5F5F5";

const whatCards = [
  {
    title: "Search & Find",
    description:
      "Instantly access comprehensive org charts for thousands of companies.",
    cta: "Learn more",
    icon: Search,
  },
  {
    title: "Analyze & Understand",
    description:
      "Identify decision-makers, map reporting relationships, and surface buying signals.",
    cta: "Learn more",
    icon: Target,
  },
  {
    title: "Execute & Win",
    description:
      "Export targeted lists, share intelligence with your team, and act with confidence.",
    cta: "Learn more",
    icon: Share2,
  },
];

const personas = [
  {
    title: "SDRs",
    description: "Identify buying committees and target the right roles.",
    icon: Target,
  },
  {
    title: "Recruiters",
    description: "Track org changes and discover new hiring signals.",
    icon: Users,
  },
  {
    title: "Analysts",
    description:
      "Decode structures that influence strategy and investment.",
    icon: LineChart,
  },
  {
    title: "Researchers",
    description:
      "Compare companies and monitor leadership shifts.",
    icon: Network,
  },
];

const whyBullets = [
  "Analyst-verified org data, refreshed weekly",
  "Live alerts on role changes and new hires",
  "Clean exports for CRMs, slide decks, or reports",
  "Easy team collaboration with shared workspaces",
];

const stats = [
  { label: "org charts curated", value: 25000, suffix: "+" },
  {
    label: "verified professionals",
    value: 1200000,
    format: (val: number) => `${(val / 1_000_000).toFixed(1)}M`,
  },
  { label: "chart contributions", value: 100000, suffix: "+" },
];

function AnimatedCounter({
  value,
  suffix = "",
  duration = 1500,
  format,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  format?: (value: number) => string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * value);
      setDisplayValue(current);
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return (
    <span className="text-4xl font-semibold" style={{ color: accentColor }}>
      {format ? format(displayValue) : displayValue.toLocaleString()}
      {!format && suffix ? suffix : null}
    </span>
  );
}

function AnimatedOrgChart() {
  return (
    <div
      className="relative mx-auto grid h-[340px] w-full max-w-[440px] place-items-center overflow-hidden rounded-[32px] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      style={{ border: "1px solid #E6E6E6" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#fafafa] via-white to-[#f1f1f1]" />
      <div className="relative flex w-full flex-col items-center gap-8">
        <ChartNode label="CEO" position="top" />
        <div className="grid w-full grid-cols-2 gap-6">
          <ChartNode label="Revenue" highlight />
          <ChartNode label="Product" />
        </div>
        <div className="grid w-full grid-cols-3 gap-4">
          <ChartNode label="Sales Ops" subtle />
          <ChartNode label="Growth" subtle />
          <ChartNode label="Research" subtle />
        </div>
      </div>
      <Connector className="left-1/2 top-[28%] h-[60px]" />
      <Connector className="left-[31%] top-[43%] h-[70px]" />
      <Connector className="right-[31%] top-[43%] h-[70px]" />
      <Connector className="left-[19%] bottom-[32%] h-[50px]" />
      <Connector className="left-1/2 bottom-[32%] h-[50px]" />
      <Connector className="right-[19%] bottom-[32%] h-[50px]" />
    </div>
  );
}

function ChartNode({
  label,
  position,
  highlight = false,
  subtle = false,
}: {
  label: string;
  position?: "top" | "middle" | "bottom";
  highlight?: boolean;
  subtle?: boolean;
}) {
  const baseClasses =
    "relative flex h-[72px] items-center gap-3 rounded-2xl border border-[#E6E6E6] bg-white px-4 shadow-sm transition-all duration-300";
  const highlightClasses = highlight
    ? "shadow-[0_12px_40px_rgba(215,0,0,0.18)]"
    : "";
  const subtleClasses = subtle ? "opacity-90" : "";
  const pulse = position === "top" || highlight;

  return (
    <div className={`${baseClasses} ${highlightClasses} ${subtleClasses}`}>
      <div
        className="flex size-12 items-center justify-center rounded-full border border-[#E6E6E6] text-sm font-semibold"
        style={{
          backgroundColor: highlight ? `${accentColor}10` : "#F9F9F9",
          color: highlight ? accentColor : neutralText,
        }}
      >
        {label.slice(0, 2)}
      </div>
      <div>
        <p className="text-sm font-semibold" style={{ color: neutralText }}>
          {label}
        </p>
        <p className="text-xs text-muted-foreground">{pulse ? "Live" : "Updated"}</p>
      </div>
      {pulse ? (
        <span
          className="absolute -top-2 -right-2 size-3 rounded-full"
          style={{
            backgroundColor: accentColor,
            boxShadow: `0 0 0 6px rgba(215,0,0,0.25)` ,
          }}
        />
      ) : null}
    </div>
  );
}

function Connector({ className }: { className: string }) {
  return (
    <span
      className={`absolute w-px bg-[#E6E6E6] ${className}`}
      style={{ animation: "pulseLine 3s ease-in-out infinite" }}
    />
  );
}

export default function MarketingPage() {
  return (
    <div className="bg-white" style={{ color: neutralText }}>
      <style jsx global>{`
        @keyframes pulseLine {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
      <section className="border-b border-[#E6E6E6] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-16 md:flex-row md:items-center">
          <div className="max-w-xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-[#FFD1D1] bg-[#FFF4F4] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#D70000]">
              The Future of Org Intelligence
            </span>
            <h1 className="text-[44px] font-bold leading-[1.1] text-balance md:text-[56px]">
              See through organizations. Close deals faster.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Stop guessing who makes decisions. OrgAtlas reveals the complete organizational picture—giving sales teams, recruiters, and analysts the intelligence they need to win.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                size="lg"
                className="rounded-[12px] border-none bg-[#D70000] px-8 py-3 text-base text-white shadow-[0_18px_40px_rgba(215,0,0,0.35)] transition-transform hover:-translate-y-0.5"
                asChild
              >
                <Link href="/waitlist">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-[12px] border-2 border-[#D70000] bg-white px-8 py-3 text-base text-[#D70000] shadow-none transition-transform hover:-translate-y-0.5"
                asChild
              >
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
            <div className="pt-6 text-sm">
              <p className="font-medium uppercase tracking-[0.24em] text-muted-foreground">
                Trusted by go-to-market and recruiting teams at
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-base font-semibold text-neutral-500">
                <span className="rounded-full border border-neutral-200 px-3 py-1">Northbeam</span>
                <span className="rounded-full border border-neutral-200 px-3 py-1">Foresight Capital</span>
                <span className="rounded-full border border-neutral-200 px-3 py-1">Apex Ventures</span>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center md:w-auto">
            <AnimatedOrgChart />
          </div>
        </div>
      </section>

      <section className="border-b border-[#E6E6E6] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <h2 className="text-[36px] font-semibold leading-tight">
              See how companies are built.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Verified, interactive org charts that reveal leadership layers, reporting lines, and emerging roles.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whatCards.map((card) => (
              <div
                key={card.title}
                className="group flex h-full flex-col gap-4 rounded-[20px] border border-[#E6E6E6] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#D70000]/40 hover:shadow-[0_18px_40px_rgba(0,0,0,0.1)]"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-[#D70000]/10 text-[#D70000] transition-transform duration-200 group-hover:scale-105">
                  <card.icon className="size-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold" style={{ color: neutralText }}>
                    {card.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </div>
                <Link
                  href="/use-cases"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#D70000] transition-transform hover:translate-x-0.5"
                >
                  {card.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E6E6E6]" style={{ backgroundColor: lightGray }}>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D70000]">
              Purpose-Built Workflows
            </span>
            <h2 className="mt-3 text-[36px] font-semibold leading-tight">
              Every team wins with better org intelligence.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {personas.map((persona) => (
              <div
                key={persona.title}
                className="group flex h-full flex-col gap-4 rounded-[20px] border border-[#E0E0E0] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#D70000]"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-[#D70000]/10 text-[#D70000] transition-transform group-hover:scale-105">
                  <persona.icon className="size-5" />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: neutralText }}>
                  {persona.title}
                </h3>
                <p className="text-base text-muted-foreground">
                  {persona.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E6E6E6] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-6">
            <h2 className="text-[36px] font-semibold leading-tight">
              Don’t just collect data — see the people behind it.
            </h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              {whyBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-2.5 rounded-full" style={{ backgroundColor: accentColor }} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex w-full max-w-xl justify-center">
            <div className="relative h-[360px] w-full max-w-[420px] overflow-hidden rounded-[28px] border border-[#E6E6E6] bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
              <div className="absolute inset-4 rounded-[24px] border border-dashed border-[#E6E6E6]" />
              <div className="relative flex h-full flex-col gap-4">
                <div className="flex items-center justify-between rounded-[18px] bg-[#F9F9F9] p-4">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold" style={{ color: neutralText }}>
                      Leadership map
                    </p>
                    <p className="text-xs text-muted-foreground">Updated 2h ago</p>
                  </div>
                  <span className="rounded-full bg-[#D70000]/10 px-3 py-1 text-xs font-medium text-[#D70000]">
                    Live
                  </span>
                </div>
                <div className="grid flex-1 grid-cols-2 gap-4">
                  <div className="space-y-4 rounded-[18px] border border-[#E6E6E6] bg-white p-4">
                    <div className="flex items-center justify-between text-sm font-medium" style={{ color: neutralText }}>
                      <span>Exec layer</span>
                      <span>6 roles</span>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p>CEO • COO • CRO • CTO</p>
                      <p>SVP Sales • SVP Product</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between rounded-[14px] bg-[#D70000]/10 px-3 py-2 text-xs font-medium text-[#D70000]">
                      <span>Alerts</span>
                      <span>2 changes</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between rounded-[18px] border border-[#E6E6E6] bg-white p-4">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: neutralText }}>
                        Node spotlight
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Hover to see reporting lines, tenure, and responsibilities.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 rounded-[16px] bg-[#F7F7F7] p-3">
                        <div className="flex size-10 items-center justify-center rounded-full bg-[#D70000]/10 text-[#D70000] font-semibold">
                          AC
                        </div>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: neutralText }}>
                            Avery Cole
                          </p>
                          <p className="text-xs text-muted-foreground">VP, Revenue Operations</p>
                        </div>
                      </div>
                      <div className="rounded-[16px] border border-dashed border-[#E6E6E6] p-3 text-xs text-muted-foreground">
                        Reports to CRO • Manages 5 teams • New hire alert enabled
                      </div>
                    </div>
                    <button
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-[14px] border border-[#E6E6E6] bg-[#FDFDFD] px-3 py-2 text-xs font-semibold text-[#D70000] transition-colors hover:border-[#D70000]/60"
                    >
                      Open chart
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-12 -right-12 size-40 rounded-full border border-[#D70000]/20 animate-[spin_24s_linear_infinite]" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E6E6E6] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="max-w-xl space-y-6">
              <h2 className="text-[36px] font-semibold leading-tight">
                Don’t just collect data — see the people behind it.
              </h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                {whyBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex size-2.5 rounded-full" style={{ backgroundColor: accentColor }} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex w-full max-w-xl justify-center">
              <div className="relative h-[360px] w-full max-w-[420px] overflow-hidden rounded-[28px] border border-[#E6E6E6] bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
                <div className="absolute inset-4 rounded-[24px] border border-dashed border-[#E6E6E6]" />
                <div className="relative flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between rounded-[18px] bg-[#F9F9F9] p-4">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold" style={{ color: neutralText }}>
                        Leadership map
                      </p>
                      <p className="text-xs text-muted-foreground">Updated 2h ago</p>
                    </div>
                    <span className="rounded-full bg-[#D70000]/10 px-3 py-1 text-xs font-medium text-[#D70000]">
                      Live
                    </span>
                  </div>
                  <div className="grid flex-1 grid-cols-2 gap-4">
                    <div className="space-y-4 rounded-[18px] border border-[#E6E6E6] bg-white p-4">
                      <div className="flex items-center justify-between text-sm font-medium" style={{ color: neutralText }}>
                        <span>Exec layer</span>
                        <span>6 roles</span>
                      </div>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <p>CEO • COO • CRO • CTO</p>
                        <p>SVP Sales • SVP Product</p>
                      </div>
                      <div className="mt-auto flex items-center justify-between rounded-[14px] bg-[#D70000]/10 px-3 py-2 text-xs font-medium text-[#D70000]">
                        <span>Alerts</span>
                        <span>2 changes</span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between rounded-[18px] border border-[#E6E6E6] bg-white p-4">
                      <div>
                        <p className="text-sm font-semibold" style={{ color: neutralText }}>
                          Node spotlight
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Hover to see reporting lines, tenure, and responsibilities.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 rounded-[16px] bg-[#F7F7F7] p-3">
                          <div className="flex size-10 items-center justify-center rounded-full bg-[#D70000]/10 text-[#D70000] font-semibold">
                            AC
                          </div>
                          <div>
                            <p className="text-sm font-semibold" style={{ color: neutralText }}>
                              Avery Cole
                            </p>
                            <p className="text-xs text-muted-foreground">VP, Revenue Operations</p>
                          </div>
                        </div>
                        <div className="rounded-[16px] border border-dashed border-[#E6E6E6] p-3 text-xs text-muted-foreground">
                          Reports to CRO • Manages 5 teams • New hire alert enabled
                        </div>
                      </div>
                      <button
                        className="mt-4 inline-flex items-center justify-center gap-2 rounded-[14px] border border-[#E6E6E6] bg-[#FDFDFD] px-3 py-2 text-xs font-semibold text-[#D70000] transition-colors hover:border-[#D70000]/60"
                      >
                        Open chart
                        <ArrowRight className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-12 -right-12 size-40 rounded-full border border-[#D70000]/20 animate-[spin_24s_linear_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E6E6E6]" style={{ backgroundColor: lightGray }}>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-center text-[36px] font-semibold leading-tight">
            Built by the community, trusted by professionals.
          </h2>
          <div className="mt-12 grid gap-10 text-center md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-3 rounded-[20px] border border-[#E0E0E0] bg-white p-8 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} format={stat.format} />
                <p className="text-base font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
