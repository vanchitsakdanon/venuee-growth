import Image from "next/image";
import metaAwards from "@/public/images/meta-awards-2025.jpg";
import meaAwards from "@/public/images/marketing-excellence-awards.jpg";
import speaker from "@/public/images/speaker-digital-sme-2026.jpg";
import awardsBadges from "@/public/images/awards-badges.jpg";

export function Proof() {
  return (
    <section id="proof" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <p className="label">{"// proof"}</p>
      <h2 className="mt-3 max-w-2xl text-h2 font-bold">
        รางวัลที่ Meta และวงการมอบให้ ไม่ใช่เราประกาศเอง
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-3 md:grid-rows-2">
        {/* รูปใหญ่: Meta First Agency Awards 2025 */}
        <figure className="card group relative overflow-hidden md:col-span-2 md:row-span-2">
          <Image
            src={metaAwards}
            alt="ทีม Venuee รับรางวัล Silver หมวด Thai Independent Agency of the Year บนเวที Meta Agency First Awards 2025"
            placeholder="blur"
            sizes="(min-width: 768px) 66vw, 100vw"
            className="aspect-[3/2] h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-bg via-bg/70 to-transparent p-5 pt-16 sm:p-6">
            <p className="label">{"// meta agency first awards 2025 · silver"}</p>
            <p className="mt-1 text-h3 font-semibold text-fg">
              อันดับ 2 Thai Independent Agency of the Year
            </p>
          </figcaption>
        </figure>

        {/* รูปเล็ก 1: Marketing Excellence Awards */}
        <figure className="card group relative overflow-hidden">
          <Image
            src={meaAwards}
            alt="ทีม Venuee ถือถ้วยรางวัล Marketing Excellence Awards"
            placeholder="blur"
            sizes="(min-width: 768px) 33vw, 100vw"
            className="aspect-[3/2] h-full w-full object-cover transition duration-700 group-hover:scale-[1.02] md:aspect-auto"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-bg via-bg/70 to-transparent p-4 pt-12">
            <p className="label">{"// marketing excellence awards"}</p>
            <p className="mt-1 text-small font-medium text-fg">6 รางวัลใน 2 ปี (2024–2025)</p>
          </figcaption>
        </figure>

        {/* รูปเล็ก 2: Speaker */}
        <figure className="card group relative overflow-hidden">
          <Image
            src={speaker}
            alt="ผู้ก่อตั้ง Venuee ขึ้นพูดบนเวที Digital SME Conference Thailand 2026"
            placeholder="blur"
            sizes="(min-width: 768px) 33vw, 100vw"
            className="aspect-[3/2] h-full w-full object-cover transition duration-700 group-hover:scale-[1.02] md:aspect-auto"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-bg via-bg/70 to-transparent p-4 pt-12">
            <p className="label">{"// speaker"}</p>
            <p className="mt-1 text-small font-medium text-fg">Digital SME Conference Thailand 2026</p>
          </figcaption>
        </figure>
      </div>

      {/* แถบรางวัลและ partner badges */}
      <div className="card mt-4 overflow-hidden">
        <Image
          src={awardsBadges}
          alt="รางวัล Marketing Excellence Awards 2024–2025 และ Meta First Agency Awards 2025 พร้อม badge Meta Business Partner, Google Partner, TikTok Agency Partner"
          placeholder="blur"
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
