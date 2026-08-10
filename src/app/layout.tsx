import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "暮らし灯 | Kurashi Akari — 日本のスマートホーム",
  description:
    "暮らし灯は、日本の伝統的な暮らしとモダンテクノロジーを融合したプレミアムスマートホームブランドです。照明、空調、セキュリティ、エネルギーを一つのインテリジェントな住まいに。",
  keywords: [
    "スマートホーム",
    "暮らし灯",
    "Kurashi Akari",
    "ホームオートメーション",
    "日本",
    "smart home",
    "connected living",
  ],
  openGraph: {
    title: "暮らし灯 | Kurashi Akari",
    description:
      "日本の暮らしに、静かなテクノロジーを。Quiet technology for Japanese living.",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
