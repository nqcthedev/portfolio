"use client";

import { useEffect, useRef } from "react";

type SignalNode = {
  angle: number;
  radius: number;
  speed: number;
  depth: number;
  phase: number;
  size: number;
  color: string;
};

const COLORS = ["#00d4ff", "#10b981", "#f59e0b", "#ec4899"];
const GLYPHS = ["AI", "UX", "API", "RAG", "SEO", "YT"];

function seeded(seed: number) {
  const value = Math.sin(seed * 9301 + 49297) * 233280;
  return value - Math.floor(value);
}

function makeNodes(count: number, width: number): SignalNode[] {
  return Array.from({ length: count }, (_, index) => {
    const spread = width < 640 ? 0.78 : 1;

    return {
      angle: seeded(index + 1) * Math.PI * 2,
      radius: (90 + seeded(index + 11) * 470) * spread,
      speed: 0.00008 + seeded(index + 21) * 0.00016,
      depth: 0.28 + seeded(index + 31) * 0.95,
      phase: seeded(index + 41) * Math.PI * 2,
      size: 1 + seeded(index + 51) * 2.2,
      color: COLORS[index % COLORS.length],
    };
  });
}

export function FutureCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: SignalNode[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = makeNodes(width < 640 ? 48 : 92, width);
    };

    const drawPerspective = (time: number) => {
      const centerX = width * 0.5;
      const horizonY = height * 0.54;
      const bottomY = height + 80;

      ctx.save();
      ctx.lineWidth = 1;

      for (let i = -8; i <= 8; i += 1) {
        const endX = centerX + i * width * 0.12;
        const alpha = 0.018 + Math.max(0, 1 - Math.abs(i) / 8) * 0.028;
        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(centerX + Math.sin(time * 0.0004 + i) * 18, horizonY);
        ctx.lineTo(endX, bottomY);
        ctx.stroke();
      }

      for (let i = 0; i < 9; i += 1) {
        const y = horizonY + i * i * 8 + Math.sin(time * 0.001 + i) * 2;
        ctx.strokeStyle = `rgba(16, 185, 129, ${0.035 - i * 0.002})`;
        ctx.beginPath();
        ctx.moveTo(width * 0.08, y);
        ctx.lineTo(width * 0.92, y);
        ctx.stroke();
      }

      ctx.restore();
    };

    const projectNode = (node: SignalNode, time: number) => {
      const centerX = width * 0.5;
      const centerY = height * 0.44;
      const angle = node.angle + time * node.speed;
      const depthScale = 0.55 + node.depth * 0.6;
      const x = centerX + Math.cos(angle) * node.radius * depthScale;
      const y =
        centerY +
        Math.sin(angle * 1.28 + node.phase) * node.radius * 0.34 * depthScale +
        Math.sin(time * 0.001 + node.phase) * 16;

      return { x, y, depthScale };
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(0, 212, 255, 0.05)");
      gradient.addColorStop(0.5, "rgba(16, 185, 129, 0.025)");
      gradient.addColorStop(1, "rgba(245, 158, 11, 0.04)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      drawPerspective(time);

      const points = nodes.map((node) => ({ ...projectNode(node, time), node }));

      ctx.save();
      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          const limit = width < 640 ? 88 : 136;

          if (distance < limit) {
            const alpha = (1 - distance / limit) * 0.12;
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      for (const point of points) {
        const alpha = 0.18 + point.node.depth * 0.45;
        ctx.fillStyle = point.node.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.node.size * point.depthScale, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.save();
      ctx.font = "10px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const anchors =
        width < 640
          ? [
              [0.15, 0.22],
              [0.85, 0.34],
            ]
          : [
              [0.16, 0.24],
              [0.84, 0.27],
              [0.13, 0.47],
              [0.87, 0.48],
              [0.24, 0.68],
              [0.76, 0.66],
            ];

      anchors.forEach(([anchorX, anchorY], index) => {
        const glyph = GLYPHS[index % GLYPHS.length];
        const x = width * anchorX + Math.sin(time * 0.001 + index) * 14;
        const y = height * anchorY + Math.cos(time * 0.0012 + index) * 10;
        ctx.strokeStyle = "rgba(0, 212, 255, 0.16)";
        ctx.fillStyle = "rgba(3, 6, 10, 0.46)";
        ctx.beginPath();
        ctx.rect(x - 18, y - 10, 36, 20);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = index % 2 === 0 ? "rgba(0, 212, 255, 0.55)" : "rgba(245, 158, 11, 0.55)";
        ctx.fillText(glyph, x, y + 0.5);
      });
      ctx.restore();

      const scanY = ((time * 0.035) % (height + 160)) - 80;
      const scanGradient = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
      scanGradient.addColorStop(0, "rgba(0, 212, 255, 0)");
      scanGradient.addColorStop(0.5, "rgba(0, 212, 255, 0.09)");
      scanGradient.addColorStop(1, "rgba(0, 212, 255, 0)");
      ctx.fillStyle = scanGradient;
      ctx.fillRect(0, scanY - 40, width, 80);

      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    resize();
    draw(performance.now());

    window.addEventListener("resize", resize, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} data-future-canvas className="future-canvas" />;
}
