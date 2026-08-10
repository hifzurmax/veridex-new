import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CalendarDays, Mail, Search, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Nav } from "@/components/veridex/Nav";
import { Footer } from "@/components/veridex/Footer";
import { useT } from "@/i18n/LanguageProvider";
import { BlogPost, posts } from "@/data/blogPosts";

const imageStyles: Record<BlogPost["imageTone"], string> = {
  signal: "from-signal/35 via-ink-2 to-ink",
  verify: "from-verify/30 via-ink-2 to-ink",
  paper: "from-paper/25 via-ink-2 to-ink",
  ink: "from-ink-3 via-ink-2 to-ink",
};

const BlogImage = ({ post, index }: { post: BlogPost; index: number }) => (
  <div
    className={`relative h-56 overflow-hidden bg-gradient-to-br ${imageStyles[post.imageTone]}`}
    role="img"
    aria-label={`Featured visual for ${post.title}`}
  >
    {post.imageUrl ? (
      <>
        <img
          src={post.imageUrl}
          alt={`Featured image for ${post.title}`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" aria-hidden />
      </>
    ) : (
      <>
        <div className="absolute inset-0 grid-bg opacity-35" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-paper/20" aria-hidden />
        <div className="absolute left-6 right-6 top-1/2 h-px bg-paper/25" aria-hidden />
        <div className="absolute left-6 top-1/2 h-16 w-px bg-paper/25" aria-hidden />
        <div className="absolute right-8 top-8 h-20 w-20 border border-paper/15 corner-tick" aria-hidden />
        <div className="absolute bottom-7 left-6 right-6 grid grid-cols-4 gap-2" aria-hidden>
          {[0, 1, 2, 3].map((item) => (
            <span key={item} className="h-1 bg-paper/25" style={{ opacity: 0.35 + item * 0.14 }} />
          ))}
        </div>
      </>
    )}
    <div className="absolute left-6 top-6 label-mono text-paper/55">{String(index + 1).padStart(2, "0")}</div>
  </div>
);

const Blog = () => {
  const { lang } = useT();
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts
      .filter((post) => {
        const matchesSearch =
          !normalizedQuery ||
          [post.title, post.excerpt, post.author].some((value) =>
            value.toLowerCase().includes(normalizedQuery),
          );

        return matchesSearch;
      })
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  }, [query]);

  useEffect(() => {
    setVisibleCount(6);
  }, [query]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  const copy =
    lang === "sv"
      ? {
          label: "// Insikter",
          title: "Blogg",
          subtitle:
            "Fältanteckningar, analyser och praktiska perspektiv om hur bygg- och fastighetsprojekt blir mer spårbara, finansiellt kontrollerade och försvarbara.",
          search: "Sök artiklar",
          latest: "Senaste analyser",
          newsletter: "Få Veridex-insikter i inkorgen",
          newsletterBody:
            "Kort, relevant och byggt för beslutsfattare som hanterar komplexa projektdata.",
          email: "namn@foretag.se",
          subscribe: "Prenumerera",
          ctaLabel: "// Nästa steg",
          ctaTitle: "Behöver du verifiera ett projekt?",
          ctaBody:
            "Se hur Veridex kan granska kontrakt, fakturor och avvikelser innan de blir kostnader.",
          ctaPrimary: "Begär åtkomst",
          ctaSecondary: "Utforska plattformen",
          loadMore: "Ladda fler",
          noResults: "Inga artiklar matchar filtren.",
        }
      : {
          label: "// Insights",
          title: "Blogg",
          subtitle:
            "Field notes, analysis and practical perspectives on making construction and real estate projects more traceable, financially controlled and defensible.",
          search: "Search articles",
          latest: "Latest analysis",
          newsletter: "Get Veridex insights in your inbox",
          newsletterBody:
            "Brief, relevant and built for decision makers working with complex project data.",
          email: "name@company.com",
          subscribe: "Subscribe",
          ctaLabel: "// Next step",
          ctaTitle: "Need to verify a project?",
          ctaBody:
            "See how Veridex can review contracts, invoices and deviations before they become costs.",
          ctaPrimary: "Request access",
          ctaSecondary: "Explore platform",
          loadMore: "Load more",
          noResults: "No articles match the current filters.",
        };

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />

      <section className="relative overflow-hidden bg-ink text-paper border-b border-line">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{ background: "radial-gradient(ellipse 55% 55% at 75% 35%, hsl(212 95% 55% / 0.16), transparent 68%)" }}
        />
        <div className="container-edge relative pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="label-mono mb-6 text-paper/50">{copy.label}</div>
              <h1 className="font-display text-balance text-[44px] sm:text-[58px] md:text-[76px] leading-[0.98] tracking-[-0.04em] max-w-[11ch]">
                {copy.title}
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="text-[15px] md:text-[16px] leading-relaxed text-paper/65 max-w-[42ch]">{copy.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line-soft bg-paper">
        <div className="container-edge py-10 md:py-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="label-mono mb-2">{copy.latest}</div>
              <p className="text-[14px] text-muted-foreground">{filteredPosts.length} articles available</p>
            </div>
            <div className="w-full lg:w-[320px]">
              <label className="relative block lg:w-[320px]">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                <span className="sr-only">{copy.search}</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={copy.search}
                  className="h-11 w-full border border-line-soft bg-paper pl-10 pr-4 text-[14px] outline-none transition-colors placeholder:text-muted-foreground focus:border-ink"
                />
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="container-edge py-16 md:py-24">
          {visiblePosts.length > 0 ? (
            <div className="grid gap-px border border-line-soft bg-line-soft md:grid-cols-2 xl:grid-cols-3">
              {visiblePosts.map((post, index) => (
                <article key={post.title} className="group flex min-h-[560px] flex-col bg-paper">
                  <BlogImage post={post} index={index} />
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="font-display text-[25px] leading-[1.08] tracking-[-0.025em]">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="transition-colors hover:text-verify focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-6 flex flex-wrap gap-4 text-[12px] text-muted-foreground">
                      <span className="inline-flex items-center gap-2">
                        <UserRound className="h-3.5 w-3.5" aria-hidden />
                        {post.author}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                        {post.date}
                      </span>
                    </div>
                    <div className="mt-auto pt-8">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 border border-line-soft px-4 py-2.5 text-[13px] font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                        aria-label={`Read more about ${post.title}`}
                      >
                        Read more
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                      </Link>
                      <span className="ml-4 label-mono">{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="border border-line-soft bg-paper p-10 text-center text-[14px] text-muted-foreground">
              {copy.noResults}
            </div>
          )}

          {visibleCount < filteredPosts.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + 3)}
              className="border border-line-soft bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              {copy.loadMore}
            </button>
          </div>
          )}
        </div>
      </section>

      <section className="border-y border-line-soft bg-paper-2">
        <div className="container-edge py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <div className="label-mono mb-5">// Newsletter</div>
              <h2 className="font-display text-[34px] leading-[1.05] tracking-[-0.03em] md:text-[44px]">
                {copy.newsletter}
              </h2>
              <p className="mt-5 max-w-[48ch] text-[15px] leading-relaxed text-muted-foreground">
                {copy.newsletterBody}
              </p>
            </div>
            <form className="md:col-span-6">
              <div className="flex flex-col gap-px border border-line-soft bg-line-soft sm:flex-row">
                <label className="sr-only" htmlFor="blog-newsletter">
                  Email
                </label>
                <input
                  id="blog-newsletter"
                  type="email"
                  required
                  placeholder={copy.email}
                  className="min-h-12 flex-1 bg-paper px-4 text-[14px] outline-none placeholder:text-muted-foreground focus:bg-white"
                />
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-5 text-[14px] font-medium text-paper transition-colors hover:bg-ink-2"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  {copy.subscribe}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-45" aria-hidden />
        <div className="container-edge relative py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="label-mono mb-6 text-paper/50">{copy.ctaLabel}</div>
              <h2 className="font-display text-balance text-[38px] leading-[1.03] tracking-[-0.035em] md:text-[58px]">
                {copy.ctaTitle}
              </h2>
              <p className="mt-6 max-w-[50ch] text-[15px] leading-relaxed text-paper/65">{copy.ctaBody}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-paper/90"
              >
                {copy.ctaPrimary}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link
                to="/#platform"
                className="inline-flex items-center justify-center border border-paper/20 px-5 py-3 text-[14px] font-medium text-paper transition-colors hover:border-paper/50"
              >
                {copy.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
