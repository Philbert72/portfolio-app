/** Poster section header: a numbered cobalt band, read in order like a printed poster. */
export default function PanelHeading({ n, id, children }: { n: number; id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="flex items-stretch overflow-hidden rounded-[3px] bg-cobalt font-display text-[19px] font-bold leading-none tracking-[-0.01em] text-cobalt-ink [font-stretch:110%]">
      <span className="tabular grid w-11 shrink-0 place-items-center bg-black/20">{n}</span>
      <span className="flex items-center px-4 py-3">{children}</span>
    </h2>
  );
}
