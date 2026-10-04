"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  { title: "Book", text: "Pick a service and share your location." },
  { title: "Alert", text: "Nearby verified Specialists are notified at once." },
  { title: "Accept", text: "The first to accept is on the way. You see who, and when." },
  { title: "Start code", text: "Work begins only with your 4-digit code." },
  { title: "Pay & rate", text: "Pay after the job. Rate each other." },
];

/** Dark "five taps" section: a red line draws across as you scroll, lighting each step. */
export function StepsTimeline() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: root.current, start: "top 75%", end: "bottom 60%", scrub: 0.6 },
        });
        tl.fromTo(".nw-progress", { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0);
        tl.from(".nw-step", { opacity: 0.25, y: 24, stagger: 0.18, ease: "power2.out" }, 0);
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className="flex flex-col gap-12">
      <div className="relative h-0.5 bg-night-line">
        <div className="nw-progress absolute inset-0 origin-left bg-brand" />
      </div>
      <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.title} className="nw-step flex flex-col gap-3.5">
            <span className="text-[52px] font-bold leading-none tracking-[-0.05em] text-brand-soft">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[22px] font-semibold tracking-[-0.02em]">{s.title}</span>
            <span className="text-base leading-relaxed text-[#bfb3b3]">{s.text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
