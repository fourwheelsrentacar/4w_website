import fs from 'fs';
import path from 'path';

const PROHIBITED_DOMAINS = [
  '4wheels.pk',
  'www.4wheels.pk',
  '4wheelsrental.pk'
];

let errors = [];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Check 1: Outdated Facebook URL in all files
  if (content.includes('facebook.com/4wheels' + 'rentacar')) {
    errors.push(`Outdated Facebook URL found in ${filePath}`);
  }

  // Check 2: Strict prohibition of prohibited domains in code files and critical metadata
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    const lineNum = index + 1;
    const lowerLine = line.toLowerCase();

    for (const domain of PROHIBITED_DOMAINS) {
      if (lowerLine.includes(domain)) {
        const isApprovedDoc = filePath.startsWith('docs/') || filePath.startsWith('scripts/');
        const isApprovedClarification = isApprovedDoc ||
                                        filePath === 'src/data/press.ts' ||
                                        filePath === 'src/pages/official.astro';

        // Unapproved code file containing prohibited domain
        if (!isApprovedClarification) {
          errors.push(`Prohibited domain "${domain}" found in unapproved file ${filePath}:${lineNum}`);
        }

        // Active link target check: href="http(s)://4wheels.pk"
        if (lowerLine.includes(`href="http://${domain}`) || lowerLine.includes(`href="https://${domain}`)) {
          errors.push(`Prohibited domain "${domain}" used as active hyperlink in ${filePath}:${lineNum}`);
        }

        // Meta tag check in Astro/HTML code files (e.g. <link rel="canonical" href="...4wheels.pk..."> or og:url)
        if (!isApprovedDoc && (
          (lowerLine.includes('rel="canonical"') && lowerLine.includes(domain)) ||
          (lowerLine.includes('property="og:url"') && lowerLine.includes(domain)) ||
          (lowerLine.includes('"url":') && lowerLine.includes(domain)) ||
          (lowerLine.includes('"@id":') && lowerLine.includes(domain))
        )) {
          errors.push(`Prohibited domain "${domain}" used in identity/meta field in ${filePath}:${lineNum}`);
        }
      }
    }
  });
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
