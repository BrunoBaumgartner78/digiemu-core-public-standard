// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "../src/components/site/Header";
import { Footer } from "../src/components/site/Footer";
import { EasterEggProvider } from "../src/components/site/EasterEggProvider";
import { ConsoleWatermark } from "../src/components/site/ConsoleWatermark"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DigiEmu Core — Public Standard",
    template: "%s — DigiEmu Core Public Standard",
  },
  description:
    "Deterministic knowledge infrastructure with snapshot-verifiable state reconstruction and audit evidence.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "DigiEmu Core",
    title: "DigiEmu Core — Deterministic Knowledge Infrastructure",
    description: "Snapshot-verifiable state reconstruction and deterministic replay for audit and governance.",
    images: [{ url: "/og-core.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiEmu Core",
    description: "Deterministic knowledge infrastructure for reproducible verification.",
    images: ["/og-core.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d10" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: "DigiEmu Core",
    description: "Deterministic knowledge infrastructure for reproducible verification and governance.",
    codeRepository: "https://github.com/BrunoBaumgartner78/digiemu-core",
    programmingLanguage: "Go",
    license: "BSL 1.1",
  };

  return (
    <html lang="en">
      <head>
        {/* JSON-LD must be inside <head> */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: "var(--bg)", color: "var(--fg)" }}
      >
        <EasterEggProvider>
          <Header />
          <div className="min-h-[calc(100vh-56px)]">{children}</div>
          <Footer />
          <ConsoleWatermark />
        </EasterEggProvider>
      </body>
    </html>
  );
}