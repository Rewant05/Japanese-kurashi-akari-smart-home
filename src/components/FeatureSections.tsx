"use client";

import ScrollReveal from "./ScrollReveal";

const features = [
  {
    id: "lighting",
    tagline: "Smart Lighting",
    title: "光を、時間に合わせて。",
    description:
      "朝は自然光のように穏やかに目覚め、昼は集中力を高める白色光、夕方はリラックスできる暖色へ。暮らし灯のアダプティブ照明は、一日のリズムに合わせて自動で調整されます。",
    details: [
      "サーカディアンリズムに基づく自動調光",
      "2700K〜6500Kの色温度制御",
      "人感センサーとの連携",
      "シーンごとのプリセット設定",
    ],
    accentColor: "#c4a35a",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="14" r="8" stroke="#c4a35a" strokeWidth="1.5" />
        <path d="M12 24h8M13 27h6" stroke="#c4a35a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 2v4M4 14H8M24 14h4M7 5l3 3M25 5l-3 3" stroke="#c4a35a" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "climate",
    tagline: "Climate Control",
    title: "空気まで、心地よく。",
    description:
      "温度、湿度、空気質をリアルタイムでモニタリング。季節や天候、在室状況に応じて、最も快適な空間を自動で維持します。PM2.5やCO2濃度も常に最適レベルに。",
    details: [
      "温度・湿度のAI最適化",
      "PM2.5/CO2リアルタイム監視",
      "換気の自動制御",
      "エアコンとの統合制御",
    ],
    accentColor: "#4a8ec2",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4v24M16 4c-2 4-6 6-10 6M16 4c2 4 6 6 10 6M16 28c-2-4-6-6-10-6M16 28c2-4 6-6 10-6M16 16c-4-2-6-6-6-10M16 16c4-2 6-6 6-10" stroke="#4a8ec2" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "security",
    tagline: "Security",
    title: "見えない安心を。",
    description:
      "スマートロック、モーションセンサー、窓開閉センサーが連携し、24時間家族を守ります。外出中もスマートフォンからリアルタイムに状況を確認できます。",
    details: [
      "スマートロック自動施錠",
      "モーション検知と通知",
      "窓・ドア開閉センサー",
      "リアルタイム映像確認",
    ],
    accentColor: "#7a9e7e",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="14" width="16" height="14" rx="2" stroke="#7a9e7e" strokeWidth="1.5" />
        <path d="M11 14V10a5 5 0 0110 0v4" stroke="#7a9e7e" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="21" r="2" fill="#7a9e7e" />
      </svg>
    ),
  },
  {
    id: "energy",
    tagline: "Energy",
    title: "使う電気を、知る。",
    description:
      "各部屋・各デバイスの電力消費をリアルタイムで可視化。使用パターンを学習し、無駄なエネルギー消費を自動で削減。月間レポートで節約効果を実感できます。",
    details: [
      "リアルタイム電力消費表示",
      "デバイスごとの消費分析",
      "AI節電アドバイス",
      "月間エネルギーレポート",
    ],
    accentColor: "#c4a35a",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M18 4L10 18h6l-2 10 8-14h-6l2-10z" stroke="#c4a35a" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function FeatureSections() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <p className="text-xs tracking-[0.3em] text-amber uppercase mb-3">
            Features
          </p>
          <h2 className="font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal">
            暮らしを支えるテクノロジー
          </h2>
        </ScrollReveal>

        <div className="space-y-20 lg:space-y-32">
          {features.map((feature, i) => (
            <ScrollReveal
              key={feature.id}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={0.1}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Text */}
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <p
                    className="text-xs tracking-[0.2em] uppercase mb-3"
                    style={{ color: feature.accentColor }}
                  >
                    {feature.tagline}
                  </p>
                  <h3 className="font-serif-jp text-2xl sm:text-3xl lg:text-4xl font-medium text-charcoal mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-ink-light/70 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2.5">
                    {feature.details.map((detail, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-sm text-charcoal-light"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: feature.accentColor }}
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="relative aspect-[4/3] rounded-xl bg-gradient-to-br from-warm-cream to-warm-beige/50 border border-warm-beige/50 overflow-hidden shoji-pattern flex items-center justify-center">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${feature.accentColor}15`,
                        boxShadow: `0 0 60px 20px ${feature.accentColor}10`,
                      }}
                    >
                      {feature.icon}
                    </div>
                    {/* Decorative circles */}
                    <div
                      className="absolute w-48 h-48 rounded-full border opacity-10"
                      style={{
                        borderColor: feature.accentColor,
                        top: "20%",
                        left: "10%",
                      }}
                    />
                    <div
                      className="absolute w-32 h-32 rounded-full border opacity-5"
                      style={{
                        borderColor: feature.accentColor,
                        bottom: "15%",
                        right: "15%",
                      }}
                    />
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
