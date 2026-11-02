const https = require('https');

function fetchPage(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

async function scrapeAll() {
  const pages = [
    'https://cavanutrition.us/',
    'https://cavanutrition.us/cava-menu-with-prices',
    'https://cavanutrition.us/allergen-menu',
    'https://cavanutrition.us/gluten-free-menu'
  ];
  
  const allImages = new Set();
  
  for (const p of pages) {
    const data = await fetchPage(p);
    // Find next/image or standard img
    const linkRegex = /<img[^>]+src=["']([^"']+)["']/g;
    let match;
    while ((match = linkRegex.exec(data)) !== null) {
      let url = match[1].replace(/&amp;/g, '&');
      // If it's a next/image URL, extract the actual path
      if (url.startsWith('/_next/image?url=')) {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        const innerUrl = urlParams.get('url');
        if (innerUrl) url = innerUrl;
      }
      allImages.add(url);
    }
  }
  
  console.log([...allImages].filter(u => u.includes('/menu/')));
}

scrapeAll();
