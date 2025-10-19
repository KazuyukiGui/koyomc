export const dialysisJourney = [
  {
    title: "お問い合わせ・ご見学",
    description: "お電話またはメールでご相談ください。透析室の雰囲気や送迎ルートを丁寧にご案内します。",
  },
  {
    title: "初診・カウンセリング",
    description: "医師による診察と血液検査、透析条件の確認を行います。紹介状や検査データをお預かりし、最適な透析計画を立てます。",
  },
  {
    title: "透析スタート",
    description: "透析条件に合わせてスタッフが丁寧にサポート。治療中も看護師・臨床工学技士が常時巡回します。",
  },
  {
    title: "継続サポート",
    description: "月例カンファレンスや栄養相談、送迎調整を行い、安心して治療を続けられるよう伴走します。",
  },
];

export const dialysisSchedule = {
  note: "人工透析は下記の時間帯で実施しています。〇：実施 ／ ×：休止",
  rows: [
    { slot: "9:00～", days: ["〇", "〇", "〇", "〇", "〇", "〇"] },
    { slot: "14:00～", days: ["〇", "×", "〇", "×", "〇", "×"] },
    { slot: "17:00～", days: ["〇", "×", "〇", "×", "〇", "×"] },
  ],
};

export const outpatientHours = [
  {
    service: "腎臓内科 外来",
    note: "予約制／診察は火・金の午前のみ",
    schedule: {
      monday: "-",
      tuesday: "-",
      wednesday: "10:30-12:00",
      thursday: "-",
      friday: "10:30-12:00",
      saturday: "-",
    },
  },
  {
    service: "CAPD（腹膜透析）",
    note: "完全予約制",
    schedule: {
      monday: "-",
      tuesday: "-",
      wednesday: "14:00-17:00",
      thursday: "-",
      friday: "14:00-17:00",
      saturday: "-",
    },
  },
];

export const dialysisFaq = [
  {
    question: "旅行透析・臨時透析は対応できますか？",
    answer: "対応可能です。透析条件などを確認しますので、主治医の紹介状をご準備ください。",
  },
  {
    question: "送迎の時間帯はどのように決まりますか？",
    answer: "ご自宅のエリアに合わせて送迎スタッフが経路と時間を調整し、事前にご連絡いたします。",
  },
  {
    question: "合併症の相談はできますか？",
    answer: "地域の基幹病院や専門医と連携しており、必要な場合は速やかに紹介し情報共有を行います。",
  },
];
