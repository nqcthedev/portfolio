import { BrainCircuit, Gauge } from "lucide-react";

const SIGNALS = [
  { label: "Frontend", value: "React / Next", color: "#00d4ff" },
  { label: "Backend", value: "Node / Mongo", color: "#10b981" },
  { label: "Special", value: "Web3 / SEO", color: "#f59e0b" },
];

const AI_TOOL_FOCUS = [
  "Claude Code",
  "OpenAI Codex",
  "Antigravity IDE AI",
  "MCP Workflows",
];

export function FutureOSOverlay() {
  return (
    <div className="future-os-overlay" aria-hidden="true">
      <div className="future-corner future-corner-tl" />
      <div className="future-corner future-corner-tr" />
      <div className="future-corner future-corner-bl" />
      <div className="future-corner future-corner-br" />

      <aside className="future-ai-rail hidden 2xl:block">
        <div className="mb-5 flex items-center gap-2 text-[#00d4ff]">
          <BrainCircuit size={15} />
          <span>AI companion</span>
        </div>

        <div className="space-y-3">
          {SIGNALS.map((signal) => (
            <div key={signal.label} className="future-ai-row">
              <span>{signal.label}</span>
              <strong style={{ color: signal.color }}>{signal.value}</strong>
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-white/[0.06] pt-4">
          <div className="mb-2 flex items-center gap-2 text-white/35">
            <Gauge size={13} />
            <span>AI tooling focus</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {AI_TOOL_FOCUS.map((item) => (
              <span key={item} className="rounded border border-[#00d4ff]/20 px-2 py-1 text-[#00d4ff]/70">
                {item}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
