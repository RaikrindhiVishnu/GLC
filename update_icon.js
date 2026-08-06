const fs = require('fs');
let content = fs.readFileSync('src/app/home/compareassets/page.tsx', 'utf8');

// Replace "Background (26).svg" with "emergency_icon.svg"
content = content.replace(/"Background \(26\)\.svg"/g, '"emergency_icon.svg"');

fs.writeFileSync('src/app/home/compareassets/page.tsx', content);
