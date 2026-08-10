import { useT } from "@/i18n/LanguageProvider";

const logos = [
  "AB Övikshem", "Kastell", "Örnsköldviks kommun", "Malmö Stad", "Göteborg Stad",
];

const logoSet = [...logos, ...logos];

export const Marquee = () => {
  const { t } = useT();
  return (
    <section className="bg-ink text-paper border-b border-line/70 py-10 overflow-hidden">
      <div className="container-edge mb-6">
        <div className="label-mono text-paper/45">{t.marquee.label}</div>
      </div>
      <div className="relative">
        <div className="flex anim-ticker pl-6 md:pl-10">
          {[0, 1].map((group) => (
            <div
              key={group}
              aria-hidden={group === 1}
              className="flex shrink-0 items-center gap-16 pr-16"
            >
              {logoSet.map((l, index) => (
                <span key={`${group}-${l}-${index}`} className="font-display text-[22px] tracking-tight text-paper/40 whitespace-nowrap">
                  {l}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent" />
      </div>
    </section>
  );
};
