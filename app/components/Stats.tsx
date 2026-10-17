import Image from "next/image";
import partnerBadges from "@/public/images/partner-badges.jpg";

const stats = [
  { v: "2021", l: "Founded" },
  { v: "฿200M+", l: "Ad spend managed per year" },
  { v: "฿1,200M+", l: "Revenue generated with partners" },
  { v: "100+", l: "Brands" },
  { v: "#2", l: "Thai Independent Agency · Meta 2025" },
];

export function Stats() {
  return (
    <section className="border-y border-line bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-5">
          {stats.map((s) => (
            <div key={s.l} className="min-w-0">
              <dd className="font-heading text-stat font-semibold tabular-nums text-fg">{s.v}</dd>
              <dt className="mt-2 text-small text-muted">{s.l}</dt>
            </div>
          ))}
        </dl>
        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="label shrink-0 !text-muted">{"// certified partners"}</p>
          <Image
            src={partnerBadges}
            alt="Meta Business Partner, Google Partner, TikTok Agency Partner และ Marketing Excellence Awards 2025"
            placeholder="blur"
            sizes="(min-width: 640px) 720px, 100vw"
            className="h-auto w-full max-w-3xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
