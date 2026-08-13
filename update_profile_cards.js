const fs = require('fs');
const path = 'src/app/profile/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Update section titles (Desktop & Mobile)
content = content.replace(/fontSize: "10px", letterSpacing: "1\.2px", color: "#71717A"/g, 'fontSize: "12px", letterSpacing: "1.2px", color: "#43474E"');

// Update Card Container Style (Desktop)
const oldCardStyleDesktop = /style=\{\{\s*cursor: "pointer",\s*width: "100%",\s*background: "#FFFFFF",\s*borderRadius: "32px",\s*padding: "20px 24px",\s*display: "flex",\s*alignItems: "center",\s*justifyContent: "space-between",\s*boxShadow: "0px 4px 15px rgba\(0,0,0,0\.02\)"\s*\}\}/g;
const newCardStyleDesktop = `style={{ cursor: "pointer", width: "100%", background: "linear-gradient(107.62deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)", border: "1px solid rgba(255, 255, 255, 0.8)", boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.05)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderRadius: "40px", padding: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}`;
content = content.replace(oldCardStyleDesktop, newCardStyleDesktop);

// Update Card Container Style (Mobile)
const oldCardStyleMobile = /style=\{\{\s*cursor: "pointer",\s*width: "100%",\s*background: "#FFFFFF",\s*borderRadius: "24px",\s*padding: "16px",\s*display: "flex",\s*alignItems: "center",\s*justifyContent: "space-between",\s*boxShadow: "0px 4px 15px rgba\(0,0,0,0\.02\)"\s*\}\}/g;
const newCardStyleMobile = `style={{ cursor: "pointer", width: "100%", background: "linear-gradient(107.62deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)", border: "1px solid rgba(255, 255, 255, 0.8)", boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.05)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderRadius: "24px", padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}`;
content = content.replace(oldCardStyleMobile, newCardStyleMobile);

// Update Icon Container Style (Desktop & Mobile)
// Note: old style has borderRadius: "50%" and background: "#FFFFFF"
const oldIconContainerStyle = /style=\{\{\s*width: "42px",\s*height: "42px",\s*background: "#FFFFFF",\s*border: "1px solid rgba\(0,0,0,0\.04\)",\s*borderRadius: "50%",\s*display: "flex",\s*alignItems: "center",\s*justifyContent: "center",\s*boxShadow: "0px 2px 5px rgba\(0,0,0,0\.02\)"\s*\}\}/g;
const newIconContainerStyle = `style={{ width: "54px", height: "56px", background: "rgba(255, 255, 255, 0.6)", border: "1px solid #FFFFFF", boxShadow: "inset 0px 2px 4px 1px #FFFFFF", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}`;
content = content.replace(oldIconContainerStyle, newIconContainerStyle);

// Update Text Title 
const oldTitleStyle = /fontWeight: 800,\s*fontSize: "15px",\s*color: "#18181B",\s*letterSpacing: "-0\.2px"/g;
const newTitleStyle = `fontWeight: 800, fontSize: "18px", color: "#18181B", letterSpacing: "-0.45px"`;
content = content.replace(oldTitleStyle, newTitleStyle);

// Update Text Subtitle
const oldSubtitleStyle = /fontWeight: 500,\s*fontSize: "10px",\s*color: "#71717A",\s*letterSpacing: "0\.2px"/g;
const newSubtitleStyle = `fontWeight: 500, fontSize: "12px", color: "#71717A", letterSpacing: "0.3px"`;
content = content.replace(oldSubtitleStyle, newSubtitleStyle);

fs.writeFileSync(path, content, 'utf8');
console.log('Updated profile page successfully!');
