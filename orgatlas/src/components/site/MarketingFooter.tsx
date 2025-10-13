import Link from "next/link";
import { Button } from "@/components/ui/button";

const productLinks = [
  { label: "Use Cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Documentation", href: "/docs" },
  { label: "API", href: "/docs#integrations" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/press" },
];

const stayUpdated = [
  { label: "Newsletter", href: "/waitlist" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

const trustedLogos = [
  "Northbeam",
  "Foresight Capital",
  "Apex Ventures",
  "DataCore",
  "Summit Partners",
];

export function MarketingFooter() {
  return (
    <footer className="bg-[#0B0B0B] text-white">
      <div className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF8686]">
              Ready to Map Your Market?
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Get instant access to 25,000+ org charts. No credit card required.
            </h2>
            <p className="text-sm text-white/60">
              Start your 14-day free trial. Cancel anytime.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-[12px] bg-[#D70000] px-8 py-3 text-base font-semibold text-white shadow-[0_18px_40px_rgba(215,0,0,0.4)] hover:bg-[#c00000]"
            >
              <Link href="/waitlist">Start Free Trial</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-[12px] border-2 border-white/60 bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Trusted by the best teams in every role.</h3>
              <p className="text-sm text-white/60">
                When you&apos;re closing deals, building teams, and advising execs—OrgAtlas gives you the edge.
              </p>
            </div>
            <dl className="grid gap-6 text-sm text-white/70 sm:grid-cols-3">
              <div>
                <dt className="uppercase tracking-[0.25em] text-xs text-white/50">Org charts curated</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">25,000+</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.25em] text-xs text-white/50">Professionals verified</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">1,200,000+</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.25em] text-xs text-white/50">Contributors</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">100,000+</dd>
              </div>
            </dl>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-white/60">
            {trustedLogos.map((logo) => (
              <span key={logo} className="rounded-full border border-white/15 px-5 py-2">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-semibold tracking-tight text-white">
              OrgAtlas
            </Link>
            <p className="text-sm text-white/60">
              The org intelligence platform for SDRs, recruiters, analysts, and researchers. Stop guessing who matters in every account.
            </p>
          </div>
          <nav className="space-y-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Product</p>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link className="text-white/70 transition hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="space-y-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Company</p>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link className="text-white/70 transition hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="space-y-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Stay Updated</p>
            <ul className="space-y-2">
              {stayUpdated.map((link) => (
                <li key={link.href}>
                  <Link className="text-white/70 transition hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OrgAtlas. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="transition hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white/80">
              Terms of Service
            </Link>
            <Link href="/security" className="transition hover:text-white/80">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
