import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion";
import { LeadForm, type Field } from "@/components/LeadForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call or WhatsApp Nearwaley on ${site.phoneDisplay}, or visit us at ${site.address}.`,
  alternates: { canonical: "/contact" },
};

const fields: Field[] = [
  { kind: "choice", name: "role", label: "I am a", options: ["Customer", "Specialist", "Investor", "Agency", "Other"] },
  { kind: "text", name: "name", label: "Name", required: true },
  { kind: "tel", name: "phone", label: "Phone (WhatsApp)", placeholder: "+91", required: true },
  { kind: "textarea", name: "message", label: "How can we help?", rows: 4, required: true },
];

const audiences = [
  { t: "Customers", d: "Questions about our launch and services.", href: "/#follow", cta: "Follow for updates →" },
  { t: "Specialists", d: `The first ${site.freeSpots} Specialists join free.`, href: "/become-a-specialist#apply", cta: "Apply now →" },
  { t: "Investors", d: "Partnership and investment opportunities.", href: "/investors", cta: "Investor page →" },
  { t: "Agencies & press", d: "Partner agencies, media and everything else.", href: "#message", cta: "Write to us →" },
];

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  image: `${site.url}/brand/nearwaley-mark.png`,
  telephone: site.phoneTel,
  url: `${site.url}/contact`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Technopark Campus",
    addressLocality: "Thiruvananthapuram",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  areaServed: "Thiruvananthapuram",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk." accent={["talk."]}>
        <p className="t-lede max-w-[640px] text-muted">
          Customers, Specialists, partners and investors — we&apos;re a call or a message away, in Malayalam or English.
        </p>
      </PageHero>

      <section className="pb-24">
        <div className="wrap grid grid-cols-1 md:grid-cols-3">
          {[
            { k: "Call us", v: site.phoneDisplay, d: "Our business line.", href: `tel:${site.phoneTel}` },
            { k: "WhatsApp", v: "Chat with us →", d: "The fastest way to reach our team.", href: whatsappLink(), ext: true },
            { k: "Visit", v: site.address, d: "Open in Google Maps →", href: site.mapsUrl, ext: true, small: true },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 0.08}>
              <a
                href={c.href}
                {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex h-full flex-col gap-3.5 border-t-[1.5px] border-ink pb-11 pr-8 pt-9 transition-colors hover:text-brand"
              >
                <span className="eyebrow text-brand">{c.k}</span>
                <span
                  className={`font-bold tracking-[-0.04em] ${c.small ? "text-[clamp(24px,2.4vw,34px)] leading-[1.15]" : "text-[clamp(28px,3vw,44px)]"}`}
                >
                  {c.v}
                </span>
                <span className="t-body text-muted">{c.d}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-28">
        <div className="wrap">
          <h2 className="t-h3 mb-7">Who are you looking to reach?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <div key={a.t} className="flex flex-col gap-2.5 border-t border-line pb-9 pr-8 pt-7">
                <p className="text-[22px] font-semibold tracking-[-0.02em]">{a.t}</p>
                <p className="t-body text-muted">{a.d}</p>
                <Link href={a.href} className="mt-1.5 font-semibold text-brand">
                  {a.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="message" className="scroll-mt-24 bg-cream py-28 sm:py-36">
        <div className="wrap flex flex-wrap items-start gap-24">
          <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-6">
            <h2 className="t-h2">
              Send us a <span className="text-brand">message.</span>
            </h2>
            <p className="t-lede text-muted">We reply within one working day.</p>
          </div>
          <div className="min-w-0 flex-[1_1_600px]">
            <LeadForm
              type="Contact message"
              fields={fields}
              submitLabel="Send message"
              success={{ eyebrow: "Message received", title: "Thank you. We'll be in touch.", body: "We'll reply within one working day." }}
            />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
