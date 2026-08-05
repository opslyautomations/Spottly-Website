export default function ReviewPlaceholder({ text, cityLabel }: { text: string; cityLabel?: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-[var(--color-pale-blue)] p-6">
      <div className="flex gap-1 text-[var(--color-light-blue)]" aria-hidden="true">
        {"★★★★★"}
      </div>
      <p className="mt-3 text-sm italic text-[var(--color-slate)]">{text}</p>
      {cityLabel && <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary-blue)]">{cityLabel}</p>}
    </div>
  );
}
