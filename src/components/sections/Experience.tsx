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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: EASE,
      }}
      className="mission-card-wrap group relative"
      style={{ ["--accent" as string]: exp.color, ["--mission-index" as string]: index }}
    >
      <div className="mission-card future-panel corner-lock relative rounded-lg p-6 transition-all duration-300 hover:border-[#00d4ff]/25" data-mode-match="builder recruiter">
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(ellipse at top left, ${exp.color}06 0%, transparent 60%)`,
          }}
        />

        <div className="mission-index font-mono text-[10px] uppercase tracking-widest" style={{ color: exp.color }}>
          Mission 0{index + 1}
        </div>

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
    <section id="experience" className="future-section relative py-28">
      <div className="mx-auto max-w-7xl px-6">
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
              className="text-3xl font-black sm:text-4xl"
            >
              Build{" "}
              <span className="quantum-text">Timeline</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="signal-chip rounded-full px-3 py-1 text-sm text-white/45"
            >
              Dec 2021 – Sep 2024
            </motion.p>
          </div>
        </div>

        <div className="mission-track relative">
          <div className="mission-track-line" />

          <div className="mission-grid">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mission-card-wrap mission-card-wrap-wide relative mt-4"
          >
            <div className="mission-card future-panel rounded-lg border-[#6366f1]/15 p-5" data-mode-match="builder creator">
              <div className="mission-index font-mono text-[10px] uppercase tracking-widest text-[#6366f1]">
                Side orbit
              </div>
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
                Next.js 14 + Node.js + MongoDB · 10k+ monthly visitors · 10 Google page-1 keywords · organic traffic improvement
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
