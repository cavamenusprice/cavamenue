const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36');
  
  await page.goto('https://www.doordash.com/store/cava-new-york-321151/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'doordash-screenshot.png' });
  console.log('Saved doordash screenshot');
  
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => img.src);
  });
  fs.writeFileSync('doordash-images.json', JSON.stringify(images, null, 2));
  
  await browser.close();
})();
