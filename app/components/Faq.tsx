import { Plus } from "./Icons";

const faqs = [
  {
    q: "ต้องมีงบโฆษณาขั้นต่ำเท่าไหร่",
    a: "เราทำงานกับแบรนด์ที่มีงบโฆษณาตั้งแต่ ฿80,000 ต่อเดือนขึ้นไป เพราะต่ำกว่านี้ข้อมูลมักไม่พอให้ทดสอบและ optimize อย่างมีนัยสำคัญ ค่าบริการแยกจากงบโฆษณาและขึ้นกับขอบเขตงาน จะบอกตัวเลขชัดเจนหลัง Growth Audit",
  },
  {
    q: "Growth Audit ฟรี ได้อะไรบ้าง",
    a: "เราตรวจบัญชีโฆษณา tracking และ funnel ที่มีอยู่ แล้วสรุปจุดรั่วของงบ โอกาสที่ยังไม่ได้ใช้ และตัวเลข CAC / margin ที่ควรตั้งเป็นเป้า คุณได้เอกสารสรุปไปใช้ต่อได้แม้ไม่ได้ทำงานกับเรา ไม่มีข้อผูกมัด",
  },
  {
    q: "สัญญาผูกมัดไหม แล้วข้อมูลเป็นของใคร",
    a: "สัญญาเป็นรายเดือน ไม่มี lock-in เราทำงานบนบัญชีโฆษณา Pixel และ data ของแบรนด์เอง ทุกอย่างเป็นของคุณ 100% ตั้งแต่วันแรกและยังอยู่กับคุณถ้าเลิกทำงานร่วมกัน",
  },
  {
    q: "วัดผลอย่างไร และจะเห็นผลเมื่อไหร่",
    a: "เราตั้ง KPI จากยอดขาย CAC และ margin ที่ตกลงกันตั้งแต่ต้น คุณเปิด dashboard ดูได้ 24/7 และมีประชุมสรุปผลทุก 2 สัปดาห์ ช่วงแรกจะเน้นให้ tracking แม่นและทดสอบ creative ก่อน ผลลัพธ์ขึ้นกับสินค้า ต้นทุน และตลาด เราจะบอกตรงๆ ว่าอะไรทำได้และอะไรยังไม่ได้",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-line bg-card/30">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="label">{"// faq"}</p>
        <h2 className="mt-3 text-h2 font-semibold">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-h3 font-medium">
                {f.q}
                <Plus
                  width={20}
                  height={20}
                  className="faq-icon shrink-0 text-brand transition-transform"
                />
              </summary>
              <p className="mt-3 text-body text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
