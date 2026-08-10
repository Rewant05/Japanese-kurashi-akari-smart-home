import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "利用規約 | 暮らし灯 - Kurashi Akari",
  description: "暮らし灯のサービス利用規約。ご利用前に必ずお読みください。",
};

export default function TermsPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="利用規約"
        subtitle="サービスご利用にあたって"
        tagline="Terms & Conditions"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <p className="text-sm text-ink-light/50 mb-6">最終更新日：2026年4月1日</p>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                第1条（適用範囲）
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed">
                本利用規約（以下「本規約」）は、株式会社暮らし灯（以下「当社」）が提供するすべての製品およびサービス
                （以下「本サービス」）の利用に適用されます。お客様は、本サービスを利用することにより、
                本規約に同意したものとみなされます。
              </p>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                第2条（アカウント）
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed">
                お客様は、本サービスの一部機能を利用するために、アカウントを作成する必要があります。
                アカウント情報の正確性を維持し、パスワードの機密性を保持する責任はお客様にあります。
                アカウントの不正利用があった場合は、速やかに当社までご連絡ください。
              </p>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                第3条（製品の使用）
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed mb-2">
                当社の製品は、日本国内の一般家庭での使用を目的として設計されています。
                以下の行為は禁止されています：
              </p>
              <ul className="space-y-1.5 text-sm text-ink-light/60">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  製品の分解、改造、リバースエンジニアリング
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  商用目的での無断使用
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  法令に違反する目的での使用
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  セキュリティ機能の回避や無効化
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                第4条（知的財産権）
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed">
                本サービスおよび製品に関するすべての知的財産権は当社に帰属します。
                お客様は、本規約で明示的に許可された範囲でのみ本サービスを利用できます。
                当社の商標、ロゴ、デザインの無断使用は固く禁じられています。
              </p>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                第5条（保証と免責）
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed">
                当社は、製品が公表された仕様に従って動作することを保証します。
                ただし、以下の場合は保証の対象外となります：
              </p>
              <ul className="space-y-1.5 text-sm text-ink-light/60 mt-2">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  不適切な使用、改造、または外部要因による損害
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  天災、停電等の不可抗力による損害
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  第三者製品との互換性に起因する問題
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                第6条（サービスの変更・中断）
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed">
                当社は、必要に応じて本サービスの内容を変更し、またはその提供を中断・終了することができます。
                重要な変更がある場合は、事前にお客様に通知します。ローカル処理機能は、
                クラウドサービスの終了に影響されることなく継続して動作します。
              </p>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                第7条（損害賠償）
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed">
                当社の責めに帰すべき事由により、お客様に損害が生じた場合、当社の賠償責任は
                お客様が当社に支払った当該製品の購入代金を上限とします。
                ただし、当社の故意または重大な過失による場合はこの限りではありません。
              </p>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                第8条（規約の変更）
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed">
                当社は、法令の改正、社会情勢の変化、その他当社が必要と認めた場合に、
                本規約を変更することができます。変更後の規約は、当社ウェブサイトに掲載した時点で効力を生じます。
              </p>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                第9条（準拠法・管轄裁判所）
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed">
                本規約は日本法に準拠し、日本法に従って解釈されるものとします。
                本規約に関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </div>

            <div className="mt-8 bg-warm-cream rounded-lg p-5 text-sm text-ink-light/60">
              <p className="font-medium text-charcoal mb-2">お問い合わせ</p>
              <p>本規約に関するお問い合わせは、以下までご連絡ください。</p>
              <p className="mt-2">株式会社暮らし灯 法務部</p>
              <p>Email: legal@kurashi-akari.jp</p>
              <p>〒113-0033 東京都文京区本郷3-X-X 暮らし灯ビル 5F</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
