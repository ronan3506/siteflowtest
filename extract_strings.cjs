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
const strings = new Set();

function isCode(str) {
  // Exclude strings containing code symbols
  if (/[(){}[\]=;,:\/\\]/.test(str)) return true;
  if (str.includes('=>')) return true;
  if (str.includes('const ')) return true;
  if (str.includes('import ')) return true;
  if (str.includes('export ')) return true;
  return false;
}

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const regex = />([^<>{]+)</g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    let str = match[1].trim();
    if (str.length > 1 && /[a-zA-Z]/.test(str) && !isCode(str)) {
      strings.add(str);
    }
  }
}

const sortedStrings = Array.from(strings).sort();
fs.writeFileSync('extracted_strings.json', JSON.stringify(sortedStrings, null, 2));
console.log(`Extracted ${sortedStrings.length} strings`);
