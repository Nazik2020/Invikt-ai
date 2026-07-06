const fs = require('fs');

const readResources = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  let youtubeCount = 0;
  let otherCount = 0;
  
  const matches = content.match(/type:\s*['"]([^'"]+)['"]/g);
  if (matches) {
    matches.forEach(m => {
      if (m.toLowerCase().includes('youtube')) youtubeCount++;
      else otherCount++;
    });
  }
  return { youtubeCount, otherCount };
};

console.log('AI Data Scientist:', readResources('d:/DS_AI_ML Projects/Skilio ai/invikt ai -webapp/frontend/src/data/roadmaps/ai-data-scientist/stages.js'));
console.log('AI Engineer:', readResources('d:/DS_AI_ML Projects/Skilio ai/invikt ai -webapp/frontend/src/data/roadmaps/ai-engineer/stages.js'));
console.log('Cyber Security:', readResources('d:/DS_AI_ML Projects/Skilio ai/invikt ai -webapp/frontend/src/data/roadmaps/cyber-security/stages.js'));
