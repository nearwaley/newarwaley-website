"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav, site, whatsappLink } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 40);

      // Always show at the top of the page
      if (currentScrollY <= 40) {
        setVisible(true);
      } else {
        // Hide on scroll down, reveal on scroll up
        if (currentScrollY > lastScrollY.current + 5) {
          setVisible(false);
        } else if (currentScrollY < lastScrollY.current - 5) {
          setVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        visible || open ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "glass-nav-light shadow-sm" : "bg-transparent"}`}
    >
      <div className="wrap flex h-[60px] items-center justify-between gap-4 sm:h-[68px]">
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="block shrink-0"
          onClick={close}
        >
          <Image
            src="/brand/nearwaley-lockup.png"
            alt={site.name}
            width={1110}
            height={330}
            priority
            className="h-7 w-auto max-w-[135px] object-contain sm:h-9 sm:max-w-none"
          />
        </Link>

        {/* Desktop nav – centred */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[13px] font-medium text-grey-600 transition-colors hover:bg-brand-tint hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs – right */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/#specialists"
            className="pill pill-outline-ink min-h-[38px] px-5 text-[13px]"
          >
            Join as a Specialist
          </Link>
          <Link
            href="/#services"
            className="pill pill-red min-h-[38px] px-5 text-[13px]"
          >
            Book a Specialist
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-modal"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-brand-tint lg:hidden shrink-0"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Modern Reverse-Modal Sheet Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="fixed inset-0 z-40 bg-ink/75 backdrop-blur-md lg:hidden"
              aria-hidden="true"
            />

            {/* Floating Reverse Modal Card */}
            <motion.div
              id="mobile-modal"
              initial={{ opacity: 0, y: -24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-3 top-3 z-50 max-w-lg mx-auto rounded-3xl bg-ink p-6 shadow-2xl border border-white/12 text-white lg:hidden overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <Link href="/" onClick={close} aria-label={`${site.name} home`}>
                  <Image
                    src="/brand/nearwaley-lockup.png"
                    alt={site.name}
                    width={1110}
                    height={330}
                    className="h-7 w-auto brightness-0 invert"
                  />
                </Link>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav aria-label="Mobile Navigation" className="flex flex-col py-4">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={close}
                      className="group flex items-center justify-between py-3.5 text-[18px] font-semibold tracking-tight text-white/90 hover:text-white transition-colors"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.label}
                      </span>
                      <svg
                        className="h-4 w-4 text-white/30 group-hover:text-brand group-hover:translate-x-1 transition-all"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="/#services"
                  onClick={close}
                  className="pill pill-red w-full justify-center text-[14px] font-semibold py-3 shadow-md"
                >
                  Book a Specialist
                </Link>
                <Link
                  href="/#specialists"
                  onClick={close}
                  className="pill pill-outline-white w-full justify-center text-[14px] font-medium py-3"
                >
                  Join as a Specialist
                </Link>
                <div className="mt-2 text-center text-xs text-white/50 flex items-center justify-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live in Thiruvananthapuram • <a href={`tel:${site.phoneTel}`} className="hover:text-white transition-colors underline underline-offset-2">{site.phoneDisplay}</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
