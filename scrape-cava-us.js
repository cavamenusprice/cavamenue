const https = require('https');
const fs = require('fs');

const url = 'https://cavanutrition.us/';

https.get(url, (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    // Extract all image URLs
    const regex = /https:\/\/[^"'\s>]+?(?:\.jpg|\.jpeg|\.png|\.webp)/ig;
    let matches = data.match(regex);
    
    // Sometimes URLs might be relative
    const relRegex = /(?:src|data-src|href)=["']([^"'\s>]+?(?:\.jpg|\.jpeg|\.png|\.webp))["']/ig;
    let match;
    const relMatches = [];
    while ((match = relRegex.exec(data)) !== null) {
        relMatches.push(match[1]);
    }
    
    const allUrls = [...new Set([...(matches || []), ...relMatches])];
    console.log('Found', allUrls.length, 'images.');
    console.log(allUrls);
  });
}).on('error', e => console.error(e));
