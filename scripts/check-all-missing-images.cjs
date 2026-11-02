const fs = require('fs');
const path = require('path');

function getFiles(dir, exts) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.astro' && f !== 'dist') {
        res = res.concat(getFiles(full, exts));
      }
    } else if (exts.some(ext => f.endsWith(ext))) {
      res.push(full);
    }
  });
  return res;
}

const srcFiles = getFiles('src', ['.astro', '.ts', '.tsx', '.js', '.mjs', '.cjs']);
const imgRegex = /['"](\/(?:vehicles|images)\/[^'"]+\.(?:webp|jpg|jpeg|png|svg))['"]/g;

const referencedImages = new Map();

srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const imgPath = match[1];
    if (!referencedImages.has(imgPath)) {
      referencedImages.set(imgPath, new Set());
    }
    referencedImages.get(imgPath).add(file);
  }
});

console.log('--- AUDITING ALL REFERENCED IMAGES ACROSS SRC ---');
let missingCount = 0;
for (const [imgPath, files] of referencedImages.entries()) {
  const diskPath = path.join('public', imgPath.replace(/^\//, ''));
  const exists = fs.existsSync(diskPath);
  if (!exists) {
    missingCount++;
    console.log('MISSING [404]:', imgPath);
    files.forEach(f => console.log('   in ' + f));
  }
}
console.log('Total referenced images checked:', referencedImages.size);
console.log('Total missing images:', missingCount);
