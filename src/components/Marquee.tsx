import { Fragment } from "react";

/** Infinite horizontal ticker. Content is duplicated so the loop is seamless. */
export function Marquee({ items, label }: { items: readonly string[]; label: string }) {
  const track = (hidden: boolean) => (
    <div
      className="marquee-track flex shrink-0 items-center gap-16 pr-16 text-xl font-medium"
      aria-hidden={hidden || undefined}
    >
      {items.map((item) => (
        <Fragment key={item}>
          <span>{item}</span>
          <span className="text-brand" aria-hidden="true">●</span>
        </Fragment>
      ))}
    </div>
  );
  return (
    <section aria-label={label} className="bg-ink py-6 text-white">
      <div className="flex overflow-hidden whitespace-nowrap">
        {track(false)}
        {track(true)}
      </div>
    </section>
  );
}
