"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/products", label: "製品" },
  { href: "/smart-home", label: "スマートホーム" },
  { href: "/scenes", label: "シーン" },
  { href: "/technology", label: "テクノロジー" },
  { href: "/sustainability", label: "サステナビリティ" },
  { href: "/support", label: "サポート" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-sm bg-charcoal flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z"
                  fill="#f5f0e8"
                  opacity="0.9"
                />
              </svg>
            </div>
            <span className={`text-lg font-medium tracking-wider font-serif-jp transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-warm-white'}`}>
              暮らし灯
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled
                    ? "text-ink-light hover:text-charcoal after:bg-charcoal"
                    : "text-warm-white/80 hover:text-warm-white after:bg-warm-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex btn-primary text-sm"
            >
              相談する
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
              aria-label="メニューを開く"
            >
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[3px]" : ""
                } ${scrolled ? "bg-charcoal" : "bg-warm-white"}`}
              />
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[3px]" : ""
                } ${scrolled ? "bg-charcoal" : "bg-warm-white"}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[min(85vw,360px)] bg-paper shadow-2xl transition-transform duration-500 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 pt-20 flex flex-col h-full">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-light py-3 border-b border-warm-beige/50 text-charcoal hover:text-amber transition-colors duration-300 ${
                    isOpen ? "animate-slide-in-right" : ""
                  }`}
                  style={{ animationDelay: `${0.1 + i * 0.06}s`, opacity: isOpen ? undefined : 0 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-sm text-ink-light hover:text-charcoal transition-colors"
              >
                About
              </Link>
              <Link
                href="/faq"
                onClick={() => setIsOpen(false)}
                className="text-sm text-ink-light hover:text-charcoal transition-colors"
              >
                FAQ
              </Link>
            </div>

            <div className="mt-auto pb-8">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary inline-block text-center w-full"
              >
                相談する
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
