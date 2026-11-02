const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36');
  
  await page.goto('https://cava.com/menu', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'cava-screenshot.png' });
  console.log('Saved screenshot');
  
  await browser.close();
})();
