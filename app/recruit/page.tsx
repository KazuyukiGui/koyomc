import Script from "next/script";

import { Section } from "@/components/Section";
import { SharedButton } from "@/components/SharedButton";
import { clinicInfo } from "@/content/home";
import { recruitInfo, jobPostingJsonLd } from "@/content/recruit";

export const metadata = {
  title: "採用情報｜向陽メディカルクリニック",
  description: "向陽メディカルクリニックの看護師・臨床工学技士採用情報。募集要項、待遇、応募方法をご紹介します。",
};

export default function RecruitPage() {
  return (
    <>
      <Script id="jobposting-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }} />

      <section className="bg-wave-blue py-20 md:py-24">
        <div className="container text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-white/70 px-4 py-1 text-xs tracking-[0.3em] text-primary">
            RECRUIT
          </span>
          <h1 className="mt-6 font-display text-3xl leading-tight text-primary-dark md:text-5xl">採用情報</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-subtext md:text-lg">{recruitInfo.intro}</p>
          <div className="mt-6 flex justify-center gap-4">
            <SharedButton href={`tel:${clinicInfo.phone}`}>採用窓口に電話する</SharedButton>
            <SharedButton href={`mailto:${clinicInfo.email}`} variant="secondary">メールで問い合わせる</SharedButton>
          </div>
        </div>
      </section>

      <Section eyebrow="POSITION" title={recruitInfo.title} subtitle="透析室で働くスタッフを募集しています。未経験の方でも段階的な研修とサポートがあります。">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
            <h2 className="font-display text-lg text-primary-dark">募集概要</h2>
            <ul className="mt-3 space-y-2 text-sm text-subtext md:text-base">
              {recruitInfo.bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-primary"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
            <h2 className="font-display text-lg text-primary-dark">待遇・サポート</h2>
            <ul className="mt-3 space-y-2 text-sm text-subtext md:text-base">
              {recruitInfo.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-accent"></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="APPLY" title="応募・お問い合わせ" subtitle="見学やカジュアル面談も歓迎しています。お気軽にご連絡ください。">
        <div className="grid gap-6 md:grid-cols-2">
          {recruitInfo.contacts.map((contact) => (
            <div key={contact.value} className="rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">{contact.label}</div>
              <p className="mt-2 text-lg font-semibold text-primary">
                {contact.type === "phone" ? (
                  <a href={`tel:${contact.value}`}>{contact.value}</a>
                ) : (
                  <a href={`mailto:${contact.value}`} className="underline">{contact.value}</a>
                )}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-3xl border border-primary/20 bg-primary-light/50 p-6 text-sm text-text md:text-base">{recruitInfo.memo}</p>
      </Section>
    </>
  );
}
