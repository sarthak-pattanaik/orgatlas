import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import { NavBar } from "@/components/site/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
