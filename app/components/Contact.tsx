import { ArrowRight, Chat, Clock, Pin } from "./Icons";
import { ADDRESS, ADDRESS_HINT, CTA_PRIMARY, CTA_SECONDARY, HOURS, LINE_URL, MAPS_URL } from "./site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="label">{"// contact"}</p>
            <h2 className="mt-3 text-h2 font-semibold">
              Ready to start your growth engine?
            </h2>
            <p className="mt-4 max-w-xl text-body text-muted">
              ทักมาทาง LINE บอกธุรกิจ ช่วงงบ และเป้าหมายของคุณ ทีมจะนัดคุยและเริ่ม Growth Audit ให้ฟรี
              ไม่มีข้อผูกมัด
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
          </div>
          <div className="card p-6">
            <ul className="space-y-5">
              <li className="flex gap-3">
                <Chat className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <p className="label !text-muted">LINE Official Account</p>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-mono text-small text-fg underline-offset-4 hover:text-brand hover:underline"
                  >
                    lin.ee/hq2R0St
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Pin className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <p className="label !text-muted">ที่อยู่</p>
                  <p className="mt-1 text-small text-fg">{ADDRESS}</p>
                  <p className="text-small text-muted">{ADDRESS_HINT}</p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block font-mono text-label text-brand underline-offset-4 hover:underline"
                  >
                    เปิดแผนที่ →
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <p className="label !text-muted">เวลาทำการ</p>
                  <p className="mt-1 text-small text-fg">{HOURS}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
