"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { EASE } from "@/lib/utils";
import { Marquee } from "@/components/ui/Marquee";

type SkillCategoryKey = keyof typeof SKILLS;

const CATEGORIES: {
  key: SkillCategoryKey;
  title: string;
  emoji: string;
  color: string;
  colSpan?: string;
  rowSpan?: string;
}[] = [
  {
    key: "expert",
    title: "Expert",
    emoji: "EX",
    color: "#00d4ff",
    colSpan: "lg:col-span-2",
  },
  {
    key: "aiNative",
    title: "AI-Native Dev",
    emoji: "AI",
    color: "#9333ea",
  },
  {
    key: "proficient",
    title: "Proficient",
    emoji: "PR",
    color: "#10b981",
    colSpan: "lg:col-span-2",
  },
  {
    key: "devops",
    title: "DevOps & Cloud",
    emoji: "CL",
    color: "#f59e0b",
  },
  {
    key: "specialized",
    title: "Specialized",
    emoji: "SE",
    color: "#ec4899",
  },
  {
    key: "learning",
    title: "Learning Now",
    emoji: "LN",
    color: "#6366f1",
  },
];

const CATEGORY_MODE_MATCH: Record<SkillCategoryKey, string> = {
  expert: "recruiter builder",
  proficient: "recruiter builder",
  devops: "builder",
  specialized: "builder creator",
  aiNative: "builder",
  learning: "builder",
};

function SkillPill({
  skill,
  color,
  delay,
}: {
  skill: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="inline-flex cursor-default items-center rounded-md border px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:scale-105"
      style={{
        borderColor: `${color}30`,
        color: `${color}cc`,
        background: `${color}0a`,
      }}
    >
      {skill}
    </motion.span>
  );
}

function BentoCard({
  category,
  index,
}: {
  category: (typeof CATEGORIES)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const skills = SKILLS[category.key];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: EASE,
      }}
      className="capability-node future-panel corner-lock group relative rounded-lg p-5 transition-all duration-300 hover:border-[#00d4ff]/25"
      style={{ ["--accent" as string]: category.color, ["--node-index" as string]: index }}
      data-mode-match={CATEGORY_MODE_MATCH[category.key]}
    >
      {/* Glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at top left, ${category.color}08 0%, transparent 60%)`,
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className="metric-cell rounded px-1.5 py-0.5 font-mono text-[10px]"
          style={{ color: category.color }}
        >
          {category.emoji}
        </span>
        <span
          className="text-xs font-bold uppercase tracking-wider"
          style={{ color: category.color }}
        >
          {category.title}
        </span>
        <span className="ml-auto text-xs font-mono text-white/20">
          {skills.length}
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, i) => (
          <SkillPill
            key={skill}
            skill={skill}
            color={category.color}
            delay={index * 0.05 + i * 0.03}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="future-section relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="section-label">Skills</span>
            <span className="h-px flex-1 max-w-[40px] bg-[#00d4ff]/40" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-3xl font-black sm:text-4xl"
            >
              Capability{" "}
              <span className="quantum-text">Matrix</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sm text-white/30 max-w-xs"
            >
              3+ years production · daily AI pair programming
            </motion.p>
          </div>
        </motion.div>

        {/* Marquee row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8 space-y-2"
        >
          <Marquee
            items={[...SKILLS.expert, ...SKILLS.devops]}
            color="#00d4ff"
            speed={35}
          />
          <Marquee
            items={[...SKILLS.aiNative, ...SKILLS.specialized]}
            color="#9333ea"
            speed={28}
            reverse
          />
        </motion.div>

        <div className="capability-constellation">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="capability-core future-panel corner-lock rounded-lg p-6"
            data-mode-match="recruiter builder"
          >
            <div className="relative z-10">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[#00d4ff]/70">
                Stack evidence core
              </p>
              <h3 className="mb-4 text-2xl font-black text-white/90">
                Evidence-based stack, not score labels.
              </h3>
              <div className="space-y-2.5">
                {[
                  ["Frontend", "React, Next.js App Router, TypeScript", "#00d4ff"],
                  ["API layer", "Redux Toolkit, RTK Query, RESTful APIs", "#10b981"],
                  ["Backend", "Node.js, Express.js, MongoDB", "#f59e0b"],
                  ["Product ops", "SEO, Search Console, content analytics", "#ec4899"],
                ].map(([label, value, color]) => (
                  <div key={label} className="metric-cell rounded-lg p-3">
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-widest" style={{ color }}>
                      {label}
                    </div>
                    <div className="text-sm leading-relaxed text-white/58">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="capability-node-grid">
            {CATEGORIES.map((cat, i) => (
              <BentoCard key={cat.key} category={cat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
