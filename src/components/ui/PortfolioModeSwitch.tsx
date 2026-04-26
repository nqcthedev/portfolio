"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Clapperboard,
  Code2,
  type LucideIcon,
} from "lucide-react";

type PortfolioMode = "recruiter" | "builder" | "creator";

type ModeConfig = {
  id: PortfolioMode;
  label: string;
  icon: LucideIcon;
  accent: string;
  title: string;
  description: string;
  proof: string;
  signals: string[];
  route: { label: string; href: string }[];
};

const MODES: ModeConfig[] = [
  {
    id: "recruiter",
    label: "Recruiter",
    icon: BriefcaseBusiness,
    accent: "#00d4ff",
    title: "Hiring signal first",
    description:
      "Fast scan for role fit: stack evidence, production timeline, CV, and direct contact.",
    proof: "React / Next.js fullstack fit",
    signals: ["CV ready", "3+ years", "React / Next", "Node / Mongo"],
    route: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    id: "builder",
    label: "Builder",
    icon: Code2,
    accent: "#10b981",
    title: "Build proof mode",
    description:
      "Brings projects, production experience, and AI-assisted engineering workflow forward.",
    proof: "Full-stack systems + vibe coding tools",
    signals: ["Projects", "App Router", "RTK Query", "AI pair loop"],
    route: [
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
    ],
  },
  {
    id: "creator",
    label: "Creator",
    icon: Clapperboard,
    accent: "#f59e0b",
    title: "Product signal mode",
    description:
      "Frames creator scale as product judgment: retention, SEO, analytics, and operating cadence.",
    proof: "1.8M+ subscribers / 1.65B+ views",
    signals: ["YouTube ops", "SEO", "Retention", "A/B loops"],
    route: [
      { label: "YouTube", href: "#youtube" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function PortfolioModeSwitch() {
  const [mode, setMode] = useState<PortfolioMode>("recruiter");

  useEffect(() => {
    document.documentElement.dataset.portfolioMode = mode;
    window.localStorage.setItem("portfolio-mode", mode);

    return () => {
      delete document.documentElement.dataset.portfolioMode;
    };
  }, [mode]);

  const current = MODES.find((item) => item.id === mode) ?? MODES[0];
  const CurrentIcon = current.icon;

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="mode-switch-console future-panel corner-lock rounded-lg p-3 text-left sm:p-4"
      style={{ ["--mode-accent" as string]: current.accent }}
    >
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/35">
          <Bot size={13} className="text-[#00d4ff]/80" />
          Portfolio mode
        </div>

        <div className="mode-tab-grid flex-1" role="tablist" aria-label="Portfolio viewing mode">
          {MODES.map((item) => {
            const Icon = item.icon;
            const active = item.id === mode;

            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setMode(item.id)}
                className="mode-tab-button rounded-md px-3 py-2 text-xs font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  ["--mode-tab-accent" as string]: item.accent,
                }}
                data-active={active ? "true" : "false"}
              >
                <Icon size={14} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-2">
            <CurrentIcon size={15} style={{ color: current.accent }} />
            <p className="text-sm font-black text-white/85">{current.title}</p>
          </div>
          <p className="text-xs leading-relaxed text-white/46">{current.description}</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest" style={{ color: current.accent }}>
            {current.proof}
          </p>
        </div>

        <div className="space-y-2 md:max-w-[18rem]">
          <div className="flex flex-wrap gap-1.5">
            {current.signals.map((signal) => (
              <span key={signal} className="mode-signal-chip rounded border px-2 py-1 font-mono text-[10px] uppercase tracking-widest">
                {signal}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {current.route.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollTo(item.href)}
                className="mode-route-button inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] font-semibold transition-all duration-200 hover:translate-x-0.5"
              >
                {item.label}
                <ArrowRight size={11} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
