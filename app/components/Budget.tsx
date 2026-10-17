"use client";

import { useState } from "react";
import { ArrowRight } from "./Icons";
import { CTA_PRIMARY, LINE_URL } from "./site";

const ranges = [
  { id: "a", label: "฿80,000–200,000", note: "เริ่มจากช่องทางหลัก 1–2 ช่องทาง เน้น tracking ให้แม่นก่อนขยาย" },
  { id: "b", label: "฿200,000–400,000", note: "ขยายเป็น full-funnel หลายช่องทาง พร้อม creative testing ต่อเนื่อง" },
  { id: "c", label: "฿400,000–800,000", note: "เพิ่ม CPAS, KOL/Affiliate และ dashboard ระดับ margin ต่อสินค้า" },
  { id: "d", label: "฿800,000 ขึ้นไป", note: "ทีมเฉพาะกิจ วาง growth model ทั้งโครงสร้างดิจิทัลและอีคอมเมิร์ซ" },
];

export function Budget() {
  const [sel, setSel] = useState<string | null>(null);
  const active = ranges.find((r) => r.id === sel);

  return (
    <section id="budget" className="scroll-mt-20 border-t border-line bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="card dot-bg relative overflow-hidden p-6 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/15 blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="label">{"// pricing"}</p>
              <h2 className="mt-3 text-h2 font-bold">ไม่มีราคาตายตัว เพราะแผนขึ้นกับตัวเลขของคุณ</h2>
              <p className="mt-4 text-body text-muted">
                ค่าบริการขึ้นกับขนาดบัญชีและขอบเขตงาน เริ่มจากเลือกช่วงงบโฆษณาต่อเดือนของคุณ
                แล้วรับ Growth Audit ฟรีก่อนตัดสินใจ ไม่มีข้อผูกมัด
              </p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 w-full sm:w-auto"
              >
                {CTA_PRIMARY}
                <ArrowRight width={18} height={18} />
              </a>
            </div>
            <div>
              <p className="font-mono text-label text-muted">งบโฆษณาต่อเดือนของคุณ</p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2" role="group" aria-label="ช่วงงบโฆษณาต่อเดือน">
                {ranges.map((r) => {
                  const on = r.id === sel;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setSel(on ? null : r.id)}
                      className={`rounded-lg border px-4 py-3 text-left font-mono text-small transition ${
                        on
                          ? "border-brand bg-brand/10 text-fg shadow-[0_0_20px_rgba(5,200,134,0.2)]"
                          : "border-line bg-bg text-muted hover:border-brand/50 hover:text-fg"
                      }`}
                    >
                      {r.label}
                    </button>
                  );
                })}
              </div>
              <p className="mt-4 min-h-14 text-small text-muted" aria-live="polite">
                {active
                  ? active.note + " บอกช่วงงบนี้ในแชทได้เลย ทีมจะเตรียม audit ให้ตรงกับขนาดบัญชี"
                  : "เลือกช่วงงบเพื่อดูว่าแผนในระดับนี้มักเริ่มจากอะไร"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
