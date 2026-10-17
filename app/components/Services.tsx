import { Cart, Database, Megaphone, Sparkles, Users } from "./Icons";

const services = [
  {
    icon: Megaphone,
    tag: "// performance media",
    title: "Performance Media",
    body: "บริหารโฆษณาบน Meta (Facebook, Instagram), Google Ads, TikTok Ads และ LINE Ads โดยคุมงบจาก CAC และ margin เป้าหมาย ไม่ใช่จาก reach",
    chips: ["Meta", "Google", "TikTok", "LINE"],
    span: "md:col-span-2",
  },
  {
    icon: Sparkles,
    tag: "// performance creative",
    title: "Performance Creative",
    body: "ภาพนิ่ง วิดีโอ และ UGC ที่ออกแบบมาเพื่อ conversion พร้อม creative testing ต่อเนื่องทุกสัปดาห์",
    chips: ["Static", "Video", "UGC", "A/B Test"],
    span: "",
  },
  {
    icon: Cart,
    tag: "// e-commerce performance",
    title: "E-commerce Performance",
    body: "Website Conversion, Full-funnel Optimization, CPAS (Collaborative Ads กับ Shopee / Lazada) และ Social Commerce / Messaging Ads ที่ปิดการขายในแชท",
    chips: ["CPAS", "Full-funnel", "Messaging Ads"],
    span: "",
  },
  {
    icon: Users,
    tag: "// kol & affiliate",
    title: "KOL & Affiliate",
    body: "คัดเลือก KOL ที่ตรงกลุ่ม ทำ Partnership Ads และบริหาร TikTok Affiliate โดยวัดที่ยอดขายที่เกิดขึ้นจริง",
    chips: ["KOL", "Partnership Ads", "TikTok Affiliate"],
    span: "",
  },
  {
    icon: Database,
    tag: "// data & tracking",
    title: "Data & Tracking",
    body: "ติดตั้ง Pixel / Conversions API, sales tracking ถึงระดับออเดอร์ และ dashboard แบบ real-time ที่ทีมคุณเปิดดูได้ 24/7",
    chips: ["Pixel", "CAPI", "Dashboard"],
    span: "",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-line bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="label">{"// services"}</p>
        <h2 className="mt-3 max-w-2xl text-h2 font-bold">
          กลยุทธ์ Creative และ Media ครบในทีมเดียว
        </h2>
        <p className="mt-4 max-w-2xl text-body text-muted">
          ไม่ต้องประสานงานหลายเจ้า ทีมเดียวรับผิดชอบตั้งแต่ตัวเลขเป้าหมายจนถึงยอดขายที่เกิดขึ้นจริง
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className={`card group relative overflow-hidden p-6 transition hover:border-brand/50 ${s.span}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-bg text-brand">
                  <s.icon />
                </div>
                <p className="label">{s.tag}</p>
              </div>
              <h3 className="mt-5 text-h3 font-semibold">{s.title}</h3>
              <p className="mt-3 text-body text-muted">{s.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <li
                    key={c}
                    className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-label text-fg"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-brand/0 blur-3xl transition group-hover:bg-brand/15"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
