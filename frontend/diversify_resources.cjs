const fs = require('fs');

const path = 'd:/DS_AI_ML Projects/Skilio ai/invikt ai -webapp/frontend/src/data/roadmaps/cyber-security/stages.js';
let content = fs.readFileSync(path, 'utf8');

// Replace all youtube resources with diverse ones based on keywords
content = content.replace(/\{ name: 'Learn "([^"]+)"', url: '([^']+)', type: 'YouTube' \}/g, (match, skillName, oldUrl) => {
  let newType = 'YouTube';
  let newUrl = oldUrl;
  
  const lowerName = skillName.toLowerCase();
  
  // Rules for diversification
  if (lowerName.includes('ctf') || lowerName.includes('hackthebox') || lowerName.includes('certifications') || lowerName.includes('suites')) {
    newType = 'Platform';
    newUrl = `https://www.google.com/search?q=${encodeURIComponent(skillName + ' platform')}`;
  } else if (lowerName.includes('model') || lowerName.includes('triad') || lowerName.includes('framework') || lowerName.includes('concepts') || lowerName.includes('understanding') || lowerName.includes('differences') || lowerName.includes('types')) {
    newType = 'Article';
    newUrl = `https://www.google.com/search?q=${encodeURIComponent('explain ' + skillName)}`;
  } else if (lowerName.includes('commands') || lowerName.includes('tools') || lowerName.includes('utilities') || lowerName.includes('protocols') || lowerName.includes('standards')) {
    newType = 'Docs';
    newUrl = `https://www.google.com/search?q=${encodeURIComponent(skillName + ' documentation')}`;
  } else {
    // Keep 40% as YouTube, make the rest Articles or Tutorial
    const rand = Math.random();
    if (rand < 0.4) {
      newType = 'YouTube';
    } else if (rand < 0.7) {
      newType = 'Tutorial';
      newUrl = `https://www.google.com/search?q=${encodeURIComponent(skillName + ' tutorial step by step')}`;
    } else {
      newType = 'Article';
      newUrl = `https://www.google.com/search?q=${encodeURIComponent('what is ' + skillName)}`;
    }
  }

  return `{ name: '${skillName} Guide', url: '${newUrl}', type: '${newType}' }`;
});

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully diversified resources in stages.js!');
