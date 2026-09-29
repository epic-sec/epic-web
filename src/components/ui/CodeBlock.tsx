import { CopyButton } from "@/components/ui/CopyButton";

interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
}

export function CodeBlock({ code, filename, language = "bash" }: CodeBlockProps) {
  return (
    <div className="rounded-lg border border-epic-border bg-epic-surface overflow-hidden select-text text-left">
      <div className="flex items-center justify-between px-4 py-2 border-b border-epic-border bg-epic-bg/60">
        <div className="flex items-center gap-2">
          {filename && (
            <span className="font-mono text-[10px] text-epic-text-secondary tracking-wide">
              {filename}
            </span>
          )}
          {language && !filename && (
            <span className="font-mono text-[9px] uppercase tracking-wider text-epic-text-muted">
              {language}
            </span>
          )}
        </div>
        <CopyButton text={code.trim()} />
      </div>
      <pre className="p-4 overflow-x-auto font-mono text-[13px] leading-relaxed text-epic-text-primary">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}
