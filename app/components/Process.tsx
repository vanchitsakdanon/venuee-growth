const steps = [
  {
    n: "01",
    title: "Define Your Success",
    body: "คุยเป้าหมายธุรกิจ ตัวเลขที่ต้องไปให้ถึง margin ต้นทุน และงบ เพื่อให้ทุกคนวัดผลด้วยตัวเลขเดียวกัน",
    out: "KPI ที่ตกลงร่วมกัน",
  },
  {
    n: "02",
    title: "Audit & Master Plan",
    body: "ตรวจบัญชีโฆษณา tracking และ data ที่มีอยู่ หาจุดรั่วและโอกาส แล้ววางแผนทั้ง funnel ก่อนใช้งบจริง",
    out: "Growth Audit + แผนงาน",
  },
  {
    n: "03",
    title: "Execute, Track & Optimize",
    body: "รันแคมเปญ ทดสอบ creative วัดผลถึงยอดขาย และปรับทุกสัปดาห์ พร้อมประชุมสรุปผลทุก 2 สัปดาห์",
    out: "Dashboard 24/7 + รายงานทุก 2 สัปดาห์",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <p className="label">{"// how it works"}</p>
      <h2 className="mt-3 max-w-2xl text-h2 font-bold">3 ขั้นตอน จากเป้าหมายถึงยอดขาย</h2>
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.n} className="card relative p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-stat font-semibold text-brand/90">{s.n}</span>
              {i < steps.length - 1 && (
                <span aria-hidden className="hidden font-mono text-muted md:block">
                  →
                </span>
              )}
            </div>
            <h3 className="mt-4 text-h3 font-semibold">{s.title}</h3>
            <p className="mt-3 text-body text-muted">{s.body}</p>
            <p className="mt-5 border-t border-line pt-4 font-mono text-label text-teal">
              output: {s.out}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
