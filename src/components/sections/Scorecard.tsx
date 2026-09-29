import { SectionHeader } from "@/components/ui/SectionHeader";
import { SCORECARD, SCORECARD_SUMMARY, type Verdict } from "@/data/scorecard";

const VERDICT_LABEL: Record<Verdict, string> = {
  "true-positive": "Caught",
  "false-negative": "Missed",
  "not-covered": "Not covered",
};

const VERDICT_DOT: Record<Verdict, string> = {
  "true-positive": "bg-epic-accent",
  "false-negative": "bg-destructive",
  "not-covered": "bg-epic-text-muted",
};

const VERDICT_TEXT: Record<Verdict, string> = {
  "true-positive": "text-epic-text-primary",
  "false-negative": "text-epic-text-secondary",
  "not-covered": "text-epic-text-muted",
};

export function Scorecard() {
  return (
    <section id="scorecard" className="max-w-5xl mx-auto px-6 py-24 border-t border-epic-border">
      <div className="reveal">
        <SectionHeader
          eyebrow="03 — Benchmarks"
          title="The Sealevel Attacks scorecard — including what it misses."
          lede="Checked against a vendored, pinned copy of coral-xyz/sealevel-attacks, covering all 11 published Solana vulnerability classes. Published with the failures included, not just the two it catches."
        />
      </div>

      <div className="reveal">
        <div className="flex flex-wrap gap-x-8 gap-y-2 mb-8 font-mono text-[12px] text-epic-text-secondary">
          <span><span className="text-epic-text-primary">{SCORECARD_SUMMARY.truePositive}</span> true positive</span>
          <span><span className="text-epic-text-primary">{SCORECARD_SUMMARY.falseNegative}</span> false negative</span>
          <span><span className="text-epic-text-primary">{SCORECARD_SUMMARY.notCovered}</span> not covered</span>
          <span><span className="text-epic-text-primary">{SCORECARD_SUMMARY.falsePositive}</span> false positive</span>
          <span><span className="text-epic-text-primary">{SCORECARD_SUMMARY.flaggedWarning}</span> flagged — warning</span>
        </div>
      </div>

      <div className="reveal">
        <div className="rounded-lg border border-epic-border overflow-x-auto">
          <table className="w-full min-w-[560px] text-left border-collapse">
            <thead>
              <tr className="border-b border-epic-border bg-epic-surface">
                <th className="font-mono text-[11px] uppercase tracking-wide text-epic-text-muted font-normal px-4 py-2.5 w-10">#</th>
                <th className="font-mono text-[11px] uppercase tracking-wide text-epic-text-muted font-normal px-4 py-2.5">Class</th>
                <th className="font-mono text-[11px] uppercase tracking-wide text-epic-text-muted font-normal px-4 py-2.5">Rule</th>
                <th className="font-mono text-[11px] uppercase tracking-wide text-epic-text-muted font-normal px-4 py-2.5">Result</th>
              </tr>
            </thead>
            <tbody>
              {SCORECARD.map((row) => (
                <tr key={row.n} className="border-b border-epic-border last:border-0">
                  <td className="px-4 py-2.5 font-mono text-[12px] text-epic-text-muted">{row.n}</td>
                  <td className="px-4 py-2.5 font-mono text-[12.5px] text-epic-text-primary">{row.class}</td>
                  <td className="px-4 py-2.5 font-mono text-[12px] text-epic-text-secondary">{row.rule ?? "—"}</td>
                  <td className="px-4 py-2.5">
                    <span className={`inline-flex items-center gap-2 font-mono text-[12px] ${VERDICT_TEXT[row.verdict]}`}>
                      <span className={`size-1.5 rounded-full ${VERDICT_DOT[row.verdict]}`} />
                      {VERDICT_LABEL[row.verdict]}
                    </span>
                    {row.note && <p className="mt-1 text-[11px] text-epic-text-muted max-w-xs">{row.note}</p>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="reveal">
        <p className="mt-4 text-[13px] text-epic-text-muted">
          Zero false positives on this benchmark is expected, not impressive — most classes have no rule to
          false-positive with in the first place.{" "}
          <a
            href="https://github.com/epic-sec/epic/blob/main/benchmarks/sealevel/RESULTS.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-epic-accent hover:underline"
          >
            Full scorecard →
          </a>
        </p>
      </div>
    </section>
  );
}
