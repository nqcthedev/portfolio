"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Award, Code2, Users, Eye, Video, Zap, MapPin, BrainCircuit } from "lucide-react";
import { STATS } from "@/lib/data";
import { EASE } from "@/lib/utils";
import { NumberCounter } from "@/components/ui/NumberCounter";

const STAT_ICONS = {
  code: Code2,
  users: Users,
  eye: Eye,
  video: Video,
};

function StatCard({
  label,
  value,
  icon,
  index,
}: {
  label: string;
  value: string;
  icon: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const Icon = STAT_ICONS[icon as keyof typeof STAT_ICONS] ?? Code2;

  const colors = ["#00d4ff", "#f59e0b", "#9333ea", "#10b981"];
  const color = colors[index % colors.length];
  const modeMatch = label === "Years Experience" ? "recruiter" : "creator recruiter";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
    >
      <div
        className="future-stat-module corner-lock rounded-lg p-5 transition-all duration-300 hover:border-[#00d4ff]/25"
        style={{ ["--accent" as string]: color }}
        data-mode-match={modeMatch}
      >
        <div
          className="mb-4 flex h-10 w-10 items-center justify-center rounded-md"
          style={{ background: `${color}15`, color }}
        >
          <Icon size={18} />
        </div>
        <div className="text-3xl font-black mb-1 tabular-nums" style={{ color }}>
          <NumberCounter value={value} />
        </div>
        <div className="text-xs text-white/40 font-medium">{label}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <section id="about" className="future-section relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <span className="section-label">About</span>
            <span className="h-px flex-1 max-w-[40px] bg-[#00d4ff]/40" />
          </motion.div>

          <div className="identity-lab">
            <motion.div variants={itemVariants} className="identity-manifesto future-panel corner-lock rounded-lg p-6 sm:p-8" data-mode-match="recruiter creator">
              <div className="mb-5 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/30">
                <BrainCircuit size={14} className="text-[#00d4ff]" />
                <span>Developer profile</span>
                <span className="text-white/12">/</span>
                <span>Real stack evidence</span>
              </div>

              <motion.h2
                variants={itemVariants}
                className="mb-6 text-3xl font-black leading-tight sm:text-4xl"
              >
                Human-grade{" "}
                <span className="quantum-text">systems with real product signal.</span>
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="space-y-4 text-white/50 text-base leading-relaxed"
              >
                <p>
                  I&apos;m a{" "}
                  <span className="text-white/80">Fullstack JavaScript Developer</span>{" "}
                  with 3 years shipping production web apps — from blockchain P2P
                  exchanges to real-estate platforms and B2B SaaS. I specialize in
                  the{" "}
                  <span className="text-white/80">React / Next.js ecosystem</span>{" "}
                  with Node.js backends.
                </p>
                <p>
                  Over the past 16 months, I stepped back from engineering to build
                  and operate{" "}
                  <span className="text-white/80">3 independent YouTube channels</span>{" "}
                  from zero — reaching a combined{" "}
                  <span className="text-[#f59e0b]/90 font-semibold">1.8M+ subscribers</span>{" "}
                  and{" "}
                  <span className="text-[#9333ea]/90 font-semibold">1.65B+ lifetime views</span>.
                  One channel earned the Gold Play Button.
                </p>
                <p>
                  Now returning to full-time engineering with both strong technical
                  fundamentals and rare{" "}
                  <span className="text-white/80">product intuition</span> — audience
                  analytics, A/B-tested iteration, and data-driven decision making at
                  scale.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-2 mt-8"
              >
	                {[
	                  "HCMC / Vietnam",
	                  "Remote-ready",
	                  "BETU / IT Graduate",
	                  "AI-native workflow",
	                  "English docs / code review",
	                ].map((tag) => (
                  <span
                    key={tag}
                    className="signal-chip rounded-lg px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-widest text-white/55"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 mt-6 text-sm text-white/30"
              >
                <MapPin size={13} />
                <span>Vietnam</span>
                <span className="mx-2 opacity-40">·</span>
                <Zap size={13} className="text-[#10b981]" />
                <span className="text-[#10b981]">Available Now</span>
              </motion.div>
            </motion.div>

            <div className="identity-signal-board">
              <motion.div variants={itemVariants} className="tech-dossier future-panel corner-lock rounded-lg p-5" data-mode-match="recruiter builder">
                <div className="relative z-10">
                  <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[#00d4ff]/70">
                    Stack used in shipped work
                  </p>
                  <div className="space-y-3">
                    {[
	                      ["Frontend", "React, Next.js, TypeScript, Tailwind CSS"],
	                      ["State & data", "Redux Toolkit, RTK Query, React Hook Form"],
	                      ["Backend", "Node.js, Express.js, MongoDB, JWT auth"],
	                      ["Specialized", "Web3.js, Ethers.js, Socket.io, wallet auth, SEO"],
                    ].map(([label, value]) => (
                      <div key={label} className="metric-cell rounded-lg p-3">
                        <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-white/30">
                          {label}
                        </div>
                        <div className="text-sm font-medium leading-relaxed text-white/65">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg border border-[#f59e0b]/20 bg-[#f59e0b]/[0.04] p-3 text-xs leading-relaxed text-white/42">
                    Product edge: YouTube analytics, retention loops, SEO publishing,
                    and high-volume content operations.
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="stat-evidence-grid"
              >
                {STATS.map((stat, i) => (
                  <StatCard key={stat.label} {...stat} index={i} />
                ))}
              </motion.div>

              {/* Extra highlight */}
              <motion.div
                variants={itemVariants}
                className="identity-highlight future-panel corner-lock rounded-lg border-[#f59e0b]/20 p-5"
                data-mode-match="creator recruiter"
              >
                <div className="flex items-start gap-3">
                  <span className="metric-cell flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#f59e0b]">
                    <Award size={18} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-[#f59e0b]/90 mb-1">
                      YouTube Gold Play Button
                    </div>
                    <div className="text-xs text-white/40 leading-relaxed">
                      1M subscribers milestone on wilderness cooking channel —
                      3,000+ videos published, 100 videos/week cadence for 24+
                      months
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
