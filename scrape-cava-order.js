const puppeteer = require('puppeteer');
const fs = require('fs');

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');

  try {
    await page.goto('https://order.cava.com/', { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Get page content
    const html = await page.content();
    fs.writeFileSync('cava-order.html', html);
    console.log('Saved cava-order.html');

  } catch (err) {
    console.error(err);
  } finally {
    await browser.close();
  }
}

run();
