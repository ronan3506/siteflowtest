import fs from 'fs';
import path from 'path';

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

const files = getFiles('src');
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('t(')) {
    // Check if `t` is defined inside the file
    const isDefined = content.includes('const t =') || 
                      content.includes('const { t }') || 
                      content.includes('\n  const t ') || 
                      content.includes('function(t)') || 
                      content.includes('(t: ') ||
                      content.includes('(t,');
    
    if (!isDefined) {
      console.log(`CRITICAL: ${file} uses "t" but it is NOT defined!`);
    }
  }
}
