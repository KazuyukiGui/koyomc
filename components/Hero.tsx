import Image from "next/image";

import { SharedButton } from "@/components/SharedButton";
import { clinicInfo, accessInfo, hero } from "@/content/home";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-wave-white pb-12 pt-20 md:pt-24">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-t from-background/90 via-background/40 to-transparent" aria-hidden />
      <div className="container grid gap-16 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <div>
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary-light px-4 py-1 text-xs tracking-[0.3em] text-primary">
            {hero.eyebrow}
          </span>
          <h1 className="mt-6 font-display text-3xl leading-tight text-primary-dark md:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base text-subtext md:text-lg">{hero.subheadline}</p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-subtext md:flex-row md:gap-5">
            {hero.highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 shadow-soft">
                <span className="inline-flex h-2 w-2 flex-none rounded-full bg-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            {hero.ctas.map((cta) => (
              <SharedButton key={cta.label} href={cta.href} variant={cta.variant as "primary" | "secondary"}>
                {cta.label}
              </SharedButton>
            ))}
            <SharedButton href={`tel:${clinicInfo.phone}`} variant="ghost">
              お電話：{clinicInfo.phone}
            </SharedButton>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-16 -top-16 hidden h-40 w-40 rounded-full bg-secondary-light blur-3xl md:block" aria-hidden />
          <div className="absolute -right-14 -bottom-24 hidden h-44 w-44 rounded-full bg-primary-light blur-3xl md:block" aria-hidden />
          <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/90 shadow-card backdrop-blur">
            <div className="relative h-full w-full">
              <Image
                src="/images/clinic-exterior.jpg"
                alt="向陽メディカルクリニックの外観"
                width={920}
                height={620}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/35 via-transparent to-secondary/20" aria-hidden />
            </div>
            <div className="mt-6 grid gap-4 rounded-2xl bg-primary/5 p-4 text-sm text-subtext">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">所在地</p>
                <p className="mt-1 text-text">{clinicInfo.address}</p>
              </div>
              <div className="border-t border-border/50 pt-3">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">アクセス</p>
                <p className="mt-1">{accessInfo.summary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
