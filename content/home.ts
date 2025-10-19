import { clinicInfo, accessInfo } from "./clinic";
import { featurePillars } from "./about";
import { dialysisJourney } from "./dialysis";
import { supportServices } from "./support";
import { newsItems } from "./news";

export { clinicInfo, accessInfo };

export const hero = {
  eyebrow: "新潟市江南区・人工透析",
  headline: "透析治療と毎日の暮らしを、もっと安らかに。",
  subheadline:
    "医師・看護師・臨床工学技士・管理栄養士が一体となり、安心して治療を続けられる体制を整えています。",
  highlights: [
    "透析用ベッド30台・男女別エリア完備",
    "経験豊富なスタッフが24時間サポート",
    accessInfo.summary,
  ],
  ctas: [
    { label: "初診・見学のご相談", href: "/contact", variant: "primary" },
    { label: "透析の流れを見る", href: "/dialysis", variant: "secondary" },
  ],
};

export const homeFeatures = featurePillars;

export const homeJourney = dialysisJourney;

export const homeSupport = supportServices.slice(0, 3);

export const homeNews = newsItems.slice(0, 2);
