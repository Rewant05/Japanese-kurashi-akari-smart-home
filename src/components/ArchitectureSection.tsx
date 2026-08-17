"use client";

import ScrollReveal from "./ScrollReveal";

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-amber uppercase mb-3">
            理念
          </p>
          <h2 className="font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal">
            伝統と未来の融合
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
          {/* Traditional */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="relative rounded-2xl lg:rounded-r-none overflow-hidden bg-gradient-to-br from-[#f5f0e8] to-[#e8e0d4] p-8 lg:p-12 min-h-[480px] flex flex-col justify-between border border-warm-beige/50 lg:border-r-0">
              {/* Shoji pattern */}
              <div className="absolute inset-0 opacity-30 shoji-pattern-dense" />

              {/* Content */}
              <div className="relative z-10">
                <p className="text-xs tracking-[0.2em] text-wood uppercase mb-4">
                  伝統的な暮らし
                </p>
                <h3 className="font-serif-jp text-2xl sm:text-3xl font-medium text-charcoal mb-4">
                  日本の伝統的な暮らし
                </h3>
                <p className="text-sm text-ink-light/70 leading-relaxed max-w-md">
                  障子の柔らかな光、縁側から感じる季節の移ろい、天然木の温もり。
                  日本の伝統的な住まいには、何世紀にもわたって培われた快適さの知恵が息づいています。
                </p>
              </div>

              {/* Visual elements */}
              <div className="relative z-10 mt-8">
                <div className="flex gap-4">
                  {/* Shoji panel */}
                  <div className="w-24 h-36 border border-wood/30 rounded-sm overflow-hidden">
                    <div
                      className="w-full h-full bg-warm-white/50"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(139,111,71,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,111,71,0.15) 1px, transparent 1px)",
                        backgroundSize: "50% 33.33%",
                      }}
                    />
                  </div>
                  {/* Engawa */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="h-8 bg-wood/10 rounded-sm flex items-center px-3">
                      <span className="text-[10px] text-wood/60 tracking-wider">縁側 / Engawa</span>
                    </div>
                    <div className="h-8 bg-wood/5 rounded-sm flex items-center px-3">
                      <span className="text-[10px] text-wood/60 tracking-wider">畳 / Tatami</span>
                    </div>
                    <div className="h-8 bg-muted-green/10 rounded-sm flex items-center px-3">
                      <span className="text-[10px] text-muted-green/60 tracking-wider">庭園 / Garden</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-6 right-6 w-20 h-20 border border-wood/10 rounded-full" />
              <div className="absolute bottom-10 right-10 w-12 h-12 border border-wood/5 rounded-full" />
            </div>
          </ScrollReveal>

          {/* Connected */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative rounded-2xl lg:rounded-l-none overflow-hidden bg-gradient-to-br from-[#2a2a2a] to-[#1a1a2a] p-8 lg:p-12 min-h-[480px] flex flex-col justify-between border border-charcoal-light/20 lg:border-l-0">
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(74,142,194,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(74,142,194,0.2) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <p className="text-xs tracking-[0.2em] text-accent-blue uppercase mb-4">
                  未来の暮らし
                </p>
                <h3 className="font-serif-jp text-2xl sm:text-3xl font-medium text-warm-white mb-4">
                  つながる暮らし
                </h3>
                <p className="text-sm text-warm-white/50 leading-relaxed max-w-md">
                  センサー、AI、自動制御が静かに連携し、住む人の快適さを見えないところで最適化します。
                  テクノロジーは背景に溶け込み、暮らしだけが前に。
                </p>
              </div>

              {/* Visual elements */}
              <div className="relative z-10 mt-8">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "照明", icon: "💡", status: "自動" },
                    { label: "空調", icon: "🌡️", status: "22°C" },
                    { label: "防犯", icon: "🔒", status: "有効" },
                    { label: "空気質", icon: "🌿", status: "良好" },
                    { label: "エネルギー", icon: "⚡", status: "最適化" },
                    { label: "カーテン", icon: "🪟", status: "半開" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1 p-3 rounded-lg bg-white/5 border border-white/5"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-[10px] text-warm-white/40">{item.label}</span>
                      <span className="text-[9px] text-accent-blue/70">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow accents */}
              <div
                className="absolute top-8 right-8 w-2 h-2 rounded-full bg-accent-blue"
                style={{ boxShadow: "0 0 12px 4px rgba(74,142,194,0.2)" }}
              >
                <div className="w-full h-full rounded-full animate-breathe bg-accent-blue" />
              </div>
              <div className="absolute bottom-16 left-8 w-1.5 h-1.5 rounded-full bg-muted-green opacity-60">
                <div className="w-full h-full rounded-full animate-breathe bg-muted-green" style={{ animationDelay: "1.5s" }} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
