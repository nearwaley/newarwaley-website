import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion";
import { Marquee } from "@/components/Marquee";
import { comingNext, services, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Electricians, plumbers, AC and fridge repair, washing machine repair, home nurses, cleaning and carpentry — verified Specialists near you in Trivandrum.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services · Launching in Trivandrum" title="Every kind of help." accent={["help."]}>
        <div className="flex flex-wrap items-end gap-10">
          <p className="t-lede min-w-0 max-w-[640px] flex-[1_1_520px] text-muted">
            At launch, Nearwaley will bring you verified Specialists for the jobs every home needs — with more trades
            joining as we grow.
          </p>
          <Link href="/become-a-specialist#apply" className="pill pill-red">
            Become a Specialist
          </Link>
        </div>
      </PageHero>

      <Marquee
        label="Included with every booking"
        items={["Verified Specialists", "Live tracking", "4-digit start code", "Price before work", "Pay after the job"]}
      />

      <section className="py-16 sm:py-24">
        <div className="wrap border-b border-line">
          {services.map((s, i) => (
            <Reveal
              key={s.name}
              as="div"
              className="grid grid-cols-[40px_1fr] items-baseline gap-x-8 gap-y-4 border-t border-line py-11 md:grid-cols-[64px_1.1fr_1.6fr]"
            >
              <span className="text-sm text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="t-h2 !text-[clamp(32px,3.8vw,54px)]">{s.name}</h2>
                <p className="mt-2 text-[19px] font-medium text-brand">{s.line}</p>
              </div>
              <ul className="col-span-2 flex flex-wrap gap-x-7 gap-y-2.5 text-[17px] text-muted md:col-span-1">
                {s.jobs.map((j) => (
                  <li key={j} className="before:mr-2.5 before:text-brand before:content-['—']">
                    {j}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-28 sm:py-32">
        <div className="wrap flex flex-col gap-14">
          <div className="flex flex-wrap items-end gap-16">
            <Reveal className="min-w-0 flex-[1_1_560px]">
              <p className="eyebrow mb-6 text-brand">Coming next</p>
              <h2 className="t-h2">
                More hands, <span className="text-brand">on the way.</span>
              </h2>
            </Reveal>
            <p className="t-lede min-w-0 flex-[1_1_360px] text-muted">Tell us what your home needs and we&apos;ll prioritise it.</p>
          </div>
          <Reveal className="flex flex-wrap gap-x-10 gap-y-2 text-[clamp(30px,4vw,60px)] font-bold leading-[1.15] tracking-[-0.045em]">
            {comingNext.map((c, i) => (
              <span key={c} className="flex gap-10">
                {c}
                {i < comingNext.length - 1 && <span className="text-brand">·</span>}
              </span>
            ))}
          </Reveal>
          <div className="flex flex-wrap gap-3 border-t-[1.5px] border-ink pt-9">
            <a
              href={whatsappLink("Hi Nearwaley! I'd like you to add this service: ")}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-red"
            >
              Suggest a service on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
