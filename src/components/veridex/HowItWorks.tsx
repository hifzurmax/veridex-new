import { useT } from "@/i18n/LanguageProvider";

export const HowItWorks = () => {
  const { t } = useT();
  const steps = t.how.steps;
  return (
    <section id="how" className="bg-ink text-paper relative overflow-hidden border-b border-line/60">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="container-edge relative py-24 md:py-32">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="label-mono text-paper/50 mb-6">{t.how.label}</div>
            <h2 className="font-display text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.03em] max-w-[18ch]">
              {t.how.title}
            </h2>
          </div>
          <div className="text-paper/55 text-[14px] max-w-[34ch]">{t.how.sub}</div>
        </div>

        <div className="grid md:grid-cols-4 gap-px bg-line border border-line">
          {steps.map((s, i) => (
            <div key={s.n} className="relative bg-ink p-8 min-h-[280px] flex flex-col">
              <div className="flex items-center justify-between mb-10">
                <span className="label-mono text-paper/55">{s.n} · {s.label}</span>
                {i < steps.length - 1 && (
                  <span className="hidden md:inline text-paper/30 font-mono text-xs">→</span>
                )}
              </div>
              <h3 className="font-display text-[18px] leading-snug tracking-tight text-paper">{s.title}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-paper/55">{s.body}</p>

              <div className="mt-auto pt-8">
                <svg viewBox="0 0 120 30" className="w-full h-8 text-paper/25" aria-hidden>
                  <line x1="0" y1="15" x2="120" y2="15" stroke="currentColor" strokeWidth="1" />
                  {[10, 35, 60, 85, 110].map((x, idx) => (
                    <rect
                      key={x}
                      x={x - 1.5}
                      y={idx === i ? 8 : 12}
                      width="3"
                      height={idx === i ? 14 : 6}
                      fill={idx === i ? "hsl(var(--signal))" : "currentColor"}
                    />
                  ))}
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
