import Link from "next/link";

const topics = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Account setup, navigation basics",
    points: [
      "Create your workspace and invite teammates",
      "Understand chart tiers and verification badges",
      "Navigate between saved orgs, alerts, and exports",
    ],
  },
  {
    id: "search",
    title: "Search & Filters",
    description: "How to find companies fast",
    points: [
      "Use advanced filters for headcount, region, or hiring velocity",
      "Bookmark orgs and set alerts directly from search",
    ],
  },
  {
    id: "viewer",
    title: "Org Chart Viewer",
    description: "Expand, collapse, and annotate",
    points: [
      "Toggle reporting layers and department highlights",
      "Add private notes or shared annotations for your team",
      "Switch between leadership, department, and project views",
    ],
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description: "Share charts, invite teammates",
    points: [
      "Send chart snapshots with context and commentary",
      "Invite collaborators with role-based permissions",
      "Build shared watchlists for target accounts",
    ],
  },
  {
    id: "export",
    title: "Export & Embed",
    description: "Add charts to decks or dashboards",
    points: [
      "Export PNG, PDF, or CSV summaries",
      "Embed live charts into Notion, Pitch, or web portals",
      "Automate exports to slide decks with templates",
    ],
  },
  {
    id: "integrations",
    title: "Integrations (Pro+)",
    description: "CRM, Slack, API usage",
    points: [
      "Sync contacts to Salesforce, HubSpot, and Outreach",
      "Pipe alerts into Slack channels with one click",
      "Use the API to enrich internal systems",
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="bg-white" style={{ color: "#1A1A1A" }}>
      <section className="border-b border-[#E6E6E6] bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D70000]">
            Docs
          </p>
          <h1 className="mt-4 text-[44px] font-bold leading-[1.1] md:text-[56px]">
            Learn how to get the most from OrgAtlas.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Step-by-step guides, best practices, and integration notes to help your team work with clarity.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F5F5]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-[260px_1fr]">
            <aside className="space-y-6">
              <nav className="rounded-[20px] border border-[#E6E6E6] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D70000]">
                  Topics
                </p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {topics.map((topic) => (
                    <li key={topic.id}>
                      <a className="block rounded-lg px-3 py-2 transition-colors hover:bg-[#D70000]/10 hover:text-[#D70000]" href={`#${topic.id}`}>
                        {topic.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="rounded-[20px] border border-[#E6E6E6] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                <p className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>
                  Have questions?
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reach our support team for guided onboarding or technical help.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center justify-center rounded-[12px] border-2 border-[#D70000] px-4 py-2 text-sm font-semibold text-[#D70000] transition-transform hover:-translate-y-0.5"
                >
                  Contact Support
                </Link>
              </div>
            </aside>
            <div className="space-y-12">
              {topics.map((topic) => (
                <article
                  key={topic.id}
                  id={topic.id}
                  className="rounded-[24px] border border-[#E6E6E6] bg-white p-8 shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
                >
                  <h2 className="text-2xl font-semibold">{topic.title}</h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                    {topic.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                    {topic.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 inline-flex size-2.5 rounded-full bg-[#D70000]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
