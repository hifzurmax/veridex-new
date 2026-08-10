import { useEffect } from "react";
import { ArrowRight, Building2, CalendarDays, CheckCircle2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/veridex/Footer";
import { Nav } from "@/components/veridex/Nav";
import { PressAnnouncement, pressAnnouncements } from "@/data/pressAnnouncements";

const imageStyles: Record<PressAnnouncement["imageTone"], string> = {
  signal: "from-signal/35 via-ink-2 to-ink",
  verify: "from-verify/30 via-ink-2 to-ink",
  paper: "from-paper/25 via-ink-2 to-ink",
  ink: "from-ink-3 via-ink-2 to-ink",
};

const PressVisual = ({ announcement }: { announcement: PressAnnouncement }) => (
  <div
    className={`relative min-h-[430px] overflow-hidden border border-paper/12 bg-gradient-to-br ${imageStyles[announcement.imageTone]}`}
    role="img"
    aria-label={`Featured visual for ${announcement.title}`}
  >
    {announcement.imageUrl ? (
      <img src={announcement.imageUrl} alt="" className="h-full w-full object-cover" />
    ) : (
      <>
        <div className="absolute inset-0 grid-bg opacity-35" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-paper/20" aria-hidden />
        <div className="absolute left-8 right-8 top-1/2 h-px bg-paper/20" aria-hidden />
        <div className="absolute left-8 top-16 h-32 w-px bg-paper/20" aria-hidden />
        <div className="absolute bottom-8 left-8 right-8 grid grid-cols-6 gap-2" aria-hidden>
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <span key={item} className="h-1 bg-paper/25" style={{ opacity: 0.25 + item * 0.1 }} />
          ))}
        </div>
      </>
    )}
    <div className="absolute left-8 top-8 label-mono text-paper/55">Official press release</div>
    <div className="absolute bottom-24 left-8 right-8">
      <div className="max-w-[14ch] font-display text-[42px] leading-[0.95] tracking-[-0.04em] text-paper">
        Malmö stad x Veridex
      </div>
    </div>
    <div className="absolute right-8 top-8 grid gap-px bg-paper/15 text-paper">
      {["Avtal", "Fakturor", "Kontroll"].map((item) => (
        <div key={item} className="bg-ink/70 px-4 py-3 text-[12px] text-paper/65">
          {item}
        </div>
      ))}
    </div>
  </div>
);

const Press = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const announcement = [...pressAnnouncements].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))[0];

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />

      <section className="relative overflow-hidden border-b border-line bg-ink text-paper">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{ background: "radial-gradient(ellipse 55% 55% at 75% 35%, hsl(212 95% 55% / 0.16), transparent 68%)" }}
        />
        <div className="container-edge relative py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="label-mono mb-6 text-paper/50">// Press</div>
              <div className="mb-6 flex flex-wrap gap-3 text-[13px] text-paper/55">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" aria-hidden />
                  {announcement.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Building2 className="h-4 w-4" aria-hidden />
                  Malmö stad
                </span>
              </div>
              <h1 className="font-display text-balance text-[42px] leading-[1] tracking-[-0.04em] sm:text-[58px] md:text-[72px]">
                {announcement.title}
              </h1>
              <p className="mt-7 max-w-[62ch] text-[17px] leading-relaxed text-paper/68">{announcement.excerpt}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={`/press/${announcement.slug}`}
                  className="inline-flex items-center justify-center gap-2 bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-paper/90"
                >
                  Läs pressmeddelandet
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <a
                  href={`tel:${announcement.contact?.phone.replace(/[\s-]/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 border border-paper/20 px-5 py-3 text-[14px] font-medium text-paper transition-colors hover:border-paper/50"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Kontakt
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <PressVisual announcement={announcement} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line-soft bg-paper-2">
        <div className="container-edge grid gap-px bg-line-soft py-0 md:grid-cols-3">
          {[
            ["Beställare", "Malmö stad"],
            ["Uppdrag", "Oberoende kostnadsgranskning"],
            ["Fokus", "Transparens, uppföljning och avtalsefterlevnad"],
          ].map(([label, value]) => (
            <div key={label} className="bg-paper-2 px-6 py-7">
              <div className="label-mono mb-3">{label}</div>
              <div className="font-display text-[22px] leading-tight tracking-[-0.02em] text-ink">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="container-edge py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="label-mono mb-6">Pressmeddelande</div>
                <h2 className="font-display text-[34px] leading-[1.05] tracking-[-0.03em] md:text-[44px]">
                  En fokuserad genomlysning av entreprenadkostnader.
                </h2>
              </div>
            </div>
            <div className="lg:col-span-8">
              <article className="border border-line-soft bg-paper p-6 md:p-10">
                <div className="space-y-5 text-[17px] leading-relaxed text-ink/75">
                  {announcement.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <blockquote className="mt-10 border-l border-verify pl-6">
                  <p className="font-display text-[28px] leading-tight tracking-[-0.025em] text-ink md:text-[36px]">
                    Malmö stad hanterar betydande investeringar och entreprenadkostnader varje år.
                  </p>
                  <footer className="mt-5 text-[14px] text-muted-foreground">
                    Jenny Aronsson, sektionschef, Malmö stad
                  </footer>
                </blockquote>
                <div className="mt-10 grid gap-px bg-line-soft sm:grid-cols-3">
                  {["Fakturor", "Avtal", "Ekonomiska underlag"].map((item) => (
                    <div key={item} className="flex items-center gap-3 bg-paper-2 p-4 text-[14px] text-ink">
                      <CheckCircle2 className="h-4 w-4 text-verify" aria-hidden />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Link
                    to={`/press/${announcement.slug}`}
                    className="inline-flex items-center gap-2 border border-line-soft px-5 py-3 text-[14px] font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    Läs hela pressmeddelandet
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Press;
