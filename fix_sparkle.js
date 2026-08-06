const fs = require('fs');
let content = fs.readFileSync('src/app/home/compareassets/page.tsx', 'utf8');

// 1. Remove the injected sparkle button
const sparkleStart = content.indexOf('{/* Sparkle button */}');
if (sparkleStart !== -1) {
    const sparkleEnd = content.indexOf('</div>', sparkleStart);
    if (sparkleEnd !== -1) {
        content = content.substring(0, sparkleStart) + content.substring(sparkleEnd + 6);
    }
}

// 2. Add id="hero-section" to the hero section
const sectionStart = `<section style={{ position: "relative", width: "100%", height: "450px", backgroundImage: "url('/assets/compareassets/comparebg.png')"`;
const sectionReplace = `<section id="hero-section" style={{ position: "relative", width: "100%", height: "450px", backgroundImage: "url('/assets/compareassets/comparebg.png')"`;
content = content.replace(sectionStart, sectionReplace);

fs.writeFileSync('src/app/home/compareassets/page.tsx', content);
