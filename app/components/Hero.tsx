import { HeroDashboard } from "./HeroDashboard";
import { ArrowRight, Chat } from "./Icons";
import { CTA_PRIMARY, CTA_SECONDARY, LINE_URL } from "./site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-24">
        <div>
          <p className="label">{"// performance marketing agency · bangkok"}</p>
          <h1 className="mt-5 text-hero font-bold">
            Start your
            <br />
            <span className="text-brand">growth engine.</span>
          </h1>
          <p className="mt-5 text-lead font-medium text-fg">
            เปลี่ยนงบโฆษณาให้เป็นยอดขายที่วัดผลได้ทุกบาท
          </p>
          <p className="mt-4 max-w-xl text-body text-muted">
            Venuee เป็น Growth Engine ให้แบรนด์ DTC Ecommerce และธุรกิจ B2B
            เราวางกลยุทธ์ ผลิต Creative และบริหารโฆษณาบน Meta, Google, TikTok, LINE
            และช่องทาง AI ครบในทีมเดียว วัดผลที่ยอดขายและกำไรของธุรกิจ
            ไม่ใช่แค่ Reach หรือ Impression
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {CTA_PRIMARY}
              <ArrowRight width={18} height={18} />
            </a>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Chat width={18} height={18} />
              {CTA_SECONDARY}
            </a>
          </div>
          <p className="mt-4 font-mono text-label text-muted">
            ฟรี ไม่มีข้อผูกมัด · สัญญารายเดือน · ข้อมูลเป็นของคุณ 100%
          </p>
        </div>
        <HeroDashboard />
      </div>
    </section>
  );
}
