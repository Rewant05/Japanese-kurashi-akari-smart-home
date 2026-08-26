"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-interior.png"
            alt="日本のミニマリスト・スマートホーム"
            fill
            priority
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2520]/80 via-[#1e1e1e]/80 to-[#1a1a2a]/90" />
        
        {/* Floating light particles */}
        {loaded && (
          <>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-amber/40 shadow-[0_0_8px_rgba(201,184,150,0.8)]"
                style={{
                  top: `${20 + i * 12}%`,
                  left: `${30 + i * 8}%`,
                  animation: `particle-drift ${6 + i * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 1.5}s`,
                  ["--drift-x" as string]: `${(i % 2 === 0 ? 1 : -1) * (20 + i * 10)}px`,
                  ["--drift-y" as string]: `${-30 - i * 15}px`,
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1
          className="font-serif-jp text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-warm-white leading-tight tracking-wide opacity-0 animate-fade-in-up"
        >
          暮らしを、もっと静かに。
        </h1>
        <p
          className="mt-4 text-lg sm:text-xl text-warm-white/60 font-light tracking-widest opacity-0 animate-fade-in-up stagger-2"
        >
          静かな暮らしのためのテクノロジー。
        </p>
        <p
          className="mt-8 max-w-2xl mx-auto text-sm sm:text-base text-warm-white/40 leading-relaxed opacity-0 animate-fade-in-up stagger-5"
        >
          暮らし灯は、照明・空調・セキュリティ・エネルギー・日々の暮らしのルーティンを
          ひとつのインテリジェントな住まいに統合します。
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up stagger-6"
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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-paper to-transparent" />

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-5 h-8 border border-warm-white/20 rounded-full flex justify-center pt-1.5">
          <div
            className="w-1 h-2 bg-warm-white/40 rounded-full"
            style={{ animation: "float 2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
