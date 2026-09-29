import { SectionHeader } from "@/components/ui/SectionHeader";

const PROTOCOLS = ["mango-v4", "marginfi", "marinade", "orca-whirlpools", "squads-v4"];

export function Validation() {
  return (
    <section id="validation" className="max-w-5xl mx-auto px-6 py-24 border-t border-epic-border">
      <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start [&>*]:min-w-0">
        <div className="reveal">
          <span className="block font-mono text-6xl sm:text-7xl font-semibold text-epic-text-primary tabular-nums">
            224
          </span>
          <span className="block mt-2 font-mono text-[12px] text-epic-text-muted">findings</span>
        </div>

        <div className="reveal">
          <SectionHeader
            eyebrow="04 — Real-world validation"
            title="Measured across a pinned 5-protocol production sweep."
          />
          <div className="flex flex-wrap gap-2 -mt-4 mb-5">
            {PROTOCOLS.map((p) => (
              <span
                key={p}
                className="font-mono text-[12px] text-epic-text-secondary border border-epic-border rounded-md px-2.5 py-1"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="text-[15px] leading-relaxed text-epic-text-secondary max-w-xl">
            A sixth protocol, metaplex-mpl, was measured and dropped from the corpus — it&apos;s a Shank-based
            native Solana program, not Anchor, and its results were dominated by a naming collision rather
            than real signal on EPIC&apos;s accuracy.
          </p>
        </div>
      </div>
    </section>
  );
}
