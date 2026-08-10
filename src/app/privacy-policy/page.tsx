import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 暮らし灯 - Kurashi Akari",
  description: "暮らし灯のプライバシーポリシー。個人情報の取り扱いについて。",
};

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="プライバシーポリシー"
        subtitle="個人情報の取り扱いについて"
        tagline="Privacy Policy"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom space-y-8">
            <div>
              <p className="text-sm text-ink-light/50 mb-6">最終更新日：2026年4月1日</p>
              <p className="text-sm text-ink-light/60 leading-relaxed">
                株式会社暮らし灯（以下「当社」）は、お客様の個人情報保護を最重要課題の一つと考え、
                以下のプライバシーポリシーに従って個人情報を取り扱います。
              </p>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                1. 収集する情報
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed mb-3">
                当社は、以下の情報をお客様から収集することがあります：
              </p>
              <ul className="space-y-1.5 text-sm text-ink-light/60">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  氏名、メールアドレス、電話番号等の連絡先情報
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  製品の購入・使用に関する情報
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  お問い合わせ内容
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  ウェブサイトの利用状況（Cookie等）
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                2. スマートホームデバイスのデータ
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed">
                暮らし灯のスマートホームデバイス（Sora Hub、Akari Light、Kaze Sensor、Mamoru Lock）で生成されるデータは、
                すべてSora Hub上でローカルに処理されます。当社のサーバーへのデータ送信は一切行いません。
                温度、湿度、照明設定、セキュリティログ等のデータは、お客様のデバイス内でのみ保持されます。
              </p>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                3. 利用目的
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed mb-2">
                収集した個人情報は、以下の目的で利用します：
              </p>
              <ul className="space-y-1.5 text-sm text-ink-light/60">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  製品・サービスの提供および改善
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  お問い合わせへの対応
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  ファームウェアアップデートの提供
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  製品に関する重要なお知らせ
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                4. 第三者への提供
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed">
                当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                ただし、以下の場合は除きます：
              </p>
              <ul className="space-y-1.5 text-sm text-ink-light/60 mt-2">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  法令に基づく開示要求があった場合
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber mt-2 shrink-0" />
                  人の生命、身体または財産の保護のために必要な場合
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                5. セキュリティ
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed">
                当社は、お客様の個人情報を適切に管理し、不正アクセス、紛失、改ざん等を防止するために
                合理的な安全対策を講じています。すべての通信はTLS 1.3で暗号化され、
                保管データはAES-256で暗号化されています。
              </p>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                6. Cookie の使用
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed">
                当社ウェブサイトでは、ユーザー体験の向上とアクセス分析のためにCookieを使用しています。
                ブラウザの設定でCookieを無効にすることができますが、一部の機能が利用できなくなる場合があります。
              </p>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                7. お客様の権利
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed">
                お客様は、ご自身の個人情報について、開示、訂正、削除、利用停止を請求する権利を有しています。
                ご請求はサポート窓口（support@kurashi-akari.jp）までご連絡ください。
              </p>
            </div>

            <div>
              <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-3">
                8. お問い合わせ
              </h2>
              <p className="text-sm text-ink-light/60 leading-relaxed">
                プライバシーポリシーに関するお問い合わせは、以下までご連絡ください。
              </p>
              <div className="mt-3 bg-warm-cream rounded-lg p-4 text-sm text-ink-light/60">
                <p>株式会社暮らし灯 個人情報保護管理責任者</p>
                <p>Email: privacy@kurashi-akari.jp</p>
                <p>〒113-0033 東京都文京区本郷3-X-X 暮らし灯ビル 5F</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
