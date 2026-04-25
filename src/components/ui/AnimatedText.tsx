"use client";

import { motion, type Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  by?: "word" | "char";
  once?: boolean;
}

const CHAR_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay: i * 0.025,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const WORD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      delay: i * 0.07,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function AnimatedText({
  text,
  className,
  delay = 0,
  by = "char",
  once = true,
}: AnimatedTextProps) {
  if (by === "word") {
    const words = text.split(" ");
    return (
      <span className={className} aria-label={text}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              custom={i + delay / 0.07}
              variants={WORD_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once }}
              className="inline-block"
            >
              {word}
            </motion.span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </span>
    );
  }

  const chars = text.split("");
  return (
    <span className={className} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          custom={i + delay / 0.025}
          variants={CHAR_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once }}
          className="inline-block"
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}
