const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 1. Read menu data using regex
const tsContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'menu.ts'), 'utf8');
const regex = /id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)"/g;
const items = [];
let match;
while ((match = regex.exec(tsContent)) !== null) {
  items.push({ id: match[1], name: match[2], category: match[3] });
}

console.log(`Found ${items.length} items in menu.ts`);

const outDir = path.join(__dirname, 'public', 'images', 'menu');

const categoryColors = {
  "curated-bowl": ["#FDE68A", "#D97706"], // amber
  "curated-pita": ["#FEF08A", "#CA8A04"], // yellow
  "base": ["#A7F3D0", "#059669"],         // emerald
  "main": ["#FECACA", "#DC2626"],         // red/orange
  "dip": ["#E9D5FF", "#7E22CE"],          // purple
  "topping": ["#BAE6FD", "#0284C7"],      // sky
  "dressing": ["#FECDD3", "#E11D48"],     // rose
  "side": ["#99F6E4", "#0D9488"],         // teal
  "dessert": ["#F5D0FE", "#C026D3"],      // fuchsia
  "drink": ["#C7D2FE", "#4F46E5"],        // indigo
  "kids": ["#FBCFE8", "#DB2777"],         // pink
};

async function generate() {
  for (const item of items) {
    const filePath = path.join(outDir, `${item.id}.webp`);
    if (fs.existsSync(filePath)) {
      // Check if it's our previously downloaded real image (larger than 1KB)
      const stat = fs.statSync(filePath);
      if (stat.size > 2000) {
        console.log(`Skipping ${item.id}, already exists and seems to be a real image.`);
        continue;
      }
    }

    const [colorStart, colorEnd] = categoryColors[item.category] || ["#E5E7EB", "#4B5563"];
    
    // Generate a beautiful SVG placeholder
    const svg = `
      <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${colorStart};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${colorEnd};stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#grad)" />
        <circle cx="400" cy="300" r="280" fill="white" fill-opacity="0.2" />
        <text x="400" y="300" font-family="system-ui, sans-serif" font-weight="900" font-size="52" fill="white" text-anchor="middle" dominant-baseline="middle" letter-spacing="1">
          ${item.name.replace(/&/g, '&amp;')}
        </text>
        <text x="400" y="380" font-family="system-ui, sans-serif" font-weight="600" font-size="24" fill="white" text-anchor="middle" fill-opacity="0.8" text-transform="uppercase" letter-spacing="3">
          ${item.category.replace('-', ' ')}
        </text>
      </svg>
    `;

    try {
      await sharp(Buffer.from(svg))
        .webp({ quality: 75 })
        .toFile(filePath);
      console.log(`Generated WebP for ${item.id}`);
    } catch (e) {
      console.error(`Error generating ${item.id}:`, e.message);
    }
  }
}

generate();
