import { Section } from "@/components/Section";
import { SharedButton } from "@/components/SharedButton";
import { newsItems, eventHighlights } from "@/content/news";

export const metadata = {
  title: "お知らせ｜向陽メディカルクリニック",
  description: "向陽メディカルクリニックからのお知らせ、イベント情報、最新ニュースを掲載しています。",
};

export default function NewsPage() {
  return (
    <>
      <section className="bg-wave-blue py-20 md:py-24">
        <div className="container text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-white/70 px-4 py-1 text-xs tracking-[0.3em] text-primary">
            NEWS
          </span>
          <h1 className="mt-6 font-display text-3xl leading-tight text-primary-dark md:text-5xl">お知らせ</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-subtext md:text-lg">
            診療に関するお知らせやイベント情報、休診案内などを随時更新しています。
          </p>
        </div>
      </section>

      <Section eyebrow="LATEST" title="最新のお知らせ">
        <div className="grid gap-4">
          {newsItems.map((item) => (
            <article key={item.date} className="rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <time className="text-xs uppercase tracking-[0.2em] text-primary">{item.date}</time>
                  <h2 className="mt-1 font-medium text-text">{item.title}</h2>
                </div>
                <a href={item.href} className="text-sm text-primary underline">詳しく見る</a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="EVENT" title="イベント・セミナー" subtitle="見学会や栄養セミナーなど、患者さま・ご家族向けのイベントを開催しています。">
        <div className="grid gap-6 md:grid-cols-2">
          {eventHighlights.map((event) => (
            <div key={event.title} className="rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg text-primary-dark">{event.title}</h3>
              <p className="mt-2 text-sm text-subtext md:text-base">{event.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <SharedButton href="/contact" variant="secondary">イベント参加を問い合わせる</SharedButton>
        </div>
      </Section>
    </>
  );
}
