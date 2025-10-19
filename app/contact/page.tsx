import { Section } from "@/components/Section";
import { SharedButton } from "@/components/SharedButton";
import { clinicInfo } from "@/content/home";
import { accessInfo, contactChannels } from "@/content/clinic";

export const metadata = {
  title: "お問い合わせ・アクセス｜向陽メディカルクリニック",
  description: "向陽メディカルクリニックの連絡先、アクセス情報、マップを掲載。見学や転院のご相談も受け付けています。",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-wave-blue py-20 md:py-24">
        <div className="container text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-white/70 px-4 py-1 text-xs tracking-[0.3em] text-primary">
            CONTACT
          </span>
          <h1 className="mt-6 font-display text-3xl leading-tight text-primary-dark md:text-5xl">お問い合わせ・アクセス</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-subtext md:text-lg">
            見学・初診・転院・旅行透析など、お気軽にお問い合わせください。電話・メールでのご連絡を受け付けています。
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <SharedButton href={`tel:${clinicInfo.phone}`}>電話する（{clinicInfo.phone}）</SharedButton>
            <SharedButton href={`mailto:${clinicInfo.email}`} variant="secondary">メールする</SharedButton>
          </div>
        </div>
      </section>

      <Section eyebrow="CONTACT" title="連絡先" subtitle="お急ぎの方はお電話でご連絡ください。メールは24時間受け付けており、診療時間内に順次ご返信します。" align="center">
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
          {contactChannels.map((channel) => (
            <div key={channel.value} className="rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">{channel.label}</div>
              <p className="mt-2 text-lg font-semibold text-primary">
                {channel.type === "mail" ? (
                  <a href={`mailto:${channel.value}`} className="underline">{channel.value}</a>
                ) : channel.type === "phone" ? (
                  <a href={`tel:${channel.value}`}>{channel.value}</a>
                ) : (
                  channel.value
                )}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="ACCESS" title="アクセス" subtitle="JR信越本線 亀田駅から徒歩約5分。無料送迎と駐車場をご用意しています。">
        <div className="grid gap-8 md:grid-cols-[1fr,1fr] md:items-start">
          <div className="space-y-4 rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
            <div>
              <h2 className="font-display text-xl text-primary-dark">所在地</h2>
              <p className="mt-1 text-sm text-subtext md:text-base">{clinicInfo.address}</p>
            </div>
            <ul className="space-y-2 text-sm text-subtext md:text-base">
              <li>{accessInfo.station}</li>
              <li>{accessInfo.parking}</li>
              <li>{accessInfo.shuttle}</li>
            </ul>
            <div className="rounded-2xl border border-primary/20 bg-primary-light/50 p-4 text-sm text-text">
              <p>無料送迎サービスをご希望の方は、初診時または電話でご相談ください。</p>
            </div>
            <SharedButton href={`tel:${clinicInfo.phone}`}>送迎について相談する</SharedButton>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border/60 shadow-soft">
            <iframe
              title="向陽メディカルクリニック アクセスマップ"
              src={accessInfo.mapEmbed}
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </>
  );
}
