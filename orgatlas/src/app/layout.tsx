import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import { NavBar } from "@/components/site/NavBar";

const mono = IBM_Plex_Mono({
  variable: "--font-app-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
      <body className={`${mono.variable} antialiased`}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
