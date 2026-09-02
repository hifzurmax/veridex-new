import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { LangToggle } from "./LangToggle";
import { useT } from "@/i18n/LanguageProvider";

export const Nav = () => {
  const { t } = useT();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const nav = [
    { label: t.nav.platform, href: isHome ? "#platform" : "/#platform" },
    { label: t.nav.how, href: isHome ? "#how" : "/#how" },
    { label: t.nav.impact, href: isHome ? "#impact" : "/#impact" },
    { label: t.nav.cases, href: isHome ? "#cases" : "/#cases" },
    { label: "Namer", href: "/namer" },
    { label: "Om Oss", href: "/about" },
    { label: "Blogg", href: "/blog" },
    { label: "Press", href: "/press" },
    { label: t.nav.company, href: isHome ? "#company" : "/#company" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <div className="container-edge flex h-14 items-center justify-between text-paper">
        <Link to="/" className="text-paper">
          <Logo />
        </Link>
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-[13px] text-paper/70 transition-colors hover:text-paper">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle />
          <a href="https://portal.veridex.se/portal/login" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex text-[13px] text-paper/70 hover:text-paper px-3 py-1.5">
            {t.nav.signin}
          </a>
          <a href={isHome ? "#contact" : "/#contact"} className="inline-flex items-center gap-2 border border-paper/20 bg-paper text-ink px-3.5 py-1.5 text-[13px] font-medium hover:bg-paper/90 transition-colors">
            {t.nav.cta}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
};
