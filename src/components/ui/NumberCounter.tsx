"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface NumberCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

function parseValue(val: string): { num: number; prefix: string; suffix: string } {
  const match = val.match(/^([^0-9]*)([0-9.,]+)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: val };
  return {
    prefix: match[1],
    num: parseFloat(match[2].replace(",", ".")),
    suffix: match[3],
  };
}

export function NumberCounter({ value, className, duration = 1.8 }: NumberCounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("0");
  const { num, prefix, suffix } = parseValue(value);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = (now - start) / (duration * 1000);
      const progress = Math.min(elapsed, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num * eased;

      if (Number.isInteger(num)) {
        setDisplayed(Math.round(current).toString());
      } else {
        setDisplayed(current.toFixed(1));
      }

      if (progress < 1) requestAnimationFrame(step);
      else setDisplayed(value.replace(/^[^0-9]*/, "").replace(/[^0-9.,]*$/, ""));
    };
    requestAnimationFrame(step);
  }, [inView, num, duration, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayed}
      {suffix}
    </span>
  );
}
