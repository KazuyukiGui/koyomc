import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";

const notoSans = Noto_Sans_JP({ subsets: ["latin"], display: "swap", variable: "--font-noto-sans-jp" });
const shipporiMincho = Shippori_Mincho({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap", variable: "--font-shippori-mincho" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.koyomc.com"),
  title: "向陽メディカルクリニック｜新潟市江南区の人工透析専門クリニック",
  description:
    "新潟市江南区の向陽メディカルクリニック。人工透析専門として最新設備と経験豊富なスタッフが患者さんの安心を支えます。無料送迎・駐車場あり。",
  keywords: ["向陽メディカルクリニック", "人工透析", "新潟市江南区", "血液透析", "腎臓内科"],
  twitter: { card: "summary_large_image" },
  openGraph: {
    type: "website",
    title: "向陽メディカルクリニック｜新潟市江南区の人工透析専門クリニック",
    description:
      "人工透析に特化した向陽メディカルクリニック。安心・安全な透析環境と手厚いサポート体制をご紹介します。",
    url: "https://www.koyomc.com",
    siteName: "向陽メディカルクリニック",
    locale: "ja_JP",
    images: [
      { url: "/ogp/default.jpg", width: 1200, height: 630, alt: "向陽メディカルクリニック 透析室" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${shipporiMincho.variable}`}>
      <body className="min-h-screen bg-background text-text antialiased">
        <header className="sticky top-0 z-50 border-b border-border/60 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/85">
          <div className="container flex h-16 items-center justify-between">
            <a href="/" className="font-display text-lg text-primary-dark">向陽メディカルクリニック</a>
            <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
              <a href="/about" className="transition hover:text-primary">当院について</a>
              <a href="/dialysis" className="transition hover:text-primary">診療案内</a>
              <a href="/support" className="transition hover:text-primary">サポート体制</a>
              <a href="/news" className="transition hover:text-primary">お知らせ</a>
              <a href="/recruit" className="transition hover:text-primary">採用情報</a>
              <a href="/contact" className="inline-flex items-center rounded-md bg-primary text-white px-3 py-1.5 shadow-sm transition hover:bg-primary-dark">お問い合わせ</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-24 border-t border-border/60 bg-surface py-12 text-sm text-subtext">
          <div className="container grid gap-6 md:grid-cols-[2fr,1fr]">
            <div>
              <p className="font-display text-lg text-primary-dark">向陽メディカルクリニック</p>
              <p className="mt-2">〒950-0103 新潟県新潟市江南区亀田向陽3丁目9-25</p>
              <p className="mt-1">TEL：<a href="tel:025-385-8686" className="text-primary">025-385-8686</a>／FAX：025-385-8687</p>
            </div>
            <div className="md:text-right">
              <p>診療時間：月〜土 9:00-17:00（午後は透析のみ）</p>
              <p className="mt-2">無料送迎サービス／駐車場 20台</p>
            </div>
            <p className="md:col-span-2">© {new Date().getFullYear()} 向陽メディカルクリニック</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
