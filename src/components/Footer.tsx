import Image from "next/image";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

const groups = [
  {
    title: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/why-nearwaley", label: "Why Nearwaley" },
      { href: "/become-a-specialist", label: "Become a Specialist" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/investors", label: "Investors" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-24 text-white sm:pt-28">
      <div className="wrap flex flex-col gap-20">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <p className="t-h2 max-w-[820px]">
            Launching soon in <span className="text-brand-soft">Trivandrum.</span>
          </p>
          <Link href="/become-a-specialist#apply" className="pill pill-white">
            Become a Specialist
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <Image src="/brand/nearwaley-mark.png" alt="" width={52} height={52} className="rounded-[14px]" />
            <span className="max-w-[300px] text-[15px] leading-relaxed text-night-text">{site.address}</span>
            <a href={`tel:${site.phoneTel}`} className="text-lg font-semibold text-white">
              {site.phoneDisplay}
            </a>
          </div>

          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title} className="flex flex-col gap-3">
              <span className="eyebrow text-[#8f8282]">{g.title}</span>
              {g.links.map((l) => (
                <Link key={l.href} href={l.href} className="text-[15px] text-night-text transition-colors hover:text-white">
                  {l.label}
                </Link>
              ))}
            </nav>
          ))}

          <nav aria-label="Follow" className="flex flex-col gap-3">
            <span className="eyebrow text-[#8f8282]">Follow</span>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="text-[15px] text-night-text hover:text-white">Instagram</a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="text-[15px] text-night-text hover:text-white">Facebook</a>
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[15px] text-night-text hover:text-white">LinkedIn</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-[15px] text-night-text hover:text-white">WhatsApp</a>
          </nav>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-[#2e2323] pt-7 text-sm text-[#8f8282]">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Made in Kerala</span>
        </div>
      </div>
    </footer>
  );
}
