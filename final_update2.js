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
content = content.replace(/\n\s*<div onClick=\{[^\}]+\} style=\{\{\s*width:\s*"52px",\s*height:\s*"52px",\s*borderRadius:\s*"50%",\s*overflow:\s*"hidden",\s*cursor:\s*"pointer"\s*\}\}>\s*\n\s*<img src="\/assets\/home\/HeroScreen\/person\.svg"[^\>]+>\s*\n\s*<\/div>/g, '');

// 4. Update the subtitle text
const oldTextStart = `<p style={{ margin: 0, maxWidth: "1200px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "24px", lineHeight: "32px", textAlign: "center", color: "#FFFFFF" }}>`;
const oldTextEnd = `</p>`;
const oldTextIndex = content.indexOf(oldTextStart);

if (oldTextIndex !== -1) {
    const endIdx = content.indexOf(oldTextEnd, oldTextIndex);
    if (endIdx !== -1) {
        const newText = `<p style={{ margin: 0, maxWidth: "996px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "24px", lineHeight: "32px", textAlign: "center", color: "#FFFFFF" }}>
              Compare your assets side by side across legal status, agronomy, infrastructure, performance, and investment value to make informed decisions with confidence.
            </p>`;
        content = content.substring(0, oldTextIndex) + newText + content.substring(endIdx + 4);
    }
}

fs.writeFileSync('src/app/home/compareassets/page.tsx', content);
