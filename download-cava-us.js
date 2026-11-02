const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, 'public', 'images', 'menu');

const toDownload = [
  { id: 'strawberry-steak-salad', url: 'https://cavanutrition.us/images/menu/steak-and-strawberry-tahini-bowl.webp' },
  { id: 'steak-feta-pita', url: 'https://cavanutrition.us/images/menu/steak-n-feta-pita.jpg' }
];

async function run() {
  for (const item of toDownload) {
    const filePath = path.join(outDir, `${item.id}.webp`);
    console.log('Downloading', item.url);
    await new Promise((resolve) => {
      https.get(item.url, (res) => {
        const chunks = [];
        res.on('data', c => chunks.push(c));
        res.on('end', async () => {
          const buf = Buffer.concat(chunks);
          await sharp(buf).webp({ quality: 75 }).toFile(filePath);
          console.log(`Saved ${item.id}.webp`);
          resolve();
        });
      }).on('error', console.error);
    });
  }
}

run();
