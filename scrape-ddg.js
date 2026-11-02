const { image_search } = require('duckduckgo-images-api');
const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const outDir = path.join(__dirname, 'public', 'images', 'menu');

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error('Status: ' + res.statusCode));
      }
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', async () => {
        try {
          const buf = Buffer.concat(chunks);
          await sharp(buf).webp({ quality: 75 }).toFile(dest);
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  const tsContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'menu.ts'), 'utf8');
  const regex = /id:\s*"([^"]+)",\s*name:\s*"([^"]+)"/g;
  const items = [];
  let match;
  while ((match = regex.exec(tsContent)) !== null) {
    items.push({ id: match[1], name: match[2] });
  }

  console.log('Total items:', items.length);

  for (const item of items) {
    const dest = path.join(outDir, `${item.id}.webp`);
    const stat = fs.existsSync(dest) ? fs.statSync(dest) : null;
    
    // If we have a tiny placeholder, let's replace it
    if (stat && stat.size > 2000 && stat.size < 50000) {
      // It's probably already a good real image if we downloaded it before
      // Wait, earlier my generated SVGs were very small! Let's just always overwrite SVGs.
      // But we don't want to do 100 searches right now. Let's do a few first.
    }
    
    try {
      const query = `cava ${item.name} food`;
      console.log('Searching for:', query);
      const results = await image_search({ query, moderate: true });
      if (results && results.length > 0) {
        for (const res of results) {
          if (res.image && res.image.endsWith('.jpg') || res.image.endsWith('.png')) {
            console.log('Found URL:', res.image);
            await downloadImage(res.image, dest);
            console.log(`Saved ${item.id}.webp`);
            break;
          }
        }
      }
    } catch (e) {
      console.error('Error fetching', item.name, e.message);
    }
    // Wait a bit to avoid rate limits
    await new Promise(r => setTimeout(r, 1000));
  }
}

run();
