import { useLanguage } from "../../app/i18n/LanguageContext";
import { useTranslations } from "../../app/i18n/translations";
import svgPaths from "./svg-552t1nbyf7";
import imgImage3 from "./dff509de232fd518276040bfb9bc7ab2ebcb2c2b.png";

function Container() {
  return <div className="h-[16.5px] mb-[-8px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.585px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[36px] tracking-[-0.9px] uppercase w-full">
        <p className="leading-[32.4px] mb-0">{t("aCLAYOUT")}</p>
        <p className="leading-[32.4px]">{t("cHANGE")}</p>
      </div>
    </div>
  );
}

function SubPageHeader() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub-page Header">
      <Container />
      <Heading />
    </div>
  );
}

function Heading1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#564239] text-[11px] tracking-[1.65px] uppercase w-full">
        <p className="leading-[16.5px]">{t("1WHATCHANGED")}</p>
      </div>
    </div>
  );
}

function Container2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[10px] tracking-[1px] uppercase w-[57.13px]">
        <p className="leading-[15px]">{t("sITEVIEW")}</p>
      </div>
    </div>
  );
}

function Background2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="aspect-video content-stretch flex items-center justify-center py-[84.19px] relative rounded-[12px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(209, 213, 219) 0%, rgb(209, 213, 219) 100%)" }} data-name="Background">
      <Container2 />
    </div>
  );
}

function Container4() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[18px] w-full">
        <p className="leading-[22.5px] mb-0">{t("aCLayoutAdjustedToAvoidBeam")}</p>
        <p className="leading-[22.5px]">{t("conflict")}</p>
      </div>
    </div>
  );
}

function Container5() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#564239] text-[14px] w-full">
        <p className="leading-[20px] mb-0">{t("aCLayoutMovedToAvoidHittingAStructuralBeam")}</p>
        <p className="leading-[20px]">{t("onSite")}</p>
      </div>
    </div>
  );
}

function Container3() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Background1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#efeded] drop-shadow-[0px_1px_4px_rgba(0,0,0,0.25)] relative rounded-[18px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Background2 />
        <Container3 />
        <div className="absolute h-[184px] left-[16px] rounded-[12px] top-[15.72px] w-[326px]" data-name="image 3">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage3} />
        </div>
      </div>
    </div>
  );
}

function Section1WhatChanged() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - 1. WHAT CHANGED">
      <Heading1 />
      <Background1 />
    </div>
  );
}

function Heading2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#564239] text-[11px] tracking-[1.65px] uppercase w-full">
        <p className="leading-[16.5px]">{t("2IMPACT")}</p>
      </div>
    </div>
  );
}

function Container6() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[18px] tracking-[-0.45px] uppercase w-[180.771px]">
          <p className="leading-[28px]">COST : ₹12,450 MORE</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-white relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[25px] pt-[24px] px-[24px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[18px] tracking-[-0.45px] uppercase w-[169.818px]">
        <p className="leading-[28px]">TIME : 4 DAYS DELAY</p>
      </div>
    </div>
  );
}

function Background3() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[24px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Border() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start p-px relative rounded-[12px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <BackgroundHorizontalBorder />
      <Background3 />
    </div>
  );
}

function Section2Impact() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[20px] shrink-0 w-full" data-name="Section - 2. IMPACT">
      <Heading2 />
      <Border />
    </div>
  );
}

function Heading3() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#564239] text-[11px] tracking-[1.65px] uppercase w-full">
        <p className="leading-[16.5px]">{t("3WHATTHISMEANS")}</p>
      </div>
    </div>
  );
}

function Container9() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="h-[15px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15">
        <g id="Container">
          <path d={svgPaths.p363b7770} fill="var(--fill-0, #1B1C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[14px] w-[130.03px]">
        <p className="leading-[20px] font-bold">{t("workShiftsSlightly")}</p>
      </div>
    </div>
  );
}

function Background4() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#efeded] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
        <g id="Container">
          <path d={svgPaths.p3f084d00} fill="var(--fill-0, #1B1C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[14px] w-[170.25px]">
        <p className="leading-[20px] font-bold">{t("projectDelayedBy4Days")}</p>
      </div>
    </div>
  );
}

function Background5() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#efeded] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Container11 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.p2e828280} fill="var(--fill-0, #1B1C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[14px] w-[106.7px]">
        <p className="leading-[20px] font-bold">{t("safeToProceed")}</p>
      </div>
    </div>
  );
}

function Background6() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#efeded] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Background4 />
      <Background5 />
      <Background6 />
    </div>
  );
}

function Section3WhatThisMeans() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - 3. WHAT THIS MEANS">
      <Heading3 />
      <Container8 />
    </div>
  );
}

function Heading4() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[11px] tracking-[1.1px] uppercase w-full">
          <p className="leading-[16.5px]">{t("hAVEAQUESTION")}</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[20px]">{t("askAQuestion1")}</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-white min-h-[100px] relative rounded-[12px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pb-[63px] pt-[17px] px-[17px] relative size-full">
          <Container16 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container17() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="h-[15.833px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15.8333">
        <g id="Container">
          <path d={svgPaths.p23c62d00} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bottom-[16px] content-stretch flex flex-col items-center justify-center right-[16px]" data-name="Button">
      <Container17 />
    </div>
  );
}

function Container15() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Textarea />
        <Button />
      </div>
    </div>
  );
}

function SectionHaveAQuestion() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#efeded] relative rounded-[12px] shrink-0 w-full" data-name="Section - HAVE A QUESTION">
      <div aria-hidden="true" className="absolute border-[#7a3100] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[28px] pr-[24px] py-[24px] relative size-full">
        <Heading4 />
        <Container15 />
      </div>
    </div>
  );
}

function Container1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="content-stretch flex flex-col gap-[47px] items-start relative shrink-0 w-full" data-name="Container">
      <Section1WhatChanged />
      <Section2Impact />
      <Section3WhatThisMeans />
      <SectionHaveAQuestion />
    </div>
  );
}

function Main() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Main">
      <div className="content-stretch flex flex-col gap-[31px] items-start pb-[24px] pt-[64px] px-[16px] relative size-full">
        <SubPageHeader />
        <Container1 />
      </div>
    </div>
  );
}

function Button1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#7a3100] flex-[1_0_0] h-[56px] min-w-px relative rounded-[8px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[20.25px] pt-[18.75px] relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white tracking-[1.1px] uppercase w-[58.58px]">
          <p className="leading-[16.5px]">{t("aPPROVE")}</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#e9e8e7] flex-[1_0_0] h-[56px] min-w-px relative rounded-[8px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[20.25px] pt-[18.75px] relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[11px] text-black text-center tracking-[1.1px] uppercase w-[109.56px]">
          <p className="leading-[16.5px]">{t("aSKFORCHANGE")}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-white h-[137px] max-w-[440px] relative shrink-0 w-full z-[1]" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start justify-center max-w-[inherit] pb-[16px] pt-[17px] px-[16px] relative size-full">
          <Button1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col isolate items-start max-w-[440px] min-h-[1516px] pb-[95px] relative shrink-0 w-full" data-name="Background">
      <Main />
      <BackgroundHorizontalBorder1 />
    </div>
  );
}

function Component3ReviewChangeDetail() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute content-stretch flex flex-col h-[1496px] items-start left-0 top-0 w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(249, 250, 251) 0%, rgb(249, 250, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="3. Review Change (Detail)">
      <Background />
    </div>
  );
}

function Container19() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="h-[15px] relative shrink-0 w-[9.09px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.09005 15">
        <g id="Container">
          <path d={svgPaths.p2ca96600} fill="var(--fill-0, #7A3100)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Container19 />
    </div>
  );
}

function Container18() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-[16px] top-1/2 w-[374px]" data-name="Container">
      <Button3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[56px] text-[#7a3100] text-[16px] top-[20px] tracking-[0.8px] uppercase whitespace-nowrap">
        <p className="leading-[24px] whitespace-pre">{`Review Decision  `}</p>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="-translate-x-1/2 absolute bg-[#f9fafb] h-[64px] left-1/2 top-0 w-[390px]" data-name="Header - TopAppBar">
      <Container18 />
    </div>
  );
}

function Group() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute contents left-0 top-0">
      <Component3ReviewChangeDetail />
      <HeaderTopAppBar />
    </div>
  );
}

export default function Component3ReveiwDex() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-white relative size-full" data-name="3. reveiw dex">
      <Group />
    </div>
  );
}