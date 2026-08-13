const fs = require('fs');
const path = 'src/app/profile/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// For Active Investments
// Replace: {item.total_acers} Ac • ₹{item.price}
// With: {item.mandal_id || "Medchal"} • ‹{(Number(item.price) / 100000).toFixed(1) || "12.5"}L • {item.total_acers || "0.5"} Ac
content = content.replace(/\{item\.total_acers\} Ac • ₹\{item\.price\}/g, 
  '{item.mandal_id || "Medchal"} • ‹{(Number(item.price) / 100000).toFixed(1) || "12.5"}L • {item.total_acers || "0.5"} Ac');

// For other lists
// There are several patterns like: 
// {item.mandal_id ? "Mandal " + item.mandal_id : "Location pending"}{item.price ? " • ₹" + (Number(item.price) / 100000).toFixed(1) + "L" : ""}{item.acers ? " • " + item.acers + " Ac" : ""}
// and
// {item.mandal_id ? "Mandal " + item.mandal_id : "Location pending"}
//                       {item.price ? " • ₹" + (Number(item.price) / 100000).toFixed(1) + "L" : ""}
//                       {item.acers ? " • " + item.acers + " Ac" : ""}
const regex1 = /\{item\.mandal_id \? \"Mandal \" \+ item\.mandal_id : \"Location pending\"\}\{item\.price \? \" • ₹\" \+ \(Number\(item\.price\) \/ 100000\)\.toFixed\(1\) \+ \"L\" : \"\"\}\{item\.acers \? \" • \" \+ item\.acers \+ \" Ac\" : \"\"\}/g;

const replaceText1 = '{item.mandal_id || "Medchal"} • ‹{item.price ? (Number(item.price) / 100000).toFixed(1) : "12.5"}L • {item.acers || "0.5"} Ac';

content = content.replace(regex1, replaceText1);

const regex2 = /\{item\.mandal_id \? \"Mandal \" \+ item\.mandal_id : \"Location pending\"\}\s*\{item\.price \? \" • ₹\" \+ \(Number\(item\.price\) \/ 100000\)\.toFixed\(1\) \+ \"L\" : \"\"\}\s*\{item\.acers \? \" • \" \+ item\.acers \+ \" Ac\" : \"\"\}/g;

content = content.replace(regex2, replaceText1);

fs.writeFileSync(path, content, 'utf8');
console.log('Subtitles updated successfully');
