import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "会社概要 | 暮らし灯 - Kurashi Akari",
  description: "暮らし灯の理念、歴史、チームについて。日本の暮らしに静かなテクノロジーを届ける、私たちのストーリー。",
};

const timeline = [
  { year: "2019", title: "創業", description: "東京・文京区にて、日本の暮らしとテクノロジーの融合を目指し創業。" },
  { year: "2020", title: "初代プロトタイプ", description: "Akari Lightの初代プロトタイプが完成。京都の旅館でのテスト運用を開始。" },
  { year: "2021", title: "製品発売", description: "Akari Light、Kaze Sensorが正式発売。国内主要家電量販店での取り扱い開始。" },
  { year: "2022", title: "Sora Hub リリース", description: "統合コントロールハブ「Sora Hub」をリリース。Matter対応で業界標準に準拠。" },
  { year: "2023", title: "海外展開", description: "アジア太平洋地域への展開を開始。シンガポール、台湾でのパイロットプログラム。" },
  { year: "2024", title: "AI統合", description: "エッジAIによる生活パターン学習機能を搭載。プライバシーを守りながら最適化。" },
];

const team = [
  { name: "田中 雅也", role: "CEO / 共同創業者", description: "元Sony IoT事業部。スマートホームの民主化を信念に創業。" },
  { name: "佐藤 美咲", role: "CTO / 共同創業者", description: "東京大学AI研究所出身。エッジコンピューティングの専門家。" },
  { name: "木村 健太", role: "デザインディレクター", description: "元無印良品プロダクトデザイナー。日本の美意識をテクノロジーに。" },
  { name: "山田 あかり", role: "サステナビリティ責任者", description: "環境省出身。製品ライフサイクル全体でのカーボンニュートラルを推進。" },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="会社概要"
        subtitle="日本の暮らしに、静かなテクノロジーを。"
        tagline="私たちについて"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="prose-like">
              <h2 className="font-serif-jp text-2xl sm:text-3xl font-medium text-charcoal mb-6">
                私たちのミッション
              </h2>
              <p className="text-ink-light/70 leading-relaxed mb-4">
                暮らし灯は2019年、「テクノロジーは人の暮らしに寄り添うべきだ」という信念のもと、東京で創業しました。
                日本の住まいには、何世紀にもわたって培われた快適さの知恵があります。
                障子を通した柔らかな光、縁側から感じる季節の移ろい、天然素材の温もり。
              </p>
              <p className="text-ink-light/70 leading-relaxed mb-4">
                私たちはこの伝統的な心地よさを守りながら、最先端のセンサー技術、AI、IoTを活用して、
                住む人が意識しないほど自然に快適さを向上させる製品を開発しています。
              </p>
              <p className="text-ink-light/70 leading-relaxed">
                目指すのは、テクノロジーが「見えない」暮らし。
                すべてが背景に溶け込み、暮らしだけが前に来る。
                それが暮らし灯の考えるスマートホームです。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="font-serif-jp text-2xl sm:text-3xl font-medium text-charcoal">
              沿革
            </h2>
          </ScrollReveal>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.05}>
                <div className="flex gap-6 pb-8 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-amber shrink-0" />
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-warm-beige mt-2" />
                    )}
                  </div>
                  <div className="pb-4">
                    <span className="text-xs text-amber tracking-wider">{item.year}</span>
                    <h3 className="font-medium text-charcoal mt-1">{item.title}</h3>
                    <p className="text-sm text-ink-light/60 mt-1">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* Team */}
      <section className="py-16 lg:py-24 bg-warm-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif-jp text-2xl sm:text-3xl font-medium text-charcoal">
              チーム
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-6 border border-warm-beige/50 card-hover">
                  <div className="w-12 h-12 rounded-full bg-charcoal/5 flex items-center justify-center text-lg font-serif-jp text-charcoal/30 mb-4">
                    {member.name[0]}
                  </div>
                  <h3 className="font-medium text-charcoal">{member.name}</h3>
                  <p className="text-xs text-amber tracking-wider mt-0.5">{member.role}</p>
                  <p className="text-sm text-ink-light/60 mt-3 leading-relaxed">{member.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
