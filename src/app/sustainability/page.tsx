import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "サステナビリティ | 暮らし灯 - Kurashi Akari",
  description: "暮らし灯のサステナビリティへの取り組み。エネルギー最適化、持続可能な素材、カーボンニュートラルを目指して。",
};

const initiatives = [
  {
    title: "エネルギー最適化",
    description: "暮らし灯のスマートホームシステムは、各家庭で平均18%のエネルギー削減を実現。AIが無駄な電力消費を自動検出し、住む人の快適さを損なわずにエネルギー使用を最適化します。",
    stat: "18%",
    statLabel: "平均エネルギー削減",
    color: "#7a9e7e",
  },
  {
    title: "持続可能な素材",
    description: "製品パッケージはすべて再生紙・再生プラスチックを使用。製品本体にもリサイクル可能な素材を積極的に採用し、製品ライフサイクル全体での環境負荷を最小化しています。",
    stat: "100%",
    statLabel: "再生パッケージ",
    color: "#7a9e7e",
  },
  {
    title: "長寿命設計",
    description: "Akari Lightは25,000時間、Mamoru Lockは12ヶ月のバッテリー寿命。頻繁な交換が不要な長寿命設計で、廃棄物の削減に貢献します。",
    stat: "25,000h",
    statLabel: "照明寿命",
    color: "#c4a35a",
  },
  {
    title: "カーボンニュートラル",
    description: "2025年までに自社オフィスのカーボンニュートラル達成を目標に掲げています。再生可能エネルギーの利用拡大と、残余排出量のオフセットを推進中。",
    stat: "2025",
    statLabel: "目標年",
    color: "#4a8ec2",
  },
];

const goals = [
  { year: "2025", goal: "自社オフィスのカーボンニュートラル達成" },
  { year: "2026", goal: "全製品のリサイクル率90%以上" },
  { year: "2027", goal: "サプライチェーン全体でのCO2排出50%削減" },
  { year: "2030", goal: "バリューチェーン全体のカーボンニュートラル達成" },
];

export default function SustainabilityPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="サステナビリティ"
        subtitle="持続可能な未来のために、テクノロジーにできること。"
        tagline="Sustainability"
      />

      {/* Initiatives */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="font-serif-jp text-2xl sm:text-3xl font-medium text-charcoal mb-4">
              私たちの取り組み
            </h2>
            <p className="text-ink-light/60 max-w-2xl leading-relaxed">
              暮らし灯は、テクノロジーの力で持続可能な暮らしを実現することを目指しています。
              エネルギーの最適化から素材の選定まで、すべてのプロセスで環境への配慮を行っています。
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {initiatives.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-6 border border-warm-beige/50 card-hover h-full">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-light" style={{ color: item.color }}>
                      {item.stat}
                    </span>
                    <span className="text-[10px] text-ink-light/40 tracking-wider">
                      {item.statLabel}
                    </span>
                  </div>
                  <h3 className="font-medium text-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-light/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Timeline */}
      <section className="py-16 lg:py-24 bg-warm-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif-jp text-2xl sm:text-3xl font-medium text-charcoal">
              ロードマップ
            </h2>
          </ScrollReveal>

          <div className="space-y-0">
            {goals.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className="flex gap-6 pb-8 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-muted-green shrink-0" />
                    {i < goals.length - 1 && (
                      <div className="w-px flex-1 bg-muted-green/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-4">
                    <span className="text-xs text-muted-green tracking-wider font-medium">{item.year}</span>
                    <p className="text-charcoal mt-1">{item.goal}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 lg:py-20 bg-charcoal text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif-jp text-2xl sm:text-3xl font-medium text-warm-white mb-4">
            環境への貢献
          </h2>
          <p className="text-warm-white/40 text-sm mb-10 max-w-xl mx-auto">
            暮らし灯ユーザーの集合的なエネルギー削減効果
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "1,200", unit: "MWh", label: "年間エネルギー削減量" },
              { value: "540", unit: "t", label: "年間CO2削減量" },
              { value: "12,000", unit: "+", label: "導入世帯数" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 rounded-xl p-5 border border-white/5">
                <div className="text-xl sm:text-2xl font-light text-muted-green">
                  {stat.value}
                  <span className="text-sm text-warm-white/30 ml-1">{stat.unit}</span>
                </div>
                <p className="text-[10px] text-warm-white/30 mt-1 tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
