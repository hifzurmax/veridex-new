import { useEffect } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Construction,
  Database,
  FileSearch,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { Nav } from "@/components/veridex/Nav";
import { Footer } from "@/components/veridex/Footer";

const highlights = ["Effektiv", "Smart", "Professionell"];

const valueCards = [
  {
    title: "Färre överraskningar",
    body: "Tidiga signaler på avvikelser, risker och avtalsfrågor innan de utvecklas till kostsamma problem.",
    icon: ShieldCheck,
  },
  {
    title: "Underlag som gör skillnad",
    body: "Rapporter med tydliga källor, prioriteringar och beslutsstöd för dialog, uppföljning och åtgärd.",
    icon: FileSearch,
  },
  {
    title: "Fullständig kontroll på kostnader",
    body: "Strukturerad analys av fakturor, ÄTA, kontrakt och produktion för en mer exakt ekonomibild.",
    icon: BarChart3,
  },
];

const storyBlocks = [
  "Veridex grundades av civilingenjörer med erfarenhet från hela bygg- och infrastrukturens värdekedja. Vi har arbetat som entreprenörer, konsulter, projektörer och på beställarsidan, ofta i komplexa projekt med offentliga uppdragsgivare, höga ekonomiska värden och stora krav på transparens och kontroll.",
  "I dessa miljöer har vi sett hur uppföljning ofta sker ojämnt, hur avtal tolkas olika och hur beslutsfattare tvingas agera på fragmenterade eller ofullständiga underlag. Inte på grund av bristande kompetens, utan på grund av att datamängderna blivit för stora och strukturerna för svaga.",
  "Det var här behovet av Veridex uppstod.",
  "Genom att kombinera teknisk ingenjörskompetens med AI-baserad analys skapar vi struktur i stora datamängder och gör samband, avvikelser och risker synliga. Våra analyser bygger alltid på avtal, data och faktisk produktion. Inte på antaganden eller efterhandsbedömningar.",
  "Vi är oberoende och opartiska. Utan koppling till entreprenörer eller leverantörer arbetar vi uteslutande för att säkerställa att alla parter behandlas lika och att beslut fattas på samma faktagrund, oavsett projekt eller aktör.",
  "Veridex verkar i gränslandet mellan teknik, ekonomi och avtal. Där insyn skapar förtroende och kontroll.",
];

const serviceSignals = [
  "Kontraktsanalys",
  "Fakturagranskning",
  "Riskidentifiering",
  "Ekonomiuppföljning",
];

const About = () => {
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
              "radial-gradient(ellipse 60% 48% at 72% 12%, hsl(212 95% 55% / 0.16), transparent 68%)",
          }}
        />
        <div className="container-edge relative pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="label-mono mb-7 text-paper/60">// Om Oss</div>
              <h1 className="font-display max-w-[12ch] text-balance text-[44px] font-medium leading-[1.02] tracking-[-0.035em] sm:text-[62px] md:text-[78px] md:leading-[0.98]">
                Byggrevision med AI och teknisk spets
              </h1>
              <p className="mt-8 max-w-[34ch] font-display text-[24px] leading-tight tracking-[-0.02em] text-paper/90 md:text-[30px]">
                Klarhet och kontroll i komplexa byggprojekt
              </p>
              <div className="mt-8 max-w-[66ch] space-y-5 text-[16px] leading-relaxed text-paper/70 md:text-[17px]">
                <p>
                  Veridex är ett oberoende analys- och revisionsbolag specialiserat på bygg- och
                  infrastrukturprojekt. Vi kombinerar civilingenjörskompetens med AI-baserad analys
                  för att identifiera kostnadsavvikelser, avtalsbrister och ekonomiska risker som är
                  svåra att upptäcka med traditionella metoder.
                </p>
                <p>
                  Vårt arbete ger beställare och beslutsfattare ett faktabaserat underlag för
                  uppföljning, dialog och välgrundade beslut i projekt med hög komplexitet och stora
                  ekonomiska värden.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="/#cases"
                  className="inline-flex items-center gap-2 bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-paper/90"
                >
                  Se utvalda projekt
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative border border-paper/12 bg-paper/[0.03] p-5 shadow-2xl shadow-black/25 backdrop-blur-sm">
                <div className="corner-tick absolute inset-0" aria-hidden />
                <div className="grid gap-px bg-paper/10">
                  {highlights.map((item, index) => (
                    <div key={item} className="group bg-ink/80 p-6 transition-colors hover:bg-ink">
                      <div className="flex items-center justify-between">
                        <span className="label-mono text-paper/45">0{index + 1}</span>
                        <span className="h-px w-10 bg-paper/15 transition-colors group-hover:bg-signal" />
                      </div>
                      <div className="mt-8 font-display text-[28px] leading-none tracking-[-0.025em]">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 border border-paper/10 bg-paper/[0.04] p-5">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-verify opacity-60 anim-pulse-dot" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-verify" />
                    </span>
                    <span className="label-mono text-paper/55">AI revision · teknisk kontroll</span>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-px bg-paper/10">
                    {["Avtal", "Data", "Produktion"].map((item) => (
                      <div key={item} className="bg-ink/70 px-3 py-4 text-center text-[12px] text-paper/65">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hairline-dark" />
      </section>

      <section className="border-b border-line-soft bg-paper text-ink">
        <div className="container-edge py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="label-mono mb-6">// Värde</div>
              <h2 className="font-display max-w-[12ch] text-[36px] leading-[1.05] tracking-[-0.03em] md:text-[52px]">
                Uppnå era mål med rätt data och strategi
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="max-w-[58ch] text-[18px] leading-relaxed text-muted-foreground md:text-[20px]">
                Veridex kombinerar AI-teknologi med branschkunskap för att leverera träffsäkra
                rapporter, minska risker och maximera värdet i era byggprojekt.
              </p>
              <div className="mt-10 grid gap-px border border-line-soft bg-line-soft sm:grid-cols-3">
                {valueCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article key={card.title} className="group bg-paper p-7 transition-colors hover:bg-white">
                      <div className="mb-8 flex h-10 w-10 items-center justify-center border border-line-soft bg-paper-2 text-ink transition-colors group-hover:border-signal/40 group-hover:text-signal">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h3 className="font-display text-[20px] leading-tight tracking-[-0.015em]">
                        {card.title}
                      </h3>
                      <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">{card.body}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line-soft bg-paper-2 text-ink">
        <div className="container-edge py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="label-mono mb-6">// Bakgrund</div>
                <h2 className="font-display text-[36px] leading-[1.05] tracking-[-0.03em] md:text-[48px]">
                  Oberoende analys byggd på erfarenhet från verkliga projekt.
                </h2>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="border border-line-soft bg-paper px-6 py-8 shadow-sm md:px-10 md:py-12">
                <div className="space-y-6 text-[16px] leading-relaxed text-muted-foreground md:text-[17px]">
                  {storyBlocks.map((block, index) => (
                    <p
                      key={block}
                      className={
                        index === 2 || index === storyBlocks.length - 1
                          ? "font-display text-[24px] leading-snug tracking-[-0.02em] text-ink md:text-[30px]"
                          : undefined
                      }
                    >
                      {block}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-line-soft bg-paper text-ink">
        <div className="container-edge py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="relative min-h-[420px] overflow-hidden border border-line-soft bg-ink p-6 text-paper shadow-xl shadow-ink/10">
                <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
                <div
                  className="absolute inset-0"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 52% at 24% 8%, hsl(212 95% 55% / 0.18), transparent 70%)",
                  }}
                />
                <div className="relative flex h-full min-h-[372px] flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="label-mono text-paper/55">Construction intelligence</div>
                    <Construction className="h-5 w-5 text-paper/45" aria-hidden />
                  </div>

                  <div className="mx-auto grid w-full max-w-[430px] gap-3">
                    <div className="grid grid-cols-3 gap-3">
                      {[Database, Bot, LineChart].map((Icon, index) => (
                        <div
                          key={index}
                          className="flex aspect-square items-center justify-center border border-paper/10 bg-paper/[0.05]"
                        >
                          <Icon className="h-8 w-8 text-signal" aria-hidden />
                        </div>
                      ))}
                    </div>
                    <div className="border border-paper/10 bg-paper/[0.05] p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="label-mono text-paper/50">Project data</span>
                        <span className="text-[12px] text-verify">Verified</span>
                      </div>
                      <div className="space-y-3">
                        {[72, 88, 56, 94].map((width, index) => (
                          <div key={index} className="h-2 bg-paper/10">
                            <div className="h-full bg-signal" style={{ width: `${width}%` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-px bg-paper/10">
                    {serviceSignals.map((item) => (
                      <div key={item} className="bg-ink/85 p-4 text-[13px] text-paper/70">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="label-mono mb-6">// Tjänster</div>
              <h2 className="font-display max-w-[14ch] text-[36px] leading-[1.05] tracking-[-0.03em] md:text-[52px]">
                AI-drivna tjänster för kontroll, transparens och ekonomiuppföljning
              </h2>
              <p className="mt-8 max-w-[62ch] text-[17px] leading-relaxed text-muted-foreground">
                Veridex erbjuder specialiserade analystjänster för beställare och organisationer som
                behöver struktur, tydlighet och beslutsunderlag i komplexa byggprojekt. Våra tjänster
                är utvecklade för att hantera stora datamängder, säkerställa avtalsefterlevnad och
                identifiera ekonomiska avvikelser.
              </p>
              <div className="mt-10 border-l border-line-soft pl-6">
                <div className="label-mono mb-5">Våra tjänster</div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {serviceSignals.map((item) => (
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
      </section>

      <Footer />
    </main>
  );
};

export default About;
