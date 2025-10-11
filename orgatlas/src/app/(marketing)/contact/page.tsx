import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the OrgAtlas team for product questions and partnerships.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight">Contact us</h1>
      <p className="text-base text-muted-foreground">
        We are here to help your team evaluate OrgAtlas. Drop us a line at <a className="underline" href="mailto:hello@orgatlas.app">hello@orgatlas.app</a> and we will respond within one business day.
      </p>
      <p className="text-base text-muted-foreground">
        Looking for support? Log in to the product app and use the in-app messenger, or reach out to your customer success partner.
      </p>
    </div>
  );
}
