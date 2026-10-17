const stats = [
  { v: "2021", l: "ปีที่ก่อตั้ง" },
  { v: "฿200M+", l: "งบโฆษณาที่บริหารต่อปี" },
  { v: "฿1,200M+", l: "ยอดขายที่สร้างร่วมกับพาร์ทเนอร์" },
  { v: "100+", l: "แบรนด์ที่ร่วมงาน" },
  { v: "#2", l: "Thai Independent Agency · Meta 2025" },
];

const badges = [
  "Meta Business Partner",
  "Google Partner",
  "Meta First Agency Awards 2025",
];

export function Stats() {
  return (
    <section className="border-y border-line bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-5">
          {stats.map((s) => (
            <div key={s.l} className="min-w-0">
              <dd className="text-stat font-bold tabular-nums text-fg">{s.v}</dd>
              <dt className="mt-2 text-small text-muted">{s.l}</dt>
            </div>
          ))}
        </dl>
        {/* แถบ badge: ถ้ามีไฟล์รูป badge ให้วางที่ public/badges/ แล้วเปลี่ยนเป็น <Image> */}
        <ul className="mt-10 flex flex-wrap items-center gap-2 border-t border-line pt-6">
          <li className="label mr-2 !text-muted">{"// certified"}</li>
          {badges.map((b) => (
            <li
              key={b}
              className="rounded-full border border-line px-3 py-1 font-mono text-label text-fg"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
