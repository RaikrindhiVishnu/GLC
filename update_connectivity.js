const fs = require('fs');
let content = fs.readFileSync('src/app/home/compareassets/page.tsx', 'utf8');

// Use a very flexible regex to match the CONNECTIVITY array
content = content.replace(/const CONNECTIVITY = \[\s*\{\s*label:\s*"NEAREST RAILWAY"[^\]]+\];/g, `const CONNECTIVITY = [
      { 
        label: "NEAREST RAILWAY", labelA: "NEAREST", labelB: "NEAREST", icon: "nearest.svg", 
        a: data1.railway?.distance_id ? \`Station (\${data1.railway.distance_id}km)\` : "Zaheerabad (15km)", 
        b: data2.railway?.distance_id ? \`Station (\${data2.railway.distance_id}km)\` : "Vijayawada (120m))" 
      },
      { 
        label: "NEAREST AIRPORT", labelA: "NEAREST", labelB: "NEAREST", icon: "rgia.svg", 
        a: data1.airport?.distance_id ? \`Airport (\${data1.airport.distance_id}km)\` : "RGIA (90m)", 
        b: data2.airport?.distance_id ? \`Airport (\${data2.airport.distance_id}km)\` : "Canal Access" 
      },
      { 
        label: "NEAREST HOSPITAL", labelA: "NEAREST", labelB: "LAST MILE", icon: "Background (26).svg", 
        a: data1.hospital?.distance_id ? \`Hospital (\${data1.hospital.distance_id}km)\` : "Apollo (10km)", 
        b: data2.hospital?.distance_id ? \`Hospital (\${data2.hospital.distance_id}km)\` : "Emergency (8km)" 
      },
    ];`);

// Now update the render mapping for CONNECTIVITY
const renderSearchRegex = /\{CONNECTIVITY\.map\(\(row\) => \([\s\S]*?\{row\.label\}[\s\S]*?\{row\.a\}[\s\S]*?\{row\.label\}[\s\S]*?\{row\.b\}[\s\S]*?<\/div>\s*\)\)\}/g;

const renderReplace = `{CONNECTIVITY.map((row) => (
                <div key={row.label} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", position: "relative", height: "84px" }}>
                  <div style={{ width: "420px", height: "84px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "24px", padding: "16px 24px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", boxSizing: "border-box" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", color: "#2780C4", textTransform: "uppercase" }}>{row.labelA || row.label}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", marginTop: "4px" }}>{row.a}</span>
                  </div>
                  <div style={{ width: "56px", height: "56px", borderRadius: "9999px", background: "#0F2F4C", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 10px 15px -3px rgba(9,20,38,0.2)", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                    <Image src={\`/assets/compareassets/\${row.icon}\`} alt={row.label} width={20} height={20} />
                  </div>
                  <div style={{ width: "420px", height: "84px", background: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)", borderRadius: "24px", padding: "16px 24px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", color: "#2780C4", textTransform: "uppercase" }}>{row.labelB || row.label}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0F2F4C", marginTop: "4px" }}>{row.b}</span>
                  </div>
                </div>
              ))}`;

content = content.replace(renderSearchRegex, renderReplace);
fs.writeFileSync('src/app/home/compareassets/page.tsx', content);
