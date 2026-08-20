import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import ProductSection from "@/components/ProductSection";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "製品一覧 | 暮らし灯 - Kurashi Akari",
  description: "Akari Light、Kaze Sensor、Mamoru Lock、Sora Hub。日本の暮らしのために設計されたスマートホーム製品。",
};

const productDetails = [
  {
    id: "akari-light",
    kanji: "灯",
    name: "灯ライト",
    tagline: "光を、時間に合わせて。",
    longDescription:
      "Akari Lightは、人間のサーカディアンリズムに基づいて色温度と明るさを自動調整する次世代スマート照明です。朝は自然光に近い爽やかな白色光で目覚めを促し、夜は暖かみのある光でリラックスタイムをサポート。Matterプロトコル対応で、Sora Hubとの連携はもちろん、他社のスマートホームエコシステムとも互換性があります。",
    features: [
      "2700K〜6500K 無段階色温度調整",
      "最大1200ルーメンの高輝度",
      "サーカディアンリズム自動調整",
      "人感センサー内蔵（オプション）",
      "Matter / Wi-Fi / Bluetooth対応",
      "25,000時間の長寿命",
    ],
    price: "¥12,800",
    accentColor: "#c4a35a",
  },
  {
    id: "kaze-sensor",
    kanji: "風",
    name: "風センサー",
    tagline: "空気を、見える化する。",
    longDescription:
      "Kaze Sensorは、温度、湿度、PM2.5、CO2、VOCの5つの指標をリアルタイムで計測する高精度環境センサーです。コンパクトなデザインながら、医療グレードのセンサーを搭載。スマートフォンアプリで環境データの履歴を確認でき、エアコンや空気清浄機との連携で最適な室内環境を自動維持します。",
    features: [
      "5つの環境指標をリアルタイム計測",
      "±0.3°C / ±2% RHの高精度",
      "PM2.5 レーザー散乱方式",
      "CO2 NDIR方式センサー",
      "e-inkディスプレイ搭載",
      "USB-C充電 / 最大72時間バッテリー",
    ],
    price: "¥8,800",
    accentColor: "#4a8ec2",
  },
  {
    id: "mamoru-lock",
    kanji: "守",
    name: "守ロック",
    tagline: "見えない安心を、玄関に。",
    longDescription:
      "Mamoru Lockは、指紋認証、NFCカード、スマートフォン、暗証番号の4つの解錠方法に対応したスマートロックです。国内主要ドアメーカーに対応し、工事不要で取り付け可能。外出時は自動施錠、帰宅時はスマートフォンの接近を検知して自動解錠。家族全員の入退室ログも確認できます。",
    features: [
      "4WAY認証（指紋/NFC/スマホ/暗証番号）",
      "自動施錠・自動解錠",
      "IP65防水・防塵",
      "電池寿命約12ヶ月",
      "入退室ログ記録",
      "緊急時物理キー対応",
    ],
    price: "¥29,800",
    accentColor: "#7a9e7e",
  },
  {
    id: "sora-hub",
    kanji: "空",
    name: "空ハブ",
    tagline: "すべてを、ひとつに。",
    longDescription:
      "Sora Hubは、暮らし灯の全デバイスを統合管理するセントラルハブです。エッジAIを搭載し、住人の生活パターンを学習して照明、空調、セキュリティを自動最適化。すべてのデータ処理はローカルで完結するため、プライバシーを完全に保護。Wi-Fi、Bluetooth、Thread、Matterに対応し、最大128台のデバイスを管理できます。",
    features: [
      "エッジAI搭載（NPU内蔵）",
      "Wi-Fi 6E / Bluetooth 5.3 / Thread / Matter",
      "最大128台デバイス管理",
      "32GBストレージ内蔵",
      "ローカルデータ処理",
      "音声コントロール対応",
    ],
    price: "¥39,800",
    accentColor: "#4a8ec2",
  },
];

export default function ProductsPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="製品ラインナップ"
        subtitle="日本の暮らしのために設計された、静かで美しいスマートデバイス。"
        tagline="製品"
      />

      {/* Product Overview */}
      <ProductSection />

      {/* Detailed product sections */}
      <section className="py-16 lg:py-24 bg-warm-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {productDetails.map((product, i) => (
            <ScrollReveal key={product.id} delay={0.1}>
              <div
                id={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-warm-beige/50 card-hover"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Visual */}
                  <div className="relative bg-gradient-to-br from-warm-cream to-warm-beige/30 p-8 lg:p-12 flex items-center justify-center min-h-[260px] overflow-hidden">
                    <Image
                      src={`/images/${product.id}.png`}
                      alt={product.name}
                      width={400}
                      height={300}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Details */}
                  <div className="p-8 lg:p-12">
                    <p
                      className="text-xs tracking-[0.2em] uppercase mb-2"
                      style={{ color: product.accentColor }}
                    >
                      {product.name}
                    </p>
                    <h3 className="font-serif-jp text-xl sm:text-2xl font-medium text-charcoal mb-2">
                      {product.tagline}
                    </h3>
                    <p className="text-sm text-ink-light/60 leading-relaxed mb-6">
                      {product.longDescription}
                    </p>

                    <h4 className="text-xs tracking-wider text-ink-light/40 uppercase mb-3">
                      主な特徴
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-2 text-sm text-charcoal-light"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: product.accentColor }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="btn-primary inline-block text-sm"
                    >
                      お問い合わせ
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
