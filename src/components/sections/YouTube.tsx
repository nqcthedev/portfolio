"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, TrendingUp, Award } from "lucide-react";
import { YOUTUBE_CHANNELS } from "@/lib/data";
import { EASE } from "@/lib/utils";

const WORKFLOW_STEPS = [
  { step: "01", label: "Script Writing", desc: "Original scripts in Vietnamese optimized for TTS delivery" },
  { step: "02", label: "AI Voice", desc: "CapCut text-to-speech production + custom audio design" },
  { step: "03", label: "Video Editing", desc: "Adaptive editing over curated short-form source footage" },
  { step: "04", label: "SEO Publishing", desc: "Thumbnail A/B tests, title optimization, analytics review" },
];

function ChannelCard({
  channel,
  index,
}: {
  channel: (typeof YOUTUBE_CHANNELS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: EASE,
      }}
      className="channel-lane future-panel corner-lock group relative overflow-hidden rounded-lg p-5 transition-all duration-300 hover:border-[#f59e0b]/25"
      style={{ ["--accent" as string]: channel.color, ["--channel-index" as string]: index }}
      data-mode-match="creator"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top, ${channel.color}08 0%, transparent 60%)`,
        }}
      />

      <div className="flex items-center justify-between mb-4">
        <span
          className="metric-cell flex h-10 w-10 items-center justify-center rounded-lg"
          style={{ color: channel.color }}
        >
          <Award size={18} />
        </span>
        <span
          className="px-2 py-0.5 rounded-lg text-[10px] font-semibold border"
          style={{
            borderColor: `${channel.color}30`,
            color: channel.color,
            background: `${channel.color}10`,
          }}
        >
          {channel.award}
        </span>
      </div>

      <div
        className="text-3xl font-black mb-0.5 tabular-nums"
        style={{ color: channel.color }}
      >
        {channel.subscribers}
      </div>
      <div className="text-xs text-white/30 mb-3">subscribers</div>

      <div className="font-semibold text-white/70 text-sm mb-1">{channel.name}</div>
      <div className="font-mono text-xs text-white/30 mb-3">{channel.handle}</div>

      <div className="flex items-center gap-1.5 text-xs text-white/40">
        <Play size={11} fill="currentColor" />
        <span className="font-semibold text-white/60">{channel.views}</span>
        <span>lifetime views</span>
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
        <span
          className="block h-full rounded-full"
          style={{ width: `${92 - index * 15}%`, background: channel.color }}
        />
      </div>
    </motion.div>
  );
}

export default function YouTube() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="youtube" className="future-section relative overflow-hidden py-28">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, transparent, rgba(245,158,11,0.045), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <span className="section-label">Content Creation</span>
            <span className="h-px flex-1 max-w-[40px] bg-[#f59e0b]/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-4 text-3xl font-black sm:text-4xl"
          >
            Creator{" "}
            <span
              className="font-black"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Engine
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-base leading-relaxed max-w-2xl mb-10"
          >
            For 16 months, I stepped back from engineering to build 3 independent YouTube channels
            from scratch — operating as scriptwriter, editor, SEO strategist, and product owner
            simultaneously. The result: <span className="text-white/70">1.8M+ subscribers</span>,{" "}
            <span className="text-white/70">1.65B+ views</span>, one Gold Play Button, and
            product intuition you can&apos;t learn in a classroom.
          </motion.p>
        </div>

        <div className="creator-engine-grid">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="creator-core future-panel corner-lock rounded-lg p-6"
            data-mode-match="creator"
          >
            <div className="creator-reactor">
              <div className="creator-reactor-ring" />
              <div className="creator-reactor-ring creator-reactor-ring-two" />
              <div className="creator-reactor-core">
                <span>1.65B+</span>
                <small>views</small>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { icon: Award, label: "Play Buttons", value: "3", sub: "Gold + 2 Silver" },
                { icon: TrendingUp, label: "Retention", value: "High", sub: "avg duration" },
                { icon: Play, label: "Published", value: "3,000+", sub: "videos" },
                { icon: TrendingUp, label: "Cadence", value: "~100/wk", sub: "peak ops" },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="metric-cell rounded-lg p-4 text-center">
                  <Icon size={16} className="mx-auto mb-2 text-[#f59e0b]/60" />
                  <div className="text-xl font-black text-[#f59e0b]/90 mb-0.5">{value}</div>
                  <div className="text-[10px] font-semibold text-white/40">{label}</div>
                  <div className="text-[10px] text-white/25">{sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="channel-stack">
            {YOUTUBE_CHANNELS.map((channel, i) => (
              <ChannelCard key={channel.handle} channel={channel} index={i} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="workflow-strip mt-6"
        >
          {WORKFLOW_STEPS.map((w, i) => (
            <motion.div
              key={w.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="workflow-node future-panel rounded-lg p-4"
              data-mode-match="creator builder"
            >
              <span className="font-mono text-xs font-bold text-[#f59e0b]/50">
                {w.step}
              </span>
              <div className="mt-2 text-sm font-semibold text-white/70">{w.label}</div>
              <div className="mt-1 text-xs text-white/35 leading-relaxed">{w.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Insight callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="future-panel mt-6 rounded-lg border-[#f59e0b]/15 p-6"
          data-mode-match="creator recruiter"
        >
          <p className="text-sm text-white/55 leading-relaxed">
            <span className="text-[#f59e0b]/80 font-semibold">Returning to engineering</span>{" "}
            with rare product skills earned at scale: audience analytics, A/B-tested iteration,
            data-driven decision-making, and the ability to operate autonomously under performance
            pressure — all of which I bring directly to frontend and product work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
