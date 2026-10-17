// รายชื่อจากเว็บปัจจุบัน ถ้ามีไฟล์โลโก้ให้วางที่ public/clients/ แล้วเปลี่ยนเป็น <Image>
const clients = [
  "Monique Wedding",
  "Linlada Clinic",
  "Cocochic Wedding",
  "Posh Home Decor",
  "Airdog",
  "Innerwell",
  "Air Space",
  "A Team House",
  "The Classic Studio and Planner",
  "Solar Goody",
];

export function Clients() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="label text-center !text-muted">{"// trusted by 100+ brands"}</p>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {clients.map((c) => (
          <li key={c} className="text-small font-medium text-muted/80">
            {c}
          </li>
        ))}
      </ul>
    </section>
  );
}
