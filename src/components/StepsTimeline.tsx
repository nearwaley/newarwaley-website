"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "A Specialist goes online.",
    text: "Wherever they're waiting becomes the centre of their 10 km zone.",
  },
  {
    num: "02",
    title: "You book.",
    text: "Every free Specialist whose zone covers you gets notified instantly.",
  },
  {
    num: "03",
    title: "First to accept gets the job.",
    text: "You see their photo, rating and live arrival time.",
  },
  {
    num: "04",
    title: "Nobody free? We step in.",
    text: "Our backend team assigns a Specialist manually. You're never left waiting.",
  },
];

export function StepsTimeline() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "bottom 55%",
            scrub: 0.7,
          },
        });
        tl.fromTo(
          ".nw-progress",
          { scaleX: 0 },
          { scaleX: 1, ease: "none" },
          0,
        );
        tl.from(
          ".nw-step",
          { opacity: 0.15, y: 28, stagger: 0.2, ease: "power2.out" },
          0,
        );
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className="flex flex-col gap-10">
      {/* Red progress line */}
      <div className="relative h-px bg-white/10">
        <div className="nw-progress absolute inset-0 origin-left bg-brand" />
      </div>

      <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.num} className="nw-step flex flex-col gap-4">
            <span className="text-[clamp(36px,3.5vw,48px)] font-bold leading-none tracking-[-0.05em] text-brand">
              {s.num}
            </span>
            <span className="text-[clamp(15px,1.3vw,18px)] font-semibold leading-snug tracking-tight text-white">
              {s.title}
            </span>
            <span className="text-[13px] leading-relaxed text-white/50 sm:text-[14px]">
              {s.text}
            </span>
          </li>
        ))}
      </ol>

      {/* Promise banner */}
      <div className="rounded-2xl bg-brand px-6 py-5 sm:px-8 sm:py-6">
        <p className="text-[clamp(18px,2vw,24px)] font-bold text-white">
          60 minutes, or 20% off.
        </p>
        <p className="mt-1.5 text-[14px] text-white/75">
          24/7. Night rate is double — and every rupee of the extra goes to the
          Specialist.
        </p>
      </div>
    </div>
  );
}
