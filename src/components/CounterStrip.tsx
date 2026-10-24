"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: "60", suffix: " min", label: "or 20% off" },
  { value: "0", suffix: "%", label: "commission for our Specialists" },
  { value: "10", suffix: " km", label: "max travel, so help is always close" },
  { value: "24", suffix: "/7", label: "including nights" },
];

function useCountUp(target: number, duration = 1200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const num = parseInt(stat.value, 10);
  const count = useCountUp(num, 1000, active);

  return (
    <div className="flex flex-col items-center justify-center gap-2.5 px-4 py-6 sm:py-8 text-center transition-colors hover:bg-brand-tint/20">
      <p className="text-[clamp(24px,2.8vw,36px)] font-bold text-brand leading-none tracking-tight">
        {count}
        {stat.suffix}
      </p>
      <p className="text-[13px] font-medium text-grey-600 max-w-[150px] leading-snug">
        {stat.label}
      </p>
    </div>
  );
}

export function CounterStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white border-y border-grey-200">
      <div className="wrap">
        <div className="grid grid-cols-2 divide-x divide-y divide-grey-200 md:grid-cols-4 md:divide-y-0">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} active={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
