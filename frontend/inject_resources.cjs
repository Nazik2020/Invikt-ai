const fs = require('fs');
const path = 'd:/DS_AI_ML Projects/Skilio ai/invikt ai -webapp/frontend/src/data/roadmaps/cyber-security/stages.js';

let content = fs.readFileSync(path, 'utf8');

// Replace empty resources with a dynamic youtube search link based on the skill name
content = content.replace(/resources: \[\]/g, (match, offset, string) => {
  // We need to extract the 'name' of the skill on this line
  const precedingText = string.substring(0, offset);
  const nameMatch = precedingText.match(/name: \"([^\"]+)\"/g);
  let skillName = 'Cyber Security';
  if (nameMatch && nameMatch.length > 0) {
    const lastMatch = nameMatch[nameMatch.length - 1];
    skillName = lastMatch.replace('name: \"', '').replace('\"', '');
  }
  const searchQuery = encodeURIComponent(skillName + ' tutorial cyber security');
  
  return `resources: [ { name: 'Learn "${skillName}"', url: 'https://www.youtube.com/results?search_query=${searchQuery}', type: 'YouTube' } ]`;
});

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully injected dynamic resources into stages.js!');
