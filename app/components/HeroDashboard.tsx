"use client";

import { useEffect, useState } from "react";

// ตัวเลขตัวอย่างสำหรับโชว์หน้าตา dashboard (ไม่ใช่ข้อมูลลูกค้าจริง)
const TARGET = { spend: 1_000_000, revenue: 6_000_000, margin: 1_500_000 };
const BARS = [38, 52, 46, 64, 58, 72, 84, 91];
const LOGS = [
  "creative_test  12 variants → 3 winners",
  "cac            ฿420 → ฿310  (-26%)",
  "roas           4.1x → 6.0x",
  "sync           dashboard updated · 24/7",
];

const baht = (n: number) => "฿" + Math.round(n).toLocaleString("en-US");

export function HeroDashboard() {
  const [t, setT] = useState(0); // 0 → 1 progress ของ animation
  const [logCount, setLogCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    if (reduce) {
      raf = requestAnimationFrame(() => {
        setT(1);
        setLogCount(LOGS.length);
      });
      return () => cancelAnimationFrame(raf);
    }
    const start = performance.now();
    const dur = 1800;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setT(eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const timers = LOGS.map((_, i) =>
      setTimeout(() => setLogCount(i + 1), 500 + i * 550),
    );
    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, []);

  const metrics = [
    { k: "SPEND", v: TARGET.spend * t, tone: "text-fg" },
    { k: "REVENUE", v: TARGET.revenue * t, tone: "text-brand" },
    { k: "MARGIN", v: TARGET.margin * t, tone: "text-teal" },
  ];

  return (
    <div className="card glow relative overflow-hidden p-4 sm:p-5">
      {/* title bar แบบ terminal */}
      <div className="flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand/70" />
        </div>
        <span className="label !text-muted">{"// growth dashboard · sample"}</span>
        <span className="flex items-center gap-1.5 font-mono text-label text-brand">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
          LIVE
        </span>
      </div>

      {/* Spend → Revenue → Margin */}
      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        {metrics.map((m, i) => (
          <div key={m.k} className="relative rounded-lg border border-line bg-bg/60 p-3">
            <div className="label !text-muted">{m.k}</div>
            <div
              className={`mt-1 font-mono text-[clamp(0.95rem,2.2vw,1.25rem)] font-semibold tabular-nums ${m.tone}`}
            >
              {baht(m.v)}
            </div>
            {i < metrics.length - 1 && (
              <span
                aria-hidden
                className="absolute -right-2 top-1/2 hidden -translate-y-1/2 font-mono text-muted sm:block"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>

      {/* กราฟแท่งง่ายๆ */}
      <div className="mt-4 rounded-lg border border-line bg-bg/60 p-3">
        <div className="flex items-center justify-between">
          <span className="label !text-muted">revenue / week</span>
          <span className="font-mono text-label text-teal">ROAS 6.0x</span>
        </div>
        <div className="mt-3 flex h-20 items-end gap-1.5" aria-hidden>
          {BARS.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-linear-to-t from-brand/30 to-brand transition-[height] duration-700"
              style={{ height: `${h * t}%`, transitionDelay: `${i * 40}ms` }}
            />
          ))}
        </div>
      </div>

      {/* log lines */}
      <ul className="mt-4 space-y-1 font-mono text-[0.72rem] text-muted sm:text-small">
        {LOGS.slice(0, logCount).map((line) => (
          <li key={line} className="flex gap-2">
            <span className="text-brand">›</span>
            <span className="truncate">{line}</span>
          </li>
        ))}
        <li className="flex gap-2">
          <span className="text-brand">›</span>
          <span className="inline-block h-3.5 w-2 animate-pulse bg-brand/70 align-middle" />
        </li>
      </ul>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand/20 blur-3xl"
      />
    </div>
  );
}
