import { useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  FileText,
  FolderTree,
  ScanText,
  ShieldCheck,
  Split,
  UploadCloud,
} from "lucide-react";
import { Nav } from "@/components/veridex/Nav";
import { Footer } from "@/components/veridex/Footer";

const inputDocs = ["PDF", "WORD", "BILDER", "DOKUMENT"];
const engineActions = ["LÄSA", "FÖRSTÅ", "KLASSIFICERA", "NAMNGE", "STRUKTURERA"];
const outputs = ["FILNAMN", "METADATA", "MAPPSTRUKTUR", "LEVERANSPAKET"];

const problemPoints = [
  "Dokument kommer från olika projekt, leverantörer och system.",
  "Filnamn skiljer sig åt, metadata saknas och information levereras i olika format.",
  "Manuell klassificering av tusentals dokument tar tid och skapar risk för fel.",
];

const steps = [
  {
    n: "01",
    title: "Ladda upp",
    body: "PDF, Word, bilder och andra dokument samlas på ett ställe.",
    icon: UploadCloud,
  },
  {
    n: "02",
    title: "Förstå",
    body: "Namer läser dokumentens innehåll och identifierar vad varje dokument faktiskt avser.",
    icon: ScanText,
  },
  {
    n: "03",
    title: "Klassificera",
    body: "Dokumenttyp, system, metadata och klassificering matchas mot era krav.",
    icon: FileCheck2,
  },
  {
    n: "04",
    title: "Kvalitetssäkra",
    body: "Säkra träffar hanteras automatiskt. Det som kräver ett beslut lyfts för kontroll.",
    icon: ShieldCheck,
  },
  {
    n: "05",
    title: "Leverera",
    body: "Dokumenten får rätt namn, metadata och struktur och paketeras för leverans.",
    icon: FolderTree,
  },
];

const qualityStates = [
  {
    title: "Verifierad",
    body: "Tillräckligt underlag finns. Dokumentet är klart.",
    tone: "text-verify",
  },
  {
    title: "Kontroll",
    body: "Ett mänskligt beslut behövs innan dokumentet färdigställs.",
    tone: "text-signal",
  },
  {
    title: "Bevarad",
    body: "Originalfilen behålls även när dokumentet inte kan analyseras automatiskt.",
    tone: "text-paper/70",
  },
];

const messyFiles = [
  "IMG_2043.jpg",
  "dokument_final_2.pdf",
  "Materialförteckning.docx",
  "Produktblad_ny.pdf",
];

const cleanFiles = [
  "A430_INTYG_PARTI.pdf",
  "E610_PRODUKTBLAD_KANALISATION.pdf",
  "V540_DOU_BRANDSLACKNING.pdf",
];

const resultItems = ["Rätt filnamn", "Rätt metadata", "Rätt klassificering", "Rätt mappstruktur"];

const FlowPill = ({ children }: { children: React.ReactNode }) => (
  <div className="border border-line-soft bg-paper px-4 py-3 font-mono text-[12px] text-ink shadow-sm">
    {children}
  </div>
);

const PipelineIllustration = () => (
  <div className="relative border border-paper/12 bg-paper/[0.03] p-5 shadow-2xl shadow-black/25 backdrop-blur-sm">
    <div className="corner-tick absolute inset-0" aria-hidden />
    <div className="grid gap-4">
      <div>
        <div className="label-mono mb-3 text-paper/45">INDATA</div>
        <div className="grid gap-2 sm:grid-cols-2">
          {inputDocs.map((item) => (
            <div key={item} className="min-w-0 border border-paper/10 bg-ink/70 px-3 py-3 text-center font-mono text-[11px] leading-none text-paper/70">
              {item}
            </div>
          ))}
        </div>
      </div>

      <ArrowRight className="mx-auto h-5 w-5 rotate-90 text-paper/30" aria-hidden />

      <div className="bg-paper p-5 text-ink">
        <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px]">
          VERIDEX NAMER
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {engineActions.map((item) => (
            <div key={item} className="min-w-0 border border-line-soft bg-paper-2 px-3 py-3 text-center font-mono text-[10px] leading-none tracking-normal sm:text-[11px]">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-5 h-1 bg-signal" />
      </div>

      <ArrowRight className="mx-auto h-5 w-5 rotate-90 text-paper/30" aria-hidden />

      <div>
        <div className="label-mono mb-3 text-paper/45">UTDATA</div>
        <div className="grid gap-2 sm:grid-cols-2">
          {outputs.map((item) => (
            <div key={item} className="min-w-0 border border-paper/10 bg-ink/70 px-3 py-3 text-center font-mono text-[10px] leading-none tracking-normal text-paper/70 sm:text-[11px]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const BeforeAfterIllustration = () => (
  <div className="border border-line-soft bg-paper p-5 shadow-sm">
    <div className="grid gap-5 lg:grid-cols-[1fr_auto_1.15fr] lg:items-center">
      <div>
        <div className="label-mono mb-4">Före</div>
        <div className="grid gap-2">
          {messyFiles.map((file) => (
            <FlowPill key={file}>{file}</FlowPill>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 text-ink">
        <div className="h-px w-10 bg-line-soft lg:w-8" />
        <div className="border border-ink bg-ink px-4 py-3 font-mono text-[11px] text-paper">NAMER</div>
        <ArrowRight className="hidden h-4 w-4 lg:block" aria-hidden />
      </div>

      <div>
        <div className="label-mono mb-4">Efter</div>
        <div className="grid gap-2">
          {cleanFiles.map((file) => (
            <FlowPill key={file}>{file}</FlowPill>
          ))}
        </div>
        <div className="mt-4 grid gap-px bg-line-soft text-[12px] text-muted-foreground sm:grid-cols-3">
          {["metadata.json", "/INTYG", "/PRODUKTBLAD"].map((item) => (
            <div key={item} className="bg-paper-2 px-3 py-3 font-mono">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const QualityIllustration = () => (
  <div className="relative min-h-[430px] overflow-hidden border border-line bg-ink p-6 text-paper shadow-xl shadow-ink/10">
    <div className="absolute inset-0 grid-bg opacity-45" aria-hidden />
    <div className="relative flex min-h-[382px] flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="label-mono text-paper/50">Kvalitetssäkring</div>
        <Split className="h-5 w-5 text-paper/45" aria-hidden />
      </div>

      <div className="mx-auto w-full max-w-[560px]">
        <div className="mx-auto flex w-fit items-center gap-3 border border-paper/12 bg-paper/[0.05] px-5 py-4">
          <FileText className="h-5 w-5 text-signal" aria-hidden />
          <span className="font-mono text-[12px] text-paper/75">DOKUMENTFLÖDE</span>
        </div>
        <div className="mx-auto h-10 w-px bg-paper/18" />
        <div className="mx-auto h-px w-[76%] bg-paper/18" />
        <div className="grid gap-3 pt-4 sm:grid-cols-3">
          {qualityStates.map((state) => (
            <div key={state.title} className="border border-paper/12 bg-paper/[0.05] p-4">
              <div className={`mb-8 flex items-center gap-2 font-mono text-[11px] uppercase ${state.tone}`}>
                <span className="h-2 w-2 rounded-full bg-current" />
                {state.title}
              </div>
              <p className="text-[13px] leading-relaxed text-paper/62">{state.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-px bg-paper/10">
        {["Automatik", "Beslut", "Original"].map((item) => (
          <div key={item} className="bg-ink/80 p-3 text-center font-mono text-[11px] text-paper/45">
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Namer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />

      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 62% 48% at 70% 8%, hsl(212 95% 55% / 0.14), transparent 70%)",
          }}
        />
        <div className="container-edge relative pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <div className="label-mono mb-7 text-paper/60">// Veridex Namer</div>
              <h1 className="font-display max-w-[11ch] text-balance text-[46px] font-medium leading-[1.02] tracking-[-0.035em] sm:text-[64px] md:text-[82px] md:leading-[0.98]">
                Dokument in. Struktur ut.
              </h1>
              <p className="mt-8 max-w-[40ch] font-display text-[23px] leading-tight tracking-[-0.02em] text-paper/90 md:text-[30px]">
                Veridex Namer läser, klassificerar, namnger och strukturerar stora dokumentleveranser enligt organisationens krav.
              </p>
              <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-paper/65 md:text-[17px]">
                Från hundratals eller tusentals ostrukturerade filer till en kvalitetssäkrad struktur redo för leverans, import eller arkivering.
              </p>
              <div className="mt-10">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-paper/90"
                >
                  Boka demo
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <PipelineIllustration />
            </div>
          </div>
        </div>
        <div className="hairline-dark" />
      </section>

      <section className="border-b border-line-soft bg-paper text-ink">
        <div className="container-edge py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="label-mono mb-6">// Problemet</div>
              <h2 className="font-display max-w-[12ch] text-[36px] leading-[1.05] tracking-[-0.03em] md:text-[52px]">
                Dokumentationen finns. Strukturen gör det inte.
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="max-w-[62ch] space-y-5 text-[17px] leading-relaxed text-muted-foreground md:text-[20px]">
                <p>
                  Dokument kommer från olika projekt, leverantörer och system. Filnamn skiljer sig åt, metadata saknas och information levereras i olika format.
                </p>
                <p>
                  Att manuellt identifiera, klassificera, döpa om och strukturera tusentals dokument tar tid och skapar risk för fel.
                </p>
                <p className="text-ink">
                  Namer automatiserar arbetet utan att tappa kontrollen över originalmaterialet.
                </p>
              </div>
              <div className="mt-10 grid gap-px border border-line-soft bg-line-soft sm:grid-cols-3">
                {problemPoints.map((point, index) => (
                  <div key={point} className="bg-paper p-6">
                    <div className="label-mono mb-8">0{index + 1}</div>
                    <p className="text-[14px] leading-relaxed text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line-soft bg-paper-2 text-ink">
        <div className="container-edge py-24 md:py-32">
          <div className="mb-14 max-w-[700px]">
            <div className="label-mono mb-6">// Så fungerar det</div>
            <h2 className="font-display text-[36px] leading-[1.05] tracking-[-0.03em] md:text-[52px]">
              Från filer till färdig leverans.
            </h2>
          </div>
          <div className="grid gap-px border border-line-soft bg-line-soft md:grid-cols-5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.n} className="group bg-paper p-6 transition-colors hover:bg-white">
                  <div className="flex items-center justify-between">
                    <span className="label-mono">{step.n}</span>
                    <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-signal" aria-hidden />
                  </div>
                  <h3 className="mt-12 font-display text-[24px] leading-tight tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">{step.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-line-soft bg-paper text-ink">
        <div className="container-edge py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-12">
              <BeforeAfterIllustration />
            </div>
            <div className="lg:col-span-12">
              <div className="label-mono mb-6">// Resultat</div>
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-6">
                  <h2 className="font-display max-w-[13ch] text-[36px] leading-[1.05] tracking-[-0.03em] md:text-[52px]">
                    Samma dokument. En helt annan leverans.
                  </h2>
                </div>
                <div className="lg:col-span-6">
                  <p className="max-w-[62ch] text-[17px] leading-relaxed text-muted-foreground">
                    Ostrukturerade original omvandlas till en konsekvent och spårbar dokumentleverans utan att originalmaterial går förlorat.
                  </p>
                  <div className="mt-10 grid gap-3 sm:grid-cols-2">
                    {resultItems.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-[15px] text-ink">
                        <CheckCircle2 className="h-4 w-4 text-verify" aria-hidden />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line-soft bg-paper-2 text-ink">
        <div className="container-edge py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="label-mono mb-6">// Kontroll</div>
              <h2 className="font-display max-w-[13ch] text-[36px] leading-[1.05] tracking-[-0.03em] md:text-[52px]">
                Automatisera det säkra. Granska resten.
              </h2>
              <p className="mt-8 max-w-[58ch] text-[17px] leading-relaxed text-muted-foreground">
                Namer tvingar inte in dokument i en struktur när underlaget inte räcker.
              </p>
              <div className="mt-10 space-y-5">
                {qualityStates.map((state) => (
                  <div key={state.title} className="border-l border-line-soft pl-5">
                    <h3 className="font-display text-[22px] leading-tight tracking-[-0.015em]">{state.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{state.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <QualityIllustration />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line-soft bg-paper text-ink">
        <div className="container-edge py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="label-mono mb-6">// Anpassning</div>
              <h2 className="font-display max-w-[12ch] text-[36px] leading-[1.05] tracking-[-0.03em] md:text-[52px]">
                Era dokument. Era regler.
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="max-w-[64ch] space-y-5 text-[17px] leading-relaxed text-muted-foreground md:text-[20px]">
                <p>
                  Namer anpassas efter organisationens befintliga informationsstruktur och leveranskrav.
                </p>
                <p>
                  Klassificering, dokumenttyper, metadata, filnamn och mappstruktur kan följa interna standarder, projektkrav eller etablerade klassificeringssystem.
                </p>
              </div>
              <div className="mt-10 grid gap-px border border-line-soft bg-line-soft sm:grid-cols-2">
                {["Intern standard", "Projektkrav", "Klassificeringssystem", "Leveransformat"].map((item) => (
                  <div key={item} className="bg-paper px-5 py-5 font-mono text-[12px] text-ink">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 100%, hsl(212 95% 55% / 0.12), transparent 70%)",
          }}
        />
        <div className="container-edge relative py-28 md:py-36">
          <div className="label-mono mb-6 text-paper/50">// Veridex Namer</div>
          <h2 className="font-display max-w-[13ch] text-balance text-[40px] leading-[1.0] tracking-[-0.035em] sm:text-[52px] md:text-[68px]">
            Dokumenten behöver inte komma in perfekta. De behöver komma ut rätt.
          </h2>
          <p className="mt-8 max-w-[52ch] text-[17px] leading-relaxed text-paper/65">
            Veridex Namer tar hand om vägen däremellan.
          </p>
          <div className="mt-10">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-paper/90"
            >
              Prata med oss om Namer
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Namer;
