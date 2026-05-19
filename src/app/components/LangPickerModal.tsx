import { AnimatePresence, motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";
import { ALL_LANGS, LANG_LABELS, useTranslations } from "../i18n/translations";
import type { LangCode } from "../i18n/LanguageContext";

export function LangPickerModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { lang, setLang } = useLanguage();
  const t = useTranslations(lang);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="absolute inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Sheet */}
          <motion.div
            key="sheet"
            className="absolute bottom-0 left-0 right-0 bg-[#fbf9f8] rounded-t-[24px] z-50 pb-[40px] pt-[20px]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            {/* Handle */}
            <div className="w-[40px] h-[4px] bg-[#ddc1b4] rounded-full mx-auto mb-[20px]" />
            <p className="font-['Manrope:Bold',sans-serif] font-bold text-[16px] text-[#1b1c1c] px-[24px] mb-[16px]">
              {t("selectLanguage")}
            </p>
            <div className="flex flex-col gap-[8px] px-[16px] max-h-[420px] overflow-y-auto">
              {ALL_LANGS.map((code: LangCode) => {
                const isSelected = lang === code;
                return (
                  <button
                    key={code}
                    onClick={() => { setLang(code); onClose(); }}
                    className={`h-[52px] w-full rounded-[12px] flex items-center justify-between px-[20px] transition-colors duration-150 ${
                      isSelected ? "bg-[#ffdbcb] border-2 border-[#7a3100]" : "bg-[#f5f3f3] border border-[#ddc1b4]"
                    }`}
                  >
                    <span className={`text-[15px] font-bold ${isSelected ? "text-[#7a3100]" : "text-[#1b1c1c]"}`}>
                      {LANG_LABELS[code]}
                    </span>
                    {isSelected && (
                      <div className="size-[18px] rounded-full bg-[#7a3100] flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 12 9" fill="none" className="w-[10px] h-[7px]">
                          <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
