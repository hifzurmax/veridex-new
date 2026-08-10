import { useEffect } from "react";
import { Nav } from "@/components/veridex/Nav";
import { Footer } from "@/components/veridex/Footer";
import { useT } from "@/i18n/LanguageProvider";

const Terms = () => {
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
              Villkor
            </h1>
            <p className="mt-4 text-[16px] text-muted-foreground">
              {lang === "sv" ? "Senast uppdaterad:" : "Last updated:"} 2026-01-01
            </p>
          </div>

          <div className="space-y-8 text-[16px] leading-relaxed">
            <p className="text-ink/80">
              {lang === "sv"
                ? "Välkommen till Veridex. Genom att använda vår webbplats eller våra tjänster accepterar du följande villkor."
                : "Welcome to Veridex. By using our website or services, you accept the following terms and conditions."}
            </p>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">1. {lang === "sv" ? "Om Veridex" : "About Veridex"}</h2>
              <p className="text-muted-foreground">
                {lang === "sv"
                  ? "Veridex tillhandahåller digitala analys- och granskningstjänster inom bygg-, entreprenad- och fastighetssektorn, inklusive AI-baserad analys av fakturor, avtal och projektunderlag."
                  : "Veridex provides digital analysis and review services in the construction, contracting and real estate sectors, including AI-based analysis of invoices, contracts and project documentation."}
              </p>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">2. {lang === "sv" ? "Tjänstens syfte" : "Purpose of the Service"}</h2>
              <p className="text-muted-foreground">
                {lang === "sv"
                  ? "Veridex analyser och rapporter utgör beslutsunderlag och ska inte betraktas som juridisk rådgivning, revision eller bindande bedömningar. Kunden ansvarar alltid för egna beslut och åtgärder baserade på materialet."
                  : "Veridex analyses and reports constitute decision-making support and should not be considered legal advice, audit or binding assessments. The customer is always responsible for their own decisions and actions based on the material."}
              </p>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">3. {lang === "sv" ? "Kundens ansvar" : "Customer Responsibility"}</h2>
              <p className="text-muted-foreground mb-4">{lang === "sv" ? "Kunden ansvarar för att:" : "The customer is responsible for:"}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>{lang === "sv" ? "tillhandahålla korrekt och relevant underlag" : "providing correct and relevant documentation"}</li>
                <li>{lang === "sv" ? "säkerställa rätt att dela dokument och projektdata" : "ensuring the right to share documents and project data"}</li>
                <li>{lang === "sv" ? "granska och verifiera analyser innan vidare användning" : "reviewing and verifying analyses before further use"}</li>
              </ul>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">4. {lang === "sv" ? "Sekretess och datahantering" : "Confidentiality and Data Handling"}</h2>
              <p className="text-muted-foreground">
                {lang === "sv"
                  ? "All information och dokumentation som delas med Veridex behandlas konfidentiellt."
                  : "All information and documentation shared with Veridex is treated confidentially."}
              </p>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">5. {lang === "sv" ? "Immateriella rättigheter" : "Intellectual Property"}</h2>
              <p className="text-muted-foreground">
                {lang === "sv"
                  ? "Allt innehåll, analysmaterial, struktur, design och programvara som tillhandahålls av Veridex tillhör Veridex AB om inget annat avtalats skriftligen."
                  : "All content, analysis material, structure, design and software provided by Veridex belongs to Veridex AB unless otherwise agreed in writing."}
              </p>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">6. {lang === "sv" ? "Ansvarsbegränsning" : "Limitation of Liability"}</h2>
              <p className="text-muted-foreground mb-4">{lang === "sv" ? "Veridex ansvarar inte för:" : "Veridex is not liable for:"}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>{lang === "sv" ? "indirekta skador eller följdskador" : "indirect damages or consequential losses"}</li>
                <li>{lang === "sv" ? "ekonomiska beslut fattade utifrån analyser eller rapporter" : "economic decisions made based on analyses or reports"}</li>
                <li>{lang === "sv" ? "felaktigheter i underlag som tillhandahållits av kund eller tredje part" : "errors in documentation provided by the customer or third party"}</li>
              </ul>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">7. {lang === "sv" ? "Tillgänglighet" : "Availability"}</h2>
              <p className="text-muted-foreground">
                {lang === "sv"
                  ? "Vi strävar efter hög tillgänglighet men garanterar inte att webbplats eller tjänster alltid är fria från avbrott, fel eller tekniska störningar."
                  : "We strive for high availability but do not guarantee that the website or services are always free from interruptions, errors or technical issues."}
              </p>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">8. {lang === "sv" ? "Ändringar av villkor" : "Changes to Terms"}</h2>
              <p className="text-muted-foreground">
                {lang === "sv"
                  ? "Veridex förbehåller sig rätten att uppdatera dessa villkor vid behov. Uppdaterade villkor publiceras på webbplatsen. Specifika villkor kan även regleras genom separat avtal med kund."
                  : "Veridex reserves the right to update these terms as needed. Updated terms will be published on the website. Specific terms may also be regulated through a separate agreement with the customer."}
              </p>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">9. {lang === "sv" ? "Kontakt" : "Contact"}</h2>
              <p className="text-muted-foreground mb-4">
                {lang === "sv"
                  ? "Frågor kring dessa villkor skickas till:"
                  : "Questions regarding these terms should be sent to:"}
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

export default Terms;