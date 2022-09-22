const fs = require('fs');
const path = require('path');

let out = {};

for (let name of fs.readdirSync('./api-cache')) {
  try {
    const skillInfo = JSON.parse(fs.readFileSync(path.join('api-cache', name)));
    if (!skillInfo.name || !skillInfo.professions) {
      continue;
    }
    // skillInfo.name.replace(/ /g, '_');
    let key = skillInfo.name; // .toUpperCase();
    if (out.hasOwnProperty(key)) {
      console.log('dupe', key);
    }
    out[key] = skillInfo.id;
  } catch (e) {
    continue;
  }
}

console.log(JSON.stringify(out));
