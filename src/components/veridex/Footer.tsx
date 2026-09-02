import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { useT } from "@/i18n/LanguageProvider";

export const Footer = () => {
  const { t } = useT();
  return (
    <footer className="bg-ink text-paper border-t border-line/60">
      <div className="container-edge py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Logo className="text-paper" />
          <p className="mt-5 text-[14px] text-paper/55 max-w-[40ch]">{t.footer.tag}</p>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-[13px]">
          {t.footer.groups.map((g) => (
            <div key={g.h}>
              <div className="label-mono mb-4 text-paper/40">{g.h}</div>
              <ul className="space-y-2.5">
                {g.l.map((i) => (
                  <li key={i}>
                    {(i === "Namer") ? (
                      <Link to="/namer" className="text-paper/70 hover:text-paper">{i}</Link>
                    ) : (i === "Om oss" || i === "About") ? (
                      <Link to="/about" className="text-paper/70 hover:text-paper">{i}</Link>
                    ) : (i === "Blogg") ? (
                      <Link to="/blog" className="text-paper/70 hover:text-paper">{i}</Link>
                    ) : (i === "Press") ? (
                      <Link to="/press" className="text-paper/70 hover:text-paper">{i}</Link>
                    ) : (i === "Villkor" || i === "Terms") ? (
                      <Link to="/terms" className="text-paper/70 hover:text-paper">{i}</Link>
                    ) : (i === "Integritetspolicy" || i === "Privacy Policy") ? (
                      <Link to="/privacy" className="text-paper/70 hover:text-paper">{i}</Link>
                    ) : (i === "Säkerhet" || i === "Security") ? (
                      <Link to="/security" className="text-paper/70 hover:text-paper">{i}</Link>
                    ) : (
                      <a href="javascript:void(0)" className="text-paper/70 hover:text-paper">{i}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="hairline-dark" />
      <div className="container-edge py-6 flex items-center justify-between text-[12px] text-paper/40 flex-wrap gap-3">
        <span>© {new Date().getFullYear()} Veridex AI. {t.footer.rights}</span>
        <span className="font-mono">SE · v2.4 · build 2026.04</span>
      </div>
    </footer>
  );
};
