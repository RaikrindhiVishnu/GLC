const fs = require('fs');
let content = fs.readFileSync('src/app/home/compareassets/page.tsx', 'utf8');

// 1. Remove AI sparkle button
const sparkleStart = content.indexOf('{/* Sparkle button */}');
if (sparkleStart !== -1) {
    const sparkleEnd = content.indexOf('</section>', sparkleStart);
    if (sparkleEnd !== -1) {
        content = content.substring(0, sparkleStart) + content.substring(sparkleEnd);
    }
}

// 2. Decrease card sizes
content = content.replace(/width: "486\.4px", height: "108px"/g, 'width: "420px", height: "84px"');
content = content.replace(/padding: "24px 32px"/g, 'padding: "16px 24px"');
// Fix the container heights
content = content.replace(/position: "relative", height: "108px" \}\}>/g, 'position: "relative", height: "84px" }}>');

// 3. Remove Profile button
// Using regex to match it precisely
content = content.replace(/\n\s*<div onClick=\{[^\}]+\} style=\{\{\s*width:\s*"52px",\s*height:\s*"52px",\s*borderRadius:\s*"50%",\s*overflow:\s*"hidden",\s*cursor:\s*"pointer"\s*\}\}>\s*\n\s*<img src="\/assets\/home\/HeroScreen\/person\.svg"[^\>]+>\s*\n\s*<\/div>/g, '');

fs.writeFileSync('src/app/home/compareassets/page.tsx', content);
