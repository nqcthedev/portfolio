"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { PROJECTS } from "@/lib/data";
import { EASE } from "@/lib/utils";

function FeaturedProject({ project }: { project: (typeof PROJECTS)[number] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE }}
      className="group relative rounded-2xl border border-white/[0.06] bg-[#111111] hover:border-white/[0.12] overflow-hidden transition-all duration-300"
    >
      {/* Color strip */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${project.color}06 0%, transparent 60%)`,
        }}
      />

      <div className="p-7 sm:p-8">
        {/* Featured badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Star size={12} style={{ color: project.color }} fill={project.color} />
            <span
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: project.color }}
            >
              Featured Project
            </span>
          </div>
          <div className="flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:border-white/20 transition-all"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <GithubIcon size={14} />
              </motion.a>
            )}
            {project.live && project.live !== "#" && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:border-white/20 transition-all"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={14} />
              </motion.a>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-black text-white/90 mb-2">{project.title}</h3>
            <p className="text-sm text-white/45 leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-medium border"
                  style={{
                    borderColor: `${project.color}25`,
                    color: `${project.color}99`,
                    background: `${project.color}08`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right - highlights */}
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">
              Highlights
            </p>
            <ul className="space-y-2.5">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/55">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: project.color }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MiniProject({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: EASE,
      }}
      className="group relative p-5 rounded-2xl border border-white/[0.06] bg-[#111111] hover:border-white/[0.12] overflow-hidden transition-all duration-300"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${project.color}06 0%, transparent 60%)`,
        }}
      />
      <h3 className="font-bold text-white/80 mb-2 text-sm">{project.title}</h3>
      <p className="text-xs text-white/40 leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-1">
        {project.stack.slice(0, 4).map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded text-[10px] font-medium"
            style={{ background: `${project.color}10`, color: `${project.color}80` }}
          >
            {t}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="px-2 py-0.5 text-[10px] text-white/25">
            +{project.stack.length - 4} more
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featured = PROJECTS.filter((p) => p.featured);
  const mini = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <span className="section-label">Projects</span>
            <span className="h-px flex-1 max-w-[40px] bg-[#00d4ff]/40" />
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-3xl sm:text-4xl font-black tracking-tight"
            >
              Selected{" "}
              <span className="gradient-cyan">Work</span>
            </motion.h2>
            <motion.a
              href="https://github.com/nqcthedev"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors"
              whileHover={{ x: 2 }}
            >
              <GithubIcon size={14} />
              View All on GitHub
              <ExternalLink size={11} />
            </motion.a>
          </div>
        </div>

        {/* Featured projects */}
        <div className="space-y-4 mb-4">
          {featured.map((p) => (
            <FeaturedProject key={p.title} project={p} />
          ))}
        </div>

        {/* Mini projects grid */}
        {mini.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-3">
            {mini.map((p, i) => (
              <MiniProject key={p.title} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
