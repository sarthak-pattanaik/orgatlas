import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";

export const metadata: Metadata = {
  title: {
    default: "OrgAtlas",
    template: "%s · OrgAtlas",
  },
  description: "Explore and share company org charts",
  metadataBase: new URL("https://orgatlas.vercel.app"),
  openGraph: {
    title: "OrgAtlas",
    description: "Explore and share company org charts",
    url: "https://orgatlas.vercel.app",
    siteName: "OrgAtlas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrgAtlas",
    description: "Explore and share company org charts",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
