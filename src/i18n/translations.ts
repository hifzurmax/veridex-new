export type Lang = "en" | "sv";

type Dictionary = {
  nav: { platform: string; how: string; impact: string; cases: string; company: string; signin: string; cta: string };
  hero: { status: string; title: string; body: string; cta: string; secondary: string; stats: { k: string; v: string }[] };
  marquee: { label: string };
  platform: { label: string; title: string; body: string; items: { n: string; t: string; d: string }[] };
  how: { label: string; title: string; sub: string; steps: { n: string; label: string; title: string; body: string }[] };
  diagram: { label: string; title: string; body: string; input: string; output: string; engine: string; verify: string; reconcile: string; quantify: string; inputs: string[]; outputs: string[] };
  impact: { label: string; title: string; body: string; items: { k: string; v: string }[]; quote: string; cite: string };
  cases: { label: string; title: string; link: string; items: { tag: string; title: string; body: string; meta: string }[] };
  trust: { label: string; title: string; items: { t: string; d: string }[] };
  about: { label: string; title: string; p1: string; p2: string; p3: string; meta: [string, string][] };
  cta: { label: string; title: string; body: string; placeholder: string; submit: string; sent: string; contact: string };
  footer: { tag: string; groups: { h: string; l: string[] }[]; rights: string };
};

export const translations: Record<Lang, Dictionary> = {
  en: {
    nav: {
      platform: "Platform",
      how: "How it works",
      impact: "Impact",
      cases: "Cases",
      company: "Company",
      signin: "Sign in",
      cta: "Request access",
    },
    hero: {
      status: "VERIDEX PLATFORM • ACTIVE",
      title: "Every project, verified.",
      body: "Veridex verifies contracts, invoices and project data in construction and real estate projects. We identify deviations before they become costs, disputes or budget overruns. Built for projects where manual control is no longer sufficient.",
      cta: "Request access",
      secondary: "See the platform",
      stats: [
        { k: "180+", v: "Projects analyzed" },
        { k: "1.4B SEK", v: "Contract value reviewed" },
        { k: "6,200", v: "Identified deviations" },
        { k: "99.2%", v: "Audit traceability" },
      ],
    },
    marquee: { label: "Operating in environments trusted by" },
    platform: {
      label: "// Platform",
      title: "A control layer between contract,\nfinance and production.",
      body: "Veridex connects contracts, invoices,\nchange orders and project data.\nWhat was agreed is verified against what\nwas actually executed and billed.\nEvery deviation becomes traceable.\nEvery decision becomes defensible.",
      items: [
        { n: "01", t: "Detect what others miss", d: "Continuous review of contracts, change orders and invoices. Anomalies surface as evidence — not opinion." },
        { n: "02", t: "Validate against requirements", d: "Every line item checked against the contract, the specification and the project intent. Automatically." },
        { n: "03", t: "Quantify exposure", d: "Cost deviations, scope drift and overbilling translated into a single, defensible number." },
        { n: "04", t: "Produce audit-ready output", d: "Reports, claim letters and structured evidence. Ready to act on. Ready to defend." },
      ],
    },
    how: {
      label: "// System",
      title: "From raw project data to defensible decisions.",
      sub: "One pipeline. Drawing to invoice. Specification to settlement.",
      steps: [
        { n: "01", label: "Ingest", title: "Drawings, contracts, invoices, ÄTA logs.", body: "Project documentation flows in. Structured or not. We normalize it." },
        { n: "02", label: "02 VERIDEX ANALYS", title: "AI reads every line — at project scale.", body: "Models trained on the built environment cross-reference scope, price and time." },
        { n: "03", label: "Verify", title: "Deviations isolated against the source of truth.", body: "Each flag is traceable. Each number is sourced. Nothing is asserted without proof." },
        { n: "04", label: "Output", title: "Decision-grade reports and claim letters.", body: "Reports and\ndeviations generated to\ndecision makers.\nReady to act on." },
      ],
    },
    diagram: {
      label: "// Architecture",
      title: "The verification engine for\nconstruction and real estate.",
      body: "Veridex operates as a\ncontrol layer between contract and\nreality.\nProject data is connected into a\nverifiable source of truth across\nproject finances.",
      input: "INPUT", output: "OUTPUT", engine: "VERIDEX ENGINE",
      verify: "Verify", reconcile: "Reconcile", quantify: "Quantify",
      inputs: ["Drawings", "Contracts", "Invoices", "ÄTA / change orders"],
      outputs: ["Deviation report", "Claim letter", "Cost forecast", "Audit trail"],
    },
    impact: {
      label: "// Impact",
      title: "The cost of not knowing is no longer acceptable.",
      body: "In a typical large project, 4–11% of contract value leaks through deviations, change orders and overbilling that no one has the time to read line-by-line. Veridex does.",
      items: [
        { k: "Risk", v: "Reduce exposure on contracts before signing and on invoices before payment." },
        { k: "Capital", v: "Recover overbilled value. Prevent silent budget overruns." },
        { k: "Speed", v: "Decisions in days, not quarters. Audit cycles compressed by 80%." },
        { k: "Evidence", v: "Every conclusion tied to source. Every claim backed by data." },
      ],
      quote: "“Thanks to an analysis of 5,500 invoices, the municipality gained new evidence in the dispute. It strengthens our position further.”",
      cite: "Jens Hannemann · Head of Procurement · Allehanda, 2026",
    },
    cases: {
      label: "// Field record",
      title: "Deployed where the numbers matter.",
      link: "See all engagements →",
      items: [
        { tag: "Municipality · Contract dispute", title: "5,500 invoices, one source of truth.", body: "Datadriven review of contractor billing in Örnsköldsvik. Discrepancies surfaced and quantified — the municipality entered negotiation with evidence, not opinion.", meta: "Contract value reviewed · 240M SEK" },
        { tag: "Public sector · Schools", title: "Bäckahagens skola — technical audit.", body: "Independent verification of execution against specification across structural, technical and architectural layers. Defects documented before handover.", meta: "Identified deviations · 412" },
        { tag: "Infrastructure · Trafikverket", title: "Tjörnbron — bridge program oversight.", body: "Continuous validation of contractual obligations, scope changes and cost reporting on a critical national asset.", meta: "Audit trail · 100% traceable" },
      ],
    },
    trust: {
      label: "// Trust",
      title: "Infrastructure-grade. By design.",
      items: [
        { t: "Built for complex environments.", d: "Built for projects with thousands of invoices, hundreds of change orders and millions at risk." },
        { t: "Handles project scale.", d: "Process billions in contract value. No sampling. No shortcuts." },
        { t: "Designed for professional use.", d: "Used by procurement, legal, finance and asset management — not a generic productivity tool." },
      ],
    },
    about: {
      label: "// Company",
      title: "A technical team solving a structural problem.",
      p1: "The built environment is the largest asset class on earth — and the least verified. Decisions worth billions are still made on PDFs, spreadsheets and trust.",
      p2: "Veridex was founded to change that. We combine deep expertise in construction, finance and applied AI to deliver a single, defensible source of truth across every project.",
      p3: "Our team has reviewed contracts and audited projects across public infrastructure, institutional real estate and complex commercial construction. We build the system we wished existed.",
      meta: [["2024", "Founded"], ["Stockholm", "HQ"], ["AI · Construction · Audit", "Discipline"], ["Independent", "Ownership"]] as [string, string][],
    },
    cta: {
      label: "// Access",
      title: "Know what's actually being built.",
      body: "Veridex is implemented with a limited number of partners per quarter. Request access to evaluate and analyze project data in practice. We respond within two working days.",
      placeholder: "name@company.com",
      submit: "Request access →",
      sent: "Received →",
      contact: "Or call direct · +46 79 354 28 35",
    },
    footer: {
      tag: "Decision infrastructure for the built environment.",
      groups: [
        { h: "Platform", l: ["Namer", "Verification", "Reconciliation", "Reporting"] },
        { h: "Sectors", l: ["Real estate", "Construction", "Public sector"] },
        { h: "Company", l: ["About", "Blogg", "Press", "Contact"] },
        { h: "Legal", l: ["Terms", "Privacy Policy", "Security"] },
      ],
      rights: "All rights reserved.",
    },
  },
  sv: {
    nav: {
      platform: "Plattform",
      how: "Så funkar det",
      impact: "Effekt",
      cases: "Uppdrag",
      company: "Företag",
      signin: "Logga in",
      cta: "Begär åtkomst",
    },
    hero: {
      status: "VERIDEX PLATFORM • ACTIVE",
      title: "Every project, verified.",
      body: "Veridex verifierar kontrakt, fakturor och projektdata i bygg- och fastighetsprojekt. Vi identifierar avvikelser innan de blir kostnader, tvister eller budgetöverdrag. Byggd för projekt där manuell kontroll inte räcker längre.",
      cta: "Begär åtkomst",
      secondary: "Se plattformen",
      stats: [
        { k: "180+", v: "Projekt analyserade" },
        { k: "1,4 mdr SEK", v: "Granskat kontraktsvärde" },
        { k: "6 200", v: "Identifierade avvikelser" },
        { k: "99,2 %", v: "Spårbarhet i revision" },
      ],
    },
    marquee: { label: "Verksam i miljöer som anförtrotts av" },
    platform: {
      label: "// Plattform",
      title: "Ett kontrollager mellan kontrakt,\nekonomi och produktion.",
      body: "Veridex kopplar samman kontrakt, fakturor,\nÄTA och projektdata.\nDet som avtalats verifieras mot det som\nfaktiskt utförs och faktureras.\nVarje avvikelse blir spårbar.\nVarje beslut blir försvarbart.",
      items: [
        { n: "01", t: "Upptäck det andra missar", d: "Kontinuerlig granskning av kontrakt, ÄTA och fakturor. Avvikelser framträder som bevis — inte åsikt." },
        { n: "02", t: "Validera mot krav", d: "Varje rad kontrolleras mot kontrakt, specifikation och projektintention. Automatiskt." },
        { n: "03", t: "Kvantifiera exponering", d: "Kostnadsavvikelser, scope drift och överfakturering översatt till en enda, försvarbar siffra." },
        { n: "04", t: "Leverera revisionsklart underlag", d: "Rapporter, kravbrev och strukturerade bevis. Klart att agera på. Klart att försvara." },
      ],
    },
    how: {
      label: "// System",
      title: "Från rådata till försvarbara beslut.",
      sub: "Ett flöde. Ritning till faktura. Specifikation till slutavräkning.",
      steps: [
        { n: "01", label: "Inhämta", title: "Ritningar, kontrakt, fakturor, ÄTA-loggar.", body: "Projektdokumentation flödar in. Strukturerad eller inte. Vi normaliserar den." },
        { n: "02", label: "02 VERIDEX ANALYS", title: "AI läser varje rad — i projektskala.", body: "Modeller tränade på den byggda miljön korsrefererar omfattning, pris och tid." },
        { n: "03", label: "Verifiera", title: "Avvikelser isoleras mot källan.", body: "Varje flagga är spårbar. Varje siffra har källa. Inget påstås utan bevis." },
        { n: "04", label: "Leverera", title: "Beslutsklar rapport och kravbrev.", body: "Rapporter och\navvikelser genereras till\nbeslutsfattare.\nKlart att agera på." },
      ],
    },
    diagram: {
      label: "// Arkitektur",
      title: "Verifieringsmotorn för\nbygg och fastighet.",
      body: "Veridex fungerar som ett\nkontrollager mellan kontrakt och\nverklighet.\nProjektdata kopplas samman till en\nverifierbar sanningskälla över\nprojektets ekonomi.",
      input: "INDATA", output: "UTDATA", engine: "VERIDEX-MOTOR",
      verify: "Verifiera", reconcile: "Avstämma", quantify: "Kvantifiera",
      inputs: ["Ritningar", "Kontrakt", "Fakturor", "ÄTA / ändringar"],
      outputs: ["Avvikelserapport", "Kravbrev", "Kostnadsprognos", "Revisionsspår"],
    },
    impact: {
      label: "// Effekt",
      title: "Kostnaden av att inte veta är inte längre acceptabel.",
      body: "I ett typiskt större projekt läcker 4–11 % av kontraktsvärdet genom avvikelser, ÄTA och överfakturering som ingen hinner läsa rad för rad. Det gör Veridex.",
      items: [
        { k: "Risk", v: "Minska exponering på kontrakt före signering och på fakturor före betalning." },
        { k: "Kapital", v: "Återvinn överfakturerat värde. Förhindra tysta budgetöverdrag." },
        { k: "Tempo", v: "Beslut på dagar, inte kvartal. Revisionscykler kortas med 80 %." },
        { k: "Bevis", v: "Varje slutsats kopplad till källa. Varje krav uppbackat av data." },
      ],
      quote: "”Tack vare en analys av 5 500 fakturor fick kommunen nya bevis i tvisten. Det stärker vår position ytterligare.”",
      cite: "Jens Hannemann · Upphandlingschef · Allehanda, 2026",
    },
    cases: {
      label: "// Fältprotokoll",
      title: "Insatt där siffrorna spelar roll.",
      link: "Se alla uppdrag →",
      items: [
        { tag: "Kommun · Kontraktstvist", title: "5 500 fakturor, en sanningskälla.", body: "Datadriven granskning av entreprenörsfakturering i Örnsköldsvik. Avvikelser framträdde och kvantifierades — kommunen gick in i förhandling med bevis, inte åsikt.", meta: "Granskat kontraktsvärde · 240 mkr" },
        { tag: "Offentlig sektor · Skolor", title: "Bäckahagens skola — teknisk revision.", body: "Oberoende verifiering av utförande mot specifikation över konstruktion, teknik och arkitektur. Brister dokumenterade före överlämning.", meta: "Identifierade avvikelser · 412" },
        { tag: "Infrastruktur · Trafikverket", title: "Tjörnbron — programövervakning.", body: "Kontinuerlig validering av kontraktsåtaganden, scope-förändringar och kostnadsrapportering på en kritisk nationell tillgång.", meta: "Revisionsspår · 100 % spårbart" },
      ],
    },
    trust: {
      label: "// Förtroende",
      title: "Infrastrukturklass. Byggd för\nprojektskala.",
      items: [
        { t: "Byggd för komplexa miljöer.", d: "Utvecklad för projekt med tusentals fakturor, hundratals ÄTA och miljoner i risk." },
        { t: "Hanterar projektskala.", d: "Bearbeta miljarder i kontraktsvärde. Ingen stickprovskontroll. Inga genvägar." },
        { t: "För professionellt bruk.", d: "Används av upphandling, juridik, ekonomi och förvaltning — inte ett generiskt produktivitetsverktyg." },
      ],
    },
    about: {
      label: "// Företag",
      title: "Ett tekniskt team som löser ett strukturellt problem.",
      p1: "Bygg- och fastighetsprojekt hanteras fortfarande genom manuella\nkontroller, PDF:er och fragmenterad projektdata.",
      p2: "Veridex grundades för att ändra på det. Vi kombinerar djup kompetens inom bygg, finans och tillämpad AI för att leverera en enda, försvarbar sanningskälla över varje projekt.",
      p3: "Vårt team har granskat kontrakt och reviderat projekt inom offentlig infrastruktur, institutionellt fastighetsbestånd och komplex kommersiell byggnation. Vi bygger systemet vi själva önskat fanns.",
      meta: [["2024", "Grundat"], ["Stockholm", "HK"], ["AI · Bygg · Revision", "Disciplin"], ["Oberoende", "Ägande"]] as [string, string][],
    },
    cta: {
      label: "// Åtkomst",
      title: "Vet vad som faktiskt byggs.",
      body: "Veridex implementeras hos ett begränsat antal partners per kvartal. Begär åtkomst för att utvärdera och analysera projektdata i praktiken. Vi återkopplar inom två arbetsdagar.",
      placeholder: "namn@foretag.se",
      submit: "Begär åtkomst →",
      sent: "Mottaget →",
      contact: "Eller ring direkt · +46 79 354 28 35",
    },
    footer: {
      tag: "Beslutsinfrastruktur för den byggda miljön.",
      groups: [
        { h: "Plattform", l: ["Namer", "Verifiering", "Avstämning", "Rapportering"] },
        { h: "Sektorer", l: ["Fastighet", "Bygg", "Offentlig sektor"] },
        { h: "Företag", l: ["Om oss", "Blogg", "Press", "Kontakt"] },
        { h: "Juridik", l: ["Villkor", "Integritetspolicy", "Säkerhet"] },
      ],
      rights: "Alla rättigheter förbehållna.",
    },
  },
};

export type Dict = Dictionary;
