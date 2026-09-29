import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, Undo2 } from "lucide-react";

const FIXED = [
  {
    title: "PDA bump false positive",
    detail:
      "Canonical stored-bump patterns (`bump = <account>.bump`, Marinade's `_bump_seed` convention) were flagged as caller-supplied.",
  },
  {
    title: "require!/assert! blindness",
    detail:
      "Checks written via require!, require_eq!, assert!, etc. didn't desugar into real CFG branches, so dominance analysis couldn't see them — a real check looked like a missing one.",
  },
  {
    title: "Owner-check reference-unwrap bug",
    detail:
      "account.owner != &spl_token::ID — a very common idiom — stringified to \"unknown\" internally and could never match the expected-owner whitelist.",
  },
];

const REVERTED = [
  {
    title: "Mutation-gate widening",
    detail:
      "Widening from write-only to any privileged use fixed 2 false negatives, but produced 100+ new findings dominated by author-annotated /// CHECK: accounts. Reverted in full.",
  },
  {
    title: "EPIC-SEC-TOKEN keyword fix",
    detail:
      'Adding "owner" to the constraint keyword scan fixed one missed check, but silently flipped 18 true positives to false negatives on Orca Whirlpools. Reverted.',
  },
];

export function Honesty() {
  return (
    <section id="honesty" className="max-w-5xl mx-auto px-6 py-24 border-t border-epic-border">
      <div className="reveal">
        <SectionHeader
          eyebrow="05 — Known limitations"
          title="Three false-positive classes we found in our own output — and fixed."
          lede="Two more we tried, measured, and reverted rather than shipped quietly. This is a running record, not a footnote."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-10 [&>*]:min-w-0">
        <div className="reveal">
          <p className="font-mono text-[11px] uppercase tracking-wide text-epic-accent mb-4">Fixed</p>
          <ol className="space-y-5">
            {FIXED.map((item, i) => (
              <li key={item.title} className="flex gap-3">
                <span className="mt-0.5 shrink-0 size-5 rounded-full bg-epic-accent/15 text-epic-accent flex items-center justify-center">
                  <Check className="size-3" />
                </span>
                <div>
                  <p className="text-[14px] font-medium text-epic-text-primary">
                    {i + 1}. {item.title}
                  </p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-epic-text-secondary">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal">
          <p className="font-mono text-[11px] uppercase tracking-wide text-epic-text-muted mb-4">
            Measured and reverted
          </p>
          <ol className="space-y-5">
            {REVERTED.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span className="mt-0.5 shrink-0 size-5 rounded-full bg-white/5 text-epic-text-muted flex items-center justify-center">
                  <Undo2 className="size-3" />
                </span>
                <div>
                  <p className="text-[14px] font-medium text-epic-text-primary">{item.title}</p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-epic-text-secondary">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-[13px] text-epic-text-muted">
            <a
              href="https://github.com/epic-sec/epic/blob/main/KNOWN_LIMITATIONS.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-epic-accent hover:underline"
            >
              Full writeup in KNOWN_LIMITATIONS.md →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
