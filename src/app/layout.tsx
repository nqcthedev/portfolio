import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
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
    default: "Nguyen Quoc Cuong — Full-Stack Developer (React / Next.js / TypeScript / Node.js)",
    template: "%s | Nguyen Quoc Cuong",
  },
  description:
    "Full-Stack Developer specializing in React, Next.js (App Router / Server Components), TypeScript, with Node.js / Express / MongoDB and AI engineering — streaming LLM UIs, OpenAI & Gemini integration. 3+ years production experience across blockchain, real-estate and B2B SaaS, currently freelancing in Ho Chi Minh City.",
  applicationName: "Nguyen Quoc Cuong Portfolio",
  keywords: [
    "Nguyen Quoc Cuong",
    "Full-Stack Developer",
    "Front-End Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Server Components",
    "TanStack Query",
    "Zustand",
    "Node.js",
    "MongoDB",
    "Vercel AI SDK",
    "AI Engineer",
    "AI Native Developer",
    "OpenAI Codex",
    "Claude Code",
    "Playwright",
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
    title: "Nguyen Quoc Cuong — Full-Stack Developer (React / Next.js / TypeScript / Node.js)",
    description:
      "Full-Stack Developer — React / Next.js / TypeScript with Node.js, plus AI engineering (streaming LLM UIs, OpenAI & Gemini). 3+ years production experience.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Nguyen Quoc Cuong Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Quoc Cuong — Full-Stack Developer (React / Next.js / TypeScript / Node.js)",
    description:
      "React / Next.js developer with production experience, AI engineering, and creator-scale product signal.",
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
