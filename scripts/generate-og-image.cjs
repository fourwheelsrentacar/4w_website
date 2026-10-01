const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join('public', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#090d16"/>
  <rect x="0" y="0" width="1200" height="10" fill="#e0121a"/>
  <rect x="80" y="100" width="180" height="48" rx="8" fill="#e0121a"/>
  <text x="170" y="132" font-family="Arial, sans-serif" font-weight="900" font-size="24" fill="#ffffff" text-anchor="middle">4WHEELS</text>
  <text x="280" y="132" font-family="Arial, sans-serif" font-weight="700" font-size="20" fill="#94a3b8">RENT A CAR LAHORE</text>
  <text x="80" y="240" font-family="Arial, sans-serif" font-weight="900" font-size="52" fill="#ffffff">Self Drive &amp; With Driver Car Rental</text>
  <text x="80" y="310" font-family="Arial, sans-serif" font-weight="700" font-size="32" fill="#e0121a">Serving Lahore Since 2008</text>
  <text x="80" y="380" font-family="Arial, sans-serif" font-weight="400" font-size="24" fill="#cbd5e1">Sedans &#8226; SUVs &#8226; 4x4s &#8226; Coasters &#8226; Airport Transfers &#8226; Monthly</text>
  
  <rect x="80" y="460" width="480" height="80" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="110" y="508" font-family="Arial, sans-serif" font-weight="700" font-size="22" fill="#38bdf8">📍 Johar Town Phase 1, Lahore</text>
  
  <rect x="600" y="460" width="520" height="80" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="630" y="508" font-family="Arial, sans-serif" font-weight="700" font-size="22" fill="#22c55e">📞 0321 6616644 &#8226; www.4wheelspk.com</text>
</svg>
`;

sharp(Buffer.from(svg))
  .jpeg({ quality: 90 })
  .toFile(path.join(dir, 'og-default.jpg'))
  .then(() => {
    console.log('Successfully generated public/images/og-default.jpg');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error generating image:', err);
    process.exit(1);
  });
