import Link from "next/link";

const milestones = [
  { label: "Founded", value: "2025" },
  { label: "Orgs mapped", value: "25K+" },
  { label: "Professionals indexed", value: "1M+" },
];

const teamHighlights = [
  {
    title: "Human + machine intelligence",
    description:
      "We combine expert researchers with automation to keep every chart accurate, contextual, and timely.",
  },
  {
    title: "Built with operators",
    description:
      "SDRs, recruiters, analysts, and investors shape OrgAtlas with the workflows they need every day.",
  },
  {
    title: "Community-driven insights",
    description:
      "Contributors flag org changes and confirm updates so you always see who’s actually in the room.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white" style={{ color: "#1A1A1A" }}>
      <section className="border-b border-[#E6E6E6] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center justify-center rounded-full border border-[#FFD1D1] bg-[#FFF4F4] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#D70000]">
              About
            </span>
            <h1 className="text-[44px] font-bold leading-[1.1] text-balance md:text-[56px]">
              Our mission: make organizations transparent.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We believe the best business decisions happen when you understand the people behind them. OrgAtlas gives teams clarity into how companies operate so you can build relationships faster.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              {milestones.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[16px] border border-[#E6E6E6] bg-[#F9F9F9] px-4 py-2"
                >
                  <p className="text-xs uppercase tracking-[0.2em]">{item.label}</p>
                  <p className="text-lg font-semibold" style={{ color: "#D70000" }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/careers"
                className="rounded-[12px] border-2 border-[#D70000] px-6 py-3 text-sm font-semibold text-[#D70000] transition-transform hover:-translate-y-0.5"
              >
                Join us → Careers
              </Link>
              <Link
                href="/contact"
                className="rounded-[12px] bg-[#D70000] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(215,0,0,0.3)] transition-transform hover:-translate-y-0.5"
              >
                Partner with us →
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto max-w-[460px] rounded-[28px] border border-[#E6E6E6] bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex size-14 items-center justify-center rounded-full bg-[#D70000]/10 text-[#D70000]">
                    <span className="text-2xl font-semibold">IA</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D70000]">
                      Making organizations transparent
                    </p>
                    <p className="text-sm text-muted-foreground">Intelligence + empathy</p>
                  </div>
                </div>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    OrgAtlas started with a simple observation: people move quickly, org charts don’t. We combine human curation and machine intelligence to keep every structure verified and up to date.
                  </p>
                  <p>
                    Today, thousands of professionals rely on OrgAtlas to map buying committees, monitor leadership changes, and invest with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-[36px] font-semibold leading-tight">
            The team & story behind OrgAtlas
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {teamHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="flex h-full flex-col gap-4 rounded-[24px] border border-[#E0E0E0] bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-2xl font-semibold">{highlight.title}</h3>
                <p className="text-base text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
