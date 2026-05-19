import Component3 from "../../../imports/3OnboardingFinalFixed/3OnboardingFinalFixed";
import { useLanguage } from "../../i18n/LanguageContext";

export function Screen3({ onNext }: { onNext: () => void }) {
  const { setLangModalOpen } = useLanguage();
  return (
    <div className="relative size-full">
      <Component3 />
      <button
        onClick={onNext}
        aria-label="Next"
        className="absolute left-[23px] top-[740px] w-[343px] h-[56px] rounded-[12px] bg-transparent cursor-pointer active:scale-[0.98] transition-transform"
      />
      <button
        onClick={() => setLangModalOpen(true)}
        aria-label="Change Language"
        className="absolute right-[24px] top-[16.5px] w-[80px] h-[31px] rounded-[28px] bg-transparent cursor-pointer active:bg-black/10 transition-colors"
      />
    </div>
  );
}