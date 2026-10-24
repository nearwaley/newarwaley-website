import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion";
import { LeadForm, type Field } from "@/components/LeadForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Be an investor at Nearwaley — the hyperlocal home services network for India's Tier 2 and Tier 3 towns, launching soon in Trivandrum.",
  alternates: { canonical: "/investors" },
};

const stats = [
  ["₹5.1 lakh cr", "spent on home services in India every year."],
  [
    "22 lakh",
    "Keralites living abroad, many with homes and parents back here.",
  ],
  ["22.8%", "of Keralites projected to be 60+ by 2035, needing help at home."],
];

const thesis = [
  [
    "Underserved towns",
    "National platforms focus on metros. Families in growing towns still find help through phone calls and neighbours.",
  ],
  [
    "An open skill network",
    "Any skilled local worker can join once verified — supply grows with the town, not with a training centre.",
  ],
  [
    "Density is the moat",
    "Every completed job adds local reviews and response data, ward by ward. That record is hard to copy and grows with time.",
  ],
  [
    "Asset-light",
    "No stock, no vans, no salaried workforce. Revenue begins with the first booking.",
  ],
];

const progress = [
  ["Working prototype — customer, Specialist and admin apps", "Done", true],
  ["Brand, market research and launch plan", "Done", true],
  ["1st place, Brand Expo 2026", "Sep 2026", true],
  ["Specialist onboarding in Trivandrum", "Now", true],
  ["Trivandrum launch", "Coming soon", false],
  ["Scale to Tier 2 & Tier 3 towns across India", "Next", false],
] as const;

const fields: Field[] = [
  { kind: "text", name: "name", label: "Name", required: true },
  { kind: "text", name: "organisation", label: "Fund or organisation" },
  { kind: "email", name: "email", label: "Email", required: true },
  { kind: "tel", name: "phone", label: "Phone", placeholder: "+91" },
  {
    kind: "textarea",
    name: "message",
    label: "Message",
    placeholder: "Tell us a little about your interest",
  },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Be an investor at Nearwaley"
        title="The next big platform will be built in small towns."
        accent={["small", "towns."]}
      >
        <div className="flex flex-wrap items-end gap-10">
          <p className="t-lede min-w-0 max-w-[680px] flex-[1_1_560px] text-muted">
            Nearwaley is building the hyperlocal network that connects
            households in India&apos;s Tier 2 and Tier 3 towns with verified
            skilled workers nearby. We launch in Trivandrum soon, and our goal
            is clear: within five years, to be India&apos;s leading home
            services company across these towns.
          </p>
          <a href="#connect" className="pill pill-red">
            Connect with us
          </a>
        </div>
      </PageHero>

      <section className="bg-ink py-14 text-white sm:py-20 lg:py-28">
        <div className="wrap flex flex-col gap-16">
          <Reveal>
            <h2 className="t-h2 max-w-[900px]">
              A large market,{" "}
              <span className="text-brand-soft">still offline.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {stats.map(([n, d], i) => (
              <Reveal
                key={n}
                delay={i * 0.1}
                className="border-t-[1.5px] border-white pb-6 pr-8 pt-8"
              >
                <div className="text-[clamp(28px,3.8vw,56px)] font-bold leading-none tracking-[-0.05em]">
                  {n}
                </div>
                <p className="t-body mt-4 max-w-[320px] text-night-text">{d}</p>
              </Reveal>
            ))}
          </div>
          <p className="text-sm text-[#8f8282]">
            Sources: Redseer via Business Standard (Sep 2025); Kerala Migration
            Survey 2023; Kerala ageing projection via Onmanorama.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="wrap">
          <div className="flex flex-wrap items-end gap-16 pb-10">
            <Reveal className="min-w-0 flex-[1_1_600px]">
              <h2 className="t-h2">
                Why <span className="text-brand">Nearwaley.</span>
              </h2>
            </Reveal>
            <p className="t-lede min-w-0 flex-[1_1_360px] text-muted">
              Four reasons we believe this network compounds.
            </p>
          </div>
          <div className="border-b border-line">
            {thesis.map(([t, d], i) => (
              <Reveal
                key={t}
                className="grid grid-cols-[48px_1fr] items-baseline gap-x-8 gap-y-2 border-t border-line py-10 md:grid-cols-[80px_1fr_1.4fr]"
              >
                <span className="text-[clamp(24px,3vw,36px)] font-bold leading-none tracking-[-0.05em] text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="t-h3">{t}</h3>
                <p className="t-body col-span-2 text-muted md:col-span-1">
                  {d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 sm:py-20 lg:py-28">
        <div className="wrap flex flex-wrap items-start gap-16">
          <Reveal className="flex min-w-0 flex-[1_1_440px] flex-col gap-6">
            <p className="eyebrow text-brand">Where we are</p>
            <h2 className="t-h2">
              Built, tested,{" "}
              <span className="text-brand">ready to launch.</span>
            </h2>
          </Reveal>
          <ul className="min-w-0 flex-[1_1_520px] border-b border-line">
            {progress.map(([t, s, done]) => (
              <li
                key={t}
                className="flex justify-between gap-6 border-t border-line py-4 text-[14px] sm:text-[15px]"
              >
                <span>{t}</span>
                <span
                  className={`whitespace-nowrap font-semibold ${done ? "text-brand" : "text-subtle"}`}
                >
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="connect" className="scroll-mt-24 py-14 sm:py-20 lg:py-28">
        <div className="wrap flex flex-wrap items-start gap-24">
          <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-7">
            <p className="eyebrow text-brand">You have an opportunity</p>
            <h2 className="t-h2">
              Let&apos;s build it <span className="text-brand">together.</span>
            </h2>
            <p className="t-lede text-muted">
              Angel investors, funds, incubators and strategic partners — share
              a few details and our founder will reach out with our deck.
            </p>
            <div className="mt-3 border-b border-line">
              <a
                href={`tel:${site.phoneTel}`}
                className="flex justify-between border-t border-line py-4 text-[14px] font-semibold sm:text-[15px]"
              >
                <span>{site.phoneDisplay}</span>
                <span className="text-brand">Call →</span>
              </a>
              <a
                href={whatsappLink(
                  "Hi Nearwaley! I'm interested in investing.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between border-t border-line py-4 text-[14px] font-semibold sm:text-[15px]"
              >
                <span>WhatsApp</span>
                <span className="text-brand">Chat →</span>
              </a>
            </div>
          </div>
          <div className="min-w-0 flex-[1_1_560px]">
            <LeadForm
              type="Investor enquiry"
              fields={fields}
              submitLabel="Request our deck"
              success={{
                eyebrow: "Thank you",
                title: "We'll be in touch shortly.",
                body: "Our founder will reach out with our deck and next steps.",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
