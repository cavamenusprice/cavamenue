const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public', 'images', 'menu');

const files = fs.readdirSync(outDir);
let deleted = 0;

for (const file of files) {
  if (file.endsWith('.webp')) {
    const filePath = path.join(outDir, file);
    const stat = fs.statSync(filePath);
    // My generated SVG-based WebP images were usually under 4KB (like 1.5 - 3.5 KB)
    // The real images (downloaded from CAVA) are typically larger (7KB - 20KB).
    // Let's also check if they are the specific real ones we know.
    const realImages = [
      'chicken-rice-bowl.webp',
      'greek-salad-bowl.webp',
      'harissa-avocado-bowl.webp',
      'spicy-chicken-avocado-pita.webp',
      'spicy-lamb-avocado-bowl.webp',
      'strawberry-steak-salad.webp',
      'steak-feta-pita.webp',
      'default.webp'
    ];
    
    if (!realImages.includes(file)) {
      fs.unlinkSync(filePath);
      deleted++;
    }
  }
}

console.log('Deleted', deleted, 'generated images.');
