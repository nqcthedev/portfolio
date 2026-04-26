"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-[#00d4ff]/10 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs uppercase tracking-widest text-white/25">
            <span className="text-[#00d4ff]/70">nqc</span>
            <span className="text-white/20">/</span>
            <span className="text-[#10b981]/70">dev</span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-white/20 text-center"
          >
            Built with Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion
          </motion.p>

          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Nguyen Quoc Cuong
          </p>
        </div>
      </div>
    </footer>
  );
}
