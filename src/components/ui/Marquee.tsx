"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
  reverse?: boolean;
  color?: string;
}

export function Marquee({ items, speed = 40, className, reverse = false, color = "#00d4ff" }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={cn("overflow-hidden relative", className)}>
      {/* Edge fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #080808, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #080808, transparent)" }}
      />

      <div
        className={reverse ? "animate-marquee-reverse" : "animate-marquee"}
        style={
          {
            display: "flex",
            alignItems: "center",
            gap: "24px",
            width: "max-content",
            "--marquee-duration": `${speed}s`,
          } as React.CSSProperties
        }
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium whitespace-nowrap flex-shrink-0"
            style={{
              borderColor: `${color}25`,
              color: `${color}80`,
              background: `${color}08`,
            }}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: color, opacity: 0.5 }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
