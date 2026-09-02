export type BlogPost = {
  slug: string;
  category: "Verification" | "Finance" | "Risk" | "AI Systems" | "Granskning";
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  imageTone: "signal" | "verify" | "paper" | "ink";
  imageUrl?: string;
  language: "sv" | "en";
  series?: string;
  intro?: string[];
  sections?: {
    title: string;
    body?: string[];
    bullets?: string[];
  }[];
  sources?: string[];
  closing?: string;
};

export const posts: BlogPost[] = [
  {
    slug: "insikt-1-2026-trafikverket-skattepengar-konsulter",
    category: "Granskning",
    title: "Insikt 1, 2026: Trafikverket, skattepengar och konsulter",
    excerpt:
      "När systemet styr mer än projektet. Veridex om konsultavtal, ABK-ansvar och återkommande mönster i stora infrastrukturprojekt.",
    author: "Veridex Research",
    date: "May 18, 2026",
    readTime: "8 min read",
    imageTone: "paper",
    imageUrl: "https://ik.imagekit.io/quzt9q1jj/Insikt%201.png?updatedAt=1779547227902",
    language: "sv",
    series: "Veridex granskning 2026",
    intro: [
      "Utifrån Veridex senaste AI-baserade granskning av ett antal konsultavtal kopplade till Trafikverkets verksamhet har det noterats att flera uppdrag i praktiken inte genomförs helt i linje med upphandlat avtal.",
      "I vissa fall har ersättning dessutom fortsatt att utgå även efter att kontraktstiden löpt ut.",
      "Detta är inte en allmän kritik mot enskilda konsulter eller Trafikverket. Det är en systemfråga.",
      "I centrum står hur ansvar enligt ABK-modellen faktiskt tillämpas i praktiken - och vilka konsekvenser det får när den inte gör det.",
    ],
    sections: [
      {
        title: "Förseningar och fördyringar som återkommande mönster",
        body: [
          "Förseningar och kostnadsökningar har blivit ett återkommande inslag i diskussionen om stora infrastrukturprojekt, där Förbifart Stockholm ofta lyfts som exempel.",
          "Trots detta når sällan tydliga och sammanhängande förklaringar skattebetalarna - som i slutändan finansierar projekten.",
        ],
      },
      {
        title: "Ritningar som projektets kärna",
        body: [
          "Ritningar utgör grunden för allt som byggs.",
          "Inom Trafikverket tas dessa i princip uteslutande fram av inhyrda konsulter och sker i två huvudsakliga steg.",
          "Det första steget är systemhandlingar, där Trafikverket via konsulter fastställer övergripande utformning, tekniska krav och funktionella mål.",
          "Det andra steget är bygghandlingar, där entreprenören tar fram exakta konstruktiva lösningar för produktion.",
        ],
      },
      {
        title: "När projektering brister",
        body: [
          "I många projekt är ritningarnas kvalitet den enskilt viktigaste framgångsfaktorn.",
          "Felaktiga eller bristfälliga handlingar kan leda till sena ändringar i produktionen, störda logistikflöden, stillestånd på byggplatsen och i värsta fall rivning av redan utfört arbete.",
          "En enkel liknelse är en kock som får nya receptversioner mitt under matlagningen - resultatet blir både försenat och osäkert.",
        ],
      },
      {
        title: "Exempel: Hallandsås-projektet",
        body: [
          "Hallandsåstunneln är ett välkänt exempel där geotekniska förutsättningar underskattades i projekteringsskedet.",
          "Att åsen var vattenförande och tekniskt mycket komplex att täta hanterades inte fullt ut initialt.",
          "Resultatet blev kostnadsöverskridande på cirka 10 miljarder kronor och förseningar på över 20 år.",
        ],
      },
      {
        title: "Veridex observation: ansvar i praktiken",
        body: [
          "Veridex granskning pekar på en återkommande problematik.",
        ],
        bullets: [
          "Vite vid förseningar tillämpas sällan fullt ut.",
          "Ersättning har i vissa fall fortsatt betalats ut efter att avtal löpt ut.",
          "Projekteringsbrister leder sällan till tydliga ekonomiska konsekvenser.",
        ],
      },
      {
        title: "ABK 09 och ansvarsprincipen",
        body: [
          "Detta skapar en situation där fel ofta hanteras i produktionen - snarare än i ansvarskedjan.",
          "ABK 09 bygger på en tydlig princip: risk ska bäras där den uppstår.",
          "Om ritningar inte är byggbara är det i grunden ett projekteringsfel, vilket enligt avtalslogik bör få konsekvenser för ansvarig part.",
          "När detta inte sker uppstår en styrningsfråga snarare än en avtalsfråga.",
        ],
      },
      {
        title: "Trafikverket som systemaktör",
        body: [
          "Trafikverket är en av Sveriges största beställare av tekniska konsulttjänster.",
          "Hur myndigheten upphandlar, styr och följer upp får därför direkt påverkan på hela branschen.",
          "Två återkommande observationer är att projekteringsbrister sällan leder till ekonomiska konsekvenser för konsulten, och att vite och ansvarskrav används i begränsad omfattning.",
          "När den största aktören inte fullt ut tillämpar avtalsmekanismerna riskerar detta att bli norm även för resten av marknaden.",
        ],
      },
      {
        title: "Systemeffekten: när ansvar blir otydligt",
        body: [
          "Om ritningar inte måste vara fullt byggbara i praktiken, projekteringsfel hanteras i produktionen och kostnader i slutändan bärs av beställaren, då försvagas ansvarssystemets funktion oavsett hur avtalen är formulerade.",
        ],
      },
      {
        title: "En systemrisk i styrningen",
        body: [
          "En aspekt som sällan diskuteras är att även byggledare, projekteringsledare och kontrollfunktioner i många fall är konsulter.",
          "Det innebär att både uppdragsgivare och uppdragstagare kan ingå i samma konsultstruktur.",
          "När uppdrag dessutom drivs på löpande räkning kan längre projekt innebära fler debiterbara timmar och därmed högre intäkter.",
          "Det skapar ett potentiellt incitament där förseningar inte alltid är ekonomiskt neutrala för alla aktörer i styrkedjan.",
        ],
      },
      {
        title: "Incitament kontra ansvar",
        body: [
          "Detta handlar inte om individer eller illvilja. Det handlar om systemdesign.",
          "Om de som identifierar fel, föreslår åtgärder och kontrollerar ansvar själva verkar inom samma ekonomiska struktur som påverkas av besluten, kan incitamenten bli motstridiga.",
        ],
      },
      {
        title: "Avslutande reflektion",
        body: [
          "ABK 09 är utformat för tydlig ansvarsfördelning.",
          "Men ansvar fungerar bara när det utkrävs konsekvent, av en oberoende funktion och utan ekonomiska motincitament.",
          "Om detta inte sker riskerar styrsystemet i stora infrastrukturprojekt att förlora sin effektivitet.",
        ],
      },
      {
        title: "Slutsats",
        body: [
          "Frågan är därför inte enbart varför projekten blir dyrare och mer försenade.",
          "Den centrala frågan är: varför fortsätter detta mönster - trots att verktygen för att hantera det redan finns?",
        ],
      },
    ],
    closing:
      "Detta är del 1 av Veridex granskning 2026. Alla resonemang baseras på offentliga handlingar, avtalslogik och etablerad praxis inom offentlig upphandling och infrastrukturprojekt.",
  },
  {
    slug: "insikt-2-2026-lopande-rakning",
    category: "Granskning",
    title: "Insikt 2, 2026: Löpande räkning",
    excerpt:
      "När ersättningsmodellen styr mer än resultatet. Veridex om incitament, kontroll och beställarens ansvar vid löpande räkning.",
    author: "Veridex Research",
    date: "May 19, 2026",
    readTime: "7 min read",
    imageTone: "ink",
    imageUrl: "https://ik.imagekit.io/quzt9q1jj/Insikt%202.png?updatedAt=1779547227971",
    language: "sv",
    series: "Veridex analysserie 2026",
    intro: [
      "Utifrån Veridex samlade analyser av bygg- och installationsprojekt med ersättningsformen löpande räkning har det noterats återkommande mönster där kostnadsutvecklingen i praktiken inte alltid styrs av effektivitet, genomförandekvalitet eller värdeskapande för beställaren, utan i hög grad av volym i tid och åtgärder.",
      "Detta är inte en kritik mot enskilda entreprenörer, konsulter eller beställare. Det är en systemfråga.",
      "I centrum står hur ersättningsmodeller med löpande arvode fungerar i praktiken, vilka incitament de skapar och vilka krav de ställer på beställarens styrning, uppföljning och beslutsförmåga.",
    ],
    sections: [
      {
        title: "Vad löpande räkning egentligen innebär",
        body: [
          "Löpande räkning är i grunden en flexibel avtalsform som ofta används när förutsättningarna är oklara, projektet är komplext eller full prissättning i förväg inte är realistisk.",
          "Det är i många fall ett nödvändigt verktyg för att projekt ska kunna genomföras alls.",
          "Men i praktiken uppstår en central fråga: används löpande räkning för att det är optimalt - eller för att det är enkelt?",
        ],
      },
      {
        title: "Incitamenten i modellen",
        body: [
          "I många avtal med löpande arvode uppstår en inneboende dynamik: ju större volym arbete, desto högre ersättning.",
          "Det betyder inte att aktörer medvetet driver kostnader, men det innebär att modellen i sig inte automatiskt premierar effektivitet, kortare projekttid, minimering av omtag eller optimering för beställarens totala kostnad.",
          "Istället premieras volym.",
        ],
        bullets: [
          "Fler timmar.",
          "Fler ändringar.",
          "Fler gränsdragningsfrågor.",
          "Längre genomförandetid.",
        ],
      },
      {
        title: "Bekvämlighet kontra kontroll",
        body: [
          "Löpande räkning är ofta rationellt i tidiga skeden. Men i vissa fall kan det också bli ett resultat av bekvämlighet i upphandling och styrning.",
          "Det kan liknas vid att välja en för tunn jacka för att det bara är en kort promenad. I början känns det smidigt, men konsekvenserna kommer senare.",
        ],
      },
      {
        title: "Beställarens verkliga ansvar",
        body: [
          "När projekt drivs på löpande räkning ställs mycket höga krav på beställaren.",
          "I praktiken kräver detta en mycket aktiv beställarroll.",
          "Som det ibland uttrycks i branschen: var på plats så mycket som möjligt och var snabb med att svara på frågor och ta beslut.",
        ],
        bullets: [
          "Detaljerad uppföljning av material.",
          "Insyn i arbetade timmar.",
          "Förståelse för rimliga produktionshastigheter.",
          "Kontinuerlig närvaro i projektet.",
          "Förmåga att ifrågasätta och stoppa avvikelser.",
        ],
      },
      {
        title: "När styrningen inte räcker till",
        body: [
          "Om beställaren saknar intern kompetens för att tidsätta arbeten, bedöma rimlig produktivitet och förstå kostnadsstruktur i detalj, då blir styrningen ofta reaktiv snarare än kontrollerande.",
          "Det leder till att projektet i praktiken styrs mer av entreprenadens tempo än av beställarens målbild.",
        ],
      },
      {
        title: "Autopilot-problemet",
        body: [
          "Utan stark styrning riskerar löpande räkning att förlora sin ursprungliga funktion.",
          "Modellen kan då istället bli en form av kontinuerlig fakturering, svag kostnadsstyrning och diffus ansvarsfördelning.",
          "När projektet sedan blir försenat eller dyrt uppstår ofta en förenklad förklaring: det var komplext.",
        ],
      },
      {
        title: "AI som möjlig förändringsfaktor",
        body: [
          "Samtidigt öppnas en ny möjlighet.",
          "Med moderna AI-verktyg kan det i dag byggas system som kontrollerar material mot arbetsinsats, jämför priser mot marknadsnivåer, identifierar avvikelser i realtid och stödjer beställaren i beslut utan djup expertkunskap i varje detalj.",
          "Det kan förändra balansen i projektstyrning i grunden.",
        ],
      },
      {
        title: "Effekt på branschen",
        body: [
          "Om dessa verktyg används rätt kan de leda till att effektivitet premieras tydligare, seriösa aktörer får konkurrensfördel, slöseri minskar och varje investerad krona ger högre värde.",
          "Det gynnar både entreprenörer, hantverkare och beställare.",
        ],
      },
      {
        title: "Avslutande reflektion",
        body: [
          "Frågan är därför inte om löpande räkning är bra eller dåligt i teorin.",
          "Frågan är om vi idag har tillräckligt starka system för att säkerställa att modellen fungerar som det var tänkt.",
          "Det kräver snabb avvikelsehantering, tydlig realtidsuppföljning och en beställarroll med faktisk möjlighet att säga nej.",
          "Utan detta riskerar modellen att förlora sin kontrollfunktion.",
        ],
      },
    ],
    closing:
      "Detta är del 2 av Veridex analysserie 2026. Alla resonemang bygger på etablerad avtalslogik, projektstyrning och erfarenheter från större bygg- och installationsprojekt.",
  },
  {
    slug: "insikt-3-2026-ai-granskning-avtal-ansvar",
    category: "Granskning",
    title: "Insikt 3, 2026: När AI-granskning möter avtal och ansvar",
    excerpt:
      "När siffror inte räcker. Veridex om varför AI-granskning måste koppla data till avtal, bilagor och ansvar.",
    author: "Veridex Research",
    date: "May 20, 2026",
    readTime: "6 min read",
    imageTone: "verify",
    imageUrl: "https://ik.imagekit.io/quzt9q1jj/Insikt%203.jpg?updatedAt=1779547228091",
    language: "sv",
    series: "Veridex granskning 2026",
    intro: [
      "Bravidas vd har en poäng när han säger att man kan hitta rätt mycket i siffror med AI, men att det inte har något större värde om man inte förstår avtalet bakom.",
      "Det stämmer. Siffror måste alltid tolkas i rätt kontext.",
      "Läs mer: https://www.di.se/nyheter/svaret-om-granskningen-trakigt-att-vi-nagelfars/",
    ],
    sections: [
      {
        title: "Nästa steg i granskning: från data till avtal",
        body: [
          "I LOU-upphandlade ramavtal är spelplanen i praktiken redan fastställd.",
          "Det gör att det sällan räcker att bara analysera siffror. Det verkliga värdet ligger i att kunna koppla varje enskilt avtal till en struktur där avtalstext, bilagor, fakturadata och ersättningsmodeller kan analyseras tillsammans.",
          "Det är där granskning blir skarp på riktigt. Inte i Excel, utan i samspelet mellan data och avtal.",
        ],
      },
      {
        title: "Veridex-logiken: kontroll på avtalsnivå",
        body: [
          "I en LOU-upphandling kan en systematisk granskning exempelvis kontrollera flera avtalskritiska frågor.",
        ],
        bullets: [
          "Finns obligatoriska bilagor och underlag?",
          "Följer timpriser och påslag det avtalade?",
          "Har något fakturerats som kräver särskilt godkännande eller är undantaget?",
        ],
      },
      {
        title: "Vad granskningen egentligen visar",
        body: [
          "Resultatet blir inte en generell analys som: vi hittade mycket i siffror.",
          "I stället blir resultatet konkreta, avtalsbaserade slutsatser.",
        ],
        bullets: [
          "Denna post fakturerades utanför avtalad tidsperiod.",
          "Detta timarvode är 18 % högre än avtalat.",
          "Denna konsults alla timrapporter saknar godkännande från beställarrepresentanten.",
        ],
      },
      {
        title: "Normalisering: från rådata till jämförbar information",
        body: [
          "Det första steget i denna process är normalisering.",
          "Avtal presenteras i många format: PDF, Word, Excel, ibland inbäddad i mail eller beslutsprotokolls bilagor.",
          "AI måste kunna läsa allt detta, extrahera kritiska delar (vem är konsultfirman, vilken är budgeten, vilka är ersättningsreglerna) och strukturera detta i ett format som kan jämföras med faktiska fakturor och timrapporter.",
        ],
      },
      {
        title: "Koppling till finansdata",
        body: [
          "I nästa steg kopplas avtalsdata till finansdata.",
          "Genom att linjär för linjär jämföra faktiska fakturor med det avtalade kan mönster identifieras.",
          "En Excel-fil med 5000 fakturarad kan automatiskt klassificeras, valideras och flaggas för manuell granskning utifrån avtalets logik.",
        ],
      },
      {
        title: "Risker när avtalslogiken inte tillämpas",
        body: [
          "Utan denna koppling riskerar granskningen att bli generell.",
          "Det är inte tillräckligt att säga att \"många fakturor är höga\". Det relevanta är: \"dessa fakturor bryter mot avtalets ersättningsstruktur.\"",
          "Det första är opinion. Det andra är bevisbar faktabaserad kritik.",
        ],
      },
      {
        title: "Varför Bravida-vd:ns uttalande är sant",
        body: [
          "Bravida-vd:ns reflexion om att \"siffror utan avtal inte är värdefullt\" är helt korrekt.",
          "Många AI-analyser stannar vid stadiet \"vi hittade något\", utan att kunna koppla det till avtalsbrott eller avtalsenlig tillämpning.",
          "Det gör att analysen blir utanförskrivning snarare än faktafokuserad granskning.",
        ],
      },
      {
        title: "Skillnaden mellan observation och handling",
        body: [
          "En avtalsbunden granskning skapar en helt annan bas för handling.",
          "Om en köpare eller revisor kan se att en faktura bryter mot avtalets ersättningsregler, då blir det en sakfråga: Varför är detta fakturerats? Var det godkänt? Motbokas det?",
          "Utan denna avtalsförankring blir det bara en observation.",
        ],
      },
      {
        title: "Avslutande reflektion",
        body: [
          "Framtiden för granskning med AI ligger inte i större datamängder eller smartare algoritmer.",
          "Den ligger i att koppla data direkt till juridiska skyldigheter och avtalslogik.",
          "Det transformerar granskning från sökning efter anomalier till verifiering av avtalsefterilivnaden.",
        ],
      },
    ],
    closing:
      "Detta är en del av Veridex granskning 2026. Alla resonemang bygger på avtalslogik, offentlig upphandling och etablerad praxis i större infrastrukturprojekt.",
  },
  {
    slug: "insikt-4-2026-slussen-del-1",
    category: "Granskning",
    title: "Insikt 4, 2026: Slussen del 1/6",
    excerpt:
      "8 miljarder blev 21 miljarder. Första delen i Veridex granskning av vad som egentligen drev Slussen-projektets kostnader.",
    author: "Veridex Research",
    date: "May 21, 2026",
    readTime: "8 min read",
    imageTone: "signal",
    imageUrl: "https://ik.imagekit.io/quzt9q1jj/Insikt%204.jpeg?updatedAt=1779547227458",
    language: "sv",
    series: "Slussen del 1 av 6",
    intro: [
      "8 miljarder blev 21 miljarder, vad hände egentligen?",
      "Den 21 juni 2010 fattade Stockholms kommunfullmäktige beslut att genomföra projektet Slussen med totalbudget på 8 miljarder kronor.",
      "Idag, 16 år senare, är projektet fortfarande inte färdigt och notan har passerat 21 miljarder och tickar fortfarande.",
    ],
    sections: [
      {
        title: "Planen var tydlig",
        bullets: [
          "Bussterminalen klar 2015.",
          "Trafikanläggningen klar 2018.",
          "Hela projektet färdigt 2021.",
        ],
      },
      {
        title: "Vad driver kostnader i byggprojekt?",
        body: [
          "I den här artikelserien använder vi Veridex mjukvara, byggd för att analysera stora datamängder och verifiera att kostnader i byggprojekt är korrekta, marknadsmässiga och avtalsenliga.",
          "Vår analys utgår från en enkel sanning: det finns egentligen bara tre orsaker till att ett byggprojekt spräcker tid och budget.",
        ],
        bullets: [
          "Felkalkylerat från början.",
          "Det genomfördes felaktigt.",
          "Oförutsedda händelser, till exempel krig, pandemi eller inflation.",
        ],
      },
      {
        title: "Utgångspunkten",
        body: [
          "Med utgång i tusentals avtal och fakturor ska vi försöka nysta ut vilken av orsakerna som aktualiserats här.",
          "Och slutligen försöka svara på Leif Östlings mytomspunna fråga: vad får jag för pengarna?",
        ],
      },
      {
        title: "Budgeten",
        body: [
          "När genomförandebeslutet klubbades 2010 var investeringsutgifterna, kostnaderna, beräknade till 8 miljarder, vilket sedan har höjts via nya investeringsbeslut.",
        ],
        bullets: [
          "2015: 12,1 miljarder.",
          "2023: 20,77 miljarder.",
        ],
      },
      {
        title: "Kostnadsökningen",
        body: [
          "Ovan innebär en kostnadsökning med 158 %, vilket ur ett internationellt perspektiv är väldigt högt.",
          "För att sätta siffrorna i perspektiv kan vi ta bussterminalen Katarinaberget som exempel. Den budgeterades 2014 till 1,4 miljarder. Slutnotan landar nu på uppskattningsvis 6,5 miljarder. Det motsvarar en ökning på 364 %.",
          "Ett av världens mest ökända infrastrukturprojekt, Big Dig i Boston, ökade med 400 %. Bussterminalen spelar i samma liga.",
        ],
      },
      {
        title: "Har projektet blivit bättre?",
        body: [
          "Det är en central fråga. Motiverar de ökade kostnaderna att man nu får väsentligt mer värde? Eller har den tänkta ursprungsprodukten helt enkelt blivit dyrare att leverera?",
          "Rapporterna indikerar ett par huvudanledningar.",
        ],
        bullets: [
          "Inflation. Den var väldigt hög under pandemin, men i snitt mellan 2010 och 2025 var den cirka 3,5 %. Man får förutsätta att 2 % var kalkylerat och 1,5 % faller på marginalen här.",
          "Geotekniska och geologiska förutsättningar. Ett projekt med investeringar motsvarande 8 miljarder måste ha gjort en professionell geoteknisk och geologisk undersökning före beslut om investering. Ändringen av dessa förutsättningar under projektet måste vara begränsad.",
          "Bussterminalen anpassades för biogasbussar. Oklart hur detta påverkat i miljardklassen, men bussterminalen verkar behöva en djupare analys.",
        ],
      },
      {
        title: "Planering och oförutsedda händelser",
        body: [
          "Med förklaringarna ovan kan man grovt uppskatta att det enligt genomförandebesluten verkar vara planering och oförutsedda händelser som skapat kostnaderna.",
          "Det finns ett antal ytterligare mindre förklaringar, men när kostnaderna ökat med miljarder blir dessa förklaringar ganska obetydliga.",
        ],
      },
      {
        title: "Inkomster eller skattepengar?",
        body: [
          "Staden presenterar projektet med investeringsinkomster på 8,14 miljarder kronor i 2023 års beslut, vilket indikerar att projektets nettokostnad är 12 miljarder.",
          "Dessa inkomster kommer till stor del från Region Stockholm och staten. Ingen av dessa inkomster representerar ett marknadsvärde som projektet genererat. Det är skattepengar som flyttas mellan offentliga fickor.",
          "Den relevanta siffran för beställaren, skattebetalarna, är den totala investeringsutgiften: 20,77 miljarder kronor, med senaste prognosen. I denna granskning kommer vi därför konsekvent att fokusera på totala utgifter.",
        ],
      },
      {
        title: "Upphandlingsstrategin",
        body: [
          "Här kommer vi till kärnan, och till det som tar oss vidare till del 2.",
          "Stockholms stad valde att genomföra Slussen som en delad entreprenad, vilket innebär att staden själv agerar byggherre och upphandlar ett antal separata entreprenörer för olika delar av projektet.",
          "Tänk dig att du bygger din drömvilla. I stället för att anlita en totalentreprenör som tar ansvar för hela bygget, köper du själv in grundläggare, elektriker, husleverantör och trädgårdsmästare var för sig.",
          "För ett komplext projekt som Slussen kan en delad entreprenad vara helt rätt strategi. Det ger beställaren kontroll och möjlighet att konkurrensutsätta varje del samt att på lämpligt sätt inte betala i onödan för risker.",
        ],
      },
      {
        title: "Principen",
        body: [
          "Principen är enkel: det du vet köper du till fast pris. Det du inte vet köper du på löpande räkning, men då med järnhård uppföljning.",
        ],
        bullets: [
          "Pålning i Mälaren? Löpande räkning, men med transparens. Du vet inte hur långa eller hur många pålar du behöver. Här bör beställaren ta risken då förhållandena inte är 100 % säkra.",
          "All överbyggnad. Detta är ovan mark och du vet exakt hur mycket betong du ska ha, ritningarna är klara. Fast pris upphandlas med full konkurrens. Här bör entreprenören ta risken då förhållandena är kända.",
          "Kvar står samordningsrisken, dvs. byggledaren har säkrat upp att pålningen är klar innan man bygger betongstomme. Över 2 miljarder har fakturerats av konsulter i projektet, så man får utgå från att Stockholms stad lyckats köpa in en part som tagit samordningsansvaret.",
        ],
      },
      {
        title: "Nästa del",
        body: [
          "Vi tittar på de största avtalen, delarna, och vilka som var löpande räkning eller samverkan, vilka som var på fast pris och vad utfallet blev av dessa avtal.",
          "Vilka delar lyckades man riskeliminera och köpa på fastpris? Och vilka aktörer gav man förtroendet att förvalta skattebetalarnas pengar med löpande räkning-kontrakt?",
        ],
      },
    ],
    closing:
      "Detta är del 1 av 6 i Veridex granskning av Slussen-projektet. Alla siffror är hämtade ur offentliga handlingar. Har du tankar eller åsikter du vill dela med dig av? Välkommen att maila info@veridex.se",
  },
  {
    slug: "insikt-5-2026-slussen-del-2",
    category: "Granskning",
    title: "Insikt 5, 2026: Slussen del 2/6",
    excerpt:
      "En granskning av hur Slussens entreprenader gick från strategisk uppdelning till löpande räkning och förskjuten risk.",
    author: "Veridex Research",
    date: "May 22, 2026",
    readTime: "8 min read",
    imageTone: "ink",
    imageUrl: "https://ik.imagekit.io/quzt9q1jj/Insikt%205.jpg?updatedAt=1779547227339",
    language: "sv",
    series: "Slussen del 2 av 6",
    intro: [
      "I del 1 konstaterades att uppdelningen av Slussen i flera entreprenader var strategiskt motiverad.",
      "Utfallet visar dock att strategin i praktiken urholkades, då samtliga större avtal övergick till löpande räkning där beställaren kom att bära huvuddelen av risken.",
    ],
    sections: [
      {
        title: "De större entreprenaderna",
        bullets: [
          "SN71, Slussanläggning med kajer. Kontraktsvärde: 1,27 miljarder. Fakturerat: 3,65 miljarder. Avtalsmodell: samverkan med riktpris och fast arvode. Gjordes om till löpande räkning och budget.",
          "SN81, Konstbyggnad land. Kontraktsvärde: 0,737 miljarder. Fakturerat: 3,02 miljarder. Avtalsmodell: samverkan med riktpris och fast arvode. Gjordes om till löpande räkning och budget.",
          "SN94, Bussterminal stomkomplettering. Kontraktsvärde: 0,618 miljarder. Fakturerat: 1,34 miljarder. Avtalsmodell: fastpris. Gjordes om till delvis löpande. Invecklat, men med avseende på ökningen är det svårt att göra någon annan bedömning än att det blev löpande.",
        ],
        body: ["Samtliga entreprenader pågår fortfarande, slutkostnaden är okänd."],
      },
      {
        title: "Resultaten",
        body: [
          "Entreprenören har fakturerat 5,38 miljarder mer än de angivna riktprisen och fasta priser som ingår i avtalen. Aktuell status innebär en kostnadsökning med minst 205 %, och det motsvaras inte av en proportionell ökning i leverans när det gäller värde för brukarna: inte större hållplats, ingen extra bro eller liknande. Slutprodukten är snarlik det som initierades från början.",
        ],
      },
      {
        title: "Strategin och risken",
        body: [
          "Förra inlägget diskuterade fördelarna med att dela upp projektet i flera delentreprenader. Dock blev utfallet att inget av avtalen genomfördes med fast pris där entreprenören stod för risken.",
          "I stället har de tre mest omfattande avtalen ersatts med löpande räkning, dvs. entreprenören får betalt för allt sitt arbete samt ett arvode om, i detta fall, 7-8 %.",
          "Entreprenaderna är även upphandlade som utförandeentreprenader. Beställaren har alltså själv tagit på sig ansvaret, via upphandlade konsulter, att ta fram samtliga ritningar som krävs för att uppföra projektet.",
          "Exempelvis: har el-projektören missat att rita in eluttaget bakom ugnen i köket, eftersom ugnen inte syntes på köksritningen, faller samtliga kostnader relaterade till att bygga om köket med fler eluttag på beställaren.",
          "Kort sagt kan man säga att entreprenören tog nästan ingen risk och skattebetalarna tog all risk. För detta ersattes entreprenören med ett arvode om 7-8 % utöver sina nedlagda kostnader.",
          "Det bör tilläggas att 7-8 % är väldigt lågt. Det är svårt för ett byggbolag att ha centrala kostnader som VD, ledning, huvudkontor, anbudsavdelning, HR och löneavdelning som understiger 6 %. Det är även få byggbolag som antar projekt med en så pass låg vinst som 1-2 %. Skanska redovisade till exempel en vinst för 2024 om cirka 4,5 %.",
        ],
      },
      {
        title: "Avtalen",
        body: [
          "Även om all risk för Slussen-projektet hamnat på beställaren är avtalen otroligt välskrivna från beställarens perspektiv. De lämnar lite utrymme för tolkningar eller merkostnader.",
          "Det problematiska är på vilket sätt entreprenören kan få betalt. Avtalen anger de två modellerna nedan.",
        ],
        bullets: [
          "Verifierade kostnader enligt AB 04 kap. 6 § 9. Tänk dig att du anlitar en byggfirma för att renovera köket hemma. När du får fakturan ska det framgå kvitto från Ikea där köket köptes, kvitto från Elgiganten där vitvarorna köptes, tidrapport från snickaren som anger hur många timmar personen arbetat samt månadslönen utslagen per arbetad timme.",
          "Överenskomna à-priser. Entreprenören har möjlighet att handla upp en underentreprenör på ett fast à-pris, till exempel en kvadratmeter målning. Entreprenören får in tre offerter på målning, varav den billigaste anger 400 SEK per kvadratmeter målad vägg. Entreprenören presenterar detta för beställaren som lämnar sitt godkännande. För att lagen om offentlig upphandling inte ska slås ut är det i regel krav på att minst två målarfirmor ska tillfrågas vid detta förfarande.",
        ],
      },
      {
        title: "Kostnadskontroll och genomförandet",
        body: [
          "Som byggledare är denna avtalsmodell den svåraste formen att hantera. Framför allt på grund av två anledningar.",
        ],
      },
      {
        title: "Felprojekteringar",
        body: [
          "Beställaren har handlat upp färdiga byggbara ritningar från olika konsulter. Är det något fel ska den konsult som upprättat eller samordnat handlingarna också ansvara för felet, dvs. ta hela eller en del av kostnaderna för att rätta till.",
          "Med tiotals olika ritningskategorier, hundratals ritningar inom varje kategori och flera olika projekt blir det lätt övermäktigt att hitta i vilken ände felet började och utkräva ansvar enligt avtal.",
          "Det innebär att beställaren får betala när det är fel på ritningar. Kom ihåg del 1: kostnadsökningar berodde på felaktiga ritningar eller förutsättningar.",
        ],
      },
      {
        title: "Ekonomisk kontroll",
        body: [
          "Det finns två sätt för entreprenören att redovisa kostnader.",
          "Verifierade kostnader: Slussen omsätter miljarder, och det är flera led av underentreprenörer, vilket är fullt förståeligt. Det är ovanligt att en entreprenör håller pråmar, grävmaskiner och elektriker inom samma bolag. Men enligt denna modell ska entreprenören redovisa kvittot på hur mycket diesel underentreprenörens grävmaskin har tankats för. Det är svårt att greppa hur många kvitton och bilagda materialfakturor det blir, men det borde röra sig om miljontals.",
          "À-priser: Här blir det lättare. Om entreprenören har köpt en målare på 400 SEK per kvadratmeter och jag mäter upp på ritningen att 1 000 kvadratmeter ska målas, fakturerar entreprenören 1 000 x 400 = 400 000 kronor.",
        ],
      },
      {
        title: "När à-priset skapar ett nytt incitament",
        body: [
          "Här kan det också uppstå ett motsatt incitament för entreprenören.",
          "Vi säger att entreprenören har en genomsnittlig lön för sina tjänstemän om 50 000 kronor i månaden. Inklusive samtliga lönekostnader innebär det en timkostnad om cirka 450 kronor per timme.",
          "Om entreprenören lyckas förhandla fram att de ska få betalt 700 SEK per timme i à-pris för sin tjänsteman innebär det att de gör en vinstmarginal på 55 % per arbetad timme.",
          "Helt plötsligt har entreprenören ett incitament att lägga ner så mycket tjänstemannatid som möjligt och förlänga projektet med fler timmar, vilket ger större vinst. 55 % i marginal per timme är mycket bättre än 7 % på verifierade nedlagda kostnader.",
          "Så hur gick då genomförandet och kostnadsuppföljningen ovan? Mer om det i kommande delar.",
        ],
      },
      {
        title: "Underlag",
        body: ["Alla nedlagda summor är kommunicerade av Stockholms stad samt underlagen nedan."],
        bullets: [
          "SN71 Entreprenadkontrakt (Handling 1), daterat 2015-08-28.",
          "SN71 Fast arvode med ingående kostnader samt exempel för reglering (Handling 1.2), daterad 2014-03-28.",
          "SN71 Administrativa föreskrifter (Handling 9), daterad 2014-03-28, reviderad 2014-10-02.",
          "SN81 Entreprenadkontrakt (Handling 1), daterat 2015-08-28, med likalydande ersättningsregler som SN71.",
          "Tilläggskontrakt Slussen Skanska SN71 SN81, daterat 2021-04-28.",
          "SN94 Tilläggsavtal, daterat 2023-11-28.",
          "SN94 Entreprenadkontrakt med AF.",
          "SN92 Entreprenadkontrakt med AF, daterat 2021-06-30.",
        ],
      },
    ],
    closing:
      "Detta är del 2 av 6 i Veridex granskning av Slussen-projektet. Alla siffror är hämtade ur offentliga handlingar. Har du tankar eller åsikter du vill dela med dig av? Välkommen att maila info@veridex.se",
  },
  {
    slug: "insikt-6-2026-slussen-del-3",
    category: "Granskning",
    title: "Insikt 6, 2026: Slussen del 3/6",
    excerpt:
      "En granskning av hur projektering, konsultavtal och omprojektering drivit kostnaderna i Slussen-projektet.",
    author: "Veridex Research",
    date: "May 23, 2026",
    readTime: "8 min read",
    imageTone: "paper",
    imageUrl: "https://ik.imagekit.io/quzt9q1jj/Insikt%206.jpg?updatedAt=1779547227550",
    language: "sv",
    series: "Slussen del 3 av 6",
    intro: [
      "I föregående avsnitt, del 2 av 6, visade vi att projekteringen i Slussen uppgår till cirka 2,5 miljarder kronor, med en total konsultkostnad på upp mot 4,5 miljarder.",
      "Samtidigt har endast en marginell andel av kostnadsökningarna återkrävts från ansvariga konsulter, trots att bristande projektering pekas ut som en huvudorsak.",
      "Genom rörliga arvoden och omfattande omprojektering har kostnaderna kunnat öka över tid, medan beställaren i praktiken fått bära konsekvenserna.",
    ],
    sections: [
      {
        title: "Projekteringens omfattning",
        body: [
          "I ett normalt byggprojekt ligger projekteringen på 8-15 % av byggkostnaden. På Slussen motsvarar den explicita projekteringsposten på 2,5 miljarder ungefär 100 % av de ursprungliga kontraktssummorna för de tre största byggentreprenaderna.",
          "Och då är det bara den explicita projekteringen.",
          "Räknar man in projekt- och byggledning, samordning och övervakning, byggherrekostnader, som i stor utsträckning också utförs av konsulter, är den verkliga konsultnotan runt 4,5 miljarder.",
          "Trots att Stockholms stad själv pekar ut bristande projektering som en huvudorsak till fördyringen har staden enbart fått tillbaka 0,012 % av projektkostnaden för felaktig projektering.",
        ],
      },
      {
        title: "Konsultavtalen",
        body: [
          "Stockholms stad upphandlade bygghandlingsprojekteringen för Slussens tre delområden genom separata konsultavtal.",
        ],
        bullets: [
          "ELU Konsult AB, Land (K 503-12). Fakturerat t.o.m. mars 2026: 753 miljoner.",
          "ELU Konsult AB, Vatten (K 504-12). Fakturerat t.o.m. mars 2026: 449 miljoner.",
          "WSP Sverige AB, Berg (K-114 SN). Fakturerat t.o.m. mars 2026: 562 miljoner.",
          "Samtliga avtal regleras av ABK 09 och har ersättningsformen rörligt arvode, dvs. konsulterna fakturerar per timme.",
        ],
      },
      {
        title: "Rörliga arvoden och omprojektering",
        body: [
          "Än en gång ser man modellen: ett försenat projekt innebär fler arbetade timmar och högre vinst till konsultbolagen.",
          "Man har sedan låtit entreprenören ta över projekteringen, vilket gör att exakt projekteringskostnad blir otroligt svårt att följa. Men i den senaste rapporten från exploateringskontoret angavs slutkostnaden för projektering till 2,5 miljarder.",
        ],
      },
      {
        title: "Att bygga och projektera samtidigt",
        body: [
          "I en utförandeentreprenad är det beställaren, Stockholms stad i detta fall, som ansvarar för att ritningarna är kompletta och korrekta. Det är beställaren som talar om exakt hur entreprenören ska bygga, exempelvis vilken tjocklek stålet i brokonstruktionen ska ha.",
          "Om dessa uppgifter inte levereras enligt tidplan stannar produktionen, och entreprenören har rätt till ersättning.",
          "I ett så komplext projekt som Slussen innebär detta ett betydande risktagande. För varje detalj som ändras i efterhand måste något rivas, byggas om eller kompletteras, och det får entreprenören också betalt för. Notan hamnar hos beställaren.",
          "Detta är också en rimlig förklaring till att entreprenadavtalen ändrades till löpande räkning, där man undvek hantering av hinder och stilleståndsanmälningar. Men fortsatt fick bära kostnaden.",
        ],
      },
      {
        title: "När ritningarna brister",
        body: ["När ritningarna brister betalar beställaren flera gånger:"],
        bullets: [
          "Först konsulten för att rita.",
          "Sedan konsulten för att rita om.",
          "Sedan entreprenören för att bygga om.",
          "Och i vissa fall även en fjärde gång när entreprenören tar över projekteringen.",
        ],
      },
      {
        title: "Konsulternas ansvar",
        body: [
          "Men risken har trots allt hanterats av Stockholms stad genom att man tecknat ABK 09-avtal med de stora projektörerna som ska ta fram dessa ritningar.",
          "ABK 09 anger tydligt att om ritningarna inte är fackmässiga, dvs. inte går att bygga efter, så är konsulten ansvarig för att täcka beställarens kostnader relaterade till felet.",
          "I samtliga rapporter till kommunfullmäktige som vi har tagit del av kan man notera att omprojektering och dylikt är en stor anledning till merkostnader och tidsförskjutning.",
          "Tillsammans med ansvarsmodellen i ABK 09 borde beställaren ha kunnat få tillbaka en del ersättning.",
        ],
      },
      {
        title: "Återkrav och skadestånd",
        body: [
          "Totalt ställt skadeståndskrav till projektörerna ovan: 11 miljoner.",
          "Totalt erhållet skadestånd: 1,7 miljoner, med 5,2 miljoner under förhandling.",
          "Av en sammanlagd budgetökning på cirka 14 miljarder har Stockholms stad återkrävt 11 miljoner från projektörerna och hittills fått tillbaka 1,7 miljoner.",
          "Det motsvarar 0,012 % av projektets budgetökning. Detta behöver kombineras med att man anger omprojektering som en av de mest bidragande orsakerna till kostnadsökningarna.",
        ],
      },
      {
        title: "Månadslön på över 90 000 kronor",
        body: [
          "Prislistan som anger konsulternas timarvode skiljer sig lite mellan olika roller. Räknar man högt kostar en konsult ungefär 1 000 kronor per timme. Det är mycket: det täcker en månadslön på över 90 000 kronor och för detta timpris får man inga oerfarna som saknar kompetens.",
          "2,5 miljarder innebär att man har haft ungefär 100 heltidsanlitade konsulter som enbart har arbetat med att ta fram ritningar till Slussen i 15 år. I denna summa ingår inte projektledning, projekteringsledning eller det som allmänt benämns som byggherrekostnader.",
          "Detta är alltså enbart för konsulter som sitter och ritar. För ungefär samma summa fick Stockholms stad hela Tele2 Arena byggd och ritad. Slutnotan landade där på mellan 2,3 och 2,7 miljarder.",
        ],
      },
      {
        title: "Underlag",
        body: ["Alla nedlagda summor är kommunicerade av Stockholms stad samt underlagen nedan."],
        bullets: [
          "K 503-12: Projektering delområde land, ELU Konsult AB.",
          "K 504-12: Projektering delområde vatten, ELU Konsult AB.",
          "K 114: Projektering delområde berg, WSP Sverige AB.",
          "8 Bilaga 1 SGA Slutrapport 140930.",
        ],
      },
    ],
    closing:
      "Detta är del 3 av 6 i Veridex granskning av Slussen-projektet. Alla siffror är hämtade ur offentliga handlingar. Har du tankar eller åsikter du vill dela med dig av? Välkommen att maila info@veridex.se",
  },
  {
    slug: "insikt-7-2026-slussen-del-4",
    category: "Granskning",
    title: "Insikt 7, 2026: Slussen del 4/6",
    excerpt:
      "Trafikverket sa stopp. Stockholm beställde mer. Hur många gånger kan man hyvla samma ost?",
    author: "Veridex Research",
    date: "May 24, 2026",
    readTime: "8 min read",
    imageTone: "verify",
    imageUrl: "https://ik.imagekit.io/quzt9q1jj/Insikt%207.jpg?updatedAt=1779547226927",
    language: "sv",
    series: "Slussen del 4 av 6",
    intro: [
      "Trafikverket sa stopp. Stockholm beställde mer. Hur många gånger kan man hyvla samma ost?",
      "Syftet med de upphandlade entreprenadkontrakten i Slussen var att entreprenören inte skulle kunna tjäna pengar på stadens bekostnad om kostnaderna ökade.",
      "Men vad händer när entreprenören samtidigt äger bolagen som säljer materialet, lastbilarna som transporterar det och maskinerna som hyrs in i projektet?",
    ],
    sections: [
      {
        title: "Trafikverket som jämförelse",
        body: [
          "En av de mest uppmärksammade infrastrukturdiskussionerna det senaste året har varit Trafikverkets hävning av ett entreprenadkontrakt kopplat till Västlänken.",
          "Debatten har främst handlat om ökade kostnader, förseningar och konsekvenser för skattebetalarna.",
          "Men Trafikverket valde samtidigt att använda de avtalsmässiga verktyg som stod till buds när man ansåg att entreprenadens genomförande inte låg i linje med avtalets syfte.",
        ],
      },
      {
        title: "Ersättningsmodellen",
        body: [
          "Ersättningsformen i Västlänken liknar den som används i flera delar av Slussen.",
          "Entreprenören ersätts för sina faktiska kostnader, kostnaderna ska redovisas och entreprenören får ett procentuellt arvode ovanpå dessa kostnader.",
          "Problemet uppstår när entreprenören samtidigt upphandlar sina egna dotterbolag.",
          "Där upphör ofta spårbarheten kring verkliga kostnader, marginaler och faktisk vinstnivå.",
        ],
      },
      {
        title: "Ett förenklat exempel",
        body: [
          "Föreställ dig att du anlitar din granne för att renovera ditt kök.",
          "Ni kommer överens om 500 kr/timme, 10 % arvode på material och inköp och en total budget på 100 000 kronor.",
          "När fakturorna når 150 000 kronor och köket fortfarande inte är färdigt börjar du granska underlagen närmare.",
          "Du upptäcker då att grannen äger byggvaruhandeln där materialet köpts, firman som hyr ut maskiner och rörmokarfirman som utfört delar av arbetet.",
          "Dessutom redovisas inte de faktiska inköpskostnaderna fullt ut.",
        ],
      },
      {
        title: "Var uppstår vinsten?",
        body: [
          "I modellen tjänar entreprenören pengar i flera led.",
        ],
        bullets: [
          "Timarvodet täcker både lön och vinst.",
          "Arvodet på material och inköp genererar ytterligare marginal.",
          "Vinsten i dotterbolagen blir ytterligare ett intäktslager.",
        ],
      },
      {
        title: "Var detta verkligen syftet med avtalet?",
        body: [
          "Frågan blir då om detta verkligen var syftet med avtalet.",
        ],
      },
      {
        title: "Hur modellen används i Slussen",
        body: [
          "Flera av de största avtalen i Slussen är upphandlade som samverkansentreprenader med löpande räkning.",
          "I flera fall har avtalen dessutom ändrats i efterhand till denna modell.",
          "Enligt tillgängligt material används även särskilda bolagsstrukturer där ett helägt bolag utan anställda fungerar som avtalspart, ett procentuellt arvode läggs ovanpå samtliga kostnader och stora delar av kostnaderna vidarefaktureras till koncernens egna dotterbolag.",
        ],
      },
      {
        title: "Osthyvel-effekten",
        body: [
          "Branschen använder ibland metaforen om osthyveln.",
          "Vid varje steg i kedjan kan ytterligare marginal uppstå.",
        ],
        bullets: [
          "Entreprenörsarvode på första fakturan.",
          "Marginaler i interna dotterbolag.",
          "Påslag på material, transporter och maskiner.",
          "När kostnaderna inte fullt ut kan verifieras blir det samtidigt svårt att bedöma verklig självkostnad, faktisk marginal eller om avtalsmodellen används enligt sitt ursprungliga syfte.",
        ],
      },
      {
        title: "Den större frågan",
        body: [
          "Både Trafikverket och Stockholms stad omfattas av lagen om offentlig upphandling (LOU).",
          "Det väcker därför en central fråga: Hur kan liknande upplägg leda till hävning och miljardkrav i ett projekt, men fortsatta tilläggsbeställningar i ett annat?",
        ],
      },
      {
        title: "Vem företräder skattebetalaren?",
        body: [
          "Det mest problematiska kanske inte är själva avtalsformen, utan incitamentsstrukturen runt projektet.",
          "I många större projekt arbetar entreprenörer, konsulter, byggledare och projekteringsledare på löpande räkning.",
          "I praktiken innebär det att flera centrala aktörer får högre ersättning ju längre projektet pågår.",
        ],
      },
      {
        title: "Tre parallella incitament",
        body: [
          "I samma projekt kan följande samtidigt vara sant: entreprenören tjänar mer på ökade kostnader, konsulten tjänar mer på fler timmar och projekteringen genererar fler fakturerbara resurser över tid.",
          "Det betyder inte att någon aktör medvetet vill förlänga projekt.",
          "Men det innebär att systemets ekonomiska drivkrafter inte alltid är fullt riktade mot effektivitet, kortare projekttid eller lägsta möjliga kostnad för beställaren.",
        ],
      },
      {
        title: "Avslutande fråga",
        body: [
          "När flera delar av styrkedjan samtidigt har ekonomiska incitament kopplade till projektets längd och omfattning uppstår en grundläggande fråga.",
          "Vem bevakar egentligen skattebetalarens intresse?",
        ],
      },
    ],
    closing:
      "Detta är del 4 av 6 i Veridex granskning av Slussen-projektet.",
  },
  {
    slug: "insikt-8-2026-slussen-del-5",
    category: "Granskning",
    title: "150 procent över budget, tio år försenat, ännu inte klart. Finns det någon ansvarig?",
    excerpt:
      "Ingen har fått mer kritik för Slussen än politikerna i exploateringsnämnden och kommunstyrelsen. Men vad kunde de folkvalda påverka?",
    author: "Veridex Research",
    date: "May 25, 2026",
    readTime: "5 min read",
    imageTone: "ink",
    imageUrl: "https://ik.imagekit.io/quzt9q1jj/Insikt8.jpeg",
    language: "sv",
    series: "Slussen del 5 av 6",
    intro: [
      "Ingen har fått mer kritik för Slussen än politikerna i exploateringsnämnden och kommunstyrelsen, dvs dom folkvalda politikerna som sitter i dessa instanser. Men innan man skuldbelägger någon: vad kunde de folkvalda påverka, och vilken information hade de att agera på?",
      "Tidigare delar visade vad som hände: Kontraktens riktpriser ökade med flera 100%, en övergång från fast pris till löpande räkning, en koncernstruktur där tjänster handlas av dotterbolag där vinsten inte går att spåra, ökade projekteringskostnader med enda förklaring ”det är komplext” som avgörande förklaring. Frågan blir: Vilken information fick politikerna och vad kan dom lastas för?",
    ],
    sections: [
      {
        title: "Först: vilka frågor borde nämnden ha fått avgöra?",
        body: [
          "Fyra frågor var så väsentliga att nämnden borde ha fått avgöra dem, inte fått dem serverade som poster på nästa faktura.",
          "**Projekteringsfelen**: När projektörer staden kontrakterat ritar handlingar som inte går att bygga efter, och arbetet görs om, uppstår en kostnad. Det är en avtalsfråga: ska projektören bekosta det, eller staden? Diskuterades detta med politikerna eller betalade projektorganisationen flera gånger för samma ritning, utan att informera politiken?",
          "**Inflationen**: Index stod för runt 2,4 miljarder. Nämnden fick höra att prisutvecklingen översteg de antagna 5 procenten per år men konsumentprisinflationen låg i snitt under 3 procent under perioden. Delar av byggindex kan ha varit högre, särskilt 2021–2022. Fick nämnden verkligen en korrekt sammanställning av byggindex från 2015?",
          "**Marginalen**: Nämnden fick veta att projektet gick över till löpande räkning men fick nämnden veta att huvudentreprenören köpt upp sina egna dotterbolag? Och vinsten man antog låg på 8–10 procent kan, sett till alla led i koncernen, ha varit väsentligt högre?",
          "**Timpriserna** – inte längre en hypotes: I ÄTA-prislistan för entreprenad SN94 (2020-09-01) prissattes en anläggnings- och en betong- eller träarbetare till 990 kronor i timmen, mot ett marknadsmässigt debiteringspris kring 500–600 kronor, 50 till 100 procent över, inte de tio procent som vore normalt. Detta är á-priser för ÄTA, och på löpande räkning är det tilläggsarbetena som driver notan. Såg nämnden de siffrorna, eller bara slutsumman?",
        ],
      },
      {
        title: "Varför nämnden inte kunde se det.",
        body: [
          "Beställaren har en granskande organisation, och revisionen bekräftar att fakturakontrollen förstärktes. Problemet är inte att granskning saknas, utan vilka incitament granskaren har: organisationen bemannas till stor del av inhyrda konsulter som betalas per timme och tjänar mer när projektet drar ut samma incitament som entreprenören de ska granska. Ingen i kedjan tjänar på att projektet blir billigt och klart i tid; den enda som gör det, skattebetalaren, sitter inte i rummet. Ingen begick fel men ingen hade incitament att vakta skattkistan",
          "Nämnden ser dessutom aldrig entreprenörsledet. Revisionen slår fast att genomförandet hanteras som verkställighet: upphandlingar beslutas i förvaltningen, och det återrapporteras inte vilken aktör som vann, till vilket värde eller hur avtalet följdes upp. Dotterbolagsfrågan kan därför aldrig nå nämnden inte för att den döljs, utan för att informationsvägen är byggd så. De viktigaste styrdokumenten beslutades inte heller av nämnden, utan av projektet självt.",
        ],
      },
      {
        title: "Vad nämnden fick i stället",
        body: [
          "Nämnden fick löpande projektredovisning: status, tidplan, aktiviteter, risker, kommunikation, arbetsmiljö. Vad den aldrig fick var en enkel, opartisk förklaring av vad som faktiskt drev kostnaderna. För att förstå ett byggprojekts fördyring krävs att detaljerna förklaras begripligt, och av någon som inte själv driver projektet framåt.",
          "Ingen förklarade vem som bar ansvaret för att rita om felaktiga handlingar. Ingen berättade att entreprenören köpte upp sina egna dotterbolag och fakturerade dem på á-priser en snickare från samma koncern för 990 kronor i timmen förvandlar ett påslag på tio procent till något långt högre. Ingen sa att övergången till löpande räkning berodde på de stillestånd som uppstod när byggledningen inte planerat rätt.",
          "Det nämnden fick var beskedet \"det har blivit dyrare\". Det den behövde var svaret på varför staden enligt avtalen ska ansvara för fördyringen.",
        ],
      },
      {
        title: "Politikens dilemma, inte i första hand politikens fel",
        body: [
          "En förtroendevald kan inte själv granska tiotusentals fakturor. Ansvar kräver möjlighet att påverka och information att agera på nämnden hade begränsat av båda. Den verkliga bristen är inte att någon ledamot beslutade fel, utan att systemet aldrig lade de avgörande frågorna på nämndens bord. Skulden landar därför delvis fel: politikerna kan klandras för att inte ha krävt bättre underlag inte för beslut de aldrig fick fatta.",
          "Verifierade uppgifter är hämtade ur offentliga handlingar, entreprenadens ÄTA-prislista och egen korrespondens.",
          "I nästa och sista delen av Slussen diskuterar vi, om inte projektägarna är ansvariga, vad är då felet? Samt förslag på vad man borde gjort annorlunda.",
        ],
      },
    ],
    closing:
      "Detta är del 5 av 6 i Veridex granskning av Slussen-projektet.",
  },
  {
    slug: "insikt-9-2026-slussen-del-6",
    category: "Granskning",
    title: "En miljard investerad är inte en miljard i värde",
    excerpt:
      "Pengar som spenderas är inte samma sak som värde som skapas. Avslutande delen i Veridex granskning av Slussen och vad stora offentliga investeringar egentligen bör mätas mot.",
    author: "Veridex Research",
    date: "May 26, 2026",
    readTime: "5 min read",
    imageTone: "paper",
    imageUrl: "https://ik.imagekit.io/quzt9q1jj/image.jpeg",
    language: "sv",
    series: "Slussen del 6 av 6",
    intro: [
      "\"Det är en historiskt stor satsning.\"",
      "Så beskrev infrastrukturminister Andreas Carlson regeringens besked att avsätta en miljard kronor för att påbörja planeringen av Östlig förbindelse.",
      "Men en stor satsning är inte automatiskt en bra investering. Det är samma tankefel som präglat diskussionen om Slussen: vi mäter hur mycket pengar som spenderas men inte vilket värde vi faktiskt får för dem.",
      "För att bedöma en investering behöver en beställare känna till två saker:",
      "1. Värdet av det som byggs",
      "För en bostad är värdet relativt enkelt att mäta: det är vad en köpare är beredd att betala. För en bussterminal, tunnel eller vägförbindelse är det betydligt svårare. Där behöver nyttan bedömas samhällsekonomiskt, exempelvis genom restidsvinster, ökad kapacitet, minskad sårbarhet och förbättrad tillgänglighet. Det är analyser som bland andra Trafikverket arbetar med.",
      "2. Kostnaden för det som byggs",
      "Den borde vara enklare att fastställa: summan av material, arbetstid och övriga kostnader som projektet faktiskt har krävt.",
      "Relationen mellan värde och kostnad visar om investeringen varit bra eller dålig.",
      "Ett hus kostar två miljoner kronor att bygga och kan säljas för fyra miljoner. Värdet dividerat med kostnaden blir 2. En bra investering.",
      "Samma hus kostar åtta miljoner kronor att bygga men kan fortfarande bara säljas för fyra miljoner. Kvoten blir 0,5. En dålig investering.",
      "Problemet uppstår när vi blandar ihop tre helt olika saker: investeringsvilja, byggkostnad och skapat värde.",
      "Vi beslutar att investera en miljard. Projektet kostar en miljard. Därför påstås det också vara värt en miljard.",
      "Men pengar som spenderas är inte samma sak som värde som skapas.",
    ],
    sections: [
      {
        title: "När fel mått styr produktionen",
        body: [
          "Logiken för tankarna till den sovjetiska spikfabriken. När fabriker premierades utifrån hur många ton spik de producerade blev det rationellt att tillverka stora och tunga spikar trots att marknaden efterfrågade mindre standardspikar.",
          "Fabrikerna nådde sina mål. Samhället fick ändå inte det som behövdes.",
          "Samma mekanism uppstår när offentliga byggprojekt bedöms efter budgetens storlek eller projektets genomförande, snarare än efter relationen mellan samhällsnytta och faktisk kostnad. Vi riskerar att belöna aktivitet i stället för resultat.",
          "Vad behöver då förändras?",
          "Nyttan måste värderas, även när den är abstrakt. Det görs redan genom samhällsekonomiska analyser.",
          "Investeringsbeslutet bör följa av att den förväntade nyttan överstiger kostnaden.",
          "Byggkostnaden måste följas upp mot kalkylen - under hela projektet, inte bara när slutnotan redan ligger på bordet.",
          "Det är framför allt den sista punkten som brister.",
        ],
      },
      {
        title: "Kalkylen finns - men används den?",
        body: [
          "Inför ett stort byggprojekt tar beställaren normalt in konsulter som beräknar mängder, materialkostnader och tidsåtgång.",
          "Ett förenklat, hypotetiskt exempel:",
          "Projektet kräver 1 000 kubikmeter betong. Betongen beräknas kosta 1 500 kronor per kubikmeter, totalt 1,5 miljoner kronor. Därtill läggs 25 procent för bland annat projektering och projektledning samt 10 procent för risk. Den kalkylerade materialkostnaden blir då cirka 2,1 miljoner kronor.",
          "Om normaltiden för att gjuta en kubikmeter är 7,5 arbetstimmar och timkostnaden är 600 kronor, blir den beräknade arbetskostnaden 4,5 miljoner kronor. Eftersom gjutningen bedöms vara komplicerad läggs 50 procent mer tid på kalkylen. Arbetskostnaden blir då 6,75 miljoner kronor.",
          "Den totala budgetposten för betongarbete och material blir cirka 8,8 miljoner kronor.",
          "Sedan börjar produktionen.",
          "När tidredovisningen kommer in visar den att enbart arbetet kostat 20 miljoner kronor - nästan tre gånger den kalkylerade arbetskostnaden.",
          "Den självklara frågan borde vara: Hur gick det till? Vad förklarar avvikelsen? Är tidsåtgången rimlig i förhållande till arbetet som faktiskt utförts?",
          "Men vid arbete på löpande räkning är beställarens möjlighet att invända mot slutkostnaden svagare än många tror.",
        ],
      },
      {
        title: "När löpande räkning blir en blank check",
        body: [
          "I den så kallade Nybropalatsdomen, Svea hovrätts dom den 10 mars 2016 i mål T 10408-14, konstaterade hovrätten att det avtalade priset följde av självkostnadsprincipen. Någon allmän skälighetsprövning av slutpriset enligt 45 § köplagen skulle därför inte göras.",
          "Konsekvensen är principiellt viktig.",
          "Beställaren kan inte utgå från att en kostnad får prövas som oskälig enbart för att den kraftigt överstiger kalkylen eller vad motsvarande arbete normalt borde kosta. Entreprenören kan ha rätt till ersättning enligt den avtalade självkostnadsprincipen, så länge kostnaderna kan redovisas och avtalsvillkoren i övrigt är uppfyllda.",
          "Därmed försvagas en av skattebetalarnas mest grundläggande skyddsmekanismer: möjligheten att fråga om priset står i rimlig proportion till det arbete som utförts.",
          "Samtidigt kan entreprenörens intäkter och vinst öka när fler timmar redovisas. Det skapar ett system där den ekonomiska drivkraften inte självklart är att utföra arbetet så effektivt som möjligt.",
        ],
      },
      {
        title: "Slussen är inte ett undantag",
        body: [
          "Löpande räkning är ibland oundvikligt, särskilt i ramavtal och stora, komplexa projekt där omfattningen inte kan förutses i detalj. Det betyder inte att modellen måste lämnas utan effektiv kontroll.",
          "Det finns heller ingen ensam person eller aktör som kan göras ansvarig för kostnadsökningarna i Slussen eller andra stora infrastrukturprojekt. Slussen, Nya Karolinska och Västlänken är ytterst resultat av de system, avtal och incitament som vi själva har byggt.",
          "Den tekniska utvecklingen ger oss nu helt nya möjligheter att löpande jämföra fakturor, tidsredovisning, kalkyler, producerade mängder och branschnormer. Avvikelser kan identifieras medan arbetet pågår - inte flera år senare, när pengarna redan är förbrukade.",
          "Tekniken finns. Informationen finns. Kalkylerna finns.",
          "Den verkliga frågan är om de stora konsult- och byggbolagen har något intresse av att förändra en modell som erbjuder löpande och förhållandevis riskfri ersättning och om offentliga beställare är beredda att kräva det.",
          "En miljard investerad är inte automatiskt en miljard i värde.",
          "Det är först när vi mäter vad som byggts, vad det borde ha kostat och vilken nytta det faktiskt skapar som vi kan avgöra om en investering var historiskt stor - eller historiskt dyr.",
        ],
      },
    ],
    closing:
      "Detta är den avslutande delen i Veridex serie om Slussen. Informationen i serien bygger på offentliga källor och uppgifter som kommunicerats direkt av Stockholms stad. Läs författarens analys av vad som hade kunnat göras annorlunda i Slussenprojektet här: [länk].",
  },
  {
    slug: "insikt-10-2026-stegra-palning-boden",
    category: "Granskning",
    title: "Ryktet säger tio miljarder för att påla Stegras anläggning utanför Boden",
    excerpt:
      "Uppgiften är obekräftad och behandlas som ett rykte. Men rykten går att pröva, och det behövs bara tre nyckeltal.",
    author: "Veridex Research",
    date: "May 27, 2026",
    readTime: "5 min read",
    imageTone: "signal",
    imageUrl: "https://i.ibb.co/79fXXDf/Stegra-picture.png",
    language: "sv",
    series: "Veridex granskning 2026",
    intro: [
      "Ryktet säger tio miljarder för att påla Stegras anläggning utanför Boden. För de pengarna pålar man hela industriområdet.",
      "Det går ett rykte i branschen om att det kostat tio miljarder kronor att påla Stegras anläggning utanför Boden. Jag räknade på det utifrån en gammal påloffert, Hur mycket pålning för man egentligen för 10 miljarder?",
      "Uppgiften är obekräftad och jag behandlar den som ett rykte. Men rykten går att pröva, och det behövs bara tre nyckeltal.",
    ],
    sections: [
      {
        title: "Tre nyckeltal räcker",
        body: [
          "En påloffert jag hade liggande från 2020 ger ett á-pris på ungefär 1 200 kronor per meter för en borrad 220-påle med bärförmåga 1 700 kilonewton, alltså dimensionerad för tung industri. Pålhatt, skarvhylsa, kapning och betongfyllning ingår (utsättning försummas). Uppräknat till dagens nivå blir det runt 1 500 kronor per meter.",
          "Djupet till berg anges i de offentliga mätpunkter SGU har ett par hundra meter från anläggningen till ungefär femton meter. Jag antar samma djup på platsen.",
          "I normal industribyggnation sätts en påle per sex kvadratmeter platta och en per tre kvadratmeter kantbalk, grovt räknat en påle per fem kvadratmeter. Grundläggningen kostar då 4 500 kronor per kvadratmeter.",
        ],
      },
      {
        title: "Vad får man för tio miljarder?",
        body: [
          "Tio miljarder delat med 4 500 blir 2 220 000 kvadratmeter. Alltså 222 hektar pålad platta.",
          "Teslas Gigafactory i Nevada har en byggnadsyta på knappt 18 hektar. För 10 miljarder hade man kunnat påla 13 sådana.",
          "Vad pålas i verkligheten? Utifrån bilder av anläggningen bedömer jag den pålade ytan till omkring 300 000 kvadratmeter, drygt 12% av fastighetens yta. Det är elva procent av området. Kostnaden blir enligt räkningen ovan cirka 1,35 miljarder.",
          "Siffrorna avviker givetvis från verkligheten, men åt båda hållen. Under betongplattan sätts glesare och klenare pålar än jag räknat med. Under fundament, balkar och tunga aggregat sätts fler och grövre.",
        ],
      },
      {
        title: "Om ryktet stämmer är pålningen bara tio till tjugo procent",
        body: [
          "Jag har då inte räknat med markförstärkning, arbetsvägar, vinterkostnader, projektering, projektledning eller etablering. Lägg till allt det generöst, hypotetiskt att det kostat lika mycket som det faktiska pålningsarbetet och material. Det täcker fortfarande bara 25% av 10 miljarder.",
        ],
      },
      {
        title: "Vad har sannolikt hänt",
        body: [
          "Min bedömning är att man projekterat om under pågående pålning. Var de anläggningstunga delarna ska stå har ändrats, och då blev det för få pålar där lasterna hamnade. Det ger fler pålar, nya pålar, pålar som aldrig kommer till användning, stillestånd för pålmaskiner, nya ritningar och tidsförlängning i hela kedjan.",
          "Pålmaskinen rullade förmodligen inte långsammare än normalt. Kostnadsökningen skedde på kontoret.",
          "Vad fick ledningen och investerarna veta? Antagligen att budgetposter flyttats men att budgeten är oförändrad. Och att det är svårt att påla i kallt klimat. Det senare är för övrigt fel. Tjälen är en fördel, för när marken är frusen sjunker inte pålmaskinen ner.",
        ],
      },
      {
        title: "Två nyckeltal hade räckt för att syna kostnaden",
        body: [
          "Det första: vad har vi i snitt betalat per borrad meter till pålentreprenören? Det är ett á-pris som går att jämföra mot marknaden direkt. Ligger snittet över 1 500 kronor per meter vet man omedelbart att något är fel, och man behöver inte veta vad för att veta att man ska fråga. Snittpriset fångar nämligen allt. Står maskinen stilla stiger kronor per meter. Sätts pålar som sedan aldrig används stiger kronor per meter. Ritas pålplanen om stiger kronor per meter.",
          "Det andra:hur mycket har vi betalat totalt? Den siffran finns i huvudboken och kräver ingen analys alls.",
          "Ställda mot varandra ger de två talen det enda som betyder något: hur stor andel av pengarna som gått till att faktiskt utföra byggmomentet, och hur stor andel som gått till allt annat som fakturerat projektet. Understiger utförandets andel tjugo procent bör varningsklockorna ringa.",
          "Ingen av siffrorna kräver en utredning. Den ena står i ett kontrakt, den andra på ett kontoutdrag..",
          "För att leverera ekonomirapporter i komplexa byggprojekt måste man förklara detaljerna så att ett barn förstår dem. Ett barn hade förstått de två talen ovan. Sannolikt landade de aldrig hos investerarna. Sannolikt har de fortfarande inte rapporterats.",
        ],
      },
    ],
    closing:
      "Siffrorna bygger på en verklig påloffert, SGU:s öppna jorddjupsdata och offentligt tillgängliga uppgifter om anläggningen. Kostnadsuppgiften om tio miljarder är obekräftad och används som räkneexempel, inte som påstående om faktiska förhållanden.",
  },
];

export const getPostBySlug = (slug: string) => posts.find((post) => post.slug === slug);
