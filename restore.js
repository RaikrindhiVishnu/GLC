const fs = require('fs');
let content = fs.readFileSync('src/app/home/compareassets/page.tsx', 'utf8');

// Restore background to Unlock and Notification buttons
content = content.replace(
    /background: "transparent", borderRadius: "50%", border: "none", cursor: "pointer"/g,
    'background: "rgba(255,255,255,0.1)", boxShadow: "0px 10px 7.5px rgba(0,0,0,0.05), inset 3.76px 5px 2.5px -3.76px rgba(255,255,255,0.55)", backdropFilter: "blur(62px)", WebkitBackdropFilter: "blur(62px)", borderRadius: "50%", border: "none", cursor: "pointer"'
);

fs.writeFileSync('src/app/home/compareassets/page.tsx', content);
