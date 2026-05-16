const fs = require('fs');
const countryCodes = require('country-codes-list');

const myCountryCodesObject = countryCodes.customList('countryCode', '{countryNameEn} ({countryCode})|{countryCallingCode}');

let out = `import React from 'react';\n\nexport const COUNTRY_OPTIONS = [\n`;

for (const [code, val] of Object.entries(myCountryCodesObject)) {
  const parts = val.split('|');
  const name = parts[0];
  const dialCode = parts[1];
  const lowerCode = code.toLowerCase();
  
  // Clean up the output string to avoid syntax issues in tsx
  out += `  {
    name: "${name}",
    code: "+${dialCode}",
    flagSvg: (
      <img
        src="https://flagcdn.com/w20/${lowerCode}.png"
        srcSet="https://flagcdn.com/w40/${lowerCode}.png 2x"
        width="22"
        height="15"
        alt="${name}"
        style={{ flexShrink: 0, borderRadius: '2px', display: 'block', objectFit: 'cover' }}
      />
    ),
  },\n`;
}

out += `];\n`;
fs.writeFileSync('src/app/login/countries.tsx', out);
