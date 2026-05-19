import { createContext, useContext, useState, ReactNode } from "react";

export type LangCode = "en" | "hi" | "ta" | "te" | "kn" | "ml" | "bn" | "mr" | "gu" | "pa";

interface LanguageContextValue {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  isLangModalOpen: boolean;
  setLangModalOpen: (open: boolean) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  isLangModalOpen: false,
  setLangModalOpen: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangCode>("en");
  const [isLangModalOpen, setLangModalOpen] = useState(false);
  return (
    <LanguageContext.Provider value={{ lang, setLang, isLangModalOpen, setLangModalOpen }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
