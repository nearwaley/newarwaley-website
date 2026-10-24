import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion";
import { StepsTimeline } from "@/components/StepsTimeline";
import { CounterStrip } from "@/components/CounterStrip";
import { LiveTicker } from "@/components/LiveTicker";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ZoneIllustration } from "@/components/ZoneIllustration";
import { site, whatsappLink } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nearwaley — 60-Min Hyperlocal Home Services in Trivandrum",
  description:
    "Need an electrician, plumber, or AC technician in Trivandrum? Get verified local Specialists at your doorstep in 60 minutes — or get 20% off your bill.",
  alternates: { canonical: "/" },
};

/* ─── Service icons ─── */
function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    electric: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    plumber: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    ac: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="2" y="4" width="20" height="10" rx="2" />
        <path d="M6 18h.01M10 18h.01M14 18h.01M18 18h.01M8 14v4M12 14v4M16 14v4" />
      </svg>
    ),
    cleaning: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 3v3M18.5 5.5l-2.12 2.12M21 12h-3M18.5 18.5l-2.12-2.12M12 21v-3M5.5 18.5l2.12-2.12M3 12h3M5.5 5.5l2.12 2.12" />
      </svg>
    ),
    carpenter: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
        <path d="m18 15 4-4" />
        <path d="M21.5 8.5 15.5 2.5" />
      </svg>
    ),
    painter: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M19 11h2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-1v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1h2V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8z" />
      </svg>
    ),
  };
  return (
    icons[type] ?? (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  );
}

/* ─── Upcoming Industry Icons ─── */
function UpcomingIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    nurse: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    construction: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M2 20h20M6 20V10l6-4 6 4v10M10 14h4" />
      </svg>
    ),
    builder: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M14 2v4a2 2 0 0 0 2 2h4M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3M4 11h16" />
      </svg>
    ),
    interior: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
      </svg>
    ),
    facility: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
    security: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  };
  return (
    icons[type] ?? (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  );
}

/* ─── Pulse dot ─── */
function PulseDot() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center">
      <div className="pulse-ring absolute h-full w-full rounded-full bg-brand/30" />
      <div className="pulse-ring-2 absolute h-full w-full rounded-full bg-brand/20" />
      <div className="pulse-ring-3 absolute h-full w-full rounded-full bg-brand/10" />
      <div className="relative h-4 w-4 rounded-full bg-brand shadow-lg" />
    </div>
  );
}

/* ─── Check / Cross icons ─── */
function Check({ red = false }: { red?: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 ${red ? "text-brand" : "text-brand"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
function Cross() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-grey-600 opacity-40"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════
          §3.1  HERO — dark (ink)
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-ink">
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-[70%] w-[60%] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 80% 10%, #E10600 0%, transparent 60%)",
          }}
        />
        <div className="wrap relative z-10 py-10 sm:py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
            {/* Left copy */}
            <div className="flex min-w-0 w-full flex-none lg:w-1/2 lg:flex-1 flex-col gap-5 sm:gap-6">
              {/* Eyebrow chip */}
              <Reveal delay={0.05}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur-sm">
                  <span className="blip h-1.5 w-1.5 rounded-full bg-brand" />
                  Coming soon in Trivandrum
                </span>
              </Reveal>

              {/* Headline */}
              <Reveal delay={0.12}>
                <h1 className="text-[26px] sm:text-[36px] lg:text-[46px] font-extrabold tracking-tight text-white leading-[1.15]">
                  Never wait <span className="gradient-text">for help</span>{" "}
                  again.
                </h1>
              </Reveal>

              {/* Subhead */}
              <Reveal delay={0.22}>
                <p className="text-[13px] sm:text-[14.5px] leading-relaxed text-white/65 max-w-[440px]">
                  A verified local Specialist at your door in 60 minutes, or 20%
                  off your bill. Electricians, plumbers and AC repair, 24/7.
                </p>
              </Reveal>

              {/* CTAs – Compact, proportional side-by-side buttons */}
              <Reveal delay={0.32} className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                <Link
                  href="/#services"
                  className="inline-flex h-10 sm:h-11 items-center justify-center rounded-full bg-brand px-5 sm:px-6 text-[12.5px] sm:text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-brand-dark hover:-translate-y-0.5"
                >
                  Book a Specialist
                </Link>
                <Link
                  href="/#specialists"
                  className="inline-flex h-10 sm:h-11 items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 sm:px-5 text-[12.5px] sm:text-[13px] font-medium text-white/85 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
                >
                  Join as Specialist
                </Link>
              </Reveal>

              {/* Trust strip – Minimalist, elegant inline items */}
              <Reveal delay={0.42} className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-[11.5px] text-white/55">
                <span className="flex items-center gap-1.5">
                  <span className="text-brand font-bold text-[12px]">✓</span> Verified Specialists
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-brand font-bold text-[12px]">✓</span> Price before booking
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-brand font-bold text-[12px]">✓</span> Zero platform fee
                </span>
              </Reveal>
            </div>

            {/* Right: Modern live dispatch app mockup card */}
            <Reveal delay={0.18} className="w-full flex-none lg:w-5/12 lg:flex-1 min-w-0">
              <div className="relative mx-auto max-w-[340px] sm:max-w-[360px]">
                {/* Live Status Card */}
                <div className="relative overflow-hidden rounded-2xl bg-ink-2/95 p-4.5 sm:p-5 border border-white/10 shadow-2xl backdrop-blur-xl">
                  {/* Top header row */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/8">
                    <div className="flex items-center gap-2">
                      <span className="blip h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-[11px] font-semibold text-white/70 uppercase tracking-wider">
                        Live in Trivandrum
                      </span>
                    </div>
                    <span className="rounded-full bg-brand/10 border border-brand/20 px-2.5 py-0.5 text-[10.5px] font-semibold text-brand">
                      Nearest: 2.1 km
                    </span>
                  </div>

                  {/* Specialist profile */}
                  <div className="mt-3.5 flex items-center gap-3">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white font-bold shadow-sm">
                      <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-[8px] text-white">✓</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <p className="font-bold text-white text-[13.5px]">Arun Kumar</p>
                        <span className="text-amber-400 text-[11px] font-bold">★ 4.9</span>
                      </div>
                      <p className="text-[11px] text-white/50 truncate">Licensed Electrician · Kazhakkoottam</p>
                    </div>
                  </div>

                  {/* Dispatch & arrival details */}
                  <div className="mt-3.5 grid grid-cols-2 gap-2 text-[11px]">
                    <div className="rounded-xl bg-white/[0.04] border border-white/6 p-2.5">
                      <p className="text-white/40 text-[10px]">Estimated Arrival</p>
                      <p className="font-semibold text-emerald-400 mt-0.5 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        18 mins away
                      </p>
                    </div>
                    <div className="rounded-xl bg-brand/10 border border-brand/20 p-2.5">
                      <p className="text-brand/80 text-[10px]">Guaranteed SLA</p>
                      <p className="font-bold text-white mt-0.5">60 min or 20% off</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Live ticker */}
      <LiveTicker />

      {/* ══════════════════════════════════════════
          §3.2  PROOF STRIP — light
      ══════════════════════════════════════════ */}
      <CounterStrip />

      {/* ══════════════════════════════════════════
          §3.3  THE PROBLEM — light
      ══════════════════════════════════════════ */}
      <section className="bg-paper py-16 sm:py-22 lg:py-28">
        <div className="wrap">
          <Reveal className="text-center mb-12 sm:mb-14">
            <span className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              The Reality
            </span>
            <h2 className="t-h2 max-w-[720px] mx-auto text-center font-extrabold tracking-tight text-ink">
              Help is hard to find,{" "}
              <span className="gradient-text bg-gradient-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent">
                and hard to trust.
              </span>
            </h2>
            <p className="mt-3.5 max-w-[540px] mx-auto text-center text-[14px] sm:text-[15px] font-medium text-grey-600 leading-relaxed">
              Finding reliable local specialists shouldn&apos;t mean endless
              phone calls, price uncertainty, or unverified strangers.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Customers column */}
            <Reveal delay={0.08}>
              <div className="rounded-3xl bg-white p-7 sm:p-9 lg:p-10 ring-1 ring-black/6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-tint px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-brand">
                    For families &amp; businesses
                  </div>
                  <ul className="flex flex-col gap-5">
                    {[
                      "Calling 10 numbers to find someone free",
                      "No idea what a fair price is",
                      "A stranger at the door, not verified",
                      "Almost no help at night",
                    ].map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-3.5 text-[13px] sm:text-[14px] font-medium text-grey-600"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-tint text-[11px] font-bold text-brand">
                          ✕
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Specialists column */}
            <Reveal delay={0.16}>
              <div className="rounded-3xl bg-white p-7 sm:p-9 lg:p-10 ring-1 ring-black/6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-tint px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-brand">
                    For skilled Specialists
                  </div>
                  <ul className="flex flex-col gap-5">
                    {[
                      "Jobs only from friends and referrals",
                      "Commission apps take a cut of every job",
                      "No insurance, no safety net",
                      "Idle hours, no steady income",
                    ].map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-3.5 text-[13px] sm:text-[14px] font-medium text-grey-600"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-tint text-[11px] font-bold text-brand">
                          ✕
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.24}>
            <div className="mt-10 mx-auto text-center rounded-2xl bg-white/70 p-6 sm:p-7 ring-1 ring-grey-200/80 max-w-[680px]">
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-grey-600">
                In Tier 2 and Tier 3 towns, both sides still depend on word of
                mouth.{" "}
                <strong className="text-ink font-semibold">
                  We&apos;re changing that.
                </strong>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §3.4  SERVICES — #services — light
      ══════════════════════════════════════════ */}
      <section
        id="services"
        className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="wrap">
          <Reveal className="mb-12 sm:mb-14 mx-auto max-w-[700px] text-center">
            <span className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              Available Services in Trivandrum
            </span>
            <h2 className="t-h2 font-extrabold tracking-tight text-ink">
              What we fix,{" "}
              <span className="gradient-text bg-gradient-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent">
                starting today.
              </span>
            </h2>
            <p className="mt-3.5 max-w-[560px] mx-auto text-center text-[14px] sm:text-[15px] font-medium text-grey-600 leading-relaxed">
              We start with the urgent jobs — the ones that can&apos;t wait —
              because they fit our{" "}
              <span className="font-semibold text-ink">60-minute promise</span>{" "}
              best.
            </p>
          </Reveal>

          {/* Available Services Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "electric",
                name: "Electricians",
                tagline: "Faults, wiring, DB box fixes, monsoon power cuts",
                tag: "Immediate Dispatch",
              },
              {
                icon: "plumber",
                name: "Plumbers",
                tagline: "Pipe leaks, blockages, tap & tank fittings",
                tag: "Verified Specialists",
              },
              {
                icon: "ac",
                name: "AC & Appliance Repair",
                tagline:
                  "Servicing, gas refills, washing machine & fridge breakdowns",
                tag: "Standard Pricing",
              },
              {
                icon: "cleaning",
                name: "House & Deep Cleaning",
                tagline:
                  "Deep home cleaning, kitchen degreasing, festival prep",
                tag: "Eco Equipment",
              },
              {
                icon: "carpenter",
                name: "Carpenters & Fitting",
                tagline:
                  "Door locks, cabinet hinges, furniture repairs & fittings",
                tag: "Skilled Craftsmen",
              },
              {
                icon: "painter",
                name: "Painters & Waterproofing",
                tagline:
                  "Wall touch-ups, monsoon dampness treatment & repainting",
                tag: "Monsoon Care",
              },
            ].map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06}>
                <div className="group flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 ring-1 ring-black/8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand/30 h-full">
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tint text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:shadow-md">
                        <ServiceIcon type={s.icon} />
                      </div>
                      <span className="text-[11px] font-semibold text-grey-600 bg-grey-100 px-2.5 py-1 rounded-full group-hover:bg-brand-tint group-hover:text-brand transition-colors">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="text-[17px] font-bold text-ink tracking-tight">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-grey-600">
                      {s.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-grey-100 flex items-center justify-between">
                    <span className="text-[12px] font-medium text-grey-600">
                      Trivandrum
                    </span>
                    <Link
                      href="/#services"
                      className="inline-flex items-center gap-1 text-[13px] font-semibold text-brand hover:gap-2 transition-all"
                    >
                      Book now →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Expanding Industries in Trivandrum */}
          <Reveal delay={0.25} className="mt-12 sm:mt-16">
            <div className="rounded-3xl bg-ink p-7 sm:p-9 text-white relative overflow-hidden shadow-xl ring-1 ring-white/10">
              <div
                className="pointer-events-none absolute right-0 top-0 h-full w-[60%] opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at 100% 0%, #E10600 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-[540px]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    Expanding in Trivandrum
                  </span>
                  <h3 className="text-[20px] sm:text-[24px] font-extrabold tracking-tight text-white mt-3">
                    More industries onboarding soon.
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/70">
                    We are actively verifying local agencies, licensed
                    contractors, and specialized companies across Trivandrum to
                    join our 60-minute dispatch network.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 min-w-0 lg:min-w-[440px]">
                  {[
                    { label: "Home Nurses", icon: "nurse" },
                    { label: "Construction Co.", icon: "construction" },
                    { label: "Builders & Arch.", icon: "builder" },
                    { label: "Interior Design", icon: "interior" },
                    { label: "Facility Care", icon: "facility" },
                    { label: "Security & CCTV", icon: "security" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 text-[12px] font-semibold text-white/90 backdrop-blur-xs transition-colors hover:bg-white/10"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-brand">
                        <UpcomingIcon type={item.icon} />
                      </span>
                      <span className="leading-tight">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §3.5  HOW IT WORKS — #how-it-works — dark
      ══════════════════════════════════════════ */}
      <section
        id="how-it-works"
        className="scroll-mt-20 bg-ink py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="wrap flex flex-col gap-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left copy */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <Reveal>
                <span className="section-label-dark">How It Works</span>
                <h2 className="t-h2 mt-3 max-w-[540px]">
                  Every Specialist owns a{" "}
                  <span className="text-brand">10 km zone.</span>
                </h2>
                <p className="t-lede mt-3.5 max-w-[500px] text-white/60 leading-relaxed">
                  Zones overlap, so as more Specialists join, the whole city is
                  covered. Nobody travels more than 10 km, so 60 minutes stays
                  real.
                </p>

                <div className="mt-4 flex items-center gap-3.5 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 max-w-[420px]">
                  <PulseDot />
                  <p className="text-[13px] text-white/70 font-medium">
                    Each dot = a Specialist&apos;s 10 km zone, active in real
                    time.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right illustration */}
            <div className="lg:col-span-6">
              <Reveal delay={0.15}>
                <ZoneIllustration />
              </Reveal>
            </div>
          </div>

          <StepsTimeline />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §3.6  WHY NEARWALEY — #why-nearwaley — light
      ══════════════════════════════════════════ */}
      <section
        id="why-nearwaley"
        className="scroll-mt-20 bg-paper py-16 sm:py-20 lg:py-24"
      >
        <div className="wrap">
          <Reveal className="mb-12">
            <span className="section-label">Why Nearwaley</span>
            <h2 className="t-h2 mt-4">Our 6 promises.</h2>
          </Reveal>

          {/* 6 promises grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                type: "clock",
                title: "Help in 60 minutes",
                detail: "Or 20% off your bill. Guaranteed SLA dispatch.",
                tag: "60-Min Guarantee",
              },
              {
                type: "radar",
                title: "See who's free now",
                detail: "Real-time Specialist availability. No calling around.",
                tag: "Live Tracking",
              },
              {
                type: "tag",
                title: "Price before you book",
                detail: "Transparent upfront pricing. No hidden platform fee, ever.",
                tag: "Upfront Cost",
              },
              {
                type: "shield",
                title: "Safe at your door",
                detail: "Specialist photo, rating & OTP start code before work begins.",
                tag: "100% Verified",
              },
              {
                type: "wrench",
                title: "Genuine parts + re-fix",
                detail: "Itemized bills for every part. Free 7-day re-fix warranty.",
                tag: "7-Day Warranty",
              },
              {
                type: "heart",
                title: "Book for your parents",
                detail: "Order from anywhere — Gulf, US or UK. Direct updates to WhatsApp.",
                tag: "NRI & Remote",
              },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 sm:p-7 border border-grey-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_12px_32px_rgba(225,6,0,0.08)] h-full">
                  {/* Accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:shadow-md">
                        {p.type === "clock" && (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        )}
                        {p.type === "radar" && (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                        {p.type === "tag" && (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M12 2H2v10l11 11 10-10L12 2z" />
                            <circle cx="7" cy="7" r="1.5" />
                          </svg>
                        )}
                        {p.type === "shield" && (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                        )}
                        {p.type === "wrench" && (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                          </svg>
                        )}
                        {p.type === "heart" && (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                          </svg>
                        )}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand-tint/80 px-2.5 py-1 rounded-full border border-brand/10">
                        {p.tag}
                      </span>
                    </div>
                    <h3 className="text-[16px] font-bold text-ink group-hover:text-brand transition-colors tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-grey-600">
                      {p.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Brand pillars */}
          <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
            {[
              { label: "Speed", detail: "60 minutes or 20% off" },
              { label: "Trust", detail: "Verified, rated, start code" },
              { label: "Fair Price", detail: "Price upfront, no fees" },
              { label: "Local", detail: "Malayalam, your town" },
            ].map((pillar) => (
              <div
                key={pillar.label}
                className="flex items-center gap-2.5 rounded-full bg-brand-tint px-4 py-2.5 ring-1 ring-brand/15"
              >
                <span className="text-[13px] font-bold text-brand">
                  {pillar.label}
                </span>
                <span className="text-[12px] text-grey-600">
                  · {pillar.detail}
                </span>
              </div>
            ))}
          </Reveal>

          {/* ── Compare table ── */}
          <Reveal delay={0.08} className="mt-16">
            <h2 className="t-h2 mb-3">
              The only one of its kind in Trivandrum.
            </h2>
            <p className="mb-8 text-[15px] text-grey-600">
              We have no direct competitor in TVM. Here&apos;s why.
            </p>
            <div className="overflow-x-auto">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th className="w-[220px]">Feature</th>
                    <th>National apps</th>
                    <th>Local contacts</th>
                    <th className="col-us">Nearwaley</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      row: "60-min hyperlocal in TVM",
                      nat: false,
                      local: false,
                      us: "✓ Only us",
                    },
                    {
                      row: "What workers pay",
                      nat: "20–30% commission",
                      local: "Nothing",
                      us: "₹149/day, 0% commission",
                    },
                    {
                      row: "How you book",
                      nat: "App, fixed menu",
                      local: "Phone calls",
                      us: "See who's free right now",
                    },
                    {
                      row: "Verified workers",
                      nat: true,
                      local: "Only if you know them",
                      us: "Yes + 60 min or 20% off",
                    },
                    {
                      row: "Malayalam & local-first",
                      nat: "Partly",
                      local: true,
                      us: "Yes",
                    },
                  ].map((r) => (
                    <tr key={r.row}>
                      <td className="font-medium text-ink">{r.row}</td>
                      <td className="text-grey-600">
                        {r.nat === false ? (
                          <Cross />
                        ) : r.nat === true ? (
                          <Check />
                        ) : (
                          r.nat
                        )}
                      </td>
                      <td className="text-grey-600">
                        {r.local === false ? (
                          <Cross />
                        ) : r.local === true ? (
                          <Check />
                        ) : (
                          r.local
                        )}
                      </td>
                      <td className="col-us font-semibold">{r.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-[14px] text-grey-600">
              Our edge is speed, local trust and zero commission for
              Specialists. Others can copy an app. They can&apos;t copy local
              Specialists who earn more with us.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §3.7  WHO WE SERVE — light (below compare)
      ══════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="wrap">
          <Reveal>
            <h2 className="t-h2 mb-10">Built for the way Trivandrum lives.</h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "💻",
                title: "IT Professionals",
                desc: "Busy, new to the area, no local contacts.",
              },
              {
                icon: "🏢",
                title: "Apartment Families",
                desc: "Many homes in one place, repeat jobs.",
              },
              {
                icon: "✈️",
                title: "NRI Parents",
                desc: "Living alone; their children book from abroad.",
              },
              {
                icon: "🏪",
                title: "Small Businesses",
                desc: "A breakdown costs them sales.",
              },
            ].map((a, i) => (
              <Reveal key={a.title} delay={i * 0.07}>
                <div className="card h-full text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-tint text-2xl">
                    {a.icon}
                  </div>
                  <h3 className="t-h3 mb-2">{a.title}</h3>
                  <p className="t-body text-grey-600">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Feature band */}
          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-wrap items-center gap-6 rounded-2xl bg-brand-tint px-7 py-6 ring-1 ring-brand/15">
              <div className="text-3xl">🌏</div>
              <div>
                <p className="text-[16px] font-semibold text-ink">
                  &ldquo;Book for your parents from abroad.&rdquo;
                </p>
                <p className="mt-1 text-[14px] text-grey-600">
                  With 2.2 million Keralites abroad, families in the Gulf can
                  book trusted help for their parents in a few taps.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §3.8  FOR SPECIALISTS — #specialists — dark
      ══════════════════════════════════════════ */}
      <section
        id="specialists"
        className="scroll-mt-20 bg-ink py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="wrap">
          <div className="relative z-10 flex flex-wrap items-start gap-16">
            {/* Left */}
            <div className="flex min-w-0 w-full flex-none lg:w-1/2 lg:flex-1 flex-col gap-6">
              <Reveal>
                <span className="section-label-dark">For Specialists</span>
                <h2 className="t-h2 mt-4">Keep 100% of every job.</h2>
                <p className="t-lede mt-4 text-white/60 max-w-[460px]">
                  We don&apos;t take a commission. You pay a small ₹149 day
                  pass, and every rupee you earn on the job is yours.
                </p>
                <p className="mt-3 text-[15px] font-semibold text-brand">
                  The first 50 Specialists join free.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-2xl bg-ink-2 p-6 ring-1 ring-white/8">
                  <p className="text-[12px] font-semibold uppercase tracking-widest text-white/40">
                    Joining
                  </p>
                  <p className="mt-2 text-[15px] text-white/70">
                    ₹1,500 joining fee covers your uniform and tool kit. You get{" "}
                    <strong className="text-white">
                      ₹1,000 back after 7 jobs.
                    </strong>
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15} className="flex flex-wrap gap-3">
                <a
                  href={whatsappLink(
                    "Hi Nearwaley! I'd like to join as a Specialist.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill pill-red"
                >
                  Join as a Specialist
                </a>
                <a
                  href={whatsappLink(
                    "Hi Nearwaley! I want to learn more about joining.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill pill-outline-white"
                >
                  WhatsApp us
                </a>
              </Reveal>
            </div>

            {/* Right: 4 benefit cards */}
            <div className="grid min-w-0 w-full flex-none lg:w-5/12 lg:flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  icon: "🏆",
                  title: "Priority jobs",
                  desc: "8 hours online, 4+ jobs and 0 cancellations means you're shown first the next day.",
                },
                {
                  icon: "🎁",
                  title: "8th day free",
                  desc: "Meet the daily rule 7 days in a row and your 8th day pass is free.",
                },
                {
                  icon: "🛡️",
                  title: "No job, no fee",
                  desc: "Zero jobs in 24 hours? Your next day is free.",
                },
                {
                  icon: "❤️",
                  title: "Health cover",
                  desc: "e-Shram registration from day 1. Nearwaley insurance after 720 jobs.",
                },
              ].map((b, i) => (
                <Reveal key={b.title} delay={i * 0.07}>
                  <div className="card-dark h-full">
                    <div className="mb-3 text-2xl">{b.icon}</div>
                    <h3 className="text-[16px] font-semibold text-white mb-2">
                      {b.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-white/50">
                      {b.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §3.10  OUR JOURNEY — #journey — dark → light
      ══════════════════════════════════════════ */}
      <section
        id="journey"
        className="scroll-mt-20 bg-ink py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="wrap flex flex-col gap-20">
          {/* A. The Opportunity */}
          <div>
            <Reveal>
              <span className="section-label-dark">Our Journey</span>
              <h2 className="t-h2 mt-4">The opportunity.</h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {[
                {
                  n: "₹5.1 lakh cr",
                  l: "India's home services market",
                  src: "Redseer, 2025",
                },
                {
                  n: "<1%",
                  l: "of it is booked online today",
                  src: "Redseer, 2025",
                },
                {
                  n: "~36 lakh",
                  l: "people in Trivandrum district",
                  src: "2026 estimate",
                },
                {
                  n: "~38 lakh",
                  l: "service jobs a year in the district",
                  src: "Our estimate",
                },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 0.07}>
                  <div className="card-dark text-center">
                    <p className="text-[clamp(26px,3vw,40px)] font-bold text-brand leading-none">
                      {s.n}
                    </p>
                    <p className="mt-2 text-[13px] text-white/60 leading-snug">
                      {s.l}
                    </p>
                    <p className="mt-1 text-[11px] text-white/25">{s.src}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[580px] text-[14px] text-white/50">
                About 90% of online home-services demand comes from India&apos;s
                8 biggest cities. Towns like ours are underserved, and
                that&apos;s where we start.
              </p>
            </Reveal>
          </div>

          {/* B. Demand table */}
          <Reveal>
            <h3 className="t-h3 mb-6 text-white">
              Trivandrum demand: where we start.
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-white/10 text-white/40 text-[12px] uppercase tracking-wider">
                    <th className="pb-3 pr-6 text-left font-semibold">
                      Service
                    </th>
                    <th className="pb-3 pr-6 text-left font-semibold">
                      Jobs a year (est.)
                    </th>
                    <th className="pb-3 text-left font-semibold">Our chance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/8">
                  {[
                    { svc: "Electricians", jobs: "9.1 lakh", chance: "High" },
                    { svc: "Plumbers", jobs: "7.3 lakh", chance: "High" },
                    {
                      svc: "AC & appliance repair",
                      jobs: "9.1 lakh",
                      chance: "High",
                    },
                    {
                      svc: "House cleaning",
                      jobs: "9.1 lakh",
                      chance: "Medium",
                    },
                    { svc: "Carpenters", jobs: "3.6 lakh", chance: "Medium" },
                  ].map((r) => (
                    <tr key={r.svc}>
                      <td className="py-3 pr-6 text-white">{r.svc}</td>
                      <td className="py-3 pr-6 text-white/60">{r.jobs}</td>
                      <td
                        className={`py-3 font-semibold ${r.chance === "High" ? "text-brand" : "text-white/50"}`}
                      >
                        {r.chance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-[13px] text-white/40">
              Even 1% of these jobs is about 38,000 jobs a year.
            </p>
          </Reveal>

          {/* C. How We Grow */}
          <Reveal>
            <h3 className="t-h3 mb-6 text-white">How we grow.</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  stage: "1 · Trivandrum",
                  rev: "₹9.3 lakh",
                  specialists: "250",
                  customers: "25,000",
                  active: true,
                },
                {
                  stage: "2 · + Kochi",
                  rev: "₹37 lakh",
                  specialists: "1,000",
                  customers: "1 lakh",
                  active: false,
                },
                {
                  stage: "3 · Kerala Tier 2",
                  rev: "₹1.9 crore",
                  specialists: "5,000",
                  customers: "5 lakh",
                  active: false,
                },
                {
                  stage: "4 · South India",
                  rev: "₹9.3 crore",
                  specialists: "25,000",
                  customers: "25 lakh",
                  active: false,
                },
              ].map((s, i) => (
                <Reveal key={s.stage} delay={i * 0.07}>
                  <div
                    className={`card-dark relative overflow-hidden ${s.active ? "ring-brand/40 ring-2" : ""}`}
                  >
                    {s.active && (
                      <span className="absolute right-4 top-4 rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold text-white">
                        Live
                      </span>
                    )}
                    <p className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-3">
                      {s.stage}
                    </p>
                    <p className="text-[clamp(22px,2vw,28px)] font-bold text-brand">
                      {s.rev}
                    </p>
                    <p className="text-[11px] text-white/30 mt-1">
                      monthly revenue
                    </p>
                    <div className="mt-4 flex gap-4">
                      <div>
                        <p className="text-[14px] font-semibold text-white">
                          {s.specialists}
                        </p>
                        <p className="text-[11px] text-white/40">Specialists</p>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-white">
                          {s.customers}
                        </p>
                        <p className="text-[11px] text-white/40">Customers</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-5 text-[12px] text-white/25">
              Monthly revenue = active Specialists × ₹149 × 25 working days.
              Illustrative growth stages.
            </p>
          </Reveal>

          {/* D. Roadmap */}
          <Reveal>
            <h3 className="t-h3 mb-6 text-white">Roadmap.</h3>
            <div className="flex flex-col gap-0 sm:flex-row">
              {[
                {
                  city: "Trivandrum",
                  sub: "Launch city (live now)",
                  active: true,
                },
                {
                  city: "Kochi",
                  sub: "Kerala's commercial capital",
                  active: false,
                },
                {
                  city: "Kozhikode, Thrissur, Kollam",
                  sub: "All of Kerala's Tier 2 cities",
                  active: false,
                },
                {
                  city: "Tier 2 & 3 India",
                  sub: "South India first, then nationwide",
                  active: false,
                },
              ].map((r, i) => (
                <div
                  key={r.city}
                  className="flex flex-[1] flex-col sm:border-l sm:first:border-l-0 border-white/10 sm:pl-6 first:pl-0 pb-8 sm:pb-0"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`h-3 w-3 rounded-full shrink-0 ${r.active ? "bg-brand" : "bg-white/20"}`}
                    />
                    <span className="text-[12px] font-bold text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p
                    className={`text-[15px] font-semibold ${r.active ? "text-white" : "text-white/50"}`}
                  >
                    {r.city}
                  </p>
                  <p className="text-[12px] text-white/30 mt-1">{r.sub}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-[580px] text-[13px] text-white/40">
              Gate: We open a new city only when our Specialists average 2 jobs
              a day, 90% of jobs arrive within 60 minutes and ratings stay above
              4.5★.
            </p>
            <p className="mt-4 text-[14px] font-semibold text-white/60 italic">
              Vision: Within 5 years, the leading home-services company in
              India&apos;s Tier 2 and Tier 3 cities.
            </p>
          </Reveal>

          {/* E. Why We'll Win */}
          <Reveal>
            <h3 className="t-h3 mb-6 text-white">Why we&apos;ll win.</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  icon: "⚖️",
                  title: "Fair, simple model",
                  desc: "A small daily pass, and Specialists keep 100%.",
                },
                {
                  icon: "🛠️",
                  title: "Working product",
                  desc: "Customer, Specialist and admin apps are built and tested end to end.",
                },
                {
                  icon: "📦",
                  title: "Lean costs",
                  desc: "No stock and no field staff on payroll. Parts come from partner shops.",
                },
                {
                  icon: "🔒",
                  title: "Hard to copy",
                  desc: "Zero commission would cut a big rival's income, and local trust takes years to build.",
                },
              ].map((w, i) => (
                <Reveal key={w.title} delay={i * 0.07}>
                  <div className="card-dark">
                    <div className="mb-3 text-2xl">{w.icon}</div>
                    <h4 className="text-[15px] font-semibold text-white mb-2">
                      {w.title}
                    </h4>
                    <p className="text-[13px] text-white/50 leading-relaxed">
                      {w.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §3.10  BRAND STORY & PROMISE — light
      ══════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24 border-t border-grey-200">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Brand Lockup Showcase & Guarantee Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <Reveal className="w-full">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink to-ink-soft p-8 sm:p-9 text-white shadow-2xl ring-1 ring-white/10">
                  {/* Subtle radial glow */}
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full opacity-30 blur-2xl"
                    style={{
                      background:
                        "radial-gradient(circle, #E10600 0%, transparent 70%)",
                    }}
                  />

                  {/* Brand Tagline Badge */}
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                    Official Brand Tagline
                  </div>

                  {/* Lockup Image */}
                  <div className="my-4 flex items-center justify-center rounded-2xl bg-white p-5 shadow-inner">
                    <Image
                      src="/brand/nearwaley-lockup.png"
                      alt="Nearwaley — Never wait for help again"
                      width={280}
                      height={90}
                      className="h-auto w-full max-w-[220px] object-contain"
                      priority
                    />
                  </div>

                  <p className="mt-4 text-[17px] sm:text-[19px] font-extrabold text-white tracking-tight text-center">
                    &ldquo;Never wait for help again.&rdquo;
                  </p>

                  {/* 60 Min Guarantee Pill Box */}
                  <div className="mt-6 rounded-2xl bg-brand/20 border border-brand/40 p-4 backdrop-blur-xs">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white text-[16px] font-black shadow-md">
                        60m
                      </span>
                      <div>
                        <h4 className="text-[13px] font-extrabold text-white uppercase tracking-wider">
                          60-Min Arrival Guarantee
                        </h4>
                        <p className="mt-0.5 text-[12px] font-medium text-white/80 leading-snug">
                          At your door in 60 mins. If not, pay only{" "}
                          <strong className="text-white font-black">80%</strong>{" "}
                          —{" "}
                          <span className="text-brand-light font-bold">
                            20% OFF
                          </span>{" "}
                          applied instantly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Story behind logo & Promise */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Reveal>
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Our Story &amp; Promise
                </span>
                <h2 className="t-h2 font-extrabold tracking-tight text-ink">
                  The story behind our logo{" "}
                  <span className="gradient-text bg-gradient-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent">
                    &amp; promise.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                  <div className="rounded-2xl bg-paper p-5 ring-1 ring-black/5 hover:ring-brand/30 transition-all hover:-translate-y-0.5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand font-bold text-[16px]">
                      🤝
                    </div>
                    <h3 className="text-[15px] font-bold text-ink">
                      Need meets skill
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-grey-600">
                      Two arms: one reaches out from a customer who needs urgent
                      help, the other from a skilled Specialist nearby.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-paper p-5 ring-1 ring-black/5 hover:ring-brand/30 transition-all hover:-translate-y-0.5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand font-bold text-[16px]">
                      ⚡
                    </div>
                    <h3 className="text-[15px] font-bold text-ink">
                      One handshake
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-grey-600">
                      Together they form the iconic{" "}
                      <strong className="text-brand">N</strong> mark — the exact
                      moment help is delivered.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-paper p-5 ring-1 ring-black/5 hover:ring-brand/30 transition-all hover:-translate-y-0.5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand font-bold text-[16px]">
                      🔴
                    </div>
                    <h3 className="text-[15px] font-bold text-ink">
                      Signal Red
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-grey-600">
                      Energy, trust, and urgency for local help that arrives
                      fast when every minute matters.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-2 rounded-2xl bg-brand-tint/60 border border-brand/20 p-5 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white font-black text-[15px] shadow-sm">
                    20%
                  </div>
                  <div>
                    <h4 className="text-[14px] font-extrabold text-ink">
                      Our Customer Guarantee: 60 Mins or 20% Off
                    </h4>
                    <p className="mt-1 text-[13px] leading-relaxed text-grey-600">
                      We value your time above all. If your Specialist does not
                      reach your doorstep within 60 minutes, your final bill
                      automatically gets a{" "}
                      <strong className="text-brand font-bold">
                        20% discount
                      </strong>{" "}
                      — you pay only 80%.
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-[13px] font-semibold text-grey-600">
                  Nearwaley:{" "}
                  <span className="italic font-normal text-grey-600">
                    &ldquo;the ones near you.&rdquo;
                  </span>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §3.11  FAQ — light — #faq
      ══════════════════════════════════════════ */}
      <section
        id="faq"
        className="scroll-mt-20 bg-white py-16 sm:py-24 lg:py-28 border-t border-grey-200"
      >
        <div className="wrap">
          <Reveal className="mb-10 sm:mb-12 max-w-[760px] mx-auto text-center">
            <span className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              Support Center
            </span>
            <h2 className="t-h2 font-extrabold tracking-tight text-ink text-[clamp(28px,3.5vw,46px)] text-center">
              Frequently Asked{" "}
              <span className="gradient-text bg-gradient-to-r from-brand via-brand-dark to-brand bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="mt-3.5 max-w-[520px] mx-auto text-center text-[14px] sm:text-[15px] font-medium text-grey-600 leading-relaxed">
              Get instant, transparent answers about Nearwaley&apos;s 60-minute dispatch network, verified Specialists, and guarantee terms.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3 border-b border-grey-200 pb-4 text-[11px] sm:text-[12px] font-semibold text-grey-500 uppercase tracking-widest text-center">
              <span>Hyperlocal Operations — FAQ</span>
              <span className="hidden sm:inline-block">·</span>
              <span className="hidden sm:inline-block">Click any question to expand</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-[880px] mx-auto">
              <FAQAccordion />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §3.12  FINAL CTA — red band
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand py-16 text-white sm:py-20 lg:py-24">
        {/* Red radial glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, #ffffff 0%, transparent 70%)",
          }}
        />
        <div className="wrap relative z-10 text-center">
          <Reveal>
            <h2 className="t-mega mb-4">Never wait for help again.</h2>
            <p className="t-lede mb-8 text-white/70 max-w-[520px] mx-auto">
              Book a verified Specialist near you, or join us and keep 100% of
              what you earn.
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/#services"
              className="pill pill-white text-brand hover:shadow-xl"
            >
              Book a Specialist
            </Link>
            <Link href="/#specialists" className="pill pill-outline-white">
              Join as a Specialist
            </Link>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-10 text-[13px] text-white/50">
              Nearwaley · Technopark, Thiruvananthapuram ·{" "}
              <a
                href={`tel:${site.phoneTel}`}
                className="font-semibold text-white/70 hover:text-white transition-colors"
              >
                {site.phoneDisplay}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
