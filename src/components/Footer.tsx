import Image from "next/image";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

const footerGroups = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/#journey", label: "Our Journey" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Customers",
    links: [
      { href: "/#services", label: "Services" },
      { href: "/#why-nearwaley", label: "Book for Parents" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Specialists",
    links: [
      { href: "/#specialists", label: "Join Us" },
      { href: "/#specialists", label: "Rewards" },
      { href: "/#specialists", label: "Health Cover" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-16 text-white sm:pb-10 sm:pt-20">
      <div className="wrap flex flex-col gap-16">
        {/* Top row */}
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="t-h2 max-w-[680px] !text-[clamp(24px,3.5vw,44px)]">
              Never wait for help again.
            </p>
            <p className="mt-3 text-[15px] text-white/50">
              Live now in Thiruvananthapuram — the first of its kind.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/#services" className="pill pill-red">
              Book a Specialist
            </Link>
            <Link href="/#specialists" className="pill pill-outline-white">
              Join as a Specialist
            </Link>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand col */}
          <div className="col-span-2 flex flex-col gap-5 md:col-span-1">
            <Link href="/" aria-label={`${site.name} home`}>
              <Image
                src="/brand/nearwaley-lockup.png"
                alt={site.name}
                width={1110}
                height={330}
                className="h-8 w-auto sm:h-9 brightness-0 invert"
              />
            </Link>
            <p className="max-w-[260px] text-[13px] leading-relaxed text-white/40">
              {site.address}
            </p>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-white hover:text-brand transition-colors group"
            >
              <svg
                className="h-4 w-4 text-brand shrink-0 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{site.phoneDisplay}</span>
            </a>
            <a
              href={whatsappLink("Hi Nearwaley!")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] text-white/60 hover:text-emerald-400 transition-colors group"
            >
              <svg
                className="h-4 w-4 text-emerald-500 shrink-0 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.5 9.5 0 0 1-4.84-1.32l-.35-.21-3.6.94.96-3.5-.23-.36a9.46 9.46 0 0 1-1.45-5.05c0-5.23 4.26-9.49 9.5-9.49a9.43 9.43 0 0 1 6.71 2.78 9.43 9.43 0 0 1 2.78 6.72c0 5.23-4.26 9.49-9.47 9.49zm8.08-17.57A11.35 11.35 0 0 0 12.04.5C5.74.5.62 5.62.62 11.92c0 2.01.53 3.98 1.53 5.71L.5 23.5l6.01-1.58a11.4 11.4 0 0 0 5.53 1.41h.01c6.3 0 11.42-5.12 11.42-11.42 0-3.05-1.19-5.92-3.35-8.08z" />
              </svg>
              <span>WhatsApp: {site.phoneDisplay}</span>
            </a>
            
            {/* Social Links Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white hover:-translate-y-0.5"
              >
                <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white hover:-translate-y-0.5"
              >
                <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link groups */}
          {footerGroups.map((g) => (
            <nav
              key={g.title}
              aria-label={g.title}
              className="flex flex-col gap-3"
            >
              <span className="eyebrow text-white/25">{g.title}</span>
              {g.links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-[13px] text-white/50 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-7 text-[13px] text-white/25">
          <span>© {new Date().getFullYear()} Nearwaley. All rights reserved.</span>
          <span className="italic">Never wait for help again.</span>
          <div className="flex items-center gap-2">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-brand transition-colors text-xs font-medium px-2 py-1"
            >
              Instagram
            </a>
            <span className="text-white/10">•</span>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-brand transition-colors text-xs font-medium px-2 py-1"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
