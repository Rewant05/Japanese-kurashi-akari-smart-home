"use client";

import ScrollReveal from "./ScrollReveal";

const products = [
  {
    id: "akari-light",
    kanji: "灯",
    image: "/images/akari-light.png",
    name: "AKARI LIGHT",
    nameJp: "Akari Light",
    description: "サーカディアンリズムに基づくアダプティブ照明。2700K〜6500Kの色温度を一日のリズムに合わせて自動調整します。",
    specs: [
      { label: "色温度", value: "2700K - 6500K" },
      { label: "明るさ", value: "最大 1200lm" },
      { label: "接続", value: "Wi-Fi / Bluetooth" },
      { label: "寿命", value: "25,000時間" },
    ],
    status: "販売中",
    statusColor: "#7a9e7e",
    accentColor: "#c4a35a",
  },
  {
    id: "kaze-sensor",
    kanji: "風",
    image: "/images/kaze-sensor.png",
    name: "KAZE SENSOR",
    nameJp: "Kaze Sensor",
    description: "温度、湿度、PM2.5、CO2、VOCを高精度でリアルタイム計測。快適な空間環境を数値で可視化します。",
    specs: [
      { label: "センサー", value: "温度/湿度/PM2.5/CO2/VOC" },
      { label: "精度", value: "±0.3°C / ±2% RH" },
      { label: "接続", value: "Wi-Fi / Thread" },
      { label: "電源", value: "USB-C / 充電式" },
    ],
    status: "販売中",
    statusColor: "#7a9e7e",
    accentColor: "#4a8ec2",
  },
  {
    id: "mamoru-lock",
    kanji: "守",
    image: "/images/mamoru-lock.png",
    name: "MAMORU LOCK",
    nameJp: "Mamoru Lock",
    description: "指紋認証、NFCカード、スマートフォン、暗証番号の4WAYロック。自動施錠と遠隔操作で安全な暮らしを。",
    specs: [
      { label: "認証", value: "指紋/NFC/スマホ/暗証番号" },
      { label: "電池寿命", value: "約12ヶ月" },
      { label: "防水", value: "IP65" },
      { label: "対応", value: "主要ドアメーカー対応" },
    ],
    status: "予約受付中",
    statusColor: "#c4a35a",
    accentColor: "#7a9e7e",
  },
  {
    id: "sora-hub",
    kanji: "空",
    image: "/images/sora-hub.png",
    name: "SORA HUB",
    nameJp: "Sora Hub",
    description: "すべての暮らし灯デバイスを統合管理するセントラルハブ。AIが生活パターンを学習し、自動で最適化します。",
    specs: [
      { label: "プロトコル", value: "Wi-Fi/Bluetooth/Thread/Matter" },
      { label: "処理", value: "エッジAI搭載" },
      { label: "デバイス数", value: "最大128台" },
      { label: "ストレージ", value: "32GB内蔵" },
    ],
    status: "販売中",
    statusColor: "#7a9e7e",
    accentColor: "#4a8ec2",
  },
];

export default function ProductSection() {
  return (
    <section id="products" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-amber uppercase mb-3">
            製品
          </p>
          <h2 className="font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal">
            製品ラインナップ
          </h2>
          <p className="mt-4 text-ink-light/70 max-w-xl mx-auto">
            日本の暮らしのために設計された、静かで美しいスマートデバイス。
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.1}>
              <div className="group relative bg-white rounded-xl border border-warm-beige/50 overflow-hidden card-hover h-full">
                {/* Product Visual */}
                <div className="relative h-48 bg-gradient-to-br from-warm-cream to-warm-beige/30 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.nameJp}
                    className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Accent glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${product.accentColor}08 0%, transparent 70%)`,
                    }}
                  />
                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-white/80 backdrop-blur-sm border border-white/20 shadow-sm"
                      style={{
                        color: product.statusColor,
                      }}
                    >
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: product.statusColor }}
                      />
                      {product.status}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-1"
                    style={{ color: product.accentColor }}
                  >
                    {product.name}
                  </p>
                  <h3 className="font-medium text-charcoal mb-2">
                    {product.nameJp}
                  </h3>
                  <p className="text-xs text-ink-light/60 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="space-y-1.5 border-t border-warm-beige/50 pt-3">
                    {product.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between text-[11px]"
                      >
                        <span className="text-ink-light/50">{spec.label}</span>
                        <span className="text-charcoal-light font-medium">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
