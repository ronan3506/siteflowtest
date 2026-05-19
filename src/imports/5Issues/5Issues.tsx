import { useLanguage } from "../../app/i18n/LanguageContext";
import { useTranslations } from "../../app/i18n/translations";
import svgPaths from "./svg-ihd67s7n2s";

function Heading() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-0 right-[52px] text-[#1b1c1c] text-[28px] top-[18px] tracking-[-0.75px] uppercase whitespace-nowrap">
        <p className="leading-[36px]">{`Site Updates & Issues`}</p>
      </div>
    </div>
  );
}

function Container() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 right-[119px] text-[#564239] text-[16px] top-[6px] whitespace-nowrap">
        <p className="leading-[24px]">{t("thingsNeedingAttentionOnSite")}</p>
      </div>
    </div>
  );
}

function SectionHeroHeader() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Section - Hero Header">
      <Heading />
      <Container />
    </div>
  );
}

function Group2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#ffebee] col-1 h-[28px] ml-0 mt-0 relative rounded-[6px] row-1 w-[104px]" data-name="Rectangle" />
      <p className="col-1 font-['Manrope:Bold',sans-serif] font-bold leading-[normal] ml-[7px] mt-[6px] relative row-1 text-[#c62828] text-[11px] tracking-[0.44px] whitespace-nowrap">{t("wORKSTOPPED")}</p>
    </div>
  );
}

function Container3() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[12px] w-[72px]">
        <p className="leading-[16px]">{t("groundFloor")}</p>
      </div>
    </div>
  );
}

function Container2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Group2 />
      <Container3 />
    </div>
  );
}

function Heading1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[30px]">{t("cOLUMNMISALIGNED")}</p>
      </div>
    </div>
  );
}

function Container5() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#564239] text-[16px] w-full">
        <p className="leading-[26px]">{t("eastColumnIsSlightlyOffPosition")}</p>
      </div>
    </div>
  );
}

function Container4() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container5 />
    </div>
  );
}

function Container1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[30px] right-[25px] top-[25px]" data-name="Container">
      <Container2 />
      <Container4 />
    </div>
  );
}

function Container8() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[15px] left-[18.33px] top-[12.5px] w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 15">
        <g id="Container">
          <path d={svgPaths.p39fa4200} fill="var(--fill-0, #C62828)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#ffebee] relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container8 />
    </div>
  );
}

function Container9() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[10px] tracking-[0.5px] uppercase w-[97.38px]">
        <p className="leading-[15px]">{t("nEEDSATTENTION")}</p>
      </div>
    </div>
  );
}

function Container7() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background />
      <Container9 />
    </div>
  );
}

function Link() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#7a3100] content-stretch flex flex-col items-start px-[20px] py-[12px] relative rounded-[8px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[1px] uppercase w-[78.97px]">
        <p className="leading-[15px]">{t("vIEWDETAILS")}</p>
      </div>
    </div>
  );
}

function Container6() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-[30px] right-[25px] top-[160px]" data-name="Container">
      <Container7 />
      <Link />
    </div>
  );
}

function MainFeaturedCardStructuralIssue() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#fbf9f8] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[225px] relative rounded-[12px] shrink-0 w-full" data-name="Main Featured Card: Structural Issue">
      <div aria-hidden="true" className="absolute border-[#d1cdc7] border-b border-l-6 border-r border-solid border-t inset-0 pointer-events-none rounded-[12px]" />
      <Container1 />
      <Container6 />
    </div>
  );
}

function Container10() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#7a3100] text-[36px] tracking-[-0.9px] w-full">
          <p className="leading-[40px]">4</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#564239] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[12.5px] mb-0">{t("iSSUESNEED")}</p>
        <p className="leading-[12.5px]">{t("aTTENTION")}</p>
      </div>
    </div>
  );
}

function Margin() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#f2f0ed] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#d1cdc7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[21px] relative size-full">
          <Container10 />
          <Margin />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[36px] text-white tracking-[-0.9px] w-full">
        <p className="leading-[40px]">12</p>
      </div>
    </div>
  );
}

function Container13() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fbf9f8] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[12.5px] mb-0">{t("iSSUESFIXEDTHIS")}</p>
        <p className="leading-[12.5px]">{t("wEEK")}</p>
      </div>
    </div>
  );
}

function Margin1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container13 />
    </div>
  );
}

function Background1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#7a3100] col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[21px] relative size-full">
          <Container12 />
          <Margin1 />
        </div>
      </div>
    </div>
  );
}

function StatsGrid() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_115px] relative shrink-0 w-full" data-name="Stats Grid">
      <BackgroundBorder />
      <Background1 />
    </div>
  );
}

function Background2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#fff3e0] content-stretch flex items-start px-[8px] py-[3.5px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#f5a623] text-[10px] tracking-[0.5px] uppercase w-[45.44px]">
        <p className="leading-[15px]">{t("wAITING")}</p>
      </div>
    </div>
  );
}

function Container14() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-4px]" data-name="Container">
      <Background2 />
    </div>
  );
}

function Margin2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Heading2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[28px]">{t("electricalConduitLeak")}</p>
      </div>
    </div>
  );
}

function Heading4Margin() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Heading2 />
      </div>
    </div>
  );
}

function Container15() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#564239] text-[14px] w-full">
          <p className="leading-[20px]">{t("waterLeakNearElectricalPanel")}</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div
      className="bg-[#7a3100] content-stretch flex flex-col items-center justify-center px-[18px] py-[10px] relative rounded-[12px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">{t("vIEWDETAILS")}</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="flex justify-end pt-[14px] relative shrink-0 w-full" data-name="Button:margin">
      <Button />
    </div>
  );
}

function Electrical() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#fdfcfb] overflow-clip relative rounded-[16px] shadow-[0px_0px_4.7px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Electrical">
      <div aria-hidden="true" className="absolute border border-l-4 border-solid border-[#f5a623] border-t-[#e6e1dc] border-r-[#e6e1dc] border-b-[#e6e1dc] inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pl-[24px] pr-[21px] py-[21px] relative size-full">
        <Margin2 />
        <Heading4Margin />
        <Container15 />
        <ButtonMargin />
      </div>
    </div>
  );
}

function Background3() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#fef2f2] content-stretch flex items-start px-[8px] py-[3.5px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#c62828] text-[10px] tracking-[0.5px] uppercase w-[48.89px]">
        <p className="leading-[15px]">{t("cRITICAL")}</p>
      </div>
    </div>
  );
}

function Container16() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-4px]" data-name="Container">
      <Background3 />
    </div>
  );
}

function Margin3() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Heading3() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[28px]">{t("safetyRailingFailure")}</p>
      </div>
    </div>
  );
}

function Heading4Margin1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Heading3 />
      </div>
    </div>
  );
}

function Container17() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#564239] text-[14px] w-full">
          <p className="leading-[20px]">{t("safetyRailingDamaged")}</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div
      className="bg-[#7a3100] content-stretch flex flex-col items-center justify-center px-[18px] py-[10px] relative rounded-[12px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">{t("vIEWDETAILS")}</p>
      </div>
    </div>
  );
}

function ButtonMargin1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="flex justify-end pt-[14px] relative shrink-0 w-full" data-name="Button:margin">
      <Button1 />
    </div>
  );
}

function Safety() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#fdfcfb] overflow-clip relative rounded-[16px] shadow-[0px_0px_4.7px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Safety">
      <div aria-hidden="true" className="absolute border border-l-4 border-solid border-[#c62828] border-t-[#e6e1dc] border-r-[#e6e1dc] border-b-[#e6e1dc] inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pl-[24px] pr-[21px] py-[21px] relative size-full">
        <Margin3 />
        <Heading4Margin1 />
        <Container17 />
        <ButtonMargin1 />
      </div>
    </div>
  );
}

function Background4() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#e4f3ed] content-stretch flex items-start px-[8px] py-[3.5px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#2e7d32] text-[10px] tracking-[0.5px] uppercase w-[24.3px]">
        <p className="leading-[15px]">{t("nEW")}</p>
      </div>
    </div>
  );
}

function Container18() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-4px]" data-name="Container">
      <Background4 />
    </div>
  );
}

function Margin4() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Heading4() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[28px]">{t("glazingImperfection")}</p>
      </div>
    </div>
  );
}

function Heading4Margin2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Heading4 />
      </div>
    </div>
  );
}

function Container19() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#564239] text-[14px] w-full">
          <p className="leading-[20px]">{t("smallCrackFoundInGlassPanel")}</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div
      className="bg-[#7a3100] content-stretch flex flex-col items-center justify-center px-[18px] py-[10px] relative rounded-[12px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">{t("vIEWDETAILS")}</p>
      </div>
    </div>
  );
}

function ButtonMargin2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="flex justify-end pt-[14px] relative shrink-0 w-full" data-name="Button:margin">
      <Button2 />
    </div>
  );
}

function Finishings() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#fdfcfb] overflow-clip relative rounded-[16px] shadow-[0px_0px_4.7px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Finishings">
      <div aria-hidden="true" className="absolute border border-l-4 border-solid border-[#2e7d32] border-t-[#e6e1dc] border-r-[#e6e1dc] border-b-[#e6e1dc] inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pl-[24px] pr-[21px] py-[21px] relative size-full">
        <Margin4 />
        <Heading4Margin2 />
        <Container19 />
        <ButtonMargin2 />
      </div>
    </div>
  );
}

function ListCards() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full" data-name="List Cards">
      <Electrical />
      <Safety />
      <Finishings />
    </div>
  );
}

function IssuesLayout() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Issues Layout">
      <MainFeaturedCardStructuralIssue />
      <StatsGrid />
      <ListCards />
    </div>
  );
}

function Main() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="max-w-[390px] relative shrink-0 w-full z-[1]" data-name="Main">
      <div className="content-stretch flex flex-col gap-[23px] items-start max-w-[inherit] px-[16px] py-[32px] relative size-full">
        <SectionHeroHeader />
        <IssuesLayout />
      </div>
    </div>
  );
}

function Component5SiteProblemsList() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute content-stretch flex flex-col h-[1250px] isolate items-start left-0 min-h-[1250px] pb-[123px] top-[41px] w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="5. Site Problems (List)">
      <Main />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[41px]">
      <Component5SiteProblemsList />
    </div>
  );
}

function MdiExchange() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute left-[308.94px] size-[25.833px] top-[18.58px]" data-name="mdi:exchange">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8333 25.8333">
        <g clipPath="url(#clip0_186_659)" id="mdi:exchange">
          <path d={svgPaths.p2e913cc0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_186_659">
            <rect fill="white" height="25.8333" width="25.8333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LangChangeButton() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute contents left-[299px] top-[16px]" data-name="Lang Change Button">
      <div className="absolute bg-[#7a3100] h-[31px] left-[299px] rounded-[28.615px] top-[16px] w-[71.538px]" />
      <div className="-translate-y-1/2 absolute capitalize flex flex-col font-['Outfit:Regular','Noto_Sans_Kannada:Regular',sans-serif] font-normal justify-center leading-[0] left-[334.77px] text-[15.296px] text-white top-[30.08px] tracking-[-0.1683px] whitespace-nowrap">
        <p className="leading-[1.5]">{t("langPillLabel")}</p>
      </div>
      <MdiExchange />
    </div>
  );
}

function Group() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute contents left-[68px] top-[12px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black',sans-serif] font-black h-[39px] justify-center leading-[0] left-[68px] not-italic text-[26.757px] text-black top-[31.5px] tracking-[1.2664px] uppercase w-[147.837px]">
        <p className="leading-[38.224px]">{t("sTeFLOW")}</p>
      </div>
      <div className="absolute inset-[33.5%_74.63%_35.96%_21.5%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1061 19.5416">
          <path d={svgPaths.pa0b6300} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#fbf9f8] h-[64px] left-0 top-0 w-[390px]" data-name="Header - TopAppBar">
      <LangChangeButton />
      <div className="absolute h-[16px] left-[24px] top-[23px] w-[21px]" data-name="Icon">
        <div className="absolute inset-[-1.56%_-1.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 16.5">
            <path d={svgPaths.p1c170d80} fill="var(--fill-0, #2E2A28)" id="Icon" stroke="var(--stroke-0, #2E2A28)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <Group />
    </div>
  );
}

function Container20() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="h-[15px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 15">
        <g id="Container">
          <path d={svgPaths.p2ce8a370} fill="var(--fill-0, #8D8070)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin5() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8d8070] text-[10px] tracking-[-0.25px] w-[28.13px]">
        <p className="leading-[15px]">{t("hOME")}</p>
      </div>
    </div>
  );
}

function LinkHome() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Link - HOME">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <Container20 />
          <Margin5 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="h-[15.833px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15.8333">
        <g id="Container">
          <path d={svgPaths.p1060bc80} fill="var(--fill-0, #8D8070)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin6() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8d8070] text-[10px] tracking-[-0.25px] w-[51.19px]">
        <p className="leading-[15px]">{t("dECISIONS")}</p>
      </div>
    </div>
  );
}

function LinkDecisions() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Link - DECISIONS">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <Container21 />
          <Margin6 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="h-[15.833px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15.8333">
        <g id="Container">
          <path d={svgPaths.p1de06280} fill="var(--fill-0, #FDFCFB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin7() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#fdfcfb] text-[10px] tracking-[-0.25px] w-[34.17px]">
        <p className="leading-[15px]">{t("iSSUES")}</p>
      </div>
    </div>
  );
}

function LinkIssuesActive() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#7a3100] flex-[1_0_0] h-full min-w-px relative" data-name="Link - ISSUES (ACTIVE)">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <Container22 />
          <Margin7 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="h-[10px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 10">
        <g id="Container">
          <path d={svgPaths.p3db13380} fill="var(--fill-0, #8D8070)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin8() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8d8070] text-[10px] tracking-[-0.25px] w-[42.45px]">
        <p className="leading-[15px]">{t("tIMELINE")}</p>
      </div>
    </div>
  );
}

function LinkTimeline() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Link - TIMELINE">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <Container23 />
          <Margin8 />
        </div>
      </div>
    </div>
  );
}

function BottomNavBar() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#fdfcfb] bottom-[-204.61px] content-stretch flex h-[64.614px] items-start justify-center left-0 pt-px w-[390px]" data-name="BottomNavBar">
      <div aria-hidden="true" className="absolute border-[#e6e1dc] border-solid border-t inset-0 pointer-events-none" />
      <LinkHome />
      <LinkDecisions />
      <LinkIssuesActive />
      <LinkTimeline />
    </div>
  );
}

export default function Component5Issues() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-white relative size-full" data-name="5. Issues">
      <Group1 />
      <HeaderTopAppBar />
      <BottomNavBar />
    </div>
  );
}