import { useT } from "@/i18n/LanguageProvider";

export const About = () => {
  const { t } = useT();
  return (
    <section id="company" className="bg-paper text-ink border-b border-line-soft">
      <div className="container-edge py-24 md:py-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="label-mono mb-6">{t.about.label}</div>
          <h2 className="font-display text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.03em]">
            {t.about.title}
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-[16px] leading-relaxed text-muted-foreground max-w-[60ch]">
          <p>{t.about.p1}</p>
          <p className="text-ink">{t.about.p2}</p>
          <p>{t.about.p3}</p>

          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line-soft border border-line-soft">
            {t.about.meta.map(([k, v]) => (
              <div key={v} className="bg-paper p-5">
                <div className="font-display text-[18px] tracking-tight">{k}</div>
                <div className="label-mono mt-2">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
