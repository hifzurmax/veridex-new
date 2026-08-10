import { useT } from "@/i18n/LanguageProvider";

export const Trust = () => {
  const { t } = useT();
  return (
    <section className="bg-ink text-paper border-b border-line/60 relative">
      <div className="container-edge py-24 md:py-28">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="label-mono text-paper/50 mb-6">{t.trust.label}</div>
            <h2 className="font-display text-[32px] md:text-[40px] leading-[1.05] tracking-[-0.03em]">
              {t.trust.title}
            </h2>
          </div>
          <div className="md:col-span-8 grid gap-px bg-line border border-line">
            {t.trust.items.map((p) => (
              <div key={p.t} className="bg-ink p-7 grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-5 font-display text-[20px] tracking-tight">{p.t}</div>
                <div className="md:col-span-7 text-paper/65 text-[14.5px] leading-relaxed">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
