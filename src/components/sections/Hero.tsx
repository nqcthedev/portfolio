"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  Activity,
  ArrowDown,
  BrainCircuit,
  CircuitBoard,
  Download,
  ExternalLink,
  Fingerprint,
  Gauge,
  Mail,
  Radio,
  Satellite,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { FutureCanvas } from "@/components/ui/FutureCanvas";
import { PortfolioModeSwitch } from "@/components/ui/PortfolioModeSwitch";
import { EASE } from "@/lib/utils";

const ROLES = [
  "Fullstack JavaScript Developer",
  "React / Next.js Developer",
  "Frontend Engineer with Node.js",
  "Product-minded Web Developer",
];

const SOCIAL = [
  { icon: GithubIcon, href: "https://github.com/nqcthedev", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/nqcthedev", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nqcthedev@gmail.com", label: "Email" },
];

const TELEMETRY = [
  { label: "Frontend", value: "React / Next", icon: Gauge, color: "#00d4ff" },
  { label: "Backend", value: "Node / Mongo", icon: Radio, color: "#10b981" },
  { label: "Product signal", value: "1.8M subs", icon: BrainCircuit, color: "#f59e0b" },
];

const STACK_MODULES = [
  { label: "Frontend", value: "React, Next.js, TypeScript", color: "#00d4ff" },
  { label: "State / API", value: "Redux Toolkit, RTK Query, REST", color: "#10b981" },
  { label: "Backend", value: "Node.js, Express.js, MongoDB", color: "#f59e0b" },
  { label: "Specialized", value: "Web3.js, Ethers.js, Socket.io", color: "#ec4899" },
];

const PROTOCOLS = ["Ship", "Measure", "Automate", "Scale"];

const MEMORY_STREAM = [
  "React / Next.js",
  "Node / MongoDB",
  "Web3 / Socket.io",
  "Firebase / Vercel",
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const current = texts[index % texts.length];
    const speed = isDeleting ? 30 : isPaused ? 2000 : 60;
    const timeout = setTimeout(() => {
      if (isPaused) { setIsPaused(false); setIsDeleting(true); return; }
      if (isDeleting) {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText.length === 0) { setIsDeleting(false); setIndex((p) => (p + 1) % texts.length); }
      } else {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length === current.length) setIsPaused(true);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, index, isDeleting, isPaused, texts]);

  return (
    <span>
      {displayText}
      <span
        className="inline-block w-0.5 h-5 ml-0.5 align-middle bg-[#00d4ff]"
        style={{ animation: "blink 1s step-end infinite" }}
      />
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="future-shell relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ overflow: "clip" }}
    >
      <div className="future-horizon" />
      <FutureCanvas />
      <div className="chrono-rail chrono-rail-left hidden xl:block" />
      <div className="chrono-rail chrono-rail-right hidden xl:block" />

      <div className="absolute inset-x-6 top-24 z-10 hidden items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-white/25 md:flex">
        <span className="flex items-center gap-2">
          <Satellite size={13} className="text-[#00d4ff]/70" />
          Saigon uplink
        </span>
        <span className="flex items-center gap-2">
          <ScanLine size={13} className="text-[#10b981]/70" />
          NQC stack // React + Next.js
        </span>
        <span className="flex items-center gap-2">
          <Activity size={13} className="text-[#f59e0b]/70" />
          Signal stable
        </span>
      </div>

      {/* Parallax content wrapper */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-24 sm:px-6 sm:pb-24 sm:pt-32"
        >
        <motion.div
	          variants={containerVariants}
	          initial="hidden"
	          animate="visible"
	          className="grid min-w-0 items-center gap-5 lg:grid-cols-[0.82fr_1.65fr_0.9fr]"
	        >
          <motion.aside
            variants={itemVariants}
            className="future-panel corner-lock hidden rounded-lg p-5 lg:block"
          >
            <div className="relative z-10">
              <div className="mb-7 flex items-center justify-between">
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/35">
                  <CircuitBoard size={13} className="text-[#00d4ff]/70" />
                  Tech profile
                </span>
                <span className="signal-chip rounded-full px-2 py-1 font-mono text-[10px] text-[#10b981]">
                  LIVE
                </span>
              </div>

              <div className="data-portrait mb-5">
                <div className="data-portrait-core">
                  <Fingerprint size={36} className="text-[#00d4ff]/80" />
                </div>
                <div className="data-portrait-grid">
                  {[30, 54, 40, 78, 62, 92, 46, 70, 36, 84].map((height, i) => (
                    <span
                      key={`${height}-${i}`}
                      className="bg-[#00d4ff]/70"
                      style={{ height }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {STACK_MODULES.map((item) => (
                  <div key={item.label} className="metric-cell rounded-lg p-3">
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-widest" style={{ color: item.color }}>
                      {item.label}
                    </div>
                    <div className="text-xs font-medium leading-relaxed text-white/62">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>

	          <div className="relative min-w-0 text-center">
            <motion.div variants={itemVariants} className="mb-5 sm:mb-7">
              <span className="signal-chip inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-[#10b981]">
                <ShieldCheck size={13} />
                Open to React / Next.js fullstack roles
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="identity-core mb-5 sm:mb-6">
              <div className="chrono-ring" />
              <div className="chrono-ring chrono-ring-secondary" />
              <div className="relative z-10">
	                <p className="mx-auto mb-3 max-w-full px-1 font-mono text-[10px] uppercase leading-relaxed tracking-[0.28em] text-[#00d4ff]/70 sm:mb-4 sm:text-xs">
	                  React / Next.js · TypeScript · Node.js · MongoDB
	                </p>
	                <h1 className="text-5xl font-black leading-none sm:text-7xl lg:text-7xl xl:text-8xl">
	                  <span className="block max-w-full whitespace-nowrap text-white/90">
	                    <AnimatedText text="Nguyen" by="char" delay={0} />
	                  </span>
	                  <span className="block max-w-full whitespace-nowrap quantum-text">
	                    <AnimatedText text="Quoc Cuong" by="char" delay={0.2} />
	                  </span>
                </h1>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-5 flex h-8 items-center justify-center sm:mb-7">
              <p className="text-lg font-medium text-white/50 sm:text-xl">
                <TypewriterText texts={ROLES} />
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-white/50"
            >
              Fullstack JavaScript Developer shipping production web apps with{" "}
              <span className="text-white/78">React, Next.js, TypeScript</span>,{" "}
              <span className="text-white/78">Node.js, Express, MongoDB</span>, plus Web3
              and real-time interfaces. Also built YouTube channels from zero to{" "}
              <span className="font-semibold text-[#f59e0b]">1.8M subscribers</span>,
              bringing real product analytics back into frontend work.
            </motion.p>

	            <motion.div
	              variants={itemVariants}
	              className="mx-auto mb-6 flex max-w-sm flex-wrap items-center justify-center gap-3 sm:mb-9 sm:max-w-none"
	            >
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
	                className="group flex w-40 items-center justify-center gap-2 rounded-lg bg-[#00d4ff] px-6 py-3 text-sm font-bold text-[#03060a] glow-cyan transition-all duration-200 hover:bg-[#10b981] sm:w-auto"
                data-mode-match="builder"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Work
                <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
	                className="future-panel flex w-40 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white/75 transition-all duration-200 hover:text-white sm:w-auto"
                data-mode-match="recruiter"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={14} />
                Contact
              </motion.a>
              <motion.a
                href="/cv-nguyen-quoc-cuong.pdf"
                download
	                className="flex w-28 items-center justify-center gap-2 rounded-lg border border-white/[0.08] px-5 py-3 text-sm font-medium text-white/45 transition-all duration-200 hover:border-[#f59e0b]/40 hover:text-white/75 sm:w-auto"
                data-mode-match="recruiter"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={13} />
                CV
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="mx-auto mb-6 max-w-2xl sm:mb-8">
              <PortfolioModeSwitch />
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6 flex items-center justify-center gap-4 sm:mb-10">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="future-panel flex h-10 w-10 items-center justify-center rounded-lg text-white/45 transition-all duration-200 hover:text-white"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mx-auto hidden max-w-2xl grid-cols-4 gap-2 sm:grid">
              {PROTOCOLS.map((protocol, index) => (
                <span
                  key={protocol}
                  className="metric-cell rounded-lg px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-white/45"
                >
                  <span className="mr-2 text-white/20">0{index + 1}</span>
                  {protocol}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mx-auto mt-3 hidden max-w-2xl items-center justify-center gap-2 lg:flex"
            >
              {MEMORY_STREAM.map((item) => (
                <span
                  key={item}
                  className="future-memory-node rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/32"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.aside
            variants={itemVariants}
            className="future-panel corner-lock hidden rounded-lg p-5 lg:block"
          >
            <div className="relative z-10">
              <div className="mb-5 flex items-center gap-2">
                <Sparkles size={14} className="text-[#f59e0b]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/35">
                  Live telemetry
                </span>
              </div>
              <div className="space-y-3">
                {TELEMETRY.map(({ label, value, icon: Icon, color }) => (
                  <div key={label} className="metric-cell rounded-lg p-3">
                    <div className="mb-3 flex items-center justify-between">
                      <Icon size={14} style={{ color }} />
                      <span className="font-mono text-[10px] text-white/25">SYNC</span>
                    </div>
                    <div className="text-2xl font-black tabular-nums" style={{ color }}>
                      {value}
                    </div>
                    <div className="mt-1 text-xs text-white/40">{label}</div>
                  </div>
                ))}
              </div>
              <div className="terminal-feed mt-4 rounded-lg p-4 font-mono text-[11px] leading-relaxed">
                <p><span className="text-[#00d4ff]">ui</span><span className="text-white/35">:</span> React + Next.js</p>
                <p><span className="text-[#10b981]">api</span><span className="text-white/35">:</span> RTK Query + REST</p>
                <p><span className="text-[#f59e0b]">data</span><span className="text-white/35">:</span> Node.js + MongoDB</p>
                <p><span className="text-[#ec4899]">extra</span><span className="text-white/35">:</span> Web3 + SEO</p>
              </div>
              <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/28">
                <Terminal size={13} className="text-[#10b981]/70" />
                System ready for handoff
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/20 tracking-widest uppercase font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
