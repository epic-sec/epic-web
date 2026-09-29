import { SectionHeader } from "@/components/ui/SectionHeader";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-4 py-2.5 border-b border-epic-border last:border-0">
      <span className="font-mono text-[11px] uppercase tracking-wide text-epic-text-muted pt-0.5">{label}</span>
      <span className="font-mono text-[12.5px] leading-relaxed text-epic-text-primary break-words">{children}</span>
    </div>
  );
}

export function Witness() {
  return (
    <section id="witnesses" className="max-w-5xl mx-auto px-6 py-24 border-t border-epic-border">
      <div className="grid md:grid-cols-2 gap-12 [&>*]:min-w-0">
        <div className="reveal">
          <SectionHeader
            eyebrow="02 — Witnesses"
            title="A pattern matcher can't print a path. It has no graph."
            lede="EPIC-SEC-002 findings don't just assert a bypass — they attach the concrete control-flow path from function entry to the flagged write, and where the check sits relative to it. This is the actual finding EPIC produces for the dominance-bypass fixture on the left."
          />
        </div>

        <div className="reveal">
          <div className="rounded-lg border border-epic-border bg-epic-surface p-5">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-[13px] font-semibold text-epic-text-primary">EPIC-SEC-002</span>
              <span className="font-mono text-[10px] uppercase tracking-wide text-destructive border border-destructive/30 rounded px-1.5 py-0.5">
                Critical
              </span>
            </div>
            <Field label="Message">
              Privileged instruction mutation lacks signer verification for authority-like account &apos;authority&apos;.
            </Field>
            <Field label="Location">src/lib.rs:22:0</Field>
            <Field label="Check found at">
              src/lib.rs:20 — <span className="text-epic-text-secondary">require!(ctx.accounts.authority.is_signer, ErrorCode::Unauthorized)</span>
            </Field>
            <Field label="Bypassing path">
              entry (bb0) → bb2 (branch at line 19, false: some_condition) → write at line 22 (bb3)
            </Field>
          </div>
        </div>
      </div>
    </section>
  );
}
