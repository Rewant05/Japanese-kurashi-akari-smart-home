"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const scenes = [
  {
    id: "morning",
    jp: "朝",
    en: "Morning",
    time: "6:00 - 9:00",
    description: "カーテンが静かに開き、自然光とともに照明が徐々に明るく。快適な温度で一日が始まります。",
    devices: ["照明: 暖色 → 白色", "カーテン: 全開", "温度: 22°C", "音楽: 穏やかなBGM"],
    color: "#c4a35a",
    gradient: "from-amber-50/50 to-warm-cream",
  },
  {
    id: "work",
    jp: "仕事",
    en: "Work",
    time: "9:00 - 17:00",
    description: "集中力を高める白色照明、最適な温度と空気質。外部の音を最小限に抑え、生産性を最大化します。",
    devices: ["照明: 5000K 白色", "温度: 23°C", "空気質: 最適化", "通知: 最小限"],
    color: "#4a8ec2",
    gradient: "from-blue-50/30 to-warm-cream",
  },
  {
    id: "arrival",
    jp: "帰宅",
    en: "Arrival",
    time: "17:00 - 19:00",
    description: "玄関のロックが解除され、廊下の照明が点灯。エアコンが事前に快適な温度に調整済みです。",
    devices: ["スマートロック: 解錠", "照明: 廊下点灯", "温度: 23°C", "セキュリティ: 在宅モード"],
    color: "#7a9e7e",
    gradient: "from-green-50/30 to-warm-cream",
  },
  {
    id: "relax",
    jp: "くつろぎ",
    en: "Relax",
    time: "19:00 - 22:00",
    description: "間接照明に切り替わり、暖かい色温度でリラックス空間を演出。映画モードでは照明が自動で調光されます。",
    devices: ["照明: 2700K 暖色", "カーテン: 半開", "温度: 24°C", "音楽: チル系BGM"],
    color: "#c4a35a",
    gradient: "from-amber-50/30 to-warm-cream",
  },
  {
    id: "sleep",
    jp: "就寝",
    en: "Sleep",
    time: "22:00 - 6:00",
    description: "すべての照明が徐々に消灯。温度は睡眠に最適な20°Cに。全てのロックが施錠され、セキュリティが有効に。",
    devices: ["照明: 全消灯", "カーテン: 全閉", "温度: 20°C", "セキュリティ: 夜間モード"],
    color: "#6b7280",
    gradient: "from-gray-100/50 to-warm-cream",
  },
];

export default function DailyScenes() {
  const [activeScene, setActiveScene] = useState("relax");
  const active = scenes.find((s) => s.id === activeScene) || scenes[3];

  return (
    <section id="scenes" className="py-20 lg:py-28 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-[0.3em] text-amber uppercase mb-3">
            デイリーシーン
          </p>
          <h2 className="font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal">
            一日のシーン
          </h2>
          <p className="mt-4 text-ink-light/70 max-w-xl mx-auto">
            朝から夜まで、暮らし灯があなたの一日を最適にサポートします。
          </p>
        </ScrollReveal>

        {/* Scene Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
          {scenes.map((scene) => (
            <button
              key={scene.id}
              onClick={() => setActiveScene(scene.id)}
              className={`flex flex-col items-center gap-1 px-4 sm:px-6 py-3 rounded-xl transition-all duration-400 ${
                activeScene === scene.id
                  ? "bg-charcoal text-warm-white shadow-lg scale-105"
                  : "bg-white text-charcoal-light hover:bg-warm-beige/50 border border-warm-beige/50"
              }`}
            >
              <span className="text-lg sm:text-xl">{scene.jp}</span>
              <span className="text-[10px] tracking-wider opacity-60">{scene.en}</span>
            </button>
          ))}
        </div>

        {/* Active Scene Detail */}
        <div
          className={`bg-gradient-to-br ${active.gradient} rounded-2xl border border-warm-beige/50 overflow-hidden transition-all duration-500`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Scene visual */}
            <div className="relative p-8 lg:p-12 flex items-center justify-center min-h-[250px]">
              <div className="text-center">
                <div
                  className="text-7xl sm:text-8xl font-serif-jp font-bold transition-colors duration-500"
                  style={{ color: `${active.color}20` }}
                >
                  {active.jp}
                </div>
                <div className="mt-2 text-sm text-ink-light/50 tracking-widest">
                  {active.time}
                </div>
              </div>
              {/* Decorative ring */}
              <div
                className="absolute w-48 h-48 rounded-full border-2 opacity-10 transition-colors duration-500"
                style={{ borderColor: active.color }}
              />
            </div>

            {/* Scene details */}
            <div className="p-8 lg:p-12 bg-white/50">
              <h3 className="font-serif-jp text-xl sm:text-2xl font-medium text-charcoal mb-3">
                {active.jp} / {active.en}
              </h3>
              <p className="text-sm text-ink-light/70 leading-relaxed mb-6">
                {active.description}
              </p>
              <div className="space-y-2">
                {active.devices.map((device, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-sm text-charcoal-light"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-colors duration-500"
                      style={{ backgroundColor: active.color }}
                    />
                    {device}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
