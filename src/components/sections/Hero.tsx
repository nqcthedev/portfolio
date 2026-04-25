"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowDown, Mail, ExternalLink, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { EASE } from "@/lib/utils";

const ROLES = [
  "Fullstack JavaScript Developer",
  "React / Next.js Specialist",
  "Node.js Backend Engineer",
  "AI-Native Developer",
];

const SOCIAL = [
  { icon: GithubIcon, href: "https://github.com/nqcthedev", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/nguyen-quoc-cuong", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nqcthedev@gmail.com", label: "Email" },
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
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#080808]"
      style={{ overflow: "clip" }}
    >
      {/* Layer 1 — grid dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Layer 2 — aurora gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 60%, rgba(0,212,255,0.08) 0%, transparent 60%), " +
            "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(147,51,234,0.08) 0%, transparent 60%), " +
            "radial-gradient(ellipse 50% 60% at 60% 90%, rgba(16,185,129,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Layer 3 — radial vignette at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, #080808 100%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "float 7s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/3 right-[20%] w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(147,51,234,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "float 9s ease-in-out infinite reverse",
        }}
      />

      {/* Parallax content wrapper */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Available badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#10b981]/30 bg-[#10b981]/5 text-xs font-medium text-[#10b981] tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] blink" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name — character animation */}
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              <span className="block text-white/90">
                <AnimatedText text="Nguyen" by="char" delay={0} />
              </span>
              <span className="block gradient-text">
                <AnimatedText text="Quoc Cuong" by="char" delay={0.2} />
              </span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div variants={itemVariants} className="mb-8 h-8 flex items-center">
            <p className="text-lg sm:text-xl font-medium text-white/40">
              <TypewriterText texts={ROLES} />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl text-base text-white/40 leading-relaxed mb-10"
          >
            3 years shipping production web apps in{" "}
            <span className="text-white/70">blockchain</span>,{" "}
            <span className="text-white/70">real-estate</span> &{" "}
            <span className="text-white/70">B2B SaaS</span>. Previously built{" "}
            <span className="text-[#f59e0b]/80">3 YouTube channels</span> from zero to{" "}
            <span className="text-white/70 font-semibold">1.8M+ subscribers</span> combined.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00d4ff] text-[#080808] font-semibold text-sm hover:bg-[#00d4ff]/90 transition-all duration-200 glow-cyan"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
              <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/70 font-semibold text-sm hover:border-white/20 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/cv-nguyen-quoc-cuong.pdf"
              download
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/[0.07] text-white/40 font-medium text-sm hover:border-white/15 hover:text-white/60 hover:bg-white/[0.03] transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={13} />
              CV
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
            {SOCIAL.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/[0.08] text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>

          {/* Quick stat badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {[
              { label: "3+ Years Dev", color: "#00d4ff" },
              { label: "1.8M+ YT Subs", color: "#f59e0b" },
              { label: "1.65B+ Views", color: "#9333ea" },
              { label: "React / Next.js", color: "#10b981" },
            ].map((badge) => (
              <span
                key={badge.label}
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  borderColor: `${badge.color}30`,
                  color: badge.color,
                  background: `${badge.color}08`,
                }}
              >
                {badge.label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating terminal card */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none"
        style={{ animation: "float 6s ease-in-out infinite", animationDelay: "1.4s" }}
      >
        <div
          className="w-64 rounded-2xl border border-white/[0.07] overflow-hidden"
          style={{ background: "rgba(17,17,17,0.85)", backdropFilter: "blur(20px)" }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.05]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-[10px] font-mono text-white/20">nqc.config.ts</span>
          </div>
          {/* Code */}
          <div className="p-4 font-mono text-[11px] leading-relaxed">
            <p><span className="text-[#9333ea]">const</span> <span className="text-[#00d4ff]">dev</span> <span className="text-white/40">=</span> <span className="text-white/60">{"{"}</span></p>
            <p className="pl-3"><span className="text-[#10b981]">name</span><span className="text-white/40">:</span> <span className="text-[#f59e0b]">&quot;Quoc Cuong&quot;</span><span className="text-white/40">,</span></p>
            <p className="pl-3"><span className="text-[#10b981]">stack</span><span className="text-white/40">:</span> <span className="text-white/60">[</span></p>
            <p className="pl-6"><span className="text-[#f59e0b]">&quot;React&quot;</span><span className="text-white/40">,</span> <span className="text-[#f59e0b]">&quot;Next.js&quot;</span><span className="text-white/40">,</span></p>
            <p className="pl-6"><span className="text-[#f59e0b]">&quot;TypeScript&quot;</span><span className="text-white/40">,</span></p>
            <p className="pl-3"><span className="text-white/60">]</span><span className="text-white/40">,</span></p>
            <p className="pl-3"><span className="text-[#10b981]">exp</span><span className="text-white/40">:</span> <span className="text-[#9333ea]">3</span><span className="text-white/40">,</span></p>
            <p className="pl-3"><span className="text-[#10b981]">open</span><span className="text-white/40">:</span> <span className="text-[#9333ea]">true</span></p>
            <p><span className="text-white/60">{"}"}</span></p>
          </div>
        </div>
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
