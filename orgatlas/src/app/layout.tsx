import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://orgatlas.vercel.app"),
  title: {
    default: "OrgAtlas",
    template: "%s · OrgAtlas",
  },
  description: "OrgAtlas helps go-to-market teams discover companies, people, and opportunities with confidence.",
  openGraph: {
    title: "OrgAtlas",
    description:
      "OrgAtlas helps go-to-market teams discover companies, people, and opportunities with confidence.",
    url: "https://orgatlas.vercel.app",
    siteName: "OrgAtlas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrgAtlas",
    description:
      "OrgAtlas helps go-to-market teams discover companies, people, and opportunities with confidence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
