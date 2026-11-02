const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PRESS_ITEMS = [
  {
    target: 'public/images/press/digital-channels-identity.jpg',
    title: 'OFFICIAL DIGITAL CHANNELS &amp; VERIFICATION',
    subtitle: 'www.4wheelspk.com • Official Customer Booking Channel'
  },
  {
    target: 'public/images/press/brand-verification-notice.jpg',
    title: 'OFFICIAL BRAND VERIFICATION NOTICE',
    subtitle: '4WHEELS Johar Town Lahore • Authoritative Customer Advisory'
  },
  {
    target: 'public/images/press/booking-verification-guide.jpg',
    title: 'HOW TO VERIFY AN OFFICIAL 4WHEELS BOOKING',
    subtitle: 'Secure Booking Guidelines &amp; Official WhatsApp Channels'
  }
];

async function generate() {
  fs.mkdirSync('public/images/press', { recursive: true });
  for (const item of PRESS_ITEMS) {
    const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <rect x="50" y="50" width="1100" height="530" rx="20" fill="#1e293b" stroke="#334155" stroke-width="2"/>
      
      <rect x="90" y="90" width="220" height="34" rx="8" fill="#dc2626"/>
      <text x="200" y="112" font-family="Arial, sans-serif" font-weight="900" font-size="12" fill="#ffffff" text-anchor="middle" letter-spacing="1">OFFICIAL ADVISORY</text>
      
      <text x="90" y="240" font-family="Arial, sans-serif" font-weight="900" font-size="38" fill="#ffffff">${item.title}</text>
      <text x="90" y="300" font-family="Arial, sans-serif" font-weight="600" font-size="22" fill="#94a3b8">${item.subtitle}</text>
      
      <line x1="90" y1="360" x2="1110" y2="360" stroke="#334155" stroke-width="2"/>
      
      <text x="90" y="430" font-family="Arial, sans-serif" font-weight="700" font-size="18" fill="#e2e8f0">4WHEELS Rent a Car Lahore • Johar Town Phase 1</text>
      <text x="90" y="470" font-family="Arial, sans-serif" font-weight="600" font-size="16" fill="#cbd5e1">Official Helpline: 0321 6616644 • https://www.4wheelspk.com</text>
    </svg>
    `;
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 90 })
      .toFile(item.target);
    console.log('Generated press image:', item.target);
  }
}
generate();
