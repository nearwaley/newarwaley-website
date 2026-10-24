"use client";

import React from "react";

export function ZoneIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px] overflow-hidden rounded-2xl bg-white/5 p-4 shadow-md ring-1 ring-white/10">
      {/* Subtle background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-2xl" />

      <div className="relative aspect-square w-full flex items-center justify-center">
        {/* Outer 10 km Zone Circle */}
        <div className="absolute h-[82%] w-[82%] rounded-full border border-dashed border-brand/30" />
        
        {/* Middle 5 km Zone Circle */}
        <div className="absolute h-[55%] w-[55%] rounded-full border border-white/10 bg-white/2" />
        
        {/* Inner 2 km Zone Circle */}
        <div className="absolute h-[30%] w-[30%] rounded-full border border-brand/20 bg-brand/5" />

        {/* Center Node (User Home Location) */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <span className="absolute h-full w-full rounded-full bg-brand/30 animate-ping" />
            <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white text-[11px] font-bold shadow-xs">
              📍
            </span>
          </div>
          <span className="mt-1 rounded-full bg-ink/90 px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase text-white/90 border border-white/10">
            You
          </span>
        </div>

        {/* Specialist Pin 1: Electrician */}
        <div className="absolute top-[20%] left-[14%] z-20 flex items-center gap-1.5 rounded-xl bg-black/70 border border-white/10 px-2.5 py-1 backdrop-blur-xs shadow-xs">
          <span className="text-[10px]">⚡</span>
          <span className="text-[10px] font-semibold text-white/90">2.1 km · 12 min</span>
        </div>

        {/* Specialist Pin 2: Plumber */}
        <div className="absolute bottom-[22%] right-[12%] z-20 flex items-center gap-1.5 rounded-xl bg-black/70 border border-white/10 px-2.5 py-1 backdrop-blur-xs shadow-xs">
          <span className="text-[10px]">🔧</span>
          <span className="text-[10px] font-semibold text-white/90">3.8 km · 19 min</span>
        </div>

        {/* Specialist Pin 3: AC Tech */}
        <div className="absolute top-[26%] right-[14%] z-20 flex items-center gap-1.5 rounded-xl bg-black/70 border border-white/10 px-2.5 py-1 backdrop-blur-xs shadow-xs">
          <span className="text-[10px]">❄️</span>
          <span className="text-[10px] font-semibold text-white/90">5.4 km · 28 min</span>
        </div>

        {/* Floating Tag: 10 KM Radius */}
        <div className="absolute bottom-3 left-3 z-20 inline-flex items-center gap-1 rounded-full bg-brand/80 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
          <span className="h-1 w-1 rounded-full bg-white" />
          10 km Zone
        </div>

        {/* Floating Tag: Under 60 Mins */}
        <div className="absolute top-3 right-3 z-20 inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/80 border border-white/10">
          ⏱️ &lt; 60 mins
        </div>
      </div>
    </div>
  );
}
