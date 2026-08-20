import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export const metadata: Metadata = {
  title: "テクノロジー | 暮らし灯 - Kurashi Akari",
  description: "暮らし灯を支える技術：エッジAI、Matter、Thread、プライバシーファースト設計。日本品質のスマートホーム技術。",
};

const technologies = [
  {
    title: "エッジAI",
    subtitle: "エッジAI処理",
    description:
      "すべてのAI処理をSora Hub上でローカルに実行。クラウドに頼らないことで、レスポンスの高速化とプライバシーの完全保護を同時に実現します。独自設計のNPU（Neural Processing Unit）が、住人の生活パターンを継続的に学習し、日々の快適さを向上させます。",
    details: [
      "独自NPU搭載：毎秒4兆回の推論処理",
      "オンデバイス学習：データがデバイスを離れない",
      "24時間の行動パターン認識",
      "リアルタイム環境最適化エンジン",
    ],
    accentColor: "#4a8ec2",
  },
  {
    title: "Matter / Thread",
    subtitle: "相互運用プロトコル",
    description:
      "業界標準のMatterプロトコルに完全対応。Apple HomeKit、Google Home、Amazon Alexaとシームレスに連携します。Threadメッシュネットワークにより、Wi-Fiルーターに依存しない安定した低消費電力接続を実現。",
    details: [
      "Matter 1.3 完全対応",
      "Thread 1.3 Border Router機能",
      "最大128デバイスのメッシュネットワーク",
      "主要プラットフォームとの互換性",
    ],
    accentColor: "#7a9e7e",
  },
  {
    title: "センサーフュージョン",
    subtitle: "マルチセンサー統合",
    description:
      "温度、湿度、照度、音圧、PM2.5、CO2、VOC、人感、ドア開閉——多種多様なセンサーデータを統合的に分析し、住空間の状態を総合的に把握します。単一のセンサーでは見えない環境変化を、フュージョン技術で高精度に検出。",
    details: [
      "9種類のセンサーデータを統合分析",
      "異常検知アルゴリズム",
      "環境変化の予測モデル",
      "ヘルスモニタリング機能",
    ],
    accentColor: "#c4a35a",
  },
  {
    title: "プライバシーファースト",
    subtitle: "プライバシーバイデザイン",
    description:
      "暮らし灯は、設計段階からプライバシー保護を最優先に考えています。すべてのデータはローカルで処理され、外部サーバーへの送信は一切行いません。万が一のセキュリティインシデントでも、データが漏洩するリスクをゼロに。",
    details: [
      "ゼロクラウド設計",
      "AES-256エンドツーエンド暗号化",
      "自動ファームウェアアップデート",
      "ISMS認証取得済み",
    ],
    accentColor: "#7a9e7e",
  },
];

export default function TechnologyPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="テクノロジー"
        subtitle="日本品質の技術で、静かで確かなスマートホームを実現します。"
        tagline="テクノロジー"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {technologies.map((tech, i) => (
            <ScrollReveal key={tech.title} delay={0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                {/* Visual */}
                <div className="lg:col-span-2">
                  <div className="aspect-square max-w-[280px] rounded-2xl bg-gradient-to-br from-warm-cream to-warm-beige/30 border border-warm-beige/50 relative overflow-hidden">
                    <Image
                      src="/images/tech-visual.jpg"
                      alt={tech.title}
                      width={280}
                      height={280}
                      sizes="(max-width: 640px) 100vw, 280px"
                      className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 border-[4px] opacity-10 rounded-2xl pointer-events-none"
                      style={{ borderColor: tech.accentColor }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3">
                  <p
                    className="text-xs tracking-[0.2em] uppercase mb-2"
                    style={{ color: tech.accentColor }}
                  >
                    {tech.subtitle}
                  </p>
                  <h3 className="font-serif-jp text-xl sm:text-2xl font-medium text-charcoal mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-ink-light/60 leading-relaxed mb-6">
                    {tech.description}
                  </p>
                  <ul className="space-y-2">
                    {tech.details.map((detail, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2.5 text-sm text-charcoal-light"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: tech.accentColor }}
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-16 lg:py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif-jp text-2xl sm:text-3xl font-medium text-warm-white mb-4">
            システムアーキテクチャ
          </h2>
          <p className="text-warm-white/40 text-sm mb-12 max-w-xl mx-auto">
            暮らし灯のシステムは、プライバシーファーストのローカル処理アーキテクチャで構築されています。
          </p>

          {/* Simple SVG architecture diagram */}
          <div className="bg-white/5 rounded-2xl border border-white/5 p-8 inline-block w-full max-w-2xl">
            <svg viewBox="0 0 600 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
              {/* Sora Hub (center) */}
              <rect x="225" y="110" width="150" height="80" rx="8" fill="rgba(74,142,194,0.15)" stroke="rgba(74,142,194,0.4)" strokeWidth="1" />
              <text x="300" y="145" textAnchor="middle" fill="#4a8ec2" fontSize="12" fontFamily="sans-serif">Sora Hub</text>
              <text x="300" y="165" textAnchor="middle" fill="rgba(245,240,232,0.4)" fontSize="9" fontFamily="sans-serif">エッジAI / ローカル処理</text>

              {/* Devices */}
              {[
                { x: 50, y: 30, label: "Akari Light", color: "#c4a35a" },
                { x: 450, y: 30, label: "Kaze Sensor", color: "#4a8ec2" },
                { x: 50, y: 220, label: "Mamoru Lock", color: "#7a9e7e" },
                { x: 450, y: 220, label: "Third Party", color: "#888" },
              ].map((device, idx) => (
                <g key={idx}>
                  <rect x={device.x} y={device.y} width="100" height="50" rx="6" fill={`${device.color}15`} stroke={`${device.color}40`} strokeWidth="1" />
                  <text x={device.x + 50} y={device.y + 30} textAnchor="middle" fill={device.color} fontSize="10" fontFamily="sans-serif">{device.label}</text>
                  {/* Connection line */}
                  <line
                    x1={device.x + 50} y1={device.y < 150 ? device.y + 50 : device.y}
                    x2="300" y2={device.y < 150 ? 110 : 190}
                    stroke={`${device.color}30`} strokeWidth="1" strokeDasharray="4,4"
                  />
                </g>
              ))}

              {/* Thread mesh label */}
              <text x="300" y="280" textAnchor="middle" fill="rgba(245,240,232,0.2)" fontSize="8" fontFamily="sans-serif" letterSpacing="2">THREAD メッシュネットワーク</text>
            </svg>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
