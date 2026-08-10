import { useEffect } from "react";
import { ArrowLeft, CalendarDays, FileText, UserRound } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "@/components/veridex/Footer";
import { Nav } from "@/components/veridex/Nav";
import { BlogPost as BlogPostData, getPostBySlug } from "@/data/blogPosts";
import NotFound from "./NotFound";

const renderInlineContent = (text: string) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="border border-paper/15 bg-ink/55 p-4">
    <div className="font-display text-[28px] leading-none tracking-[-0.03em]">{value}</div>
    <div className="label-mono mt-2 text-paper/45">{label}</div>
  </div>
);

const PostFeatureImage = ({ post }: { post: BlogPostData }) => (
  <div className="relative min-h-[360px] overflow-hidden border border-line bg-ink text-paper md:min-h-[520px]">
    {post.imageUrl ? (
      <img
        src={post.imageUrl}
        alt={`Featured image for ${post.title}`}
        className="absolute inset-0 h-full w-full object-cover"
      />
    ) : (
      <div className="absolute inset-0 grid-bg opacity-45" aria-hidden />
    )}
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70 to-transparent" aria-hidden />
    <div className="absolute left-6 top-6 label-mono text-paper/75 md:left-8 md:top-8">
      {post.series || post.category}
    </div>
  </div>
);

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;
  const intro = post?.intro?.length ? post.intro : post ? [post.excerpt] : [];
  const sections = post?.sections ?? [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <NotFound />;

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />

      <article>
        <section className="border-b border-line bg-ink text-paper">
          <div className="container-edge py-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[13px] text-paper/65 transition-colors hover:text-paper"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Tillbaka till insikter
            </Link>
          </div>
          <div className="container-edge pb-14 md:pb-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <div className="label-mono mb-6 text-paper/50">{post.series || post.category}</div>
                <h1 className="font-display text-balance text-[44px] leading-[0.98] tracking-[-0.04em] sm:text-[60px] md:text-[76px]">
                  {post.title}
                </h1>
                <p className="mt-7 max-w-[60ch] text-[17px] leading-relaxed text-paper/68">{post.excerpt}</p>
                <div className="mt-8 flex flex-wrap gap-4 text-[13px] text-paper/55">
                  <span className="inline-flex items-center gap-2">
                    <UserRound className="h-4 w-4" aria-hidden />
                    {post.author}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" aria-hidden />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FileText className="h-4 w-4" aria-hidden />
                    {post.readTime}
                  </span>
                </div>
              </div>
              <div className="grid gap-px bg-paper/15 lg:col-span-5 lg:grid-cols-3">
                <Stat value="2,5" label="mdkr projektering" />
                <Stat value="4,5" label="mdkr konsultnota" />
                <Stat value="0,012%" label="aterfort" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line-soft bg-paper">
          <div className="container-edge py-12 md:py-16">
            <PostFeatureImage post={post} />
          </div>
        </section>

        <section className="bg-paper">
          <div className="container-edge py-14 md:py-20">
            <div className="grid gap-12 lg:grid-cols-12">
              {sections.length > 0 && (
                <aside className="lg:col-span-3">
                  <div className="sticky top-20 border-l border-line-soft pl-5">
                    <div className="label-mono mb-5">I artikeln</div>
                    <div className="space-y-3 text-[13px] text-muted-foreground">
                      {sections.map((section) => (
                        <a key={section.title} href={`#${section.title}`} className="block transition-colors hover:text-ink">
                          {section.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </aside>
              )}

              <div className={sections.length > 0 ? "lg:col-span-7" : "lg:col-span-7 lg:col-start-4"}>
                <div className="space-y-5 border-b border-line-soft pb-10 text-[18px] leading-relaxed text-ink/75">
                  {intro.map((paragraph) => (
                    <p key={paragraph}>{renderInlineContent(paragraph)}</p>
                  ))}
                </div>

                {sections.length > 0 && (
                  <div className="space-y-12 pt-10">
                    {sections.map((section) => (
                      <section key={section.title} id={section.title} className="scroll-mt-24">
                        <h2 className="font-display text-[32px] leading-[1.08] tracking-[-0.03em] md:text-[42px]">
                          {section.title}
                        </h2>
                        <div className="mt-5 space-y-5 text-[16px] leading-relaxed text-muted-foreground">
                          {section.body?.map((paragraph) => <p key={paragraph}>{renderInlineContent(paragraph)}</p>)}
                          {section.bullets && (
                            <ul className="space-y-3 border-l border-line-soft pl-5">
                              {section.bullets.map((bullet) => (
                                <li key={bullet}>{renderInlineContent(bullet)}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </section>
                    ))}
                  </div>
                )}

                {post.sources && (
                  <section className="mt-14 border-t border-line-soft pt-10">
                    <h2 className="font-display text-[30px] tracking-[-0.03em]">Underlag</h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                      Alla siffror och underlag är hämtade från offentliga handlingar, inklusive:
                    </p>
                    <ul className="mt-5 space-y-2 text-[15px] text-muted-foreground">
                      {post.sources.map((source) => (
                        <li key={source}>{source}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {post.closing && (
                  <div className="mt-12 border border-line-soft bg-paper-2 p-6">
                    <p className="text-[17px] leading-relaxed text-ink">{post.closing}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPost;
