const REPO_URL = "https://github.com/epic-sec/epic";
const CRATES_URL = "https://crates.io/crates/epic";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-epic-border bg-epic-bg/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-mono text-[13px] font-semibold tracking-tight text-epic-text-primary">
          EPIC
        </a>
        <nav className="flex items-center gap-5 text-[13px] text-epic-text-secondary">
          <span className="hidden sm:inline font-mono text-[11px] text-epic-text-muted">v0.4.0</span>
          <a href={CRATES_URL} target="_blank" rel="noopener noreferrer" className="hover:text-epic-text-primary transition-colors">
            crates.io
          </a>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-epic-text-primary transition-colors">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
