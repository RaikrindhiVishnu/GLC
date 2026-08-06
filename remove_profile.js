const fs = require('fs');
let content = fs.readFileSync('src/app/home/compareassets/page.tsx', 'utf8');

// Remove the profile picture div
const profilePicStr = `              <div onClick={() => router.push("/profile")} style={{ width: "52px", height: "52px", borderRadius: "50%", overflow: "hidden", cursor: "pointer" }}>
                <img src="/assets/home/HeroScreen/person.svg" alt="User" style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.5)" }} />
              </div>`;

content = content.replace(profilePicStr, '');

fs.writeFileSync('src/app/home/compareassets/page.tsx', content);
