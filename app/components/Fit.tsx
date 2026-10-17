import { Check, X } from "./Icons";

const fit = [
  "แบรนด์ DTC Ecommerce ที่ขายผ่านเว็บไซต์ marketplace (Shopee, Lazada, TikTok Shop) และแชท",
  "ธุรกิจ B2B และบริการมูลค่าสูงที่ต้องการ lead คุณภาพ ไม่ใช่ lead จำนวนมาก",
  "องค์กรขนาดใหญ่ที่ต้องการยกระดับโครงสร้างดิจิทัลและอีคอมเมิร์ซ",
  "มี product-market fit แล้ว ยอดขายสม่ำเสมอ และพร้อม scale",
  "งบโฆษณาตั้งแต่ ฿80,000 ต่อเดือนขึ้นไป",
];
const notFit = [
  "ธุรกิจที่ยังไม่มี product-market fit หรือยังไม่มียอดขายสม่ำเสมอ",
  "ต้องการแค่ยอด Like, Follower หรือ Reach",
];

export function Fit() {
  return (
    <section id="fit" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <p className="label">{"// who we work with"}</p>
      <h2 className="mt-3 max-w-2xl text-h2 font-semibold">
        Built for founders, CMOs and Heads of Ecommerce ready to scale.
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-[1.3fr_1fr]">
        <div className="card p-6">
          <p className="label">{"// good fit"}</p>
          <ul className="mt-4 space-y-3">
            {fit.map((t) => (
              <li key={t} className="flex gap-3 text-body text-fg">
                <Check width={20} height={20} className="mt-1 shrink-0 text-brand" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-6">
          <p className="label !text-muted">{"// not yet"}</p>
          <ul className="mt-4 space-y-3">
            {notFit.map((t) => (
              <li key={t} className="flex gap-3 text-body text-muted">
                <X width={20} height={20} className="mt-1 shrink-0 text-muted/60" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-4 text-small text-muted">
            ถ้ายังไม่แน่ใจว่าอยู่กลุ่มไหน ทักมาคุยได้ เราบอกตรงๆ ถ้ายังไม่ใช่เวลาที่เหมาะกับการลงงบโฆษณา
          </p>
        </div>
      </div>
    </section>
  );
}
