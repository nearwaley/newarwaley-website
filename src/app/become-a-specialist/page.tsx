import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm, type Field } from "@/components/LeadForm";
import { Reveal, SplitHeadline } from "@/components/motion";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Become a Specialist",
  description: `Join Nearwaley as a Specialist in Trivandrum. Free skill check, verified profile and a complete welcome kit — the first ${site.freeSpots} join free.`,
  alternates: { canonical: "/become-a-specialist" },
};

const fields: Field[] = [
  { kind: "text", name: "name", label: "Full name", placeholder: "Your name", required: true },
  { kind: "tel", name: "phone", label: "Mobile (WhatsApp)", placeholder: "+91", required: true },
  {
    kind: "select",
    name: "skill",
    label: "Your skill",
    options: ["Plumber", "Electrician", "AC technician", "Fridge technician", "Washing machine technician", "Carpenter", "Home nurse", "Home cleaning", "Other"],
  },
  { kind: "select", name: "experience", label: "Experience", options: ["Less than 1 year", "1 – 3 years", "3 – 5 years", "5 – 10 years", "10+ years"] },
  { kind: "text", name: "area", label: "Area you work in", placeholder: "e.g. Kazhakkoottam" },
  { kind: "select", name: "agency", label: "Do you work with an agency?", options: ["No", "Yes"] },
];

const benefits = [
  ["Free skill check", "A practical test of your trade by our team — proof of what you can do."],
  ["Verified profile", "Your own Nearwaley profile with your skills, badge and ratings."],
  ["Complete welcome kit", "Uniform, bag and work essentials, so you look professional from day one."],
  ["Jobs near home", "Requests from homes close to you, from the day we launch."],
];

const steps = [
  ["Apply", "Fill the form above or message us on WhatsApp."],
  ["Skill check", "We verify your ID and test your skills in person."],
  ["Profile & kit", "We create your verified profile and hand you your welcome kit."],
  ["Go live at launch", "Switch on the Nw Expert app and start receiving jobs near you."],
];

const faqs = [
  ["Is joining free?", `For our first ${site.freeSpots} Specialists in Trivandrum, yes — the skill check, profile and welcome kit cost nothing.`],
  [
    `What happens after the first ${site.freeSpots}?`,
    `There's a one-time ${site.onboardingFee} onboarding fee that covers your welcome kit. You get the full ${site.onboardingFee} back as cashback after your ${site.cashbackAfterJobs}th completed job.`,
  ],
  ["Who can apply?", "Plumbers, electricians, AC and appliance technicians, carpenters, home nurses and cleaners working in and around Trivandrum."],
  ["Do I need a smartphone?", "Yes — any Android phone with WhatsApp. We'll help you set up the Nw Expert app."],
  ["I work with an agency. Can I still join?", "Yes. Agencies can also bring their whole team — talk to us on the contact page."],
];

export default function SpecialistPage() {
  return (
    <>
      <section className="bg-brand pb-28 pt-20 text-white sm:pt-24">
        <div className="wrap flex flex-wrap items-start gap-20">
          <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-9">
            <Reveal>
              <p className="eyebrow text-[#ffd3d7]">Now onboarding · Trivandrum</p>
            </Reveal>
            <SplitHeadline text="Become a Nearwaley Specialist." className="t-mega !text-[clamp(46px,7.6vw,124px)]" />
            <Reveal delay={0.3}>
              <p className="t-lede max-w-[560px] text-blush">
                We&apos;re onboarding skilled Specialists in Trivandrum — plumbers, electricians, technicians and more.
                We&apos;ll check your skills, build your verified profile and give you a full welcome kit. The first{" "}
                {site.freeSpots} join completely free.
              </p>
            </Reveal>
            <Reveal delay={0.45} className="flex items-baseline gap-5 border-t border-white/35 pt-7">
              <span className="text-[clamp(72px,9vw,128px)] font-bold leading-[0.9] tracking-[-0.06em]">{site.freeSpots}</span>
              <span className="text-xl font-medium leading-snug text-blush">
                founding spots, free.
                <br />
                After that, {site.onboardingFee} — returned after {site.cashbackAfterJobs} jobs.
              </span>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="min-w-0 flex-[1_1_440px] scroll-mt-28" as="div">
            <div id="apply" className="scroll-mt-28">
              <p className="t-h3 mb-8">Apply for a spot</p>
              <LeadForm
                tone="red"
                type="Specialist application"
                fields={fields}
                submitLabel="Apply now"
                note="Our team will call you to arrange your skill check."
                success={{
                  eyebrow: "Application received",
                  title: "Welcome aboard. We'll call you soon.",
                  body: "Our team will reach you on the number you shared to schedule your skill check.",
                }}
              />
              <a
                href={whatsappLink("Hi Nearwaley! I'd like to join as a Specialist.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-[15px] font-semibold text-white underline underline-offset-4"
              >
                Prefer WhatsApp? Apply there →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-28 sm:py-32">
        <div className="wrap flex flex-col gap-16">
          <div className="flex flex-wrap items-end gap-16">
            <Reveal className="min-w-0 flex-[1_1_620px]">
              <h2 className="t-h2">
                Everything you need. <span className="text-brand">Free for the first {site.freeSpots}.</span>
              </h2>
            </Reveal>
            <p className="t-lede min-w-0 flex-[1_1_360px] text-muted">
              After the first {site.freeSpots}, a {site.onboardingFee} onboarding fee covers your kit — and comes back to
              you in full as cashback after your {site.cashbackAfterJobs}th completed job.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08} className="flex flex-col gap-3 border-t-[1.5px] border-ink pb-8 pr-7 pt-7">
                <span className="text-[40px] font-bold leading-none tracking-[-0.05em] text-brand">{String(i + 1).padStart(2, "0")}</span>
                <p className="t-h3">{t}</p>
                <p className="t-body text-muted">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-28 text-white sm:py-32">
        <div className="wrap flex flex-col gap-12">
          <p className="eyebrow text-brand-soft">Your welcome kit</p>
          <Reveal className="flex flex-wrap gap-x-10 gap-y-3 text-[clamp(24px,2.8vw,40px)] font-bold tracking-[-0.04em]">
            {["Nearwaley uniform", "Work bag", "Work essentials", "Specialist ID", "Welcome pack"].map((k, i, a) => (
              <span key={k} className="flex gap-10">
                {k}
                {i < a.length - 1 && <span className="text-brand-soft">·</span>}
              </span>
            ))}
          </Reveal>
          <p className="t-lede max-w-[640px] text-night-text">
            When you walk into a home wearing Nearwaley red, families know you&apos;re verified, skilled and trusted.
          </p>
        </div>
      </section>

      <section className="bg-cream py-28 sm:py-32">
        <div className="wrap">
          <div className="flex flex-wrap items-end gap-16 pb-10">
            <Reveal className="min-w-0 flex-[1_1_600px]">
              <h2 className="t-h2">
                How to <span className="text-brand">join.</span>
              </h2>
            </Reveal>
            <p className="t-lede min-w-0 flex-[1_1_360px] text-muted">
              Any trade. ITI-trained or self-taught. What matters is the work you can show us.
            </p>
          </div>
          <ol className="border-b border-line">
            {steps.map(([t, d], i) => (
              <Reveal
                as="li"
                key={t}
                className="grid grid-cols-[48px_1fr] items-baseline gap-x-8 gap-y-2 border-t border-line py-9 md:grid-cols-[80px_1fr_1.4fr]"
              >
                <span className="text-[40px] font-bold leading-none tracking-[-0.05em] text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3">{t}</h3>
                <p className="t-body col-span-2 text-muted md:col-span-1">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-28 sm:py-32">
        <div className="wrap flex flex-wrap items-start gap-20">
          <h2 className="t-h2 min-w-0 flex-[1_1_360px] !text-[clamp(34px,4.4vw,64px)]">
            Common <span className="text-brand">questions.</span>
          </h2>
          <div className="min-w-0 flex-[1_1_620px] border-b border-line">
            {faqs.map(([q, a], i) => (
              <details key={q} open={i === 0} className="group border-t border-line py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[21px] font-semibold tracking-[-0.02em] [&::-webkit-details-marker]:hidden">
                  {q}
                  <span aria-hidden="true" className="text-2xl text-brand transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="t-body mt-3.5 text-muted">{a}</p>
              </details>
            ))}
            <p className="t-body border-t border-line py-6 text-muted">
              More questions? Call or WhatsApp{" "}
              <a href={`tel:${site.phoneTel}`} className="font-semibold text-brand">
                {site.phoneDisplay}
              </a>
              , or <Link href="/contact" className="font-semibold text-brand">contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
