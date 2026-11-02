const puppeteer = require('puppeteer');
const fs = require('fs');

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set a normal user agent
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');

  console.log('Navigating to cava.com/menu...');
  try {
    await page.goto('https://cava.com/menu', { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Scroll to bottom to trigger lazy loading
    console.log('Scrolling to load lazy images...');
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 100;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight - window.innerHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });

    // Wait a bit more for images to render
    await new Promise(r => setTimeout(r, 2000));

    console.log('Extracting image URLs...');
    const images = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.map(img => img.src).filter(src => src.includes('ctfassets'));
    });

    const uniqueImages = [...new Set(images)];
    console.log(`Found ${uniqueImages.length} images.`);
    fs.writeFileSync('cava-images.json', JSON.stringify(uniqueImages, null, 2));

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await browser.close();
  }
}

run();
