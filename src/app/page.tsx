import Link from "next/link";
import { Reveal, SplitHeadline } from "@/components/motion";
import { RadiusVisual } from "@/components/RadiusVisual";
import { StepsTimeline } from "@/components/StepsTimeline";
import { Marquee } from "@/components/Marquee";
import { services, site, whatsappLink } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="wrap flex flex-wrap items-center gap-14">
          <div className="flex min-w-0 flex-[1_1_600px] flex-col gap-9">
            <Reveal delay={0.05}>
              <span className="eyebrow inline-flex items-center gap-2.5 text-brand">
                <span className="blip h-[9px] w-[9px] rounded-full bg-brand" />
                Launching soon in Trivandrum
              </span>
            </Reveal>
            <SplitHeadline text="Never wait for help again." accent={["help"]} className="t-mega" />
            <Reveal delay={0.35}>
              <p className="t-lede max-w-[580px] text-muted">
                Nearwaley connects your home with verified Specialists nearby — electricians, plumbers, AC
                technicians, home nurses and more. We launch in Trivandrum soon, then scale across India&apos;s
                growing towns.
              </p>
            </Reveal>
            <Reveal delay={0.5} className="flex flex-wrap gap-3">
              <Link href="/become-a-specialist#apply" className="pill pill-red">
                Become a Specialist
              </Link>
              <a href="#follow" className="pill pill-line text-ink">
                Follow for updates
              </a>
            </Reveal>
          </div>
          <div className="min-w-0 flex-[1_1_400px]">
            <RadiusVisual />
          </div>
        </div>
      </section>

      <Marquee label="Services at launch" items={services.map((s) => s.name)} />

      {/* Problem */}
      <section className="bg-cream py-28 sm:py-36">
        <div className="wrap flex flex-col gap-20">
          <div className="flex flex-wrap items-end gap-16">
            <Reveal className="min-w-0 flex-[1_1_620px]">
              <p className="eyebrow mb-7 text-brand">Why we exist</p>
              <h2 className="t-h2">
                One fuse. Ten phone calls. <span className="text-brand">Nobody came.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="min-w-0 flex-[1_1_380px]">
              <p className="t-lede text-muted">
                Every town is full of skilled hands, and every home has something that breaks. They live a few
                streets apart. They just never had a way to find each other.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              ["Nearby", "Your request reaches verified Specialists closest to your home first."],
              ["Verified", "ID-checked and skill-tested before they ever ring your bell."],
              ["Upfront", "You see the price before work starts. Pay only after the job is done."],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={i * 0.1} className="border-t-[1.5px] border-ink pb-10 pr-8 pt-7">
                <div className="text-[clamp(44px,5vw,72px)] font-bold leading-none tracking-[-0.05em] text-brand">{title}</div>
                <p className="t-body mt-4 max-w-[300px] text-muted">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-28 sm:py-36">
        <div className="wrap flex flex-col gap-14">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h2 className="t-h2">
                What needs <span className="text-brand">fixing?</span>
              </h2>
            </Reveal>
            <Link href="/services" className="arrow-link">
              All services →
            </Link>
          </div>
          <div className="border-b border-line">
            {services.slice(0, 6).map((s, i) => (
              <Link
                key={s.name}
                href="/services"
                className="group grid grid-cols-[40px_1fr] items-baseline gap-6 border-t border-line py-7 transition-[padding,color] duration-300 ease-out-expo hover:pl-4 hover:text-brand md:grid-cols-[64px_1fr_1.5fr]"
              >
                <span className="text-sm text-subtle">{String(i + 1).padStart(2, "0")}</span>
                <span className="t-h3">{s.name}</span>
                <span className="t-body hidden text-muted md:block">{s.jobs.join(", ")}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Five taps */}
      <section className="bg-ink py-28 text-white sm:py-36">
        <div className="wrap flex flex-col gap-20">
          <Reveal>
            <h2 className="t-h2 max-w-[980px]">
              From broken to <span className="text-brand-soft">fixed,</span> in five taps.
            </h2>
          </Reveal>
          <StepsTimeline />
        </div>
      </section>

      {/* Road ahead */}
      <section className="py-28 sm:py-36">
        <div className="wrap flex flex-col gap-16">
          <div className="flex flex-wrap items-end gap-16">
            <Reveal className="min-w-0 flex-[1_1_620px]">
              <p className="eyebrow mb-7 text-brand">The road ahead</p>
              <h2 className="t-h2">
                Starting in Trivandrum. <span className="text-brand">Scaling soon.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="min-w-0 flex-[1_1_360px]">
              <p className="t-lede text-muted">
                Our goal: within five years, to be India&apos;s leading home services company across Tier 2 and Tier 3
                towns — urban and rural. We start deep in one city, so help is always genuinely near.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { k: "Launching soon", t: "Trivandrum", d: "Our first city, from our home at Technopark.", on: true },
              { k: "Next", t: "Kerala's Tier 2 & Tier 3 towns", d: "The towns the big apps skipped." },
              { k: "Then", t: "Across India", d: "The same model, wherever skill and need live apart." },
            ].map((s, i) => (
              <Reveal
                key={s.t}
                delay={i * 0.1}
                className={`border-t-[1.5px] pb-6 pr-8 pt-7 ${s.on ? "border-brand" : "border-ink"}`}
              >
                <p className={`eyebrow ${s.on ? "text-brand" : "text-subtle"}`}>{s.k}</p>
                <p className="t-h3 mt-3">{s.t}</p>
                <p className="t-body mt-2.5 text-muted">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists CTA */}
      <section className="bg-brand py-28 text-white sm:py-36">
        <div className="wrap flex flex-wrap items-end gap-16">
          <Reveal className="flex min-w-0 flex-[1_1_640px] flex-col gap-7">
            <p className="eyebrow text-[#ffd3d7]">Now onboarding · First {site.freeSpots} free</p>
            <h2 className="t-mega !text-[clamp(46px,7vw,112px)]">Your skill deserves more work.</h2>
          </Reveal>
          <Reveal delay={0.15} className="flex min-w-0 flex-[1_1_360px] flex-col gap-7">
            <p className="t-lede text-blush">
              We&apos;re onboarding skilled Specialists in Trivandrum: a skill check, a verified profile and a full
              welcome kit. The first {site.freeSpots} join free.
            </p>
            <div>
              <Link href="/become-a-specialist#apply" className="pill pill-white">
                Apply now
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Investors */}
      <section className="py-28 sm:py-36">
        <div className="wrap flex flex-wrap items-center gap-16">
          <Reveal className="flex min-w-0 flex-[1_1_620px] flex-col gap-6">
            <p className="eyebrow text-brand">For investors</p>
            <h2 className="t-h2">
              Be an investor at <span className="text-brand">Nearwaley.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex min-w-0 flex-[1_1_400px] flex-col gap-6">
            <p className="t-lede text-muted">
              Home services in India&apos;s smaller towns are still booked by word of mouth. We&apos;re building the
              network that changes that — and we&apos;re looking for partners who see it too.
            </p>
            <div>
              <Link href="/investors" className="pill pill-red">
                Explore the opportunity
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Follow */}
      <section id="follow" className="scroll-mt-24 bg-cream py-28 sm:py-32">
        <div className="wrap flex flex-wrap items-center gap-16">
          <Reveal className="min-w-0 flex-[1_1_620px]">
            <h2 className="t-h2">
              Be the first to know when we <span className="text-brand">go live.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex min-w-0 flex-[1_1_380px] flex-col gap-6">
            <p className="t-lede text-muted">Follow @nearwaley for launch news, early offers and stories from our Specialists.</p>
            <div className="flex flex-wrap gap-3">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="pill pill-red">
                Instagram
              </a>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="pill pill-line text-ink">
                Facebook
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="pill pill-line text-ink">
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
