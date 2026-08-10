import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations as defaultTranslations, Lang, Dict } from "./translations";

const STORAGE_KEY = "veridex-translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LanguageContext = createContext<Ctx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "sv";
    const stored = localStorage.getItem("veridex-lang") as Lang | null;
    if (stored === "en" || stored === "sv") return stored;
    return "sv";
  });

  const [translations, setTranslations] = useState<Record<Lang, Dict>>(defaultTranslations);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setTranslations(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to load translations from storage", e);
      }
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("veridex-lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useT = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx;
};
