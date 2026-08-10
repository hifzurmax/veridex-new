import { useEffect } from "react";
import { Nav } from "@/components/veridex/Nav";
import { Footer } from "@/components/veridex/Footer";
import { useT } from "@/i18n/LanguageProvider";

const Security = () => {
  const { t, lang } = useT();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />
      <div className="container-edge pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-[72ch] mx-auto">
          <div className="text-center mb-16">
            <div className="label-mono mb-4 text-muted-foreground">Legal</div>
            <h1 className="font-display text-[40px] md:text-[56px] leading-[1.05] tracking-[-0.03em]">
              {lang === "sv" ? "Säkerhet" : "Security"}
            </h1>
            <p className="mt-4 text-[16px] text-muted-foreground">
              {lang === "sv" ? "Senast uppdaterad:" : "Last updated:"} 2026-01-01
            </p>
          </div>

          <div className="space-y-8 text-[16px] leading-relaxed">
            <p className="text-ink/80">
              {lang === "sv"
                ? "På Veridex hanteras ofta projektdata, fakturor, avtal och annan affärskritisk information. Säkerhet och konfidentialitet är därför en central del av vår verksamhet."
                : "At Veridex, project data, invoices, contracts and other business-critical information are often handled. Security and confidentiality are therefore a central part of our operations."}
            </p>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">
                {lang === "sv" ? "Säker hantering av information" : "Secure Handling of Information"}
              </h2>
              <p className="text-muted-foreground mb-4">
                {lang === "sv"
                  ? "Veridex arbetar med tekniska och organisatoriska säkerhetsåtgärder för att skydda information mot:"
                  : "Veridex works with technical and organizational security measures to protect information against:"}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>{lang === "sv" ? "obehörig åtkomst" : "unauthorized access"}</li>
                <li>{lang === "sv" ? "förlust av data" : "data loss"}</li>
                <li>{lang === "sv" ? "manipulation eller spridning" : "manipulation or disclosure"}</li>
                <li>{lang === "sv" ? "oavsiktlig radering" : "accidental deletion"}</li>
              </ul>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">
                {lang === "sv" ? "Begränsad åtkomst" : "Restricted Access"}
              </h2>
              <p className="text-muted-foreground">
                {lang === "sv"
                  ? "Tillgång till projektdata begränsas till behöriga personer med behov av åtkomst inom ramen för uppdraget."
                  : "Access to project data is limited to authorized persons with a need for access within the scope of the assignment."}
              </p>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">
                {lang === "sv" ? "Konfidentialitet" : "Confidentiality"}
              </h2>
              <p className="text-muted-foreground">
                {lang === "sv"
                  ? "All information och dokumentation som delas med Veridex behandlas konfidentiellt."
                  : "All information and documentation shared with Veridex is treated confidentially."}
              </p>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">
                {lang === "sv" ? "Dataskydd" : "Data Protection"}
              </h2>
              <p className="text-muted-foreground">
                {lang === "sv"
                  ? "Veridex eftersträvar att hantera information i enlighet med tillämpliga dataskyddsregler och god säkerhetspraxis."
                  : "Veridex strives to handle information in accordance with applicable data protection regulations and good security practices."}
              </p>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">
                {lang === "sv" ? "Lagring och radering" : "Storage and Deletion"}
              </h2>
              <p className="text-muted-foreground">
                {lang === "sv"
                  ? "Information lagras endast så länge det är nödvändigt för uppdragets genomförande eller enligt lagkrav. Data kan raderas eller återlämnas enligt överenskommelse."
                  : "Information is stored only as long as necessary for the completion of the assignment or as required by law. Data can be deleted or returned by agreement."}
              </p>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">
                {lang === "sv" ? "Kontakta oss" : "Contact Us"}
              </h2>
              <p className="text-muted-foreground mb-4">
                {lang === "sv"
                  ? "Vid frågor kring säkerhet eller datahantering, kontakta:"
                  : "For questions regarding security or data handling, contact:"}
              </p>
              <a
                href="mailto:info@veridex.se"
                className="inline-flex items-center gap-2 text-signal hover:text-signal/80 transition-colors"
              >
                info@veridex.se
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Security;