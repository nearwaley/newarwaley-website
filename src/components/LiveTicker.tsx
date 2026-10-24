"use client";

const items = [
  "⚡ Electrician accepted · arriving in 18 min · Kazhakkoottam",
  "🔧 Plumber on the way · ETA 22 min · Technopark",
  "❄️ AC technician accepted · 14 min away · Pattom",
  "⚡ Electrician accepted · arriving in 31 min · Kowdiar",
  "🔧 Plumber confirmed · 19 min · Vazhuthacaud",
];

export function LiveTicker() {
  return (
    <div
      className="relative overflow-hidden border-y border-white/10 bg-ink-2 py-3"
      aria-hidden="true"
    >
      <div className="ticker-track whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-block px-8 text-[12px] font-medium text-white/50"
          >
            {item}
            <span className="mx-6 text-white/20">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
