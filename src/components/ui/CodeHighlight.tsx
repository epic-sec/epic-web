import { codeToHtml } from "shiki";
import { CopyButton } from "@/components/ui/CopyButton";

interface CodeHighlightProps {
  code: string;
  lang?: string;
  filename?: string;
  /** 1-indexed line numbers to visually mark (e.g. the branch that breaks dominance). */
  markLines?: number[];
}

export async function CodeHighlight({ code, lang = "rust", filename, markLines = [] }: CodeHighlightProps) {
  const trimmed = code.trim();
  const lines = trimmed.split("\n");

  const html = await codeToHtml(trimmed, {
    lang,
    theme: "vitesse-dark",
    decorations: markLines.map((lineNo) => ({
      start: { line: lineNo - 1, character: 0 },
      end: { line: lineNo - 1, character: lines[lineNo - 1]?.length ?? 0 },
      properties: { class: "epic-marked-line" },
    })),
  });

  return (
    <div className="rounded-lg border border-epic-border bg-epic-surface overflow-hidden select-text text-left">
      <div className="flex items-center justify-between px-4 py-2 border-b border-epic-border bg-epic-bg/60">
        <span className="font-mono text-[10px] text-epic-text-secondary tracking-wide">{filename}</span>
        <CopyButton text={trimmed} />
      </div>
      <div
        className="epic-code overflow-x-auto text-[12.5px] leading-relaxed [&_pre]:p-4 [&_pre]:!bg-transparent"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
