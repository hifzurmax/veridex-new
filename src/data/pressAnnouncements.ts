export type PressAnnouncement = {
  slug: string;
  type: "Press release" | "Partnership" | "Contract" | "Company news" | "Milestone";
  title: string;
  excerpt: string;
  date: string;
  imageTone: "signal" | "verify" | "paper" | "ink";
  imageUrl?: string;
  pdfUrl?: string;
  intro: string[];
  sections: {
    title: string;
    body: string[];
  }[];
  contact?: {
    label: string;
    name: string;
    role: string;
    phone: string;
    email?: string;
  };
};

export const pressAnnouncements: PressAnnouncement[] = [
  {
    slug: "malmo-stad-valjer-veridex-for-granskning-av-entreprenadkostnader",
    type: "Contract",
    title: "Malmö stad väljer Veridex för granskning av entreprenadkostnader",
    excerpt:
      "Malmö stad har tecknat avtal med Veridex för en oberoende genomlysning av entreprenadrelaterade kostnader och betalningsflöden.",
    date: "June 11, 2026",
    imageTone: "signal",
    intro: [
      "Malmö stad har tecknat avtal med Veridex för en oberoende genomlysning av entreprenadrelaterade kostnader och betalningsflöden.",
      "Uppdraget är en del av stadens arbete med att stärka transparens, uppföljning och ekonomisk kontroll i bygg- och anläggningsprojekt. Genom en strukturerad granskning av fakturor, avtal och ekonomiska underlag ska Malmö stad säkerställa att kostnader överensstämmer med avtalade villkor och utförda arbeten.",
    ],
    sections: [
      {
        title: "Stärkt transparens och ekonomisk kontroll",
        body: [
          "– Malmö stad hanterar betydande investeringar och entreprenadkostnader varje år. Vi har ett ansvar gentemot Malmöborna att säkerställa att skattebetalarnas pengar används korrekt och i enlighet med de avtal som ingås. Den här genomlysningen är en del av vårt arbete med att stärka transparens, uppföljning och ekonomisk kontroll, säger Jenny Aronsson, sektionschef, Malmö stad.",
          "Kraven på uppföljning och avtalsefterlevnad ökar i takt med att byggprojekt blir mer komplexa och leverantörskedjorna längre. Allt fler organisationer efterfrågar därför datadrivna metoder för att säkerställa att fakturerade kostnader överensstämmer med avtal, utfört arbete och faktisk leverans.",
        ],
      },
      {
        title: "Datadriven granskning av entreprenadkostnader",
        body: [
          "Veridex hjälper offentliga och privata beställare att identifiera avvikelser, stärka kontrollen över projektkostnader och skapa större transparens i entreprenad- och leverantörsrelationer.",
          "– Allt fler beställare vill gå från stickprov till löpande och systematisk kontroll. Med rätt data och analys kan organisationer skapa betydligt bättre insyn i sina projekt och samtidigt minska risken för felaktiga kostnader, säger Allan Fili, VD Veridex.",
          "Avtalet med Malmö stad är ytterligare ett steg i Veridex etablering som en ledande partner inom verifiering, uppföljning och ekonomisk kontroll av bygg- och infrastrukturrelaterade projekt. Veridex hjälper beställare, jurister och projektorganisationer att verifiera entreprenadkostnader, identifiera avvikelser och skapa spårbarhet i stora projekt.",
          "Genom att kombinera AI-baserad analys med branschkompetens inom bygg, anläggning och fastighet kan Veridex analysera datamängder som tidigare varit svåra att överblicka genom traditionella stickprov.",
        ],
      },
      {
        title: "Malmö stad i korthet",
        body: [
          "Malmö stad är en av Sveriges största offentliga beställare med omfattande investeringar inom bygg, fastighet och infrastruktur.",
          "Staden ansvarar för ett stort antal entreprenader och utvecklingsprojekt där betydande offentliga medel investeras varje år. Att Malmö stad valt att genomföra en oberoende genomlysning av entreprenadkostnader tillsammans med Veridex är ett kvitto på det växande behovet av datadriven projektkontroll i stora och komplexa projektmiljöer.",
        ],
      },
    ],
    contact: {
      label: "För mer information",
      name: "Henrik Moricz",
      role: "Analyschef Veridex",
      phone: "079-354 28 35",
    },
  },
];

export const getPressAnnouncementBySlug = (slug: string) =>
  pressAnnouncements.find((announcement) => announcement.slug === slug);
