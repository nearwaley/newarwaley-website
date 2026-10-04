"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const dots = [
  { left: "30%", top: "30%", tone: "live" },
  { left: "66%", top: "62%", tone: "live" },
  { left: "76%", top: "28%", tone: "soon" },
  { left: "18%", top: "64%", tone: "soon" },
  { left: "48%", top: "84%", tone: "soon" },
  { left: "10%", top: "40%", tone: "busy" },
  { left: "86%", top: "52%", tone: "busy" },
] as const;

const toneClass = {
  live: "h-3.5 w-3.5 bg-brand blip",
  soon: "h-[11px] w-[11px] bg-[#e89aa1]",
  busy: "h-[11px] w-[11px] bg-[#cfc4c4]",
};

/** Hero visual: radar rings pulse out from the Nearwaley mark; nearby Specialists light up. */
export function RadiusVisual() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".nw-ring",
          { scale: 0.1, opacity: 0.7 },
          { scale: 1, opacity: 0, duration: 4.2, ease: "power2.out", repeat: -1, stagger: { each: 1.4 } },
        );
        gsap.from(".nw-dot", {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(2.5)",
          stagger: 0.12,
          delay: 0.6,
        });
        gsap.from(".nw-core", { scale: 0.6, opacity: 0, duration: 1, ease: "expo.out", delay: 0.2 });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line" />
      <div className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#d9a4a9] bg-brand/[0.035]" />
      {[0, 1, 2].map((i) => (
        <div key={i} className="nw-ring absolute left-[4%] top-[4%] h-[92%] w-[92%] rounded-full border-[1.5px] border-brand opacity-0" />
      ))}
      <div className="nw-core absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/brand/nearwaley-mark.png"
          alt=""
          width={76}
          height={76}
          className="rounded-[22px] shadow-[0_0_0_8px_#fff,0_18px_40px_rgba(194,19,33,0.25)]"
        />
      </div>
      {dots.map((d, i) => (
        <span
          key={i}
          className={`nw-dot absolute rounded-full ${toneClass[d.tone]}`}
          style={{ left: d.left, top: d.top }}
        />
      ))}
      <span className="eyebrow absolute -bottom-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-subtle">
        Verified Specialists, near you
      </span>
    </div>
  );
}
