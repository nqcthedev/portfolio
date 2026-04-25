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
    emoji: "⚡",
    color: "#00d4ff",
    colSpan: "lg:col-span-2",
  },
  {
    key: "aiNative",
    title: "AI-Native Dev",
    emoji: "🤖",
    color: "#9333ea",
  },
  {
    key: "proficient",
    title: "Proficient",
    emoji: "🛠",
    color: "#10b981",
    colSpan: "lg:col-span-2",
  },
  {
    key: "devops",
    title: "DevOps & Cloud",
    emoji: "☁️",
    color: "#f59e0b",
  },
  {
    key: "specialized",
    title: "Specialized",
    emoji: "🔑",
    color: "#ec4899",
  },
  {
    key: "learning",
    title: "Learning Now",
    emoji: "📚",
    color: "#6366f1",
  },
];

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
      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 hover:scale-105 cursor-default"
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
      className={[
        "group relative p-5 rounded-2xl border border-white/[0.06] bg-[#111111]",
        "hover:border-white/[0.12] transition-all duration-300 overflow-hidden",
        category.colSpan === "lg:col-span-2" ? "lg:col-span-2" : "",
      ].join(" ")}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at top left, ${category.color}08 0%, transparent 60%)`,
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-base">{category.emoji}</span>
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
    <section id="skills" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
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
              className="text-3xl sm:text-4xl font-black tracking-tight"
            >
              Technical{" "}
              <span className="gradient-cyan">Arsenal</span>
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

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CATEGORIES.map((cat, i) => (
            <BentoCard key={cat.key} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
