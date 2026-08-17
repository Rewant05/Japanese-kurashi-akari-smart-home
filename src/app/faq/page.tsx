import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "よくある質問 | 暮らし灯 - Kurashi Akari",
  description: "暮らし灯の製品・サービスに関するよくある質問と回答。",
};

const faqCategories = [
  {
    category: "製品について",
    questions: [
      {
        q: "暮らし灯の製品を使うために、特別な工事は必要ですか？",
        a: "ほとんどの製品は工事不要で設置できます。Mamoru Lockは両面テープで取り付けるため、賃貸住宅でもご利用いただけます。Akari Lightは既存の照明ソケット（E26/E17）にそのまま取り付けられます。",
      },
      {
        q: "暮らし灯の製品は他社のスマートホーム製品と連携できますか？",
        a: "はい。Sora HubはMatter、Thread、Wi-Fi、Bluetoothに対応しており、Apple HomeKit、Google Home、Amazon Alexaと連携可能です。Matter対応の他社デバイスも統合管理できます。",
      },
      {
        q: "インターネット接続がない場合でも使用できますか？",
        a: "基本的な自動化機能はインターネット接続がなくてもローカルで動作します。ただし、外出先からのリモートアクセスやファームウェアアップデートにはインターネット接続が必要です。",
      },
      {
        q: "製品の保証期間はどれくらいですか？",
        a: "すべての製品に2年間のメーカー保証が付いています。別途、延長保証プログラム（最大5年）もご用意しています。",
      },
    ],
  },
  {
    category: "セキュリティ・プライバシー",
    questions: [
      {
        q: "収集されたデータはどのように管理されていますか？",
        a: "暮らし灯はプライバシーファースト設計を採用しています。すべてのデータ処理はSora Hub上でローカルに行われ、外部サーバーへのデータ送信は一切行いません。AES-256暗号化でデータを保護しています。",
      },
      {
        q: "万が一、デバイスがハッキングされた場合は？",
        a: "データがクラウドに保存されないため、大規模なデータ流出のリスクはありません。自動ファームウェアアップデートでセキュリティパッチを迅速に適用し、デバイス間のすべての通信はエンドツーエンドで暗号化されています。",
      },
    ],
  },
  {
    category: "導入・設定",
    questions: [
      {
        q: "設定は難しいですか？",
        a: "暮らし灯のアプリがステップバイステップでガイドします。Sora Hubの初期設定は約10分、各デバイスのペアリングは1分程度で完了します。複雑な設定も、アプリ内のウィザードで簡単に行えます。",
      },
      {
        q: "専門スタッフに設置を依頼できますか？",
        a: "はい。東京都内および近郊エリアでは、専門スタッフによる出張設置サービスをご提供しています。ショールームでのご相談も承っています。",
      },
      {
        q: "既存の照明やエアコンとの互換性は？",
        a: "Akari Lightは標準的なE26/E17ソケットに対応。Sora Hubは赤外線リモコン対応のエアコンであれば、メーカーを問わず制御可能です。対応機種リストはサポートページでご確認いただけます。",
      },
    ],
  },
  {
    category: "料金・購入",
    questions: [
      {
        q: "月額料金はかかりますか？",
        a: "いいえ。暮らし灯の製品はすべて買い切りで、月額料金は一切かかりません。クラウドサービスに依存しないため、サブスクリプション費用は不要です。",
      },
      {
        q: "どこで購入できますか？",
        a: "公式オンラインストア、および主要家電量販店（ヨドバシカメラ、ビックカメラ等）でお買い求めいただけます。法人・大口注文は直接お問い合わせください。",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="よくある質問"
        subtitle="暮らし灯の製品・サービスに関するよくある質問。"
        tagline="よくある質問"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion categories={faqCategories} />
        </div>
      </section>
    </PageWrapper>
  );
}
