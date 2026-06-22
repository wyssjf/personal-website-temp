const sharp = require('sharp');
const path = require('path');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#ffffff" />
  <rect x="0" y="0" width="1200" height="10" fill="#0891b2" />
  <rect x="0" y="620" width="1200" height="10" fill="#0891b2" />

  <text x="90" y="240" font-family="Georgia, 'Times New Roman', serif" font-size="34" letter-spacing="6" fill="#0891b2" font-weight="700">SYSTEMS &#183; DATA &#183; PUBLIC AFFAIRS</text>

  <text x="86" y="360" font-family="Georgia, 'Times New Roman', serif" font-size="120" fill="#111827" font-weight="700">Jay Wyss</text>

  <text x="90" y="430" font-family="Georgia, 'Times New Roman', serif" font-size="34" fill="#5b6472">Systems, data, and public affairs.</text>

  <circle cx="1080" cy="120" r="60" fill="none" stroke="#0891b2" stroke-width="3" />
  <circle cx="1080" cy="120" r="40" fill="none" stroke="#111827" stroke-width="2" stroke-dasharray="4 8" />
  <circle cx="1080" cy="120" r="6" fill="#0891b2" />

  <text x="90" y="530" font-family="Courier New, monospace" font-size="28" fill="#0891b2" font-weight="700">jaywyss.me</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(__dirname, '..', 'public', 'og-image.png'))
  .then(() => console.log('og-image.png generated'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
