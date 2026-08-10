import { useT } from "@/i18n/LanguageProvider";

export const Cases = () => {
  const { t } = useT();
  return (
    <section id="cases" className="bg-paper text-ink border-b border-line-soft">
      <div className="container-edge py-24 md:py-32">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <div className="label-mono mb-6">{t.cases.label}</div>
            <h2 className="font-display text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.03em] max-w-[20ch]">
              {t.cases.title}
            </h2>
          </div>
          <a href="#contact" className="text-[14px] underline underline-offset-4 decoration-line hover:decoration-ink">
            {t.cases.link}
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-line-soft border border-line-soft">
          {t.cases.items.map((c) => (
            <article key={c.title} className="bg-paper p-8 min-h-[340px] flex flex-col">
              <div className="label-mono mb-6">{c.tag}</div>
              <h3 className="font-display text-[22px] leading-snug tracking-[-0.015em]">{c.title}</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">{c.body}</p>
              <div className="mt-auto pt-8 border-t border-line-soft">
                <div className="label-mono">{c.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
