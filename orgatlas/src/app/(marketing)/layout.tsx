import { MarketingNavBar } from "@/components/site/MarketingNavBar";
import { MarketingFooter } from "@/components/site/MarketingFooter";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <MarketingNavBar />
      <main>{children}</main>
      <MarketingFooter />
    </div>
  );
}
