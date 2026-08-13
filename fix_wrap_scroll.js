const fs = require('fs');
const path = 'src/app/profile/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Revert .slice(0, 1).map back to .map
content = content.replace(/\.slice\(0, 1\)\.map/g, '.map');

// 2. Fix the maxHeight of the containers to exactly fit one card.
// The card padding is 20px, icon is 56px, gap doesn't matter for first card.
// So 20 + 56 + 20 = 96px + border 2px = 98px. Let's use 98px.
content = content.replace(/maxHeight: "150px"/g, 'maxHeight: "98px"');

// 3. Prevent the subtitle span from wrapping.
// We'll replace the style for the subtitle span to include whiteSpace: nowrap, overflow: hidden, textOverflow: ellipsis
// The subtitle span has this specific style:
const subtitleRegex = /style=\{\{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#71717A", letterSpacing: "0\.3px" \}\}/g;
const newStyle = 'style={{ fontFamily: "\'Plus Jakarta Sans\', sans-serif", fontWeight: 500, fontSize: "12px", color: "#71717A", letterSpacing: "0.3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}';
content = content.replace(subtitleRegex, newStyle);

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed wrapping and scrolling');
