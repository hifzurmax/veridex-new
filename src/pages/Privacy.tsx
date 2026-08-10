import { useEffect } from "react";
import { Nav } from "@/components/veridex/Nav";
import { Footer } from "@/components/veridex/Footer";
import { useT } from "@/i18n/LanguageProvider";

const Privacy = () => {
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
              {lang === "sv" ? "Integritetspolicy" : "Privacy Policy"}
            </h1>
            <p className="mt-4 text-[16px] text-muted-foreground">
              {lang === "sv" ? "Senast uppdaterad:" : "Last updated:"} 2026-01-01
            </p>
          </div>

          <div className="space-y-8 text-[16px] leading-relaxed">
            <p className="text-ink/80">
              {lang === "sv"
                ? "Veridex värnar om din personliga integritet och eftersträvar en hög nivå av dataskydd. Denna integritetspolicy beskriver hur vi samlar in, använder och skyddar personuppgifter i samband med användning av vår webbplats och våra tjänster."
                : "Veridex values your personal privacy and strives for a high level of data protection. This privacy policy describes how we collect, use and protect personal data in connection with the use of our website and services."}
            </p>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">1. {lang === "sv" ? "Personuppgifter vi samlar in" : "Personal Data We Collect"}</h2>
              <p className="text-muted-foreground mb-4">{lang === "sv" ? "Vi kan samla in följande uppgifter:" : "We may collect the following information:"}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>{lang === "sv" ? "namn" : "name"}</li>
                <li>{lang === "sv" ? "företag och befattning" : "company and position"}</li>
                <li>{lang === "sv" ? "e-postadress" : "email address"}</li>
                <li>{lang === "sv" ? "telefonnummer" : "phone number"}</li>
                <li>{lang === "sv" ? "information som skickas via kontaktformulär eller e-post" : "information sent via contact forms or email"}</li>
                <li>{lang === "sv" ? "teknisk information såsom IP-adress, webbläsare och användningsdata" : "technical information such as IP address, browser and usage data"}</li>
              </ul>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">2. {lang === "sv" ? "Hur vi använder informationen" : "How We Use the Information"}</h2>
              <p className="text-muted-foreground mb-4">{lang === "sv" ? "Personuppgifter används för att:" : "Personal data is used to:"}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>{lang === "sv" ? "besvara förfrågningar och kommunicera med användare" : "respond to inquiries and communicate with users"}</li>
                <li>{lang === "sv" ? "tillhandahålla och utveckla våra tjänster" : "provide and develop our services"}</li>
                <li>{lang === "sv" ? "administrera kundrelationer och avtal" : "manage customer relationships and agreements"}</li>
                <li>{lang === "sv" ? "förbättra webbplatsens funktionalitet och säkerhet" : "improve website functionality and security"}</li>
                <li>{lang === "sv" ? "uppfylla rättsliga skyldigheter" : "fulfill legal obligations"}</li>
              </ul>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">3. {lang === "sv" ? "Rättslig grund" : "Legal Basis"}</h2>
              <p className="text-muted-foreground mb-4">{lang === "sv" ? "Vi behandlar personuppgifter med stöd av:" : "We process personal data based on:"}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>{lang === "sv" ? "berättigat intresse" : "legitimate interest"}</li>
                <li>{lang === "sv" ? "fullgörande av avtal" : "performance of a contract"}</li>
                <li>{lang === "sv" ? "samtycke där så krävs enligt lag" : "consent where required by law"}</li>
              </ul>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">4. {lang === "sv" ? "Lagring och skydd av information" : "Storage and Protection of Information"}</h2>
              <p className="text-muted-foreground">
                {lang === "sv"
                  ? "Veridex vidtar rimliga tekniska och organisatoriska säkerhetsåtgärder för att skydda information mot obehörig åtkomst, förlust eller missbruk. Information lagras endast så länge det är nödvändigt för ändamålet eller enligt lagkrav."
                  : "Veridex takes reasonable technical and organizational security measures to protect information against unauthorized access, loss or misuse. Information is stored only as long as necessary for the purpose or as required by law."}
              </p>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">5. {lang === "sv" ? "Delning av information" : "Sharing of Information"}</h2>
              <p className="text-muted-foreground">
                {lang === "sv"
                  ? "Veridex säljer aldrig personuppgifter till tredje part. Information kan delas med betrodda leverantörer och tekniska tjänsteleverantörer i den utsträckning det krävs för att tillhandahålla våra tjänster."
                  : "Veridex never sells personal data to third parties. Information may be shared with trusted suppliers and technical service providers to the extent necessary to provide our services."}
              </p>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">6. {lang === "sv" ? "Cookies" : "Cookies"}</h2>
              <p className="text-muted-foreground">
                {lang === "sv"
                  ? "Webbplatsen kan använda cookies och liknande tekniker för att förbättra användarupplevelsen och analysera trafik. Du kan själv hantera cookie-inställningar i din webbläsare."
                  : "The website may use cookies and similar technologies to improve user experience and analyze traffic. You can manage cookie settings in your browser."}
              </p>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">7. {lang === "sv" ? "Dina rättigheter" : "Your Rights"}</h2>
              <p className="text-muted-foreground mb-4">{lang === "sv" ? "Du har rätt att:" : "You have the right to:"}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>{lang === "sv" ? "begära tillgång till dina personuppgifter" : "request access to your personal data"}</li>
                <li>{lang === "sv" ? "begära rättelse eller radering" : "request correction or deletion"}</li>
                <li>{lang === "sv" ? "invända mot viss behandling" : "object to certain processing"}</li>
                <li>{lang === "sv" ? "begära begränsning av behandling" : "request restriction of processing"}</li>
                <li>{lang === "sv" ? "återkalla samtycke där behandling grundas på samtycke" : "withdraw consent where processing is based on consent"}</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                {lang === "sv"
                  ? "För frågor kring personuppgifter eller dataskydd, kontakta oss via:" : "For questions regarding personal data or data protection, contact us at:"}
              </p>
              <a
                href="mailto:info@veridex.se"
                className="inline-flex items-center gap-2 text-signal hover:text-signal/80 transition-colors mt-2"
              >
                info@veridex.se
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="border-t border-line-soft pt-8">
              <h2 className="font-display text-[24px] tracking-tight mb-4">8. {lang === "sv" ? "Ändringar av policyn" : "Changes to the Policy"}</h2>
              <p className="text-muted-foreground">
                {lang === "sv"
                  ? "Veridex förbehåller sig rätten att uppdatera denna integritetspolicy vid behov. Den senaste versionen publiceras alltid på webbplatsen."
                  : "Veridex reserves the right to update this privacy policy as needed. The latest version is always published on the website."}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Privacy;