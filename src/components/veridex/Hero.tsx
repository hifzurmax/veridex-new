import { useT } from "@/i18n/LanguageProvider";

export const Hero = () => {
  const { t } = useT();
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, hsl(212 95% 55% / 0.12), transparent 70%)" }}
      />
      <div className="container-edge relative pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="flex items-center gap-3 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-verify opacity-60 anim-pulse-dot" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-verify" />
          </span>
          <span className="label-mono text-paper/60">{t.hero.status}</span>
        </div>

        <h1 className="font-display text-balance text-[44px] leading-[1.02] sm:text-[64px] md:text-[88px] md:leading-[0.98] tracking-[-0.035em] font-medium max-w-[14ch]">
          {t.hero.title}
        </h1>

        <p className="mt-8 max-w-[52ch] text-[17px] md:text-[19px] leading-relaxed text-paper/70">
          {t.hero.body}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 bg-paper text-ink px-5 py-3 text-[14px] font-medium hover:bg-paper/90 transition-colors">
            {t.hero.cta}
            <span aria-hidden>→</span>
          </a>
          <a href="#how" className="inline-flex items-center gap-2 border border-paper/15 px-5 py-3 text-[14px] text-paper/85 hover:border-paper/35 hover:text-paper transition-colors">
            {t.hero.secondary}
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-line">
          {t.hero.stats.map((s) => (
            <div key={s.v} className="bg-ink p-5">
              <div className="font-display text-[28px] md:text-[32px] tracking-tight">{s.k}</div>
              <div className="label-mono mt-2 text-paper/55">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hairline-dark" />
    </section>
  );
};
