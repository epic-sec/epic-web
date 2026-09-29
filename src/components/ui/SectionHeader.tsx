export function SectionHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="max-w-2xl mb-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-epic-accent mb-3">{eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-epic-text-primary text-balance">
        {title}
      </h2>
      {lede && <p className="mt-4 text-[15px] leading-relaxed text-epic-text-secondary">{lede}</p>}
    </div>
  );
}
