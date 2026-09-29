import { CodeBlock } from "@/components/ui/CodeBlock";

const REPO_URL = "https://github.com/epic-sec/epic";
const CRATES_URL = "https://crates.io/crates/epic";

export function Footer() {
  return (
    <footer className="border-t border-epic-border">
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-8">
        <div className="max-w-sm">
          <CodeBlock code="cargo install epic" language="bash" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 text-[13px] text-epic-text-secondary">
          <div className="flex items-center gap-5">
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-epic-text-primary transition-colors">
              GitHub
            </a>
            <a href={CRATES_URL} target="_blank" rel="noopener noreferrer" className="hover:text-epic-text-primary transition-colors">
              crates.io
            </a>
            <a href={`${REPO_URL}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer" className="hover:text-epic-text-primary transition-colors">
              MIT License
            </a>
          </div>
          <span className="font-mono text-[11px] text-epic-text-muted">v0.4.0</span>
        </div>
      </div>
    </footer>
  );
}
