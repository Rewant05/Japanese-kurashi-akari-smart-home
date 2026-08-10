import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サポート | 暮らし灯 - Kurashi Akari",
  description: "暮らし灯の製品サポート。セットアップガイド、トラブルシューティング、お問い合わせ方法。",
};

const supportCategories = [
  {
    title: "セットアップガイド",
    description: "初期設定から高度なカスタマイズまで、ステップバイステップでご案内します。",
    items: [
      "Sora Hub 初期設定ガイド",
      "Akari Light ペアリング方法",
      "Kaze Sensor キャリブレーション",
      "Mamoru Lock 取り付け手順",
      "シーンの作成・編集方法",
    ],
    icon: "📖",
  },
  {
    title: "トラブルシューティング",
    description: "よくある問題とその解決方法をまとめています。",
    items: [
      "デバイスが見つからない場合",
      "接続が不安定な場合",
      "ファームウェアアップデートの問題",
      "アプリの不具合報告",
      "バッテリー関連の問題",
    ],
    icon: "🔧",
  },
  {
    title: "保証・修理",
    description: "製品の保証内容と修理サービスについて。",
    items: [
      "保証期間と対象範囲",
      "修理依頼の手順",
      "交換品の申請",
      "延長保証プログラム",
      "リサイクルプログラム",
    ],
    icon: "🛡️",
  },
];

const contactMethods = [
  {
    method: "メール",
    detail: "support@kurashi-akari.jp",
    response: "24時間以内に返信",
    icon: "✉️",
  },
  {
    method: "電話",
    detail: "0120-XXX-XXXX",
    response: "平日 9:00-18:00",
    icon: "📞",
  },
  {
    method: "チャット",
    detail: "アプリ内チャットサポート",
    response: "平均応答時間 3分",
    icon: "💬",
  },
];

export default function SupportPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="サポート"
        subtitle="暮らし灯の製品に関するサポートとヘルプ。"
        tagline="Support"
      />

      {/* Support Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportCategories.map((category, i) => (
              <ScrollReveal key={category.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-warm-beige/50 card-hover h-full">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-medium text-charcoal mt-3 mb-2">{category.title}</h3>
                  <p className="text-sm text-ink-light/60 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-charcoal-light">
                        <span className="w-1 h-1 rounded-full bg-amber" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24 bg-warm-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif-jp text-2xl sm:text-3xl font-medium text-charcoal">
              お問い合わせ方法
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactMethods.map((item, i) => (
              <ScrollReveal key={item.method} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-warm-beige/50 text-center card-hover">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="font-medium text-charcoal mt-3">{item.method}</h3>
                  <p className="text-sm text-ink-light/70 mt-1">{item.detail}</p>
                  <p className="text-xs text-amber mt-2">{item.response}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10">
            <Link href="/faq" className="btn-secondary inline-block">
              よくある質問を見る →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  );
}
