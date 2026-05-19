import fs from 'fs';
import path from 'path';

function cleanKeyToEnglish(key) {
  if (key === 'pROJECT') return 'PROJECT';
  if (key === 'sTATUS') return 'STATUS';
  if (key === 'oNTRACK') return 'ON TRACK';
  if (key === 'dUE') return 'DUE';
  if (key === 'aSSIGNED') return 'ASSIGNED';
  if (key === 'pENDINGSIGNOFF') return 'PENDING SIGN-OFF';
  if (key === 'cAPTUREPROOF') return 'CAPTURE PROOF';
  if (key === 'aCLAYOUT') return 'AC LAYOUT';
  if (key === '1WHATCHANGED') return '1. WHAT CHANGED';
  if (key === 'sITEVIEW') return 'SITE VIEW';
  if (key === '2IMPACT') return '2. IMPACT';
  if (key === '3WHATTHISMEANS') return '3. WHAT THIS MEANS';
  if (key === 'hAVEAQUESTION') return 'HAVE A QUESTION?';
  if (key === 'paint') return 'Paint';
  if (key === 'rAJU') return 'RAJU';
  if (key === 'sURAJ') return 'SURAJ';
  if (key === 'kIRAN') return 'KIRAN';
  if (key === 'aRNAB') return 'ARNAB';
  if (key === 'cOLUMN') return 'COLUMN';
  if (key === 'cASTING') return 'CASTING';
  if (key === 'eXPECTEDPLAN') return 'EXPECTED PLAN';
  if (key === 'sCHEMATIC') return 'SCHEMATIC';
  if (key === 'sITESUBMISSION') return 'SITE SUBMISSION';
  if (key === 'qUALITYVERIFICATION') return 'QUALITY VERIFICATION';
  if (key === 'rEINFORCEMENTSPACING') return 'REINFORCEMENT SPACING';
  if (key === 'fORMWORKINTEGRITY') return 'FORMWORK INTEGRITY';
  if (key === 'sLUMPTESTRESULT') return 'SLUMP TEST RESULT';
  if (key === 'aPPROVESUBMISSION') return 'APPROVE SUBMISSION';
  if (key === 'reviewTASK') return 'Review TASK';
  if (key === '3DECISIONSREVIEWDETAIL') return '3. DECISIONS — REVIEW DETAIL';
  if (key === 'aLIGNMENT') return 'ALIGNMENT';
  if (key === 'qUALITY') return 'QUALITY';
  if (key === 'iNCOMPLETE') return 'INCOMPLETE';
  if (key === 'bACKTOHOME') return 'BACK TO HOME';
  if (key === 'vIEWLOGS') return 'VIEW LOGS';
  if (key === 'thingsNeedingAttentionOnSite') return 'Things needing attention on site';
  if (key === 'cOLUMNMISALIGNED') return 'COLUMN MISALIGNED';
  if (key === 'nEEDSATTENTION') return 'NEEDS ATTENTION';
  if (key === 'vIEWDETAILS') return 'VIEW DETAILS';
  if (key === 'iSSUESNEED') return 'ISSUES NEED';
  if (key === 'aTTENTION') return 'ATTENTION';
  if (key === 'iSSUESFIXEDTHIS') return 'ISSUES FIXED THIS';
  if (key === 'wEEK') return 'WEEK';
  if (key === 'wAITING') return 'WAITING';
  if (key === 'nEW') return 'NEW';
  if (key === 'uRGENTREVIEW') return 'URGENT REVIEW';
  if (key === 'rEJECTIONREASON') return 'REJECTION REASON';
  if (key === 'rEJECTINGTASK') return 'REJECTING TASK';
  if (key === 'sAFETY') return 'SAFETY';
  if (key === 'vIOLATION') return 'VIOLATION';
  if (key === 'dELAY') return 'DELAY';
  if (key === 'sPECS') return 'SPECS';
  if (key === 'mISMATCH') return 'MISMATCH';
  if (key === 'dETAILEDCOMMENTS') return 'DETAILED COMMENTS';
  if (key === 'cANCELANDRETURN') return 'CANCEL AND RETURN';
  if (key === 'oTHER') return 'OTHER';
  if (key === 'rEASON') return 'REASON';
  if (key === 'tASKID') return 'TASK ID';
  if (key === 'aSSIGNEDTO') return 'ASSIGNED TO';
  if (key === 'aRCHITECT') return 'ARCHITECT';
  if (key === 'cONTRACTOR') return 'CONTRACTOR';
  if (key === 'cLIENT') return 'CLIENT';
  if (key === 'cONTINUE') return 'CONTINUE';
  if (key === 'cOLUMNNOTSTRAIGHT') return 'COLUMN NOT STRAIGHT';
  if (key === 'zONE') return 'ZONE';
  if (key === 'dEVIATION') return 'DEVIATION';
  if (key === 'tHEPROBLEM') return 'THE PROBLEM';
  if (key === 'rEQUIREDACTIONS') return 'REQUIRED ACTIONS';
  if (key === 'gIVEINSTRUCTION') return 'GIVE INSTRUCTION';
  if (key === 'aPPROVEFIX') return 'APPROVE FIX';
  if (key === 'rEQUESTINFO') return 'REQUEST INFO';
  if (key === 'aCTIVENOW') return 'ACTIVE NOW';
  if (key === 'mAINLOBBYSTRUCTURALINTEGRITY') return 'MAIN LOBBY STRUCTURAL INTEGRITY';
  if (key === 'oCT24TODAY') return 'OCT 24 - TODAY';
  if (key === 'cONCRETEPOURED1stFLOOR') return 'CONCRETE POURED - 1st FLOOR';
  if (key === 'cOLUMNNOTALIGNED') return 'COLUMN NOT ALIGNED';
  if (key === 'cOLUMNWORKCOMPLETED1stFLOOR') return 'COLUMN WORK COMPLETED - 1st FLOOR';
  if (key === 'oCT23') return 'OCT 23';
  if (key === 'tODAY') return 'TODAY';
  if (key === 'tHISWEEK') return 'THIS WEEK';
  if (key === 'tHISMONTH') return 'THIS MONTH';
  if (key === 'aLLACTIVITY') return 'ALL ACTIVITY';
  if (key === 'iSSUESONLY') return 'ISSUES ONLY';
  if (key === 'dECISIONSONLY') return 'DECISIONS ONLY';
  if (key === 'rEQUIREDACTION') return 'REQUIRED ACTION';
  if (key === 'aCTIVEISSUES') return 'ACTIVE ISSUES';
  if (key === 'dAYSREMAINING') return 'DAYS REMAINING';

  if (key.match(/^[a-z][A-Z]+$/)) {
    return key.charAt(0).toUpperCase() + key.slice(1);
  }
  
  let result = key.replace(/([A-Z])/g, ' $1');
  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result.replace(/\s+/g, ' ').trim();
}

async function translateText(text, targetLang) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  return json[0].map(s => s[0]).join('');
}

async function run() {
  const missingKeys = JSON.parse(fs.readFileSync('missing_keys.json', 'utf8'));
  const cleanedKeys = {};
  for (const k of Object.keys(missingKeys)) {
    cleanedKeys[k] = cleanKeyToEnglish(k);
  }

  const langCodes = {
    en: 'en',
    hi: 'hi',
    ta: 'ta',
    te: 'te',
    kn: 'kn',
    ml: 'ml',
    bn: 'bn',
    mr: 'mr',
    gu: 'gu',
    pa: 'pa'
  };

  // We read the existing translations.ts file and parse the full JavaScript structure
  // To update it safely, we will rebuild the typescript structure!
  // Wait, let's load all current translations from the file first!
  const transFileContent = fs.readFileSync('src/app/i18n/translations.ts', 'utf8');
  
  const translations = {};
  for (const lang of Object.keys(langCodes)) {
    translations[lang] = {};
    const regex = new RegExp(`${lang}:\\s*\\{([\\s\\S]*?)\\},`);
    const match = transFileContent.match(regex);
    if (match) {
      const lines = match[1].split('\n');
      for (const line of lines) {
        const keyMatch = line.match(/^\s*"?([a-zA-Z0-9_-]+)"?\s*:\s*"([\s\S]*?)",?\s*$/);
        if (keyMatch) {
          translations[lang][keyMatch[1]] = keyMatch[2].replace(/\\"/g, '"');
        }
      }
    }
  }

  console.log(`Re-loaded translations for ${Object.keys(translations).length} languages.`);

  // Now, translate each missing key and populate all languages!
  const keysToTranslate = Object.keys(cleanedKeys);
  console.log(`Translating ${keysToTranslate.length} missing keys...`);

  // Translate in chunks or one by one
  for (const key of keysToTranslate) {
    const englishText = cleanedKeys[key];
    translations['en'][key] = englishText;

    for (const [lang, code] of Object.entries(langCodes)) {
      if (lang === 'en') continue;
      
      // If already has translation for this key, keep it
      if (translations[lang][key]) continue;

      try {
        console.log(`Translating "${englishText}" -> ${lang}...`);
        const translated = await translateText(englishText, code);
        translations[lang][key] = translated.trim();
      } catch (err) {
        console.error(`Failed to translate "${englishText}" to ${lang}:`, err.message);
        translations[lang][key] = englishText;
      }
      await new Promise(r => setTimeout(r, 100)); // Rate limit
    }
  }

  // Re-write translations.ts!
  let tsContent = `import type { LangCode } from "./LanguageContext";\n\nconst t: Record<LangCode, Record<string, string>> = {\n`;
  for (const [lang, map] of Object.entries(translations)) {
    tsContent += `  ${lang}: {\n`;
    for (const [k, v] of Object.entries(map)) {
      tsContent += `    ${JSON.stringify(k)}: ${JSON.stringify(v)},\n`;
    }
    tsContent += `  },\n`;
  }
  tsContent += `};\n\n`;
  tsContent += `export function useTranslations(lang: LangCode) {\n`;
  tsContent += `  return (key: string): string => t[lang]?.[key] ?? t["en"][key] ?? key;\n`;
  tsContent += `}\n\n`;
  tsContent += `export const LANG_LABELS: Record<LangCode, string> = {\n`;
  tsContent += `  en: "English",\n  hi: "हिंदी (Hindi)",\n  ta: "தமிழ் (Tamil)",\n  te: "తెలుగు (Telugu)",\n  kn: "ಕನ್ನಡ (Kannada)",\n  ml: "മലയാളം (Malayalam)",\n  bn: "বাংলা (Bengali)",\n  mr: "मराठी (Marathi)",\n  gu: "ગુજરાતી (Gujarati)",\n  pa: "ਪੰਜਾਬੀ (Punjabi)",\n};\n\n`;
  tsContent += `export const ALL_LANGS: LangCode[] = ["en","hi","ta","te","kn","ml","bn","mr","gu","pa"];\n`;

  fs.writeFileSync('src/app/i18n/translations.ts', tsContent, 'utf8');
  console.log('Successfully updated translations.ts with ALL missing keys!');
}

run().catch(console.error);
