"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
}

const animations = {
  up: { name: "fadeInUp", duration: "0.7s" },
  left: { name: "slideInLeft", duration: "0.7s" },
  right: { name: "slideInRight", duration: "0.7s" },
  fade: { name: "fadeIn", duration: "0.6s" },
} as const;

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>(0.12);
  const anim = animations[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={
        isVisible
          ? {
              animationName: anim.name,
              animationDuration: anim.duration,
              animationTimingFunction: "ease-out",
              animationFillMode: "forwards",
              animationDelay: `${delay}s`,
              willChange: "opacity, transform",
              backfaceVisibility: "hidden",
            }
          : { opacity: 0, willChange: "opacity, transform" }
      }
    >
      {children}
    </div>
  );
}
