import fs from 'fs';

// Create camelCase key from string
function toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; 
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  }).replace(/[^a-zA-Z0-9]/g, '');
}

async function translateText(text, targetLang) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  // The response is an array where the first element contains the translated sentences
  return json[0].map(s => s[0]).join('');
}

async function run() {
  const strings = JSON.parse(fs.readFileSync('extracted_strings.json', 'utf8'));
  
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

  const output = {};
  for (const lang of Object.keys(langCodes)) {
    output[lang] = {};
  }

  // Pre-load existing keys to prevent losing them
  const existingTranslations = {
    "langPillLabel": { en: "EN", hi: "हिं", ta: "த", te: "తె", kn: "ಕ", ml: "മ", bn: "বা", mr: "म", gu: "ગ", pa: "ਪੰ" },
    "selectLanguage": { en: "Select your language", hi: "अपनी भाषा चुनें", ta: "உங்கள் மொழியை தேர்ந்தெடுக்கவும்", te: "మీ భాషను ఎంచుకోండి", kn: "ನಿಮ್ಮ ಭಾಷೆ ಆಯ್ಕೆ ಮಾಡಿ", ml: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക", bn: "আপনার ভাষা নির্বাচন করুন", mr: "आपली भाषा निवडा", gu: "તમારી ભાષા પસંદ કરો", pa: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ" },
    "languageSubtitle": { en: "Choose the language you are comfortable with", hi: "वह भाषा चुनें जिसमें आप सहज हों", ta: "நீங்கள் வசதியான மொழியை தேர்ந்தெடுக்கவும்", te: "మీకు సౌకర్యంగా ఉన్న భాషను ఎంచుకోండి", kn: "ನಿಮಗೆ ಆರಾಮದಾಯಕ ಭಾಷೆ ಆಯ್ಕೆ ಮಾಡಿ", ml: "നിങ്ങൾക്ക് സൗകര്യമുള്ള ഭാഷ തിരഞ്ഞെടുക്കുക", bn: "আপনি যে ভাষায় স্বাচ্ছন্দ্য বোধ করেন তা বেছে নিন", mr: "आपल्याला सोयीस्कर वाटणारी भाषा निवडा", gu: "તમને અનુકૂળ ભાષા પસંદ કરો", pa: "ਉਹ ਭਾਸ਼ਾ ਚੁਣੋ ਜਿਸ ਵਿੱਚ ਤੁਸੀਂ ਅਰਾਮਦੇਹ ਹੋ" },
    "moreLanguages": { en: "More languages", hi: "अधिक भाषाएं", ta: "மேலும் மொழிகள்", te: "మరిన్ని భాషలు", kn: "ಹೆಚ್ಚಿನ ಭಾಷೆಗಳು", ml: "കൂടുതൽ ഭാഷകൾ", bn: "আরও ভাষা", mr: "अधिक भाषा", gu: "વધુ ભાષાઓ", pa: "ਹੋਰ ਭਾਸ਼ਾਵਾਂ" },
    "continue": { en: "Continue", hi: "जारी रखें", ta: "தொடர்க", te: "కొనసాగించు", kn: "ಮುಂದುವರೆಯಿರಿ", ml: "തുടರുക", bn: "চালিয়ে যান", mr: "पुढे जा", gu: "આગળ વધો", pa: "ਜਾਰੀ ਰੱਖੋ" },
    "alreadyHaveAccount": { en: "Already have an account?", hi: "पहले से खाता है?", ta: "ஏற்கனவே கணக்கு உள்ளதா?", te: "ఇప్పటికే ఖాతా ఉందా?", kn: "ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?", ml: "ഇതിനകം ഒരു അക്കൗണ്ട് ഉണ്ടോ?", bn: "ইতিমধ্যে একটি অ্যাকাউন্ট আছে?", mr: "आधीच खाते आहे?", gu: "પહેલેથી ખાતું છે?", pa: "ਪਹਿਲਾਂ ਤੋਂ ਖਾਤਾ ਹੈ?" },
    "trackProgress": { en: "Track Progress", hi: "प्रगति ट्रैक करें", ta: "முன்னேற்றத்தை கண்காணிக்கவும்", te: "పురోగతిని ట్రాక్ చేయండి", kn: "ಪ್ರಗತಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ", ml: "ಪುരോഗതി ട്രാക്ക് ചെയ്യുക", bn: "অগ্রগতি ট্র্যাক করুন", mr: "प्रगती ट्रॅक करा", gu: "પ્રગતિ ટ્રૅક કરો", pa: "ਤਰੱਕੀ ਟਰੈਕ ਕਰੋ" },
    "tasksUpdatesApprovals": { en: "Tasks, updates, approvals", hi: "कार्य, अपडेट, अनुमोदन", ta: "பணிகள், புதுப்பிப்புகள், ஒப்புதல்கள்", te: "ပనులు, నవీకరణలు, ఆమోదాలు", kn: "ಕಾರ್ಯಗಳು, ನವೀಕರಣಗಳು, ಅನುಮೋದನೆಗಳು", ml: "ജോലികൾ, അപ്‌ഡേറ്റുകൾ, അനുമതികൾ", bn: "কাজ, আপডেট, অনুমোদন", mr: "कार्ये, अपडेट, मंजुरी", gu: "કાર્યો, અપડેટ, મંજૂરી", pa: "ਕੰਮ, ਅਪਡੇਟ, ਮਨਜ਼ੂਰੀਆਂ" },
    "everythingInOnePlace": { en: "Everything in one place", hi: "सब कुछ एक जगह", ta: "எல்லாம் ஒரே இடத்தில்", te: "అన్నీ ఒకే చోట", kn: "ಎಲ್ಲವೂ ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ", ml: "എല്ലാം ഒരിടത്ത്", bn: "সবকিছু এক জায়গায়", mr: "सर्वकाही एकाच ठिकाणी", gu: "બધું एक જ જગ્યાએ", pa: "ਸਭ ਕੁਝ ਇੱਕ ਥਾਂ" },
    "getStarted": { en: "Get Started", hi: "शुरू करें", ta: "தொடங்குங்கள்", te: "ప్రారంభించండి", kn: "ಪ್ರಾರಂಭಿಸಿ", ml: "ആരംഭിക്കുക", bn: "शुरू করুন", mr: "सुरू करा", gu: "શરૂ કરો", pa: "ਸ਼ੁਰੂ ਕਰੋ" },
    "whoAreYou": { en: "Who are you?", hi: "आप कौन हैं?", ta: "நீங்கள் யார்?", te: "మీరు ఎవరు?", kn: "ನೀವು ಯಾರು?", ml: "നിങ്ങൾ ആരാണ്?", bn: "আপনি কে?", mr: "तुम्ही कोण आहात?", gu: "તમે કોણ છો?", pa: "ਤੁਸੀਂ ਕੌਣ ਹੋ?" },
    "selectYourRole": { en: "Select your role", hi: "अपनी भूमिका चुनें", ta: "உங்கள் பாத்திரத்தை தேர்ந்தெடுக்கவும்", te: "మీ పాత్రను ఎంచుకోండి", kn: "ನಿಮ್ಮ ಪಾತ್ರ ಆಯ್ಕೆ ಮಾಡಿ", ml: "നിങ്ങളുടെ റോൾ തിരഞ്ഞെടുക്കുക", bn: "আপনার ভূমিকা নির্বাচন করুন", mr: "तुमची भूमिका निवडा", gu: "તમારી ભૂમિકા પસંદ કરો", pa: "ਆਪਣੀ ਭੂਮਿਕਾ ਚੁਣੋ" },
    "welcomeBack": { en: "Welcome back.", hi: "वापस स्वागत है।", ta: "மீண்டும் வரவேற்கிறோம்.", te: "తిరిగి స్వాగతం.", kn: "ಮತ್ತೆ ಸ್ವಾಗತ.", ml: "തിരിച്ചു സ്വാగതം.", bn: "ফিরে আসায় स्वागत।", mr: "परत स्वागत आहे.", gu: "પાછા સ્વાગત છે.", pa: "ਵਾਪਸ ਸੁਆਗਤ ਹੈ।" },
    "selectProfileToContinue": { en: "Select your profile to continue", hi: "जारी रखने के लिए प्रोफ़ाइल चुनें", ta: "தொடர்வதற்கு உங்கள் சுயವಿவரத்தை தேர்ந்தெடுக்கவும்", te: "కొనసాగించడానికి మీ ప్రొఫైల్‌ని ఎంచుకోండి", kn: "ಮುಂದುವರೆಯಲು ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಆಯ್ಕೆ ಮಾಡಿ", ml: "തുടരാൻ നിങ്ങളുടെ പ്രൊഫൈൽ തിരഞ്ഞെടുക്കുക", bn: "চালিয়ে যেতে আপনার প্রোফাইল নির্বাচন করুন", mr: "सुरू ठेवण्यासाठी तुमचे प्रोफाइल निवडा", gu: "આગળ વધવા માટે તમારી પ્રોફાઇલ પસંદ કરો", pa: "ਜਾਰੀ ਰੱਖਣ ਲਈ ਆਪਣੀ ਪ੍ਰੋਫਾਈਲ ਚੁਣੋ" },
    "roleArchitect": { en: "ARCHITECT", hi: "वास्तुकार", ta: "கட்டிட வல்லுநர்", te: "ఆర్కిటెక్ట్", kn: "ವಾಸ್ತುಶಿಲ್ಪಿ", ml: "ആർക്കിടെക്റ്റ്", bn: "আর্कीটেক্ট", mr: "वास्तुविशारद", gu: "આર્કિટેક્ટ", pa: "ਆਰਕੀਟੈਕਟ" },
    "roleContractor": { en: "CONTRACTOR", hi: "ठेकेदार", ta: "ஒப்பந்தக்காரர்", te: "కాంట్రాక్టర్", kn: "ಗುತ್ತಿಗೆದಾರ", ml: "കോൺട്രാക്ടർ", bn: "ঠিকাদার", mr: "कंत्राटदार", gu: "કોન્ટ્રાક્ટર", pa: "ਠੇਕੇਦਾਰ" },
    "roleWorker": { en: "WORKER", hi: "कार्यकर्ता", ta: "தொழிலாளர்", te: "కార్మికుడు", kn: "ಕಾರ್ಮಿಕ", ml: "തൊഴിലാളി", bn: "কর্মী", mr: "कामगार", gu: "કામદાર", pa: "ਕਾਮਾ" },
    "roleClient": { en: "CLIENT", hi: "ग्राहक", ta: "வாடிக்கையாளர்", te: "ക്లయింట్", kn: "ಕ್ಲೈಂಟ್", ml: "ക്ലയന്റ്", bn: "ক্লায়েন্ট", mr: "ग्राहक", gu: "ગ્રાહક", pa: "ਗਾਹਕ" },
    "setupProfile": { en: "Set up your profile", hi: "अपनी प्रोफ़ाइल सेट करें", ta: "உங்கள் சுயவிவரத்தை அமைக்கவும்", te: "మీ ప్రొఫైల్ సెటప్ చేయండి", kn: "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಸೆಟಪ್ ಮಾಡಿ", ml: "നിങ്ങളുടെ പ്രൊഫൈൽ സജ്ജമാക്കുക", bn: "আপনার প্রোফাইল সেটআপ করুন", mr: "तुमचे प्रोफाइल सेट करा", gu: "તમારી પ્રોફાઇલ સેટ કરો", pa: "ਆਪਣੀ ਪ੍ਰੋਫਾਈਲ ਸੈੱਟ ਕਰੋ" },
    "addDetails": { en: "Add your details to continue", hi: "जारी रखने के लिए विवरण जोड़ें", ta: "தொடர்வதற்கு விவரங்களை சேர்க்கவும்", te: "కొనసాగించడానికి వివరాలు జోడించండి", kn: "ಮುಂದುವರೆಯಲು ವಿವರಗಳನ್ನು ಸೇರಿಸಿ", ml: "തുടരാൻ വിശദാംശങ്ങൾ ചേർക്കുക", bn: "চালিয়ে যেতে আপনার বিবরণ যোগ করুন", mr: "सुरू ठेवण्यासाठी तपशील जोडा", gu: "આગળ વધવા માટે વિગતો ઉમેરો", pa: "ਜਾਰੀ ਰੱਖਣ ਲਈ ਵੇਰਵੇ ਜੋੜੋ" },
    "addProfilePhoto": { en: "Add profile photo", hi: "प्रोफ़ाइल फ़ोटो जोड़ें", ta: "சுயವಿவர புகைப்படம் சேர்க்கவும்", te: "ప్రொఫైల్ ఫోటో జోడించండి", kn: "ಪ್ರೊಫೈಲ್ ಫೋಟೋ ಸೇರಿಸಿ", ml: "പ്രൊഫൈൽ ഫോട്ടോ ചേർക്കുക", bn: "প্রোফাইল ফোটো যোগ করুন", mr: "प्रोफाइल फोटो जोडा", gu: "પ્રોફાઇલ ફોટો ઉમેરો", pa: "ਪ੍ਰੋਫਾਈਲ ਫੋਟੋ ਜੋੜੋ" },
    "enterName": { en: "Enter your name", hi: "अपना नाम दर्ज करें", ta: "உங்கள் பெயரை உள்ளிடவும்", te: "మీ పేరు నమోదు చేయండి", kn: "ನಿಮ್ಮ ಹೆಸರು ನಮೂದಿಸಿ", ml: "നിങ്ങളുടെ പേര് നൽകുക", bn: "আপনার নাম লিখুন", mr: "तुमचे नाव प्रविष्ट करा", gu: "તમારું નામ દાખલ કરો", pa: "ਆਪਣਾ ਨਾਮ ਦਰਜ ਕਰੋ" },
    "enterMobile": { en: "Enter mobile number", hi: "मोबाइल नंबर दर्ज करें", ta: "மொபைல் எண்ணை உள்ளிடவும்", te: "మొబైల్ నంబర్ నమోదు చేయండి", kn: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ", ml: "മൊബൈൽ നമ്പർ നൽകുക", bn: "মোবাইল নম্বর লিখুন", mr: "मोबाइल नंबर प्रविष्ट करा", gu: "મોબાઇલ નંબર દાખલ કરો", pa: "ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ" },
    "settingUpWorkspace": { en: "Setting up your\nworkspace...", hi: "आपका\nवर्कस्पेस सेट हो रहा है...", ta: "உங்கள் பணியிடம்\nதயாராகிறது...", te: "మీ వర్క్‌స్పేస్\nసెటప్ అవుతోంది...", kn: "ನಿಮ್ಮ ವರ್ಕ್‌ಸ್ಪೇಸ್\nಸೆಟಪ್ ಆಗುತ್ತಿದೆ...", ml: "നിങ്ങളുടെ വർക്ക്‌സ്‌പേസ്\nസജ്ਜമാക്കുന്നു...", bn: "আপনার ওয়ার্কস্পেস\nসেটআপ হচ্ছে...", mr: "तुमचा वर्कस्पेस\nसेट होत आहे...", gu: "તમારું વર્કસ્પેસ\nસેટ થઈ રહ્યું છે...", pa: "ਤੁਹਾਡਾ ਵਰਕਸਪੇਸ\nਸੈੱਟ ਹੋ ਰਿਹਾ ਹੈ..." },
    "thisMoment": { en: "This will take a moment", hi: "इसमें थोड़ा समय लगेगा", ta: "இது சிறிது நேரம் ஆகும்", te: "ఇది కొంత సమయం తీసుకుంటుంది", kn: "ಇದು ಸ್ವಲ್ಪ ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ", ml: "ഇതിന് ഒരു നിമിഷം വേണ്ടിവരും", bn: "এটি একটু সময় নেবে", mr: "यास थोडा वेळ लागेल", gu: "આમાં થોડો સમય લાગશે", pa: "ਇਸ ਵਿੱਚ ਕੁਝ ਸਮਾਂ ਲੱਗੇਗਾ" },
    "next": { "en": "Next", "hi": "अगला", "ta": "அடுத்து", "te": "తదుపరి", "kn": "ಮುಂದಿನದು", "ml": "അടുത്തത്", "bn": "পরবর্তী", "mr": "पुढे", "gu": "આગળ", "pa": "ਅੱਗੇ" },
    "assignWork": { "en": "Assign Work", "hi": "काम सौंपें", "ta": "வேலையை ஒதுக்கு", "te": "పనిని కేటాయించండి", "kn": "ಕೆಲಸ ನಿಯೋಜಿಸಿ", "ml": "ಜೋലി ഏൽപ്പിക്കുക", "bn": "কাজ বরাদ্দ করুন", "mr": "काम सोपवा", "gu": "કામ સોંપો", "pa": "ਕੰਮ ਸੌਂਪੋ" },
    "seeUpdates": { "en": "See updates", "hi": "अपडेट देखें", "ta": "புதுப்பிப்புகளைக் காண்க", "te": "నవీకరణలను చూడండి", "kn": "ನವೀಕರಣಗಳನ್ನು ನೋಡಿ", "ml": "അപ്‌เดേറ്റുകൾ കാണുക", "bn": "আপডেট দেখুন", "mr": "अपडेट्स पहा", "gu": "અપડેટ્સ જુઓ", "pa": "ਅਪਡੇਟ ਦੇਖੋ" },
    "fixIssuesFast": { "en": "Fix issues fast", "hi": "समस्याओं को तेजी से हल करें", "ta": "சிக்கல்களை விரைவாக சரிசெய்", "te": "సమస్యలను వేగంగా పరిష్కరించండి", "kn": "ಸಮಸ್ಯೆಗಳನ್ನು ವೇಗವಾಗಿ ಪರಿಹರಿಸಿ", "ml": "പ്രശ്നങ്ങൾ വേഗത്തിൽ പരിഹരിക്കുക", "bn": "দ্রুত সমস্যা সমাধান করুন", "mr": "समस्या लवकर सोडवा", "gu": "સમસ્યાઓ ઝડપથી ઉકેલો", "pa": "સમੱਸਿਆਵਾਂ ਜਲਦੀ ਹੱਲ ਕਰੋ" },
    "approveChanges": { "en": "Approve changes", "hi": "परिवर्तनों को मंज़ूरी दें", "ta": "மாற்றங்களை அங்கீகரி", "te": "మార్పులను ఆమోదించండి", "kn": "ಬದಲಾವಣೆಗಳನ್ನು ಅನುಮೋದಿಸಿ", "ml": "മാറ്റങ്ങൾ അംഗീകരിക്കുക", "bn": "পরিবর্তনগুলি অনুমোদন করুন", "mr": "बदल मंजूर करा", "gu": "ફેરફારો મંજૂર કરો", "pa": "ਤਬਦੀਲੀਆਂ ਮਨਜ਼ੂਰ ਕਰੋ" },
    "submitApprovals": { "en": "Submit Approvals", "hi": "मंज़ूरी सबमिट करें", "ta": "ஒப்புதல்களை சமர்ப்பி", "te": "ఆమోదాలను సమర్పించండి", "kn": "ಅನುಮೋದನೆಗಳನ್ನು ಸಲ್ಲಿಸಿ", "ml": "അംഗീകಾರങ്ങൾ சமർപ്പിക്കുക", "bn": "অনুমোদন জমা দিন", "mr": "मंजुरी सबमिट करा", "gu": "મંજૂરી સબમિટ કરો", "pa": "ਮਨਜ਼ੂਰੀਆਂ ਜਮ੍ਹਾਂ ਕਰੋ" }
  };

  for (const [key, langMap] of Object.entries(existingTranslations)) {
    for (const [l, v] of Object.entries(langMap)) {
      output[l][key] = v;
    }
  }

  const newStrings = strings.filter(s => {
    const key = toCamelCase(s) || 'str' + Math.random().toString(36).substring(7);
    return !existingTranslations[key];
  }).map(s => s.replace(/\r?\n/g, ' '));

  const stringToKey = {};
  for (const s of strings) {
    let key = toCamelCase(s);
    if (!key) key = 'str' + Buffer.from(s).toString('base64').substring(0, 8);
    let i = 1;
    let baseKey = key;
    while(Object.values(stringToKey).includes(key) && Object.keys(stringToKey).find(k => stringToKey[k] === key) !== s) {
      key = baseKey + i;
      i++;
    }
    stringToKey[s] = key;
    output['en'][key] = s;
  }

  // We group strings into single massive requests using \n
  const delimiter = '\n';
  const chunks = [];
  let currentChunk = [];
  let currentLength = 0;
  for (const s of newStrings) {
    if (currentLength + s.length > 2000) {
      chunks.push(currentChunk);
      currentChunk = [];
      currentLength = 0;
    }
    currentChunk.push(s);
    currentLength += s.length + delimiter.length;
  }
  if (currentChunk.length > 0) chunks.push(currentChunk);

  console.log(`Translating ${newStrings.length} strings in ${chunks.length} chunks...`);

  for (const chunk of chunks) {
    const textToTranslate = chunk.join(delimiter);
    for (const [lang, code] of Object.entries(langCodes)) {
      if (lang === 'en') continue;
      try {
        console.log(`Translating chunk for ${lang} using GTX API...`);
        const translatedText = await translateText(textToTranslate, code);
        const translations = translatedText.split(delimiter);
        
        if (translations.length === chunk.length) {
          for (let i = 0; i < chunk.length; i++) {
            const key = stringToKey[chunk[i]];
            output[lang][key] = translations[i].trim();
          }
        } else {
          console.warn(`Length mismatch for ${lang}: expected ${chunk.length}, got ${translations.length}. Falling back to 1-by-1...`);
          for (let i = 0; i < chunk.length; i++) {
            const key = stringToKey[chunk[i]];
            try {
              output[lang][key] = await translateText(chunk[i], code);
            } catch (err) {
              output[lang][key] = chunk[i];
            }
            await new Promise(r => setTimeout(r, 200));
          }
        }
      } catch (err) {
        console.error(`Failed to translate chunk for ${lang}:`, err.message);
        // Fallback
        for (let i = 0; i < chunk.length; i++) {
          const key = stringToKey[chunk[i]];
          output[lang][key] = chunk[i];
        }
      }
      // slight delay
      await new Promise(r => setTimeout(r, 500));
    }
  }

  fs.writeFileSync('string_map.json', JSON.stringify(stringToKey, null, 2));

  let tsContent = `import type { LangCode } from "./LanguageContext";\n\nconst t: Record<LangCode, Record<string, string>> = {\n`;
  for (const [lang, map] of Object.entries(output)) {
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
  console.log('Successfully generated translations.ts!');
}

run().catch(console.error);
