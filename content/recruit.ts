export const recruitInfo = {
  title: "看護師（透析室）・臨床工学技士を募集しています",
  intro:
    "透析経験の有無は問いません。チームでサポートしながら習熟していただけます。見学やカジュアル面談も歓迎です。",
  bulletPoints: [
    "月給：27万円〜（経験・資格を考慮）",
    "昇給 年1回／賞与 年2回（前年度実績3.5ヶ月）",
    "日曜休診・シフト制（週休2日）／有給取得率80%以上",
    "社会保険完備・退職金制度・研修費補助あり",
  ],
  benefits: [
    "透析資格取得支援・学会参加費補助",
    "独身寮・住宅手当あり（条件あり）",
    "フレックスシフト導入で家庭との両立をサポート",
  ],
  contacts: [
    { type: "phone", label: "採用窓口", value: "025-385-8686" },
    { type: "mail", label: "メール", value: "recruit@koyomc.com" },
  ],
  memo: "応募書類（履歴書・職務経歴書）を郵送またはメール添付でお送りください。書類到着後、1週間以内にご連絡いたします。",
};

export const jobPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "透析室 看護師・臨床工学技士",
  employmentType: "FULL_TIME",
  datePosted: "2024-06-01",
  validThrough: "2024-12-31",
  description:
    "透析室での看護業務／透析監視装置の操作。研修制度あり・未経験可。見学随時受付中。",
  hiringOrganization: {
    "@type": "MedicalOrganization",
    name: "向陽メディカルクリニック",
    address: "〒950-0103 新潟県新潟市江南区亀田向陽3丁目9-25",
    telephone: "025-385-8686",
  },
  jobLocation: {
    "@type": "Place",
    address: "〒950-0103 新潟県新潟市江南区亀田向陽3丁目9-25",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "025-385-8686",
    email: "recruit@koyomc.com",
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "JPY",
    value: {
      "@type": "QuantitativeValue",
      minValue: 270000,
      unitText: "MONTH",
    },
  },
};
