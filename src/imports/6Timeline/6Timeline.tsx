import { useLanguage } from "../../app/i18n/LanguageContext";
import { useTranslations } from "../../app/i18n/translations";
import svgPaths from "./svg-u1bbijk32w";
import imgConstructionSite from "./f5c465596267617a9e58f5b0cb4aca345375b5e6.png";

function Heading() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[30px] left-[16px] top-[32px] w-[358px]" data-name="Heading 1">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#1a1a1a] text-[30px] top-[15px] tracking-[-0.75px] uppercase whitespace-nowrap">
        <p className="leading-[30px]">{t("pROJECTTIMELINE")}</p>
      </div>
    </div>
  );
}

function Container() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[18px] left-[16px] top-[70px] w-[358px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#564239] text-[12px] top-[9px] tracking-[0.3px] uppercase whitespace-nowrap">
        <p className="leading-[18px]">{t("dAILYSITEACTIVITYANDPROGRESSLOG")}</p>
      </div>
    </div>
  );
}

function HeaderSection() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[88px] left-0 top-0 w-[390px]" data-name="Header Section">
      <Heading />
      <Container />
    </div>
  );
}

function Heading1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[18px] left-[12px] top-[8px] w-[334px]" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[#564239] text-[12px] top-[9px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[18px]">{t("oCT24TODAY")}</p>
      </div>
    </div>
  );
}

function Background() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#efeded] h-[34px] left-0 rounded-[8px] top-0 w-[358px]" data-name="Background">
      <Heading1 />
    </div>
  );
}

function DateBlockToday() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[34px] left-[16px] top-0 w-[358px]" data-name="Date Block: TODAY">
      <Background />
    </div>
  );
}

function Container1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[15.021px] left-[12.28px] top-[12.49px] w-[15.438px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4375 15.0208">
        <g id="Container">
          <path d={svgPaths.p129c4ba0} fill="var(--fill-0, #615E5B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#e9e8e7] left-[16px] rounded-[6px] size-[40px] top-[16px]" data-name="Background">
      <Container1 />
    </div>
  );
}

function Container3() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[268px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#564239] text-[10px] top-[7.5px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">10:30 AM • COMPLETED WORK</p>
      </div>
    </div>
  );
}

function Heading2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[20px] left-0 top-[19px] w-[268px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#1a1a1a] text-[16px] top-[10px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">{t("cONCRETEPOURED1stFLOOR")}</p>
      </div>
    </div>
  );
}

function Container2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[39px] left-[72px] top-[16px] w-[268px]" data-name="Container">
      <Container3 />
      <Heading2 />
    </div>
  );
}

function EntryCompletedWork() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#fbf9f8] border border-[#ddc1b4] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[74px] left-0 rounded-[12px] top-0 w-[358px]" data-name="Entry: Completed Work">
      <Background1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[15.833px] left-[10.83px] top-[12.08px] w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15.8333">
        <g id="Container">
          <path d={svgPaths.p1de06280} fill="var(--fill-0, #C62828)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[rgba(186,26,26,0.1)] left-[16px] rounded-[6px] size-[40px] top-[16px]" data-name="Overlay">
      <Container4 />
    </div>
  );
}

function Container6() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[265px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#c62828] text-[10px] top-[7.5px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">11:15 AM • ISSUE DETECTED</p>
      </div>
    </div>
  );
}

function Heading3() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[21px] left-0 top-[18px] w-[265px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#1a1a1a] text-[16px] top-[11px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">{t("cOLUMNNOTALIGNED")}</p>
      </div>
    </div>
  );
}

function Container5() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[60px] left-[72px] top-[16px] w-[265px]" data-name="Container">
      <Container6 />
      <Heading3 />
    </div>
  );
}

function EntryIssue() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#fbf9f8] border-[#ddc1b4] border-b border-l-4 border-r border-solid border-t drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[94px] left-0 rounded-[12px] top-[90px] w-[358px]" data-name="Entry: Issue">
      <Overlay />
      <Container5 />
    </div>
  );
}

function Container7() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute left-[11.67px] size-[16.667px] top-[11.67px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p6e98980} fill="var(--fill-0, #615E5B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#e9e8e7] left-[16px] rounded-[6px] size-[40px] top-[16px]" data-name="Background">
      <Container7 />
    </div>
  );
}

function Container9() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[268px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#564239] text-[10px] top-[7.5px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">02:40 PM • ISSUE RESOLVED</p>
      </div>
    </div>
  );
}

function Heading4() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[20px] left-0 top-[19px] w-[268px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#1a1a1a] text-[16px] top-[10px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">{t("aPPROVED")}</p>
      </div>
    </div>
  );
}

function Container8() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[39px] left-[72px] top-[16px] w-[268px]" data-name="Container">
      <Container9 />
      <Heading4 />
    </div>
  );
}

function EntryIssueResolved() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#fbf9f8] border border-[#ddc1b4] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[74px] left-0 rounded-[12px] top-[200px] w-[358px]" data-name="Entry: Issue Resolved">
      <Background2 />
      <Container8 />
    </div>
  );
}

function Container10() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[15.833px] left-[12.5px] top-[12.08px] w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15.8333">
        <g id="Container">
          <path d={svgPaths.p1060bc80} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#e9e8e7] left-[16px] rounded-[6px] size-[40px] top-[16px]" data-name="Background">
      <Container10 />
    </div>
  );
}

function Container12() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[265px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#564239] text-[10px] top-[7.5px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">03:10 PM • DECISION MADE</p>
      </div>
    </div>
  );
}

function Heading5() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[21px] left-0 top-[18px] w-[265px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#1a1a1a] text-[16px] top-[11px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">{t("hVACCHANGEAPPROVED")}</p>
      </div>
    </div>
  );
}

function Container13() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[17px] left-0 top-[42px] w-[265px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#7a3100] text-[11px] top-[8.5px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">₹12,450 • +4 DAYS</p>
      </div>
    </div>
  );
}

function Container11() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[59px] left-[72px] top-[16px] w-[265px]" data-name="Container">
      <Container12 />
      <Heading5 />
      <Container13 />
    </div>
  );
}

function EntryDecisionMade() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#fbf9f8] border-[#7a3100] border-b border-l-4 border-r border-solid border-t drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[93px] left-0 rounded-[12px] top-[290px] w-[358px]" data-name="Entry: Decision Made">
      <Background3 />
      <Container11 />
    </div>
  );
}

function ConstructionSite() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[176px] left-0 top-0 w-[356px]" data-name="Construction site">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgConstructionSite} />
    </div>
  );
}

function Container14() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[15px] left-[16px] top-[16px] w-[324px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#564239] text-[10px] top-[7.5px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">{t("cOLUMNWORKCOMPLETED1stFLOOR")}</p>
      </div>
    </div>
  );
}

function Background4() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#fbf9f8] h-[47px] left-0 top-[176px] w-[356px]" data-name="Background">
      <Container14 />
    </div>
  );
}

function Overlay1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[rgba(122,49,0,0.9)] h-[22px] left-[12px] rounded-[8px] top-[12px] w-[132.25px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[8px] text-[9px] text-white top-[11px] tracking-[0.45px] uppercase whitespace-nowrap">
        <p className="leading-[13.5px]">04:30 PM • SITE UPDATE</p>
      </div>
    </div>
  );
}

function EntrySiteUpdateImage() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#fbf9f8] border border-[#ddc1b4] border-solid h-[225px] left-0 overflow-clip rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[399px] w-[358px]" data-name="Entry: Site Update (Image)">
      <ConstructionSite />
      <Background4 />
      <Overlay1 />
    </div>
  );
}

function Entries() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[624px] left-0 top-0 w-[358px]" data-name="Entries">
      <EntryCompletedWork />
      <EntryIssue />
      <EntryIssueResolved />
      <EntryDecisionMade />
      <EntrySiteUpdateImage />
    </div>
  );
}

function Heading6() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[18px] left-[12px] top-[8px] w-[334px]" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[#564239] text-[12px] top-[9px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[18px]">{t("oCT23")}</p>
      </div>
    </div>
  );
}

function Background5() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#efeded] h-[34px] left-0 rounded-[6px] top-0 w-[358px]" data-name="Background">
      <Heading6 />
    </div>
  );
}

function Container15() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[15.875px] left-[12.5px] top-[12.06px] w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15.875">
        <g id="Container">
          <path d={svgPaths.p387f4100} fill="var(--fill-0, #615E5B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#e9e8e7] left-[16px] rounded-[6px] size-[40px] top-[25.17px]" data-name="Background">
      <Container15 />
    </div>
  );
}

function Container17() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[268px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#564239] text-[10px] top-[7.5px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">04:00 PM • SITE CLEARANCE</p>
      </div>
    </div>
  );
}

function Heading7() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[40px] left-0 top-[19px] w-[268px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#1a1a1a] text-[16px] top-[20px] uppercase w-[268px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`EXCAVATION COMPLETE -  READY FOR CONCRETE`}</p>
      </div>
    </div>
  );
}

function Container16() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[59px] left-[72px] top-[16px] w-[268px]" data-name="Container">
      <Container17 />
      <Heading7 />
    </div>
  );
}

function BackgroundBorderShadow() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#fbf9f8] border border-[#ddc1b4] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[93px] left-0 rounded-[8px] top-[50px] w-[358px]" data-name="Background+Border+Shadow">
      <Background6 />
      <Container16 />
    </div>
  );
}

function DateBlockPrevious() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[143px] left-0 top-[648px] w-[358px]" data-name="Date Block: PREVIOUS">
      <Background5 />
      <BackgroundBorderShadow />
    </div>
  );
}

function Frame() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[791px] left-[16px] top-[58px] w-[358px]">
      <Entries />
      <DateBlockPrevious />
    </div>
  );
}

function MainTimelineContent() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[849px] left-0 top-[202.83px] w-[390px]" data-name="Main - Timeline Content">
      <DateBlockToday />
      <Frame />
    </div>
  );
}

function Button() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#7a3100] h-[33px] left-0 rounded-[6px] top-0 w-[114px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[56.57px] text-[11px] text-center text-white top-[16.5px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">{t("tODAY")}</p>
      </div>
    </div>
  );
}

function Button1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#e9e8e7] h-[33px] left-[122px] rounded-[6px] top-0 w-[114px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[56.07px] text-[#1b1c1c] text-[11px] text-center top-[16.5px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">{t("tHISWEEK")}</p>
      </div>
    </div>
  );
}

function Button2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#e9e8e7] h-[33px] left-[244px] rounded-[6px] top-0 w-[114px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[56.85px] text-[#1b1c1c] text-[11px] text-center top-[16.5px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">{t("tHISMONTH")}</p>
      </div>
    </div>
  );
}

function Container18() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[33px] left-[16px] top-[16px] w-[358px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Button3() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#7a3100] h-[33px] left-0 rounded-[6px] top-0 w-[114px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[56.17px] text-[11px] text-center text-white top-[16.5px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">{t("aLLACTIVITY")}</p>
      </div>
    </div>
  );
}

function Button4() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#e9e8e7] h-[33px] left-[122px] rounded-[6px] top-0 w-[114px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[56.46px] text-[#1b1c1c] text-[11px] text-center top-[16.5px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">{t("iSSUESONLY")}</p>
      </div>
    </div>
  );
}

function Button5() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#e9e8e7] h-[33px] left-[244px] rounded-[6px] top-0 w-[114px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[56.69px] text-[#1b1c1c] text-[11px] text-center top-[16.5px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">{t("dECISIONSONLY")}</p>
      </div>
    </div>
  );
}

function Container19() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[33px] left-[16px] top-[57px] w-[358px]" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function SectionFilterBar() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#fbf9f8] h-[106px] left-0 top-[89.83px] w-[390px]" data-name="Section - Filter Bar">
      <Container18 />
      <Container19 />
    </div>
  );
}

function ProjectTimelineDailyLog() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[1194px] left-0 top-[39px] w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Project Timeline (Daily Log)">
      <HeaderSection />
      <MainTimelineContent />
      <SectionFilterBar />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[39px]">
      <ProjectTimelineDailyLog />
    </div>
  );
}

function Container20() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[18px] left-[40.75px] top-[13px] w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #564239)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[19px] left-[34.69px] top-[31px] w-[28.13px]" data-name="Margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#564239] text-[10px] top-[11.5px] tracking-[-0.25px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">{t("hOME")}</p>
      </div>
    </div>
  );
}

function Link() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[63px] left-0 top-0 w-[97.5px]" data-name="Link">
      <Container20 />
      <Margin />
    </div>
  );
}

function Container21() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[19px] left-[39.75px] top-[12.5px] w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
        <g id="Container">
          <path d={svgPaths.p19ed9400} fill="var(--fill-0, #564239)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[19px] left-[23.16px] top-[31.5px] w-[51.19px]" data-name="Margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#564239] text-[10px] top-[11.5px] tracking-[-0.25px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">{t("dECISIONS")}</p>
      </div>
    </div>
  );
}

function Link1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[63px] left-[97.5px] top-0 w-[97.5px]" data-name="Link">
      <Container21 />
      <Margin1 />
    </div>
  );
}

function Container22() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[19px] left-[37.75px] top-[12.5px] w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
        <g id="Container">
          <path d={svgPaths.p7555480} fill="var(--fill-0, #564239)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[19px] left-[31.67px] top-[31.5px] w-[34.17px]" data-name="Margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#564239] text-[10px] top-[11.5px] tracking-[-0.25px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">{t("iSSUES")}</p>
      </div>
    </div>
  );
}

function Link2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[63px] left-[195px] top-0 w-[97.5px]" data-name="Link">
      <Container22 />
      <Margin2 />
    </div>
  );
}

function Container23() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[12px] left-[37.75px] top-[13.5px] w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
        <g id="Container">
          <path d={svgPaths.p3baffdc0} fill="var(--fill-0, #FDFBF7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[22px] left-[27.52px] top-[25.5px] w-[42.45px]" data-name="Margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#fdfbf7] text-[10px] top-[14.5px] tracking-[-0.25px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">{t("tIMELINE")}</p>
      </div>
    </div>
  );
}

function Link3() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#7a3100] border-[#7a3100] border-solid border-t-2 h-[63px] left-[292.5px] top-0 w-[97.5px]" data-name="Link">
      <Container23 />
      <Margin3 />
    </div>
  );
}

function BottomNavBar() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute bg-[#fbf9f8] border-[#ddc1b4] border-solid border-t h-[64px] left-0 top-[674.17px] w-[390px]" data-name="BottomNavBar">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Group2() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute contents left-[90px] top-[10px]">
      <div className="absolute bg-[#ffebee] h-[23.277px] left-[90px] rounded-[4.988px] top-[10px] w-[82.301px]" data-name="Rectangle" />
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[normal] left-[96.65px] text-[#c62828] text-[9.145px] top-[14.99px] tracking-[0.3658px] whitespace-nowrap">{t("wORKPAUSED")}</p>
    </div>
  );
}

function Frame1() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="absolute h-[738px] left-0 top-[440.83px] w-[390px]">
      <BottomNavBar />
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-[39px]">
      <Group1 />
      <Frame1 />
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

export default function Component6Timeline() {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  return (
    <div className="bg-white relative size-full" data-name="6. timeline">
      <Group3 />
      <HeaderTopAppBar />
    </div>
  );
}