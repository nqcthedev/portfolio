import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nguyen Quoc Cuong — Fullstack JavaScript Developer",
    template: "%s | Nguyen Quoc Cuong",
  },
  description:
    "Fullstack JavaScript Developer specializing in React, Next.js, TypeScript, Node.js, MongoDB, Web3, and AI-native engineering workflows. 3 years shipping production web apps plus 1.8M+ YouTube subscribers.",
  applicationName: "Nguyen Quoc Cuong Portfolio",
  keywords: [
    "Nguyen Quoc Cuong",
    "Fullstack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "AI Native Developer",
    "OpenAI Codex",
    "Claude Code",
    "Portfolio",
  ],
  authors: [{ name: "Nguyen Quoc Cuong", url: "https://github.com/nqcthedev" }],
  creator: "Nguyen Quoc Cuong",
  publisher: "Nguyen Quoc Cuong",
  category: "portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nguyen Quoc Cuong — Fullstack JavaScript Developer",
    description:
      "React / Next.js fullstack developer with Node.js, MongoDB, Web3, AI-native workflow, and proven product signal from 1.8M+ YouTube subscribers.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Nguyen Quoc Cuong Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Quoc Cuong — Fullstack JavaScript Developer",
    description:
      "React / Next.js fullstack developer with production experience, AI-native workflow, and creator-scale product signal.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
