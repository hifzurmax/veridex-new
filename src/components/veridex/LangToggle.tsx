import { useT } from "@/i18n/LanguageProvider";

export const LangToggle = () => {
  const { lang, setLang } = useT();
  return (
    <div className="hidden sm:inline-flex items-center font-mono text-[11px] tracking-wider border border-paper/20">
      {(["sv", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={`px-2 py-1 transition-colors ${
            lang === l ? "bg-paper text-ink" : "text-paper/60 hover:text-paper"
          }`}
          aria-pressed={lang === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
