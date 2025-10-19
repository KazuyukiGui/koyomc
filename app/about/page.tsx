import Image from "next/image";

import { Section } from "@/components/Section";
import { SharedButton } from "@/components/SharedButton";
import { greeting, featurePillars, teamHighlights } from "@/content/about";
import { clinicInfo } from "@/content/home";

export const metadata = {
  title: "当院について｜向陽メディカルクリニック",
  description: "向陽メディカルクリニックの理念、設備、スタッフ体制をご紹介します。安心して透析治療を続けられる環境づくりに取り組んでいます。",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-wave-blue py-20 md:py-28">
        <div className="container grid gap-12 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-white/70 px-4 py-1 text-xs tracking-[0.3em] text-primary">
              ABOUT US
            </span>
            <h1 className="mt-6 font-display text-3xl leading-tight text-primary-dark md:text-5xl">
              患者さまと家族の“安心”を支える、透析専門クリニック
            </h1>
            <p className="mt-6 max-w-xl text-base text-subtext md:text-lg">{greeting.message}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <SharedButton href="/dialysis">透析の流れを見る</SharedButton>
              <SharedButton href="/contact" variant="secondary">見学・ご相談はこちら</SharedButton>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-12 -top-12 hidden h-44 w-44 rounded-full bg-primary/10 blur-3xl md:block" aria-hidden />
            <div className="absolute -right-10 -bottom-12 hidden h-48 w-48 rounded-full bg-secondary/20 blur-3xl md:block" aria-hidden />
            <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/90 shadow-card backdrop-blur">
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
          </div>
        </div>
      </section>

      <Section eyebrow="PHILOSOPHY" title="向陽メディカルクリニックの思い" subtitle="専門性の高い治療と温かいケアを両立し、地域の透析医療の質を高めていきます。">
        <div className="grid gap-6 md:grid-cols-3">
          {greeting.points.map((point) => (
            <div key={point} className="rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
              <p className="text-sm text-subtext md:text-base">{point}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-primary/20 bg-primary-light/50 p-6 text-sm text-text md:text-base">
          <p>{greeting.director.role}</p>
          <p className="mt-2 font-medium">{greeting.director.name}</p>
        </div>
      </Section>

      <Section eyebrow="FEATURES" title="安心を支える3つの特長" subtitle="透析治療の質・快適さ・生活支援をバランス良く整えています。">
        <div className="grid gap-6 md:grid-cols-3">
          {featurePillars.map((feature) => (
            <div key={feature.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-surface p-6 shadow-soft">
              <span className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold tracking-[0.3em] text-primary">
                {feature.badge}
              </span>
              <h2 className="font-display text-xl text-primary-dark">{feature.title}</h2>
              <p className="text-sm text-subtext md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="TEAM" title="多職種チームで支える医療体制" subtitle="医師・看護師・臨床工学技士・管理栄養士などが連携し、安心安全な透析治療を提供します。" variant="reverse">
        <div className="grid gap-6 md:grid-cols-2">
          {teamHighlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg text-primary-dark">{item.title}</h3>
              <p className="mt-2 text-sm text-subtext md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="OVERVIEW" title="クリニック概要" subtitle="所在地や連絡先、診療時間などの基本情報をご案内します。" align="center">
        <div className="mx-auto grid max-w-3xl gap-6 rounded-3xl border border-border/60 bg-surface p-8 shadow-sm">
          <dl className="grid gap-4 text-sm text-subtext md:text-base">
            <div>
              <dt className="font-medium text-text">所在地</dt>
              <dd className="mt-1">{clinicInfo.address}</dd>
            </div>
            <div>
              <dt className="font-medium text-text">電話</dt>
              <dd className="mt-1">
                <a href={`tel:${clinicInfo.phone}`} className="text-primary">{clinicInfo.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-text">FAX</dt>
              <dd className="mt-1">{clinicInfo.fax}</dd>
            </div>
            <div>
              <dt className="font-medium text-text">メール</dt>
              <dd className="mt-1">
                <a href={`mailto:${clinicInfo.email}`} className="underline">{clinicInfo.email}</a>
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </>
  );
}
