import Image from "next/image";

import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SharedButton } from "@/components/SharedButton";
import {
  clinicInfo,
  homeFeatures,
  homeJourney,
  homeNews,
  homeSupport,
} from "@/content/home";
import { greeting } from "@/content/about";
import { accessInfo } from "@/content/clinic";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        id="about"
        eyebrow="GREETING"
        title="患者さまとご家族に寄り添う、地域の透析専門クリニック"
        subtitle="透析治療を続けながらも、その人らしい生活を送れるよう医療と生活支援の両面からサポートしています。"
        actions={<SharedButton href="/about" variant="secondary">当院について詳しく見る</SharedButton>}
        variant="tint"
      >
        <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-6 text-subtext">
            <p className="text-base leading-relaxed md:text-lg">{greeting.message}</p>
            <ul className="space-y-3">
              {greeting.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-3 w-3 flex-none rounded-full bg-primary"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 text-sm text-text">
              <p>{greeting.director.role}</p>
              <p className="mt-1 font-medium">{greeting.director.name}</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-10 hidden h-32 w-32 rounded-full bg-primary/10 blur-2xl md:block" aria-hidden />
            <div className="absolute -right-12 -bottom-12 hidden h-40 w-40 rounded-full bg-secondary/20 blur-3xl md:block" aria-hidden />
            <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-white p-4 shadow-soft">
              <Image
                src="/images/support-visual.svg"
                alt="スタッフが並ぶサポート体制のビジュアル"
                width={520}
                height={360}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="features"
        eyebrow="FEATURES"
        title="向陽メディカルクリニックの特長"
        subtitle="透析治療の質・快適さ・生活サポートのバランスを重視し、治療と暮らしの両方に寄り添います。"
        actions={<SharedButton href="/about">特長を詳しく見る</SharedButton>}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {homeFeatures.map((feature) => (
            <div key={feature.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-surface p-6 shadow-soft">
              <span className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold tracking-[0.3em] text-primary">
                {feature.badge}
              </span>
              <h3 className="font-display text-xl text-primary-dark">{feature.title}</h3>
              <p className="text-sm text-subtext md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="journey"
        eyebrow="FLOW"
        title="透析開始までの流れ"
        subtitle="初めての方も転院を検討されている方も、安心して治療を始められるよう4つのステップでご案内します。"
        actions={<SharedButton href="/dialysis" variant="secondary">透析について詳しく</SharedButton>}
        variant="reverse"
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr,1.2fr] lg:items-center">
          <div className="relative order-2 overflow-hidden rounded-[28px] border border-border/60 bg-white p-4 shadow-soft lg:order-1">
            <Image
              src="/images/facility-visual.svg"
              alt="透析設備のイメージ"
              width={520}
              height={360}
              className="w-full"
            />
          </div>
          <ol className="order-1 grid gap-6 text-subtext lg:order-2">
            {homeJourney.map((step, index) => (
              <li key={step.title} className="flex flex-col gap-2 rounded-3xl border border-primary/15 bg-white/70 p-6 shadow-soft backdrop-blur">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="font-display text-xl text-primary-dark">{step.title}</h3>
                <p className="text-sm md:text-base">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section
        id="support"
        eyebrow="SUPPORT"
        title="安心のサポート体制"
        subtitle="通院や生活面での不安を減らし、透析と日常を両立できるよう多職種チームで支援しています。"
        actions={<SharedButton href="/support">サポート内容を見る</SharedButton>}
        variant="tint"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {homeSupport.map((item) => (
            <div key={item.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/40 bg-white p-6 shadow-soft">
              <h3 className="font-display text-xl text-primary-dark">{item.title}</h3>
              <p className="text-sm text-subtext md:text-base">{item.details}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="news" eyebrow="NEWS" title="お知らせ" align="center" actions={<SharedButton href="/news" variant="secondary">お知らせ一覧へ</SharedButton>}>
        <div className="mx-auto grid max-w-3xl gap-4">
          {homeNews.map((item) => (
            <article key={item.date} className="flex flex-col gap-2 rounded-3xl border border-border/60 bg-surface p-6 shadow-sm md:flex-row md:items-center md:justify-between">
              <div>
                <time className="text-xs uppercase tracking-[0.2em] text-primary">{item.date}</time>
                <h3 className="mt-1 font-medium text-text">{item.title}</h3>
              </div>
              <a href={item.href} className="text-sm text-primary underline">詳しく見る</a>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="CONTACT"
        title="お問い合わせ"
        subtitle="転院・臨時透析・見学などのお問い合わせはお電話またはメールで承ります。"
        align="center"
        actions={
          <>
            <SharedButton href={`tel:${clinicInfo.phone}`} variant="primary">
              電話する（{clinicInfo.phone}）
            </SharedButton>
            <SharedButton href={`mailto:${clinicInfo.email}`} variant="secondary">
              メールする
            </SharedButton>
          </>
        }
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-border/60 bg-surface p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-display text-xl text-primary-dark">電話受付</h3>
              <p className="mt-2 text-sm text-subtext">月〜土 9:00-17:00（木・土 午後は透析のみ）</p>
              <a href={`tel:${clinicInfo.phone}`} className="mt-4 block text-2xl font-semibold text-primary">
                {clinicInfo.phone}
              </a>
            </div>
            <div>
              <h3 className="font-display text-xl text-primary-dark">アクセス</h3>
              <p className="mt-2 text-sm text-subtext">{accessInfo.summary}</p>
              <a href="/contact" className="mt-4 inline-flex items-center text-sm text-primary underline">
                アクセス情報を見る
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
