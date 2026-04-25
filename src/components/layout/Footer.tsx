"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-white/25">
            <span className="text-white/40">&lt;</span>
            <span className="text-[#00d4ff]/60">nqc</span>
            <span className="text-white/40">/&gt;</span>
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
