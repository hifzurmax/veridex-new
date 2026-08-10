import { useT } from "@/i18n/LanguageProvider";

export const SystemDiagram = () => {
  const { t } = useT();
  const d = t.diagram;
  return (
    <section className="bg-paper border-b border-line-soft">
      <div className="container-edge py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <div className="label-mono mb-6">{d.label}</div>
            <h2 className="font-display text-[32px] md:text-[40px] leading-[1.05] tracking-[-0.03em]">
              {d.title}
            </h2>
            <p className="mt-6 text-[15px] text-muted-foreground max-w-[38ch]">{d.body}</p>
          </div>

          <div className="md:col-span-8 relative corner-tick">
            <div className="border border-line-soft bg-paper-2/40 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg-light opacity-50" aria-hidden />
              <svg viewBox="0 0 800 360" className="relative w-full h-auto" aria-hidden>
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M0,0 L10,5 L0,10 z" fill="hsl(var(--ink))" />
                  </marker>
                </defs>

                {d.inputs.map((tx, i) => (
                  <g key={tx}>
                    <rect x="20" y={20 + i * 70} width="180" height="50" fill="hsl(var(--paper))" stroke="hsl(var(--ink))" strokeWidth="1" />
                    <text x="36" y={50 + i * 70} fontFamily="JetBrains Mono" fontSize="12" fill="hsl(var(--ink))">{tx}</text>
                  </g>
                ))}
                <text x="20" y="14" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="2" fill="hsl(var(--muted-foreground))">{d.input}</text>

                <rect x="320" y="80" width="200" height="200" fill="hsl(var(--ink))" />
                <text x="340" y="110" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="2" fill="hsl(var(--paper) / 0.55)">{d.engine}</text>
                <text x="340" y="150" fontFamily="Inter Tight" fontSize="20" fill="hsl(var(--paper))">{d.verify}</text>
                <text x="340" y="180" fontFamily="Inter Tight" fontSize="20" fill="hsl(var(--paper))">{d.reconcile}</text>
                <text x="340" y="210" fontFamily="Inter Tight" fontSize="20" fill="hsl(var(--paper))">{d.quantify}</text>
                <rect x="340" y="240" width="160" height="2" fill="hsl(var(--signal))" />

                {[0, 1, 2, 3].map((i) => (
                  <path
                    key={i}
                    d={`M200 ${45 + i * 70} C 260 ${45 + i * 70}, 280 180, 320 180`}
                    stroke="hsl(var(--ink))"
                    strokeWidth="1"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />
                ))}

                {d.outputs.map((tx, i) => (
                  <g key={tx}>
                    <rect x="600" y={20 + i * 70} width="180" height="50" fill="hsl(var(--paper))" stroke="hsl(var(--ink))" strokeWidth="1" />
                    <text x="616" y={50 + i * 70} fontFamily="JetBrains Mono" fontSize="12" fill="hsl(var(--ink))">{tx}</text>
                  </g>
                ))}
                <text x="600" y="14" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="2" fill="hsl(var(--muted-foreground))">{d.output}</text>

                {[0, 1, 2, 3].map((i) => (
                  <path
                    key={i}
                    d={`M520 180 C 560 180, 580 ${45 + i * 70}, 600 ${45 + i * 70}`}
                    stroke="hsl(var(--ink))"
                    strokeWidth="1"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
