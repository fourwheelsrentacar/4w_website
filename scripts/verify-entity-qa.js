import fs from 'fs';
import path from 'path';

const PROHIBITED_PATTERNS = [
  '4wheels.pk',
  'www.4wheels.pk',
  'https://4wheels.pk',
  'http://4wheels.pk'
];

let errors = [];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Check for prohibited domain in code files (excluding internal docs and qa script)
  if (!filePath.startsWith('docs') && !filePath.startsWith('scripts')) {
    for (const pattern of PROHIBITED_PATTERNS) {
      if (content.includes(pattern)) {
        errors.push(`Prohibited domain pattern "${pattern}" found in ${filePath}`);
      }
    }
  }

  // Check for outdated Facebook URL in all files
  if (content.includes('facebook.com/4wheels' + 'rentacar')) {
    errors.push(`Outdated Facebook URL found in ${filePath}`);
  }
}

function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (file === 'node_modules' || file === '.git' || file === '.astro' || file === 'dist') {
      continue;
    }

    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      traverseDirectory(fullPath);
    } else {
      const ext = path.extname(file);
      if (['.astro', '.ts', '.js', '.mjs', '.md', '.json', '.html'].includes(ext)) {
        checkFile(fullPath);
      }
    }
  }
}

console.log('--- 4WHEELS Rent a Car Entity & Contact QA Audit ---');
traverseDirectory('.');

if (errors.length > 0) {
  console.error('\n❌ QA Verification FAIL! Found the following issues:');
  errors.forEach(err => console.error(`  - ${err}`));
  process.exit(1);
} else {
  console.log('✅ QA Verification PASS! No prohibited domain or entity mismatches found.');
}
