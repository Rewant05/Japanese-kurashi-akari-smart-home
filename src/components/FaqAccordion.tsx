"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  category: string;
  questions: FaqItem[];
}

export default function FaqAccordion({
  categories,
}: {
  categories: FaqCategory[];
}) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenIndex((prev) => (prev === key ? null : key));
  };

  return (
    <div className="space-y-10">
      {categories.map((cat, ci) => (
        <ScrollReveal key={cat.category} delay={ci * 0.05}>
          <div>
            <h2 className="font-serif-jp text-lg font-medium text-charcoal mb-4">
              {cat.category}
            </h2>
            <div className="space-y-2">
              {cat.questions.map((item, qi) => {
                const key = `${ci}-${qi}`;
                const isOpen = openIndex === key;

                return (
                  <div
                    key={key}
                    className="bg-white rounded-lg border border-warm-beige/50 overflow-hidden"
                  >
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left text-sm text-charcoal hover:bg-warm-cream/50 transition-colors"
                    >
                      <span className="pr-4">{item.q}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`shrink-0 transition-transform duration-300 text-ink-light/30 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="px-5 pb-4 pt-0 text-sm text-ink-light/60 leading-relaxed border-t border-warm-beige/30">
                        <div className="pt-3">{item.a}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
