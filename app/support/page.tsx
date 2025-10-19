import { Section } from "@/components/Section";
import { SharedButton } from "@/components/SharedButton";
import { supportServices, lifestyleTips } from "@/content/support";
import { clinicInfo } from "@/content/home";

export const metadata = {
  title: "サポート体制｜向陽メディカルクリニック",
  description: "無料送迎、生活支援プログラム、地域医療連携、栄養指導など向陽メディカルクリニックのサポート体制をご紹介します。",
};

export default function SupportPage() {
  return (
    <>
      <section className="bg-wave-blue py-20 md:py-24">
        <div className="container text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-white/70 px-4 py-1 text-xs tracking-[0.3em] text-primary">
            SUPPORT
          </span>
          <h1 className="mt-6 font-display text-3xl leading-tight text-primary-dark md:text-5xl">安心のサポート体制</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-subtext md:text-lg">
            通院や生活面の不安を減らし、透析治療と日常生活を両立できるよう多職種チームが伴走します。
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <SharedButton href="/contact">見学・相談を申し込む</SharedButton>
            <SharedButton href={`tel:${clinicInfo.phone}`} variant="secondary">電話で問い合わせる</SharedButton>
          </div>
        </div>
      </section>

      <Section eyebrow="PROGRAM" title="ご提供している主なサポート" subtitle="患者さまとご家族の暮らしを支えるため、幅広いサポートメニューをご用意しています。">
        <div className="grid gap-6 md:grid-cols-2">
          {supportServices.map((service) => (
            <div key={service.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
              <h2 className="font-display text-xl text-primary-dark">{service.title}</h2>
              <p className="text-sm text-subtext md:text-base">{service.details}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="LIFESTYLE" title="生活支援メニュー" subtitle="栄養相談や制度手続きの支援など、透析と生活の両立をバックアップします。" variant="reverse">
        <div className="grid gap-6 md:grid-cols-3">
          {lifestyleTips.map((tip) => (
            <div key={tip.title} className="rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg text-primary-dark">{tip.title}</h3>
              <p className="mt-2 text-sm text-subtext md:text-base">{tip.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="CONTACT"
        title="サポートに関するお問い合わせ"
        subtitle="送迎エリアや生活支援プログラムの詳細は、いつでもお気軽にご相談ください。"
        align="center"
        actions={
          <>
            <SharedButton href={`tel:${clinicInfo.phone}`} variant="primary">
              電話する（{clinicInfo.phone}）
            </SharedButton>
            <SharedButton href="/contact" variant="secondary">
              お問い合わせページへ
            </SharedButton>
          </>
        }
      >
        <div className="mx-auto mt-6 max-w-3xl rounded-3xl border border-border/60 bg-white p-6 text-sm text-subtext shadow-soft md:text-base">
          <p>無料送迎の対象エリアや時間、栄養相談・制度手続きのスケジュールなど、詳細は担当スタッフが個別にご案内します。お気軽にお問合せください。</p>
        </div>
      </Section>
    </>
  );
}
