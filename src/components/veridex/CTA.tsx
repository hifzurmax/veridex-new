import { useState } from "react";
import { useT } from "@/i18n/LanguageProvider";
import { toast } from "@/components/ui/use-toast";

export const CTA = () => {
  const { t, lang } = useT();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mdajkyye", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        toast({
          title: lang === "sv" ? "Tack!" : "Thank you!",
          description: lang === "sv" ? "Vi återkopplar inom två arbetsdagar." : "We will get back to you within two working days.",
        });
      } else {
        setStatus("error");
        toast({
          variant: "destructive",
          title: lang === "sv" ? "Något gick fel" : "Something went wrong",
          description: lang === "sv" ? "Försök igen eller maila direkt." : "Please try again or email directly.",
        });
      }
    } catch {
      setStatus("error");
      toast({
        variant: "destructive",
        title: lang === "sv" ? "Något gick fel" : "Something went wrong",
        description: lang === "sv" ? "Försök igen eller maila direkt." : "Please try again or email directly.",
      });
    }
  };

  return (
    <section id="contact" className="bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{ background: "radial-gradient(ellipse 50% 60% at 50% 100%, hsl(212 95% 55% / 0.12), transparent 70%)" }}
      />
      <div className="container-edge relative py-28 md:py-36">
        <div className="max-w-[60ch] md:max-w-[60ch]">
          <div className="label-mono text-paper/50 mb-6">{t.cta.label}</div>
          <h2 className="font-display text-balance text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] leading-[1.0] tracking-[-0.035em]">
            {t.cta.title}
          </h2>
        </div>
        <p className="mt-8 max-w-[52ch] text-paper/65 text-[16px]">{t.cta.body}</p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col sm:flex-row max-w-[560px] gap-px bg-line border border-line"
        >
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.cta.placeholder}
            disabled={status === "loading" || status === "success"}
            className="flex-1 bg-ink px-4 py-3.5 text-[14px] text-paper placeholder:text-paper/40 focus:outline-none disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="bg-paper text-ink px-5 py-3.5 text-[14px] font-medium hover:bg-paper/90 transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "..." : status === "success" ? t.cta.sent : t.cta.submit}
          </button>
        </form>

        <div className="mt-6 label-mono text-paper/45">{t.cta.contact}</div>
      </div>
    </section>
  );
};
