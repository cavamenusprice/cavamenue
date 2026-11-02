const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesToDownload = [
  { id: 'chicken-rice-bowl', url: 'https://images.ctfassets.net/kugm9fp9ib18/7KHlib5v0ybI407yUqladu/2acb8dd7c994ff4254666f19a6008097/chicken-and-rice_070124_web.webp' },
  { id: 'greek-salad-bowl', url: 'https://images.ctfassets.net/kugm9fp9ib18/4fZM5M7bFRf7IKWdWIKlem/6fd4b92317165bc3722264704c38564e/greek-salad-bowl_20231120_web.webp' },
  { id: 'harissa-avocado-bowl', url: 'https://images.ctfassets.net/kugm9fp9ib18/FQPnoDBin4Yc9kOJvQha4/aba2f8a50a58015d4a9bd24691af292d/harissa-avocado-bowl_20231120_web.webp' },
  { id: 'spicy-chicken-avocado-pita', url: 'https://images.ctfassets.net/kugm9fp9ib18/6AgxVpbcf55cimBqlTTEhW/32d759be49f559863a98a003777d310f/Low_Sodium_Spicy_Chicken_Avocado_Pita_20260519_web.webp' },
  { id: 'spicy-lamb-avocado-bowl', url: 'https://images.ctfassets.net/kugm9fp9ib18/6YD8Peo7kbRrIPkxAOodat/9b20e4397c10223236db7347ee741484/spicy-lamb-avocado_241125_web__1_.webp' },
];

const outDir = path.join(__dirname, 'public', 'images', 'menu');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function downloadAndOptimize() {
  for (const img of imagesToDownload) {
    const destPath = path.join(outDir, `${img.id}.webp`);
    console.log(`Downloading ${img.id}...`);
    
    await new Promise((resolve, reject) => {
      https.get(img.url, (res) => {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', async () => {
          const buffer = Buffer.concat(chunks);
          try {
            // Resize and compress to WebP (optimized for SEO, <50KB typically)
            await sharp(buffer)
              .resize(400, null, { withoutEnlargement: true }) // reasonable size for menu grids
              .webp({ quality: 60, effort: 6 }) 
              .toFile(destPath);
              
            const stat = fs.statSync(destPath);
            console.log(`Saved ${img.id}.webp - ${(stat.size / 1024).toFixed(2)} KB`);
            resolve();
          } catch (e) {
            console.error(`Failed processing ${img.id}:`, e.message);
            resolve();
          }
        });
      }).on('error', (err) => {
        console.error(`Failed downloading ${img.id}:`, err.message);
        resolve();
      });
    });
  }
}

downloadAndOptimize();
