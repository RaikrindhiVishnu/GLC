const fs = require('fs');
const path = 'src/app/profile/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// The text container currently looks like:
// <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
// Let's replace it with:
// <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 }}>
const textContainerRegex = /<div style=\{\{ display: "flex", flexDirection: "column", gap: "2px" \}\}>/g;
const newTextContainer = '<div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 }}>';
content = content.replace(textContainerRegex, newTextContainer);

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed flex layout for text truncation');
