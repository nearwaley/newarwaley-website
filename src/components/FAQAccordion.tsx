"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FAQ {
  icon: string;
  topic: string;
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    icon: "direct",
    topic: "Direct Booking",
    q: "Can customers and Specialists deal directly off the platform?",
    a: "There's no commission to avoid. Rewards, ranking, and e-Shram health cover count only for app jobs. Off-app bookings automatically forfeit our 60-minute arrival promise and 7-day re-fix guarantee.",
  },
  {
    icon: "distribution",
    topic: "Fair Distribution",
    q: "What if there are lots of Specialists but few customer bookings?",
    a: "We strictly cap onboardings. We only add new Specialists when active ones average at least 2 jobs per day. Specialists also convert their offline clients using personal QR magnets.",
  },
  {
    icon: "daypass",
    topic: "Specialist Earnings",
    q: "Why should a Specialist pay ₹149 a day?",
    a: "A single job covers it! Specialists keep 100% of their earnings with 0% commission. Crucially: if a Specialist receives no booking in 24 hours, their next day pass is 100% free.",
  },
  {
    icon: "defense",
    topic: "Market Strategy",
    q: "What if a big national aggregator spends heavily in Trivandrum?",
    a: "We don't fight a generic discount war. We win on 60-minute doorstep speed, local Malayalam-first trust, zero worker commission, and dedicated 10 km zone density.",
  },
  {
    icon: "guarantee",
    topic: "Hyperlocal SLA",
    q: "Is a 60-minute arrival time actually realistic?",
    a: "Yes: 10 km strict radius limits keep Specialists within minutes of your location, backed by instant backup dispatch and an automatic 20% discount on your bill if we're ever late.",
  },
  {
    icon: "model",
    topic: "Business Model",
    q: "How does Nearwaley earn revenue if customers pay no platform fee?",
    a: "Our core revenue comes from the ₹149 Specialist day pass. As we grow across Kerala, revenue scales through spare parts distribution, trade certification, and commercial agency partnerships.",
  },
];

function FAQIcon({ type, active }: { type: string; active: boolean }) {
  const colorClass = active
    ? "text-white bg-white/20"
    : "text-brand bg-brand-tint group-hover:bg-brand group-hover:text-white";

  const icons: Record<string, React.ReactNode> = {
    direct: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    distribution: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    daypass: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    defense: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    guarantee: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    model: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  };

  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${colorClass}`}
    >
      {icons[type] ?? icons.guarantee}
    </div>
  );
}

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0); // Default first open like screenshot

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl transition-all duration-300 ${
              isOpen
                ? "bg-gradient-to-br from-brand via-brand to-brand-dark text-white shadow-xl shadow-brand/20 ring-1 ring-white/20 p-6 sm:p-7"
                : "bg-white text-ink hover:bg-brand-tint/20 border border-grey-200/80 hover:border-brand/30 p-5 sm:p-6 shadow-2xs hover:shadow-md"
            }`}
          >
            <button
              id={`faq-btn-${i}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 text-left group"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <FAQIcon type={f.icon} active={isOpen} />
                <span
                  className={`text-[15px] sm:text-[17px] font-bold tracking-tight ${
                    isOpen ? "text-white" : "text-ink group-hover:text-brand"
                  } transition-colors`}
                >
                  {f.q}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {isOpen ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-xs">
                    Close ↙
                  </span>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-block text-[12px] font-medium text-grey-500 group-hover:text-brand transition-colors">
                      {f.topic}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-grey-100 text-grey-600 transition-colors group-hover:bg-brand group-hover:text-white">
                      ↗
                    </span>
                  </div>
                )}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 0.84, 0.24, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 sm:pt-5 border-t border-white/10 mt-4 text-[14px] sm:text-[15px] leading-relaxed text-white/80">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
