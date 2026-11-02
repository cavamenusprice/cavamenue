const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, 'public', 'images', 'menu');

// All official CAVA CDN image URLs mapped to our menu item IDs
const images = [
  // ── Curated Bowls ──
  { id: 'chicken-rice-bowl', url: 'https://images.ctfassets.net/kugm9fp9ib18/7KHlib5v0ybI407yUqladu/2acb8dd7c994ff4254666f19a6008097/chicken-and-rice_070124_web.webp', alt: 'Chicken and Rice Bowl – CAVA curated bowl with grilled chicken, hummus, and brown rice' },
  { id: 'greek-salad-bowl', url: 'https://images.ctfassets.net/kugm9fp9ib18/4fZM5M7bFRf7IKWdWIKlem/6fd4b92317165bc3722264704c38564e/greek-salad-bowl_20231120_web.webp', alt: 'Greek Salad Bowl – CAVA curated bowl with grilled chicken, feta, and Greek vinaigrette' },
  { id: 'harissa-avocado-bowl', url: 'https://images.ctfassets.net/kugm9fp9ib18/FQPnoDBin4Yc9kOJvQha4/aba2f8a50a58015d4a9bd24691af292d/harissa-avocado-bowl_20231120_web.webp', alt: 'Harissa Avocado Bowl – CAVA curated bowl with harissa honey chicken and fresh avocado' },
  { id: 'falafel-crunch-bowl', url: 'https://images.ctfassets.net/kugm9fp9ib18/45hjOu69zU7S76qG1njlSI/6e6b015bdac554ed33e5f6377d82c30b/falafel-crunch-bowl_20251205_web.webp', alt: 'Falafel Crunch Bowl – CAVA vegetarian bowl with falafel, hummus, and pita crisps' },
  { id: 'spicy-lamb-avocado-bowl', url: 'https://images.ctfassets.net/kugm9fp9ib18/6YD8Peo7kbRrIPkxAOodat/9b20e4397c10223236db7347ee741484/spicy-lamb-avocado_241125_web__1_.webp', alt: 'Spicy Lamb and Avocado Bowl – CAVA curated bowl with spicy lamb meatballs and avocado' },
  { id: 'steak-harissa-bowl', url: 'https://images.ctfassets.net/kugm9fp9ib18/2SSxtaRmek2hAH8liA0JdO/8ecf9a25f074c9b21fb79543e5876953/steak-harissa-bowl_20251205_web__1_.webp', alt: 'Steak and Harissa Bowl – CAVA curated bowl with grilled steak and harissa vinaigrette' },
  { id: 'strawberry-steak-salad', url: 'https://images.ctfassets.net/kugm9fp9ib18/5Sasd55LC21X3lq9LxDDYc/51b827dd44defc94c8d2ee3991467534/GreekGoddessSteak_20260817_web.webp', alt: 'Strawberry Steak Salad – CAVA curated salad bowl with grilled steak and strawberry sesame dressing' },
  { id: 'baharat-braised-beef-and-rice', url: 'https://images.ctfassets.net/kugm9fp9ib18/6rkSKEKvnRfCkYQDuxtG9J/7c30d02bbae8896e81b6361d2dcd69f4/Selector_Images_Baharat_Beef_and_Rice_Bowl_20260519_web.webp', alt: 'Baharat Braised Beef and Rice – CAVA curated bowl with baharat-seasoned braised beef' },
  { id: 'baharat-beef-lemon-tahini', url: 'https://images.ctfassets.net/kugm9fp9ib18/5Hd5V2nbprxJyKr1IPOAyU/5d6924cd5beb224a5a76655afad8c991/Selector_Images_Baharat_Beef_and_Lemon_Tahini_Bowl_20260519_web.webp', alt: 'Baharat Beef and Lemon Tahini Bowl – CAVA curated bowl with braised beef and lemon herb tahini' },

  // ── Curated Pitas ──
  { id: 'spicy-chicken-avocado-pita', url: 'https://images.ctfassets.net/kugm9fp9ib18/6AgxVpbcf55cimBqlTTEhW/32d759be49f559863a98a003777d310f/Low_Sodium_Spicy_Chicken_Avocado_Pita_20260519_web.webp', alt: 'Spicy Chicken Avocado Pita – CAVA curated pita wrap with harissa honey chicken and avocado' },
  { id: 'steak-feta-pita', url: 'https://images.ctfassets.net/kugm9fp9ib18/5R8kVX4pYo15a9KGgREe0c/fd79cc2b75279ab03d9e7b1d1c973760/pdp-mosaic_SteakPita-1_240429_web.jpg', alt: 'Steak and Feta Pita – CAVA curated pita wrap with grilled steak and Crazy Feta' },
];

function download(url) {
  return new Promise((resolve, reject) => {
    const get = url.startsWith('https') ? https.get : require('http').get;
    get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error('HTTP ' + res.statusCode));
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  console.log(`Downloading ${images.length} official CAVA images from CDN...\n`);
  
  let success = 0;
  let fail = 0;

  for (const img of images) {
    const dest = path.join(outDir, `${img.id}.webp`);
    process.stdout.write(`  ${img.id}... `);
    
    try {
      const buf = await download(img.url);
      
      // Optimize: resize to max 800px wide, compress to webp quality 75
      await sharp(buf)
        .resize(800, null, { withoutEnlargement: true })
        .webp({ quality: 75, effort: 6 })
        .toFile(dest);
      
      const stat = fs.statSync(dest);
      const kb = (stat.size / 1024).toFixed(1);
      console.log(`OK (${kb} KB)`);
      success++;
    } catch (e) {
      console.log(`FAILED: ${e.message}`);
      fail++;
    }
  }

  console.log(`\nDone! ${success} downloaded, ${fail} failed.`);
  
  // Also save alt text mapping as JSON for the codebase to use
  const altMap = {};
  for (const img of images) {
    altMap[img.id] = img.alt;
  }
  fs.writeFileSync(path.join(__dirname, 'src', 'data', 'image-alts.json'), JSON.stringify(altMap, null, 2));
  console.log('Saved SEO alt text mapping to src/data/image-alts.json');
}

run();
