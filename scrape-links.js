const https = require('https');
const url = 'https://cavanutrition.us/cava-menu-with-prices';

https.get(url, (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const linkRegex = /<img[^>]+src=["']([^"']+)["']/g;
    const links = [];
    let match;
    while ((match = linkRegex.exec(data)) !== null) {
      links.push(match[1]);
    }
    console.log("Images on menu page:", [...new Set(links)]);
  });
}).on('error', console.error);
