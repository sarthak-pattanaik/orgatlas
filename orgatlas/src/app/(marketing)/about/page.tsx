import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how OrgAtlas is building the go-to-market intelligence layer for modern teams.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight">About OrgAtlas</h1>
      <p className="text-base text-muted-foreground">
        We are a distributed team of operators, researchers, and engineers building the next generation of go-to-market
        intelligence. This placeholder page will expand with our story, values, and hiring updates soon.
      </p>
      <p className="text-base text-muted-foreground">
        For now, explore the product, join the demo workspace, and reach out to <a className="underline" href="mailto:hello@orgatlas.app">hello@orgatlas.app</a> with any questions.
      </p>
    </div>
  );
}
