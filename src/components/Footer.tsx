import Link from "next/link";

const footerSections = [
  {
    title: "製品",
    links: [
      { label: "灯ライト", href: "/products" },
      { label: "風センサー", href: "/products" },
      { label: "守ロック", href: "/products" },
      { label: "空ハブ", href: "/products" },
    ],
  },
  {
    title: "サービス",
    links: [
      { label: "スマートホーム", href: "/smart-home" },
      { label: "シーン", href: "/scenes" },
      { label: "テクノロジー", href: "/technology" },
      { label: "サステナビリティ", href: "/sustainability" },
    ],
  },
  {
    title: "サポート",
    links: [
      { label: "ヘルプセンター", href: "/support" },
      { label: "お問い合わせ", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "会社概要", href: "/about" },
    ],
  },
  {
    title: "法的情報",
    links: [
      { label: "プライバシーポリシー", href: "/privacy-policy" },
      { label: "利用規約", href: "/terms-and-conditions" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-warm-white/10 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z"
                    fill="#f5f0e8"
                    opacity="0.8"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium tracking-wider font-serif-jp">
                暮らし灯
              </span>
            </div>
            <p className="text-warm-white/50 text-sm leading-relaxed max-w-xs">
              日本の暮らしに、静かなテクノロジーを。
              <br />
              日本の暮らしのための静かなテクノロジー。
            </p>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-medium mb-4 text-warm-white/70">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-warm-white/40 hover:text-warm-white/80 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-warm-white/10 my-10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-white/30">
            © 2026 暮らし灯。全著作権所有。
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-warm-white/30">東京都、日本</span>
            <span className="text-xs text-warm-white/30">メール: info@kurashi-akari.jp</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
