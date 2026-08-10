import { useEffect } from "react";
import { ArrowLeft, Building2, CalendarDays, ExternalLink, FileText, Mail, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "@/components/veridex/Footer";
import { Nav } from "@/components/veridex/Nav";
import { getPressAnnouncementBySlug } from "@/data/pressAnnouncements";
import NotFound from "./NotFound";

const PressAnnouncement = () => {
  const { slug } = useParams();
  const announcement = slug ? getPressAnnouncementBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!announcement) return <NotFound />;

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />

      <article>
        <section className="border-b border-line bg-ink text-paper">
          <div className="container-edge py-8">
            <Link
              to="/press"
              className="inline-flex items-center gap-2 text-[13px] text-paper/65 transition-colors hover:text-paper"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to press
            </Link>
          </div>
          <div className="container-edge pb-14 md:pb-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6">
                <div className="label-mono mb-6 text-paper/50">{announcement.type}</div>
                <h1 className="font-display text-balance text-[32px] leading-[1] tracking-[-0.04em] sm:text-[42px] md:text-[52px]">
                  {announcement.title}
                </h1>
                <p className="mt-7 max-w-[62ch] text-[17px] leading-relaxed text-paper/68">{announcement.excerpt}</p>
                <div className="mt-8 flex flex-wrap gap-4 text-[13px] text-paper/55">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" aria-hidden />
                    {announcement.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Building2 className="h-4 w-4" aria-hidden />
                    Malmö stad
                  </span>
                </div>
              </div>
              <aside className="border border-paper/15 bg-ink/55 p-6 lg:col-span-6">
                <div className="label-mono mb-4 text-paper/45">Pressinformation</div>
                <p className="text-[14px] leading-relaxed text-paper/65">
                  Officiellt pressmeddelande från Veridex om avtal och oberoende granskning av
                  entreprenadrelaterade kostnader.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-paper">
          <div className="container-edge py-14 md:py-20">
            <div className="grid gap-12 lg:grid-cols-12">
              <aside className="lg:col-span-3">
                <div className="sticky top-20 border-l border-line-soft pl-5">
                  <div className="label-mono mb-5">I pressmeddelandet</div>
                  <div className="space-y-3 text-[13px] text-muted-foreground">
                    {announcement.sections.map((section) => (
                      <a key={section.title} href={`#${section.title}`} className="block transition-colors hover:text-ink">
                        {section.title}
                      </a>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="lg:col-span-7">
                <div className="space-y-5 border-b border-line-soft pb-10 text-[18px] leading-relaxed text-ink/75">
                  {announcement.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="space-y-12 pt-10">
                  {announcement.sections.map((section) => (
                    <section key={section.title} id={section.title} className="scroll-mt-24">
                      <h2 className="font-display text-[24px] leading-[1.08] tracking-[-0.03em] md:text-[30px]">
                        {section.title}
                      </h2>
                      <div className="mt-5 space-y-5 text-[16px] leading-relaxed text-muted-foreground">
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                {announcement.contact && (
                  <section className="mt-12 border border-line-soft bg-paper-2 p-6">
                    <div className="label-mono mb-3">{announcement.contact.label}</div>
                    <div className="font-display text-[24px] leading-tight tracking-[-0.02em] text-ink">
                      {announcement.contact.name}
                    </div>
                    <p className="mt-2 text-[14px] text-muted-foreground">{announcement.contact.role}</p>
                    <a
                      className="mt-5 inline-flex items-center gap-2 text-[15px] text-ink transition-colors hover:text-verify"
                      href={`tel:${announcement.contact.phone.replace(/[\s-]/g, "")}`}
                    >
                      <Phone className="h-4 w-4" aria-hidden />
                      {announcement.contact.phone}
                    </a>
                    {announcement.contact.email && (
                      <a
                        className="mt-3 flex items-center gap-2 text-[15px] text-ink transition-colors hover:text-verify"
                        href={`mailto:${announcement.contact.email}`}
                      >
                        <Mail className="h-4 w-4" aria-hidden />
                        {announcement.contact.email}
                      </a>
                    )}
                  </section>
                )}

                <section className="mt-8 border border-line-soft bg-paper p-6">
                  <div className="label-mono mb-3">Malmö stad</div>
                  <a
                    href="https://malmo.se"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[15px] font-medium text-ink transition-colors hover:text-verify"
                  >
                    malmo.se
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                </section>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
};

export default PressAnnouncement;
