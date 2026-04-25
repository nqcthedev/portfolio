"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Code2, Users, Eye, Video, Zap, MapPin } from "lucide-react";
import { STATS } from "@/lib/data";
import { EASE } from "@/lib/utils";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
    >
      <SpotlightCard
        spotlightColor={`${color}10`}
        className="p-5 rounded-2xl border border-white/[0.06] bg-[#111111] hover:border-white/[0.12] transition-all duration-300"
      >
        <div
          className="flex items-center justify-center w-10 h-10 rounded-xl mb-4"
          style={{ background: `${color}15`, color }}
        >
          <Icon size={18} />
        </div>
        <div className="text-3xl font-black mb-1 tabular-nums" style={{ color }}>
          <NumberCounter value={value} />
        </div>
        <div className="text-xs text-white/40 font-medium">{label}</div>
      </SpotlightCard>
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
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
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

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text */}
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-black tracking-tight mb-6 leading-tight"
              >
                Engineering{" "}
                <span className="gradient-cyan">products</span>
                {" "}people actually{" "}
                <span className="gradient-text">use.</span>
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

              {/* Tags */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-2 mt-8"
              >
                {[
                  "🇻🇳 Ho Chi Minh City",
                  "⚡ Open to Remote",
                  "🎓 BETU — IT Graduate",
                  "🤖 AI-Native Dev",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Location + availability */}
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
            </div>

            {/* Stats grid */}
            <div>
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-3"
              >
                {STATS.map((stat, i) => (
                  <StatCard key={stat.label} {...stat} index={i} />
                ))}
              </motion.div>

              {/* Extra highlight */}
              <motion.div
                variants={itemVariants}
                className="mt-3 p-5 rounded-2xl border border-[#f59e0b]/20 bg-[#f59e0b]/[0.03]"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
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
