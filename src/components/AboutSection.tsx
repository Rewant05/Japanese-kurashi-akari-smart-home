"use client";

import ScrollReveal from "./ScrollReveal";

const values = [
  {
    title: "日本のものづくり",
    en: "Japanese Craftsmanship",
    description: "細部まで妥協しない日本のものづくり精神。すべての製品は、美しさと機能性の両立を追求しています。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "人間中心の技術",
    en: "Human-Centered Technology",
    description: "テクノロジーは人に寄り添うもの。操作を意識させない、自然で直感的なインターフェースを設計しています。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "サステナビリティ",
    en: "Sustainability",
    description: "エネルギー消費の最適化と持続可能な素材の使用で、環境への影響を最小限に。未来の暮らしへの責任。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c5-3 9-7.5 9-12.5C21 5 16.5 2 12 2S3 5 3 9.5C3 14.5 7 19 12 22z" />
        <path d="M12 22V8M8 12l4-4 4 4" />
      </svg>
    ),
  },
  {
    title: "プライバシー",
    en: "Privacy",
    description: "すべてのデータはローカルで処理。個人情報は外部に送信されません。安心の国内データ管理。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    title: "快適な暮らし",
    en: "Comfortable Living",
    description: "住む人のストレスを減らし、日々の暮らしをより豊かに。テクノロジーが支える、穏やかな毎日。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-amber uppercase mb-3">
            About
          </p>
          <h2 className="font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-snug">
            日本の暮らしに、
            <br className="hidden sm:block" />
            静かなテクノロジーを。
          </h2>
          <p className="mt-6 text-ink-light/70 max-w-2xl mx-auto leading-relaxed">
            暮らし灯は、日本の伝統的な暮らしの美しさを守りながら、
            最先端のテクノロジーで快適さを静かに向上させるスマートホームブランドです。
            私たちが目指すのは、テクノロジーを意識しない暮らし。
            すべてが自然に、穏やかに、あなたの生活に溶け込みます。
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, i) => (
            <ScrollReveal key={value.en} delay={i * 0.08}>
              <div className="bg-white rounded-xl p-6 border border-warm-beige/50 card-hover h-full">
                <div className="w-10 h-10 rounded-lg bg-charcoal/5 flex items-center justify-center text-charcoal mb-4">
                  {value.icon}
                </div>
                <h3 className="font-medium text-charcoal mb-1">{value.title}</h3>
                <p className="text-[11px] text-ink-light/40 tracking-wider mb-3">
                  {value.en}
                </p>
                <p className="text-sm text-ink-light/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
