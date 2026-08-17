"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1500,
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollReveal<HTMLSpanElement>(0.3);

  useEffect(() => {
    if (!isVisible) return;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

// SVG donut chart
function DonutChart({
  value,
  max = 100,
  color,
  size = 80,
  strokeWidth = 6,
}: {
  value: number;
  max?: number;
  color: string;
  size?: number;
  strokeWidth?: number;
}) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>(0.3);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = isVisible ? (value / max) * circumference : 0;

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-warm-beige/30"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
        />
      </svg>
    </div>
  );
}

// Simple bar chart
function BarChart() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>(0.2);
  const hours = [
    { label: "6", value: 30 },
    { label: "8", value: 55 },
    { label: "10", value: 45 },
    { label: "12", value: 70 },
    { label: "14", value: 65 },
    { label: "16", value: 50 },
    { label: "18", value: 80 },
    { label: "20", value: 60 },
    { label: "22", value: 35 },
    { label: "0", value: 15 },
  ];

  return (
    <div ref={ref} className="flex items-end gap-1.5 h-24">
      {hours.map((h, i) => (
        <div key={i} className="flex flex-col items-center gap-1 flex-1">
          <div
            className="w-full rounded-sm transition-all duration-700 ease-out"
            style={{
              height: isVisible ? `${h.value}%` : "0%",
              backgroundColor:
                h.value > 65
                  ? "rgba(196,163,90,0.6)"
                  : h.value > 40
                  ? "rgba(122,158,126,0.4)"
                  : "rgba(74,142,194,0.3)",
              transitionDelay: `${i * 0.08}s`,
            }}
          />
          <span className="text-[9px] text-ink-light/40">{h.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function EnergyDashboard() {
  return (
    <section id="energy" className="py-20 lg:py-28 bg-charcoal text-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-[0.3em] text-amber/70 uppercase mb-3">
            エネルギーダッシュボード
          </p>
          <h2 className="font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-medium">
            エネルギーモニター
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Today's usage */}
          <div className="bg-white/5 rounded-xl p-5 border border-white/5 text-center">
            <div className="flex justify-center mb-3">
              <DonutChart value={48} color="#c4a35a" />
            </div>
            <div className="text-2xl sm:text-3xl font-light text-amber">
              <AnimatedCounter target={4.8} suffix=" kWh" decimals={1} />
            </div>
            <p className="text-[11px] text-warm-white/40 mt-1 tracking-wider">
              本日の使用量
            </p>
          </div>

          {/* Estimated savings */}
          <div className="bg-white/5 rounded-xl p-5 border border-white/5 text-center">
            <div className="flex justify-center mb-3">
              <DonutChart value={18} max={30} color="#7a9e7e" />
            </div>
            <div className="text-2xl sm:text-3xl font-light text-muted-green">
              <AnimatedCounter target={18} suffix="%" />
            </div>
            <p className="text-[11px] text-warm-white/40 mt-1 tracking-wider">
              推定節約
            </p>
          </div>

          {/* Indoor temperature */}
          <div className="bg-white/5 rounded-xl p-5 border border-white/5 text-center">
            <div className="flex justify-center mb-3">
              <DonutChart value={22.4} max={35} color="#4a8ec2" />
            </div>
            <div className="text-2xl sm:text-3xl font-light text-accent-blue">
              <AnimatedCounter target={22.4} suffix="°C" decimals={1} />
            </div>
            <p className="text-[11px] text-warm-white/40 mt-1 tracking-wider">
              室温
            </p>
          </div>

          {/* Air quality */}
          <div className="bg-white/5 rounded-xl p-5 border border-white/5 text-center">
            <div className="flex justify-center mb-3">
              <DonutChart value={92} color="#7a9e7e" />
            </div>
            <div className="text-lg sm:text-xl font-light text-muted-green mt-1">
              良好
            </div>
            <p className="text-[11px] text-warm-white/40 mt-1 tracking-wider">
              空気質
            </p>
          </div>
        </div>

        {/* Usage chart */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-warm-white/70">
              時間別電力消費
            </h3>
            <span className="text-[10px] text-warm-white/30">kWh</span>
          </div>
          <BarChart />
        </div>
      </div>
    </section>
  );
}
