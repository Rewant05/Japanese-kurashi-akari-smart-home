import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92svh] flex items-center justify-center overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-interior-lcp.webp"
            alt="日本のミニマリスト・スマートホーム"
            fill
            priority
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="object-cover opacity-55"
          />
        </div>
        <div className="absolute inset-0 bg-[#1f1d1a]/75" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1
          className="font-serif-jp text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-warm-white leading-tight tracking-wide"
        >
          暮らしを、もっと静かに。
        </h1>
        <p
          className="mt-4 text-lg sm:text-xl text-warm-white/70 font-light tracking-widest"
        >
          静かな暮らしのためのテクノロジー。
        </p>
        <p
          className="mt-8 max-w-2xl mx-auto text-sm sm:text-base text-warm-white/55 leading-relaxed"
        >
          暮らし灯は、照明・空調・セキュリティ・エネルギー・日々の暮らしのルーティンを
          ひとつのインテリジェントな住まいに統合します。
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/smart-home"
            className="inline-flex items-center gap-2 bg-warm-white text-charcoal px-8 py-3.5 rounded text-sm font-medium hover:bg-warm-cream transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            暮らしを設計する
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-warm-white/60 border border-warm-white/20 px-8 py-3.5 rounded text-sm hover:text-warm-white hover:border-warm-white/40 transition-all duration-300"
          >
            暮らし灯について
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-paper to-transparent" />
    </section>
  );
}
