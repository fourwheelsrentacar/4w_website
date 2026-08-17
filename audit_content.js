import fs from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'src/data/blog');
const pressDir = path.join(process.cwd(), 'src/data/press');

let errors = [];
let totalArticles = 0;

if (!fs.existsSync(blogDir)) {
  errors.push('src/data/blog directory does not exist');
} else {
  const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  totalArticles = blogFiles.length;
  console.log(`Auditing ${totalArticles} blog articles...`);

  const slugs = new Set();
  const titles = new Set();

  blogFiles.forEach(file => {
    const content = fs.readFileSync(path.join(blogDir, file), 'utf8');

    // Extract frontmatter title
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    if (!titleMatch) {
      errors.push(`${file}: Missing title in frontmatter`);
    } else {
      if (titles.has(titleMatch[1])) {
        errors.push(`${file}: Duplicate title "${titleMatch[1]}"`);
      }
      titles.add(titleMatch[1]);
    }

    // Extract slug
    const slugMatch = content.match(/slug:\s*"([^"]+)"/);
    if (!slugMatch) {
      errors.push(`${file}: Missing slug in frontmatter`);
    } else {
      if (slugs.has(slugMatch[1])) {
        errors.push(`${file}: Duplicate slug "${slugMatch[1]}"`);
      }
      slugs.add(slugMatch[1]);
    }

    // Check required fields
    if (!content.includes('datePublished:')) errors.push(`${file}: Missing datePublished`);
    if (!content.includes('author:')) errors.push(`${file}: Missing author`);
    if (!content.includes('description:')) errors.push(`${file}: Missing description`);
    if (!content.includes('quickAnswer:')) errors.push(`${file}: Missing quickAnswer`);
  });
}

if (!fs.existsSync(pressDir)) {
  errors.push('src/data/press directory does not exist');
} else {
  const pressFiles = fs.readdirSync(pressDir).filter(f => f.endsWith('.md'));
  console.log(`Auditing ${pressFiles.length} press notices...`);
}

if (errors.length > 0) {
  console.error('\nSEO Content Audit Failed with Errors:');
  errors.forEach(err => console.error(`- ${err}`));
  process.exit(1);
} else {
  console.log(`\nSEO Content Audit Passed Successfully! Checked ${totalArticles} articles.`);
}
