import { CodeBlock } from "@/components/ui/CodeBlock";
import { buttonVariants } from "@/components/ui/button";

const REPO_URL = "https://github.com/epic-sec/epic";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-[#F5EFE6]">
      <main className="max-w-xl w-full flex flex-col items-center text-center gap-8 py-24">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
          EPIC
        </h1>

        <p className="text-sm sm:text-base text-[#A9B1BC] leading-relaxed">
          EPIC is a compiler front-end for Anchor programs — it parses your
          Rust source into a control-flow graph, SSA form, and a dominator
          tree, then checks whether a privileged write is actually guarded
          by a signer or owner check on every possible path, not just
          whether such a check exists somewhere in the function. Findings
          carry a witness: the concrete control-flow path that bypasses the
          check. 7 rules, 224 findings measured across a pinned 5-protocol
          production sweep, and a published scorecard against the Sealevel
          Attacks benchmark — including where it currently falls short.
        </p>

        <div className="w-full">
          <CodeBlock code="cargo install epic" language="bash" />
        </div>

        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          View on GitHub
        </a>
      </main>
    </div>
  );
}
