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

export const metadata: Metadata = {
  title: "Nguyen Quoc Cuong — Fullstack JavaScript Developer",
  description:
    "Fullstack JavaScript Developer specializing in React / Next.js ecosystem. 3 years shipping production web apps. YouTube content creator with 1.8M+ subscribers.",
  keywords: [
    "Nguyen Quoc Cuong",
    "Fullstack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Nguyen Quoc Cuong", url: "https://github.com/nqcthedev" }],
  openGraph: {
    title: "Nguyen Quoc Cuong — Fullstack JavaScript Developer",
    description:
      "Fullstack JavaScript Developer | React / Next.js | 3 years production experience",
    type: "website",
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
