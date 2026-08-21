const fs = require('fs');

const files = [
  "c:/Users/DELL/OneDrive/Desktop/GLC/src/app/search/SuggestedMatchesRow.tsx",
  "c:/Users/DELL/OneDrive/Desktop/GLC/src/app/search/MainListingsGrid.tsx",
  "c:/Users/DELL/OneDrive/Desktop/GLC/src/app/recommended/RecommendedCard.tsx",
  "c:/Users/DELL/OneDrive/Desktop/GLC/src/app/profile/page.tsx",
  "c:/Users/DELL/OneDrive/Desktop/GLC/src/app/profile/savedfarmlands/page.tsx",
  "c:/Users/DELL/OneDrive/Desktop/GLC/src/app/home/trendingfarmlands/TrendingCard.tsx"
];

const oldPath = 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z';
const newPath = 'M6.5 1C3.4625 1 1 3.4625 1 6.5C1 12 7.5 17 11 18.163C14.5 17 21 12 21 6.5C21 3.4625 18.5375 1 15.5 1C13.64 1 11.995 1.9235 11 3.337C10.4928 2.61469 9.81897 2.0252 9.03568 1.61841C8.25238 1.21162 7.38263 0.999502 6.5 1Z';

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace viewBox="0 0 24 24" with viewBox="0 0 22 20"
    // Only replacing it if it's within an svg tag that has the oldPath (to avoid changing other svgs)
    
    // We can do a string split on the old path, then find the nearest viewBox before it
    if (content.includes(oldPath)) {
        let newContent = content;
        // Replace path
        newContent = newContent.split(oldPath).join(newPath);
        
        // Let's replace viewBox by finding <svg ... > blocks that contain the old path
        // A simpler way: we know it's the heart icon, it has viewBox="0 0 24 24"
        // Let's just find and replace all instances of: viewBox="0 0 24 24" ... fill={...} ... stroke="#2780C4" ... <path d="NEW_PATH" ...
        // Since we already replaced the path string, let's just use regex to fix the viewBox for the heart svgs.
        // It's easier to just do a global replace of the whole SVG block if it's standard, but it varies slightly.
        // Instead, let's write a targeted regex:
        
        newContent = newContent.replace(/viewBox="0 0 24 24"([^>]*stroke="#2780C4"[^>]*>)/g, 'viewBox="0 0 22 20"$1');
        
        fs.writeFileSync(file, newContent, 'utf8');
        console.log("Updated", file);
    }
  }
});
