const fs = require('fs');

const path = 'src/app/i18n/translations.ts';
let content = fs.readFileSync(path, 'utf8');

const newTranslations = {
  en: {
    next: "Next",
    assignWork: "Assign Work",
    seeUpdates: "See updates",
    fixIssuesFast: "Fix issues fast",
    approveChanges: "Approve changes",
    submitApprovals: "Submit Approvals",
  },
  hi: {
    next: "अगला",
    assignWork: "काम सौंपें",
    seeUpdates: "अपडेट देखें",
    fixIssuesFast: "समस्याओं को तेजी से हल करें",
    approveChanges: "परिवर्तनों को मंज़ूरी दें",
    submitApprovals: "मंज़ूरी सबमिट करें",
  },
  ta: {
    next: "அடுத்து",
    assignWork: "வேலையை ஒதுக்கு",
    seeUpdates: "புதுப்பிப்புகளைக் காண்க",
    fixIssuesFast: "சிக்கல்களை விரைவாக சரிசெய்",
    approveChanges: "மாற்றங்களை அங்கீகரி",
    submitApprovals: "ஒப்புதல்களை சமர்ப்பி",
  },
  te: {
    next: "తదుపరి",
    assignWork: "పనిని కేటాయించండి",
    seeUpdates: "నవీకరణలను చూడండి",
    fixIssuesFast: "సమస్యలను వేగంగా పరిష్కరించండి",
    approveChanges: "మార్పులను ఆమోదించండి",
    submitApprovals: "ఆమోదాలను సమర్పించండి",
  },
  kn: {
    next: "ಮುಂದಿನದು",
    assignWork: "ಕೆಲಸ ನಿಯೋಜಿಸಿ",
    seeUpdates: "ನವೀಕರಣಗಳನ್ನು ನೋಡಿ",
    fixIssuesFast: "ಸಮಸ್ಯೆಗಳನ್ನು ವೇಗವಾಗಿ ಪರಿಹರಿಸಿ",
    approveChanges: "ಬದಲಾವಣೆಗಳನ್ನು ಅನುಮೋದಿಸಿ",
    submitApprovals: "ಅನುಮೋದನೆಗಳನ್ನು ಸಲ್ಲಿಸಿ",
  },
  ml: {
    next: "അടുത്തത്",
    assignWork: "ജോലി ഏൽപ്പിക്കുക",
    seeUpdates: "അപ്‌ഡേറ്റുകൾ കാണുക",
    fixIssuesFast: "പ്രശ്നങ്ങൾ വേഗത്തിൽ പരിഹരിക്കുക",
    approveChanges: "മാറ്റങ്ങൾ അംഗീകരിക്കുക",
    submitApprovals: "അംഗീകാരങ്ങൾ സമർപ്പിക്കുക",
  },
  bn: {
    next: "পরবর্তী",
    assignWork: "কাজ বরাদ্দ করুন",
    seeUpdates: "আপডেট দেখুন",
    fixIssuesFast: "দ্রুত সমস্যা সমাধান করুন",
    approveChanges: "পরিবর্তনগুলি অনুমোদন করুন",
    submitApprovals: "অনুমোদন জমা দিন",
  },
  mr: {
    next: "पुढे",
    assignWork: "काम सोपवा",
    seeUpdates: "अपडेट्स पहा",
    fixIssuesFast: "समस्या लवकर सोडवा",
    approveChanges: "बदल मंजूर करा",
    submitApprovals: "मंजुरी सबमिट करा",
  },
  gu: {
    next: "આગળ",
    assignWork: "કામ સોંપો",
    seeUpdates: "અપડેટ્સ જુઓ",
    fixIssuesFast: "સમસ્યાઓ ઝડપથી ઉકેલો",
    approveChanges: "ફેરફારો મંજૂર કરો",
    submitApprovals: "મંજૂરી સબમિટ કરો",
  },
  pa: {
    next: "ਅੱਗੇ",
    assignWork: "ਕੰਮ ਸੌਂਪੋ",
    seeUpdates: "ਅਪਡੇਟ ਦੇਖੋ",
    fixIssuesFast: "ਸਮੱਸਿਆਵਾਂ ਜਲਦੀ ਹੱਲ ਕਰੋ",
    approveChanges: "ਤਬਦੀਲੀਆਂ ਮਨਜ਼ੂਰ ਕਰੋ",
    submitApprovals: "ਮਨਜ਼ੂਰੀਆਂ ਜਮ੍ਹਾਂ ਕਰੋ",
  }
};

for (const [lang, translations] of Object.entries(newTranslations)) {
  const regex = new RegExp(`(${lang}:\\s*{[\\s\\S]*?)(  },)`, 'g');
  
  let newStrings = '';
  for (const [k, v] of Object.entries(translations)) {
    newStrings += `    ${k}: "${v}",\n`;
  }
  
  content = content.replace(regex, `$1${newStrings}$2`);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Updated translations.ts');
