const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');

  // Go to menu page
  console.log('Loading cavanutrition.us/cava-menu-with-prices...');
  await page.goto('https://cavanutrition.us/cava-menu-with-prices', { waitUntil: 'networkidle2', timeout: 30000 });

  // Scroll all the way down to load lazy images
  await page.evaluate(async () => {
    await new Promise(r => {
      let t = 0;
      const i = setInterval(() => {
        window.scrollBy(0, 300);
        t += 300;
        if (t >= document.body.scrollHeight) { clearInterval(i); r(); }
      }, 100);
    });
  });
  await new Promise(r => setTimeout(r, 3000));

  // Extract ALL image sources
  const images = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs.map(img => ({
      src: img.src,
      alt: img.alt,
      dataSrc: img.getAttribute('data-src') || '',
      srcset: img.srcset || ''
    }));
  });

  console.log(`Found ${images.length} images total`);
  
  // Filter menu item images
  const menuImages = images.filter(i => 
    i.src.includes('/images/menu/') || 
    i.src.includes('/_next/image') ||
    i.dataSrc.includes('/images/menu/')
  );
  
  console.log(`\nMenu images: ${menuImages.length}`);
  menuImages.forEach(img => {
    // Extract real URL from next/image wrapper
    let realUrl = img.src;
    if (realUrl.includes('/_next/image?url=')) {
      const params = new URL(realUrl);
      realUrl = decodeURIComponent(params.searchParams.get('url'));
    }
    console.log(`  ${realUrl}  |  alt: ${img.alt}`);
  });

  // Also get ALL images for debugging
  console.log('\n--- ALL images ---');
  images.forEach(img => {
    console.log(`  ${img.src}  |  alt: ${img.alt}`);
  });

  await browser.close();
})();
