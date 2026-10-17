import { Award, Shield, Target } from "./Icons";

const points = [
  {
    icon: Award,
    tag: "// verified by meta",
    title: "Verified by Meta, not by us",
    body: "อันดับ 2 หมวด Thai Independent Agency จาก Meta First Agency Awards 2025 และเป็น Meta Business Partner กับ Google Partner อย่างเป็นทางการ",
  },
  {
    icon: Target,
    tag: "// business metrics",
    title: "Business metrics, not ad metrics",
    body: "บริหารงบโฆษณากว่า ฿200 ล้านต่อปี สร้างยอดขายร่วมกับพาร์ทเนอร์กว่า ฿1,200 ล้าน เราเริ่มจากต้นทุน margin และ Customer Acquisition Cost ของคุณ ก่อนวางแคมเปญแรก",
  },
  {
    icon: Shield,
    tag: "// no lock-in",
    title: "Transparent. No lock-in.",
    body: "รันแคมเปญบนบัญชีโฆษณาของแบรนด์เอง ข้อมูลเป็นของคุณ 100% มี dashboard ดูผลได้ 24/7 ประชุมสรุปผลทุก 2 สัปดาห์ และใช้สัญญารายเดือน",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <p className="label">{"// why venuee"}</p>
      <h2 className="mt-3 max-w-2xl text-h2 font-semibold">
        An agency measured by the same numbers you see at month-end.
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {points.map((p) => (
          <article key={p.title} className="card p-6 transition hover:border-brand/50">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-bg text-brand">
              <p.icon />
            </div>
            <p className="label mt-5">{p.tag}</p>
            <h3 className="mt-2 text-h3 font-semibold">{p.title}</h3>
            <p className="mt-3 text-body text-muted">{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
