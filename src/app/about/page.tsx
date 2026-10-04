import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, SplitHeadline } from "@/components/motion";
import { LightsOn } from "@/components/LightsOn";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Nearwaley is a Trivandrum startup on a mission to connect local skills with local needs. Our goal: India's leading home services company across Tier 2 and Tier 3 towns within five years.",
  alternates: { canonical: "/about" },
};

const story = [
  "One summer night, in a small town in Kerala, a fuse blew and our house went dark.",
  "We called one electrician. Then another. Then another. Some were busy, some were asleep, some never picked up. We spent the night in the heat, waiting for morning.",
];

const values = [
  ["Near beats far.", "The closest skilled person is almost always the best answer. We build everything around that."],
  ["Honest maths.", "Every rupee is visible before you book. No hidden charges, no surprise bills."],
  ["Respect the skill.", "Our Specialists are professionals. Their skills, their ratings and their reputation belong to them."],
  ["Earn it, every job.", "Trust isn't claimed once. It's rated after every visit, and we act on what we hear."],
];

export default function AboutPage() {
  return (
    <>
      <LightsOn>
        <div className="wrap flex flex-col gap-10 pb-36 pt-28 text-white">
          <Reveal>
            <p className="eyebrow text-[#ffd3d7]">About us · A Trivandrum startup</p>
          </Reveal>
          <SplitHeadline text="It started with a power cut." className="t-mega" />
          <Reveal delay={0.35}>
            <p className="t-lede max-w-[660px] text-blush">
              We&apos;re a young startup from Technopark, building the network that connects India&apos;s growing towns
              with the skilled people who live in them.
            </p>
          </Reveal>
        </div>
      </LightsOn>

      <section className="py-28 sm:py-36">
        <div className="wrap flex flex-wrap items-start gap-24">
          <p className="eyebrow min-w-0 flex-[1_1_300px] text-brand lg:sticky lg:top-28">The night that started it</p>
          <div className="flex min-w-0 flex-[1_1_640px] flex-col gap-8 text-[clamp(20px,1.8vw,26px)] leading-[1.6] tracking-[-0.01em] text-ink-2">
            {story.map((p) => (
              <Reveal as="p" key={p}>
                {p}
              </Reveal>
            ))}
            <Reveal as="p">
              It happened again with a leaking pipe. Then an AC. Then a washing machine. Every time, the same story:{" "}
              <span className="font-semibold text-brand">
                the skilled people existed, just a few streets away. We simply couldn&apos;t reach them.
              </span>
            </Reveal>
            <Reveal as="p">
              On the other side were electricians and plumbers with years of skill who sat idle for days at a time —
              because work only came through word of mouth.
            </Reveal>
            <Reveal as="p" className="font-semibold text-ink">
              Nearwaley exists to close that gap. Need, meet skill.
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-28 sm:py-36">
        <div className="wrap flex flex-col gap-20">
          {[
            {
              label: "Our vision",
              big: true,
              body: (
                <>
                  No home should ever be left waiting for help —{" "}
                  <span className="text-brand">and no skilled hand should wait for work.</span>
                </>
              ),
            },
            {
              label: "Our mission",
              body: "To connect local skills with local needs, ward by ward and town by town — with honest prices for families and fair, steady work for Specialists.",
            },
            {
              label: "Our goal",
              body: (
                <>
                  Within the next five years, to be{" "}
                  <span className="font-semibold text-brand">India&apos;s leading home services company</span> across
                  Tier 2 and Tier 3 towns — urban or rural.
                </>
              ),
            },
          ].map((row, i) => (
            <Reveal key={row.label} className={`flex flex-wrap items-start gap-16 ${i > 0 ? "border-t-[1.5px] border-ink pt-16" : ""}`}>
              <p className="eyebrow min-w-0 flex-[0_1_240px] pt-3 text-brand">{row.label}</p>
              {row.big ? (
                <h2 className="t-h2 min-w-0 flex-[1_1_720px]">{row.body}</h2>
              ) : (
                <p className="min-w-0 flex-[1_1_720px] text-[clamp(28px,3.2vw,46px)] font-medium leading-[1.2] tracking-[-0.025em]">
                  {row.body}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-28 sm:py-36">
        <div className="wrap flex flex-wrap items-center gap-24">
          <Reveal className="flex min-w-0 flex-[1_1_380px] justify-center">
            <Image
              src="/brand/nearwaley-mark.png"
              alt="The Nearwaley N: two strokes meeting in a handshake"
              width={440}
              height={440}
              className="w-full max-w-[440px] rounded-[40px]"
            />
          </Reveal>
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-12">
            <Reveal className="flex flex-col gap-4">
              <p className="eyebrow text-brand">The name</p>
              <p className="t-h3 !text-[clamp(30px,3.4vw,48px)]">
                Near + waley.
                <br />
                <span className="text-brand">The ones near you.</span>
              </p>
              <p className="t-body text-muted">Easy to say in Malayalam, Hindi and English — because help should never need a translation.</p>
            </Reveal>
            <Reveal className="flex flex-col gap-4 border-t border-line pt-10">
              <p className="eyebrow text-brand">The mark</p>
              <p className="t-h3">Two strokes. One handshake.</p>
              <p className="t-body text-muted">
                One side of the N is the family with a need. The other is the Specialist with the skill. They meet in the
                middle — that&apos;s Nearwaley.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink py-28 text-white sm:py-36">
        <div className="wrap flex flex-col gap-12">
          <Reveal>
            <h2 className="t-h2">
              What we <span className="text-brand-soft">stand for.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 border-b border-night-line md:grid-cols-2 md:gap-x-20">
            {values.map(([t, d]) => (
              <Reveal key={t} className="flex flex-col gap-3 border-t border-night-line py-10">
                <h3 className="t-h3">{t}</h3>
                <p className="t-body text-[#bfb3b3]">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-36">
        <div className="wrap flex flex-wrap items-start gap-20">
          <Reveal className="flex min-w-0 flex-[1_1_520px] flex-col gap-6">
            <p className="eyebrow text-brand">The team</p>
            <h2 className="t-h2">
              Builders <span className="text-brand">from Kerala.</span>
            </h2>
            <p className="t-lede text-muted">
              We&apos;re a young team of engineers and business students who grew up with this problem. In September
              2026, Nearwaley won first place at the Brand Expo in Trivandrum.
            </p>
          </Reveal>
          <div className="min-w-0 flex-[1_1_520px] border-b border-line">
            {/* TODO: add the rest of the team */}
            <div className="flex justify-between gap-4 border-t border-line py-6 text-[19px]">
              <span className="font-semibold">Rihab Shihan</span>
              <span className="text-muted">Founder &amp; team lead</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-36">
        <div className="wrap flex flex-col gap-10 border-t-[1.5px] border-ink pt-20">
          <p className="eyebrow text-brand">Where we&apos;re going</p>
          <Reveal className="flex flex-wrap items-baseline gap-x-7 gap-y-3 text-[clamp(30px,4.2vw,64px)] font-bold tracking-[-0.045em]">
            <span>Trivandrum</span>
            <span className="text-brand">launching soon</span>
            <span className="text-[#cfc4c4]">→</span>
            <span className="text-muted">Tier 2 &amp; Tier 3 towns</span>
            <span className="text-[#cfc4c4]">→</span>
            <span className="text-muted">all of India</span>
          </Reveal>
        </div>
      </section>
    </>
  );
}
