import Link from "next/link";

const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Security", href: "#" },
  { label: "Status", href: "#" },
];

export function MarketingFooter() {
  return (
    <footer className="border-t bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>&copy; {new Date().getFullYear()} OrgAtlas. All rights reserved.</p>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {footerLinks.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
