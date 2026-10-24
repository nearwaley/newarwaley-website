import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Why Nearwaley",
  description:
    "Built for the towns the big apps skipped: instant help from verified, skill-tested local Specialists, with the price shown before work starts.",
  alternates: { canonical: "/why-nearwaley" },
};

const promises = [
  [
    "Instant, not scheduled.",
    "No waiting days for a slot. Nearby Specialists are alerted at once, and the first to accept is on the way.",
  ],
  [
    "Nearest first.",
    "We always look for the closest available Specialist — less waiting for you, less travel for them.",
  ],
  [
    "Skill-tested, with a start code.",
    "Every Specialist passes an ID check and a practical skill test. Work begins only with your code.",
  ],
  [
    "Price before work.",
    "You see what you'll pay before anything starts. Pay only after the job is done.",
  ],
  [
    "Local, in Malayalam.",
    "Specialists from your own area who speak your language and know your streets.",
  ],
  [
    "Fair to Specialists.",
    "Fair, steady work for skilled people — so the best ones stay, and keep coming back.",
  ],
];

const rows = [
  [
    "Who comes",
    "Whoever picks up",
    "Company-trained staff",
    "Verified local Specialists",
  ],
  [
    "How fast",
    "When they're free",
    "Pick a time slot",
    "The first free Specialist nearby",
  ],
  [
    "Price",
    "Decided after the job",
    "Shown upfront",
    "Shown upfront, paid after the job",
  ],
  [
    "Proof of skill",
    "A neighbour's word",
    "Company training",
    "Skill test + every job rated",
  ],
  ["Where", "Your contacts", "Mostly metros", "Tier 2 & Tier 3 towns, first"],
];

const later = [
  "Price-Lock guarantee",
  "Night-time emergency help",
  "Booking in Malayalam on WhatsApp",
  "Family booking from abroad",
  "Home Plan",
  "My Specialist",
];

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Nearwaley"
        title="Built for the towns the big apps skipped."
        accent={["skipped."]}
      >
        <p className="t-lede max-w-[760px] text-muted">
          Most home-service apps were designed for metros. India&apos;s growing
          Tier 2 and Tier 3 towns work differently — so we&apos;re building
          differently, around the skilled people who already live there.
        </p>
      </PageHero>

      <section className="pb-14 sm:pb-20 lg:pb-28">
        <div className="wrap">
          <h2 className="t-h3 pb-3 !text-[clamp(20px,2.4vw,32px)]">
            What you can expect at launch
          </h2>
          <div className="grid grid-cols-1 border-b border-line md:grid-cols-2 md:gap-x-20">
            {promises.map(([title, text], i) => (
              <Reveal
                key={title}
                delay={(i % 2) * 0.08}
                className="flex flex-col gap-3.5 border-t border-line py-11"
              >
                <span className="text-[clamp(24px,3vw,36px)] font-bold leading-none tracking-[-0.05em] text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="t-h3">{title}</h3>
                <p className="t-body text-muted">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 sm:py-20 lg:py-28">
        <div className="wrap flex flex-col gap-14">
          <div className="flex flex-wrap items-end gap-16">
            <Reveal className="min-w-0 flex-[1_1_640px]">
              <h2 className="t-h2">
                Three ways to find help.{" "}
                <span className="text-brand">One that works.</span>
              </h2>
            </Reveal>
            <p className="t-lede min-w-0 flex-[1_1_340px] text-muted">
              How Nearwaley compares with what most families in our towns do
              today.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-[13px] sm:text-[14px]">
              <thead>
                <tr className="text-left">
                  <th scope="col" className="w-[18%]" />
                  {["Calling around", "A typical city app", "Nearwaley"].map(
                    (h, i) => (
                      <th
                        key={h}
                        scope="col"
                        className={`eyebrow !text-[13px] !tracking-[0.12em] pb-5 pr-5 ${i === 2 ? "text-brand" : "text-subtle"}`}
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, a, b, us]) => (
                  <tr
                    key={label}
                    className="border-t border-line last:border-b"
                  >
                    <th
                      scope="row"
                      className="eyebrow py-5 pr-5 text-left align-top !text-[13px] !tracking-[0.12em] text-subtle"
                    >
                      {label}
                    </th>
                    <td className="py-5 pr-5 align-top leading-normal text-muted">
                      {a}
                    </td>
                    <td className="py-5 pr-5 align-top leading-normal text-muted">
                      {b}
                    </td>
                    <td className="py-5 pr-5 align-top font-semibold leading-normal">
                      {us}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-ink py-14 text-white sm:py-20 lg:py-28">
        <div className="wrap flex flex-col gap-14">
          <div className="flex flex-wrap items-end gap-16">
            <Reveal className="min-w-0 flex-[1_1_640px]">
              <p className="eyebrow mb-6 text-brand-soft">And after launch</p>
              <h2 className="t-h2">
                More on the <span className="text-brand-soft">way.</span>
              </h2>
            </Reveal>
            <p className="t-lede min-w-0 flex-[1_1_340px] text-night-text">
              Features we&apos;ll add as our network grows. Follow us to hear
              first.
            </p>
          </div>
          <Reveal className="flex flex-wrap gap-x-7 gap-y-2 border-t border-night-line pt-9 text-[clamp(16px,1.8vw,24px)] font-semibold tracking-[-0.03em]">
            {later.map((l, i) => (
              <span key={l} className="flex gap-10">
                {l}
                {i < later.length - 1 && (
                  <span className="text-brand-soft">·</span>
                )}
              </span>
            ))}
          </Reveal>
          <div>
            <Link href="/#follow" className="pill pill-white">
              Follow for updates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
