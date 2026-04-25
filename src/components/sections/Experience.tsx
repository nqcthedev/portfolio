"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { EXPERIENCES } from "@/lib/data";
import { EASE } from "@/lib/utils";

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof EXPERIENCES)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: EASE,
      }}
      className="group relative pl-8"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1 w-3 h-3 rounded-full border-2 border-[#1a1a1a] transition-all duration-300 group-hover:scale-125"
        style={{ background: exp.color }}
      />

      {/* Card */}
      <div className="relative p-6 rounded-2xl border border-white/[0.06] bg-[#111111] hover:border-white/[0.12] transition-all duration-300 overflow-hidden">
        {/* Glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(ellipse at top left, ${exp.color}06 0%, transparent 60%)`,
          }}
        />

        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-white/90 text-base">{exp.role}</h3>
              <span
                className="px-2 py-0.5 rounded-md text-[10px] font-semibold"
                style={{
                  background: `${exp.color}18`,
                  color: exp.color,
                }}
              >
                {exp.company}
              </span>
            </div>
            <p className="text-sm font-medium text-white/40">{exp.project}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1.5 text-xs text-white/30">
              <Calendar size={11} />
              <span className="font-mono">{exp.period}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/25">
              <MapPin size={11} />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-white/35 mb-4">{exp.description}</p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5">
          {exp.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/50">
              <span
                className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: exp.color }}
              />
              {item}
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {exp.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium border"
              style={{
                borderColor: `${exp.color}25`,
                color: `${exp.color}99`,
                background: `${exp.color}08`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <span className="section-label">Experience</span>
            <span className="h-px flex-1 max-w-[40px] bg-[#00d4ff]/40" />
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-3xl sm:text-4xl font-black tracking-tight"
            >
              Work{" "}
              <span className="gradient-cyan">History</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sm text-white/30"
            >
              Dec 2021 – Sep 2024
            </motion.p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-2 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/[0.04] to-transparent" />

          <div className="space-y-6">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>

          {/* Freelance card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="relative pl-8 mt-6"
          >
            <div className="absolute left-0 top-1 w-3 h-3 rounded-full border-2 border-[#1a1a1a] bg-[#6366f1]" />
            <div className="p-5 rounded-2xl border border-[#6366f1]/15 bg-[#111111]">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div>
                  <span className="text-xs font-bold text-[#6366f1]/80 uppercase tracking-wider">
                    Freelance
                  </span>
                  <h3 className="font-bold text-white/70 text-sm mt-0.5">
                    Entertainment Blog Platform
                  </h3>
                </div>
                <span className="font-mono text-xs text-white/25">Oct 2023 – Dec 2024</span>
              </div>
              <p className="text-xs text-white/35 mb-3">
                Next.js 14 + Node.js + MongoDB · 10k+ monthly visitors · 10 Google page-1 keywords · ~30% organic traffic improvement
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js 14", "Node.js", "MongoDB", "SEO", "Search Console"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-[10px] font-medium border border-[#6366f1]/20 text-[#6366f1]/70"
                    style={{ background: "rgba(99,102,241,0.06)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
