"use client";

import { useState, useMemo } from "react";
import InteractiveRoom from "./InteractiveRoom";

const rooms = [
  { id: "living", label: "リビング", icon: "🏠" },
  { id: "bedroom", label: "寝室", icon: "🛏️" },
  { id: "study", label: "書斎", icon: "📚" },
  { id: "entrance", label: "玄関", icon: "🚪" },
  { id: "bathroom", label: "浴室", icon: "🛁" },
];

const automationOptions = [
  { id: "lighting", label: "Lighting", jp: "照明", icon: "💡" },
  { id: "temperature", label: "Temperature", jp: "空調", icon: "🌡️" },
  { id: "security", label: "Security", jp: "防犯", icon: "🔒" },
  { id: "air-quality", label: "Air Quality", jp: "空気質", icon: "🌿" },
  { id: "energy", label: "Energy", jp: "エネルギー", icon: "⚡" },
  { id: "curtains", label: "Curtains", jp: "カーテン", icon: "🪟" },
];

const lifestyles = [
  { id: "morning", label: "Morning", jp: "朝", icon: "🌅" },
  { id: "work", label: "Work", jp: "仕事", icon: "💻" },
  { id: "relax", label: "Relax", jp: "くつろぎ", icon: "☕" },
  { id: "sleep", label: "Sleep", jp: "就寝", icon: "🌙" },
  { id: "away", label: "Away", jp: "外出", icon: "🏃" },
];

interface SceneRecommendation {
  name: string;
  description: string;
}

export default function SmartHomeConfigurator() {
  const [selectedRoom, setSelectedRoom] = useState("living");
  const [selectedAutomations, setSelectedAutomations] = useState<string[]>([
    "lighting",
    "temperature",
    "security",
  ]);
  const [selectedLifestyle, setSelectedLifestyle] = useState("relax");

  const toggleAutomation = (id: string) => {
    setSelectedAutomations((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const scores = useMemo(() => {
    const baseComfort = 60;
    const baseEnergy = 70;
    const baseSecurity = 50;

    let comfort = baseComfort;
    let energy = baseEnergy;
    let security = baseSecurity;

    if (selectedAutomations.includes("lighting")) { comfort += 10; energy += 3; }
    if (selectedAutomations.includes("temperature")) { comfort += 12; energy += 5; }
    if (selectedAutomations.includes("security")) { security += 30; comfort += 3; }
    if (selectedAutomations.includes("air-quality")) { comfort += 8; energy += 2; }
    if (selectedAutomations.includes("energy")) { energy += 12; }
    if (selectedAutomations.includes("curtains")) { comfort += 5; energy += 4; }

    if (selectedLifestyle === "sleep") { comfort += 5; energy += 5; }
    if (selectedLifestyle === "away") { energy += 8; security += 10; comfort -= 10; }
    if (selectedLifestyle === "relax") { comfort += 7; }
    if (selectedLifestyle === "morning") { comfort += 3; energy += 2; }

    return {
      comfort: Math.min(99, Math.max(20, comfort)),
      energy: Math.min(99, Math.max(20, energy)),
      security: Math.min(99, Math.max(20, security)),
    };
  }, [selectedAutomations, selectedLifestyle]);

  const recommendations = useMemo((): SceneRecommendation[] => {
    const recs: SceneRecommendation[] = [];

    if (selectedLifestyle === "morning" && selectedAutomations.includes("lighting")) {
      recs.push({ name: "目覚めの光", description: "カーテンが開き、照明が徐々に明るくなります" });
    }
    if (selectedLifestyle === "sleep") {
      recs.push({ name: "おやすみモード", description: "全照明が暗くなり、温度が最適化されます" });
    }
    if (selectedLifestyle === "away" && selectedAutomations.includes("security")) {
      recs.push({ name: "外出セキュリティ", description: "すべてのセンサーが有効になり、照明が自動制御されます" });
    }
    if (selectedLifestyle === "relax") {
      recs.push({ name: "くつろぎモード", description: "間接照明に切替え、温度を快適に調整します" });
    }
    if (selectedAutomations.includes("air-quality")) {
      recs.push({ name: "空気清浄シーン", description: "空気質に基づき換気と清浄を自動調整します" });
    }
    if (selectedAutomations.includes("energy") && selectedAutomations.length >= 3) {
      recs.push({ name: "省エネ最適化", description: "使用パターンに基づいてエネルギー消費を最小化します" });
    }

    return recs.slice(0, 3);
  }, [selectedAutomations, selectedLifestyle]);

  return (
    <section id="configurator" className="py-20 lg:py-28 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-[0.3em] text-amber uppercase mb-3">
            My Smart Home
          </p>
          <h2 className="font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal">
            スマートホーム設計
          </h2>
          <p className="mt-4 text-ink-light/70 max-w-xl mx-auto">
            部屋・オートメーション・ライフスタイルを選んで、あなたの理想のスマートホームを設計しましょう。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Controls */}
          <div className="space-y-8">
            {/* Room Selection */}
            <div>
              <h3 className="text-sm font-medium text-charcoal mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-charcoal text-warm-white text-[10px] flex items-center justify-center">1</span>
                部屋を選ぶ
              </h3>
              <div className="flex flex-wrap gap-2">
                {rooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                      selectedRoom === room.id
                        ? "bg-charcoal text-warm-white shadow-md"
                        : "bg-white text-charcoal-light hover:bg-warm-beige/50 border border-warm-beige"
                    }`}
                  >
                    <span>{room.icon}</span>
                    {room.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Automation Selection */}
            <div>
              <h3 className="text-sm font-medium text-charcoal mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-charcoal text-warm-white text-[10px] flex items-center justify-center">2</span>
                オートメーション
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {automationOptions.map((auto) => (
                  <button
                    key={auto.id}
                    onClick={() => toggleAutomation(auto.id)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                      selectedAutomations.includes(auto.id)
                        ? "bg-charcoal text-warm-white shadow-md"
                        : "bg-white text-charcoal-light hover:bg-warm-beige/50 border border-warm-beige"
                    }`}
                  >
                    <span className="text-base">{auto.icon}</span>
                    <span className="truncate">{auto.jp}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Lifestyle Selection */}
            <div>
              <h3 className="text-sm font-medium text-charcoal mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-charcoal text-warm-white text-[10px] flex items-center justify-center">3</span>
                ライフスタイル
              </h3>
              <div className="flex flex-wrap gap-2">
                {lifestyles.map((ls) => (
                  <button
                    key={ls.id}
                    onClick={() => setSelectedLifestyle(ls.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                      selectedLifestyle === ls.id
                        ? "bg-charcoal text-warm-white shadow-md"
                        : "bg-white text-charcoal-light hover:bg-warm-beige/50 border border-warm-beige"
                    }`}
                  >
                    <span>{ls.icon}</span>
                    {ls.jp}
                  </button>
                ))}
              </div>
            </div>

            {/* Scores */}
            <div className="grid grid-cols-3 gap-3">
              <ScoreCard label="快適性" value={scores.comfort} color="amber" />
              <ScoreCard label="省エネ" value={scores.energy} color="green" />
              <ScoreCard label="防犯" value={scores.security} color="blue" />
            </div>
          </div>

          {/* Right: Room Preview + Recommendations */}
          <div className="space-y-6">
            <InteractiveRoom
              room={selectedRoom}
              automations={selectedAutomations}
              lifestyle={selectedLifestyle}
            />

            {/* Recommendations */}
            {recommendations.length > 0 && (
              <div>
                <h4 className="text-xs tracking-[0.15em] text-ink-light/60 uppercase mb-3">
                  おすすめシーン
                </h4>
                <div className="space-y-2">
                  {recommendations.map((rec, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-white rounded-lg border border-warm-beige/50 transition-all duration-300 hover:shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-amber" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-charcoal">
                          {rec.name}
                        </p>
                        <p className="text-xs text-ink-light/60 mt-0.5">
                          {rec.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Active devices */}
            <div className="p-4 bg-white rounded-lg border border-warm-beige/50">
              <h4 className="text-xs tracking-[0.15em] text-ink-light/60 uppercase mb-3">
                アクティブデバイス
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedAutomations.map((a) => {
                  const auto = automationOptions.find((o) => o.id === a);
                  return (
                    <span
                      key={a}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-charcoal/5 rounded-full text-xs text-charcoal"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-green" />
                      {auto?.jp || a}
                    </span>
                  );
                })}
                {selectedAutomations.length === 0 && (
                  <span className="text-xs text-ink-light/40">デバイスを選択してください</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreCard({ label, value, color }: { label: string; value: number; color: string }) {
  const colorClasses = {
    amber: "text-amber",
    green: "text-muted-green",
    blue: "text-accent-blue",
  }[color] || "text-charcoal";

  const bgClasses = {
    amber: "bg-amber/10",
    green: "bg-muted-green/10",
    blue: "bg-accent-blue/10",
  }[color] || "bg-charcoal/5";

  return (
    <div className="bg-white rounded-lg p-4 border border-warm-beige/50 text-center">
      <div className={`text-3xl font-light ${colorClasses} transition-all duration-500`}>
        {value}
        <span className="text-lg">%</span>
      </div>
      <div className="mt-1.5 text-[10px] tracking-wider uppercase text-ink-light/50">
        {label}
      </div>
      <div className="mt-2 w-full h-1 rounded-full bg-warm-beige/50 overflow-hidden">
        <div
          className={`h-full rounded-full ${bgClasses} transition-all duration-700`}
          style={{ width: `${value}%`, background: color === "amber" ? "#c4a35a" : color === "green" ? "#7a9e7e" : "#4a8ec2" }}
        />
      </div>
    </div>
  );
}
