const fs = require('fs'); 
const lines = fs.readFileSync('C:/Users/DELL/.gemini/antigravity-ide/brain/73eeb44a-9301-49e9-a1c2-ef6ff3e0315c/.system_generated/logs/transcript_full.jsonl', 'utf-8').split('\n'); 
for (const l of lines) { 
  if (l.includes('"step_index":727')) { 
    fs.writeFileSync('figma.css', JSON.parse(l).content); 
    break; 
  } 
}
