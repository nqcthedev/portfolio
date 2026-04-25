"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { useState } from "react";
import { EASE } from "@/lib/utils";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "nqcthedev@gmail.com",
    href: "mailto:nqcthedev@gmail.com",
    color: "#00d4ff",
    copyable: true,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/nqcthedev",
    href: "https://github.com/nqcthedev",
    color: "#e2e8f0",
    copyable: false,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/nguyen-quoc-cuong",
    href: "https://linkedin.com/in/nguyen-quoc-cuong",
    color: "#0ea5e9",
    copyable: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+84 964 562 535",
    href: "tel:+84964562535",
    color: "#10b981",
    copyable: true,
  },
];

function ContactLink({
  item,
  index,
}: {
  item: (typeof LINKS)[number];
  index: number;
}) {
  const [copied, setCopied] = useState(false);
  const Icon = item.icon;

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(item.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: EASE,
      }}
      className="group flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-[#111111] hover:border-white/[0.12] transition-all duration-200"
    >
      <a
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="flex items-center gap-3 flex-1 min-w-0"
      >
        <div
          className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
          style={{ background: `${item.color}15`, color: item.color }}
        >
          <Icon size={16} />
        </div>
        <div className="min-w-0">
          <div className="text-xs font-medium text-white/30 mb-0.5">{item.label}</div>
          <div className="text-sm font-medium text-white/70 truncate group-hover:text-white/90 transition-colors">
            {item.value}
          </div>
        </div>
      </a>

      {item.copyable && (
        <motion.button
          onClick={handleCopy}
          className="ml-3 flex items-center justify-center w-8 h-8 rounded-lg text-white/25 hover:text-white/60 hover:bg-white/[0.04] transition-all cursor-pointer"
          whileTap={{ scale: 0.9 }}
        >
          {copied ? (
            <Check size={13} className="text-[#10b981]" />
          ) : (
            <Copy size={13} />
          )}
        </motion.button>
      )}
    </motion.div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="flex items-center gap-3 mb-4"
            >
              <span className="section-label">Contact</span>
              <span className="h-px flex-1 max-w-[40px] bg-[#00d4ff]/40" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-3xl sm:text-4xl font-black tracking-tight mb-4"
            >
              Let&apos;s Build{" "}
              <span className="gradient-cyan">Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-base leading-relaxed mb-10"
            >
              Currently open to full-time engineering roles and select freelance
              projects. If you have something worth building, I&apos;d love to hear
              about it.
            </motion.p>
          </div>

          {/* Links */}
          <div className="space-y-2.5 mb-8">
            {LINKS.map((item, i) => (
              <ContactLink key={item.label} item={item} index={i} />
            ))}
          </div>

          {/* Primary CTA */}
          <motion.a
            href="mailto:nqcthedev@gmail.com"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-[#00d4ff] text-[#080808] font-bold text-sm hover:bg-[#00d4ff]/90 transition-all glow-cyan"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={15} />
            Send me an email
          </motion.a>
        </div>
      </div>
    </section>
  );
}
