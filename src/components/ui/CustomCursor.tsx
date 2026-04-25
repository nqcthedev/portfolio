"use client";

import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = document.createElement("div");
    const ring = document.createElement("div");

    Object.assign(dot.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      backgroundColor: "#00d4ff",
      boxShadow: "0 0 8px rgba(0,212,255,0.5)",
      opacity: "0",
      pointerEvents: "none",
      zIndex: "9999",
      transition: "width 0.15s ease, height 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease, opacity 0.2s ease",
      willChange: "transform",
    });

    Object.assign(ring.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      border: "1px solid rgba(0,212,255,0.25)",
      opacity: "0",
      pointerEvents: "none",
      zIndex: "9998",
      transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, opacity 0.2s ease",
      willChange: "transform",
    });

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = -200;
    let mouseY = -200;
    let ringX = -200;
    let ringY = -200;
    let rafId = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      ringX = lerp(ringX, mouseX, 0.1);
      ringY = lerp(ringY, mouseY, 0.1);
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      rafId = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onDown = () => {
      dot.style.transform += " scale(0.8)";
    };

    const onUp = () => {};

    const onHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const hovered = !!el.closest("a, button, [data-cursor-hover], input, textarea, label, [role='button']");

      dot.style.width = hovered ? "10px" : "6px";
      dot.style.height = hovered ? "10px" : "6px";
      dot.style.backgroundColor = hovered ? "#9333ea" : "#00d4ff";
      dot.style.boxShadow = hovered ? "0 0 12px rgba(147,51,234,0.6)" : "0 0 8px rgba(0,212,255,0.5)";
      ring.style.width = hovered ? "44px" : "32px";
      ring.style.height = hovered ? "44px" : "32px";
      ring.style.borderColor = hovered ? "rgba(147,51,234,0.45)" : "rgba(0,212,255,0.25)";
    };

    rafId = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousemove", onHover, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onHover);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
