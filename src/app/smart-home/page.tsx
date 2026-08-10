import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import SmartHomeConfigurator from "@/components/SmartHomeConfigurator";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "スマートホーム | 暮らし灯 - Kurashi Akari",
  description: "あなたの暮らしに合わせた、インテリジェントなスマートホーム設計。暮らし灯のスマートホームコンフィギュレーター。",
};

const benefits = [
  {
    title: "パーソナライズされた快適さ",
    description: "AIが生活パターンを学習し、一人ひとりに最適な環境を自動で提供します。",
    stat: "92%",
    statLabel: "ユーザー満足度",
  },
  {
    title: "エネルギーの最適化",
    description: "無駄なエネルギー消費を自動検出し、月間最大18%の電力削減を実現します。",
    stat: "18%",
    statLabel: "平均電力削減",
  },
  {
    title: "シームレスな統合",
    description: "Matter対応で主要スマートホームプラットフォームとの完全互換。将来の拡張にも対応。",
    stat: "128",
    statLabel: "最大デバイス数",
  },
];

export default function SmartHomePage() {
  return (
    <PageWrapper>
      <PageHeader
        title="スマートホーム"
        subtitle="あなたの暮らしに合わせた、インテリジェントな住まいを設計しましょう。"
        tagline="Smart Home"
      />

      <SmartHomeConfigurator />

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif-jp text-2xl sm:text-3xl font-medium text-charcoal">
              スマートホームの利点
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-warm-beige/50 card-hover text-center h-full">
                  <div className="text-3xl font-light text-amber mb-1">
                    {benefit.stat}
                  </div>
                  <p className="text-[10px] tracking-wider text-ink-light/40 uppercase mb-4">
                    {benefit.statLabel}
                  </p>
                  <h3 className="font-medium text-charcoal mb-2">{benefit.title}</h3>
                  <p className="text-sm text-ink-light/60 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-warm-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif-jp text-2xl sm:text-3xl font-medium text-charcoal">
              導入の流れ
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              { step: "01", title: "ご相談", description: "お住まいの間取りやライフスタイルをヒアリング。最適なプランをご提案します。" },
              { step: "02", title: "設計", description: "お客様のニーズに基づき、デバイスの配置と自動化シナリオを設計します。" },
              { step: "03", title: "設置", description: "専門スタッフが丁寧に設置。工事不要の製品がほとんどなので、短時間で完了します。" },
              { step: "04", title: "最適化", description: "AIが1〜2週間で生活パターンを学習。日々の暮らしが徐々に最適化されていきます。" },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.08}>
                <div className="flex gap-6 items-start bg-white rounded-xl p-6 border border-warm-beige/50">
                  <div className="text-2xl font-light text-amber/40 shrink-0 w-12">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal">{item.title}</h3>
                    <p className="text-sm text-ink-light/60 mt-1">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
