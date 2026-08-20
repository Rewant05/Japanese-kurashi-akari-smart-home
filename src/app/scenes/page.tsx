import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import DailyScenes from "@/components/DailyScenes";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "シーン | 暮らし灯 - Kurashi Akari",
  description: "朝から夜まで、暮らし灯が最適なシーンを自動で演出。一日のリズムに合わせたスマートホームシーン。",
};

const customScenes = [
  {
    name: "映画鑑賞",
    description: "照明を最小限に調光し、間接照明を暖色に。カーテンを全閉して集中できる映画体験を。",
    devices: ["照明: 5%暖色", "カーテン: 全閉", "音響: サラウンドモード"],
  },
  {
    name: "来客",
    description: "玄関照明が点灯し、リビングを歓迎モードに。快適な温度と適度な明るさでおもてなし。",
    devices: ["照明: 70%白色", "玄関: ウェルカム照明", "温度: 23°C"],
  },
  {
    name: "集中モード",
    description: "書斎の照明を集中に最適な5000Kに設定。通知を最小限にし、生産性を最大化。",
    devices: ["照明: 5000K白色", "通知: 最小限", "温度: 22°C"],
  },
  {
    name: "お風呂上がり",
    description: "脱衣所を暖かく保ち、リビングの照明をリラックスモードに自動切替。",
    devices: ["脱衣所: 暖房ON", "照明: 暖色リラックス", "音楽: チル系"],
  },
  {
    name: "週末の朝",
    description: "平日より30分遅くカーテンが開き、穏やかに目覚め。コーヒーメーカーが自動スタート。",
    devices: ["カーテン: 7:30開放", "照明: 緩やかに点灯", "温度: 23°C"],
  },
  {
    name: "ペットモード",
    description: "外出中もペットに快適な環境を維持。温度管理と見守りカメラで安心。",
    devices: ["温度: 24°C維持", "カメラ: ペット見守り", "照明: 自然光モード"],
  },
];

export default function ScenesPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="一日のシーン"
        subtitle="暮らしのあらゆる瞬間に、最適な環境を自動で。"
        tagline="シーン"
      />

      <DailyScenes />

      {/* Custom Scenes */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif-jp text-2xl sm:text-3xl font-medium text-charcoal">
              カスタムシーン
            </h2>
            <p className="mt-3 text-sm text-ink-light/60">
              基本シーンに加えて、お客様の暮らしに合わせたカスタムシーンを自由に作成できます。
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {customScenes.map((scene, i) => (
              <ScrollReveal key={scene.name} delay={i * 0.06}>
                <div className="bg-white rounded-xl p-6 border border-warm-beige/50 card-hover h-full">
                  <h3 className="font-medium text-charcoal mb-2">{scene.name}</h3>
                  <p className="text-sm text-ink-light/60 leading-relaxed mb-4">
                    {scene.description}
                  </p>
                  <div className="border-t border-warm-beige/50 pt-3 space-y-1.5">
                    {scene.devices.map((device, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 text-xs text-charcoal-light"
                      >
                        <span className="w-1 h-1 rounded-full bg-amber" />
                        {device}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-charcoal text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif-jp text-2xl sm:text-3xl font-medium text-warm-white mb-4">
            あなただけのシーンを作りましょう
          </h2>
          <p className="text-warm-white/50 text-sm mb-8">
            暮らし灯のアプリで、簡単にカスタムシーンを作成・共有できます。
          </p>
          <a href="/contact" className="inline-block bg-warm-white text-charcoal px-8 py-3 rounded text-sm font-medium hover:bg-warm-cream transition-colors">
            無料相談を予約する
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
