import { useT } from "@/i18n/LanguageProvider";

export const Platform = () => {
  const { t } = useT();
  return (
    <section id="platform" className="bg-paper text-ink border-b border-line-soft">
      <div className="container-edge py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="label-mono mb-6">{t.platform.label}</div>
            <h2 className="font-display text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.03em]">
              {t.platform.title}
            </h2>
            <p className="mt-6 text-[16px] text-muted-foreground max-w-[36ch]">{t.platform.body}</p>
          </div>

          <div className="md:col-span-8">
            <div className="grid sm:grid-cols-2 gap-px bg-line-soft border border-line-soft">
              {t.platform.items.map((c) => (
                <div key={c.n} className="bg-paper p-7 group">
                  <div className="flex items-center justify-between mb-8">
                    <span className="label-mono">{c.n}</span>
                    <span className="h-px w-10 bg-line-soft group-hover:bg-ink transition-colors" />
                  </div>
                  <h3 className="font-display text-[20px] tracking-[-0.01em]">{c.t}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
