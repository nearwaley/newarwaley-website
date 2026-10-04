import type { ReactNode } from "react";
import { Reveal, SplitHeadline } from "./motion";

/** Standard top-of-page block used by the inner pages. */
export function PageHero({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string[];
  children?: ReactNode;
}) {
  return (
    <section className="pb-20 pt-20 sm:pb-24 sm:pt-28">
      <div className="wrap flex flex-col gap-10">
        <Reveal>
          <p className="eyebrow text-brand">{eyebrow}</p>
        </Reveal>
        <SplitHeadline text={title} accent={accent} className="t-mega max-w-[1180px]" />
        {children && <Reveal delay={0.35}>{children}</Reveal>}
      </div>
    </section>
  );
}
