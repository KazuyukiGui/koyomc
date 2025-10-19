import { Section } from "@/components/Section";
import { SharedButton } from "@/components/SharedButton";
import { dialysisJourney, dialysisSchedule, outpatientHours, dialysisFaq } from "@/content/dialysis";
import { clinicInfo } from "@/content/home";

const dialysisDays = ["月", "火", "水", "木", "金", "土"] as const;

export const metadata = {
  title: "透析のご案内｜向陽メディカルクリニック",
  description: "透析開始までの流れ、透析スケジュール、外来診療時間、よくある質問をご紹介します。",
};

export default function DialysisPage() {
  return (
    <>
      <section className="bg-wave-blue py-20 md:py-24">
        <div className="container flex flex-col gap-6 text-center">
          <span className="mx-auto inline-flex items-center rounded-full border border-primary/20 bg-white/70 px-4 py-1 text-xs tracking-[0.3em] text-primary">
            DIALYSIS
          </span>
          <h1 className="font-display text-3xl leading-tight text-primary-dark md:text-5xl">人工透析のご案内</h1>
          <p className="mx-auto max-w-3xl text-base text-subtext md:text-lg">
            透析開始までのステップやスケジュール、外来診療時間をまとめました。旅行透析や臨時透析もご相談いただけます。
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <SharedButton href="/contact">見学・初診を相談する</SharedButton>
            <SharedButton href={`tel:${clinicInfo.phone}`} variant="secondary">電話で問い合わせる</SharedButton>
          </div>
        </div>
      </section>

      <Section eyebrow="FLOW" title="透析開始までの流れ" subtitle="初めての方・転院をご検討の方は、下記のステップでご案内します。" align="center">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dialysisJourney.map((step, index) => (
            <div key={step.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h2 className="font-display text-lg text-primary-dark">{step.title}</h2>
              <p className="text-sm text-subtext md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="SCHEDULE" title="透析スケジュール" subtitle="血液透析の時間帯は以下の通りです。臨時透析をご希望の場合は事前にご相談ください。">
        <div className="rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
          <div className="overflow-x-auto">
            <table className="min-w-[600px] w-full text-center text-sm md:text-base">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-2 font-medium">時間</th>
                  {dialysisDays.map((day) => (
                    <th key={day} className="py-2 font-medium">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dialysisSchedule.rows.map((row) => (
                  <tr key={row.slot} className="odd:bg-primary-light/40">
                    <td className="py-2 font-medium text-text">{row.slot}</td>
                    {row.days.map((value, index) => (
                      <td key={`${row.slot}-${index}`} className="py-2">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-subtext md:text-sm">※送迎時間はエリアによって異なります。担当スタッフが個別にご案内いたします。</p>
        </div>
      </Section>

      <Section eyebrow="OUTPATIENT" title="外来診療・CAPD" subtitle="腎臓内科外来・腹膜透析（CAPD）の診療時間です。予約制となります。">
        <div className="rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
          <div className="overflow-x-auto">
            <table className="min-w-[560px] w-full text-left text-sm">
              <thead>
                <tr className="bg-primary/10 text-text">
                  <th className="px-3 py-2 font-medium">診療内容</th>
                  {dialysisDays.map((day) => (
                    <th key={`out-${day}`} className="px-3 py-2 font-medium text-center">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {outpatientHours.map((row) => (
                  <tr key={row.service} className="border-b border-border/60 last:border-none">
                    <td className="px-3 py-3 align-top">
                      <div className="font-medium text-text">{row.service}</div>
                      <div className="mt-1 text-xs text-subtext">{row.note}</div>
                    </td>
                    {dialysisDays.map((dayKey) => (
                      <td key={`${row.service}-${dayKey}`} className="px-3 py-3 text-center">
                        {row.schedule[
                          dayKey === "月" ? "monday" :
                          dayKey === "火" ? "tuesday" :
                          dayKey === "水" ? "wednesday" :
                          dayKey === "木" ? "thursday" :
                          dayKey === "金" ? "friday" :
                          "saturday"
                        ] ?? "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="よくあるご質問" subtitle="透析に関するご不安やよくあるご質問をまとめました。">
        <div className="grid gap-4">
          {dialysisFaq.map((item) => (
            <details key={item.question} className="group rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
              <summary className="cursor-pointer list-none text-lg font-semibold text-primary-dark">{item.question}</summary>
              <p className="mt-3 text-sm text-subtext md:text-base">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="CONTACT"
        title="透析に関するお問い合わせ"
        subtitle="転院・臨時透析・旅行透析などのご相談は、お電話またはお問い合わせフォームから承ります。"
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
      />
    </>
  );
}
