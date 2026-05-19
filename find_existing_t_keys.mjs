import fs from 'fs';
import path from 'path';

// Read generated translations
const transFileContent = fs.readFileSync('src/app/i18n/translations.ts', 'utf8');

// Parse keys in the "en: {" block
const enBlockMatch = transFileContent.match(/en:\s*\{([\s\S]*?)\},/);
const existingKeys = new Set();
if (enBlockMatch) {
  const lines = enBlockMatch[1].split('\n');
  for (const line of lines) {
    const keyMatch = line.match(/^\s*"?([a-zA-Z0-9_-]+)"?\s*:/);
    if (keyMatch) {
      existingKeys.add(keyMatch[1]);
    }
  }
}

console.log(`Loaded ${existingKeys.size} existing keys from translations.ts.`);

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
  ...getFiles('src/app/components'),
  ...getFiles('src/imports')
];

const missingKeys = new Set();
const keyToOriginalText = {};

// We can map camelCase key back to a user-friendly English string
function keyToEnglish(key) {
  // e.g. "pROJECT" -> "PROJECT", "sTATUS" -> "STATUS"
  // Let's split by capital letters but handle all-caps prefix
  if (key === 'pROJECT') return 'PROJECT';
  if (key === 'sTATUS') return 'STATUS';
  if (key === 'oNTRACK') return 'ON TRACK';
  
  // Decamelize
  let result = key.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  // Match t("key") or t('key')
  const tRegex = /\bt\(\s*["']([^"']+)["']\s*\)/g;
  let match;
  while ((match = tRegex.exec(content)) !== null) {
    const key = match[1];
    if (!existingKeys.has(key)) {
      missingKeys.add(key);
      if (!keyToOriginalText[key]) {
        keyToOriginalText[key] = keyToEnglish(key);
      }
    }
  }
}

console.log(`Found ${missingKeys.size} missing keys:`);
console.log(JSON.stringify(keyToOriginalText, null, 2));

// Save the missing keys to a file for translation
fs.writeFileSync('missing_keys.json', JSON.stringify(keyToOriginalText, null, 2));
