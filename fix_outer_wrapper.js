const fs = require('fs');
const path = 'src/app/profile/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the wrapper div so it also truncates properly
const wrapperRegex = /<div style=\{\{ display: "flex", alignItems: "center", gap: "16px" \}\}>/g;
const newWrapper = '<div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0, flex: 1 }}>';
content = content.replace(wrapperRegex, newWrapper);

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed outer wrapper flex layout');
