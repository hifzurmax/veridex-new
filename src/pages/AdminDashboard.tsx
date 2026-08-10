import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useT } from "@/i18n/LanguageProvider";
import { translations as defaultTranslations } from "@/i18n/translations";

type Translations = typeof defaultTranslations;

const STORAGE_KEY = "veridex-translations";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { t, lang } = useT();
  const [activeLang, setActiveLang] = useState<"en" | "sv">("sv");
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setTranslations(JSON.parse(stored));
    } else {
      setTranslations(defaultTranslations);
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("veridex-admin")) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("veridex-admin");
    navigate("/");
  };

  const handleChange = (path: string, value: string) => {
    if (!translations) return;
    const newTrans = { ...translations };
    const keys = path.split(".");
    let current: any = newTrans;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setTranslations(newTrans);
  };

  const handleArrayChange = (path: string, index: number, field: string, value: string) => {
    if (!translations) return;
    const newTrans = { ...translations };
    const keys = path.split(".");
    let current: any = newTrans;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    const arr = current[keys[keys.length - 1]];
    arr[index] = { ...arr[index], [field]: value };
    setTranslations(newTrans);
  };

  const handleStatsChange = (path: string, index: number, field: string, value: string) => {
    if (!translations) return;
    const newTrans = { ...translations };
    const keys = path.split(".");
    let current: any = newTrans;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    const arr = current[keys[keys.length - 1]];
    arr[index] = { ...arr[index], [field]: value };
    setTranslations(newTrans);
  };

  const handleMetaChange = (path: string, index: number, field: number, value: string) => {
    if (!translations) return;
    const newTrans = { ...translations };
    const keys = path.split(".");
    let current: any = newTrans;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    const arr = current[keys[keys.length - 1]];
    arr[index] = [field === 0 ? value : arr[index][0], field === 1 ? value : arr[index][1]];
    setTranslations(newTrans);
  };

  const handleSave = () => {
    if (translations) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(translations));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  const handleReset = () => {
    if (confirm("Reset to default translations?")) {
      localStorage.removeItem(STORAGE_KEY);
      setTranslations(defaultTranslations);
    }
  };

  if (!translations) return null;

  const currentLang = translations[activeLang];
  const sections = [
    { key: "hero", label: "Hero" },
    { key: "platform", label: "Platform" },
    { key: "how", label: "How it Works" },
    { key: "diagram", label: "Diagram" },
    { key: "impact", label: "Impact" },
    { key: "cases", label: "Cases" },
    { key: "trust", label: "Trust" },
    { key: "about", label: "About" },
    { key: "cta", label: "CTA" },
    { key: "footer", label: "Footer" },
    { key: "nav", label: "Navigation" },
  ];

  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-50 bg-white border-b border-line-soft">
        <div className="container-edge flex h-14 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="font-display text-[18px]">Veridex</Link>
            <span className="text-[12px] text-muted-foreground">Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={activeLang}
              onChange={(e) => setActiveLang(e.target.value as "en" | "sv")}
              className="px-3 py-1.5 border border-line-soft text-[13px]"
            >
              <option value="sv">Svenska</option>
              <option value="en">English</option>
            </select>
            <button onClick={handleLogout} className="text-[13px] text-muted-foreground hover:text-ink">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container-edge py-8 flex gap-8">
        <aside className="w-48 shrink-0">
          <nav className="space-y-1">
            {sections.map((s) => (
              <button
                key={s.key}
                onClick={() => setActiveSection(s.key)}
                className={`w-full text-left px-3 py-2 text-[13px] rounded ${
                  activeSection === s.key ? "bg-ink text-paper" : "hover:bg-line-soft"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
          <div className="mt-8 space-y-2">
            <button
              onClick={handleSave}
              className="w-full bg-signal text-white px-3 py-2 text-[13px] font-medium rounded"
            >
              {saved ? "Saved!" : "Save Changes"}
            </button>
            <button
              onClick={handleReset}
              className="w-full border border-line-soft px-3 py-2 text-[13px] rounded hover:bg-line-soft"
            >
              Reset to Default
            </button>
          </div>
        </aside>

        <div className="flex-1 space-y-6">
          {activeSection === "hero" && (
            <>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">Status</label>
                <input
                  value={currentLang.hero.status}
                  onChange={(e) => handleChange(`${activeLang}.hero.status`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px]"
                />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">Title</label>
                <input
                  value={currentLang.hero.title}
                  onChange={(e) => handleChange(`${activeLang}.hero.title`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px]"
                />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">Body</label>
                <textarea
                  value={currentLang.hero.body}
                  onChange={(e) => handleChange(`${activeLang}.hero.body`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px] h-24"
                />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">CTA Button</label>
                <input
                  value={currentLang.hero.cta}
                  onChange={(e) => handleChange(`${activeLang}.hero.cta`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px]"
                />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">Secondary Link</label>
                <input
                  value={currentLang.hero.secondary}
                  onChange={(e) => handleChange(`${activeLang}.hero.secondary`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px]"
                />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-2">Stats</label>
                {currentLang.hero.stats.map((stat: any, i: number) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input
                      value={stat.k}
                      onChange={(e) => handleStatsChange(`${activeLang}.hero.stats`, i, "k", e.target.value)}
                      placeholder="Value"
                      className="w-24 px-3 py-2 border border-line-soft text-[14px]"
                    />
                    <input
                      value={stat.v}
                      onChange={(e) => handleStatsChange(`${activeLang}.hero.stats`, i, "v", e.target.value)}
                      placeholder="Label"
                      className="flex-1 px-3 py-2 border border-line-soft text-[14px]"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {activeSection === "platform" && (
            <>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">Label</label>
                <input
                  value={currentLang.platform.label}
                  onChange={(e) => handleChange(`${activeLang}.platform.label`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px]"
                />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">Title</label>
                <textarea
                  value={currentLang.platform.title}
                  onChange={(e) => handleChange(`${activeLang}.platform.title`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px] h-20"
                />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">Body</label>
                <textarea
                  value={currentLang.platform.body}
                  onChange={(e) => handleChange(`${activeLang}.platform.body`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px] h-32"
                />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-2">Items</label>
                {currentLang.platform.items.map((item: any, i: number) => (
                  <div key={i} className="mb-4 p-3 border border-line-soft">
                    <input
                      value={item.t}
                      onChange={(e) => handleArrayChange(`${activeLang}.platform.items`, i, "t", e.target.value)}
                      placeholder="Title"
                      className="w-full px-3 py-2 border border-line-soft text-[14px] mb-2"
                    />
                    <textarea
                      value={item.d}
                      onChange={(e) => handleArrayChange(`${activeLang}.platform.items`, i, "d", e.target.value)}
                      placeholder="Description"
                      className="w-full px-3 py-2 border border-line-soft text-[14px] h-16"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {activeSection === "how" && (
            <>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">Title</label>
                <input
                  value={currentLang.how.title}
                  onChange={(e) => handleChange(`${activeLang}.how.title`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px]"
                />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">Subtitle</label>
                <input
                  value={currentLang.how.sub}
                  onChange={(e) => handleChange(`${activeLang}.how.sub`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px]"
                />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-2">Steps</label>
                {currentLang.how.steps.map((step: any, i: number) => (
                  <div key={i} className="mb-4 p-3 border border-line-soft">
                    <div className="flex gap-2 mb-2">
                      <input
                        value={step.n}
                        onChange={(e) => handleArrayChange(`${activeLang}.how.steps`, i, "n", e.target.value)}
                        placeholder="Number"
                        className="w-16 px-3 py-2 border border-line-soft text-[14px]"
                      />
                      <input
                        value={step.label}
                        onChange={(e) => handleArrayChange(`${activeLang}.how.steps`, i, "label", e.target.value)}
                        placeholder="Label"
                        className="flex-1 px-3 py-2 border border-line-soft text-[14px]"
                      />
                    </div>
                    <input
                      value={step.title}
                      onChange={(e) => handleArrayChange(`${activeLang}.how.steps`, i, "title", e.target.value)}
                      placeholder="Title"
                      className="w-full px-3 py-2 border border-line-soft text-[14px] mb-2"
                    />
                    <textarea
                      value={step.body}
                      onChange={(e) => handleArrayChange(`${activeLang}.how.steps`, i, "body", e.target.value)}
                      placeholder="Description"
                      className="w-full px-3 py-2 border border-line-soft text-[14px] h-20"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {activeSection === "cta" && (
            <>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">Title</label>
                <input
                  value={currentLang.cta.title}
                  onChange={(e) => handleChange(`${activeLang}.cta.title`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px]"
                />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">Body</label>
                <textarea
                  value={currentLang.cta.body}
                  onChange={(e) => handleChange(`${activeLang}.cta.body`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px] h-24"
                />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">Placeholder</label>
                <input
                  value={currentLang.cta.placeholder}
                  onChange={(e) => handleChange(`${activeLang}.cta.placeholder`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px]"
                />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">Submit Button</label>
                <input
                  value={currentLang.cta.submit}
                  onChange={(e) => handleChange(`${activeLang}.cta.submit`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px]"
                />
              </div>
            </>
          )}

          {activeSection === "footer" && (
            <>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">Tagline</label>
                <input
                  value={currentLang.footer.tag}
                  onChange={(e) => handleChange(`${activeLang}.footer.tag`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px]"
                />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1">Contact Info</label>
                <input
                  value={currentLang.cta.contact}
                  onChange={(e) => handleChange(`${activeLang}.cta.contact`, e.target.value)}
                  className="w-full px-3 py-2 border border-line-soft text-[14px]"
                />
              </div>
            </>
          )}

          {activeSection === "nav" && (
            <>
              {Object.entries(currentLang.nav).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-[12px] text-muted-foreground mb-1 uppercase">{key}</label>
                  <input
                    value={value as string}
                    onChange={(e) => handleChange(`${activeLang}.nav.${key}`, e.target.value)}
                    className="w-full px-3 py-2 border border-line-soft text-[14px]"
                  />
                </div>
              ))}
            </>
          )}

          {(activeSection === "diagram" || activeSection === "impact" || activeSection === "cases" || activeSection === "trust" || activeSection === "about") && (
            <div className="p-4 bg-line-soft text-[14px] text-muted-foreground">
              This section uses similar structure. Contact developer to add more fields.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;