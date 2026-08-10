import { useT } from "@/i18n/LanguageProvider";

export const Impact = () => {
  const { t } = useT();
  return (
    <section id="impact" className="bg-ink text-paper border-b border-line/60 relative">
      <div className="container-edge py-24 md:py-32">
        <div className="max-w-[60ch]">
          <div className="label-mono text-paper/50 mb-6">{t.impact.label}</div>
          <h2 className="font-display text-[36px] md:text-[56px] leading-[1.04] tracking-[-0.03em]">
            {t.impact.title}
          </h2>
          <p className="mt-6 text-paper/65 text-[16px] max-w-[52ch]">{t.impact.body}</p>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-px bg-line border border-line">
          {t.impact.items.map((o) => (
            <div key={o.k} className="bg-ink p-7 min-h-[180px]">
              <div className="font-display text-[22px] tracking-tight">{o.k}</div>
              <div className="mt-4 h-px w-8 bg-signal" />
              <p className="mt-4 text-[14px] text-paper/65 leading-relaxed">{o.v}</p>
            </div>
          ))}
        </div>

        <figure className="mt-20 max-w-[68ch]">
          <blockquote className="font-display text-[24px] md:text-[32px] leading-[1.25] tracking-[-0.02em] text-paper">
            {t.impact.quote}
          </blockquote>
          <figcaption className="mt-6 label-mono text-paper/55">{t.impact.cite}</figcaption>
        </figure>
      </div>
    </section>
  );
};
