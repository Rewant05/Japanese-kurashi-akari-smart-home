import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "お問い合わせ | 暮らし灯 - Kurashi Akari",
  description: "暮らし灯へのお問い合わせ。製品相談、導入のご相談、サポートリクエスト。",
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="お問い合わせ"
        subtitle="お気軽にご連絡ください。"
        tagline="Contact"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <ScrollReveal className="lg:col-span-3">
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-warm-beige/50">
                <h2 className="font-serif-jp text-xl font-medium text-charcoal mb-6">
                  お問い合わせフォーム
                </h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm text-charcoal mb-1.5">
                        お名前 <span className="text-amber">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        className="w-full px-4 py-2.5 rounded-lg border border-warm-beige bg-paper text-sm text-charcoal focus:outline-none focus:border-amber/50 transition-colors"
                        placeholder="山田 太郎"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm text-charcoal mb-1.5">
                        メールアドレス <span className="text-amber">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        className="w-full px-4 py-2.5 rounded-lg border border-warm-beige bg-paper text-sm text-charcoal focus:outline-none focus:border-amber/50 transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm text-charcoal mb-1.5">
                      電話番号
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="w-full px-4 py-2.5 rounded-lg border border-warm-beige bg-paper text-sm text-charcoal focus:outline-none focus:border-amber/50 transition-colors"
                      placeholder="090-XXXX-XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-category" className="block text-sm text-charcoal mb-1.5">
                      お問い合わせ種別 <span className="text-amber">*</span>
                    </label>
                    <select
                      id="contact-category"
                      className="w-full px-4 py-2.5 rounded-lg border border-warm-beige bg-paper text-sm text-charcoal focus:outline-none focus:border-amber/50 transition-colors"
                    >
                      <option value="">選択してください</option>
                      <option value="product">製品について</option>
                      <option value="install">導入のご相談</option>
                      <option value="support">技術サポート</option>
                      <option value="partnership">パートナーシップ</option>
                      <option value="press">取材・メディア</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm text-charcoal mb-1.5">
                      メッセージ <span className="text-amber">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-lg border border-warm-beige bg-paper text-sm text-charcoal focus:outline-none focus:border-amber/50 transition-colors resize-none"
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto"
                  >
                    送信する
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal className="lg:col-span-2" delay={0.2}>
              <div className="space-y-6">
                <div className="bg-warm-cream rounded-xl p-6 border border-warm-beige/50">
                  <h3 className="font-medium text-charcoal mb-4">オフィス</h3>
                  <div className="space-y-3 text-sm text-ink-light/60">
                    <p>〒113-0033<br />東京都文京区本郷3-X-X<br />暮らし灯ビル 5F</p>
                    <div className="h-px bg-warm-beige/50" />
                    <p>
                      <span className="text-charcoal-light">Email:</span>
                      <br />info@kurashi-akari.jp
                    </p>
                    <p>
                      <span className="text-charcoal-light">Phone:</span>
                      <br />0120-XXX-XXXX
                    </p>
                    <p>
                      <span className="text-charcoal-light">営業時間:</span>
                      <br />平日 9:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="bg-warm-cream rounded-xl p-6 border border-warm-beige/50">
                  <h3 className="font-medium text-charcoal mb-3">ショールーム</h3>
                  <p className="text-sm text-ink-light/60 leading-relaxed">
                    東京・文京区のショールームで、暮らし灯の製品を実際に体験いただけます。
                    完全予約制となっておりますので、事前にご連絡ください。
                  </p>
                  <p className="text-xs text-amber mt-3">予約制・無料</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
