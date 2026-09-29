import type { ReactNode } from "react";

export function Terminal({ command, children }: { command: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-epic-border bg-epic-bg overflow-hidden">
      <div className="px-4 py-2 border-b border-epic-border">
        <span className="font-mono text-[12px] text-epic-text-muted">$ {command}</span>
      </div>
      <div className="p-4 font-mono text-[12.5px] leading-relaxed">{children}</div>
    </div>
  );
}
