const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.tsx')) {
      files.push(name);
    }
  }
  return files;
}

const files = [
  ...getFiles(path.join(__dirname, 'src/imports')),
  ...getFiles(path.join(__dirname, 'src/app/components'))
];
const stringMap = JSON.parse(fs.readFileSync('string_map.json', 'utf8'));

// Robust helper to find function body opening brace using parenthesis counting
function findFunctionBodyStart(content, startFromIndex) {
  // Find the first '(' after startFromIndex
  const openParenIdx = content.indexOf('(', startFromIndex);
  if (openParenIdx === -1) return -1;
  
  let parenCount = 1;
  let idx = openParenIdx + 1;
  while (parenCount > 0 && idx < content.length) {
    if (content[idx] === '(') parenCount++;
    else if (content[idx] === ')') parenCount--;
    idx++;
  }
  
  if (parenCount !== 0) return -1;
  
  const openBraceIdx = content.indexOf('{', idx);
  return openBraceIdx;
}

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Replace strings
  let replacements = 0;
  let newContent = content.replace(/>([^<>{]+)</g, (m, p1) => {
    let trimmed = p1.trim();
    if (stringMap[trimmed]) {
      replacements++;
      let key = stringMap[trimmed];
      let before = p1.substring(0, p1.indexOf(trimmed));
      let after = p1.substring(p1.indexOf(trimmed) + trimmed.length);
      return `>${before}{t("${key}")}${after}<`;
    }
    return m;
  });

  // 2. Replace hardcoded Kannada language pill
  if (newContent.includes('ಕನ್ನ') && !newContent.includes('{t("langPillLabel")}')) {
    newContent = newContent.replace(/>\s*ಕನ್ನ\s*</g, '>{t("langPillLabel")}<');
    replacements++;
  }

  if (replacements > 0) {
    // Find all functional components: function ComponentName
    const compRegex = /\bfunction\s+([A-Z][a-zA-Z0-9_]*)\b/g;
    let match;
    let newMatches = [];
    
    while ((match = compRegex.exec(newContent)) !== null) {
      const funcName = match[1];
      const startFrom = match.index + match[0].length;
      const braceIdx = findFunctionBodyStart(newContent, startFrom);
      if (braceIdx !== -1) {
        newMatches.push(braceIdx + 1); // Index right after '{'
      }
    }
    
    // Inject the hook backwards
    for (let i = newMatches.length - 1; i >= 0; i--) {
      let idx = newMatches[i];
      let nextText = newContent.substring(idx, idx + 200);
      if (!nextText.includes('useLanguage')) {
        newContent = newContent.substring(0, idx) + `\n  const { lang } = useLanguage();\n  const t = useTranslations(lang);` + newContent.substring(idx);
      }
    }
    
    // Add imports if missing
    if (!newContent.includes('import { useLanguage }')) {
      let i18nPath = path.relative(path.dirname(file), path.join(__dirname, 'src/app/i18n')).replace(/\\/g, '/');
      newContent = `import { useLanguage } from "${i18nPath}/LanguageContext";\nimport { useTranslations } from "${i18nPath}/translations";\n` + newContent;
    }
    
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file} with ${replacements} replacements.`);
  }
}
