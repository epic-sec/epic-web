import { CodeHighlight } from "@/components/ui/CodeHighlight";
import { Terminal } from "@/components/ui/Terminal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const BYPASS_CODE = `pub fn withdraw(
    ctx: Context<Withdraw>,
    amount: u64,
    some_condition: bool,
) -> Result<()> {
    if some_condition {
        require!(ctx.accounts.authority.is_signer, ErrorCode::Unauthorized);
    }
    ctx.accounts.vault.balance -= amount;
    Ok(())
}`;

const SAFE_CODE = `pub fn withdraw(
    ctx: Context<Withdraw>,
    amount: u64,
    some_condition: bool,
) -> Result<()> {
    require!(ctx.accounts.authority.is_signer, ErrorCode::Unauthorized);
    ctx.accounts.vault.balance -= amount;
    Ok(())
}`;

export function DominanceDemo() {
  return (
    <section id="dominance" className="max-w-5xl mx-auto px-6 py-24 border-t border-epic-border">
      <div className="reveal">
        <SectionHeader
          eyebrow="01 — The core idea"
          title="A check that exists isn't a check that guards."
          lede="These two fixtures are identical except for one thing: in the fixture on the left, the signer check sits inside an `if some_condition { .. }` branch. On the path where the condition is false, the privileged write below it runs completely unguarded. EPIC's dominator tree sees the difference; a check for the string `require!` does not."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5 [&>*]:min-w-0">
        <div className="reveal">
          <div className="space-y-3">
            <p className="font-mono text-[11px] text-epic-text-muted">dominance-bypass — check does not dominate the write</p>
            <CodeHighlight
              code={BYPASS_CODE}
              filename="fixtures/dominance-bypass/src/lib.rs (handler)"
              markLines={[6, 8]}
            />
          </div>
        </div>
        <div className="reveal">
          <div className="space-y-3">
            <p className="font-mono text-[11px] text-epic-text-muted">dominance-safe — check dominates the write</p>
            <CodeHighlight code={SAFE_CODE} filename="fixtures/dominance-safe/src/lib.rs (handler)" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-5 [&>*]:min-w-0">
        <div className="reveal">
          <Terminal command="epic audit fixtures/dominance-bypass">
            <p className="text-destructive">✖ EPIC-SEC-002 · CRITICAL</p>
            <p className="mt-1.5 text-epic-text-secondary">
              Privileged instruction mutation lacks signer verification for authority-like account &apos;authority&apos;.
            </p>
            <p className="mt-3 text-epic-text-primary">Verdict: ACTION REQUIRED</p>
          </Terminal>
        </div>
        <div className="reveal">
          <Terminal command="epic audit fixtures/dominance-safe">
            <p className="text-epic-accent">✔ No vulnerabilities found.</p>
            <p className="mt-3 text-epic-text-primary">Verdict: SECURE</p>
          </Terminal>
        </div>
      </div>
    </section>
  );
}
