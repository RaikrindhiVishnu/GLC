const fs = require('fs');
let content = fs.readFileSync('src/app/home/compareassets/page.tsx', 'utf8');

// 1. Remove background from two CTAs
content = content.replace(
    /background: "rgba\(255,255,255,0\.1\)", boxShadow: "0px 10px 7\.5px rgba\(0,0,0,0\.05\), inset 3\.76px 5px 2\.5px -3\.76px rgba\(255,255,255,0\.55\)", backdropFilter: "blur\(62px\)", WebkitBackdropFilter: "blur\(62px\)", /g,
    'background: "transparent", '
);

// 2. Remove AI sparkle button
const sparkleStart = content.indexOf('{/* Sparkle button */}');
if (sparkleStart !== -1) {
    const sparkleEnd = content.indexOf('</section>', sparkleStart);
    if (sparkleEnd !== -1) {
        content = content.substring(0, sparkleStart) + content.substring(sparkleEnd);
    }
}

// 3. Decrease card sizes
content = content.replace(/width: "486\.4px", height: "108px"/g, 'width: "420px", height: "84px"');
content = content.replace(/padding: "24px 32px"/g, 'padding: "16px 24px"');
// Fix the container heights
content = content.replace(/position: "relative", height: "108px" \}\}>/g, 'position: "relative", height: "84px" }}>');

fs.writeFileSync('src/app/home/compareassets/page.tsx', content);
