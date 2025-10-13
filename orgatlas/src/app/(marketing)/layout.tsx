import { MarketingNavBar } from "@/components/site/MarketingNavBar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <MarketingNavBar />
      <main>{children}</main>
    </div>
  );
}
