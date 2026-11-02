const https = require('https');
const fs = require('fs');

const url = 'https://order.cava.com/';

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const regex = /https:\/\/[^"'\s>]+\.(?:jpg|jpeg|png|webp)/g;
        const matches = data.match(regex);
        if (matches) {
            console.log(JSON.stringify([...new Set(matches)], null, 2));
        } else {
            console.log("No images found.");
        }
    });
}).on('error', (err) => {
    console.error("Error:", err.message);
});
