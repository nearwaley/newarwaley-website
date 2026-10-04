"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  // The menu remembers which page it was opened on, so it closes itself on navigation
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  // Lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-brand">
      <div className="wrap flex h-[72px] items-center justify-between gap-6 sm:h-[76px]">
        <Link href="/" aria-label={`${site.name} home`} className="block shrink-0">
          <Image
            src="/brand/nearwaley-lockup.png"
            alt={site.name}
            width={1110}
            height={330}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[15px] font-medium text-white transition-opacity hover:opacity-100 ${
                  active ? "underline decoration-[1.5px] underline-offset-[7px] opacity-100" : "opacity-85"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/become-a-specialist#apply" className="pill pill-white hidden min-h-11 px-[22px] sm:inline-flex">
            Become a Specialist
          </Link>
          <button
            type="button"
            onClick={() => setOpenOn(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 0.84, 0.24, 1] }}
            className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-brand lg:hidden"
          >
            <nav aria-label="Mobile" className="wrap flex flex-col pb-10 pt-4">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.5, ease: [0.16, 0.84, 0.24, 1] }}
                >
                  <Link
                    href={item.href}
                    className="block border-b border-white/20 py-5 text-[32px] font-bold tracking-[-0.04em] text-white"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 flex flex-col gap-3 text-white">
                <a href={`tel:${site.phoneTel}`} className="text-xl font-semibold">
                  {site.phoneDisplay}
                </a>
                <span className="text-blush">{site.address}</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
