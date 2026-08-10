"use client";

import { useEffect, useState } from "react";

interface Props {
  title: string;
  subtitle?: string;
  tagline?: string;
}

export default function PageHeader({ title, subtitle, tagline }: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-charcoal pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      {/* Shoji pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {tagline && (
          <p
            className={`text-xs tracking-[0.3em] text-amber/70 uppercase mb-4 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {tagline}
          </p>
        )}
        <h1
          className={`font-serif-jp text-3xl sm:text-4xl lg:text-5xl font-medium text-warm-white transition-all duration-700 delay-100 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-4 text-warm-white/50 max-w-xl mx-auto transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-paper to-transparent" />
    </section>
  );
}
