import { Check, X } from "./Icons";

const rows: { k: string; agency: string; venuee: string; inhouse: string }[] = [
  { k: "โฟกัส", agency: "เทคนิคการตลาด", venuee: "ยอดขายและ ROI", inhouse: "ทำทุกอย่าง ไม่มีโฟกัสชัด" },
  { k: "สัญญา", agency: "ผูกมัดระยะยาว", venuee: "รายเดือน ยกเลิกได้", inhouse: "จ้างประจำระยะยาว" },
  { k: "บัญชีโฆษณาและข้อมูล", agency: "หมดสัญญาแล้วแบรนด์เสีย asset", venuee: "เป็นของแบรนด์ 100%", inhouse: "เป็นของแบรนด์" },
  { k: "การเรียนรู้ข้ามอุตสาหกรรม", agency: "มี", venuee: "มี จาก 100+ แบรนด์", inhouse: "จำกัด" },
  { k: "รายงาน", agency: "รายเดือน", venuee: "Dashboard 24/7 + ทุก 2 สัปดาห์", inhouse: "ขึ้นกับทีม" },
];

export function Compare() {
  return (
    <section className="border-t border-line bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="label">{"// compare"}</p>
        <h2 className="mt-3 max-w-2xl text-h2 font-bold">ต่างจากเอเจนซีทั่วไปและทีม in-house ตรงไหน</h2>

        <div className="card mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-small">
            <thead>
              <tr className="border-b border-line">
                <th className="p-4 font-mono text-label font-medium text-muted">{"// criteria"}</th>
                <th className="bg-brand/5 p-4 font-semibold text-brand">Venuee</th>
                <th className="p-4 font-medium text-muted">เอเจนซีทั่วไป</th>
                <th className="p-4 font-medium text-muted">ทีม in-house</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.k} className="border-b border-line last:border-0">
                  <th scope="row" className="p-4 font-medium text-fg">
                    {r.k}
                  </th>
                  <td className="bg-brand/5 p-4 text-fg">
                    <span className="flex items-start gap-2">
                      <Check width={16} height={16} className="mt-1 shrink-0 text-brand" />
                      {r.venuee}
                    </span>
                  </td>
                  <td className="p-4 text-muted">
                    <span className="flex items-start gap-2">
                      <X width={16} height={16} className="mt-1 shrink-0 text-muted/60" />
                      {r.agency}
                    </span>
                  </td>
                  <td className="p-4 text-muted">{r.inhouse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
