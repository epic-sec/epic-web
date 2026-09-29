import { CodeBlock } from "@/components/ui/CodeBlock";

const REPO_URL = "https://github.com/epic-sec/epic";

export function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-epic-accent mb-5">
        A compiler front-end for Anchor programs
      </p>

      <h1 className="max-w-3xl text-3xl sm:text-[2.75rem] font-semibold tracking-tight leading-[1.15] text-epic-text-primary text-balance">
        Most scanners check whether a check exists.
        <br />
        EPIC checks whether it dominates.
      </h1>

      <p className="mt-6 max-w-xl text-[15px] sm:text-base leading-relaxed text-epic-text-secondary">
        EPIC parses Anchor programs into a control-flow graph, SSA form, and a dominator
        tree, then proves whether a signer or owner check actually guards every path to
        the privileged operation it&apos;s meant to protect — not just whether one appears
        somewhere in the function.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="w-full sm:w-auto sm:min-w-[260px]">
          <CodeBlock code="cargo install epic" language="bash" />
        </div>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[14px] text-epic-text-secondary hover:text-epic-text-primary transition-colors"
        >
          github.com/epic-sec/epic
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
